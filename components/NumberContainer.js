import { View, Text, StyleSheet } from 'react-native';

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: '#D97C2B',
        padding: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    numberText: {
        color: '#D97C2B',
        fontSize: 36,
        fontWeight: 'bold',
    },
});