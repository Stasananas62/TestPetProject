import React, { useCallback, useState }  from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import connect from "react-redux/lib/connect/connect";
import {transactionsActions} from "../../store/redux/transactions";

const HomeScreen = ({navigation, transactions, dispatch}) => {
    const [cardColor, setCardColor] = useState('#B65EBA')

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        onPress={()=> setCardColor('#B65EBA')}
                        style={[styles.fileButton, {backgroundColor: '#B65EBA'}]}>
                        <Text style={styles.text}>Категорії</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>setCardColor('#2E8DE1')}
                        style={[styles.fileButton, {backgroundColor: '#2E8DE1'}]}>
                        <Text style={styles.text}>ДашБорд</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>setCardColor('#8A64EB')}
                        style={[styles.fileButton, {backgroundColor: '#8A64EB'}]}>
                        <Text style={styles.text}>Фільтри</Text>
                    </TouchableOpacity>
                </View>
                    <View style={[styles.actionsContainer, {backgroundColor: cardColor}]}>
                        <Text>Future content</Text>
                    </View>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
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

const mapStateToProps = (state, ownProps) => ({
    transactions: state.transactions
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);