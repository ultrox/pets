import React from 'react'
import {GenericStyles, AppWrapper, MainWrapper} from 'src/styles'
import {Main} from 'src/styles/layout'
import Sidebar from 'src/Sidebar'
import Pet from 'src/Pet'
import styled from 'styled-components'

function noop() {}
function App() {
  return (
    <AppWrapper>
      <GenericStyles />

      <MainWrapper>
        <Sidebar onPetSubmit={noop} />
        <Main>
          <Content>
            <Pets pets={{}} />
          </Content>
        </Main>
      </MainWrapper>
    </AppWrapper>
  )
}

const fakePetData = {
  photos: [
    {
      small:
        'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44594159/1/?bust=1556767422&width=100',
    },
  ],
  name: 'Fat Boy Slim',
  type: 'Dog',
  url: '',
  id: '112',
  breeds: {
    primary: 'Rottweiler',
  },
  contact: {
    address: {
      city: 'Stanwood',
      state: 'WA',
    },
  },
}

function Pets() {
  return [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}].map(p => {
    return <Pet key={p.id} pet={fakePetData} />
  })
}

const Content = styled.div``
export default App
