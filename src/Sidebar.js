import React from 'react'
import {Sidebar as SidebarStyles} from 'src/styles/layout'
import styled from 'styled-components'
import * as api from 'src/api'

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

export default function Sidebar({onPetSubmit}) {
  const [currentLocation] = React.useState('Seattel, WA')
  const [activeAnimal, setActiveAnimal] = React.useState('')
  const [allBreeds, setAllBreeds] = React.useState([])
  const [activeBreed, setActiveBreed] = React.useState('')

  const [touched, setTouched] = React.useState(false)

  function isBreedsEmpty() {
    return allBreeds.length === 0
  }

  return (
    <SidebarStyles>
      <Form
        method="POST"
        onSubmit={e => {
          e.preventDefault()
          const formData = {activeAnimal, activeBreed, currentLocation}
          onPetSubmit(formData)
        }}
      >
        <label>
          Location
          <input type="search" defaultValue={currentLocation} />
        </label>
        <label>
          Animal
          <select
            onChange={evn => {
              setTouched(true)
              setActiveAnimal(evn.target.value)
              api
                .getAnimalBreeads(evn.target.value)
                .then(data => {
                  const {breeds} = data
                  setActiveBreed(breeds[0].name)
                  setAllBreeds(breeds)
                })
                .catch(err => {
                  // TODO: better handaling for errors
                  console.error(err, 'err')
                })
            }}
            onBlur={() => {}}
          >
            {!touched && <option>Choose One</option>}
            {ANIMALS.map(a => (
              <option value={a} key={a}>
                {capitalize(a)}
              </option>
            ))}
          </select>
        </label>
        <label>
          Breed
          <select
            disabled={isBreedsEmpty()}
            onBlur={() => {}}
            onChange={evn => {
              setActiveBreed(evn.target.value)
            }}
          >
            {allBreeds.map(b => (
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
