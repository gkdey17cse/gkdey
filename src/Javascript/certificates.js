fetch("./data/certificates.json")
  .then(response => response.json())
  .then(certificates => {
    const container = document.getElementById('certificateContainer');
    certificates.forEach(cert => {
      const certHTML = `
        <div class="border text-sm lg:text-base rounded-xl shadow-md p-2 lg:p-4 text-center bg-white opacity-90 hover:shadow-lg duration-200 flex flex-col gap-2 justify-center items-center wow animate__fadeInUp" data-wow-duration="1s">
          <h3 class="font-semibold text-teal-600 text-base lg:text-lg">${cert.name}</h3>
          <p class="text-teal-900">${cert.authority}</p>
          <a href="${cert.link}" target="_blank" class="text-indigo-600 inline-block">Click here to view</a>
        </div>
      `;
      container.innerHTML += certHTML;
    });
  });
