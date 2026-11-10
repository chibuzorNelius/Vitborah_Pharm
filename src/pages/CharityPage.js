import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';

export function renderCharityPage() {
  updateSEO({
    title: 'Vidwa Charity Foundation | Giving Hope to the Hopeless | Nigeria',
    description: 'Official humanitarian website of the Vidwa Charity Foundation. Transforming lives through free community healthcare centers, widow housing, educational scholarships, and orphanage care across Nigeria.',
    canonicalPath: '/charity/',
    image: '/company_image/charity.jpeg'
  });

  return `
    <div class="charity-page-wrapper" id="charity-page">

      <!-- ==================================================================
           HERO SECTION
           ================================================================== -->
      <section class="vcf-hero" id="vcf-hero">
        <div class="vcf-hero-bg">
          <img 
            src="/company_image/charity.jpeg" 
            alt="Vidwa Charity Foundation Community Healthcare and Compassion" 
            class="vcf-hero-bg-img"
          />
        </div>
        <div class="vcf-hero-overlay"></div>
        <div class="vcf-hero-content">
          <!-- Breadcrumb navigation -->
          <nav class="vcf-breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span class="sep" style="opacity: 0.6;">/</span>
            <span class="current" style="color: #ffffff; font-weight: 600;">Vidwa Charity Foundation</span>
          </nav>

          <div class="vcf-hero-badge">
            ${icon('heartPulse', 'w-3.5 h-3.5')} Compassion in Action &bull; Grassroots Welfare
          </div>

          <h1 class="vcf-hero-title">
            Giving Hope to the Hopeless, Restoring Dignity to Vulnerable Communities
          </h1>

          <p class="vcf-hero-desc">
            The Vidwa Charity Foundation is a dedicated humanitarian initiative transforming lives across Nigeria through grassroots clinical healthcare, modern community health infrastructure, permanent shelter for destitute widows, academic scholarships, and continuous nutritional support for orphanage homes.
          </p>

          <div class="vcf-hero-actions">
            <a href="#" class="vcf-btn-primary">
              ${icon('heartPulse', 'w-5 h-5')} Donate to Vidwa Foundation
            </a>
            <a href="#foundation-projects" class="vcf-btn-secondary">
              Explore Our Projects ${icon('arrowRight', 'w-4 h-4')}
            </a>
            <a href="#" class="vcf-btn-secondary" style="border-color: rgba(255,255,255,0.3);">
              Explore Our Charity Foundation Website ${icon('externalLink', 'w-4 h-4')}
            </a>
          </div>

          <!-- Quick Impact Metric Counters -->
          <div class="vcf-stats-grid">
            <div class="vcf-stat-card">
              <div class="vcf-stat-num">4,200+</div>
              <div class="vcf-stat-label">Free Consultations &amp; Treatments Administered</div>
            </div>
            <div class="vcf-stat-card">
              <div class="vcf-stat-num">1 Health Center</div>
              <div class="vcf-stat-label">Modern Medical Center Under Construction (Imo State)</div>
            </div>
            <div class="vcf-stat-card">
              <div class="vcf-stat-num">100% Free</div>
              <div class="vcf-stat-label">Zero-Cost Prescription Medications Dispensed</div>
            </div>
            <div class="vcf-stat-card">
              <div class="vcf-stat-num">Dozens Supported</div>
              <div class="vcf-stat-label">Widows Sheltered, Students Sponsored &amp; Orphanages Fed</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           4. ABOUT THE FOUNDATION
           ================================================================== -->
      <section class="vcf-section vcf-section-alt" id="about-vidwa">
        <div class="vcf-about-grid">
          <div>
            <span class="vcf-tag">Who We Are &amp; Why We Serve</span>
            <h2 class="vcf-title">
              Bridging the Divide Between Medical Care &amp; Grassroots Compassion
            </h2>
            <p class="vcf-desc" style="margin-bottom: 1.25rem;">
              The <strong>Vidwa Charity Foundation</strong> is founded on one timeless principle: <em>Poverty ends when love begins. They need your help, give them hope.</em> While modern pharmaceuticals cure diseases, genuine healing requires social dignity, shelter, proper nutrition, and education for the next generation.
            </p>
            <p style="font-size: 0.95rem; color: #475569; line-height: 1.65; margin-bottom: 1.5rem;">
              Operating across underserved rural communities in Imo State and urban centers in Lagos, our foundation mobilizes doctors, pharmacists, educators, and volunteers to provide free direct relief. We identify the most helpless in society&mdash;abandoned widows, orphans, sick rural dwellers, and children locked out of school&mdash;and execute permanent, verifiable interventions.
            </p>

            <!-- 4 Foundational Pillars -->
            <div class="vcf-pillars-grid">
              <div class="vcf-pillar-item">
                <div class="vcf-pillar-title">
                  <span style="color: #15803d;">${icon('building', 'w-4 h-4')}</span> Home &amp; Shelter
                </div>
                <p class="vcf-pillar-desc">
                  Building durable, cemented residential homes for destitute widows and families facing homelessness.
                </p>
              </div>
              <div class="vcf-pillar-item">
                <div class="vcf-pillar-title">
                  <span style="color: #15803d;">${icon('award', 'w-4 h-4')}</span> Education &amp; Learning
                </div>
                <p class="vcf-pillar-desc">
                  Funding full standard tuition scholarships, textbooks, uniforms, and learning kits for underprivileged children.
                </p>
              </div>
              <div class="vcf-pillar-item">
                <div class="vcf-pillar-title">
                  <span style="color: #15803d;">${icon('heartPulse', 'w-4 h-4')}</span> Healthcare &amp; Medicine
                </div>
                <p class="vcf-pillar-desc">
                  Constructing free rural clinics, running mobile health camps, and dispensing vital medications free of charge.
                </p>
              </div>
              <div class="vcf-pillar-item">
                <div class="vcf-pillar-title">
                  <span style="color: #15803d;">${icon('shieldCheck', 'w-4 h-4')}</span> Food &amp; Orphan Welfare
                </div>
                <p class="vcf-pillar-desc">
                  Delivering bulk nutritional relief packages and hygiene items to motherless babies and orphanage homes.
                </p>
              </div>
            </div>

            <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="#" class="vcf-btn-primary" style="font-size: 0.9rem; padding: 0.7rem 1.4rem;">
                Support Our Mission &rarr;
              </a>
              <a href="#foundation-projects" class="vcf-support-btn" style="background: #f1f5f9; color: #0f172a !important; border: 1px solid #cbd5e1;">
                View All Projects
              </a>
            </div>
          </div>

          <!-- Team & Youth Mentorship Photograph -->
          <div class="vcf-img-frame">
            <img 
              src="/company_image/foundationGroup.jpeg" 
              alt="Vidwa Charity Foundation Volunteers and Leadership at The Bridge Learning Centre"
              loading="lazy"
            />
            <div class="vcf-img-caption">
              <strong>Vidwa Charity Volunteers in Action:</strong> Leadership and youth ambassadors at The Bridge Learning Centre wearing official foundation apparel, championing education and community uplift.
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           5. KEY PROJECTS SECTION (Identified from uploaded images)
           ================================================================== -->
      <section class="vcf-section" id="foundation-projects">
        <div class="vcf-section-header">
          <span class="vcf-tag">Direct Humanitarian Investments</span>
          <h2 class="vcf-title">Featured Projects in the Community</h2>
          <p class="vcf-desc">
            Every project represents an urgent human need answered with permanent, verifiable action. Here are major capital and social projects funded and executed by the Vidwa Charity Foundation.
          </p>
        </div>

        <div class="vcf-projects-grid">

          <!-- Project 1: Free Health Center in Imo State -->
          <article class="vcf-card">
            <div class="vcf-card-img-wrap">
              <img 
                src="/company_image/healthcenter-imo.jpeg" 
                alt="Ezinne Sylvia Agada Memorial Community Health Centre in Imo State" 
                loading="lazy"
              />
              <span class="vcf-card-badge">Ongoing Construction &bull; Healthcare Infrastructure</span>
            </div>
            <div class="vcf-card-body">
              <div class="vcf-card-meta">
                ${icon('mapPin', 'w-3.5 h-3.5')} Imo State, South East Nigeria
              </div>
              <h3 class="vcf-card-title">
                Building a Free Community Health Center in Imo State
              </h3>
              <p class="vcf-card-desc">
                Named the <strong>Ezinne Sylvia Agada Memorial Community Health Centre</strong>, this flagship infrastructure project is bringing modern, free medical care to rural communities. Designed with consultation rooms, maternal delivery facilities, observation wards, and a fully stocked pharmaceutical dispensary, it will provide 24/7 care at zero cost to villagers who previously walked miles for medical assistance.
              </p>
              <div class="vcf-card-footer">
                <span style="font-size: 0.8rem; color: #16a34a; font-weight: 600;">
                  ${icon('checkCircle', 'w-3.5 h-3.5')} Fully Paved &bull; Roofing Completed
                </span>
                <a href="#" class="vcf-support-btn">
                  Support This Project ${icon('arrowRight', 'w-3 h-3')}
                </a>
              </div>
            </div>
          </article>

          <!-- Project 2: Built a House for a Hopeless Widow -->
          <article class="vcf-card">
            <div class="vcf-card-img-wrap">
              <img 
                src="/company_image/widow-house.jpeg" 
                alt="Brand New Modern House Built for a Destitute Widow by Vidwa Foundation" 
                loading="lazy"
              />
              <span class="vcf-card-badge" style="background: rgba(180, 83, 9, 0.9);">Completed Project &bull; Home &amp; Shelter</span>
            </div>
            <div class="vcf-card-body">
              <div class="vcf-card-meta">
                ${icon('mapPin', 'w-3.5 h-3.5')} Rural Community, Imo State
              </div>
              <h3 class="vcf-card-title">
                Shelter of Dignity: Building a House for a Destitute Widow
              </h3>
              <p class="vcf-card-desc">
                After discovering a destitute widow living in perilous conditions under a collapsing mud shelter with leaking thatch and no doors, the Vidwa Charity Foundation mobilized emergency intervention. We fully financed and constructed a brand-new, durable cemented bungalow complete with aluminium roofing, secure metal doors, and modern sliding windows, restoring safety, self-worth, and peace of mind.
              </p>
              <div class="vcf-card-footer">
                <span style="font-size: 0.8rem; color: #0284c7; font-weight: 600;">
                  ${icon('checkCircle', 'w-3.5 h-3.5')} Key Handover Complete
                </span>
                <a href="#" class="vcf-support-btn">
                  Support Widow Housing ${icon('arrowRight', 'w-3 h-3')}
                </a>
              </div>
            </div>
          </article>

          <!-- Project 3: Scholarships for Deserving Students -->
          <article class="vcf-card">
            <div class="vcf-card-img-wrap">
              <img 
                src="/company_image/scholarships.jpeg" 
                alt="Vidwa Charity Foundation Academic Scholarship Beneficiaries in Standard School Uniforms" 
                loading="lazy"
              />
              <span class="vcf-card-badge" style="background: rgba(2, 132, 199, 0.9);">Education Initiative &bull; Youth Empowerment</span>
            </div>
            <div class="vcf-card-body">
              <div class="vcf-card-meta">
                ${icon('mapPin', 'w-3.5 h-3.5')} Standard Schools, Nigeria
              </div>
              <h3 class="vcf-card-title">
                Standard School Scholarships for Deserving Underprivileged Children
              </h3>
              <p class="vcf-card-desc">
                Every child has the right to quality education. Through our scholarship fund, promising children from impoverished backgrounds who were at risk of dropping out are enrolled in reputable, standard schools. The foundation pays 100% of their tuition, provides custom uniforms, school bags, and learning books, and supports them continuously to ensure academic success.
              </p>
              <div class="vcf-card-footer">
                <span style="font-size: 0.8rem; color: #16a34a; font-weight: 600;">
                  ${icon('award', 'w-3.5 h-3.5')} Multi-Year Scholarship Grants
                </span>
                <a href="#" class="vcf-support-btn">
                  Sponsor a Student ${icon('arrowRight', 'w-3 h-3')}
                </a>
              </div>
            </div>
          </article>

          <!-- Project 4: Orphanage Home Care & Relief -->
          <article class="vcf-card">
            <div class="vcf-card-img-wrap">
              <img 
                src="/company_image/orphanage-care.jpeg" 
                alt="Vidwa Foundation Orphanage Visits with Food and Care Packages" 
                loading="lazy"
              />
              <span class="vcf-card-badge" style="background: rgba(225, 29, 72, 0.9);">Child Welfare &bull; Relief Distribution</span>
            </div>
            <div class="vcf-card-body">
              <div class="vcf-card-meta">
                ${icon('mapPin', 'w-3.5 h-3.5')} Motherless Babies &amp; Orphanage Centers
              </div>
              <h3 class="vcf-card-title">
                Care &amp; Nutritional Provisions for Orphanage Homes
              </h3>
              <p class="vcf-card-desc">
                Orphanage homes carry the noble duty of raising vulnerable children. Our volunteer outreach teams conduct regular relief visits delivering bulk provisions, including cartons of noodles, cereals, infant milk, cooking essentials, toiletries, and sanitary packs. Beyond material support, our volunteers spend time listening, playing, and reassuring every child that they are loved.
              </p>
              <div class="vcf-card-footer">
                <span style="font-size: 0.8rem; color: #e11d48; font-weight: 600;">
                  ${icon('heartPulse', 'w-3.5 h-3.5')} Direct Welfare Relief
                </span>
                <a href="#" class="vcf-support-btn">
                  Support Orphanage Care ${icon('arrowRight', 'w-3 h-3')}
                </a>
              </div>
            </div>
          </article>

        </div>
      </section>

      <!-- ==================================================================
           6. RECURRING PROGRAMS SECTION
           ================================================================== -->
      <section class="vcf-section vcf-section-alt" id="recurring-programs">
        <div class="vcf-section-header">
          <span class="vcf-tag">Continuous Community Presence</span>
          <h2 class="vcf-title">Recurring Humanitarian Programs</h2>
          <p class="vcf-desc">
            Activities the Vidwa Charity Foundation carries out repeatedly on a scheduled quarterly and bi-monthly basis to provide uninterrupted healthcare and social safety nets.
          </p>
        </div>

        <div class="vcf-programs-grid">

          <!-- Recurring 1: Free Medical Care in Imo State -->
          <div class="vcf-card">
            <div class="vcf-card-img-wrap">
              <img 
                src="/company_image/medical-care-imo.jpeg" 
                alt="Vidwa Foundation Running Free Medical Care Camps in Imo State" 
                loading="lazy"
              />
              <span class="vcf-card-badge">Quarterly Medical Mission</span>
            </div>
            <div class="vcf-card-body">
              <div class="vcf-card-meta">
                ${icon('calendar', 'w-3.5 h-3.5')} Quarterly Regional Mission &bull; Imo State
              </div>
              <h3 class="vcf-card-title">
                Rural Free Medical Care &amp; Clinical Checkups (Imo State)
              </h3>
              <p class="vcf-card-desc">
                Regular clinical camps conducted directly in rural village halls. Volunteer medical officers and nurses perform comprehensive health evaluations, blood pressure diagnostics, blood glucose tests, malaria screenings, and dispense prescription treatments for chronic and acute illnesses at no cost to beneficiaries.
              </p>
              <div class="vcf-card-footer">
                <a href="#" class="vcf-support-btn" style="width: 100%; justify-content: center;">
                  Support Medical Missions &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- Recurring 2: Medical Care in Lagos -->
          <div class="vcf-card">
            <div class="vcf-card-img-wrap">
              <img 
                src="/company_image/medical-care-lagos.jpeg" 
                alt="Vidwa Foundation Pharmacists and Volunteers Dispensing Free Medicines in Lagos" 
                loading="lazy"
              />
              <span class="vcf-card-badge">Bi-Monthly Healthcare Drive</span>
            </div>
            <div class="vcf-card-body">
              <div class="vcf-card-meta">
                ${icon('calendar', 'w-3.5 h-3.5')} Bi-Monthly Urban Drive &bull; Lagos State
              </div>
              <h3 class="vcf-card-title">
                Urban Free Medication Dispensing &amp; Outreach (Lagos)
              </h3>
              <p class="vcf-card-desc">
                Addressing undetected health crises in bustling peri-urban markets and densely populated communities in Lagos. Licensed pharmacists set up on-site consultation tables to review patient symptoms, conduct hypertension checks, and dispense certified antibiotics, antimalarials, and children's vitamins directly.
              </p>
              <div class="vcf-card-footer">
                <a href="#" class="vcf-support-btn" style="width: 100%; justify-content: center;">
                  Support Lagos Outreach &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- Recurring 3: Youth Mentorship at The Bridge -->
          <div class="vcf-card">
            <div class="vcf-card-img-wrap">
              <img 
                src="/company_image/foundationGroup.jpeg" 
                alt="Vidwa Charity Foundation Mentoring Young Students" 
                loading="lazy"
              />
              <span class="vcf-card-badge">Continuous Youth Development</span>
            </div>
            <div class="vcf-card-body">
              <div class="vcf-card-meta">
                ${icon('award', 'w-3.5 h-3.5')} Ongoing Educational Partnership &bull; The Bridge
              </div>
              <h3 class="vcf-card-title">
                Youth Mentorship &amp; Community Learning Centers
              </h3>
              <p class="vcf-card-desc">
                Partnering with community hubs like The Bridge Learning Centre to engage adolescents in leadership training, ethical character development, hygiene education, and vocational coaching, giving young Nigerians the confidence and tools to break cycles of poverty.
              </p>
              <div class="vcf-card-footer">
                <a href="#" class="vcf-support-btn" style="width: 100%; justify-content: center;">
                  Support Youth Mentorship &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ==================================================================
           7. ARTICLES & FIELD STORIES SECTION
           ================================================================== -->
      <section class="vcf-section" id="foundation-stories">
        <div class="vcf-section-header">
          <span class="vcf-tag">Dispatches from the Field</span>
          <h2 class="vcf-title">Stories of Transformation &amp; Hope</h2>
          <p class="vcf-desc">
            Read documented accounts and heartfelt stories showing how donor generosity and volunteer dedication directly transform Nigerian lives.
          </p>
        </div>

        <div class="vcf-stories-grid">

          <!-- Story 1: Widow Housing -->
          <article class="vcf-story-card">
            <div class="vcf-story-img-wrap">
              <img 
                src="/company_image/widow-house.jpeg" 
                alt="New house built for widow" 
                loading="lazy"
              />
            </div>
            <div class="vcf-story-body">
              <div class="vcf-story-header">
                <span class="vcf-story-tag">Widow Empowerment &bull; Shelter</span>
                <span>4 min read</span>
              </div>
              <h3 class="vcf-story-title">
                From Despair to Dignity: How a New Home Restored Peace to a Destitute Widow
              </h3>
              <p class="vcf-story-excerpt">
                In rural Eastern Nigeria, losing a husband often means losing societal protection and financial viability. For Mama Beatrice, the rainy season meant sleepless nights protecting her grandchildren from a collapsing roof. When Vidwa Charity volunteers visited, immediate construction was ordered. Today, a permanent, secure modern bungalow stands in place of despair.
              </p>
              <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 0.8rem; color: #64748b;">Published &bull; Field Documentation</span>
                <a href="#" class="vcf-support-btn" style="padding: 0.45rem 1rem; font-size: 0.8rem;">
                  Read Full Story &rarr;
                </a>
              </div>
            </div>
          </article>

          <!-- Story 2: Imo Health Center -->
          <article class="vcf-story-card">
            <div class="vcf-story-img-wrap">
              <img 
                src="/company_image/healthcenter-imo.jpeg" 
                alt="Ezinne Sylvia Agada Memorial Community Health Centre construction" 
                loading="lazy"
              />
            </div>
            <div class="vcf-story-body">
              <div class="vcf-story-header">
                <span class="vcf-story-tag">Healthcare Infrastructure</span>
                <span>5 min read</span>
              </div>
              <h3 class="vcf-story-title">
                Breaking the Healthcare Barrier: Why We Are Constructing a Free Health Center
              </h3>
              <p class="vcf-story-excerpt">
                Preventable complications during childbirth and late-stage malaria diagnosis remain tragic realities when villages have zero medical clinics nearby. Discover the vision behind the Ezinne Sylvia Agada Memorial Community Health Centre in Imo State, and how this purpose-built facility will deliver 24/7 free care to thousands of rural residents.
              </p>
              <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 0.8rem; color: #64748b;">Published &bull; Capital Milestone</span>
                <a href="#" class="vcf-support-btn" style="padding: 0.45rem 1rem; font-size: 0.8rem;">
                  Read Full Story &rarr;
                </a>
              </div>
            </div>
          </article>

          <!-- Story 3: Scholarships -->
          <article class="vcf-story-card">
            <div class="vcf-story-img-wrap">
              <img 
                src="/company_image/scholarships.jpeg" 
                alt="Vidwa Charity Foundation scholarship recipients" 
                loading="lazy"
              />
            </div>
            <div class="vcf-story-body">
              <div class="vcf-story-header">
                <span class="vcf-story-tag">Education &bull; Child Rights</span>
                <span>3 min read</span>
              </div>
              <h3 class="vcf-story-title">
                Standard Education for Every Child: Meet Our Academic Scholarship Beneficiaries
              </h3>
              <p class="vcf-story-excerpt">
                Standing proudly in their crisp school uniforms beside the foundation banner, five young learners represent dozens of bright children whose education has been rescued. Without scholarships, poverty would have cut their academic journey short. Hear from the pupils and their teachers on what standard education means to their dreams.
              </p>
              <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 0.8rem; color: #64748b;">Published &bull; Education Fund</span>
                <a href="#" class="vcf-support-btn" style="padding: 0.45rem 1rem; font-size: 0.8rem;">
                  Read Full Story &rarr;
                </a>
              </div>
            </div>
          </article>

          <!-- Story 4: Orphanage Care -->
          <article class="vcf-story-card">
            <div class="vcf-story-img-wrap">
              <img 
                src="/company_image/orphanage-care.jpeg" 
                alt="Orphanage visit care relief" 
                loading="lazy"
              />
            </div>
            <div class="vcf-story-body">
              <div class="vcf-story-header">
                <span class="vcf-story-tag">Community Welfare &bull; Orphan Care</span>
                <span>3 min read</span>
              </div>
              <h3 class="vcf-story-title">
                Hands of Compassion: Bringing Joy, Nutrition, and Provisions to Orphanage Homes
              </h3>
              <p class="vcf-story-excerpt">
                When inflation and economic hardship strike, orphanage homes face steep costs feeding and caring for children. In our latest relief drive, the Vidwa Charity Foundation convoy delivered critical food staples, medical supplies, and sanitation packages, creating smiles and easing the heavy burden on home administrators.
              </p>
              <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 0.8rem; color: #64748b;">Published &bull; Outreach Report</span>
                <a href="#" class="vcf-support-btn" style="padding: 0.45rem 1rem; font-size: 0.8rem;">
                  Read Full Story &rarr;
                </a>
              </div>
            </div>
          </article>

        </div>
      </section>

      <!-- ==================================================================
           8. CALL TO ACTION: DONATE & SUPPORT
           ================================================================== -->
      <section class="vcf-section" id="support-cta">
        <div class="vcf-cta-box">
          <span style="display: inline-block; background: rgba(255,255,255,0.18); color: #a7f3d0; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; padding: 0.35rem 0.9rem; border-radius: 9999px; margin-bottom: 1.25rem;">
            Make an Eternal Difference
          </span>
          <h2 class="vcf-cta-title">
            Together, We Can Alleviate Poverty and Save Lives
          </h2>
          <p class="vcf-cta-desc">
            Your generous contributions directly purchase vital medications, finance community clinic construction, pay standard school tuition fees, build durable homes for widows, and feed motherless children. Every gift makes a transparent, documented impact.
          </p>

          <div class="vcf-cta-buttons">
            <a href="#" class="vcf-btn-primary" style="font-size: 1.05rem; padding: 0.85rem 2rem;">
              ${icon('heartPulse', 'w-5 h-5')} Donate to Vidwa Foundation
            </a>
            <a href="#" class="vcf-btn-secondary" style="font-size: 1rem; padding: 0.85rem 1.6rem;">
              ${icon('shieldCheck', 'w-5 h-5')} Volunteer With Us
            </a>
            <a href="#" class="vcf-btn-secondary" style="font-size: 1rem; padding: 0.85rem 1.6rem;">
              Visit Official Charity Website ${icon('externalLink', 'w-4 h-4')}
            </a>
          </div>
        </div>
      </section>

      </div>
  `;
}

export function initCharityPage() {
  // Smooth scroll for hash anchor jumps
  document.querySelectorAll('#charity-page a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href.length > 1 && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}
