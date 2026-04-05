import * as alt from 'alt-client';
import * as native from 'natives';

class MajesticCrypt {
    constructor() {
        this.isMenuOpen = false;
        this.godModeEnabled = true;
        this.init();
    }
    
    init() {
        // Проверка на существование игрока
        if (!alt.Player || !alt.Player.local) {
            alt.logError("Player not found");
            return;
        }
        
        alt.on('keydown', (key) => {
            try {
                if (key === 45) { // INSERT
                    this.toggleMenu();
                }
            } catch (e) {
                alt.logError(`Key handler error: ${e}`);
            }
        });
        
        // Основной цикл с проверками
        alt.everyTick(() => {
            try {
                const localPlayer = alt.Player.local;
                if (!localPlayer || !localPlayer.scriptID) return;
                
                if (this.godModeEnabled) {
                    native.setEntityInvincible(localPlayer.scriptID, true);
                    native.setPlayerInvincible(localPlayer.id, true);
                    native.restorePlayerStamina(localPlayer.id, 100);
                }
            } catch (e) {
                // Игнорируем ошибки в тиках
            }
        });
        
        this.showNotification("~g~MajesticCrypt GOD EDITION loaded~w~\n~b~Press INSERT to open menu");
    }
    
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        try {
            if (this.isMenuOpen) {
                alt.showPage('menu.html');
            } else {
                alt.hidePage();
            }
        } catch (e) {
            alt.logError(`Menu error: ${e}`);
        }
    }
    
    showNotification(text) {
        try {
            native.beginTextCommandThefeedPost("STRING");
            native.addTextComponentSubstringPlayerName(text);
            native.endTextCommandThefeedPostTicker(false, true);
        } catch (e) {
            alt.log(`Notification: ${text}`);
        }
    }
}

// Запуск с задержкой для гарантии загрузки
setTimeout(() => {
    try {
        const cheat = new MajesticCrypt();
        alt.log("[MajesticCrypt] Loaded successfully");
    } catch (e) {
        alt.logError(`Failed to load: ${e}`);
    }
}, 1000);
