import styled from "styled-components"
import img from '../../assets/background.jpeg'
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.9);
  img {
    border-radius: 31px;
    height: 50px;
  }

  div {
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    h2 {
      font-size: 16px;
      color: white;
      font-weight: bold;
    }

    hr {
      height: 20px;
    }
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  height: 100%;
`
export const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 60px;
    font-weight: bold;
    color: white;
  }

  h2 {
    margin-top: 16px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 24px;
  }

  button {
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    border: none;
    height: 60px;
    width: 200px;
    border-radius: 40px;

    p {
      font-size: 18px;
      font-weight: bold;
    }
  }
`
