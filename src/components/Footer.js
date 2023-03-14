import { Container } from 'react-bootstrap';
const Footer = () => {
    return ( 
        <section class="p-5">
            <Container>
            <div class="row g-4">
          <div class="col-md">
            <h2 class="text-center mb-4" >Sober Landing</h2>
            <ul class="list-group list-group-flush lead">
            <li class="list-group-item">
                <span class="fw-bold">House Manager:</span> Landyn Jennings
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Our Location:</span> 503 Main Street San Antonio TX
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Main Phone:</span> (555) 555-5555
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Email Address:</span> (555)
                test@rand.test
              </li>
           
            </ul>
          </div>
          <div class="col-md">
          <iframe style={{width:'100%', height:'100%'}}src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
        </div>

            </Container>
        </section> 
     );
}
 
export default Footer;