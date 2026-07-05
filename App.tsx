import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { UserProvider } from './context/UsersContext';

function App() {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}

export default App;








