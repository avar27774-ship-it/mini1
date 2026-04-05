import * as alt from 'alt-client';
import * as native from 'natives';

export default class Apocalypse {
    constructor() {
        this.meteorInterval = null;
    }
    
    meteorShower() {
        this.meteorInterval = setInterval(() => {
            const players = alt.Player.all;
            for (const player of players) {
                if (player === alt.Player.local) continue;
                const pos = player.pos;
                native.addExplosion(pos.x + (Math.random() - 0.5) * 10,
                                   pos.y + (Math.random() - 0.5) * 10,
                                   pos.z + 20, 2, 10.0, true, false, 0, false);
            }
        }, 500);
        
        setTimeout(() => {
            if (this.meteorInterval) clearInterval(this.meteorInterval);
            this.meteorInterval = null;
        }, 30000);
    }
    
    tsunami() {
        native.setWeatherTypePersist("RAIN");
        native.setRain(1.0);
        native.setWind(10.0);
        
        setInterval(() => {
            const players = alt.Player.all;
            for (const player of players) {
                if (player === alt.Player.local) continue;
                native.applyForceToEntity(player.scriptID, 0, 5, 5, 2,
                    0, false, true, true, false, true);
            }
        }, 100);
    }
    
    earthquake() {
        setInterval(() => {
            native.shakeGameplayCam("SMALL_EXPLOSION_SHAKE", 0.5);
            const players = alt.Player.all;
            for (const player of players) {
                if (player !== alt.Player.local && Math.random() < 0.1) {
                    native.setPedToRagdoll(player.scriptID, 1000, 1000, 0, true, true, false);
                }
            }
        }, 100);
    }
}
