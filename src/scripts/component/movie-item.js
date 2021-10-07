class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML =
      `
        <div class="card text-white bg-dark ml-2 mr-2 mb-4">
                <img class="card-img-top img-fluid" src="` +
      this._movie.Poster +
      `" alt="Card image cap">
                    <div class="card-body">
                        <h6 class="card-title font-weight-bold">` +
      this._movie.Title +
      `</h6>
                        <h6 class="card-subtitle mb-2 text-muted">` +
      this._movie.Year +
      `</h6>
                        <button class="btn btn-danger btn-sm see-detail" data-toggle="modal" data-target="#exampleModal" data-id="` +
      this._movie.imdbID +
      `">See Detail</button>
            </div>
        </div>`;
  }
}

customElements.define("movie-item", MovieItem);
