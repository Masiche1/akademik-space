module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson271",
    lesson: {
      id: "cieiec-u1-lesson-1-1", code: "1-1",
      title: "The Economic Problem: Scarcity and Choice",
      goal: "I CAN explain scarcity, opportunity cost and the economic problem.",
      standards: ["Cambridge IGCSE Economics 0455", "Paper 2: understanding economic problems"],
      vocabulary: [
        { term: "Economics", definition: "Study of how societies allocate scarce resources." },
        { term: "Scarcity", definition: "Limited resources vs unlimited wants." },
        { term: "Economic problem", definition: "How to allocate scarce resources among unlimited wants." },
        { term: "Opportunity cost", definition: "Next best alternative foregone." },
        { term: "Needs", definition: "Essential for survival." },
        { term: "Wants", definition: "Desires beyond basic needs." },
      ],
      concept: {
        id: "cieiec-u1-s1-scarce", title: "Scarcity and choice",
        skill: "Understand the fundamental economic problem.",
        sections: [
          { heading: "The economic problem", body: "Resources are scarce but wants are unlimited. Every choice involves opportunity cost — what you give up. Economics studies how societies make these choices." },
          { heading: "Needs vs wants", body: "Needs: food, shelter, clothing — essential. Wants: desires that improve quality of life. Scarcity means we can't satisfy all wants — must prioritise." },
        ],
        keyFormulas: [
          { name: "Economic problem", statement: "scarce resources, unlimited wants" },
          { name: "Opportunity cost", statement: "next best alternative" },
        ],
        workedExample: {
          problem: "You have $10 and want to buy either a book or a movie ticket. You choose the book. What is the opportunity cost?",
          solution: "Opportunity cost = the movie ticket you gave up — the next best alternative.",
        },
        questions: [
          {
            id: "cieiec-u1-sc-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the economic problem?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Scarce resources vs unlimited wants" }, { id: "b", text: "Too much production" }, { id: "c", text: "Too many workers" }, { id: "d", text: "Too much money" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Economic problem", statement: "Scarcity vs wants." }],
              steps: [{ reasoning: "Scarce resources can't satisfy unlimited wants.", marks: 1, markCode: "M" }],
              finalAnswer: "Scarcity vs unlimited wants",
            },
          },
          {
            id: "cieiec-u1-sc-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is opportunity cost?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Opportunity cost", statement: "Next best alternative." }],
              steps: [
                { reasoning: "Next best alternative foregone.", marks: 1, markCode: "M" },
                { reasoning: "Every choice has opportunity cost.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Next best alternative foregone",
            },
          },
          {
            id: "cieiec-u1-sc-q3", difficulty: "core", totalMarks: 3,
            stem: "You spend $50 on a concert ticket instead of saving for a laptop. What is the opportunity cost?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Opportunity cost", statement: "Applying concept." }],
              steps: [
                { reasoning: "Identify the choice made.", marks: 1, markCode: "M" },
                { reasoning: "Identify the alternative foregone.", marks: 1, markCode: "M" },
                { reasoning: "Opportunity cost = $50 not saved for laptop.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "$50 not saved for laptop",
            },
          },
          {
            id: "cieiec-u1-sc-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define economics, scarcity, economic problem, opportunity cost, needs, wants. (b) What is the economic problem? (c) What is opportunity cost? (d) What are needs? Give 3 examples. (e) What are wants? Give 3 examples. (f) Why can't we satisfy all wants? (g) Give an example of opportunity cost. (h) Explain why choice is necessary.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Scarcity", statement: "Economic problem, opportunity cost." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Scarce resources vs unlimited wants.", marks: 1, markCode: "M" },
                { reasoning: "(c) Next best alternative.", marks: 1, markCode: "M" },
                { reasoning: "(d) Three valid needs.", marks: 1, markCode: "M" },
                { reasoning: "(e) Three valid wants.", marks: 1, markCode: "M" },
                { reasoning: "(f) Resources are limited.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid opportunity cost example.", marks: 1, markCode: "M" },
                { reasoning: "(h) Choice necessary due to scarcity.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Scarcity and the economic problem.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieiec-u1-sc-notes", title: "Scarcity — notes",
      summary: "Economic problem: scarce resources vs unlimited wants. Every choice has opportunity cost.",
      sections: [
        { heading: "Key idea", body: "Scarcity forces choices — economics studies how we allocate resources." },
        { heading: "Opportunity cost", body: "The cost of a choice is what you give up — the next best alternative." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson272",
    lesson: {
      id: "cieiec-u1-lesson-1-2", code: "1-2",
      title: "Production Possibility Frontiers",
      goal: "I CAN draw and interpret production possibility frontiers and explain economic growth.",
      standards: ["Cambridge IGCSE Economics 0455", "Paper 2: production possibility"],
      vocabulary: [
        { term: "Production possibility frontier (PPF)", definition: "Maximum output combinations with given resources." },
        { term: "Efficiency", definition: "Using resources fully without waste." },
        { term: "Inefficiency", definition: "Not using resources fully." },
        { term: "Economic growth", definition: "Increase in productive capacity." },
        { term: "Underemployment", definition: "Resources not fully utilised." },
        { term: "Opportunity cost", definition: "Trade-off shown on PPF." },
      ],
      concept: {
        id: "cieiec-u1-s2-ppf", title: "Production possibility frontier",
        skill: "Draw and interpret PPF diagrams.",
        sections: [
          { heading: "PPF basics", body: "PPF shows maximum combinations of two goods producible with given resources/technology. Points on curve = efficient. Inside = inefficient. Outside = unattainable. Curve shifts out = economic growth." },
          { heading: "Interpreting PPF", body: "Slope shows opportunity cost. Moving along curve = choosing different combinations. Points inside = wasted resources. Economic growth = curve shifts outward." },
        ],
        keyFormulas: [
          { name: "On curve", statement: "efficient production" },
          { name: "Inside", statement: "inefficient" },
          { name: "Outside", statement: "unattainable" },
          { name: "Shift out", statement: "economic growth" },
        ],
        workedExample: {
          problem: "A country produces guns and butter. PPF shows 100 guns OR 200 butter OR combinations. What does point (60 guns, 80 butter) mean?",
          solution: "Point on curve = efficient production of both goods. Moving to more guns means less butter (opportunity cost).",
        },
        questions: [
          {
            id: "cieiec-u1-ppf-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does a production possibility frontier show?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Maximum output combinations with given resources" }, { id: "b", text: "Current production levels" }, { id: "c", text: "Future production targets" }, { id: "d", text: "Market prices" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "PPF", statement: "Max output combinations." }],
              steps: [{ reasoning: "PPF shows maximum combinations of two goods.", marks: 1, markCode: "M" }],
              finalAnswer: "Maximum output combinations",
            },
          },
          {
            id: "cieiec-u1-ppf-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What does a point inside the PPF mean?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "PPF interpretation", statement: "Inside = inefficient." }],
              steps: [
                { reasoning: "Point inside PPF = inefficient production.", marks: 1, markCode: "M" },
                { reasoning: "Resources not fully utilised.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Inefficient production",
            },
          },
          {
            id: "cieiec-u1-ppf-q3", difficulty: "core", totalMarks: 3,
            stem: "What causes the PPF to shift outward?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Economic growth", statement: "PPF shift causes." }],
              steps: [
                { reasoning: "Increased resources (labour, capital, land).", marks: 1, markCode: "M" },
                { reasoning: "Improved technology.", marks: 1, markCode: "M" },
                { reasoning: "Better education/skills.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "More resources, better technology",
            },
          },
          {
            id: "cieiec-u1-ppf-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define PPF, efficiency, inefficiency, economic growth, underemployment, opportunity cost. (b) What does PPF show? (c) What does a point on the curve mean? (d) What does a point inside mean? (e) What does a point outside mean? (f) What causes PPF to shift out? (g) What is opportunity cost on PPF? (h) Draw a PPF for a country producing food and clothing.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "PPF", statement: "Diagram interpretation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Max output combinations.", marks: 1, markCode: "M" },
                { reasoning: "(c) Efficient production.", marks: 1, markCode: "M" },
                { reasoning: "(d) Inefficient — wasted resources.", marks: 1, markCode: "M" },
                { reasoning: "(e) Unattainable with current resources.", marks: 1, markCode: "M" },
                { reasoning: "(f) More resources/better technology.", marks: 1, markCode: "M" },
                { reasoning: "(g) Trade-off shown by slope.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid PPF diagram.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Production possibility frontier.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieiec-u1-ppf-notes", title: "PPF — notes",
      summary: "PPF=max output combos; on curve=efficient, inside=inefficient, outside=unattainable. Growth=shift out.",
      sections: [
        { heading: "Key idea", body: "PPF visualises scarcity and opportunity cost." },
        { heading: "Growth", body: "Economic growth = PPF shifts outward (more resources/technology)." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson273",
    lesson: {
      id: "cieiec-u1-lesson-1-3", code: "1-3",
      title: "Specialisation and Division of Labour",
      goal: "I CAN explain specialisation, division of labour and their benefits.",
      standards: ["Cambridge IGCSE Economics 0455", "Paper 2: specialisation"],
      vocabulary: [
        { term: "Specialisation", definition: "Focusing on producing specific goods/services." },
        { term: "Division of labour", definition: "Breaking production into specialised tasks." },
        { term: "Absolute advantage", definition: "Producing more output with same inputs." },
        { term: "Comparative advantage", definition: "Lower opportunity cost of production." },
        { term: "Productivity", definition: "Output per unit of input." },
        { term: "Efficiency", definition: "Using resources effectively." },
      ],
      concept: {
        id: "cieiec-u1-s3-spec", title: "Specialisation",
        skill: "Understand specialisation and its benefits.",
        sections: [
          { heading: "Specialisation", body: "Countries/workers specialise in what they do best. Absolute advantage: produce more with same inputs. Comparative advantage: lower opportunity cost — enables trade benefits even if one country is better at everything." },
          { heading: "Division of labour", body: "Breaking production into specialised tasks (Adam Smith's pin factory). Benefits: increased productivity, skill development, time savings. Drawbacks: boring work, interdependence, unemployment risk." },
        ],
        keyFormulas: [
          { name: "Absolute advantage", statement: "more output, same inputs" },
          { name: "Comparative advantage", statement: "lower opportunity cost" },
          { name: "Division of labour", statement: "specialised tasks" },
        ],
        workedExample: {
          problem: "Country A can produce 100 cars OR 50 computers. Country B can produce 80 cars OR 40 computers. Who has absolute advantage? Who should specialise?",
          solution: "A has absolute advantage in both. But B has lower opportunity cost in one — both benefit from specialisation based on comparative advantage.",
        },
        questions: [
          {
            id: "cieiec-u1-sp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is specialisation?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Focusing on producing specific goods/services" }, { id: "b", text: "Producing everything" }, { id: "c", text: "A type of tax" }, { id: "d", text: "A market structure" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Specialisation", statement: "Focusing on specific products." }],
              steps: [{ reasoning: "Specialisation = focusing on specific goods/services.", marks: 1, markCode: "M" }],
              finalAnswer: "Focusing on specific products",
            },
          },
          {
            id: "cieiec-u1-sp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is comparative advantage?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Comparative advantage", statement: "Lower opportunity cost." }],
              steps: [
                { reasoning: "Lower opportunity cost of production.", marks: 1, markCode: "M" },
                { reasoning: "Enables trade benefits.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Lower opportunity cost",
            },
          },
          {
            id: "cieiec-u1-sp-q3", difficulty: "core", totalMarks: 3,
            stem: "What are benefits of the division of labour?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Division of labour", statement: "Benefits and drawbacks." }],
              steps: [
                { reasoning: "Increased productivity, skill development.", marks: 1, markCode: "M" },
                { reasoning: "Time savings, efficiency.", marks: 1, markCode: "M" },
                { reasoning: "Drawbacks: boring work, interdependence.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Productivity, skills, efficiency",
            },
          },
          {
            id: "cieiec-u1-sp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define specialisation, division of labour, absolute advantage, comparative advantage, productivity, efficiency. (b) What is specialisation? (c) What is division of labour? (d) What is absolute advantage? (e) What is comparative advantage? (f) What are benefits of specialisation? (g) What are drawbacks of division of labour? (h) Explain why countries specialise and trade.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Specialisation", statement: "Advantages, trade." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Focusing on specific products.", marks: 1, markCode: "M" },
                { reasoning: "(c) Specialised tasks.", marks: 1, markCode: "M" },
                { reasoning: "(d) More output, same inputs.", marks: 1, markCode: "M" },
                { reasoning: "(e) Lower opportunity cost.", marks: 1, markCode: "M" },
                { reasoning: "(f) Efficiency, quality, lower costs.", marks: 1, markCode: "M" },
                { reasoning: "(g) Boring, interdependence, unemployment risk.", marks: 1, markCode: "M" },
                { reasoning: "(h) Comparative advantage enables mutual benefit.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Specialisation and trade.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieiec-u1-sp-notes", title: "Specialisation — notes",
      summary: "Specialisation=focusing on strengths. Comparative advantage=lower opportunity cost enables trade.",
      sections: [
        { heading: "Key idea", body: "Specialisation increases efficiency and enables mutually beneficial trade." },
        { heading: "Division of labour", body: "Breaking tasks into specialised steps boosts productivity but can be monotonous." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson274",
    lesson: {
      id: "cieiec-u1-lesson-1-4", code: "1-4",
      title: "Economic Systems",
      goal: "I CAN compare market, planned and mixed economic systems.",
      standards: ["Cambridge IGCSE Economics 0455", "Paper 2: economic systems"],
      vocabulary: [
        { term: "Market economy", definition: "Economy where decisions made by markets." },
        { term: "Planned economy", definition: "Economy where government controls decisions." },
        { term: "Mixed economy", definition: "Combination of market and planned." },
        { term: "Free market", definition: "Minimal government intervention." },
        { term: "Command economy", definition: "Government controls production/allocation." },
        { term: "Price mechanism", definition: "Supply/demand determines prices." },
      ],
      concept: {
        id: "cieiec-u1-s4-sys", title: "Economic systems",
        skill: "Compare different economic systems.",
        sections: [
          { heading: "Market economy", body: "Decisions by supply/demand. Pros: efficiency, innovation, consumer choice. Cons: inequality, market failure, instability." },
          { heading: "Planned economy", body: "Government controls production/allocation. Pros: equality, no unemployment (theoretically). Cons: inefficiency, lack of innovation, shortages." },
          { heading: "Mixed economy", body: "Most countries use mixed systems — market forces with government intervention for equity/stability." },
        ],
        keyFormulas: [
          { name: "Market", statement: "supply/demand decisions" },
          { name: "Planned", statement: "government control" },
          { name: "Mixed", statement: "combination" },
        ],
        workedExample: {
          problem: "Why do most countries have mixed economies?",
          solution: "Pure market causes inequality/failure; pure planned causes inefficiency. Mixed balances efficiency with equity.",
        },
        questions: [
          {
            id: "cieiec-u1-sy-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a market economy?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Economy where decisions made by markets" }, { id: "b", text: "Government controlled" }, { id: "c", text: "No trade" }, { id: "d", text: "A type of tax" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Market economy", statement: "Market decisions." }],
              steps: [{ reasoning: "Market economy = supply/demand decisions.", marks: 1, markCode: "M" }],
              finalAnswer: "Market decisions",
            },
          },
          {
            id: "cieiec-u1-sy-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a planned economy?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Planned economy", statement: "Government control." }],
              steps: [
                { reasoning: "Government controls production/allocation.", marks: 1, markCode: "M" },
                { reasoning: "e.g. former Soviet Union, North Korea.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Government control",
            },
          },
          {
            id: "cieiec-u1-sy-q3", difficulty: "core", totalMarks: 3,
            stem: "What is a mixed economy? Why is it common?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Mixed economy", statement: "Combination system." }],
              steps: [
                { reasoning: "Combination of market and planned.", marks: 1, markCode: "M" },
                { reasoning: "Balances efficiency with equity.", marks: 1, markCode: "M" },
                { reasoning: "Most countries use mixed systems.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Market + government intervention",
            },
          },
          {
            id: "cieiec-u1-sy-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define market economy, planned economy, mixed economy, free market, command economy, price mechanism. (b) What is a market economy? (c) What is a planned economy? (d) What is a mixed economy? (e) What are advantages of market economy? (f) What are disadvantages of planned economy? (g) Why do most countries use mixed economies? (h) Compare market vs planned economy.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Economic systems", statement: "Comparison." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Market decisions.", marks: 1, markCode: "M" },
                { reasoning: "(c) Government control.", marks: 1, markCode: "M" },
                { reasoning: "(d) Combination system.", marks: 1, markCode: "M" },
                { reasoning: "(e) Efficiency, innovation, choice.", marks: 1, markCode: "M" },
                { reasoning: "(f) Inefficiency, shortages, no innovation.", marks: 1, markCode: "M" },
                { reasoning: "(g) Balances efficiency with equity.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid comparison.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Economic systems comparison.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieiec-u1-sy-notes", title: "Economic systems — notes",
      summary: "Market=efficiency; planned=equality; mixed=balance. Most countries use mixed systems.",
      sections: [
        { heading: "Key idea", body: "No pure system is perfect — mixed economies balance competing goals." },
        { heading: "Price mechanism", body: "Supply/demand determines prices in market economies." },
      ],
    },
  },
  {
    file: "lesson-1-5.ts", exportName: "lesson275",
    lesson: {
      id: "cieiec-u1-lesson-1-5", code: "1-5",
      title: "Demand and Supply: Basic Analysis",
      goal: "I CAN draw and interpret demand and supply diagrams.",
      standards: ["Cambridge IGCSE Economics 0455", "Paper 4: microeconomics"],
      vocabulary: [
        { term: "Demand", definition: "Quantity consumers willing/able to buy at each price." },
        { term: "Supply", definition: "Quantity producers willing/able to sell at each price." },
        { term: "Equilibrium", definition: "Price/quantity where demand=supply." },
        { term: "Shortage", definition: "Demand exceeds supply at current price." },
        { term: "Surplus", definition: "Supply exceeds demand at current price." },
        { term: "Law of demand", definition: "Higher price → lower quantity demanded." },
      ],
      concept: {
        id: "cieiec-u1-s5-ds", title: "Demand and supply",
        skill: "Draw and interpret basic D&S diagrams.",
        sections: [
          { heading: "Demand curve", body: "Downward sloping — higher price → lower quantity demanded. Shifts: income changes, tastes, prices of substitutes/complements, expectations." },
          { heading: "Supply curve", body: "Upward sloping — higher price → higher quantity supplied. Shifts: costs, technology, number of producers, expectations." },
          { heading: "Equilibrium", body: "Where demand=supply — market clearing price/quantity. Shortage below equilibrium; surplus above." },
        ],
        keyFormulas: [
          { name: "Demand", statement: "price↑ → quantity↓" },
          { name: "Supply", statement: "price↑ → quantity↑" },
          { name: "Equilibrium", statement: "demand = supply" },
        ],
        workedExample: {
          problem: "At $5, demand=100 but supply=80. What happens?",
          solution: "Shortage — price rises, quantity supplied increases, quantity demanded decreases until equilibrium.",
        },
        questions: [
          {
            id: "cieiec-u1-ds-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the law of demand?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Higher price → lower quantity demanded" }, { id: "b", text: "Higher price → higher quantity" }, { id: "c", text: "Price doesn't affect demand" }, { id: "d", text: "Demand is constant" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Law of demand", statement: "Inverse relationship." }],
              steps: [{ reasoning: "Higher price → lower quantity demanded.", marks: 1, markCode: "M" }],
              finalAnswer: "Price↑ → quantity↓",
            },
          },
          {
            id: "cieiec-u1-ds-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is equilibrium in a market?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Equilibrium", statement: "Demand=supply." }],
              steps: [
                { reasoning: "Price/quantity where demand equals supply.", marks: 1, markCode: "M" },
                { reasoning: "Market clearing point.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Demand=supply point",
            },
          },
          {
            id: "cieiec-u1-ds-q3", difficulty: "core", totalMarks: 3,
            stem: "What causes the demand curve to shift?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Demand shifts", statement: "Determinants of demand." }],
              steps: [
                { reasoning: "Income changes, tastes/preferences.", marks: 1, markCode: "M" },
                { reasoning: "Prices of substitutes/complements.", marks: 1, markCode: "M" },
                { reasoning: "Expectations, population changes.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Income, tastes, related prices",
            },
          },
          {
            id: "cieiec-u1-ds-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define demand, supply, equilibrium, shortage, surplus, law of demand, law of supply. (b) What is demand? (c) What is supply? (d) What is equilibrium? (e) What is shortage? (f) What is surplus? (g) What causes demand to increase? (h) Draw a demand and supply diagram showing equilibrium.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Demand/supply", statement: "Basic analysis." }],
              steps: [
                { reasoning: "(a) All seven definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Quantity consumers will buy.", marks: 1, markCode: "M" },
                { reasoning: "(c) Quantity producers will sell.", marks: 1, markCode: "M" },
                { reasoning: "(d) Demand=supply point.", marks: 1, markCode: "M" },
                { reasoning: "(e) Demand exceeds supply.", marks: 1, markCode: "M" },
                { reasoning: "(f) Supply exceeds demand.", marks: 1, markCode: "M" },
                { reasoning: "(g) Income↑, tastes change, substitute prices↑.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid D&S diagram.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Demand and supply analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieiec-u1-ds-notes", title: "Demand/supply — notes",
      summary: "Demand=downward, supply=upward, equilibrium=intersection. Shortage below, surplus above.",
      sections: [
        { heading: "Key idea", body: "Markets tend toward equilibrium through price adjustments." },
        { heading: "Shifts", body: "Non-price factors shift curves; price changes move along curves." },
      ],
    },
  },
];
