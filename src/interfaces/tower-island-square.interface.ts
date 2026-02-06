import { DragonElement } from "@dchighs/dc-core"

import { RewardType } from "../enums"

interface ProcessedReward {
    type: RewardType
    element?: DragonElement
    amount?: number
    chest_id?: number
    dragon_id?: number
    dragon_ids?: number[]
    building_id?: number
    orb_dragon_id?: number
}

export interface TowerIslandsSquare {
    id: number
    type: string
    is_highlight: boolean
    x: number
    y: number
    ixy: string
    rewards: ProcessedReward[] | null
    wall: string | undefined
    catapult_destination_square_id: number | undefined
    piece_reward_id: number | undefined
}
