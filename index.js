window.onload = async function () {
  console.log('Pagina caricata correttamente!')
  try {
    let response = await fetch(
      'https://tech-camp-be-production.up.railway.app/songs'
    )
    console.log('RISPOSTA OTTENUTA DAL SERVER', response)
    let tracks = await response.json()
    console.log('DATA', tracks)
    // tracks è la scatola (variabile) con dentro TUTTE le tracce
    // se volessi vedere il primo elemento, devo accedere all'elemento con indice 0
    // tracks[0]

    // ora filtriamo tracks e selezioniamo solamente quelle di David Bowie
    let davidBowieSongs = tracks
      .filter((song) => song.artist.name === 'David Bowie')
      .slice(0, 6)
    console.log('CANZONI DI DAVID BOWIE', davidBowieSongs)

    let ledZeppelinSongs = tracks
      .filter((song) => song.artist.name === 'Led Zeppelin')
      .slice(0, 6)
    console.log('CANZONI DI LED ZEPPELIN', ledZeppelinSongs)

    let pinkFloydSongs = tracks
      .filter((song) => song.artist.name === 'Pink Floyd')
      .slice(0, 6)
    console.log('CANZONI DEI PINK FLOYD', pinkFloydSongs)

    // ora otteniamo dei riferimenti al DOM, in particolare ai 3 div
    // con classe "grid"
    // questo è il primo:
    let firstGrid = document.querySelectorAll('.grid')[0]
    console.log('prima grid', firstGrid)

    davidBowieSongs.forEach((song) => {
      // questa operazione viene eseguita 6 volte
      firstGrid.innerHTML =
        firstGrid.innerHTML +
        `
    <div class="col">
      <div class="card">
        <div class="image-wrapper">
          <img src=${song.album.cover_big} alt="" /><button
            class="play-btn"
          >
            <svg
              role="img"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              class="Svg-sc-1bi12j5-0 EQkJl"
            >
              <path
                d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
              ></path>
            </svg>
          </button>
        </div>
        <h3>${song.artist.name}</h3>
        <p>
          ${song.title}
        </p>
      </div>
    </div>
      `
    })

    let secondGrid = document.querySelectorAll('.grid')[1]
    console.log('seconda grid', secondGrid)

    ledZeppelinSongs.forEach((song) => {
      // questa operazione viene eseguita 6 volte
      secondGrid.innerHTML =
        secondGrid.innerHTML +
        `
    <div class="col">
      <div class="card">
        <div class="image-wrapper">
          <img src=${song.album.cover_big} alt="" /><button
            class="play-btn"
          >
            <svg
              role="img"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              class="Svg-sc-1bi12j5-0 EQkJl"
            >
              <path
                d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
              ></path>
            </svg>
          </button>
        </div>
        <h3>${song.artist.name}</h3>
        <p>
          ${song.title}
        </p>
      </div>
    </div>
      `
    })

    let thirdGrid = document.querySelectorAll('.grid')[2]
    console.log('terza grid', thirdGrid)

    pinkFloydSongs.forEach((song) => {
      // questa operazione viene eseguita 6 volte
      thirdGrid.innerHTML =
        thirdGrid.innerHTML +
        `
    <div class="col">
      <div class="card">
        <div class="image-wrapper">
          <img src=${song.album.cover_big} alt="" /><button
            class="play-btn"
          >
            <svg
              role="img"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              class="Svg-sc-1bi12j5-0 EQkJl"
            >
              <path
                d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
              ></path>
            </svg>
          </button>
        </div>
        <h3>${song.artist.name}</h3>
        <p>
          ${song.title}
        </p>
      </div>
    </div>
      `
    })
  } catch (error) {
    console.log(error)
  }
}

{
  /* <div class="col">
<div class="card">
  <div class="image-wrapper">
    <img src="./assets/imgs/main/image-1.jpg" alt="" /><button
      class="play-btn"
    >
      <svg
        role="img"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        class="Svg-sc-1bi12j5-0 EQkJl"
      >
        <path
          d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
        ></path>
      </svg>
    </button>
  </div>
  <h3>Title</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</div>
</div> */
}
