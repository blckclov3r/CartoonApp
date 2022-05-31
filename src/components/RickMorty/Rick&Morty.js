

import {Container} from 'react-bootstrap';
import React from 'react'
import Character from './Character';

export default function RickMorty() {
  return (
      <Container fluid="md" className='my-5 pt-5'>
        <Character />
      </Container>
  )
}
