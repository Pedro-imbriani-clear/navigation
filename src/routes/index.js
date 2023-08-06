import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stackRoutes';
import Sobre from '../page/sobre';
import Contato from '../page/contatos';

const Drawer = createDrawerNavigator();

export default function Routes(){
  return(
    <Drawer.Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
      />

      <Drawer.Screen
        name="Sobre"
        component={Sobre}
      />

      <Drawer.Screen
        name="Contato"
        component={Contato}
      />
    </Drawer.Navigator>
  )
}