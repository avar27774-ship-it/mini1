export default class BehaviorClone {
    constructor() {
        this.recorded = [];
        this.recording = false;
    }
    
    startRecording() {
        this.recorded = [];
        this.recording = true;
    }
    
    stopRecording() {
        this.recording = false;
    }
    
    replay() {
        for (const action of this.recorded) {
            setTimeout(() => {
                // Воспроизведение действия
            }, action.time);
        }
    }
}
