// change the h1 text color
$('h1').css({'color':'#b18597'});
// set the variables using class name in html
//[0]-> this is array and 0 means the first
let tabButton = document.getElementsByClassName("tab-button")[0];
let tabUnderLine = document.getElementsByClassName("tab-underLine")[0];
let tabNotes = document.getElementsByClassName("tab-notes")[0];

let tabsDivs = tabButton.getElementsByTagName("div");
// for loop starts
for(let i=0;i<tabsDivs.length;i++){
  // set the click event
  tabsDivs[i].addEventListener("click",function(){
    tabButton.getElementsByClassName("active")[0].classList.remove("active");
    // show only clicked tabs 
    tabsDivs[i].classList.add("active");
    tabNotes.getElementsByClassName("active")[0].classList.remove("active");
    tabNotes.getElementsByTagName("div")[i].classList.add("active");
    
    tabUnderLine.style.left = `calc(calc(100% / 4) * ${i})`;
  });
}


// button - pencil
$(document).ready(function(){
  // if #move is clicked
  $('#move').on('click', function(){
    // grab .pencil(class name is pencil in html file) 
    // and set animate event to left 400px 
    $('.pencil').animate({left:'400px'});
  });

  $('#moveBack').on('click', function(){
    $('.pencil').animate( {left:''}, 3000 ); //duration
});

$('#fadedV1').on('click', function(){
    // set animate event to left, opacity, and size of picture
    $('.pencil').animate( {left:'+=50px', opacity:'0.4', width:'+=50px', height:'-=50px'}, 3000 ); //duration
});

$('#fadedV2').on('click', function(){
  // set more diverse animate events
    $('.pencil').animate( {left:'+=30px'}, 1000 ); 
    $('.pencil').animate( {opacity:'0.4'}, 1000 ); 
    $('.pencil').animate( {width:'+=50px'}, 1000 ); 
    $('.pencil').animate( {height:'-=50px'}, 1000 ); 
});

// reset button 
$('#reset').on('click', function(){
  //make pencil to be the original positon
   $('.pencil').animate( {left:'', opacity:'1.0', width:'50px', height:'35px'}, 3000 );
});

$('#stop').on('click', function(){
  // set stop event to let the pencil can stop itself when stop button is clicked
    $('.pencil').stop();
});

});