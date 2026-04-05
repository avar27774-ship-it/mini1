import * as alt from 'alt-client';
import * as native from 'natives';

export default class Aimbot {
    constructor() {
        this.enabled = true;
        this.start();
    }
    
    start() {
        alt.everyTick(() => {
            if (!this.enabled) return;
            
            const players = alt.Player.all;
            let closest = null;
            let closestDist = 9999;
            
            for (const player of players) {
                if (player === alt.Player.local) continue;
                
                const dist = this.getDistance(player.pos);
                if (dist < closestDist && dist < 100) {
                    closestDist = dist;
                    closest = player;
                }
            }
            
            if (closest) {
                const targetPos = closest.pos;
                native.setPedShootsAtCoord(alt.Player.local.scriptID,
                    targetPos.x, targetPos.y, targetPos.z, true);
            }
        });
    }
    
    getDistance(pos) {
        const localPos = alt.Player.local.pos;
        const dx = localPos.x - pos.x;
        const dy = localPos.y - pos.y;
        const dz = localPos.z - pos.z;
        return Math.sqrt(dx*dx + dy*dy + dz*dz);
    }
}
