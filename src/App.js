import './App.css';
import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Loading from './component/Loading';
import ListPage from './page/ListPage';
import Viewer from './component/Viewer';
import { Provider } from 'react-redux';
import {store} from './store/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Loading></Loading>
        <Routes>
          <Route path={`/:menu?`} element={<ListPage></ListPage>}></Route>
          <Route path={`/viewer/category?`} element={<Viewer></Viewer>}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
