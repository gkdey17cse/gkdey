fetch("./data/skills.json")
    .then(response => response.json())
    .then(skillsData => {
        const container = document.getElementById('skillsContainer');
        skillsData.forEach(item => {
            const skillList = item.skills.map(skill => `<span class="inline-block bg-gray-100 text-sm px-2 py-1 rounded m-1">${skill}</span>`).join('');
            const categoryHTML = `
        <div class="rounded-xl shadow-md p-4 bg-transparent border border-white bg-opacity-90 text-teal-800 hover:shadow-lg duration-200 wow animate__fadeInDown" data-wow-duration="1s">
          <h3 class="font-semibold text-lg mb-2 text-teal-400 text-center">${item.category}</h3>
          <div class="flex flex-wrap justify-center">${skillList}</div>
        </div>
      `;
            container.innerHTML += categoryHTML;
        });
    });
