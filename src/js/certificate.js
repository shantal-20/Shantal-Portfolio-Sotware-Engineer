let certificates = [
  {
    image: "src/assets/images/portfolio/certificate/JSEssential1.png",
    name: "JavaScript Essentials 1",
    platform: "Cisco Networking Academy",
    desc: "This certification validates foundational knowledge in JavaScript programming. It covers designing, developing, and improving interactive applications, preparing candidates for entry‑level technology roles.",
    skill: [
      "Conditional Execution",
      "Loops",
      "Functions",
      "Data Types",
      "Control Flow",
      "Exceptions",
    ],
    dateIssued: "2026-06",
  },
  {
    image: "src/assets/images/portfolio/certificate/JSEssential2.png",
    name: "JavaScript Essentials 2",
    platform: "Cisco Networking Academy",
    desc: "This certification validates foundational knowledge in JavaScript programming. It covers designing, developing, and improving interactive applications, preparing candidates for entry‑level technology roles.",
    skill: [
      "Inheritance",
      "Setters",
      "Getters",
      "Object Manipulation",
      "Set & Map",
      "Object Method",
      "Prototypes",
    ],
    dateIssued: "2026-10",
  },
];

function renderCertificate() {
  const container = document.getElementById("certificate");

  certificates.forEach((cert) => {
    let [year, month] = cert.dateIssued.split("-");
    let dateIssued = new Date(year, month - 1).toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });

    let skillList = "";
    cert.skill.forEach((s) => {
      skillList += `<span class="badge">${s}</span>`;
    });

    let card = `
        <div class="card certificate" id="certificate-card">
                <img
                  src="${cert.image}"
                  class="card-img-top"
                  alt="${cert.name}"
                />

                <div class="card-body d-flex flex-column">
                  <div>
                    <h5 class="card-title fw-semibold fs-5">${cert.name}</h5>
                    <p class="card-text fs-6 text-justify mt-3">${cert.desc}</p>
                  </div>
                  <div class="mt-auto">
                    <div class="badge-container d-flex flex-wrap gap-1 mt-5" nstyle="width: 250px">
                        ${skillList}
                    </div>
                </div>
            </div>
            <div class="card-footer text-body-secondary">
                Issued: ${dateIssued}
            </div>
        </div>
    `;

    container.innerHTML += card;
  });
}

if (certificates && certificates.length > 0) {
  renderCertificate();
} else {
  const container = document.getElementById("certificate");

  container.innerHTML = `
    <div class="card empty-certificate">
    <img src="src/assets/images/portfolio/No-Image.png" 
        class="card-img-top" alt="No Certicate Image" />

    <div class="card-body d-flex flex-column">
        <div>
        <h5 class="card-title fw-semibold fs-5">No Certificate to Display</h5>
        <p class="card-subtitle fs-6 text-justify mt-3">
            This section will display earned certifications and credentials. Future entries will reflect verified skills and professional development milestones.
        </p>
        <p class="card-text fs-6 text-justify mt-2">
            Additional certifications will be added as they are issued.
        </p>

        </div>
        <div class="mt-auto">
        <div class="badge-container mt-5">
            <span class="badge bg-secondary">N/A</span>
        </div>
        </div>
    </div>
    <div class="card-footer text-body-secondary">Issued: —</div>
    </div>`;
}
