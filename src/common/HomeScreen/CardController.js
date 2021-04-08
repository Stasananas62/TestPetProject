import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import {cardTypes} from "../../core/constants";

const CardController = ({ config, onChangeConfig }) => {

    return (
        <View style={styles.cardContainer}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    onPress={() => onChangeConfig(cardTypes.categories)}
                    style={[styles.fileButton, {backgroundColor: '#B65EBA'}]}>
                    <Text style={styles.text}>Категорії</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onChangeConfig(cardTypes.dashBoard)}
                    style={[styles.fileButton, {backgroundColor: '#2E8DE1'}]}>
                    <Text style={styles.text}>ДашБорд</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onChangeConfig(cardTypes.filters)}
                    style={[styles.fileButton, {backgroundColor: '#8A64EB'}]}>
                    <Text style={styles.text}>Фільтри</Text>
                </TouchableOpacity>
            </View>
            {console.log(config.backgroundColor)}
            <View style={[styles.actionsContainer, {backgroundColor: config.backgroundColor}]}>
                <Text>Future content</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    actionsContainer: {
        width: '100%',
        height: '93%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        bottom: 0,
    },
    fileButton: {
        width: '33.3333%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    buttonsContainer: {
        width: '100%',
        height: '8%',
        flexDirection: 'row',
    },
    cardContainer: {
        width: '100%',
        height: '70%',
    },
    text: {
        color: '#fff',
    },
});

export default CardController;
