

$(document).ready(function () {
  animateDiv(".a");
  animateDiv(".b");
  animateDiv(".c");
  animateDiv(".d");
});

function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 150;
  var w = $(window).width() - 150;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv(myclass) {
  var newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 2000, function () {
    animateDiv(myclass);
  });
}

$(".floating").click(function() {
  let reward = confirm(`Congratulations ...!!! If you want to get money, please answer all the 3 questions....`);

  if (reward) {
    openPage('msg.html');
  } else {
    console.log("try to go back to previous page");
  }
})

function openPage(pageUrl){
  window.location.replace(pageUrl);
}