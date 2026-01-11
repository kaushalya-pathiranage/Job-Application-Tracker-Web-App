const form = document.getElementById("jobForm");
const list = document.getElementById("jobList");
const search = document.getElementById("search");

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function render(data = jobs) {
  list.innerHTML = "";
  let interviews = 0, offers = 0;

  data.forEach((job, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${job.company} – ${job.role} 
      <strong>${job.status}</strong></span>
      <button onclick="removeJob(${index})">❌</button>
    `;
    list.appendChild(li);

    if (job.status === "Interview") interviews++;
    if (job.status === "Offer") offers++;
  });

  document.getElementById("total").textContent = jobs.length;
  document.getElementById("interviews").textContent = interviews;
  document.getElementById("offers").textContent = offers;

  localStorage.setItem("jobs", JSON.stringify(jobs));
}

form.addEventListener("submit", e => {
  e.preventDefault();
  jobs.push({
    company: company.value,
    role: role.value,
    date: date.value,
    status: status.value
  });
  form.reset();
  render();
});

search.addEventListener("input", () => {
  const filtered = jobs.filter(j =>
    j.company.toLowerCase().includes(search.value.toLowerCase())
  );
  render(filtered);
});

function removeJob(index) {
  jobs.splice(index, 1);
  render();
}

render();
