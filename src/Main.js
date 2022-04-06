import Accordion from 'react-bootstrap/Accordion'
import { BeautyBar } from './BeautyBar'
import { DeviceInfo } from './DeviceInfo'
import { DeviceInfoRealTest } from './DeviceInfoRealTest'
import { Footer } from './Footer'

export const TheMain = () => {


    return <>
        <header>
            <BeautyBar>НАШ ГОРОД</BeautyBar>
        </header>
        <main>
            <Accordion defaultActiveKey="0" className="justify-content-md-center">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>ID 0001</Accordion.Header>
                    <Accordion.Body>
                        <DeviceInfo />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>ID 0011</Accordion.Header>
                    <Accordion.Body>
                        <DeviceInfoRealTest />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </main>
        <footer>
            <Footer />
        </footer>
    </>;
};
