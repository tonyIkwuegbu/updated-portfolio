import { Link } from "react-router-dom";
import "./style.css";
import profile from "../../assets/main.png"



const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="title font-pop font-semibold">
        <h1>
          <p className="name">Hi,</p>
          <p className="name">I'm Tony</p>
          <p className="job">Software Developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person hover:scale-105 duration-500 ease-in-out transition-all">
        <img src={profile} alt="anthony" />
      </div>
    </div>
  );
};

export default Home;