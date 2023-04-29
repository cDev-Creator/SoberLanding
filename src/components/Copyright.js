import { Container } from 'react-bootstrap';
const Copyright = () => {
    return ( 
        <section className='bg-dark p-1 text-center'>
        <Container>
            <p className='copyright-txt' style={{fontSize:'12px'}}>Copyright 2023 <span style={{fontWeight:'bold'}} className='copyright-txt'> Sober Landing</span>. All Rights Reserved.</p>
        </Container>
    </section>
    );
}
export default Copyright;