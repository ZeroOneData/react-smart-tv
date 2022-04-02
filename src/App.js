import { Route, Switch } from 'react-router-dom'
import Home from './components/features/home/Home'
import Layout from './components/ui/Layout'
import ImageList from './components/features/images/ImageList'

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Layout>
          <Home pageName='SmartTube - Home'/>
        </Layout>
      </Route>
      <Route exact path='/images/:slug'>
        <Layout>
          <ImageList pageName='SmartTube - Topics'/>
        </Layout>
      </Route>
    </Switch>
  )
}

export default App;
