import React, { useEffect, useState } from 'react'
import musicLogo from '../../assets/Spotify-logo.png'
import api from '../../services/api'
import {
  Header,
  Container,
  WelcomeMessage,
} from './styles'

export default function Home() {
  const [users, setUsers] = useState([])
  console.log(users)
  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get("/users")
      if (response.status === 200) setUsers(response.data)
    }
    fetchUsers();
  }, [])

  return (
    <>
      <Header>
        <img alt="Logo" src={musicLogo}></img>
        <div>
          <h2>músicas</h2>
          <hr />
          <h2>pessoas</h2>
        </div>
      </Header>
      <Container>
        <WelcomeMessage>
          <h1>Conheca pessoas a partir da música.</h1>
          <h2>A primeira plataforma que conecta pessoas relacionando seus gostos musicais.</h2>
          <button>
            <p>quero conhecer :)</p>
          </button>
        </WelcomeMessage>
      </Container>
    </>
  )
}