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
      visual: "repository",
      category: "SQL + Data Centralization",
      title: "Returns & Refunds Repository",
      subtitle:
        "Connecting scattered data into one reusable reporting source.",
      importance:
        "Returns and refunds data was spread across separate database tables and views. Reporting required searching across sources and reconciling business rules before the data could be used reliably.",
      contribution:
        "I worked with Justin Cribbs, Jeff, and Vanessa to understand the available sources, clarify business requirements, and help consolidate the data into a centralized database view.",
      execution:
        "I helped develop and refine a large SQL query that joined multiple tables and views, applied business logic, and validated the resulting data for consistent reporting.",
      impact:
        "The centralized view created one reusable reporting source, opening the door to Tableau and other visualization tools, month-to-month and year-to-year trend analysis, and cleaner client-facing reporting.",
      tools: [
        "SQL", "Database Views", "Data Validation", "Business Logic",
        "Reporting", "Cross-Functional Collaboration",
      ],
    },
    {
      number: "04",
      color: "gold",
      visual: "automation",
      category: "Automation + Process Improvement",
      title: "Business Process Automation",
      subtitle:
        "Automating recurring month-end reporting with Python.",
      importance:
        "Recurring month-end reporting required significant manual effort, creating long turnaround times and taking time away from higher-value analytical work.",
      contribution:
        "I worked to understand the existing process, underlying data requirements, reporting logic, and business rules before developing an automated solution.",
      execution:
        "I used Python in VS Code to validate data, process reporting logic, and generate outputs. AI supported development by helping me troubleshoot and refine the code; I tested the results against the business rules to verify accuracy.",
      impact:
        "For one major month-end reporting process, work that previously required approximately three days was reduced to less than 30 minutes—improving efficiency, turnaround time, and overall client service.",
      tools: [
        "Python",
        "VS Code",
        "AI-Assisted Development",
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
              {/* Geographic outline: us-atlas 3 / U.S. Census boundaries; Albers USA projection. */}
              <svg className="affordability-us-map" viewBox="0 0 600 370" role="img" aria-label="United States map with state boundaries and Texas highlighted; Alaska and Hawaii shown as insets">
                <defs>
                  <linearGradient id="affordability-map-fill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#8f7cff" />
                    <stop offset="100%" stopColor="#64d7b5" />
                  </linearGradient>
                </defs>
                <path d="M414.1,290.1L416.3,289.6L416.3,289.3L416.9,289.7L416.6,290.1L416.2,289.9L415.5,290L414.7,290.2ZM490.2,274.9L490.4,275.1L490.4,276.3L490.7,277.3L490.6,277.6L491,277.8L491.3,278.9L491.6,280.1L493.2,284.3L493.9,285.6L494,286.2L495.6,289.4L497.4,292.4L499,294.7L502.4,298.8L504.3,300.8L504.6,301.5L505.1,302.3L504.5,303.1L504.4,303.7L504.5,304.7L505,306.1L505.4,307.1L506.3,308.6L508.2,311.3L509.2,313L509.5,313.9L509.8,314.2L510.5,315.7L511.5,317.2L512,317.9L512.4,318.9L513.1,320L514.3,322.7L514.7,325.3L514.7,327.3L514.9,329.6L514.9,330L515.1,333.2L515.4,335.1L515.4,336L515.3,336.9L515.3,337.4L515,337.2L515.1,336.6L514.8,336.4L514.2,336.8L514,338L513.7,338.2L513.8,338.9L513.5,339.4L513.6,340.3L513.9,340.6L513.9,341.1L514.2,341.3L513.9,341.9L513.6,342.1L513.7,342.6L514.5,342.1L515.2,339.8L515.4,339.3L515.5,339.7L515.3,340.7L514.2,343.4L514,344.3L513.1,345.5L511.9,347.3L511,348.2L510.9,348L512.1,346.5L512.6,345.9L512.8,345.3L512.8,344.4L513,344L512.7,343.8L512.3,344L512,343.8L511.7,344L510.3,344.5L509.8,345L509.5,345.1L508.6,344.8L507.9,345L507.6,345.5L506.5,345.9L505.6,346.1L504.8,345.7L504.3,345L504.2,344.1L504.4,343.4L504.7,343.4L504.5,342.9L503.8,341.9L503.3,341.5L503.3,341.1L502.9,340.4L502.3,340.2L502,339.3L501.7,339.1L501.3,339.3L500.7,338.3L499.6,338.1L499.6,337.9L498.6,337.7L497.6,337.2L497.2,337.4L496.9,337.9L496,336.6L495.2,335.1L494.7,333.2L494.2,332L493.8,331.5L492.5,330.4L492,330.4L491.9,329.8L491.3,329.6L491.4,330.3L490.9,330.5L490.7,329.8L490.2,328.6L489.6,328.1L489.7,327.8L490.2,327.8L490.7,328.2L490.9,326.3L490.7,325.4L490.3,325.3L490.2,324.9L490.6,324.7L490.3,324.4L489.8,324.5L489.7,324.9L489.2,325.1L489.8,326.7L489.5,326.9L488.7,327.2L488.5,327.8L488.4,326.9L488.1,326.4L487.2,325.5L485.9,323.7L485.3,322.7L484.3,321.3L483,319.8L482.3,319.3L482.1,318.6L481.5,318L482,318.2L482.1,318.5L482.6,318.1L483,317.2L483.4,316.8L483.8,315.7L484.3,315.2L484.1,315L484.7,314.6L485,313.6L484.7,312.8L483.7,312.7L484.1,313.9L483.2,313.7L483.4,313.3L483.2,312.6L483,312.2L481.3,311.6L481.4,312.4L481,312.7L481.5,313.1L482.2,313.1L482.8,314.2L482.5,314.7L482.6,315.4L482.4,315.7L481.6,315.9L481.5,316.3L481.9,316.7L481.5,317.1L481.3,316.6L481.3,315.7L480.6,314.9L480.1,314.6L479.7,314L479.7,312L479.4,311.3L479,309.5L479.3,309.4L479.5,310.4L479.8,311.4L480.2,311.4L479.8,309.8L480.1,309.3L480,308.8L480.3,308.3L480.2,307.9L480.5,307.3L480.4,306.9L480.7,306.3L480.6,305.3L480.7,304.3L480.3,303.6L480.3,303L479.7,302.7L479.8,302.3L479.3,301.1L479.7,300.3L478.7,299.2L478.7,298.9L478.3,298.3L477.9,298.3L478.1,297.9L477.9,297.4L477.6,297.3L475.7,297.3L475.4,297.9L475.1,298L474.6,296.9L474.7,296.4L474.1,296.1L473.6,296.1L473.4,295.4L473,294.8L472.5,294.4L471.9,294.4L471.6,293.9L470.6,293.5L470.4,292.3L470.1,291.6L469.6,291.5L469.2,291.2L468.6,291.1L468,290.4L468,290L467.6,289.6L467.3,289.1L466.6,288.7L465.4,288.1L463.7,287.5L462.6,286.8L462.1,286.9L461.1,287.4L459.8,287.2L459.9,287.6L458.9,288.5L459.4,289.6L459.3,289.9L458.9,290.1L458.3,290L458.1,289.7L457.1,290.1L456,291L453.5,292.8L453.3,292.8L453.5,292.3L453.1,292.2L452.9,292.7L452.3,293.2L450.8,293.4L451.4,293.8L451.6,294.3L452.2,294.4L453.4,293.7L454.5,293.1L455.5,292L455.6,292.2L454.8,293.2L453.7,293.8L452.4,294.7L451.9,294.9L451.4,294.6L450.8,294.4L449.8,294L449,294L448.3,294.4L447.7,293.4L447.3,292.1L447.6,291.6L447.7,292.7L448.1,293.7L448.4,293.9L448.8,293.5L448.7,292.4L447.9,291.3L447.1,290.7L446.4,290.6L445.7,290.3L445,289.5L443.8,289.1L442.9,288.4L441.1,287.6L439.1,286.9L436.7,286.4L435.4,286.3L432.9,286.3L431.6,286.5L429.8,287L427.2,287.8L425.9,288.1L425.6,288L423.1,288.8L421.7,289.3L420.1,289.7L417.8,289.9L418.5,289.4L419,289.7L420.4,289.2L420.5,288.9L419.8,288.4L419.5,287.9L418.7,287.5L418.3,286.5L418.6,285.6L418.4,284.8L418.1,284.3L417.2,284L416.7,284.5L416.8,285L416.5,285.6L416.6,286.1L416.3,286.5L416.4,288.1L416.2,288.8L415.6,288.9L415.6,288.5L414.7,288.1L414.2,288.4L413.9,288.1L413.2,288.4L413.1,288.8L412.8,288.7L412.4,289.1L411.7,288.9L411.2,289.1L411,288.8L410.2,288.8L409.5,289.1L408.5,288.6L408.5,288.9L407.6,288.6L406.7,288.7L405.5,289.1L404.4,289.6L403.2,290.1L403.3,289.4L402.9,289.1L402.4,289.5L402.8,289.6L402.8,290.1L401.9,290.8L401.6,291.7L401.2,291.6L400.7,291.8L400.1,292.3L399.7,292.2L399.1,292.9L399,293.3L398.6,293.5L398.7,294L397.6,293.9L397.2,294.4L397.4,295.1L398.1,295.2L398.6,294.9L398.5,295.6L398.9,295.9L399.5,296.1L400,295.9L400.2,295.6L400.4,294.4L400.3,294.3L401.2,293.6L401.3,293.1L402,293.5L402.6,293.4L402.6,293.6L401.9,294L402,294.4L402.6,294.6L402.7,295.2L403.3,295L403.7,294.1L404.4,294.3L404.3,294.9L403.7,295L403.3,295.5L404.2,295.4L404.1,295.8L402.8,296.1L403.4,296.8L403.8,296.5L403.6,297.2L403.2,296.9L402.6,296.8L402.2,297.5L402.2,298.6L401.9,298.7L401.6,297.7L401.1,297.8L401.1,298.5L401.7,299.1L401.1,298.8L400.5,298.8L400.2,299L399.6,299L400.4,299.3L400.4,299.7L399.4,299.2L399.4,299.5L400,299.8L399.5,300L399.5,300.4L400,300.8L400.8,300.8L400.8,301.1L401.3,301.3L401.3,301.7L401.6,302.2L402,301.8L402.2,302L403.1,302L403.8,302.3L403.9,302L404.8,303L405.2,302.4L406.2,303.6L406.3,304.3L406.5,304.4L407.3,304L407.6,304.5L406.6,304.7L406.5,305.1L407.2,305.1L406.9,305.7L406.5,305.4L406,306.5L406.2,307L405.3,306.7L405.1,306.1L404.8,305.9L403.6,307.6L403.1,308.1L403.3,307.3L403.6,306.9L403.8,306.4L404.2,306.1L404.1,305.5L404.5,305.2L404.4,304.7L404,304.4L403.8,305.1L403.2,305.5L402.7,305.2L402.1,304.4L400.6,304L400.2,303.5L397.9,303.3L397.4,303.5L395.6,305.2L393.8,306.6L393.5,306.5L393.6,306.1L393.1,305.9L393,305.5L393.2,305.4L392.7,304.3L392.2,304.1L391.8,304.1L391.9,304.4L391.6,304.8L391.6,304L391.2,303.4L390.7,304.1L390.1,304L389.8,304.2L389.5,303.9L389.3,304.2L389.8,304.9L389.3,304.9L389,305.2L388.9,305.8L388.5,305.8L388.4,306.4L388,306.3L387.3,306.7L387.1,307.6L386.4,307.4L386.6,307.2L386,306.5L385.3,305.9L384.8,306L383.7,305.9L383.3,305.5L382.3,305.4L381.6,305.2L380.9,304.5L381.4,304.4L381.7,303.7L382,303.8L382.5,304.4L382.8,304.1L382.8,304.9L383.4,305L383.2,303.9L382.2,303.2L382.2,302.7L381.7,302.7L381.4,303.2L380.9,303.3L380.9,302.9L380.5,303L380.6,302.5L381,302.2L380.5,301.8L379.4,302.4L378.9,301.5L378.5,301.6L378.2,300.3L377.2,300.3L377.4,300L377.4,299L376.1,298.9L375.6,299L374.8,299.5L374.5,298.9L374.8,298.4L375.1,298.4L375,297.9L374.3,297.8L373.8,298.1L373.4,297.9L373.3,298.3L372.4,298.8L371.8,299.2L371.6,298.8L370.8,299L370.9,299.4L371.2,299.7L372,299.8L371.6,300.1L372,300.8L372.8,300.6L373,300.8L372.5,300.9L372.7,301.2L371.4,301.3L370.4,301.9L369.6,302L366.2,301.4L364.8,301L362.4,299.9L361.5,299.6L359.8,299.2L358.4,299.2L357.9,299.4L356.4,299.3L354.1,299.7L353.4,299.8L352.3,300.4L352.3,300.6L350.5,300.6L349,301.1L343.8,303.5L342.7,304.2L342.3,304.8L341.6,304.8L342.5,303.9L342.9,303.4L343.4,303.4L343.8,303.2L344.1,302.7L344.5,302.9L344.9,302.8L344.3,302.2L342.1,302.8L341.8,302.5L342.5,301.5L342.6,300.6L342.6,299.8L342.1,299.7L341.9,299.4L341.2,299.8L340.8,300.2L340.7,300.8L340,301.1L339.8,300.6L339.1,301.1L339,301.5L339.4,301.8L339,302.4L339.4,303L340.2,303.2L340,303.8L340.4,304L340.5,304.9L340.4,305.6L340.1,306L339.7,305.9L339,306.7L338.1,307.4L337.9,307.1L337.4,307.2L337.3,308.2L337.6,308.5L338.1,308L339.2,307.3L339.3,307.1L340.6,305.9L341.2,305.7L341.2,305.2L342.3,305.3L341.4,306L338.9,307.8L338,308.5L337.8,308.8L336.5,309.9L334.9,311.5L334.2,311.6L331.4,313.2L330,314.1L327.8,315.1L325.3,316.4L323.9,317.3L323.3,317.8L322.7,318.6L320.5,319.9L319.5,320.6L317.5,322.3L316.2,323.9L315.7,324.8L315.1,325.5L313.7,327.9L312.7,330.1L312.2,331.5L311.8,333.7L311.7,334.9L311.7,336L312,338.3L312.6,340.6L313,342.1L313.7,344.7L314.1,347.6L313.8,347L313.6,345.4L313.1,343.3L312.7,341.6L311.7,341.4L312.5,341.1L312.1,340.2L311.9,339.2L311.5,338.2L311.4,337L311.4,335.5L311.4,334.2L311.9,331.1L312.6,329.1L313.4,327.4L314,326.7L314.5,325.7L314.8,325.3L314.7,324.8L315.3,323.8L316,323.4L316.4,322.9L317.2,321.5L318.3,320.9L318.7,320.3L319.3,320.3L320.8,319.1L321.7,318.6L322.7,318.3L322.6,317.8L323,317.5L322.6,317.3L321.9,317.8L321.1,318.2L320.6,318.6L319.9,318.7L319.7,318.2L319.7,317.5L318.9,317.4L318.7,317.7L318.7,318.7L318.5,319L318.7,319.4L318.6,319.8L317.7,320.4L317,321.1L316.7,321.1L315.9,320.8L315.8,320.3L314.5,321L313.8,321.7L314.6,322L315.6,321.3L316,322.2L315.7,322.4L314.1,324.9L313.6,324.9L313.3,324.3L312.4,324.4L312.3,324.2L310.9,324.3L310.5,324.1L310.2,324.6L310.7,324.9L311.3,325L311.8,324.8L311.6,325.5L311.9,326L312.5,326.4L313.2,326.6L312.4,328.2L311.9,330.3L311.3,331.5L310.5,331.8L310.2,332.1L309.7,331.8L310.3,331.6L310.5,331L310.1,330.9L309.9,331.3L308.6,332.1L308.8,332.4L309.8,332.6L310.9,332.2L311.2,332.2L311,333.5L311.1,333.6L310.9,335.8L310.6,338.1L310.4,338.1L310.8,340.7L311.1,341.4L311.2,342.4L311.6,342.4L312.5,344.8L312.7,345.1L312.3,345.6L312.5,346L312.4,346.7L312.8,347.5L313.6,347.6L313.6,348L314.2,347.8L314.2,349.3L313.2,349.2L312.7,349.2L312.7,349.5L311.8,349.6L311.5,350.7L310.7,350.5L310.4,350.1L309.7,350L309.5,349.4L309,349.4L308.3,348.3L307,348.1L306.5,347.7L305.8,347.8L305.5,347.6L304.5,347.8L304.3,347.6L303.8,347.6L303.7,347.9L303.2,347.6L302.4,347.7L302,347.5L301.8,347.7L301.2,347.5L300.9,347.1L301,346.8L300.3,346.8L300.2,346.3L299.6,346.3L298.7,345.5L298.3,345.6L297.3,345L296.5,345.2L295.9,344.8L295.3,344L294.9,343.9L294.8,343.6L294.5,343.4L293.7,343.6L292.8,343L292.3,343L292,342.8L291.5,343L291.1,342.5L291.4,342L291,341.3L290.5,341.2L290.4,340.1L290.2,339.6L290.1,338.7L289.8,338.4L289.8,337.9L289.5,337.1L288.8,336.6L288.9,336.3L288.3,336L288.1,335.6L288.3,335.4L287.8,334.8L287.5,334.7L287.4,334.2L287.7,333.8L287.6,333.1L287.8,332.8L287.7,331.8L287,331.5L287.1,331.1L286.6,330.9L286.9,330.6L287.2,329.7L287.1,329.3L287.3,328.7L286.7,328.5L287,327.7L286.5,327L286.2,327.2L285.9,326.6L285.5,326.8L285.2,326.4L284.8,326.4L284.1,325.4L283.7,325.3L283.6,324.8L283.2,324.9L282.8,324.5L282.9,323.9L282.6,323.6L282.7,323.2L282.2,322.6L282.3,322.1L281.6,321.9L281.4,321L281,320.7L280.7,319.9L279.2,319.2L279.1,318.6L278.8,318.6L278.3,318L278.4,317.5L277.7,316.4L277.9,315.9L277.5,315.4L277.9,315.1L277.4,315L277.1,314.4L277.3,314L276.7,313.6L276.8,313.3L276.2,312.9L276,312.4L276.1,311.9L275.8,311.6L275.7,310.8L275.5,310.7L275.1,309.7L274.8,309.7L274.6,309.2L274.7,308.3L274.4,307.1L273.7,306.6L273.3,306.1L273.5,306L273.1,305.1L272.2,304.6L272.2,304.3L271.5,303.8L270.8,303.4L270.3,302.5L270.3,302.2L269.3,301.9L269,301.4L268.1,301.3L268.3,300.7L268.2,299.9L268,299.9L267.7,300.6L267.5,300.3L267.6,299.7L267,299.4L266.5,298.1L266.2,298.1L265.8,297.8L265.3,298L265,297.5L264.7,297.8L263.2,297.8L262.4,297.5L262.2,297.5L261.6,297.2L260.7,297.3L260.2,297L259.5,297.1L259.3,297.3L258.3,297L257.9,296.4L257.4,296.4L256.6,295.9L256,296.1L255.5,297.3L254.1,297L253.7,297.4L253.5,297.2L252.6,297.5L252.3,297.4L251.9,298L252,298.2L251.4,298.7L251.4,299.2L251.1,299.2L251,299.9L250.5,300.2L250.5,300.5L250.2,301.2L250.2,301.7L250,302.3L249.6,302.3L249.4,303.1L249.1,303.5L249.5,303.8L249.3,304.2L248.5,304.5L248.1,304.4L247.8,305.2L247.1,305.6L246.7,306L246.5,306.9L245.9,306.9L245.2,306.7L244.6,306.8L244.1,306.2L243,305.9L242,304.6L241,304.1L240.6,304.2L239.8,303.7L239.1,302.7L238.6,302.4L237,302.1L236.4,301.7L235.6,300.9L235.2,300.8L234.5,299.8L234.5,299.5L234,299L233.2,298.8L232.7,298.5L232.5,298.1L231.4,297.1L231.1,296.6L230.9,295.3L230.5,294.6L230.3,293.9L229.8,293.2L229.9,292.5L229.6,291.9L229.9,291.1L229.9,290.5L230,289.9L229.8,289.1L229.4,288.7L229.3,288.2L228.8,287.7L228.8,287.4L228.3,286.9L228.5,286.6L228.1,284.6L227.9,284.1L227.4,284L227.1,282.9L226.5,282.9L226,282.1L225.5,281.9L225.4,281.6L224.8,281.2L224.4,281.2L224.1,280.9L222.9,280.3L223,279.9L221.3,278.4L220.9,277.1L220.5,276.7L219.8,276.3L219.5,275.9L219.1,275.8L219.1,275.4L218.3,274.1L217.5,273.7L217.4,273L216.9,272.6L216.1,272.4L214.8,271.4L214.5,270.4L214.1,270.1L213.9,269.3L213.5,268.2L213.2,267.7L212.5,267.2L212.1,267.4L211.7,266.9L203.3,265.9L193.3,264.7L192.5,270.5L183.2,269.3L180.7,268.9L172.8,267.8L167.7,267L161,266L147.8,258.3L140,253.9L136.3,251.7L123.1,243.7L123.4,243L123.3,242.8L123.4,242.1L123.8,242L124.7,241L108.4,239.1L98.4,237.9L98.6,236.8L98.4,236L98.1,235.7L97.5,235.9L97.6,235.1L97.8,234.3L97.6,233.8L98.1,233.2L98.2,231.4L98,229.9L97.8,229.2L96.7,226.7L96,225.8L95.7,225.2L95.2,224.6L94.9,224.6L94.4,223.4L93.6,222.5L93.1,222.2L92.5,221.4L91.8,220.2L91,219.6L90.8,220.1L89.9,220.1L89.3,219.8L89,219.4L88.4,219.2L88.4,218.8L88.8,218.5L88.9,218L88.7,216.6L88.5,215.8L88,215.1L86.7,214.8L85.8,214.7L85.1,214.9L84.7,214.4L83.7,214L82.5,213L82,212.8L81.3,212L81,210.3L80.7,210.1L80.2,209.4L80,209.4L79.5,208.5L78.8,208L78.6,207.7L77.4,207.4L76.8,207.5L76.2,207.1L75.3,207L74.1,205.9L73.3,205.7L72.7,205.4L71.1,205.1L69.2,204.8L69.3,204.5L69,203.6L68.5,203.2L68,203.1L67.9,202.7L68.8,201.2L68.6,200.5L69.2,199.3L68.7,198.5L69.4,197.3L69.9,195.8L69.4,195L68.9,194.8L68.7,195L67.9,194.1L67.6,193.5L68.4,192.2L68.4,191.6L68.2,190.9L67.2,190.5L66.5,189.1L66.2,187.8L65.4,187.3L65,186.4L65,185.5L64.6,184.8L64.4,184.4L64,183.8L64.1,182.7L64,182.3L63.4,181.7L63.2,180.5L62.6,179.2L61.6,178.2L61.3,177.6L61.3,176.6L61.4,176.2L61.3,174.9L61.7,174L61.3,173.7L61.9,173L62.5,173.6L62.9,173.3L63.3,172.7L64,171.3L63.7,169.4L63.4,168.8L63.1,168.6L62.7,168.8L61.4,168.4L60.6,167.4L60.1,166.1L59.7,165.8L59.7,165.4L59.3,164.6L59.3,163.9L59.9,162.5L59.8,161.4L59.9,160.8L59.5,160.5L59.4,160.1L59.5,159.4L59.8,159.2L60.1,158.4L60.3,156.8L60.9,156.7L61.5,156.7L61.6,157.1L61.6,158.1L61.2,158.1L61.3,159.4L61.1,159.7L62,160.2L62.7,161.3L63,161.3L63.3,162.2L63.8,162.3L63.7,161.8L63.3,161.4L63.2,160.4L63.3,159.1L62.7,158.3L62.8,157.8L62.1,157.3L62.7,156.6L62.6,155.8L62.1,155.6L61.8,154.8L62.1,154.9L62.5,154.7L62.6,154.3L63.2,154.5L63.7,154.2L63.6,153.3L62.8,152.6L62.3,152.8L61.8,152.7L61.7,153.2L61.4,153.7L61.7,154.4L61.2,154.5L60.9,155L61.4,155.8L61.2,155.9L60.9,155.4L60.9,156.3L60.3,156.3L60.1,155.8L59.4,154.9L58.9,154.9L58.3,153.9L58.1,153.2L57.6,152.7L57.1,152.5L56.3,152.6L57.2,151.4L57.4,150.9L57.3,149.8L57.6,149.6L57.3,148.7L56.8,148.7L57,147.9L56.8,146.6L56.2,145.9L55.8,145.5L55.2,144.6L54.5,142.3L54.1,141.8L54,141.3L53.2,140L52.8,138.5L53.5,137.8L53.6,137.3L53.5,135.8L53.4,134.3L53.5,133.1L53.9,132.1L54.8,130.8L54.8,130.2L55,129.4L54.8,128.3L55,127.1L54.6,126.5L54.6,125.9L53.8,124.1L53.6,123.9L53.7,123.5L53.6,122.9L53,122.4L51.8,120.2L52.2,119.6L52.2,118.8L52.1,117.8L52.7,116.9L53.5,115.8L55.8,113.4L56.5,112.5L57.1,111.3L56.8,110.7L57.1,109.7L57.3,109.7L58,108.7L59.2,106.2L59.4,104.8L59.3,103.3L59.4,102.2L59.1,102.1L58.7,101.4L59.3,100.7L59.8,99.5L59.9,98.8L59.4,98L59.1,97.2L59.1,96.4L59.3,96.1L59.1,95L59.3,94.7L59.2,94L59.6,92.6L60.5,91.1L60.6,89.9L60.4,88.8L60,88.7L60.1,87.2L60.8,86.4L61.6,85.5L62,84.7L62.2,84.1L62.8,83.3L63.3,82.3L63.2,81.8L64,81.4L64.4,81L65.3,79.8L66.4,77.8L67.8,74.9L68.8,72.6L69.6,70.6L69.5,70.5L70.5,68.5L70.7,67.7L71.5,65.8L71.8,64.8L71.8,64.3L72.3,63.4L73.4,61.1L74.1,59.9L74.7,58.3L74.8,57.6L75.3,56.4L75.4,55.6L75.6,55.4L76.3,53.6L76.6,52.8L76.4,52.2L76.8,51.3L77,50.4L77,49.9L77.6,49.6L78,48.5L78,46.2L78.6,47.3L79,47.6L79,47.2L79.7,47.3L80,47.2L80.3,47.6L80.7,47.4L81.2,47.5L82,47.1L81,46.7L81,46.3L80.6,46.2L80.2,46.4L79.8,46.2L79.1,46.5L78.8,46.4L78.4,45.4L78.1,45.2L77.8,45.6L77.4,45.7L78.1,44.2L78.5,42.9L78.9,41.1L79.1,41.9L78.7,42.9L78.4,44.4L78.9,44.6L79.1,44.2L78.9,43.7L79.1,43L79.4,43.5L80.1,42.8L79.8,41.4L80.3,41L81.3,40.7L80.9,40.1L80.6,40.4L80,40.2L80.1,40.5L79.6,40.3L79.1,39.6L79.3,39L79.4,37.6L79.6,37.5L79.6,38.2L80.1,37.9L81.9,37.7L81.7,37.4L80.7,36.8L80.8,36.3L80,35.9L79.7,36.1L79.6,37.1L79.1,37.2L79.3,36.8L79.8,34.6L80,32.6L79.5,31.5L79.9,29.2L80,28.3L80.1,26.5L79.8,25.9L79.8,25.3L79.5,24.9L79.4,24.6L79,24.1L79,22.8L79,21.7L79.3,21.1L79.1,20.4L79.7,19.9L80.4,18.5L80,17.9L80.1,17.6L80.6,17.8L81.7,18.8L82.4,19.7L82.7,19.8L83.3,20.5L83.6,20.4L84.6,21.4L84.5,21.6L85.4,22.3L87.1,23L87.8,23L88.6,23.7L88.9,23.6L89.2,23.8L89.9,24L90.2,24.4L91.4,24.8L92.6,24.3L92.5,24.5L93,25.2L93.1,25.7L93.6,25.7L94.1,25.9L93.9,26.2L94.3,26.5L94.2,27.2L94.5,27.2L94.7,26.7L94.4,26.2L94.5,25.8L95,25.6L95.7,25.6L95.6,26L95.1,26.2L95.2,26.9L95.5,26.9L95.7,26.4L96,26.3L96,27.4L95.5,27.4L95.7,28L95.7,28.9L96,29.2L95.7,29.4L95.2,29.2L95.1,29.7L94.5,29.9L93.9,31.1L93.4,31L94.1,29.9L94,29.7L93.1,30.6L92.8,31.1L91.9,31.7L90.2,33.3L89.4,34.5L89.8,34.5L90.5,34.8L91,34.7L91.6,34.7L91.9,34.3L90.3,34.6L89.9,34.1L91.9,32.1L93.1,31.6L94,31.5L94.3,30.8L95.1,30.1L96.2,29.7L96.2,28.5L96.8,29.2L96.6,31.3L96,31.1L95.9,31.5L96.2,31.8L95.9,32.4L96.1,32.6L95.9,33.2L95.4,33.5L95.2,33.9L95.6,34.2L95.2,34.6L94.7,35.5L94.8,35.7L94.3,36.3L94.4,36.9L93.7,37.6L93.1,36.5L93.6,35.5L93,35.8L92.6,36.5L93.3,37.6L92.9,37.7L92.8,38.2L92.4,38.4L92,37.8L91.8,36.5L92.2,36.2L92.5,35.5L92.3,35.2L92.2,35.8L91.6,36.3L91.6,37.1L91.3,37.5L91.7,37.5L91.9,38.3L92.6,38.8L93.1,38.5L93.2,38.1L93.6,38.1L94.1,37.3L94.6,36.8L94.6,36.5L95.2,37.3L95.6,37.2L95.6,36.7L96.5,36.6L96.7,36.1L96.6,35.4L96.4,35.2L96.7,34.9L96.5,34.3L96.5,33.5L97.3,33.3L96.7,32.5L97.5,31.7L97.6,30.7L98.2,30.4L98.8,29.2L99.5,29.1L99.7,28.3L99.4,28L98.9,26.8L99.2,26.1L99,25.5L98.6,25.3L98.6,25.6L98.2,25.8L98.3,26.6L98.7,27.3L98.6,27.6L98.1,26.5L97.7,26.4L97.7,25.7L98,24.9L98.6,24.8L99,25.1L99.4,24.8L99.3,24.2L98.6,23.5L98.3,22.9L98.5,22.5L97.5,22.6L97.4,22.2L97.6,21.7L97.2,21.8L97.4,21.4L98.2,21.3L98.6,21.6L98.7,22.2L99.3,22.3L99.3,21L99.8,21.1L100.1,20.8L99.7,19.9L99.7,19.1L100.1,18.7L99.8,18.3L99.3,18.2L98.8,18.6L98.9,19.1L98.5,18.5L98.9,18L98.7,17.6L98.4,17.7L98.5,17L98.1,16.3L98.5,16.1L98.4,15.7L98.1,15.4L98.7,15L104.2,16.6L107.1,17.4L111.5,18.6L115.8,19.8L121.5,21.3L126.6,22.6L131.6,23.8L137,25.1L146.8,27.4L152,28.5L155.2,29.2L162.3,30.7L169.4,32.1L175.2,33.3L181,34.3L191.7,36.2L198.2,37.3L205.3,38.3L215.4,39.8L219.8,40.4L228.8,41.5L235.8,42.3L240.2,42.8L249.4,43.7L252.9,44.1L258.1,44.5L263.9,45L273.9,45.7L280.5,46.1L283.4,46.3L289.4,46.6L294.3,46.8L298.5,47L302.9,47.1L310.9,47.3L317.1,47.4L319.7,47.4L328,47.5L335.1,47.5L335.1,42.5L335.9,42.9L336.8,42.7L337.7,43.2L338,43.6L338.4,45.8L338.6,46.1L339.2,48.9L339.1,49.7L339.2,50.3L339.6,50.7L340.6,51.2L341.3,51.3L341.6,51.1L342.9,51.2L343.3,51.9L345.2,51.9L346.7,52.1L347,52.8L346.9,53.4L347.1,53.5L348.4,53.4L348.6,53.3L349.2,53.3L350,53L349.9,52.5L350.9,52L352.1,51.7L352.4,52L354.1,51.9L356.4,52.9L357.2,52.9L357.3,53.4L356.7,53.5L356.5,53.9L357.1,54.2L358.3,54L358.8,54.6L358.7,55L358.9,55.6L359.7,56.9L360.5,56.6L360.2,55.7L360.6,55.2L361,55.3L362.3,55L362.9,55.5L362.8,56.2L363.4,56.7L363.8,56.5L364.1,56.9L365.4,57L365.6,57.7L365.5,58.1L366.1,58.3L366.9,58.1L366.8,58.9L367.5,58.6L367.9,58.8L368.5,58.5L369.6,58.3L371,56.9L371.5,56.8L371.9,56.4L372.7,56L373.1,56.1L373.2,56.9L373.7,57L373.5,57.3L373.9,57.8L374.4,57.9L375.5,57.5L375.7,57.8L376.4,57.6L377.3,57.7L377.9,57.5L379.4,57.4L380.3,57.6L380.6,58.3L381.7,58.8L382.2,58.4L382.8,58.3L383.2,58.5L384,58.4L384.3,58.5L385.1,58.2L384.3,58.9L384,58.7L383.9,59.1L383.3,59.3L382.6,60L381.4,60.5L381,60.9L379.4,61.5L377.9,62.2L377.4,62.3L376.1,62.9L376,63L374.4,64L373.3,64.9L371.1,67.1L370.6,67.9L369,69.9L368.2,70.8L367.4,71.3L366.6,72.3L366.2,72.4L365.4,73.4L365,73.5L363.1,75.1L362.9,75.4L363.1,75.9L363.6,76.4L364.3,76.8L365.4,76.6L366.9,75.9L367.5,75.6L368.1,75.6L369.6,74.7L370.4,74.4L370.6,74.1L371.1,74.3L371.3,73.9L372.1,73.8L372.8,72.9L373.3,73.1L373.7,72.6L374,72.7L374.8,73.5L374.4,74.4L373.7,75.3L374,76.1L373.5,76.5L373.2,77.4L373.7,77.6L375,76.7L375.1,76.1L376.5,77.2L377,77.4L377.2,77.3L378.1,77.5L378.7,77.1L379,77L380.3,76.4L381.5,75.9L382.4,75L383,74.2L383.5,73.9L384.5,73.7L385,73.8L385.9,73.4L386.6,73.4L388.2,72.5L389.1,71.4L389.8,71.3L390.7,70.9L391,70.5L391.1,69.9L391.9,69.1L392.3,68.9L393.2,67.9L393.9,67.6L394.5,66.9L394.8,66.3L395.4,65.7L397.2,64.6L399,64.1L400.6,64.1L401.3,64.5L401.4,65L401,64.9L400.5,65.2L399.9,65.1L399.2,65.3L399.5,65.8L398.5,66.5L397.6,67.7L397,68L396.9,68.8L396.7,68.7L396.5,69.3L396.1,69.6L396,70.4L395.7,71L395.4,71L395.1,72.9L395.4,73.5L395.1,73.9L395.5,73.8L396,72.8L396.1,72.3L396.3,72.4L397.2,71.5L398,70.9L397.7,71.5L397.3,71.8L396.9,72.7L397.8,71.7L398.6,71.5L399.1,71.6L400.3,71.5L400.8,71.7L401,71.6L401.6,72L401.9,72.4L402.4,72.2L403.2,72.9L403.3,73.5L403.9,74L404.1,74.5L404.6,75L405.3,75.2L405.3,76L405.7,76.3L406.5,76.4L407.9,76.2L408.6,75.6L409,75.7L409.5,76.4L409.9,76.7L410.5,76.7L410.8,76.1L411.3,76.2L411.6,76.6L411.7,75.8L411.4,75.2L411.9,74.9L412.1,75.3L412,75.9L412.6,76.2L413.3,75.3L414.6,74.5L416.3,73L416.7,73.2L418.6,72.6L420.1,72.6L421.2,72.5L422.2,72.3L424.1,71.1L424.8,70.9L425.8,70.9L426.8,70.6L426.2,71.6L426.3,73.1L426.4,73.6L426.2,73.9L426.6,74.4L427.1,74.4L427.3,74.2L427.6,74.5L428.1,74.4L428.6,74.6L429.7,74L430.1,74L430.5,74.4L430.5,74.8L431.3,74.4L431.5,74.5L431.8,73.7L432.3,73.4L433.1,73.5L433.4,73.3L433.6,72.9L434.5,72.8L434.7,73.1L434.5,74.3L434.9,75.6L435.1,76.6L434.2,76.8L434,77.5L434.5,77.6L434.6,77.3L435.1,77.3L435.4,77.7L436.1,77.9L435.7,78.3L436.6,79.1L437,79L437.7,79.5L437.9,79L438.4,79.3L438.6,79L437.9,78L438.4,78.1L439.7,77.8L440.1,77.9L440.7,78.8L441.3,79.1L441.1,79.9L440.6,80.1L439.7,79.8L438.7,80.1L437.7,79.8L437.3,80L436.4,80.1L435.5,79.9L433.6,80.5L433.2,80.8L432,80.2L431.4,79.7L431,79.9L430.5,79.6L430.3,80.1L430.4,80.6L430,81L430,81.5L430.4,82.2L430.1,82.5L429.2,82.1L429.1,81.8L428.4,81.4L428.2,81.1L427.4,80.5L426.1,80.1L425.7,80.2L424.5,79.8L424,79.9L423.5,79.7L423.4,80L422.7,79.9L422,80.8L421.6,81.7L421.3,81.8L420.2,81.7L419.5,81.9L419.2,82.2L419.4,82.6L418.6,82.3L417.9,82.1L417.1,82.4L416.8,82.3L416,82.6L415.7,83.1L415.7,83.8L415.5,84.7L415,84.7L414.8,85.1L414.1,85.4L414,85.9L413.6,86L413.6,86.5L413.2,86.6L413.4,87.3L412.7,87L412.4,86.6L412.8,86.2L412.8,85.9L413.1,85.5L413.1,85L413.5,85L413.9,84L413.7,83.5L413.3,83.5L412.8,84.4L411.6,84.2L411.7,84.8L411.4,85.3L411.3,86L410.3,86.4L410.2,86.7L409.9,86.3L410,85.7L409.8,85L409.5,84.6L409.2,84.9L409.1,86.2L409.2,86.4L408.3,87.1L407.6,88.6L407.2,90.3L406.6,91.1L406.1,92.4L404.9,94.4L405.1,94.8L404.9,95.5L404.9,96.4L403.7,96.6L403,97.1L403.2,97.6L402.9,98.3L402.6,98.5L402.3,99.5L402,100L401.8,101.2L401.9,101.4L401.6,102L402.3,102.5L402.7,102.3L402.8,101.7L403.6,100.9L404,100.9L404.4,100.1L404.4,99.7L405.3,98.1L406.1,97.7L406.5,97.7L406.8,97.3L407.3,97.6L407.1,97.1L407.4,96L408.1,94.7L408.3,93.5L408.7,93.6L409.3,93.1L409.3,92.5L409.8,91.8L410.5,91.7L410.5,92.7L410,92.8L410.1,94.4L409.8,94.9L409.5,94.9L409.4,95.5L409,96.1L409.2,96.6L408.8,97L409,97.3L408.4,97.7L408,98.5L407.8,99.5L407.4,100.7L407.1,101L406.9,101.8L406.5,104.8L406.9,105.9L406.9,106.7L406.5,107.2L405.8,107.7L405.7,108.4L405.5,108.9L405.2,110.7L405.3,111.7L405.7,112.2L405.7,113.3L405.1,114.7L405,116.3L404.4,117.5L404.3,119.3L404.6,120.1L404.5,120.6L404.8,121.5L404.7,122.2L405.2,122.8L405.3,123.8L405.5,124.5L406.1,125.1L406.1,126.1L405.8,127.3L406.2,129L406.2,130.4L406,131.5L406.5,132.7L407.3,133.9L407.8,134.3L407.9,134.9L408.5,136.4L408.7,137.3L409.3,138.3L409.6,138.5L409.7,139L410.3,139.4L410.7,139.1L410.9,139.3L410.8,139.8L411.7,139.9L412.7,139.8L413.7,139.5L415.4,138.4L416.4,137.7L417.4,136.8L418.2,135.7L419.2,132.7L420.2,130.9L420.7,129.3L420.9,128.2L421,126.2L420.9,125.5L421,124.5L420.8,122.7L420.4,120.7L419.9,119.4L418.4,116.9L418,115.9L417.4,114.4L416.7,113.1L416.6,112.6L417.3,111.4L417.4,110.8L417.4,109.9L416.9,108.4L416.4,107.5L416.5,107.1L417.1,106.5L417.7,104.7L418.3,103.4L418.3,102L418.4,100.4L417.9,99.2L417.9,98.9L418.8,98.3L419.4,98.1L419.5,97L419.3,96.2L419.6,95.7L420.1,95.9L420.5,94.9L421.1,95.3L421.7,95.1L421.9,94.7L422.1,93.7L422.4,93.5L422.8,92.4L423.1,91.8L423.4,91.8L423.7,91.4L423.9,91.8L423.3,92.3L423.3,92.7L423.8,93.6L423.1,94.6L423.5,94.3L423.6,95.2L423.4,95.3L423.2,96.2L423.6,97.3L423.9,97.3L424.3,95.6L424.3,94.5L424.7,94.2L424.6,96L424.2,96.5L424.1,97.3L424.5,97.4L424.7,96.7L424.9,96.5L425.5,94.9L425.6,94L425.5,93.4L425.5,92.5L425.2,91.5L425.2,90.5L425.7,89.8L426,89.8L426.6,89.2L427.1,88.9L428,88.9L428.8,88.7L429.2,88.4L429.1,88L428,88L427.5,87.5L427.1,86.3L427.5,85.4L427.9,85.2L428.5,84.3L428.4,84L427.7,83.7L429.7,83.7L429.9,83.1L432,84L432.9,84.5L433.3,84.3L433.7,84.4L434.1,84.2L435.2,84.5L436.1,85.3L436.3,86L436.9,86.2L437.9,86L438.2,86.1L439.3,86.8L440,86.8L441.2,87.4L442.2,87.2L443,88L443.4,88.3L443.1,88.6L443.7,89.6L444.1,89.9L444.8,91.3L444.1,91.2L443.5,90.8L443.1,91.4L443.4,92.6L443.9,93L444.6,93.2L444.8,93.8L445,94.9L445.3,95.3L445.3,96.1L445.1,96.9L445.3,97.6L445.3,98.9L445.4,100.2L445.1,100.5L444.7,101.2L443.9,101.3L443.7,101.7L443.6,102.9L443.6,104.2L443,104.4L442.7,104.6L442.8,105.2L441.4,105.4L441,105.8L440.8,106.7L440.8,108.1L440.6,108.6L441.2,109.6L441.8,109.9L442,109.5L442.3,109.9L443,110L443.5,110.4L443.8,110.2L444.5,108.7L445,108.7L445.2,108.4L444.9,107.8L445.1,107.3L445.3,106.3L445.5,106.8L446.1,106.4L446.2,106L445.5,105.8L446.3,105.7L446.6,105.4L446.7,104.9L447.5,104.7L448.5,104.2L448.8,103.7L449.8,103.2L450.2,103.5L451,103.7L451.5,104L452.3,105.3L452.7,105.7L453.1,106.7L453.6,109L454.4,110.9L454.9,113.7L455.5,115.2L456.3,116.4L456.4,116.9L456.1,117.5L456.1,119.1L456.3,119.6L456.1,120.9L456.1,121.7L455.6,122.5L455.1,122.6L454.7,123.1L454.7,122.3L454.3,122.1L454.6,121.9L455,121.1L454.5,120.9L454,121L453.4,121.5L453.2,121.9L453.6,122.1L453.7,122.6L453.2,122.6L452.9,123.3L453.1,124.2L453,125.1L452.5,125.8L451.5,126.2L451,127.4L451.3,128.8L451.2,129.3L450.8,129.6L450.8,130.4L450.4,130.9L450.2,131.4L449.8,131.5L449.6,132.3L449.3,132.4L448.8,133.3L449.1,134.2L448.8,134.3L448.9,134.6L449.6,134.8L450.1,134.6L451.5,135.3L452.4,135.4L452.8,135.6L453.5,136.3L454.2,136.5L454.8,136.2L454.8,135.6L455,135.4L455.6,136L456.2,135.8L456.2,136.3L457.4,137.2L458,137.5L458.8,137.6L460.1,136.8L460.9,136.6L461.4,136.1L463.1,135.2L464.4,135.4L465,135.2L465.7,135.2L466.6,134.3L467.5,133.2L467.7,133.1L468.2,132.3L469.5,131L469.9,130.9L472,129.3L473,129L473.7,128.5L475.8,127.3L476.3,127L477.9,126L479.3,124.9L479.5,124.6L479.8,123.9L480.2,123.8L480.3,124.1L481.4,123.1L482.9,122L483.9,121.2L485.5,119.6L486.3,118.5L487.2,117.7L488,117.3L488.3,116.4L488.6,116L488.7,115.4L489.8,114.5L490.3,113.8L490,112.9L489.5,112.6L489.5,112.1L489.2,111.7L488.3,111.5L488.2,110.4L487.5,110.4L487.7,109.5L487.3,108.1L487.1,108L488,107.6L489.2,106.9L491,106L492.3,105.5L493.4,105.3L494.6,105.2L495.8,104.9L498.8,104.8L499.6,104.8L500.2,105.3L501.1,105.6L501.5,105.7L502.7,104.8L503.9,104.6L505.3,104.2L506,104.3L506.8,104.1L507.2,103.7L508.1,103.3L508.7,102.8L508.9,102.7L509.4,101.7L510.2,100.8L510.6,100.6L511.1,99.9L511.5,99.7L512.2,99.7L512.7,99.4L512.9,98.8L512.8,97.8L512.1,95.9L511.3,95.6L511.5,94.9L512,94.7L512.1,95.1L512.7,94.5L512.5,94L511.8,93.6L511.1,94L511.2,93.6L510.6,93.1L510.1,93.2L509.9,92.3L510.2,91L510.8,90.8L511.5,90.2L511.4,89.6L511.9,89.3L512.6,88.5L513,88.5L513.4,88L514,87L514.1,86.5L514.3,85.9L515.4,84.2L516.1,82.9L517.6,81L517.6,80.8L519.5,79.2L520.2,78.3L520.8,78.2L521.4,77.6L522.3,77.7L522.9,77.5L525.9,76.9L527.6,76.5L531,75.5L531.8,75.4L534.7,74.5L537,73.9L540.7,73L542,72.8L544,72.3L545.8,71.8L551.2,70.3L551.1,69.6L551.5,68.7L551.3,68.6L551.5,67.7L551,67.4L551.5,67.1L551.6,66.8L552.1,66.2L552.8,66.7L553.7,66.5L553.9,65.6L554.5,65.3L554.4,64.9L555.3,65.2L555.4,65.6L555.8,66L556.2,66.1L556.3,65L556.1,64.1L555.9,63.8L556.1,63.3L556.4,63.3L556.9,63.7L557.6,63.6L557.5,63.2L556.5,62.5L556.4,62.1L556.8,60.8L557.1,60.4L557.4,59.8L557.6,59.8L558,59.2L558.6,58.6L558.1,57.9L558.6,57L559.2,56.3L559.2,55.6L558.9,55.4L558.4,55.5L558.2,54.8L558.4,54.3L558.1,54.2L558.4,53.6L558.5,53L557.9,52.7L558,51.3L558.2,51L558.1,50.6L558.5,50.1L558.8,49.4L559.1,49.2L558.6,45.6L562.5,34.1L563,34L563.9,34.2L564.2,34.1L564.3,34.7L564.8,36.2L565,36.4L566.3,36.8L567,36.1L567.7,35.6L568.5,35.3L568.7,34.6L569.6,34.3L570.4,34.2L570.2,33.5L570.6,33.1L571.4,32.9L572.2,33.1L572.4,33.4L573.7,33.8L575.2,34.9L575.2,35.1L576.3,35.3L578,41.2L580.4,48.6L580.6,49.3L581,49.6L580.6,50.1L581.3,50.7L581,51.2L581.4,52.7L582.2,52.7L582.2,52.4L582.7,52.9L583.4,53.1L584.4,53L584.8,52.7L585.3,53.3L585.5,53.8L585.1,53.9L584.8,54.2L585.2,54.9L585.9,55.4L585.9,56.3L585.7,56.8L586.8,57.8L586.9,58.1L587.6,58.3L587.9,57.9L587.8,57.4L588.5,57.6L589.1,57.4L589.7,57.9L590,58.4L589.8,58.6L590.3,58.8L591,59.8L591.6,60L592,61.3L591.8,61.9L591.5,62L591.4,62.4L590.8,63.9L590.1,64.4L590.3,64.6L589.9,64.9L589.9,64.3L589.5,63.5L588.8,64.1L589.3,64.6L589.1,65.1L588.7,65.1L588.5,65.9L588,65.8L587.7,66L587.9,66.4L588.6,66.7L588,67.5L587.5,67.1L587.1,66.6L586.7,66.8L586.7,67.2L586.5,67.3L586.1,66.7L586,67.5L585.8,67.7L585.8,68.6L585.5,68.4L585.5,69L585.2,68.6L584.7,69.3L584.5,69.1L584.4,70.2L583.8,69.9L583.6,69.5L583.4,69.9L583,69.9L583.3,70.6L583,71.5L583.5,71.7L582.4,72.2L581.6,72.1L580.7,71.1L580.8,70.8L581.4,70.3L581,69.9L580.7,70.4L580.6,69.9L580.3,70L580.5,70.7L580.4,70.8L580.2,70.1L579.6,70.9L579.9,71.2L579.8,71.8L580.5,72.3L580.5,72.9L580,73.9L580.4,73.9L580.1,74.4L580.6,74.9L580.7,75.7L580.2,75.9L579.8,75.1L580,75L579.7,74.4L579,74.1L578.7,73.4L579,72.7L578.3,72.5L578.4,72.1L578,72.1L577.5,72.5L577.2,71.3L577.4,70.7L577.3,70.2L577,70.1L576.9,70.6L576.6,71.2L576.2,70.9L576,71.4L575.6,71.5L576.3,72.3L576.3,72.8L576,73.2L575.9,74L576,74.9L575.8,75.8L576.5,76L576.2,76.4L576.7,76.9L576.5,77.4L575.6,77.6L575.4,78.5L575,78.7L575.1,79.3L574.7,79.5L574.6,79L574.7,78.5L574.4,78.4L574.4,78.8L574,79L574,78.3L573.4,78.5L573.6,79.1L573.2,79.6L573.2,80.2L572.6,79.8L572.7,80.3L572.3,80.8L571.9,80.6L572,81.4L571.4,80.9L571.3,82.1L570.6,82.6L570.5,82.8L570.1,82L569.5,82.1L569.2,82.6L569.1,83.1L568.5,83.3L568.4,83.9L567.7,84L567.6,84.6L567.6,85.2L567.9,85.5L567.7,85.9L567.2,85.7L566.6,86.2L566.4,86.8L566.8,87.5L566.7,88L566.4,88.3L566.6,88.6L566.2,89L565.7,89.1L565.5,89.4L565.4,90.6L565.6,90.7L565.4,91.7L565.5,92L565.3,92.9L565,93.1L564.5,95.3L564.6,95.8L564.9,96.6L565.6,98L566.6,98.2L566.8,97.7L567.4,97.9L567.1,99L566.4,99.3L565.2,100L565.8,100.5L565.3,101.2L565.1,101.2L565.1,101.8L564.8,101.4L564.6,102.1L565.2,102.8L564.7,102.8L564.7,103.2L565,103.4L564.9,103.7L565.4,103.8L565.5,103.3L565.9,103.1L566.4,103.5L567.3,103.6L567.8,104L568,104.4L569,105.3L569.1,105.8L569,106.3L568.6,106.5L568.8,106.7L569.6,107.1L570,106.9L570.3,107.1L570.8,107.9L570.8,108.5L571.4,108.9L572.3,109.1L573.4,108.9L573.8,109L574.3,108.4L574.9,108.1L575.7,107.5L575.9,107.2L575.6,106.3L575.2,105.7L574.9,106.2L574.6,105.1L574.2,104.6L573.6,104.3L573.3,104.5L573.3,105L572.8,104.4L573.2,104.2L573.9,104.2L574.8,104.6L575.8,105.8L576.5,107L577,108.5L576.9,110L576.9,110.5L576.7,110.5L576.7,109.1L576.4,109L575.6,109.3L574.3,110.1L573.2,110.3L573.1,110.7L572.5,110.9L572.2,111.7L571.1,112.1L570.2,113.1L569.8,113.8L569.2,114.3L568.4,114.7L568.6,114.3L569.6,113.6L570,113L570.7,112.2L570.7,111.8L570.3,110.5L570.4,110L569.5,109.9L569.6,110.6L569.4,110.5L569.4,111.1L568.9,111.2L569.1,111.5L568,111.9L568,112.5L568.2,113L568,113.3L567.3,113.8L566.8,113.7L566.5,114L566,114.7L565.5,113.6L565.4,112.9L565,112.7L565.5,114.5L564.9,114.6L564.9,115L564.6,115.2L564.4,114.6L564.7,113.4L564.8,112.6L565.2,111.9L564.8,111.5L564.8,112.1L564.5,112.6L564.2,112.2L564.2,111.8L563.4,111.4L563,111L563.6,112.4L562.8,112.4L563.3,112.7L563.5,113.5L563.2,113.8L563.6,114.3L563.8,115L563.6,115.6L563.5,116.5L563.1,116.5L562.3,117L561.4,117.6L560.2,118.2L560.2,118.1L559.9,117.9L559.3,118.1L558.7,118.5L558,118.6L557.7,119L557,118.8L556.9,119.3L555.4,120.1L555.2,119.9L554.7,120L553.9,120.6L553.6,120.5L552.7,120.7L552.6,121L551.9,120.9L550.6,121.5L550.4,120.9L550.1,121.2L549.7,122.2L549.3,122.3L548.7,123.3L548.2,123.2L547.6,124L547.3,123.9L546.6,124.4L546.8,124.6L546.5,125.1L545.6,125.4L545,126.2L544.6,126.1L544.2,126.6L544.1,127.1L543.5,127.8L543.6,128.6L543.2,128.7L543.6,129.3L544,128.2L544.4,128.3L544.7,127.7L545.3,127.3L545.9,127.1L546,126.7L546.8,126.9L546.8,126.4L547.1,126.6L547.8,126.5L548.5,126.6L549.2,126.1L549.2,125.7L549.7,125.4L550.1,125.5L552.7,124.8L553.9,124.3L554.4,123.9L555.2,123L555.4,122.5L555.8,122.2L556.1,121.6L556.7,121.2L557.1,121.1L556.7,121.8L556.4,121.9L557,122.2L557.3,122.6L557.9,122.6L558.2,122.2L558.9,122.9L559.4,122.5L560,121.8L560,121.5L560.6,121.2L561,121.2L560.9,121.5L558.9,123.1L556.6,125.2L555.1,126.3L552.5,128L550.9,129.3L549.6,130.1L548.7,130.5L548.4,130.3L546.4,131.5L544.3,131.9L542.9,132.9L542.9,132.5L542.1,132.7L542.1,132.4L541.6,132L541.8,131.6L541.4,131.3L541.3,131.7L541.6,132.4L541.4,132.9L540.3,134.1L539.9,134.2L540,134.6L540.8,134.8L541.3,134.5L542.2,134.7L542.7,134.7L542.7,134.2L543.1,135.2L543.3,136.4L543.3,138.5L543.5,141.3L543.7,143.3L543,146.3L542.7,146.9L542.4,147L542.6,147.4L542.4,148.1L541.8,148.9L541.9,149.1L540.9,150L540.1,151.4L539.6,152.9L539.2,154.7L538.7,155.6L538,155.9L537.6,155.8L537.6,154.8L537.9,153.6L537.8,152.8L537,152.6L536.4,152.7L536.1,152.4L535.5,152.6L535.3,153.1L534.9,152.9L534.7,152.4L534,152.1L533.8,151.8L533.5,152L532.8,151.4L532.6,151.5L531.8,151L531.3,150.5L530.6,150.3L530.5,148.7L530,148.5L529.9,148.2L530.2,147.4L530,147.3L529.4,148.4L529.6,148.8L530.1,149.1L530.2,149.6L530,150L530.1,150.4L530.7,150.9L531.1,151.5L532,152L532.5,152.7L532.7,153.3L532.7,153.7L533,155.1L533.7,155.5L534.1,155.9L534.3,156.7L535.9,158L536.5,158.2L536.8,157.8L537,158.2L537.5,159.6L538.3,162.3L538.3,162.7L538.3,164L538.1,164.2L537.9,166.7L537.6,168.1L537.2,169.1L536.9,170.3L536.7,170.7L536.5,170.5L535.9,170.7L535.4,171.7L535.2,172.6L535.1,174.1L535.3,174.8L534.8,176.4L535.1,176.5L534.6,177.6L534.4,178.6L534.1,178.8L534.3,179.4L534.1,180.4L533.6,181.3L533,181.4L533.2,181.7L532.9,181.9L532.7,181L532.2,180.4L531.9,179.8L531.8,179L532,178.3L531.9,177.3L532,176L531.9,175.1L532.3,174.1L532.7,172.8L532.5,172.4L533.2,172.1L533.6,171.2L533.6,170.9L532.8,170.9L533.5,170.1L533,169.8L532.3,170L531.7,170.9L531.4,171L531.2,170.2L531.3,169.4L531.8,169L531.2,169.1L531.2,168.6L531.5,168L530.7,168.1L530.3,168.6L530.1,168.3L530.2,167.6L531,167.1L530.7,166.7L530.4,166.9L530.2,166.6L530.5,165.2L530,165.6L529.9,166.2L530,166.8L529.7,166.9L529.2,166.1L529.5,165.9L529.4,165.4L529.1,165.3L529,165.9L528.8,166.3L529.1,166.6L528.9,167.3L528.7,167L528.1,167.4L527.8,167.4L527,166.6L526.7,166.5L526.6,166L525.4,164.5L526.1,164.2L526.2,163.7L525.9,163.9L525.5,163.4L525.7,162.9L526,162.5L526.3,162.8L526.7,162.4L526.8,162.8L527.6,162.7L528.2,163L528.3,162.9L527.5,162.3L526.9,162.2L526.5,161.8L526.3,161.9L525.5,161.2L525.4,161.5L525,161.4L525.1,162.1L524.8,162L524.7,160.9L525.1,159.7L525.7,160.1L525.9,159.9L525.6,158.6L525.2,158.5L524.7,159.1L524.3,159.2L524.5,159.7L524.1,160L524,158.8L524.3,157.5L524.7,158.1L525.4,158L525.7,157.6L525.4,157L525.7,156.3L525.1,156.6L525.1,157.2L525.4,157.5L524.9,157.4L524.8,156.7L524.5,156L524.2,155.9L524.5,154.3L524.8,153.8L524.7,153.5L525.1,153.1L525.3,152.7L526.3,152.5L525.9,152.3L526.3,151.4L526,151.4L526.1,150L524.9,150.5L524.8,151.1L525.3,151.3L525.5,151.6L525.1,151.8L524.2,153.2L523.9,152.9L524,152.2L523.6,152L523.7,152.5L523.5,153.1L523.9,153.4L523.8,154L523.3,152.9L522.8,152.9L523.2,154L522.9,154L522.8,154.5L523.3,154.6L522.6,155.3L522.5,155.6L522,155.6L521.9,155.4L521,155L521.2,155.5L521.5,155.6L521.7,156L522.8,156.4L523,157.2L522.9,157.5L523.5,157.9L522.7,158.6L523.1,158.9L523.1,159.4L522.7,159.4L522.6,160.1L523,160.6L522.5,161.4L522.9,161.9L523,162.5L523.4,163.3L523.5,164.3L523.9,164.9L524.9,165.7L525.3,166.3L525.1,166.9L524.5,166.9L525,167.3L525.2,167L525.6,167.1L525.4,167.6L525.7,168.1L526.5,169L526.4,169.3L526.8,170.3L526.4,170.2L525.9,169.6L525.6,169.7L525.3,169L525,169.1L525.1,169.8L524.7,169.4L524.5,169.5L524.2,169L523.6,168.6L522.8,168.5L521.5,168.7L520.9,167.4L520.6,167.3L520.5,167.7L521.1,168.3L521,168.6L520.2,168.3L520,167.9L519.5,167.7L518.8,166.5L518.2,167.1L517.1,168L516.6,167.8L516.1,166.5L516.3,165.6L516.7,164.8L517.4,164.3L517.2,164.3L516.5,164.6L516,164.5L516.1,165.1L515.7,166.5L515.7,167.1L516,167.9L516.6,168.4L517.6,168.1L517.8,167.7L518.3,167.6L518.7,167.1L519,167.4L519,168.3L519.8,168.8L519.9,169.4L521.3,169.8L522.2,169.6L522.5,169.9L522.7,169.6L523.6,169.5L523.8,170L524.5,170.3L524.9,170.9L525.4,171L526.1,171.4L526.8,171.5L528.1,172.1L528,172.8L527.6,173.2L527.7,174.4L527.9,174.7L527.7,175.3L528.2,175.5L527.6,175.9L526.3,175.5L526,175.8L525.7,175.6L525.6,175.2L524.9,174.4L524.2,174.1L523.8,173.8L523.3,173.8L522.3,172.8L521.9,172.7L521.7,172.3L521.1,172L521.1,172.4L522.3,173.2L523.3,174.3L523.9,174.4L524,174.7L524.6,174.7L525.2,175.7L525.7,176.2L526.8,176.1L527.1,176.4L528.3,176.4L527.9,176.9L527.9,177.3L528.4,177.3L528.5,177L528.9,177.4L529.3,178.6L529.2,179.6L528.4,179.1L527.6,178.7L527.4,179.3L527.8,179.6L528.2,180.2L528.6,180.3L527.8,180.7L527.2,180.9L527.5,181.3L528.3,181L528.4,181.8L528.9,181.6L529.1,181.9L529.6,182L529.9,182.5L529.8,183.7L529.6,183.5L529.1,183.9L528.6,184.3L528.1,183.7L526.9,183.2L526.3,182.8L526.3,182.3L525.7,181.6L524.9,181.8L524.7,182.2L524.2,181.7L523.5,181.7L523.3,181.5L522.7,182.1L523.1,182.3L523.5,182.2L524.2,182.2L524.9,182.7L525.2,182.6L525.4,181.9L525.9,183.2L526.1,183.9L527,184L528.1,184.7L528.3,185.4L529.2,185.1L529.5,184.8L529.6,185.1L530,185.2L529.7,184.3L530.3,184.1L530.8,184.3L532.1,184.4L532.7,184L533.1,184L533.7,185.4L534.5,186.8L535,187.6L535.5,188.5L535.7,189.2L536.9,191.7L537.8,193.4L539.1,194.9L541,197.6L540.6,197.5L539.6,196.1L538.9,195.3L538.4,195.3L537.7,193.4L536.7,191.8L536.4,191.6L536.4,191.2L536,190.2L535.5,190L535.3,189.5L534.3,189.5L534.2,189.1L533.8,189.4L534.1,190.1L534.8,190.5L535.2,190.3L535.4,191L536.3,192.4L536.7,193L536.8,193.3L537.3,194L537.4,194.6L536.6,194L536.5,193.6L535.9,193L535.7,192.6L535.3,192.6L535.6,192.9L535.5,193.3L536.1,193.6L534.9,193.6L533.5,192.5L532.9,192.5L533.8,193.4L534.2,193.5L534.6,194.1L534.3,194.4L533.5,194.7L532.5,194.1L532.9,194.7L533.4,195L533.1,195.2L531.9,194.9L531.4,195L531.1,194.7L530.4,194.5L531.4,195.2L532.3,195.3L532.1,195.5L531.2,195.8L530.9,196.6L530.3,197L529.7,197.1L529.3,196.8L528.6,196.8L527.8,195.6L527.7,194.9L528,193.9L527.8,193.8L527.4,194.8L527.5,195.6L528,196.6L528.6,197.4L528.5,197.9L528.9,198.2L530.3,197.8L531.6,197L532,197.5L532.5,197.3L532.9,196.9L533.8,196.4L535,196.2L535.6,196.5L535.7,197L535.4,197.9L535.6,198.5L536.1,200.3L536.4,200.2L536.4,198.9L536.1,197.2L536.6,196.6L536.3,196.3L536.7,196L537.7,196L538.5,196.9L538.9,197.6L538.9,198.2L539.4,199.2L539.2,199.6L539.4,200.1L539.1,200.8L538.5,201.1L538.2,200.9L537.9,201.2L537.8,201.7L537.4,201.9L537.4,202.4L537.2,202.5L537.1,203.4L536.6,203.7L536.6,204.2L536.1,204.6L536,204.9L535,204.8L533.9,205.1L532.9,205.1L532.7,204.8L532.3,205.1L531.7,204.7L530.9,203.5L532.1,203.3L532.1,202.7L531.2,203.2L530.7,203.2L530.4,203.6L530.9,204.2L531.3,205.1L531.1,205.1L529.9,204.8L529.4,205.1L528.6,204.8L527.3,204.7L526.4,204.4L526.4,204.7L527.2,205.2L528,205.1L530.5,205.8L532.3,205.8L532.7,206L532.8,206.5L532.7,207.1L532.3,207.8L532.4,208.1L532.2,208.8L531.7,209.4L530.1,211L528,210.1L528.2,210.9L529.2,211.3L530.7,211.5L531.8,210.3L532.3,210.2L533.2,209.7L533.2,208.9L533.7,209L533.9,209.7L534.3,210L535,209.9L534.5,209.2L535.3,209.3L535.6,210.2L535.1,211.2L534.5,211.5L534.6,211.9L534.2,212.2L533.9,213.2L533.8,214.1L533.1,214L532.9,213.1L532.5,212.9L532.7,213.8L532.2,214L533.9,214.4L534.5,212.9L535.4,211.3L536.1,210.3L537.5,208L537.8,208.1L537,209.3L536.2,210.5L535.5,211.4L534.9,212.4L534.5,213.5L533.9,214.9L533.9,215.3L533.6,214.6L532.2,214.2L530.7,214.5L528.5,215.4L527.5,216L526.8,216.5L525.8,217.6L524.5,218.8L523.7,219.7L522.5,221.2L522.1,221.9L521.5,223.5L521.2,224.8L521,226.1L520.8,227L520.8,227.8L520.3,227.8L520.1,227.4L519.3,227.4L518.4,227.4L517.3,227.6L516.2,228L515,228.7L514.7,229L514.2,229.1L513,230L512.1,230.9L511,232.5L510.5,233.5L510.3,234L509.8,234.8L509.4,235.9L509.3,237.9L509.5,238.5L509.3,239.1L508.9,239.7L508.1,240.3L507.9,241.5L507.3,241.5L506.6,241.8L506.1,241.4L505.6,241.9L505.3,242.6L505.5,243L505.8,242.8L505.9,243.2L505.3,243.5L504.7,244.1L504.5,244.8L503.3,245.6L502.8,245.3L502.4,245.4L502.4,245.8L503.1,245.9L503,246.6L502.2,247.4L502,247.8L501.6,247.9L500.7,248.3L500.1,249L499.9,248.9L498.6,250.1L498.3,249.9L497.8,250.3L497.6,250L497.1,250.1L497.1,250.6L497.8,251.4L497.7,252.3L496.5,253.2L495.8,253.5L495.7,253.1L494.9,252.8L494.5,253.1L494.4,253.4L494.9,253.5L495.6,254.1L495.1,254.9L494.3,255.7L493.9,255.8L493.4,256.6L493.6,256.8L494.1,256.9L494,257.6L493.5,258L493.1,257.9L492.9,258.5L493.3,258.5L492.8,259.3L492,259.2L491.9,259.8L492.4,259.9L492.1,260.6L491.6,261.3L490.9,261.3L490.8,261.5L491.3,261.7L491.6,261.6L491.7,262.6L491.6,263.3L490.5,263.8L490.6,264L491.2,263.8L491.5,264L490.8,265.6L490.7,266.7L491,266.8L490.9,267.2L490.9,268.3L490.4,268.6L490.2,269.3L489.8,269.4L489.9,270.2L489.8,271L489.5,271L489.1,271.6L489.7,271.7L490.1,271.4L490.2,272.3L489.9,274.2ZM105.1,320.4L105.1,320.2L105.2,320.3L105.1,320.4ZM104.3,328.7L104.5,328.3L104.7,328.4L104.7,328.6L104.4,328.9L104.3,328.8ZM102.6,329.6L102.8,329.7L102.8,329.8ZM102.1,329.7L102.3,329.8L102.3,329.9L102.2,329.9ZM101.8,329.6L102,329.6L101.9,329.7ZM101.9,333.9L101.9,333.7L102.1,333.8L102.1,334.1L101.9,334.1ZM101.3,330.7L101.4,330.6L101.6,330.7L101.3,330.8ZM101.1,324.2L101.4,323.9L101.4,323.4L101.7,323.5L101.4,323.8L101.4,324L101.4,324.1ZM100.7,330.8L100.8,330.5L100.9,330.6L101.1,330.7L100.9,330.8ZM99.9,325L100,325L100.1,325.4ZM98.2,334.7L98.5,334.4L98.6,334.3L98.8,334.6L98.9,334.5L98.7,334.3L98.7,334L98.8,334L99,334.1L99.2,334L99,333.8L99.1,333.6L99.3,333.7L99.5,333.7L99.4,333.5L99.5,333.4L99.6,333.5L99.7,333.3L99.6,333.3L99.5,333.1L99.6,333.1L99.8,332.9L100.1,332.8L100,332.7L100,332.4L100.2,332.1L100.3,332.2L100.7,332L100.8,332.1L100.7,332.5L100.6,332.6L100.4,333L100.4,333.3L100.7,333.3L100.7,333L100.9,333L101.1,333.3L101.3,333.1L101.4,333.3L101.2,333.7L101.3,333.8L101.4,333.5L101.6,333.3L101.7,333.4L101.7,333.9L101.4,334.2L101.1,334.1L101,333.8L100.9,333.9L101,334.3L100.8,334.4L100.5,334.4L100.3,334.6L100.3,334.4L100.3,334.2L100.2,334.1L100.1,334.6L100,334.7L99.8,334.8L99.8,334.9L99.7,335L99.3,335.1L98.5,334.8L98.3,334.8ZM97.8,328.6L98.2,328.5L98.3,328.7L98.3,328.9L98.2,328.9L97.9,328.9L97.8,328.7ZM96.4,341L96.7,340.8L96.8,341L96.4,341ZM95.9,341.7L96.1,341.4L96.3,341.4L96.4,341.4L96.6,341.3L96.6,341.5L96.8,341.6L97.1,341.6L97.1,341.7L96.9,341.8L96.5,341.9L96.2,341.9L95.9,341.8ZM94.9,337.9L95.1,337.8L95.1,337.5L95.3,337.2L95.5,337.1L95.5,336.9L95.7,337L96,336.7L96.3,336.6L96.6,336.6L96.9,336.6L96.9,337.1L97.1,337.3L97.1,337.1L97.3,336.9L97.1,336.7L97.2,336.6L97.6,336.7L97.6,336.5L97.1,336.3L97,336.4L97,335.9L97.2,335.6L97.5,335.5L97.7,335.6L97.9,335.8L97.9,336.3L98,336.2L98.1,335.9L98.1,335.7L98.4,335.9L98.4,335.7L98.1,335.5L97.9,335.3L98,335.1L98.1,335.2L98.6,335.5L98.7,335.5L98.9,335.6L99,335.6L98.7,335.3L98.6,335.2L98.5,335L98.7,335L98.9,335.2L99.2,335.2L99.5,335.3L99.6,335.1L99.9,335L99.8,335.3L99.5,335.7L99.4,336L99.6,336.2L99.6,335.8L99.7,335.6L99.9,335.8L99.9,335.6L100.1,335.5L100.1,335.3L100.2,335.3L100.3,335.4L100.5,335.1L100.7,335.1L100.6,335.3L100.9,335.3L100.8,335.5L100.7,335.4L100.5,335.5L100.7,335.6L100.7,335.8L100.8,335.7L100.9,335.9L101.2,335.9L100.9,336.1L100.8,336L100.6,336L100.5,336.2L100.6,336.2L100.5,336.4L100.8,336.4L100.6,336.8L100.8,336.7L100.9,336.5L100.9,336.7L101.3,336.7L101.3,336.8L101,337.2L100.9,337.6L100.6,337.6L100.5,337.4L100.4,337.6L100.2,337.4L100.1,337.4L99.9,337.2L99.8,337.3L99.5,337.2L99.5,337.4L99.7,337.4L99.8,337.5L100.2,337.8L100.2,338.1L100,338.3L99.9,338.1L99.7,338.3L99.6,338.2L99.5,338.1L99.3,338L99.1,338.1L99,338.2L99.2,338.2L99.4,338.4L99.1,338.6L98.8,338.6L98.8,338.6L99,338.8L99.1,338.7L99.4,338.7L99.6,338.9L99.5,339L99.3,339L99,339.2L98.9,339.1L98.8,339.2L98.8,339.4L98.5,339.6L98.4,339.5L98.5,339.4L98.3,339.2L98.3,339L98.6,338.8L98.5,338.7L98.4,338.8L98.1,339.2L98.1,339.3L97.9,339.2L97.7,339.2L97.6,339.3L97.9,339.4L97.9,339.6L97.8,339.8L97.6,339.9L97.6,340.2L97.4,340.4L97.3,340.3L97.1,340.6L96.9,340.8L96.7,340.7L96.4,340.7L96.6,340.3L96.7,340.3L97,340L97.2,339.8L97.2,339.7L96.9,339.8L96.9,339.6L97.1,339.2L97.4,339L97.3,338.9L97.2,339L96.9,339.3L96.6,339.7L96.4,340L96.3,340L96.2,340.2L96.1,340.3L96,340L95.8,339.7L95.5,339.6L95.5,339.2L95.5,338.8L95.4,338.5L95.3,338.4L95.1,338.3L94.9,338.3L95,338.1L94.8,338ZM94.8,342.2L95,341.8L95.5,341.4L95.7,341.4L95.8,341.6L95.7,341.7L95.2,342L95,342.3ZM92.3,344.9L92.6,344.7L92.6,344.6L92.7,344.5L92.8,344.6L92.8,344.8L92.8,345.1L92.7,345.2L92.4,345.1ZM89.8,343.8L89.9,343.7L90,343.6L90.1,343.8L90,344.1ZM89.7,343.1L89.8,343L89.8,343.3L89.7,343.3ZM88.5,341.5L88.7,341.3L89.1,341.3L89.3,341.6L89,341.5L88.8,341.5L88.4,341.6ZM86.9,342.3L87.1,342.2L87.2,342.4L87.1,342.5ZM84.3,344.5L84.4,344.3L84.5,344.2L84.8,344.5L84.7,344.5L84.5,344.4ZM83.6,344.2L83.8,344.4L83.5,344.4ZM82.8,348.6L82.8,348.5L83,348.4L83.2,348.5L83.1,348.8L82.9,348.8ZM83,344.8L83.1,344.5L83.2,344.5L83.3,344.7ZM82.5,348.4L82.6,348.1L82.5,347.9L82.8,347.9L82.8,348.3L82.6,348.4ZM82.1,349L82.2,348.9L82.3,349.1L82.3,349.2L82.1,349.2ZM82.1,347.2L82.2,347.3L82.3,347.1L82.5,347L82.5,347.1L82.4,347.3L82.5,347.3L82.5,347.5L82.4,347.8L82.5,347.9L82.4,348L82.2,347.9L82.2,347.9L82,347.9ZM81.5,348.9L81.7,348.8L81.8,348.9L81.6,349ZM81.5,347.8L81.6,347.7L81.9,347.5L81.9,347.7L81.7,347.8L81.6,348ZM80.9,346.5L81.1,346.5L81.1,346.6ZM80.4,348.3L80.8,347.9L80.9,347.8L80.9,347.8L80.7,347.7L80.7,347.4L80.9,347.3L81.1,347.5L81.1,347.3L81,347.1L81.3,347.2L81.5,346.7L81.6,346.8L81.6,347L81.5,347L81.4,347.3L81.5,347.4L81.5,347.3L81.7,347.3L81.6,347.5L81.5,347.6L81.3,347.6L81.3,347.7L81,348L80.8,348.1L80.5,348.6ZM81.9,331.1L81.9,331L82,331.3L82,331.4ZM80.4,346L80.6,345.9L80.9,345.9L80.9,346.2L80.4,346.2ZM81.6,331.1L81.7,330.8L81.7,331.1ZM79,346.4L79.2,346.1L79.4,346L79.6,346.1L79.6,346.3L79.7,346.3L79.8,346.1L79.9,346.3L80.1,346.4L80.4,346.3L80.4,346.6L80.3,346.8L80.2,346.6L80,346.6L79.9,346.5L79.9,346.3L79.8,346.4L79.8,346.6L79.8,346.7L79.9,347.1L79.8,347.3L79.5,347.1L79.4,346.9L79.2,347L79,347.3L79.1,347.1L79,346.9L79,346.5ZM80,331.4L80.1,330.9L80.5,330.7L80.7,330.7L81,330.5L81.1,330.5L80.5,331.5L80.3,331.6L80,331.6ZM77.5,346.7L77.7,346.7L77.7,347L77.5,346.7ZM76.8,346.6L76.9,346.5L77.3,346.5L77.1,346.7L76.8,346.7ZM76.2,347L76.3,346.8L76.4,346.7L76.7,346.8L76.8,346.9L77.1,347.2L77.1,347.3L76.8,347.1L76.6,347.3L76.4,347L76.3,347.1ZM74.7,347.7L75,347.4L75.3,347.6L75.2,347.9L75.1,348.1L75,348.2L74.7,347.9ZM79.2,308.2L79.4,308.1L79.6,308L79.7,308.1L79.9,308.1L79.9,308.3L79.9,308.5L79.4,308.5L79.2,308.4ZM73.4,349.7L73.4,349.5L74,349.8L74.2,350L74.4,350L74.6,350.1L74.4,350.2L74.3,350.3L74.1,350.1L73.9,350.1L73.7,350L73.5,350L73.3,349.8ZM73.1,345.1L73.2,345.2L73.2,345.3ZM67.9,350L68,349.9L68.1,350L67.9,350.1ZM66.8,350.3L67.1,350.2L67.4,350.3L67.6,350.3L67.7,350.4L67.5,350.5L67.3,350.5L66.9,350.4ZM66.1,350.3L66.7,350.3L66.8,350.5L66.6,350.6L66.5,350.4L66.2,350.4ZM65.9,350.4L66,350.3L66.1,350.5L65.9,350.5ZM65.7,349.4L65.9,349.2L66,349.3L66.2,349.3L66.3,349.4L66.1,349.5L66.2,349.7L66.4,349.7L66.4,349.9L66.2,349.8L66,350.1L65.8,350L65.8,349.7L66,349.6L65.9,349.5L65.8,349.5ZM64.6,349.7L64.6,349.6L64.9,349.4L65.2,349.5L65.2,349.7L65.4,349.7L65.5,349.8L65.6,350L65.7,350L65.6,350.1L65.4,350.2L65.3,350.2L65.1,350.3L65,350.2L64.8,350.1L64.6,350.2L64.5,349.8ZM64.2,350.4L64.2,350.3L64.5,350.5L64.2,350.5ZM66.6,321.8L66.9,321.8L67.4,321.9L67.5,322L67.7,322L67.8,322.1L67.9,322.1L68,322L68,321.8L68.3,321.6L68.6,321.7L68.6,321.6L68.9,321.4L69.1,321.6L69.3,321.5L69.5,321.5L69.7,321.3L69.7,321.9L69.9,322L70.2,321.9L70.4,322L70.6,322.2L70.5,322.4L70.5,322.6L70.4,322.7L70.5,322.8L70.5,323.1L70.3,323.2L70.5,323.4L70.5,323.7L70.6,323.6L70.5,323.8L70.5,324L69.9,323.9L69.8,324.1L69.7,324L69.5,324L69.2,324.2L69.2,324.4L69,324.4L68.9,324.1L68.6,323.9L68.1,323.8L68,323.6L67.8,323.5L67.7,323.3L67.4,323L67.1,322.9L66.9,322.6L66.7,322.5L66.8,322.2ZM59.2,352.5L59.4,352.4L59.6,352.3L59.8,352.3L60.2,352.2L60.3,352.1L60.6,352.3L60.7,352.2L60.9,352.1L61.1,352.2L61.1,351.9L61.4,352L61.3,351.6L61.5,351.5L61.6,351.6L61.7,351.5L61.6,351.4L61.6,351.2L61.8,351.2L62.1,351.2L62.1,351.5L62.3,351.5L62.2,351.3L62.4,351.2L61.9,350.9L61.8,351L61.5,350.6L61.6,350.4L61.9,350.1L62.4,350L62.7,350L62.8,350L63,350L63.1,350.3L62.9,350.4L63,350.6L63.1,350.7L63.3,350.5L63.3,350.6L63.5,350.5L63.5,350.4L63.7,350.2L63.8,350.4L63.9,350.3L64.1,350.6L64,350.8L63.7,350.8L63.5,351.1L63,351.2L63,351.4L63.4,351.3L64,351.1L64,351L64.3,351L64.3,351.1L64.2,351.3L64,351.5L63.8,351.6L63.7,351.7L63.2,351.8L62.9,351.8L63,352L62.8,352L62.8,352.2L62.6,352.1L62.5,352.4L62.3,352.2L62.2,352.5L61.9,352.5L61.7,352.4L61.6,352.5L61.5,352.3L61.2,352.4L61.2,352.4L60.7,352.6L60.7,352.7L60.4,352.6L60.3,352.7L60.1,352.9L59.8,352.8L59.7,352.9L59.3,352.7ZM70.4,297.1L70.4,297L70.7,296.8L71.6,296.6L72.1,296.4L72.4,296.2L72.8,296L73.1,295.8L73.7,295.5L74.1,295.4L75.2,294.9L76.4,294.5L77.3,294.3L77.9,294.2L78.8,294.3L79.1,294.4L79.3,294.5L79.1,294.5L79.1,294.7L79,295L78.7,295.2L78.7,295.5L78.8,295.7L78.6,295.9L78.2,296L78.2,296.1L78.5,296.1L78.7,296.7L79,296.8L79.2,296.7L79.5,296.7L79.8,296.9L80.1,296.9L80.6,296.9L80.8,297.1L81.1,297.1L81.2,297.2L81.6,297.2L81.7,297.1L82.3,297.4L82.4,297.2L82.6,297L82.9,296.5L83,296.4L83.3,296.4L83.3,296.6L83.5,296.7L83.8,296.6L83.9,296.6L83.8,296.2L83.3,295.9L83,295.8L82.7,295.7L82.3,295.9L82.4,295.5L82.5,295.2L82.1,294.7L82,294.3L81.9,294.1L81.5,294L81.5,293.8L81.3,293.4L81.4,293.3L81.5,293.2L81.6,293.1L81.7,293.2L81.9,293.1L82,293.5L82.2,293.9L82.4,293.9L82.2,294.3L82.2,294.5L82.3,294.7L82.6,295.3L83,295.6L83.2,295.5L83.4,295.4L83.5,295.2L83.2,295.2L83.2,295L82.8,294.7L82.5,294.2L82.6,294L82.7,293.8L82.8,293.7L82.8,293.5L83.1,293.2L83.2,293.3L83.4,293.3L83.4,293.2L83.2,293L83,293L82.9,292.7L82.3,292.8L82.1,292.9L81.8,292.9L81.6,292.9L81.4,292.8L81.3,292.6L81.2,292.7L81,292.6L81,292.8L80.8,292.6L80.2,292.4L79.9,292.2L79.6,292.1L79.5,291.9L79.5,291.6L79.5,290.9L79.3,290L79.2,289.8L79,289.5L78.5,289L77.8,288L77.6,287.9L77.4,287.5L77.1,287.3L76.8,287.1L76.5,286.9L76.4,286.8L76.3,286.5L76,286.1L75.8,285.9L75.3,285.6L75.1,285.6L75.3,285.5L75.9,285.4L76.1,285.2L76.1,285L76.3,284.8L76.5,283.9L76.6,283.4L77.6,283.7L78,283.8L78.9,283.7L79.4,283.7L79.8,283.7L80.3,283.6L80.6,283.3L80.8,283.3L81.2,283L81.7,282.3L81.9,282L82,281.7L82.1,280.9L82.4,280.1L83,279.4L83.4,278.8L83.7,278.5L84.5,278L85,278.2L85.4,278.3L85.8,278.2L86.2,278L86.7,277.6L87.2,277.3L87.5,277L88.1,276.3L88.3,276.2L88.9,276L88.9,276.2L89.2,276.4L89.7,276.4L90,276.4L90.1,276.3L90.3,276.4L90.6,276.3L91,276.1L91.5,275.8L91.9,275.4L92.1,275.1L92.6,274.4L93,274.1L93,274.4L93.3,274.5L93.5,274.5L93.7,274.6L93.8,274.9L93.9,274.8L94.4,275L94.5,275.4L94.2,275.6L94,275.9L93.8,275.9L93.8,276.4L94.3,276.5L94.5,276.3L94.5,276L94.6,276L94.8,275.7L94.9,275.7L95,275.8L95,275.6L94.9,275.4L95.1,275.2L95.2,275.4L95.2,275.2L95.3,275.1L95.6,275.4L95.9,275.6L95.9,275.8L95.9,275.9L95.9,276.3L95.9,276.5L96.3,276.5L96.5,276.6L96.6,276.8L96.8,276.5L97,276.3L97.6,276.2L98,276.1L98.3,276.1L98.5,276.2L98.9,276.2L99.3,276.4L99.5,276.5L99.6,276.6L99.4,276.7L99.3,277L99.2,277.1L99.3,277.5L99.4,277.4L99.5,277.5L99.8,277.5L99.8,277.7L100.2,277.7L100.4,277.7L100.3,277.8L100.3,277.9L100.1,278.1L100,278.1L100.1,278.2L100.6,278.2L101,278.3L101.1,278.5L101.3,278.4L101.5,278.1L101.8,278L102,278.1L102,278L102.2,277.9L102.4,278L102.5,278.2L102.7,278.1L102.9,278.1L103.2,277.7L103.3,277.8L103.6,277.7L103.7,277.8L103.9,277.7L103.9,277.8L104.3,277.8L104.7,278L104.8,278L104.9,278.1L105.1,278L105.2,278L105.4,278.3L105.5,278.4L105.7,278.5L105.9,278.3L105.9,278.5L106,278.3L106.5,278.5L106.6,278.8L106.8,278.9L107,278.8L107.3,278.9L107.4,278.7L107.6,279L107.9,279L108,278.8L108.3,278.8L108.6,278.7L109,278.7L109.3,278.8L109.6,278.8L109.6,278.7L110,279L110.2,279L110.4,279.2L110.7,279.2L110.8,279.3L111.1,279.3L111.2,279.4L111.3,279.3L111.7,279.3L111.9,279L112.2,278.9L112.2,278.8L112.7,278.6L112.7,278.5L113.2,278.3L113.5,278.3L113.7,278.2L113.8,278.2L114.3,278.4L114.6,278.5L115,278.8L115.2,279L115.4,279L116,279.3L116.4,279.4L116.7,279.5L116.9,279.7L117.3,279.7L117.7,279.8L124.5,314.4L125.3,318.1L125.9,321.6L127.1,321.7L127.1,321.3L128.3,321.6L128.8,320.8L130.1,320.4L130.2,320.6L130.1,321.7L130.6,322L131.2,322.2L131.4,322.2L131.6,322.7L131.9,322.9L134.6,324.6L135.1,325.7L135.2,326.1L135.3,326L135.7,325.5L136.4,324.6L136.5,324.5L137,324.4L137.1,323.8L136.9,323L137.2,323L137.3,322.9L137.4,322.6L137.3,322.4L137,322.3L137.3,322L137.8,321.8L138.7,320.9L139.3,321.2L139.6,321.4L139.7,321.4L140,321.6L140.1,322L140,322.1L140.1,322.3L140.3,322.4L140.3,322.6L140.5,322.8L141.1,322.8L141.2,323L141.6,323.2L141.8,323.2L142.1,323.5L142.2,323.8L142.4,323.8L142.4,324L142.7,324.2L143.8,324.5L144.2,324.9L144.7,325.2L145.2,325.5L145.1,325.7L145.5,326.1L146.1,326.5L146.5,327.1L147.2,327.6L147.7,328.2L148.1,328.5L148.4,328.9L149.1,329.4L149.5,329.9L149.4,330.5L150.3,330.4L150.3,331.3L151,331.4L151.1,331.6L151.2,331.8L151.4,332.2L152,331.9L152.4,332.1L153.3,332.3L153.5,332.4L154.3,332.3L154.8,332.6L155.3,332.6L155.5,333L155.7,333L156,333L156.3,332.8L156.8,333.2L156.9,333.6L156.8,334L156.8,334.4L156.9,334.6L157,334.7L157.1,335.1L157.4,335.5L157.5,335.6L157.8,336.1L158,336.3L157.8,336.7L157.8,337.3L157.8,337.4L157.8,337.8L157.7,338.1L157.5,338.6L157.3,338.9L157.1,339L157.2,339.2L157.1,339.3L156.9,339.2L156.9,339L156.7,339L156.8,339.1L156.7,339.3L156.5,339.3L156.3,339.1L156.1,338.7L156.1,338.5L155.9,338.4L155.8,338L155.7,338L155.5,337.9L155.4,337.7L155.6,337.3L155.6,337L155.8,337L155.6,336.8L155.4,336.5L155.4,336L155.1,335.3L154.9,335.1L154.3,334.6L154,334.5L153.9,334.4L153.8,334.5L154.1,334.7L154.5,334.9L154.6,335.1L154.9,335.4L155.2,335.9L155.1,336.1L155.2,336.4L155.4,336.7L155.6,336.9L155.5,337L155.3,336.7L155.2,336.7L155.3,336.9L155.4,337.2L155.2,337.7L155.1,337.8L154.8,337.7L154.9,337.3L154.9,337L154.8,336.9L154.6,337L154.8,337.2L154.8,337.4L154.6,337.7L154.5,337.7L154.1,337.4L154.1,337.6L153.8,337.5L153.6,337.5L153.5,337.3L153.1,337.2L153,336.9L153.3,336.7L153.4,336.4L153.2,336.3L153.1,336L153,335.9L153.1,335.7L153.1,335.6L153,335.6L152.9,335.3L152.9,335.2L152.5,335.3L152.6,335.5L152.8,335.5L152.8,335.7L152.8,336L152.9,336.2L152.8,336.6L152.6,336.6L152.8,336.9L152.8,337.1L152.5,337L152.2,337L152.1,336.9L151.8,336.4L151.6,336.2L151.8,336.3L151.8,336L152,335.7L151.9,335.2L151.7,334.8L151.7,334.6L151.8,334.6L151.9,334.4L151.8,334.1L151.6,334.2L151.7,334.4L151.5,334.6L151.4,334.9L151.7,335.2L151.7,335.4L151.4,335.5L151.3,335.7L151.4,335.8L151.3,335.9L151.2,335.8L151.1,335.5L150.9,335.5L150.7,335.1L150.4,335.2L150.5,335.4L150.1,335L149.9,334.6L149.9,334.5L150.1,334.4L150.1,334.1L150.2,333.9L150.4,333.8L150.6,334L150.6,333.7L150.3,333.2L150.4,333.1L150.7,333.2L150.8,333.4L150.9,333.5L150.9,333.4L150.8,333.1L150.5,333.1L150.3,333L150.2,332.8L150.1,332.7L150,332.9L149.9,332.7L149.7,332.7L149.5,332.5L149.6,332.3L149.5,332.1L149.3,332.1L148.9,331.9L148.7,331.7L148.5,331.6L148.3,331.4L148.5,331.1L148.3,330.9L148.2,331.2L148.1,331.2L148.1,331.3L147.8,331.1L147.5,331.2L147.4,331L147.2,331.2L146.6,331L146.5,330.8L146.5,330.5L146.7,330.5L147,330.4L147,330.2L146.8,330.2L146.5,330.2L146.5,330L146.2,329.6L146.2,329.3L146,329.4L145.8,329.4L145.6,329.2L145.6,328.8L145.7,328.7L145.9,328.8L146.2,328.8L146.9,329L146.9,328.9L146.6,328.8L146.4,328.8L145.7,328.4L145.6,328.1L145.4,328.2L145.5,328.4L145.3,328.5L144.8,328L144.2,327.5L143.9,327.1L143.9,326.8L143.9,326.6L144,326.4L143.8,326L143.7,326.1L143.8,326.4L143.6,326.6L143.7,326.7L143.8,326.8L143.8,327L143.7,327L143.5,327.1L143.3,327.2L143,327.1L142.9,327.2L142.6,327.1L142.1,326.6L141.9,326.2L141.4,325.8L141.2,325.5L141.4,325.4L141.1,324.8L141,325.1L141.1,325.3L140.6,324.9L140.4,324.2L140.2,323.9L139.9,323.4L139.5,323.1L139.2,323L139.2,323.1L139.4,323.2L139.5,323.3L139.7,323.4L140,323.9L139.8,323.9L139.4,323.4L139.2,323.3L139,323.3L139.4,323.6L139.6,323.9L139.8,323.9L139.9,324.3L140,324.6L140.2,324.7L140.1,324.8L140.5,325.2L140.6,325.4L140.9,325.9L141,326L140.9,326L141.3,326.7L141.5,327L141.6,327.2L141.5,327.2L141.5,327.5L141.7,327.7L141.4,327.7L141.2,327.6L141.1,327.6L140.9,327.5L140.7,327.3L140.6,327L140.4,327.1L140.1,327L139.9,327.2L139.5,327.4L139.4,327.1L139.2,327.1L139.2,327L139.4,326.8L139.2,326.6L139.2,326.4L138.8,326L138.8,325.9L138.5,325.6L138.6,325.5L138.5,325.1L138.3,324.9L138.2,324.9L138.4,325.4L138.5,325.9L138.3,326L137.8,325.8L137.6,325.8L137.3,325.2L137.3,325.5L137.2,325.6L136.8,325.5L136.7,325.6L136.6,325.4L136.5,325.5L136.5,325.7L136.9,325.8L137,325.7L137.4,325.8L137.7,326L138.1,326.3L138,326.5L137.9,326.7L137.9,326.8L138.2,326.5L138.2,326.4L138.4,326.3L138.6,326.7L138.9,326.9L139.2,327.5L139.1,327.7L138.7,327.9L138.6,327.9L138.7,327.7L138.5,327.7L138.4,327.8L138.5,327.9L138.5,328.1L138.1,328.1L138,328.2L138.1,328.4L138.1,328.6L137.9,328.6L137.7,328.3L137.4,328.3L137.4,328.2L137.1,328L136.9,328L136.7,328.1L136.3,327.9L136.2,327.9L135.6,327.6L135.1,327.4L135.1,327.2L134.8,327L134.4,326.9L134.3,326.8L134.3,326.5L134.1,326.3L133.5,326L133.3,325.8L132.4,325.7L132,325.5L131.6,325.3L130.7,325.1L130.4,325L129.5,324.6L129.2,324.5L129.2,324.4L129.4,324L129.6,324L129.6,324.1L129.8,324.1L129.7,323.9L129.8,323.6L129.6,323.6L129.6,323.3L129.4,322.9L129.4,322.7L129.6,322.5L129.5,322.4L129.6,322.3L129.4,322.1L129.3,322.3L129.4,322.5L129.2,322.7L129.1,323L129.1,323.2L128.3,323.7L128.3,323.9L128.1,324L127.3,324.1L126.7,324.1L126.5,324L125.4,323.7L125.2,323.5L125.4,323.5L125.6,323.4L125.6,323.1L125.3,322.6L125.3,322.4L125.1,322.5L124.8,322.4L124.9,322.6L125.4,323L125.3,323.1L124.9,323.4L124.6,323.4L124.2,323.3L123.7,323.3L123.4,323.2L122.7,323.2L122.3,323.2L121.9,323.3L121.4,323.5L120.8,323.7L120.1,323.9L119.7,324.1L119.4,324L119.1,324.2L118.6,324.7L118.3,325.2L118.3,325L118.5,324.5L119,324L119.3,323.9L119.2,323.7L118.8,323.6L118.7,323.5L118.6,323.8L118.4,323.5L118.2,323.4L118,323.5L117.9,323.4L117.3,323.4L117.4,323.3L117.7,323.2L117.3,323.1L117.2,323.1L117.1,323L117.3,322.4L117.2,322.3L117.1,322.5L116.9,322.6L116.9,322.8L116.8,323.1L116.5,323.1L115.9,322.8L115.9,322.7L115.6,322.6L115.3,322.5L115,322.7L114.8,322.6L114.9,322.5L115.1,322.3L115.3,322L115.2,322L115.1,322.2L114.5,322.6L114.3,322.7L113.9,322.8L114,323L114.4,322.8L114.5,322.9L114.6,323.1L114.4,323.1L114.2,323.3L114.1,323.3L113.8,323.5L113.5,323.8L113.4,323.8L113.3,323.6L113.6,323.3L113.3,323.4L113.2,323.3L113.1,323.1L113.3,322.8L113.4,322.7L113.5,322.6L113.7,322.7L113.9,322.6L114,322.5L114.3,322.4L114.8,322.1L115.1,322L115,321.9L114.9,321.9L114.8,321.6L114.8,321.8L114.6,321.9L114.6,321.8L114.8,321.5L114.8,321.5L114.6,321.7L114.2,321.9L114.1,322L114,321.9L114.5,321.4L114.4,321.2L114.2,321.5L113.9,321.6L113.8,321.5L113.7,321.7L113.6,321.8L113.1,321.8L113,321.5L113.2,321.4L113.3,321.5L113.4,321.3L113.8,321.2L114,321.1L114.1,320.8L113.9,320.9L113.8,321L113.7,321.1L113.3,321.2L113.1,320.9L113,320.9L112.9,321.2L112.8,321.3L112.7,321L112.8,320.9L113,320.9L112.9,320.8L112.8,320.6L112.9,320.4L113.1,319.9L113.8,319.8L113.7,319.7L113,319.8L112.9,320.1L112.7,320.2L112.6,320.5L112.3,320.7L112.1,320.7L112.3,320.5L112.2,320.1L112,319.9L112.2,319.8L112,319.7L111.9,319.9L111.9,320.1L112,320.3L111.9,320.5L112,320.7L111.9,320.8L111.6,320.6L111.7,320.9L111.5,321.1L111.3,321L111.3,320.8L111.2,320.7L111.1,321L111.1,321L111,320.5L111.1,320.2L111,320.2L110.9,320.7L111,321.1L111,321.2L110.8,321.3L110.8,321.1L110.6,321L110.6,321.2L110.7,321.4L110.6,321.5L110.3,321.4L110.1,321.6L109.8,321.6L109.8,321.5L109.9,321.1L110.1,320.5L110.1,320.3L110.5,319.8L110.6,319.4L110.5,319.4L110,320.3L110,320.4L109.9,320.6L109.8,320.6L109.7,320.3L109.6,320.4L109.6,320.7L109.6,320.9L109.4,321.1L109.4,321.3L109.3,321.6L109.2,321.5L109.1,321.7L109.3,321.8L109.3,322.1L109.4,322.2L109.5,321.8L109.8,321.8L109.9,321.9L110,322.2L109.9,322.4L109.6,322.5L109.5,322.9L109.5,323.1L109.7,323L109.8,322.7L110,322.5L110.3,322.8L110.3,323L110.4,323.2L110.3,323.9L110.1,324L110,323.8L109.8,323.7L109.8,323.9L109.6,324.1L109.6,324.1L109.9,324.1L110.1,324.2L110.6,324.6L110.8,324.9L110.8,325.2L110.7,325.3L110.4,325.5L110.2,325.5L110.1,325.5L109.9,325.6L110,325.4L109.7,325.1L109.8,324.9L109.6,324.6L109.5,325.2L109.6,325.4L109.5,325.6L109.3,325.3L109.2,325.3L109.2,325.6L109,325.7L108.8,325.5L108.5,325.7L108.4,325.5L108.2,325.6L108,325.6L107.9,325.5L108.1,325.2L108,325.2L107.8,325.3L107.6,326L107.4,326.2L107.3,326.2L107.4,325.9L107.5,325.6L107.3,324.9L107.2,324.9L107.1,325L107.2,325.3L107.3,325.5L107.2,325.6L107.2,325.9L107,325.8L107,325.9L106.9,326.2L106.8,326.2L106.9,326.4L107.1,326.5L107.1,326.8L106.8,326.7L106.7,326.2L106.8,326.1L106.7,325.8L106.5,325.8L106.6,326L106.5,326.2L106.6,326.9L106.6,327.2L106.4,326.9L106.3,326.7L106.2,326.6L105.9,326.5L105.9,326.7L106.1,326.8L106.2,327.1L105.6,327.7L105.4,328.1L105.4,328.2L105.3,328.3L105.2,328.6L105.1,328.6L105.1,328.3L105.3,327.5L105.3,327.4L105.1,327.7L105,328.1L104.9,328.1L104.7,327.5L104.7,327.7L104.6,327.7L104.7,327.9L104.7,328.3L104.4,328.3L104.3,328.5L104.2,328.6L104,328.9L104,329L103.9,329.2L103.8,329.2L103.8,329L103.7,328.9L103.5,329.1L103.6,329.3L103.4,329.3L103.2,329.2L103.1,329.3L102.9,329.2L102.8,329L102.8,329.2L102.6,329.3L102.6,329.4L102.5,329.4L102.4,329.6L102.1,329.6L102,329.3L101.8,329.4L101.7,329.3L101.7,329.2L101.5,329.2L101.5,328.9L101.5,328.8L101.7,328.7L101.7,328.4L102,328.3L102,328.3L102.3,328.1L102.6,328.1L102.5,327.9L102.8,327.8L103.1,327.6L103.3,327.6L103.2,327.3L103.4,327.2L103.4,327.1L103.7,326.7L103.6,326.6L103.4,326.7L102.9,327.2L102.7,327.2L102.6,327.4L102.2,327.4L101.9,327.1L101.7,326.9L101.7,326.8L101.8,326.3L101.9,326.1L102,325.6L102.2,325.3L102.4,325.1L102.6,324.7L102.7,324.4L102.7,324.1L102.9,323.9L102.9,323.3L102.9,323.2L102.8,323L102.6,322.4L102.9,322.3L102.9,322.2L103.4,322L104.1,321.3L104.8,320.8L105.2,321.5L105.6,321.5L105.7,321.6L105.9,321.1L106.2,321.1L106.5,321.3L106.6,321.2L107.1,321.4L107.6,321.4L107.9,321.6L107.9,321.5L107.7,321.3L107.4,321.1L107.1,321.2L106.7,321L106.5,321L106.2,320.9L106,320.6L105.7,320.4L105.4,320.3L105.6,320L105.7,320L106,319.5L106.1,319.4L106.2,319.2L106.5,319L106.8,318.9L106.5,318.7L106.3,318.7L106,318.9L105.9,319.1L105.8,319.2L105.7,319.5L105.7,319.8L105.6,319.9L105.4,319.8L105.1,319.8L104.5,319.9L104.3,319.8L104.1,319.7L104,319.9L103.3,320.3L103.1,320.9L102.8,321L102.6,321.1L102.4,321.1L102.1,321.3L101.7,321.8L101.7,321.9L101.9,322.4L101.9,322.5L101.6,322.4L101.5,322.5L101.2,322.7L101.1,323L100.8,323.2L100.6,323.5L100.6,323.8L100.6,323.9L100.8,324L100.5,324.2L100.4,324.5L100.3,324.5L100.1,324.8L99.9,324.8L99.8,324.7L99.6,324.7L99.7,325L99.8,325.1L99.8,325.2L100,325.3L100.1,325.5L100,325.8L99.8,325.9L99.8,326.2L99.6,326.3L99.5,326.4L99.2,326.4L99.1,326.3L98.8,326.5L98.6,326.5L98.5,326.7L98.6,326.6L98.8,326.7L98.9,326.6L99.1,326.6L99.1,326.8L99,327.2L98.8,327.3L98.6,327.5L98.4,327.4L98.4,327.5L98.3,327.6L98.2,327.5L98.2,327.4L98.2,327.1L98.1,326.8L98.1,327.2L98,327.5L97.9,327.5L97.8,327.4L97.7,327.6L97.8,327.7L97.8,327.9L97.4,327.9L97.5,328.3L97.4,328.4L97.2,328.5L97.1,328.5L96.9,328.6L96.8,328.6L96.5,328.7L96.6,328.8L96.7,328.9L96.6,329L96.5,329.2L96.5,329.5L96.4,329.6L96.2,329.8L96.4,329.9L96.4,330.1L96.4,330.3L96.7,330.1L97.2,330.2L97.3,330.1L97.4,330.2L97.5,330.1L97.7,330.4L97.9,330.5L98,330.4L98.2,330.6L98.4,330.8L98.4,331L98.6,331.1L98.3,331.1L98.2,331.6L98.1,331.7L97.9,331.8L97.8,332.1L97.6,332.2L97.2,332.2L97,332.3L97,332.6L96.9,332.8L96.7,332.8L96.6,332.8L96.7,333.2L96.8,333.3L96.6,333.4L96.4,333.4L96.4,333.5L96.6,333.7L96.5,334L96.3,334.2L96.2,334.3L96.3,334.4L96.1,334.4L96,334.6L95.8,334.3L95.7,334.3L95.7,334.6L95.7,334.7L95.5,334.7L95.4,334.9L95.3,334.8L95.3,334.7L95.1,334.7L95.1,334.9L94.9,335L94.7,334.9L94.4,334.9L94.1,335.2L94.2,335.4L94.2,335.6L93.8,335.8L93.6,335.8L93.6,336L93.7,336.1L93.6,336.2L93.5,336.3L93.1,336.1L93.1,335.9L92.9,336L92.8,336.3L92.8,336.5L92.6,336.6L92.6,337L92,337L91.8,336.9L91.8,337.2L91.9,337.5L91.7,337.5L91.6,337.3L91.4,337.3L91.4,337.5L91.1,337.6L90.7,337.9L90.6,338L90.5,338.1L90.6,338.2L91.1,337.9L91.1,338.1L91,338.4L90.9,338.4L90.9,338.5L91,338.7L91,338.8L90.8,338.9L90.8,339.1L90.5,339.2L90.4,339.4L90.5,339.5L90.2,339.5L89.9,339.6L89.9,339.8L89.7,339.9L89.6,339.6L89.5,339.8L89.3,339.9L89.1,340.1L88.9,340.2L89,340.4L88.8,340.5L88.6,340.3L88.4,340L88.2,340.1L88.2,340.3L88.3,340.3L88.3,340.4L88,340.5L87.9,340.7L87.9,340.8L88.1,340.9L88.1,341.1L87.8,341.1L87.6,341.1L87.5,340.8L87,340.9L86.8,341.1L86.7,341.1L86.6,341.3L86.7,341.3L87,341.2L87.2,341.3L87.2,341.5L87.1,341.7L86.7,341.5L86.5,341.5L86.4,341.7L86.1,341.7L85.9,341.6L85.7,341.7L85.5,342L85.5,342.2L85.9,342.3L86.2,342.5L86.1,342.6L85.8,342.7L85.8,342.8L86,342.9L86.2,342.7L86.4,342.8L85.9,343.1L85.6,343.3L85.6,343.5L85.5,343.3L85.4,343.4L85.6,343.6L85.5,343.8L85.4,343.7L85.3,343.7L85.3,343.9L85.1,343.5L85.1,343.2L84.9,343.4L85,343.7L84.9,343.9L84.7,343.9L84.8,343.7L84.4,343.7L84.3,344L84,344L83.3,344.1L83.1,344.2L83,344.3L82.9,344.6L82.8,344.4L82.9,344.1L82.7,344.1L82.7,344.2L82.7,344.7L82.5,344.9L82.6,345.1L82.3,345.4L82,345.5L82.1,345.3L82.3,345.3L82.3,345.1L82.2,345.1L82.3,344.7L82.4,344.4L82.2,344.2L81.9,344.2L81.8,344.2L81.8,344.4L81.7,344.5L81.6,344.4L81.4,344.4L81.2,344.7L80.9,345L80.7,345L80.3,344.9L80.3,345L80.3,345.2L80.1,345.5L80.1,345.6L79.9,345.7L79.8,345.3L79.8,345.3L79.6,345.4L79.5,345.3L79.3,345.4L79.6,345.5L79.6,345.8L79.3,345.8L79.1,345.7L79.2,345.5L79.1,345.4L78.9,345.5L78.7,345.8L78.1,346.1L77.8,346L77.7,345.9L77.5,346L77.4,346L77.5,345.4L77.8,345L77.9,344.9L77.7,344.8L77.4,344.8L77.2,344.8L76.9,345.2L76.9,345.7L76.5,346.2L76.4,346.3L76.3,346.6L76.1,346.4L75.9,346.4L76,346.7L76.1,346.8L76,347L75.8,347.1L75.6,347L75.7,346.8L75.5,346.7L75.4,346.9L75.4,347.1L75.3,347.3L75.1,347.2L74.8,347.2L74.7,347.1L74.6,346.8L74.9,346.8L74.7,346.6L74.7,346.2L74.5,345.9L74.4,345.9L74.3,346L74.2,346.2L74.2,346.4L74.3,346.4L74.5,346.7L74.3,346.8L74.4,347.2L74.4,347.4L74.2,347.3L74,347.3L74,347.4L73.8,347.5L73.7,347.5L73.5,347.4L73.4,347.1L73.4,347L73.3,346.8L73.2,346.6L72.9,346.7L72.7,346.9L73.1,347.3L73.2,347.4L72.6,347.8L72.4,347.8L72.2,347.9L72.3,348.1L72.6,348.2L72.7,348.1L72.8,348.3L72.9,348.7L72.7,348.6L72.8,348.5L72.6,348.4L72.5,348.5L72.4,348.4L72.2,348.2L72,348.3L72,348.5L71.8,348.5L71.5,348.7L71.3,348.6L71,348.5L70.5,348.4L70.2,348.5L69.8,348.5L69.5,348.8L69.4,349L69.1,349.2L68.6,349.3L68.3,349.2L68.1,349L68,348.9L68,348.6L67.9,348.5L67.9,348.3L68,348.2L68.5,348.1L68.6,348L68.9,347.6L69.1,347.2L69.1,347.1L69.4,346.9L69.5,346.9L69.7,347.1L70.1,347L70.4,346.9L70.6,346.9L71,346.6L71.3,346.6L71.6,346.7L71.9,346.7L71.9,346.9L72.1,347.2L72.2,347.4L72.1,347.6L72.4,347.6L72.3,347.4L72.4,347.2L72.6,347.4L72.5,347.2L72.6,346.9L72.6,346.5L72.9,346.3L73.1,346.3L73.5,346.4L73.7,346.4L73.8,346.1L73.7,346.1L73.7,346L73.9,345.9L74,345.8L74.2,345.8L74.5,345.5L74.5,345.6L74.6,345.7L74.8,345.5L74.8,345.2L74.6,345.2L74.9,345L75.6,344.3L75.9,344.1L76.2,343.9L76.3,343.9L76.6,343.7L76.9,343.5L77.1,343.5L77.5,343.3L77.8,343.3L78.6,343.1L78.9,343.2L79,343.1L79.4,343.1L79.5,343.2L79.3,343.3L79.3,343.5L79.4,343.5L79.4,343.7L79.1,343.7L79,344L79.3,344.5L79.5,344.4L79.7,344.6L79.7,344.5L79.5,344.3L79.5,343.9L79.5,343.8L79.7,343.9L80.2,344L80.2,344.3L80.4,344.3L80.7,344.5L80.7,344.4L80.6,344.2L80.9,344.2L80.4,343.8L80.1,343.6L80.2,343.4L80,343.4L80.4,342.8L80.6,342.3L80.7,342.1L81,342L81.3,341.6L81.5,341.6L81.9,341.3L82.2,341L82.9,340.7L83.3,340.5L83.7,340.3L84.3,340L84.5,339.8L84.7,340.1L84.9,340.2L85.1,340.1L85.2,339.9L85.1,339.7L85.1,339.5L85.3,339L85.6,338.6L86,338.1L86.2,337.9L86.4,337.8L86.8,337.6L87,337.5L87.2,337.1L87.3,337.1L87.6,336.8L87.8,336.8L87.9,337L88,337.1L88.1,337L88,336.5L87.8,336.5L87.8,336.4L87.8,336L87.9,335.8L88.2,334.2L88.3,334L88.7,334L88.8,333.8L88.6,333.8L88.3,333.5L88.3,333.3L88.4,332.9L88.6,332.5L88.8,332.4L89.1,332L89.5,331.6L89.6,331.4L89.8,331L89.7,330.8L89.8,330.7L89.8,330.5L89.9,330.4L89.8,330.4L89.7,330.5L89.7,330.7L89.5,330.9L89.2,331L88.9,331.1L88.7,331.2L88.5,331.2L88.4,331.3L88.1,331.4L87.7,331.6L87,331.9L86.8,331.8L86.6,331.6L86.5,331.3L86.4,331.1L86,331L86.1,330.8L86.2,330.7L86.3,330.1L86.2,330.1L86,330.5L85.6,330.6L85.5,330.9L85.6,331.1L85.5,331.2L85.4,331.3L85.3,331.4L85.4,331.7L85.5,332.1L85.6,332.4L85.4,332.7L85.1,332.8L84.8,332.6L84.5,332L84.2,331.1L84,330.8L83.8,330.6L83.5,330.6L83.7,330.3L83.6,330.1L83.4,330.2L83.3,330.5L83.1,330.5L83.1,330.7L82.9,330.8L82.7,330.5L82.7,330.4L82.6,330.3L82.5,330.4L82.4,330.4L82.4,330.1L82.2,330.2L82,329.9L82.2,329.8L82,329.4L81.7,329.6L81.2,329.8L81,330L80.8,330.4L80.7,330.1L80.4,330.2L79.5,330.6L79.4,330.8L79.4,331L79,331.1L78.9,331.2L78.7,331.2L78.6,331.4L78.4,331.4L78.4,331.2L78.2,331L77.7,331L77.5,330.8L77.9,330.7L78,330.9L78.2,330.8L78.3,330.7L78.5,330.4L78.6,330.1L78.5,329.8L78.6,329.5L78.5,329.2L78.5,329.1L78.4,329L78.2,328.6L78.1,328L78.4,327.6L78.6,327.5L78.8,327.2L79,327.1L79,326.8L78.8,326.6L78.7,326.4L78.7,325.9L78.4,325.3L78.4,325L78.2,324.7L78.2,324.4L78,324.1L77.9,323.9L77.7,323.8L77.6,323.9L77.6,324.2L77.6,324.4L77.5,324.6L77.4,324.7L77.2,324.7L77,324.6L76.9,324.8L76.5,324.8L76.1,325.1L75.5,325.2L74.8,325.2L74.2,325L73.8,324.8L73.7,324.7L73.6,324.3L73.8,324.2L73.7,323.9L73.3,323.6L73.1,323.2L73.1,323L72.9,322.8L72.8,322.5L72.4,322.4L72.2,322.2L71.9,321.7L72.1,321.7L72.4,321.5L72.4,321.3L72.2,321.3L71.8,321.4L71.5,321.3L71.4,321.1L71.5,321L71.7,321L72.3,320.6L72.3,320.6L72.5,320.5L72.4,320.3L72.4,320.2L72.7,320.1L72.5,320.1L72.5,319.8L72.8,319.5L72.7,319.5L72.5,319.7L72.2,319.4L72.2,319.3L72.4,319.1L72.6,319.2L72.8,319.1L72.8,318.9L72.7,319L72.4,318.8L72.3,318.6L72.4,318.5L72.2,318.5L72.2,318.3L72.1,318.4L71.9,318.7L71.8,318.7L71.5,318.6L71.4,318.5L71.4,318.2L71.5,317.7L71.4,317.7L71.1,317.6L71,317.4L71,317L71.3,316.9L71.4,316.7L71.3,316.5L71.1,316.4L70.7,316.4L70.7,316.6L70.6,316.5L70.6,316.1L70.7,315.6L70.8,315.5L70.7,315.9L71.4,315.9L71.4,315.8L71.2,315.7L71.1,315.6L70.9,315.2L71,315.1L71.2,315.1L71.7,315.2L71.9,315.2L71.8,314.6L71.8,314.4L71.9,314.1L72.1,313.8L73,312.9L73.1,312.8L73.3,312.5L73.6,312.3L73.7,312.1L73.9,311.8L74,311.7L74.2,311.7L74.3,311.7L74.2,311.2L74.6,310.5L74.7,310.3L75,310.1L74.9,310L75,309.9L75.5,309.4L75.9,309.3L76.3,309.3L76.6,309.5L76.9,309.6L77.1,310L77.2,310L77.3,310.2L77.6,310.6L78.2,310.5L78.7,310.1L78.7,309.9L79.1,309.9L79.6,309.2L79.8,308.9L80,308.8L80,308.6L80.1,308.5L80.3,308.7L80.4,308.7L80.5,309L80.9,309.1L81.2,309L81.4,309.1L82,309.1L82.3,309L82.4,308.8L82.9,308.3L83.2,307.8L83.2,307.6L83.2,307.2L83,306.8L83,306.4L83,305.9L83,305.7L82.6,305L82.5,304.9L82.2,304.7L82,304.7L82.2,304.3L82.4,304.2L82.5,304.3L82.7,304.5L83,304.5L83,304.3L83.2,304.3L83.5,304L83.6,303.5L83.4,303L83.1,302.7L82.9,302.5L82.9,302.6L82.7,302.8L82.5,303.1L82.2,303.2L81.9,303L81.5,303.3L80.9,303.4L80.7,303.7L80.1,304L79.9,304.2L79.8,304.6L79.5,304.9L79.5,304.5L79.4,304L79.3,303.8L79.1,303.8L79.2,303.7L79,303.5L78.9,303.3L78.6,303.5L78.7,303.7L78.9,303.8L78.9,303.9L79.1,303.9L79.1,304.1L78.9,304.4L78.8,304.4L78.7,304.1L78.3,303.7L78,303.6L77.6,303.4L77.3,303.5L77.1,303.4L76.8,303.4L76.4,303.4L75.6,303.7L75.2,303.7L74.5,303.3L73.9,303L73.5,302.9L73,302.6L72.7,302.3L72.6,301.9L72.7,301.6L72.8,301.5L72.8,301.2L72.7,300.9L72.4,300.6L72.5,300.4L72.2,300.1L72.2,299.9L72.4,300.1L72.6,300.1L72.7,300L72.9,300L73,299.9L73.1,299.7L73.3,299.5L73.1,299.2L73,299.1L72.8,299.1L72.5,299L72.2,298.7L71.5,298.5L71.2,298.3L71,298L70.7,297.7L70.4,297.5ZM55.5,353.8L55.8,353.7L55.8,353.5L56,353.6L56.1,353.4L56.2,353.2L56.4,353.1L56.5,352.9L56.4,352.9L56.6,352.5L57.1,352.2L57.3,352.4L57.5,352.4L57.8,352.4L57.8,352.2L57.7,352.1L57.8,351.9L57.8,351.7L58,351.5L58.4,351.3L59,351.3L59.2,351.5L59.5,351.6L59.5,351.7L59.3,351.9L59.3,352.2L58.7,352.4L58,352.6L57.7,352.8L57.7,352.9L57.4,353.2L57.2,353.4L56.9,353.3L56.6,353.6L56.4,353.6L56.3,353.8L56.2,353.7L55.9,353.8L55.3,353.9ZM54.8,354.1L55.1,353.9L55.1,354.1L54.8,354.1ZM53.7,352.8L53.8,352.6L54,352.6L54,352.8L53.9,353L53.7,353ZM57.6,336.6L58,336.8L58.2,336.8L58.3,336.9L58,337.1L57.8,337.1L57.8,336.9L57.6,336.8ZM53.8,352.4L53.8,352.5L53.7,352.5ZM52.9,353.2L53.1,353.2L53.3,353.3L53.3,353.2L53.6,353.2L53.8,353.3L53.8,353.4L53.6,353.7L53.3,353.5L53.1,353.5L52.9,353.4ZM52.7,352.9L52.8,352.9L53,353L53,353.1L52.8,353.2L52.7,353.1ZM52.3,353.7L52.4,353.4L52.7,353.6L52.6,353.8ZM56.6,333.8L56.7,333.7L57,333.7L57,333.7L57.3,333.7L57.2,333.9L56.9,334.1L56.9,334ZM50.4,353.8L50.5,353.6L51,353.5L51.2,353.6L51.2,353.7L51,353.9L50.8,353.9L50.7,353.9L50.5,354.1L50.3,354ZM49.5,353.6L49.6,353.8L49.4,353.7ZM49,353.9L49.2,353.8L49.3,354L49.1,354.1L49,354.1ZM61,304.7L61.1,304.6L61.3,304.3L61.4,304L61.5,304L61.5,303.7L61.6,303.8L61.6,303.9L61.6,304.1L61.6,304.3L62,304.6L62.5,304.9L62.9,305.1L63.4,304.9L63.8,304.8L64.2,304.9L64.4,305.2L64.5,305.3L64.5,305.8L64.5,305.9L64.8,306.2L65.2,306.4L65.3,306.5L65.3,306.7L65.6,306.8L66.2,307L66.3,307L67,307.4L66.7,307.9L66.5,308L66.1,307.8L65.8,307.7L65.4,307.7L65,308L64.9,308.2L64.9,308.4L64.7,308.6L64.5,308.4L64.5,308.3L64.4,307.8L64.3,307.5L64,307.2L63.7,307.2L63.7,306.9L63.6,306.7L63.3,306.2L62.8,305.8L62.3,305.7L61.9,305.7L61.7,305.9L61.5,306L61.3,305.8L61,305.6L60.9,305.2L60.9,305ZM45.2,353.8L45.4,353.6L45.8,353.5L45.9,353.5L46.1,353.8L46.1,353.9L45.8,354L45.4,354L45.2,354ZM54.7,317.4L54.8,317.2L55,317L55.1,317.1L55,317.3L55.1,317.5L55.2,317.9L55.5,318.2L55.7,318.3L55.9,318.3L56.2,318.8L56.1,318.8L56,318.7L55.6,318.5L55.4,318.5L55.2,318.3L54.9,317.6ZM54.9,316.5L54.9,316.6L54.9,316.9L54.7,316.7ZM41.2,353.4L41.5,353.5L41.8,353.7L41.9,353.6L42,353.6L42.4,353.6L42.6,353.7L42.5,353.8L42.6,353.9L42.7,353.9L43,354.1L43.2,354.1L43.3,354.2L43.6,354.2L43.7,354.3L44,354.4L43.8,354.4L43.6,354.4L43.5,354.4L43,354.3L42.8,354.3L42.7,354.3L42.6,354.3L42.4,354.2L42.2,354.1L41.7,353.9L41.6,353.9L41.4,353.8L41.3,353.6L41.2,353.5ZM37.6,352.7L38.2,352.7L38.2,352.9L38.5,352.8L38.5,352.9L38.8,352.8L38.8,352.7L39,352.9L39.2,352.9L39.4,352.8L39.4,352.9L39.8,352.9L39.8,352.7L40.3,352.8L40.2,352.6L40.6,352.8L40.8,352.7L40.8,352.6L40.5,352.4L40.3,352.3L40.4,352.2L40.6,352.3L40.7,352.2L40.8,352.1L41.2,352L41.5,352.2L41.6,352.6L41.6,352.7L41.3,352.9L40.9,352.8L40.8,353L41.1,353.3L41,353.4L40.9,353.3L40.7,353.3L40.6,353.4L40.5,353.3L40.3,353.2L40,353.5L39.8,353.3L39.1,353.3L39,353.2L38.8,353L38.6,353L38.4,353.1L38.2,353L37.9,352.9ZM37,352.7L37.2,352.7L37.2,352.9L37,352.8ZM37.2,351.8L37.4,352L37.2,352ZM36.4,352.6L36.4,352.6L36.8,352.7L36.8,352.8L36.6,352.7L36.4,352.8ZM35.8,352.3L36,352.3L36.2,352.4L36.3,352.8L36.1,352.7L36,352.5ZM35.3,351.7L35.5,351.6L35.7,351.7L35.9,352.1L35.6,352.1L35.7,352.4L35.5,352.5L35.4,352.4L35.2,352.3L35.3,352.1L35.2,352L35.3,351.7ZM34.8,352.7L35,352.5L35.1,352.6L35.2,352.7L35.4,352.7L35.3,352.6L35.6,352.6L35.7,352.7L35.6,352.9L35.4,352.8L35.4,353.1L35.2,352.9L35.2,353L35.1,352.9L35,353.1L35,352.9ZM32.5,352.9L32.7,352.7L32.9,352.6L33,352.5L33,352.3L33,352.2L33.4,352.3L33.5,352.1L33.5,351.8L33.6,351.6L33.8,351.7L33.9,351.8L34.2,351.6L34.2,351.7L34.2,352L33.9,352.1L33.9,352.2L34,352.3L34.1,352.4L34.5,352.4L34.8,352.5L34.8,352.7L34.6,353L34.4,353L34.1,352.9L33.9,353L33.7,353L33.5,353.1L33.4,352.9L33.3,353L33.3,353.2L33.2,353.1L33,353.1L33,352.9L32.9,352.7L32.6,353.1L32.5,353ZM31.7,351.2L31.8,351.2L31.8,351.3L31.7,351.3ZM30.7,351.8L31,351.8L31.2,351.9L31.5,351.9L32,351.9L32.2,351.8L32.4,351.4L32.6,351.4L32.7,351.4L32.8,351.7L32.4,351.9L32.4,352.3L32.2,352.4L31.9,352.4L31.6,352L31.3,352.1L30.9,351.9L30.8,352.1L30.8,352ZM29.6,350.6L29.7,350.5L30,350.5L30.4,350.7L30.5,350.9L30.4,351L30.5,351.2L30.7,351.2L30.8,351.3L31.2,351.3L31.1,351.4L30.6,351.4L30.4,351.6L30.4,351.7L30.3,351.8L30.2,351.7L30,351.8L30,352.1L30,352.1L30,351.8L29.8,351.9L29.7,351.6L29.6,351.5L29.7,351.5L30.1,351.5L30.2,351.3L30,351.2L29.9,351L29.6,350.6ZM28,351.3L28.3,351.4L28.2,351.5L28,351.3ZM27.5,351.2L27.7,351.4L27.7,351.5L27.5,351.4ZM27.8,350.3L28,350.1L28.1,350.3L28,350.6L27.8,350.5ZM26.8,351.9L26.9,351.8L26.9,352L26.9,352.2L26.8,352.1L26.7,352.2ZM26.2,352.1L26.4,352.1L26.3,352.4L26.1,352.4ZM23.8,347.7L23.9,347.8L24.1,347.7L24.3,347.8L24.5,348.1L24.3,348.3L24,348.4L23.9,348.3L23.7,348.1L23.7,348ZM20.9,348.2L21,348.1L21.2,348.3L21.4,348.4L21.6,348.6L21.6,348.7L21.8,349L21.9,349.4L22.1,349.6L22.1,349.8L22.5,350L22.7,350.2L22.5,350.2L22.4,350.1L22.1,350.1L22,349.9L21.7,349.5L21.6,349L21.4,348.7L21.2,348.7L21.1,348.5ZM21.1,346.6L21.2,346.6L21.3,346.7L21.4,346.9L21.2,347L21.1,347ZM20.3,347L20.4,347.1L20.5,347.4L20.3,347.3ZM20.3,345.9L20.4,345.9L20.5,346L20.5,346.2L20.3,346.2ZM17.7,345.5L18,345.5L18.2,345.4L18.6,345.4L18.8,345.2L19.1,345L19.2,344.9L19.3,345.2L19.1,345.3L19,345.4L18.7,345.6L18.9,345.7L18.8,345.8L18.7,345.8L18.3,345.6L18.1,345.6L18,345.8L17.9,345.8L17.7,345.5ZM15.3,341.9L15.5,342.1L15.3,342.1ZM11.5,338.2L11.7,338.3L11.7,338.4L11.5,338.2ZM11.3,337.9L11.4,338L11.3,338.1ZM11.1,337.7L11.2,337.9L11.1,337.9ZM9.1,338.6L9.2,338.5L9.4,338.5L9.6,338.6L9.9,338.5L10.3,338.7L10.1,338.7L10,338.8L9.9,339.2L9.7,339.1L9.6,338.9L9.3,338.8ZM8,335.3L8.6,335.2L8.9,335.3L9.7,335.9L9.8,336.2L10,336.4L10.2,336.9L10.1,337L9.8,336.8L9.7,336.6L9.4,336.7L9.3,336.8L9,336.5L8.7,336.5L8.5,336.3L8.5,336.1L8.6,335.9L8.4,335.5L8.1,335.4ZM155.2,338.2L155.2,338.1L155.3,338.2L155.4,338.4L155.2,338.3ZM154.8,339L155.3,338.6L155.4,338.9L155.6,338.9L155.5,339.2L155.3,339.3L154.9,339.2ZM154.5,339.2L154.6,338.9L154.7,338.9L154.5,339.2ZM154.3,338.8L154.3,338.5L154.2,338.4L154.3,338.3L154.2,338.2L154,337.9L154,337.7L154.1,337.7L154.3,337.7L154.4,337.8L154.5,337.8L154.7,337.9L155,338.5L154.9,338.7L154.7,338.8L154.5,338.7L154.4,338.9ZM153.2,337.6L153.2,337.3L153.2,337.3L153.8,337.6L153.8,337.8L153.9,338L153.9,338.5L153.6,338.3L153.3,337.9ZM150,333.2L150,333L150.1,333.1ZM150,333.8L150,333.6L150.2,333.4L150.4,333.5L150.4,333.6L150.2,333.8ZM149.7,333.4L149.8,333.2L149.9,333L149.9,333.2L149.8,333.5ZM151.3,340.1L151.4,340.1L151.4,340.3ZM149.1,334.8L149.1,334.6L149.3,334.6L149.6,334.9L149.7,335.1L149.6,335.2L149.4,335.1L149.3,335.1ZM148.9,334.3L148.9,333.9L149.1,333.7L149.3,333.7L149.5,333.6L149.8,333.6L149.9,333.8L149.8,334L149.9,334.3L149.8,334.4L149.5,334.6L149.2,334.4L149,334.4ZM149.6,338.5L149.7,338.3L149.7,338.5L149.6,338.6ZM149.7,341.1L149.8,341.1L150.1,341.6L149.9,341.5ZM148.4,337.9L148.5,337.8L148.4,337.6L148.6,337.6L148.7,337.7L148.6,338.1ZM148.2,337.7L148.3,337.7L148.4,337.8ZM148.4,338.7L148.3,338.4L148.4,338.3L148.6,338.2L148.8,338.2L148.8,338.4L148.7,338.6L148.8,338.6L148.9,338.4L148.9,338.2L149,338.3L149.1,338L149.3,337.9L149.5,338L149.5,338.2L149.4,338.4L149.2,338.4L149.2,338.6L149.3,338.6L149.4,338.8L149.2,338.9L149.1,339.2L149.1,339.5L148.8,339.3L148.9,339L148.8,338.8L148.5,338.6ZM147.6,336.6L147.7,336.4L147.7,336L148,335.9L148.1,335.8L147.8,335.8L147.8,335.6L147.9,335.7L148,335.5L147.6,335.4L147.7,335.2L147.5,334.9L147.6,334.7L148,334.6L148.7,334.5L149,334.7L149.2,335L149.2,335.3L149.3,335.2L149.5,335.5L149.7,335.6L149.9,335.5L150.5,335.8L150.7,336L151.1,336.3L151.3,336.7L151.6,336.8L151.8,337L151.9,337.1L152.2,337.2L152.4,337.4L152.3,337.5L152.1,337.3L151.3,337.2L151.3,337.3L151.2,337.7L151.3,337.7L151.4,337.5L151.5,337.5L151.7,337.4L151.8,337.5L152,337.5L152.1,337.6L151.8,337.8L151.9,337.9L152.1,337.7L152.3,337.8L152.5,337.8L152.7,338.1L152.8,338.1L152.7,338.4L152.5,338.4L152.6,338.5L152.8,338.5L152.9,338.5L152.9,338.3L153,338.1L153.1,338.1L153.2,338.5L153.1,338.6L153.2,338.8L153.1,339.2L152.9,339.4L153.1,339.4L153.3,339.1L153.4,339.1L153.7,339.9L153.8,340.1L153.8,340.6L153.5,340.7L153.2,340.6L153.1,340.8L152.9,340.7L152.8,340.5L152.5,340.6L152.6,340.4L152.8,340.4L152.8,340.2L152.6,340.1L152.4,340.1L152,339.9L152,339.8L152,339.3L151.8,339.3L151.8,339.6L151.7,339.2L151.8,339L151.6,338.9L151.6,339.1L151.4,339.3L151.7,339.6L151.6,339.9L151.1,339.8L151,339.7L151.1,339.5L150.8,339.1L150.6,339.2L150.5,339.1L150.3,339.1L150.5,339.4L150.7,339.6L150.9,339.8L150.9,340L151,340L151.4,340.5L151.6,340.5L151.5,340.3L151.7,340.1L152,340.3L152.2,340.8L152.1,340.9L151.9,340.6L151.8,340.7L152.2,341.2L152,341.3L151.7,341.3L151.6,341.1L151.4,341L150.7,340.5L150.6,340.4L150.5,340.1L150.4,340.1L150.2,339.9L150.5,339.8L150.2,339.7L150.1,339.3L149.8,339.5L149.7,339.4L149.6,339.5L149.4,339.4L149.4,339.1L149.6,338.9L149.8,339.1L149.9,339L149.8,338.9L149.8,338.7L149.9,338.6L150,338.6L150.2,338.4L149.8,338.1L149.9,338L149.7,338L149.7,337.7L149.5,337.8L149,337.7L148.9,337.6L149,337.5L148.9,337.4L148.9,337.2L148.6,337.2L148.7,337.4L148.7,337.5L148.3,337.4L148.1,337.3L148.2,337L148.4,336.9L148.8,337L149,336.8L148.8,336.6L148.6,336.6L148.5,336.7L148.4,336.7L148.4,336.5L148.4,336.4L148.4,336.1L148.3,336.1L148.2,336.3L148.1,336.6L147.9,336.8L147.7,336.7ZM145.6,330.8L145.7,330.6L145.9,330.7L145.7,330.9ZM147.4,336.9L147.4,336.7L147.5,336.7L147.6,336.9L147.6,337.1L147.5,337.1ZM146.3,337.2L146.5,337L146.6,337.2L146.8,337L146.8,336.7L146.9,336.7L146.9,337.1L146.8,337.2L146.6,337.5L146.5,337.5L146.5,337.3ZM145,333.1L145,332.9L145.2,332.8L145.2,332.6L145.5,332.6L145.4,332.5L145.7,332.5L145.9,332.8L146.1,333L146.4,332.9L146.5,333L146.6,332.8L146.3,332.7L146.1,332.5L146,332.3L145.6,332.1L145.6,331.8L145.9,331.7L146.4,331.7L146.6,331.6L147,331.7L147.3,331.7L147.4,331.6L147.9,331.5L148.2,331.7L148.4,331.9L148.5,332.1L148.6,332.2L148.8,332.2L149,332.3L149.1,332.5L149.5,332.6L149.6,332.8L149.8,332.9L149.6,333.1L149.5,333.3L149.3,333.5L149.1,333.4L148.8,333.5L148.4,333.6L148.5,333.7L148.4,334L148,334L147.8,333.9L147.8,334.1L147.7,334.3L147.5,334.3L147.3,334.3L147.2,334L147,333.9L146.9,334.2L147,334.3L147.1,334.7L146.9,334.7L146.9,334.9L147.1,335L147,335.2L147.1,335.5L147,335.7L147.1,335.8L147.1,336.1L147,336.2L146.8,336.2L146.8,336.6L146.6,336.6L146.4,336.4L146.3,336.2L146.2,335.8L146,335.5L145.9,335.2L146,335L145.9,334.8L145.9,334.4L145.8,334.3L145.6,334.3L145.5,334L145.3,333.9L145.1,333.6L145.1,333.5ZM141.6,326.7L142.1,326.9L142.2,327.1L142.3,327.1L142.5,327.6L142.7,327.5L142.8,327.3L143,327.4L143.1,327.3L143.3,327.4L143.8,327.2L143.8,327.6L144.1,327.8L144.2,328L144.4,328.1L144.7,328.4L144.9,328.6L145,329.1L145.3,329.3L145.4,329.5L145.3,329.5L145.2,329.4L144.8,329L144.6,328.6L144.4,328.5L144.2,328.3L144,328.4L144.4,328.7L144.5,328.8L144.4,328.9L144.8,329.3L145.1,329.4L145.1,329.7L145.4,330L145.3,330.1L145.5,330.4L145.6,330.5L145.4,330.8L145.2,330.8L145.1,330.8L145.1,330.9L145.1,331.4L144.9,331.8L144.7,331.9L144.7,332.1L144.5,332.4L144.3,332.5L144.1,332.1L143.9,331.6L144,331.3L144.1,331.2L143.9,331.1L143.8,330.8L143.9,330.8L144.1,330.9L144.1,330.8L143.6,330.4L143.5,330.1L143.3,330L143.2,329.7L143,329.5L143,329L142.8,328.8L142.7,328.4L142.5,328.1L142.4,327.9L142.2,327.6L142,327.5L141.8,327.2L141.7,326.8ZM141.3,326.2L141.7,326.3L142,326.7L142,326.8L141.6,326.4L141.4,326.4ZM140,324.2L140.2,324.5L140.2,324.6L140.1,324.6ZM141.2,331.8L141.4,331.7L141.4,331.6L141.5,331.3L141.4,331L141.6,330.7L141.8,330.7L142.1,331L142.2,330.9L142.4,331.1L142.7,331.1L143,331L143.2,331L143.4,331.2L143.4,331.4L143.2,331.4L143,331.4L143.1,331.5L143.3,331.5L143.4,331.7L144,332.7L144,332.9L144.2,333.1L144.3,333.3L144.6,333.8L144.8,334.2L144.8,334.6L144.7,334.7L144.9,334.9L145.2,335.8L145.2,336.3L145.1,336.3L144.8,336.1L144.6,335.8L144.4,335.6L143.8,334.9L143.8,334.7L144,334.6L143.8,334.5L143.6,334.7L143.4,334.4L143.3,334.5L143.1,334.4L142.9,334.2L142.9,334.1L142.8,334.2L142.7,334.1L142.4,334.2L142.2,333.9L142.3,333.8L142.4,333.9L142.5,333.8L142.4,333.4L142.5,333.2L142.5,333L142.1,332.8L142.2,332.5L142.1,332.4L142.2,332.3L142.2,332.1L141.9,332.1L141.8,332.2L141.5,332ZM139.9,327.4L140,327.3L140.2,327.2L140.4,327.4L140.2,327.5ZM141,332.4L141,332.2L140.9,332L141.1,331.9L141.5,332L141.7,332.3L141.8,332.3L141.9,332.2L142.1,332.1L142.1,332.5L141.9,332.6L141.8,333.3L141.7,333.3L141.4,333.5L141.3,333.5L141.2,333.1L141.4,332.9L141.4,332.7L141.2,332.7L141.2,332.6L141,332.5ZM138.7,326.6L138.7,326.5L138.8,326.7ZM139,328L139.2,327.8L139.3,328L139.2,328.1ZM138.5,329.8L138.4,329.2L138.5,329L138.5,329L138.7,328.7L138.7,328.5L138.5,328.2L138.8,328.1L138.8,328.3L139,328.5L139.1,328.2L139.4,328.2L139.6,328.2L139.6,328L139.9,327.7L140.1,327.9L140.4,327.9L140.7,328.1L140.7,328.4L140.5,328.8L140.6,328.9L140.7,328.9L140.7,328.7L140.9,328.2L141,328.1L141.3,328.2L141.7,328.2L141.8,328.3L142.1,328.3L142.3,328.5L142.3,328.8L142.2,329L141.8,328.9L141.8,329L141.9,329.1L142.1,329.1L142.4,329.3L142.3,329.5L142.1,329.5L142.2,329.6L142.3,329.6L142.5,329.5L142.7,329.8L142.9,330.1L143.1,330.6L143.1,330.8L142.7,330.9L142.6,330.9L142.1,330.6L141.4,330.4L141.1,330.3L141,330.5L140.9,330.4L140.9,330.5L141.2,330.6L141.4,330.6L141.2,330.8L141.3,330.9L141.4,331.1L141.4,331.3L141.2,331.7L140.7,331.7L140.7,331.6L140.2,331.3L140,331L139.9,331.2L139.7,331.1L139.5,330.8L139.5,330.7L139.3,330.4L139.3,330.3L139.1,330.1L138.8,330.1L138.7,329.9ZM115.5,323L115.8,323L115.9,323.2L115.7,323.2ZM114.7,322.9L114.9,322.9L115.3,322.9L115.3,323L115.2,323.1ZM111.6,321L111.8,320.9L112,320.9L112.1,320.9L112,321.1ZM111.3,322.1L111.3,321.8L111.5,321.7L111.7,322L111.6,322.2L111.3,322.3ZM111.5,324L111.5,323.9L111.8,323.7L111.8,323.8L111.5,324.1ZM110.7,326.2L110.8,326.1L110.8,325.8L110.9,325.8L110.9,325.6L111.1,325.4L111.2,325.3L111.1,325.2L111.4,325L111.4,324.9L111.8,324.6L111.9,324.1L112.1,323.9L112.1,323.7L112.1,323.4L112.3,323.3L112.4,323.4L112.5,323.4L112.4,323.6L112.5,323.7L112.7,323.6L112.8,323.6L112.7,323.8L112.2,324.3L111.9,324.9L111.9,325.2L111.6,325.4L111.9,325.6L111.7,325.8L111.6,325.9L111.4,325.8L111.3,326.1L111.2,326L110.8,326.3ZM110.5,324.1L110.7,323L110.8,323.1L110.9,323.1L110.9,322.8L111.2,322.5L111.2,322.7L111.1,322.8L111.1,323.1L111,323.3L111.2,323.5L111,323.8L111,324L110.9,324.4L110.7,324.3L110.7,324.2L110.5,324.2ZM110.1,321.9L110.2,321.8L110.4,321.8L110.5,322L110.3,322.2ZM510,348.8L510.5,348.1L510.8,348.4L510.3,349ZM508.9,349.7L509.2,349.2L509.7,349.1L509.5,349.5ZM505.9,351.5L507.9,350.1L508.3,350.4L506.5,351.6ZM498,354.5L498.6,353.2L499.4,352.6L500.4,351.9L500.5,351.7L501.9,350.7L503.6,351.2L503.9,351.7L504.5,352.1L504.4,352.3L502.8,353L502.6,352.8L501.5,353L501.4,353.3L499.5,354.4L498,354.8ZM495.6,355.2L497.2,354.7L496.9,355.2L496.2,355.5L495.6,355.4ZM493.8,355.2L494,354.8L494.5,354.8L494.4,355.3ZM488.6,328L488.9,328.2L490,330.4L490.4,330.7L491.1,330.9L491.4,330.6L492,330.8L491.5,331.2L491.1,331.3L490.1,330.8L489.8,330.6L489.1,329.4L488.7,328.6ZM484.5,355.6L485.1,355.4L485.3,355.6L484.5,355.8ZM455.8,291.7L456.9,291.1L457,291.4L456.4,291.9L455.9,292ZM582,72.8L582.5,72.6L582.4,73ZM581,73.6L581,72.6L581.3,72.9L582.1,73.3L581.7,73.9L581.4,73.6ZM580.1,71.3L580,70.8L580.6,71.5ZM577.7,73.5L578.1,73.3L578.3,73.8ZM578.4,78.5L578.6,78L578.9,78.8ZM577.2,75.3L577.3,74.8L578,74.1L578.5,74.5L578.2,74.7L578.9,75.4L578.7,75.9L578.2,76.2L577.7,76.1L577.8,75.8L577.5,75.3ZM576.5,73.6L576.7,72.8L576.6,72.1L576.8,71.7L577,71.9L576.9,72.4L577,72.8L577,73.6L576.7,74ZM575.1,114.2L575.6,114.3L576.5,114L577.1,113.7L577.3,112.8L578.1,113.8L578.2,114.1L577.9,114.4L576.8,114.7L575.2,114.4ZM569.7,115.1L570.3,114.9L570.7,113.8L571.4,112.9L571.8,112.9L572.3,113.6L572.9,113.8L573.1,113.3L573.3,114.2L571.9,114.6L570.9,114.9L570.4,115.6ZM538.6,196.1L539.3,196.2L539.9,196.9L540.1,197.4L539.5,197.5L539.5,197ZM538,208L538.2,207.2L538.5,207.2L540,205.8L540.6,205.6L541,205.1L541.4,205L542,204.5L542.4,204.3L542.4,203.4L542.2,200.5L542.1,199.9L541.6,198.9L541.1,197.8L541.2,197.8L541.9,198.9L542.3,199.9L542.5,201.4L542.6,204.7L541.8,205L540.1,206.1L538.7,207.3ZM85.6,222.1L86.2,222.3L87.1,223.2L87.8,223.6L87.8,223.9L88.3,224.7L88,225.1L87.5,224.7L86.6,224.4L86.4,224L86.6,223.2L85.9,222.8ZM84.2,227.8L84.5,227.9L85.1,229.4L86.2,231.2L85.9,231L85.4,231.2L84.9,230.5L84.6,229.6L84.3,228.2ZM80.9,220.8L81.2,220.8L81.1,221.3L80.7,221.1ZM78.7,213L78.9,213.2L79.4,213.2L79.3,213.5L78.6,213.4L78.4,213.1ZM74.7,222.1L75.3,222.2L75.9,222.8L76.1,223.2L75.6,223.2L74.9,222.8ZM73.7,211.1L74.4,211.3L74.8,211.7L75.4,211.8L76,212.4L76.7,212.6L77.1,212.3L77.7,212.7L77.2,213L76.1,212.9L75.4,213.1L73.9,212.4L74,211.7ZM70.1,211.1L70.9,211.3L71.3,211.1L71.8,211.3L72.3,211.3L72.2,211.8L72.8,212.1L72.7,212.6L71.1,212.8L70.6,212.3ZM68.1,210.1L68.8,210.1L69.1,209.9L69.2,210.3L69.6,210.7L68.8,210.6ZM217,343.1L217,342.6L217.9,341.8L218.4,341.7L219,340.6L219.7,340.1L219.8,339.4L219.1,338.4L218.9,337.9L218.8,336.7L219.2,336.3L220,336.4L220.8,336.7L220.9,337.1L221.9,337.6L222.6,338.1L223.1,338L224.2,338.4L225.9,339.2L226.5,339.4L227.5,340.1L228.2,340.7L228.9,341.6L228.8,342.1L228.9,343.1L229.2,343.2L229.9,343.1L230.2,343.7L230.2,344.4L231.2,345.3L232.2,345.7L232.4,345.9L232.2,346.4L231.6,347L230.9,347.5L230.3,348.2L229.3,348.6L228.4,349.1L227.5,349.3L226.8,349.2L226.4,349.3L225.6,350L224.9,350.3L224.3,350.8L223.7,351L223.2,351.7L223.2,352.1L222.9,352.5L222.6,353.1L221.7,353.8L221.1,353.2L220.1,352.6L219.1,352.3L218.7,351.2L218.9,349.9L219.1,348.2L218.6,347.1L218.7,346.5L218.3,346.4L218,345.1L217.7,344.4L217.3,344.3ZM209,327.8L209.2,327.1L209.7,326.4L210.3,326.4L210.9,326.7L211.4,327.6L211.8,328.2L212.8,327.8L213.6,327.4L214.8,327.7L214.8,327.8L215.5,328.4L216,328.6L216.2,329L217.6,329.4L217.8,329.8L217.8,330.4L217.4,330.8L216.9,331.3L216.6,331.3L215.9,331.7L215.2,331.6L213.9,332.2L213,332.3L212.2,332L211.9,329.6L211.6,329.4L211,329.7L209.9,329.1L209.3,328.5ZM209,332.9L209.3,332.5L210.5,331.9L211,332.2L210.8,332.7L211,332.9L210.4,333.1L210.2,333L209.4,333.2ZM204.6,328L204.9,327.7L205.4,327.7L206.6,327.9L207.3,328.6L207.7,329.1L207.3,329.9L206.5,330.2L205.7,330.2L205.4,329.6L205.3,328.7L204.7,328.4ZM201.5,325.5L201.8,324.9L202.2,324.6L202.1,323.9L202.9,323.9L203,324.1L205.4,324.4L205.8,324L206,324.5L206.9,324.7L208.1,324.5L208.9,324.7L208.5,325.3L207.7,325.9L206.9,326.1L205.3,325.8L204.2,325.4L203.5,325.6L202.2,325.7ZM189.7,319.2L191.6,319.2L192.1,318.6L192.3,318.2L192.9,317.7L193.5,317.5L193.8,317.8L194,318.6L194.9,319.5L195.1,320.1L194.9,320.3L195,320.8L195.8,321.4L196,320.8L196.5,320.8L196.3,321.5L196.7,321.8L196.6,322.1L197.4,322.9L196.8,323.3L196.3,323.1L195.4,323.4L195.2,323.1L194.4,322.8L193.3,322.7L192,322.9L191.7,322.8L191.4,321.9L190.9,321.5L190.9,321.2L190.2,320.4L190.2,319.8ZM171.3,313.3L171.3,312.8L171.8,312.4L172,311.8L173.5,311.1L173.8,310.8L174.8,311L175,310.7L175.7,310.8L176,310.7L176.7,310.9L177.1,311.3L177.3,311.8L177.3,312.3L176.8,313L176.9,314.2L176.7,314.5L175.4,315.4L175.1,315.2L173.5,315.1L172.7,314.3L171.7,313.9ZM165.7,315.5L165.8,315.1L166.4,314.6L167.2,314.1L167.3,313.7L167.8,313.6L167.9,313.9L167.6,314.5L167.7,314.9L166.8,315.2L166.1,316.3L165.6,316ZM529.8,170.8L529.6,170L529.8,169.7L530.3,170L530.3,170.7L530,171.3ZM528.8,168.7L528.7,167.8L529.1,167.6L529.4,167.9L529.8,169.2L529.3,169L529.3,168.7ZM524.1,161L524.2,160.8L524.5,161.2ZM430.9,82L431.1,81.8L431.5,82.4L433.7,82.9L433.2,83.6L432.4,83.5L431.9,82.9ZM424.3,83.9L424.4,83.4L424.6,83.6ZM423,83.4L423.7,83.7L423.7,84.1L423,83.8ZM422.4,86.5L422.6,85.9L422.6,85.1L422.8,84.9L422.7,84.3L423.3,84.3L423.4,85.3L423.6,86.2L423.1,86.7ZM421.6,84.7L422,84.6L421.9,85.2L421.6,85.2ZM420.3,88.7L420.8,88.9L420.9,89.5ZM419.1,92.8L419.2,92.6L419.9,92.8L419.8,93.9L419.2,93.4ZM418.4,94.6L418.7,94.1L419,94.6ZM412.7,87.2L413.4,87.9L413.2,88.1L413,87.8L412.5,87.3ZM387.3,59.9L387.9,59.1L390.8,57.3L391,57.3L392.3,56.1L393.2,55.6L393.4,55.7L394.3,55.3L394.3,55.6L393.9,55.8L393,56.8L393.1,57.1L392.3,57.8L390.8,58.5L389.5,59.3L389.6,59.5L390.3,59.5L388.5,60.4L387.9,60.4ZM412.1,290.5L413.3,290.6L412.8,290.8L412.3,290.8ZM409.1,290.4L409.8,290.2L411,290.4L411.3,290.6L410.3,290.6ZM406.7,290.9L407.3,290.8L407.9,290.4L407.8,290.8L407,291.1ZM404.8,290.8L405.6,290.7L405.9,290.6L405.8,291.1L405.4,291.2L404.7,290.9ZM558.7,119.3L558.8,119.1L559.6,118.6L559,119.3ZM558.2,121.6L558.3,121.3L558.7,121.4L558.9,122L558.6,121.6ZM557.3,120.7L557.8,120.4L557.5,120.9ZM510.5,95.3L510.9,94.6L510.9,95.1ZM509.7,95.2L510,94.7L510.4,94.7ZM455.9,135.1L456.5,134.8L456.4,135.2ZM454.8,134.6L454.9,133.6L455.3,133.9L455.3,134.3L454.8,134.9ZM530.5,172.1L530.8,172.2L530.6,172.6ZM94.8,36L95.3,34.9L95.8,34.2L96,34.9L95.8,35.5L96.3,36L95.6,36.1L95.4,36.4L94.8,36.3ZM98,20.9L98.1,20.4L98.6,21.1L98,21.2ZM98.1,18.4L98.3,18.3L98.7,19.8L98.3,19.2ZM97.4,20.2L97.7,20L97.9,20.6L97.4,20.8ZM95.9,24.6L96.5,23.7L97.1,23.2L97.4,22.7L97.9,22.7L98,22.9L97.9,23.5L98.3,24L98.4,24.3L97.8,24.4L97.4,24.1L97.3,24.4L96.8,24.7L96.3,24.6L96.3,24.9L97.1,25L97.3,25.5L97.2,26.5L97.1,26.6L97.1,27.8L97.4,27.5L97.5,26.8L97.8,26.9L98.1,27.7L98.5,27.9L98.4,29L98,29.6L97.6,29.3L97.5,28.3L96.8,28.3L97,28L96.5,27.4L96.9,26.4L96.9,25.8L96.4,25.7L96.4,25.3ZM96.2,17L96.5,17.2L97.3,18L97.1,18.1L96.5,17.6ZM95,18L95.6,17.8L95.6,18.2ZM96,14.2L96.4,14.3L96.5,14.7L95.9,14.5ZM93.5,18.9L93.9,18.7L94.5,18.8L94.4,19.2L94.8,19.6L95.3,19.9L94.9,19L96.4,18.2L96.7,18.3L97.7,19.2L96.9,19.6L97.1,20.4L96.8,21.1L96.4,21.2L96.3,22L95.7,21.9L95.4,21.3L95.1,21.3L94.4,21L93.7,20.1L93.8,19.2ZM93.6,17.7L94.1,18L94.5,18.7L93.7,18ZM410.6,90.9L410.7,90L411.8,90.1L411.2,91.6ZM407,93.2L407.4,93.1L407.5,93.8L407,93.5ZM377.3,71.9L377.5,71L377.9,70.9L377.8,71.7ZM376.9,73.6L377.5,73.2L377.1,73.7ZM375.7,73L375.8,72.8L376.8,72.4L376.9,72.5L376.6,73.1L375.8,73.2ZM374.8,74.2L374.8,73.9L375.5,73.4L375.5,73.6ZM374.9,72.5L375.4,73.1L374.9,73.2L374.7,72.8ZM374.5,71.8L375.6,71.3L376,71.9L376.4,71.5L376.5,72L376,72.1L375.5,72.7L375.1,72.2L374.6,72.1ZM374.5,74.9L375.1,74.7L376,73.6L376.5,74L375.6,74.4L375.7,74.8L375.2,74.8L374.6,75.3ZM372.7,72.4L373.1,72.2L373.1,72.6ZM408.1,293L408.7,293.6L409,294.5L408.9,295.6L408.6,296.8L408.4,296.8L408.7,295.8L408.8,294.6L408.7,294.1ZM402.9,293.3L403.3,292.8L404.5,291.8L404.6,292L404.1,292.7L404.3,293L404.8,293.4L404.2,294L404.1,293.4L403.7,293.6L403,293.5ZM400.2,300.3L400.8,300.2L400.5,300.7ZM392,306.4L392.2,306.1L392.8,306.8L392.5,307ZM389.9,306.7L391.5,307L390.7,307.2ZM387.8,307.4L388.8,307.1L388.9,307.3L387.8,307.6ZM373,301.1L373.4,300.8L373.9,300.8L374,300.5L374.9,300.5L375.9,301.2L376.2,301.1L376.5,301.4L375.9,301.8L375.9,302.3L375.3,302.5L372.9,301.3ZM563.7,112.5L563.8,112.4L564.3,112.9L564.2,113ZM564,115.2L564.1,114.5L563.9,114.3L563.9,113.7L564.1,113.8L564.3,114.8ZM563,119.5L563.2,118.5L563.4,118.6L563.6,119.5Z" fill="url(#affordability-map-fill)" stroke="#d6eaff" strokeWidth="1.6" />
                <path d="M255,208.6L262.9,209.1L269.4,209.6L275,209.9L281.6,210.2L286.2,210.4L285.2,235.9L285.9,235.8L287.3,237.4L288.2,238.3L289.3,238.6L289.6,238L290.2,238.1L291,238.6L291.5,238.6L291.7,237.6L292.3,238.2L293,238.3L292.8,238.5L293.5,239.2L293.6,240.8L294.3,240.8L294.4,241L294.8,240.9L295.2,241.1L295.8,240.8L296.5,241.3L297.2,241.6L297.7,241.7L298.1,242L299,242.1L299.4,241.6L300.2,241.9L301.1,243L301.9,242.8L302,242.3L302.5,241.8L303.2,242.2L303.8,242.2L304.5,242.4L305.2,241.9L305.3,242.5L305,242.9L305.4,243.9L306.1,244.1L306.6,243.9L306.9,244.1L306.6,244.8L306.8,244.8L306.6,245.5L307,245.6L307.6,246L308,245.9L309.2,244.9L309.7,244.2L310,244.2L310.7,244.7L310.6,245.1L311,245.4L311.7,245.1L312.1,245.4L312.1,246.1L312.3,246.4L313,246.5L313.5,245.8L313.8,245.7L314.3,245.9L314.4,245.4L314.8,245.2L315.1,245.5L315.2,246.3L314.8,246.6L315.3,247.7L315.7,247.9L316.1,247.5L316,246.8L316.5,246.5L316.1,246.1L316.6,246.3L317.2,245.7L317.1,244.8L317.3,245L317.9,244.7L318.1,244.8L318.3,245.9L318.6,246.2L318.9,245.8L319.4,246L319.5,246.5L320.2,246.4L320.5,245.4L321.5,245.6L321,246.2L321.6,246.6L322.1,246.5L322.4,247.2L323.2,247.1L323.8,248L323.9,248.3L324.3,248.2L324.6,247.3L325.4,247.5L325.9,247.4L326.2,246.3L326.7,246.4L326.7,246.2L327.3,246.4L328.4,246L328.5,245.7L329.6,246.4L330,246L330.5,246.1L330.4,245.6L331.2,245.7L332.1,245.1L332.5,245.1L332.8,245.8L333.6,245.7L333.6,245.9L334.9,245.9L335.4,245.8L335.8,245.5L336.1,244.7L337.1,245L338,245.9L338.9,246L339.2,246.6L340,247.5L340.4,247.5L341,247.3L341.7,248.2L342.4,248.2L342.4,248.5L343,248.3L343.8,249.1L344.1,248.8L344.4,248.7L344.5,249.4L344.9,249.6L345.2,249.6L345.2,250L345.6,250.1L345.7,249.8L346.1,249.9L346.2,249.6L347,249.9L347.4,249.4L347.9,249.6L348.1,249.9L348.3,249.7L348.9,249.9L348.9,249.9L349,250L349.1,256.9L349.4,270.4L349.7,270.5L350.2,271.3L350.9,271.6L351.3,272.6L351.9,273.2L351.8,273.6L352.1,274.2L351.9,274.7L352,275.2L351.7,275.5L352,276.1L352.3,276.4L352.9,276.5L353,276.9L352.8,277.2L353.3,277.6L353.3,277.9L353.6,278.1L353.7,278.6L353.5,279.2L354,279.7L354.3,279.7L354.5,281L355.3,280.8L355.1,282L355.4,282.3L355.5,282.9L355,283.2L354.9,283.5L355.4,284.2L355.1,284.4L355,284.8L355.2,285.5L354.8,285.9L354.5,286.6L354.4,287.5L353.9,287.8L353.8,288.5L353.3,288.9L353.2,289.3L353.5,289.6L353.7,290.6L353.2,291.2L352.9,292L353.6,292.6L353.7,293.2L353.5,293.6L353.9,294.5L353.4,295.3L353.8,295.5L353.3,296.1L352.8,296.6L352.5,297.4L352,298.3L351.3,298.8L351.2,299.1L351.6,299.4L352.3,300.4L352.3,300.6L350.5,300.6L349,301.1L343.8,303.5L342.7,304.2L342.3,304.8L341.6,304.8L342.5,303.9L342.9,303.4L343.4,303.4L343.8,303.2L344.1,302.7L344.5,302.9L344.9,302.8L344.3,302.2L342.1,302.8L341.8,302.5L342.5,301.5L342.6,300.6L342.6,299.8L342.1,299.7L341.9,299.4L341.2,299.8L340.8,300.2L340.7,300.8L340,301.1L339.8,300.6L339.1,301.1L339,301.5L339.4,301.8L339,302.4L339.4,303L340.2,303.2L340,303.8L340.4,304L340.5,304.9L340.4,305.6L340.1,306L339.7,305.9L339,306.7L338.1,307.4L337.9,307.1L337.4,307.2L337.3,308.2L337.6,308.5L338.1,308L339.2,307.3L339.3,307.1L340.6,305.9L341.2,305.7L341.2,305.2L342.3,305.3L341.4,306L338.9,307.8L338,308.5L337.8,308.8L336.5,309.9L334.9,311.5L334.2,311.6L331.4,313.2L330,314.1L327.8,315.1L325.3,316.4L323.9,317.3L323.3,317.8L322.7,318.6L320.5,319.9L319.5,320.6L317.5,322.3L316.2,323.9L315.7,324.8L315.1,325.5L313.7,327.9L312.7,330.1L312.2,331.5L311.8,333.7L311.7,334.9L311.7,336L312,338.3L312.6,340.6L313,342.1L313.7,344.7L314.1,347.6L313.8,347L313.6,345.4L313.1,343.3L312.7,341.6L311.7,341.4L312.5,341.1L312.1,340.2L311.9,339.2L311.5,338.2L311.4,337L311.4,335.5L311.4,334.2L311.9,331.1L312.6,329.1L313.4,327.4L314,326.7L314.5,325.7L314.8,325.3L314.7,324.8L315.3,323.8L316,323.4L316.4,322.9L317.2,321.5L318.3,320.9L318.7,320.3L319.3,320.3L320.8,319.1L321.7,318.6L322.7,318.3L322.6,317.8L323,317.5L322.6,317.3L321.9,317.8L321.1,318.2L320.6,318.6L319.9,318.7L319.7,318.2L319.7,317.5L318.9,317.4L318.7,317.7L318.7,318.7L318.5,319L318.7,319.4L318.6,319.8L317.7,320.4L317,321.1L316.7,321.1L315.9,320.8L315.8,320.3L314.5,321L313.8,321.7L314.6,322L315.6,321.3L316,322.2L315.7,322.4L314.1,324.9L313.6,324.9L313.3,324.3L312.4,324.4L312.3,324.2L310.9,324.3L310.5,324.1L310.2,324.6L310.7,324.9L311.3,325L311.8,324.8L311.6,325.5L311.9,326L312.5,326.4L313.2,326.6L312.4,328.2L311.9,330.3L311.3,331.5L310.5,331.8L310.2,332.1L309.7,331.8L310.3,331.6L310.5,331L310.1,330.9L309.9,331.3L308.6,332.1L308.8,332.4L309.8,332.6L310.9,332.2L311.2,332.2L311,333.5L311.1,333.6L310.9,335.8L310.6,338.1L310.4,338.1L310.8,340.7L311.1,341.4L311.2,342.4L311.6,342.4L312.5,344.8L312.7,345.1L312.3,345.6L312.5,346L312.4,346.7L312.8,347.5L313.6,347.6L313.6,348L314.2,347.8L314.2,349.3L313.2,349.2L312.7,349.2L312.7,349.5L311.8,349.6L311.5,350.7L310.7,350.5L310.4,350.1L309.7,350L309.5,349.4L309,349.4L308.3,348.3L307,348.1L306.5,347.7L305.8,347.8L305.5,347.6L304.5,347.8L304.3,347.6L303.8,347.6L303.7,347.9L303.2,347.6L302.4,347.7L302,347.5L301.8,347.7L301.2,347.5L300.9,347.1L301,346.8L300.3,346.8L300.2,346.3L299.6,346.3L298.7,345.5L298.3,345.6L297.3,345L296.5,345.2L295.9,344.8L295.3,344L294.9,343.9L294.8,343.6L294.5,343.4L293.7,343.6L292.8,343L292.3,343L292,342.8L291.5,343L291.1,342.5L291.4,342L291,341.3L290.5,341.2L290.4,340.1L290.2,339.6L290.1,338.7L289.8,338.4L289.8,337.9L289.5,337.1L288.8,336.6L288.9,336.3L288.3,336L288.1,335.6L288.3,335.4L287.8,334.8L287.5,334.7L287.4,334.2L287.7,333.8L287.6,333.1L287.8,332.8L287.7,331.8L287,331.5L287.1,331.1L286.6,330.9L286.9,330.6L287.2,329.7L287.1,329.3L287.3,328.7L286.7,328.5L287,327.7L286.5,327L286.2,327.2L285.9,326.6L285.5,326.8L285.2,326.4L284.8,326.4L284.1,325.4L283.7,325.3L283.6,324.8L283.2,324.9L282.8,324.5L282.9,323.9L282.6,323.6L282.7,323.2L282.2,322.6L282.3,322.1L281.6,321.9L281.4,321L281,320.7L280.7,319.9L279.2,319.2L279.1,318.6L278.8,318.6L278.3,318L278.4,317.5L277.7,316.4L277.9,315.9L277.5,315.4L277.9,315.1L277.4,315L277.1,314.4L277.3,314L276.7,313.6L276.8,313.3L276.2,312.9L276,312.4L276.1,311.9L275.8,311.6L275.7,310.8L275.5,310.7L275.1,309.7L274.8,309.7L274.6,309.2L274.7,308.3L274.4,307.1L273.7,306.6L273.3,306.1L273.5,306L273.1,305.1L272.2,304.6L272.2,304.3L271.5,303.8L270.8,303.4L270.3,302.5L270.3,302.2L269.3,301.9L269,301.4L268.1,301.3L268.3,300.7L268.2,299.9L268,299.9L267.7,300.6L267.5,300.3L267.6,299.7L267,299.4L266.5,298.1L266.2,298.1L265.8,297.8L265.3,298L265,297.5L264.7,297.8L263.2,297.8L262.4,297.5L262.2,297.5L261.6,297.2L260.7,297.3L260.2,297L259.5,297.1L259.3,297.3L258.3,297L257.9,296.4L257.4,296.4L256.6,295.9L256,296.1L255.5,297.3L254.1,297L253.7,297.4L253.5,297.2L252.6,297.5L252.3,297.4L251.9,298L252,298.2L251.4,298.7L251.4,299.2L251.1,299.2L251,299.9L250.5,300.2L250.5,300.5L250.2,301.2L250.2,301.7L250,302.3L249.6,302.3L249.4,303.1L249.1,303.5L249.5,303.8L249.3,304.2L248.5,304.5L248.1,304.4L247.8,305.2L247.1,305.6L246.7,306L246.5,306.9L245.9,306.9L245.2,306.7L244.6,306.8L244.1,306.2L243,305.9L242,304.6L241,304.1L240.6,304.2L239.8,303.7L239.1,302.7L238.6,302.4L237,302.1L236.4,301.7L235.6,300.9L235.2,300.8L234.5,299.8L234.5,299.5L234,299L233.2,298.8L232.7,298.5L232.5,298.1L231.4,297.1L231.1,296.6L230.9,295.3L230.5,294.6L230.3,293.9L229.8,293.2L229.9,292.5L229.6,291.9L229.9,291.1L229.9,290.5L230,289.9L229.8,289.1L229.4,288.7L229.3,288.2L228.8,287.7L228.8,287.4L228.3,286.9L228.5,286.6L228.1,284.6L227.9,284.1L227.4,284L227.1,282.9L226.5,282.9L226,282.1L225.5,281.9L225.4,281.6L224.8,281.2L224.4,281.2L224.1,280.9L222.9,280.3L223,279.9L221.3,278.4L220.9,277.1L220.5,276.7L219.8,276.3L219.5,275.9L219.1,275.8L219.1,275.4L218.3,274.1L217.5,273.7L217.4,273L216.9,272.6L216.1,272.4L214.8,271.4L214.5,270.4L214.1,270.1L213.9,269.3L213.5,268.2L213.2,267.7L212.5,267.2L212.1,267.4L211.7,266.9L211.5,266.6L210.9,266.3L211,266L210.6,265.7L210.6,265.2L210.9,265.1L211,264L224,265.3L233.9,266.3L242.8,267L250,267.6L251,254L251.3,251.1L251.4,249.4L251.9,244.7L252.1,242.1L253.4,225L253.8,220.1L254.5,211L254.6,208.6Z" fill="#ffbf8f" />
                <path d="M124.7,241L124.9,240.7L125.8,241L126.8,240.9L126.9,240.5L127.7,239.9L127.9,239L127.6,237.4L127,237.2L126.7,237.3L126.3,236.9L126.1,237.1L125.7,236.2L126.2,235.5L126.5,234L126.1,233.4L126.6,232.7L126.4,232.1L127.1,232.2L128.5,230.8L128.9,230.7L128.8,230.1L129.2,228.9L129.5,228.8L129.6,228L129.5,227.3L129.7,226.7L129.9,226.7L129.9,226L129.7,225.8L131,224.7L131.2,223.9L131.5,223.7L132.5,223.5L132.9,223.2L133.6,223L133.7,222.8L134.8,222.3L134.9,221.8L134.6,221.1L134.1,220.8L133.1,219.4L132.6,219.3L132.8,218.6L132.4,215.8L131.7,214.9L131.6,214.1L131.1,213.3L131.4,211.7L131.9,210.7L131.6,210.4L132.4,210.1L132.6,209.3L132.6,207.2L132.6,206.5L132.3,205.9L132.2,205.2L132.5,204.8L132.8,203.7L132.5,203.2L132.7,202.8L132.5,202.4L132.7,201.8L132.7,201.2L133,200.6L133.4,200.4L133.1,199.9L132.8,198.8L133.1,198.3L133,197.4L134,197.2L134.4,197L134.5,197.2L135,197L135.6,197.1L135.7,197.4L136.6,197.4L137.1,197.5L137.6,198.4L137.4,198.7L138.1,199.4L139,199.5L140.3,197.6L140.5,197.5L141,194.9L141.5,191.9L142.5,187L149.8,188.4L157.9,189.9L169.3,191.8L172.8,192.4L178.7,193.2L178.9,193.4L187.5,194.6L193.5,195.5L190.9,214.4L190.5,217.1L190.5,217.4L189,227.8L188,234.6L187.9,236.2L187.6,237.5L183.2,269.3M437.8,225.2L438.8,228.8L440.2,233.7L441.4,237.8L442.3,241.1L443.2,244.5L445.4,252.4L445.8,252.7L445.7,253.1L446.3,253.6L446.7,255.2L447.1,256L447.9,256.7L448.1,257.6L448.5,257.9L448.3,259.3L449,259.5L449.5,259.9L449.2,260.5L448.8,260.6L448.9,260.8L448.4,261.1L447.9,261.8L448.1,262.4L448.2,263.4L448,264.4L447.5,265.2L447.5,265.8L447.9,267.1L447.8,267.6L448.7,268.5L449,269.8L448.8,270.5L448.9,271L448.7,271.9L448.8,272.8L448.6,273.1L448.9,273.6L448.8,274.2L449.7,275.1L450.1,275.8L450.2,276.5L450.6,277.4L451.1,277.9L451.3,278.8L451.6,279.6L452.2,280.1L457.7,279.7L468.2,279L476.5,278.4L481.9,278.1L481.7,278.2L481.9,278.9L482.2,279.1L482.2,279.9L482.8,280.7L484.2,280.3L484.1,279.5L484.3,278.9L484.2,277.6L483.6,276.7L483.6,276L483.5,275.4L483.8,275.2L483.6,275L484.1,275L484.4,274.3L485,274.3L485.3,274.6L486,274.5L486.7,274.7L487.1,275L488.4,275L489.1,275.1L489.6,274.8L490.2,274.9M413.2,288.4L412.9,286L412.5,282L411.9,277.2L410.8,268.6L410.9,265.4L411.1,257.3L411.1,254.9L411.3,242.2L411.4,240.4L411.5,233.1L411.6,229L411,228.6L410.4,227.7L410.4,227.5L416.1,227.1L418.5,226.9L424.6,226.5L428.1,226.2L429.5,226L435.5,225.4L437.8,225.2L439.3,225.1L444.5,224.4L451.4,223.6L458.8,222.7L458.7,222.6L464.1,221.8L464.1,222.6L463,223.5L462.2,224.8L462.3,225.2L462,225.6L462.3,226.3L463.5,227L464.2,227L465.2,228.1L466.2,228.5L467.2,228.2L467.5,228.3L467.9,229L468.1,229.7L468.6,229.9L468.8,230.5L469.3,231L469.4,231.6L469.8,232.3L470.3,232.5L470.7,233.2L471.3,233.7L471.9,234.7L472.2,234.7L473.1,235.4L474.3,235.8L475.5,236.8L475.8,237.4L476.2,237.8L476.3,238.3L476.9,238.6L477.3,238.6L478,238.9L478.9,239.8L479.5,240L479.7,240.3L479.5,240.8L479.7,241.2L479.6,241.6L480.8,242.3L480.7,242.7L481.3,243.1L481.7,243L481.7,243.5L482.1,243.9L483.2,244.4L483.6,244.3L484.3,244.9L485.1,245.2L485,246L485.6,246.6L485.7,247.2L486.1,247.3L486.3,248.2L486.5,248.6L486.4,249.1L486.6,249.2L486.8,249.7L486.7,250.2L487.3,250.6L488.3,250.8L488.3,251L489.4,251.8L489.3,252.2L490,253.3L490.2,253.2L490.5,254L490.2,254.5L490.8,255.2L490.7,255.5L491,256.2L491.9,256.4L492.3,256.2L493.2,256.8L493.6,256.8M416.4,137.7L419.5,137.4L426.3,136.7L432.8,135.9L435.8,135.6L435.9,136.4L436.2,139.1L438.1,154.6L438.5,159.6L439.1,164.5L439.4,167.7L439.7,170.3L439.1,170.9L439.1,171.2L439.8,171.9L439.9,172.2L439.5,172.7L439.7,173.1L440.3,173.1L440.5,173.4L440.1,174L440.3,174.4L439.5,174.5L439,174.8L438.7,174.8L437.5,175.6L437,176.1L436.3,176.1L435.9,175.7L435,175.8L434.4,175.8L434,176.3L434.3,177.6L434.6,178.4L434.1,178.9L433.9,179.5L432.9,180L432.4,181.8L431.7,182.4L431.2,182.1L430.9,182.3L430.7,183.1L430.2,183.9L430.4,184.9L430.3,185.7L430,186L429.2,186.3L429.1,186.7L428.5,186.1L427.7,186.2L426.7,185.7L426.6,184.6L425.7,183.9L425.5,184L425.5,184.4L426,184.5L426,184.8L425.5,184.8L425.3,185.2L425,184.9L424.7,185.3L425,185.5L424.8,186L424.2,186.1L424.2,187.2L424.5,187.6L423.6,187.8L423.6,188.5L423.3,188.9L423,188.6L423.1,188L422.7,188L422.4,188.3L422,188.1L421.5,187.1L420.9,187.2L420.4,187.8L419.4,188.2L419,188.6L419,189.7L418.7,190L418.3,190.1L418,189.4L417.3,189.4L416.4,188.8L415.6,188.4L414.9,188.4L414.4,188.8L413.9,188.7L413.6,188.1L413.3,188.1L413.1,188.8L413.6,189.5L413.1,190L412.7,190L412.8,189.4L412.6,189.1L411.1,189.5L410.6,189L410.3,189L410,189.5L410.4,190.5L410,191L409.1,190.7L408.7,190.7L408.6,190.4L409,190.4L408.3,189.4L409.2,189.5L408.7,189.2L409.1,188.4L409.1,187.7L408.8,187.4L409.5,187.2L409.5,186.7L409.1,187L409.8,186.1L409.3,185.5L409.1,184.8L409.4,184.9L409.7,184.1L409.9,184.5L410.1,184L410.4,184.3L410.8,183.1L411.1,183L411.4,182L411.3,181.6L412.2,181L412.1,180.3L412.3,179.3L412.6,179L413.1,178.8L413.5,177.9L413.4,177.4L412.8,176.4L413.1,175.1L412.4,174.7L412.3,173.8L411.7,173.2L411.5,172.4L412.1,171.7L411.8,171.2L411.8,170.5L412,170.1L412.4,170L412.1,166L412,166L411.6,161.6L411.6,161.4L411.4,158.1L411.1,155.3L409.9,141.8L409.7,139M267.8,163.2L277,163.7L280.7,163.9L290,164.4L299.7,164.7L305.5,164.8L315.4,165L324.8,165.1L329.9,165.1L334.7,165.1L335.2,165.8L335.7,165.9L335.7,166.4L336.2,166.3L336.4,166.7L337.3,166.9L337.6,166.4L338.4,166.5L338.3,166.9L338.6,167.2L339,167.4L338.8,167.8L338.5,167.8L338.6,168.3L339,168.1L339,168.6L338.6,168.7L338.2,168.4L338,169.3L337.5,169.5L337.2,170L337.3,170.4L336.7,170.7L336.7,171.2L337.3,171.7L337.3,172L337.9,172.4L338.3,173.1L338.8,173.1L339,173.3L338.7,173.6L338.9,174.5L339.6,175.1L339.5,175.4L340,175.5L340.2,175.9L340.7,176L341,175.8L341.2,176.1L341.9,176.2L341.8,176.6L341.8,181.7L341.8,183L341.9,190.9L341.9,191.5L342,200.3L342,201.4L342.1,204.6L332.8,204.7L325.6,204.7L319.3,204.7L311.2,204.6L303.5,204.4L293.9,204.1L290.1,204L284.4,203.7L278.9,203.5L271.2,203.1L265.4,202.8M565,93.1L563.6,92.6L563.4,91.8L563.5,91.3L561.8,90.3L561.3,89.8L561.3,88.6L561.1,88.5L561.1,87.5L560.8,87.3L559.7,84L559.5,83L556.6,73.7L553.9,65.6M564.8,111.5L564.3,111.1L563.6,110.9L563.3,110.3L563.1,109.4L562.7,109.6L562.3,108L558.5,109.2L558.4,109L551.6,110.6L550.8,110.8L549.4,111.1L549.4,111.5L549,111.7L548.9,111.2L547.1,111.6L543.1,112.5L542.6,112.6L542.3,112.2L542.3,107.6L542.5,103.2L550,101.6L556.6,100.1L560.8,99.2L561,98.6L561.7,98.4L561.5,97.7L561.9,97.2L562.6,97.2L562.7,96.5L563.8,95.8L564.4,96L564.6,95.8M566.5,114L565.9,112L565.2,111.9M363.6,76.4L362.9,75.9L362.5,76.1L362.4,76.4L361.9,76.6L362.2,76.8L361.8,77.3L361.1,77.1L361.4,84.8L361.1,84.9L360.9,85.6L360.2,85.5L359.8,86.1L359.4,86L359.1,86.5L358.3,86.7L357.7,87.3L357.1,89L356.4,89.5L356.2,90.8L356.3,91.4L357,91.6L357.3,91.5L357.8,91.9L357.7,92.2L358.5,93.1L358.5,93.7L358,94.2L358.1,94.6L357.5,95.1L357.6,96.2L357.5,96.5L357.8,97.5L357.3,98.2L357.6,98.6L357.6,99.3L357.8,99.8L357.6,100.2L357.7,101.1L357.3,102L357.5,102.4L358.1,102.7L359.1,103.6L359.1,103.9L359.6,104L359.9,104.5L361.6,104.6L362,104.7L362.3,105.6L362.8,106L364.5,106.5L365.3,106.9L365.8,107.4L365.8,108L366.1,108.1L366.3,109L366.9,109.5L367.8,110L367.9,110.3L369.1,111.2L370.5,111.5L371,112.1L372.1,113.6L372.4,114.4L372.2,115.7L372.3,116.5L372.7,116.9L372.6,117.4L372.9,118L366,118.3L358.4,118.6L354.5,118.7L346.9,118.9L340.9,119L330.3,119.1L323.5,119.1L323.6,105.4L323.6,104.3L323.6,100.9L323.6,95.5L323.3,94.8L322.1,94.1L321.5,94L321.1,93.4L320.8,92.6L320,91.5L320.1,91L320.9,90.3L321.7,89.9L322.1,89.2L322.5,88.7L322.7,87.2L322.5,86L322.7,85.6L322.4,83.5L322.4,82.1L322,81.8L321.3,80.7L321.2,80.1L321,78.8L320.7,78.1L320.6,77.7L320.8,76.9L320.6,75.7L320.8,75.5L321,74.2L320.8,74.3L320.4,73.7L320.5,71.8L320.3,70.8L320.3,69.5L320.4,69L320.2,67.8L320.2,65.4L320.1,65.4L319.8,64.4L319.5,63.4L319.3,63.2L318.9,62L318.8,61.4L318.5,61L318.3,59.7L317.9,58.5L317.8,57.3L318,56.7L317.8,55.7L317.9,55.1L317.8,53.9L317.6,53.3L317.9,52.4L318.1,52.2L318.2,51.5L317.8,50.6L317.6,49.2L317.4,48.9L317,47.8L317.1,47.4M530.2,147.4L530.5,146.9L530.5,146.2L530.8,145.7L531.3,145.1L532.6,144.5L533.3,143.8L533.1,143L533.6,142.6L533.8,142.2L534.8,141.2L535.4,140.9L535.7,140.2L536,140.2L536.5,139.6L535.9,139L535.1,138.7L534.7,138.2L533.8,137.7L533.4,137L532.5,137L532.3,136.5L532.1,135.5L531.7,135.1L531.1,135.3L530.8,135.2L530.5,134.3L530.6,134L530.3,133.8L530.4,132.6L530.8,132.6L531.3,131.2L530.2,130L530.5,129.4L531,128.9L531.4,128.2L531.2,127.9L531.7,127.4L532,126.8L532.2,125.3L532.7,124.4L533.3,124.1L536.7,125.3L541.8,127L542,127.2L541.8,129.4L541.5,130.2L541.6,131L541.4,131.3M541.3,131.7L540.1,132.4L540.2,133.3L539.9,133.6L539.9,134.2M530,148.5L529.9,148.2M451.4,223.6L451.3,220.5L452.1,219.8L452.2,220.1L453.3,219.9L454,219.1L453.8,218.5L454.1,218.2L453.8,217.7L454.4,216.9L454.9,216.7L455.1,216.1L455.7,215.9L456.2,215.4L459.2,214.9L459.5,214.3L460.3,213.8L460.4,213.5L460.8,213.5L461.3,212.9L461.4,212.5L462,212.4L462.3,211.9L463,211.4L463.9,211.5L464.7,210.1L464.5,209.4L464.8,209L465.5,209.3L466,208.1L467.2,207.2L467.6,207.6L467.5,208.4L468.1,208.5L469.1,207.7L469.5,206.6L470,206.1L470.6,205.8L471,205.8L471.3,205.3L472,205.4L472.2,205.9L472.8,205.8L473.3,205.4L474.2,203L474.9,202.3L475.2,202.1L475.6,202.3L476.2,202.2L475.7,201.5L475.9,200.7L476.1,200.5L475.8,199.7L476,198.9L479.1,198.6L481.2,198.4L484.7,198L486,197.7L490.3,197.2L492,197L498.3,195.9L508.5,194.1L511.2,193.5L520.9,191.6L524.8,190.9L524.8,190.8L525.9,190.5L530.3,189.6L535.5,188.5M514.7,229L510.5,225.9L505.9,222.6L504.5,221.5L500.6,218.7L498.3,219.1L495.5,219.5L488.7,220.5L488.6,219L486.7,217L485.7,218L485.5,217.8L485.7,217.2L485.5,216.6L483.4,216.8L479.4,217.3L472.3,218L471.5,218.3L471.2,217.9L470.9,218.6L470.6,218.5L469.9,218.9L469.7,218.9L468.6,219.6L467.7,220.4L467.4,220.2L464.1,221.8M322.7,87.2L315.8,87.2L309.7,87L305.9,86.9L297.6,86.6L291.4,86.4L285.5,86.1L277.3,85.6L273.3,85.4L263.8,84.7L258.2,84.3L254.7,84L257.4,52.6L257.4,52.4L258.1,44.5M342.1,204.6L342.2,211.2L342.4,212.6L342.7,215L342.9,216.4L343.5,220.4L343.7,221.3L344.3,225.7L344.3,229.3L344.3,232.3L344.3,234.9L344.2,236.9L344.2,241.6L344.1,248.8L343.8,249.1L343,248.3L342.4,248.5L342.4,248.2L341.7,248.2L341,247.3L340.4,247.5L340,247.5L339.2,246.6L338.9,246L338,245.9L337.1,245L336.1,244.7L335.8,245.5L335.4,245.8L334.9,245.9L333.6,245.9L333.6,245.7L332.8,245.8L332.5,245.1L332.1,245.1L331.2,245.7L330.4,245.6L330.5,246.1L330,246L329.6,246.4L328.5,245.7L328.4,246L327.3,246.4L326.7,246.2L326.7,246.4L326.2,246.3L325.9,247.4L325.4,247.5L324.6,247.3L324.3,248.2L323.9,248.3L323.8,248L323.2,247.1L322.4,247.2L322.1,246.5L321.6,246.6L321,246.2L321.5,245.6L320.5,245.4L320.2,246.4L319.5,246.5L319.4,246L318.9,245.8L318.6,246.2L318.3,245.9L318.1,244.8L317.9,244.7L317.3,245L317.1,244.8L317.2,245.7L316.6,246.3L316.1,246.1L316.5,246.5L316,246.8L316.1,247.5L315.7,247.9L315.3,247.7L314.8,246.6L315.2,246.3L315.1,245.5L314.8,245.2L314.4,245.4L314.3,245.9L313.8,245.7L313.5,245.8L313,246.5L312.3,246.4L312.1,246.1L312.1,245.4L311.7,245.1L311,245.4L310.6,245.1L310.7,244.7L310,244.2L309.7,244.2L309.2,244.9L308,245.9L307.6,246L307,245.6L306.6,245.5L306.8,244.8L306.6,244.8L306.9,244.1L306.6,243.9L306.1,244.1L305.4,243.9L305,242.9L305.3,242.5L305.2,241.9L304.5,242.4L303.8,242.2L303.2,242.2L302.5,241.8L302,242.3L301.9,242.8L301.1,243L300.2,241.9L299.4,241.6L299,242.1L298.1,242L297.7,241.7L297.2,241.6L296.5,241.3L295.8,240.8L295.2,241.1L294.8,240.9L294.4,241L294.3,240.8L293.6,240.8L293.5,239.2L292.8,238.5L293,238.3L292.3,238.2L291.7,237.6L291.5,238.6L291,238.6L290.2,238.1L289.6,238L289.3,238.6L288.2,238.3L287.3,237.4L285.9,235.8L285.2,235.9L286.2,210.4L281.6,210.2L275,209.9L269.4,209.6L262.9,209.1L255,208.6L255.2,207.3L255.6,202M482.9,122L483.5,125.5L483.5,125.5L491.9,124L494.6,123.5L500.2,122.4L508.5,120.8L512,120.1L515.8,119.3L521.5,118.1L525.1,117.3L525.7,117.8L525.9,117.8L526.4,118.8L526.9,118.7L527.9,118.8L528.4,119.3L528.2,119.7L528.7,119.8L529.2,121.6L528.9,121.8L530.1,122.8L530.2,123.2L530.5,123L531.1,123.3L531.1,123.5L531.9,123.3L532.1,123.5L532.6,123.3L532.7,123.6L533.3,124.1M530.8,145.7L529.9,145.4L529.1,145.5L528.3,145.9L527.9,146.4L527.4,147.5L519.8,149.1L515.7,150L510.4,151L502.1,152.6L491.4,154.6L485.5,155.6L481.2,156.3L479.2,144.4L476.3,127M323.5,119.1L322.2,119.1L322.3,119.3L322.1,119.7L322.8,120.5L322.8,121.7L322.3,121.8L322.6,122.4L322.5,122.7L323.3,122.7L323.4,123.7L323.7,124.1L323.4,124.8L323,125L323.1,125.6L322.8,125.9L323,126.2L322.6,126.7L322.6,127.6L322.3,127.8L322.1,128.4L321.8,128.7L321.8,129.5L322.3,129.8L322.9,130.5L323.2,131.5L323.1,132L323.5,132.3L322.9,132.4L322.8,132.1L322,132.1L321.7,131.5L321,130.8L321.2,130.2L320.9,130L320.2,130L320.1,129.5L319.2,129.1L318.8,129.3L318.5,128.8L317,128.6L316.9,128.3L316.2,128L316.2,127.6L315.4,127.3L314.8,127.5L314.3,127.3L314.1,127.6L313.5,127.4L312.9,127.5L312.4,127.4L311.8,127.6L310.9,127.5L310.2,127.2L310,127.3L309.6,128.2L309.2,128.5L308.6,128.6L307.5,127.8L306.3,127.1L304.4,126L304.1,125.4L300.3,125.3L293.9,125.1L288.7,124.8L281.4,124.5L274.4,124.1L272.3,124L266.2,123.6L261.4,123.2L251.4,122.4L251.8,118.5L251.7,118.4L253.5,97.9L253.6,96.3L253.7,96.3L254.6,86.6L254.7,84M344.1,248.8L344.4,248.7L344.5,249.4L344.9,249.6L345.2,249.6L345.2,250L345.6,250.1L345.7,249.8L346.1,249.9L346.2,249.6L347,249.9L347.4,249.4L347.9,249.6L348.1,249.9L348.3,249.7L348.9,249.9L348.9,249.9L349,250L349.1,256.9L349.4,270.4L349.7,270.5L350.2,271.3L350.9,271.6L351.3,272.6L351.9,273.2L351.8,273.6L352.1,274.2L351.9,274.7L352,275.2L351.7,275.5L352,276.1L352.3,276.4L352.9,276.5L353,276.9L352.8,277.2L353.3,277.6L353.3,277.9L353.6,278.1L353.7,278.6L353.5,279.2L354,279.7L354.3,279.7L354.5,281L355.3,280.8L355.1,282L355.4,282.3L355.5,282.9L355,283.2L354.9,283.5L355.4,284.2L355.1,284.4L355,284.8L355.2,285.5L354.8,285.9L354.5,286.6L354.4,287.5L353.9,287.8L353.8,288.5L353.3,288.9L353.2,289.3L353.5,289.6L353.7,290.6L353.2,291.2L352.9,292L353.6,292.6L353.7,293.2L353.5,293.6L353.9,294.5L353.4,295.3L353.8,295.5L353.3,296.1L352.8,296.6L352.5,297.4L352,298.3L351.3,298.8L351.2,299.1L351.6,299.4L352.3,300.4M211.7,266.9L211.5,266.6L210.9,266.3L211,266L210.6,265.7L210.6,265.2L210.9,265.1L211,264L224,265.3L233.9,266.3L242.8,267L250,267.6L251,254L251.3,251.1L251.4,249.4L251.9,244.7L252.1,242.1L253.4,225L253.8,220.1L254.5,211L254.6,208.6L255,208.6M251.4,122.4L249.2,148.6M200.7,143.2L209.1,144.3L214.4,145L225.8,146.3L228.1,146.6L232.9,147.1L241.4,148L241.6,148L249.2,148.6L259.1,149.4L263.8,149.7L268.7,150.1L267.8,163.2L267.6,167.5L267.3,172.4L267.2,174.6L266.3,188.9L266.2,190.5L265.4,202.8L258.7,202.3L257.9,202.2L255.6,202L248,201.5L241.8,201L235,200.4L233.7,200.2L222.6,199.1L215.8,198.4L215.7,198.3L210.1,197.6L201.6,196.6L193.5,195.5L194.4,188.9L194.5,188.5L195.6,180.3L195.6,178.8L196.4,173L196.9,170.6L199.7,149.7L199.8,149.2L200.7,143.2L195.9,142.6L191,141.9L189.2,141.6L184.6,140.9L181.3,140.4L182.1,135.4L182.5,133L183.4,127.3L184.6,119.8L184.9,118L186.9,105.8L186.9,105.5L187.8,99.8L188.3,96.8L188.5,95.3L188.8,93.3L189.2,90.2L189.6,88.5L192,88.8L192.7,89.1L195.5,89.5L195.9,89.5L197.3,89.7L198.2,89.8L201,90.2L207.4,91.1L207.7,91.2L215,92.2L225.4,93.4L225.8,93.5L230.5,94.1L236.4,94.7L237.2,94.7L241.5,95.2L249.8,96L253.6,96.3M558.5,109.2L558.8,110.3L559.5,112.7L559.9,114.4L560.4,116.7L560,116.9L560.4,117.7L560.2,118.1M544.2,126.6L544.2,126.2L543.2,125.3L545.2,123.3L544.3,122.4L544,120.6L543.4,117.3L542.6,112.6M334.7,165.1L333.6,164.5L333.8,163.6L333,162.7L332.9,161.9L332.2,161.6L332.2,161.3L331.6,161L331.2,159.7L331.2,159.3L330.8,158.9L330.8,158.5L331.2,158L330.8,157.8L330.8,158.2L330.1,158.1L330.1,157.4L336,157.5L341.6,157.5L347.1,157.4L351.7,157.2L353.9,157.1L360.8,156.8L366.2,156.4L369.8,156.1L370.2,156.5L370.2,156.9L370.9,157L370.9,157.4L371.5,158L371.8,158.1L371.9,158.7L372.3,159L373,159.1L372.7,159.3L372.2,160.9L372.1,161.7L372.4,163.6L373,164.7L373.3,165L373,165.8L373.2,166.2L373.8,166.5L373.9,166.8L373.8,167.5L374.8,168.4L375.4,169L375.8,169.1L376.2,169.9L376.6,170L377.1,170.8L377.7,171.4L379.9,172.8L380.7,173.8L380.8,174.8L381.2,175.7L380.9,176.1L381.3,177L381.5,177.8L382.3,178.5L382.7,178.4L383.1,178L383.3,177.2L384,177.2L385,177.6L385.6,177.6L387,178.5L387,179.2L386.6,179.5L386.2,180.2L386.6,181.2L386.5,181.6L385.8,182.8L385.7,183.9L385.1,184.7L384.9,185.3L384.9,186.2L385.1,187L385.8,187.5L386.6,188.5L387.5,188.8L388,189.4L388.3,189.4L388.9,190L389.5,189.9L389.6,190.2L389.2,190.5L389.5,191.1L390.2,191.1L390.6,190.7L391,191L391.1,191.3L391.7,191.4L392.6,192.2L392.5,192.6L393,192.6L393.4,193.1L394.1,193.3L394.2,193.9L394.6,194.7L394.1,194.8L394.2,195.4L395.3,197.1L395.2,197.8L394.7,198L394.4,198.6L395.1,199.2L395.1,199.7L395.7,200.7L396.1,201.2L396.1,201.8L397,202.4L397.4,202L396.8,201.6L397.3,201.4L398,202L398.3,202.5L398.7,202.4L399.1,202.6L398.9,203.6L398.8,204.1L398.4,204.3L398.4,204.7L399,205.1L399,205.4L398.4,205.4L398.3,205.9L398.7,206.5L398.4,206.9L398.2,207.7L397.8,207.9L397,207.1L396.6,207.3L396.2,208.9L395.9,209.4L395.4,209.4L395.5,209L395.7,208.6L395.4,208L394.7,208L394.5,208.4L394.9,209L395.2,209.3L394.9,210L395.4,210.6L395.2,211.1L394.3,211.1L394.3,211.6L395.2,212L395.2,212.3L394.7,212.5L393.5,212.4L393.4,212.6L394.5,213.4L394.6,214.1L393.8,214.6L393.8,215.4L393.3,215.7L386.6,216.2L387.2,214.9L388,214.2L388,213.9L388.5,213.3L389.1,213L389.1,212.5L389.5,212.4L389.6,210.9L388.7,210.4L388.8,210.2L388.6,209.4L375.6,210.2L363.5,210.7L358.3,210.8L350,211L342.2,211.2M491.4,154.6L492.5,161.3L492.8,161.1L493.8,159.8L494.2,159.7L494.4,158.9L495.4,158L495.7,157.1L496.1,157.1L497.2,157.3L497.4,156.6L498.5,154.6L498.9,154.6L498.5,154.9L499,155L499.1,155.3L499.9,155.5L500.5,155.4L500.8,155.6L501.8,155.4L502.2,154.9L501.8,154.4L502.3,154.3L501.9,154L502.4,154.1L502.6,153.6L503.3,153.7L504.1,152.6L505,152.6L505.7,153.1L506.1,153.5L506.7,153.1L507.3,153.3L507.8,153.1L507.9,153.5L507.3,153.8L507.9,154.5L508.7,154.8L508.7,155.2L509,155.3L509.3,155.7L509.2,156.5L509.6,156.5L509.4,157.1L509,159.2L505.8,157.4L503.1,155.8L503.1,156.6L503.3,156.8L503.2,157.3L503.5,157.4L502.9,158.7L503.1,158.8L502.8,159.5L503.3,159.8L502.8,160.6L502.6,160.7L501.9,161.9L502.2,162L501.8,162.8L501.5,162.6L501.1,163.5L500.8,163.8L500.7,163.4L500.1,164.3L499.6,165.9L498.2,165L498,165.8L497.5,166.9L497.6,167.7L497.4,167.7L497.1,168.4L496.9,170L496,171.3L494.3,171L493.5,169.9L492.3,169.5L492,171L492.2,171.7L491.9,172.4L491.3,173.5L491.6,174L491.2,174.3L490.5,175.3L490.3,176L490.6,176.3L490.4,176.7L490.3,177.4L490,178L489.4,178.7L488.6,180L488,181.4L488.1,181.8L487.8,182.3L488,182.7L488.7,183L488.3,183.5L487.7,184L487.8,184.4L488.2,184.4L488.1,184.7L486.5,186.1L486.1,185.4L485.6,185.6L485,186.2L483.7,187.3L483.5,187L482.6,186.7L482.5,187.3L482.9,187.7L482.3,188.4L481.7,188.5L480.4,189L479.3,189.8L478.2,189.1L477.7,188.7L477.5,188.9L477.3,189.6L476.5,189.9L476.4,190.3L476,190.7L474.8,190.9L474,190.5L474,190.2L473.5,190L472.8,190.1L472.5,189.5L471.9,189.3L471.7,188.3L471.1,188.1L471,187.7L471.6,187.3L471.2,187L470.7,187.1L469.6,186.9L469.4,186.5L469.1,186.6L468.8,186.2L468.5,186.2L468.2,185.8L467.6,185.7L466.9,184.3L466.5,184.2L466,183.5L465.9,183.2L465.4,183L465,182.6L465.3,181.9L464.7,181.8L464.3,180.9L463.9,180.5L463.3,180.1L463.2,179.7L463.5,179.7L463.5,179L463.3,178.8L463.7,178.4L463.6,177.8L463.3,177.4L463.2,176.4L463.8,176.5L465,175.9L465.8,175.6L465.9,175.1L465.9,173.9L466.3,173.6L466.9,173.6L467,173.2L466.8,172.1L466.2,171L466.9,170.3L466.8,169.5L467.1,168.5L467.5,168.1L467.7,167.6L468.2,168L468.6,168L469.2,168.8L468.9,169.3L469.4,169.4L469.7,169.2L469.7,168.7L470,168.4L470.3,168.6L470.3,167.4L469.9,167.1L469.7,166.6L470.4,166.3L470.1,165.3L470.3,164.7L470.6,164.6L470.7,163.9L471.8,163.8L471.7,162.9L472.5,161.9L473.1,162L473.4,162.6L473.8,162.5L474.5,161.8L475.1,161.7L475.4,161L475.7,160.8L475.9,160.3L476.4,159.5L477.3,158.4L477.8,158.2L477.8,157.2L478.1,156.9L477.7,156.4L478,155.8L477.9,155.1L478.2,154.8L478,154.2L478.4,154.2L478.3,153.7L478.5,153.4L478.3,152L478.5,151.6L478.4,151L478.7,150.4L478.7,149.7L479.1,149.4L479.1,148.6L478.8,147.6L478.8,146.8L478.4,145.9L477.9,145.4L478.1,144.8L478.6,144.8L479.2,144.4M373,159.1L373.4,158.9L373.3,158.3L373.4,157.3L373,156.9L373.4,156.1L374.5,155.6L375.1,155.5L375.7,155L375.7,154.3L375.9,153.8L375.9,153L376.2,152.7L376.7,151.9L377,151.7L377.2,150.5L377.1,149.4L376.6,148.6L376.1,148.5L375.4,147.6L375.7,146.7L375.8,145.9L375.9,145.2L376.6,145L377,145.1L377.8,144.6L378.9,144.6L379.7,144.4L380.2,143.7L380.6,143.5L381.5,143.5L382.1,142.8L382.6,142.6L382.5,141.8L382.8,141.1L382.8,140.5L383.1,140.2L384,139.6L383.9,139.1L384.2,138.3L384,137.6L384.2,136.9L384,136.5L383.9,135.5L383.5,135.1L381.8,134.4L381.2,133.6L381.3,132.9L380.7,132.2L379.9,131.8L379.8,131.6L379.1,131.2L379,130.7L380.6,130.6L388.3,130.1L390.1,130.1L396.7,129.7L398.1,129.6L403.4,129.1L406.2,129M409.1,190.7L408.9,191.5L408.3,192L408,192.6L408.3,193.8L409.1,194.5L409,195.1L407.2,195.4L406.8,195.6L406.2,196.2L405.6,196L405,196.5L405,197.2L404.7,197.9L404.8,198.2L405.5,198.9L405.8,199.6L405.5,200.6L405,200.8L404.5,200.7L403.7,200.2L402.4,199.8L401.9,199.4L400.7,199L400,199L399.5,199.3L399.1,199.8L398.8,200.5L398.2,201.2L398.1,201.8L398.7,202.4M393.3,215.7L393.5,216.1L394.2,216.6L394.3,217.1L393.3,216.9L393,217.5L393.8,217.9L393.4,218.3L393,218.3L392.7,218.9L392.1,219.2L391.7,219L391.2,219.5L391.5,220.2L391.8,220.4L392.3,220.1L392.4,220.6L391.5,221.1L391.5,221.7L391.9,221.8L391.8,222.2L390.9,221.7L390.6,221.8L390.5,222.4L390.8,222.9L390.5,223.8L390.1,222.8L389.3,223.6L389.2,224.1L389.6,224.2L389.7,223.7L390.3,224L390,224.6L390,225.1L389.4,225.3L389.6,225.8L390.2,225.8L390.4,226.1L390,226.6L390.6,227.3L390.2,227.6L389.8,227.4L389.4,227.7L389.2,228.8L388.2,228.7L388.1,229.3L388.8,229.9L388.8,230.4L388.2,230.9L387,231.5L386.9,230.8L386.4,230.8L386.4,231.2L386.7,231.7L386.5,231.9L386.8,232.7L386.3,233L386.1,232.6L386.1,232L385.8,232.3L385.8,232.7L385.6,232.9L385.8,233.3L386.6,233.3L386.7,233.6L386.2,234.2L385.8,234L385.8,233.5L385.4,233.7L385.5,234.5L386,235.1L386,235.4L385.5,236L385.8,237L384.9,237.7L384.9,238.4L384.6,238.4L384.6,237.8L383.9,237.8L383.7,238.1L384.1,238.6L383.8,239L383.1,239.2L383,240L382.4,239.5L382,239.9L382.6,240.3L383.4,240.3L383.4,240.6L383,240.9L382.3,240.6L381.9,241L382.3,241.5L382.7,241.5L382.8,241.7L382.5,242.4L381.6,242.5L381.9,243L381.5,243.2L381.3,242.8L380.7,243.1L380.6,243.4L381.5,243.7L380.8,244.6L381.1,245.3L381.7,245.5L381.4,245.9L381.1,245.7L380.1,245.8L380.1,246.5L380.5,246.7L381,246.6L381.4,247.1L380.9,247.3L380.3,247.1L380,246.7L379.3,247L379.3,247.3L380.3,247.8L380.4,248.2L379.3,248.7L379.9,249.4L379.4,250.3L380,250.1L380,249.5L380.5,249.8L380.4,250.4L379.8,250.6L379.6,250.8L380.1,251L380.7,250.8L381,250L381.3,250.3L380.4,251.4L380.5,252.1L381,252.9L381.1,252.4L381.4,252.2L381.5,252.5L381.1,253.1L381.2,253.9L381.1,254.2L380.5,254.3L380.1,254.2L379.9,254.6L380.9,255.3L380.4,256L371.8,256.3L365.8,256.5L359.7,256.6L356.3,256.7L349.1,256.9M59.9,98.8L65,100.4L65.4,100.4L67.9,101.2L69.8,101.6L70.7,101.9L74.5,103L75.8,103.3L78.9,104.2L80.4,104.7L85.5,106.2L89.3,107.3L95.9,109L99,109.8L99,109.8L94.9,125.7L94.8,126.1L92.7,134.4L91.6,138.7L91.5,138.8L90.2,143.8L89.8,145.1L89.1,148L89.8,149.1L92.9,153.8L96,158.5L97.8,161L100.5,165.1L103.9,170.4L105.7,172.9L109.2,178.3L118.2,191.8L125,202L127.1,205.2L131.4,211.7M538.3,162.3L534.5,163.1L531.9,163.6L531.6,162.8L527.6,148.4L527.4,147.5M372.9,118L372.7,118.6L373.1,119.1L373.1,119.9L374.1,120.4L374.5,121.2L374,121.9L373.8,122.5L373.5,122.8L373.6,124L373.9,125L374,125.7L374.4,126L374.9,127.9L376.1,128.5L377.7,128.9L378.3,129.1L379,130.3L379,130.7M330.1,157.4L330.3,157.1L329.9,156.5L329.4,156.3L328.9,155.6L329,155.2L329.4,154.8L329.3,153.9L329.7,153.3L329.4,153L329.5,152.3L329.2,152L329.2,151.6L328.9,151.2L329.1,150.9L328.9,149.9L329.4,149.7L328.5,149.4L328.7,149L328.5,148.3L328.9,147.8L328.2,147.5L328.5,147.2L328.5,145.9L327.8,145.7L327.8,144.9L327.5,144.9L327.4,145.3L326.9,145L327,144.3L326.6,143.9L326.9,143.4L326.6,143L327,142.8L326.8,142.2L327.1,141.9L327.2,141.4L326.8,141.2L326.7,140.7L326.2,140L326.4,139.9L326.5,139.2L326,139.1L326,138.8L325.5,138.6L325.7,138.5L325.2,138.2L325.2,137.2L324.4,136.6L324.3,136.1L324.7,135.8L324.2,134.6L323.8,134.3L323.8,133.4L324.1,132.9L324,132.4L323.5,132.3M439.7,170.3L440.3,169.7L440.6,169.7L441.2,170.3L442,170.5L442.4,170.1L442.9,170.1L443.2,169.7L443.5,169.8L443.7,170.5L444.8,170.8L445.3,171.7L446,172.5L446.1,173.3L446.3,173.5L447.8,173.8L448.9,173.4L450,173.8L450.2,174.2L450.8,174.4L451,175L452.1,175.2L452.5,174.3L453.4,174L454,174.3L455,174.4L455.4,174.6L455.7,175L456.1,174.7L457.2,174.6L457.5,173.9L458.1,173.4L458.3,173L458.9,172.9L459.6,172.4L459.9,172.8L459.8,173.3L460.3,174.5L460.9,174.8L461.6,174.8L462.5,175.6L463,175.9L463.2,176.4M471.2,187L467.8,191.1L466.5,191.8L465.7,192.3L465.1,193L464.3,193.6L464.4,194.6L463.9,195.1L463.4,195.2L463,195.6L463.3,196.3L463.1,196.8L462.2,197.3L461.2,197.5L460.7,198.5L460.7,199.1L460.1,199.2L459,199.8L457.6,200.5L456.8,200.6L455.7,201.3L455.4,201.7L455.3,201.9L452.2,202.2L449.3,202.6L446.5,202.9L443.4,203.1L441.5,203.1L438.7,203.4L436.7,203.7L433.2,204L431.1,204.1L428,204.2L426.1,204.4L425.6,204.7L425.3,204.4L419.9,205.1L416.5,205.4L412.3,205.9L412.3,205.5L410,205.5L410.5,207.1L410.3,207.9L405.2,208.2L400.5,208.6L397.4,208.7L396.2,208.9M395.5,209L394.9,209M530.3,170.7L529.8,170.8M537.6,168.1L533.9,169.4L533.8,170.1L533.5,170.1M517.2,164.3L517.1,163.8L517.2,163.4L517.8,163L517.7,162.1M516.5,160.4L517.1,159.4L518.7,160.5L517.7,162.1L517.5,161L516.5,160.4L516.1,160L515.4,160.1L515.1,160L515,159.4L514,159.1L512.8,159.2L512.5,158.8L512.1,158.8L512,158.1L512.3,157.8L512.4,157.2L511.5,156.9L511.2,156.5L510.7,156.6L510,156.4L509.6,156.5M448.8,134.3L445.9,134.8L440.1,135.8L435.9,136.4M450.2,276.5L447.6,276.8L444.8,277.2L440.4,277.7L433.4,278.4L428.1,278.9L421.4,279.5L421.6,279.9L421.2,281.2L421.3,281.5L422.3,282.3L422.4,282.7L424,283.5L424.2,284.3L423.7,285.5L423.8,286.1L424.7,286.6L424,287L423.8,288L423.4,288.2L423.7,288.4L423.1,288.8M405.1,94.8L404.5,94.7L404.2,94.2L403.7,93.9L403.6,93.6L404,92.2L404.3,91.7L404.2,91.3L403.8,91L403.4,91.6L402.5,91.8L402.5,91.8L402.2,91.3L402.4,91L402.3,90.6L402.7,90.2L402.8,89.7L402.7,89.2L402.9,88.4L402.4,87.6L402.7,87.4L402.4,86.9L402,86.8L401.8,86.4L401,86.4L400.6,86L400,86.2L399.3,85.8L399.8,85.2L399.6,85L399.6,84.4L398.2,84L397.8,84.2L396.9,83.7L396.6,83.9L395.9,83.7L395.8,83.5L394.9,83.6L394.8,83.9L394.4,84L394.2,83.7L393.7,83.5L393.3,83.7L390.4,82.3L380.9,80.4L380.9,80.1L379.9,78.2L379,78.1L378.7,77.9L378.7,77.9L378.3,78L378.1,77.5M388.1,229.3L396.8,228.8L402.8,228.3L410.4,227.7M400.7,291.8L400.2,291.9L399.7,291.4L399.5,290.6L399.4,289.8L398.7,289L398.7,288.4L398.3,288L397.8,287.8L397.6,287.4L397.2,287L397,285.9L396.6,285.8L397,284.8L396.8,284.4L397.1,284.1L397.3,282.7L397.6,282.4L397.5,281.9L397.8,281.7L397.5,281.3L390.9,281.7L385.5,282L376.5,282.5L377,282.2L377.2,281.6L376.6,281L376.5,280.7L376.9,280.2L376.7,279.7L376.3,279.4L376.3,279L377,279L377.7,278.8L377.7,278.3L377.2,277.9L377.2,277.4L376.9,277.2L377.2,276.8L377.4,277.3L377.7,277.6L378.1,277.5L378.1,277.2L377.5,276.4L377.4,275.6L378.2,275.3L378.7,274.9L378.5,274.6L377.8,274.7L377.4,274.4L377.6,274L378,274.3L378.7,274.2L378.7,273L379.1,272.6L380,272.5L380.2,272.3L379,272.3L379.2,271.2L379.7,271L379.8,271.5L380.1,271.7L380.3,271.4L380,271.1L380.9,270.2L380.8,269.7L381.1,269.4L381.8,269.2L381.8,268.6L381.1,268.3L381.2,268.1L381.8,268.5L381.9,268.1L382.4,267.8L382.7,267L382.1,266.7L382.2,267.4L381,267.4L381,266.5L382,266.2L382.3,265.9L382.9,266.2L383,265.7L382.9,265.1L383.4,265.2L384,264.3L383.8,264.1L383.6,264.5L382.7,264.4L382.7,263.7L383,263.5L382.6,263.1L382.3,263.4L381.3,262.9L381.4,262.2L381.6,262.2L382.3,262.7L382.7,262.6L382.5,262.3L381.6,261.8L382.2,261.4L382.4,261L382.1,260.6L381.9,261.1L381.2,261.4L380.9,261.3L380.8,260.7L381.1,260.3L381.7,259.9L381.8,259.6L380.5,259.3L380.5,258.5L380.7,258.1L381.5,257.4L381.6,257L381.2,256.2L380.7,256.3L380.8,257L380.3,257.3L379.9,257.1L380,256.6L380.4,256M188.5,95.3L187.9,94.9L187.8,94.3L187.1,93.6L187.2,93.1L186.5,91.6L186,91.2L185.7,91.7L185,91.6L185.1,92L184.4,93L184.8,93.8L183.8,93.3L183.5,93.5L182.7,93.2L182.6,93.4L181.5,93.7L181.2,92.9L180.5,92.9L180,93.1L179.7,92.9L178.9,93.1L178.7,92.8L178.2,92.8L177.9,92.3L177.4,92.2L177,92.5L176.7,92.5L176.6,93.1L176.2,93.6L175.5,93L175.2,93.2L174.9,92.9L173.8,92.6L173.3,92.3L172.7,92.5L172,93.2L172.1,93.8L171.8,94L171.5,93.4L171,93.1L170.6,92.5L170.5,91.9L170.7,91.6L170.2,90.5L170.6,90.1L170.5,89.5L170.1,88.2L169.2,87.3L168.3,87.7L168.2,87.2L167.4,86.4L167.3,85.3L167.7,85.2L167.9,84.7L167.9,84L167.4,83.4L167.5,83.1L167,82.9L166.9,82L166.3,81.1L166.3,80.7L166,80L166.2,79.2L166,79L165.9,78.3L166.1,78L166.2,77.5L165.6,77.4L166,76.4L165.6,76L165.2,76L165.3,75.7L165.1,75.1L164.7,74.8L164.3,74.8L164.3,75.3L163.8,75.6L163,76.4L162.3,76.6L161.9,76.3L161.7,77L160.8,77.3L160.7,76.8L160.3,76.5L160,75.8L159.2,75.6L159.5,75.1L159.3,74.6L160,74.3L160.1,73.8L159.7,72.9L160.4,72L161.2,72.1L161.5,71.7L161.2,71L161.5,70.5L161,70.1L161,69.5L161.4,68.9L160.9,68.4L161.1,67.9L161.7,68L161.9,67.1L161.7,66.7L162.2,66.5L162.5,65.3L163,64.6L163,63.8L163.3,63.9L163.9,62.6L164,61.9L163.7,61.8L162.8,61.9L162.7,62.1L162,61.8L161.4,61.7L161.2,61.2L161.5,60.8L161.4,60.5L160.9,60.3L160.7,60.6L160.2,60.7L160.1,60.5L160.4,59.9L159.4,59.1L159.1,58.3L159.3,57.6L158.8,56.8L158.4,56.7L158.4,56L158,55L157.5,54.3L157.2,54.1L157.1,53.7L156.8,53.5L156.9,53.1L156.8,52.6L156,52.3L155.1,51.6L155,51L153.8,49.7L153.4,49.7L153.9,49.4L154.6,49.4L154.7,49.2L154.2,49L154.2,48.4L153.9,48.2L154,47.9L154.5,47.6L154.2,46.9L154.5,46.3L154.1,45.9L154,45.4L153.7,45.4L153.7,44.4L153.3,44L152.4,42.1L153,39.1L153.3,37.9L155.2,29.2M550,101.6L549.5,101.1L549.4,101.2L548.7,100.2L548.8,99.4L548.7,98.7L549.1,98.5L549.2,97.9L548.9,97.4L549.1,97L548.7,96.3L548.5,94.8L548.7,94L548.3,93.4L548.3,91.8L548,91.5L548,90.6L548.4,90.1L548.3,88.9L548.4,88.3L548.9,87.7L549,87.2L548.8,86.5L549.2,85.6L549,84.7L549.3,84.1L549.5,83.2L549.3,82.7L548.8,82.1L548.8,81.4L548.6,81.1L548.7,80.3L549.8,79.7L550.1,79.8L550.6,79.4L550.6,78.8L551.3,78.4L551.7,77.9L551.8,77.3L552.2,77L551.8,76.4L552.2,76.1L552,75.3L551.6,75L550.9,74L551.3,73.3L551.2,72.6L551.6,71.6L550.9,70.7L551.2,70.3M534.7,74.5L535.1,75.7L534.9,76.1L534.9,76.8L535.5,77.3L535.3,78L535.5,79L535.5,79.4L535.8,80.1L536.6,80.9L537,81.7L536.8,82.6L537.3,83.8L537.3,84.2L536.8,85.1L536.9,86.1L536.8,87L537.2,87.3L537.4,88.4L538,89L538,89.8L538.5,90.3L538.2,91.5L538.3,92.8L538.7,93L538.8,92.2L539.4,92.1L539.6,92.6L540.1,92.9L540.9,96.6L541.9,101.3L542.1,102.1L542,102.5L542.5,103.2M82,47.1L82.7,47.2L82.9,47.8L82.7,48.4L83.1,49L83.9,49.3L85.1,49L85.5,49.2L87,51L87,51.7L87.3,52.7L87.2,53.4L87.2,54L86.9,54.7L87,55.7L86.7,56.1L86.6,56.7L87.5,57.6L88.9,58.4L89.1,58.7L89.7,58.7L90,59.1L90.6,59.4L91.4,59.1L92.2,59.3L94.1,58.8L94.6,58.5L95.2,58.4L95.8,58.8L96.7,58.9L97.7,58.9L98.2,59.4L98.7,59.6L99.3,59.6L100.3,60.3L100.4,61.2L100.8,61.3L101.6,60.9L102.6,61.2L103,61.4L103.5,61.2L105.1,61L105.7,60.8L106.3,61L106.8,61.8L107.5,61.9L108.7,61.9L109.3,62L109.8,61.6L110.8,61.6L111.8,61.3L113.3,61.4L114.5,61.6L115.1,61.1L115.6,60.9L116.3,61.3L118.5,61.4L119,61.7L119.6,61.8L120.6,61.6L121,61.3L126.2,62.5L134.1,64.4L139.3,65.6L139.6,66.9L139.8,67.3L140.2,68.2L140.8,68.3L141,68.9L141.6,69L142,69.7L141.8,70.2L142.1,70.9L142.2,71.5L141.2,72.5L141,73.1L140.7,73.3L139.5,74.8L139.5,75.2L139.1,75.7L138.6,76.9L138,77.2L137.7,77.8L137.2,78.2L136.9,78.7L137,79.4L136.6,80.1L135.8,80.8L135.7,81L134.6,81.3L133.9,82.2L133.4,83.2L132.9,83.9L132.2,84.3L132.1,85L131.8,85.4L132.1,86.2L131.7,86.8L132,87.3L132.7,87.1L133.1,87.9L133.8,87.9L133.7,88.5L134.3,88.8L134.2,89.2L133.7,89.8L133.3,89.9L133.2,90.3L133.5,90.8L133.4,91.2L132.8,92L132.7,92.6L132.3,92.7L132.1,93.3L126.8,116.5L121.2,115.2L112,113.1L111.2,112.9L106.4,111.7L99,109.8M455.4,201.7L456.6,201.5L459.5,201.2L459.7,201.2L465.5,200.4L467.8,200L473.3,199.3L473.4,198.9L476.3,198.6L476,198.9M142.5,187L144.4,177.2L144.4,177.1L145,174.1L145.4,172.2L146,168.9L146.7,165.3L150.2,146.9L150.6,145.2L151.9,138.2L152.5,135.3L155,122.4L157.1,122.9L166,124.4L172.5,125.5L172.7,125.6L179.4,126.7L183.4,127.3M146.8,27.4L146.1,30.5L145,35.3L144.3,38.4L142.6,46L142.5,46.6L139.4,60.2L139.1,60.6L139.5,61.6L139.6,62.3L139.5,62.9L139.8,63.5L139,64.4L139.2,64.5L139.3,65.6M155,122.4L151,121.6L149.7,121.4L147.8,120.9L145.6,120.6L143,120L133,117.9L126.8,116.5" fill="none" stroke="#e6f1ff" strokeOpacity="0.6" strokeWidth="0.9" />
              </svg>

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

    if (type === "automation") {
      return (
        <div className="concept-visual month-end-visual">
          <div className="visual-header">
            <span>MONTH-END REPORTING</span>
            <span className="visual-status">Automation Concept</span>
          </div>
          <div className="month-end-inputs">
            <span>Reporting inputs</span><span>Business rules</span>
          </div>
          <div className="month-end-arrow" aria-hidden="true">↓</div>
          <div className="python-workbench">
            <div className="python-workbench-title"><strong>Python</strong><span>VS Code</span></div>
            <div className="python-workflow"><span>01</span><strong>Validate data</strong><span>02</span><strong>Process reporting logic</strong><span>03</span><strong>Generate & verify outputs</strong></div>
            <p>AI-assisted development · troubleshooting & logic refinement</p>
          </div>
          <div className="month-end-arrow" aria-hidden="true">↓</div>
          <div className="month-end-output">Validated month-end reports</div>
          <div className="month-end-impact">
            <div><small>BEFORE</small><strong>~3 days</strong></div>
            <span aria-hidden="true">→</span>
            <div><small>AFTER</small><strong>&lt;30 min</strong></div>
          </div>
          <p className="month-end-footnote">Time saved on one recurring reporting process</p>
        </div>
      );
    }

    if (type === "repository") {
    return (
      <div className="concept-visual repository-visual">
        <div className="visual-header">
          <span>RETURNS &amp; REFUNDS REPOSITORY</span>
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
              <strong>SQL Query</strong>
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

        <div className="repository-reporting">
          <span className="repository-output-arrow" aria-hidden="true">↓</span>
          <span className="repository-output-label">ONE VIEW · MULTIPLE USES</span>
          <div><span>Tableau / BI</span><span>Monthly &amp; yearly trends</span><span>Client reporting</span></div>
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
    return null;
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
                TEXAS A&M MIS GRADUATE | Consultant @ Ryan
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