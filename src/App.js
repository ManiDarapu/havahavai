import {Provider, defaultTheme} from '@adobe/react-spectrum'
import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <Provider theme={defaultTheme}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </Provider>
)

export default App
