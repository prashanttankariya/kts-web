 const folders = [
    "1. Manishbhai Sheth", "2. Maheshbhai Patel", "3. Udaisingh Tomar", "4. Chandreshbhai Sharma", 
    "5. Dr. Deepakbhai Aghara", "6. Kishore Singh Zala", "7. Sanjaybhai Rajyani", 
    "8. Ashwinbhai Bharani", "9. Eden Hill", "10. Shiv Enclave", 
    "11. Jivraj Sthapatya", "12. Paradise Height", "13. Watoro", 
    "14. Empire Square", "15. Empire 36", "16. Suntouch", 
    "17. Icon Graneto", "18. Ncraze", "19. Jewel_D Suite", 
    "20. Dates County", "21. Bell Stall - Bangalore", 
    "22. Bell Display - Pune", "23. Bell Display - Udaipur", 
    "24. Bell Display - Rajkot", "25. Bell Display - Palj.", 
    "26. Bell Display - Ahmedabad", "27. Ishan Ceramic Zone"
  ];

  const container = document.getElementById("card-container");

  folders.forEach((folderName, index) => {
    const cleanedTitle = folderName.replace(/^\d+\.\s*/, "");
    const card = document.createElement("div");
    card.className = "card";

    const h3 = document.createElement("h3");
    h3.textContent = cleanedTitle;

    const slider = document.createElement("div");
    slider.className = "slider";
    slider.id = `slider-${index}`;

    const imgBasePath = `assets/Clients/${folderName}/3D-Views/`;
    const placeholder = "https://via.placeholder.com/400x300?text=No+Image"; // <-- you can use a local one too

    const images = [];
    for (let i = 1; i <= 10; i++) {
      const img = document.createElement("img");
      img.src = `${imgBasePath}${i}.jpg`;
      img.alt = `${cleanedTitle} - Image ${i}`;
      img.loading = "lazy";

      img.onerror = function () {
        this.onerror = null; // prevent infinite loop
        this.src = placeholder;
      };

      if (i === 1) img.classList.add("active");
      slider.appendChild(img);
      images.push(img);
    }

    const controls = document.createElement("div");
    controls.className = "slider-controls";

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "‹ Prev";

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next ›";

    let currentIndex = 0;

    prevBtn.addEventListener("click", () => {
      const visibleImgs = slider.querySelectorAll("img");
      if (visibleImgs.length === 0) return;

      visibleImgs[currentIndex].classList.remove("active");
      currentIndex = (currentIndex - 1 + visibleImgs.length) % visibleImgs.length;
      visibleImgs[currentIndex].classList.add("active");
    });

    nextBtn.addEventListener("click", () => {
      const visibleImgs = slider.querySelectorAll("img");
      if (visibleImgs.length === 0) return;

      visibleImgs[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % visibleImgs.length;
      visibleImgs[currentIndex].classList.add("active");
    });

    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);

    card.appendChild(h3);
    card.appendChild(slider);
    card.appendChild(controls);
    container.appendChild(card);
  });