import React from 'react';
import Navbar from './components/Navbar';
import OrderDetailsContainer from './components/OrderDetailsContainer';
import OrderPage from './components/OrderPage';
import { Provider } from 'react-redux';
import store from './redux/store';




function App() {
  
  return (
      <Provider store={store}>
      <div className="App">
        <Navbar />
        <OrderDetailsContainer/>
        <OrderPage />
        
      </div>
      </Provider>
  );
}

export default App;
