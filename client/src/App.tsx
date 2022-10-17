import React from 'react';
import './App.css';
import Application from './components/Application/Application';
import Counter from './components/Counter/Counter';
import { Skills } from './components/Skills/Skills';
import AppProvider from './Providers/app.provider';
import MuiMode from './components/mui/MuiMode';
import { CounterTwo } from './components/counter-two/CounterTwo';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Application />
        <Skills skills={['HTML', 'CSS','JavaScript']} />
        <Counter />
        <MuiMode />
        <CounterTwo count = {0}/>
      </div>
    </AppProvider>
   
  );
}

export default App;
