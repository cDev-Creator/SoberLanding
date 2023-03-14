import { Container } from 'react-bootstrap';

import house from '../assets/images/examplehouse.jpg';

const Showcase = () => {
    return (  

    <section className='bg-dark p-5 text-center'>
        <Container>
            <div className='d-sm-flex align-items-center justify-content-between'>
                <div >
                    <h1 className='text-light'>Welcome to <span style={{color:'#80909f'}}>Sober Landing</span></h1>
                    <h3 className='text-light'>Where we provide Housing & Clean Living for Women</h3>
                    <p className='text-light my-4'>Our aim is to create a nurturing atmosphere where individuals struggling with addiction can receive the support and guidance they need to heal. We equip our residents with the essential skills to establish a strong foundation for a fulfilling, sober and drug-free life.</p>
                    <button className='btn btn-lg btn-light'>Contact Us!</button>
                </div>
                <img src={house} alt="image of home" className="img-fluid w-50 d-none d-sm-block"></img>
            </div>

        </Container>
    </section>

    );
}
export default Showcase;
  