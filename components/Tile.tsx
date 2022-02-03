import React, { FC } from 'react'
import {
    StyleSheet,
    View,
    Text,
    useWindowDimensions,
} from 'react-native';

interface Prop {
    color: string,
    value: string
}

const Tile: FC<Prop> = ({ color, value }) => {
    const width: number = (useWindowDimensions().width - 100) / 3;

    return (
        <View style={[styles.container, { backgroundColor: color, width, height: width }]}>
            <Text style={styles.content}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    },
    content: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#1284ff'
    }
})

export default Tile;