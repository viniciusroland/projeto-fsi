import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import {
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

  const emoji = ":)"
  return (
    <Container>
      <WelcomeMessage>
        <h1>Conheca pessoas a partir da música.</h1>
        <h2>A primeira plataforma que conecta pessoas relacionando seus gostos musicais.</h2>
        <a href="http://localhost:4000/auth_spotify">
          <button>
            <p>quero conhecer {emoji}</p>
          </button>
        </a>
      </WelcomeMessage>
    </Container>
  )
}