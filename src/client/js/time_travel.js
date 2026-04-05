import * as alt from 'alt-client';
import * as native from 'natives';

export default class TimeTravel {
    constructor() {
        this.snapshots = [];
        this.maxSnapshots = 30;
    }
    
    start() {
        setInterval(() => {
            const pos = alt.Player.local.pos;
            const health = native.getEntityHealth(alt.Player.local.scriptID);
            
            this.snapshots.push({
                pos: { ...pos },
                health: health,
                time: Date.now()
            });
            
            while (this.snapshots.length > this.maxSnapshots) {
                this.snapshots.shift();
            }
        }, 5000);
    }
    
    rollback(seconds) {
        const targetTime = Date.now() - (seconds * 1000);
        let closest = null;
        
        for (const snap of this.snapshots) {
            if (snap.time <= targetTime) {
                closest = snap;
            }
        }
        
        if (closest) {
            native.setEntityCoords(alt.Player.local.scriptID, 
                closest.pos.x, closest.pos.y, closest.pos.z,
                false, false, false, false);
            native.setEntityHealth(alt.Player.local.scriptID, closest.health);
        }
    }
}
