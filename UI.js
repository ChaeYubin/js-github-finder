// 동적으로 생성될 UI 작업을 처리하는 클래스
export default class UI {
  constructor({ profile, repos }) {
    this.profile = profile;
    this.repos = repos;
  }

  displayProfile(profile) {
    return `<div class="profile-container card mb-4">
    <div class="card-body d-flex p-3 gap-3">
      <div class="profile-left d-flex flex-column me-2">
        <img
        class="profile-image"
          src="${profile.avatar_url}"
          alt="샘플이미지"
        />
        <button type="button" class="btn view-btn btn-primary mt-2">
          View Profile
        </button>
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
            Company: ${profile.company}
          </ul>
          <ul class="list-group-item">
            Website/Blog: ${
              profile.blog == "" ? "There is no blog " : profile.blog
            }
          </ul>
          <ul class="list-group-item">
            Location: ${profile.location}
          </ul>
          <ul class="list-group-item">
            Member Since: ${profile.create_at}
          </ul>
        </ul>
      </div>
    </div>
  </div>`;
  }

  displayRepos(repos) {
    repos = repos.slice(0, 7); // 최근 레포지토리 6개만 보여준다.
    const repoInfoArray = repos.map((repo) => {
      return `<div class="repository-card card mb-3">
      <div class="card-body d-flex">
        <a href="${repo.url}" class="flex-grow-1 card-link">${repo.name}</a>
        <div class="repository-badges d-flex gap-1 flex-grow-1">
          <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
          <span class="badge bg-success">Watchers: ${repo.watchers_count}</span>
          <span class="badge bg-dark">Forks: ${repo.forks_count}</span>
        </div>
      </div>`;
    });

    const repoCards = repoInfoArray.join("");

    return `<h3 class="fw-semibold">Latest Repos</h3>${repoCards}</div>`;
  }
}
