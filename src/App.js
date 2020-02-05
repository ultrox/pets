import React from 'react'
import {GenericStyles, AppWrapper, MainWrapper} from 'src/styles'
import {Sidebar, Main} from 'src/styles/layout'

function App() {
  return (
    <AppWrapper>
      <GenericStyles />

      <MainWrapper>
        <Sidebar>Side</Sidebar>
        <Main>Main </Main>
      </MainWrapper>
    </AppWrapper>
  )
}

export default App
