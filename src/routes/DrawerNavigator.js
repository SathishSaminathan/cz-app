import React, {useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Button, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

import GetStarted from '../screens/GetStarted';
import Signup from '../screens/auth/Signup';
import Login from '../screens/auth/Login';
import Animated from 'react-native-reanimated';
import {Colors} from '../constants/ThemeConstants';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MyStack = ({navigation, style}) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        initialRouteName="GetStarted"
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Button title="Menu" onPress={() => navigation.openDrawer()} />
          ),
        }}>
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          // options={{
          //   title: 'Profile',
          //   cardStyleInterpolator:
          //     CardStyleInterpolators.forRevealFromBottomAndroid,
          // }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            // title: 'Notifications',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            // title: 'Notifications',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </Animated.View>
  );
};

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{flex: 1}}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Dashboard"
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate('Home')}
        label="MyStack"
        onPress={() => props.navigation.navigate('MyStack')}
        icon={() => <AntDesign name="phone" color="white" size={16} />}
      />
      <DrawerItem
        label="Dashboard"
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate('Home')}
        label="Signup"
        onPress={() => props.navigation.navigate('Signup')}
        icon={() => <AntDesign name="phone" color="white" size={16} />}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNav = () => {
  const [Progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolate(Progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(Progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });
  const animatedStyle = {borderRadius, transform: [{scale}]};

  return (
    <LinearGradient style={{flex: 1}} colors={[Colors.like, Colors.green]}>
      <Drawer.Navigator
        // initialRouteName="MyStack"
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{flex: 1}}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        drawerContent={props => {
          setProgress(props.progress);
          return <CustomDrawerContent {...props} />;
        }}>
        <Drawer.Screen name="MyStack">
          {props => <MyStack {...props} style={animatedStyle} />}
        </Drawer.Screen>
        {/* <Drawer.Screen name="Signup" component={Signup} /> */}
      </Drawer.Navigator>
    </LinearGradient>
  );
};

export {DrawerNav};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    borderColor: Colors.transparent,
    overflow: 'hidden',
    // borderWidth: 1,
  },
  drawerStyles: {flex: 1, width: '50%', backgroundColor: 'transparent'},
  drawerItem: {alignItems: 'flex-start', marginVertical: 0},
  drawerLabel: {color: 'white', marginLeft: -16},
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
});
