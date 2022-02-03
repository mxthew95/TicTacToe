import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import Player from './components/Player';
import Tile from './components/Tile';
import { defaultBoard, defaultPlayer } from './constants';

const App = () => {
  const [player, setPlayer] = useState<string>(defaultPlayer);
  const [board, setBoard] = useState<string[]>(defaultBoard);

  return (
    <View>
      <Header />
      <Player player={player}/>
      <View style={styles.canvas}>
        <TouchableOpacity><Tile value={player}/></TouchableOpacity>
        <TouchableOpacity><Tile value={board[1]}/></TouchableOpacity>
        <TouchableOpacity><Tile value={board[2]}/></TouchableOpacity>
      </View>
      <View style={styles.canvas}>
        <TouchableOpacity><Tile value={board[3]}/></TouchableOpacity>
        <TouchableOpacity><Tile value={board[4]}/></TouchableOpacity>
        <TouchableOpacity><Tile value={board[5]}/></TouchableOpacity>
      </View>
      <View style={styles.canvas}>
        <TouchableOpacity><Tile value={board[6]}/></TouchableOpacity>
        <TouchableOpacity><Tile value={board[7]}/></TouchableOpacity>
        <TouchableOpacity><Tile value={board[8]}/></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  canvas: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default App;
