fetch('./data/educationData.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("educationContainer");
    data.forEach(entry => {
      container.innerHTML += `
      <div class="px-4 py-4 shadow-md bg-white bg-opacity-90 rounded-md my-4 text-black wow animate__fadeInDown" data-wow-duration="1s">
        <div class="grid grid-cols-1 lg:grid-cols-10 gap-4 items-center text-center lg:text-start">
          
          <!-- Logo (1/10 on large) -->
          <div class="lg:col-span-1 flex justify-center">
            <img src="${entry.logo}" alt="" class="w-16">
          </div>

          <!-- Degree & Institute (6/10 on large) -->
          <div class="lg:col-span-6 flex flex-col gap-1">
            <h1 class="font-semibold text-teal-700 text-sm lg:text-base 2xl:text-lg capitalize tracking-wide">${entry.degree}</h1>
            <h2 class="font-medium text-xs lg:text-sm 2xl:text-base">${entry.institute}</h2>
          </div>

          <!-- Duration & CGPA (3/10 on large) -->
          <div class="lg:col-span-3 flex flex-col gap-1 text-xs lg:text-sm 2xl:text-base">
            <p>${entry.duration}</p>
            <p class="font-semibold">CGPA : ${entry.cgpa}</p>
          </div>
        </div>
      </div>
      `;
    });
  });
