import { useEffect } from "react";
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
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const experience = [
    {
      company: "Cotality",
      logo: cotalityLogo,
      location: "Texas",
      roles: [
        {
          title: "R&D Product Analyst Intern",
          type: "Internship",
          dates: "June 2026 – August 2026",
          description:
            "Worked across product discovery, experience design, market research, and data storytelling for Cotality's Discovery Center. My main project focused on designing and prototyping a new Capital Markets affordability experience.",
          highlights: [
            "Led discovery and requirements gathering across Capital Markets, analytics, economics, and product teams.",
            "Translated housing, mortgage, and economic concepts into product requirements, wireframes, and interactive experiences.",
            "Collaborated with UX to develop prototypes and shape the end-to-end user experience.",
            "Conducted competitive research to support product positioning for climate-risk and property-impact solutions.",
            "Presented product concepts, research, and recommendations to product leaders, executives, and cross-functional stakeholders.",
          ],
          tags: [
            "Product Discovery",
            "Stakeholder Interviews",
            "Requirements Gathering",
            "Wireframing",
            "Prototyping",
            "Competitive Intelligence",
            "Product Strategy",
            "Executive Storytelling",
          ],
        },
        {
          title: "Associate Professional Business Analyst",
          type: "Full-time",
          dates: "September 2025 – June 2026",
          description:
            "Supported Funds Management operations through business analysis, reporting, data extraction, and process automation.",
          highlights: [
            "Analyzed operational processes and identified opportunities for process improvement and re-engineering.",
            "Worked with SQL and internal databases to extract, transform, and organize data for business reporting.",
            "Developed dashboards and reporting tools that improved visibility into operational activity.",
            "Built VBA-driven automation to reduce repetitive manual work and improve reporting turnaround time.",
          ],
          tags: [
            "SQL",
            "Excel",
            "VBA",
            "Business Analysis",
            "Process Improvement",
            "Reporting",
            "Automation",
          ],
        },
        {
          title: "Business Process Improvement Intern",
          type: "Internship",
          dates: "June 2025 – August 2025",
          description:
            "Supported Funds Management by analyzing workflows, identifying inefficiencies, and helping build more structured reporting and process improvement solutions.",
          highlights: [
            "Analyzed operational workflows and recurring process issues.",
            "Built reporting dashboards and organized data for analysis.",
            "Queried internal databases using SQL.",
            "Worked with business analysts and cross-functional teams to explore automation opportunities.",
          ],
          tags: [
            "SQL",
            "Excel",
            "Dashboard Development",
            "Process Analysis",
            "Data Analysis",
          ],
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
            "Provided technical support for the Biomedical and Industrial Systems Department at Texas A&M University.",
          highlights: [
            "Supported faculty, students, and staff with hardware, software, and network issues.",
            "Reimaged and configured devices for academic and research use.",
            "Helped train new staff on troubleshooting processes and technical tasks.",
            "Supported reliable day-to-day technology operations across the department.",
          ],
          tags: [
            "IT Support",
            "Troubleshooting",
            "Device Reimaging",
            "Network Support",
            "Training",
          ],
        },
      ],
    },
  ];

  const projects = [
    {
      eyebrow: "Featured Product Work",
      title: "Capital Markets Affordability Experience",
      subtitle: "Product Discovery · Experience Design · Data Storytelling",
      problem:
        "Explore how complex housing affordability data could be turned into an intuitive experience for Capital Markets clients.",
      work:
        "I researched affordability frameworks and worked with concepts including housing prices, mortgage rates, household income, and market accessibility. I conducted stakeholder conversations, gathered requirements, helped define the product story, and collaborated with UX to turn those ideas into wireframes and an interactive prototype.",
      outcome:
        "The concept allowed users to explore affordability nationally, compare markets, drill into metro-level views, and understand how affordability changes over time.",
      learned:
        "This project gave me hands-on experience across the product lifecycle—from discovery and requirements gathering to UX collaboration, prototyping, storytelling, and executive presentation.",
      tags: [
        "Product Discovery",
        "Stakeholder Research",
        "Wireframing",
        "UX Collaboration",
        "Prototyping",
        "Capital Markets",
      ],
      featured: true,
    },
    {
      eyebrow: "Business Analysis",
      title: "Funds Management Dashboard",
      subtitle: "Interactive reporting for better visibility",
      problem:
        "The team needed a clearer way to view funds on account, client billables, and escrow activity without pulling information from multiple places.",
      work:
        "I built an interactive dashboard that brought key information into one place and made the reporting easier to read, filter, and use for day-to-day decision making.",
      outcome:
        "The dashboard gave stakeholders a quicker and more organized view of important operational and financial activity.",
      tags: ["Excel", "VBA", "Dashboard Design", "Data Visualization"],
    },
    {
      eyebrow: "Data Analysis",
      title: "Returns & Refunds Analysis",
      subtitle: "Finding patterns in a large operational dataset",
      problem:
        "Returns and refunds occurred frequently, but the team needed a more structured way to understand recurring trends and root causes.",
      work:
        "I worked through a large operational dataset, cleaned inconsistent fields, organized the data, and identified recurring patterns across errors and workflows.",
      outcome:
        "The analysis helped surface common return drivers and supported conversations around process improvement.",
      tags: ["Data Cleaning", "Excel", "Root Cause Analysis", "Reporting"],
    },
    {
      eyebrow: "Automation",
      title: "Business Process Automation",
      subtitle: "Reducing repetitive manual reporting",
      problem:
        "Several recurring reporting processes required significant manual effort and were difficult to maintain consistently.",
      work:
        "I developed VBA-driven automation and reporting logic to streamline repetitive tasks and make recurring workflows more efficient.",
      outcome:
        "The automation reduced manual effort and improved the speed and consistency of recurring reporting.",
      tags: ["VBA", "Excel", "Automation", "Process Improvement"],
    },
  ];

  const additionalProductWork = [
    {
      title: "Competitive Intelligence & Product Positioning",
      text:
        "Researched climate-risk and property-impact solutions to understand competitor capabilities, product differentiation, market positioning, and opportunities for clearer go-to-market messaging.",
    },
    {
      title: "Discovery Center 2.0",
      text:
        "Contributed to broader Discovery Center initiatives involving visualization concepts, client engagement experiences, product demonstrations, data storytelling, and launch-readiness discussions.",
    },
    {
      title: "Cross-Functional Product Discovery",
      text:
        "Built relationships across Product, Capital Markets, Analytics, Data Solutions, Economics, and client-facing teams to better understand customer needs and how different parts of the business work together.",
    },
  ];

  const involvement = [
    {
      title: "Multicultural Association of Business Students",
      role: "President",
      logo: mabsLogo,
      details:
        "Led professional development, mentorship, and community-building initiatives within Mays Business School.",
    },
    {
      title: "Aggie Women in Business",
      role: "Member Development Committee",
      logo: awibLogo,
      details:
        "Helped organize volunteer events, mentorship initiatives, and professional development programming.",
    },
    {
      title: "Sikh Student Association",
      role: "President",
      logo: ssaLogo,
      details:
        "Planned cultural programming, promoted Sikh awareness, and worked with outside organizations to create meaningful events for students.",
    },
    {
      title: "Seva Daan",
      role: "Committee Member",
      logo: sevaLogo,
      details:
        "Supported nonprofit efforts focused on meal donation, fundraising, and community outreach for homeless shelters across DFW.",
    },
  ];

  const skillGroups = [
    {
      title: "Product & Discovery",
      items: [
        "Product Discovery",
        "Stakeholder Interviews",
        "User Research",
        "Requirements Gathering",
        "Wireframing",
        "Prototyping",
        "Market Analysis",
        "Product Strategy",
        "Competitive Intelligence",
      ],
    },
    {
      title: "Data & Analytics",
      items: [
        "SQL",
        "Excel",
        "VBA",
        "Power BI",
        "Tableau",
        "Data Analysis",
        "Data Cleaning",
        "Data Transformation",
        "Data Visualization",
      ],
    },
    {
      title: "Business & Communication",
      items: [
        "Business Analysis",
        "Process Improvement",
        "Root Cause Analysis",
        "Stakeholder Communication",
        "Cross-Functional Collaboration",
        "Executive Presentations",
        "Data Storytelling",
        "Problem Solving",
      ],
    },
    {
      title: "Tools & Technology",
      items: [
        "Python",
        "HTML",
        "AWS",
        "PowerPoint",
        "Microsoft Access",
        "Word",
        "C#",
      ],
    },
  ];

  const interests = [
    {
      title: "Cooking",
      text:
        "I love trying new recipes and putting my own spin on dishes. Cooking is one of my favorite ways to slow down and be creative. These Ras Malai cupcakes are one of my favorite recent creations.",
      image: cookingImg,
    },
    {
      title: "Reading",
      text:
        "I am a big reader, especially when it comes to fantasy, historical fiction, and personal growth. I read 52 books in 2025, so there is a very good chance you will find me with a book nearby.",
      image: readingImg,
    },
    {
      title: "Photography",
      text:
        "I love capturing places and moments through photos and videos, especially while traveling. This photo is from Isla Mujeres, Mexico, and I loved being able to capture the colors and energy of the island.",
      image: photographyImg,
    },
  ];

  const videos = [
    {
      title: "New York",
      text:
        "New York had always been on my bucket list, so finally getting to visit felt really special. We did all the touristy things, explored the city, and honestly ate way too much food. It was one of those trips that was fun from beginning to end and is definitely something I will always remember.",
      file: nyVideo,
    },
    {
      title: "Punjab, India",
      text:
        "As the daughter of immigrant parents, staying connected to my roots has always been important to me. We visited Punjab almost every summer growing up, and over time it became a place that feels like home to me too. This video brings together some of my favorite memories from a place that will always mean a lot to me.",
      file: punjabVideo,
    },
  ];

  return (
    <div className="site-shell">
      <div className="ambient-orb orb-one"></div>
      <div className="ambient-orb orb-two"></div>
      <div className="ambient-orb orb-three"></div>

      <div className="site-container">
        <nav className="navbar">
          <a href="#top" className="brand">
            <span className="brand-mark">HK</span>
            <span>
              <small>Portfolio</small>
              Harleen Kaur
            </span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#leadership">Leadership</a>
            <a href="#skills">Skills</a>
            <a href="#recommendations">Recommendations</a>
            <a href="#outside">Outside of Work</a>
          </div>

          <a href="#contact" className="nav-cta">
            Let’s Connect
          </a>
        </nav>

        <main id="top">
          <section className="hero reveal">
            <div className="hero-copy">
              <div className="eyebrow-pill">
                Texas A&M MIS Graduate · Product · Business Analysis
              </div>

              <h1>
                Hi, I’m Harleen.
                <span>
                  I like building useful things with data, technology, and
                  creativity.
                </span>
              </h1>

              <p className="hero-description">
                I’m a recent Texas A&M graduate with a degree in Management
                Information Systems and experience across business analysis,
                process improvement, data, and product discovery. I’m especially
                interested in work at the intersection of business and
                technology—where I can understand a problem, bring structure to
                it, and help build something useful.
              </p>

              <div className="hero-actions">
                <a href="#work" className="button button-primary">
                  Explore My Work
                  <span>↗</span>
                </a>

                <a
                  href="/HarleenKaur_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary"
                >
                  View Resume
                </a>
              </div>

              <div className="hero-highlights">
                <div>
                  <strong>Product</strong>
                  <span>Discovery & Strategy</span>
                </div>
                <div>
                  <strong>Data</strong>
                  <span>Analysis & Storytelling</span>
                </div>
                <div>
                  <strong>People</strong>
                  <span>Leadership & Collaboration</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="portrait-frame">
                <div className="portrait-glow"></div>

                <img
                  src={headshot}
                  alt="Harleen Kaur"
                  className="hero-headshot"
                />

                <div className="floating-note floating-note-top">
                  <span className="note-dot"></span>
                  Based in Dallas, TX
                </div>

                <div className="floating-note floating-note-bottom">
                  <span>✦</span>
                  Curious by nature
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="section reveal">
            <div className="section-kicker">About Me</div>

            <div className="about-grid">
              <div>
                <h2 className="section-heading">
                  I’m most interested in the space where business, technology,
                  and people come together.
                </h2>
              </div>

              <div className="about-copy">
                <p>
                  I have had the opportunity to work across IT support, process
                  improvement, business analysis, and product. Those experiences
                  helped me realize that I enjoy work that combines analytical
                  thinking with communication, creativity, and collaboration.
                </p>

                <p>
                  At Cotality, that has meant everything from SQL and VBA-driven
                  reporting automation to stakeholder interviews, product
                  discovery, wireframing, competitive research, and executive
                  storytelling.
                </p>

                <p>
                  Outside of work, leadership and community are also a big part
                  of who I am. I have loved being involved in organizations that
                  gave me the chance to mentor others, build community, and
                  create experiences that bring people together.
                </p>
              </div>
            </div>
          </section>

          <section id="experience" className="section reveal">
            <div className="section-kicker">Experience</div>

            <div className="section-heading-row">
              <h2 className="section-heading">
                A career story that keeps expanding.
              </h2>

              <p>
                Each experience has helped me understand a different side of how
                technology supports people, processes, and products.
              </p>
            </div>

            <div className="experience-stack">
              {experience.map((company) => (
                <article className="experience-card" key={company.company}>
                  <div className="company-column">
                    <div className="company-logo-wrap">
                      <img src={company.logo} alt={`${company.company} logo`} />
                    </div>

                    <div>
                      <h3>{company.company}</h3>
                      <p>{company.location}</p>
                    </div>
                  </div>

                  <div className="roles-column">
                    {company.roles.map((role, index) => (
                      <div className="role" key={`${company.company}-${role.title}`}>
                        <div className="role-timeline">
                          <span className="timeline-dot"></span>
                          {index !== company.roles.length - 1 && (
                            <span className="timeline-line"></span>
                          )}
                        </div>

                        <div className="role-content">
                          <div className="role-heading">
                            <div>
                              <h4>{role.title}</h4>
                              <p>
                                {role.type} · {role.dates}
                              </p>
                            </div>
                          </div>

                          <p className="role-description">{role.description}</p>

                          <div className="role-highlights">
                            {role.highlights.map((highlight) => (
                              <div className="role-highlight" key={highlight}>
                                <span>→</span>
                                <p>{highlight}</p>
                              </div>
                            ))}
                          </div>

                          <div className="tag-row">
                            {role.tags.map((tag) => (
                              <span className="tag" key={tag}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="work" className="section reveal">
            <div className="section-kicker">Featured Work</div>

            <div className="section-heading-row">
              <h2 className="section-heading">
                A few projects that shaped how I think.
              </h2>

              <p className="confidentiality-note">
                Project details are intentionally kept high-level to respect
                company confidentiality.
              </p>
            </div>

            <div className="featured-project">
              <div className="featured-project-number">01</div>

              <div className="featured-project-content">
                <p className="project-eyebrow">{projects[0].eyebrow}</p>

                <h3>{projects[0].title}</h3>
                <p className="project-subtitle">{projects[0].subtitle}</p>

                <div className="project-story-grid">
                  <div>
                    <span className="story-label">The opportunity</span>
                    <p>{projects[0].problem}</p>
                  </div>

                  <div>
                    <span className="story-label">What I worked on</span>
                    <p>{projects[0].work}</p>
                  </div>

                  <div>
                    <span className="story-label">The experience</span>
                    <p>{projects[0].outcome}</p>
                  </div>

                  <div>
                    <span className="story-label">What I learned</span>
                    <p>{projects[0].learned}</p>
                  </div>
                </div>

                <div className="tag-row">
                  {projects[0].tags.map((tag) => (
                    <span className="tag tag-light" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="featured-project-art">
                <div className="art-card art-card-one">
                  <span>01</span>
                  <strong>Discover</strong>
                </div>

                <div className="art-card art-card-two">
                  <span>02</span>
                  <strong>Design</strong>
                </div>

                <div className="art-card art-card-three">
                  <span>03</span>
                  <strong>Tell the Story</strong>
                </div>
              </div>
            </div>

            <div className="project-grid">
              {projects.slice(1).map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card-top">
                    <span>0{index + 2}</span>
                    <p>{project.eyebrow}</p>
                  </div>

                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>

                  <div className="project-section">
                    <strong>Problem</strong>
                    <p>{project.problem}</p>
                  </div>

                  <div className="project-section">
                    <strong>What I worked on</strong>
                    <p>{project.work}</p>
                  </div>

                  <div className="project-outcome">
                    <strong>Why it mattered</strong>
                    <p>{project.outcome}</p>
                  </div>

                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="additional-work">
              <div className="additional-work-heading">
                <span>More Product Exposure</span>
                <h3>Beyond my core project</h3>
              </div>

              <div className="additional-work-grid">
                {additionalProductWork.map((item) => (
                  <article className="small-work-card" key={item.title}>
                    <span className="small-work-icon">↗</span>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="leadership" className="section reveal">
            <div className="section-kicker">Leadership & Community</div>

            <div className="section-heading-row">
              <h2 className="section-heading">
                Some of my most meaningful experiences happened outside the
                classroom.
              </h2>

              <p>
                Leadership taught me how to communicate, listen, mentor, and
                build community around a shared purpose.
              </p>
            </div>

            <div className="leadership-grid">
              {involvement.map((item) => (
                <article className="leadership-card" key={item.title}>
                  <div className="leadership-logo">
                    <img src={item.logo} alt={`${item.title} logo`} />
                  </div>

                  <div>
                    <p className="leadership-role">{item.role}</p>
                    <h3>{item.title}</h3>
                    <p>{item.details}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="section reveal">
            <div className="skills-panel">
              <div className="skills-intro">
                <div className="section-kicker">Skills</div>
                <h2 className="section-heading">
                  A mix of technical, analytical, product, and people skills.
                </h2>
                <p>
                  I like being able to understand the data, understand the
                  business problem, and communicate the story behind both.
                </p>
              </div>

              <div className="skills-grid">
                {skillGroups.map((group) => (
                  <article className="skill-group" key={group.title}>
                    <h3>{group.title}</h3>

                    <div className="skill-pills">
                      {group.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="recommendations" className="section reveal">
            <div className="section-kicker">Recommendations</div>

            <div className="section-heading-row">
              <h2 className="section-heading">
                What it’s like to work with me.
              </h2>

              <p>
                I’m grateful for the managers and teammates who have taken the
                time to share feedback on my work and growth.
              </p>
            </div>

            <article className="recommendation-card">
              <div className="quote-mark">“</div>

              <div className="recommendation-main">
                <blockquote>
                  Harleen consistently demonstrates a strong commitment to
                  quality, professionalism, and continuous improvement. Her
                  attention to detail, thoroughness, and ability to work
                  independently make her a highly dependable team member.
                </blockquote>

                <div className="recommendation-person">
                  <div className="recommendation-avatar">VB</div>

                  <div>
                    <strong>Vanessa Brody</strong>
                    <span>
                      Professional Transformation Specialist · Cotality
                    </span>
                    <small>Former Manager</small>
                  </div>
                </div>
              </div>

              <div className="recommendation-impact">
                <p>Impact Highlight</p>

                <strong>
                  “What was previously a manual process requiring approximately
                  three days was reduced to less than 30 minutes.”
                </strong>

                <span>
                  Manager feedback on a month-end reporting automation project.
                </span>
              </div>
            </article>
          </section>

          <section id="outside" className="section reveal">
            <div className="section-kicker">Outside of Work</div>

            <div className="section-heading-row">
              <h2 className="section-heading">A little more about me.</h2>

              <p>
                The things I do outside of work keep me creative, curious, and
                connected to the people and places I care about.
              </p>
            </div>

            <div className="interest-grid">
              {interests.map((interest) => (
                <article className="interest-card" key={interest.title}>
                  <div className="interest-image-wrap">
                    <img src={interest.image} alt={interest.title} />
                  </div>

                  <div className="interest-content">
                    <h3>{interest.title}</h3>
                    <p>{interest.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="travel-heading">
              <span>Travel Diaries</span>
              <h3>Some memories I wanted to keep.</h3>
            </div>

            <div className="video-grid">
              {videos.map((video) => (
                <article className="video-card" key={video.title}>
                  <div className="video-wrap">
                    <video controls preload="metadata">
                      <source src={video.file} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="video-copy">
                    <h3>{video.title}</h3>
                    <p>{video.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="section reveal">
            <div className="contact-card">
              <div>
                <p className="contact-kicker">Contact</p>

                <h2>
                  I’m always open to learning, connecting, and hearing new
                  perspectives.
                </h2>

                <p>
                  Thank you for taking the time to learn a little about me and
                  explore my work. If you would like to connect, ask a question,
                  or just say hi, I would love to hear from you.
                </p>
              </div>

              <div className="contact-actions">
                <a
                  href="mailto:harleen.khakh555@gmail.com"
                  className="contact-button contact-button-light"
                >
                  Email Me
                </a>

                <a
                  href="https://www.linkedin.com/in/harleenkaurk05/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  LinkedIn
                </a>

                <a
                  href="/HarleenKaur_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  Resume
                </a>
              </div>
            </div>
          </section>

          <footer className="footer">
            <p>Designed & built by Harleen Kaur.</p>
            <a href="#top">Back to top ↑</a>
          </footer>
        </main>
      </div>
    </div>
  );
}