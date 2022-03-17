function copyEmail() {
  /* Get the text field */
  var copyText = document.getElementById("emaillinkdata");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the email: " + copyText.value);
}

// function checkCookie() {
//   let hasVisited = getCookie("hasVisited");
//   if (hasVisited == "true") {
//     console.log("welcome back");
//   }
//   else {
//     hasVisited = "true";
//     setCookie("hasVisited", hasVisited, 365);
//     document.getElementById("greeter").style.visibility = "visible";
//   }
// }

function checkNew() {
  let url = (window.location.href);
  if (url.endsWith("#")) {
    document.getElementById("greeter").style.visibility = "hidden";
  }
  else {
    document.getElementById("greeter").style.visibility = "visible";
    // window.location.replace('#');
  }
}

// document.getElementById("greeter").style.visibility = "hidden";

function closeGreeter() {
  window.location.replace('#');
  var greeter = document.getElementById("greeter");
  // greeter.style.visibility = "hidden";
  requestAnimationFrame(function(timestamp){
      starttime = timestamp || new Date().getTime() //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
      greeterFade(timestamp, greeter, 1, 600) // 400px over 1 second
  })
}

var starttime
function greeterFade(timestamp, el, dist, duration){
    //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date:
    var timestamp = timestamp || new Date().getTime()
    var runtime = timestamp - starttime
    var progress = runtime / duration
    // progress = Math.min(progress, 1)
    greeter.style.transform = "translateX(" + (-progress*100) + "vw)";
    greeter.style.opacity = (2-progress*3);
    // greeter.style.filter = "brightness(" + (100 - progress*50) + ")";
    if (runtime < duration){ // if duration not met yet
        requestAnimationFrame(function(timestamp){ // call requestAnimationFrame again with parameters
            greeterFade(timestamp, el, dist, duration)
        })
    }
}
