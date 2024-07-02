document.addEventListener('DOMContentLoaded', () => {
    const directory = document.getElementById('directory');
    const toggleViewButton = document.getElementById('toggleView');
    const membersURL = "https://allredty.github.io/wdd230/chamber/data/members.json";
    let gridView = true;

    fetch(membersURL)
        .then(response => response.json())
        .then(data => {
            renderDirectory(data);
        });

    toggleViewButton.addEventListener('click', () => {
        gridView = !gridView;
        directory.className = gridView ? 'grid-view' : 'list-view';
        toggleViewButton.textContent = gridView ? '📄List' : '⏹️Grid';
    });

    function renderDirectory(members) {
        members.forEach(member => {
            const card = document.createElement('div');
            card.className = 'member-card';
            card.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
            `;
            directory.appendChild(card);
        });
    }
});

