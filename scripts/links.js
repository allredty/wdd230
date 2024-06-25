const baseURL = "https://allredty.github.io/wdd230/";
const linksURL = "https://allredty.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}


getLinks();

function displayLinks(weeks) {
    const linksContainer = document.querySelector('#the-weeks');
    weeks.forEach(week => {
        const weekSection = document.createElement('div');
        weekSection.classList.add('week-section');

        const weekTitle = document.createElement('h2');
        weekTitle.textContent = week.week;
        weekSection.appendChild(weekTitle);

        const linksList = document.createElement('ul');
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        weekSection.appendChild(linksList);
        linksContainer.appendChild(weekSection);
    });
}



