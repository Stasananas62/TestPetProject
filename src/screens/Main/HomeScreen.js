import React, { useCallback, useState }  from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import connect from "react-redux/lib/connect/connect";
import CardController from "../../common/HomeScreen/CardController";
import {cardTypes} from "../../core/constants";

const HomeScreen = ({navigation, transactions, dispatch}) => {
    const [config, setConfig] = useState({backgroundColor: '#B65EBA', data: {}, type: cardTypes.categories})
    const categoriesData = [{icon: '', title: 'Їжа'}]

    const onChangeConfig = useCallback((type)=>{
    switch (type){
        case cardTypes.categories:
            setConfig({backgroundColor: '#B65EBA', data: categoriesData, type: cardTypes.categories})
            break
        case cardTypes.dashBoard:
            setConfig({backgroundColor: '#2E8DE1', data: {}, type: cardTypes.categories})
            break
        case cardTypes.filters:
            setConfig({backgroundColor: '#8A64EB', data: {}, type: cardTypes.categories})
            break
    }

    }, [])

    return (
        <View style={styles.container}>
            <CardController config={config} onChangeConfig={onChangeConfig}/>
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