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


// dark mode button
$(document).ready(function() {
  // button click event
  $('#darkButton').click(function() {
    $('body').toggleClass('dark-mode');
    $('#darkButton').html('Day mode');
  }).unclick(function(){$(this).html("Dark mode");
});
});
  // the dark mode button text
  $('.test').mouseover(function(){
    $(this).html('change background');
  }).mouseout(function(){
    $(this).html("hover here!");
  });


// button 2 - moon
// $(document).ready(function(){
//   $('#move').on('click', function(){
//     //목표로 하는 css의 속성을 지정하면 자동으로 그 사이를 만들어 주는 
//     $('.moon').animate({left:'200px'});
//   });
//   $('#moveBack').on('click', function(){
           
//     $('.moon').animate( {left:''}, 3000 ); //duration
// });
// $('#multiAni').on('click', function(){

//     $('.moon').animate( {left:'+=50px', opacity:'0.4', width:'+=50px', height:'-=50px'}, 3000 ); //duration
// });
// $('#sequential').on('click', function(){
//     $('.moon').animate( {left:'+=30px'}, 1000 ); 
//     $('.moon').animate( {opacity:'0.4'}, 1000 ); 
//     $('.moon').animate( {width:'+=50px'}, 1000 ); 
//     $('.moon').animate( {height:'-=50px'}, 1000 ); 
// });
// //리셋
// $('#reset').on('click', function(){
//    $('.moon').animate( {left:'', opacity:'1.0', width:'200px', height:'200px'}, 3000 );
// });

// $('#stop').on('click', function(){
//     $('.moon').stop();
// });

// });

// button 2 - pencil
$(document).ready(function(){
  $('#move').on('click', function(){
    //목표로 하는 css의 속성을 지정하면 자동으로 그 사이를 만들어 주는 
    $('.pencil').animate({left:'400px'});
  });
  $('#moveBack').on('click', function(){
           
    $('.pencil').animate( {left:''}, 3000 ); //duration
});
$('#multiAni').on('click', function(){

    $('.pencil').animate( {left:'+=50px', opacity:'0.4', width:'+=50px', height:'-=50px'}, 3000 ); //duration
});
$('#sequential').on('click', function(){
    $('.pencil').animate( {left:'+=30px'}, 1000 ); 
    $('.pencil').animate( {opacity:'0.4'}, 1000 ); 
    $('.mopenciln').animate( {width:'+=50px'}, 1000 ); 
    $('.pencil').animate( {height:'-=50px'}, 1000 ); 
});
//리셋
$('#reset').on('click', function(){
   $('.pencil').animate( {left:'', opacity:'1.0', width:'200px', height:'200px'}, 3000 );
});

$('#stop').on('click', function(){
    $('.pencil').stop();
});

});