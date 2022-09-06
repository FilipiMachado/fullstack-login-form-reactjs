import { Link } from 'react-router-dom'
import "./Home.css"

function Home() {
  return (
    <div>
      <div className="main">
        <h1>Home Page</h1>
      </div>
      {/* <div>
        <Link to="/login">
          <button type="text">Go To Login Page</button>
        </Link>
        <Link to="register">
          <button type="text">Go To Register Page</button>
        </Link>
      </div> */}
    </div>
  );
}
  
export default Home;