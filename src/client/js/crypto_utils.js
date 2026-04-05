export default class CryptoUtils {
    static xorEncrypt(data, key) {
        const result = [];
        for (let i = 0; i < data.length; i++) {
            result.push(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return result;
    }
    
    static xorDecrypt(data, key) {
        return String.fromCharCode(...data.map((b, i) => b ^ key.charCodeAt(i % key.length)));
    }
}
