const jsonDataPath = "./data/minorProjects.json";

function createProjectItem(project) {
  return `
    <div class="item relative group bg-white bg-opacity-90 rounded-lg p-4 text-black flex flex-col h-[420px]">
      <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="flex flex-col h-full">
        <img src="${project.image}" alt="${project.title}" class="rounded-lg mb-2 max-h-[180px] w-full object-cover" />
        <h3 class="text-lg text-teal-700 font-bold py-1">${project.title}</h3>
        <h6 class="text-sm text-gray-800 font-semibold py-1.5">${project.domain}</h6>
        <p class="text-sm flex-grow text-justify leading-relaxed py-0.5">${project.description}</p>
        <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg rounded-lg">
          Click to view the project
        </div>
      </a>
    </div>
  `;
}

async function renderMinorProjects() {
  try {
    const response = await fetch(jsonDataPath);
    if (!response.ok) throw new Error("Failed to load projects data");

    const projects = await response.json();

    const carouselContainer = document.querySelector(
      "#minorProjects .owl-carousel"
    );
    if (!carouselContainer) {
      console.error("Carousel container not found");
      return;
    }

    carouselContainer.innerHTML = ""; // Clear any existing items

    projects.forEach((project) => {
      carouselContainer.insertAdjacentHTML(
        "beforeend",
        createProjectItem(project)
      );
    });

    // Destroy previous carousel instance if any to avoid duplication
    if ($(carouselContainer).hasClass("owl-loaded")) {
      $(carouselContainer).trigger("destroy.owl.carousel");
      $(carouselContainer).removeClass("owl-loaded");
      $(carouselContainer).find(".owl-stage-outer").children().unwrap();
    }

    // Now initialize the carousel AFTER adding items
    $(carouselContainer).owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 6000, // slower autoplay
      autoplaySpeed: 1000, // slow transition
      navSpeed: 1200,
      dotsSpeed: 1200,
      navText: [
        '<span class="text-3xl cursor-pointer select-none">&#x276E;</span>', // ‹ left arrow
        '<span class="text-3xl cursor-pointer select-none">&#x276F;</span>', // › right arrow
      ],
      responsive: {
        0: { items: 1 },
        640: { items: 2 },
        1024: { items: 3 },
        1440: { items: 4 },
      },
    });
  } catch (error) {
    console.error("Error loading minor projects:", error);
  }
}

// Run after DOM loaded
document.addEventListener("DOMContentLoaded", renderMinorProjects);
