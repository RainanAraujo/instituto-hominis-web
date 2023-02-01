import Container from './styles';
import {Phone} from 'phosphor-react';

interface Button{
  Text: string
}


export default function Button(props:Button){
  return (
      <Container href="#">
          <Phone size={22} weight="bold" />
          <p>{props.Text}</p>
      </Container>
  );
}