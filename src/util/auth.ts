import axios from 'axios';

const API_KEY = 'AIzaSyCb1ZjJqnuiJlUgMq5-cANSojnvP7gZtzM';

const authenticate = async (
  mode: string,
  email: string,
  password: string,
  name?: string | undefined,
) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    displayName: name,
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const { displayName, idToken } = response.data;

  return { displayName, idToken };
};

export const createUser = (email: string, password: string, name: string) => {
  return authenticate('signUp', email, password, name);
};

export const loginUser = (email: string, password: string) => {
  return authenticate('signInWithPassword', email, password);
};

export const forgotPassword = async (email: string) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`,
    {
      email: email,
      requestType: 'PASSWORD_RESET',
    },
  );
  return response;
};
