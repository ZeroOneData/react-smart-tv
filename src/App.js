import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import {  ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'
import Layout from './components/Layout';
import ImageList from './components/images/ImageList';
import { useEffect, useState } from 'react';
import ROOT_URL from './components/utilities/ROOT_URL';
import GetErrorDialog from './components/utilities/Dialogs/GetErrorDialog';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      //main: '#195190FF',
      main: '#1e2761',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: 'white',
    },
    secondary: {
      // light: '#0066ff',
     // main: '#7a2048',
      main: '#7a2048',
      // dark: will be calculated from palette.secondary.main,
      contrastText: 'white',
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
   fontWeightBold: 700,

 }
})

function App() {
  let arrayTest = []
  arrayTest.push(localStorage.getItem('experimental'))
  // const [topicInstance, setTopicInstance] = useState('')

  // const handleSelectTopic = (value) => {
  //   setTopicInstance(value)
  // };

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path='/'>
          <Layout>
            <Home pageName='Home'/>
          </Layout>
        </Route>
          {/* <Route path='/images'>
            <Layout>
                <ImageList  pageName='Images' />
            </Layout>
        </Route> */}
        <Route exact path='/images/:slug'>
            <Layout>
                <ImageList pageName='Image Listgit'/>
            </Layout>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
