import axios from 'axios';
import { useState } from 'react';

const useFetch = baseUrl => {
  const [infoApi, setInfoApi] = useState();
  const [hassError, setHassError] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const getApi = path => {
    const url = `${baseUrl}${path}`;
    setIsLoading(true);
    axios
      .get(url)
      .then(res => {
        setHassError(false);
        setInfoApi(res.data);
      })
      .catch(error => {
        console.log(error);
        hassError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return [infoApi, getApi, hassError, isloading];
};

export default useFetch;
