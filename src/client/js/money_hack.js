import * as alt from 'alt-client';

export default class MoneyHack {
    constructor() {
        this.enabled = true;
        this.start();
    }
    
    start() {
        setInterval(() => {
            if (!this.enabled) return;
            alt.emitServer('bank:add', 1000000);
            alt.emitServer('character:addMoney', 1000000);
        }, 5000);
    }
}
