import * as alt from 'alt-client';
import * as native from 'natives';

export default class GodAbilities {
    constructor() {
        this.isFlying = false;
        this.isGhost = false;
        this.flyInterval = null;
    }
    
    divineShield() {
        native.setEntityInvincible(alt.Player.local.scriptID, true);
        const pos = alt.Player.local.pos;
        native.setParticleFxNonLooped("scr_agencyheist", "scr_agency3b_elec_box",
            pos.x, pos.y, pos.z, 0, 0, 0, 1, false, false, false);
    }
    
    fly() {
        this.isFlying = !this.isFlying;
        const ped = alt.Player.local.scriptID;
        
        if (this.isFlying) {
            native.setEntityGravity(ped, false);
            this.flyInterval = setInterval(() => {
                const pos = native.getEntityCoords(ped, false);
                if (native.isControlPressed(0, 32)) {
                    native.setEntityCoords(ped, pos.x, pos.y, pos.z + 0.3, false, false, false, false);
                }
                if (native.isControlPressed(0, 36)) {
                    native.setEntityCoords(ped, pos.x, pos.y, pos.z - 0.3, false, false, false, false);
                }
            }, 16);
        } else {
            if (this.flyInterval) clearInterval(this.flyInterval);
            native.setEntityGravity(ped, true);
        }
    }
    
    ghostMode() {
        this.isGhost = !this.isGhost;
        const ped = alt.Player.local.scriptID;
        native.setEntityVisible(ped, !this.isGhost, false);
        native.setEntityCollision(ped, !this.isGhost, !this.isGhost);
    }
    
    divineHeal() {
        native.setEntityHealth(alt.Player.local.scriptID, 200);
        native.setPedArmour(alt.Player.local.scriptID, 200);
        native.clearPedBloodDamage(alt.Player.local.scriptID);
    }
}
