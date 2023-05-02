import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from "./NavBar";
import house from '../assets/images/12_cleanup.png';
/* import house from '../assets/images/hh.png'; */

const Showcase = () => {
    return (  
        <section style={{backgroundColor: '#f3f4f5'}}/*  style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height:'100vh' }} */>
            <NavBar hamburgerColor ='#5c8cac'/>
            <div className='pt-3'>
            <Container className='px-4'>
                <div className='d-sm-flex align-items-center justify-content-between showcase-content'>
                <div style={{ marginRight: '50px' }}>
                    <h1 style={{ fontSize: '2.3rem', maxWidth: '400px'}}>Welcome to</h1> 
                    <h1 className='title'><span style={{ color: '#5c8cac',fontSize: '4rem' }}>Sober Landing</span></h1>
                    <h3 style={{ maxWidth: '400px' }} >Where we provide Housing & Clean Living for Women</h3>
                    <p className='my-4' style={{ maxWidth: '500px' }}>Our aim is to create a nurturing atmosphere where individuals struggling with addiction can receive the support and guidance they need to heal. We equip our residents with the essential tools they need to stay sober.</p>
                    <Link to="/Contact">
                        <button className='btn btn-lg btn-dark mt-4 title'>Contact Us</button>
                    </Link>
                </div>
                <img src={house} alt="image of home" className="img-fluid w-75 w-sm-50 d-none d-sm-block" style={{ maxWidth: '450px',maxHeight: '450px', borderRadius: '49% 51% 52% 48% / 54% 55% 45% 46% ', opacity: '0.28', border: '4px solid #5c8cac'}}></img>

                </div>
            </Container>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="white" fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,133.3C480,139,600,181,720,165.3C840,149,960,75,1080,42.7C1200,11,1320,21,1380,26.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </section>
    );
}
export default Showcase;