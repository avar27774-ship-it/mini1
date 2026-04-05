import * as alt from 'alt-server';

alt.on('playerConnect', (player) => {
    alt.log(`Player ${player.name} connected`);
});

alt.on('playerDisconnect', (player, reason) => {
    alt.log(`Player ${player.name} disconnected: ${reason}`);
});
