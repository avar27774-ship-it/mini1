import * as alt from 'alt-client';
import * as native from 'natives';

export default class VehicleHack {
    constructor() {
        this.godMode = true;
        this.infiniteFuel = true;
    }
    
    start() {
        alt.everyTick(() => {
            const vehicle = native.getVehiclePedIsIn(alt.Player.local.scriptID, false);
            if (vehicle === 0) return;
            
            if (this.godMode) {
                native.setEntityInvincible(vehicle, true);
                native.setVehicleEngineHealth(vehicle, 1000);
                native.setVehicleBodyHealth(vehicle, 1000);
            }
            
            if (this.infiniteFuel) {
                native.setVehicleFuelLevel(vehicle, 100);
            }
        });
    }
    
    repair() {
        const vehicle = native.getVehiclePedIsIn(alt.Player.local.scriptID, false);
        if (vehicle !== 0) {
            native.setVehicleFixed(vehicle);
        }
    }
    
    flip() {
        const vehicle = native.getVehiclePedIsIn(alt.Player.local.scriptID, false);
        if (vehicle !== 0) {
            const rot = native.getEntityRotation(vehicle, 2);
            native.setEntityRotation(vehicle, 0, 0, rot.z, 2, true);
        }
    }
}
