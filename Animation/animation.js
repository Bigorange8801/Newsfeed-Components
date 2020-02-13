// Wrap every letter in a span
$('.text').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.text .letter',
      translateY: [-100,0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: function(el, i) {
        return 30 * i;
      }
    }).add({
      targets: '.text',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });