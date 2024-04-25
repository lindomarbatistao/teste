
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    ID: {
        width: '20%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    addNew: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    texto: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#bbb',
        borderWidth: 1,
        padding: 5,
        fontWeight: 'bold'
    },
    textoNomeEmail: {
        backgroundColor: '#bbb',
        width: '100%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,
        fontWeight: 'bold'
    },
    textoErro: {
        backgroundColor: '#f5f5e6',
        width: '100%',
        height: 80,
        borderRadius: 10,
        padding: 5,
        fontWeight: 'bold',
        marginTop:20,
    },
    textoCep: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,
        fontWeight: 'bold',
    },
    textoNomeEmailPost: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,
        fontWeight: 'bold'
    },
    textoCidade: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#bbb',
        borderWidth: 1,
        padding: 5,
        fontWeight: 'bold',
    },
    textoUf: {
        width: '20%',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#bbb',
        borderWidth: 1,
        padding: 5,
        fontWeight: 'bold',
        marginLeft:10
        
    },
    textoCidadePost: {
        backgroundColor: '#bbb',
        width: '100%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,
        fontWeight: 'bold',
    },
    textoUfPost: {
        backgroundColor: '#bbb',
        width: '20%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,
        fontWeight: 'bold',
        
    },
    title: {
        marginTop: 20,
        fontSize: 40,
        fontWeight:'bold'
    },
    texto2: {
        marginTop: 10,
        
    },
    textoCidade2: {
        marginTop: 10,
        
    },
    textoUf2: {
        marginTop: 10,
        marginLeft: '70%'
    },

    
    btn: {
        width: 100,
        height: 40,
        marginTop: 25,
        marginBottom: 10,
        borderWidth: 1,
        backgroundColor: '#f00',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnPost: {
        width: 100,
        height: 40,
        marginTop: 25,
        marginBottom: 10,
        borderWidth: 1,
        backgroundColor: '#00f',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBuscar: {
        width: '20%',
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        backgroundColor: '#000',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    cx: {
        marginTop: 1,
        width: '100%',
        flexDirection: "row"
    },
    campos:{
        width:'80%',
    }
});

export default styles