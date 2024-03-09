import http from 'k6/http';
import {sleep} from 'k6' ; 

export const options = {
    executor: 'ramping-arrival-rate', // Assure load increase if the system slows
    stages: [
    //  { duration: '2h', target: 20000}, // Just slowly ramp-up to a HUGE load  (Não executar na maquina local!!) 
    { duration: '2s', target: 2},  
  ],
};

export default () => {
    const urlRes = http.get ('https://test-api.k6.io'); 
    sleep(1);
};

