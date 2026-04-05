import * as alt from 'alt-client';
import * as native from 'natives';

export default class WeaponHack {
    constructor() {
        this.noRecoil = true;
        this.noSpread = true;
        this.infiniteAmmo = true;
    }
    
    start() {
        alt.everyTick(() => {
            const ped = alt.Player.local.scriptID;
            
            if (this.noRecoil) {
                native.setPedRecoil(ped, 0);
            }
            
            if (this.noSpread) {
                native.setPedAccuracy(ped, 100);
            }
            
            if (this.infiniteAmmo) {
                const weapon = native.getSelectedPedWeapon(ped);
                native.setPedAmmo(ped, weapon, 9999);
            }
        });
    }
}
