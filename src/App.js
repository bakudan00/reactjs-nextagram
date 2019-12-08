import React from 'react';
import Container from '@material-ui/core/Container';
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'



function App() {
  return (
    <Container maxWidth='xl'>
      <Navbar />
      <Homepage />
    </Container>
  );
}

export default App;
