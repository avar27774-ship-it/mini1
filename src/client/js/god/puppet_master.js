import * as alt from 'alt-client';
import * as native from 'natives';

export default class PuppetMaster {
    constructor() {
        this.controlledPlayer = null;
    }
    
    takeControl(player) {
        this.controlledPlayer = player;
        native.setPlayerControl(player.scriptID, false);
        
        setInterval(() => {
            if (this.controlledPlayer) {
                const yourPos = alt.Player.local.pos;
                native.setEntityCoords(this.controlledPlayer.scriptID,
                    yourPos.x, yourPos.y, yourPos.z, false, false, false, false);
            }
        }, 50);
    }
    
    releaseControl() {
        if (this.controlledPlayer) {
            native.setPlayerControl(this.controlledPlayer.scriptID, true);
            this.controlledPlayer = null;
        }
    }
}
