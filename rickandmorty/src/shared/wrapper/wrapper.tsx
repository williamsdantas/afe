import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import  Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

export const Wrapper = (): JSX.Element => (
  <>
    <Header />
    <Container>
      <Outlet />
    </Container>
    <Footer/>
  </>
)