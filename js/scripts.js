
// search for project imitation with timer

var search = document.getElementById('suchen');
var loader = document.getElementById('loader');
var result = document.getElementById('search-box');

search.addEventListener('click', function(event){
  event.preventDefault();
  search();
});

var search = function(){
  console.log('searching...');
  loader.style.display = 'block'
  result.style.display = "none";
  setTimeout(function(){
    loader.style.display = 'none';
    result.style.display = "flex";
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