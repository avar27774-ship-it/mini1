import * as alt from 'alt-client';
import * as native from 'natives';

export default class GodAbilities {
    constructor() {
        this.isFlying = false;
        this.isGhost = false;
        this.isShieldActive = false;
        this.flyInterval = null;
        this.localPlayer = null;
    }
    
    getPlayer() {
        if (!alt.Player || !alt.Player.local) return null;
        return alt.Player.local;
    }
    
    divineShield() {
        const player = this.getPlayer();
        if (!player || !player.scriptID) return;
        
        this.isShieldActive = true;
        
        try {
            native.setEntityInvincible(player.scriptID, true);
            native.setPlayerInvincible(player.id, true);
            
            const pos = player.pos;
            if (pos) {
                native.addExplosion(pos.x, pos.y, pos.z, 1, 1.0, true, false, 0, false);
            }
        } catch (e) {}
    }
    
    fly() {
        const player = this.getPlayer();
        if (!player || !player.scriptID) return;
        
        if (this.isFlying) {
            // Отключаем полет
            if (this.flyInterval) {
                clearInterval(this.flyInterval);
                this.flyInterval = null;
            }
            try {
                native.setEntityGravity(player.scriptID, true);
            } catch (e) {}
            this.isFlying = false;
            return;
        }
        
        // Включаем полет
        this.isFlying = true;
        try {
            native.setEntityGravity(player.scriptID, false);
        } catch (e) {}
        
        this.flyInterval = setInterval(() => {
            if (!this.isFlying) {
                if (this.flyInterval) clearInterval(this.flyInterval);
                return;
            }
            
            const currentPlayer = this.getPlayer();
            if (!currentPlayer || !currentPlayer.scriptID) return;
            
            try {
                const pos = native.getEntityCoords(currentPlayer.scriptID, false);
                if (!pos) return;
                
                // W A S D + Space управление
                if (native.isControlPressed(0, 32)) { // Space - вверх
                    native.setEntityCoords(currentPlayer.scriptID, pos.x, pos.y, pos.z + 0.5, false, false, false, false);
                }
                if (native.isControlPressed(0, 36)) { // Ctrl - вниз
                    native.setEntityCoords(currentPlayer.scriptID, pos.x, pos.y, pos.z - 0.5, false, false, false, false);
                }
                if (native.isControlPressed(0, 32)) { // W - вперед
                    native.setEntityCoords(currentPlayer.scriptID, pos.x, pos.y + 0.3, pos.z, false, false, false, false);
                }
                if (native.isControlPressed(0, 33)) { // S - назад
                    native.setEntityCoords(currentPlayer.scriptID, pos.x, pos.y - 0.3, pos.z, false, false, false, false);
                }
                if (native.isControlPressed(0, 34)) { // A - влево
                    native.setEntityCoords(currentPlayer.scriptID, pos.x - 0.3, pos.y, pos.z, false, false, false, false);
                }
                if (native.isControlPressed(0, 35)) { // D - вправо
                    native.setEntityCoords(currentPlayer.scriptID, pos.x + 0.3, pos.y, pos.z, false, false, false, false);
                }
            } catch (e) {}
        }, 16);
    }
    
    ghostMode() {
        const player = this.getPlayer();
        if (!player || !player.scriptID) return;
        
        this.isGhost = !this.isGhost;
        
        try {
            native.setEntityVisible(player.scriptID, !this.isGhost, false);
            native.setEntityCollision(player.scriptID, !this.isGhost, !this.isGhost);
        } catch (e) {}
    }
    
    divineHeal() {
        const player = this.getPlayer();
        if (!player || !player.scriptID) return;
        
        try {
            native.setEntityHealth(player.scriptID, 200);
            native.setPedArmour(player.scriptID, 200);
            native.clearPedBloodDamage(player.scriptID);
            
            const pos = player.pos;
            if (pos) {
                native.addExplosion(pos.x, pos.y, pos.z, 1, 1.0, true, false, 0, false);
            }
        } catch (e) {}
    }
}
