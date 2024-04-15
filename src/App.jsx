import "./App.css";

function App() {
  return (
    <>
      <div class="hero-content">
        <video autoplay muted loop id="video-background">
          <source src="./assets/Test.mp4" type="video/mp4"></source>
        </video>
        <div class="text">
          <h1>
            Shaadi Karni Hai ...
            <br />
            Aajao Kara Denge
          </h1>
        </div>
        <img src="hero-image.jpg" alt="Hero Image"></img>
      </div>
    </>
  );
}

export default App;
