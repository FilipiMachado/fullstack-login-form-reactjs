import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      Login Page
      <Link to="/">
        <button type="text">Return to Home Page</button>
      </Link>
    </div>
  );
}
    
export default Login;