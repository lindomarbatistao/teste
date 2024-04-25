import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import styles from './styles'

export default function Login({ navigation }) {
    const [usuario, setusUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [token, setToken] = useState(null)

    useEffect(() => {
        // Suponha que você tenha recebido o token como resposta de uma requisição
        const tokenX = token;

        // Salvar o token no AsyncStorage
        AsyncStorage.setItem('token', tokenX)
            .then(() => {
                if (token != null) {
                    console.log('Token SignIn: ', token)
                    console.log('Token salvo com sucesso!');
                }
            })
            .catch(error => {
                console.error('Erro ao salvar token:', error);
            });
    }, [token]);

    const fetchToken = async () => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/token/',
                {
                    username: usuario,
                    password: senha,
                }
            );

            // Se a solicitação for bem-sucedida, definimos o token no estado
            setToken(response.data.access);
            console.log('Token SignIn: ', token)
            navigation.navigate('Read')
        } catch (error) {
            // Se houver algum erro na solicitação, exibimos uma mensagem de alerta
            Alert.alert('Erro', 'Falha ao obter o token.');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
            </View>
            <TextInput
                placeholder='usuario'
                onChangeText={setusUsuario}
                value={usuario}
                style={styles.caixa}
            />
            <TextInput
                placeholder='senha'
                onChangeText={setSenha}
                value={senha}
                style={styles.caixa}
                secureTextEntry={true}
            />

            <Pressable
                style={styles.btnOk}
                onPress={fetchToken}
            >
                <Text style={{ fontSize: 25 }}>Sign In</Text>
            </Pressable>

            <Pressable
                style={styles.btnOk}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={{ fontSize: 25 }}>Sign Up</Text>
            </Pressable>
            <View style={{ width: '80%' }}><Text>{token}</Text></View>
        </View>
    )
}