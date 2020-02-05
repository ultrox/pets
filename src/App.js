import React from 'react'
import {GenericStyles, AppWrapper, MainWrapper} from 'src/styles'
import {Sidebar, Main} from 'src/styles/layout'
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
              console.log('hi')
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
                <option></option>
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

function Pets() {
  return <Pet />
}

function Pet() {
  return <article>Hello I am Pet</article>
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
