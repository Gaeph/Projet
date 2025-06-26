// const API = "http://localhost:3000/Gallery";
// const gallery = document.getElementById("gallery");
// const searchBox = document.getElementById("searchBox");
// const modeBtn = document.getElementById("modeBtn");

// let galleryData = []; // Stockage local des données

// // Fonction pour afficher la galerie
// function displayGallery(items) {
//   gallery.innerHTML = ""; // Vide le contenu

//   items.forEach((item) => {
//     const card = document.createElement("div");
//     card.className = "gallery-item";

//     card.innerHTML = `
//       <a href="${item.img}" target="_blank" rel="noopener noreferrer">
//         <img src="${item.img}" alt="${item.desc}" />
//       </a>
//       <div class="desc">${item.desc}</div>
//       <button class="like-btn" data-id="${item.id}">Like</button>
//       <span class="like-count" id="like-count-${item.id}">${item.likes}</span>
//     `;

//     gallery.appendChild(card);
//   });
// }

// // Charger les données depuis json-server
// function fetchGallery() {
//   fetch(API)
//     .then((res) => res.json())
//     .then((data) => {
//       galleryData = data.Gallery; // Stocke localement
//       displayGallery(galleryData);
//     })
//     .catch((error) => {
//       console.error("Erreur lors du fetch :", error);
//       gallery.innerHTML =
//         "<p>Erreur lors du chargement de la galerie. Veuillez réessayer plus tard.</p>";
//     });
// }

// // Filtrer la galerie avec la recherche
// searchBox.addEventListener("input", (e) => {
//   const query = e.target.value.toLowerCase();
//   const filtered = galleryData.filter((item) =>
//     item.desc.toLowerCase().includes(query)
//   );
//   displayGallery(filtered);
// });

// // Toggle mode sombre
// modeBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
//   modeBtn.textContent = document.body.classList.contains("dark-mode")
//     ? "Light Mode"
//     : "Dark Mode";
// });

// // Gérer le clic sur bouton Like (3ème événement distinct)
// gallery.addEventListener("click", (e) => {
//   if (e.target.classList.contains("like-btn")) {
//     const id = Number(e.target.getAttribute("data-id"));
//     const item = galleryData.find((obj) => obj.id === id);
//     if (item) {
//       item.likes++;
//       updateLikesOnServer(item);
//       document.getElementById(`like-count-${id}`).textContent = item.likes;
//     }
//   }
// });

// // Mettre à jour les likes dans json-server (PATCH)
// function updateLikesOnServer(item) {
//   fetch(`${API}/${item.id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ likes: item.likes }),
//   }).catch((error) => console.error("Erreur mise à jour likes :", error));
// }

// // Initialisation
// fetchGallery();


// const API = "http://localhost:3000/Gallery";
// const gallery = document.getElementById("gallery");
// const searchBox = document.getElementById("searchBox");
// const modeBtn = document.getElementById("modeBtn");

// let galleryData = []; // Done lokal

// // Fonksyon pou afiche tout atik galri yo
// function displayGallery(items) {
//   gallery.innerHTML = ""; // Vider espas galri a

//   items.forEach((item) => {
//     const card = document.createElement("div");
//     card.className = "gallery-item";

//     card.innerHTML = `
//       <a href="${item.img}" target="_blank" rel="noopener noreferrer">
//         <img src="${item.img}" alt="${item.desc}" onerror="this.src='https://via.placeholder.com/250x150?text=Image+Non+Disponible'" />
//       </a>
//       <div class="desc">${item.desc}</div>
//       <button class="like-btn" data-id="${item.id}">Like</button>
//       <span class="like-count" id="like-count-${item.id}">${item.likes}</span>
//     `;

//     gallery.appendChild(card);
//   });
// }

