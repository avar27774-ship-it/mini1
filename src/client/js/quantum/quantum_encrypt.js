export default class QuantumEncrypt {
    constructor() {
        this.quantumKey = this.generateQuantumKey();
    }
    
    generateQuantumKey() {
        const key = new Uint8Array(32);
        crypto.getRandomValues(key);
        return key;
    }
    
    encrypt(data) {
        const result = [];
        for (let i = 0; i < data.length; i++) {
            result.push(data[i] ^ this.quantumKey[i % this.quantumKey.length]);
        }
        return result;
    }
    
    decrypt(data) {
        return this.encrypt(data);
    }
}
