import { Container } from "react-bootstrap";
import bg from '../assets/images/bg.jpg';

var sectionStyle = {
/*   backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',  */
}

const Quote = () => {
  return ( 
    <section className="p-4"style={sectionStyle}>
      <Container >

        <div style={{backgroundColor:'#333333ef' ,borderRadius:'30px', border: '1px solid #333' }}>
        <h1 className="pt-5 px-2 text-light text-center title">"The fist step towards getting somewhere is to decide you're not going to stay where you are"</h1>
        <h3 className="pb-5 text-light text-center title">- J.P. Morgan</h3>
     
        </div>
   
      </Container>
      
    </section>
  );
}

export default Quote;