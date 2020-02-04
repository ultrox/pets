import React from 'react'
import {GenericStyles, AppWrapper, MainWrapper} from 'src/styles'

function App() {
  return (
    <AppWrapper>
      <GenericStyles />

      <MainWrapper>
        <header>Adopt Me</header>
        <sidebar>Side</sidebar>
        <main>Main </main>
      </MainWrapper>
    </AppWrapper>
  )
}

export default App
