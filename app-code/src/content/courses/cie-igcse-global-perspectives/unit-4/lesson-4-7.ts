import type { Lesson } from "../../../types.ts";

export const lesson47: Lesson = {
  id: "ciegp-u4-lesson-4-7",
  code: "4-7",
  title: "Governance, Corruption, Education and Health",
  goal: "I CAN analyse governance failures, corruption, education and global health issues for IGCSE GP.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457",
    "Unit 4: global issues",
  ],
  vocabulary: [
    {
      term: "Good governance",
      definition:
        "Transparent, accountable, participatory and effective institutions.",
    },
    {
      term: "Corruption",
      definition: "Abuse of entrusted power for private gain.",
    },
    {
      term: "Transparency",
      definition: "Openness about decisions, budgets and processes.",
    },
    {
      term: "Human capital",
      definition: "Skills, knowledge and health of a population.",
    },
    {
      term: "Universal health coverage",
      definition:
        "All people accessing needed health services without financial hardship.",
    },
    {
      term: "Accountability",
      definition: "Being answerable for actions and decisions.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u4l7-c1-governance",
      title: "Governance, corruption and accountability",
      skill:
        "Analyse why governance quality drives development and how corruption undermines it.",
      lesson: {
        sections: [
          {
            heading: "Good governance matters",
            body: "**Good governance** — transparent, accountable, participatory, effective institutions — is a precondition for development. Weak governance correlates with poverty, conflict and inequality. Corruption diverts resources from services to private pockets, deters investment and erodes trust. **Transparency** (open budgets, free media) and **accountability** (free press, independent courts, elections) are key checks.",
          },
          {
            heading: "Corruption's costs",
            body: "Corruption adds costs to business (bribes), reduces public service quality (skimming funds), distorts markets and undermines democracy. Anti-corruption tools: freedom of information laws, independent anti-corruption agencies, whistleblower protection, open contracting. Challenges: enforcement capacity, political will, 'grand corruption' at elite levels.",
          },
        ],
        keyFormulas: [
          {
            name: "Good governance",
            statement: "Transparent + accountable + participatory + effective",
          },
          {
            name: "Corruption",
            statement: "Abuse of entrusted power for private gain",
          },
          {
            name: "Transparency check",
            statement: "Open budgets/media enable accountability",
          },
        ],
        workedExample: {
          problem:
            "Why might two countries with similar resources develop differently?",
          solution:
            "Governance quality — the better-governed state converts resources into services and investment; the corrupt one leaks them to elites.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l7c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'good governance'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High GDP" },
              { id: "b", text: "A strong military" },
              {
                id: "c",
                text: "Transparent, accountable, participatory and effective institutions",
              },
              { id: "d", text: "Democracy alone" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Good governance",
                statement:
                  "Transparency, accountability, participation, effectiveness.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer:
              "**(a)** Transparent, accountable, participatory, effective",
            commonErrors: ["Reducing to democracy or wealth."],
          },
        },
        {
          id: "ciegp-q-u4l7c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'corruption'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Corruption",
                statement: "Abuse of entrusted power for private gain.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Misuse of public office for private benefit — e.g. officials awarding contracts to friends in exchange for bribes.",
            commonErrors: ["Only describing bribery, missing wider abuse."],
          },
        },
        {
          id: "ciegp-q-u4l7c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways corruption harms development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Corruption costs",
                statement:
                  "Diverts resources, deters investment, erodes trust.",
              },
            ],
            steps: [
              { reasoning: "Two valid mechanisms.", marks: 2, markCode: "M" },
              { reasoning: "Concrete example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. funds skimmed from health/education budgets; investors avoid countries where bribes are expected — both reduce service quality and growth.",
            commonErrors: ["Generic 'it's bad' without mechanism."],
          },
        },
        {
          id: "ciegp-q-u4l7c1-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim: 'Corruption is the main obstacle to development.'",
          parts: [
            { label: "a", prompt: "Evidence supporting it", marks: 2 },
            {
              label: "b",
              prompt: "Why 'main obstacle' may overstate it",
              marks: 2,
            },
            { label: "c", prompt: "Balanced judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Corruption vs development",
                statement:
                  "Corruption matters hugely but isn't the only constraint.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "e.g. Transparency International correlations; resource misallocation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Valid evidence.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "e.g. some corrupt states grew fast (China); geography, conflict matter too.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correlation vs sole cause.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Corruption is a major barrier but interacts with other factors.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Qualified conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Corruption is a major obstacle — it diverts resources and deters investment — but calling it 'the main' one ignores geography, conflict and institutions; it's one critical constraint among several.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l7c1-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'transparency' in governance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transparency",
                statement: "Openness about decisions, budgets, processes.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Accountability link.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Openness in government decisions and finances — open budgets, published contracts, free media — enabling public scrutiny and accountability.",
            commonErrors: ["Confusing with honesty alone."],
          },
        },
        {
          id: "ciegp-q-u4l7c1-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two institutions that can hold governments accountable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accountability institutions",
                statement:
                  "Free press, independent courts, elections, watchdogs.",
              },
            ],
            steps: [
              { reasoning: "Two valid institutions.", marks: 1, markCode: "M" },
              { reasoning: "Each's role explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. independent judiciary (checks executive power) and free press (exposes corruption); also elections and anti-corruption agencies.",
            commonErrors: ["Listing without roles."],
          },
        },
        {
          id: "ciegp-q-u4l7c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'accountability'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paying taxes" },
              { id: "b", text: "Obeying the law only" },
              { id: "c", text: "Voting" },
              { id: "d", text: "Being answerable for actions and decisions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accountability",
                statement: "Answerable for actions.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Answerable for actions",
            commonErrors: ["Confusing with obedience."],
          },
        },
        {
          id: "ciegp-q-u4l7c1-8",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why 'grand corruption' is harder to fight than petty corruption.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grand vs petty corruption",
                statement: "Elites control institutions meant to check them.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Petty corruption: low-level, easier to detect/punish.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Grand corruption involves elites who control enforcement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Institutional capture problem.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Solutions need external/international pressure.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Petty corruption is street-level and punishable; grand corruption involves elites who control the very institutions meant to investigate them — requiring external pressure (asset recovery, international prosecution) to break.",
            commonErrors: ["Treating all corruption as equally detectable."],
          },
        },
        {
          id: "ciegp-q-u4l7c1-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does freedom of information matter for development?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FOI and development",
                statement:
                  "Enables scrutiny → accountability → better services.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "It lets citizens and media scrutinise budgets and contracts — exposing corruption and improving service delivery; e.g. publishing school budgets reveals ghost teachers.",
            commonErrors: ["Only noting transparency abstractly."],
          },
        },
        {
          id: "ciegp-q-u4l7c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'institutional capture'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Institutional capture",
                statement:
                  "Elites controlling institutions meant to check them.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When powerful groups control the institutions designed to constrain them — e.g. a president appointing loyalists to the anti-corruption agency, neutralising it.",
            commonErrors: ["Confusing with lobbying generally."],
          },
        },
        {
          id: "ciegp-q-u4l7c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which set of features defines 'good governance'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Strong military" },
              { id: "b", text: "High taxes" },
              { id: "c", text: "Many elections" },
              {
                id: "d",
                text: "Transparent, accountable, participatory and effective institutions",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Good governance",
                statement: "Transparent + accountable + participatory + effective.",
              },
            ],
            steps: [
              { reasoning: "The four pillars of good governance.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Transparent, accountable, participatory, effective",
            commonErrors: ["Equating governance with elections alone."],
          },
        },
        {
          id: "ciegp-q-u4l7c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are two main costs of corruption for development?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Corruption costs",
                statement: "Diverts resources and erodes trust/investment.",
              },
            ],
            steps: [
              {
                reasoning: "Diverts public funds from services to private pockets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Erodes trust and deters investment; distorts markets.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Diverts resources from services and erodes trust/investment climate.",
            commonErrors: ["Mentioning only one cost."],
          },
        },
        {
          id: "ciegp-q-u4l7c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A country has a $50 billion budget and an estimated 10% is lost to corruption. How much is lost?",
          response: {
            type: "numeric",
            parts: [{ label: "Corruption loss ($bn)", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Corruption estimate",
                statement: "Percentage of budget.",
              },
            ],
            steps: [
              { reasoning: "0.10 x 50 = $5bn.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5 billion",
            commonErrors: ["Treating the percentage as the amount."],
          },
        },
        {
          id: "ciegp-q-u4l7c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A governance index scores transparency 8/10 and accountability 6/10. What is the average score?",
          response: {
            type: "numeric",
            parts: [{ label: "Average score", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Index calculation",
                statement: "Mean of component scores.",
              },
            ],
            steps: [
              { reasoning: "(8+6)/2 = 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
            commonErrors: ["Adding instead of averaging."],
          },
        },
        {
          id: "ciegp-q-u4l7c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is freedom of information important for accountability in governance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transparency",
                statement: "Open information enables public scrutiny.",
              },
            ],
            steps: [
              {
                reasoning: "Citizens/media can see how budgets are spent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exposes corruption and waste.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Builds trust and pressures officials to perform.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Open budgets and records let citizens and media scrutinise spending, exposing corruption and building trust.",
            commonErrors: ["Describing the law without linking to accountability."],
          },
        },
        {
          id: "ciegp-q-u4l7c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that 'holding elections is sufficient for good governance'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Elections vs governance",
                statement: "Elections are necessary but not sufficient.",
              },
            ],
            steps: [
              {
                reasoning: "For: elections provide legitimacy and can remove bad leaders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Against: need free media, independent courts, anti-corruption bodies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complicating: flawed/unfree elections can entrench elites.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: elections are one pillar among several required.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Elections confer legitimacy but good governance also requires accountability institutions, rule of law and transparency.",
            commonErrors: ["Equating democracy with good governance."],
          },
        },
      ],
    },
    {
      id: "ciegp-u4l7-c2-social",
      title: "Education, health and human development",
      skill:
        "Analyse education and global health as drivers and indicators of development.",
      lesson: {
        sections: [
          {
            heading: "Education as development",
            body: "Education builds **human capital** — skills, knowledge, health — driving productivity and innovation. Barriers: cost, distance, gender discrimination, conflict, child labour. Returns are high: each additional year of schooling raises earnings and improves health outcomes. Tensions: public vs private provision, quality vs quantity, exam-focused vs skills-based systems.",
          },
          {
            heading: "Global health",
            body: "Health is both a development outcome and driver. **Universal health coverage** aims to ensure access without financial hardship. Challenges: health worker shortages, medicine access (patents vs affordability), maternal/child mortality, non-communicable diseases rising with development. Global health governance (WHO) faces funding gaps and sovereignty tensions.",
          },
        ],
        keyFormulas: [
          {
            name: "Human capital",
            statement: "Skills, knowledge, health of population",
          },
          {
            name: "Universal health coverage",
            statement: "Access without financial hardship",
          },
          {
            name: "Education returns",
            statement: "Each year of schooling raises earnings and health",
          },
        ],
        workedExample: {
          problem:
            "Why is education considered an investment rather than a cost?",
          solution:
            "It raises productivity, earnings and health over a lifetime — returns exceed costs, especially for girls' education which has multiplier effects on families.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l7c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'human capital'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skills, knowledge and health of a population" },
              { id: "b", text: "Teachers' salaries" },
              { id: "c", text: "Buildings and equipment" },
              { id: "d", text: "Money for schools" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Human capital",
                statement: "Population skills/knowledge/health.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Skills, knowledge, health",
            commonErrors: ["Confusing with physical capital."],
          },
        },
        {
          id: "ciegp-q-u4l7c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'universal health coverage'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UHC",
                statement:
                  "All access needed health services without financial hardship.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Key element noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ensuring all people can access needed health services without suffering financial hardship — not necessarily free, but affordable.",
            commonErrors: ["Confusing with free healthcare for all."],
          },
        },
        {
          id: "ciegp-q-u4l7c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two barriers to education in developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Education barriers",
                statement: "Cost, distance, gender, conflict, child labour.",
              },
            ],
            steps: [
              { reasoning: "Two valid barriers.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. cost forces children into work; distance means no school within reach — both hit poor/rural/girl children hardest.",
            commonErrors: ["Generic 'poverty' without specifics."],
          },
        },
        {
          id: "ciegp-q-u4l7c2-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate: 'Education is the best investment a developing country can make.'",
          parts: [
            { label: "a", prompt: "Evidence supporting it", marks: 2 },
            { label: "b", prompt: "Limitations of the claim", marks: 2 },
            { label: "c", prompt: "Balanced judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Education returns",
                statement: "High returns but needs complementary investments.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "e.g. earnings returns, health benefits, innovation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evidence cited.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "e.g. quality matters; without jobs/health, returns limited.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Complementary investments needed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Education is high-return but not sufficient alone.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Qualified conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Education has among the highest development returns, but 'best' overstates it — returns depend on quality and complementary investments in health, infrastructure and jobs.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l7c2-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does girls' education have multiplier effects?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Girls' education",
                statement:
                  "Improves health, income, and next generation's outcomes.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Evidence/example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Educated women have healthier children, higher earnings, and invest more in their children's education — benefits compound across generations.",
            commonErrors: ["Only citing individual benefit."],
          },
        },
        {
          id: "ciegp-q-u4l7c2-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two global health challenges beyond infectious disease.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Health challenges",
                statement:
                  "NCDs, health worker shortage, access, mental health.",
              },
            ],
            steps: [
              { reasoning: "Two valid challenges.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. rising non-communicable diseases (diabetes, heart disease) with development; health worker shortages in poor regions — both strain systems.",
            commonErrors: ["Only infectious diseases."],
          },
        },
        {
          id: "ciegp-q-u4l7c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is meant by 'health worker shortage'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No health insurance" },
              { id: "b", text: "Too many hospitals" },
              { id: "c", text: "Lack of medicines" },
              {
                id: "d",
                text: "Insufficient doctors, nurses and health staff for population needs",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Health worker shortage",
                statement: "Insufficient health staff.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Insufficient health staff",
            commonErrors: ["Confusing with medicine shortages."],
          },
        },
        {
          id: "ciegp-q-u4l7c2-8",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the tension between medicine patents and access to medicines in poor countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Patents vs access",
                statement: "Innovation incentives vs affordability.",
              },
            ],
            steps: [
              {
                reasoning: "Patent side: recoups R&D costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Access side: patents raise prices, exclude poor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solutions: compulsory licensing, tiered pricing.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Patents reward innovation but price out poor countries; compulsory licensing and tiered pricing offer compromise — access for essential medicines while preserving incentives.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l7c2-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is education considered a 'human right'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Education as right",
                statement:
                  "Foundation for dignity, opportunity, participation.",
              },
            ],
            steps: [
              { reasoning: "Justification given.", marks: 1, markCode: "M" },
              { reasoning: "Policy implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "It underpins dignity, economic opportunity and civic participation — governments have a duty to provide it, especially for marginalised groups.",
            commonErrors: ["Treating as merely economic investment."],
          },
        },
        {
          id: "ciegp-q-u4l7c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'quality' vs 'quantity' in education expansion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quality vs quantity",
                statement:
                  "Enrollment alone insufficient; learning outcomes matter.",
              },
            ],
            steps: [
              { reasoning: "Distinction explained.", marks: 1, markCode: "M" },
              { reasoning: "Consequence noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Getting children into school (quantity) doesn't guarantee learning (quality) — overcrowded, under-resourced schools can produce graduates without skills.",
            commonErrors: ["Assuming enrollment = education."],
          },
        },
        {
          id: "ciegp-q-u4l7c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'human capital'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The skills, knowledge and health of a population",
              },
              { id: "b", text: "Money invested in factories" },
              { id: "c", text: "Government buildings" },
              { id: "d", text: "Natural resources" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Human capital",
                statement: "Skills, knowledge, health of population.",
              },
            ],
            steps: [
              { reasoning: "Human capital = people-based productive capacity.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Skills, knowledge and health",
            commonErrors: ["Confusing with physical capital."],
          },
        },
        {
          id: "ciegp-q-u4l7c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'universal health coverage' (UHC) aim to achieve?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UHC",
                statement: "Access to health services without financial hardship.",
              },
            ],
            steps: [
              {
                reasoning: "Defines UHC: all can access care.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Key feature: no financial hardship from seeking care.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ensures everyone can access needed health services without suffering financial hardship.",
            commonErrors: ["Confusing with free healthcare for all services."],
          },
        },
        {
          id: "ciegp-q-u4l7c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Of 1,000 children enrolled in primary school, 750 complete it. What percentage complete?",
          response: {
            type: "numeric",
            parts: [{ label: "Completion (%)", answer: 75 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Completion rate",
                statement: "Completers/enrolled x 100.",
              },
            ],
            steps: [
              { reasoning: "750/1000 x 100 = 75%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
            commonErrors: ["Confusing enrollment with completion."],
          },
        },
        {
          id: "ciegp-q-u4l7c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A country has a doctor-to-population ratio of 1 per 1,000 and a population of 5 million. How many doctors does this represent?",
          response: {
            type: "numeric",
            parts: [{ label: "Number of doctors", answer: 5000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Health workforce",
                statement: "Ratio x population.",
              },
            ],
            steps: [
              { reasoning: "5,000,000/1000 = 5000 doctors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5,000",
            commonErrors: ["Inverting the ratio."],
          },
        },
        {
          id: "ciegp-q-u4l7c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is education considered an investment rather than a cost?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Education returns",
                statement: "Raises productivity, earnings and health.",
              },
            ],
            steps: [
              {
                reasoning: "Raises productivity and earnings over a lifetime.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Improves health outcomes and enables innovation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Returns exceed costs, especially for girls' education.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "It builds human capital — higher productivity, earnings and health — so returns exceed the upfront cost.",
            commonErrors: ["Treating education purely as consumption."],
          },
        },
        {
          id: "ciegp-q-u4l7c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that 'building more schools is enough to close education inequality'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Education quality vs quantity",
                statement: "Access alone doesn't guarantee learning.",
              },
            ],
            steps: [
              {
                reasoning: "For: access is the first barrier; schools enable enrollment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Against: quality, teachers, materials, distance and cost also matter.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complicating: gender norms, child labour and conflict keep children out.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: buildings necessary but insufficient — need quality and access together.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "School buildings help access but inequality persists without quality teaching, affordability and addressing social barriers.",
            commonErrors: ["Confusing enrollment with learning outcomes."],
          },
        },
      ],
    },
  ],
};
