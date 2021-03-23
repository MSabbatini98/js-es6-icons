const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];


// **** Milestone 1
//* Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// Le stampo dopo averle colorate
// icons.forEach((icona) => {

//   const {name, prefix, family} = icona; //senza questo comando  avrei dovuto usare invece che ${family} -> ${icons.family} 
//   const html_to_add =
//   `<div>
//       <i class="${family} ${prefix}${name}"></i>
//       <div class="title">${name}</div>
//     </div>`;

//     $(".box_icons").append(html_to_add);
// });

//****** Milestone 2
//* Coloriamo le icone per tipo

const colors = [ //definisco i colori
  'greenyellow', //food
  'coral', //beverage
  'blue', //animals
];

const categories = [];

icons.forEach((item) => { //trova le diverse catogorie
  if (categories.includes(item.category) == false) {
    categories.push(item.category);
  }
});

console.log(colors);
console.log(categories);

//assegna ad ogni categoria un colore, in ordine di index
const colorized_icons = icons.map((icon) => { 
  const category_index = categories.indexOf(icon.category);
  // console.log(colors[category_index]);
  const item_color = colors[category_index];
  icon.color = item_color;  
  // console.log("icon", icon);
  
  return icon;
});

//stampo le icone colorate
colorized_icons.forEach((icona) => {

  const {name, prefix, family, color} = icona; //senza questo comando  avrei dovuto usare invece che ${family} -> ${icons.family} 
  const html_to_add =
  `<div>
      <i class="${family} ${prefix}${name}" style= "color:${color}"></i>
      <div class="title">${name}</div>
    </div>`;

    $(".box_icons").append(html_to_add);
});

//*****  Milestone 3
//** */ Creiamo una select con i tipi di icone e usiamola per filtrare le icone
