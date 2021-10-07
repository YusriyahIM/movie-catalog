class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowDOM.innerHTML = `
        <style>
        * {
          margin: 0px;
          padding: 0px;
        }
        #footer-container {
          width: 900px;
          max-width: 85%;
          margin: auto;
        }
        a {
          color: rgb(109, 109, 109);
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
          text-decoration-skip-ink: none;
        }
        ul {
          list-style-type: none;
        }
        p {
          font-size: 1.2rem;
          padding-bottom: 2rem;
        }
        p:nth-of-type(2) {
          margin-top: 3rem;
          font-size: 0.8rem;
        }
        .footer-columns {
          display: grid;
          grid-template-columns: 25% 25% 25% 25%;
          margin-left: 0;
          margin-bottom: 1rem;
          font-size: 0.8rem;
        }
        .footer-columns li {
          padding-bottom: 1rem;
        }
        #copy {
          margin-top: 2rem;
          font-size: 0.6rem;
        }
        #copy a {
          color: rgb(143, 138, 138);
        }
        </style>
        <div id="footer-container">
          <p>Ada pertanyaan? Hubungi <a href="mailto:yusriyahisna24@gmail.com">saya.</a></p>
          <div class="footer-columns">
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Speed Test</a></li>
            </ul>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Cookie Preferences</a></li>
              <li><a href="#">Legal Notices</a></li>
            </ul>
            <ul>
              <li><a href="#">Account</a></li>
              <li><a href="#">Ways to Watch</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Netflix Originals</a></li>
            </ul>
            <ul>
              <li><a href="#">Media Center</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
  
          <p>Searchflix Indonesia</p>
  
          <p id="copy">Template website ini adalah duplikasi dari <a target="_blank" href="https://www.netflix.com/id/">netflix.com</a> dengan beberapa pengubahan.</p>
        </div>
        `;
  }
}
customElements.define("footer-bar", FooterBar);
