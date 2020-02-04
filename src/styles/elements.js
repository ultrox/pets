import styled from 'styled-components'
import {screens, colors} from './settings'

export const AppWrapper = styled.div`
  font-size: 2rem;
`

export const MainWrapper = styled.div`
  border-radius: 1rem;
  background-color: #f4f6f9;
  width: 80%;
  @media (min-width: ${screens.lg}) {
    width: 40%;
  }
  margin: 0 auto;
`
export const MainTitle = styled.h1`
  font-size: 2.5rem;
  @media (min-width: ${screens.lg}) {
    font-size: 3rem;
  }
  text-align: center;
  color: ${colors.gray[600]};
`
