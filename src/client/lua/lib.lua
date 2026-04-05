-- Utility Library
local lib = {}

function lib.getDistance(coords1, coords2)
    return #(coords1 - coords2)
end

function lib.randomRange(min, max)
    return math.random() * (max - min) + min
end

return lib
