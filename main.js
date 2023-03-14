// Typewriter Animation
var p = document.getElementById('introText');
p.innerHTML = '';
var n = 0;
var str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem enim, nisi labore accusantium sequi maxime hic vero. <br><br> hello hello hellohello hello hello hello hello hello';
var typeTimer = setInterval(function() {
  n = n + 1;
  p.innerHTML = str.slice(0, n);
  if (n === str.length) {
    clearInterval(typeTimer);
    p.innerHTML = str;
    n = 0;
    setInterval(function() {

      if (n === 0) {
        p.innerHTML = str + "|"
        n = 1;
      } else {
        p.innerHTML = str
        n = 0;
      };
    }, 500);
  };
}, 60)



