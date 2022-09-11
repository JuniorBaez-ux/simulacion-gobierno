import React, {useState, useEffect} from "react";
import Gobierno from './gobierno';
import Pueblo from './pueblo';

function App() {
    const [partido, setpartido] = useState(["Conservador", "Liberal"]);
    const [politica, setpolitica] = useState(["Permisiva", "Coercitiva"]);
    const [contienda, setcontienda] = useState(["Baja", "Alta"]);
    
    //Realizar un cambio de gobierno basado en el gobierno o no
    function handlePoliticaChange(status) {
        if (partido === "Conservador") {
            //Hacer que se realice dentro de un year
            politicaContrario();
        }
        setpolitica(getRandomPolitica);
    }
    
    //Funcion que obtiene un partido al azar
    function handlePartidoChange(status) {
        setpartido(getRandomPartido);
    }

    //Funcion que genera un partido al azar
    function getRandomPartido() {
        var partidos = ["Conservador", "Liberal"];
        var num = partidos[Math.floor(Math.random() * partidos.length)];
        return num;
    }

    //Funcion que genera una politica al azar
    function getRandomPolitica() {
        var politica = ["Permisiva", "Coercitiva"];
        var num = politica[Math.floor(Math.random() * politica.length)];
        return num;
    }

    //Funcion que obtiene un nivel de contienda al azar
    function handleContiendaChange(status) {
        setcontienda(getRandomContienda);
    }

    //Funcion que genera un nivel de contienda al azar
    function getRandomContienda() {
        var contienda = ["Baja", "Alta"];
        var num = contienda[Math.floor(Math.random() * contienda.length)];
        return num;
    }
  
    //Funcion que monitorea el tipo de politica y cambia el nivel de contienda
    function handlePoliticaCoercitiva(){
        if(politica === "Coercitiva"){
            setcontienda("Alta");
        }
        else if(politica === "Permisiva"){
            setcontienda("Baja");
        }
    }

    //Si la contienda es alta se cambia el partido el año siguiente
    function handleContiendaCivil(){
        if(contienda === "alta"){
            //Implementar que se cambie el siguiente "Year"
            handlePartidoChange();
        }
    }

    //Funcion para cambiar la politica a la contraria
    function politicaContrario(){
        if(politica === "Permisiva"){
            setpolitica("Coercitiva");
        }
        else if(politica === "Coercitiva"){
            setpolitica("Permisiva");
        }
    }

    //Funcion para el mandato del gobierno liberal
    function gobiernoLiberal(){
        if (contienda === "Alta" && partido === "Liberal") {
            setpolitica("Permisiva");
            //Un year despues
            setpolitica("Coercitiva");
        }
    }

    //Cambios relacionados con el componente de pueblo
    useEffect(() => {
        handlePoliticaCoercitiva();
        //handleContiendaChange();
    });

    //Cambios relacionados con el componente de gobierno
    useEffect(() => {
        setInterval(() => {
            handlePoliticaChange();
            handlePartidoChange();
            gobiernoLiberal();
        }, 2000);
    });

    return (
        <div>
            <Gobierno partido={partido} politica={politica} />
            <Pueblo contienda={contienda} partido={partido} politica={politica} />
        </div>
    );

}

export default App;