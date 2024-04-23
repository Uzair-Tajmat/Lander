import "./App.css";
import video from "./assets/Test3.mp4";
import img from "./assets/Img1.jpg";
function App() {
  return (
    <>
      <div class="hero-content">
        <video
          autoPlay
          muted
          id="video-background"
          src={video}
          height="350px"
        ></video>

        <h1>
          Shaadi Karni Hai ...
          <br />
          Aajao Kara Denge
        </h1>
      </div>
      <img src={img} alt="Hero Image" className="img"></img>
    </>
  );
}

export default App;
