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
		Authorization: `JWT ${JwtToken()}`,
    'Access-Control-Allow-Origin': '*'
  }
})

export const changeHeader = async () => {
  Api.defaults.headers['Authorization'] = `JWT ${JwtToken()}`;
}

export const clearHeader = () => {
  Api.defaults.headers['Authorization'] = null;
}

export default Api