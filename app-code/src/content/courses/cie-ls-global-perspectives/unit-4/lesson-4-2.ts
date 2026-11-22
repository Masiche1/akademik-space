import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cielsgp-u4-lesson-4-2",
  code: "4-2",
  title: "Digital Citizenship and Global Inequality",
  goal: "I CAN research digital divide issues and evaluate solutions for global inequality.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129",
    "Unit 4: applied global issues",
  ],
  vocabulary: [
    {
      term: "Digital divide",
      definition: "Gap between those with and without internet access.",
    },
    {
      term: "Digital citizenship",
      definition: "Responsible, ethical use of technology.",
    },
    {
      term: "Global inequality",
      definition: "Differences in wealth, opportunity between countries.",
    },
    {
      term: "GDP",
      definition: "Gross Domestic Product — measures economic output.",
    },
    {
      term: "Human Development Index",
      definition: "Measure combining income, education, health.",
    },
    {
      term: "Digital literacy",
      definition: "Skills to use technology effectively.",
    },
  ],
  concepts: [
    {
      id: "cielsgp-u4l2-c1-digital-divide",
      title: "The digital divide",
      skill: "Explain causes and effects of the digital divide.",
      lesson: {
        sections: [
          {
            heading: "What is the digital divide?",
            body: "Gap between people with access to technology/internet and those without. **Access divide**: infrastructure (rural areas, developing countries lack connectivity). **Usage divide**: even with access, skills vary. **Quality divide**: fast broadband vs slow/unreliable. Affects education, jobs, healthcare, government services.",
          },
          {
            heading: "Causes and effects",
            body: "**Causes**: cost of devices/internet, lack of infrastructure, low digital literacy, government policy. **Effects**: unequal educational opportunities (online learning), job market disadvantage, social exclusion, harder to access services — deepens existing inequality.",
          },
        ],
        keyFormulas: [
          { name: "Digital divide", statement: "Access + skills gap" },
          { name: "Digital literacy", statement: "Tech skills" },
          { name: "Access divide", statement: "Infrastructure" },
        ],
        workedExample: {
          problem: "Why did COVID-19 remote learning widen inequality?",
          solution:
            "Students without devices/internet couldn't access online classes — those with access continued learning, widening achievement gap; showed digital divide's real impact.",
        },
      },
      questions: [
        {
          id: "cielsgp-q-u4l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'digital divide' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Internet speed only" },
              { id: "b", text: "Computer speed differences" },
              { id: "c", text: "Gap in access to technology/internet" },
              { id: "d", text: "Phone screen sizes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital divide",
                statement: "Access gap.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Access gap",
            commonErrors: ["Speed only."],
          },
        },
        {
          id: "cielsgp-q-u4l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'digital literacy'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital literacy",
                statement: "Tech skills.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ability to use technology effectively — finding information online, using software, evaluating online content, online safety; essential skill for modern life/work.",
            commonErrors: ["Owning a computer."],
          },
        },
        {
          id: "cielsgp-q-u4l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two causes of the digital divide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Divide causes",
                statement: "Infrastructure + skills.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. lack of infrastructure (rural/developing areas no broadband) and cost barriers (devices/internet expensive for poor families) — also low digital literacy, government policy gaps.",
            commonErrors: ["No causes."],
          },
        },
        {
          id: "cielsgp-q-u4l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the digital divide affects education.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Education impact",
                statement: "Unequal access.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Students without devices/internet miss online resources, remote learning, digital skills — falls behind peers; COVID-19 showed dramatic widening of achievement gaps; deepens existing inequality.",
            commonErrors: ["No impact."],
          },
        },
        {
          id: "cielsgp-q-u4l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether providing devices alone can close the digital divide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Device provision",
                statement: "Access vs skills.",
              },
            ],
            steps: [
              { reasoning: "Helps.", marks: 1, markCode: "M" },
              { reasoning: "Insufficient.", marks: 1, markCode: "M" },
              { reasoning: "Other needs.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Devices give access but not skills — need digital literacy training, affordable internet, maintenance/support, culturally relevant content; 'access without ability' still excludes; multi-faceted problem needs multi-faceted solution.",
            commonErrors: ["Devices sufficient."],
          },
        },
        {
          id: "cielsgp-q-u4l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'usage divide'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Usage divide",
                statement: "Skills gap.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Difference from access.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Even with internet access, differences in skills/ability to use technology effectively — some can only basic functions, others use advanced tools; deeper than access divide.",
            commonErrors: ["Access divide."],
          },
        },
        {
          id: "cielsgp-q-u4l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which group is most affected by the digital divide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Students only" },
              { id: "b", text: "Developers" },
              { id: "c", text: "Rural and low-income populations" },
              { id: "d", text: "Urban wealthy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Affected groups",
                statement: "Rural/poor.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Rural/low-income",
            commonErrors: ["Wealthy."],
          },
        },
        {
          id: "cielsgp-q-u4l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two effects of the digital divide on job opportunities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Job effects", statement: "Access." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. can't apply for online jobs (no access/devices) and lack digital skills needed for modern workplace — remote work opportunities inaccessible; widens employment gap.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cielsgp-q-u4l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'digital citizenship' and why it matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital citizenship",
                statement: "Responsible use.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Aspects.", marks: 1, markCode: "M" },
              { reasoning: "Importance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Responsible, ethical technology use — online safety, respectful communication, critical evaluation of content, privacy protection; essential for safe, productive participation in digital society.",
            commonErrors: ["Just using tech."],
          },
        },
        {
          id: "cielsgp-q-u4l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate government initiatives to bridge the digital divide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gov initiatives",
                statement: "Effectiveness.",
              },
            ],
            steps: [
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. rural broadband programmes, subsidised devices, digital literacy training — necessary but often underfunded, slow rollout, doesn't address skills/affordability fully; needs sustained investment + private sector partnership.",
            commonErrors: ["Perfect solution."],
          },
        },
        {
          id: "cielsgp-q-u4l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'access divide' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Differences in infrastructure and connectivity" },
              { id: "b", text: "Differences in internet content" },
              { id: "c", text: "The cost of mobile phones" },
              { id: "d", text: "Differences in skills only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Access divide",
                statement: "Infrastructure gap.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Infrastructure/connectivity",
            commonErrors: ["Usage divide confused."],
          },
        },
        {
          id: "cielsgp-q-u4l2c1-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a survey of 80 students, 36 had reliable home internet. What percentage lacked reliable home internet?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 55, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage",
                statement: "Lacking = total minus having.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(80 - 36) / 80 x 100 = 44/80 x 100 = 55%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "55%",
            commonErrors: ["Giving 45% with access."],
          },
        },
        {
          id: "cielsgp-q-u4l2c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rural broadband project plans to connect 250 households but has only connected 150 so far. How many households remain unconnected?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Remaining",
                statement: "Total minus connected.",
              },
            ],
            steps: [
              { reasoning: "250 - 150 = 100 households.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100",
            commonErrors: ["Subtracting from wrong number."],
          },
        },
        {
          id: "cielsgp-q-u4l2c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a consequence of the digital divide for healthcare?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No effect on health services" },
              {
                id: "b",
                text: "Reduced access to telemedicine and online health information",
              },
              { id: "c", text: "Better health outcomes" },
              { id: "d", text: "Free healthcare for all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Health impact", statement: "Access inequality." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Reduced telemedicine access",
            commonErrors: ["Positive effect claimed."],
          },
        },
        {
          id: "cielsgp-q-u4l2c1-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During COVID-19 lockdowns, the digital divide most affected:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Students without devices or internet accessing remote learning",
              },
              { id: "b", text: "Teachers only" },
              { id: "c", text: "No students" },
              { id: "d", text: "Students with fast broadband" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "COVID impact", statement: "Learning gap." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Students without access",
            commonErrors: ["No impact claimed."],
          },
        },
        {
          id: "cielsgp-q-u4l2c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether the digital divide is mainly a technological problem or a social and economic one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Divide nature",
                statement: "Tech vs social.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Technological gap: infrastructure, devices, connectivity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Social/economic gap: skills, affordability, literacy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence: access alone insufficient without skills (usage divide).",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both sides.", marks: 1, markCode: "R" },
              {
                reasoning: "Defensible conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Both — infrastructure must exist (technological) but the usage divide shows skills and affordability matter equally; underlying poverty and education determine outcomes; solutions need technology plus social investment.",
            commonErrors: ["Technology alone."],
          },
        },
      ],
    },
    {
      id: "cielsgp-u4l2-c2-inequality",
      title: "Global inequality and measuring development",
      skill: "Analyse global inequality and evaluate development measures.",
      lesson: {
        sections: [
          {
            heading: "Measuring inequality and development",
            body: "**GDP**: total economic output — doesn't show distribution or wellbeing. **GDP per capita**: average income — still hides inequality. **HDI** (Human Development Index): combines income, education, health — better wellbeing measure. **Gini coefficient**: measures income inequality (0=perfect equality, 1=perfect inequality). **Poverty lines**: $1.90/day extreme poverty measure.",
          },
          {
            heading: "Causes and solutions",
            body: "**Causes of inequality**: colonial history, trade structures, corruption, lack of education/healthcare, conflict. **Solutions**: fair trade, debt relief, education investment, healthcare access, infrastructure development, good governance. Global cooperation needed — SDGs (Sustainable Development Goals) aim to reduce poverty by 2030.",
          },
        ],
        keyFormulas: [
          { name: "HDI", statement: "Income+education+health" },
          { name: "Gini", statement: "Inequality measure" },
          { name: "GDP per capita", statement: "Average income" },
        ],
        workedExample: {
          problem: "Why might GDP per capita be misleading for development?",
          solution:
            "High GDP per capita doesn't mean everyone benefits — oil-rich countries may have high GDP but poverty persists; HDI better captures health/education wellbeing.",
        },
      },
      questions: [
        {
          id: "cielsgp-q-u4l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "GDP measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Population health" },
              { id: "b", text: "Happiness" },
              { id: "c", text: "Education levels" },
              { id: "d", text: "Total economic output of a country" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "GDP", statement: "Economic output." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Economic output",
            commonErrors: ["Wellbeing."],
          },
        },
        {
          id: "cielsgp-q-u4l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the HDI measure?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "HDI", statement: "Wellbeing." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Components.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Human Development Index — combines income (GNI per capita), education (years of schooling), and health (life expectancy); better measure of development than GDP alone.",
            commonErrors: ["GDP only."],
          },
        },
        {
          id: "cielsgp-q-u4l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why GDP per capita can be misleading.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP limits",
                statement: "Average hides inequality.",
              },
            ],
            steps: [
              { reasoning: "Issue.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Better measure.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Average income hides distribution — oil-rich countries high GDP per capita but poverty persists; doesn't measure health, education, environment; HDI better captures wellbeing.",
            commonErrors: ["Perfect measure."],
          },
        },
        {
          id: "cielsgp-q-u4l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give two causes of global inequality between countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Inequality causes",
                statement: "Historical + structural.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 3, markCode: "A" },
            ],
            finalAnswer:
              "e.g. colonial history (resource extraction left poor institutions) and unfair trade structures (low prices for raw materials, high for manufactured goods) — also corruption, conflict, lack of education/healthcare.",
            commonErrors: ["No causes."],
          },
        },
        {
          id: "cielsgp-q-u4l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the effectiveness of foreign aid in reducing poverty.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aid eval",
                statement: "Mixed results.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Criticisms.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Can fund healthcare, education, infrastructure — but often tied to donor interests, corruption, dependency; effectiveness varies by governance; better targeted aid (cash transfers, results-based) shows promise.",
            commonErrors: ["Perfect solution."],
          },
        },
        {
          id: "cielsgp-q-u4l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does the Gini coefficient measure?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gini", statement: "Inequality." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Scale.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Income inequality within a country — 0 = perfect equality (everyone same income), 1 = perfect inequality (one person has all); commonly used to compare inequality levels.",
            commonErrors: ["Poverty measure."],
          },
        },
        {
          id: "cielsgp-q-u4l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The HDI includes which three dimensions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Income, education, health" },
              { id: "b", text: "Only income" },
              { id: "c", text: "GDP, population, area" },
              { id: "d", text: "Military, trade, tourism" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "HDI components",
                statement: "Income+edu+health.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Income, education, health",
            commonErrors: ["GDP only."],
          },
        },
        {
          id: "cielsgp-q-u4l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two solutions to reduce global inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Inequality solutions",
                statement: "Development strategies.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. fair trade (better prices for developing country products) and debt relief (forgiving unsustainable debt) — also education/healthcare investment, infrastructure development, good governance.",
            commonErrors: ["No solutions."],
          },
        },
        {
          id: "cielsgp-q-u4l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'resource curse'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Resource curse",
                statement: "Rich resources, poor outcomes.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Countries rich in natural resources (oil, minerals) often have worse development outcomes — resource wealth fuels corruption, conflict, neglect of other sectors; paradox of plenty.",
            commonErrors: ["Always beneficial."],
          },
        },
        {
          id: "cielsgp-q-u4l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether economic growth alone reduces poverty.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth vs poverty",
                statement: "Trickle-down debate.",
              },
            ],
            steps: [
              { reasoning: "Growth helps.", marks: 1, markCode: "M" },
              { reasoning: "Limits.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Growth creates jobs/income — but benefits may not reach poorest (inequality); 'trickle-down' uncertain; targeted poverty programmes (education, healthcare, social protection) more direct; growth necessary but not sufficient.",
            commonErrors: ["Always sufficient."],
          },
        },
        {
          id: "cielsgp-q-u4l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Gini coefficient ranges from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "-1 to 1" },
              { id: "b", text: "0 to 100" },
              { id: "c", text: "0 (perfect equality) to 1 (perfect inequality)" },
              { id: "d", text: "0 to 10" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gini scale", statement: "0 to 1." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 0 to 1",
            commonErrors: ["0-100 confused."],
          },
        },
        {
          id: "cielsgp-q-u4l2c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which measure best captures wellbeing by combining income, education and health?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GDP" },
              { id: "b", text: "Population size" },
              { id: "c", text: "Gini coefficient" },
              { id: "d", text: "Human Development Index (HDI)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "HDI", statement: "Wellbeing measure." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** HDI",
            commonErrors: ["GDP chosen."],
          },
        },
        {
          id: "cielsgp-q-u4l2c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Country A has a Gini coefficient of 0.25 and Country B has a Gini coefficient of 0.60. By how much does Country B's income inequality exceed Country A's?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.35 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Gini difference",
                statement: "Subtract coefficients.",
              },
            ],
            steps: [
              {
                reasoning: "0.60 - 0.25 = 0.35.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.35",
            commonErrors: ["Reporting 0.60 alone."],
          },
        },
        {
          id: "cielsgp-q-u4l2c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A country's GDP per capita rose from $2,000 to $2,500. What was the percentage increase?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage increase",
                statement: "Change over original.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Increase = $500; 500/2000 x 100 = 25%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25%",
            commonErrors: ["Using 2500 as denominator gives 20%."],
          },
        },
        {
          id: "cielsgp-q-u4l2c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways the digital divide can deepen global inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Divide and inequality",
                statement: "Compounding gaps.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. unequal access to online education limits skills and earning potential, and exclusion from digital government and health services reduces opportunity — technology gaps compound existing wealth gaps.",
            commonErrors: ["No link to inequality."],
          },
        },
        {
          id: "cielsgp-q-u4l2c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether the Sustainable Development Goals can realistically end extreme poverty by 2030.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SDG poverty",
                statement: "Progress vs setbacks.",
              },
            ],
            steps: [
              {
                reasoning: "Progress: global poverty has declined overall.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Setbacks: COVID-19, conflict, climate change slowed progress.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mixed evidence on targets being met.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both sides.", marks: 1, markCode: "R" },
              {
                reasoning: "Defensible conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Progress is real but uneven — SDGs provide a useful framework yet targets are unlikely to be fully met by 2030 given recent setbacks; poverty reduction needs sustained funding, good governance and action on root causes; ambitious but only partially achievable.",
            commonErrors: ["Guaranteed success or failure."],
          },
        },
      ],
    },
  ],
};
