import React from 'react'
import {GenericStyles, AppWrapper, MainWrapper} from 'src/styles'
import {Main} from 'src/styles/layout'
import Sidebar from 'src/Sidebar'
import Pet from 'src/Pet'
import styled from 'styled-components'
import * as api from 'src/api'

function App() {
  const [pets, setPets] = React.useState([])

  function handleSubmission(data) {
    api
      .getPetsForAdoption(data)
      .then(({animals}) => {
        setPets(animals)
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <AppWrapper>
      <GenericStyles />

      <MainWrapper>
        <Sidebar onPetSubmit={handleSubmission} />
        <Main>
          <Content>
            <Pets pets={pets} />
          </Content>
        </Main>
      </MainWrapper>
    </AppWrapper>
  )
}

function Pets({pets}) {
  return pets.map(p => {
    return <Pet key={p.id} pet={p} />
  })
}

const Content = styled.div``
export default App
