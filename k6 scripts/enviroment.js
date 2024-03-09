import http from 'k6/http'; 
import {sleep} from 'k6'; 


export default function (){
    const BASE_URL = __ENV;
    __ENV
 
    const res = http.get (BASE_URL);

    sleep(1);
}
 

// k6 run -e URL=https://test-api.k6.io/public/crocodiles/  aula19.js Para informar os segundos que o script irá rodar (Precisa do código implementado informando VUs e tempo que irá rodar o script)
// k6 run -e URL=https://test-api.k6.io/public/crocodiles/  aula19.js -d 10s (-d / --duration + tempo de duração do script) -> Para informar os segundos que o script irá rodar.
// k6 run -e URL=https://test-api.k6.io/public/crocodiles/  aula19.js -d 10s -u 10  (-u/--vus + numero de usuários virutais) ->
// k6 run -e URL=https://test-api.k6.io/public/crocodiles/  aula19.js  --stage 5s:10, 5s:5, 5s:0 (--stage + tempo:usuários) -> Preisa tirar o tempo e Vus do comando anterior e adicionar a nova sintaxe