import { NavigationContainer } from '@react-navigation/native';
import DrawerRoot from './Router/DrawerRoot';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerRoot />
      </NavigationContainer>
    </Provider>
  );
}

