import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from './WelcomePage';
import InicialPage from './InicialPage';
import LoginModePage from './LoginModePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import SearchPetPage from './SearchPetPage';
import CatalogPage from './CatalogPage';
import DetailsPage from './DetailsPage';
import CalendarPage from './CalendarPage';
import UserInfoPage from './UserInfoPage';
import AddAnimalPage from './AddAnimalPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
<NavigationContainer>
      <Stack.Navigator initialRouteName="InicialPage">
        <Stack.Screen name="InicialPage" component={InicialPage} options= {{headerShown: false }}/>
        <Stack.Screen name="WelcomePage" component={WelcomePage} options= {{headerShown: false }}/>
        <Stack.Screen name="LoginModePage" component={LoginModePage} options= {{headerShown: false }}/>
        <Stack.Screen name="LoginPage" component={LoginPage} options= {{headerShown: false }}/>
        <Stack.Screen name="SignUpPage" component={SignUpPage} options= {{headerShown: false }}/>
        <Stack.Screen name="SearchPetPage" component={SearchPetPage} options= {{headerShown: false }}/>
        <Stack.Screen name="CatalogPage" component={CatalogPage} options= {{headerShown: false }}/>
        <Stack.Screen name="DetailsPage" component={DetailsPage} options= {{headerShown: false }}/>
        <Stack.Screen name="CalendarPage" component={CalendarPage} options= {{headerShown: false }}/>
        <Stack.Screen name="UserInfoPage" component={UserInfoPage} options= {{headerShown: false }}/>
        <Stack.Screen name="AddAnimalPage" component={AddAnimalPage} options= {{headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
