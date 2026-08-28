/* =====================================================
   EDIT YOUR DETAILS HERE
===================================================== */

const portfolioData = {
    name: "Gangisetti Devi Varaprasad",

    description:
        "I build projects using Python, Artificial Intelligence, Machine Learning and modern web technologies.",

    about:
        "I am a passionate technology enthusiast interested in Artificial Intelligence, Machine Learning and software development. I enjoy transforming ideas into practical applications and solving real-world problems using technology.",

    aboutTwo:
        "Currently, I am pursuing M.Tech in Computer Science and Engineering while developing my skills in Python, web development and machine learning.",

    email: "varaprasad1894@gmail.com",

    location: "Vijayawada, Andhra Pradesh, India",

    githubUsername: "prasad1894",

    social: {
        github: "https://github.com/prasad1894",
        linkedin: "https://www.linkedin.com/in/varaprasad-gangisetti",
        email: "mailto:varaprasad1894@gmail.com"
    },

    typingRoles: [
        "Python Developer",
        "AI / ML Enthusiast",
        "MTech CSE Student"
    ],

    skills: [
        {
            name: "Python",
            icon: "fa-brands fa-python"
        },
        {
            name: "Django",
            icon: "fa-solid fa-server"
        },
        {
            name: "Machine Learning",
            icon: "fa-solid fa-brain"
        },
        {
            name: "Artificial Intelligence",
            icon: "fa-solid fa-robot"
        },
        {
            name: "HTML",
            icon: "fa-brands fa-html5"
        },
        {
            name: "CSS",
            icon: "fa-brands fa-css3-alt"
        },
        {
            name: "JavaScript",
            icon: "fa-brands fa-js"
        },
        {
            name: "MySQL",
            icon: "fa-solid fa-database"
        },
        {
            name: "Git & GitHub",
            icon: "fa-brands fa-github"
        },
        {
            name: "REST API",
            icon: "fa-solid fa-cloud"
        },
        {
            name: "Data Analysis",
            icon: "fa-solid fa-chart-line"
        },
        {
            name: "Problem Solving",
            icon: "fa-solid fa-lightbulb"
        }
    ],

    projects: [
        {
            title: "Attendance Management System",

            image: "assets/projects/attendance.png",

            description:
                "A web-based attendance management system for managing classes, students, attendance records and daily reports.",

            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Google Apps Script",
                "Google Sheets"
            ],

            github:
                "https://github.com/prasad1894/Attendance",

            demo: "https://attendance-gules-tau.vercel.app/"
        },

        {
            title: "AI / ML Prediction System",

            image: "assets/projects/aiml.png",

            description:
                "A machine learning application that processes data, trains predictive models and generates intelligent predictions.",

            technologies: [
                "Python",
                "Pandas",
                "NumPy",
                "Scikit-learn"
            ],

            github:
                "https://github.com/YOUR_GITHUB_USERNAME/aiml-project",

            demo: "#"
        },

        {
            title: "Django Web Application",

            image: "assets/projects/django.png",

            description:
                "A responsive web application built using Django and MySQL with a modern frontend interface.",

            technologies: [
                "Python",
                "Django",
                "MySQL",
                "HTML",
                "CSS"
            ],

            github:
                "https://github.com/YOUR_GITHUB_USERNAME/django-project",

            demo: "#"
        }
    ],

    education: [
        {
            degree:
                "M.Tech in Computer Science and Engineering",

            college: "Dhanekula Institute of Engineering and Technology",

            location: "Ganguru, Vijayawada",

            year: "2025 - 2027",

            description:
                "Pursuing postgraduate studies with a focus on Artificial Intelligence and Machine Learning."
        },

        {
            degree:
                "B.Tech in Computer Science and Engineering",

            college:
                "Dhanekula Institute of Engineering and Technology",

            location:
                "Ganguru, Vijayawada",

            year: "2020 - 2023",

            description:
                "Completed B.Tech in Computer Science and Engineering."
        },

        {
            degree:
                "Diploma in Mechanical Engineering",

            college:
                "Dhanekula Institute of Engineering and Technology",

            location:
                "Ganguru, Vijayawada",

            year: "2017 - 2020",

            description:
                "Completed Diploma in Mechanical Engineering."
        }
    ]
};


/* =====================================================
   HELPER
===================================================== */

function getElement(id) {
    return document.getElementById(id);
}


/* =====================================================
   BASIC INFORMATION
===================================================== */

getElement("logoName").textContent = portfolioData.name;
getElement("heroName").textContent = portfolioData.name;
getElement("heroDescription").textContent = portfolioData.description;

getElement("aboutText").textContent = portfolioData.about;
getElement("aboutTextTwo").textContent = portfolioData.aboutTwo;

