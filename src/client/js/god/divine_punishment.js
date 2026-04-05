import * as alt from 'alt-client';
import * as native from 'natives';

export default class DivinePunishment {
    constructor() {}
    
    lightningStrike(player) {
        const pos = player.pos;
        native.addExplosion(pos.x, pos.y, pos.z, 5, 100.0, true, false, 0, false);
        native.shakeGameplayCam("LARGE_EXPLOSION_SHAKE", 1.0);
        native.startEntityFire(player.scriptID);
        native.playSoundFrontend(-1, "Thunder", "Weather_Sounds", true);
        native.setEntityHealth(player.scriptID, 0);
    }
    
    curse(player, duration) {
        const interval = setInterval(() => {
            const health = native.getEntityHealth(player.scriptID);
            native.setEntityHealth(player.scriptID, health - 10);
            native.setPedToRagdoll(player.scriptID, 500, 500, 0, true, true, false);
            
            if (native.getEntityHealth(player.scriptID) <= 0) {
                clearInterval(interval);
            }
        }, 1000);
        
        setTimeout(() => clearInterval(interval), duration * 1000);
    }
    
    banish(player) {
        const pos = player.pos;
        native.addExplosion(pos.x, pos.y, pos.z, 6, 10.0, true, false, 0, false);
        setTimeout(() => {
            alt.emitServer('player:kick', player.id, "Вы изгнаны божественной силой");
        }, 1000);
    }
}
