import * as alt from 'alt-client';

export default class NetworkEvasion {
    constructor() {
        this.proxies = [];
    }
    
    fragmentPacket(data) {
        const chunks = [];
        const chunkSize = 500;
        
        for (let i = 0; i < data.length; i += chunkSize) {
            chunks.push(data.slice(i, i + chunkSize));
        }
        
        return chunks;
    }
    
    randomDelay() {
        return Math.random() * 100 + 10;
    }
}
