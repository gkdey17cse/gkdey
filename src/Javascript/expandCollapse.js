  function openProjectDetails(id) {
    const body = document.getElementById(`project-body-${id}`);
    const arrow = document.getElementById(`arrow-${id}`);
    const isHidden = body.classList.contains("hidden");
    body.classList.toggle("hidden");
    arrow.classList.toggle("rotate-180", isHidden);
  }