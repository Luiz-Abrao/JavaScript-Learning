function showHours() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {housr12: false});
}

const timer = setInterval(function (){
    console.log(showHours());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 4000);

setTimeout(function(){
    console.log('Hello World');
}, 5000);