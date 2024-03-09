import http from 'k6/http'
import { sleep, check} from 'k6';

export default function () {
   const res = http.get('https://test.k6.io');
    sleep(1);
  
   check(res,{
    'status code é 200':(r)=> r.status === 200
   });
}