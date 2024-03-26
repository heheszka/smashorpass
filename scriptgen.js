function generate() {
  const lista = {
    1: "Kotek1",
    2: "Kotek2",
    3: "kotek3",
    4: "kotek4",
    5: "kotek5",
    6: "kotek6"
  };

  let random1 = Math.floor(Math.random() * (6 - 1) + 1);
  let random2 = Math.floor(Math.random() * (6 - 1) + 1);

  while(random1 == random2){
    random2 = Math.floor(Math.random() * (lista.length - 1) + 1);
  }
  console.log("random1 = ", random1)
  console.log(lista[`${random1}`])
  console.log("random2 = ", random2)
  console.log(lista[`${random2}`])

  const zdj1 = document.querySelector("#img");
  const zdj2 = document.querySelector("#imgg");

  const podpis1 = document.querySelector("#podpisik");
  const podpis2 = document.querySelector("#podpisikk");

  zdj1.setAttribute("src", `img/${random1}.png`);
  zdj2.setAttribute("src", `img/${random2}.png`);

  podpis1.innerText = lista[`${random1}`]
  podpis2.innerText = lista[`${random2}`]
}
