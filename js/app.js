var app = new Framework7({
    root: "#app",
    name: "My App",
    id:"com.myapp",
    panel: {
        swipe: "left",
    },
   
    routes: [
      {
        path: "/home/",
        url: "index.html",
      },
    ],
  
  });

  var mainView = app.views.create('.view-main');