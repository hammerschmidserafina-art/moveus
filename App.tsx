import { useEffect, useMemo, useState } from "react";

const photos = {
  plaza: "https://images.unsplash.com/photo-1661442196003-f2f6eb54bd94?auto=format&fit=crop&w=1400&q=85",
  city: "https://images.unsplash.com/photo-1542224505-dc4c0cb6e63c?auto=format&fit=crop&w=1200&q=85",
  people: "https://images.unsplash.com/photo-1568891707029-d23e74760db6?auto=format&fit=crop&w=1200&q=85",
  architecture: "https://images.unsplash.com/photo-1560964598-dee5d2b9dd6b?auto=format&fit=crop&w=1200&q=85",
};

type Article = {
  slug: string;
  pageKey: string;
  category: string;
  color: string;
  title: string;
  intro: string;
  image: string;
  reading: string;
  sections: { title: string; text: string; steps: string[] }[];
};

const articles: Article[] = [
  {
    slug: "before-you-arrive-checklist",
    pageKey: "before-you-arrive",
    category: "Before You Arrive",
    color: "blue",
    title: "Before you arrive: your administrative checklist",
    intro: "A clear starting point for organizing your application, Learning Agreement, documents and registration questions.",
    image: photos.architecture,
    reading: "8 min read",
    sections: [
      {
        title: "Application and admission procedures",
        text: "Application routes can vary by exchange programme, home university and academic year. Use the instructions sent by your home institution and the University of Seville as your primary reference.",
        steps: ["Read your nomination or application instructions in full.", "Confirm which office manages your application.", "Save your submission confirmation and any official messages.", "Check the official University of Seville website for current requirements."],
      },
      {
        title: "Learning Agreement",
        text: "Your Learning Agreement records the academic plan agreed with the relevant coordinators. Do not assume that a course choice is approved until the responsible institutions confirm it.",
        steps: ["Review the current course information.", "Discuss your proposed subjects with your academic coordinator.", "Follow the signature method specified for your programme.", "Keep a copy of the accepted version."],
      },
      {
        title: "Required documents",
        text: "Document lists may change and can depend on your programme or faculty. Confirm the current list before uploading or sending personal information.",
        steps: ["Create a folder for official correspondence.", "Check names, dates and identification details on every document.", "Confirm accepted formats and submission channels.", "Check the official University of Seville website for current requirements."],
      },
      {
        title: "University registration steps",
        text: "Admission, registration and enrollment are not always the same process. Follow the sequence communicated by the relevant University of Seville office.",
        steps: ["Identify the next action stated in your admission message.", "Note which university office can answer registration questions.", "Complete only the forms provided through official channels.", "Save receipts or confirmation screens for your records."],
      },
    ],
  },
  {
    slug: "enrollment-and-documents",
    pageKey: "enrollment-documents",
    category: "Enrollment & Documents",
    color: "red",
    title: "Enrollment and university documents, explained",
    intro: "A practical guide to enrollment, digital platforms, student credentials and document submission at the University of Seville.",
    image: photos.city,
    reading: "7 min read",
    sections: [
      {
        title: "Enrollment at the University of Seville",
        text: "Enrollment procedures can differ by centre and mobility programme. Treat messages from the responsible university office as the authoritative instructions for your case.",
        steps: ["Read the enrollment instructions you receive.", "Confirm the responsible faculty or school office.", "Review your personal and academic details before submitting.", "Keep proof that the process was completed."],
      },
      {
        title: "Access to university platforms",
        text: "Use only official links and never share passwords by email. Platform names, activation steps and access timing should be checked in current university guidance.",
        steps: ["Follow the activation link or instructions from an official source.", "Create and store a secure password.", "Check that your personal details are correct.", "Contact the relevant support service if access does not work."],
      },
      {
        title: "Student identification and university credentials",
        text: "The credentials available to exchange students may depend on enrollment status and current university policy.",
        steps: ["Check which credential applies to your mobility status.", "Confirm how and where it is issued.", "Bring identification only when an official instruction requests it.", "Check the official University of Seville website for current requirements."],
      },
      {
        title: "Where to submit documents",
        text: "Send documents only through the channel named by the responsible office. Avoid sending sensitive personal information to unverified addresses.",
        steps: ["Identify the office requesting the document.", "Verify the email address, platform or registry before submitting.", "Use the requested file format and naming convention.", "Keep a dated copy of your submission."],
      },
    ],
  },
  {
    slug: "during-your-exchange",
    pageKey: "during-your-exchange",
    category: "During Your Exchange",
    color: "yellow",
    title: "Administrative essentials during your exchange",
    intro: "How to approach Learning Agreement changes, academic deadlines, university offices and common paperwork questions.",
    image: photos.people,
    reading: "7 min read",
    sections: [
      {
        title: "Changes to the Learning Agreement",
        text: "Do not assume a change is valid until it has followed the approval process required by your home and host institutions.",
        steps: ["Write down the change and why it is needed.", "Contact the relevant academic coordinator.", "Use the current change form or digital process.", "Keep the fully accepted version with your exchange records."],
      },
      {
        title: "Academic administration and deadlines",
        text: "Deadlines vary by centre, subject, process and academic year. MoveUS does not publish a date unless it can be confirmed in a current official source.",
        steps: ["Check your faculty or school communications regularly.", "Add confirmed dates to your calendar.", "Ask the responsible office when instructions are unclear.", "Check the official University of Seville website for current deadlines."],
      },
      {
        title: "Contacting the International Relations Office",
        text: "A complete, focused message can help the office understand your case and direct it to the right person.",
        steps: ["Use an official contact channel.", "Include your full name and exchange programme.", "State your faculty or school and explain the issue briefly.", "Attach documents only when necessary and requested."],
      },
      {
        title: "Common administrative questions",
        text: "For timetable conflicts, enrollment records, platform access or document status, start with the office responsible for that specific process.",
        steps: ["Describe the issue and when it occurred.", "Keep screenshots or reference numbers.", "Check whether an official FAQ already answers the question.", "Avoid relying on unverified advice from social media."],
      },
    ],
  },
  {
    slug: "before-you-leave",
    pageKey: "before-you-leave",
    category: "Before You Leave",
    color: "blue",
    title: "Before you leave: close your exchange properly",
    intro: "A final checklist for your Transcript of Records, Certificate of Attendance, signatures and remaining documents.",
    image: photos.plaza,
    reading: "6 min read",
    sections: [
      {
        title: "Transcript of Records",
        text: "The issuing process and delivery timeline can vary. Confirm how your results will be recorded and sent to your home institution.",
        steps: ["Check that your enrolled subjects are correctly listed.", "Confirm which office issues the transcript.", "Ask how your home university will receive it.", "Keep any request or delivery confirmation."],
      },
      {
        title: "Certificate of Attendance",
        text: "Your home institution or exchange programme may specify the certificate format and the dates it must show.",
        steps: ["Check whether your programme requires this certificate.", "Use the approved form, if one is provided.", "Ask the authorized office for the signature.", "Keep a clear copy of the completed document."],
      },
      {
        title: "Final signatures and documents",
        text: "Plan enough time to identify the authorized signer, but do not rely on an unverified deadline or office schedule.",
        steps: ["List every document still awaiting action.", "Confirm who is authorized to sign each one.", "Use official contact details to arrange the process.", "Check the official University of Seville website for current requirements."],
      },
      {
        title: "Completing the exchange process",
        text: "Your exchange may involve final tasks at both the University of Seville and your home institution.",
        steps: ["Review the completion instructions from both universities.", "Download or copy documents you may need later.", "Confirm that outstanding questions have reached the correct office.", "Store your final exchange record securely."],
      },
    ],
  },
];

