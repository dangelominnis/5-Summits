// Typewriter
var myText = "hello hello hello";
let myTextLength = myText.length;

function typing( displayedLength ) {
  if( displayedLength <= myTextLength ) {
    $( "#text" ).text( myText.substring( 0, displayedLength ) );
    }
  }

var controller = new ScrollMagic.Controller();
var typewritingOnScroll = new TimelineMax();

var typewritingScene = new ScrollMagic.Scene({ triggerElement: "#text", duration: 300 })
    .on('progress',  function () {
      let scrollProgress = Math.ceil( typewritingScene.progress() * myTextLength );
      typing( scrollProgress );
    })
    
 .setPin('#text')
 .addIndicators({ name: 'typewriting' })
 .setTween(typewritingOnScroll)
 .addTo( controller );