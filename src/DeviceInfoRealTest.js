import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { useEffect, useState, useRef } from 'react'
import * as mqtt from "paho-mqtt"


const broker_uri = 'wss://m8.wqtt.ru:12095/';

const topic = 'school6/data';

const loadCap = 'Загрузка...';

export const DeviceInfoRealTest = () => {
    const client = useRef(null);

    const [pressure, setPress] = useState(loadCap);
    const [humdty, setHum] = useState(loadCap);
    const [temp, setTemp] = useState(loadCap);

    useEffect(() => {
        
        client.current = new mqtt.Client(broker_uri, "front_our_city_id");

        // set callback handlers
        client.current.onConnectionLost = onConnectionLost;
        client.current.onMessageArrived = onMessageArrived;

        // connect the client
        client.current.connect({
            onSuccess: onConnect, 
            onFailure: onFail,
            reconnect: true,
            useSSL: true,
            userName: 'u_ZIfPUk',
            password: '0nuKchYJ'
        });


        // called when the client connects
        function onConnect() {
            console.log("onConnect");
            client.current.subscribe(topic);
        }

        function onFail(obj) {
            console.log(obj.errorMessage);
        }

        // called when the client loses its connection
        function onConnectionLost(responseObject) {
            if (responseObject.errorCode !== 0) {
                console.log("onConnectionLost:" + responseObject.errorMessage);
            }
        }

        // called when a message arrives
        function onMessageArrived(message) {
            console.log("onMessageArrived:" + message.payloadString);
            const data_splitable = message.payloadString.split('|');
            setTemp(data_splitable[0] + ' °C');
            setHum(data_splitable[1] + ' %');
            setPress(data_splitable[2] + ' Па');
        }
    }, []);

    

    return (
    <Stack direction="horizontal" gap={3}>
        <Button size="lg" variant="outline-primary" className="m-auto" disabled>{temp}</Button>
        <Button size="lg" variant="outline-secondary" disabled>{humdty}</Button>
        <Button size="lg" variant="outline-info" className="m-auto" disabled>{pressure}</Button>
    </Stack>
    );
};
