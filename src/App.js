import React from 'react'
import {GenericStyles, AppWrapper, MainWrapper} from 'src/styles'
import {Sidebar, Main} from 'src/styles/layout'
import Pet from 'src/Pet'
import styled from 'styled-components'

const ANIMALS = [
  'barnyard',
  'bird',
  'cat',
  'dog',
  'horse',
  'rabbit',
  'scales-fins-other',
  'small-furry',
]

function App() {
  return (
    <AppWrapper>
      <GenericStyles />

      <MainWrapper>
        <Sidebar>
          <Form
            method="POST"
            onSubmit={e => {
              e.preventDefault()
            }}
          >
            <label>
              Location
              <input type="text" />
            </label>
            <label>
              Animal
              <select>
                {ANIMALS.map(a => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </label>
            <label>
              Breed
              <select>
                <option />
              </select>
            </label>
            <button>Submit</button>
          </Form>
        </Sidebar>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;

  select,
  input {
    display: block;
    width: 100%;
  }
`
const Content = styled.div``
export default App
