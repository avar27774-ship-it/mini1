import * as alt from 'alt-client';

export default class PacketSpammer {
    constructor() {
        this.spamming = false;
        this.interval = null;
    }
    
    startSpam(event, data, rate) {
        if (this.spamming) return;
        this.spamming = true;
        
        this.interval = setInterval(() => {
            for (let i = 0; i < rate; i++) {
                alt.emitServer(event, data);
            }
        }, 1000);
    }
    
    stopSpam() {
        this.spamming = false;
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}
