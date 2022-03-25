import "./headerperso.css";
import logo from "../../assets/woman.png";

function headerperso() {
  return (
    <div className="headerperso">
      {/* <header className="App-header"> */}
      <img src={logo} alt="woman" />

      <p>HEADER</p>
    </div>
  );
}

export default headerperso;
