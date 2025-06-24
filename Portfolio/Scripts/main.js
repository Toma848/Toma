// JS for interactive gallery popup (basic lightbox)
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = "100vw";
      overlay.style.height = "100vh";
      overlay.style.background = "rgba(0, 0, 0, 0.8)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = 1000;

      const enlargedImg = document.createElement("img");
      enlargedImg.src = img.src;
      enlargedImg.style.maxWidth = "90%";
      enlargedImg.style.maxHeight = "90%";
      enlargedImg.style.borderRadius = "10px";

      overlay.appendChild(enlargedImg);

      overlay.addEventListener("click", () => {
        document.body.removeChild(overlay);
      });

      document.body.appendChild(overlay);
    });
  });
});
