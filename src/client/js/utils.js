export default class Utils {
    static getDistance(pos1, pos2) {
        return Math.hypot(pos1.x - pos2.x, pos1.y - pos2.y, pos1.z - pos2.z);
    }
    
    static randomRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    static formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
