fetch("./data/experience.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("experienceList");

    data.forEach((exp) => {
      const buttonsHTML = Array.isArray(exp.buttons)
        ? exp.buttons
            .map(
              (btn) => `
          <a href="${btn.link}" target="_blank">
            <button class="flex justify-center items-center py-1 px-4 gap-2 border-2 shadow-sm border-teal-600 active:translate-x-1 active:translate-y-1 duration-150 hover:bg-gradient-to-r from-teal-600 to-teal-600 via-teal-500 text-teal-700 hover:bg-teal-600 hover:text-white">
              <p>${btn.text}</p>
            </button>
          </a>
        `
            )
            .join("")
        : "";

      const expHTML = `
        <div class="mt-4 py-3 px-2 grid grid-cols-4 gap-4 bg-white bg-opacity-90 text-gray-900 rounded-lg">
          <div class="flex flex-col justify-center items-center gap-2">
            <h2 class="font-semibold text-sm lg:text-base 2xl:text-lg text-center text-teal-700">${exp.role}</h2>
            <p class="text-gray-700 text-xs lg:text-sm 2xl:text-base py-2 text-center">
              <span>${exp.startDate}</span><span> to </span><span>${exp.endDate}</span>
            </p>
          </div>
          <div class="col-span-3">
            <h2 class="text-base lg:text-lg 2xl:text-xl font-semibold text-gray-900 title-font py-3">${exp.company}</h2>
            <p class="text-xs lg:text-sm text-justify pr-4 leading-relaxed xl:leading-loose">${exp.description}</p>
            <div class="flex flex-wrap justify-start items-center py-1 gap-3 mt-2">${buttonsHTML}</div>
          </div>
        </div>
      `;

      container.innerHTML += expHTML;
    });
  })
  .catch((error) => console.error("Error loading experience data:", error));
