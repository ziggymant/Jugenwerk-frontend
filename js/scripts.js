
// search for project imitation with timer

var searchBtn = document.getElementById('suchen');
var loader = document.getElementById('loader');
var result = document.getElementById('search-box');

if(searchBtn){
  searchBtn.addEventListener('click', function(event){
  event.preventDefault();
  search();
  });
}



var search = function(){
  console.log('searching...');
  loader.style.display = 'block'
  result.style.display = "none";
  setTimeout(function(){
    loader.style.display = 'none';
    result.style.display = "flex";
  },2000);
}


// the same for search-seminar

var searchBtn2 = document.getElementById('suchen-seminar');
var loader2 = document.getElementById('loader-seminar');
var result2 = document.getElementById('search-box-seminar');

if(searchBtn2){
  searchBtn2.addEventListener('click', function(event){
  event.preventDefault();
  search2();
  });
}



var search2 = function(){
  console.log('searching...');
  loader2.style.display = 'block'
  result2.style.display = "none";
  setTimeout(function(){
    loader2.style.display = 'none';
    result2.style.display = "flex";
  },2000);
}


//scroll to the top button, requires jquery

window.onscroll = function() {showUpButton()};
var scrollButton = document.getElementById('back-to-top');

var showUpButton = function (){
  if(window.pageYOffset <= 300){
    scrollButton.style.display = 'none';
  }else {
    scrollButton.style.display = 'block';
  }
}

if ($('#back-to-top').length) {
    backToTop = function () {
        var scrollTop = $(window).scrollTop();
    };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}