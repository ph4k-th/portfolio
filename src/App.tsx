import "./App.css";

function App() {
  return (
    <div>
      <div className="snow"></div>
      <div className="container">
        <div className="wrapper">
          <div className="banner-image"></div>
          <h1>PH4K-TH</h1>
          <p>
            Name: Thanawit tapabud <br />
            Role: Software Developer (Intern) <br />
            Graduated: Computer Engineering
          </p>
        </div>
        <div className="button-wrapper">
          <button className="cybr-btn">
            INSTAGRAM<span aria-hidden>_</span>
            <span aria-hidden className="cybr-btn__glitch">
              INSTAGRAM_
            </span>
            <span aria-hidden className="cybr-btn__tag">
              R25
            </span>
          </button>
          <button className="cybr-btn">
            FACEBOOK<span aria-hidden>_</span>
            <span aria-hidden className="cybr-btn__glitch">
              FACEBOOK_
            </span>
            <span aria-hidden className="cybr-btn__tag">
              R25
            </span>
          </button>
          <button className="cybr-btn">
            LINKEDIN<span aria-hidden>_</span>
            <span aria-hidden className="cybr-btn__glitch">
              LINKEDLIN_
            </span>
            <span aria-hidden className="cybr-btn__tag">
              R25
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
