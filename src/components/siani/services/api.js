import axios from "axios";
//const baseUrl = "http://148.204.65.210:8005/";
const baseUrl = process.env.REACT_APP_BASE_URL_SIANI_SERVICE;
const TOKEN_KEY = "SIANI-TOKEN-SESSION";
const baseUrlMail = process.env.REACT_APP_BASE_URL_EMAIL_SERVICE;

//Enviroments
console.log('ENVIRONMENTS: ', process.env);

//General 2.0
export async function generalPOST(data) 
{
    return await axios
    .post(`${baseUrl}general/`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//Get All general for edit
export async function getGeneralAll() 
{
    return await axios
    .get(`${baseUrl}general/`,{})
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//PUT General 2.0
export async function generalPUT(quiz_id,data) 
{
    return await axios
    .put(`${baseUrl}general/`+quiz_id, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//========================================================

//PUT Company 2.0
export async function companyPUT(quiz_id,data) 
{
    return await axios
    .put(`${baseUrl}company/`+quiz_id, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//GET Company 2.0
export async function companyGetByID(quiz_id) 
{
    return await axios
    .get(`${baseUrl}company/`+quiz_id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
}


//========================================================

//PUT Advisory 2.0
export async function advisoryPUT(quiz_id,data) 
{
    return await axios
    .put(`${baseUrl}advisory/`+quiz_id, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//GET Advisory 2.0
export async function advisoryGetByID(quiz_id) 
{
    return await axios
    .get(`${baseUrl}advisory/`+quiz_id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//========================================================

//PUT Process 2.0
export async function processPUT(quiz_id,data) 
{
    return await axios
    .put(`${baseUrl}process/`+quiz_id, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//GET Process 2.0
export async function processGetByID(quiz_id) 
{
    return await axios
    .get(`${baseUrl}process/`+quiz_id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//========================================================

//PUT Marketing 2.0
export async function marketingPUT(quiz_id,data) 
{
    return await axios
    .put(`${baseUrl}marketing/`+quiz_id, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//GET Marketing 2.0
export async function marketingGetByID(quiz_id) 
{
    return await axios
    .get(`${baseUrl}marketing/`+quiz_id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//========================================================

//PUT Future 2.0
export async function futurePUT(quiz_id,data) 
{
    return await axios
    .put(`${baseUrl}future/`+quiz_id, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//GET Future 2.0
export async function futureGetByID(quiz_id) 
{
    return await axios
    .get(`${baseUrl}future/`+quiz_id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//========================================================

//PUT Forta 2.0
export async function fortaPUT(quiz_id,data) 
{
    return await axios
    .put(`${baseUrl}forta/`+quiz_id, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//GET Forta 2.0
export async function fortaGetByID(quiz_id) 
{
    return await axios
    .get(`${baseUrl}forta/`+quiz_id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//AuthValidation
export async function authValidation() {
  return await axios
    .post(
      `${baseUrl}authentication/verify`,
      {},
      {
        headers: {
          jwt_token: getToken(),
        },
      }
    )
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//Send Code
export async function sendCode(email) {
  return await axios
    .get(`${baseUrlMail}sendCode/`+email, 
    {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then((response) => {
      console.log(response);
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

//Reset Password
export async function resetPass(data) {
  return await axios
    .post(`${baseUrlMail}resetPassword`, data, 
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    })
    .then((response) => {
      console.log(response);
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

//Send Mail for contact
export async function sendMail(data) {
  return await axios
    .post(`${baseUrlMail}sendMail`, data, 
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    })
    .then((response) => {
      console.log(response);
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

//Send Mail for contact
export async function sendMailConfirmation(data) {
  return await axios
    .post(`${baseUrlMail}sendConfirmation`, data, 
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    })
    .then((response) => {
      console.log(response);
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

// edit user
export async function editUser(data) {
  return await axios
  .post(`${baseUrl}perfil/create`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    console.log(response);
    return response.data;
  });
}

//Login
export async function login(data) {
  await axios
    .post(`${baseUrl}authentication/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      localStorage.setItem(TOKEN_KEY, response.data.jwtToken);
    });
}

//Signup
export async function signup(data) {
  return await axios.post(`${baseUrl}authentication/register`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

//Logout
export async function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

//Home getprofile
export async function home() {
  return await axios
    .post(
      `${baseUrl}dashboard/`,
      {},
      {
        headers: {
          jwt_token: getToken(),
        },
      }
    )
    .then((response) => {
      console.log(response);
      return response.data;
    });
}

//Agregar token,local storage

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

//General Busqueda
export async function generalBusqueda(data) {

  return await axios
  .post(`${baseUrl}general/busqueda`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    console.log(response);
    return response.data;
  });
}

//Buscar Encuesta por Nombre
export async function findN(data) {

  return await axios
  .post(`${baseUrl}report/find`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    console.log(response);
    return response.data;
  });
}

//Buscar Encuesta por Empresa
export async function findE(data) {

  return await axios
  .post(`${baseUrl}report/search`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    console.log(response);
    return response.data;
  });
}



//View for Report
export async function view(data) {

  return await axios
  .post(`${baseUrl}report/view`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    console.log(response);
    return response.data;
  });
}