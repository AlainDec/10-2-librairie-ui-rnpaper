import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';

const Header = () => {
    return (
        <Appbar style={styles.appBarTop}>
            <Appbar.Content title="Activity Tracker" />
            <Avatar.Image 
                size={48}
                source={require('../assets/jelly.png')}
                style={styles.avatar}
            />
        </Appbar>
    );
}

export default Header;

const styles = StyleSheet.create({
    appBarTop: {
        marginTop: 40,
        paddingTop: 0,
        height: 60,
    },
    avatar: {
        marginRight:10,
    }
});