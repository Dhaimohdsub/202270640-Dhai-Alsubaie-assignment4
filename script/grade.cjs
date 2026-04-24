// Theme toggle + localStorage
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  }
}

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    applyTheme(currentTheme === "light" ? "dark" : "light");
  });
}

// Greeting by time
const greeting = document.getElementById("greeting");
if (greeting) {
  const hour = new Date().getHours();
  let message = "Hello!";
  if (hour >= 5 && hour < 12) message = "Good morning ☀️";
  else if (hour >= 12 && hour < 18) message = "Good afternoon 🌤️";
  else message = "Good evening 🌙";
  greeting.textContent = message;
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile nav
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Visitor name state
const visitorNameInput = document.getElementById("visitorName");
const saveNameBtn = document.getElementById("saveNameBtn");
const clearNameBtn = document.getElementById("clearNameBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

function updateWelcomeMessage() {
  const savedName = localStorage.getItem("visitorName");
  if (savedName) {
    welcomeMessage.textContent = `Welcome, ${savedName}!`;
    if (visitorNameInput) visitorNameInput.value = savedName;
  } else {
    welcomeMessage.textContent = "Welcome, visitor!";
  }
}

updateWelcomeMessage();

if (saveNameBtn && visitorNameInput) {
  saveNameBtn.addEventListener("click", () => {
    const name = visitorNameInput.value.trim();
    if (name.length >= 2) {
      localStorage.setItem("visitorName", name);
      updateWelcomeMessage();
    } else {
      welcomeMessage.textContent = "Please enter at least 2 characters for your name.";
    }
  });
}

if (clearNameBtn) {
  clearNameBtn.addEventListener("click", () => {
    localStorage.removeItem("visitorName");
    if (visitorNameInput) visitorNameInput.value = "";
    updateWelcomeMessage();
  });
}

// Site timer
const siteTimer = document.getElementById("siteTimer");
let secondsOnSite = 0;

if (siteTimer) {
  setInterval(() => {
    secondsOnSite += 1;
    siteTimer.textContent = secondsOnSite;
  }, 1000);
}

// Projects data + filter + sort
const projects = [
  {
    title: "AI Classification Project",
    description: "Implemented K-NN, SVM, and MLP using cross-validation and evaluation metrics.",
    category: "ai",
    year: 2026,
    tags: ["Python", "Scikit-learn", "MLP"]
  },
  {
    title: "Horse Racing Database System",
    description: "Built a MySQL system with stored procedures, triggers, and advanced queries.",
    category: "database",
    year: 2025,
    tags: ["MySQL", "SQL", "Triggers"]
  },
  {
    title: "Term Schedule Visualization App",
    description: "Visualized routes between classes using Excel data and custom drawing.",
    category: "web",
    year: 2025,
    tags: ["Visualization", "Excel", "OOP"]
  }
];

const projectList = document.getElementById("projectList");
const filterCategory = document.getElementById("filterCategory");
const sortProjects = document.getElementById("sortProjects");
const projectsEmpty = document.getElementById("projectsEmpty");

function renderProjects() {
  if (!projectList) return;

  const selectedCategory = filterCategory ? filterCategory.value : "all";
  const selectedSort = sortProjects ? sortProjects.value : "newest";

  let result = [...projects];

  if (selectedCategory !== "all") {
    result = result.filter((project) => project.category === selectedCategory);
  }

  if (selectedSort === "newest") {
    result.sort((a, b) => b.year - a.year);
  } else if (selectedSort === "oldest") {
    result.sort((a, b) => a.year - b.year);
  } else if (selectedSort === "az") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  }

  projectList.innerHTML = "";

  if (result.length === 0) {
    projectsEmpty.classList.remove("hidden");
    return;
  }

  projectsEmpty.classList.add("hidden");

  result.forEach((project) => {
    const article = document.createElement("article");
    article.className = "project-item";

    article.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">
        <span class="tag">Category: ${project.category}</span>
        <span class="tag">Year: ${project.year}</span>
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    `;

    projectList.appendChild(article);
  });
}

if (filterCategory) filterCategory.addEventListener("change", renderProjects);
if (sortProjects) sortProjects.addEventListener("change", renderProjects);
renderProjects();

// GitHub API
const githubUsernameInput = document.getElementById("githubUsername");
const loadReposBtn = document.getElementById("loadReposBtn");
const githubStatus = document.getElementById("githubStatus");
const repoList = document.getElementById("repoList");

async function loadGitHubRepos() {
  if (!githubUsernameInput || !repoList || !githubStatus) return;

  const username = githubUsernameInput.value.trim();

  if (!username) {
    githubStatus.textContent = "Please enter a GitHub username.";
    return;
  }

  githubStatus.textContent = "Loading repositories...";
  repoList.innerHTML = "";

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);

    if (!response.ok) {
      throw new Error("Unable to load GitHub repositories.");
    }

    const repos = await response.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      githubStatus.textContent = "No repositories found for this user.";
      return;
    }

    githubStatus.textContent = `Showing ${repos.length} repositories for ${username}.`;

    repos.forEach((repo) => {
      const card = document.createElement("article");
      card.className = "repo-card";

      card.innerHTML = `
        <h3>
          <a class="link" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
            ${repo.name}
          </a>
        </h3>
        <p>${repo.description ? repo.description : "No description provided."}</p>
        <div class="repo-meta">
          <span class="meta-pill">Language: ${repo.language ? repo.language : "N/A"}</span>
          <span class="meta-pill">Stars: ${repo.stargazers_count}</span>
          <span class="meta-pill">Updated: ${new Date(repo.updated_at).toLocaleDateString()}</span>
        </div>
      `;

      repoList.appendChild(card);
    });
  } catch (error) {
    githubStatus.textContent = "Something went wrong while loading the GitHub API. Please try again.";
  }
}

if (loadReposBtn) {
  loadReposBtn.addEventListener("click", loadGitHubRepos);
}

// Contact form validation
const form = document.getElementById("contactForm");
const formNotice = document.getElementById("formNotice");

if (form) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const agreeCheck = document.getElementById("agreeCheck");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const agreeError = document.getElementById("agreeError");

  function setError(el, msg) {
    if (el) el.textContent = msg;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formNotice.textContent = "";

    let ok = true;
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name.length < 2) {
      setError(nameError, "Please enter a valid name (at least 2 characters).");
      ok = false;
    } else {
      setError(nameError, "");
    }

    if (!isValidEmail(email)) {
      setError(emailError, "Please enter a valid email address.");
      ok = false;
    } else {
      setError(emailError, "");
    }

    if (message.length < 10) {
      setError(messageError, "Message must be at least 10 characters.");
      ok = false;
    } else {
      setError(messageError, "");
    }

    if (!agreeCheck.checked) {
      setError(agreeError, "Please confirm that your information is correct.");
      ok = false;
    } else {
      setError(agreeError, "");
    }

    if (ok) {
      formNotice.textContent = "✅ Message sent successfully. This is a front-end demo form.";
      form.reset();
    }
  });
}