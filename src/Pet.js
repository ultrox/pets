import React from 'react'
import styled from 'styled-components'
import {colors} from 'src/styles/settings'
import {Link} from 'react-router-dom'

export default function Pet({pet}) {
  return (
    <PetStyle>
      <Content>
        <PetImage src={getPetImage(pet.photos)} alt="pet" />
        <PetInfo>
          <PetLink to={`/${pet.id}`}>
            <PetName>{pet.name}</PetName>
          </PetLink>
          <PetMeta>
            {pet.type} - {pet.breeds.primary} - {pet.contact.address.city}
          </PetMeta>
        </PetInfo>
      </Content>
    </PetStyle>
  )
}
function getPetImage(photos) {
  return (photos[0] || {small: '/placeholder.png'}).small
}

const PetLink = styled(Link)`
  color: ${colors.gray[900]};
  text-decoration: none;
  &:hover {
    color: ${colors.gray[800]};
  }
`

const PetStyle = styled.article`
  color: ${colors.gray[800]};
  padding: 3rem 0;
  border-bottom: 1px solid blue;
`
const Content = styled.div`
  display: flex;
`
const PetImage = styled.img`
  border-radius: 100%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: top;
  margin-right: 2rem;
`
const PetName = styled.h2`
  margin: 0;
`
const PetMeta = styled.p``
const PetInfo = styled.aside``
