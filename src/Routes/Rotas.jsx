
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DeepWaters from '../Pages/DeepWaters';
import Start  from '../Pages/Start';


function Rotas() {

    return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/deepwaters" element={<DeepWaters />} />
      </Routes>
    </BrowserRouter>

    );
}

export default Rotas;