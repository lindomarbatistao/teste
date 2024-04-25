import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, View, TextInput, Pressable, Alert } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Read() {
    const [userId, setUserId] = useState(0)
    const [usuario, setUsuario] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUF] = useState('')
    const [cep, setCep] = useState('')
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const [erro, setErro] = useState('')

    //####################  Recuperar TOKEN ########################
    useEffect(() => {
        // Recuperar o token do AsyncStorage
        AsyncStorage.getItem('token')
            .then(tokenY => {
                console.log('tokenY: ', tokenY)
                if (tokenY) {
                    setToken(tokenY);
                    console.log(token)
                } else {
                    console.log('Token não encontrado.');
                }
            })
            .catch(error => {
                console.error('Erro ao recuperar token:', error);
                
            });
    }, [erro]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/usuario/' + userId, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUsuario(response.data.nome)
            setRua(response.data.rua)
            setBairro(response.data.bairro)
            setCidade(response.data.cidade)
            setUF(response.data.uf)
            setCep(response.data.cep)
            setEmail(response.data.email)
        } catch (error) {
            Alert.alert('Erro', 'Falha ao buscar dados.');
            console.error(error);
            setErro(error.response.status)
        }
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>READ</Text>
            <Text style={styles.texto2}>ID:</Text>
            <TextInput
                style={styles.ID}
                onChangeText={(e) => setUserId(e)}
            />

            <View>
                <Pressable
                    style={styles.btn}
                    onPress={fetchData}
                >
                    <Text style={{ fontWeight: 'bold' }}>GET</Text>
                </Pressable>
            </View>
            <View style={styles.campos}>
                <Text style={styles.texto2}>Nome:</Text>
                <Text style={styles.textoNomeEmail}>{usuario}</Text>
                <Text style={styles.texto2}>Cep:</Text>
                <Text style={styles.textoNomeEmail}>{cep}</Text>
                <Text style={styles.texto2}>Rua:</Text>
                <Text style={styles.texto}>{rua}</Text>
                <Text style={styles.texto2}>Bairro:</Text>
                <Text style={styles.texto}>{bairro}</Text>
                <View style={styles.cx}>
                    <Text style={styles.textoCidade2}>Cidade:</Text>
                    <Text style={styles.textoUf2}>UF:</Text>
                </View>
                <View style={styles.cx}>
                    <Text style={styles.textoCidade}>{cidade}</Text>
                    <Text style={styles.textoUf}>{uf}</Text>
                </View>
                <Text style={styles.texto2}>Email:</Text>
                <Text style={styles.textoNomeEmail}>{email}</Text>
                <Text style={styles.textoErro}>{!erro? '': 'Erro: '}{erro}</Text>
            </View>
        </View>
    );
}


