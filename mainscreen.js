import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import {decreaseCount,increaseCount} from './store/actions/Counter'; 
import {login} from "./store/actions/isLogged"

const MainScreen = props => {
    const value = useSelector(state => state.valueReducer.value);
    const key = useSelector(state => state.isLogin.key);
    const dispatch = useDispatch();
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <View style={{ marginBottom: 20 }}>
                <Button title="Press Me For Decrement" color='black' onPress={() => {
                    dispatch(decreaseCount())
                }}/>
            </View>
            <Text>
                Counter: {value}
            </Text>
            <View style={{marginTop: 20 }}>
                <Button title="Press Me For Increment" color='black' onPress={() => {
                    dispatch(increaseCount())
                }} />
            </View>
        <View>
            <Text>Status:{key}</Text>
        </View>
            <View style = {{marginTop:40}}>
                <Button title = 'LOG IN' color='black' onPress = {() =>{
                    dispatch(login());
                }} />
            </View>
        </View>
    );
}

export default MainScreen;