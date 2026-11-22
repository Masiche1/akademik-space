import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ciealegeo-u7-lesson-7-2",
  code: "7-2",
  title: "Synoptic Themes: Place, Environment and Development",
  goal: "I CAN synthesise knowledge across topics to analyse place, environment and development interconnections.",
  standards: ["Cambridge A Level Geography 9696", "Unit 7: synoptic skills"],
  vocabulary: [
    {
      term: "Place",
      definition: "Location with meaning, identity and character.",
    },
    { term: "Sense of place", definition: "Emotional attachment to a place." },
    {
      term: "Environmental determinism",
      definition: "Environment determines society.",
    },
    { term: "Possibilism", definition: "Humans adapt to environment." },
    {
      term: "Sustainable development",
      definition: "Meeting needs without compromising future.",
    },
    {
      term: "Development gap",
      definition: "Inequality between rich and poor.",
    },
  ],
  concepts: [
    {
      id: "ciealegeo-u7l2-c1-place",
      title: "Place and environmental relationships",
      skill: "Analyse how environment shapes and is shaped by human activity.",
      lesson: {
        sections: [
          {
            heading: "Place and environment",
            body: "**Place** = location + meaning + identity. **Environmental determinism** (environment dictates society — largely rejected) vs **possibilism** (humans adapt environment — technology, culture modify). Reality: interaction — environment constrains but doesn't determine; human activity transforms environments.",
          },
          {
            heading: "Human-environment interaction",
            body: "**Resource extraction** → landscapes transformed (mining, deforestation). **Pollution** → environmental degradation. **Conservation** → protection efforts. **Climate change** → places vulnerable differently. **Place identity**: attachment, meaning, change — e.g. industrial towns losing identity through deindustrialisation.",
          },
        ],
        keyFormulas: [
          { name: "Place", statement: "Location + meaning + identity" },
          { name: "Determinism", statement: "Environment dictates" },
          { name: "Possibilism", statement: "Humans adapt" },
        ],
        workedExample: {
          problem: "How does deindustrialisation change a place's identity?",
          solution:
            "Factory closures → job losses, population decline, derelict buildings → loss of 'working-class' identity → regeneration attempts (culture, tourism) try to rebuild sense of place.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u7l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Place' in geography includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Location, meaning and identity" },
              { id: "b", text: "Only climate" },
              { id: "c", text: "Only coordinates" },
              { id: "d", text: "Only population" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Place",
                statement: "Location+meaning+identity.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Three elements",
            commonErrors: ["Location only."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish environmental determinism from possibilism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Env theories",
                statement: "Dictates vs adapts.",
              },
            ],
            steps: [
              { reasoning: "Determinism defined.", marks: 1, markCode: "M" },
              { reasoning: "Possibilism defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Determinism: environment dictates human activity (rejected). Possibilism: humans adapt/modify environment through technology/culture — more accepted.",
            commonErrors: ["Same theory."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'sense of place' with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sense of place",
                statement: "Attachment.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Emotional attachment to place — e.g. residents' pride in local heritage, football club, traditional market; shapes identity, resistance to change, community cohesion.",
            commonErrors: ["Location only."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse how human activity transforms environments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Env transformation",
                statement: "Resource use + pollution.",
              },
            ],
            steps: [
              { reasoning: "Extraction.", marks: 1, markCode: "M" },
              { reasoning: "Pollution.", marks: 1, markCode: "M" },
              { reasoning: "Restoration.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Resource extraction reshapes landscapes (mines, deforestation); pollution degrades; conservation/restoration attempts repair — environments are human-made, not 'natural' pristine.",
            commonErrors: ["Environment static."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the 'nature-culture' divide in geographical thinking.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nature-culture",
                statement: "Interconnected.",
              },
            ],
            steps: [
              { reasoning: "Divide argument.", marks: 1, markCode: "M" },
              { reasoning: "Interconnection.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Nature and culture inseparable — landscapes are cultural products (fields, cities), environments shape culture; 'pristine nature' largely myth — all environments human-influenced.",
            commonErrors: ["Separate spheres."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'landscape identity'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Landscape identity",
                statement: "Visual character.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Factors.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Distinctive visual character of a place — combination of natural features (topography, vegetation) and human elements (buildings, land use) creating recognisable identity.",
          },
        },
        {
          id: "ciealegeo-q-u7l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Possibilism suggests humans:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cannot change environment" },
              { id: "b", text: "Ignore environment" },
              { id: "c", text: "Can adapt to and modify environment" },
              { id: "d", text: "Are controlled by environment" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Possibilism", statement: "Adapt." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Adapt",
            commonErrors: ["Determinism."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways places respond to environmental challenges.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Place responses",
                statement: "Adapt, mitigate.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. sea walls/flood defences (mitigation) and managed retreat/relocation (adaptation) — also insurance, early warning, land-use planning.",
            commonErrors: ["Only one."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'place identity' be threatened by globalisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Identity threat",
                statement: "Homogenisation.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Response.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Global brands, chains, media → places look alike → local distinctiveness eroded; response: heritage protection, local branding, cultural events preserving uniqueness.",
            commonErrors: ["No threat."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how 'sense of place' affects environmental decision-making.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Place attachment",
                statement: "Affects choices.",
              },
            ],
            steps: [
              { reasoning: "Positive effects.", marks: 1, markCode: "M" },
              { reasoning: "Negative effects.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Attachment can motivate conservation (protect beloved places) but also resistance to change (oppose development) — emotional bonds shape environmental politics and outcomes.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Sense of place' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grid coordinates" },
              { id: "b", text: "Emotional attachment to a place" },
              { id: "c", text: "Population density" },
              { id: "d", text: "Climate type" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sense of place",
                statement: "Attachment.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Emotional attachment",
            commonErrors: ["Location confused."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how deindustrialisation can alter a place's identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deindustrialisation",
                statement: "Identity loss.",
              },
            ],
            steps: [
              { reasoning: "Process.", marks: 1, markCode: "M" },
              { reasoning: "Identity impacts.", marks: 1, markCode: "M" },
              { reasoning: "Response.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Factory closures → job losses, out-migration, dereliction → 'working-class' identity weakened; regeneration via culture, tourism or new industries attempts to rebuild sense of place.",
            commonErrors: ["Only economic effects."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Environmental determinism argues that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Humans freely shape the environment" },
              { id: "b", text: "Technology controls all outcomes" },
              { id: "c", text: "Culture is irrelevant to places" },
              { id: "d", text: "The environment dictates human activity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Determinism",
                statement: "Environment dictates.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Environment dictates",
            commonErrors: ["Possibilism confused."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse how conservation efforts can strengthen a place's identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation",
                statement: "Heritage + pride.",
              },
            ],
            steps: [
              { reasoning: "What is conserved.", marks: 1, markCode: "M" },
              { reasoning: "Identity mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Community role.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Protecting buildings, landscapes or traditions preserves distinctive character → residents gain pride and continuity → sense of place reinforced and marketed (heritage tourism), though can also freeze places or exclude change.",
            commonErrors: ["Only environmental benefit."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c1-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that globalisation inevitably destroys local place identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation & place",
                statement: "Homogenisation vs resistance.",
              },
            ],
            steps: [
              { reasoning: "Supporting evidence.", marks: 1, markCode: "M" },
              { reasoning: "Counter-evidence.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Global brands and media can homogenise places, but local identities also resist and adapt — heritage branding, festivals and distinctiveness can thrive; 'inevitable' is too strong, outcome depends on local agency and context.",
            commonErrors: ["Deterministic claim accepted."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c1-16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of human modification of the environment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Afforestation" },
              { id: "b", text: "Volcanic eruption" },
              { id: "c", text: "Tectonic uplift" },
              { id: "d", text: "Earthquake" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Human modification",
                statement: "Deliberate change.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Afforestation",
            commonErrors: ["Natural process chosen."],
          },
        },
      ],
    },
    {
      id: "ciealegeo-u7l2-c2-development",
      title: "Development, sustainability and global connections",
      skill:
        "Synthesise development theory with contemporary sustainability challenges.",
      lesson: {
        sections: [
          {
            heading: "Development and sustainability",
            body: "**Development gap**: inequality between countries/regions. **Sustainable development**: meet needs without compromising future (Brundtland). **SDGs**: 17 goals linking poverty, environment, inequality. **Tensions**: economic growth vs environmental limits; development vs sustainability.",
          },
          {
            heading: "Global connections",
            body: "**Interdependence**: countries rely on each other (trade, aid, migration, climate). **Climate justice**: poor countries least responsible but most vulnerable. **Global commons**: atmosphere, oceans — shared resources needing collective action. **Local-global**: local actions (recycling) connect to global outcomes (emissions).",
          },
        ],
        keyFormulas: [
          { name: "Development gap", statement: "Inequality between places" },
          { name: "SDGs", statement: "17 integrated goals" },
          { name: "Climate justice", statement: "Unequal vulnerability" },
        ],
        workedExample: {
          problem: "Why is climate change a 'development' issue?",
          solution:
            "Poor countries least responsible but most vulnerable (coastal, agriculture-dependent) — climate change threatens development gains, widens development gap, requires global cooperation.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u7l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'development gap' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Urban-rural divide" },
              { id: "b", text: "Inequality between rich and poor countries" },
              { id: "c", text: "Gender gap" },
              { id: "d", text: "Income within one country" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dev gap",
                statement: "Between countries.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Between countries",
            commonErrors: ["Within country."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the SDGs?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "SDGs", statement: "17 goals." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Integration.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "17 Sustainable Development Goals (2015-2030) — integrate poverty, health, education, environment, inequality — recognise goals interdependent.",
            commonErrors: ["Single goal."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'climate justice' with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate justice",
                statement: "Unequal burden.",
              },
            ],
            steps: [
              { reasoning: "Concept.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Poor countries least responsible for emissions but most vulnerable — e.g. small island states face inundation; demands differentiated responsibility, compensation, technology transfer.",
            commonErrors: ["Equal responsibility."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the tension between economic growth and environmental sustainability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth vs environment",
                statement: "Trade-off.",
              },
            ],
            steps: [
              { reasoning: "Growth benefits.", marks: 1, markCode: "M" },
              { reasoning: "Environmental costs.", marks: 1, markCode: "M" },
              {
                reasoning: "Possible reconciliation.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Growth improves living standards but consumes resources/emits pollutants — 'decoupling' (efficiency, renewables) may allow green growth; absolute decoupling still debated.",
            commonErrors: ["No tension."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'global commons' problems and solutions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global commons",
                statement: "Tragedy of commons.",
              },
            ],
            steps: [
              { reasoning: "Problem.", marks: 1, markCode: "M" },
              { reasoning: "Solutions.", marks: 1, markCode: "M" },
              { reasoning: "Challenges.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Shared resources (atmosphere, oceans) overexploited — solutions: international agreements (Paris), property rights, incentives — but enforcement/free-riding challenges persist.",
            commonErrors: ["No solutions."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'tragedy of the commons'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tragedy",
                statement: "Overexploitation.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Shared resources overexploited because individuals gain from use but costs shared — e.g. overfishing, emissions — leads to resource depletion.",
            commonErrors: ["Private property."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The SDGs aim to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only promote growth" },
              { id: "b", text: "Only protect environment" },
              {
                id: "c",
                text: "Integrate economic, social and environmental goals",
              },
              { id: "d", text: "Only reduce poverty" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "SDGs", statement: "Integrated." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Integrated",
            commonErrors: ["Single focus."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of 'global commons'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Commons", statement: "Shared resources." },
            ],
            steps: [
              { reasoning: "Two named.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. atmosphere (carbon sink) and oceans (fisheries, biodiversity) — shared, non-excludable, vulnerable to overexploitation.",
            commonErrors: ["Private resources."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is 'interdependence' important in geography?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interdependence",
                statement: "Connected.",
              },
            ],
            steps: [
              { reasoning: "Concept.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Countries/places rely on each other (trade, aid, migration, climate impacts) — local events have global consequences; isolation impossible in interconnected world.",
            commonErrors: ["Independent."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether 'sustainable development' is achievable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Achievability",
                statement: "Debated.",
              },
            ],
            steps: [
              { reasoning: "Optimistic case.", marks: 1, markCode: "M" },
              { reasoning: "Pessimistic case.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Technological progress + policy + behaviour change could achieve it, but requires unprecedented global cooperation, equity, and overcoming growth-environment tensions — uncertain but not impossible.",
            commonErrors: ["Impossible/guaranteed."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Climate justice' recognises that:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Vulnerable countries bear an unequal burden",
              },
              { id: "b", text: "Rich countries are most vulnerable" },
              { id: "c", text: "All countries are equally responsible" },
              { id: "d", text: "Emissions are shared equally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climate justice",
                statement: "Unequal burden.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Unequal burden",
            commonErrors: ["Equal responsibility assumed."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the SDGs link development and the environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "SDGs",
                statement: "Integrated goals.",
              },
            ],
            steps: [
              { reasoning: "Integration concept.", marks: 1, markCode: "M" },
              { reasoning: "Example link.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "SDGs treat social, economic and environmental goals as interdependent — e.g. clean water (SDG 6), climate action (SDG 13) and reduced inequalities (SDG 10) reinforce each other; progress on one supports others.",
            commonErrors: ["Separate goals."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of a 'global commons'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Company-owned land" },
              { id: "b", text: "A household water supply" },
              { id: "c", text: "Private farmland" },
              { id: "d", text: "The atmosphere" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Global commons",
                statement: "Shared resources.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** The atmosphere",
            commonErrors: ["Private resource chosen."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse how interdependence affects responses to climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interdependence",
                statement: "Shared fate.",
              },
            ],
            steps: [
              { reasoning: "Shared impacts.", marks: 1, markCode: "M" },
              { reasoning: "Cooperation need.", marks: 1, markCode: "M" },
              { reasoning: "Conflict/free-riding.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Emissions and impacts cross borders → no country can solve alone → international agreements needed; but differing responsibilities and free-riding temptations complicate cooperation, making climate action a test of interdependence.",
            commonErrors: ["National solutions suffice."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether economic growth and environmental protection must conflict.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth vs protection",
                statement: "Trade-off debated.",
              },
            ],
            steps: [
              { reasoning: "Conflict case.", marks: 1, markCode: "M" },
              { reasoning: "Compatibility case.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Growth often consumes resources and emits pollutants (conflict), but green growth, efficiency and renewables suggest compatibility; evidence shows context matters — absolute decoupling remains contested, so conflict is likely under current models but not inevitable.",
            commonErrors: ["Assumed inevitable."],
          },
        },
        {
          id: "ciealegeo-q-u7l2c2-16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'tragedy of the commons' occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resources are conserved" },
              { id: "b", text: "Resources are privatised" },
              { id: "c", text: "Shared resources are overexploited" },
              { id: "d", text: "Population declines" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tragedy",
                statement: "Overexploitation.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Shared resources overexploited",
            commonErrors: ["Privatisation confused."],
          },
        },
      ],
    },
  ],
};
