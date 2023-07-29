import "./App.css";

import fundo from "./assets/fundo.svg";

import { useEffect } from "react";

import Sky from "./components/Sky";
import Ocean from "./components/Ocean";

function App() {
  // useEffect(() => {
  //   // Função para exibir o alerta após o carregamento completo da página
  //   const showAlertAfterLoad = () => {
  //     alert('Está de noite. Você está no meio do oceano. Que tal mergulhar?');

  //     // Remover a classe .body-hidden para mostrar o conteúdo
  //     document.body.classList.remove('body-hidden');
  //   };

  //   // Adicionar a classe .body-hidden para ocultar o conteúdo
  //   document.body.classList.add('body-hidden');

  //   // Escuta pelo evento 'load' na janela do navegador
  //   window.addEventListener('load', showAlertAfterLoad);

  //   // Remover o event listener quando o componente for desmontado (opcional)
  //   return () => {
  //     window.removeEventListener('load', showAlertAfterLoad);
  //   };
  // }, []);

  return (
    <>
      <Sky />
      <Ocean />

      <img src={fundo} alt="" className="ocean-floor" />
    </>
  );
}

export default App;
