import Axios from 'axios'
export const JwtToken = () => localStorage.getItem('token') || null;

// const apiUrl = window.location.hostname === 'localhost' ?
//   'http://localhost:8000/' :
//   null // replace with deployed API URL

const apiUrl = "https://messenger-django-api.herokuapp.com/"

// const apiUrl = 'https://p4-app.herokuapp.com/'

const Api = Axios.create({
  baseURL: apiUrl,
  headers: {
    // Authorization: `JWT ${JwtToken()}`,
    Authorization: "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImpybyIsImV4cCI6MTYwODA2MTA2NCwiZW1haWwiOiJqZXJlbXlAamVyZW15LmNvbSJ9.ECXDH3tVifFdjoiX0jl4a6nfj4OvHtLQ49Dk0ue1-Ow"
    // 'Access-Control-Allow-Origin': '*',
    // 'Content-Type': "application/json"
  }
})

export const changeHeader = async () => {
  Api.defaults.headers['Authorization'] = `JWT ${JwtToken()}`;
}

export const clearHeader = () => {
  Api.defaults.headers['Authorization'] = null;
}

export default Api