// 동적으로 생성될 UI 작업을 처리하는 클래스
export default class UI {
  constructor() {
    this.searchResultContainer = document.querySelector(".search-result");
  }

  displayProfile(profile) {
    const memberSince = profile.created_at.slice(0, 10);

    this.searchResultContainer.innerHTML = `<div class="profile-container card mb-4">
    <div class="card-body d-flex p-3 gap-3">
      <div class="profile-left d-flex flex-column me-2">
        <img
        class="profile-image"
          src="${profile.avatar_url}"
          alt="샘플이미지"
        />
        <a href="${profile.html_url}" target="_blank" class="d-block">
        <button type="button" class="btn d-block w-100 view-btn btn-primary mt-2">
          View Profile
        </button></a>
      </div>
      <div class="profile-right d-flex flex-column flex-grow-1">
        <div class="profile-badges d-flex gap-1 mb-3">
          <span class="badge bg-primary">Public Repos: ${
            profile.public_repos
          }</span>
          <span class="badge bg-success">Public Gists: ${
            profile.public_gists
          }</span>
          <span class="badge bg-dark">Followers: ${profile.followers}</span>
          <span class="badge bg-info">Following: ${profile.following}</span>
        </div>
        <ul class="profile-info-list list-group w-100">
          <ul class="list-group-item">
            Company: ${
              profile.company !== null
                ? profile.company
                : "There is no company..."
            }
          </ul>
          <ul class="list-group-item">
            Website/Blog: 
            <a class="blog-link-text" href="${
              profile.blog != "" ? profile.blog : "#"
            }"/>${profile.blog == "" ? "There is no blog..." : profile.blog}
            </a>
          </ul>
          <ul class="list-group-item">
            Location: ${
              profile.location == ""
                ? "There is no location..."
                : profile.location
            }
          </ul>
          <ul class="list-group-item">
            Member Since: ${memberSince}
          </ul>
        </ul>
      </div>
    </div>
  </div>`;
  }

  displayRepos(repos) {
    repos = repos.slice(0, 6); // 최근 레포지토리 6개만 보여준다.
    const repoInfoArray = repos.map((repo) => {
      return `<div class="repository-card card mb-3">
      <div class="card-body d-flex">
        <a href="${repo.html_url}" target="_blank" class="repository-name flex-grow-1 card-link">${repo.name}</a>
        <div class="repository-badges d-flex gap-1 flex-grow-1">
          <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
          <span class="badge bg-success">Watchers: ${repo.watchers_count}</span>
          <span class="badge bg-dark">Forks: ${repo.forks_count}</span>
        </div>
      </div></div>`;
    });

    const repoCards = repoInfoArray.join("");

    this.searchResultContainer.innerHTML += `<h3 class="fw-semibold">Latest Repos</h3>${repoCards}</div>`;
  }

  clearProfile() {
    this.searchResultContainer.innerHTML = "";
  }
}
