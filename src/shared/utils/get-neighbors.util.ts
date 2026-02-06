import { GridMap, Position } from "./build-grid-map.util"
import { positionToKey } from "./position-to-key.util"

export function getNeighbors<T extends Position>(map: GridMap<T>, x: number, y: number): T[] {
    const right = { dx: 1, dy: 0 }
    const left = { dx: -1, dy: 0 }
    const bottom = { dx: 0, dy: 1 }
    const top = { dx: 0, dy: -1 }

    const directions = [right, left, bottom, top]

    return directions
        .map(({ dx, dy }) => map[positionToKey(x + dx, y + dy)])
        .filter((square): square is T => square !== undefined)
}
