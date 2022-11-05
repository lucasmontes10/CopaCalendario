function createGame(player1, hour, player2, group) {
  return `
    <li>
        <div>
          <img class="bandeira" src="./assets/icon-${player1}.svg" alt="${player1}" onmouseout="ocultarJogador()">
          <span class="name-country">${player1}</span>
        </div>
        <div>
          <strong class="hour">${hour}</strong>
          <span class="stage-group">${group}</span>
        </div>
        <div>
          <img class="bandeira" src="./assets/icon-${player2}.svg" alt="${player2}" onmouseout="ocultarJogador()">
          <span class="name-country">${player2.replace("suica","suiça")}</span>
        </div>
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =  
  createCard("20/11", "domingo",  createGame("qatar", "13:00", "ecuador", "Grupo A")) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "iran", "Grupo B") +
    createGame("senegal", "13:00", "netherlands", "Grupo A") +
    createGame("united state", "16:00", "gales", "Grupo B")
  ) +
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard(
    "28/11",
    "segunda",
    createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))
