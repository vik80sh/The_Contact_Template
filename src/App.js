import React from 'react';
import './App.css';
import ThePhotoShopHeader from './component/routerHandler/ThePhotoShopHeader';
import { BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThePhotoShopHeader />
      </BrowserRouter>
    </div>
  );
}

export default App;
