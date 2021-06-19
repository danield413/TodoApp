import React from 'react';
import Screen from './components/Screen';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import { ContextProvider } from '../src/globalState/ContextProvider';
import { SnackbarProvider } from 'notistack';

function App() {
    return (
        <ContextProvider>
            <SnackbarProvider maxSnack={3}>
                <CssBaseline />
                <Screen />
            </SnackbarProvider>
        </ContextProvider>
    );
}

export default App;
