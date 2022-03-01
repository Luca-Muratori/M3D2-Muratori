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
      let num = 1;
      for (const song of songs.data) {
        eminemDiv.innerHTML += `
               <div>
              ${num++}  ${song.title_short}
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
      let num = 1;
      for (const song of songs.data) {
        metallicaDiv.innerHTML += `
               <div>
               ${num++}
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
      let num = 1;
      for (const song of songs.data) {
        behemothDiv.innerHTML += `
               <div>
               ${num++}
                ${song.title_short}
               </div>
             `;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function howManyEminem() {
  const url = fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
  );
  url
    .then((response) => response.json())
    .then((uniqueSong) => {
      let arr = [];
      for (let i = 0; i < uniqueSong.data.length; i++) {
        const data = uniqueSong.data[i].title;
        let isUnique = true;
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] === data) {
            isUnique = false;
            break;
          }
        }
        if (isUnique) {
          arr.push(data);
        }
      }
      console.log(`There are ${arr.length} unique song`);
    });
}

function howManyMetallica() {
  const url = fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=Metallica"
  );
  url
    .then((response) => response.json())
    .then((uniqueSong) => {
      let arr = [];
      for (let i = 0; i < uniqueSong.data.length; i++) {
        const data = uniqueSong.data[i].title;
        let isUnique = true;
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] === data) {
            isUnique = false;
            break;
          }
        }
        if (isUnique) {
          arr.push(data);
        }
      }
      console.log(`There are ${arr.length} unique song`);
    });
}

function howManyBehemoth() {
  const url = fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=Behemoth"
  );
  url
    .then((response) => response.json())
    .then((uniqueSong) => {
      let arr = [];
      for (let i = 0; i < uniqueSong.data.length; i++) {
        const data = uniqueSong.data[i].title;
        let isUnique = true;
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] === data) {
            isUnique = false;
            break;
          }
        }
        if (isUnique) {
          arr.push(data);
        }
      }
      console.log(`There are ${arr.length} unique song`);
    });
}
