import headshot from "./assets/headshot.png";

// Logos
import cotalityLogo from "./assets/Cotality.png";
import tamuLogo from "./assets/TAMUTechnologyServices.png";
import mabsLogo from "./assets/MABS.png";
import awibLogo from "./assets/AWIB.png";
import ssaLogo from "./assets/SSA.jpg";
import sevaLogo from "./assets/SevaDaan.png";

// Personal images
import cookingImg from "./assets/Cooking.png";
import readingImg from "./assets/Reading.png";
import photographyImg from "./assets/Photography.png";

// Videos
import nyVideo from "./assets/Newyork.mp4";
import punjabVideo from "./assets/Punjab.mp4";

export default function App() {
  const projects = [
    {
      title: "Funds Management Dashboard",
      subtitle: "Interactive reporting tool for better visibility",
      problem:
        "The team needed a clearer way to view funds on account, client billables, and escrow activity without having to piece together information from multiple places.",
      solution:
        "I built an interactive dashboard that brought those data points into one place and made the reporting easier to read, filter, and use for day-to-day decision making.",
      tools: "Excel, VBA, Data Visualization",
      impact:
        "It made reporting more organized and helped stakeholders get a quicker, clearer view of important financial activity.",
    },
    {
      title: "Returns & Refunds Analysis",
      subtitle: "Finding patterns in a large operational dataset",
      problem:
        "Returns and refunds were happening often, but it was hard to clearly see the trends, recurring issues, and biggest drivers behind them.",
      solution:
        "I worked through a large dataset, cleaned inconsistent fields, and organized the information into a more structured view so the team could better understand where issues were coming from.",
      tools: "Excel, Data Cleaning, Analysis",
      impact:
        "This helped surface recurring return drivers and supported better conversations around process improvement.",
    },
    {
      title: "Business Process Automation",
      subtitle: "Making repetitive reporting more efficient",
      problem:
        "Some recurring reporting processes were very manual, which made them time consuming and harder to keep consistent.",
      solution:
        "I developed VBA-based automation and reporting logic to simplify repetitive tasks and make the process smoother for the team.",
      tools: "Excel, VBA, Process Improvement",
      impact:
        "It reduced manual effort and made recurring workflows more efficient and easier to manage.",
    },
  ];

  const experience = [
  {
    company: "Cotality",
    logo: cotalityLogo,
    location: "Irving, Texas",
    roles: [
      {
        title: "Product Analyst Intern",
        type: "Internship",
        dates: "June 2026 – Present",
        description:
          "Currently supporting product-focused work at Cotality, with a focus on understanding business needs, exploring data-driven solutions, and contributing to product and discovery center initiatives.",
        skills:
          "Product Analysis, Business Analysis, Data Visualization, Research, Product Thinking",
      },
      {
        title: "Associate Professional Business Analyst",
        type: "Full-time",
        dates: "September 2025 – June 2026",
        description:
          "Supported Funds Management operations by analyzing processes, identifying inefficiencies, and helping propose re-engineering opportunities. Worked with SQL, internal databases, dashboards, and VBA-driven automation to improve reporting, reduce manual effort, and create clearer visibility for business decision-making.",
        skills:
          "Advanced SQL, Tableau, Power BI, Microsoft Excel, VBA, Process Automation, Business Reporting, Data Transformation, Internal Database Management",
      },
      {
        title: "Business Process Improvement Intern",
        type: "Internship",
        dates: "June 2025 – August 2025",
        description:
          "Supported Funds Management by analyzing workflows, identifying process inefficiencies, and assisting with operational improvement initiatives. Helped build reporting dashboards, queried internal databases using SQL, and organized data for business reporting and analysis.",
        skills:
          "SQL, Tableau, Power BI, Microsoft Excel, Dashboard Development, Data Visualization, Data Analysis, Business Reporting, Process Documentation, Workflow Analysis",
      },
    ],
  },
  {
    company: "Texas A&M Technology Services",
    logo: tamuLogo,
    location: "College Station, Texas",
    roles: [
      {
        title: "Student Technician",
        type: "Part-time",
        dates: "January 2024 – August 2024",
        description:
          "Provided technical support for the Biomedical and Industrial Systems Department at Texas A&M University. Assisted with device reimaging, software setup, hardware troubleshooting, network connectivity issues, and training new staff on basic troubleshooting processes.",
        skills:
          "IT Support, Hardware Troubleshooting, Software Installation, Device Reimaging, Network Connectivity, Customer Support, Technical Training",
      },
    ],
  },
];

  const involvement = [
    {
      title: "Multicultural Association of Business Students",
      role: "President",
      dates: "August 2023 – May 2025",
      logo: mabsLogo,
      details:
        "Led professional workshops, mentorship programs, and events that helped build community and support students in Mays Business School.",
    },
    {
      title: "Aggie Women in Business",
      role: "Member Development Committee Member",
      dates: "August 2023 – Present",
      logo: awibLogo,
      details:
        "Helped organize volunteer and professional development events focused on mentorship, growth, and community.",
    },
    {
      title: "Sikh Student Association",
      role: "President",
      dates: "August 2023 – May 2025",
      logo: ssaLogo,
      details:
        "Planned cultural events and worked with outside organizations to promote awareness, connection, and community engagement.",
    },
    {
      title: "Seva Daan",
      role: "Committee Member",
      dates: "June 2021 – August 2022",
      logo: sevaLogo,
      details:
        "Helped support nonprofit initiatives focused on meal donation and community outreach for the homeless population in DFW.",
    },
  ];

  const skillGroups = [
    {
      title: "Data & Analysis",
      items: [
        "SQL",
        "Excel",
        "VBA",
        "Data Analysis",
        "Data Visualization",
        "Data Cleaning",
      ],
    },
    {
      title: "Business & Strategy",
      items: [
        "Business Analysis",
        "Process Improvement",
        "Stakeholder Communication",
        "Problem Solving",
        "Tableau",
        "Power BI",
      ],
    },
    {
      title: "Other Tools",
      items: ["PowerPoint", "Word", "Access", "Python", "HTML", "AWS"],
    },
  ];

  const interests = [
    {
      title: "Cooking",
      text:
        "I love trying new recipes and putting my own spin on dishes. It is one of my favorite ways to slow down and relax. Above is a recent creation of mine — Ras Malai Cupcakes! They are inspired by the traditional Indian dessert, Ras Malai, and are one of my favorite treats to make and eat.",
      image: cookingImg,
    },
    {
      title: "Reading",
      text:
        "I am a big reader, and I love books that feel thoughtful, inspiring, or just easy to get lost in. My favorite genres are fantasy, historical fiction, and personal growth, but I am always open to new recommendations. Fun fact — I read 52 books in 2025, so you will almost always catch me with a book in hand.",
      image: readingImg,
    },
    {
      title: "Photography",
      text:
        "I enjoy capturing moments through photos or videos, especially when I am traveling or experiencing somewhere new. It is a fun way for me to be creative and also have a visual way to remember experiences. The photo above is one I took in Isla Mujeres, Mexico — it was such a beautiful place, and I loved being able to capture the colors and energy of the island.",
      image: photographyImg,
    },
  ];

  const videos = [
    {
      title: "New York",
      text:
        "New York has always been on my bucket list, so finally getting to visit felt really special. We did all the touristy things, explored the city, and honestly ate way too much food. It was one of those trips that felt fun the entire time and is definitely something I will always remember.",
      file: nyVideo,
    },
    {
      title: "Punjab, India",
      text:
        "As the daughter of immigrant parents, staying connected to my roots has always been important to me. Growing up, we visited Punjab almost every summer, and over time it became a place that feels like home, just like it does for my parents. It is a part of me that I will always carry with me. The video above is from one of my trips there — a montage of clips from different visits that captures some of my favorite moments and memories.",
      file: punjabVideo,
    },
  ];

  return (
    <div className="page">
      <div className="background-blur blur-one"></div>
      <div className="background-blur blur-two"></div>
      <div className="background-blur blur-three"></div>

      <div className="container">
        <nav className="navbar">
          <div className="brand">
            <p className="brand-label">Portfolio</p>
            <h2>Harleen Kaur</h2>
          </div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#involvement">Activities</a>
            <a href="#skills">Skills</a>
            <a href="#outside">Outside of Work</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-text">
            <p className="pill">
              Product Analyst @ Cotality | Texas A&amp;M MIS Graduate
            </p>

            <h1>
              Hi, I’m Harleen.
              <span> I like building useful things </span>
              with data, technology, and creativity.
            </h1>

            <p className="hero-description">
              I recently graduated from Texas A&amp;M University with a degree in
              Management Information Systems. Through my experience in business
              analysis, data analytics, and product-focused work, I have
              developed a passion for using technology and data to solve
              problems, improve processes, and create meaningful experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-dark">
                View My Work
              </a>
              <a
                href="/HarleenKaur_Resume.pdf"
                className="btn btn-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="profile-card">
              <div
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto",
                  border: "3px solid white",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={headshot}
                  alt="Harleen Kaur"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-box two-column">
            <div>
              <p className="section-label">About Me</p>
              <h2>
                Building solutions at the intersection of business, technology,
                and people.
              </h2>
            </div>

            <div className="about-text">
              <p>
                I have always been drawn to the space where business and
                technology come together. I enjoy understanding how things work,
                identifying opportunities for improvement, and finding practical
                solutions to complex problems.
              </p>

              <p>
                My experience has included business analysis, reporting, data
                analytics, and process improvement initiatives. What I enjoy
                most, though, is understanding the bigger picture and creating
                solutions that help people work more effectively and make better
                decisions.
              </p>

              <p>
                Outside of work, I value leadership, community involvement, and
                creativity. Whether I am leading student organizations,
                traveling, reading, or working on personal projects, I am always
                looking for opportunities to learn and grow.
              </p>
            </div>
          </div>
        </section>

<section id="experience" className="section">
  <p className="section-label">Experience</p>
  <h2 className="section-title">
    Places where I have learned, contributed, and grown.
  </h2>

  <div
    style={{
      display: "grid",
      gap: "24px",
      marginTop: "28px",
    }}
  >
    {experience.map((company) => (
      <div className="section-box" key={company.company}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "22px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "135px",
              borderRadius: "18px",
              background: "#f8faf7",
              border: "1px solid #dde2da",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src={company.logo}
              alt={company.company}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          <div style={{ flex: 1, minWidth: "280px" }}>
            <h3 style={{ margin: "0 0 6px 0" }}>{company.company}</h3>
            <p style={{ margin: "0 0 20px 0", color: "#666" }}>
              {company.location}
            </p>

            <div style={{ display: "grid", gap: "22px" }}>
              {company.roles.map((role) => (
                <div
                  key={role.title}
                  style={{
                    borderLeft: "2px solid #dde2da",
                    paddingLeft: "18px",
                  }}
                >
                  <h4 style={{ margin: "0 0 4px 0", fontSize: "18px" }}>
                    {role.title}
                  </h4>

                  <p
                    style={{
                      margin: "0 0 10px 0",
                      color: "#666",
                      fontSize: "14px",
                    }}
                  >
                    {role.type} • {role.dates}
                  </p>

                  <p
                    style={{
                      margin: "0 0 12px 0",
                      lineHeight: 1.8,
                      color: "#4f4f4f",
                    }}
                  >
                    {role.description}
                  </p>

                  <p
                    style={{
                      margin: 0,
                      lineHeight: 1.7,
                      color: "#555",
                      fontSize: "14px",
                    }}
                  >
                    <strong>Skills:</strong> {role.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

        <section id="projects" className="section">
          <p className="section-label">Projects</p>
          <h2 className="section-title">
            A few examples of how I think through problems and solutions.
          </h2>

          <div className="project-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.title}>
                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>

                <div className="project-section">
                  <strong>Problem</strong>
                  <p>{project.problem}</p>
                </div>

                <div className="project-section">
                  <strong>What I worked on</strong>
                  <p>{project.solution}</p>
                </div>

                <div className="project-section">
                  <strong>Tools</strong>
                  <p>{project.tools}</p>
                </div>

                <div className="impact-box">
                  <strong>Why it mattered:</strong> {project.impact}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="involvement" className="section">
          <p className="section-label">Leadership & Activities</p>
          <h2 className="section-title">
            Things I care about outside of class and work.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginTop: "28px",
            }}
          >
            {involvement.map((item) => (
              <div className="project-card" key={item.title + item.role}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "#f8faf7",
                    border: "1px solid #dde2da",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    marginBottom: "14px",
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.title}
                    style={{
                      width: "70%",
                      height: "70%",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <p className="project-subtitle">{item.dates}</p>
                <h3>{item.title}</h3>
                <div className="project-section">
                  <strong>{item.role}</strong>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-box">
            <p className="section-label">Skills</p>
            <h2 className="section-title small">
              A few tools and strengths I use most often.
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
                marginTop: "28px",
              }}
            >
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  style={{
                    background: "#f8faf7",
                    border: "1px solid #dde2da",
                    borderRadius: "24px",
                    padding: "22px",
                  }}
                >
                  <h3 style={{ marginTop: 0 }}>{group.title}</h3>
                  <div className="skills-list">
                    {group.items.map((skill) => (
                      <span className="skill-pill" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="outside" className="section">
          <p className="section-label">Outside of Work</p>
          <h2 className="section-title">A Little More About Me</h2>

          <div
            style={{
              marginTop: "28px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {interests.map((interest) => (
              <div className="project-card" key={interest.title}>
                <div
                  style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "22px",
                    overflow: "hidden",
                    background: "#f2f2f2",
                    marginBottom: "16px",
                  }}
                >
                  <img
                    src={interest.image}
                    alt={interest.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                <h3>{interest.title}</h3>
                <p className="project-description">{interest.text}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "28px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {videos.map((video) => (
              <div className="project-card" key={video.title}>
                <h3 style={{ marginBottom: "16px" }}>{video.title}</h3>
                <video
                  controls
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  <source src={video.file} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <p className="project-description">{video.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="contact-box">
            <p className="section-label contact-label">Contact</p>
            <h2>I’m always open to learning and connecting.</h2>
            <p className="contact-text">
              Thank you for taking the time to learn a little about me and
              explore my work. I would love to connect, hear your story, and
              continue learning from others along the way.
            </p>

            <div className="contact-links">
              <a
                href="mailto:harleen.khakh555@gmail.com"
                className="btn btn-white"
              >
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/harleenkaurk05/"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="/HarleenKaur_Resume.pdf"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}