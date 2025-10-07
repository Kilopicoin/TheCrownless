import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import logo from "./assets/thecrownless_logo_only_icon_No_Background.png";
import trailer from "./assets/idea_trailer.mp4";
import combat from "./assets/combat.png";
import house from "./assets/house.png";
import flag from "./assets/flag.png";
import diamond from "./assets/diamond.png";
import tokenomicsPie from "./assets/tokenomics-pie.png";
import photoCem from "./assets/cem.png";
import photoBilal from "./assets/bilal.png";
import photoNecdet from "./assets/necdet.png";
import photoMesut from "./assets/mesut.png";
import photoKivilcim from "./assets/kivilcim.png";
import photoOmer from "./assets/omer.png";
import photoGoktug from "./assets/goktug.png";
import roadmapSign from "./assets/roadmap.png";
import worldPng from "./assets/world.png";



function RewardTiersCard() {
  return (
    <div className="reward-card">
      <h2 className="reward-card__title">Reward Tiers</h2>
      <p className="reward-card__desc">
        Support the development of the project, reserve your spot, take advantage of the good price, and get special NFT rights.
      </p>

      <div className="reward-card__tablewrap">
        <table className="reward-card__table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Cumulative Spend ($)</th>
              <th>NFT Reward</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>min: 100<br/>max: 499</td><td>Tier 1 NFTs</td></tr>
            <tr><td>2</td><td>min: 500<br/>max: 1,999</td><td>Tier 2 NFTs</td></tr>
            <tr><td>3</td><td>min: 2,000<br/>max: 6,999</td><td>Tier 3 NFTs</td></tr>
            <tr><td>4</td><td>min: 7,000<br/>max: 19,999</td><td>Tier 4 NFTs</td></tr>
            <tr><td>5</td><td>min: 20,000<br/>max: 49,999</td><td>Tier 5 NFTs</td></tr>
            <tr><td>Premium</td><td>min: 50,000<br/>max: 100,000</td><td>Premium NFTs</td></tr>
          </tbody>
        </table>
      </div>

      <p className="reward-card__note">
        Tier is based on your <strong>cumulative</strong> spending during the pre-sale.
      </p>
    </div>
  );
}


/* ─────────────  PLACES (x,y are % of image width/height) ───────────── */
const PLACES = [
  { id: 1,  name: "Emberburn Tundra", x: 25, y: 72, info: "Built at the foot of an active volcano—the heart of obsidian trade." },
  { id: 2,  name: "Lowlands",       x: 33, y: 36, info: "Fertile plains and the bloodiest fronts of guild wars." },
  { id: 3,  name: "Impernal City",  x: 82, y: 56, info: "An iron capital beneath the shadow of the Saltoro range." },
  { id: 4,  name: "Zephyros Isles", x: 55, y: 73, info: "A chain of isles where merchant corsairs ride the wind." },
  { id: 5,  name: "Glacial Rift",   x: 72, y: 13, info: "Shattered ice chasms hiding arcane crystals." },
  { id: 6,  name: "Ruincel Camp",   x: 50, y: 48, info: "A nomad garrison raised atop long-abandoned ruins." },
  { id: 7,  name: "Carrowe Tarter", x: 67, y: 80, info: "Treasure-hunters’ hidden base beneath swamp mists." },
  { id: 8,  name: "Shardpeaks",     x: 75, y: 25, info: "A mountain chain of glacial peaks and knife-edge crags." },
  { id: 9, name: "Embertrench",    x: 10, y: 75, info: "A deep, smoking lava scar wreathed in ash flats." },
  { id: 10, name: "Zevyros Deep",   x: 38, y: 65, info: "A tempestuous cove famed for whirlpools and storm shrines." },
  { id: 11, name: "Amber Caravan Road", x: 23, y: 20, info: "An old trade route of salt and amber, dotted with roadside inns." },
  { id: 12, name: "Whispering Valley",  x: 71, y: 58, info: "A foggy gorge where the wind whistles through narrow clefts." },
];