const categoryPages: Record<string, { kicker: string; title: string; intro: string; color: string; topics: { title: string; text: string }[] }> = {
  "before-you-arrive": {
    kicker: "PREPARE WITH CONFIDENCE",
    title: "Before You Arrive",
    intro: "Organize your application, academic plan and documents before traveling to Seville.",
    color: "blue",
    topics: [
      { title: "Application and admission procedures", text: "Understand what to verify after nomination and during your application." },
      { title: "Learning Agreement", text: "Prepare your academic plan and identify the approvals you need." },
      { title: "Required documents", text: "Build a careful checklist based on current official instructions." },
      { title: "University registration steps", text: "Distinguish admission from the registration actions that may follow." },
    ],
  },
  "enrollment-documents": {
    kicker: "GET SET UP",
    title: "Enrollment & Documents",
    intro: "Navigate enrollment, university platforms, credentials and secure document submission.",
    color: "red",
    topics: [
      { title: "University enrollment", text: "Follow the process communicated for your programme and centre." },
      { title: "University platforms", text: "Activate and use official digital services securely." },
      { title: "Student credentials", text: "Check which identification and access credentials apply to you." },
      { title: "Submitting documents", text: "Find the responsible office and use only verified channels." },
    ],
  },
  "during-your-exchange": {
    kicker: "STAY ON TRACK",
    title: "During Your Exchange",
    intro: "Handle academic changes, deadlines and administrative questions with reliable information.",
    color: "yellow",
    topics: [
      { title: "Learning Agreement changes", text: "Know what to confirm before changing your academic plan." },
      { title: "Administration and deadlines", text: "Find current dates in the source responsible for each process." },
      { title: "International Relations Office", text: "Contact the right team with the details they need." },
      { title: "Common questions", text: "Approach enrollment, access and document issues step by step." },
    ],
  },
  "before-you-leave": {
    kicker: "FINISH WELL",
    title: "Before You Leave",
    intro: "Complete the final academic documents and administrative steps for your exchange.",
    color: "blue",
    topics: [
      { title: "Transcript of Records", text: "Confirm how your results are issued and shared." },
      { title: "Certificate of Attendance", text: "Check the format and authorized signature required." },
      { title: "Final signatures", text: "Identify outstanding documents and the office responsible." },
      { title: "Completing your exchange", text: "Keep a secure record of every final document." },
    ],
  },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

function Logo() {
  return (
    <a className="logo" href="#/" aria-label="MoveUS, home">
      <img src="/moveus-logo.png" alt="MoveUS — Tan lejos, tan cerca" />
    </a>
  );
}

function Header({ onSearch }: { onSearch: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(value);
    setOpen(false);
  };
  return (
    <header>
      <nav className="nav wrap" aria-label="Main navigation">
        <Logo />
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Open menu"><span /><span /></button>
        <div className={`nav-links ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
          <a href="#/">Home</a><a href="#/before-you-arrive">Before You Arrive</a><a href="#/enrollment-documents">Enrollment & Documents</a>
          <a href="#/during-your-exchange">During Your Exchange</a><a href="#/before-you-leave">Before You Leave</a><a href="#/about">About MoveUS</a>
        </div>
        <form className="header-search" onSubmit={submit}>
          <input value={value} onChange={(event) => setValue(event.target.value)} placeholder="Search" aria-label="Search MoveUS" />
          <button aria-label="Submit search">⌕</button>
        </form>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap footer-main">
        <div><Logo /><p>Tan lejos, tan cerca.</p></div>
        <div><strong>EXPLORE</strong><a href="#/before-you-arrive">Before You Arrive</a><a href="#/enrollment-documents">Enrollment & Documents</a><a href="#/during-your-exchange">During Your Exchange</a><a href="#/before-you-leave">Before You Leave</a></div>
        <div><strong>GET IN TOUCH</strong><a href="mailto:hola@moveus.es">hola@moveus.es</a><a href="#/about">About MoveUS</a></div>
      </div>
      <div className="wrap footer-disclaimer">MoveUS is an independent student information project and is not an official website of the University of Seville. Always confirm requirements and deadlines with the relevant university office.</div>
      <div className="wrap footer-bottom"><span>© 2025 MoveUS</span><span>Made in Seville for international exchange students.</span></div>
    </footer>
  );
}

function ArticleCards({ items = articles }: { items?: Article[] }) {
  return (
    <div className="articles">
      {items.map((guide) => (
        <article className="article" key={guide.slug}>
          <a className="article-image" href={`#/article/${guide.slug}`}>
            <img src={guide.image} alt="" />
            <span className={`badge ${guide.color}`}>{guide.category}</span>
          </a>
          <div className="article-copy">
            <p className="meta">{guide.reading} · <span className="pending">Verify current requirements</span></p>
            <h3>{guide.title}</h3><p>{guide.intro}</p>
            <a href={`#/article/${guide.slug}`}>Read guide <Arrow /></a>
          </div>
        </article>
      ))}
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span /> UNIVERSITY PAPERWORK, EXPLAINED</div>
          <h1>Your exchange in Seville, <em>made simpler.</em></h1>
          <p className="tagline">Tan lejos, tan cerca.</p>
          <p className="intro">Clear, verified, step-by-step guidance for university paperwork and administrative procedures at the University of Seville.</p>
          <a className="primary-button" href="#/guides">Explore the Guides <Arrow /></a>
        </div>
        <div className="hero-visual"><div className="sun" /><div className="blue-shape" /><img src={photos.plaza} alt="Plaza de España in Seville" /><div className="sticker">CLEAR STEPS,<br /><strong>LESS STRESS.</strong></div><div className="caption">SEVILLE, SPAIN<br /><strong>YOUR EXCHANGE, EXPLAINED</strong></div></div>
      </section>
      <section className="quick-section"><div className="wrap">
        <div className="section-heading"><div><span className="kicker">START HERE</span><h2>Where are you in your exchange?</h2></div><p>Practical guidance organized around the administrative steps you need before, during and after your stay.</p></div>
        <div className="quick-grid">
          {Object.entries(categoryPages).map(([slug, page], index) => (
            <a className={`quick-card ${page.color}-card`} href={`#/${slug}`} key={slug}>
              <span className="card-number">0{index + 1}</span><span className="card-icon">{["✓", "▤", "↻", "→"][index]}</span>
              <div><h3>{page.title}</h3><p>{page.intro}</p></div><Arrow />
            </a>
          ))}
        </div>
      </div></section>
      <section className="guides wrap"><div className="guides-top"><div><span className="kicker red-text">SERVICE JOURNALISM</span><h2>Paperwork, made understandable.</h2></div><a className="text-link" href="#/guides">View all guides <Arrow /></a></div><ArticleCards /></section>
    </>
  );
}

