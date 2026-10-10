let projects = [
  {
    title: "Mamyr Resort Event Management System",
    desc: `A web-based system for managing event reservation, hotel
              accommodations, and resort pool bookings at Mamyr Resort in
              San Ildefonso, Bulacan`,
    language: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    date: "2025-12",
    image: "src/assets/images/portfolio/project/Mamyr-System.png",
  },
  {
    title: "Grade Weighted Average (GWA) Calculator",
    desc: `A web-based tool designed to help students compute their Grade
                  Weighted Average with precision. It simplifies grade tracking
                  by allowing easy input of subjects, units, and grades.`,
    language: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    date: "2025-06",
    image: "src/assets/images/portfolio/project/GWA-Calc.png",
  },
];

function renderProjects() {
  const container = document.getElementById("project");

  projects.forEach((proj) => {
    const date = formatMonthYear(proj.date);

    let programmingList = renderBadges(proj.language);

    const card = `
      <div class="card project" id="project-card">
        <img src="${proj.image}" class="card-img-top" alt="${proj.title}" />

        <div class="card-body d-flex flex-column">
          <div>
            <h5 class="card-title fw-semibold fs-5">${proj.title}</h5>
            <p class="card-text fs-6 text-justify mt-3">${proj.desc}</p>
          </div>
          <div class="mt-auto">
            <div class="badge-container d-flex flex-wrap gap-1 mt-5" style="width: 250px">${programmingList}</div>
            <div class="button-container mt-3">
              <button type="button" class="btn btn-outline-primary">
                View <i class="bi bi-arrow-up-right"></i>
              </button>
              <button type="button" class="btn btn-primary">
                Show Details <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="card-footer text-body-secondary">Last Updated: ${date}</div>
      </div>
      `;

    container.innerHTML += card;

    // console.log("Programming List:" + programmingList);
  });
}

if (projects && projects.length > 0) {
  renderProjects();
} else {
  const container = document.getElementById("project");

  container.innerHTML = `<div class="card empty-project" >
  <img src="src/assets/images/portfolio/No-Image.png" 
      class="card-img-top" alt="No Project Image" />

  <div class="card-body d-flex flex-column">
    <div>
      <h5 class="card-title fw-semibold fs-5">No Project Available</h5>
      <p class="card-text fs-6 text-justify mt-3">
        This section will highlight completed works and technical contributions. Future projects will demonstrate applied skills and problem‑solving capabilities.
      </p>
      <p class="card-text fs-6 text-justify mt-2">
        Projects will be added as development milestones are completed.
      </p>
    </div>
    <div class="mt-auto">
      <div class="badge-container d-flex flex-wrap gap-1 mt-5" style="width: 250px">
        <span class="badge bg-secondary">No Tech Listed</span>
      </div>
    </div>
  </div>
  <div class="card-footer text-body-secondary">Last Updated: —</div>
</div>`;
}
