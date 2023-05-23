export default function sortPlayers(listOfPlayers) {
    return listOfPlayers.sort(
        (playerA, playerB) => ((playerA.health > playerB.health) ? -1 : 1),
    );
}
