import React, { FC } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

const Header: FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bfbfbf',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
});

export default Header;

