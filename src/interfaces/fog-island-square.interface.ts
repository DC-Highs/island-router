export interface FogIslandsSquare {
    id: number
    type: string
    reward:
        | {
              chest_id: number | undefined
              type: string
          }
        | {
              piece_dragon_id: number | undefined
              type: string
          }
        | null
    is_highlight: boolean
    x: number
    y: number
    cost: number
    come_back_cost: number
    reward_id: number | undefined
}
