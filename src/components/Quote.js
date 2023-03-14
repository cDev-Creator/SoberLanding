import { Container } from "react-bootstrap";
import bg from '../assets/images/bg.jpg';

var sectionStyle = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}

const Quote = () => {
  return ( 
    <section className="p-5"style={sectionStyle}>
      <Container >
        <div style={{backgroundColor:'#3f4f6299'}}>
        <h1 className="pt-5 text-light text-center">"The fist step towards getting somewhere is to decide you're not going to stay where you are"</h1>
        <h3 className="pb-5 text-light text-center ">- J.P. Morgan</h3>
        </div>
      </Container>
    </section>
  );
}

export default Quote;