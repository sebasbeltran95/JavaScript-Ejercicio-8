class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada =false;
        this.instalada = false;
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app encendida");
        } 
    }
    cerrada(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    appinfo(){
        return `
        Descargas: <b> ${this.descargas} </b> <br>
        Puntuacion: <b> ${this.puntuacion} </b> <br>
        Peso:  <b> ${this.peso} </b> <br>
        `;
    }
}

const app = new App("16.000", "5 estrellas", "900 mb");
const app2 = new App("1.000", "4 estrellas", "400 mb");
const app3 = new App("6.000", "4.5 estrellas", "100 mb");
const app4 = new App("23.000", "4.8 estrellas", "1 GB");
const app5 = new App("900", "5 estrellas", "250 mb");
const app6 = new App("17", "3.7 estrellas", "522 mb");
const app7 = new App("42.981", "2.9 estrellas", "723 mb");

document.write(`
    ${app.appinfo()} <br>
    ${app2.appinfo()} <br>
    ${app3.appinfo()} <br>
    ${app4.appinfo()} <br>
    ${app5.appinfo()} <br>
    ${app6.appinfo()} <br>
    ${app7.appinfo()} <br>
`);

// app.instalar();
// app.abrir();
// app.cerrada();
// app.desinstalar();