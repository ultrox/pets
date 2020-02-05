import styled from 'styled-components'
import {screens, colors} from 'src/styles/settings'

export const Sidebar = styled.aside`
  background-color: #fff;
  border-radius: 5px;
  flex: 0 1 300px;
  align-self: start;
  padding: 2rem;
  @media (min-width: ${screens.md}) {
    margin-right: 2rem;
  }

  label {
    margin-bottom: 2rem;
  }
`

export const Main = styled.main`
  background-color: ${colors.indigo[500]}
  border-radius: 5px;
  padding: 2rem;
  align-self: start;
  flex: 1;
`
