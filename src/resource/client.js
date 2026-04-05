import * as alt from 'alt-client';
import * as native from 'natives';

alt.on('consoleCommand', (cmd, ...args) => {
    if (cmd === 'god') {
        native.setEntityInvincible(alt.Player.local.scriptID, true);
        alt.log('God mode enabled');
    }
});

alt.log('MajesticCrypt resource loaded');
