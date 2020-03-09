import React from "react"
import musicLogo from "../../assets/music-logo.jpeg"
import { Container } from "./styles"
import { Link } from "react-router-dom"
export default function Header() {
  return (
    <Container>
      <img alt="Logo" src={musicLogo}></img>
      <div>
        <Link to="/musics">
          <h2>músicas</h2>
        </Link>
        <hr />
        <Link to="/users">
          <h2>pessoas</h2>
        </Link>
      </div>
    </Container>
  )
}