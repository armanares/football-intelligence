
const players = [
    { name: "Erling Haaland", position: "Forward", league: "Premier League" },
    { name: "Mohamed Salah", position: "Forward", league: "Premier League" },
    { name: "Bukayo Saka", position: "Forward", league: "Premier League" },
    { name: "Rodri", position: "Midfielder", league: "Premier League" },
    { name: "Virgil van Dijk", position: "Defender", league: "Premier League" },
    { name: "Kylian Mbappe", position: "Forward", league: "La Liga" },
    { name: "Jude Bellingham", position: "Midfielder", league: "La Liga" },
    { name: "Vinicius Junior", position: "Forward", league: "La Liga" }
];

const playerList = document.getElementById("playerList");
const searchInput = document.getElementById("searchInput");
const positionFilter = document.getElementById("positionFilter");
const leagueFilter = document.getElementById("leagueFilter");
const emptyMessage = document.getElementById("emptyMessage");

function displayPlayers(data) {
    playerList.innerHTML = "";

    data.forEach(player => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.position}</td>
            <td>${player.league}</td>
        `;

        playerList.appendChild(row);
    });

    emptyMessage.hidden = data.length !== 0;
}

function filterPlayers() {
    const searchValue = searchInput.value.toLowerCase();
    const selectedPosition = positionFilter.value;
    const selectedLeague = leagueFilter.value;

    const filteredPlayers = players.filter(player => {
        const matchesName = player.name.toLowerCase().includes(searchValue);

        const matchesPosition =
            selectedPosition === "all" ||
            player.position === selectedPosition;

        const matchesLeague =
            selectedLeague === "all" ||
            player.league === selectedLeague;

        return matchesName && matchesPosition && matchesLeague;
    });

    displayPlayers(filteredPlayers);
}

searchInput.addEventListener("input", filterPlayers);
positionFilter.addEventListener("change", filterPlayers);
leagueFilter.addEventListener("change", filterPlayers);

displayPlayers(players);
