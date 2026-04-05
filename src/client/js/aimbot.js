import * as alt from 'alt-client';
import * as native from 'natives';

export default class Aimbot {
    constructor() {
        this.enabled = true;
        this.fov = 30;
        this.smoothing = 5;
        this.target = null;
        this.isRunning = false;
    }
    
    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        
        alt.everyTick(() => {
            if (!this.enabled) return;
            try {
                this.findTarget();
                this.aimAtTarget();
            } catch (e) {}
        });
    }
    
    stop() {
        this.isRunning = false;
    }
    
    findTarget() {
        let closestDist = this.fov;
        this.target = null;
        
        const players = alt.Player.all;
        if (!players || players.length === 0) return;
        
        for (const player of players) {
            if (!player || player === alt.Player.local) continue;
            if (!player.pos) continue;
            
            try {
                const screenPos = native.getScreenCoordFromWorldCoord(player.pos.x, player.pos.y, player.pos.z);
                if (!screenPos) continue;
                
                const dist = Math.hypot(screenPos.x - 0.5, screenPos.y - 0.5) * 100;
                
                if (dist < closestDist && dist < this.fov) {
                    closestDist = dist;
                    this.target = player;
                }
            } catch (e) {}
        }
    }
    
    aimAtTarget() {
        if (!this.target || !this.target.pos) return;
        
        try {
            const targetPos = this.target.pos;
            const localPos = alt.Player.local.pos;
            if (!localPos) return;
            
            const dx = targetPos.x - localPos.x;
            const dy = targetPos.y - localPos.y;
            const dz = targetPos.z - localPos.z;
            
            const pitch = Math.atan2(dz, Math.hypot(dx, dy)) * (180 / Math.PI);
            const yaw = Math.atan2(dy, dx) * (180 / Math.PI);
            
            native.setGameplayCamRelativePitch(pitch, 0);
            native.setGameplayCamRelativeHeading(yaw);
        } catch (e) {}
    }
}
