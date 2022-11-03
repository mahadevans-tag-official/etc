import constant from 'js/function/contant';

let _token;

const tokenGet = () => {
  return fetch(`${constant.API_ENDPOINT_ROOT}/auth/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    })
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
    });
};

export default () => {
  const token = _token ?? tokenGet();
};
