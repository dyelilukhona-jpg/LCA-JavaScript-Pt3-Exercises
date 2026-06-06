const developers = [
  {
    id: 1,
    name: "Amahle Dlamini",
    role: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript", "React", "Figma"],
    avatar: "https://placehold.co/100x100/4F81BD/ffffff",
    availableForHire: true,
    location: "Cape Town",
  },
  {
    id: 2,
    name: "Sipho Nkosi",
    role: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB", "SQL"],
    avatar: "https://placehold.co/100x100/9BBB59/ffffff",
    availableForHire: false,
    location: "Johannesburg",
  },
  {
    id: 3,
    name: "Lerato Mokoena",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "PostgreSQL", "Docker", "Git"],
    avatar: "https://placehold.co/100x100/C0504D/ffffff",
    availableForHire: true,
    location: "Pretoria",
  },
  {
    id: 4,
    name: "Thabo Sithole",
    role: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    avatar: "https://placehold.co/100x100/F79646/ffffff",
    availableForHire: false,
    location: "Durban",
  },
  {
    id: 5,
    name: "Nomvula Zulu",
    role: "DevOps Engineer",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Linux"],
    avatar: "https://placehold.co/100x100/8064A2/ffffff",
    availableForHire: true,
    location: "Cape Town",
  },
  {
    id: 6,
    name: "Kagiso Motsepe",
    role: "Frontend Developer",
    skills: ["Vue.js", "CSS", "TypeScript", "Tailwind CSS"],
    avatar: "https://placehold.co/100x100/17375E/ffffff",
    availableForHire: true,
    location: "Johannesburg",
  },
  {
    id: 7,
    name: "Zanele Mthembu",
    role: "Backend Developer",
    skills: ["Python", "Django", "REST APIs", "MySQL", "Redis"],
    avatar: "https://placehold.co/100x100/538135/ffffff",
    availableForHire: false,
    location: "Port Elizabeth",
  },
  {
    id: 8,
    name: "Bongani Cele",
    role: "Full Stack Developer",
    skills: ["Angular", "Java", "Spring Boot", "MongoDB"],
    avatar: "https://placehold.co/100x100/833C00/ffffff",
    availableForHire: true,
    location: "Durban",
  },
  {
    id: 9,
    name: "Precious Khumalo",
    role: "UI/UX Designer",
    skills: ["Sketch", "Figma", "Wireframing", "Accessibility", "CSS"],
    avatar: "https://placehold.co/100x100/31849B/ffffff",
    availableForHire: false,
    location: "Pretoria",
  },
  {
    id: 10,
    name: "Mandla Ntuli",
    role: "DevOps Engineer",
    skills: ["Terraform", "Azure", "Bash", "Ansible"],
    avatar: "https://placehold.co/100x100/7F7F7F/ffffff",
    availableForHire: true,
    location: "Cape Town",
  },
  {
    id: 11,
    name: "Ayanda Mkhize",
    role: "Frontend Developer",
    skills: ["React", "Redux", "JavaScript", "SASS"],
    avatar: "https://placehold.co/100x100/1F3864/ffffff",
    availableForHire: false,
    location: "Bloemfontein",
  },
  {
    id: 12,
    name: "Thandeka Ndlovu",
    role: "Backend Developer",
    skills: ["Go", "gRPC", "PostgreSQL", "Docker", "Kafka"],
    avatar: "https://placehold.co/100x100/375623/ffffff",
    availableForHire: true,
    location: "Johannesburg",
  },
  {
    id: 13,
    name: "Lwazi Hadebe",
    role: "Full Stack Developer",
    skills: ["Next.js", "GraphQL", "Prisma", "TypeScript", "Vercel"],
    avatar: "https://placehold.co/100x100/632523/ffffff",
    availableForHire: true,
    location: "Cape Town",
  },
  {
    id: 14,
    name: "Nandi Shabalala",
    role: "UI/UX Designer",
    skills: ["User Testing", "Figma", "InVision", "Design Systems"],
    avatar: "https://placehold.co/100x100/984807/ffffff",
    availableForHire: false,
    location: "Durban",
  },
  {
    id: 15,
    name: "Sibusiso Mahlangu",
    role: "DevOps Engineer",
    skills: ["Jenkins", "GitHub Actions", "GCP", "Prometheus", "Grafana"],
    avatar: "https://placehold.co/100x100/3F3151/ffffff",
    availableForHire: true,
    location: "Pretoria",
  },
];

