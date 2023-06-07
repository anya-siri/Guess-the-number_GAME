import { View, Image, Text, StyleSheet, useWindowDimensions } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();
    const marginTopDistance = height < 380 ? 30 : 100;
    const marginWidth = width < 100 ? 50 : 20;
    return (
        <View style={[styles.rootContainer, { marginTop: marginTopDistance, marginHorizontal: marginWidth }]}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/gameover.jpeg')} />
            </View>
            <Text style={styles.normalText}>Your phone needed
                <Text style={styles.highlightedText}> {roundsNumber}</Text> rounds to guess the number
                <Text style={styles.highlightedText}> {userNumber}</Text>.</Text>
            <PrimaryButton onPressing={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderColor: '#660C0C',
        margin: 36,
        overflow: 'hidden',
        borderWidth: 5,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    normalText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
        color: '#7F190A',
        fontWeight: 'bold',
    },
    highlightedText: {
        color: '#480303',
        fontWeight: 'bold',
    },
}
);
