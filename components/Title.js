import { Text, StyleSheet } from 'react-native';

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        padding: 10,
        fontWeight: 'bold',
        color: '#EFE7E0',
        borderColor: '#F8F5F3',
        textAlign: 'center',
        borderWidth: 2,
        marginHorizontal: 40,
        maxWidth: '80%',
        minWidth: '80%',
    },
});