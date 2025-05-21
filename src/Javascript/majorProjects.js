fetch("./data/majorProjects.json")
  .then((res) => res.json())
  .then((projects) => {
    const container = document.getElementById("majorProjectsContainer");

    projects.forEach((project) => {
      const html = `
        <div class="px-2 mx-4 py-2 shadow-xl rounded-md bg-white bg-opacity-90 text-teal-700 my-4 text-xs lg:text-sm 2xl:text-base leading-relaxed relative group overflow-hidden">
  <!-- Hover Overlay -->
  <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm lg:text-base font-medium z-10 pointer-events-none">
    Click link icon to view details
  </div>
          <!-- Project Header -->
          <div id="project-head-${project.id}" class="grid grid-cols-5 px-2" style='font-family: "Inter", sans-serif;'>
              <div class="col-span-4 flex justify-start gap-4 my-2 items-center">
                <img src="${project.logo}" class="w-12" alt="">
                <div>
                  <h1 class="font-semibold text-sm lg:text-base 2xl:text-xl tracking-wider">
                    ${project.title}
                  </h1>
                  <p class="text-xs lg:text-sm 2xl:text-base py-1 text-gray-600">
                    ${project.subtitle}
                  </p>
                </div>
              </div>
            <div class="flex justify-center items-center gap-4">
              <a href="${project.link}" target="_blank" class="rounded-full p-1 hover:border-2 border-teal-600">
                <img src="./Images/LinkIcon.png" class="w-10" alt="Link">
              </a>
              <button onclick="toggleProjectBody(${project.id})" class="hover:scale-110 duration-150 ">
                <img id="arrow-${project.id}" src="./Images/DownArrow.png" class="w-10 transition-transform duration-300" alt="Arrow">
              </button>
            </div>
          </div>

          <!-- Hidden Body Section Initially -->
          <div id="project-body-${project.id}" class="max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
            <div class="text-gray-700 p-2">
              <p class="p-2 tracking-wide text-justify">${project.desc}</p>
            </div>
          </div>
        </div>
      `;

      container.innerHTML += html;
    });
  });

// 🔽 Toggle Logic for Expand/Collapse
function toggleProjectBody(id) {
  const body = document.getElementById(`project-body-${id}`);
  const arrow = document.getElementById(`arrow-${id}`);

  if (body.classList.contains("max-h-0")) {
    body.classList.remove("max-h-0");
    body.classList.add("max-h-[1000px]");
    arrow.classList.add("rotate-180"); // Opened
  } else {
    body.classList.remove("max-h-[1000px]");
    body.classList.add("max-h-0");
    arrow.classList.remove("rotate-180"); // Collapsed
  }
}
