import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'

const url = 'https://api.open-meteo.com/v1/forecast?latitude=48.72&longitude=44.52&hourly=temperature_2m,relativehumidity_2m,pressure_msl&current_weather=true';
const loadCap = 'Загрузка...';

export const DeviceInfo = () => {
    const [pressure, setPress] = useState(loadCap);
    const [humdty, setHum] = useState(loadCap);
    const [temp, setTemp] = useState(loadCap);

    useEffect(() => {
        fetch(url)
        .then(resp => resp.json()).then(out_page => {
            const {relativehumidity_2m, temperature_2m, pressure_msl} = out_page.hourly_units
            const {temperature, time} = out_page.current_weather;
            const index_data = out_page.hourly.time.indexOf(time);
            
            setTemp(temperature + temperature_2m);
            setHum(out_page.hourly.relativehumidity_2m[index_data] + relativehumidity_2m);
            setPress(out_page.hourly.pressure_msl[index_data] + pressure_msl)
        })
    }, []);

    return (
    <Stack direction="horizontal" gap={3}>
        <Button size="lg" variant="outline-primary" className="m-auto" disabled>{temp}</Button>
        <Button size="lg" variant="outline-secondary" disabled>{humdty}</Button>
        <Button size="lg" variant="outline-info" className="m-auto" disabled>{pressure}</Button>
    </Stack>
    );
};
