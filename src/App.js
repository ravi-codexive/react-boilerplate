import './App.css';
// import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import Routes from './router/Routes';

function App() {
  return (

    // <Provider>
        <HashRouter>
          <LastLocationProvider>
            <Routes />
          </LastLocationProvider>
        </HashRouter>
    // </Provider>
  );
}

export default App;
