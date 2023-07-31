
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DeepWaters from '../Pages/DeepWaters';
import Start  from '../Pages/Start';
import Howto from '../Pages/Howto';


function Rotas() {

    return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Howto />} />
        <Route path="/start" element={<Start />} />
        <Route path="/deepwaters" element={<DeepWaters />} />
      </Routes>
    </BrowserRouter>

    );
}

export default Rotas;