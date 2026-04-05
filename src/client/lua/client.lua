-- MajesticCrypt Lua Client
local cheat = {}

function cheat:init()
    print("MajesticCrypt loaded (Lua)")
    
    AddEventHandler("playerSpawned", function()
        SetEntityInvincible(PlayerPedId(), true)
    end)
    
    RegisterCommand("god", function()
        SetEntityInvincible(PlayerPedId(), true)
        print("God mode enabled")
    end, false)
end

cheat:init()
