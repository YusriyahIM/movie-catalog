class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#search-input").value;
  }

  render() {
    this.innerHTML = `
    <style>
      .sectionSearch {
        background: black;
        text-align: center;
        padding-bottom: 5rem;
      }
      .sectionSearchButtonAndContent {
        width: 820px;
        max-width: 70%;
        margin: auto;
        margin-bottom: 0.5rem;
      }
      .sectionSearchButtonContent {
        background: rgb(54, 54, 54);
        text-align: start;
        padding-left: 2rem;
        font-size: 1.5rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
      .h2Font {
        font-size: 3rem;
        color: white;
        font-weight: bold;
      }
      .sectionSearchSong {
        line-height: 3rem;
      }
      .input {
        border: none;
        font-size: 1rem;
        position: relative;
        left: 0.4rem;
        bottom: 0.2rem;
        width: 28rem;      
        height: 3.7rem;
        padding-left: 0.5rem;
        outline: none;
      }
      span {
        position: absolute;
        transition: 0.2s ease all;
        font-size: 1rem;
        pointer-events: none;
        color: rgb(93, 93, 93);
        opacity: 0.9;      
        left: 14px;
        top: 4px;
      }      
      input:focus + span, input:not(:placeholder-shown) + span {
        font-size: 0.75rem;
        left: 12.5px;
        top: -14px;
        color: rgb(34, 34, 34);
      }
      label {
        position: relative;
        display: inline-block;
      }    
      .btn-search {
        font-size: 1.5rem;
        color: white;
        background: rgb(212, 11, 11);
        padding: 0.65em 1em;
        border: none;
        border-radius: 0.1rem;
        cursor: pointer;
      }
      .btn-search:hover {
        background: rgb(240, 12, 12);
      }      
    </style>
    <section class="sectionSearch">
        <h2 class="h2Font">Cari</h2>
        <div class="sectionSearchSong">
            <label>
                <input type="text" class="input" placeholder=" " id="search-input">
                <span>Masukkan Keyword</span>
            </label>
            <button class="btn-search" type="button" id="search-button">Search</button>
        </div>
    </section>`;
    this.querySelector("#search-button").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
