const inputLogic = () => {
  const searchBtn = document.getElementById("search-btn");
  const searchBox = document.getElementById("search-box");
  searchBtn.addEventListener("click", (event) => {
    const user = searchBox.value.trim();
    stalk().profileOf(user);
  });
  searchBox.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
      const user = event.target.value.trim();
      stalk().profileOf(user);
    }
  });
};
export default inputLogic;
