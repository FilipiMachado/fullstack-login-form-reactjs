import { Link } from 'react-router-dom'

import './Register.css'

function Register() {
  return (
    <main>
      <header>
        <h1 className="logo">FORM FULLSTACK</h1>
        <h2>Cadastrar-se</h2>
        <p>Faça o login ou crie uma nova conta.</p>
      </header>
      <form>
        <label>
          <span>Seu Email</span>
          <input type="email" placeholder="Digite o email"></input>
        </label>
        <label>
          <span>Senha</span>
          <input type="password" placeholder="Digite uma senha"></input>
        </label>
        <label>
          <span>Confirme sua senha</span>
          <input type="password" placeholder="Digite uma senha"></input>
        </label>
        <input type="submit" value='Cadastrar'></input>
      </form>
    </main>
  );
}
  
export default Register;