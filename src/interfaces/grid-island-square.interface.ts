export interface GridIslandsSquare {
    id: number
    type: string
    reward:
        | {
              chest_id: number | undefined
              type: string
          }
        | {
              dragon_id: number | undefined
              type: string
          }
        | null
    is_highlight: boolean
    x: number
    y: number
    cost: number
    wall: string | undefined
    wall_suffix: string | undefined
    resource: Record<string, never> | undefined
}
