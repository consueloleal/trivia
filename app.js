let name;
let countCorrect = 0;
let countWrong = 0;

function setName(){
  name = document.getElementById("myName").value;
}

function setCounterZero(){
  countCorrect = 0;
  countWrong = 0;
}

function playGame(){
  setName();
  document.getElementById("welcome").style.display = "none";
  document.getElementById('selectGame').innerHTML = "<p>Hola " + name + ' a continuación selecciona un tema de juego:</p><button onclick="playMovies()">Jugar con Películas</button><button onclick="playSeries()">Jugar con Series</button> <button onclick="playDibujos()"> Jugar con dibujos </button>';
}

function playMovies() {
  setCounterZero();
  document.getElementById("selectGame").style.display = "none";
  document.getElementById('mainContainer').innerHTML = '<img alt="Dan" src="https://i.ebayimg.com/images/g/e~8AAOSwJo1bVb5W/s-l300.jpg" ><p>Pregunta 1: ¿Cuál es el nombre del teniente de Forrest Gump?</p>  <button onclick="questionOneMovies(\'Ryan\')">A: Ryan</button> </br></br> <button onclick="questionOneMovies(\'Sammy\')">B: Sammy</button> </br></br> <button onclick="questionOneMovies(\'Dan\')">C: Dan</button>';
}

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

function playSeries() {
  setCounterZero();
  document.getElementById("selectGame").style.display = "none";
  document.getElementById('mainContainer').innerHTML = '<img alt="Walter White" src="http://images6.fanpop.com/image/photos/37200000/Walter-White-breaking-bad-37267744-200-200.jpg" ><p>Pregunta 1: ¿Cuál es la profesión de Walter White en Breaking Bad?</p>  <button onclick="questionOneSeries(\'Bombero\')">A: Bombero</button> </br></br> <button onclick="questionOneSeries(\'Profesor\')">B: Profesor</button> </br></br> <button onclick="questionOneSeries(\'Policia\')">C: Policia</button>';
}

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
function playDibujos() {
  setCounterZero();
  document.getElementById("selectGame").style.display = "none";
  document.getElementById('mainContainer').innerHTML = '<img alt="Dan" src="https://i.ebayimg.com/images/g/e~8AAOSwJo1bVb5W/s-l300.jpg" ><p>Pregunta 1: ¿Cuál es el nombre del teniente de Forrest Gump?</p>  <button onclick="questionOneMovies(\'Ryan\')">A: Ryan</button> </br></br> <button onclick="questionOneMovies(\'Sammy\')">B: Sammy</button> </br></br> <button onclick="questionOneMovies(\'Dan\')">C: Dan</button>';
}

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

function finalResults() {
  document.getElementById('mainContainer').innerHTML = '<p>¡Felicitaciones has terminado la trivia!</p> <span>Respuestas correctas: ' + countCorrect + '</span> </br><span>Respuestas incorrectas: ' + countWrong + '</span> </br></br><button onclick="playMovies()">Jugar con Películas</button><button onclick="playSeries()">Jugar con Series</button><button onclick="playDibujos()"> Jugar con dibujos </button>';
}