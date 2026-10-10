function formatMonthYear(value) {
  const [year, month] = value.split("-");
  return new Date(year, month - 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function renderBadges(items) {
  return items.map((item) => `<span class="badge">${item}</span>`).join("");
}
