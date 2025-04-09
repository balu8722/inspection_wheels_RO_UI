// const API_BASE_URL = import.meta.env.VITE_API_URL;
const API_BASE_URL = (import.meta as any).env.VITE_API_URL;

export const BASE_URL = {
  USERS: `${API_BASE_URL}/users`,
  POSTS: `${API_BASE_URL}/posts`,
  COMMENTS: `${API_BASE_URL}/comments`,
  TODOS: `${API_BASE_URL}/todos`,
};
