// Github API 요청을 처리하는 클래스
export default class GithubSearchAPI {
  constructor() {
    this.base_url = "https://api.github.com/users/";
  }

  async getUser(username) {
    const profileResponse = await fetch(`${this.base_url}${username}`);
    const repoResponse = await fetch(
      `${this.base_url}${username}/repos?sort=created`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
