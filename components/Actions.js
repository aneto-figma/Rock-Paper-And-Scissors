import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

const Actions = ({play, canPlay}) => {
  return (
    <View style={styles.actions}>
      <TouchableOpacity     // Rock
        disabled={!canPlay}
        activeOpacity={0.8}
        style={[styles.actionButton, styles.rock]}
        onPress={() => play(1)}
      >
          <FontAwesome5 name={'hand-rock'} size={34} color='#FFFFFF' />
      </TouchableOpacity>

      <TouchableOpacity         // paper
        disabled={!canPlay}
        activeOpacity={0.8}
        style={[styles.actionButton, styles.paper]}
        onPress={() => play(2)}
      >
        <FontAwesome5 name='hand-paper' size={34} color='#FFFFFF' />
      </TouchableOpacity>

      <TouchableOpacity         // scissors
        disabled={!canPlay}
        activeOpacity={0.8}
        style={[styles.actionButton, styles.scissors]}
        onPress={() => play(3)}
      >
        <FontAwesome5
            name='hand-scissors'
            size={34}
            color='#FFFFFF'
            style={{ transform: [{rotate: '67deg'}]}}
        />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    actions: {
        height:120,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#0E0B1E',
    },
    actionButton: {
        width:76,
        height: 76,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:38,
        shadowOpacity: 0.55,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 6 },
        elevation: 8,
    },
    rock: {
        backgroundColor:'#FF6B6B',
        shadowColor:'#FF6B6B',
    },
    paper: {
        backgroundColor:'#4ECDC4',
        shadowColor:'#4ECDC4',
    },
    scissors: {
        backgroundColor:'#A78BFA',
        shadowColor:'#A78BFA',
    }
});

export default Actions