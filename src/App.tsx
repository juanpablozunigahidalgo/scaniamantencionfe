import React from 'react';
import { Provider } from 'react-redux';
import LLMGeneratorfe from './pages/LLMGeneratorfe';
import store from './store/store';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
             <header className="App-header">
                <h1>SCANIA Maitenance assistant</h1>
             </header>
        <LLMGeneratorfe />
      </div>
    </Provider>
  );
};

export default App;