getElement("emailText").textContent = portfolioData.email;
getElement("emailLink").href = "mailto:" + portfolioData.email;

getElement("locationText").textContent = portfolioData.location;

getElement("footerName").textContent = portfolioData.name;
getElement("copyrightName").textContent = portfolioData.name;
getElement("currentYear").textContent = new Date().getFullYear();


/* =====================================================
   TYPING EFFECT
===================================================== */

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

const typingElement = getElement("typingText");

function typeEffect() {
    const currentRole =
        portfolioData.typingRoles[roleIndex];

    if (!deleting) {
        characterIndex++;

        typingElement.textContent =
            currentRole.substring(0, characterIndex);

        if (characterIndex >= currentRole.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }
    } else {
        characterIndex--;

        typingElement.textContent =
            currentRole.substring(0, characterIndex);

        if (characterIndex <= 0) {
            deleting = false;

            roleIndex++;

            if (
                roleIndex >=
                portfolioData.typingRoles.length
            ) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}

typeEffect();


/* =====================================================
   SOCIAL LINKS
===================================================== */

const socialContainer =
    getElement("socialLinks");

const footerSocial =
    getElement("footerSocial");

const socialItems = [
    {
        icon: "fa-brands fa-github",
        url: portfolioData.social.github,
        name: "GitHub"
    },

    {
        icon: "fa-brands fa-linkedin-in",
        url: portfolioData.social.linkedin,
        name: "LinkedIn"
    },

    {
        icon: "fa-solid fa-envelope",
        url: portfolioData.social.email,
        name: "Email"
    }
];

socialItems.forEach(function (item) {

    const link = document.createElement("a");

    link.href = item.url;
    link.title = item.name;

    if (item.url.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    }

    link.innerHTML =
        '<i class="' + item.icon + '"></i>';

    socialContainer.appendChild(link);


    const footerLink =
        link.cloneNode(true);

    footerSocial.appendChild(footerLink);
});


/* =====================================================
   SKILLS
===================================================== */

const skillsContainer =
    getElement("skillsContainer");

portfolioData.skills.forEach(function (skill) {

    const card =
        document.createElement("div");

    card.className = "skill-card";

    card.innerHTML =
        '<i class="' +
        skill.icon +
        '"></i>' +
        '<h3>' +
        skill.name +
        "</h3>";

    skillsContainer.appendChild(card);
});


/* =====================================================
   PROJECTS
===================================================== */

const projectsContainer =
    getElement("projectsContainer");

portfolioData.projects.forEach(function (project) {

    const card =
        document.createElement("article");

    card.className = "project-card";


    const technologyHTML =
        project.technologies
            .map(function (technology) {
                return "<span>" +
                    technology +
                    "</span>";
            })
            .join("");


    card.innerHTML =

        '<div class="project-image">' +

            '<img src="' +
            project.image +
            '" alt="' +
            project.title +
            '" loading="lazy">' +

        "</div>" +


        '<div class="project-content">' +

            "<h3>" +
            project.title +
            "</h3>" +

            "<p>" +
            project.description +
            "</p>" +

            '<div class="project-tech">' +
            technologyHTML +
            "</div>" +

            '<div class="project-links">' +

                '<a href="' +
                project.github +
                '" target="_blank" rel="noopener noreferrer">' +

                    '<i class="fa-brands fa-github"></i> ' +
                    "Source Code" +

                "</a>" +


                '<a href="' +
                project.demo +
                '" target="_blank" rel="noopener noreferrer">' +

                    "Live Demo " +
                    '<i class="fa-solid fa-arrow-up-right-from-square"></i>' +

                "</a>" +

            "</div>" +

        "</div>";


    projectsContainer.appendChild(card);
});


/* =====================================================
   EDUCATION
===================================================== */

const educationContainer =
    getElement("educationContainer");

portfolioData.education.forEach(function (item) {

    const element =
        document.createElement("div");

    element.className =
        "education-item";

    element.innerHTML =

        '<div class="education-dot"></div>' +

        '<div class="education-card">' +

            "<h3>" +
            item.college +
            "</h3>" +

            '<div class="degree">' +
            item.degree +
            "</div>" +

            "<p>" +
            item.description +
            "</p>" +

            "<p>" +
            '<i class="fa-solid fa-location-dot"></i> ' +
            item.location +
            "</p>" +

            '<span class="education-year">' +
            item.year +
            "</span>" +

        "</div>";


    educationContainer.appendChild(element);
});


/* =====================================================
   GITHUB
===================================================== */

async function loadGitHubProfile() {

    const username =
        portfolioData.githubUsername.trim();


    if (
        username === "" ||
        username === "https://github.com/prasad1894"
    ) {

        getElement("githubBio").textContent =
            "Add your GitHub username in script.js";

        getElement("repositories").innerHTML =
            '<p class="loading">' +
            "Add your GitHub username to load repositories." +
            "</p>";

        return;
    }


    try {

        const userResponse =
            await fetch(
                "https://api.github.com/users/" +
                encodeURIComponent(username)
            );


        if (!userResponse.ok) {
            throw new Error(
                "GitHub user not found"
            );
        }


        const user =
            await userResponse.json();


        getElement("githubAvatar").src =
            user.avatar_url;

        getElement("githubName").textContent =
            user.name || user.login;

        getElement("githubBio").textContent =
            user.bio ||
            "Developer building things with code.";

        getElement("repoCount").textContent =
            user.public_repos;

        getElement("followers").textContent =
            user.followers;

        getElement("following").textContent =
            user.following;

        getElement("githubLink").href =
            user.html_url;

        getElement("allReposLink").href =
            user.html_url;


        await loadRepositories(username);

    } catch (error) {

        console.error(
            "GitHub profile error:",
            error
        );

        getElement("githubBio").textContent =
            "Unable to load GitHub profile.";

    }
}


/* =====================================================
   GITHUB REPOSITORIES
===================================================== */

async function loadRepositories(username) {

    const repositoryContainer =
        getElement("repositories");


    try {

        const response =
            await fetch(
                "https://api.github.com/users/" +
                encodeURIComponent(username) +
                "/repos?sort=updated&per_page=6"
            );


        if (!response.ok) {
            throw new Error(
                "Unable to load repositories"
            );
        }


        const repositories =
            await response.json();


        repositoryContainer.innerHTML = "";


        if (repositories.length === 0) {

            repositoryContainer.innerHTML =
                '<p class="loading">' +
                "No public repositories found." +
                "</p>";

            return;
        }


        repositories.forEach(function (repo) {

            const card =
                document.createElement("div");

            card.className = "repo-card";


            card.innerHTML =

                "<h4>" +
                repo.name +
                "</h4>" +

                "<p>" +
                (
                    repo.description ||
                    "No description available."
                ) +
                "</p>" +

                '<div class="repo-meta">' +

                    "<span>" +
                    '<i class="fa-solid fa-star"></i> ' +
                    repo.stargazers_count +
                    "</span>" +

                    "<span>" +
                    '<i class="fa-solid fa-code-fork"></i> ' +
                    repo.forks_count +
                    "</span>" +

                    "<span>" +
                    (repo.language || "Code") +
                    "</span>" +

                "</div>" +

                '<a class="repo-link" href="' +
                repo.html_url +
                '" target="_blank" rel="noopener noreferrer">' +

                    "View Repository " +
                    '<i class="fa-solid fa-arrow-right"></i>' +

                "</a>";


            repositoryContainer.appendChild(card);

        });

    } catch (error) {

        console.error(
            "GitHub repository error:",
            error
        );

        repositoryContainer.innerHTML =
            '<p class="loading">' +
            "Unable to load repositories." +
            "</p>";
    }
}


loadGitHubProfile();


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    getElement("menuButton");

const navMenu =
    getElement("navMenu");


menuButton.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle("open");

        const icon =
            menuButton.querySelector("i");


        if (
            navMenu.classList.contains("open")
        ) {

            icon.className =
                "fa-solid fa-xmark";

        } else {

            icon.className =
                "fa-solid fa-bars";

        }
    }
);


