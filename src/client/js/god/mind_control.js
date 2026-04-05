import * as alt from 'alt-client';
import * as native from 'natives';

export default class MindControl {
    constructor() {
        this.hallucinations = [];
    }
    
    inducePanic(player) {
        native.setPlayerControl(player.scriptID, false);
        
        const randomAngle = Math.random() * Math.PI * 2;
        native.taskGoToCoordAnyMeans(player.scriptID,
            player.pos.x + Math.cos(randomAngle) * 100,
            player.pos.y + Math.sin(randomAngle) * 100,
            player.pos.z, 10.0, 0, false, 786603, 0);
        
        setTimeout(() => {
            native.setPlayerControl(player.scriptID, true);
        }, 5000);
    }
    
    showHallucination(player) {
        const pos = player.pos;
        for (let i = 0; i < 5; i++) {
            const ped = native.createPed(4, 0x705E61F2,
                pos.x + (Math.random() - 0.5) * 10,
                pos.y + (Math.random() - 0.5) * 10,
                pos.z, 0, true, true);
            native.setEntityAlpha(ped, 100, false);
            setTimeout(() => native.deletePed(ped), 3000);
        }
    }
}
