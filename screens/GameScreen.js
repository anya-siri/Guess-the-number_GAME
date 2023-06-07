import { View, Text, StyleSheet, Alert, FlatList,useWindowDimensions } from 'react-native';
import { useEffect, useState, useMemo } from 'react';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';
import GameLogItem from '../components/GuessLogItem';

function generateRandomNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    }
    else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {

    const { width, height } = useWindowDimensions();

    const initialGuess = useMemo(() => generateRandomNumber(1, 100, userNumber), []);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
            minBoundary = 1;
            maxBoundary = 100;
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: 'Sorry!', style: 'cancel' },]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNum = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNum);
        setGuessRounds(prevGuessRounds => [newRndNum, ...prevGuessRounds]);
    }

    const guessRoundListLength = guessRounds.length;
    const marginTopDistance = height < 380 ? 1 : 10;
    const marginWidth = width < 100 ? 50 : 10;

    return (
        <View style={[styles.screen, { marginTop: marginTopDistance, marginHorizontal: marginWidth }]}>
            <Text style={styles.title}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.rootContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.instructionText}>Higher or Lower?</Text>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPressing={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name="md-remove" size={24} color="white" />
                            </PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPressing={nextGuessHandler.bind(this, 'greater')}>
                                <Ionicons name="md-add" size={24} color="white" />
                            </PrimaryButton>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ padding: 16, flex: 1 }}>
                {/*guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)*/}
                <FlatList data={guessRounds} renderItem={(itemData) => <GameLogItem roundNumber={guessRoundListLength - itemData.index} guess={itemData.item} />} keyExtractor={(item) => item} />
            </View>
        </View>
    );

}

export default GameScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        padding: 10,
        fontWeight: 'bold',
        color: '#EFE7E0',
        borderColor: '#F8F5F3',
        textAlign: 'center',
        borderWidth: 2,
        marginVertical: 20,
        alignItems: 'center',
        width: '100%',
    },
    screen: {
        flex: 1,
        padding: 50,
    },
    rootContainer: {
        marginTop: 10,
        alignContent: 'center',
    },
    instructionText: {
        fontSize: 24,
        color: '#D97C2B',
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 20,
        padding: 16,
        backgroundColor: '#3A0606',
        borderRadius: 8,
        elevation: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#D97C2B',
        borderBottomWidth: 2,
        color: '#D97C2B',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
}
);  