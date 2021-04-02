import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

import { Input, Button, Container } from '../../common';

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const login = () => {
        async function postData(url = '',) {
            const response = await fetch(url = '',data = {}, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            });
            return response;
        }
        let data = {
            email: name,
            password: password
        }
        postData('https://us-central1-zxsvm-zxsvm.cloudfunctions.net/api/v1/session/login', data)
            .then(data => {
                console.log(data);
            }).catch((err)=>console.log('err', err));
    }
    return (
        <Container containerStyles={styles.container}>
            {/*<View style={styles.big}/>*/}
            <View style={styles.inputContainer}>
                <Input onChange={setName} value={name} label={'Login'} isValid={name}/>
                <Input onChange={setPassword} value={password} label={'password'} isPassword isValid={password}/>
            </View>
            <Button onChange={login} label={'Sign in'} containerStyle={{marginTop: 10}} disabled={!(name && password)}/>

        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    big: {
        width: '100%',
        height: 500,
    },
    inputContainer: {
        width: '100%',
        height: '20%',
        justifyContent: 'space-between',
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        width:'90%',
    },
});

export default Login;
