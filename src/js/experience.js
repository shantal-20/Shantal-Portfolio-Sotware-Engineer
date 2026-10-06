const experiences = [
  {
    position: "Intern - WordPress Developer",
    company: "VastResult Inc.",
    workSetup: "Hybrid",
    description: [
      "Developed and maintained company web pages for security and infrastructure services",
      "Enhanced UI layout and readability by optimizing banners, buttons, and typography",
      "Created SEO-optimized content and graphics to improve search visibility",
    ],
    startDate: "2026-02",
    endDate: "2026-05",
    skills: [
      "WordPress",
      "JavaScript",
      "Canva",
      "SEO-aligned writing and summarization",
      "Website layout and UI structuring",
    ],
  },
];

if (experiences && experiences.length > 0) {
  renderExperience();
} else {
  const container = document.getElementById("experience");

  container.innerHTML = `
    <div class="card experience">
    <img src="src/assets/images/portfolio/No-Image.png" 
        class="card-img-top" alt="No Experience Image" />

    <div class="card-body d-flex flex-column">
        <div>
        <h5 class="card-title fw-semibold fs-5">No Experience Yet</h5>
        <p class="card-subtitle fs-6 text-justify mt-3">
            Details will be added soon.
        </p>
        <p class="card-text fs-6 text-justify mt-2">
            Stay tuned for updates.
        </p>
        </div>
        <div class="mt-auto">
        <div class="badge-container mt-5">
            <span class="badge bg-secondary">N/A</span>
        </div>
        </div>
    </div>
    <div class="card-footer text-body-secondary">Duration: —</div>
    </div>`;
}
