import Accordion from 'react-bootstrap/Accordion'
import { BeautyBar } from './BeautyBar'
import { DeviceInfo } from './DeviceInfo'
import { Footer } from './Footer'
import Container from 'react-bootstrap/Container'

export const TheMain = () => {


    return <Container className="justify-content-center" fluid>
        <header>
            <BeautyBar />
        </header>
        <main>
            <Accordion defaultActiveKey="0" className="justify-content-md-center">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>ID 0001</Accordion.Header>
                    <Accordion.Body>
                        <DeviceInfo />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </main>
        <footer>
            <Footer />
        </footer>
    </Container>;
};
