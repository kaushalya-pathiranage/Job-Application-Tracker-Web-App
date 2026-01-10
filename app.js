class JobApp {
  constructor() {
    this.jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    this.container = document.getElementById('jobs-container');
    this.searchInput = document.getElementById('search-input');
    this.statusFilter = document.getElementById('status-filter');
    this.sortFilter = document.getElementById('sort-filter');

    this.init();
  }

  save() {
    localStorage.setItem('jobs', JSON.stringify(this.jobs));
  }

  addJob(company, position, date) {
    const id = Date.now();
    this.jobs.push({ id, company, position, date, status: 'applied' });
    this.save();
    this.render();
    this.showToast('Job added successfully!');
  }

  deleteJob(id) {
    this.jobs = this.jobs.filter(job => job.id !== id);
    this.save();
    this.render();
    this.showToast('Job deleted!');
  }

  editJob(id, newData) {
    this.jobs = this.jobs.map(job => job.id === id ? { ...job, ...newData } : job);
    this.save();
    this.render();
    this.showToast('Job updated!');
  }

  changeStatus(id) {
    const statuses = ['applied', 'interview', 'offer', 'rejected'];
    this.jobs = this.jobs.map(job => {
      if (job.id === id) {
        const nextIndex = (statuses.indexOf(job.status) + 1) % statuses.length;
        return { ...job, status: statuses[nextIndex] };
      }
      return job;
    });
    this.save();
    this.render();
  }

  filterJobs() {
    let filtered = [...this.jobs];

    // Search
    const searchText = this.searchInput.value.toLowerCase();
    filtered = filtered.filter(job =>
      job.company.toLowerCase().includes(searchText) ||
      job.position.toLowerCase().includes(searchText)
    );

    // Status filter
    if (this.statusFilter.value !== 'all') {
      filtered = filtered.filter(job => job.status === this.statusFilter.value);
    }

    // Sort by date
    filtered.sort((a, b) => this.sortFilter.value === 'date-new'
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date)
    );

    return filtered;
  }

  render() {
    const jobs = this.filterJobs();
    this.container.innerHTML = '';

    jobs.forEach(job => {
      const div = document.createElement('div');
      div.className = `job-card status-${job.status}`;
      div.innerHTML = `
        <div class="job-info">
          <h3>${job.company} - ${job.position}</h3>
          <p>Date Applied: ${job.date}</p>
          <p>Status: ${job.status}</p>
        </div>
        <div class="job-actions">
          <button class="status">Next Status</button>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      `;

      div.querySelector('.status').addEventListener('click', () => this.changeStatus(job.id));
      div.querySelector('.delete').addEventListener('click', () => this.deleteJob(job.id));
      div.querySelector('.edit').addEventListener('click', () => this.prefillForm(job));

      this.container.appendChild(div);
    });
  }

  prefillForm(job) {
    document.getElementById('company-input').value = job.company;
    document.getElementById('position-input').value = job.position;
    document.getElementById('date-input').value = job.date;

    const addBtn = document.getElementById('add-btn');
    addBtn.textContent = 'Update Job';
    addBtn.onclick = () => {
      const company = document.getElementById('company-input').value;
      const position = document.getElementById('position-input').value;
      const date = document.getElementById('date-input').value;
      if (!company || !position || !date) return this.showToast('All fields required!');
      this.editJob(job.id, { company, position, date });
      addBtn.textContent = 'Add Application';
      addBtn.onclick = () => this.handleAdd();
      document.getElementById('company-input').value = '';
      document.getElementById('position-input').value = '';
      document.getElementById('date-input').value = '';
    };
  }

  showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }

  handleAdd() {
    const company = document.getElementById('company-input').value;
    const position = document.getElementById('position-input').value;
    const date = document.getElementById('date-input').value;
    if (!company || !position || !date) return this.showToast('All fields required!');
    this.addJob(company, position, date);
    document.getElementById('company-input').value = '';
    document.getElementById('position-input').value = '';
    document.getElementById('date-input').value = '';
  }

  init() {
    document.getElementById('add-btn').onclick = () => this.handleAdd();
    this.searchInput.addEventListener('input', () => this.render());
    this.statusFilter.addEventListener('change', () => this.render());
    this.sortFilter.addEventListener('change', () => this.render());
    this.render();
  }
}

new JobApp();
