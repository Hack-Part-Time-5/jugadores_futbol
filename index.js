/*let container_jugadores = document.getElementById('Cards__jugadores_container')*/
let container_titulo = document.getElementById('container_titulo')

console.log(container_titulo);

let jugadores = [
  {
    id: 01,
    img: 'https://i.pinimg.com/736x/f2/04/b7/f204b7c5051518b0775cd5b2edb1d34e.jpg',
    nombre: 'Falcao',
    equipo: 'Colombia',
    posicion: 'delantero',
    estadisticas: ['goles: 15', 'asistencias: 5', 'minutos: 2000'],
  },
  {
    id: 02,
    img: 'https://i.pinimg.com/564x/08/b8/0d/08b80d3e45219edcc53d22aec243e833.jpg',
    nombre: 'Alexis sanchez',
    equipo: 'chile',
    posicion: 'extremo',
    estadisticas: ['goles: 10', 'asistencias: 8', 'minutos: 2000'],
  },
  {
    id: 03,
    img: 'https://i.pinimg.com/736x/b8/3e/24/b83e24c5224c4f53ef33b88ba19e26a7.jpg',
    nombre: 'Messi',
    equipo: 'Argentina',
    posicion: 'delantero',
    estadisticas: ['goles: 20', 'asistencias: 8', 'minutos: 2000'],
  },
  {
    id: 04,
    img: 'https://i.pinimg.com/736x/a0/37/b2/a037b2fbad18f50c6d29c0cc0e1228c3.jpg',
    nombre: 'Hakimi',
    equipo: 'marruecos',
    posicion: 'delantero',
    estadisticas: ['goles: 12', 'asistencias: 10', 'minutos: 2000'],
  }
];

let h1 = document.createElement('h1');
container_titulo.appendChild(h1);
h1.innerHTML = 'jugadores excepcionales'
h1.style.textAlign = 'center';

let container_jugadores = document.createElement('div');
container_titulo.appendChild(container_jugadores);


jugadores.forEach(data => {
  let div_cols = document.createElement('div');
  container_jugadores.appendChild(div_cols);

  container_jugadores.classList.add('d-flex', 'flex-row', 'mb-3');
  container_jugadores.classList.remove('mb-3')

  div_cols.innerHTML = `
    <div class="card card_mostrar" style="width: 18rem;">
      <img id="${data.id}" class="img_jugador" src=" ${data.img} " class="card-img-top" alt="...">
      <div class="card_jg_body card-body">
        <h5 class="card-title"> ${data.nombre} </h5>
        <p class="card-text"> ${data.estadisticas} </p>
        <a href="#" class="btn btn-primary"> info </a>
      </div>
    </div>
  `
})

let card_body = document.querySelectorAll('.card_jg_body');
let images_players = document.querySelectorAll('.img_jugador');

console.log(card_body);
console.log(images_players);

images_players.forEach(element => {
  let cont_img = element.id
  console.log(cont_img);

  element.onmouseover = () => {
    for (let i = 0; i <  card_body.length; i++) {
      let id_player = jugadores[i].id
      
      if (id_player == cont_img) {
        card_body[i].style.display = 'flex';
      } else {
        card_body[i].style.display = 'none'
      }
    }
  }
});




