
var lasagneRecipe = document.getElementById ('lasagne-sidebar');
var lasagne = document.getElementById('lasagne');
var firstMenu = document.getElementById("firstMenu");
lasagneRecipe.addEventListener('click', function(){
  lasagne.style.display = 'block';
  firstMenu.style.display = "none";
  bowl.style.display = 'none';
  var zeeTable = document.getElementById('table-wrapper-two');
  zeeTable.style.display = 'block';


})


var bowlRecipe = document.getElementById ('bowl-sidebar');
var bowl = document.getElementById('bowl');
var ingBowl = document.getElementById('table-wrapper');
bowlRecipe.addEventListener('click', function(){
  bowl.style.display = 'block';
  firstMenu.style.display = "none";
  lasagne.style.display = "none";
  ingBowl.style.display = "block";
})

function shareBowl(){
  window.alert("Thx for spreading happiness!" + " " + "Use: " + document.URL);
}



//specific size - lasage


var mediaQuery = window.matchMedia("(max-width: 839px)");

  if(mediaQuery.matches){
    var lasangeSidebar = document.getElementById('lasagne-sidebar');
    lasangeSidebar.addEventListener('click', function() {
      var recipeGrid= document.getElementById('recipe-responsive-grid');
      var recipeMain = document.getElementById('recipe-main-id');

      recipeMain.appendChild(recipeGrid);


      recipeGrid.style = "margin-top:-22em; margin-left:-5em";
      var tableWrapperTwo = document.getElementById('table-wrapper-two');

      tableWrapperTwo.style = "display:block; margin-top:47em";


      var cardContainer = document.getElementByClass('card-container');
      cardContainer.forEach((item, i) => {
        item.style = "margin-right: 1em";

      });

    })

    var showingRecipe = document.getElementById('lasagne');
    showingRecipe.style = "margin-right:-4em; margin-left:-4em";
  }

  var backIcon = document.getElementById('backIcon');
  backIcon.addEventListener('click', () => {
  window.scrollTo(300, 500);
  })

  mediaQuery = window.matchMedia("(max-width: 793px");
  if (mediaQuery.matches) {
    lasangeSidebar.addEventListener('click', () => {
      var chopItImage = document.getElementById('saying');
      chopItImage.style.display = 'none';
      lasangeSidebar.style.display = 'none';
    })
  }

  mediaQuery = window.matchMedia("(max-width: 629px");
  if (mediaQuery.matches) {
    var showingRecipeMediaQuery = document.getElementById('lasagne');
    showingRecipeMediaQuery.style = "margin-top:800px; margin-right:-4em; margin-left:-4em";
  }


//specific size - bowl

  if(mediaQuery.matches){
    var bowlSidebar = document.getElementById('bowl-sidebar');
    bowlSidebar.addEventListener('click', function() {
      var recipeGrid= document.getElementById('recipe-responsive-grid');
      var recipeMain = document.getElementById('recipe-main-id');

      recipeMain.appendChild(recipeGrid);

      recipeGrid.style = "margin-top:-22em; margin-left:-5em;";
      var cardContainer = document.getElementByClass('card-container');
      cardContainer.forEach((item, i) => {
        item.style = "margin-right: 1em";
      });
    })

    var showingRecipe = document.getElementById('bowl');
    showingRecipe.style = "margin-right:-4em; margin-left:-4em";
  }

  mediaQuery = window.matchMedia("(max-width: 793px");
  if (mediaQuery.matches) {
    bowlSidebar.addEventListener('click', () => {
      var chopItImage = document.getElementById('saying');
      chopItImage.style.display = 'none';
      bowlSidebar.style.display = 'none';
    })
  }

  mediaQuery = window.matchMedia("(max-width: 629px");
  if (mediaQuery.matches) {
    var showingRecipeMediaQuery = document.getElementById('bowl');
    showingRecipeMediaQuery.style = "margin-top:800px; margin-right:-4em; margin-left:-4em";
  }
