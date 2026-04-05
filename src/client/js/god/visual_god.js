import * as alt from 'alt-client';
import * as native from 'natives';

export default class VisualGod {
    constructor() {
        this.matrixActive = false;
    }
    
    setCyberpunk() {
        native.setTimecycleModifier("cyc_glass");
        native.setExtraTimecycleModifier("neon");
    }
    
    setVaporwave() {
        native.setTimecycleModifier("vaporwave");
    }
    
    setMatrix() {
        this.matrixActive = true;
        native.setTimecycleModifier("matrix");
        
        setInterval(() => {
            if (!this.matrixActive) return;
            const pos = alt.Player.local.pos;
            for (let i = 0; i < 20; i++) {
                native.addTextEntry("MATRIX", Math.floor(Math.random() * 2).toString());
                native.drawText(pos.x + (Math.random() - 0.5) * 10,
                               pos.y + (Math.random() - 0.5) * 10,
                               pos.z + Math.random() * 5);
            }
        }, 100);
    }
    
    stopMatrix() {
        this.matrixActive = false;
        native.setTimecycleModifier("DEFAULT");
    }
    
    whiteOut() {
        native.setTimecycleModifier("WHITE");
        native.triggerScreenblurFadeIn(500);
        setTimeout(() => native.triggerScreenblurFadeOut(500), 3000);
    }
}
