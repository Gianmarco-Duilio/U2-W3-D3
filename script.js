fetch("https://striveschool-api.herokuapp.com/books")
  .then((esito) => {
    console.log(esito);
    if (esito.ok) {
      return esito.json();
    } else {
      throw new Error("ERRORE NEL REPERIMENTO DATI");
    }
  })

  .then((book) => {
    console.log("BOOK", book);
    book.forEach((book) => {
      colonna(book);
    });
  });

const colonna = (book) => {
  const contenitoreLibri = document.getElementById("contenitore");
  const colonna = document.createElement("div");
  //aggiungo una classe al tag div
  colonna.classList.add("col-md-4");
  contenitoreLibri.appendChild(colonna);

  const card = document.createElement("div");
  card.classList.add("card", "bg-dark", "shadow", "p-3", "mb-5", "rounded-4", "h-100");
  colonna.appendChild(card);

  const immagine = document.createElement("img");
  immagine.classList.add("card-img-top", "object-fit-cover");
  immagine.src = book.img;
  card.appendChild(immagine);

  //   console.log(immagine);

  const bodyCard = document.createElement("div");
  bodyCard.classList.add("card-body", "text-center");
  card.appendChild(bodyCard);

  const title = document.createElement("h3");
  title.classList.add("card-title", "text-white");
  title.innerText = book.title;
  //   console.log(title);
  bodyCard.appendChild(title);

  const price = document.createElement("p");
  price.classList.add("card-text", "text-white");
  price.innerText = book.price + "£";
  bodyCard.appendChild(price);
  //   console.log(price);

  const buttonAdd = document.createElement("button");
  buttonAdd.classList.add("btn", "btn-success", "m-2", "align-text-bottom");
  bodyCard.appendChild(buttonAdd);
  buttonAdd.innerText = "Add";
  const buttonRem = document.createElement("button");
  buttonRem.classList.add("btn", "btn-danger", "m-2", "align-text-bottom");
  bodyCard.appendChild(buttonRem);
  buttonRem.innerText = "Remove";
  buttonRem.onclick = remove;
  function remove() {
    colonna.innerHTML = "";
  }
};
