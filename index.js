const eminemDiv = document.querySelector("#eminem");

function fetchEminem() {
  const url = fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
  );
  url
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((songs) => {
      console.log(songs.data);
      for (const song of songs.data) {
        eminemDiv.innerHTML += `
               <div>
                ${song.title_short}
               </div>
             `;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const metallicaDiv = document.querySelector("#metallica");

function fetchMetallica() {
  const url = fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=Metallica"
  );
  url
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((songs) => {
      console.log(songs.data);
      for (const song of songs.data) {
        metallicaDiv.innerHTML += `
               <div>
                ${song.title_short}
               </div>
             `;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const behemothDiv = document.querySelector("#behemoth");

function fetchBehemoth() {
  const url = fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=behemoth"
  );
  url
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((songs) => {
      console.log(songs.data);
      for (const song of songs.data) {
        behemothDiv.innerHTML += `
               <div>
                ${song.title_short}
               </div>
             `;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
