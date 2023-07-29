import { Link } from 'react-router-dom';

export default function Start() {
  return (
    <div>
      <h1>Seja bem-vindo(a) à página inicial!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link to="/deepwaters">
        <button>Ir para Deep Waters</button>
      </Link>
    </div>
  );
}