// // Chaje done depi json-server
// function fetchGallery() {
//   fetch(API)
//     .then((res) => res.json())
//     .then((data) => {
//       galleryData = data; // Pa mete .Gallery, json-server bay array dirèk
//       displayGallery(galleryData);
//     })
//     .catch((error) => {
//       console.error("Erreur lors du fetch :", error);
//       gallery.innerHTML =
//         "<p>Erreur lors du chargement de la galerie. Veuillez réessayer plus tard.</p>";
//     });
// }

// // Rechèch dinamik sou deskripsyon
// searchBox.addEventListener("input", (e) => {
//   const query = e.target.value.toLowerCase();
//   const filtered = galleryData.filter((item) =>
//     item.desc.toLowerCase().includes(query)
//   );
//   displayGallery(filtered);
// });

// // Mode Sombre / Klè
// modeBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
//   modeBtn.textContent = document.body.classList.contains("dark-mode")
//     ? "Light Mode"
//     : "Dark Mode";
// });

// // Gérer Like — avèk delegation
// gallery.addEventListener("click", (e) => {
//   if (e.target.classList.contains("like-btn")) {
//     const id = Number(e.target.getAttribute("data-id"));
//     const item = galleryData.find((obj) => obj.id === id);
//     if (item) {
//       item.likes++;
//       updateLikes(item);
//       document.getElementById(`like-count-${id}`).textContent = item.likes;
//     }
//   }
// });

// // Metajou likes sou serve a
// function updateLikes(item) {
//   fetch(`${API}/${item.id}`, {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ likes: item.likes }),
//   }).catch((error) => console.error("Erreur mise à jour likes :", error));
// }

// // Inisyalizasyon
// fetchGallery();


const API = "http://localhost:3000/Gallery";
const gallery = document.getElementById("gallery");
const searchBox = document.getElementById("searchBox");
const modeBtn = document.getElementById("modeBtn");

let galleryData = [];

// 🔁 Itération ak map() pou kreye HTML string
function displayGallery(items) {
  const cards = items.map((item) => {
    return `
      <div class="gallery-item">
        <a href="${item.img}" target="_blank" rel="noopener noreferrer">
          <img src="${item.img}" alt="${item.desc}" onerror="this.src='https://via.placeholder.com/250x150?text=Image+Non+Disponible'" />
        </a>
        <div class="desc">${item.desc}</div>
        <button class="like-btn" data-id="${item.id}">Like</button>
        <span class="like-count" id="like-count-${item.id}">${item.likes}</span>
      </div>
    `;
  });

  gallery.innerHTML = cards.join(""); // Afiche tout HTML yo
}

// 🔄 forEach() itilize pou log chak deskripsyon nan konsòl (egzanp anplis)
function logDescriptions() {
  galleryData.forEach((item) => {
    console.log("Deskripsyon:", item.desc);
  });
}

// 🟢 fetch() done yo
function fetchGallery() {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      galleryData = data;
      displayGallery(galleryData);
      logDescriptions(); // forEach()
    })
    .catch((err) => {
      gallery.innerHTML = "<p>Erreur de chargement des données.</p>";
      console.error(err);
    });
}

// 🔍 Filtrage ak filter()
searchBox.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = galleryData.filter((item) =>
    item.desc.toLowerCase().includes(keyword)
  );
  displayGallery(filtered);
});

// 🌗 Mode fènwa
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});

// ❤️ Like btn
gallery.addEventListener("click", (e) => {
  if (e.target.classList.contains("like-btn")) {
    const id = parseInt(e.target.dataset.id);
    const item = galleryData.find((el) => el.id === id);
    if (item) {
      item.likes++;
      updateLikes(item);
      document.getElementById(`like-count-${id}`).textContent = item.likes;
    }
  }
});

// 🔃 PATCH nan serve a
function updateLikes(item) {
  fetch(`${API}/${item.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes: item.likes }),
  }).catch((err) => console.error("Erreur update:", err));
}

// 🚀 Inisyalizasyon
fetchGallery();