document
    .querySelectorAll("#navMenu a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove("open");

                menuButton
                    .querySelector("i")
                    .className =
                    "fa-solid fa-bars";
            }
        );

    });


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll("#navMenu a");


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 160;

            if (
                window.scrollY >= sectionTop
            ) {

                currentSection =
                    section.id;

            }
        });


        navigationLinks.forEach(
            function (link) {

                link.classList.remove("active");


                if (
                    link.getAttribute("href") ===
                    "#" + currentSection
                ) {

                    link.classList.add("active");

                }

            }
        );

    }
);


/* =====================================================
   NETLIFY CONTACT FORM
===================================================== */

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const status =
                getElement("formStatus");


            const formData =
                new FormData(contactForm);


            status.textContent =
                "Sending message...";


            try {

                const response =
                    await fetch(
                        "/",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/x-www-form-urlencoded"
                            },

                            body:
                                new URLSearchParams(
                                    formData
                                ).toString()
                        }
                    );


                if (!response.ok) {

                    throw new Error(
                        "Form submission failed"
                    );

                }


                status.textContent =
                    "✓ Message sent successfully!";

                contactForm.reset();


            } catch (error) {

                console.error(
                    "Contact form error:",
                    error
                );

                status.textContent =
                    "Unable to send message. Please try again.";

            }

        }
    );
}