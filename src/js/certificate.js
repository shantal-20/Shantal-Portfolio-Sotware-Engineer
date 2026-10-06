let certificates = [];

if (certificates && certificates.length > 0) {
  renderExperience();
} else {
  const container = document.getElementById("certificate");

  container.innerHTML = `
    <div class="card certificate">
    <img src="src/assets/images/portfolio/No-Image.png" 
        class="card-img-top" alt="No Certicate Image" />

    <div class="card-body d-flex flex-column">
        <div>
        <h5 class="card-title fw-semibold fs-5">No Certificate to Display</h5>
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
    <div class="card-footer text-body-secondary">Issued: —</div>
    </div>`;
}
