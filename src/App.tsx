import "./style.css";

function App() {
  const handleYesClick = (): void => {
    if (window.confirm("te amo!")) {
      window.open(
        "https://www.google.com/search?q=noice&oq=noice&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIJCAYQABgKGIAEMgkIBxAAGAoYgAQyCQgIEAAYChiABDIJCAkQABgKGIAE0gEHOTQxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:c000df66,vid:a8c5wmeOL9o"
      );
    }
  };

  const handleNoHover = (): void => {
    let button = document.getElementById("no-button");
    let height = window.innerHeight - 50;
    let width = window.innerWidth - 50;

    if (button) {
      button.style.position = "absolute";
      button.style.top = Math.random() * height + "px";
      button.style.left = Math.random() * width + "px";
    }
  };

  return (
    <div className="container">
      <h1>C*zinho hoje?</h1>
      <div className="button-container">
        <button className="buttonYes" id="yes-button" onClick={handleYesClick}>
          SIM :)
        </button>
        <button className="buttonNo" id="no-button" onMouseOver={handleNoHover}>
          NÃO
        </button>
      </div>
    </div>
  );
}

export default App;
