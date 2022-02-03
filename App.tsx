import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import Header from './components/Header';
import Player from './components/Player';
import Tile from './components/Tile';
import { defaultBoard, defaultPlayer, mapWinner } from './constants';

interface checkWinnerFunProp {
  win: boolean,
  indices: number[]
}

const App = () => {
  const [player, setPlayer] = useState<string>(defaultPlayer);
  const [board, setBoard] = useState<string[]>(defaultBoard);
  const [tilesWon, setTilesWon] = useState<number[]>([]);

  const checkWinner = (value: string, index: number, board: string[]): checkWinnerFunProp => {
    const toCheck: number[][] = mapWinner[index];
    for (const indices of toCheck) {
      const win = indices.every(idx => value === board[idx]);
      if (win) {
        return { win, indices };
      }
    }
    return { win: false, indices: [] };
  }

  const markTile = (index: number): void => {
    const newBoard: string[] = board.slice(0);
    newBoard[index] = player;

    setBoard(newBoard);

    const { win, indices } = checkWinner(player, index, newBoard);

    if (win) {
      setTilesWon([index, ...indices]);
    }
    else {
      if (player === 'X') {
        setPlayer('O');
      }
      else {
        setPlayer('X');
      }
    }

  }

  const reset = () => {
    setPlayer(defaultPlayer);
    setBoard(defaultBoard)
    setTilesWon([]);
  }

  return (
    <ScrollView>
      <Header />
      <Player player={!!tilesWon.length ? `${player} won!` : player} />
      <View style={styles.canvas}>
        <TouchableOpacity onPress={() => markTile(0)} disabled={!!board[0] || !!tilesWon.length}><Tile color={tilesWon.indexOf(0) > -1 ? '#212121' : '#dedede'} value={board[0]} /></TouchableOpacity>
        <TouchableOpacity onPress={() => markTile(1)} disabled={!!board[1] || !!tilesWon.length}><Tile color={tilesWon.indexOf(1) > -1 ? '#212121' : '#dedede'} value={board[1]} /></TouchableOpacity>
        <TouchableOpacity onPress={() => markTile(2)} disabled={!!board[2] || !!tilesWon.length}><Tile color={tilesWon.indexOf(2) > -1 ? '#212121' : '#dedede'} value={board[2]} /></TouchableOpacity>
      </View>
      <View style={styles.canvas}>
        <TouchableOpacity onPress={() => markTile(3)} disabled={!!board[3] || !!tilesWon.length}><Tile color={tilesWon.indexOf(3) > -1 ? '#212121' : '#dedede'} value={board[3]} /></TouchableOpacity>
        <TouchableOpacity onPress={() => markTile(4)} disabled={!!board[4] || !!tilesWon.length}><Tile color={tilesWon.indexOf(4) > -1 ? '#212121' : '#dedede'} value={board[4]} /></TouchableOpacity>
        <TouchableOpacity onPress={() => markTile(5)} disabled={!!board[5] || !!tilesWon.length}><Tile color={tilesWon.indexOf(5) > -1 ? '#212121' : '#dedede'} value={board[5]} /></TouchableOpacity>
      </View>
      <View style={styles.canvas}>
        <TouchableOpacity onPress={() => markTile(6)} disabled={!!board[6] || !!tilesWon.length}><Tile color={tilesWon.indexOf(6) > -1 ? '#212121' : '#dedede'} value={board[6]} /></TouchableOpacity>
        <TouchableOpacity onPress={() => markTile(7)} disabled={!!board[7] || !!tilesWon.length}><Tile color={tilesWon.indexOf(7) > -1 ? '#212121' : '#dedede'} value={board[7]} /></TouchableOpacity>
        <TouchableOpacity onPress={() => markTile(8)} disabled={!!board[8] || !!tilesWon.length}><Tile color={tilesWon.indexOf(8) > -1 ? '#212121' : '#dedede'} value={board[8]} /></TouchableOpacity>
      </View>
      <TouchableOpacity onPress={reset}>
        <View style={styles.resetContainer}>
          <Text style={styles.resetText}>Reset Game</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  canvas: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  resetContainer: {
    marginVertical: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  resetText: {
    fontSize: 20,
    color: '#1284ff'
  }
});

export default App;
