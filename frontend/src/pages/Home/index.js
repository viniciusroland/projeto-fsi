import React from 'react'
import musicLogo from '../../assets/Spotify-logo.png'
import {
  Header,
  Container,
  WelcomeMessage,
} from './styles'

export default function Home() {
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