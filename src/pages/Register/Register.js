import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
      Register Page
      <Link to="/">
        <button type="text">Return to Home Page</button>
      </Link>
    </div>
  );
}
  
export default Register;