const ROADMAP = [
  {
    year: 2026,
    q12Title: "2026 Q1–Q2",
    q34Title: "2026 Q3–Q4",
    q12: [
      {
        icon: "🩸",
        text: "Crownless-Origins PvP Arena",
        desc:
          "Unreal combat prototype goes live with timing-first duels. Phase I community forms and Ember Scribe starts."
      }
    ],
    q34: [
      {
        icon: "🜏",
        text: "Fourgebound closed alpha",
        desc:
          "Marketplace MVP and $CROWN rails launch. Early mini-game sales fund testing; balance telemetry comes online."
      }
    ]
  },
  {
    year: 2027,
    q12Title: "2027 Q1–Q2",
    q34Title: "2027 Q3–Q4",
    q12: [
      {
        icon: "🛡️",
        text: "Fourgebound full release",
        desc:
          "Complete crafting loop and clan shops open the economy. Governance trials begin with Ashwarden v0.5."
      }
    ],
    q34: [
      {
        icon: "🔥",
        text: "Reignfall launch",
        desc:
          "Region control and new biomes; mini-games sync to main."
      }
    ]
  },
  {
    year: 2028,
    q12Title: "2028 Q1–Q2",
    q34Title: "2028 Q3–Q4",
    q12: [
      {
        icon: "🌑",
        text: "The Crownless public alpha",
        desc:
          "On-chain economy with mint/burn items goes live. Ashwarden 1.0 balances world health for wider testing."
      }
    ],
    q34: [
      {
        icon: "🌀",
        text: "The Crownless beta",
        desc:
          "Land sales and housing open. Open-world sieges expand as the AI Chronicle library grows."
      }
    ]
  },
  {
    year: 2029,
    q12Title: "2029 Q1–Q2",
    q34Title: "2029 Q3–Q4",
    q12: [
      {
        icon: "⚙️",
        text: "Pre-launch preparations",
        desc:
          "Server load testing, console port prototypes and certification prep. Go-to-market: “Every Step Leaves a Story.”"
      }
    ],
    q34: [
      {
        icon: "🗡️",
        text: "The Crownless 1.0 (Q3)",
        desc:
          "SDAO economy goes live; seasons guide play."
      }
    ]
  },
  {
    year: 2030,
    q12Title: "2030 Q1–Q2",
    q34Title: "2030 Q3–Q4",
    q12: [
      {
        icon: "🕯️",
        text: "GravenKing standalone story pack",
        desc:
          "Cinematic single-shot campaign in Crownless mythos with signature bosses and bespoke mechanics. Steam/Epic cross-promo."
      }
    ],
    q34: [
      {
        icon: "♾️",
        text: "Ecosystem 2.0",
        desc:
          "Mobile companion for trading and management; full console release. Mod SDK and a community creator fund."
      }
    ]
  }
];
// Example images – import your portraits like other assets
// import cem from "./assets/team/cem.jpg"; etc.
const TEAM = [
  {
    name: "Cem Tosun",
    role: "Founder and Creative Director",
    blurb: "Game vision, core mechanics",
    photo: photoCem,
    socials: [
      { type: "twitter", url: "https://x.com/kilopi3142_" },
      { type: "linkedin", url: "https://www.linkedin.com/in/cem-tosun-45979871/" },
      { type: "youtube", url: "https://www.youtube.com/@cemtosun_/videos" },
      { type: "github", url: "https://github.com/Kilopi3142" },
    ],
  },
  {
    name: "Bilal Tekmil",
    role: "Co-Founder and Engineering Lead",
    blurb: "Game mechanics, Web3 systems",
    photo: photoBilal,
    socials: [
      { type: "twitter", url: "https://x.com/BilalTekmil25" },
      { type: "linkedin", url: "https://www.linkedin.com/in/bilaltekmil3425/" },
      { type: "youtube", url: "https://www.youtube.com/@BilalTekmil/videos" },
    ],
  },
  {
    name: "Mesut Demirtaş",
    role: "Art Director",
    blurb: "Visual style, concept art, identity",
    photo: photoMesut,
    socials: [
      { type: "twitter", url: "https://x.com/mesut_ivy" },
      { type: "youtube", url: "https://www.youtube.com/@kriptoofis" },
    ],
  },
  {
    name: "Necdet Öncegil",
    role: "Technical Lead",
    blurb: "Architecture, technical feasibility",
    photo: photoNecdet,
    socials: [
      { type: "twitter", url: "https://x.com/oncegil" },
    ],
  },
  {
    name: "Kıvılcım Hindistan",
    role: "Project Lead",
    blurb: "Timeline planning, cross-team coordination",
    photo: photoKivilcim,
    socials: [
      { type: "twitter", url: "https://x.com/kivilgym" },
    ],
  },
  {
    name: "Ömer Çulcu",
    role: "Community Lead",
    blurb: "Community growth, analytics, visibility",
    photo: photoOmer,
    socials: [
      { type: "twitter", url: "https://x.com/0xr1chie" },
    ],
  },
  {
    name: "Göktuğ Çağrıci",
    role: "Business Lead",
    blurb: "Partnerships, investor & partner relations",
    photo: photoGoktug,
    socials: [
      { type: "twitter", url: "https://x.com/Goktug1O" },
    ],
  },
];

