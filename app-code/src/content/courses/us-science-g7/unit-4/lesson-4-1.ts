import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "s7-u4-lesson-4-1",
  code: "4-1",
  title: "Capstone: Cells, Systems, and Ecosystems",
  goal: "I CAN connect cellular processes to organism-level systems and ecosystem-level energy flow.",
  standards: [
    "MS-LS1-5",
    "MS-LS2-1",
    "MS-LS2-3",
    "SEP: Constructing Explanations",
    "SEP: Developing and Using Models",
  ],
  vocabulary: [
    {
      term: "Homeostasis",
      definition:
        "The maintenance of stable internal conditions despite external changes.",
    },
    {
      term: "Feedback loop",
      definition:
        "A mechanism that responds to changes, either stabilizing (negative) or amplifying (positive).",
    },
    {
      term: "Metabolism",
      definition:
        "All chemical processes that occur in an organism to maintain life.",
    },
    {
      term: "Energy pyramid",
      definition:
        "A diagram showing energy transfer through trophic levels, decreasing at each level.",
    },
    {
      term: "Biomass",
      definition: "The total mass of living organisms at a trophic level.",
    },
    {
      term: "Nutrient cycling",
      definition:
        "The movement of elements like carbon and nitrogen through living and nonliving parts of an ecosystem.",
    },
    {
      term: "Symbiosis",
      definition: "Close, long-term interaction between different species.",
    },
    {
      term: "Biodiversity",
      definition:
        "The variety of life in an ecosystem — species richness and evenness.",
    },
  ],
  concepts: [
    {
      id: "s7-u4-homeostasis",
      title: "Homeostasis and body systems",
      skill:
        "Explain how feedback mechanisms maintain internal stability across body systems.",
      lesson: {
        sections: [
          {
            heading: "Homeostasis mechanisms",
            body: "Body systems maintain stable conditions through negative feedback: temperature regulation (sweating/shivering), blood glucose control (insulin/glucagon), blood pressure regulation. When a variable deviates from set point, the body responds to restore it.",
          },
          {
            heading: "System interdependence",
            body: "The digestive system provides nutrients for cellular respiration; the circulatory system transports them; the respiratory system supplies oxygen; the excretory system removes wastes. Each system depends on others — disruption cascades.",
          },
          {
            heading: "Cell to organism",
            body: "Cells perform specialized functions (muscle cells contract, nerve cells transmit, gland cells secrete). Tissues combine cells, organs combine tissues, systems combine organs — each level enables more complex functions.",
          },
        ],
        keyFormulas: [
          {
            name: "Negative feedback",
            statement: "Change → response → return to set point",
          },
          {
            name: "Energy flow",
            statement: "Sun → producers → consumers → decomposers",
          },
        ],
        workedExample: {
          problem:
            "Explain how sweating maintains homeostasis during exercise.",
          solution:
            "Exercise raises body temperature; sweat glands release sweat; evaporation cools skin; temperature returns toward normal.",
        },
      },
      questions: [
        {
          id: "s7-u4-homeostasis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is homeostasis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growth of an organism" },
              { id: "b", text: "Maintenance of stable internal conditions" },
              { id: "c", text: "Reproduction of cells" },
              { id: "d", text: "Movement of nutrients" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homeostasis",
                statement:
                  "Stable internal conditions despite external changes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Homeostasis = maintaining stable internal environment.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Stable internal conditions",
            commonErrors: ["Confusing with growth or reproduction."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s7-u4-homeostasis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how insulin helps maintain blood glucose homeostasis after a meal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Negative feedback",
                statement:
                  "High glucose → insulin → glucose stored → glucose drops.",
              },
              {
                kind: "principle",
                name: "Glucose regulation",
                statement: "Insulin lowers blood sugar.",
              },
            ],
            steps: [
              {
                reasoning: "After eating, blood glucose rises.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Pancreas releases insulin, signaling cells to absorb glucose.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Glucose drops back toward normal — negative feedback restores set point.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "High glucose → insulin → cells absorb glucose → glucose normalizes.",
            commonErrors: ["Not explaining the feedback loop mechanism."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "s7-u4-homeostasis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A person with diabetes cannot produce enough insulin. Explain two consequences for homeostasis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Feedback failure",
                statement: "Without insulin, glucose can't be regulated.",
              },
              {
                kind: "principle",
                name: "System cascade",
                statement: "One failure affects multiple systems.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Blood glucose stays elevated — cells can't absorb it properly.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Chronic high glucose damages blood vessels and organs.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Kidneys work harder to filter excess glucose — can lead to kidney damage.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Energy availability for cells is disrupted — affects all body systems.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Glucose stays high → organ damage → kidney stress → system-wide effects.",
            commonErrors: ["Only mentioning one consequence."],
            examinerNote: "R2, A2.",
          },
        },
        {
          id: "s7-u4-homeostasis-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analyze this scenario: An athlete exercises in hot weather for 2 hours.",
          parts: [
            {
              label: "a",
              prompt: "Identify two homeostatic challenges the body faces.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain how sweating addresses temperature regulation.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What happens if sweating can't keep up?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "How does the circulatory system support thermoregulation?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Homeostasis",
                statement: "Body maintains stable temperature and hydration.",
              },
              {
                kind: "principle",
                name: "System integration",
                statement: "Multiple systems work together.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Challenge 1: body temperature rises with exercise and heat.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Challenge 2: fluid loss through sweat can cause dehydration.",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Challenge 3: electrolyte imbalance from sweat loss.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Sweat evaporates from skin, carrying heat away — cooling effect.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Sweat glands activated by hypothalamus when temperature rises.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Evaporation is endothermic — absorbs heat from skin.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Body temperature continues rising → heat exhaustion or heat stroke.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Organs begin to fail; emergency cooling needed.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Blood vessels dilate near skin to release heat; blood flow redirected from core.",
                marks: 1,
                markCode: "B",
                part: "d",
              },
              {
                reasoning:
                  "Heart rate increases to maintain circulation despite vessel dilation.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) temp rise, dehydration, electrolytes (b) evaporation cools (c) heat stroke (d) vasodilation + heart rate.",
            commonErrors: ["Not connecting systems or explaining mechanism."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "s7-u4-ecosystems",
      title: "Energy flow and nutrient cycling",
      skill:
        "Trace energy and matter through ecosystems and explain the roles of different organisms.",
      lesson: {
        sections: [
          {
            heading: "Energy flow",
            body: "Energy enters ecosystems as sunlight, captured by producers (plants) via photosynthesis. Energy flows through trophic levels: producers → primary consumers → secondary consumers → decomposers. Only ~10% transfers between levels — most is lost as heat.",
          },
          {
            heading: "Nutrient cycling",
            body: "Unlike energy (flows through), nutrients cycle. Carbon: photosynthesis removes CO₂, respiration returns it. Nitrogen: bacteria fix atmospheric N₂ into usable forms, decomposition returns it. Phosphorus: rocks weather, organisms absorb, decomposers recycle.",
          },
          {
            heading: "Biodiversity and stability",
            body: "More diverse ecosystems are more stable — multiple species can fill similar roles, so loss of one has less impact. Monocultures are vulnerable to pests and disease. Biodiversity also provides resilience to environmental changes.",
          },
        ],
        keyFormulas: [
          {
            name: "Energy pyramid",
            statement: "~10% transfers between levels",
          },
          {
            name: "Nutrient cycle",
            statement: "Atoms are recycled; energy is not",
          },
        ],
        workedExample: {
          problem: "Why are there fewer eagles than rabbits in an ecosystem?",
          solution:
            "Eagles are higher trophic level — only ~10% of energy reaches them, so fewer can be supported.",
        },
      },
      questions: [
        {
          id: "s7-u4-ecosystems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What percentage of energy typically transfers between trophic levels?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$100\\%$" },
              { id: "b", text: "$50\\%$" },
              { id: "c", text: "$10\\%$" },
              { id: "d", text: "$1\\%$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy transfer",
                statement: "~10% efficiency between trophic levels.",
              },
            ],
            steps: [
              {
                reasoning: "Only about 10% of energy transfers to next level.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 10%",
            commonErrors: ["Thinking all energy transfers."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "s7-u4-ecosystems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between energy flow and nutrient cycling in an ecosystem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy flow",
                statement:
                  "Energy enters as sunlight, flows through, exits as heat.",
              },
              {
                kind: "principle",
                name: "Nutrient cycle",
                statement:
                  "Atoms are recycled through living and nonliving components.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Energy flows one direction: sun → producers → consumers → heat loss.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Nutrients cycle: same atoms are reused repeatedly.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Energy can't be recycled; nutrients can.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Energy flows through once; nutrients cycle repeatedly.",
            commonErrors: ["Treating them as the same process."],
            examinerNote: "B2, A1.",
          },
        },
        {
          id: "s7-u4-ecosystems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A farmer plants only corn on hundreds of acres. Explain two ecological risks of this monoculture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biodiversity",
                statement: "Low diversity = low resilience.",
              },
              {
                kind: "principle",
                name: "Pest vulnerability",
                statement: "Single species = single point of failure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pest outbreak can devastate entire crop — no genetic diversity to resist.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Disease spreads easily through uniform plants.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Soil nutrients deplete faster — same crop extracts same nutrients.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Reduced biodiversity affects pollinators and beneficial insects.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Pest/disease vulnerability, soil depletion, biodiversity loss.",
            commonErrors: ["Only mentioning one risk."],
            examinerNote: "R2, B1, A1.",
          },
        },
        {
          id: "s7-u4-ecosystems-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analyze this food chain: grass → grasshopper → frog → snake → hawk.",
          parts: [
            {
              label: "a",
              prompt: "Identify the trophic level of each organism.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "If grass captures 10,000 J of energy, how much reaches the hawk?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What happens if snakes are removed?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why decomposers are essential despite not being in the chain.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trophic levels",
                statement:
                  "Producer → primary → secondary → tertiary → quaternary consumer.",
              },
              {
                kind: "principle",
                name: "Energy transfer",
                statement: "~10% per level.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Grass=producer, grasshopper=primary consumer, frog=secondary, snake=tertiary, hawk=quaternary.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning: "All levels identified.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "$10,000 \\times 0.1^4 = 10,000 \\times 0.0001 = 1$ J.",
                working: "10000*0.0001",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: $1$ J.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Frog population increases (no predator), grasshopper decreases (more frogs), grass increases.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Decomposers break down dead matter, returning nutrients to soil for producers.",
                marks: 1,
                markCode: "B",
                part: "d",
              },
              {
                reasoning:
                  "Without them, nutrients would be locked in dead organisms — ecosystem would collapse.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) levels identified (b) 1 J (c) trophic cascade (d) nutrient recycling.",
            commonErrors: [
              "Wrong energy calculation; forgetting decomposers recycle nutrients.",
            ],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "s7-u4-atoms-chemistry",
      title: "Atoms, density, and chemical change",
      skill:
        "Connect atomic structure to physical properties and chemical reactions.",
      lesson: {
        sections: [
          {
            heading: "From atoms to properties",
            body: "Atoms combine to form molecules and compounds. The arrangement and bonding determine properties: ionic compounds form crystals, covalent molecules can be gases/liquids/solids. Density = mass/volume — depends on atomic packing.",
          },
          {
            heading: "Chemical reactions",
            body: "Atoms are rearranged, never created or destroyed (conservation of matter). Evidence: color change, gas production, temperature change, precipitate formation. Reactants → products with new properties.",
          },
          {
            heading: "Energy in reactions",
            body: "Exothermic reactions release energy (combustion, rusting). Endothermic absorb energy (photosynthesis, cold packs). Activation energy needed to start; catalysts lower it without being consumed.",
          },
        ],
        keyFormulas: [
          { name: "Density", statement: "$D = m/V$" },
          {
            name: "Conservation",
            statement: "Atoms rearranged, not created/destroyed",
          },
        ],
        workedExample: {
          problem:
            "A 50 cm³ object has mass 150 g. What is its density? Does it float in water (1 g/cm³)?",
          solution: "$D = 150/50 = 3$ g/cm³ — denser than water, sinks.",
        },
      },
      questions: [
        {
          id: "s7-u4-atoms-chemistry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is density?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass divided by volume" },
              { id: "b", text: "Volume divided by mass" },
              { id: "c", text: "Weight times volume" },
              { id: "d", text: "Mass times volume" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$D = m/V$." },
            ],
            steps: [
              {
                reasoning: "Density = mass / volume.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Mass/volume",
            commonErrors: ["Reversing formula."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "s7-u4-atoms-chemistry-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three pieces of evidence that a chemical reaction has occurred.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chemical change",
                statement: "New substance formed with different properties.",
              },
            ],
            steps: [
              { reasoning: "Color change.", marks: 1, markCode: "B" },
              {
                reasoning: "Gas production (bubbles).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Temperature change or precipitate formation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Color change, gas production, temperature change, precipitate.",
            commonErrors: ["Listing physical changes like dissolving."],
            examinerNote: "B2, A1.",
          },
        },
        {
          id: "s7-u4-atoms-chemistry-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why atoms aren't 'used up' in a chemical reaction, using conservation of matter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation of matter",
                statement: "Atoms rearranged, not created or destroyed.",
              },
              {
                kind: "principle",
                name: "Chemical reaction",
                statement: "Reactants → products via rearrangement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Atoms in reactants are the same atoms in products — just rearranged.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Number and type of atoms is conserved on both sides of equation.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "No atoms are created or destroyed — only bonds break and form.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Total mass is conserved — that's why equations must balance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Atoms rearrange but aren't consumed — conservation of matter.",
            commonErrors: ["Thinking atoms disappear."],
            examinerNote: "R2, B1, A1.",
          },
        },
        {
          id: "s7-u4-atoms-chemistry-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student measures density of three liquids: A=0.8 g/cm³, B=1.0 g/cm³, C=1.2 g/cm³. They mix equal volumes of A and B.",
          parts: [
            {
              label: "a",
              prompt: "Will the mixture float or sink in water?",
              marks: 2,
            },
            { label: "b", prompt: "Explain using density concepts.", marks: 3 },
            {
              label: "c",
              prompt: "If C is added to the mixture, what happens to density?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Design an experiment to separate the three liquids.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Density and buoyancy",
                statement: "Less dense floats on more dense.",
              },
              {
                kind: "principle",
                name: "Density mixing",
                statement: "Mixture density is weighted average.",
              },
            ],
            steps: [
              {
                reasoning: "Mixture of A and B: $(0.8 + 1.0)/2 = 0.9$ g/cm³.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "0.9 < 1.0 — floats in water.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Equal volumes mix → average density 0.9 g/cm³.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Less dense than water (1.0) → floats.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "C is denser — adding enough of it could push mixture density above 1.0 so it sinks.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Adding C increases density above 1.0 → sinks.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning: "Answer: sinks.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Use density differences: C sinks first (densest), A floats (least dense).",
                marks: 1,
                markCode: "B",
                part: "d",
              },
              {
                reasoning:
                  "Let settle — layers form by density; carefully pour off layers.",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning:
                  "Or use graduated cylinders to measure volumes for density calculations.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) floats (b) avg 0.9 < 1.0 (c) sinks (d) density layering separation.",
            commonErrors: ["Thinking mixing doesn't change density."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "s7-u4-earth-science",
      title: "Earth's systems and resources",
      skill:
        "Connect geological processes to weather, water cycles, and resource management.",
      lesson: {
        sections: [
          {
            heading: "Earth system interactions",
            body: "Geosphere (rocks, plates), hydrosphere (water), atmosphere (air), biosphere (life) — all interconnected. Plate movement drives mountain building, volcanoes, earthquakes. Water cycle connects atmosphere, oceans, land. Weather affects ecosystems and resources.",
          },
          {
            heading: "Water and weather",
            body: "Water cycle: evaporation → condensation → precipitation → runoff/infiltration. Weather patterns driven by solar heating, Coriolis effect, pressure systems. Climate = long-term weather patterns; climate change = shifts in these patterns.",
          },
          {
            heading: "Resource management",
            body: "Renewable resources (solar, wind, water) replenish naturally. Non-renewable (fossil fuels, minerals) deplete. Sustainable use balances current needs with future availability. Pollution affects all Earth systems — air, water, soil, and life.",
          },
        ],
        keyFormulas: [
          {
            name: "Water cycle",
            statement: "Evaporation → condensation → precipitation → runoff",
          },
          { name: "Resource types", statement: "Renewable vs non-renewable" },
        ],
        workedExample: {
          problem: "How does plate tectonics affect weather and resources?",
          solution:
            "Plate movement creates mountains affecting rainfall patterns; volcanic activity creates mineral deposits; earthquakes affect infrastructure.",
        },
      },
      questions: [
        {
          id: "s7-u4-earth-science-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What drives the water cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wind only" },
              { id: "b", text: "Solar energy" },
              { id: "c", text: "Gravity only" },
              { id: "d", text: "Moon's gravity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Water cycle",
                statement: "Solar energy drives evaporation.",
              },
            ],
            steps: [
              {
                reasoning: "Sun's energy evaporates water, driving the cycle.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Solar energy",
            commonErrors: ["Thinking wind or gravity drives it."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s7-u4-earth-science-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a volcanic eruption affects multiple Earth systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Earth systems",
                statement:
                  "Geosphere affects atmosphere, hydrosphere, biosphere.",
              },
              {
                kind: "principle",
                name: "Interconnection",
                statement: "Changes cascade through systems.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Geosphere: lava flows, new rock forms, landscape changes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Atmosphere: ash and gases injected, affecting air quality and climate.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Biosphere: plants/animals killed or displaced; soil fertilized by ash.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Affects geosphere (landscape), atmosphere (ash/gases), biosphere (life).",
            commonErrors: ["Only mentioning one system."],
            examinerNote: "B2, A1.",
          },
        },
        {
          id: "s7-u4-earth-science-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare renewable and non-renewable resources. Give two examples of each and explain sustainability implications.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Renewable",
                statement: "Replenishes naturally on human timescales.",
              },
              {
                kind: "definition",
                name: "Non-renewable",
                statement: "Depletes faster than it forms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Renewable: solar, wind, water — replenish naturally.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Non-renewable: fossil fuels, minerals — deplete permanently.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Renewables are sustainable long-term; non-renewables will run out.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Transitioning to renewables reduces depletion and pollution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Renewable=replenish (solar/wind); non-renewable=deplete (fossil fuels/minerals).",
            commonErrors: ["Confusing the categories."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "s7-u4-earth-science-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A coastal city faces rising sea levels from climate change.",
          parts: [
            {
              label: "a",
              prompt: "Explain two ways climate change causes sea level rise.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Describe two impacts on the city's infrastructure.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest two adaptation strategies.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain how this illustrates Earth system interconnection.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate change",
                statement: "Warming causes thermal expansion and ice melt.",
              },
              {
                kind: "principle",
                name: "Earth systems",
                statement: "Atmosphere affects hydrosphere affects geosphere.",
              },
            ],
            steps: [
              {
                reasoning: "Thermal expansion: warmer water takes more space.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Ice melt: glaciers and ice sheets add water to oceans.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning: "Both increase ocean volume → sea level rise.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Impact 1: flooding damages roads, buildings, utilities.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Impact 2: saltwater intrusion contaminates freshwater supplies.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Or: erosion destroys coastlines and habitats.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Adaptation 1: build sea walls, elevate structures.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning: "Adaptation 2: restore wetlands as natural buffers.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Atmospheric CO₂ → warming → ocean expansion → coastal flooding — systems connected.",
                marks: 1,
                markCode: "B",
                part: "d",
              },
              {
                reasoning:
                  "Human activities (emissions) drive changes across all Earth systems.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) thermal expansion + ice melt (b) flooding + saltwater (c) sea walls + wetlands (d) atmosphere→ocean→land.",
            commonErrors: ["Only mentioning one cause or impact."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
