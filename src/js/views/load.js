class Load {
  _parentElement = document.querySelector(".load");
  _message = document.querySelector(".message");
  _results = document.querySelector(".results");

  render() {
    this._parentElement.style.display = "flex";
  }

  remove() {
    this._parentElement.style.display = "none";
  }

  renderError(message) {
    // this._results.innerHTML = "";
    this._results.style.display = "none";
    this.remove();
    this._message.style.display = "flex";
    const markup = `
    <div class="error">
      <p>There is something wrong! Please try again😊</p>
    </div>`;
    this._message.insertAdjacentHTML("afterbegin", markup);
  }
}
export default new Load();
