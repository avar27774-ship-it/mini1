import * as alt from 'alt-client';
import * as native from 'natives';

export default class Teleport {
    constructor() {
        this.savedPositions = [];
    }
    
    toWaypoint() {
        const waypoint = native.getFirstBlipInfoId(8);
        if (waypoint !== 0) {
            const coords = native.getBlipInfoIdCoord(waypoint);
            native.setEntityCoords(alt.Player.local.scriptID, coords.x, coords.y, coords.z + 2, false, false, false, false);
        }
    }
    
    toPlayer(targetPlayer) {
        const pos = targetPlayer.pos;
        native.setEntityCoords(alt.Player.local.scriptID, pos.x, pos.y, pos.z + 1, false, false, false, false);
    }
    
    savePosition(slot) {
        const pos = alt.Player.local.pos;
        this.savedPositions[slot] = { ...pos };
    }
    
    loadPosition(slot) {
        const pos = this.savedPositions[slot];
        if (pos) {
            native.setEntityCoords(alt.Player.local.scriptID, pos.x, pos.y, pos.z, false, false, false, false);
        }
    }
}
