function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* --- YOUTUBE PLAYERS UNDER THIS LINE --- */

function onYouTubeIframeAPIReady() {

    references = new YT.Player("videobgref", {
    videoId: "FG0fTKAqZ5g",

    playerVars: {
        rel: 0,
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        loop: 1,
        fs: 0,
        cc_load_policy: 0,
        iv_load_policy: 3,
        autohide: 1,
        start: 10,
    },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });
    
        index = new YT.Player("videobgindex", {
            
        videoId: "QI9ta7qkazU",
        
        playerVars: {
        rel: 0,
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        loop: 1,
        fs: 0,
        cc_load_policy: 0,
        iv_load_policy: 3,
        autohide: 1,
        },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });

        employment = new YT.Player("videobgemp", {
            
        videoId: "lwH3FgbXqMM",

        playerVars: {
        rel: 0,
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        loop: 1,
        fs: 0,
        cc_load_policy: 0,
        iv_load_policy: 3,
        autohide: 1,
        },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });
        
        education = new YT.Player("videobgedu", {
            
        videoId: "JNFX32Hz_N0",

        playerVars: {
        rel: 0,
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        loop: 1,
        fs: 0,
        cc_load_policy: 0,
        iv_load_policy: 3,
        autohide: 1,
        },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });   
    
        contact = new YT.Player("videobgcont", {
            
        videoId: "P5_GlAOCHyE",

        playerVars: {
        rel: 0,
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        loop: 1,
        fs: 0,
        cc_load_policy: 0,
        iv_load_policy: 3,
        autohide: 1,
        start: 8
        },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });
    
 }
