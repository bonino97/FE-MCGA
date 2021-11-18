import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
//

// Components - Layout
import Header from './shared/Header';
import Sidebar from './shared/Sidebar';
import Dashboard from './components/Dashboard';
// Components - Clients branch
import Clients from './components/Clients';
import NewClient from './components/Clients/NewClient';
import EditClient from './components/Clients/EditClient';
// Components - Users branch
// Components - Boilers branch
//

function App() {
  return (
    <Router>
      <Header />
      <Provider store={store}>
        <div className='flex'>
          <Sidebar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/clients' component={Clients} />
              <Route exact path='/clients/new' component={NewClient} />
              <Route exact path='/clients/edit/:id' component={EditClient} />
            </Switch>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
