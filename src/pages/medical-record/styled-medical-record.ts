import styled from 'styled-components'

export const Grid = styled.main`
  display: grid;
  grid-template-columns: 1fr 2.794fr;
  grid-gap: 24px;
`
export const LeftColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const RightColumn = styled.section`
  display: grid;
`
export const Timeline = styled.section`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`
export const RollTop = styled.button`
  display: flex;
  align-itens: center;
  gap: 8px;
  justify-self: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  color: var(--gray-900);
  justify-self: center;
  padding-top: 60px;
  
  svg{
    fill: var(--gray-900)
  }
`
