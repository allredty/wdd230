document.addEventListener('DOMContentLoaded', () => {
    const directory = document.getElementById('directory');
    const toggleViewButton = document.getElementById('toggleView');
    let gridView = true;

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            renderDirectory(data);
        });

    toggleViewButton.addEventListener('click', () => {
        gridView = !gridView;
        directory.className = gridView ? 'grid-view' : 'list-view';
    });

    function renderDirectory(members) {
        members.forEach(member => {
            const card = document.createElement('div');
            card.className = 'member-card';
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
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
