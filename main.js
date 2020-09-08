(function (window, document) {
  "use strict";

  const toggles = document.querySelectorAll(".toggle");
  const togglesBtn = document.getElementById("toggle-btn");

  togglesBtn.addEventListener("click", function () {
    toggleElements();
  });

  function toggleElements() {
    [].forEach.call(toggles, function (toggle) {
      toggle.classList.toggle("on");
    });
  }
})(window, document);
