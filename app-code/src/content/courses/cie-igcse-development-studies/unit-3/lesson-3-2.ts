import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cieids-u3-lesson-3-2",
  code: "3-2",
  title: "Causes of underdevelopment",
  goal: "I CAN explain physical, economic, social and political causes of underdevelopment.",
  standards: [
    "Cambridge IGCSE Development Studies 0453",
    "Section 2: Causes of underdevelopment",
  ],
  vocabulary: [
    {
      term: "Physical causes",
      definition:
        "Natural factors — climate, landlocked position, natural disasters, disease.",
    },
    {
      term: "Economic causes",
      definition:
        "Low capital, dependence on primary products, poor infrastructure, debt.",
    },
    {
      term: "Social causes",
      definition:
        "Rapid population growth, low education, gender inequality, cultural factors.",
    },
    {
      term: "Political causes",
      definition: "Corruption, conflict, weak governance, colonial legacies.",
    },
    {
      term: "Primary products",
      definition:
        "Raw materials — agriculture, minerals — low value, price volatile.",
    },
    {
      term: "Dependency theory",
      definition:
        "Developing countries dependent on developed countries for capital/markets.",
    },
    {
      term: "Landlocked country",
      definition: "Country without coastline — higher trade costs.",
    },
    {
      term: "Population growth",
      definition: "Rapid growth can outpace economic development.",
    },
    {
      term: "Corruption",
      definition:
        "Abuse of power for private gain — diverts resources from development.",
    },
    {
      term: "Conflict",
      definition:
        "War/civil unrest destroys infrastructure and deters investment.",
    },
    {
      term: "Debt",
      definition: "High external debt repayments reduce funds for development.",
    },
    {
      term: "Brain drain",
      definition: "Skilled workers emigrating to developed countries.",
    },
  ],
  concepts: [
    {
      id: "cieids-u3-causes",
      title: "Causes of underdevelopment",
      skill:
        "Explain physical, economic, social and political barriers to development.",
      lesson: {
        sections: [
          {
            heading: "Physical causes",
            body: "**Climate**: arid or flood-prone areas limit agriculture. **Landlocked position**: countries without coastlines face higher transport costs. **Natural disasters**: earthquakes, floods, droughts destroy infrastructure and crops. **Disease**: malaria, HIV/AIDS reduce workforce productivity and increase healthcare costs. These factors make development harder but aren't insurmountable.",
          },
          {
            heading: "Economic causes",
            body: "**Low capital**: insufficient savings and investment. **Dependence on primary products**: relying on raw materials with low prices and volatile markets. **Poor infrastructure**: inadequate roads, electricity, communications. **Debt**: high repayments divert funds from development. **Brain drain**: skilled workers leave for better opportunities abroad. **Dependency theory**: argues developing countries are dependent on developed countries for capital and markets.",
          },
          {
            heading: "Social and political causes",
            body: "**Social**: rapid population growth outpacing resources; low education limiting human capital; gender inequality reducing half the workforce's potential; cultural factors. **Political**: corruption diverting resources; conflict destroying infrastructure; weak governance; colonial legacies creating structural disadvantages. These interact — corruption worsens economic problems, which worsen social problems.",
          },
        ],
        keyFormulas: [
          {
            name: "Physical causes",
            statement: "Climate · landlocked · disasters · disease",
          },
          {
            name: "Economic causes",
            statement: "Low capital · primary products · debt · brain drain",
          },
          {
            name: "Social causes",
            statement: "Population growth · low education · gender inequality",
          },
          {
            name: "Political causes",
            statement:
              "Corruption · conflict · weak governance · colonial legacy",
          },
        ],
        workedExample: {
          problem: "Why might a landlocked country struggle to develop?",
          solution:
            "Higher transport costs for imports/exports, isolation from markets, less foreign investment — all increase costs of trade and development.",
        },
      },
      questions: [
        {
          id: "cieids-u3-c-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Physical causes of underdevelopment include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Debt" },
              {
                id: "b",
                text: "Climate, landlocked position and natural disasters",
              },
              { id: "c", text: "Corruption and conflict" },
              { id: "d", text: "Low education" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical causes",
                statement: "Climate, landlocked, disasters, disease.",
              },
            ],
            steps: [
              {
                reasoning: "Physical = natural/geographic factors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Climate, landlocked, disasters.",
          },
        },
        {
          id: "cieids-u3-c-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Economic causes of underdevelopment include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Low education" },
              {
                id: "b",
                text: "Low capital, debt and dependence on primary products",
              },
              { id: "c", text: "Corruption and conflict" },
              { id: "d", text: "Climate and disease" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Economic causes",
                statement: "Capital, debt, primary products.",
              },
            ],
            steps: [
              {
                reasoning: "Economic = capital/market factors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Low capital, debt, primary products.",
          },
        },
        {
          id: "cieids-u3-c-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Social causes of underdevelopment include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Climate and disease" },
              { id: "b", text: "Debt and capital" },
              { id: "c", text: "Corruption and conflict" },
              { id: "d", text: "Rapid population growth and low education" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social causes",
                statement: "Population growth, education, gender.",
              },
            ],
            steps: [
              {
                reasoning: "Social = population/education factors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Population growth and low education.",
          },
        },
        {
          id: "cieids-u3-c-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Political causes of underdevelopment include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Climate and disease" },
              { id: "b", text: "Low capital" },
              { id: "c", text: "Population growth" },
              { id: "d", text: "Corruption, conflict and weak governance" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Political causes",
                statement: "Corruption, conflict, governance.",
              },
            ],
            steps: [
              {
                reasoning: "Political = governance factors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Corruption, conflict, governance.",
          },
        },
        {
          id: "cieids-u3-c-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Primary products are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Technology" },
              { id: "b", text: "Finished goods" },
              { id: "c", text: "Raw materials — agriculture and minerals" },
              { id: "d", text: "Services" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary products",
                statement: "Raw materials — agriculture/minerals.",
              },
            ],
            steps: [
              {
                reasoning: "Primary = raw materials.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Raw materials.",
          },
        },
        {
          id: "cieids-u3-c-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A landlocked country has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More trade" },
              { id: "b", text: "Lower costs" },
              { id: "c", text: "Better access" },
              { id: "d", text: "No coastline — higher trade costs" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Landlocked",
                statement: "No coastline — higher trade costs.",
              },
            ],
            steps: [
              {
                reasoning: "Landlocked = no coastline.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) No coastline — higher costs.",
          },
        },
        {
          id: "cieids-u3-c-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Brain drain refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Population decline" },
              { id: "b", text: "Skilled workers emigrating abroad" },
              { id: "c", text: "Brain disease" },
              { id: "d", text: "Money leaving" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Brain drain",
                statement: "Skilled workers leaving.",
              },
            ],
            steps: [
              {
                reasoning: "Brain drain = skilled emigration.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Skilled workers emigrating.",
          },
        },
        {
          id: "cieids-u3-c-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Dependency theory argues developing countries are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Self-sufficient" },
              { id: "b", text: "Independent" },
              { id: "c", text: "More developed" },
              {
                id: "d",
                text: "Dependent on developed countries for capital and markets",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependency theory",
                statement: "Developing dependent on developed.",
              },
            ],
            steps: [
              {
                reasoning: "Dependency = reliance on developed countries.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Dependent on developed countries.",
          },
        },
        {
          id: "cieids-u3-c-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Corruption contributes to underdevelopment by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Improving services" },
              { id: "b", text: "Reducing debt" },
              { id: "c", text: "Increasing investment" },
              { id: "d", text: "Diverting resources from development" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Corruption effect",
                statement: "Diverts resources.",
              },
            ],
            steps: [
              {
                reasoning: "Corruption diverts resources.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Diverting resources.",
          },
        },
        {
          id: "cieids-u3-c-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between physical and economic causes of underdevelopment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Physical vs economic",
                statement: "Natural vs human-made factors.",
              },
            ],
            steps: [
              {
                reasoning: "Physical: climate, landlocked, disasters, disease.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Economic: capital, debt, primary products, infrastructure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Physical = natural; economic = capital/market factors.",
          },
        },
        {
          id: "cieids-u3-c-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways rapid population growth hinders development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Population growth effects",
                statement: "Strains resources and services.",
              },
            ],
            steps: [
              {
                reasoning: "Strains resources — food, water, housing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Overwhelms services — education, healthcare.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Strains resources and overwhelms services.",
          },
        },
        {
          id: "cieids-u3-c-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how dependence on primary products hinders development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Primary product dependence",
                statement: "Low prices, volatile markets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Primary products have low value and volatile prices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Countries can't earn enough for development.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Need to diversify into manufacturing/services.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Low-value volatile exports can't fund development; need diversification.",
          },
        },
        {
          id: "cieids-u3-c-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A country is landlocked, has high debt and relies on coffee exports. Explain its development challenges.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cause analysis",
                statement: "Multiple interacting causes.",
              },
            ],
            steps: [
              {
                reasoning: "Landlocked = high transport costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "High debt = repayments divert funds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Coffee dependence = volatile low prices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Causes interact — hard to escape poverty trap.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Multiple interacting causes — landlocked, debt, commodity dependence.",
          },
        },
        {
          id: "cieids-u3-c-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Malaria affects development by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Reducing workforce productivity and increasing healthcare costs",
              },
              { id: "b", text: "Improving health" },
              { id: "c", text: "Increasing tourism" },
              { id: "d", text: "Reducing population" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Disease effect",
                statement: "Reduces productivity, increases costs.",
              },
            ],
            steps: [
              {
                reasoning: "Disease reduces productivity.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Reducing productivity, increasing costs.",
          },
        },
        {
          id: "cieids-u3-c-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does conflict hinder development?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conflict effect",
                statement: "Destroys infrastructure, deters investment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Destroys infrastructure and kills/captures workforce.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Deters foreign investment — no stability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Destroys infrastructure, deters investment.",
          },
        },
        {
          id: "cieids-u3-c-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Colonial legacies contribute to underdevelopment through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free trade" },
              { id: "b", text: "Modern technology" },
              { id: "c", text: "Good governance" },
              { id: "d", text: "Inherited structural disadvantages" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Colonial legacy",
                statement: "Structural disadvantages persist.",
              },
            ],
            steps: [
              {
                reasoning: "Colonial legacy = structural disadvantage.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Inherited structural disadvantages.",
          },
        },
        {
          id: "cieids-u3-c-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'poor infrastructure' as a cause of underdevelopment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Poor infrastructure",
                statement: "Inadequate roads, electricity, communications.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inadequate roads, electricity, communications, water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Raises costs, limits business and services.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Inadequate roads/power/communications — raises costs.",
          },
        },
        {
          id: "cieids-u3-c-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how gender inequality contributes to underdevelopment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gender inequality effect",
                statement: "Half population underutilised.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Women are ~half population — disadvantage affects half.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Less access to education/jobs limits their contribution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reduces overall economic potential and human capital.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Underutilises half population → less human capital.",
          },
        },
        {
          id: "cieids-u3-c-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that physical factors are the main cause of underdevelopment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Physical causes evaluation",
                statement: "Significant but not sole cause.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Physical factors (climate, landlocked) do hinder development.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "But economic, social, political causes also major.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Some countries overcome physical disadvantages.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "So physical factors significant but not sole/main cause.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Physical factors significant but not sole cause — multiple factors interact.",
          },
        },
        {
          id: "cieids-u3-c-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a social cause of underdevelopment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High debt" },
              { id: "b", text: "Rapid population growth" },
              { id: "c", text: "Landlocked position" },
              { id: "d", text: "Corruption" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social cause example",
                statement: "Population growth = social cause.",
              },
            ],
            steps: [
              {
                reasoning: "Population growth = social cause.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Rapid population growth.",
          },
        },
        {
          id: "cieids-u3-c-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does high external debt hinder development?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debt effect",
                statement: "Repayments divert development funds.",
              },
            ],
            steps: [
              {
                reasoning: "Debt repayments consume large share of budget.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Less money for health, education, infrastructure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Repayments divert funds from development spending.",
          },
        },
        {
          id: "cieids-u3-c-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how weak governance contributes to underdevelopment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weak governance",
                statement: "Poor services, corruption, instability.",
              },
            ],
            steps: [
              {
                reasoning: "Weak governance → poor public services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Corruption and instability deter investment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lack of rule of law discourages business.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Poor services, corruption, instability deter development.",
          },
        },
        {
          id: "cieids-u3-c-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate dependency theory as an explanation of underdevelopment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dependency theory evaluation",
                statement:
                  "Explains inequality but may overemphasise external factors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: explains unequal trade and capital flows.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: highlights structural inequality in global system.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: ignores internal factors — governance, policies.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: some countries developed despite dependency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Explains structural inequality but ignores internal factors.",
          },
        },
        {
          id: "cieids-u3-c-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Natural disasters hinder development by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Destroying infrastructure and crops" },
              { id: "b", text: "Increasing tourism" },
              { id: "c", text: "Increasing investment" },
              { id: "d", text: "Improving health" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Disaster effect",
                statement: "Destroys infrastructure/crops.",
              },
            ],
            steps: [
              {
                reasoning: "Disasters destroy infrastructure.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Destroying infrastructure and crops.",
          },
        },
        {
          id: "cieids-u3-c-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'low capital' as a cause of underdevelopment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Low capital",
                statement: "Insufficient savings and investment.",
              },
            ],
            steps: [
              {
                reasoning: "Insufficient savings → low investment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can't fund infrastructure, education, business.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Insufficient savings/investment limits development.",
          },
        },
        {
          id: "cieids-u3-c-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how low education contributes to underdevelopment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Education effect",
                statement: "Limits human capital and productivity.",
              },
            ],
            steps: [
              {
                reasoning: "Low education → low skills → low productivity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can't adopt new technologies or methods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduces human capital → slower development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Low education → low skills → less human capital.",
          },
        },
        {
          id: "cieids-u3-c-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT an economic cause of underdevelopment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Primary products" },
              { id: "b", text: "Infrastructure" },
              { id: "c", text: "Debt" },
              { id: "d", text: "Climate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Economic causes",
                statement:
                  "Debt, primary products, infrastructure — not climate.",
              },
            ],
            steps: [
              {
                reasoning: "Climate is physical, not economic.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Climate.",
          },
        },
        {
          id: "cieids-u3-c-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'brain drain' and why does it matter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Brain drain",
                statement: "Skilled workers leaving for better opportunities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Skilled workers emigrate for better pay/opportunities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Country loses human capital needed for development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Skilled emigration → loss of human capital.",
          },
        },
        {
          id: "cieids-u3-c-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the view that underdevelopment is caused mainly by external factors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "External vs internal causes",
                statement: "Both matter; balance needed.",
              },
            ],
            steps: [
              {
                reasoning: "External factors (dependency, trade) do matter.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But internal factors (governance, policies) also crucial.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Some countries overcame external disadvantages.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Balanced view: both external and internal factors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Both external and internal factors matter — balanced view needed.",
          },
        },
        {
          id: "cieids-u3-c-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do causes of underdevelopment often interact?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cause interaction",
                statement: "Causes reinforce each other.",
              },
            ],
            steps: [
              {
                reasoning: "Corruption worsens economic problems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Economic problems worsen social problems — vicious cycle.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Causes reinforce each other — vicious cycle.",
          },
        },
      ],
    },
    {
      id: "cieids-u3-catch22",
      title: "The poverty trap and vicious cycles",
      skill: "Explain how underdevelopment becomes self-reinforcing.",
      lesson: {
        sections: [
          {
            heading: "The poverty trap",
            body: "The **poverty trap** is a self-reinforcing cycle where poverty causes conditions that make escaping poverty harder. Low income → low savings → low investment → low productivity → low income. Similar cycles exist for health (poor → sick → can't work → poor), education (poor → uneducated → low skills → low income), and debt (borrow to survive → repay → borrow more).",
          },
          {
            heading: "Vicious cycles",
            body: "**Health-poverty cycle**: poor nutrition → disease → can't work → less income → worse nutrition. **Education-poverty cycle**: can't afford school → low skills → low income → can't afford school. **Debt cycle**: borrow for necessities → interest accumulates → can't invest → borrow more. Breaking these cycles requires external intervention — aid, investment, policy change.",
          },
          {
            heading: "Breaking the trap",
            body: "Strategies to break poverty traps: **big push** (large investment to jump-start growth), **microfinance** (small loans to poor entrepreneurs), **cash transfers** (direct payments to poor families), **education investment** (build human capital), **healthcare access** (improve workforce). Success depends on addressing multiple causes simultaneously.",
          },
        ],
        keyFormulas: [
          {
            name: "Poverty trap",
            statement: "Low income → low savings → low investment → low income",
          },
          {
            name: "Breaking strategies",
            statement:
              "Aid · investment · microfinance · education · healthcare",
          },
        ],
        workedExample: {
          problem:
            "Why can't a poor farmer simply work harder to escape poverty?",
          solution:
            "Poverty trap — low income means can't afford tools, seeds, education; working harder yields little without capital to invest.",
        },
      },
      questions: [
        {
          id: "cieids-u3-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The poverty trap is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A temporary setback" },
              { id: "b", text: "A choice" },
              { id: "c", text: "A government policy" },
              {
                id: "d",
                text: "A self-reinforcing cycle where poverty causes conditions that make escaping harder",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Poverty trap",
                statement: "Self-reinforcing cycle of poverty.",
              },
            ],
            steps: [
              {
                reasoning: "Poverty trap = self-reinforcing cycle.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Self-reinforcing cycle.",
          },
        },
        {
          id: "cieids-u3-pt-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A vicious cycle in development refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Social progress" },
              {
                id: "b",
                text: "Problems that reinforce each other negatively",
              },
              { id: "c", text: "Economic growth" },
              { id: "d", text: "Positive feedback" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vicious cycle",
                statement: "Problems reinforcing each other.",
              },
            ],
            steps: [
              {
                reasoning: "Vicious cycle = negative reinforcement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Problems reinforcing each other.",
          },
        },
        {
          id: "cieids-u3-pt-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Microfinance helps break poverty traps by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Building factories" },
              { id: "b", text: "Providing small loans to poor entrepreneurs" },
              { id: "c", text: "Giving large grants" },
              { id: "d", text: "Free education" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Microfinance",
                statement: "Small loans to poor entrepreneurs.",
              },
            ],
            steps: [
              {
                reasoning: "Microfinance = small loans.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Small loans to entrepreneurs.",
          },
        },
        {
          id: "cieids-u3-pt-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "The health-poverty cycle works because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Disease doesn't affect income" },
              { id: "b", text: "Health improves automatically" },
              { id: "c", text: "Poverty doesn't affect health" },
              {
                id: "d",
                text: "Poor nutrition → disease → can't work → less income",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Health-poverty cycle",
                statement: "Poor → sick → can't work → poor.",
              },
            ],
            steps: [
              {
                reasoning: "Health-poverty = vicious cycle.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Poor → sick → can't work → poor.",
          },
        },
        {
          id: "cieids-u3-pt-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "The education-poverty cycle works because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skills don't affect income" },
              {
                id: "b",
                text: "Can't afford school → low skills → low income",
              },
              { id: "c", text: "Education is free" },
              { id: "d", text: "Poverty doesn't affect education" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Education-poverty cycle",
                statement: "Can't afford → low skills → low income.",
              },
            ],
            steps: [
              {
                reasoning: "Education-poverty = vicious cycle.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Can't afford → low skills → low income.",
          },
        },
        {
          id: "cieids-u3-pt-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'big push' strategy aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduce spending" },
              { id: "b", text: "Make large investments to jump-start growth" },
              { id: "c", text: "Give small loans" },
              { id: "d", text: "Increase debt" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Big push",
                statement: "Large investment to break trap.",
              },
            ],
            steps: [
              {
                reasoning: "Big push = large investment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Large investments to jump-start growth.",
          },
        },
        {
          id: "cieids-u3-pt-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Cash transfers help break poverty traps by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tax increases" },
              { id: "b", text: "Giving direct payments to poor families" },
              { id: "c", text: "Loans only" },
              { id: "d", text: "Building factories" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash transfers",
                statement: "Direct payments to poor.",
              },
            ],
            steps: [
              {
                reasoning: "Cash transfers = direct payments.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Direct payments to poor families.",
          },
        },
        {
          id: "cieids-u3-pt-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why can't a poor person simply work harder to escape poverty?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Work is easy" },
              {
                id: "b",
                text: "Lack of capital/tools makes extra effort unproductive",
              },
              { id: "c", text: "Poverty is a choice" },
              { id: "d", text: "They don't want to" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Effort vs capital",
                statement: "Hard work needs tools/capital.",
              },
            ],
            steps: [
              {
                reasoning: "Hard work needs capital to be productive.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Lack of capital makes effort unproductive.",
          },
        },
        {
          id: "cieids-u3-pt-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The debt cycle works because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interest is free" },
              { id: "b", text: "Debt decreases over time" },
              { id: "c", text: "Borrow for necessities → repay → borrow more" },
              { id: "d", text: "Borrowing is easy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debt cycle",
                statement: "Borrow → repay → borrow more.",
              },
            ],
            steps: [
              {
                reasoning: "Debt cycle = borrow to survive.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Borrow → repay → borrow more.",
          },
        },
        {
          id: "cieids-u3-pt-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the poverty trap in simple terms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Poverty trap explained",
                statement: "Poverty → conditions making escape harder.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Low income → low savings → low investment → low productivity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cycle repeats — hard to escape without intervention.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Poverty creates conditions making escape harder — self-reinforcing.",
          },
        },
        {
          id: "cieids-u3-pt-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways to break the poverty trap.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Breaking strategies",
                statement: "Investment, aid, education, healthcare.",
              },
            ],
            steps: [
              {
                reasoning: "External investment/aid to provide capital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Education and healthcare to build human capital.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Investment/aid, education, healthcare.",
          },
        },
        {
          id: "cieids-u3-pt-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the health-poverty cycle is self-reinforcing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Health-poverty cycle",
                statement: "Poor → sick → can't work → poor.",
              },
            ],
            steps: [
              {
                reasoning: "Poverty → poor nutrition → disease.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Disease → can't work → less income.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Less income → worse nutrition → worse disease. Cycle repeats.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Poverty → disease → can't work → more poverty — self-reinforcing.",
          },
        },
        {
          id: "cieids-u3-pt-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A family is stuck in the poverty trap. Design an intervention to help them escape.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Intervention design",
                statement: "Multi-pronged approach.",
              },
            ],
            steps: [
              {
                reasoning: "Microfinance loan to start small business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Education/training to build skills.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Healthcare access to maintain productivity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ongoing support to prevent relapse into trap.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Microfinance + education + healthcare + ongoing support.",
          },
        },
        {
          id: "cieids-u3-pt-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does the poverty trap require external intervention?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The poor lack capital to invest in themselves",
              },
              { id: "b", text: "The poor are lazy" },
              { id: "c", text: "Markets fail always" },
              { id: "d", text: "Intervention is always needed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intervention need",
                statement: "Poor lack capital to self-invest.",
              },
            ],
            steps: [
              {
                reasoning: "Poor lack capital for self-investment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Lack capital to self-invest.",
          },
        },
        {
          id: "cieids-u3-pt-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'savings trap'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Savings trap",
                statement: "Low income → can't save → can't invest.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Low income → all spent on necessities → no savings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "No savings → no investment → low productivity → low income.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Can't save → can't invest → stay poor.",
          },
        },
        {
          id: "cieids-u3-pt-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a vicious cycle in development?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Debt cycle" },
              { id: "b", text: "Education-poverty cycle" },
              { id: "c", text: "Health-poverty cycle" },
              { id: "d", text: "Economic growth cycle" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vicious cycles",
                statement: "Health, education, debt — not growth.",
              },
            ],
            steps: [
              {
                reasoning: "Growth cycle not vicious.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Economic growth cycle.",
          },
        },
        {
          id: "cieids-u3-pt-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does the education-poverty cycle work?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Education-poverty cycle",
                statement: "Can't afford → low skills → low income.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Can't afford school → low skills → low-paying jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Low income → can't afford school for children → cycle continues.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Can't afford → low skills → low income → repeat.",
          },
        },
        {
          id: "cieids-u3-pt-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why breaking the poverty trap requires multiple interventions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multi-intervention need",
                statement: "Cycles are interconnected.",
              },
            ],
            steps: [
              {
                reasoning: "Poverty trap has multiple reinforcing cycles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Addressing one (e.g. income) doesn't fix others (health, education).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Need simultaneous intervention across domains.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Interconnected cycles need simultaneous multi-domain intervention.",
          },
        },
        {
          id: "cieids-u3-pt-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the poverty trap theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poverty trap evaluation",
                statement: "Explains persistence but may be too deterministic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: explains why poverty persists despite effort.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: justifies external intervention.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: may be too deterministic — ignores agency.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: some escape poverty without intervention.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Explains persistence but may be too deterministic — ignores agency.",
          },
        },
        {
          id: "cieids-u3-pt-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Microfinance provides:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Small loans to poor entrepreneurs" },
              { id: "b", text: "Free goods" },
              { id: "c", text: "Scholarships" },
              { id: "d", text: "Large grants" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Microfinance",
                statement: "Small loans.",
              },
            ],
            steps: [
              {
                reasoning: "Microfinance = small loans.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Small loans.",
          },
        },
        {
          id: "cieids-u3-pt-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'cash transfer'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash transfer",
                statement: "Direct payment to poor families.",
              },
            ],
            steps: [
              {
                reasoning: "Direct cash payment to poor families.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Used for food, school, healthcare — breaks cycles.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Direct cash payment to poor — breaks cycles.",
          },
        },
        {
          id: "cieids-u3-pt-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the debt cycle traps poor countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debt cycle",
                statement: "Borrow → repay → borrow more.",
              },
            ],
            steps: [
              {
                reasoning: "Borrow for necessities/investment when poor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Interest accumulates → can't invest → stay poor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Need to borrow more → cycle continues.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Borrow → repay → borrow more — can't invest.",
          },
        },
        {
          id: "cieids-u3-pt-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A country wants to break its poverty trap. Design a comprehensive strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Strategy design",
                statement: "Multi-pronged approach.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Invest in education and healthcare (human capital).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Provide microfinance and infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Debt relief to free up resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Good governance to ensure effective implementation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Education + healthcare + microfinance + debt relief + governance.",
          },
        },
        {
          id: "cieids-u3-pt-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The poverty trap is also called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A vicious cycle" },
              { id: "b", text: "A temporary setback" },
              { id: "c", text: "Social progress" },
              { id: "d", text: "Economic growth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poverty trap = vicious cycle",
                statement: "Self-reinforcing.",
              },
            ],
            steps: [
              {
                reasoning: "Poverty trap = vicious cycle.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) A vicious cycle.",
          },
        },
        {
          id: "cieids-u3-pt-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of investment in breaking poverty traps?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Investment role",
                statement: "Provides capital for productivity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Investment provides capital for tools, infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Increases productivity → higher income → escape trap.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Capital → productivity → higher income → escape.",
          },
        },
        {
          id: "cieids-u3-pt-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the health-poverty cycle can be broken.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Breaking health-poverty",
                statement: "Healthcare + nutrition + income support.",
              },
            ],
            steps: [
              {
                reasoning: "Improve healthcare access — prevent/treat disease.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Improve nutrition — better health.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Income support — ability to work and earn.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Healthcare + nutrition + income support breaks cycle.",
          },
        },
        {
          id: "cieids-u3-pt-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a strategy to break poverty traps?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduced education" },
              { id: "b", text: "Microfinance" },
              { id: "c", text: "Less healthcare" },
              { id: "d", text: "Increased debt" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trap-breaking strategies",
                statement: "Microfinance, education, healthcare.",
              },
            ],
            steps: [
              {
                reasoning: "Microfinance = trap-breaking.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Microfinance.",
          },
        },
        {
          id: "cieids-u3-pt-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the poverty trap hard to escape without help?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trap difficulty",
                statement: "No capital, all income spent on survival.",
              },
            ],
            steps: [
              {
                reasoning:
                  "All income spent on survival — nothing left to invest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Without capital, can't increase productivity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "No capital left to invest — can't increase productivity.",
          },
        },
        {
          id: "cieids-u3-pt-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate microfinance as a poverty trap solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Microfinance evaluation",
                statement: "Helps but not sufficient alone.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: provides capital to poor entrepreneurs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: high repayment rates show viability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: small loans may be insufficient for real change.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: doesn't address structural causes of poverty.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Helps provide capital but insufficient alone — needs broader support.",
          },
        },
        {
          id: "cieids-u3-pt-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do vicious cycles need breaking at multiple points?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multi-point intervention",
                statement: "Cycles reinforce each other.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cycles reinforce each other — one intervention may not suffice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Need to break multiple links simultaneously.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Interconnected cycles need multi-point intervention.",
          },
        },
      ],
    },
  ],
};
