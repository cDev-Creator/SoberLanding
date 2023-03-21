import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { NavBar } from './NavBar'
import house from '../assets/images/test.jpg';

const Showcase = () => {
  return (
    <section className='p-5 full-screen-bg ' style={{ backgroundImage: `url(${house})`, backgroundSize: 'cover', height:'100vh' }}>
      <NavBar/>
      <Container className='d-flex justify-content-center mt-5' >
        <div className='showcase-content'>
          <h1 style={{ fontSize: '5rem'}}className='text-light '>Welcome to <span style={{color:' rgba(157, 138, 47, 0.866)'}}>Sober Landing</span></h1>
          <h5 className='text-light'>Where we provide Housing & Clean Living for Women</h5>
          <p className='text-light my-4'>Our aim is to create a nurturing atmosphere where individuals struggling with addiction can receive the support and guidance they need to heal. We equip our residents with the essential skills to establish a strong foundation for a fulfilling, sober and drug-free life.</p>
          <Link to="/Contact"><button className='btn btn-lg btn-light mt-4'>Contact Us</button></Link>
        </div>
      </Container>
    </section>
  );
}

export default Showcase;