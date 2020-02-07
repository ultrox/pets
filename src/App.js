import React from 'react'
import {GenericStyles, AppWrapper, MainWrapper} from 'src/styles'
import {Main} from 'src/styles/layout'
import Sidebar from 'src/Sidebar'
import Pet from 'src/Pet'
import * as api from 'src/api'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom'

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
    <Router>
      <AppWrapper>
        <GenericStyles />
        <MainWrapper>
          <Switch>
            <Route exact path="/">
              <Sidebar onPetSubmit={handleSubmission} />
              <Main>
                <Pets pets={pets} />
              </Main>
            </Route>
            <Route path="/:id">
              <PetDetails />
            </Route>
          </Switch>
        </MainWrapper>
      </AppWrapper>
    </Router>
  )
}

function PetDetails() {
  let {id} = useParams()

  return (
    <div>
      <h3>PET ID: {id}</h3>
    </div>
  )
}

function Pets({pets}) {
  return pets.map(p => {
    return <Pet key={p.id} pet={p} />
  })
}

export default App
