import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';

import ShareNavbar from './component/ShareNav';
import Home from './page/Home';
import About from './page/About';
import Mything from './page/Mything';
import Thing from './page/Thing';
import Error from './page/Error';
import Contract from './component/Contract';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path='contract' element={<Contract/>} />
        <Route path="/" element={<ShareNavbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mything" element={<Mything />} />
          <Route path='mything/:memesId' element={<Thing />} />
        </Route>
       </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
