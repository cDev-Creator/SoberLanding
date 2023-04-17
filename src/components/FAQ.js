import { Container, Accordion } from 'react-bootstrap';
import '../index.css';
import NavBar from './NavBar'
import Footer from './Footer';
import Copyright from './Copyright';
import ContactForm from './ContactForm';
const FAQ = () => {
    return (
      <div>
      
        <section style={{backgroundColor:'#f3f4f5'}}>
        <NavBar hamburgerColor ='#5c8cac'/>
          <Container className='p-4' >
            <h1 className='font-bigger title'>Frequently Asked Questions</h1>
            <p className='text-muted'>We have compiled a list of commonly asked questions to help provide you with more information. 
            If you have any additional questions or concerns, please don't hesitate to contact us directly. We are here to support you on your journey towards recovery.</p>
          </Container>
          </section>
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
            <path fill="#f3f4f5" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,170.7C384,139,480,85,576,64C672,43,768,53,864,74.7C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>

          <section className='mt-3 p-4'>
          <Container>
            <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>How much is rent?</Accordion.Header>
              <Accordion.Body>
                The weekly rent at Sober Landing is $200. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Are pets allowed?</Accordion.Header>
              <Accordion.Body>
              We do not allow pets, but we do currently have a dog living in the home for moral support!
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>How long can I stay at Sober Landing?</Accordion.Header>
              <Accordion.Body>
              At Sober Landing, we understand that each person's recovery journey is unique and that recovery takes time. 
              We don't believe in putting a time constraint on how long residents can stay with us!
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Is it a women and children’s house?</Accordion.Header>
              <Accordion.Body>
              No, we are not a women and children’s home. We cater exclusively to women who are on their journey towards recovery. 
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Are you connected to Pay it Forward?</Accordion.Header>
              <Accordion.Body>
                Yes, we are connected to Pay it Forward!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

{/*       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 700 280"><path d="M3.9803428649902344,153.55270385742188C47.5961119333903,173.41878763834634,183.5219669342041,260.50094350179035,265.6749572753906,272.74920654296875C347.82794761657715,284.99746958414715,432.0721079508464,228.23723347981772,496.8982849121094,227.0422821044922C561.7244618733724,225.84733072916666,604.8921152750651,271.55426025390625,654.6320190429688,265.5794982910156C704.3719228108724,259.604736328125,771.8867594401041,203.59134165445963,795.3377075195312,191.19371032714844" fill="none" stroke-width="1" stroke="#f3f4f5" stroke-linecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1003"><stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>
 */}      
      <section> 
        <Container className="my-5" >
          <ContactForm contactTitle='Ask Us a Question!' textAreaLabel='Question'/>
        </Container>
      </section>

      <Footer />
      <Copyright />
    </div>
  );
}
export default FAQ;