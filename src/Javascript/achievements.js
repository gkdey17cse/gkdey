fetch('./data/achievements.json')
  .then(response => response.json())
  .then(achievementData => {
    const container = document.getElementById('achievementsContainer');
    achievementData.forEach(item => {
      const achievementHTML = `
        <div class="w-full flex justify-center items-center bg-white bg-opacity-90 py-2 px-4 shadow-lg mt-5 lg:mt-3 wow animate__fadeInUp" data-wow-duration="1s">
          <div class="w-full flex flex-col items-start justify-center px-2">
            <p class="text-teal-800 font-semibold">${item.description}</p>
          </div>
          <a href="${item.link}" class="flex justify-center items-center p-2" target="_blank">
            <img src="./assets/Images/LinkIcon.png" alt="Link" class="w-8">
          </a>
        </div>
      `;
      container.innerHTML += achievementHTML;
    });
  });
