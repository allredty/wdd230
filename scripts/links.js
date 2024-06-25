const baseURL = "https://allredty.github.io/wdd230/";
const linksURL = "https://allredty.github.io/wdd230/data/links.json";
const theWeeks = document.querySelector("#the-weeks");

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  //   console.log(data);
  displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
  weeks.forEach((week) => {
    let card = document.createElement("section");
    let weeks = document.createElement("p");
    let links = document.createElement("p");

    weeks.textContent = `${week.weeks}`;
    links.textContent = `${week.links}`;

    card.appendChild(weeks);
    card.appendChild(links);

    theWeeks.appendChild(card);
  });
};

getLinks();


