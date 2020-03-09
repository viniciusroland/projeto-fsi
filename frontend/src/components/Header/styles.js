import styled from "styled-components"
export const Container = styled.header`
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
