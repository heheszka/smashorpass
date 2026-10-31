const zdj1 = document.querySelector("#img");
const zdj2 = document.querySelector("#imgg");

const podpis1 = document.querySelector("#podpisik");
const podpis2 = document.querySelector("#podpisikk");

let random1 = 0
let random2 = 0

function generate() {
  random1 = Math.floor(Math.random() * (206 - 1) + 1);
  random2 = Math.floor(Math.random() * (206 - 1) + 1);

  while(random1 == random2){
    random2 = Math.floor(Math.random() * (206 - 1) + 1);
  }
  console.log("random1 = ", random1)
  console.log(lista[`${random1}`])
  console.log("random2 = ", random2)
  console.log(lista[`${random2}`])

  zdj1.setAttribute("src", `img/zdjecia_ziomow/${random1}.jpg`);
  zdj2.setAttribute("src", `img/zdjecia_ziomow/${random2}.jpg`);

  podpis1.innerText = lista[`${random1}`]
  podpis2.innerText = lista[`${random2}`]
}

// kopiowanie imion do schowka po kliknięciu
podpis1.style.cursor = "pointer";
podpis2.style.cursor = "pointer";

podpis1.onclick = function () {
    navigator.clipboard.writeText(podpis1.innerText);
};

podpis2.onclick = function () {
    navigator.clipboard.writeText(podpis2.innerText);
};

podpis1.onclick = function () {
    navigator.clipboard.writeText(podpis1.innerText);
    podpis1.innerText = "Skopiowano!";
    setTimeout(() => {
        podpis1.innerText = lista[random1];
    }, 700);
};

podpis2.onclick = function () {
    navigator.clipboard.writeText(podpis2.innerText);
    podpis2.innerText = "Skopiowano!";
    setTimeout(() => {
        podpis2.innerText = lista[random2];
    }, 700);
};
