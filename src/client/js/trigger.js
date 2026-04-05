import * as alt from 'alt-client';
import * as native from 'natives';

export default class Triggerbot {
    constructor() {
        this.enabled = true;
        this.delay = 50;
    }
    
    start() {
        alt.everyTick(() => {
            if (!this.enabled) return;
            const crosshair = this.isCrosshairOnEnemy();
            if (crosshair) {
                native.shootSingleBulletBetweenCoords(
                    alt.Player.local.pos.x, alt.Player.local.pos.y, alt.Player.local.pos.z,
                    crosshair.x, crosshair.y, crosshair.z, 0, true, 0, 0, 0);
            }
        });
    }
    
    isCrosshairOnEnemy() {
        const players = alt.Player.all;
        for (const player of players) {
            if (player === alt.Player.local) continue;
            const screenPos = native.getScreenCoordFromWorldCoord(player.pos.x, player.pos.y, player.pos.z);
            if (Math.abs(screenPos.x - 0.5) < 0.05 && Math.abs(screenPos.y - 0.5) < 0.05) {
                return player.pos;
            }
        }
        return null;
    }
}
