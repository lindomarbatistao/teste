import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, TextInput, Pressable, Alert } from 'react-native';
import styles from './styles';

export default function Create() {
    const [usuario, setUsuario] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUF] = useState('')
    const [cep, setCep] = useState('')
    const [email, setEmail] = useState('')
    const [numero, setNum] = useState('')
    const [pass, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [erro, setErro] = useState(null)

    //####################  Recuperar TOKEN ########################
    useEffect(() => {
        console.log(token)
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
    }, []);

    const dados = {
        nome: usuario,
        rua: rua,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
        cep: cep,
        email: email,
        numero: numero,
    };

    const enviarDadosParaAPI = async (dados, token) => {
        try {
            const resposta = await axios.post('http://127.0.0.1:8000/api/usuarios', dados, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Resposta da API:', resposta.data);
            // Limpando os dados
            setUsuario('')
            setRua('')
            setBairro('')
            setCidade('')
            setUF('')
            setCep('')
            setEmail('')
            setNum('')
            setPassword('')
            setErro("Cadastrado com Sucesso!")
        } catch (erro) {
            console.error('Erro ao enviar dados para a API:', erro);
            // Lógica para lidar com erros, se necessário
        }
    }

    const buscar = () => {
        console.log(cep)
        axios.get('https://viacep.com.br/ws/' + cep + '/json/')
            .then((response) => {
                setRua(response.data.logradouro)
                setBairro(response.data.bairro)
                setCidade(response.data.localidade)
                setUF(response.data.uf)
            })
            .catch((e) => {
                setErro(e)
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CREATE</Text>


            <View style={styles.campos}>
                <Text style={styles.texto2}>Nome:</Text>
                <TextInput
                    style={styles.textoNomeEmail}
                    onChangeText={setUsuario}
                    value={usuario}
                />
                <View style={styles.cx}>
                    <Text style={styles.texto2}>Cep:</Text>
                </View>
                <View style={styles.cx}>
                    <TextInput
                        style={styles.textoCep}
                        onChangeText={setCep}
                        value={cep}
                    />
                    <Pressable
                        style={styles.btnBuscar}
                        onPress={buscar}
                    >
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>Buscar</Text>
                    </Pressable>
                </View>
                <View style={styles.cx}>
                    <Text style={styles.textoCidade2}>Rua:</Text>
                    <Text style={styles.textoUf2}>      Nº</Text>
                </View>
                <View style={styles.cx}>
                    <TextInput
                        style={styles.texto}
                        onChangeText={setRua}
                        value={rua}
                    />
                    <TextInput
                        style={styles.textoNum}
                        onChangeText={setNum}
                        value={numero}
                    />
                </View>
                <Text style={styles.texto2}>Bairro:</Text>
                <TextInput
                    style={styles.texto}
                    onChangeText={setBairro}
                    value={bairro}
                />
                <View style={styles.cx}>
                    <Text style={styles.textoCidade2}>Cidade:</Text>
                    <Text style={styles.textoUf2}>UF:</Text>
                </View>
                <View style={styles.cx}>
                    <TextInput
                        style={styles.textoCidade}
                        onChangeText={setCidade}
                        value={cidade}
                    />
                    <TextInput
                        style={styles.textoUf}
                        onChangeText={setUF}
                        value={uf}
                    />
                </View>
                <Text style={styles.texto2}>Email:</Text>
                <TextInput
                    style={styles.textoNomeEmail}
                    onChangeText={setEmail}
                    value={email}
                />


                <Text style={styles.texto2}>Senha:</Text>
                <TextInput
                    style={styles.addNew}
                    onChangeText={(e) => setPassword(e)}
                    value={pass}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.btnBtn}>
                <Pressable
                    style={styles.btn}
                    onPress={() => enviarDadosParaAPI(dados, token)}
                >
                    <Text style={styles.btnCadastrar}>CADASTRAR</Text>
                </Pressable>
            </View>
            <View style={{width: "80%"}}>
                <Text style={styles.textoErro}>{!erro ? '' : 'Erro: '}{erro}</Text>
            </View>
        </View>
    );
}


