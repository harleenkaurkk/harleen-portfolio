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
    const revealElements = document.querySelectorAll(".reveal");

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

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const experience = [
    {
      company: "Cotality",
      logo: cotalityLogo,
      logoClass: "cotality-logo-image",
      location: "Texas",
      roles: [
        {
          title: "R&D Product Analyst Intern",
          type: "Internship",
          dates: "June 2026 – August 2026",
          description:
            "Worked across product discovery, experience design, competitive research, and data storytelling for Cotality's Discovery Center.",
          bullets: [
            "Led discovery and requirements gathering across Capital Markets, Product, Analytics, Economics, and other cross-functional teams.",
            "Designed and prototyped a new Capital Markets affordability experience focused on translating complex housing and economic data into an intuitive client experience.",
            "Collaborated with UX to translate product concepts into wireframes, user journeys, and interactive prototypes.",
            "Conducted competitive intelligence research for climate-risk and property-impact solutions.",
            "Presented product concepts, research, and recommendations to product leaders, executives, and cross-functional stakeholders.",
          ],
          skills: [
            "Product Discovery",
            "User Research",
            "Stakeholder Interviews",
            "Requirements Gathering",
            "Wireframing",
            "Prototyping",
            "Product Strategy",
            "Competitive Research",
            "Executive Presentations",
          ],
        },
        {
          title: "Associate Professional Business Analyst",
          type: "Business Analysis",
          dates: "September 2025 – June 2026",
          description:
            "Supported Funds Management operations through business analysis, data reporting, process improvement, and technical automation.",
          bullets: [
            "Worked with SQL and internal databases to extract, validate, transform, and organize data for internal and client-facing reporting.",
            "Supported the centralization of reporting data by helping refine queries, business rules, and data-quality processes.",
            "Built VBA-driven reporting automation to reduce repetitive manual work and improve turnaround time.",
            "Created dashboards and structured reporting tools that gave stakeholders clearer visibility into operational activity.",
          ],
          skills: [
            "SQL",
            "Excel",
            "VBA",
            "Business Analysis",
            "Data Transformation",
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
            "Supported Funds Management by analyzing workflows, identifying inefficiencies, and helping develop more structured approaches to reporting and process improvement.",
          bullets: [
            "Analyzed operational workflows and recurring process issues.",
            "Built reporting dashboards and organized operational data for analysis.",
            "Queried internal databases using SQL.",
            "Worked with business analysts and cross-functional partners to explore modernization and automation opportunities.",
          ],
          skills: [
            "SQL",
            "Excel",
            "Dashboard Development",
            "Process Analysis",
            "Data Analysis",
            "Business Reporting",
          ],
        },
      ],
    },
    {
      company: "Texas A&M Technology Services",
      logo: tamuLogo,
      logoClass: "tamu-logo-image",
      location: "College Station, Texas",
      roles: [
        {
          title: "Student Technician",
          type: "Part-time",
          dates: "January 2024 – August 2024",
          description:
            "Provided technical support for the Biomedical and Industrial Systems Department at Texas A&M University.",
          bullets: [
            "Supported faculty, students, and staff with hardware, software, and network-related issues.",
            "Reimaged and configured devices for academic and research use.",
            "Helped train new staff on troubleshooting procedures and technical tasks.",
            "Supported reliable day-to-day technology operations across the department.",
          ],
          skills: [
            "IT Support",
            "Technical Troubleshooting",
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
      number: "01",
      color: "violet",
      visual: "affordability",
      category: "Product Discovery + Experience Design",
      title: "Capital Markets Affordability Experience",
      subtitle:
        "Turning complex housing and economic data into an intuitive product experience.",
      importance:
        "Housing affordability is influenced by multiple factors, including home prices, mortgage rates, household income, and local market conditions. The opportunity was to make those relationships easier for Capital Markets clients to explore and understand.",
      contribution:
        "I helped lead product discovery for the experience. I met with subject-matter experts and stakeholders across Capital Markets, Analytics, Economics, and Product to understand client needs, gather requirements, and define the product story.",
      execution:
        "I researched affordability methodologies, evaluated how different variables could be communicated visually, collaborated with UX on wireframes and prototypes, and helped design an experience that allowed users to move from national views into state and metro-level markets.",
      impact:
        "The work became a central part of the Capital Markets Discovery Center concept and gave me experience taking a product from discovery and stakeholder research through prototyping, storytelling, and executive presentation.",
      tools: [
        "Product Discovery",
        "Stakeholder Research",
        "Wireframing",
        "UX Collaboration",
        "Prototyping",
        "Data Storytelling",
      ],
    },
    {
      number: "02",
      color: "mint",
      visual: "dashboard",
      category: "Business Intelligence + Reporting",
      title: "Funds Management Dashboard",
      subtitle:
        "Modernizing how operational information was organized and communicated.",
      importance:
        "Important operational information existed across multiple reporting processes and sources. Bringing that information into a more structured visual experience could make reporting easier to interpret and more useful for decision-making.",
      contribution:
        "I worked with business stakeholders to understand what information mattered most, how existing reports were being used, and where reporting processes could be simplified or modernized.",
      execution:
        "I helped design interactive reporting views, organized business data into clearer categories, worked with SQL and Excel-based reporting processes, and explored opportunities to move traditional spreadsheet reporting toward more scalable business-intelligence approaches.",
      impact:
        "The work improved visibility into operational activity and helped demonstrate how dashboarding and structured reporting could make complex information easier for stakeholders to consume.",
      tools: [
        "SQL",
        "Excel",
        "Dashboard Design",
        "Business Intelligence",
        "Data Visualization",
        "Stakeholder Analysis",
      ],
    },
    {
      number: "03",
      color: "coral",
      visual: "analysis",
      category: "Data Analysis + Root Cause Analysis",
      title: "Returns & Refunds Analysis",
      subtitle:
        "Using operational data to understand recurring issues and identify patterns.",
      importance:
        "Returns and refunds were occurring across operational workflows, but understanding why they occurred required connecting data from multiple sources and examining how different processes interacted.",
      contribution:
        "I helped investigate the relationship between refunded checks and related operational work, cleaned and organized data, and worked with teammates to understand the underlying business rules behind the trends we were seeing.",
      execution:
        "I analyzed a large dataset, standardized inconsistent fields, grouped recurring errors and patterns, and helped translate technical findings into business-level insights that could support root-cause discussions.",
      impact:
        "The analysis helped clarify recurring drivers, supported conversations around tighter synchronization between processes, and became part of a larger effort to create more standardized and reliable reporting data.",
      tools: [
        "Data Analysis",
        "Data Cleaning",
        "Root Cause Analysis",
        "Excel",
        "Business Logic",
        "Reporting",
      ],
    },
    {
      number: "04",
      color: "gold",
      visual: "automation",
      category: "Automation + Process Improvement",
      title: "Business Process Automation",
      subtitle:
        "Reducing repetitive reporting work through technical automation.",
      importance:
        "Recurring month-end reporting required significant manual effort, creating long turnaround times and taking time away from higher-value analytical work.",
      contribution:
        "I worked to understand the existing process, underlying data requirements, reporting logic, and business rules before developing an automated solution.",
      execution:
        "I built VBA-driven reporting automation, validated the underlying data, refined reporting logic, and tested outputs to ensure the automated process remained accurate and reliable.",
      impact:
        "For one major month-end reporting process, work that previously required approximately three days was reduced to less than 30 minutes—improving efficiency, turnaround time, and overall client service.",
      tools: [
        "VBA",
        "Excel",
        "Automation",
        "Process Improvement",
        "Data Validation",
        "Business Requirements",
      ],
    },
  ];

  const recommendations = [
    {
      initials: "JC",
      name: "Justin Cribbs",
      title:
        "Process Engineer 2 · Johns Manville Commercial Roofing Systems",
      relationship: "Former colleague at CoreLogic / Cotality",
      color: "violet",
      highlight:
        "She was especially effective at connecting technical business terminology to business logic and practical applications.",
      full: `I worked together with Harleen as a Business Intelligence Analyst at Corelogic d.b.a. Cotality on three projects:

1. Explore the relationship between refunded checks and work conducted to ensure mortgages were in good standing to analyze root causes and explore tighter synchronization loops.

2. Examine potential modernization aspects of the Due Book Reporting from Brownfield Excel to Greenfield Business Intelligence Dashboards or similar tools.

3. Our largest effort expanded on the first project by creating a standardized reporting source from several coarser input sources, moving data from bronze to silver and potentially gold-layer ETL. This work spanned approximately six months because of its depth and the need to ensure business rules, data quality, and fitness for both granular business use and analytical aggregates.

During this time, I observed Harleen display curiosity, aptitude for data work, patience, excellent communication and translation skills, and genuine warmth and empathy. She was especially effective at connecting technical business terminology to business logic and practical applications. While she was learning new material, she was eager to ask questions, jump in, and contribute to the success of each project. Her organizational acuity and presentation skills allowed her to communicate concisely and effectively with a range of stakeholders. I strongly recommend Harleen for data or product management roles, and I believe she would be a strong addition to your company.

Respectfully,
Justin Cribbs`,
    },
    {
      initials: "JM",
      name: "Jeffrey MacCarron",
      title: "Senior Director, Operations; Consultant",
      relationship: "Colleague & Coworker",
      color: "blue",
      highlight:
        "She combines technical competence, analytical thinking, communication skills, and a strong work ethic.",
      full: `To Whom It May Concern,

I am pleased to provide this letter of recommendation for Harleen Kaur. As a colleague and coworker, I have had the opportunity to observe Harleen’s professional capabilities, work ethic, and commitment to delivering high-quality results.

Harleen demonstrates a balanced combination of technical expertise, analytical ability, and strong interpersonal skills. One of her greatest strengths is her attentive communication style. She is an excellent listener who takes the time to understand user requirements and accurately interpret business needs. Equally important, she communicates clearly and effectively with individuals at multiple levels of an organization, enabling productive collaboration and successful outcomes.

Harleen has a strong appreciation for the value of data-driven decision-making and understands how effective dashboarding and reporting can simplify the communication of complex information. She is skilled at working with large datasets sourced from multiple systems and translating that information into meaningful insights that support business objectives.

In every assignment, Harleen consistently brings a positive, can-do attitude and a genuine desire to achieve the correct outcome. She works exceptionally well both as part of a team and independently, demonstrating reliability, initiative, and professionalism in either environment.

From a technical perspective, Harleen is proficient in a variety of tools and technologies that support advanced data analysis and business intelligence initiatives. Her skills include complex Microsoft Excel functions and modeling, Python, SQL, SharePoint, and a broad range of Microsoft products. She leverages these capabilities effectively to solve problems, analyze information, and support organizational goals.

Based on my experience working with her, I am confident that Harleen Kaur would be a valuable asset to any organization. She combines technical competence, analytical thinking, communication skills, and a strong work ethic in a manner that consistently contributes to success.

I recommend Harleen without reservation and believe she will excel in any role she chooses to pursue.

Sincerely,

Jeffrey MacCarron
Senior Director, Operations; Consultant`,
    },
    {
      initials: "VB",
      name: "Vanessa Brody",
      title: "Professional Transformation Specialist · Cotality",
      relationship: "Manager",
      color: "coral",
      highlight:
        "What was previously a manual process requiring approximately three days to complete was reduced to less than 30 minutes.",
      full: `I have had the pleasure of working with Harleen in her role supporting the centralization of refund processing through a centralized repository. Harleen played an integral role in developing and refining the queries required to capture critical data used for internal and external client reporting, trend analysis, and defect identification. She was instrumental in validating and scrubbing data to ensure reporting accuracy and to provide customers with clear, meaningful insights. One of her most notable accomplishments was automating month-end reporting for three of our largest clients. What was previously a manual process requiring approximately three days to complete was reduced to less than 30 minutes, significantly improving efficiency, turnaround times, and overall client service.

Harleen consistently demonstrates a strong commitment to quality, professionalism, and continuous improvement. She takes the time to fully understand business requirements, available data sources, and project objectives before developing solutions. She is proactive in seeking clarification when needed and leverages her technical skills to deliver effective and reliable results. Her attention to detail, thoroughness, and ability to work independently with minimal supervision make her a highly dependable team member. At the same time, she collaborates effectively in team environments and always approaches her work with a positive and professional attitude. It has been a pleasure working alongside Harleen, and I am confident she will continue to excel in her future endeavors.

Vanessa Brody`,
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
        "Planned cultural programming, promoted Sikh awareness, and worked with outside organizations to create meaningful experiences for students.",
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
        "Product Strategy",
        "Market Analysis",
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
      title: "Technology",
      items: [
        "Python",
        "HTML",
        "AWS",
        "PowerPoint",
        "Microsoft Access",
        "SharePoint",
        "C#",
      ],
    },
  ];

  const interests = [
    {
      title: "Cooking",
      image: cookingImg,
      text:
        "I love trying new recipes and putting my own spin on dishes. Cooking is one of my favorite ways to slow down and be creative. These Ras Malai cupcakes are one of my favorite recent creations.",
    },
    {
      title: "Reading",
      image: readingImg,
      text:
        "I am a big reader, especially when it comes to fantasy, historical fiction, and personal growth. I read 52 books in 2025, so there is usually a book somewhere close by.",
    },
    {
      title: "Photography",
      image: photographyImg,
      text:
        "I love capturing places and moments through photos and videos, especially while traveling. This photo is from Isla Mujeres, Mexico, and I loved being able to capture the colors and energy of the island.",
    },
  ];

  const videos = [
    {
      title: "New York",
      file: nyVideo,
      text:
        "New York had always been on my bucket list, so finally getting to visit felt really special. We did all the touristy things, explored the city, and honestly ate way too much food. It was one of those trips that was fun from beginning to end and is definitely something I will always remember.",
    },
    {
      title: "Punjab, India",
      file: punjabVideo,
      text:
        "As the daughter of immigrant parents, staying connected to my roots has always been important to me. We visited Punjab almost every summer growing up, and over time it became a place that feels like home to me too. This video brings together some of my favorite memories from a place that will always mean a lot to me.",
    },
  ];

  function ProjectVisual({ type }) {
    if (type === "affordability") {
      return (
        <div className="concept-visual immersive-visual">
          <div className="visual-header">
            <span>CAPITAL MARKETS DISCOVERY CENTER</span>
            <span className="visual-status">Experience Concept</span>
          </div>

          <div className="discovery-screen">
            <div className="curved-screen-glow"></div>

            <div className="terrain terrain-one"></div>
            <div className="terrain terrain-two"></div>
            <div className="terrain terrain-three"></div>

            <div className="floating-map">
              <div className="usa-map-shape">
                <span className="map-state state-one"></span>
                <span className="map-state state-two"></span>
                <span className="map-state state-three"></span>
                <span className="map-state state-four"></span>
              </div>

              <div className="map-label">
                <small>EXPLORE</small>
                <strong>U.S. Affordability</strong>
              </div>
            </div>

            <div className="discovery-side-panel">
              <span>01</span>
              <strong>National View</strong>

              <span>02</span>
              <strong>Select State</strong>

              <span>03</span>
              <strong>Explore Metrics</strong>
            </div>
          </div>

          <div className="experience-path">
            <span>United States</span>
            <strong>→</strong>
            <span>State</span>
            <strong>→</strong>
            <span>Metro</span>
            <strong>→</strong>
            <span>Affordability Metrics</span>
          </div>
        </div>
      );
    }

    if (type === "dashboard") {
      return (
        <div className="concept-visual funds-dashboard-visual">
          <div className="visual-header">
            <span>FUNDS MANAGEMENT DASHBOARD</span>
            <span className="visual-status">Dashboard Concept</span>
          </div>

          <div className="client-selector">
            <span>CLIENT</span>
            <strong>Selected Client ▾</strong>
          </div>

          <div className="aging-card-grid">
            <div className="aging-card">
              <span>0–30 DAYS</span>
              <strong>$31.4K</strong>
              <small>56 items</small>
            </div>

            <div className="aging-card">
              <span>31–60 DAYS</span>
              <strong>$14.7K</strong>
              <small>17 items</small>
            </div>

            <div className="aging-card">
              <span>60+ DAYS</span>
              <strong>$28.8K</strong>
              <small>35 items</small>
            </div>
          </div>

          <div className="dashboard-two-column">
            <div className="dashboard-panel">
              <div className="panel-heading">
                <span>AGING DISTRIBUTION</span>
              </div>

              <div className="aging-donut">
                <div className="aging-donut-center">
                  <strong>108</strong>
                  <small>Total</small>
                </div>
              </div>

              <div className="legend-row">
                <span>
                  <i className="legend-dot dot-a"></i>
                  0–30
                </span>
                <span>
                  <i className="legend-dot dot-b"></i>
                  31–60
                </span>
                <span>
                  <i className="legend-dot dot-c"></i>
                  60+
                </span>
              </div>
            </div>

            <div className="dashboard-panel">
              <div className="panel-heading">
                <span>MONTH-TO-MONTH TREND</span>
              </div>

              <div className="trend-chart">
                <div className="trend-bar bar-one"></div>
                <div className="trend-bar bar-two"></div>
                <div className="trend-bar bar-three"></div>
                <div className="trend-bar bar-four"></div>
                <div className="trend-bar bar-five"></div>
                <div className="trend-bar bar-six"></div>
              </div>

              <div className="trend-labels">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>

          <div className="year-trend">
            <span>YEAR-TO-YEAR</span>

            <div className="year-line">
              <span className="year-point p1"></span>
              <span className="year-point p2"></span>
              <span className="year-point p3"></span>
              <span className="year-point p4"></span>
            </div>
          </div>
        </div>
      );
    }

    if (type === "analysis") {
      return (
        <div className="concept-visual returns-analysis-visual">
          <div className="visual-header">
            <span>RETURNS & REFUNDS ANALYSIS</span>
            <span className="visual-status">Analysis Concept</span>
          </div>

          <div className="analysis-summary">
            <div className="analysis-total">
              <small>TRANSACTIONS REVIEWED</small>
              <strong>150K+</strong>
            </div>

            <div className="analysis-split">
              <div>
                <span>Returns</span>
                <strong>74%</strong>
              </div>

              <div>
                <span>Refunds</span>
                <strong>21%</strong>
              </div>

              <div>
                <span>Other</span>
                <strong>5%</strong>
              </div>
            </div>
          </div>

          <div className="analysis-content-grid">
            <div className="root-cause-panel">
              <span className="analysis-label">
                ROOT CAUSE DISTRIBUTION
              </span>

              <div className="root-cause-list">
                <div>
                  <span>R1</span>
                  <div>
                    <i style={{ width: "88%" }}></i>
                  </div>
                  <strong>32%</strong>
                </div>

                <div>
                  <span>R2</span>
                  <div>
                    <i style={{ width: "67%" }}></i>
                  </div>
                  <strong>24%</strong>
                </div>

                <div>
                  <span>R5</span>
                  <div>
                    <i style={{ width: "52%" }}></i>
                  </div>
                  <strong>18%</strong>
                </div>

                <div>
                  <span>R10</span>
                  <div>
                    <i style={{ width: "39%" }}></i>
                  </div>
                  <strong>14%</strong>
                </div>

                <div>
                  <span>R11</span>
                  <div>
                    <i style={{ width: "28%" }}></i>
                  </div>
                  <strong>12%</strong>
                </div>
              </div>
            </div>

            <div className="client-pattern-panel">
              <span className="analysis-label">
                PATTERN CONCENTRATION
              </span>

              <div className="heatmap">
                {Array.from({ length: 30 }).map((_, index) => (
                  <span
                    key={index}
                    className={`heat-cell heat-${(index % 5) + 1}`}
                  ></span>
                ))}
              </div>

              <div className="heatmap-label">
                <span>Lower frequency</span>
                <span>Higher frequency</span>
              </div>
            </div>
          </div>

          <div className="analysis-footer">
            <span>Clean</span>
            <strong>→</strong>
            <span>Group</span>
            <strong>→</strong>
            <span>Analyze</span>
            <strong>→</strong>
            <span>Identify Root Cause</span>
          </div>
        </div>
      );
    }

    return (
      <div className="concept-visual repository-visual">
        <div className="visual-header">
          <span>CENTRALIZED REPORTING REPOSITORY</span>
          <span className="visual-status">Architecture Concept</span>
        </div>

        <div className="repository-layout">
          <div className="source-databases">
            <div className="database-node">
              <span>TABLE</span>
              <strong>Client</strong>
              <small>Fields A–F</small>
            </div>

            <div className="database-node">
              <span>VIEW</span>
              <strong>Funds</strong>
              <small>Fields G–L</small>
            </div>

            <div className="database-node">
              <span>TABLE</span>
              <strong>Refunds</strong>
              <small>Fields M–R</small>
            </div>

            <div className="database-node">
              <span>VIEW</span>
              <strong>History</strong>
              <small>Fields S–Z</small>
            </div>
          </div>

          <div className="repository-query-flow">
            <div className="flow-line line-a"></div>
            <div className="flow-line line-b"></div>
            <div className="flow-line line-c"></div>
            <div className="flow-line line-d"></div>

            <div className="sql-query-node">
              <span>SQL</span>
              <strong>Central Query</strong>
              <small>joins · logic · validation</small>
            </div>
          </div>

          <div className="central-view">
            <div className="view-heading">
              <span>CENTRALIZED VIEW</span>
              <strong>Reporting Repository</strong>
            </div>

            <div className="repository-table">
              <div>
                <span>Client</span>
                <span>Amount</span>
                <span>Status</span>
                <span>Aging</span>
              </div>

              <div>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </div>
        </div>

        <div className="repository-benefit">
          <div>
            <small>BEFORE</small>
            <strong>Multiple tables + views</strong>
          </div>

          <span className="benefit-arrow">→</span>

          <div>
            <small>AFTER</small>
            <strong>One reusable reporting source</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="site-shell">
      <div className="noise-overlay"></div>

      <div className="gradient-orb orb-violet"></div>
      <div className="gradient-orb orb-coral"></div>
      <div className="gradient-orb orb-mint"></div>

      <div className="site-container">
        <nav className="navbar">
          <a href="#top" className="brand">
            <span className="brand-symbol">HK</span>

            <span className="brand-text">
              <small>PORTFOLIO</small>
              Harleen Kaur
            </span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Work</a>
            <a href="#recommendations">Recommendations</a>
            <a href="#leadership">Leadership</a>
            <a href="#outside">Beyond Work</a>
          </div>

          <a href="#contact" className="nav-button">
            Connect
          </a>
        </nav>

        <main id="top">
          <section className="hero reveal">
            <div className="hero-copy">
              <div className="hero-label">
                <span></span>
                TEXAS A&M MIS GRADUATE
              </div>

              <h1>
                Hi, I’m Harleen.
                <span className="gradient-heading">
                  I like building useful things
                </span>
                with data, technology, and creativity.
              </h1>

              <p className="hero-description">
                I’m a recent Texas A&M graduate with experience across product
                discovery, business analysis, data, and process improvement. I
                enjoy understanding complex problems, bringing structure to
                them, and working with people across different areas to build
                solutions that are thoughtful, useful, and easy to understand.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-button">
                  Explore my work
                  <span>↗</span>
                </a>

                <a
                  href="/HarleenKaur_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  View résumé
                </a>
              </div>

              <div className="hero-mini-stats">
                <div>
                  <strong>Product</strong>
                  <span>Discovery · Design · Strategy</span>
                </div>

                <div>
                  <strong>Data</strong>
                  <span>Analysis · Reporting · Automation</span>
                </div>

                <div>
                  <strong>People</strong>
                  <span>Leadership · Collaboration · Storytelling</span>
                </div>
              </div>
            </div>

            <div className="hero-image-area">
              <div className="headshot-card">
                <div className="headshot-gradient"></div>

                <img
                  src={headshot}
                  alt="Harleen Kaur"
                  className="hero-headshot"
                />

                <div className="floating-chip chip-one">
                  <span>✦</span>
                  Product + Data
                </div>

                <div className="floating-chip chip-two">
                  <span className="green-dot"></span>
                  Dallas, TX
                </div>

                <div className="floating-chip chip-three">
                  Always learning ↗
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="section reveal">
            <div className="section-label">ABOUT</div>

            <div className="about-panel">
              <div className="about-heading">
                <h2>
                  I’m drawn to the space where
                  <span> business, technology, and people </span>
                  come together.
                </h2>
              </div>

              <div className="about-text">
                <p>
                  My experiences have allowed me to see problems from several
                  perspectives—from technical support and process improvement to
                  business analysis and product discovery.
                </p>

                <p>
                  What I enjoy most is understanding the bigger picture:
                  learning what people need, digging into the data behind a
                  problem, and helping turn those insights into something that
                  makes sense for the people who will actually use it.
                </p>

                <p>
                  I also care deeply about leadership, creativity, and community.
                  Some of the experiences that have shaped me most have happened
                  outside of a formal job description.
                </p>
              </div>
            </div>
          </section>

          <section id="experience" className="section reveal">
            <div className="section-label">EXPERIENCE</div>

            <div className="section-heading-row">
              <h2>A career story that keeps evolving.</h2>

              <p>
                Each role has given me a different perspective on how technology
                can support people, processes, and products.
              </p>
            </div>

            <div className="experience-list">
              {experience.map((company) => (
                <article
                  className="experience-card"
                  key={company.company}
                >
                  <div className="company-side">
                    <div className="company-logo">
                      <img
                        src={company.logo}
                        alt={`${company.company} logo`}
                        className={`company-logo-image ${company.logoClass}`}
                      />
                    </div>

                    <h3>{company.company}</h3>
                    <span>{company.location}</span>
                  </div>

                  <div className="role-list">
                    {company.roles.map((role, index) => (
                      <div className="role-item" key={role.title}>
                        <div className="role-marker">
                          <span></span>

                          {index !== company.roles.length - 1 && (
                            <div className="role-line"></div>
                          )}
                        </div>

                        <div className="role-body">
                          <div className="role-title-row">
                            <h4>{role.title}</h4>
                            <span>
                              {role.type} · {role.dates}
                            </span>
                          </div>

                          <p className="role-description">
                            {role.description}
                          </p>

                          <div className="bullet-grid">
                            {role.bullets.map((bullet) => (
                              <div
                                className="role-bullet"
                                key={bullet}
                              >
                                <span>↗</span>
                                <p>{bullet}</p>
                              </div>
                            ))}
                          </div>

                          <div className="tag-list">
                            {role.skills.map((skill) => (
                              <span key={skill}>{skill}</span>
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

          <section id="projects" className="section reveal">
            <div className="section-label">SELECTED WORK</div>

            <div className="section-heading-row">
              <h2>Four projects. Four different kinds of problems.</h2>

              <p>
                These examples are intentionally presented at a high level to
                protect confidential company information. The visuals are
                conceptual and do not represent actual company dashboards or
                data.
              </p>
            </div>

            <div className="projects-stack">
              {projects.map((project) => (
                <article
                  className={`project-showcase project-${project.color}`}
                  key={project.title}
                >
                  <div className="project-number">{project.number}</div>

                  <div className="project-content">
                    <p className="project-category">{project.category}</p>

                    <h3>{project.title}</h3>

                    <p className="project-subtitle">
                      {project.subtitle}
                    </p>

                    <div className="project-detail-grid">
                      <div>
                        <span className="detail-label">
                          Why it mattered
                        </span>
                        <p>{project.importance}</p>
                      </div>

                      <div>
                        <span className="detail-label">
                          My contribution
                        </span>
                        <p>{project.contribution}</p>
                      </div>

                      <div>
                        <span className="detail-label">
                          What I worked on
                        </span>
                        <p>{project.execution}</p>
                      </div>

                      <div>
                        <span className="detail-label">Impact</span>
                        <p>{project.impact}</p>
                      </div>
                    </div>

                    <div className="project-tools">
                      {project.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-visual-area">
                    <ProjectVisual type={project.visual} />

                    <p className="visual-caption">
                      Conceptual visual · no company data
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="recommendations"
            className="section reveal"
          >
            <div className="section-label">RECOMMENDATIONS</div>

            <div className="section-heading-row">
              <h2>What it’s like to work with me.</h2>

              <p>
                I’m grateful for the managers and colleagues who have taken the
                time to share their experiences working with me.
              </p>
            </div>

            <div className="recommendation-grid">
              {recommendations.map((recommendation) => (
                <article
                  className={`recommendation-card rec-${recommendation.color}`}
                  key={recommendation.name}
                >
                  <div className="recommendation-top">
                    <div className="rec-avatar">
                      {recommendation.initials}
                    </div>

                    <div>
                      <h3>{recommendation.name}</h3>
                      <p>{recommendation.title}</p>
                      <span>{recommendation.relationship}</span>
                    </div>
                  </div>

                  <div className="highlight-quote">
                    <span className="large-quote">“</span>
                    <p>{recommendation.highlight}</p>
                  </div>

                  <details className="full-recommendation">
                    <summary>
                      Read full recommendation
                      <span>+</span>
                    </summary>

                    <div className="recommendation-text">
                      {recommendation.full}
                    </div>
                  </details>
                </article>
              ))}
            </div>
          </section>

          <section id="leadership" className="section reveal">
            <div className="section-label">
              LEADERSHIP & COMMUNITY
            </div>

            <div className="section-heading-row">
              <h2>
                Some of my most meaningful experiences happened outside the
                classroom.
              </h2>

              <p>
                Leadership taught me how to listen, communicate, mentor, and
                create spaces where people feel connected.
              </p>
            </div>

            <div className="leadership-grid">
              {involvement.map((item) => (
                <article
                  className="leadership-card"
                  key={item.title}
                >
                  <div className="leadership-logo">
                    <img
                      src={item.logo}
                      alt={`${item.title} logo`}
                    />
                  </div>

                  <div>
                    <span>{item.role}</span>
                    <h3>{item.title}</h3>
                    <p>{item.details}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section reveal">
            <div className="skills-section">
              <div className="skills-heading">
                <div className="section-label light-label">
                  SKILLS
                </div>

                <h2>
                  Technical when I need to be.
                  <span> Human always.</span>
                </h2>

                <p>
                  I enjoy being able to understand the technical details,
                  connect them to a business need, and explain the story in a way
                  that makes sense to different audiences.
                </p>
              </div>

              <div className="skills-grid">
                {skillGroups.map((group) => (
                  <article
                    className="skill-card"
                    key={group.title}
                  >
                    <h3>{group.title}</h3>

                    <div className="skill-list">
                      {group.items.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="outside" className="section reveal">
            <div className="section-label">BEYOND WORK</div>

            <div className="section-heading-row">
              <h2>A little more about me.</h2>

              <p>
                Work is important to me, but so are the things that keep me
                creative, curious, and connected to who I am.
              </p>
            </div>

            <div className="interest-grid">
              {interests.map((interest) => (
                <article
                  className="interest-card"
                  key={interest.title}
                >
                  <div className="interest-image">
                    <img
                      src={interest.image}
                      alt={interest.title}
                    />
                  </div>

                  <div className="interest-copy">
                    <h3>{interest.title}</h3>
                    <p>{interest.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="travel-intro">
              <span>TRAVEL DIARIES</span>
              <h3>Some memories I wanted to keep.</h3>
            </div>

            <div className="video-grid">
              {videos.map((video) => (
                <article
                  className="video-card"
                  key={video.title}
                >
                  <video controls preload="metadata">
                    <source
                      src={video.file}
                      type="video/mp4"
                    />
                  </video>

                  <div>
                    <h3>{video.title}</h3>
                    <p>{video.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="section reveal">
            <div className="contact-panel">
              <div className="contact-glow"></div>

              <div>
                <span className="contact-label">
                  LET’S CONNECT
                </span>

                <h2>
                  I’m always open to learning,
                  <span> connecting, </span>
                  and hearing new perspectives.
                </h2>

                <p>
                  Thank you for taking the time to learn a little about me and
                  explore my work. If you have a question, want to connect, or
                  simply want to say hi, I would love to hear from you.
                </p>
              </div>

              <div className="contact-buttons">
                <a
                  href="mailto:harleen.khakh555@gmail.com"
                  className="contact-primary"
                >
                  Email me ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/harleenkaurk05/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  href="/HarleenKaur_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Résumé
                </a>
              </div>
            </div>
          </section>

          <footer className="footer">
            <span>Designed & built by Harleen Kaur.</span>
            <a href="#top">Back to top ↑</a>
          </footer>
        </main>
      </div>
    </div>
  );
}