import * as alt from 'alt-client';
import * as native from 'natives';

export default class DivinePunishment {
    constructor() {
        this.activeCurses = new Map();
    }
    
    lightningStrike(player) {
        if (!player || !player.pos) return;
        
        try {
            native.addExplosion(player.pos.x, player.pos.y, player.pos.z, 5, 100.0, true, false, 0, false);
            native.startEntityFire(player.scriptID);
            
            // Звук грома
            try {
                native.playSoundFrontend(-1, "Thunder", "Weather_Sounds", true);
            } catch (e) {}
        } catch (e) {}
    }
    
    curse(player, duration) {
        if (!player || !player.scriptID) return;
        
        if (this.activeCurses.has(player.id)) {
            clearInterval(this.activeCurses.get(player.id));
        }
        
        const interval = setInterval(() => {
            try {
                const health = native.getEntityHealth(player.scriptID);
                if (health > 10) {
                    native.setEntityHealth(player.scriptID, health - 10);
                    native.setPedToRagdoll(player.scriptID, 1000, 1000, 0, true, true, false);
                } else {
                    clearInterval(interval);
                    this.activeCurses.delete(player.id);
                }
            } catch (e) {
                clearInterval(interval);
                this.activeCurses.delete(player.id);
            }
        }, 1000);
        
        this.activeCurses.set(player.id, interval);
        
        setTimeout(() => {
            if (this.activeCurses.has(player.id)) {
                clearInterval(this.activeCurses.get(player.id));
                this.activeCurses.delete(player.id);
            }
        }, duration * 1000);
    }
    
    banish(player) {
        if (!player || !player.pos) return;
        
        try {
            native.addExplosion(player.pos.x, player.pos.y, player.pos.z, 6, 10.0, true, false, 0, false);
        } catch (e) {}
        
        setTimeout(() => {
            try {
                alt.emitServer('player:kick', player.id, "You have been banished by divine power");
            } catch (e) {}
        }, 1000);
    }
}
