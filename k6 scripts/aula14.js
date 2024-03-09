import http from 'k6/http';
import {Counter} from 'k6/metrics';
import {Gauge} from 'k6/metrics';
import {Rate} from 'k6/metrics';
import {Trend} from 'k6/metrics';


export const options={
    vus:1,
    duration:'3s'
}

//Contador
const chamadas = new Counter ('quantidade de chamadas');
//Medidor
const myGauge = new Gauge ('Tempo bloqueado')
//Taxa
const myRate = new Rate ('Taxa de requisição 200')
//Tendências
const myTrend = new Trend ('Taxa de espera')
export default function () {
   const req = http.get('https://test.k6.io');
   chamadas.add(1)
   myGauge.add(req.timings.blocked);
   myRate.add(req.status ===200);
   myTrend.add(req.timings.waiting);
}