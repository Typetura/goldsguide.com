var categoryEntries = document.querySelectorAll(".category-entries");
for (entry of categoryEntries) {
  if (entry.scrollWidth <= entry.clientWidth) {
    entry.parentElement.removeChild(
      entry.parentElement.querySelector(".category-nav")
    );
  }
}

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
