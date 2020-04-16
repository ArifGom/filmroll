import Content from 'Content';
import { GlobalStyle } from './App.styled';
import Navbar from 'Components/Navbar';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from 'Store';
import { theme } from 'styled/theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <header>
            <Navbar />
          </header>
          <Content />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
