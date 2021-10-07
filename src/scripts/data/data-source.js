class DataSource {
  static async searchMovie(keyword) {
    const baseUrl = new URL("http://www.omdbapi.com/");
    baseUrl.search = new URLSearchParams({ apikey: "e690b24a", s: `${keyword}` });
    const response = await fetch(baseUrl.toString());
    const responseJson = await response.json();

    if (responseJson.Search) {
      return Promise.resolve(responseJson.Search);
    } else {
      return Promise.reject(responseJson.Error);
    }
  }

  static async detailMovie(id) {
    const baseUrl = new URL("http://www.omdbapi.com/");
    baseUrl.search = new URLSearchParams({ apikey: "e690b24a", i: `${id}` });

    const response = await fetch(baseUrl.toString());
    const responseJson = await response.json();

    if (responseJson.Response === "True") {
      return Promise.resolve(responseJson);
    } else {
      return Promise.reject(responseJson.Error);
    }
  }
}
export default DataSource;
