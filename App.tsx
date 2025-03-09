import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import store from './src/store';
import AppNavigation from './src/navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <PaperProvider>
          <AppNavigation />
        </PaperProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}

export default App;