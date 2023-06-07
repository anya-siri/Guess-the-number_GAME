import { View, StyleSheet, Text } from 'react-native';

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent's guess: {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: '#570808',
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#FFD6B2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },

});