module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson21",
    lesson: {
      id: "cipg-u2-lesson-2-1", code: "2-1",
      title: "Stage 4 — Researching Real-World Issues",
      goal: "I CAN research a real-world issue, ask effective questions and gather reliable information.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 4: research", "Cambridge Primary Global Perspectives 0838 strand: Research"],
      stage: 4,
      vocabulary: [
        { term: "Issue", definition: "A topic people have different views about or want to change." },
        { term: "Global issue", definition: "A problem affecting people worldwide — climate, poverty, health." },
        { term: "Sub-question", definition: "A smaller question that helps answer the main one." },
        { term: "Evidence", definition: "Facts and information that support an answer." },
        { term: "Scope", definition: "How broad or narrow your research topic is." },
        { term: "Keyword", definition: "Important words used to search for information." },
      ],
      concept: {
        id: "cipg-u2-s4-research", title: "Researching real-world issues",
        skill: "Frame research questions and gather evidence on global issues at Stage 4 level.",
        sections: [
          { heading: "Choosing an issue", body: "Global issues include climate change, poverty, food waste, endangered animals, access to education. Pick something you care about and can research — narrow it to a specific question like 'How does plastic pollution affect oceans?'" },
          { heading: "Effective research", body: "Break big questions into smaller ones: 'What causes plastic pollution?' 'How does it harm sea life?' 'What can we do?' Use keywords to search, check multiple sources, and collect evidence — facts, statistics, quotes." },
        ],
        keyFormulas: [
          { name: "Issue", statement: "topic with different views / needing change" },
          { name: "Sub-questions", statement: "smaller questions that build the main answer" },
        ],
        workedExample: {
          problem: "Research question: 'Should schools ban single-use plastic?' Break into 3 sub-questions.",
          solution: "1. How much plastic do schools use? 2. What are the alternatives? 3. What do students/teachers think?",
        },
        questions: [
          {
            id: "cipg-u2-ri-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a global issue?",
            response: { type: "mcq", choices: [
              { id: "a", text: "A problem affecting people worldwide" }, { id: "b", text: "A local traffic jam" }, { id: "c", text: "A personal hobby" }, { id: "d", text: "A school subject" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Global issue", statement: "Worldwide problem." }],
              steps: [{ reasoning: "Global issues affect people across the world.", marks: 1, markCode: "M" }],
              finalAnswer: "Worldwide problem",
            },
          },
          {
            id: "cipg-u2-ri-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name two global issues and write one sub-question for either.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Issues and sub-questions", statement: "Topics and smaller questions." }],
              steps: [
                { reasoning: "Two valid issues: climate, poverty, health, education.", marks: 1, markCode: "M" },
                { reasoning: "Valid sub-question narrowing the topic.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. climate + 'how does it affect farmers?'",
            },
          },
          {
            id: "cipg-u2-ri-q3", difficulty: "core", totalMarks: 3,
            stem: "Why break a big research question into smaller ones? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Research framing", statement: "Decomposition of questions." }],
              steps: [
                { reasoning: "Big questions are too broad to answer well.", marks: 1, markCode: "M" },
                { reasoning: "Sub-questions make research manageable.", marks: 1, markCode: "M" },
                { reasoning: "Example provided.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Manageable focused research",
            },
          },
          {
            id: "cipg-u2-ri-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define issue, global issue, sub-question, evidence, scope, keyword. (b) Choose a global issue and write a research question. (c) Break it into 3 sub-questions. (d) List 4 keywords for searching. (e) What makes evidence strong? (f) How many sources should you check? (g) What is scope creep and how avoid it? (h) Design a research plan for your issue.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Research", statement: "Questions, keywords, evidence." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Valid issue + focused question.", marks: 1, markCode: "M" },
                { reasoning: "(c) Three logical sub-questions.", marks: 1, markCode: "M" },
                { reasoning: "(d) Four relevant keywords.", marks: 1, markCode: "M" },
                { reasoning: "(e) Reliable, recent, relevant facts.", marks: 1, markCode: "M" },
                { reasoning: "(f) Multiple sources for balance.", marks: 1, markCode: "M" },
                { reasoning: "(g) Topic expanding too far; keep focused.", marks: 1, markCode: "M" },
                { reasoning: "(h) Coherent research plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Research questions, keywords, evidence, planning.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u2-ri-notes", title: "Researching issues — notes",
      summary: "Pick a global issue, narrow to a question, break into sub-questions, gather evidence from multiple sources.",
      sections: [
        { heading: "Key idea", body: "Good research = focused questions + reliable evidence." },
        { heading: "Keywords", body: "Choose search words carefully to find relevant sources." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson22",
    lesson: {
      id: "cipg-u2-lesson-2-2", code: "2-2",
      title: "Stage 4 — Analysing Data and Finding Patterns",
      goal: "I CAN analyse research data, spot patterns and draw simple conclusions.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 4: analysis", "Cambridge Primary Global Perspectives 0838 strand: Analysis"],
      stage: 4,
      vocabulary: [
        { term: "Data", definition: "Collected information — numbers, facts, observations." },
        { term: "Pattern", definition: "Something that repeats or trends in data." },
        { term: "Trend", definition: "A general direction data is moving." },
        { term: "Average", definition: "The typical value — total ÷ count." },
        { term: "Compare", definition: "Look at data side by side to see differences." },
        { term: "Conclusion", definition: "What the data tells you." },
      ],
      concept: {
        id: "cipg-u2-s4-analyse", title: "Analysing data",
        skill: "Interpret data, find patterns and conclude at Stage 4 level.",
        sections: [
          { heading: "Reading data", body: "Data comes as numbers, tables, charts. Look for patterns: Is it increasing? Decreasing? The same? Compare groups — which is bigger? Calculate averages to find typical values." },
          { heading: "Drawing conclusions", body: "Conclusions must be supported by data: 'Plastic waste increased 20% — our survey shows most families use plastic bags daily.' Don't overclaim — stick to what the data shows." },
        ],
        keyFormulas: [
          { name: "Pattern/trend", statement: "repeating direction in data" },
          { name: "Average", statement: "sum ÷ count" },
          { name: "Conclusion", statement: "what data shows, supported by evidence" },
        ],
        workedExample: {
          problem: "Survey: 10 students walk, 15 bus, 5 cycle to school. What pattern? What's the average per group?",
          solution: "Bus is most popular (15). Average = 30÷3 = 10 students per transport type.",
        },
        questions: [
          {
            id: "cipg-u2-an-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a trend in data?",
            response: { type: "mcq", choices: [
              { id: "a", text: "A general direction the data is moving" }, { id: "b", text: "A type of chart" }, { id: "c", text: "A random number" }, { id: "d", text: "A computer program" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Trend", statement: "Data direction." }],
              steps: [{ reasoning: "Trend = overall movement/pattern in data.", marks: 1, markCode: "M" }],
              finalAnswer: "Data's general direction",
            },
          },
          {
            id: "cipg-u2-an-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Data: rainy days Jan=10, Feb=8, Mar=12. What trend do you see? Calculate the average.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Data analysis", statement: "Trends and averages." }],
              steps: [
                { reasoning: "Trend: rainy days fairly consistent/slightly up.", marks: 1, markCode: "M" },
                { reasoning: "Average = (10+8+12)÷3 = 10.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Consistent ~10 avg",
            },
          },
          {
            id: "cipg-u2-an-q3", difficulty: "core", totalMarks: 3,
            stem: "Survey shows 80% of students want more fruit in lunch. What conclusion can you draw? What can't you conclude?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Conclusions", statement: "Supported vs unsupported claims." }],
              steps: [
                { reasoning: "Can conclude: most students want more fruit.", marks: 1, markCode: "M" },
                { reasoning: "Can't conclude: all students, or that they'll eat it.", marks: 1, markCode: "M" },
                { reasoning: "Stick to what data shows.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Most want fruit; can't overclaim",
            },
          },
          {
            id: "cipg-u2-an-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define data, pattern, trend, average, conclusion. (b) Calculate average of 4, 8, 6, 10. (c) What does an upward trend mean? (d) How do you compare two data sets? (e) Why might data mislead? (f) What is a reasonable conclusion from '70% prefer online learning'? (g) What can't you conclude from small samples? (h) Analyse this data and conclude: ice cream sales 20, 35, 50, 80 (summer months).",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Data analysis", statement: "Patterns, averages, conclusions." }],
              steps: [
                { reasoning: "(a) All five definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) 7.", marks: 1, markCode: "M" },
                { reasoning: "(c) Values increasing over time.", marks: 1, markCode: "M" },
                { reasoning: "(d) Compare totals, averages, patterns.", marks: 1, markCode: "M" },
                { reasoning: "(e) Small sample, bias, cherry-picking.", marks: 1, markCode: "M" },
                { reasoning: "(f) Most prefer online; not all.", marks: 1, markCode: "M" },
                { reasoning: "(g) Can't generalise to everyone.", marks: 1, markCode: "M" },
                { reasoning: "(h) Rising trend — warmer months, more sales.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Data analysis, trends, averages, cautious conclusions.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u2-an-notes", title: "Analysing data — notes",
      summary: "Find trends and patterns; calculate averages; conclude only what data supports.",
      sections: [
        { heading: "Key idea", body: "Data shows patterns — interpret carefully, don't overclaim." },
        { heading: "Average", body: "Sum ÷ count gives the typical value." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson23",
    lesson: {
      id: "cipg-u2-lesson-2-3", code: "2-3",
      title: "Stage 4 — Evaluating Arguments and Evidence",
      goal: "I CAN judge the strength of arguments and identify weak or biased reasoning.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 4: evaluation", "Cambridge Primary Global Perspectives 0838 strand: Evaluation"],
      stage: 4,
      vocabulary: [
        { term: "Argument", definition: "A set of reasons given to support an opinion." },
        { term: "Evidence", definition: "Facts that support an argument." },
        { term: "Weak argument", definition: "Poorly supported or illogical reasoning." },
        { term: "Strong argument", definition: "Well-supported with relevant evidence." },
        { term: "Logic", definition: "Reasoning that makes sense." },
        { term: "Counter-argument", definition: "A reason against an argument." },
      ],
      concept: {
        id: "cipg-u2-s4-argue", title: "Evaluating arguments",
        skill: "Judge argument strength and spot weak reasoning at Stage 4 level.",
        sections: [
          { heading: "Strong vs weak", body: "A strong argument has clear reasoning supported by relevant evidence. 'We should recycle because it reduces landfill and saves resources' is strong. 'We should recycle because it's nice' is weak — no real evidence." },
          { heading: "Spotting problems", body: "Weak arguments: rely on feelings not facts, use 'everyone knows', attack the person not the idea, or ignore counter-evidence. Always ask: Is the evidence relevant? Is the logic sound?" },
        ],
        keyFormulas: [
          { name: "Strong argument", statement: "clear logic + relevant evidence" },
          { name: "Weak", statement: "feelings, no evidence, illogical" },
        ],
        workedExample: {
          problem: "Evaluate: 'School should start later because teenagers need more sleep and research shows late starts improve grades.'",
          solution: "Strong — clear claim (start later), two reasons (sleep, grades), cites research as evidence.",
        },
        questions: [
          {
            id: "cipg-u2-ag-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What makes an argument strong?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Clear reasoning supported by relevant evidence" }, { id: "b", text: "Speaking loudly" }, { id: "c", text: "Using big words" }, { id: "d", text: "Agreeing with everyone" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Strong argument", statement: "Logic + evidence." }],
              steps: [{ reasoning: "Strong = logical reasoning + supporting facts.", marks: 1, markCode: "M" }],
              finalAnswer: "Logic + evidence",
            },
          },
          {
            id: "cipg-u2-ag-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Which is weaker: 'We need more parks because green spaces improve health' or 'We need parks because they're pretty'? Why?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Argument strength", statement: "Evidence vs opinion." }],
              steps: [
                { reasoning: "'Pretty' is weaker — opinion not evidence.", marks: 1, markCode: "M" },
                { reasoning: "Health benefit is stronger — gives a reason/effect.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Pretty weaker — no real evidence",
            },
          },
          {
            id: "cipg-u2-ag-q3", difficulty: "core", totalMarks: 3,
            stem: "'Everyone knows homework is useless so we should ban it.' Identify two weaknesses in this argument.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Weak reasoning", statement: "Bandwagon + unsupported claim." }],
              steps: [
                { reasoning: "'Everyone knows' = bandwagon, no evidence.", marks: 1, markCode: "M" },
                { reasoning: "No actual reasons/evidence for banning.", marks: 1, markCode: "M" },
                { reasoning: "Ignores benefits/counter-arguments.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Bandwagon + no evidence",
            },
          },
          {
            id: "cipg-u2-ag-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define argument, evidence, weak/strong argument, logic, counter-argument. (b) Give a strong argument for school uniforms. (c) Give a weak one and explain why. (d) What is a counter-argument? (e) Why is 'everyone agrees' weak evidence? (f) How do you check if evidence is relevant? (g) Evaluate: 'Phones should be banned because they distract students.' (h) Improve that argument with evidence.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Argument evaluation", statement: "Strength, evidence, logic." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Strong: equality, less bullying, focus.", marks: 1, markCode: "M" },
                { reasoning: "(c) Weak: 'because they're cool' — no evidence.", marks: 1, markCode: "M" },
                { reasoning: "(d) Reason against an argument.", marks: 1, markCode: "M" },
                { reasoning: "(e) Popularity ≠ truth.", marks: 1, markCode: "M" },
                { reasoning: "(f) Does it actually support the claim?", marks: 1, markCode: "M" },
                { reasoning: "(g) Moderate — claim but no evidence.", marks: 1, markCode: "M" },
                { reasoning: "(h) Add studies showing distraction reduces focus.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Argument evaluation, evidence, counter-arguments.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u2-ag-notes", title: "Evaluating arguments — notes",
      summary: "Strong = logic + relevant evidence. Weak = feelings, bandwagon, no proof. Consider counter-arguments.",
      sections: [
        { heading: "Key idea", body: "Ask: does the evidence actually support the claim?" },
        { heading: "Red flags", body: "'Everyone knows', personal attacks, no sources." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson24",
    lesson: {
      id: "cipg-u2-lesson-2-4", code: "2-4",
      title: "Stage 4 — Reflecting on Global Issues and Action",
      goal: "I CAN reflect on a global issue, consider my role and plan a personal action.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 4: reflection", "Cambridge Primary Global Perspectives 0838 strand: Reflection"],
      stage: 4,
      vocabulary: [
        { term: "Action", definition: "Something you do to make a difference." },
        { term: "Responsibility", definition: "Your duty to act on what you know." },
        { term: "Impact", definition: "The effect something has." },
        { term: "Role", definition: "The part you play in an issue." },
        { term: "Change", definition: "Making something different/better." },
        { term: "Commitment", definition: "A promise to do something." },
      ],
      concept: {
        id: "cipg-u2-s4-action", title: "Reflecting and acting",
        skill: "Connect research to personal responsibility and action at Stage 4 level.",
        sections: [
          { heading: "From knowing to acting", body: "Research tells you about issues — reflection asks what YOU can do. Every person has a role: you can reduce waste, learn about other cultures, speak up for others. Small actions add up." },
          { heading: "Planning action", body: "Good actions are specific and achievable: 'I'll bring a reusable bottle to school' not 'I'll save the planet'. Consider impact — what difference will it make? Commit to trying and reviewing how it went." },
        ],
        keyFormulas: [
          { name: "Action", statement: "specific thing you do to help" },
          { name: "Impact", statement: "the effect your action has" },
        ],
        workedExample: {
          problem: "You researched plastic pollution. Plan one personal action.",
          solution: "Action: use a reusable water bottle instead of buying plastic ones. Impact: less plastic waste daily. Review after a week.",
        },
        questions: [
          {
            id: "cipg-u2-ac-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is an action in Global Perspectives?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Something you do to make a difference" }, { id: "b", text: "A type of research" }, { id: "c", text: "A computer game" }, { id: "d", text: "A school subject" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Action", statement: "Doing to make difference." }],
              steps: [{ reasoning: "Action = concrete step toward change.", marks: 1, markCode: "M" }],
              finalAnswer: "Something you do to help",
            },
          },
          {
            id: "cipg-u2-ac-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Give one action you could take for an environmental issue.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Personal action", statement: "Specific achievable step." }],
              steps: [
                { reasoning: "Valid action: recycle, save water, reusable bottle.", marks: 1, markCode: "M" },
                { reasoning: "Specific and doable.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. use reusable bottle",
            },
          },
          {
            id: "cipg-u2-ac-q3", difficulty: "core", totalMarks: 3,
            stem: "Why is 'I'll save the planet' a weaker action than 'I'll use a reusable bottle'? Explain.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Specific actions", statement: "Measurable vs vague." }],
              steps: [
                { reasoning: "Too broad — can't measure or act on it.", marks: 1, markCode: "M" },
                { reasoning: "Specific action is achievable and trackable.", marks: 1, markCode: "M" },
                { reasoning: "Small actions add up.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Specific = achievable/trackable",
            },
          },
          {
            id: "cipg-u2-ac-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define action, responsibility, impact, role, change, commitment. (b) Choose a global issue and your role in it. (c) Plan one specific action. (d) What impact will it have? (e) How will you know it worked? (f) Why do small actions matter? (g) What if your action fails? (h) Design an action plan: issue → role → action → impact → review.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Action planning", statement: "Role, action, impact." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Valid issue + personal role.", marks: 1, markCode: "M" },
                { reasoning: "(c) Specific achievable action.", marks: 1, markCode: "M" },
                { reasoning: "(d) Realistic impact stated.", marks: 1, markCode: "M" },
                { reasoning: "(e) Review/measurement method.", marks: 1, markCode: "M" },
                { reasoning: "(f) Collective small actions = big change.", marks: 1, markCode: "M" },
                { reasoning: "(g) Adjust, try different approach, don't give up.", marks: 1, markCode: "M" },
                { reasoning: "(h) Complete action plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Action planning: role, specific action, impact, review.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u2-ac-notes", title: "Reflection and action — notes",
      summary: "Connect issues to your role. Plan specific achievable actions; review impact.",
      sections: [
        { heading: "Key idea", body: "Knowing about issues creates responsibility to act." },
        { heading: "Actions", body: "Specific + achievable + measurable = good action." },
      ],
    },
  },
];
