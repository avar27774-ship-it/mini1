import * as alt from 'alt-client';

export default class ItemCloner {
    constructor() {}
    
    cloneItem(itemId, amount) {
        alt.emitServer('inventory:addItem', itemId, amount);
        setTimeout(() => {
            alt.emitServer('inventory:addItem', itemId, amount);
        }, 10);
    }
    
    tradeDupe(targetPlayer, itemId, amount) {
        alt.emitServer('trade:request', targetPlayer.id);
        setTimeout(() => {
            alt.emitServer('trade:addItem', itemId, amount);
            setTimeout(() => {
                alt.emitServer('trade:cancel', targetPlayer.id);
            }, 50);
        }, 100);
    }
}
