const button = document.querySelector(".sign-up-button");

const ButtonEventManager = (function () {
  let _listeners = []; 

  return {
    addListener: function (name, listener) {
      _listeners.push({name, listener});
    },

    removeListener: function (name, listener) {
      _listeners = _listeners.filter(function (element) {
        return !(element.name == name && element.listener == listener);
      });
    },

    clicked: function () {
      if (_listeners.length) {
        for (let i = 0; i < _listeners.length; i++) {
          if(_listeners[i].name == "clicked") {
            _listeners[i].listener();
          }
        }
      }
    },

    mouseovered: function () {
      if (_listeners.length) {
        for (let i = 0; i < _listeners.length; i++) {
          if(_listeners[i].name == "mouseovered") {
            _listeners[i].listener();
          }
        }
      }
    }
  };
})();

ButtonEventManager.addListener("clicked", function () {
  console.log("clicked");
});

ButtonEventManager.addListener("mouseovered", function () {
  console.log("mouseovered");
});


// Native Code
button.addEventListener("click", function (event) {
  event.preventDefault();
  ButtonEventManager.clicked();
});
button.addEventListener("mouseover", function (event) {
  event.preventDefault();
  ButtonEventManager.mouseovered();
});




// Фильтрация