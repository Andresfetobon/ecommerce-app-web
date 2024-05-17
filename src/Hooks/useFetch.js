import axios from 'axios';
import { useState } from 'react';

const useFetch = baseUrl => {
  const [infoApi, setInfoApi] = useState();
  const [hassError, setHassError] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  //GET
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

  //POST
  const postApi = (path, data) => {
    const url = `${baseUrl}${path}`;
    axios.post(url, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  return [infoApi, getApi, hassError, isloading, postApi];
};

export default useFetch;
