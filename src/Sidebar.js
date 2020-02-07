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

function petReducer(state, action) {
  switch (action.type) {
    case 'SET_ERROR': {
      return {...state, ...action.payload}
    }
    case 'SET_ALL_BREEDS': {
      return {...state, ...action.payload}
    }
    case 'SET_ACTIVE_BREED': {
      return {...state, activeBreed: action.payload}
    }
    case 'LOADING': {
      return {...state, ...action.payload}
    }
    case 'SET_ACTIVE_ANIMAL': {
      return {...state, ...action.payload}
    }
    default: {
      throw new Error(`Action ${action.type} is not supported!`)
    }
  }
}

let petState = null

export default function Sidebar({onPetSubmit}) {
  const [state, dispatch] = React.useReducer(
    petReducer,
    petState || {
      currentLocation: 'Seattle,+WA',
      allBreeds: [],
      activeBreed: '',
      activeAnimal: '',
      touched: false,
      loading: false,
      error: null,
    },
  )

  petState = state

  const {
    touched,
    activeAnimal,
    activeBreed,
    allBreeds,
    currentLocation,
    loading,
  } = state

  function isBreedsEmpty() {
    return allBreeds.length === 0
  }

  return (
    <SidebarStyles>
      <PetForm
        disabled={loading}
        method="POST"
        onSubmit={e => {
          e.preventDefault()
          const formData = {
            type: activeAnimal,
            breed: activeBreed,
            location: currentLocation,
          }
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
            value={activeAnimal}
            onChange={evn => {
              dispatch({
                type: 'SET_ACTIVE_ANIMAL',
                payload: {
                  activeAnimal: evn.target.value,
                  loading: true,
                  touched: true,
                },
              })
              api
                .getAnimalBreeads(evn.target.value)
                .then(data => {
                  const {breeds} = data
                  dispatch({
                    type: 'SET_ALL_BREEDS',
                    payload: {
                      activeBreed: breeds[0].name,
                      allBreeds: breeds,
                    },
                  })
                })
                .catch(error => {
                  dispatch({type: 'SET_ERROR', payload: {error}})
                })
                .finally(() => {
                  dispatch({type: 'LOADING', payload: {loading: false}})
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
            value={activeBreed}
            disabled={isBreedsEmpty()}
            onBlur={() => {}}
            onChange={evn => {
              dispatch({type: 'SET_ACTIVE_BREED', payload: evn.target.value})
            }}
          >
            {allBreeds.map(b => (
              <option value={b.name} key={b.name}>
                {b.name}
              </option>
            ))}
          </select>
        </label>
        <button disabled={!touched}>Submit</button>
      </PetForm>
    </SidebarStyles>
  )
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

function PetForm({children, ...props}) {
  const ResetFieldset = `
    border: 0;
    padding: 0.01em 0 0 0;
    margin: 0;
    min-width: 0;
  `

  const Fieldset = styled.fieldset`
    ${ResetFieldset}
    display: flex;
    flex-direction: column;
    align-content: center;

    select,
    input {
      display: block;
      width: 100%;
    }
  `
  const {disabled, ...rest} = props
  return (
    <form {...rest}>
      <Fieldset disabled={disabled}>{children}</Fieldset>
    </form>
  )
}
