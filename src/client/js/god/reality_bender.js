import * as alt from 'alt-client';
import * as native from 'natives';

export default class RealityBender {
    constructor() {
        this.isInverted = false;
    }
    
    invertGravity() {
        this.isInverted = !this.isInverted;
        const players = alt.Player.all;
        for (const player of players) {
            if (player !== alt.Player.local) {
                native.applyForceToEntity(player.scriptID, 0, 0, 0, this.isInverted ? 15 : -9.8,
                    0, false, true, true, false, true);
            }
        }
    }
    
    createBlackHole(x, y, z) {
        setInterval(() => {
            const players = alt.Player.all;
            for (const player of players) {
                if (player === alt.Player.local) continue;
                const dx = x - player.pos.x;
                const dy = y - player.pos.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 20 && dist > 1) {
                    const force = (20 - dist) / 20 * 10;
                    native.applyForceToEntity(player.scriptID, 0,
                        dx / dist * force, dy / dist * force, 2,
                        0, false, true, true, false, true);
                }
            }
            native.addExplosion(x, y, z, 2, 5.0, true, false, 0, false);
        }, 100);
    }
}
