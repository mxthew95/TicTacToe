import React, { FC } from 'react'
import {
    StyleSheet,
    View,
    Text,
    useWindowDimensions
} from 'react-native';

interface Prop {
    value: string
}

const Tile: FC<Prop> = ({ value }) => {
    const width: number = (useWindowDimensions().width - 100) / 3;
    return (
        <View style={[styles.container, { width, height: width }]}>
            <Text style={styles.content}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent: 'center',
        margin: 2,
        elevation: 2,
    },
    content: {
        fontSize: 34,
        fontWeight: 'bold',
    }
})

export default Tile;