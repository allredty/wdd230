const baseURL = "https://allredty.github.io/wdd230/";
const linksURL = "https://allredty.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}
  
getLinks();
  

function displayLinks(weeks) {
  const container = document.querySelector('#activity-links');

  weeks.forEach(week => {
    // Create the week heading
    const weekHeader = document.createElement('h2');
    weekHeader.textContent = week.week;
    container.appendChild(weekHeader);

    // Create the list of activities
    const ul = document.createElement('ul');

    week.links.forEach((link, index) => {
      const li = document.createElement('li');
      li.style.display = "inline"; // Display list items inline

      const a = document.createElement('a');
      a.href = `${baseURL}${link.url}`;
      a.textContent = link.title;
      li.appendChild(a);

      ul.appendChild(li);

      // Add a pipe separator except for the last link
      if (index < week.links.length - 1) {
        const separator = document.createTextNode(" | ");
        ul.appendChild(separator);
      }
    });

    container.appendChild(ul);
  });
}

  



