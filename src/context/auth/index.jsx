import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { toast } from 'react-toastify';

import { API } from '../../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  useEffect(() => {
    const localUser = localStorage.getItem('@mi-au-food:user');
    const localToken = localStorage.getItem('@mi-au-food:token');

    const parsedUser = JSON.parse(localUser);

    if (localUser) {
      setUser(parsedUser);
    }

    if (localToken) {
      setToken(localToken);
    }
  }, []);

  const Logoff = () => {
    setUser({});
    setToken('');
<<<<<<< HEAD
=======
    toast.success('Até a próxima!');
>>>>>>> 08990eaef1b91d4585b1fd2e7bd8e9f83158bcc2
    localStorage.clear();
  };

  const signIn = async (userInfo, callback = () => {}) => {
    try {
      const response = await API.post('signin', userInfo);

      const { user: userResponse, accessToken } = response.data;

      localStorage.setItem('@mi-au-food:user', JSON.stringify(userResponse));
      localStorage.setItem('@mi-au-food:token', accessToken);

      setUser(userResponse);
      setToken(accessToken);

      callback(userResponse);
    } catch (err) {
      throw new Error('Algo deu errado no login.');
    }
  };

  const signUp = async (userInfo, callback = () => {}) => {
    try {
      const response = await API.post('signup', userInfo);

      const { user: userResponse, accessToken } = response.data;

      localStorage.setItem('@mi-au-food:user', JSON.stringify(userResponse));
      localStorage.setItem('@mi-au-food:token', accessToken);

      setUser(userResponse);
      setToken(accessToken);

      callback();
    } catch (err) {
      throw new Error('Algo deu errado no registro.');
    }
  };

<<<<<<< HEAD
  const editProfile = data => {
    API.patch(`users/${user.id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      setUser(response.data);
      localStorage.setItem('@mi-au-food:user', JSON.stringify(response.data));
    });
  };
=======
  const editProfile = useCallback(
    data => {
      API.patch(`users/${user.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(response => {
        setUser(response.data);
        localStorage.setItem('@mi-au-food:user', JSON.stringify(response.data));
      });
    },
    [token, user.id],
  );
>>>>>>> 08990eaef1b91d4585b1fd2e7bd8e9f83158bcc2

  const value = useMemo(
    () => ({
      user,
      token,
      signIn,
      signUp,
      editProfile,
      Logoff,
      setUser,
    }),
    [user, token, editProfile],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
