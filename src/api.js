const API_URL = "https://dummyjson.com";

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const { users } = await response.json();
  return users;
};

export const getUserById = async (id) => {
  const response = await fetch(`${API_URL}/users/${id}`);
  const data = await response.json();
  return data;
};

const BASE_URL = "https://dummyjson.com";

export const login = (credentials) => {
  return fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials)
  }).then((res) => res.json());
};
