class LandingPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      #top-header {
        z-index: 2;
        position: relative;
      }
      #top-header img {
        width: 12rem;
        height: 5rem;
        position: relative;
        top: 10px;
        left: 20px;
      }
      #top-header a {
        text-decoration: none;
        color: white;
        background: rgb(212, 11, 11);
        border-radius: 3px;
        font-size: 1.2rem;
        padding: 0.3em 0.8em;    
        position: absolute;
        top: 40%;
        right: 4%;
      }
      #bottom-header {
        color: white;
        z-index: 2;
        position: relative;
        text-align: center;
        font-size: 1.5rem;
        line-height: 3rem;
        padding: 5rem 0rem;
        margin: 5rem auto;
        width: 950px;
        max-width: 90%;
      }
      #bottom-header h1 {
        margin: auto auto 1rem auto;
        width: 620px;
        max-width: 100%;
      }
      h1 {
        display: block;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    </style>
    <div id="top-header">
        <img src="https://fontmeme.com/permalink/211002/51ddd933a990762a10b479a8b1ffb65d.png" alt="netflix logo" />
        <a href="#">Masuk</a>
    </div>
    <div id="bottom-header">
        <h1>Cari Film, acara TV tak terbatas, dan lebih banyak lagi.</h1>
        <p class="pFont">Cari dimanapun. Batalkan kapanpun.</p>
        <p>Siap mencari? Masukkan keyword dan jelajahi.</p>
    </div>
        `;
  }
}

customElements.define("landing-page", LandingPage);
