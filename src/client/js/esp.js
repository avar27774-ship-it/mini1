import * as alt from 'alt-client';
import * as native from 'natives';

export default class ESP {
    constructor() {
        this.enabled = true;
        this.start();
    }
    
    start() {
        alt.everyTick(() => {
            if (!this.enabled) return;
            
            const players = alt.Player.all;
            for (const player of players) {
                if (player === alt.Player.local) continue;
                
                const pos = player.pos;
                const screenPos = native.getScreenCoordFromWorldCoord(pos.x, pos.y, pos.z);
                
                if (screenPos.y > 0 && screenPos.y < 1) {
                    native.drawRect(screenPos.x, screenPos.y, 0.05, 0.1, 255, 0, 0, 150);
                }
            }
        });
    }
}
