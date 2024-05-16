const recipes = [
  {
      name: "Chicken Curry",
      ingredients: ["chicken", "onion", "tomato", "ginger", "garlic", "green chilies", "curry leaves", "turmeric powder", "coriander powder", "cumin powder", "red chili powder", "garam masala", "coconut milk", "oil", "salt"],
      coverImage: "chickenCurry.jpeg",
      recipe: ["Heat oil in a pan and sauté chopped onion until golden brown.", "Add chopped tomato, ginger, garlic, green chilies, and curry leaves. Cook until tomatoes are soft","Add turmeric powder, coriander powder, cumin powder, red chili powder, and salt. Cook until the oil separates.", "Add chicken pieces and cook until they are browned.","Pour in coconut milk and simmer until the chicken is cooked through.","Sprinkle garam masala and garnish with chopped coriander leaves.","Serve hot with rice or bread."],
  },
  {
      name: "Biryani",
      ingredients: ["rice", "chicken/mutton/beef", "onion", "yogurt", "tomato", "ginger-garlic paste", "green chilies", "mint leaves", "coriander leaves", "turmeric powder", "red chili powder", "biriyani masala", "saffron", "milk", "ghee", "oil", "salt"],
      coverImage: "biryani.jpeg",
      recipe: ["Marinate meat with yogurt, ginger-garlic paste, turmeric powder, red chili powder, biryani masala, and salt for at least 1 hour.","Heat oil in a pan and sauté chopped onion until golden brown.","Add chopped tomato, green chilies, mint leaves, and coriander leaves. Cook until tomatoes are soft.","Layer half of the rice in a separate pot and top with the marinated meat mixture.","Add the remaining rice on top of the meat. Sprinkle saffron soaked in milk and ghee.","Cover and cook on low heat until the meat is tender and rice is cooked.","Serve hot with raita and salad."]
  },
  {
      name: "Chilli Chicken",
      ingredients: ["chicken", "corn flour", "soy sauce", "green chilies", "ginger-garlic paste", "onion", "capsicum", "spring onion", "garlic", "salt", "pepper", "sugar", "vinegar", "oil"],
      coverImage: "chilliChicken.jpeg",

      recipe: ["Marinate chicken pieces with corn flour, soy sauce, ginger-garlic paste, salt, pepper, and a pinch of sugar. Let it sit for 30 minutes.","Heat oil in a pan and fry marinated chicken until golden brown. Remove from pan and set aside.","In the same pan, add chopped garlic, green chilies, and onion. Sauté until onions are translucent.","Add chopped capsicum and spring onion. Cook for a few minutes.","Return the fried chicken to the pan and mix well with the vegetables.","Add soy sauce and vinegar. Stir well and cook for a few more minutes.","Garnish with spring onion greens and serve hot."]
  },
  {
      name: "Fish Curry",
      ingredients: ["fish", "onion", "tomato", "ginger", "garlic", "green chilies", "curry leaves", "turmeric powder", "coriander powder", "cumin powder", "red chili powder", "tamarind", "coconut milk", "oil", "salt"],
      coverImage: "fishCurry.jpeg",
      recipe: ["Heat oil in a pan and sauté chopped onion until golden brown.","Add chopped tomato, ginger, garlic, green chilies, and curry leaves. Cook until tomatoes are soft.","Add turmeric powder, coriander powder, cumin powder, red chili powder, and salt. Cook until the oil separates.","Add fish pieces and cook until they are tender.","Pour in tamarind extract and coconut milk. Simmer until the fish is cooked through.","Serve hot with rice or bread."]
  },
  {
      name: "Fried Rice",
      ingredients: ["rice", "carrot", "capsicum", "green beans", "spring onion", "garlic", "ginger", "green chilies", "soy sauce", "vinegar", "pepper", "salt", "oil"],
      coverImage: "friedRice.jpeg",
      recipe: ["Cook rice and let it cool completely.","Heat oil in a pan and sauté chopped garlic, ginger, and green chilies until fragrant.","Add chopped vegetables (carrot, capsicum, green beans) and cook until they are slightly tender.","Add cooked rice to the pan and stir-fry for a few minutes.","Season with soy sauce, vinegar, salt, and pepper. Mix well.","Garnish with chopped spring onion greens and serve hot."]
  },
  {
      name: "Egg Curry",
      ingredients: ["eggs", "onion", "tomato", "ginger", "garlic", "green chilies", "curry leaves", "turmeric powder", "coriander powder", "cumin powder", "red chili powder", "garam masala", "coconut milk", "oil", "salt"],
      coverImage: "egg-curry.jpeg",
      recipe: ["Hard-boil eggs and peel off the shells.","Heat oil in a pan and sauté chopped onion until golden brown.","Add chopped tomato, ginger, garlic, green chilies, and curry leaves. Cook until tomatoes are soft.","Add turmeric powder, coriander powder, cumin powder, red chili powder, and salt. Cook until the oil separates.","Add coconut milk and simmer for a few minutes.","Add boiled eggs to the gravy and cook for another 5-10 minutes.","Sprinkle garam masala and garnish with chopped coriander leaves.","Serve hot with rice or bread."]
  },
  // Add more recipes as needed
];



