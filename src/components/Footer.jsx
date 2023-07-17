function Footer() {  
    return (
      <div className="footer">
          <div className="content has-text-centered">
            <a href="https://github.com/victoriamcn" target="_blank" rel="noreferrer">
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
              <span className="social">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/victoria-mcnorrill/" target="_blank" rel="noreferrer">
              <span className="icon">
                <i className="fab fa-linkedin"></i>
              </span>
              <span className="social">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/victoriamcnorrill/" target="_blank" rel="noreferrer">
              <span className="icon">
                <i className="fab fa-instagram"></i>
              </span>
              <span className="social">Instagram</span>
            </a>
            <a href="https://open.spotify.com/user/torilizabeth95" target="_blank" rel="noreferrer">
              <span className="icon">
                <i className="fab fa-spotify"></i>
              </span>
              <span className="social">Spotify</span>
            </a>
          </div>
          <div className="content has-text-centered">
            <p className='byvictoria'>Created by Victoria</p>
            <p className='byvictoria is-small'>with React, JavaScript and Bulma CSS</p>
          </div>
      </div>
    );
  }
  
  export default Footer