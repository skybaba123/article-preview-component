const shareIcon = document.querySelector(".share-icon");
const popup = document.querySelector(".share-popup");

const popupLogic = () => {
  shareIcon.addEventListener("mouseenter", () => {
    popup.classList.remove("share-popup-hidden");
  });

  shareIcon.addEventListener("click", () => {
    popup.classList.toggle("share-popup-hidden");
  });
};

popupLogic();
