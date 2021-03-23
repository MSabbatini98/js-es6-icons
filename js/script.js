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
const icons_container = $(".box_icons");
const select = $("#type");

// **** Milestone 1 Partendo dalla seguente struttura dati e le stampiamo

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

//****** Milestone 2 Coloriamo le icone per tipo

const colors = [ //definisco i colori
  {
    category : "food",
    color : "greenyellow"
  }, 
  {
    category : "beverage",
    color : "coral"
  },
  {
    category : "animal",
    color : "blue"
  }
];

const categories = getCategory(icons);

//assegna ad ogni categoria un colore, in ordine di index
const colorized_icons = icons.map((icon) => { 

  let  icon_color;

  colors.forEach((colore) => {
    
    if(icon.category == colore.category) {
      icon_color = colore.color;
    }
  });

  icon.color = icon_color;  
  return icon;

});

  printIcons(icons_container, colorized_icons);

//*****  Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone

getOptions(select, categories);

//controllo quando viene modificato il menu a tendina, e quando viene modificato esegue il codice
select.change( function() {
  
  const selected_option = $(this).val();
  
  let icons_filtered = colorized_icons.filter((icons) => {
    return icons.category == selected_option;
  }); 
  
  if (icons_filtered.length == 0 ) {
    icons_filtered = colorized_icons;
  }

  printIcons(icons_container, icons_filtered);
});


/////////////////////////////////////////////////////////////////////////////////

// ? funzioni utilizzate: printIcons


// ! funzione che svuota il box_icons e loriempie in base all'opzione selezionata da menu a tendina nell'HTML
function printIcons(target, icons) {
  //svuota il contenuto
  icons_container.html("");

  icons.forEach((icona) => {

    const {name, prefix, family, color} = icona; //senza questo comando  avrei dovuto usare invece che ${family} -> ${icons.family} 
    const html_div =
    `<div>
        <i class="${family} ${prefix}${name}" style= "color:${color}"></i>
        <div class="title">${name}</div>
      </div>`;
  
      $(".box_icons").append(html_div);
  });
}

// ! funzione che trova le diverse categorie e le mette in un array (categories)
function getCategory (icons) {

  const categories = [];
  
  icons.forEach((item) => { //trova le diverse catogorie
    if (categories.includes(item.category) == false) {
      categories.push(item.category);
    }
  });
  return categories;
}

// ! funzione che aggiunge al menu a tendina tutte le varie categorie che chiamiamo opzioni
function getOptions(target, options) {
  //aggiungo le varie opzioni nel menu a tendina
  options.forEach((categ) => {
    
    const html_option = `<option value="${categ}"> ${categ} </option>`
    select.append(html_option);
  });
  return options;
}