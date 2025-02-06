function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let card = document.createElement("div");
  card.style.border = "5px solid black";
  card.style.display = "flex";
  card.style.gap = "20px";
  card.style.justifyContent = "start";
  card.style.alignItems = "start";
  card.style.padding = "10px";

  let cardThumbnail = document.createElement("img");
  cardThumbnail.setAttribute("src", "thumb.jpg");
  cardThumbnail.setAttribute("alt", `${title} image`);

  let cardTitleDiv = document.createElement("div");

  let cardTitle = document.createElement("h3");
  cardTitle.innerHTML = `<b>${title}</b>`;

  let cardTChanel = document.createElement("h5");
  cardTChanel.innerHTML = `<b>${cName}</b>`;

  card.appendChild(cardThumbnail);
  cardTitleDiv.appendChild(cardTitle);
  cardTitleDiv.appendChild(cardTChanel);
  card.appendChild(cardTitleDiv);

  document.querySelector(".container").appendChild(card);
}

createCard("Crooks", "Crooks Techno");
createCard("Onkar", "Onkar Techno");
createCard("Masti", "Masti Techno");
