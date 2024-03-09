//1. inicialização
import sleep from 'k6';


//2. configuração 
export const option = {
    vus:1,
    duration:'10s'
}

//3. execução // código 
export default function (){
    console.log('testando K6');
    sleep(1)
}


//4. desmontagem 
export function teardown(data){
    console.log(data)
}