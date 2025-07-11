import styled from "styled-components"
import { Button } from "../styled/Button";


const Startgame = ({toggle}) => {
  return (
    <Container>
      <div><img src="/diceh.png" alt="" /></div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default Startgame
const Container=styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    height: 100vh;
    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }
`
