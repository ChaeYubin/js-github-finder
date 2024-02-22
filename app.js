import UI from "./UI.js";
import GithubSearchAPI from "./GithubSearchAPI.js";

const githubSearchAPI = new GithubSearchAPI();
const ui = new UI();

const searchBtn = document.getElementById("search-button");
const searchInput = document.querySelector(".search-input");
let input = "";

searchInput.addEventListener("input", () => {
  input = searchInput.value;
});

searchBtn.addEventListener("click", () => displayUserInfo(input));

async function displayUserInfo(username) {
  if (username == "") {
    alert("Please enter a username");
    githubSearchAPI.clearProfile();
    return;
  }

  githubSearchAPI.getUser(username).then((user) => {
    if (user.profile.message === "Not Found") {
      alert("User not found");
      ui.clearProfile();
    } else {
      ui.displayProfile(user.profile);
      ui.displayRepos(user.repos);
    }
  });
}
