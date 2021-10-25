import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';
import * as cheerio from 'cheerio';

const url = 'https://www.gismeteo.ru/weather-volgograd-5089/now/';
const fetch_options = {
    method: 'GET',
    headers: {
    'Content-Type': 'text/plain'
    },
    mode: 'no-cors'
}

export const DeviceInfo = () => {
    const [pressure, setPress] = useState('Загрузка...')

    useEffect(() => {
        fetch(url, fetch_options)
        .then(resp => {
            console.log(resp.status);
            console.log(resp.statusText);
            return resp.text();
        }).then(out_page => {
            console.log(out_page.length);
            const now_data = cheerio.load(out_page);
            // const weather_div = now_data('div.now__weather');
            // const other_info = now_data('div.now')('now__info');

            const pressure_load = now_data('.now');
            console.log(pressure_load.html());
            // setPress(pressure_load.text());

        })
    }, []);

    return (
    <Stack direction="horizontal" gap={3}>
        <Button size="lg" variant="outline-primary" className="m-auto" disabled>First item</Button>
        <Button size="lg" variant="outline-secondary" disabled>Second item</Button>
        <Button size="lg" variant="outline-info" className="m-auto" disabled>{pressure}</Button>
    </Stack>
    );
};
