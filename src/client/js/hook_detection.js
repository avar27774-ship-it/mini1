import * as alt from 'alt-client';

export default class HookDetection {
    constructor() {
        this.hooksDetected = [];
    }
    
    detect() {
        const original = alt.emitServer;
        if (original.toString().includes('[native code]')) {
            this.hooksDetected.push('emitServer');
        }
        
        return this.hooksDetected.length > 0;
    }
}
