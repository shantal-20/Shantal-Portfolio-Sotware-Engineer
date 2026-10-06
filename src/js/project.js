let projects = [
  {
    title: "Mamyr Resort Event Management System",
    desc: `A web-based system for managing event reservation, hotel
              accommodations, and resort pool bookings at Mamyr Resort in
              San Ildefonso, Bulacan`,
    language: {
      HTML: true,
      CSS: true,
      Bootstrap: true,
      JavaScript: true,
      PHP: true,
      MySQL: true,
    },
    date: "2025-12",
    image: "src/assets/images/portfolio/Mamyr-System.png",
  },
  {
    title: "Grade Weighted Average (GWA) Calculator",
    desc: `A web-based tool designed to help students compute their Grade
                  Weighted Average with precision. It simplifies grade tracking
                  by allowing easy input of subjects, units, and grades.`,
    language: {
      HTML: true,
      CSS: true,
      Bootstrap: true,
      JavaScript: true,
      PHP: false,
      MySQL: false,
    },
    date: "2025-06",
    image: "src/assets/images/portfolio/GWA-Calc.png",
  },
];

function renderProjects() {
  const container = document.getElementById("project");

  projects.forEach((proj) => {
    const [year, month] = proj.date.split("-");
    const date = new Date(year, month - 1).toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    // console.log("Date:" + date);
    let programmingList = "";
    Object.keys(proj.language).forEach((prog) => {
      if (proj.language[prog]) {
        programmingList += `<span class="badge">${prog}</span>`;
      }
    });

    const card = `
      <div class="card project" id="project-card">
        <img src="${proj.image}" class="card-img-top" alt="${proj.title}" />

        <div class="card-body d-flex flex-column">
          <div>
            <h5 class="card-title fw-semibold fs-5">${proj.title}</h5>
            <p class="card-text fs-6 text-justify mt-3">${proj.desc}</p>
          </div>
          <div class="mt-auto">
            <div class="badge-container mt-5">${programmingList}</div>
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

  container.innerHTML = `<div class="card project" id="project-card">
  <img src="src/assets/images/portfolio/No-Image.png" 
       class="card-img-top" alt="No Project Image" />

  <div class="card-body d-flex flex-column">
    <div>
      <h5 class="card-title fw-semibold fs-5">No Project Available</h5>
      <p class="card-text fs-6 text-justify mt-3">
        Details will be added soon.
      </p>
    </div>
    <div class="mt-auto">
      <div class="badge-container mt-5">
        <span class="badge bg-secondary">No Tech Listed</span>
      </div>
      <div class="button-container mt-3">
        <button type="button" class="btn btn-outline-secondary" disabled>
          View
        </button>
        <button type="button" class="btn btn-secondary" disabled>
          Show Details
        </button>
      </div>
    </div>
  </div>
  <div class="card-footer text-body-secondary">Last Updated: —</div>
</div>`;
}
