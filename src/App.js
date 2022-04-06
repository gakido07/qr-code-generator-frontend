import { Route, Routes } from 'react-router-dom';
import { useReducer } from "react"
import styled, { ThemeProvider } from 'styled-components';

import './App.css';
import Header from './components/Header';
import Qr from './views/Qr';
import Home from './views/Home';
import Barcode from './views/Barcode';
import { ThemeReducer, theme } from './context/Theme';
import { AnimatePresence } from 'framer-motion';

function App() {

  const [state, dispatch] = useReducer(ThemeReducer, theme.lightTheme);

  return (
    <ThemeProvider theme={state}>
      <StyledApp>
        <Header dispatch={dispatch} themeState = {state}/>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path='/' element = { <Home /> }/>
            <Route path='/qr' element = {<Qr />}/>
            <Route path='/barcode' element = {<Barcode />} />
          </Routes>
        </AnimatePresence>
    </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled.div`
  text-align: center;
  background: ${props => props.theme.background};
  height: fit-content;
  padding-bottom: 0em;

  a {
    text-decoration: none;
  }
`

export default App;
