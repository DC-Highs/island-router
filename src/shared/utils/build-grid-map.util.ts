import { positionToKey } from "./position-to-key.util"

export type GridMap<T> = Record<string, T>

export type Position = {
    x: number
    y: number
}

export function buildGridMap<T extends Position>(squares: T[]): GridMap<T> {
    const map: GridMap<T> = {}

    for (const square of squares) {
        map[positionToKey(square.x, square.y)] = square
    }

    return map
}
