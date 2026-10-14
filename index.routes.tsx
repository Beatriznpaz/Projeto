import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../pages/splash";
import Login from "../pages/login";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import BottomRoutes from "./bottom.routes";
import AddRecord from "../pages/addrecord";
import Metodo from "../pages/metodo";
import MetodoDescricao from "../pages/metododescricao";
import CreateGroup from "../pages/creategroup";
import ChatRoom from "../pages/chatroom";
import AddBook from "../pages/addbook";
import Duracao from "../pages/duracao";
import Profile from "../pages/profile";

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={BottomRoutes} />
            <Stack.Screen name="AdicionarRegistro" component={AddRecord} />
            <Stack.Screen name="Metodo" component={Metodo} />
            <Stack.Screen name="MetodoDescricao" component={MetodoDescricao} />
            <Stack.Screen name="CreateGroup" component={CreateGroup} />
            <Stack.Screen name="ChatRoom" component={ChatRoom} />
            <Stack.Screen name="AddBook" component={AddBook} />
            <Stack.Screen name="Duracao" component={Duracao} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}