function TeamCard({ name, role, blurb, photo, socials }) {
  return (
    <article className="team-card">
      <div className="team-card__photo">
        <img src={photo} alt={name} loading="lazy" />
      </div>

      <div className="team-card__body">
        <h3 className="team-card__name">{name}</h3>
        <div className="team-card__role">{role}</div>
        <p className="team-card__blurb">{blurb}</p>

        {socials && socials.length > 0 && (
          <div className="team-card__socials">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                className={s.type}
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fab fa-${s.type}`}></i>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}


function BackToTopButton() {
  const [show, setShow] = React.useState(false);
  const lastY = React.useRef(0);
  const rAF = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => {
      // throttle with rAF to keep it jank-free
      if (rAF.current) return;
      rAF.current = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollTop = window.pageYOffset || doc.scrollTop;
        const scrollable = doc.scrollHeight - doc.clientHeight || 1;
        const ratio = scrollTop / scrollable;

        const scrollingDown = scrollTop > lastY.current;


        const pastThreshold = ratio >= 0.5;
const aboveHideThreshold = ratio <= 0.4;
setShow(pastThreshold ? true : !aboveHideThreshold && scrollingDown);

        lastY.current = scrollTop;
        rAF.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rAF.current) cancelAnimationFrame(rAF.current);
    };
  }, []);

  const scrollTop = () => {
    // Respect reduced motion if set in OS
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  };

  return (
    <button
      className={`backtotop ${show ? "backtotop--show" : ""}`}
      aria-label="Back to top"
      onClick={scrollTop}
    >
      {/* Use Font Awesome if you like, or keep the glyph */}
      <span className="backtotop__chev">↑</span>
      <span className="backtotop__text">Top</span>
    </button>
  );
}


function MapInteractive() {
  const [active, setActive] = useState(null);

  const secRef = useRef(null);
  const startedRef = useRef(false);
  const intervalRef = useRef(null);
  const hideTimerRef = useRef(null);
  const tourIdxRef = useRef(0);

  useEffect(() => {
    const el = secRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          startAutoTour();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAutoTour = () => {
    clearInterval(intervalRef.current);
    clearTimeout(hideTimerRef.current);
    tourIdxRef.current = 0;
    showOneStep();
    intervalRef.current = setInterval(showOneStep, 2500);
  };

  const showOneStep = () => {
    const p = PLACES[tourIdxRef.current];
    setActive(p);
    clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setActive(null), 1400);
    tourIdxRef.current = (tourIdxRef.current + 1) % PLACES.length;
  };

  const stopAutoTour = () => {
    clearInterval(intervalRef.current);
    clearTimeout(hideTimerRef.current);
  };

  const onUserInteract = () => {
    stopAutoTour();
  };

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const q = sp.get("map");
    if (q) {
      const hit = PLACES.find(p => p.name.toLowerCase() === q.toLowerCase());
      if (hit) { setActive(hit); onUserInteract(); }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={secRef} className="map-row section">
      {/* LEFT: INTERACTIVE MAP */}
      <div
        className="map-wrap map-wrap--redglow"
        onMouseMove={onUserInteract}
        onClick={onUserInteract}
        onTouchStart={onUserInteract}
      >
        <img src={worldPng} alt="World map" className="map-img" />

        {PLACES.map(p => (
          <button
            key={p.id}
            className={`place-pin ${active?.id === p.id ? "is-active" : ""}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            onMouseEnter={() => { setActive(p); onUserInteract(); }}
            onMouseLeave={() => setActive(null)}
            onClick={() => { setActive(p); onUserInteract(); }}
            aria-label={`${p.name}: ${p.info}`}
          >
            <span className="pin-dot" aria-hidden>●</span>
            <span className="pin-label">{p.name}</span>
          </button>
        ))}

   
      </div>

      {/* RIGHT: REGIONS LIST + DETAILS */}
      <aside className="map-info">

        <ul className="map-info__list">
          {PLACES.map(p => (
            <li key={p.id} className={`map-info__item ${active?.id === p.id ? "is-active" : ""}`}>
              <button
                className="map-info__btn"
                onClick={() => {
                  setActive(p);
                  onUserInteract();
                }}
              >
                {p.name}
              </button>

              {/* Show info of the active one inline in the list */}
              <div className="map-info__desc">{p.info}</div>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}


export default function App() {

  return (
    <div className="site">
      {/* Decorative background layers */}
      <div className="bg-grid" />
      <div className="bg-vignette" />

      <header className="nav">
        <div className="nav__brand">
          <img src={logo} alt="The Crownless Logo" className="brand__icon" />
          <span className="brand__text">The Crownless</span>
        </div>
        <nav className="nav__links">
          <a href="https://the-crownlesss-organization.gitbook.io/the-crownless/" target="_blank" rel="noopener noreferrer">
            Docs
          </a>
          <a href="https://organized-aurora-321.notion.site/ebd/279381a1fc2c8072a27ed56376f49935?v=279381a1fc2c8058a985000cc15c42dd" target="_blank" rel="noopener noreferrer">
            Progress
          </a>
        </nav>
      </header>

{/* News Ticker */}
<div className="news-ticker">
  <div className="news-text">
    🚨 Presale Round 1 is Live, Secure Your Spot Today ! --- 🌐 Website Renewed ! --- 📊 Open Progress Shared ! --- 📣 Follow the Socials to Stay Updated !
  </div>
</div>

<section className="hero hero--row">
  {/* Col 1: video */}
  <div className="hero__left">
    <div className="hero__video-container">
      <video
        className="hero__video"
        src={trailer}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">The Crownless</h1>
        <p className="hero__subtitle">
          Dark-fantasy MMO with a player-driven economy, viral cinematic PvPs,
          and an AI-driven TV series chronicling every deed.
        </p>
      </div>
    </div>

    {/* Socials under the video */}
    <div className="hero__socials-row">
      <span className="hero__socials-label">Follow The Socials to Stay Updated</span>
      <div className="hero__socials">
        <a href="https://x.com/thecrownlessx" className="twitter" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.youtube.com/@thecrownlessX" className="youtube" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
        <a href="https://www.linkedin.com/company/the-crownless/?viewAsMember=true" className="linkedin" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/the.crownless.game" className="instagram" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://medium.com/@thecrownlessx" className="medium" target="_blank" rel="noreferrer"><i className="fab fa-medium"></i></a>
      </div>
    </div>
  </div>

  {/* Col 2: Join the Presale */}
  <div className="hero__col">
    <div className="presale-card">
      <h2 className="presale-card__title">Join the Presale</h2>
      <p className="presale-card__desc">
        Secure your spot in <em>The Crownless</em> economy. Early supporters gain access to exclusive rewards and phases.
      </p>
      <a
        className="btn btn--primary"
        href="https://thecrownless.com/token"
        target="_blank"
        rel="noreferrer"
      >
        Enter Presale
      </a>
    </div>
  </div>

  {/* Col 3: Reward Tiers */}
  <div className="hero__col">
    <RewardTiersCard />
  </div>
</section>





      {/* FEATURES */}
      <section id="features" className="section">
        <h2 className="section__title">A Realm Forged by its Players</h2>
        <div className="cards">
          <Feature
            icon={<img src={house} alt="Gather → Craft" className="ico-img" loading="lazy" />}
            title="Economy: Gather → Craft"
            text="Mine and fell resources, then forge steel and leather into gear that matters."
          />
          <Feature
            icon={<img src={combat} alt="Combat" className="ico-img" loading="lazy" />}
            title="Skill-Based Combat"
            text="Timing, stamina, positioning. Melee first: attack, block, dodge. Earn your victories."
          />
          <Feature
            icon={<img src={diamond} alt="Cinematic PvPs" className="ico-img" loading="lazy" />}
            title="Viral Cinematic PvPs"
            text="Duels and battles auto-generate shareable clips designed to spread across socials."
          />
          <Feature
            icon={<img src={flag} alt="Lore & Series" className="ico-img" loading="lazy" />}
            title="AI-Driven Lore & Series"
            text="The Ember Scribe turns major player actions into episodic cinematic highlights."
          />
        </div>

        


      </section>

 <MapInteractive/>

 {/* TOKENOMICS */}
<section id="tokenomics" className="section section--parchment tokenomics-section">
  <h2 className="section__title">Tokenomics (CRLS)</h2>

  <div className="tokenomics-wrapper">
   


    <div className="tokenomics-table">
      <table>
        <thead>
          <tr>
            <th>ALLOCATION</th>
            <th>%</th>
            <th>CRLS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className="dot red"></span> Team & Advisors</td>
            <td>3%</td>
            <td>30,000,000</td>
          </tr>
          <tr>
            <td><span className="dot gray"></span> Treasury</td>
            <td>6%</td>
            <td>60,000,000</td>
          </tr>
          <tr>
            <td><span className="dot red"></span> Community Rewards</td>
            <td>3%</td>
            <td>30,000,000</td>
          </tr>
          <tr>
            <td><span className="dot orange"></span> Ecosystem & Partnerships</td>
            <td>3%</td>
            <td>30,000,000</td>
          </tr>
          <tr>
            <td><span className="dot green"></span> Liquidity (CEX & DEX)</td>
            <td>15%</td>
            <td>150,000,000</td>
          </tr>
          <tr>
            <td><span className="dot gold"></span> Public Sale</td>
            <td>70%</td>
            <td>700,000,000</td>
          </tr>
        </tbody>
      </table>
    </div>


    <div className="tokenomics-chart">
      <img src={tokenomicsPie} alt="Tokenomics Chart" loading="lazy" />
    </div>


  
    <div className="vesting-table">
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Vesting Terms</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Team & Advisors</td>
            <td>1-year cliff, followed by <strong>48 months</strong> linear vesting</td>
          </tr>
          <tr>
            <td>Community Rewards</td>
            <td>9-months cliff, followed by <strong>36 months</strong> linear vesting</td>
          </tr>
          <tr>
            <td>Ecosystem & Partnerships</td>
            <td>1-year cliff, followed by <strong>36 months</strong> linear vesting</td>
          </tr>
          <tr>
            <td>Treasury Reserve</td>
            <td>1-year cliff, followed by <strong>48 months</strong> linear vesting</td>
          </tr>
          <tr>
            <td>Public Sale</td>
            <td>
              3–6-months cliff, followed by <strong>24–36 months</strong> linear vesting
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>


{/* TEAM */}
<section id="team" className="section team-section">
  <h2 className="section__title">Our Team</h2>

  <div className="team-grid">
    {TEAM.map((m) => (
      <TeamCard key={m.name} {...m} />
    ))}
  </div>
</section>


 <section id="roadmap" className="section roadmap">
  {/* Decorative sign (optional) */}
  <aside className="roadmap__sign">
  <div className="roadmap-sign">
    <img src={roadmapSign} alt="Roadmap sign" loading="lazy" />

    {/* Year plaques (auto-scale with the image) */}
    <div className="roadmap-plaque y2026">2026</div>
    <div className="roadmap-plaque y2027">2027</div>
    <div className="roadmap-plaque y2028">2028</div>
    <div className="roadmap-plaque y2029">2029</div>
    <div className="roadmap-plaque y2030">2030</div>
  </div>
</aside>


  {/* Flat grid of quarters only */}
  <div className="roadmap__grid">
    {ROADMAP.map(({ q12Title, q12, q34Title, q34 }, idx) => (
      <React.Fragment key={idx}>
        <div className="roadmap__quarter">
          <header className="roadmap__qtitle">{q12Title}</header>
          <ul className="roadmap__items">
            {q12.map((it, i) => (
              <li key={`q12-${idx}-${i}`} className="roadmap__item">
                <span className="roadmap__icon">{it.icon}</span>
                <div className="roadmap__text">
                  <div className="roadmap__text-title">{it.text}</div>
                  <div className="roadmap__text-desc">{it.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="roadmap__quarter">
          <header className="roadmap__qtitle">{q34Title}</header>
          <ul className="roadmap__items">
            {q34.map((it, i) => (
              <li key={`q34-${idx}-${i}`} className="roadmap__item">
                <span className="roadmap__icon">{it.icon}</span>
                <div className="roadmap__text">
                  <div className="roadmap__text-title">{it.text}</div>
                  <div className="roadmap__text-desc">{it.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    ))}
  </div>
</section>


      {/* ---- Footer CTA band ---- */}
<section className="footer-cta">
  <h2 className="footer-cta__title">
    Forge your legend in <em>The Crownless</em>
  </h2>
</section>

{/* ---- New Footer ---- */}
<footer className="site-footer">
  <div className="footer-inner">
    {/* Brand + blurb */}
    <div className="footer-brand">
      <img src={logo} alt="The Crownless" className="footer-brand__logo" />
      <p className="footer-brand__blurb">
        <strong>The Crownless</strong> is a dark-fantasy MMO where kingdoms rise
        and fall at the edge of a blade.
      </p>
    </div>

    {/* Nav */}
    <nav className="footer-col">
      <h4 className="footer-col__title">Navigate</h4>
      <ul className="footer-list">
        <li><a href="https://thecrownless.com/token" target="_blank" rel="noreferrer">Docs ↗</a></li>
        <li><a href="https://the-crownlesss-organization.gitbook.io/the-crownless/" target="_blank" rel="noreferrer">Progress ↗</a></li>
      </ul>
    </nav>

    {/* Community */}
    <div className="footer-col">
      <h4 className="footer-col__title">Community</h4>
      <ul className="footer-list footer-socials">
        <li><a href="https://x.com/thecrownlessx" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /> X</a></li>
        <li><a href="https://www.youtube.com/@thecrownlessX" target="_blank" rel="noreferrer"><i className="fab fa-youtube" /> YouTube</a></li>
        <li><a href="https://www.linkedin.com/company/the-crownless/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" /> LinkedIn</a></li>
        <li><a href="https://www.instagram.com/the.crownless.game" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /> Instagram</a></li>
        <li><a href="https://medium.com/@thecrownlessx" target="_blank" rel="noreferrer"><i className="fab fa-medium" /> Medium</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div className="footer-col">
      <h4 className="footer-col__title">Contact</h4>
      <ul className="footer-list">
        <li>
          <a href="mailto:info@thecrownless.com">
            <i className="far fa-envelope" /> info@thecrownless.com
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div className="footer-bottom">
    © {new Date().getFullYear()} The Crownless — All rights reserved.
  </div>
</footer>
<BackToTopButton />
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <article className="card">
      <div className="card__icon">{icon}</div>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
    </article>
  );
}



