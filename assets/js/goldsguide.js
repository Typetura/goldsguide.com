// Remove category navigation components when there is no scrollable area
var categoryEntries = document.querySelectorAll(".category-entries");
for (entry of categoryEntries) {
  if (entry.scrollWidth <= entry.clientWidth) {
    entry.parentElement.removeChild(
      entry.parentElement.querySelector(".category-nav")
    );
  }
}

// Arrow scrollers for category sections on the home page
function entryScroll(button, dir) {
  const section = button.closest(".category-break");
  const el = section.querySelector(".category-entries");
  var amount = section.querySelector(".entry").offsetWidth + 60;

  if (dir === "prev") {
    amount = amount * -1;
  }
  el.scrollBy({
    left: amount,
    behavior: "smooth",
  });
}

// post progress bar
var entry = document.querySelector(".post-content");
if (entry) {
  window.addEventListener(
    "scroll",
    () => {
      var entryHeight = entry.offsetHeight;
      var viewportHeight = window.innerHeight;
      var topSpace = entry.offsetTop;
      var scrollDepth = window.pageYOffset;

      if (viewportHeight < entryHeight + topSpace) {
        var progress = scrollDepth / (entryHeight - viewportHeight + topSpace);
        document.documentElement.style.setProperty("--progress", progress);
      } else {
        document.documentElement.style.setProperty("--progress", 0);
      }
    },
    false
  );
}

// Image gallery height normalization
(function (window, document) {
  var resizeImagesInGalleries = function resizeImagesInGalleries() {
    var images = document.querySelectorAll(".kg-gallery-image img");
    images.forEach(function (image) {
      var container = image.closest(".kg-gallery-image");
      var width = image.attributes.width.value;
      var height = image.attributes.height.value;
      var ratio = width / height;
      container.style.flex = ratio + " 1 0%";
    });
  };

  document.addEventListener("DOMContentLoaded", resizeImagesInGalleries);
})(window, document);

// Membership logic
// Parse the URL parameter
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Give the parameter a variable name
var action = getParameterByName("action");
var success = getParameterByName("success");

if (action == "subscribe" && (success === null || success === "true")) {
  document.rootElement.classList.add("subscribe-success");
}

if (action == "subscribe" && success === "false") {
  document.rootElement.classList.add("subscribe-failure");
}
var subscribeButton = document.querySelector(".newsletter-join");
var closeButton = document.querySelector(
  ".subscribe-notification .subscribe-close-button"
);

subscribeButton.addEventListener("click", (event) => {
  document.querySelector(".subscribe-overlay form").classList.remove("");
});
