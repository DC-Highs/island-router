import { GridMap, Position } from "./build-grid-map.util"
import { positionToKey } from "./position-to-key.util"

export function getSquareAt<T extends Position>(map: GridMap<T>, x: number, y: number): T | undefined {
    return map[positionToKey(x, y)]
}
