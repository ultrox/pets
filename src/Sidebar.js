import React from 'react'
import {Sidebar as SidebarStyles} from 'src/styles/layout'
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
export default function Sidebar({onPetSubmit, breeds}) {
  return (
    <SidebarStyles>
      <Form
        method="POST"
        onSubmit={e => {
          e.preventDefault()
          const formData = {}
          onPetSubmit(formData)
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
              <option value={a} key={a}>
                {capitalize(a)}
              </option>
            ))}
          </select>
        </label>
        <label>
          Breed
          <select>
            {breeds.map(b => (
              <option key={b.name}>{b.name}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </Form>
    </SidebarStyles>
  )
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase()
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
