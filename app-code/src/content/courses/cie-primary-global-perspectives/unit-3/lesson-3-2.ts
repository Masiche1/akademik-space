import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cipgp-u3-lesson-3-2",
  code: "3-2",
  title: "Health and Wellbeing Around the World",
  goal: "I CAN explore global health issues and factors affecting wellbeing.",
  standards: [
    "Cambridge Primary Global Perspectives 0838",
    "Unit 3: global health",
  ],
  vocabulary: [
    { term: "Wellbeing", definition: "State of being healthy and content." },
    { term: "Healthcare access", definition: "Ability to get medical help." },
    {
      term: "Public health",
      definition: "Health of communities, disease prevention.",
    },
    {
      term: "Vaccination",
      definition: "Protection against diseases via injection.",
    },
    {
      term: "Health inequality",
      definition: "Differences in health between groups.",
    },
    { term: "Determinants of health", definition: "Factors affecting health." },
  ],
  concepts: [
    {
      id: "cipgp-u3l2-c1-health-inequality",
      title: "Health inequalities around the world",
      skill: "Explain health inequalities and their causes.",
      lesson: {
        sections: [
          {
            heading: "Health inequalities",
            body: "People in different countries have very different health outcomes — life expectancy varies by decades between rich and poor countries. **Causes**: poverty (can't afford healthcare, good food), lack of clean water/sanitation, limited access to doctors/vaccines, conflict disrupting services, malnutrition.",
          },
          {
            heading: "Factors affecting health",
            body: "**Determinants of health**: income/wealth, education, housing, clean water, nutrition, healthcare access, environment. Not just medical care — social and economic factors matter hugely. Someone in poverty faces more health risks than wealthy person even with same healthcare.",
          },
        ],
        keyFormulas: [
          { name: "Health inequality", statement: "Health differences" },
          { name: "Life expectancy", statement: "Years lived" },
          { name: "Determinants", statement: "Health factors" },
        ],
        workedExample: {
          problem:
            "Why might a child in a poor country have worse health than a rich country child?",
          solution:
            "Poor family can't afford healthcare, clean water may be contaminated, nutrition limited, mother may lack education about health — multiple disadvantages compound.",
        },
      },
      questions: [
        {
          id: "cipgp-q-u3l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Health inequality' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only rich get sick" },
              { id: "b", text: "Everyone equal" },
              { id: "c", text: "Different health outcomes between groups" },
              { id: "d", text: "Healthcare free" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Health inequality",
                statement: "Differences.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Health differences",
            commonErrors: ["Equal health."],
          },
        },
        {
          id: "cipgp-q-u3l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'life expectancy'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Life expectancy",
                statement: "Years.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Average number of years a person is expected to live — varies hugely between countries (70s in poor countries vs 80s in rich); good indicator of overall health.",
            commonErrors: ["Age now."],
          },
        },
        {
          id: "cipgp-q-u3l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two causes of health inequalities between countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Health causes",
                statement: "Poverty + access.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. poverty (can't afford healthcare, good food, clean water) and limited healthcare access (few doctors, no vaccines) — also poor sanitation, malnutrition, conflict.",
            commonErrors: ["No causes."],
          },
        },
        {
          id: "cipgp-q-u3l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how poverty affects health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poverty-health",
                statement: "Multiple pathways.",
              },
            ],
            steps: [
              { reasoning: "Pathway 1.", marks: 1, markCode: "M" },
              { reasoning: "Pathway 2.", marks: 1, markCode: "M" },
              { reasoning: "Pathway 3.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Can't afford healthcare/medicine, poor nutrition (can't buy healthy food), inadequate housing (overcrowded, damp), stress of poverty itself — multiple factors compound to worsen health.",
            commonErrors: ["Only no doctors."],
          },
        },
        {
          id: "cipgp-q-u3l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether health is primarily a medical or social issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Medical vs social",
                statement: "Both.",
              },
            ],
            steps: [
              { reasoning: "Medical role.", marks: 1, markCode: "M" },
              { reasoning: "Social role.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Both essential — medical care treats illness, but social factors (income, housing, education) determine health more; 'social determinants of health' show poverty predicts health better than healthcare access alone.",
            commonErrors: ["Only medical."],
          },
        },
        {
          id: "cipgp-q-u3l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are 'determinants of health'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Determinants",
                statement: "Health factors.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Factors that influence health — income, education, housing, nutrition, water quality, healthcare access, environment; broader than just medical care.",
            commonErrors: ["Only doctors."],
          },
        },
        {
          id: "cipgp-q-u3l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "People in poorer countries generally have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher life expectancy" },
              { id: "b", text: "Same life expectancy" },
              { id: "c", text: "Lower life expectancy" },
              { id: "d", text: "No health issues" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Life expectancy",
                statement: "Lower in poor.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Lower",
            commonErrors: ["Higher."],
          },
        },
        {
          id: "cipgp-q-u3l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways lack of clean water affects health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Water-health", statement: "Disease." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. waterborne diseases (cholera, typhoid from contaminated water) and poor hygiene (can't wash hands properly) — dirty water causes millions of deaths yearly, mostly children.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cipgp-q-u3l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'preventive healthcare' is important.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prevention",
                statement: "Better than cure.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Stopping illness before it starts — vaccinations, clean water, healthy eating, exercise; cheaper and more effective than treating illness after it occurs; saves lives and resources.",
            commonErrors: ["Only treatment."],
          },
        },
        {
          id: "cipgp-q-u3l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether money or medicine is more important for improving health in poor countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Money vs medicine",
                statement: "Both needed.",
              },
            ],
            steps: [
              { reasoning: "Medicine role.", marks: 1, markCode: "M" },
              { reasoning: "Money role.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Medicine treats illness but can't fix causes — poverty, poor sanitation, malnutrition drive disease; money enables healthcare, clean water, nutrition, education; both needed — 'medicine without money' can't reach those who need it.",
            commonErrors: ["One sufficient."],
          },
        },
        {
          id: "cipgp-q-u3l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Life expectancy' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of doctors" },
              { id: "b", text: "The average number of years people are expected to live" },
              { id: "c", text: "How long hospitals are open" },
              { id: "d", text: "The age of the oldest person" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Life expectancy",
                statement: "Average years.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Average years lived",
            commonErrors: ["Maximum age."],
          },
        },
        {
          id: "cipgp-q-u3l2c1-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is NOT a determinant of health?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Access to clean water" },
              { id: "b", text: "Quality of housing" },
              { id: "c", text: "The colour of your shoes" },
              { id: "d", text: "Income and wealth" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Determinants",
                statement: "Health factors.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Shoe colour",
            commonErrors: ["A real factor."],
          },
        },
        {
          id: "cipgp-q-u3l2c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Poor sanitation and dirty water mainly cause:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Better eyesight" },
              { id: "b", text: "Stronger muscles" },
              { id: "c", text: "Longer holidays" },
              { id: "d", text: "Waterborne diseases like cholera" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Sanitation", statement: "Disease risk." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Waterborne disease",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cipgp-q-u3l2c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a mother's education can affect her child's health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Education-health",
                statement: "Knowledge pathway.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Educated mothers know about nutrition, hygiene, vaccination and when to seek medical care — more likely to give children clean water, healthy food and healthcare; education is a powerful health determinant.",
            commonErrors: ["No link."],
          },
        },
        {
          id: "cipgp-q-u3l2c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways conflict can worsen health inequalities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Conflict-health",
                statement: "Disruption.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. hospitals are damaged and health workers flee or are killed, and vaccination programmes are interrupted so diseases spread — displaced people lose access to care; conflict hits the poorest hardest.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cipgp-q-u3l2c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether better healthcare alone can reduce health inequalities between countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Healthcare alone",
                statement: "Not sufficient.",
              },
            ],
            steps: [
              { reasoning: "Healthcare role.", marks: 1, markCode: "M" },
              { reasoning: "Other factors.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Better healthcare treats illness but can't fix root causes — poverty, poor sanitation, malnutrition and lack of education drive health gaps; determinants of health show social factors matter as much as medicine; need combined approach.",
            commonErrors: ["Healthcare enough."],
          },
        },
      ],
    },
    {
      id: "cipgp-u3l2-c2-global-health",
      title: "Global health challenges and cooperation",
      skill: "Analyse global health issues and international responses.",
      lesson: {
        sections: [
          {
            heading: "Major health challenges",
            body: "**Infectious diseases**: malaria, TB, HIV/AIDS — preventable/treatable but still kill millions. **Non-communicable**: heart disease, diabetes, cancer — rising with lifestyle changes. **Maternal/child health**: pregnancy risks, childhood diseases. **Mental health**: often neglected, rising globally. **Antimicrobial resistance**: bacteria becoming resistant to antibiotics — growing threat.",
          },
          {
            heading: "Global health cooperation",
            body: "**WHO** (World Health Organization): coordinates global health efforts, sets standards. **Vaccination programmes**: polio nearly eradicated, COVID-19 vaccines developed quickly. **NGOs**: Doctors Without Borders, Red Cross provide care in crises. Challenges: vaccine inequality (rich countries got COVID vaccines first), funding gaps, weak health systems.",
          },
        ],
        keyFormulas: [
          { name: "WHO", statement: "Global health body" },
          { name: "Malaria", statement: "Preventable disease" },
          { name: "AMR", statement: "Drug resistance" },
        ],
        workedExample: {
          problem: "Why did COVID-19 vaccines reach rich countries first?",
          solution:
            "Rich countries bought vaccines early, funded development; poor countries waited — 'vaccine nationalism'; COVAX tried to ensure fair distribution but supply issues meant inequality persisted.",
        },
      },
      questions: [
        {
          id: "cipgp-q-u3l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "WHO stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Western Health Org" },
              { id: "b", text: "Wealth Health Office" },
              { id: "c", text: "World Health Organization" },
              { id: "d", text: "World Habitat Organisation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "WHO", statement: "Health body." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** World Health Organization",
            commonErrors: ["Wrong expansion."],
          },
        },
        {
          id: "cipgp-q-u3l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'antimicrobial resistance' (AMR)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "AMR",
                statement: "Drug resistance.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Risk.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Bacteria/viruses becoming resistant to medicines (antibiotics) — infections become untreatable; caused by overuse of antibiotics; major future health threat.",
            commonErrors: ["Stronger drugs."],
          },
        },
        {
          id: "cipgp-q-u3l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of preventable infectious diseases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Preventable diseases",
                statement: "Vaccines exist.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. polio (nearly eradicated by vaccines) and measles (preventable by MMR vaccine) — also malaria (preventable by nets, treatment), COVID-19 (vaccines).",
            commonErrors: ["No prevention."],
          },
        },
        {
          id: "cipgp-q-u3l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why vaccine inequality is a global health problem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vaccine inequality",
                statement: "Rich first.",
              },
            ],
            steps: [
              { reasoning: "Issue.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "M" },
              { reasoning: "Solution.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rich countries bought COVID vaccines first — poor countries waited; disease spreads globally, variants emerge; COVAX aimed for fair access but supply limited; health security requires global cooperation not nationalism.",
            commonErrors: ["Each country's problem."],
          },
        },
        {
          id: "cipgp-q-u3l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the role of NGOs versus governments in global health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NGO vs gov",
                statement: "Complementary.",
              },
            ],
            steps: [
              { reasoning: "NGO role.", marks: 1, markCode: "M" },
              { reasoning: "Gov role.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "NGOs: flexible, reach crisis areas, specialised expertise (MSF) — but limited scale, funding dependent. Governments: resources, infrastructure, policy — but slow, political constraints; best results combine both.",
            commonErrors: ["One replaces other."],
          },
        },
        {
          id: "cipgp-q-u3l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does COVAX stand for?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "COVAX", statement: "Vaccine initiative." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "COVID-19 Vaccines Global Access — initiative to ensure fair vaccine distribution to all countries, not just rich ones; aimed to prevent 'vaccine nationalism'.",
            commonErrors: ["Vaccine name."],
          },
        },
        {
          id: "cipgp-q-u3l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organisation coordinates global health efforts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Red Cross only" },
              { id: "b", text: "WHO" },
              { id: "c", text: "UNICEF only" },
              { id: "d", text: "WTO" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "WHO", statement: "Global health." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** WHO",
            commonErrors: ["Other org."],
          },
        },
        {
          id: "cipgp-q-u3l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why mental health is a global issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Mental health", statement: "Neglected." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. stigma prevents people seeking help (especially in some cultures), and mental illness affects productivity, relationships, physical health — rising globally but underfunded/neglected.",
            commonErrors: ["Not an issue."],
          },
        },
        {
          id: "cipgp-q-u3l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how conflict affects health systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conflict-health",
                statement: "Disruption.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "War damages hospitals, kills health workers, displaces people, interrupts vaccination programmes — diseases spread, maternal/child health worsens; conflict zones face health crises beyond battlefield injuries.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cipgp-q-u3l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether eradicating diseases like polio is achievable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Eradication",
                statement: "Possible but hard.",
              },
            ],
            steps: [
              { reasoning: "Progress.", marks: 1, markCode: "M" },
              { reasoning: "Barriers.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Smallpox eradicated (1980), polio nearly — proves possible with vaccines, funding, political will; but hard-to-reach areas, vaccine hesitancy, funding gaps slow progress; achievable with sustained commitment.",
            commonErrors: ["Impossible."],
          },
        },
        {
          id: "cipgp-q-u3l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Malaria is spread to humans mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Drinking milk" },
              { id: "b", text: "Reading books" },
              { id: "c", text: "Infected mosquito bites" },
              { id: "d", text: "Cold weather" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Malaria", statement: "Mosquito-borne." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Mosquito bites",
            commonErrors: ["Wrong cause."],
          },
        },
        {
          id: "cipgp-q-u3l2c2-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which disease has been nearly eradicated through vaccination?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Headache" },
              { id: "b", text: "Common cold" },
              { id: "c", text: "Polio" },
              { id: "d", text: "Broken leg" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Polio", statement: "Near eradication." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Polio",
            commonErrors: ["Not vaccine-preventable."],
          },
        },
        {
          id: "cipgp-q-u3l2c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a non-communicable disease?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Malaria" },
              { id: "b", text: "Influenza" },
              { id: "c", text: "Measles" },
              { id: "d", text: "Heart disease" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "NCD",
                statement: "Not spread person-to-person.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Heart disease",
            commonErrors: ["Infectious disease."],
          },
        },
        {
          id: "cipgp-q-u3l2c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how vaccination programmes benefit global health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vaccination",
                statement: "Prevention at scale.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Vaccines prevent illness before it starts — polio nearly eradicated, smallpox eliminated completely; mass programmes protect whole populations cheaply; vaccination is one of the most cost-effective health interventions.",
            commonErrors: ["Only treatment."],
          },
        },
        {
          id: "cipgp-q-u3l2c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two challenges to global health cooperation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Cooperation barriers",
                statement: "Funding + politics.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. unequal funding — rich countries may prioritise own needs (vaccine nationalism during COVID-19), and weak health systems in poor countries can't deliver programmes — also political instability and conflict disrupt cooperation.",
            commonErrors: ["Easy cooperation."],
          },
        },
        {
          id: "cipgp-q-u3l2c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether rich countries should prioritise their own health systems over helping poorer countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aid priority",
                statement: "Duty vs resources.",
              },
            ],
            steps: [
              { reasoning: "Case for own first.", marks: 1, markCode: "M" },
              { reasoning: "Case for sharing.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Own systems: taxpayers expect care at home, rich countries have own challenges too. Sharing: diseases spread globally, health security requires cooperation, rich countries have more resources — balanced approach: fund own systems adequately while contributing to global programmes like COVAX.",
            commonErrors: ["Only one side."],
          },
        },
      ],
    },
  ],
};