function CategoryPage({ pageKey }: { pageKey: string }) {
  const page = categoryPages[pageKey];
  const related = articles.filter((article) => article.pageKey === pageKey);
  return (
    <>
      <section className={`page-hero page-hero-${page.color}`}><div className="wrap"><span className="kicker">{page.kicker}</span><h1>{page.title}</h1><p>{page.intro}</p></div></section>
      <section className="topic-section wrap">
        <div className="topic-grid">{page.topics.map((topic, index) => <article key={topic.title}><span>0{index + 1}</span><h3>{topic.title}</h3><p>{topic.text}</p><a href={`#/article/${related[0].slug}`}>Read the guide <Arrow /></a></article>)}</div>
        <aside className="verification-note"><strong>Independent, responsible information</strong><p>MoveUS independently organizes and explains information from official university sources. Requirements, deadlines and procedures can change, so always confirm them with the responsible University of Seville office.</p></aside>
      </section>
      <section className="guides wrap related"><span className="kicker red-text">RECOMMENDED READING</span><h2>Your {page.title.toLowerCase()} guide</h2><ArticleCards items={related} /></section>
    </>
  );
}

function GuidesPage({ initialQuery }: { initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [filter, setFilter] = useState("All");
  useEffect(() => setQuery(initialQuery), [initialQuery]);
  const categories = ["All", ...Object.values(categoryPages).map((page) => page.title)];
  const results = useMemo(() => articles.filter((article) => (filter === "All" || article.category === filter) && `${article.title} ${article.intro} ${article.category} ${article.sections.map((section) => `${section.title} ${section.text}`).join(" ")}`.toLowerCase().includes(query.toLowerCase())), [query, filter]);
  return (
    <>
      <section className="page-hero page-hero-blue"><div className="wrap"><span className="kicker">USEFUL, VERIFIED, CLEAR</span><h1>Administrative guides</h1><p>Student-friendly explanations with practical checklists and official sources always in view.</p></div></section>
      <section className="guides wrap listing">
        <div className="filter-bar"><label className="search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What do you need to find?" /></label><div className="filters">{categories.map((category) => <button className={filter === category ? "active" : ""} onClick={() => setFilter(category)} key={category}>{category}</button>)}</div></div>
        <p className="result-count">{results.length} {results.length === 1 ? "result" : "results"}</p>
        {results.length ? <ArticleCards items={results} /> : <p className="empty">No guides match those words. Try “Learning Agreement”, “enrollment” or “Transcript of Records”.</p>}
      </section>
    </>
  );
}

function ArticlePage({ article }: { article: Article }) {
  return (
    <article className="story">
      <header className="story-head wrap"><a className="back" href="#/guides">← Back to guides</a><span className={`badge static ${article.color}`}>{article.category}</span><h1>{article.title}</h1><p>{article.intro}</p><div className="story-meta"><span>{article.reading}</span><span className="pending">Confirm details with the relevant university office</span></div></header>
      <div className="story-image wrap"><img src={article.image} alt="" /></div>
      <div className="story-layout wrap">
        <div className="story-body">
          <div className="verification-note"><strong>Before you continue</strong><p>MoveUS is an independent student information project. This guide organizes and explains official information, but it does not replace instructions from the University of Seville or your home institution.</p></div>
          {article.sections.map((section, index) => <section key={section.title}><span className="section-number">0{index + 1}</span><h2>{section.title}</h2><p>{section.text}</p><h3 className="checklist-title">Your checklist</h3><ol>{section.steps.map((step) => <li key={step}>{step}</li>)}</ol></section>)}
          <section className="sources"><h2>Official sources</h2><p>Use the University of Seville website and the instructions sent by the office responsible for your exchange. Check the official website for current requirements, forms and deadlines.</p><a href="https://www.us.es/" target="_blank" rel="noreferrer">University of Seville official website <Arrow /></a></section>
        </div>
        <aside className="story-aside"><strong>IN THIS GUIDE</strong>{article.sections.map((section, index) => <span key={section.title}>0{index + 1} {section.title}</span>)}<a href="mailto:hola@moveus.es?subject=Content%20correction">Have you spotted an error?</a></aside>
      </div>
    </article>
  );
}

function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero-red"><div className="wrap"><span className="kicker">ABOUT MOVEUS</span><h1>University procedures, made clearer.</h1><p>Independent service journalism for international exchange students at the University of Seville.</p></div></section>
      <section className="about-page wrap">
        <div><span className="kicker red-text">OUR MISSION</span><h2>We make essential information understandable.</h2></div>
        <div><p>MoveUS helps Erasmus and other international exchange students navigate University of Seville administration. We are not an institutional website: we independently organize, check and explain information from official university sources.</p><p>Our commitment is to separate editorial guidance from official instructions, show students where to confirm each detail and correct our content when necessary.</p></div>
        <div className="values"><article><strong>01</strong><h3>Clarity</h3><p>Direct language and practical, student-friendly formats.</p></article><article><strong>02</strong><h3>Verification</h3><p>Official sources identified and uncertainty clearly marked.</p></article><article><strong>03</strong><h3>Service</h3><p>Guidance built around real administrative needs.</p></article></div>
        <div className="contact-box"><div><span className="kicker">CONTACT</span><h2>Talk to us.</h2><p>Tell us which procedure needs a clearer explanation or let us know if something should be reviewed.</p></div><a className="primary-button" href="mailto:hola@moveus.es">Write to us <Arrow /></a></div>
      </section>
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash.slice(1) || "/");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const change = () => { setRoute(window.location.hash.slice(1) || "/"); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", change);
    return () => window.removeEventListener("hashchange", change);
  }, []);
  const runSearch = (value: string) => { setSearch(value); window.location.hash = "/guides"; };
  let page = <Home />;
  if (categoryPages[route.slice(1)]) page = <CategoryPage pageKey={route.slice(1)} />;
  if (route === "/guides") page = <GuidesPage initialQuery={search} />;
  if (route === "/about") page = <AboutPage />;
  if (route.startsWith("/article/")) {
    const article = articles.find((item) => item.slug === route.split("/").pop());
    page = article ? <ArticlePage article={article} /> : <GuidesPage initialQuery="" />;
  }
  return <div className="app"><Header onSearch={runSearch} /><main>{page}</main><Footer /></div>;
}
