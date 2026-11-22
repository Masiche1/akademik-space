import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cipgp-u3-lesson-3-1",
  code: "3-1",
  title: "My Community and the Wider World",
  goal: "I CAN explore how local communities connect to global issues.",
  standards: [
    "Cambridge Primary Global Perspectives 0838",
    "Unit 3: global connections",
  ],
  vocabulary: [
    {
      term: "Community",
      definition: "Group of people living or working together.",
    },
    {
      term: "Local issue",
      definition: "Problem affecting your neighbourhood.",
    },
    { term: "Global issue", definition: "Problem affecting people worldwide." },
    { term: "Interdependence", definition: "Depending on each other." },
    {
      term: "Perspective",
      definition: "A particular way of seeing something.",
    },
    {
      term: "Evidence",
      definition: "Facts or information supporting an idea.",
    },
  ],
  concepts: [
    {
      id: "cipgp-u3l1-c1-community",
      title: "Local communities and their issues",
      skill: "Identify local issues and their impact on communities.",
      lesson: {
        sections: [
          {
            heading: "What makes a community?",
            body: "A community is a group of people connected by shared place, interests, or goals — your school, neighbourhood, town. Communities face issues like litter, traffic, lack of green space, safety concerns. Local issues affect daily life — clean streets, safe parks, good schools matter to everyone.",
          },
          {
            heading: "Local to global connections",
            body: "Local actions connect to global issues: litter in your street relates to global waste problem; saving water locally helps global water scarcity. What we do locally contributes to global patterns — communities are part of bigger picture. Understanding connections helps us see why local action matters.",
          },
        ],
        keyFormulas: [
          { name: "Community", statement: "Shared place/goals" },
          { name: "Local issue", statement: "Neighbourhood problem" },
          { name: "Global issue", statement: "Worldwide problem" },
        ],
        workedExample: {
          problem: "How does litter in your street connect to global issues?",
          solution:
            "Street litter is part of global waste problem — plastic doesn't disappear, ends up in oceans; local littering contributes to worldwide pollution affecting animals and people everywhere.",
        },
      },
      questions: [
        {
          id: "cipgp-q-u3l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'community' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A country" },
              {
                id: "b",
                text: "A group of people connected by place or goals",
              },
              { id: "c", text: "Only your family" },
              { id: "d", text: "A building" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Community",
                statement: "Connected group.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Connected group",
            commonErrors: ["Just family."],
          },
        },
        {
          id: "cipgp-q-u3l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two examples of local issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Local issues",
                statement: "Neighbourhood.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. litter in streets, traffic congestion, lack of green space, unsafe roads — problems affecting daily life in your neighbourhood.",
            commonErrors: ["Only global issues."],
          },
        },
        {
          id: "cipgp-q-u3l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a local issue can connect to a global issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Local-global link",
                statement: "Connection.",
              },
            ],
            steps: [
              { reasoning: "Local example.", marks: 1, markCode: "M" },
              { reasoning: "Global link.", marks: 1, markCode: "M" },
              { reasoning: "Explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. local litter → plastic waste problem worldwide; local water waste → global water scarcity; our small actions contribute to bigger patterns affecting everyone.",
            commonErrors: ["No connection."],
          },
        },
        {
          id: "cipgp-q-u3l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why is it important to understand different perspectives in a community?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Perspectives",
                statement: "Multiple views.",
              },
            ],
            steps: [
              { reasoning: "Why.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Different people see issues differently — residents, business owners, children have different views; understanding all perspectives leads to better, fairer solutions that work for everyone.",
            commonErrors: ["One view only."],
          },
        },
        {
          id: "cipgp-q-u3l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how your school community could address a local environmental issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "School action",
                statement: "Community project.",
              },
            ],
            steps: [
              { reasoning: "Issue identified.", marks: 1, markCode: "M" },
              { reasoning: "Action proposed.", marks: 1, markCode: "M" },
              { reasoning: "Stakeholders.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. litter problem → set up recycling bins, organise clean-up days, educate students — involves students, staff, parents; small actions create visible change and build community responsibility.",
            commonErrors: ["Can't help."],
          },
        },
        {
          id: "cipgp-q-u3l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'interdependence' in a community?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interdependence",
                statement: "Mutual reliance.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "People depending on each other — shopkeepers need customers, customers need shops; teachers need students, students need teachers; communities work through mutual support.",
            commonErrors: ["Independence."],
          },
        },
        {
          id: "cipgp-q-u3l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a local issue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Litter in your street" },
              { id: "b", text: "Climate change" },
              { id: "c", text: "Ocean pollution" },
              { id: "d", text: "World poverty" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Local issue",
                statement: "Neighbourhood.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Street litter",
            commonErrors: ["Global issues."],
          },
        },
        {
          id: "cipgp-q-u3l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways communities depend on each other globally.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Global interdependence",
                statement: "Trade + resources.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. food imports (countries depend on others for crops), and technology/products made elsewhere used locally — global trade connects communities worldwide.",
            commonErrors: ["Self-sufficient."],
          },
        },
        {
          id: "cipgp-q-u3l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'perspective' matters when solving community problems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Perspective",
                statement: "Different views.",
              },
            ],
            steps: [
              { reasoning: "Why.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Different groups see problems differently — e.g. shop owners vs residents on parking; considering all views finds solutions everyone accepts, avoids conflict.",
            commonErrors: ["Ignore views."],
          },
        },
        {
          id: "cipgp-q-u3l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether small community actions can make a difference to global issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Local impact",
                statement: "Scale vs influence.",
              },
            ],
            steps: [
              { reasoning: "Direct impact.", marks: 1, markCode: "M" },
              { reasoning: "Indirect influence.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Small actions alone can't solve global problems but matter — reduce local emissions, build habits, inspire others, demonstrate what's possible; many small actions = big collective impact; also influence wider change.",
            commonErrors: ["Too small to matter."],
          },
        },
        {
          id: "cipgp-q-u3l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an example of a community?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single building with no people" },
              { id: "b", text: "A map of the world" },
              { id: "c", text: "People living in the same neighbourhood" },
              { id: "d", text: "One person alone" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Community",
                statement: "Connected group.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Neighbourhood group",
            commonErrors: ["Not a group."],
          },
        },
        {
          id: "cipgp-q-u3l1c1-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'local issue' is a problem that affects:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only animals" },
              { id: "b", text: "People in your neighbourhood or area" },
              { id: "c", text: "Nobody" },
              { id: "d", text: "Only people in other countries" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Local issue",
                statement: "Neighbourhood problem.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Your neighbourhood",
            commonErrors: ["Global issue."],
          },
        },
        {
          id: "cipgp-q-u3l1c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Interdependence' in a community means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignoring neighbours" },
              { id: "b", text: "Only trading money" },
              { id: "c", text: "Everyone doing everything alone" },
              { id: "d", text: "People depending on each other" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interdependence",
                statement: "Mutual reliance.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Mutual reliance",
            commonErrors: ["Independence."],
          },
        },
        {
          id: "cipgp-q-u3l1c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways your community could reduce litter in the streets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Litter solutions",
                statement: "Practical actions.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. put up more litter bins in busy areas and organise community clean-up days — also education campaigns to encourage people not to drop rubbish; cleaner streets improve everyone's daily life.",
            commonErrors: ["No practical ideas."],
          },
        },
        {
          id: "cipgp-q-u3l1c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why members of a community need to work together.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Community cooperation",
                statement: "Shared goals.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. shared problems like litter or safety need everyone's help to solve, and working together builds trust and stronger community bonds — neighbours support each other in good times and bad.",
            commonErrors: ["Work alone."],
          },
        },
        {
          id: "cipgp-q-u3l1c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether your community should spend money on a new park or on repairing roads.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Community priorities",
                statement: "Weighing needs.",
              },
            ],
            steps: [
              { reasoning: "Case for park.", marks: 1, markCode: "M" },
              { reasoning: "Case for roads.", marks: 1, markCode: "M" },
              { reasoning: "Evidence/needs.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Park: green space, health, community space — but roads may be unsafe or damaged affecting daily travel; depends on actual needs — if roads are dangerous, safety comes first; ideally phased plan could deliver both over time.",
            commonErrors: ["No weighing."],
          },
        },
      ],
    },
    {
      id: "cipgp-u3l1-c2-global",
      title: "Global issues that affect everyone",
      skill: "Identify major global issues and their interconnections.",
      lesson: {
        sections: [
          {
            heading: "Major global issues",
            body: "**Climate change**: affects weather, food, homes everywhere. **Poverty**: millions lack basics — food, water, shelter. **Health**: diseases spread globally, healthcare unequal. **Education**: not all children can go to school. **Water scarcity**: clean water limited in many places. Issues interconnect — poverty worsens health, climate change worsens poverty.",
          },
          {
            heading: "Why global issues matter to you",
            body: "Even if issues seem far away, they connect: what we buy affects workers worldwide; pollution travels across borders; diseases spread through travel. Understanding global issues helps us make better choices and care about people everywhere — we're all connected.",
          },
        ],
        keyFormulas: [
          { name: "Climate change", statement: "Global weather" },
          { name: "Poverty", statement: "Lack of basics" },
          { name: "Interconnection", statement: "Issues linked" },
        ],
        workedExample: {
          problem: "How are poverty and health connected?",
          solution:
            "Poor families can't afford healthcare, clean water, good food — more likely to get sick; sickness prevents work, deepening poverty; issues reinforce each other.",
        },
      },
      questions: [
        {
          id: "cipgp-q-u3l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a global issue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Local traffic" },
              { id: "b", text: "Climate change" },
              { id: "c", text: "Litter in one street" },
              { id: "d", text: "One broken bench" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Global issue", statement: "Worldwide." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Climate change",
            commonErrors: ["Local issue."],
          },
        },
        {
          id: "cipgp-q-u3l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two global issues affecting people worldwide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Global issues",
                statement: "Worldwide problems.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. climate change (weather/farming worldwide) and poverty (millions lack food/water/shelter) — also health inequalities, water scarcity, lack of education.",
            commonErrors: ["Only local."],
          },
        },
        {
          id: "cipgp-q-u3l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how global issues are 'interconnected'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interconnection",
                statement: "Linked.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Issues affect each other — poverty worsens health (can't afford care), climate change worsens poverty (crop failures); solving one often helps others; need joined-up solutions.",
            commonErrors: ["Separate problems."],
          },
        },
        {
          id: "cipgp-q-u3l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "How does poverty affect health?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poverty-health link",
                statement: "Reinforcing.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Cycle.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Poor families can't afford healthcare, clean water, nutritious food — more illness; sickness prevents work → less income → deeper poverty; cycle continues unless broken by support.",
            commonErrors: ["No connection."],
          },
        },
        {
          id: "cipgp-q-u3l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether rich countries have a responsibility to help with global issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Responsibility",
                statement: "Wealth vs duty.",
              },
            ],
            steps: [
              { reasoning: "Arguments for.", marks: 1, markCode: "M" },
              { reasoning: "Arguments against.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rich countries have more resources, historically caused pollution — some duty to help; but also own problems at home; best approach: fair trade, climate cooperation, targeted aid — shared responsibility not charity.",
            commonErrors: ["No duty."],
          },
        },
        {
          id: "cipgp-q-u3l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'water scarcity'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Water scarcity",
                statement: "Limited water.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Cause.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Not enough clean water for people's needs — caused by drought, pollution, overuse, climate change; affects health, farming, industry; billions lack safe water.",
            commonErrors: ["Plenty of water."],
          },
        },
        {
          id: "cipgp-q-u3l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a global issue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "World hunger" },
              { id: "b", text: "One broken streetlight" },
              { id: "c", text: "Climate change" },
              { id: "d", text: "Disease spread" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Global issues", statement: "Worldwide." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Streetlight",
            commonErrors: ["Global issue."],
          },
        },
        {
          id: "cipgp-q-u3l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons global issues affect everyone even if far away.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Global reach", statement: "Connected." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. products we buy made by workers worldwide (affects their lives), and pollution/diseases travel across borders — we're connected through trade, environment, travel.",
            commonErrors: ["No connection."],
          },
        },
        {
          id: "cipgp-q-u3l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how climate change affects food production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate-food link",
                statement: "Crops.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Changing weather patterns, droughts, floods damage crops — lower yields, food prices rise, hunger increases especially in poor countries dependent on farming; affects everyone through food costs.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cipgp-q-u3l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether it is fair that some countries suffer more from global issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fairness",
                statement: "Unequal impact.",
              },
            ],
            steps: [
              { reasoning: "Inequality.", marks: 1, markCode: "M" },
              { reasoning: "Reasons.", marks: 1, markCode: "M" },
              { reasoning: "Justice.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Poorest countries suffer most despite contributing least — geographic vulnerability (coasts, drought-prone), less resources for adaptation; 'climate justice' argues those who caused problem should help those affected; fairness demands shared responsibility.",
            commonErrors: ["Fair enough."],
          },
        },
        {
          id: "cipgp-q-u3l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Climate change is mainly caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Too much rain" },
              { id: "b", text: "Greenhouse gases from human activity" },
              { id: "c", text: "More trees" },
              { id: "d", text: "Saving water" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Climate change", statement: "Cause." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Greenhouse gases",
            commonErrors: ["Natural weather."],
          },
        },
        {
          id: "cipgp-q-u3l1c2-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Poverty' means people lack:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only luxury items" },
              { id: "b", text: "Nothing at all" },
              { id: "c", text: "Basics like food, water and shelter" },
              { id: "d", text: "Everything everywhere" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Poverty", statement: "Lack of basics." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Basics",
            commonErrors: ["Only luxuries."],
          },
        },
        {
          id: "cipgp-q-u3l1c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Interconnected' global issues means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Issues stay separate" },
              { id: "b", text: "Issues affect and influence each other" },
              { id: "c", text: "Only one issue exists" },
              { id: "d", text: "Issues disappear" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Interconnection", statement: "Linked." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Linked issues",
            commonErrors: ["Separate."],
          },
        },
        {
          id: "cipgp-q-u3l1c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how diseases can spread between countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Disease spread",
                statement: "Travel + trade.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "People travel and trade goods across borders — infected travellers or contaminated products carry diseases; e.g. COVID-19 spread worldwide within months; shows why health is a global not just local issue.",
            commonErrors: ["Can't spread."],
          },
        },
        {
          id: "cipgp-q-u3l1c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways education is connected to global issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Education links", statement: "Global." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. millions of children worldwide lack school access (education inequality), and education helps people understand global issues and act on them — educated communities cope better with problems like climate change and disease.",
            commonErrors: ["No connection."],
          },
        },
        {
          id: "cipgp-q-u3l1c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether individuals or governments should take the lead on global issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Who leads",
                statement: "Both needed.",
              },
            ],
            steps: [
              { reasoning: "Individual role.", marks: 1, markCode: "M" },
              { reasoning: "Government role.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Individuals: daily choices, habits, voting, influencing others — but limited power/resources. Governments: funding, policies, international agreements — but slow and political; best results combine both — individuals create demand and habits, governments create systems and scale.",
            commonErrors: ["Only one."],
          },
        },
      ],
    },
  ],
};
