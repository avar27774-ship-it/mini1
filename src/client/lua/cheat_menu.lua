-- Cheat Menu
local menu = {}

function menu:draw()
    -- Menu drawing logic
end

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        if IsControlJustPressed(1, 45) then -- INSERT
            menu:draw()
        end
    end
end)
