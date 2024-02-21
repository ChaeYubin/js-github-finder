import UI from "./UI.js";
import GithubSearchAPI from "./GithubSearchAPI.js";

const searchBtn = document.getElementById("search-button");
const searchInput = document.querySelector(".search-input");
let input = "";

const searchResultContainer = document.querySelector(".search-result");

searchInput.addEventListener("input", () => {
  input = searchInput.value;
});

searchBtn.addEventListener("click", () => displayUserInfo(input));

async function displayUserInfo(username) {
  if (username == "") {
    alert("Please enter a username");
    return;
  }

  try {
    fetchUserInfo(username).then(({ profile, repos }) => {
      const ui = new UI({ profile, repos });

      const profileHtml = ui.displayProfile(profile);
      const reposHtml = ui.displayRepos(repos);

      searchResultContainer.innerHTML = "";
      searchResultContainer.innerHTML += profileHtml;
      searchResultContainer.innerHTML += reposHtml;
    });
  } catch (error) {
    console.error(error);
  }
}

async function fetchUserInfo(username) {
  const githubSearchAPI = new GithubSearchAPI();

  try {
    const profile = await githubSearchAPI.getProfile(username);
    const repos = await githubSearchAPI.getRepos(username);

    return { profile, repos };
  } catch (error) {
    console.error(error);
  }
}
