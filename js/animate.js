var cipher = function() {
  function e(a, d, b) {
    var c, f, g, h;
    b == a.length ? k.animationComplete = !0 : (g = d.innerHTML, h = Math.floor(21 * Math.random() + 5), c = 32 === a[b] ? 32 : a[b] - h, f = setInterval(function() {
      d.innerHTML = g + String.fromCharCode(c);
      c == a[b] ? (clearInterval(f), c = 32, b++, setTimeout(function() {
        e(a, d, b);
      }, 10)) : c++;
    }, 5));
  }
  var k = {};
  return k = {animationComplete:!1, text:function(a) {
    this.animationComplete = !1;
    a = document.getElementById(a);
    for (var d = a.innerHTML, b = [], c = 0;c < d.length;c++) {
      b.push(d.charCodeAt(c));
    }
    a.innerHTML = "";
    e(b, a, 0);
  }};
}();

$( 'document' ).ready(function() {

  // Hide header
  $( '.tagline' ).hide();
  // Transition background
  $( '.full' ).ready(function() {
    $( '.full' ).fadeIn( 1200 );

  // Timeout for crypto text
  setTimeout( function() {
    $( '.tagline' ).fadeIn( 'slow' );
      cipher.text( 'call' );
  }, 1400);


  });

});
