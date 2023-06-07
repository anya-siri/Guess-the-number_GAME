import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children, onPressing }) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({ pressed }) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}
                onPress={onPressing}
                android_ripple={{ color: '#5A3030' }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        borderRadius: 30,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#570808',
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
});

