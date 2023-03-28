class Dios {
  constructor(nombre, vidaD, ataqueD, poderD, img) {
    this.nombre = nombre;
    this.vidaD = vidaD;
    this.ataqueD = ataqueD;
    this.poderD = poderD;
    this.img = img;
  }
  toString() {
    return `${this.nombre}-${this.poderD}`;
  }
  atacarUser() {
    vidaU = vidaU - this.ataqueD;
  }
}
const dioses = [
  new Dios("Zeus", 200, 50, "Poder del trueno", "./images/zeus.jpg"),
  new Dios("Poseidón", 175, 40, "Poder de agua", "./images/poseidon.jpg"),
  new Dios("Ares", 150, 30, "Poder del guerrero", "./images/ares.jpg"),
  new Dios("Apolo", 125, 20, "Poder de la belleza", "./images/Apolo.jpg"),
];
const ataquesU = [
  { nombre: "Persuación", daño: 10 },
  { nombre: "Espadazo", daño: 20 },
  { nombre: "Bola de fuego", daño: 25 },
  { nombre: "Bola de nieve", daño: 15 },
];

const mailIngreso = document.getElementById("emailAddress"),
  passIngreso = document.getElementById("password"),
  checkRecordar = document.getElementById("rememberMe"),
  btnIngresar = document.getElementById("btnLogin"),
  contOculto = document.getElementById("logged"),
  contTarjetasD = document.getElementById("tarjetas"),
  ataquesContainer = document.getElementById("ataques-container"),
  btnAtaques = document.getElementById("btn-ataques");

function guardarData(storage) {
  const data = {
    mailIngreso: mailIngreso.value,
    passIngreso: passIngreso.value,
  };
  storage.setItem("mailIngreso", JSON.stringify(data));
}
btnIngresar.addEventListener("click", (e) => {
  e.preventDefault();
  let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!regexMail.test(mailIngreso.value) && passIngreso.value < 8) {
    alert("Rellene todos los campos");
  } else {
    mostrarDioses();
    if (checkRecordar.checked) {
      guardarData(localStorage);
    } else {
      guardarData(sessionStorage);
    }
  }
});

function mostrarDioses() {
  contenido.style.display = "block";

  crearTarjetas();
}

function crearTarjetas() {
  const tarjetas = document.querySelector(".card-group");

  for (let i = 0; i <= 3; i++) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjetas.appendChild(tarjeta);

    let img = document.createElement("img");
    img.src = dioses[i].img;
    tarjeta.appendChild(img);

    let h2 = document.createElement("h2");
    h2.textContent = dioses[i].nombre;
    tarjeta.appendChild(h2);

    let p = document.createElement("p");
    p.textContent = dioses[i].poderD;
    tarjeta.appendChild(p);

    (p = document.createElement("p")),
      (p.textContent = "Vida " + dioses[i].vidaD);
    tarjeta.appendChild(p);
  }
}

for (let i = 0; i < ataquesU.length; i++) {
  const opcion = document.createElement("a");
  opcion.href = "#";
  opcion.textContent = ataquesU[i].nombre;

  const itemAtaque = document.createElement("li");
  itemAtaque.appendChild(opcion);

  ataquesContainer.appendChild(itemAtaque);
}

btnAtaques.addEventListener("click", function () {
  if (ataquesContainer.style.display === "none") {
    ataquesContainer.style.display = "block";
  } else {
    ataquesContainer.style.display = "none";
  }
});


/*const porcentaje = (a, b) => a * (b / 100);
const resta = (a, b) => a - b;
let vidaU = 500;
let diosE;
let ataque;
  if (menu == "s") {
  function eleccionDios() {
    let eleccion2 = parseInt(
      prompt(
        `Muy bien guerrero, escoge el dios que quieras enfrentar:\n1) ${dioses[0].toString()}\n2) ${dioses[1].toString()}\n3) ${dioses[2].toString()}\n4) ${dioses[3].toString()} `
      )
    );

    let opcionCorrecta = true;
    switch (eleccion2) {
      case 1:
        alert(`Has escogido a ${dioses[0].toString()}`);
        diosE = dioses[0];

        break;

      case 2:
        alert(`Has escogido a ${dioses[1].toString()}`);
        diosE = dioses[1];

        break;
      case 3:
        alert(`Has escogido a ${dioses[2].toString()}`);
        diosE = dioses[2];

        break;
      case 4:
        alert(`Has escogido a ${dioses[3].toString()}`);
        diosE = dioses[3];

        break;
      default:
        alert("Opción incorrecta");
        opcionCorrecta = false;
        break;
    }
    return opcionCorrecta;
  }

  if (eleccionDios()) {
    for (const ataques of ataquesU) {
      const index = ataquesU.indexOf(ataques);
      console.log(
        `${index + 1}) ${ataques.nombre} - ${ataques.daño} % de vida`
      );
    }

    function eleccionAtaque() {
      opcionCorrecta = true;
      var eleccion3 = parseInt(
        prompt(
          `Escoge un ataque :\n1)${ataquesU[0].nombre}\n2)${ataquesU[1].nombre}\n3)${ataquesU[2].nombre}\n4)${ataquesU[3].nombre} `
        )
      );

      switch (eleccion3) {
        case 1:
          ataque = porcentaje(diosE.vidaD, ataquesU[0].daño);
          break;

        case 2:
          ataque = porcentaje(diosE.vidaD, ataquesU[1].daño);
          break;
        case 3:
          ataque = porcentaje(diosE.vidaD, ataquesU[2].daño);
          break;
        case 4:
          ataque = porcentaje(diosE.vidaD, ataquesU[3].daño);
          break;
        default:
          alert("Opción incorrecta");
          opcionCorrecta = false;
          break;
      }

      return opcionCorrecta;
    }
  }
  if (eleccionAtaque()) {
    let vidaTotal = resta(diosE.vidaD, ataque);

    let vidaFinal = vidaTotal;
    let resultado = alert(
      "Ahora " + diosE.nombre + " tiene " + vidaTotal + " puntos de vida"
    );

    do {
      eleccionAtaque();
      vidaFinal = resta(vidaFinal, ataque);
      resultado = alert(
        "Ahora " + diosE.nombre + " tiene " + vidaFinal + " puntos de vida"
      );

      if (vidaFinal <= 0) {
        const diosesVivos = dioses.filter (dios => dios.vidaD > 0);
        alert ("Muy bien guerrero, solo te falta vencer a: \n " + diosesVivos );
      }
    } while (vidaFinal > 0);
  }
} else if (menu == "n") {
  alert("Menudo cobarde, largo de aquí");
} else {
  alert("Has ingresado un valor incorrecto");
}
*/