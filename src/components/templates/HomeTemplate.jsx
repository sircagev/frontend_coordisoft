import styled from "styled-components"
export default function HomeTemplate() {
  return (
    <Container>
      <div>Home Template</div>
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
overflow: hidden;
background-color: ${({ theme }) => theme.bgtotal};
color: ${({ theme }) => theme.text};
width: 100%;


`

