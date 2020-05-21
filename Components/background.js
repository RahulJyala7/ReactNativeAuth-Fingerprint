import React, { memo } from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';

const Background = ({ children }) => (
    <ScrollView>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            {children}
        </KeyboardAvoidingView>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default memo(Background);