/* DATA */

var model = {
  init: function() {
    var jsonPath = './data.json';
    var request = new XMLHttpRequest();
    request.open('GET', jsonPath);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
      var superHeroes = request.response;



      var myH1 = document.createElement('h1');
      myH1.textContent = superHeroes['question'];
      header.appendChild(myH1);
    }





  }

}


/* OCTOPUS */

let octopus = {
  init: function() {
    model.init();
    view.init();
  }
}


/* VIEW */

let view = {
  init: function() {
    sidebar = $('aside');




    view.render();
  },

  render: function() {

  }
}

octopus.init();
