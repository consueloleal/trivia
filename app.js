let name;
let countCorrect = 0;
let countWrong = 0;
function setName() {
    name = document.getElementById("myName").value;
}
function setCounterZero() {
    countCorrect = 0;
    countWrong = 0;
}
function playGame() {
    setName();
    document.getElementById("welcome").style.display = "none";
    document.getElementById('selectGame').innerHTML = "<p>Hola " + name + ' a continuación selecciona un tema de juego:</p><button onclick="playMovies()">Jugar con Películas</button><button onclick="playSeries()">Jugar con Series</button><button onclick="playDibujos()">Jugar con Dibujos</button>';
}
// categoría peliculas
function playMovies() {
    setCounterZero();
    document.getElementById("selectGame").style.display = "none";
    document.getElementById('mainContainer').innerHTML = '<img alt="Dan" src="https://i.ebayimg.com/images/g/e~8AAOSwJo1bVb5W/s-l300.jpg" ><p>Pregunta 1: ¿Cuál es el nombre del teniente de Forrest Gump?</p>  <button onclick="questionOneMovies(\'Ryan\')">A: Ryan</button> </br></br> <button onclick="questionOneMovies(\'Sammy\')">B: Sammy</button> </br></br> <button onclick="questionOneMovies(\'Dan\')">C: Dan</button>';
}
//preguntas peliculas
function questionOneMovies(answer) {
    if (answer === "Dan") {
        ++countCorrect;
    } else {
        ++countWrong;
    }
    document.getElementById('mainContainer').innerHTML = '<img alt="Voldemort" src="https://s3.wasabisys.com/wheninmanilabucket/2018/12/WATCH-Someone-Made-a-Beauty-and-Lord-Voldemort-Movie-Trailer-Because-Why-Not-200x200.jpg" ><p>Pregunta 2: ¿Cuál es el antagonista de Harry Potter?</p>  <button onclick="questionTwoMovies(\'Voldemort\')">A: Voldemort</button> </br></br> <button onclick="questionTwoMovies(\'Ron\')">B: Ron</button> </br></br> <button onclick="questionTwoMovies(\'Sauron\')">C: Sauron</button>';
}
function questionTwoMovies(answer) {
    if (answer === "Voldemort") {
        ++countCorrect;
    } else {
        ++countWrong;
    }
    document.getElementById('mainContainer').innerHTML = '<img alt="Golden Ticket" src="https://d9nvuahg4xykp.cloudfront.net/8592977500204506264/6209663370864993835_thumbnail.jpg" ><p>Pregunta 3: ¿Cuántos boletos dorados se repartieron en la película Charlie y la Fábrica de Chocolate?</p>  <button onclick="questionThreeMovies(10)">A: 10</button> </br></br> <button onclick="questionThreeMovies(5)">B: 5</button> </br></br> <button onclick="questionThreeMovies(7)">C: 7</button>';
}
function questionThreeMovies(answer) {
    if (answer === 5) {
        ++countCorrect;
    } else {
        ++countWrong;
    }
    finalResults();
}
//Categpría Series
function playSeries() {
    setCounterZero();
    document.getElementById("selectGame").style.display = "none";
    document.getElementById('mainContainer').innerHTML = '<img alt="Walter White" src="http://images6.fanpop.com/image/photos/37200000/Walter-White-breaking-bad-37267744-200-200.jpg" ><p>Pregunta 1: ¿Cuál es la profesión de Walter White en Breaking Bad?</p>  <button onclick="questionOneSeries(\'Bombero\')">A: Bombero</button> </br></br> <button onclick="questionOneSeries(\'Profesor\')">B: Profesor</button> </br></br> <button onclick="questionOneSeries(\'Policia\')">C: Policia</button>';
}
//preguntas series
function questionOneSeries(answer) {
    if (answer === "Profesor") {
        ++countCorrect;
    } else {
        ++countWrong;
    }
    document.getElementById('mainContainer').innerHTML = '<img alt="Ragnar Lodbrok" src="https://i.pinimg.com/originals/bf/9a/f8/bf9af85da5f21e2ac0025f49c8110324.jpg" ><p>Pregunta 2: ¿Cuántos hijos varones tuvo Ragnar Lodbrok en la serie Vikings?</p>  <button onclick="questionTwoSeries(5)">A: 5</button> </br></br> <button onclick="questionTwoSeries(2)">B: 2</button> </br></br> <button onclick="questionTwoSeries(7)">C: 7</button>';
}
function questionTwoSeries(answer) {
    if (answer === 5) {
        ++countCorrect;
    } else {
        ++countWrong;
    }
    document.getElementById('mainContainer').innerHTML = '<img alt="Winterfell" src="https://i.pinimg.com/236x/94/35/2b/94352bc00324ee7d44390793b8779337.jpg" ><p>Pregunta 3: ¿Cuál es la ciudad de la familia Stark en Game of Thrones?</p>  <button onclick="questionThreeSeries(\'Winterfell\')">A: Winterfell</button> </br></br> <button onclick="questionThreeSeries(\'Kings Landing\')">B: Kings Landing</button> </br></br> <button onclick="questionThreeSeries(\'Braavos\')">C: Braavos</button>';
}
function questionThreeSeries(answer) {
    if (answer === "Winterfell") {
        ++countCorrect;
    } else {
        ++countWrong;
    }
    finalResults();
}
// Dibujos
function playDibujos() {
    setCounterZero();
    document.getElementById("selectGame").style.display = "none";
    document.getElementById('mainContainer').innerHTML = '<img alt="hijo de mufasa" src="http://images6.fanpop.com/image/photos/37700000/The-Lion-King-Simba-walt-disney-characters-37730625-200-200.png" ><p>Pregunta 1: ¿Cuál es el nombre de hijo de Mufasa?</p>  <button onclick="questionOneDibujos(\'Nala\')">A: Nala</button> </br></br> <button onclick="questionOneDibujos(\'Emilio\')">B: Emilio</button> </br></br> <button onclick="questionOneDibujos(\'Simba\')">C: Simba</button>';
}
//preguntas dibujos
function questionOneDibujos(answer) {
    if (answer === "Simba") {
        ++countCorrect;
    } else {
        ++countWrong;
    }
    document.getElementById('mainContainer').innerHTML = '<img alt="Frozen" src="http://images6.fanpop.com/image/photos/35900000/Elsa-the-Snow-Queen-Icons-frozen-35962805-200-200.jpg" ><p>Pregunta 2: ¿Cuál es el poder que posee Elza? </p>  <button onclick="questionTwoDibujos(\'congelar cosas\')">Congelar cosas</button> </br></br> <button onclick="questionTwoDibujos(\'Derretir cosas\')">Derretir cosas</button> </br></br> <button onclick="questionTwoDibujos(\'Volar\')">Volar</button>';
}
function questionTwoDibujos(answer) {
    if (answer === "congelar cosas") {
        ++countCorrect;
    } else {
        ++countWrong;
    }
    document.getElementById('mainContainer').innerHTML = '<img alt="Coraline" src="http://images6.fanpop.com/image/photos/37900000/Coraline-Jones-coraline-37952123-200-200.jpg" ><p>Pregunta 3: ¿Que quería obtener de los niños la otra nadre de Coraline?</p>  <button onclick="questionThreeDibujos(\'La lengua\')">La lengua</button> </br></br> <button onclick="questionThreeDibujos(\'Los ojos\')">Los ojos</button> </br></br> <button onclick="questionThreeDibujos(\'Las uñas\')">Las uñas</button>';
}
function questionThreeDibujos(answer) {
    if (answer === "Los ojos") {
        ++countCorrect;
    } else {
        ++countWrong;
    }
    finalResults();
}
// result
function finalResults() {
    document.getElementById('mainContainer').innerHTML = '<p>¡Felicitaciones has terminado la trivia!</p> <span>Respuestas correctas: ' + countCorrect + '</span> </br><span>Respuestas incorrectas: ' + countWrong + '</span> </br></br><button onclick="playMovies()">Jugar con Películas</button><button onclick="playSeries()">Jugar con Series</button><button onclick="playDibujos()">Jugar con Dibujos</button>';
}