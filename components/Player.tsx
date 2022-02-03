import React, { FC } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

interface Prop {
    player: string
}

const Player: FC<Prop> = ({ player }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Player: {player}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20,
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
});

export default Player;

