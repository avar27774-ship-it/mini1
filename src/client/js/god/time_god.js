import * as alt from 'alt-client';
import * as native from 'natives';

export default class TimeGod {
    constructor() {
        this.isTimeStopped = false;
    }
    
    stopTime() {
        this.isTimeStopped = true;
        const players = alt.Player.all;
        for (const player of players) {
            if (player !== alt.Player.local) {
                native.freezeEntityPosition(player.scriptID, true);
            }
        }
        native.setTimecycleModifier("spectator5");
    }
    
    resumeTime() {
        this.isTimeStopped = false;
        const players = alt.Player.all;
        for (const player of players) {
            if (player !== alt.Player.local) {
                native.freezeEntityPosition(player.scriptID, false);
            }
        }
        native.setTimecycleModifier("DEFAULT");
    }
}
