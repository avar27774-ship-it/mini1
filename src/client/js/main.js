import * as alt from 'alt-client';
import * as native from 'natives';

class MajesticCrypt {
    constructor() {
        this.isMenuOpen = false;
        this.init();
    }
    
    init() {
        alt.on('keydown', (key) => {
            if (key === 45) { // INSERT
                this.toggleMenu();
            }
        });
        
        alt.everyTick(() => {
            // God Mode
            native.setEntityInvincible(alt.Player.local.scriptID, true);
            // Infinite Stamina
            native.restorePlayerStamina(alt.Player.local.id, 100);
        });
        
        console.log('[MajesticCrypt] GOD EDITION loaded!');
        this.showNotification('~g~MajesticCrypt GOD EDITION loaded! Press INSERT');
    }
    
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        if (this.isMenuOpen) {
            alt.showPage('menu.html');
        } else {
            alt.hidePage();
        }
    }
    
    showNotification(text) {
        native.beginTextCommandThefeedPost('STRING');
        native.addTextComponentSubstringPlayerName(text);
        native.endTextCommandThefeedPostTicker(false, true);
    }
}

const cheat = new MajesticCrypt();
