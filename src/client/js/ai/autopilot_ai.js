export default class AutopilotAI {
    constructor() {
        this.enabled = false;
    }
    
    start() {
        this.enabled = true;
        this.loop();
    }
    
    loop() {
        if (!this.enabled) return;
        // Автопилот логика
        setTimeout(() => this.loop(), 100);
    }
    
    stop() {
        this.enabled = false;
    }
}
