import { Container } from "react-bootstrap";
import bg from '../assets/images/bg.jpg';


var sectionStyle = {
/*   backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',  */
}
const blue = {color:'#5c8cac'};



const Quote = ({quote, author}) => {
  return ( 
    <div>
 <section className="p-4"/* style={sectionStyle} */>
          <Container style={{borderRadius: '24% 76% 35% 65% / 46% 29% 71% 54%'}}>
            <div className='p-1'>
            <h1 className="px-2 title text-md-center text-sm-left font-big">{quote}</h1>
            <h3 className="pb-5 pt-4 title text-md-center text-sm-left" style={blue}>- {author}</h3>
            </div>
          </Container>
        </section>
    </div>
  );
}

export default Quote;