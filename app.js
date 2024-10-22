
// // search start 
const searchMeals = document.getElementById("input")
function fetchMeals () {
    if (searchMeals.value) {
        let URL = `https://themealdb.com/api/json/v1/1/search.php?s=${searchMeals.value}`;
    fetch(URL)
    .then((res) => res.json())
    .then((meals) => showMeal(meals.meals));
    document.getElementById("no-found").style.display = "none";
    document.querySelector(".cocktail").innerHTML = "";
    } else {
        alert ("Search for a meals First ...")
    document.getElementById("no-found").style.display = "block";
    } 
}
function showMeal(meals) {
   for (let meal of meals){
    console.log(meal);
    document.querySelector(".meals").innerHTML += `
    <div class="Cocktail-box border border-gray-300">
        <img src=${meal.strMealThumb} alt="">
       <div class="p-3"> 
        <h3 class="text-white text-[20px]">${meal.strMeal}</h3>
        <p class="text-[15px] text-white my-3">${meal.strInstructions.slice(0, 130)}</p>
        <div class="my-5">
          <a href="${meal.strYoutube}" target="_blank" class="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded">Watch</a>
        <a href="#" class="text-white ml-3">View meal</a>
        </div>
       </div>
     </div>
    `
   }
   
}

// function lookUpDetails (id) {
//     console.log(id);
//     let URL = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
//     fetch(URL)
//     .then((res) => res.json())
//     .then((cocktails) => showMoreDetails(cocktails.drinks[0]));
// }
// function showMoreDetails (cocktail){
// //    console.log(cocktail);
//    const details = document.getElementById("details");
// //    details.style.display = "none";
// //    details.style.display = "block";
//    details.classList.add("visible")
//    details.classList.remove("invisible")
//    details.innerHTML = `
//             <div class="popup bg-white w-170%] min-h-[500px] p-10">
//             <img src=${cocktail.strDrinkThumb} alt="" class="w-[200px] pt-2">
//             <h2 class="text-2xl font-bold mb-4">${cocktail.strDrink}</h2>
//              <div class="flex gap-2 items-center">
//             <h1>Category:</h1>
//             <h1 class="text-[15px] mb-4 text-red-900 pt-5">${cocktail.strCategory}</h1>
//             </div>
//             <p class="mb-6">${cocktail.strInstructions}</p>
//             <button
//               class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded" onclick="close()"
//             >
//               Close
//             </button>
//             </div>
//    `
// }
// function close() {
//     details.classList.add("visible");
//     details.classList.remove("visible");
//     // details.style.display = "block";
//     // details.style.display = "flex";
// };
const search = document.getElementById("search");
search.addEventListener("click", () => {
    fetchMeals()
});
