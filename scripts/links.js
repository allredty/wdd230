const baseURL = "https://allredty.github.io/wdd230/";
const linksURL = "https://allredty.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }

  async function displayLinks(weeks) {
    const container = document.getElementById('weeks-container');
    // container.innerHTML = ''; // Clear any existing content

    weeks.forEach(weekData => {
        const weekDiv = document.createElement('div');
        weekDiv.classList.add('week');

        const weekTitle = document.createElement('h3');
        weekTitle.textContent = weekData.week;
        weekDiv.appendChild(weekTitle);

        const linksList = document.createElement('ul');

        weekData.links.forEach(link => {
            const linkItem = document.createElement('li');

            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;

            linkItem.appendChild(anchor);
            linksList.appendChild(linkItem);
        });

        weekDiv.appendChild(linksList);
        container.appendChild(weekDiv);
    });
}

displayLinks(weeksData);

