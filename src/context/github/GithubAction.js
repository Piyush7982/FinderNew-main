import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

console.log("GitHub URL:", GITHUB_URL);
console.log("GitHub Token:", GITHUB_TOKEN);

const github = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

// Search Users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  console.log(GITHUB_TOKEN);
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
  console.log(GITHUB_TOKEN);
};

// Get user and repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);

  return { user: user.data, repos: repos.data };
};
