import * as alt from 'alt-client';
import * as native from 'natives';

export default class MemoryReader {
    constructor() {}
    
    readPlayerHealth(player) {
        return native.getEntityHealth(player.scriptID);
    }
    
    readPlayerArmor(player) {
        return native.getPedArmour(player.scriptID);
    }
    
    readPlayerPosition(player) {
        return native.getEntityCoords(player.scriptID, false);
    }
}
