import * as alt from 'alt-client';
import * as native from 'natives';

export default class AdminEvader {
    constructor() {
        this.admins = [];
        this.alertDistance = 50;
        this.panicMode = false;
    }
    
    loadAdmins(adminList) {
        this.admins = adminList;
    }
    
    start() {
        alt.everyTick(() => {
            const players = alt.Player.all;
            for (const player of players) {
                if (this.admins.includes(player.name)) {
                    const dist = this.getDistance(player.pos);
                    if (dist < this.alertDistance) {
                        this.panicMode = true;
                        this.disableCheats();
                    } else if (dist > this.alertDistance + 20) {
                        this.panicMode = false;
                        this.enableCheats();
                    }
                }
            }
        });
    }
    
    getDistance(pos) {
        const localPos = alt.Player.local.pos;
        return Math.hypot(localPos.x - pos.x, localPos.y - pos.y, localPos.z - pos.z);
    }
    
    disableCheats() {
        alt.emit('cheats:disable');
    }
    
    enableCheats() {
        alt.emit('cheats:enable');
    }
}