function renderCards(devArray) {
  const cardView = document.getElementById("cardView");
  cardView.innerHTML = "";

  devArray.forEach((dev) => {
    const skills = dev.skills
      .map((skill) => `<span class="badge bg-secondary me-1">${skill}</span>`)
      .join("");

    const card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img src="${dev.avatar}" alt="${dev.name}" class="rounded-circle mb-3">
          <h5 class="card-title">${dev.name}</h5>
          <p class="text-muted mb-1">${dev.role}</p>
          <p class="text-muted small mb-2">${dev.location}</p>
          <p class="mb-2">${skills}</p>
          <button class="btn btn-sm btn-outline-success hire-btn" data-id="${dev.id}">${dev.availableForHire ? "Available for Hire" : "Not Available"}</button>
        </div>
      </div>
    `;

    cardView.appendChild(card);
  });

  document.getElementById("devCount").textContent = devArray.length;
}

renderCards(developers);

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  const filtered = developers.filter((dev) => {
    return (
      dev.name.toLowerCase().includes(searchTerm) ||
      dev.role.toLowerCase().includes(searchTerm) ||
      dev.skills.some((skill) => skill.toLowerCase().includes(searchTerm))
    );
  });

  if (isCardView) {
    renderCards(filtered);
  } else {
    renderTable(filtered);
  }
});

function renderTable(devArray) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  devArray.forEach((dev) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${dev.name}</td>
      <td>${dev.role}</td>
      <td>${dev.skills.join(", ")}</td>
      <td>${dev.location}</td>
      <td>
        <button class="btn btn-sm btn-outline-success hire-btn" data-id="${dev.id}">
          ${dev.availableForHire ? "✅ Available for Hire" : "❌ Not Available"}
        </button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  document.getElementById("devCount").textContent = devArray.length;
}

const viewToggle = document.getElementById("viewToggle");
let isCardView = true;

viewToggle.addEventListener("click", function () {
  const cardView = document.getElementById("cardView");
  const tableView = document.getElementById("tableView");

  if (isCardView) {
    cardView.classList.add("d-none");
    tableView.classList.remove("d-none");
    viewToggle.textContent = "Switch to Card View";
    renderTable(developers);
    isCardView = false;
  } else {
    cardView.classList.remove("d-none");
    tableView.classList.add("d-none");
    viewToggle.textContent = "Switch to Table View";
    renderCards(developers);
    isCardView = true;
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("hire-btn")) {
    const id = parseInt(e.target.getAttribute("data-id"));
    const dev = developers.find((d) => d.id === id);

    dev.availableForHire = !dev.availableForHire;

    e.target.textContent = dev.availableForHire
      ? "✅ Available for Hire"
      : "❌ Not Available";
  }
});

const addDeveloperBtn = document.getElementById("addDeveloper");

addDeveloperBtn.addEventListener("click", function () {
  const name = document.getElementById("inputName").value.trim();
  const role = document.getElementById("inputRole").value.trim();
  const skills = document.getElementById("inputSkills").value.trim();
  const location = document.getElementById("inputLocation").value.trim();
  const formError = document.getElementById("formError");

  if (!name || !role || !skills || !location) {
    formError.textContent =
      "Please fill in all fields before adding a developer.";
    return;
  }

  formError.textContent = "";

  const newDeveloper = {
    id: developers.length + 1,
    name: name,
    role: role,
    skills: skills.split(",").map((skill) => skill.trim()),
    location: location,
    avatar: "https://placehold.co/100x100/4F81BD/ffffff",
    availableForHire: true,
  };

  developers.push(newDeveloper);

  if (isCardView) {
    renderCards(developers);
  } else {
    renderTable(developers);
  }

  document.getElementById("inputName").value = "";
  document.getElementById("inputRole").value = "";
  document.getElementById("inputSkills").value = "";
  document.getElementById("inputLocation").value = "";
});
