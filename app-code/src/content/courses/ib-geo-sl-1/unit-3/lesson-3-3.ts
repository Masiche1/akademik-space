import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "geo-u3-lesson-3-3",
  code: "3-3",
  title: "Hazard Risk, Vulnerability and Management",
  goal: "I CAN explain hazard risk perception and vulnerability and evaluate engineering versus sustainable management strategies.",
  standards: ["Paper 1", "Paper 2", "Hazards"],
  vocabulary: [
    { term: "Risk", definition: "The combination of hazard probability, exposure and vulnerability — the likelihood of loss." },
    { term: "Vulnerability", definition: "The susceptibility of people, property and systems to hazard damage." },
    { term: "Exposure", definition: "The people, property and resources present in hazard-prone areas." },
    { term: "Resilience", definition: "The capacity to anticipate, absorb and recover from hazard impacts." },
    { term: "Risk perception", definition: "How individuals and societies judge hazard likelihood and severity — often inaccurate." },
    { term: "Sustainable hazard management", definition: "Strategies that reduce risk while preserving ecosystems and future resilience." },
  ],
  concepts: [
    {
      id: "geo-u3-risk-vulnerability",
      title: "Risk, vulnerability and perception",
      skill: "Explain the components of hazard risk and analyse how perception and vulnerability shape outcomes.",
      lesson: {
        sections: [
          {
            heading: "Components of risk",
            body: "**Risk = hazard × exposure × vulnerability**. Hazard is the physical event (earthquake, cyclone); exposure is what is in its path; vulnerability is how susceptible those people/assets are. Two regions with identical hazards can have vastly different risks — dense informal housing in a floodplain is far more vulnerable than a sparsely populated area.",
          },
          {
            heading: "Vulnerability and resilience",
            body: "Vulnerability stems from poverty, weak governance, poor infrastructure, lack of education and social marginalisation. **Resilience** is the capacity to withstand and recover — enhanced by building codes, early warning, insurance, social networks and diversified livelihoods. Resilience-building reduces risk without eliminating the hazard.",
          },
          {
            heading: "Risk perception",
            body: "People often misjudge hazards: recent events feel more likely (**availability bias**), familiar risks seem smaller, and voluntary risks (smoking) are accepted while imposed risks (nuclear) are feared. Perception affects preparedness — those who underestimate risk take fewer precautions, increasing actual losses.",
          },
        ],
        keyFormulas: [
          { name: "Risk equation", statement: "Risk = hazard × exposure × vulnerability" },
          { name: "Vulnerability drivers", statement: "Poverty, weak governance, poor infrastructure, marginalisation" },
          { name: "Resilience", statement: "Capacity to anticipate, absorb and recover from hazards" },
        ],
        workedExample: {
          problem: "Explain why two cities facing the same flood hazard can have very different risks.",
          solution: "Risk depends on exposure and vulnerability, not just the hazard. A wealthy city with flood defences, warning systems, insurance and well-built housing has low vulnerability. A poor city with informal housing on floodplains, no warnings and weak infrastructure has high vulnerability — same hazard, far higher risk.",
        },
      },
      questions: [
        {
          id: "geo-u3-rq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Hazard risk is determined by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Population size alone" },
              { id: "b", text: "Government spending on defence" },
              { id: "c", text: "Hazard magnitude alone" },
              { id: "d", text: "Hazard × exposure × vulnerability" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Risk equation", statement: "Risk = hazard × exposure × vulnerability." },
            ],
            steps: [
              { reasoning: "Risk combines physical hazard with human exposure and vulnerability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Hazard × exposure × vulnerability",
            commonErrors: ["Thinking risk equals hazard — vulnerability is crucial."],
          },
        },
        {
          id: "geo-u3-rq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two factors that increase vulnerability to natural hazards.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Vulnerability factors", statement: "Poverty, weak governance, poor infrastructure, lack of education, social marginalisation." },
            ],
            steps: [
              { reasoning: "Poverty limits ability to build resilient housing, insure assets or evacuate.", marks: 1, markCode: "M" },
              { reasoning: "Weak governance means poor building codes, no early warning and inadequate emergency response.", marks: 1, markCode: "M" },
              { reasoning: "Poor infrastructure (housing, drainage, health systems) increases damage and slows recovery.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Poverty, weak governance, poor infrastructure, marginalisation.",
            commonErrors: ["Listing hazard characteristics instead of vulnerability factors."],
          },
        },
        {
          id: "geo-u3-rq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how risk perception can increase actual hazard losses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Perception-risk link", statement: "Underestimating hazard likelihood reduces preparedness, increasing exposure and losses when events occur." },
            ],
            steps: [
              { reasoning: "People judge recent or familiar events as more likely — availability bias.", marks: 1, markCode: "M" },
              { reasoning: "Those who underestimate risk don't evacuate, reinforce buildings or buy insurance.", marks: 1, markCode: "M" },
              { reasoning: "This raises actual losses when the hazard strikes — perception affects vulnerability.", marks: 1, markCode: "R" },
              { reasoning: "Conversely, overestimating rare risks can cause unnecessary costs and anxiety.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Underestimation reduces preparedness, raising exposure and losses — perception shapes actual risk.",
            commonErrors: ["Treating risk perception as irrelevant to actual losses."],
          },
        },
        {
          id: "geo-u3-rq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the factors that determine vulnerability to hazards in a named country or region.",
          parts: [
            { label: "a", prompt: "Identify the named region and its hazard exposure.", marks: 2 },
            { label: "b", prompt: "Explain two social and one economic factor affecting vulnerability.", marks: 3 },
            { label: "c", prompt: "Evaluate strategies for reducing vulnerability there.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vulnerability reduction", statement: "Education, governance, infrastructure and economic development reduce vulnerability; strategies must fit local conditions." },
            ],
            steps: [
              { part: "a", reasoning: "Named region (e.g. Bangladesh, Haiti, Philippines) with hazard context.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific hazards and exposure described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Social factor: poverty, education, health, marginalisation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Social factor 2: governance, warning systems, social networks.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Economic factor: income, insurance, infrastructure investment.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strategy: building codes, early warning, education, insurance.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: costs, feasibility, cultural fit, sustainability.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named region + exposure. (b) Two social + one economic factor. (c) Strategies evaluated.",
            commonErrors: ["Confusing hazard exposure with vulnerability — exposure is location, vulnerability is susceptibility."],
          },
        },
        {
          id: "geo-u3-rq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Exposure in hazard risk refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The government's budget for emergency services" },
              { id: "b", text: "How easily buildings collapse during shaking" },
              { id: "c", text: "The probability of an earthquake occurring" },
              { id: "d", text: "The people, property and resources present in hazard-prone areas" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exposure", statement: "The people, property and resources present in hazard-prone areas." },
            ],
            steps: [
              { reasoning: "Exposure is what is in the hazard's path — people, buildings, infrastructure.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** People, property and resources in hazard zones",
            commonErrors: ["Confusing exposure with vulnerability — exposure is location, vulnerability is susceptibility."],
          },
        },
        {
          id: "geo-u3-rq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Complete the following: (a) the number of components in the risk equation; (b) the number of vulnerability drivers named in the lesson; (c) the number of resilience-enhancing measures named in the lesson (building codes, early warning, insurance, social networks, diversified livelihoods).",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Risk equation components", answer: 3 },
              { label: "(b) Vulnerability drivers", answer: 5 },
              { label: "(c) Resilience measures", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Risk components", statement: "Risk = hazard × exposure × vulnerability; drivers include poverty, governance, infrastructure, education and marginalisation." },
            ],
            steps: [
              { reasoning: "The risk equation has three components: hazard, exposure, vulnerability.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "Five drivers are named: poverty, weak governance, poor infrastructure, lack of education, marginalisation.", working: "5", marks: 1, markCode: "A" },
              { reasoning: "Five resilience measures are listed: building codes, early warning, insurance, social networks, diversified livelihoods.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3$ (b) $5$ (c) $5$",
            commonErrors: ["Counting hazard itself as a vulnerability driver."],
          },
        },
        {
          id: "geo-u3-rq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Resilience in hazard management refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The capacity to anticipate, absorb and recover from hazard impacts" },
              { id: "b", text: "The complete elimination of all hazards" },
              { id: "c", text: "The cost of building a seawall" },
              { id: "d", text: "The strength of a country's military" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Resilience", statement: "The capacity to anticipate, absorb and recover from hazard impacts." },
            ],
            steps: [
              { reasoning: "Resilience is about withstanding and recovering, not eliminating hazards.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Capacity to anticipate, absorb and recover",
            commonErrors: ["Confusing resilience with resistance — resilience includes recovery, not just withstanding."],
          },
        },
        {
          id: "geo-u3-rq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Complete the following: (a) the number of components in the risk equation; (b) the number of cities compared in the lesson's worked example on flood risk; (c) the number of vulnerability drivers named in the lesson.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Risk equation components", answer: 3 },
              { label: "(b) Cities compared", answer: 2 },
              { label: "(c) Vulnerability drivers", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Risk equation and case contrast", statement: "Risk = hazard × exposure × vulnerability; the worked example contrasts a wealthy and a poor flood-prone city." },
            ],
            steps: [
              { reasoning: "The risk equation has three components.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "The worked example compares two cities facing the same flood hazard.", working: "2", marks: 1, markCode: "A" },
              { reasoning: "Five vulnerability drivers are named.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3$ (b) $2$ (c) $5$",
            commonErrors: ["Counting three or more cities — the example contrasts exactly two."],
          },
        },
        {
          id: "geo-u3-rq9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "Availability bias in risk perception means people:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ignore all scientific information" },
              { id: "b", text: "always assess risks accurately" },
              { id: "c", text: "only fear risks they have personally caused" },
              { id: "d", text: "judge recently experienced or vivid events as more likely to recur" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Availability bias", statement: "People overestimate the likelihood of events that are recent, vivid or easily recalled." },
            ],
            steps: [
              { reasoning: "Availability bias makes memorable recent events feel more probable.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Recent or vivid events judged more likely",
            commonErrors: ["Confusing availability bias with risk aversion generally."],
          },
        },
        {
          id: "geo-u3-rq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Complete the following: (a) the number of components in the risk equation; (b) the number of vulnerability drivers named in the lesson.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Risk equation components", answer: 3 },
              { label: "(b) Vulnerability drivers", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Risk equation", statement: "Risk = hazard × exposure × vulnerability." },
            ],
            steps: [
              { reasoning: "Three components: hazard, exposure, vulnerability.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "Five drivers: poverty, weak governance, poor infrastructure, lack of education, marginalisation.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3$ (b) $5$",
            commonErrors: ["Including hazard magnitude as a separate vulnerability driver."],
          },
        },
        {
          id: "geo-u3-rq11",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Underestimating hazard risk tends to increase actual losses because people who underestimate risk:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "reduce their exposure to zero" },
              { id: "b", text: "move to safer locations automatically" },
              { id: "c", text: "take fewer precautions such as evacuating, reinforcing buildings or buying insurance" },
              { id: "d", text: "always over-prepare for disasters" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Perception–preparedness link", statement: "Underestimating risk reduces preparedness, raising exposure and losses when the hazard strikes." },
            ],
            steps: [
              { reasoning: "Low perceived risk → fewer protective behaviours → higher actual losses.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Fewer precautions → higher losses",
            commonErrors: ["Assuming accurate risk perception is automatic — it is often biased."],
          },
        },
        {
          id: "geo-u3-rq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Complete the following: (a) the number of components in the risk equation; (b) the number of cities compared in the worked example; (c) the number of vulnerability drivers named in the lesson.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Risk equation components", answer: 3 },
              { label: "(b) Cities compared", answer: 2 },
              { label: "(c) Vulnerability drivers", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Risk components", statement: "Risk = hazard × exposure × vulnerability; worked example contrasts two cities with different vulnerability." },
            ],
            steps: [
              { reasoning: "Three components form the risk equation.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "The worked example compares two cities.", working: "2", marks: 1, markCode: "A" },
              { reasoning: "Five vulnerability drivers are named.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3$ (b) $2$ (c) $5$",
            commonErrors: ["Counting the hazard itself among the vulnerability drivers."],
          },
        },
        {
          id: "geo-u3-rq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine risk perception and its effect on hazard preparedness.",
          parts: [
            { label: "a", prompt: "Describe two biases that distort risk perception.", marks: 2 },
            { label: "b", prompt: "Explain how perception affects preparedness behaviour.", marks: 3 },
            { label: "c", prompt: "Evaluate strategies for improving risk communication.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Risk perception", statement: "Availability bias and voluntary/imposed risk distinctions distort perception; low perceived risk reduces preparedness." },
            ],
            steps: [
              { part: "a", reasoning: "Availability bias: recent/vivid events judged more likely.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Voluntary vs imposed risk: people accept chosen risks but fear imposed ones (or vice versa).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Underestimation → fewer evacuations, weaker buildings, no insurance.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Overestimation → unnecessary costs and anxiety, 'cry wolf' effects.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Perception therefore changes actual vulnerability and losses.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strategy: clear risk communication, drills and education.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: reach, trust, frequency of warnings, cultural fit.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Two biases. (b) Perception → behaviour → losses. (c) Communication evaluated.",
            commonErrors: ["Treating risk perception as irrelevant to actual outcomes."],
          },
        },
        {
          id: "geo-u3-rq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the components of hazard risk using a named place.",
          parts: [
            { label: "a", prompt: "Define hazard, exposure and vulnerability for the named place.", marks: 2 },
            { label: "b", prompt: "Explain how these components differ between two contrasting areas.", marks: 3 },
            { label: "c", prompt: "Evaluate which component offers the greatest scope for risk reduction.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Risk components applied", statement: "Hazards cannot be changed, but exposure (land-use) and vulnerability (wealth, governance, infrastructure) can be managed." },
            ],
            steps: [
              { part: "a", reasoning: "Hazard identified for the place (e.g. flood, cyclone, earthquake).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Exposure and vulnerability described specifically for the place.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Contrast 1: exposure difference (dense informal settlement vs planned area).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Contrast 2: vulnerability difference (building quality, warning access, insurance).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Contrasts correctly linked to risk outcomes.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Argument that vulnerability is most manageable since hazards are fixed.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Counter-consideration: exposure can also be reduced via relocation/land-use planning.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Three components defined. (b) Two-area contrast. (c) Greatest-reduction argument.",
            commonErrors: ["Treating hazard as controllable — only exposure and vulnerability can be managed."],
          },
        },
        {
          id: "geo-u3-rq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which statement about risk perception is most accurate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only scientists experience risk perception" },
              { id: "b", text: "People always judge hazard risks correctly" },
              { id: "c", text: "Perception is shaped by availability bias and by whether risks are voluntary or imposed" },
              { id: "d", text: "Risk perception has no effect on preparedness" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Risk perception biases", statement: "Perception is distorted by availability bias and by voluntary-versus-imposed risk distinctions." },
            ],
            steps: [
              { reasoning: "Perception is systematically biased, not accurate or irrelevant.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Availability bias + voluntary/imposed distinctions",
            commonErrors: ["Assuming perception matches statistical risk."],
          },
        },
        {
          id: "geo-u3-rq16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Complete the following: (a) the number of components in the risk equation; (b) the number of vulnerability drivers named in the lesson.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Risk equation components", answer: 3 },
              { label: "(b) Vulnerability drivers", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Risk equation", statement: "Risk = hazard × exposure × vulnerability." },
            ],
            steps: [
              { reasoning: "Three components: hazard, exposure, vulnerability.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "Five drivers: poverty, governance, infrastructure, education, marginalisation.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3$ (b) $5$",
            commonErrors: ["Including hazard frequency as a fourth component."],
          },
        },
      ],
    },
    {
      id: "geo-u3-management-strategies",
      title: "Hazard Management Strategies",
      skill: "Compare engineering and sustainable approaches to hazard management and evaluate their effectiveness.",
      lesson: {
        sections: [
          {
            heading: "Engineering approaches",
            body: "Hard engineering resists hazards: **seawalls** and **storm surge barriers** (Thames Barrier), **dams** for flood control, **earthquake-resistant buildings**, **tsunami walls**. Effective for protecting assets but expensive, can fail catastrophically (levee breaches), and may increase risk elsewhere through false security.",
          },
          {
            heading: "Sustainable and soft approaches",
            body: "Sustainable strategies work with natural systems: **mangrove restoration** buffers storm surges; **wetland and floodplain restoration** absorbs floodwater; **afforestation** stabilises slopes; **ecosystem-based adaptation** uses nature's defences. Cheaper long-term, provide co-benefits (fisheries, carbon storage) and build resilience — but need space and time.",
          },
          {
            heading: "Integrated risk management",
            body: "Best practice combines **prediction/monitoring**, **early warning**, **preparedness** (drills, education), **mitigation** (land-use planning, insurance) and **response/recovery**. Community participation and governance determine success — top-down engineering alone often fails without local engagement.",
          },
        ],
        keyFormulas: [
          { name: "Engineering", statement: "Seawalls, dams, barriers — resist hazards structurally" },
          { name: "Sustainable", statement: "Mangroves, wetlands, afforestation — work with ecosystems" },
          { name: "Integrated management", statement: "Monitor → warn → prepare → mitigate → respond → recover" },
        ],
        workedExample: {
          problem: "Compare engineering and sustainable approaches to coastal storm surge management.",
          solution: "Engineering (seawalls, surge barriers) provides immediate, predictable protection for cities but is costly, can fail, and destroys natural habitats. Sustainable (mangrove restoration, dune rebuilding) is cheaper, provides fisheries and carbon benefits, and adapts naturally to sea-level rise — but needs space and time and may be insufficient for dense urban areas.",
        },
      },
      questions: [
        {
          id: "geo-u3-mq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Mangrove restoration is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A prediction technique" },
              { id: "b", text: "Sustainable ecosystem-based hazard management" },
              { id: "c", text: "Hard engineering flood control" },
              { id: "d", text: "A vulnerability assessment tool" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ecosystem-based management", statement: "Using natural systems (mangroves, wetlands) to buffer hazards — sustainable approach." },
            ],
            steps: [
              { reasoning: "Mangrove restoration uses ecosystems to absorb storm energy — sustainable management.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Sustainable ecosystem-based management",
            commonErrors: ["Classifying natural restoration as engineering — it works with, not against, nature."],
          },
        },
        {
          id: "geo-u3-mq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two engineering approaches to hazard management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Engineering management", statement: "Seawalls, dams, barriers, earthquake-resistant buildings — structural hazard resistance." },
            ],
            steps: [
              { reasoning: "Seawalls/storm surge barriers physically block coastal flooding (Thames Barrier).", marks: 1, markCode: "M" },
              { reasoning: "Dams store floodwater and release it gradually, reducing downstream peaks.", marks: 1, markCode: "M" },
              { reasoning: "Earthquake-resistant building codes prevent collapse during shaking.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Seawalls/barriers, dams, earthquake-resistant buildings.",
            commonErrors: ["Describing natural measures like wetlands as engineering."],
          },
        },
        {
          id: "geo-u3-mq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the advantages of ecosystem-based hazard management over hard engineering.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ecosystem advantages", statement: "Natural defences are cheaper, self-maintaining, provide co-benefits and adapt to environmental change." },
            ],
            steps: [
              { reasoning: "Mangroves/wetlands cost less to maintain than concrete structures and self-repair.", marks: 1, markCode: "M" },
              { reasoning: "They provide co-benefits: fisheries, carbon storage, biodiversity, recreation.", marks: 1, markCode: "M" },
              { reasoning: "Ecosystems can adapt and grow with sea-level rise; walls are fixed.", marks: 1, markCode: "R" },
              { reasoning: "Limitation: need space and time; may be insufficient for dense urban exposure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cheaper, self-maintaining, co-benefits, adaptive — but need space and time.",
            commonErrors: ["Ignoring that ecosystem approaches have limitations too."],
          },
        },
        {
          id: "geo-u3-mq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine hazard management strategies for a named hazard in a named region.",
          parts: [
            { label: "a", prompt: "Identify the hazard and region.", marks: 2 },
            { label: "b", prompt: "Explain two management strategies (engineering or sustainable).", marks: 3 },
            { label: "c", prompt: "Evaluate their effectiveness.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hazard strategy evaluation", statement: "Effectiveness depends on hazard type, exposure, vulnerability, cost and sustainability." },
            ],
            steps: [
              { part: "a", reasoning: "Named hazard + region (e.g. cyclone + Bangladesh, earthquake + Japan).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate hazard identification and geographic context.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1: engineering or sustainable measure with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2: second distinct strategy with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategies appropriate to the named hazard.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: protection level, cost, co-benefits.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: cost, failure risk, space needs, residual risk.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named hazard + region. (b) Two strategies. (c) Effectiveness evaluated.",
            commonErrors: ["Generic strategy discussion without place-specific evidence."],
          },
        },
        {
          id: "geo-u3-mq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Thames Barrier and coastal seawalls are examples of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "risk perception studies" },
              { id: "b", text: "hard engineering approaches to hazard management" },
              { id: "c", text: "early warning techniques" },
              { id: "d", text: "sustainable ecosystem-based management" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hard engineering", statement: "Structural measures — seawalls, dams, barriers, resilient buildings — that physically resist hazards." },
            ],
            steps: [
              { reasoning: "Barriers and seawalls are structural defences — hard engineering.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Hard engineering",
            commonErrors: ["Classifying concrete structures as sustainable measures — they are hard engineering."],
          },
        },
        {
          id: "geo-u3-mq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Complete the following: (a) the approximate length of the Thames Barrier in metres; (b) the number of stages in the integrated risk management cycle; (c) the number of co-benefits of ecosystem-based management listed in the lesson.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Thames Barrier length (m)", answer: 520, tolerance: 40, unit: "m" },
              { label: "(b) Integrated cycle stages", answer: 6 },
              { label: "(c) Co-benefits listed", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Management facts", statement: "The Thames Barrier spans ~520 m; the cycle runs monitor → warn → prepare → mitigate → respond → recover; co-benefits include fisheries, carbon, biodiversity and recreation." },
            ],
            steps: [
              { reasoning: "The Thames Barrier is approximately 520 metres long.", working: "\\approx 520\\ \\text{m}", marks: 1, markCode: "A" },
              { reasoning: "Six stages: monitor, warn, prepare, mitigate, respond, recover.", working: "6", marks: 1, markCode: "A" },
              { reasoning: "Four co-benefits: fisheries, carbon storage, biodiversity, recreation.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\approx 520$ m (b) $6$ (c) $4$",
            commonErrors: ["Counting only four cycle stages or omitting monitoring/early warning."],
          },
        },
        {
          id: "geo-u3-mq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Wetland and floodplain restoration is classified as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a sustainable approach working with natural systems" },
              { id: "b", text: "a prediction method" },
              { id: "c", text: "an insurance scheme" },
              { id: "d", text: "hard engineering flood control" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sustainable flood management", statement: "Restoring wetlands and floodplains lets natural systems absorb and store floodwater — ecosystem-based, sustainable management." },
            ],
            steps: [
              { reasoning: "Natural flood storage is sustainable management, not hard engineering.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Sustainable ecosystem-based approach",
            commonErrors: ["Confusing natural restoration with engineered defences."],
          },
        },
        {
          id: "geo-u3-mq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Complete the following: (a) the number of stages in the integrated risk management cycle; (b) the number of sustainable measures named in the lesson (mangroves, wetlands, afforestation); (c) the number of co-benefits of ecosystem-based management listed.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cycle stages", answer: 6 },
              { label: "(b) Sustainable measures", answer: 3 },
              { label: "(c) Co-benefits", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Management counts", statement: "Six-stage cycle; three sustainable measures; four co-benefits (fisheries, carbon, biodiversity, recreation)." },
            ],
            steps: [
              { reasoning: "Six stages: monitor, warn, prepare, mitigate, respond, recover.", working: "6", marks: 1, markCode: "A" },
              { reasoning: "Three sustainable measures: mangrove restoration, wetland/floodplain restoration, afforestation.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "Four co-benefits are listed.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6$ (b) $3$ (c) $4$",
            commonErrors: ["Including response and recovery as one stage."],
          },
        },
        {
          id: "geo-u3-mq9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "A major limitation of hard engineering approaches to hazard management is that they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "work equally well for all hazard types" },
              { id: "b", text: "never protect any assets" },
              { id: "c", text: "are always free of maintenance costs" },
              { id: "d", text: "can be very expensive, fail catastrophically and create false security" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Hard engineering limits", statement: "Engineering defences are costly, can fail catastrophically (levee breaches) and may increase risk through false security." },
            ],
            steps: [
              { reasoning: "High cost, catastrophic failure risk and complacency are key limitations.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Costly, can fail catastrophically, false security",
            commonErrors: ["Ignoring that engineering measures have real limitations."],
          },
        },
        {
          id: "geo-u3-mq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Complete the following: (a) the approximate length of the Thames Barrier in metres; (b) the number of stages in the integrated risk management cycle.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Thames Barrier length (m)", answer: 520, tolerance: 40, unit: "m" },
              { label: "(b) Cycle stages", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Engineering and cycle facts", statement: "Thames Barrier ~520 m; integrated cycle has six stages." },
            ],
            steps: [
              { reasoning: "The Thames Barrier is approximately 520 metres long.", working: "\\approx 520\\ \\text{m}", marks: 1, markCode: "A" },
              { reasoning: "Six stages form the cycle.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\approx 520$ m (b) $6$",
            commonErrors: ["Giving kilometres instead of metres."],
          },
        },
        {
          id: "geo-u3-mq11",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Ecosystem-based hazard management is advantageous over hard engineering mainly because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "destroys natural habitats to build concrete" },
              { id: "b", text: "requires no space or time to establish" },
              { id: "c", text: "provides co-benefits such as fisheries and carbon storage while self-maintaining and adapting to change" },
              { id: "d", text: "guarantees complete protection for dense cities" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Ecosystem vs engineering", statement: "Natural defences are cheaper, self-repairing, provide co-benefits and adapt — but need space and time." },
            ],
            steps: [
              { reasoning: "Co-benefits, low maintenance and adaptability distinguish ecosystem approaches.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Co-benefits, self-maintaining, adaptive",
            commonErrors: ["Ignoring ecosystem limitations — space and time are required."],
          },
        },
        {
          id: "geo-u3-mq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Complete the following: (a) the number of stages in the integrated risk management cycle; (b) the number of sustainable measures named in the lesson; (c) the number of co-benefits of ecosystem-based management listed.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cycle stages", answer: 6 },
              { label: "(b) Sustainable measures", answer: 3 },
              { label: "(c) Co-benefits", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Management counts", statement: "Six-stage cycle; three sustainable measures; four co-benefits." },
            ],
            steps: [
              { reasoning: "Six stages: monitor, warn, prepare, mitigate, respond, recover.", working: "6", marks: 1, markCode: "A" },
              { reasoning: "Three sustainable measures: mangroves, wetlands, afforestation.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "Four co-benefits: fisheries, carbon, biodiversity, recreation.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6$ (b) $3$ (c) $4$",
            commonErrors: ["Counting only the three 'mitigation' measures as the whole cycle."],
          },
        },
        {
          id: "geo-u3-mq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the integrated approach to hazard risk management.",
          parts: [
            { label: "a", prompt: "Outline the stages of the integrated risk management cycle.", marks: 2 },
            { label: "b", prompt: "Explain two non-structural risk reduction measures.", marks: 3 },
            { label: "c", prompt: "Evaluate why an integrated approach outperforms engineering-only management.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Integrated risk management", statement: "Monitor → warn → prepare → mitigate → respond → recover combines structural and non-structural measures." },
            ],
            steps: [
              { part: "a", reasoning: "Stages named: monitoring/prediction, early warning, preparedness, mitigation, response, recovery.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sequence or completeness of the cycle shown.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Measure 1: land-use planning or insurance with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Measure 2: education/drills or community participation with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Measures correctly distinguished from structural engineering.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: addresses all risk components and builds resilience.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: complex, requires coordination, governance and resources.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Cycle stages. (b) Two non-structural measures. (c) Integrated vs engineering-only judgement.",
            commonErrors: ["Listing only mitigation measures and ignoring monitoring, warning and recovery."],
          },
        },
        {
          id: "geo-u3-mq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine a named hard-engineering flood defence scheme.",
          parts: [
            { label: "a", prompt: "Identify the scheme and its location.", marks: 2 },
            { label: "b", prompt: "Explain its design and the hazard it addresses.", marks: 3 },
            { label: "c", prompt: "Evaluate its effectiveness and limitations.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Flood defence schemes", statement: "Thames Barrier (London), Delta Works (Netherlands) and levee systems are major hard-engineering flood defences." },
            ],
            steps: [
              { part: "a", reasoning: "Named scheme (e.g. Thames Barrier, Delta Works) and correct location.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate identification of the hazard addressed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Design described: movable gates, surge barriers or dykes with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Link between design and flood/surge protection explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Technical detail accurate (e.g. Thames Barrier ~520 m, ten gates).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Effectiveness: flood protection achieved, protected assets valued.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitations: cost, failure risk, maintenance, sea-level rise, downstream effects.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Scheme + location. (b) Design and purpose. (c) Effectiveness evaluated.",
            commonErrors: ["Naming a scheme without accurate design or location detail."],
          },
        },
        {
          id: "geo-u3-mq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Top-down engineering alone often fails as a hazard management strategy mainly because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ignores local communities, their knowledge and participation" },
              { id: "b", text: "requires no governance or funding" },
              { id: "c", text: "is always too cheap to maintain" },
              { id: "d", text: "eliminates all hazards permanently" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Community participation", statement: "Effective management requires community involvement; top-down engineering without local engagement often fails." },
            ],
            steps: [
              { reasoning: "Without local engagement, warnings go unheeded and maintenance lapses.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Ignores local communities and participation",
            commonErrors: ["Assuming bigger structures alone guarantee safety."],
          },
        },
        {
          id: "geo-u3-mq16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Complete the following: (a) the number of stages in the integrated risk management cycle; (b) the number of sustainable measures named in the lesson.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cycle stages", answer: 6 },
              { label: "(b) Sustainable measures", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Management basics", statement: "Integrated cycle: six stages; sustainable measures: mangroves, wetlands, afforestation." },
            ],
            steps: [
              { reasoning: "Six stages: monitor, warn, prepare, mitigate, respond, recover.", working: "6", marks: 1, markCode: "A" },
              { reasoning: "Three sustainable measures are named.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6$ (b) $3$",
            commonErrors: ["Counting only the three mitigation strategies as the whole cycle."],
          },
        },
      ],
    },
  ],
};
