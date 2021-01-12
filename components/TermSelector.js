import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

function TermButton({term, isActive, setSelectedTerm}) {
  return (
    <TouchableOpacity style={styles[isActive ? 'termButtonActive' : 'termButton']} onPress={ () => setSelectedTerm(term) }>
      <Text style={styles.termText}>{term}</Text>
    </TouchableOpacity>
  );
}

function TermSelector({terms, selectedTerm, setSelectedTerm}) {
  return (
    <View style={styles.termSelector}>
      {
        terms.map(term => <TermButton key={term} term={term} isActive={term === selectedTerm} setSelectedTerm={setSelectedTerm}/>)
      }
    </View>
  );
}

const termButtonBase = {
  flex: 1,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  height: 40,
  padding: 10,
  minWidth: 90,
  maxWidth: 90,
};

const styles = StyleSheet.create({
  termButton: {
    ...termButtonBase,
    backgroundColor: '#4f9f64'
  },
  termButtonActive: {
    ...termButtonBase,
    backgroundColor: '#105f25'
  },
  termText: {
    color: '#fff',
    fontSize: 15
  }, 
  termSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350
  }
});

export default TermSelector;