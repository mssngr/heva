import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

export const Tile = styled.div`
  flex: 1;
  width: 7.5vw;
  height: 7.5vw;
  outline: 1px solid black;
  background: ${props => {
    const {clickState, teams, whoseTurn, x, y, unitHere} = props

    if (clickState) {
      const clickedUnit = teams[whoseTurn].units[clickState]
      const distance = Math.abs(clickedUnit.x - x + clickedUnit.y - y)
      const stamina = clickedUnit.stamina
      const hasEnoughStamina = distance <= stamina

      if (hasEnoughStamina && !unitHere) {
        return 'CornflowerBlue;'
      }
      return 'IndianRed;'
    }
    return 'gray;'
  }}
`
