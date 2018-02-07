/* DATA */

var model = {
  init: function() {

    // create a request object with data, request.response to see data
    window.request = new XMLHttpRequest();
    let requestURL = 'https://raw.githubusercontent.com/ZwiFTi/flashcards_2018/master/js/data.json';
    window.request.open('GET', requestURL);

    window.request.responseType = 'json';
    window.request.send();
  },
}


/* OCTOPUS */

let octopus = {
  init: function() {
    model.init();
    view.init();
  },

  // Takes an array and shuffles it
  shuffle: function(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  },

  getCutDeck: function(array, lengthInNumber) {
    array.forEach(function() {
      if (array.length > 10) {
        array.pop();
      }
    })

    return array;
  },

  getRandomQuestions: function() {
    return octopus.shuffle(request.response);
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
