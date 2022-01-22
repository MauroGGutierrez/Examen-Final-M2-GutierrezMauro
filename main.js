// PRIMERA VERSION DEL REGISTER SI FUNCIONA CORRECTAMENTE
// document.getElementById("createNewAccount").addEventListener("click", async (e) => {
//   e.preventDefault();
//   class DataNewUser {
//     constructor(name, email, password) {
//       (this.name = name), (this.email = email), (this.password = password);
//     }
//   }

//   let namefinish = document.getElementById("name").value;
//   let emailfinish = document.getElementById("email").value;
//   let passfinish = document.getElementById("password").value;

//   const resultUser = new DataNewUser(namefinish, emailfinish, passfinish);
//   console.log(resultUser);
//   fetch("https://tiendavirtualmern.herokuapp.com/api/users", {
//     method: "POST",
//     body: JSON.stringify(resultUser),
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
//   if (namefinish == "" || emailfinish == "" || passfinish == "") {
//     alert(`Por Favor, complete toda las casillas`);
//   } else {
//     alert(`Su cuenta se creo exitosamente`);
//   }
// });
const registerUser = () => {
  document.getElementById("register").addEventListener("submit", async (e) => {
    e.preventDefault();
    const userRegister = {
      name: document.getElementById('nameRegis').value,
      email: document.getElementById('emailRegis').value,
      password: document.getElementById('passwordRegis').value,
    }
    try {
      const url = await fetch("https://tiendavirtualmern.herokuapp.com/api/users",
      {
        method: "POST",
        body: JSON.stringify(userRegister),
        headers: { "Content-Type": "application/json" },
      });
      if(url.status === 500) {
      alert(`Por Favor, complete toda las casillas`);
    } else if (url.status === 400) {
      alert(`Lo sentimos, El usuario ya existe`);
    }else {
      alert(`Su cuenta se creo exitosamente, Bienvenido !`)
    }
    } catch (error) {
      console.log(error);
      alert(error)
    }
  });
};

/*----------------- */
const loginUser = () => {
  document.getElementById("login").addEventListener("submit", async(e) => {
    e.preventDefault();
    const userLogin = {
      email: document.getElementById("loginEmail").value,
      password: document.getElementById("loginPassword").value,
    };
    // const email = document.getElementById("loginEmail").value,
    // const password = document.getElementById("loginPassword").value,
    // ESTA FORMA ES MAS CORTA, NO HAY NECESIDAD DE CREAR UNA CONST PADRE

    try {
    const url = await fetch("https://tiendavirtualmern.herokuapp.com/api/users/login", 
    {
      method: "POST",
      body: JSON.stringify(userLogin),
      // Y YA EN EL BODI NO PONEMOS USERLOGIN SINO : {
      // email,
      // password, ponemos el nombre de las constantes q creamos 
      //}
      headers: { "Content-Type": "application/json" },
    });
    if(url.status === 401) {
      alert(`Ups ! email o contraseña incorrectos`);
    } else {
      alert(`Te logiaste Exitosamente`);
    }
  } catch (error) {
    console.log(error);
    alert(error)
  }
  });
};

//SI QUEREMOS METEMOS TODO LO DE ABAJO DENTRO DE UNA FUNCION
// Y LO LLAMAMOS EN LA FUNCION MAIN SI LO QUEREMOS TENER TODO ORDENADO
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const main = () => {
  loginUser();
  registerUser();
};

main();