document.addEventListener('DOMContentLoaded', () => {
    let event = document.querySelector(".ADAI");
    let interval; // Declare the interval variable
    let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(); // Define the alphabet letters
  
    let iteration = 0;
    clearInterval(interval); // Clear any existing interval
  
    interval = setInterval(() => {
      event.innerText = event.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)]; // Use the defined letters array
        })
        .join("");
      
      if (iteration >= event.dataset.value.length) { 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 50);
  });

const inventor = document.querySelector('.NoDisplay');
const home = document.querySelector('.body');
const button = document.querySelector('.button');
const InventoryList = document.querySelector(".inventoryItems");
const nova = document.querySelector('.nova');
const resButton = document.querySelectorAll('.RecPie');

function search(){
    const search = document.querySelector('.search-input')
    let value = search.value.toUpperCase();
    let Text='';
    let flag=1;
    for(let i=0;i<recipes.length;i++)
    {
       if(recipes[i]['name'].toUpperCase()===value)   {
        
        Text+=`<button class="BoxItem" value="${i}" onclick="CallBox(this)">
        <img src="${recipes[i]['coverImage']}" alt="" class="imgBox">
        <h1 id="Tit">${recipes[i]['name'].toUpperCase()}</h1>
        </button><br> <br>`;
        flag=0;
    }
    }
    if(flag){
        Text+=`<h1 class="error">NOT FOUND</h1>`;
    }
    InventoryList.innerHTML=Text;
    nova.setAttribute('class','NoDisplay');
    search.value='';
};


resButton[0].addEventListener('click', function() {
    home.setAttribute('class', 'NoDisplay');
    inventor.setAttribute('class','Inventory')
    let Text='';
    for(let i=0;i<recipes.length;i++)
    {
        Text+=`<button class="BoxItem" value="${i}" onclick="CallBox(this)">
        <img src="${recipes[i]['coverImage']}" alt="" class="imgBox">
        <h1 id="Tit">${recipes[i]['name'].toUpperCase()}</h1>
        </button><br> <br>`;
    }
    InventoryList.innerHTML=Text;
    nova.setAttribute('class','NoDisplay');
});

resButton[2].addEventListener('click', function() {
    home.setAttribute('class', 'NoDisplay');
    inventor.setAttribute('class','Inventory')
    let Text='';
    for(let i=0;i<recipes.length;i++)
    {
        Text+=`<button class="BoxItem" value="${i}" onclick="CallBox(this)">
        <img src="${recipes[i]['coverImage']}" alt="" class="imgBox">
        <h1 id="Tit">${recipes[i]['name'].toUpperCase()}</h1>
        </button><br> <br>`;
    }
    InventoryList.innerHTML=Text;
    nova.setAttribute('class','NoDisplay');
});
resButton[1].addEventListener('click', function() {
    home.setAttribute('class', 'NoDisplay');
    inventor.setAttribute('class','Inventory')
    let Text='';
    for(let i=0;i<recipes.length;i++)
    {
        Text+=`<button class="BoxItem" value="${i}" onclick="CallBox(this)">
        <img src="${recipes[i]['coverImage']}" alt="" class="imgBox">
        <h1 id="Tit">${recipes[i]['name'].toUpperCase()}</h1>
        </button><br> <br>`;
    }
    InventoryList.innerHTML=Text;
    nova.setAttribute('class','NoDisplay');
});

button.addEventListener('click', function() {
    home.setAttribute('class', 'NoDisplay');
    inventor.setAttribute('class','Inventory')
    let Text='';
    for(let i=0;i<recipes.length;i++)
    {
        Text+=`<button class="BoxItem" value="${i}" onclick="CallBox(this)">
        <img src="${recipes[i]['coverImage']}" alt="" class="imgBox">
        <h1 id="Tit">${recipes[i]['name'].toUpperCase()}</h1>
        </button><br> <br>`;
    }
    InventoryList.innerHTML=Text;
    // nova.setAttribute('class','NoDisplay');
});

const logo = document.querySelector('.logo');

logo.addEventListener('click', function() {
    home.setAttribute('class', 'body');
    inventor.setAttribute('class','NoDisplay');
    nova.setAttribute('class','NoDisplay');
});


function CallBox(bloblo) {
  inventor.setAttribute('class', 'NoDisplay');
  const val = bloblo.value;
  const recipe_0 = recipes[val];

  let htmltext = `
  <div class="title">
      <img src="${recipe_0.coverImage}" alt="">
      <h1 id="Tit">${recipe_0.name.toUpperCase()}</h1>
  </div>
  <div class="ingredients">
      <h1>INGREDIENTS</h1>
      <div class="list">
  `;
  for (let i = 0; i < recipe_0.ingredients.length; i++) {
      htmltext += `<span data-step="${i + 1}:">${recipe_0.ingredients[i]}</span><br>`;
  }
  htmltext += `
      </div>
  </div>
  <div class="steps">
      <h1>PROCEDURE</h1>
      <div class="stepNo">
  `;
  for (let i = 0; i < recipe_0.recipe.length; i++) {
      htmltext += `<span data-step="STEP ${i + 1}:">${recipe_0.recipe[i]}</span><br>`;
  }
  htmltext += `
      </div>
  </div>
  `;
  nova.innerHTML = htmltext;
  nova.setAttribute('class', 'DisplayRes');
}
