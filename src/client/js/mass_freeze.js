import * as alt from 'alt-client';
import * as native from 'natives';

export default class MassFreeze {
    constructor() {
        this.frozen = new Map();
    }
    
    freezeAll() {
        const players = alt.Player.all;
        for (const player of players) {
            if (player === alt.Player.local) continue;
            
            native.freezeEntityPosition(player.scriptID, true);
            this.frozen.set(player.id, true);
        }
    }
    
    unfreezeAll() {
        for (const [id] of this.frozen) {
            const player = alt.Player.all.find(p => p.id === id);
            if (player) {
                native.freezeEntityPosition(player.scriptID, false);
            }
        }
        this.frozen.clear();
    }
}
