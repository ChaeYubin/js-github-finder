// Github API 요청을 처리하는 클래스
export default class GithubSearchAPI {
  constructor() {
    this.base_url = "https://api.github.com/users/";
  }

  async getProfile(name) {
    const response = await fetch(`${this.base_url}${name}`);
    const profile = await response.json();
    return profile;
  }

  async getRepos(name) {
    const response = await fetch(`${this.base_url}${name}/repos?sort=created`);
    const repos = await response.json();
    return repos;
  }
}
