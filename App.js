import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

import ScheduleScreen from './screens/ScheduleScreen';
import CourseDetailScreen from './screens/CourseDetailsScreen';
import UserContext from './UserContext';
import CourseEditScreen from './screens/CourseEditScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useEffect } from 'react/cjs/react.development';
import { firebase } from './utils/firebase';

const Stack = createStackNavigator();

function App() {
  const [user, setUser] = useState({ role: 'admin' });
  const [auth, setAuth] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);

  useEffect(() => {
    if (auth && auth.uid) {
      const db = firebase.database().ref('users').child(auth.uid);
      const handleData = (snap) => {
        setUser({uid: auth.uid, ...snap.val()});
      }

      db.on('value', handleData, error => alert(error));
      return () => { db.off('value', handleData); };
    } 
    else {
      setUser(null);
    }
  }, [auth])

  const SignInButton = ({ navigation, user }) => {
    return user && user.uid 
      ? <Button title="Logout" color="#448aff" onPress={() => firebase.auth().signOut()} />
      : <Button title="SignIn" color="#448aff" onPress={() => navigation.navigate('RegisterScreen')} />;
  }

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ScheduleScreen"
            component={ScheduleScreen}
            options={({ navigation }) => {
              return {
                title: "Schedule",
                headerRight: () => (
                  <SignInButton navigation={navigation} user={user} />
                )
              }  
            }}
          />
          <Stack.Screen name="CourseDetailScreen"
            component={CourseDetailScreen}
            options={{ title: 'Course detail' }} 
          />
          <Stack.Screen name="CourseEditScreen"
            component={CourseEditScreen}
            options={{ title: 'Course Editor' }}
          />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}


export default App;