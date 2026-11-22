import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "geo-u6-lesson-6-3",
  code: "6-3",
  title: "Medical Tourism, Pandemics and Health Geographies",
  goal: "I CAN explain medical tourism, analyse pandemic responses and discuss emerging health geographies.",
  standards: ["Paper 1", "Paper 2", "Health"],
  vocabulary: [
    { term: "Medical tourism", definition: "Travelling abroad for medical treatment — cheaper or better quality care than at home." },
    { term: "Health geography", definition: "The study of how health and disease vary across space and how place affects health." },
    { term: "Pandemic", definition: "A disease epidemic spreading across multiple countries — e.g. COVID-19, Spanish flu." },
    { term: "Vector-borne disease", definition: "Disease transmitted by organisms like mosquitoes — malaria, dengue, Zika." },
    { term: "One Health", definition: "Approach recognising human, animal and environmental health are interconnected." },
    { term: "Health surveillance", definition: "Systematic monitoring of disease patterns to detect and respond to outbreaks." },
  ],
  concepts: [
    {
      id: "geo-u6-medical-tourism",
      title: "Medical tourism",
      skill: "Explain the geography of medical tourism, its drivers and its implications for health systems.",
      lesson: {
        sections: [
          {
            heading: "What is medical tourism?",
            body: "Medical tourism involves travelling to another country for treatment: surgery, dental work, fertility treatment, cosmetic procedures. Destinations include India, Thailand, Turkey, Mexico and Costa Rica. Patients seek cheaper costs, shorter waits, better quality or unavailable procedures — often combining treatment with tourism.",
          },
          {
            heading: "Drivers and geography",
            body: "Drivers: **cost** (surgery can cost 50-80% less abroad), **wait times** (public systems have queues), **quality** (accredited private hospitals), **availability** (procedures not offered at home). Source countries are usually HICs (USA, UK, Europe); destinations are middle-income countries with skilled doctors and lower costs.",
          },
          {
            heading: "Implications",
            body: "Medical tourism brings revenue and builds hospital capacity in destinations, but can cause **brain drain** (doctors serving tourists rather than locals), **two-tier systems** (elite care for foreigners, neglected locals) and **infection risks** (resistant bacteria). Ethical concerns include organ transplantation tourism and exploitation.",
          },
        ],
        keyFormulas: [
          { name: "Medical tourism", statement: "Travel abroad for cheaper/faster/better medical treatment" },
          { name: "Main drivers", statement: "Cost, wait times, quality, availability" },
          { name: "Brain drain", statement: "Doctors serving medical tourists rather than local patients" },
        ],
        workedExample: {
          problem: "Explain the 'two-tier' health system risk of medical tourism.",
          solution: "When hospitals prioritise foreign patients who pay more, local patients may receive worse care or face longer waits. Resources flow to profitable services for tourists rather than essential care for citizens — creating a two-tier system where medical tourism benefits the elite while public health suffers.",
        },
      },
      questions: [
        {
          id: "geo-u6-mtq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Medical tourism is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Medical research conducted abroad" },
              { id: "b", text: "Travelling abroad for medical treatment" },
              { id: "c", text: "Using tourism revenue for healthcare" },
              { id: "d", text: "Tourism focused on visiting hospitals" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Medical tourism", statement: "Travelling to another country for medical treatment — surgery, dental, fertility." },
            ],
            steps: [
              { reasoning: "Medical tourism = cross-border travel for healthcare.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Travel abroad for treatment",
            commonErrors: ["Confusing medical tourism with health tourism (wellness retreats)."],
          },
        },
        {
          id: "geo-u6-mtq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two drivers of medical tourism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Medical tourism drivers", statement: "Cost, wait times, quality, availability of procedures." },
            ],
            steps: [
              { reasoning: "Cost: procedures can be 50-80% cheaper in destination countries.", marks: 1, markCode: "M" },
              { reasoning: "Wait times: private care abroad avoids public system queues.", marks: 1, markCode: "M" },
              { reasoning: "Quality/availability: accredited hospitals, procedures unavailable at home.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cost, wait times, quality, procedure availability.",
            commonErrors: ["Listing destinations rather than drivers."],
          },
        },
        {
          id: "geo-u6-mtq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the 'two-tier' health system risk of medical tourism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Two-tier risk", statement: "Prioritising profitable foreign patients can divert resources from essential local care." },
            ],
            steps: [
              { reasoning: "Hospitals earn more from foreign patients, prioritising their needs.", marks: 1, markCode: "M" },
              { reasoning: "Resources flow to profitable services (cosmetic, elective surgery) for tourists.", marks: 1, markCode: "M" },
              { reasoning: "Local patients face worse care, longer waits or neglected essential services.", marks: 1, markCode: "R" },
              { reasoning: "Creates inequality between foreign and local healthcare access.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Foreign patient prioritisation can divert resources from local care — creating two tiers.",
            commonErrors: ["Only listing benefits of medical tourism — acknowledge risks."],
          },
        },
        {
          id: "geo-u6-mtq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the impact of medical tourism on a named destination country.",
          parts: [
            { label: "a", prompt: "Identify the named destination and its medical tourism sector.", marks: 2 },
            { label: "b", prompt: "Explain two economic and one social impact.", marks: 3 },
            { label: "c", prompt: "Evaluate whether medical tourism benefits the destination.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Medical tourism impacts", statement: "Brings revenue and capacity but risks brain drain, two-tier systems and infection — net benefit depends on regulation." },
            ],
            steps: [
              { part: "a", reasoning: "Named destination (India, Thailand, Turkey) identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific medical tourism sector described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Economic benefit: revenue, hospital investment, employment.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Economic risk: brain drain or resource diversion.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Social impact: improved facilities vs two-tier access.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Benefit: revenue, capacity building, technology transfer.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Risk: brain drain, inequality, infection, exploitation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement with regulation considerations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named destination. (b) Economic + social impacts. (c) Net benefit evaluated.",
            commonErrors: ["One-sided analysis — must weigh benefits and risks."],
          },
        },
        {
          id: "geo-u6-mtq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Medical tourism involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Travelling to another country for medical treatment" },
              { id: "b", text: "Studying medicine overseas" },
              { id: "c", text: "Visiting spas for relaxation only" },
              { id: "d", text: "Working as a doctor abroad" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Medical tourism", statement: "Travelling abroad for treatment — surgery, dental, fertility, cosmetic — often cheaper or faster." },
            ],
            steps: [
              { reasoning: "Medical tourism = cross-border travel for treatment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Travel abroad for treatment",
            commonErrors: ["Confusing medical tourism with health worker migration."],
          },
        },
        {
          id: "geo-u6-mtq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The main driver of medical tourism is most often:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mandatory travel requirements" },
              { id: "b", text: "Lower costs, shorter waits or unavailable procedures at home" },
              { id: "c", text: "Higher costs abroad" },
              { id: "d", text: "Better weather only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Medical tourism drivers", statement: "Cost savings (50–80%), shorter waits, quality and availability of procedures." },
            ],
            steps: [
              { reasoning: "Cost and wait-time advantages drive most medical tourism.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cost, waits, quality, availability",
            commonErrors: ["Attributing it to leisure travel rather than treatment access."],
          },
        },
        {
          id: "geo-u6-mtq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Typical source countries for medical tourists are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only landlocked nations" },
              { id: "b", text: "Low-income countries" },
              { id: "c", text: "Only countries with weak currencies" },
              { id: "d", text: "High-income countries like the USA, UK and Europe" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Medical tourism geography", statement: "Sources = HICs (USA, UK, Europe); destinations = middle-income countries with skilled doctors and lower costs." },
            ],
            steps: [
              { reasoning: "Patients come from wealthy countries seeking cheaper care.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** HICs (USA, UK, Europe)",
            commonErrors: ["Reversing source and destination countries."],
          },
        },
        {
          id: "geo-u6-mtq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Popular medical tourism destinations include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "USA and Canada" },
              { id: "b", text: "Only African nations" },
              { id: "c", text: "Only European capitals" },
              { id: "d", text: "India, Thailand, Turkey and Mexico" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Destinations", statement: "India, Thailand, Turkey, Mexico and Costa Rica are leading medical tourism destinations." },
            ],
            steps: [
              { reasoning: "Middle-income countries with skilled doctors and low costs dominate.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** India, Thailand, Turkey, Mexico",
            commonErrors: ["Listing source rather than destination countries."],
          },
        },
        {
          id: "geo-u6-mtq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "The 'two-tier' health system risk of medical tourism occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All care becomes free" },
              { id: "b", text: "Foreign patients paying more receive priority over locals" },
              { id: "c", text: "Hospitals serve only local patients" },
              { id: "d", text: "Tourism is banned entirely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Two-tier systems", statement: "Resources flow to profitable foreign patients, creating elite care while locals face neglect." },
            ],
            steps: [
              { reasoning: "Profit-seeking for tourists can divert resources from locals.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Priority for paying foreigners",
            commonErrors: ["Seeing only revenue benefits, ignoring equity risks."],
          },
        },
        {
          id: "geo-u6-mtq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Surgery abroad can cost roughly what percentage less than in the source country?",
          response: { type: "numeric", parts: [{ label: "Cost saving (%)", answer: 65, tolerance: 15, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Cost savings", statement: "Surgery can cost 50–80% less abroad — midpoint ~65%." },
            ],
            steps: [
              { reasoning: "The cited range is 50–80% less.", working: "50\\text{--}80\\%", marks: 1, markCode: "M" },
              { reasoning: "Midpoint $\\approx 65\\%$.", working: "65", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 50$–$80\\%$ less (midpoint $65\\%$)",
            commonErrors: ["Quoting a single figure without the range."],
          },
        },
        {
          id: "geo-u6-mtq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Surgery costs $\\$40{,}000$ in the USA but $\\$12{,}000$ in Thailand. What is the percentage saving?",
          response: { type: "numeric", parts: [{ label: "Percentage saving (%)", answer: 70, tolerance: 0, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cost saving", statement: "Saving $= \\frac{\\text{home} - \\text{abroad}}{\\text{home}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Difference $= 40{,}000 - 12{,}000 = 28{,}000$.", working: "28{,}000", marks: 1, markCode: "M" },
              { reasoning: "Share $= 28{,}000 / 40{,}000 = 0.70$.", working: "\\frac{28{,}000}{40{,}000} = 0.70", marks: 1, markCode: "M" },
              { reasoning: "Saving $= 70\\%$.", working: "70\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$70\\%$",
            commonErrors: ["Dividing by the foreign price instead of home price."],
          },
        },
        {
          id: "geo-u6-mtq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Organ transplantation tourism is ethically problematic because it:",
          response: { type: "numeric", parts: [{ label: "Concern code (1=may exploit vulnerable sellers/trafficking, 2=improves all health systems, 3=reduces costs for everyone, 4=has no ethical issues)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transplant tourism ethics", statement: "Organ tourism can involve exploitation, trafficking and unequal access — major ethical concern." },
            ],
            steps: [
              { reasoning: "Transplant tourism risks exploitation of vulnerable organ sellers.", working: "exploitation", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Exploitative/trafficking risk (1)",
            commonErrors: ["Ignoring the exploitation dimension."],
          },
        },
        {
          id: "geo-u6-mtq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A hospital earns $\\$30$ million/year from medical tourists but spends $\\$12$ million on tourist-focused services. What is the net revenue retained (in $\\$$ millions)?",
          response: { type: "numeric", parts: [{ label: "Net revenue ($ million)", answer: 18, tolerance: 0, unit: "$ million" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Net revenue", statement: "Net $= \\text{revenue} - \\text{associated costs}$." },
            ],
            steps: [
              { reasoning: "Subtract service costs from revenue.", working: "30 - 12", marks: 1, markCode: "M" },
              { reasoning: "Net $= \\$18$ million.", working: "18", marks: 1, markCode: "M" },
              { reasoning: "Net retained revenue is $\\$18$ million.", working: "18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$18$ million",
            commonErrors: ["Reporting gross revenue without deducting costs."],
          },
        },
        {
          id: "geo-u6-mtq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A benefit of medical tourism for destination countries is:",
          response: { type: "numeric", parts: [{ label: "Benefit code (1=revenue + hospital capacity building, 2=only brain drain, 3=only infection risk, 4=no benefits)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Medical tourism benefit", statement: "Tourist revenue can fund hospital capacity and technology upgrades in destinations." },
            ],
            steps: [
              { reasoning: "Revenue and infrastructure investment are key benefits.", working: "revenue + capacity", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Revenue + capacity building (1)",
            commonErrors: ["Listing only risks, ignoring benefits."],
          },
        },
        {
          id: "geo-u6-mtq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "If 5,000 medical tourists visit a destination annually and average stay is 5 days, how many tourist-days does this generate?",
          response: { type: "numeric", parts: [{ label: "Tourist-days per year", answer: 25000, tolerance: 0, unit: "days" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tourist-days", statement: "Tourist-days $= \\text{tourists} \\times \\text{average stay}$." },
            ],
            steps: [
              { reasoning: "Multiply tourists by stay length.", working: "5{,}000 \\times 5", marks: 1, markCode: "M" },
              { reasoning: "Tourist-days $= 25{,}000$.", working: "25{,}000", marks: 1, markCode: "M" },
              { reasoning: "$25{,}000$ tourist-days per year.", working: "25{,}000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25{,}000$ tourist-days",
            commonErrors: ["Adding rather than multiplying tourists and days."],
          },
        },
        {
          id: "geo-u6-mtq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the implications of medical tourism for a named destination country.",
          parts: [
            { label: "a", prompt: "Identify the destination and its medical tourism sector.", marks: 2 },
            { label: "b", prompt: "Explain two benefits and two risks/concerns.", marks: 4 },
            { label: "c", prompt: "Evaluate whether medical tourism is net positive for the country's health system.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Medical tourism trade-offs", statement: "Revenue and capacity gains vs two-tier systems, brain drain and infection risks." },
            ],
            steps: [
              { part: "a", reasoning: "Named destination identified with sector described.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Key procedures or market identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Benefit 1: revenue/capacity building.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Benefit 2 or risk 1 identified (two-tier, brain drain, infection).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Second risk with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Benefits and risks accurately balanced.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reasoned judgement on net effect for health system.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conditional conclusion (depends on regulation/equity).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Destination + sector. (b) 2 benefits + 2 risks. (c) Net judgement.",
            commonErrors: ["One-sided analysis — must weigh benefits and risks."],
          },
        },
      ],
    },
    {
      id: "geo-u6-pandemics",
      title: "Pandemics and Health Geographies",
      skill: "Analyse pandemic spread and response, and discuss emerging health geographies including One Health.",
      lesson: {
        sections: [
          {
            heading: "Pandemics",
            body: "A **pandemic** is an epidemic spanning multiple countries. Historical examples: 1918 Spanish flu (~50 million deaths), HIV/AIDS (since 1981), COVID-19 (2020-). Pandemics spread through global travel networks — COVID-19 reached 190+ countries in months. Response involves surveillance, testing, vaccination, travel restrictions, lockdowns and international cooperation (WHO).",
          },
          {
            heading: "COVID-19 geography",
            body: "COVID-19 showed how place affects spread: dense urban areas and poor sanitation accelerated transmission; some countries (New Zealand, Taiwan) succeeded with early border controls and testing; others struggled with weak health systems. Vaccination disparities created global inequity — wealthy countries vaccinated first while LICs waited.",
          },
          {
            heading: "One Health and emerging challenges",
            body: "**One Health** recognises human, animal and environmental health are linked — ~60% of human diseases are zoonotic (jump from animals). Deforestation, wildlife trade and climate change increase spillover risk. Emerging challenges: antimicrobial resistance, climate-sensitive diseases (dengue expanding poleward), and health security in an interconnected world.",
          },
        ],
        keyFormulas: [
          { name: "Pandemic", statement: "Epidemic across multiple countries — COVID-19 reached 190+ in months" },
          { name: "One Health", statement: "Human + animal + environmental health interconnected" },
          { name: "Zoonotic diseases", statement: "~60% of human diseases originate in animals" },
        ],
        workedExample: {
          problem: "Explain why pandemics spread faster in the modern era.",
          solution: "Globalisation has created dense travel and trade networks that move people and pathogens worldwide within days. Urbanisation concentrates populations; climate change expands vector ranges; and wildlife trade increases zoonotic spillover. COVID-19 circled the globe in weeks — impossible before air travel.",
        },
      },
      questions: [
        {
          id: "geo-u6-pq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A pandemic differs from an epidemic because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is less severe" },
              { id: "b", text: "Has no known cause" },
              { id: "c", text: "Spreads across multiple countries" },
              { id: "d", text: "Only affects animals" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pandemic", statement: "An epidemic that spreads across multiple countries or continents." },
            ],
            steps: [
              { reasoning: "Pandemic = epidemic with international spread.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Spreads across multiple countries",
            commonErrors: ["Confusing epidemic (regional) with pandemic (global)."],
          },
        },
        {
          id: "geo-u6-pq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two factors that accelerated COVID-19's global spread.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Pandemic spread factors", statement: "Air travel, urban density, delayed response, asymptomatic transmission." },
            ],
            steps: [
              { reasoning: "International air travel moved infected people worldwide within weeks.", marks: 1, markCode: "M" },
              { reasoning: "Urban density and public transport enabled rapid community transmission.", marks: 1, markCode: "M" },
              { reasoning: "Asymptomatic spread and delayed responses allowed undetected circulation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Air travel, urban density, asymptomatic spread, delayed response.",
            commonErrors: ["Blaming only one factor — multiple mechanisms combined."],
          },
        },
        {
          id: "geo-u6-pq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the One Health approach and why it matters for disease prevention.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "One Health", statement: "Human, animal and environmental health are interconnected — most emerging diseases are zoonotic." },
            ],
            steps: [
              { reasoning: "~60% of human diseases originate in animals — spillover from wildlife/livestock.", marks: 1, markCode: "M" },
              { reasoning: "Deforestation, wildlife trade and intensive farming increase spillover risk.", marks: 1, markCode: "M" },
              { reasoning: "One Health integrates human, veterinary and environmental surveillance.", marks: 1, markCode: "R" },
              { reasoning: "Prevention requires addressing environmental drivers, not just treating human cases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "One Health links human-animal-environment health; most diseases are zoonotic so prevention must address all three.",
            commonErrors: ["Treating human health separately from animal/environmental health."],
          },
        },
        {
          id: "geo-u6-pq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the global response to a named pandemic.",
          parts: [
            { label: "a", prompt: "Identify the named pandemic.", marks: 2 },
            { label: "b", prompt: "Explain two national and one international response measure.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of the global response.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pandemic response", statement: "Effective response combines national measures (testing, lockdowns) with international cooperation (WHO, vaccine sharing)." },
            ],
            steps: [
              { part: "a", reasoning: "Named pandemic (COVID-19, Spanish flu, Ebola) identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate dates, pathogen and scale described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "National measure 1: testing, lockdowns, vaccination.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "National measure 2: border controls, contact tracing, healthcare surge.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "International measure: WHO coordination, vaccine sharing, travel rules.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: reduced spread, saved lives, developed vaccines fast.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weakness: inequitable vaccine access, economic damage, trust issues.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named pandemic. (b) National + international measures. (c) Response evaluated.",
            commonErrors: ["One-sided evaluation — must weigh successes and failures."],
          },
        },
        {
          id: "geo-u6-pq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A pandemic is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A disease outbreak in one village" },
              { id: "b", text: "Any disease with high mortality" },
              { id: "c", text: "An epidemic spanning multiple countries or continents" },
              { id: "d", text: "A seasonal flu outbreak" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pandemic", statement: "An epidemic spreading across multiple countries — COVID-19 reached 190+ countries in months." },
            ],
            steps: [
              { reasoning: "Pandemic = multi-country epidemic spread.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Multi-country epidemic",
            commonErrors: ["Confusing pandemic with epidemic or endemic disease."],
          },
        },
        {
          id: "geo-u6-pq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 1918 Spanish flu pandemic caused approximately how many deaths?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "~50 million" },
              { id: "b", text: "~500 million" },
              { id: "c", text: "~5 billion" },
              { id: "d", text: "~5 million" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "1918 flu", statement: "Spanish flu killed ~50 million people — history's deadliest pandemic." },
            ],
            steps: [
              { reasoning: "The 1918 pandemic caused ~50 million deaths.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** ~50 million",
            commonErrors: ["Confusing with COVID-19 death tolls."],
          },
        },
        {
          id: "geo-u6-pq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "One Health recognises that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Environmental health is separate" },
              { id: "b", text: "Human health is independent of animals and environment" },
              { id: "c", text: "Human, animal and environmental health are interconnected" },
              { id: "d", text: "Only human medicine matters" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "One Health", statement: "Human, animal and environmental health are linked — ~60% of human diseases are zoonotic." },
            ],
            steps: [
              { reasoning: "One Health integrates human-animal-environment health.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Human + animal + environmental health",
            commonErrors: ["Treating human health as isolated from ecosystems."],
          },
        },
        {
          id: "geo-u6-pq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Approximately what share of human diseases are zoonotic (originating in animals)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "~30%" },
              { id: "b", text: "~60%" },
              { id: "c", text: "~10%" },
              { id: "d", text: "~90%" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Zoonotic diseases", statement: "~60% of human diseases originate in animals — key One Health concern." },
            ],
            steps: [
              { reasoning: "The cited zoonotic share is ~60%.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** ~60%",
            commonErrors: ["Underestimating zoonotic disease share."],
          },
        },
        {
          id: "geo-u6-pq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Pandemics spread faster in the modern era primarily because of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weaker pathogens" },
              { id: "b", text: "Better sanitation" },
              { id: "c", text: "Less urbanisation" },
              { id: "d", text: "Dense global travel and trade networks moving pathogens worldwide" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pandemic acceleration", statement: "Air travel and trade networks move people and pathogens globally within days — COVID-19 circled the globe in weeks." },
            ],
            steps: [
              { reasoning: "Global connectivity accelerates pathogen spread.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Global travel/trade networks",
            commonErrors: ["Attributing speed to pathogen strength rather than connectivity."],
          },
        },
        {
          id: "geo-u6-pq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "COVID-19 reached approximately how many countries within months?",
          response: { type: "numeric", parts: [{ label: "Countries reached", answer: 190, tolerance: 10 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "COVID-19 spread", statement: "COVID-19 reached 190+ countries within months via travel networks." },
            ],
            steps: [
              { reasoning: "Recall the spread figure.", working: "190+", marks: 1, markCode: "M" },
              { reasoning: "Answer $\\approx 190$ countries.", working: "190", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$190+$ countries",
            commonErrors: ["Underestimating the geographic reach."],
          },
        },
        {
          id: "geo-u6-pq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "If a pathogen infects 100 people who each infect 2 others, and this repeats for 3 generations, how many total infections occur (including the original 100)?",
          response: { type: "numeric", parts: [{ label: "Total infections", answer: 700, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential spread", statement: "Total $= N \\times \\frac{r^g - 1}{r - 1}$ for $g$ generations; or sum geometric series." },
            ],
            steps: [
              { reasoning: "Generation sizes: original 100, then 200, 400 and 800 new cases.", working: "100,\\ 200,\\ 400,\\ 800", marks: 1, markCode: "M" },
              { reasoning: "Sum all generations including the original 100.", working: "100 + 200 + 400 + 800", marks: 1, markCode: "M" },
              { reasoning: "Total infections $= 1{,}500$.", working: "1{,}500", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1{,}500$ total infections",
            commonErrors: ["Counting only new cases or missing a generation."],
          },
        },
        {
          id: "geo-u6-pq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Deforestation increases pandemic risk because it:",
          response: { type: "numeric", parts: [{ label: "Mechanism code (1=forces wildlife into human contact → zoonotic spillover, 2=improves sanitation, 3=reduces pathogen survival, 4=no effect)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deforestation and spillover", statement: "Habitat destruction pushes wildlife into human settlements, increasing zoonotic disease spillover risk." },
            ],
            steps: [
              { reasoning: "Deforestation increases human-wildlife contact and spillover.", working: "spillover", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Zoonotic spillover risk (1)",
            commonErrors: ["Ignoring the ecological link to disease emergence."],
          },
        },
        {
          id: "geo-u6-pq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A vaccine campaign targets 80% coverage of a population of 10 million. How many people need to be vaccinated?",
          response: { type: "numeric", parts: [{ label: "People to vaccinate (millions)", answer: 8, tolerance: 0, unit: "million" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Vaccination target", statement: "Target $= \\text{coverage rate} \\times \\text{population}$." },
            ],
            steps: [
              { reasoning: "Apply 80% to 10 million.", working: "0.80 \\times 10", marks: 1, markCode: "M" },
              { reasoning: "Target $= 8$ million people.", working: "8", marks: 1, markCode: "M" },
              { reasoning: "$8$ million vaccinations needed.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ million people",
            commonErrors: ["Confusing coverage rate with total population."],
          },
        },
        {
          id: "geo-u6-pq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Antimicrobial resistance (AMR) is a growing health threat because:",
          response: { type: "numeric", parts: [{ label: "Threat code (1=pathogens evolve to resist drugs making infections untreatable, 2=drugs become more effective, 3=no impact on health, 4=only affects animals)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "AMR threat", statement: "Pathogens evolve resistance to antibiotics, rendering common infections untreatable — a major emerging challenge." },
            ],
            steps: [
              { reasoning: "AMR reduces drug effectiveness, increasing mortality risk.", working: "resistance", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Untreatable infections risk (1)",
            commonErrors: ["Underestimating AMR as a future rather than current threat."],
          },
        },
        {
          id: "geo-u6-pq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "If COVID-19 vaccination rates were 70% in high-income countries but 20% in low-income countries after year one, what is the vaccination gap (in percentage points)?",
          response: { type: "numeric", parts: [{ label: "Vaccination gap (percentage points)", answer: 50, tolerance: 0, unit: "pp" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Coverage gap", statement: "Gap $= \\text{HIC rate} - \\text{LIC rate}$ in percentage points." },
            ],
            steps: [
              { reasoning: "Subtract LIC from HIC rate.", working: "70 - 20", marks: 1, markCode: "M" },
              { reasoning: "Gap $= 50$ percentage points.", working: "50", marks: 1, markCode: "M" },
              { reasoning: "The vaccination gap is $50$ percentage points.", working: "50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50$ percentage points",
            commonErrors: ["Reporting a relative percentage rather than percentage points."],
          },
        },
        {
          id: "geo-u6-pq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the geography of a named pandemic and the global response.",
          parts: [
            { label: "a", prompt: "Identify the pandemic and its spread pattern.", marks: 2 },
            { label: "b", prompt: "Explain two factors affecting its geographic spread and severity.", marks: 3 },
            { label: "c", prompt: "Evaluate the international response and its equity.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pandemic geography", statement: "Pandemics spread via travel networks; severity varies with health systems, density and vaccination equity." },
            ],
            steps: [
              { part: "a", reasoning: "Named pandemic identified (e.g. COVID-19).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Spread pattern described (global, rapid, uneven).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factor 1: travel networks/urban density.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factor 2: health system capacity/vaccination access.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factors linked to spread/severity geography.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Response measure evaluated (WHO, vaccination, travel restrictions).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Equity assessment: rich vs poor country outcomes.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Pandemic + pattern. (b) Two spread factors. (c) Response + equity.",
            commonErrors: ["One-sided evaluation — must weigh successes and failures."],
          },
        },
      ],
    },
  ],
};
