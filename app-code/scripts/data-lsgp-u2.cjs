module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson41",
    lesson: {
      id: "cilgp-u2-lesson-2-1", code: "2-1",
      title: "Deep Research on Global Challenges",
      goal: "I CAN conduct in-depth research on complex global challenges using multiple methods.",
      standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Research", "Cambridge Global Perspectives skills: research"],
      stage: 9,
      vocabulary: [
        { term: "Primary research", definition: "Collecting your own data — surveys, interviews." },
        { term: "Secondary research", definition: "Using existing published data." },
        { term: "Triangulation", definition: "Cross-checking findings via multiple methods/sources." },
        { term: "Sample", definition: "Subset of population studied." },
        { term: "Validity", definition: "Whether research measures what it claims." },
        { term: "Ethics", definition: "Moral principles guiding research conduct." },
      ],
      concept: {
        id: "cilgp-u2-s1-deepres", title: "Advanced research methods",
        skill: "Combine primary and secondary research ethically at Stage 9 level.",
        sections: [
          { heading: "Primary vs secondary", body: "Secondary research uses existing data — fast but may be outdated or biased. Primary research (surveys, interviews, observations) gives fresh relevant data but needs careful design: representative samples, clear questions, ethical consent." },
          { heading: "Rigour", body: "Triangulate: combine methods and sources. Check validity (does it measure the right thing?), reliability (consistent results?), and acknowledge limitations in your findings." },
        ],
        keyFormulas: [
          { name: "Triangulation", statement: "multiple methods/sources" },
          { name: "Primary", statement: "collect own data" },
          { name: "Secondary", statement: "use existing data" },
        ],
        workedExample: {
          problem: "Research 'youth attitudes to climate change' — design a method.",
          solution: "Secondary: review surveys/reports. Primary: questionnaire to 100 students + 5 interviews. Triangulate findings; note sample limitations.",
        },
        questions: [
          {
            id: "cilgp-u2-dr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is primary research?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Collecting your own data first-hand" }, { id: "b", text: "Reading books" }, { id: "c", text: "Using Wikipedia" }, { id: "d", text: "Guessing answers" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Primary research", statement: "First-hand data collection." }],
              steps: [{ reasoning: "Primary = you collect the data.", marks: 1, markCode: "M" }],
              finalAnswer: "Collecting own data",
            },
          },
          {
            id: "cilgp-u2-dr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is triangulation and why use it?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Triangulation", statement: "Multiple verification." }],
              steps: [
                { reasoning: "Cross-check findings via multiple methods/sources.", marks: 1, markCode: "M" },
                { reasoning: "Increases reliability/validity of conclusions.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Multi-method verification",
            },
          },
          {
            id: "cilgp-u2-dr-q3", difficulty: "core", totalMarks: 3,
            stem: "What ethical considerations apply when surveying people about sensitive topics?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Research ethics", statement: "Consent, anonymity, sensitivity." }],
              steps: [
                { reasoning: "Informed consent + right to withdraw.", marks: 1, markCode: "M" },
                { reasoning: "Anonymity/confidentiality of responses.", marks: 1, markCode: "M" },
                { reasoning: "Avoid harm; sensitive wording.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Consent, anonymity, no harm",
            },
          },
          {
            id: "cilgp-u2-dr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define primary research, secondary research, triangulation, sample, validity, ethics. (b) When is primary research better? (c) What is a representative sample? (d) Why avoid leading questions? (e) What is validity vs reliability? (f) Give 3 ethical rules for interviews. (g) How would you research 'should uniforms be compulsory?' (h) Evaluate the limitations of your method in (g).",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Research methods", statement: "Primary, ethics, validity." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Fresh, specific, relevant data needed.", marks: 1, markCode: "M" },
                { reasoning: "(c) Reflects population diversity.", marks: 1, markCode: "M" },
                { reasoning: "(d) Biases responses.", marks: 1, markCode: "M" },
                { reasoning: "(e) Validity=right thing; reliability=consistent.", marks: 1, markCode: "M" },
                { reasoning: "(f) Three valid ethical rules.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid mixed-methods plan.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid limitations acknowledged.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Advanced research methodology.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cilgp-u2-dr-notes", title: "Deep research — notes",
      summary: "Primary=own data; secondary=existing. Triangulate, check validity/reliability, follow ethics.",
      sections: [
        { heading: "Key idea", body: "Rigorous research acknowledges limitations honestly." },
        { heading: "Ethics", body: "Consent, anonymity, no harm — always." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson42",
    lesson: {
      id: "cilgp-u2-lesson-2-2", code: "2-2",
      title: "Multi-Perspective Analysis of Complex Issues",
      goal: "I CAN analyse how cultural, economic and political factors shape perspectives on global issues.",
      standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Analysis", "Cambridge Global Perspectives skills: analysis"],
      stage: 9,
      vocabulary: [
        { term: "Cultural lens", definition: "How culture shapes what we notice and value." },
        { term: "Power dynamics", definition: "Who has influence over decisions." },
        { term: "Global North/South", definition: "Wealthy vs developing country divide." },
        { term: "Structural factors", definition: "Systemic causes beyond individual choices." },
        { term: "Narrative", definition: "The story framing how an issue is understood." },
        { term: "Intersectionality", definition: "Overlapping identities shaping experience." },
      ],
      concept: {
        id: "cilgp-u2-s2-multipersp", title: "Complex issue analysis",
        skill: "Analyse structural and cultural factors in global issues at Stage 9 level.",
        sections: [
          { heading: "Beyond individual views", body: "Global issues have structural causes: poverty isn't just personal failure — it's shaped by economics, colonial history, trade rules. Analyse systems, not just individuals." },
          { heading: "Cultural context", body: "The same issue looks different across cultures: water scarcity means different things in arid vs industrialised nations. Power dynamics determine whose perspective dominates." },
        ],
        keyFormulas: [
          { name: "Structural", statement: "systemic causes, not just individuals" },
          { name: "Cultural lens", statement: "culture shapes perception" },
        ],
        workedExample: {
          problem: "Why does 'developing countries should just industrialise' ignore structural factors?",
          solution: "Ignores colonial extraction, debt burdens, unequal trade terms — structural barriers beyond individual effort.",
        },
        questions: [
          {
            id: "cilgp-u2-mp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What are structural factors in a global issue?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Systemic causes beyond individual choices" }, { id: "b", text: "Building designs" }, { id: "c", text: "Personal opinions" }, { id: "d", text: "Weather patterns" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Structural factors", statement: "Systemic causes." }],
              steps: [{ reasoning: "Structural = systems/economics/history, not individuals.", marks: 1, markCode: "M" }],
              finalAnswer: "Systemic causes",
            },
          },
          {
            id: "cilgp-u2-mp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "How does a cultural lens change how we see an issue? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Cultural lens", statement: "Culture shapes perception." }],
              steps: [
                { reasoning: "Culture affects values/priorities.", marks: 1, markCode: "M" },
                { reasoning: "e.g. individualism vs collectivism on poverty.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Culture shapes viewpoint",
            },
          },
          {
            id: "cilgp-u2-mp-q3", difficulty: "core", totalMarks: 3,
            stem: "Why is analysing 'power dynamics' important for global issues? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Power dynamics", statement: "Who influences decisions." }],
              steps: [
                { reasoning: "Power determines whose voice matters.", marks: 1, markCode: "M" },
                { reasoning: "e.g. wealthy nations set climate policy despite poorest suffering most.", marks: 1, markCode: "M" },
                { reasoning: "Reveals hidden inequalities.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Power shapes whose perspective dominates",
            },
          },
          {
            id: "cilgp-u2-mp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define cultural lens, power dynamics, Global North/South, structural factors, narrative, intersectionality. (b) How does colonial history affect current poverty? (c) Why is 'just work harder' an incomplete analysis? (d) How does narrative frame an issue? (e) Give an example of intersectionality in a global issue. (f) How do trade rules create structural inequality? (g) Analyse 'immigration' from two national perspectives. (h) What would a structural analysis of climate change include?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Complex analysis", statement: "Structural, cultural, power." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Extracted wealth, borders, institutions.", marks: 1, markCode: "M" },
                { reasoning: "(c) Ignores systemic barriers.", marks: 1, markCode: "M" },
                { reasoning: "(d) Story shapes understanding.", marks: 1, markCode: "M" },
                { reasoning: "(e) Valid intersectionality example.", marks: 1, markCode: "M" },
                { reasoning: "(f) Unequal terms disadvantage poor nations.", marks: 1, markCode: "M" },
                { reasoning: "(g) Two valid national perspectives.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid structural analysis.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Structural and cultural analysis of global issues.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cilgp-u2-mp-notes", title: "Complex analysis — notes",
      summary: "Global issues have structural causes; culture and power shape perspectives.",
      sections: [
        { heading: "Key idea", body: "Analyse systems and contexts, not just individual choices." },
        { heading: "Power", body: "Whose voice dominates shapes the 'official' narrative." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson43",
    lesson: {
      id: "cilgp-u2-lesson-2-3", code: "2-3",
      title: "Solution Evaluation at Depth",
      goal: "I CAN evaluate complex solutions considering all stakeholders, costs and long-term effects.",
      standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Evaluation", "Cambridge Global Perspectives skills: evaluation"],
      stage: 9,
      vocabulary: [
        { term: "Stakeholder analysis", definition: "Mapping who is affected and how." },
        { term: "Unintended consequence", definition: "Unexpected negative/positive effect." },
        { term: "Opportunity cost", definition: "What you give up choosing one option." },
        { term: "Long-term impact", definition: "Effects over years/decades." },
        { term: "Risk assessment", definition: "Identifying and weighing potential harms." },
        { term: "Synergy", definition: "Combined solutions working better together." },
      ],
      concept: {
        id: "cilgp-u2-s3-deepeval", title: "Deep solution evaluation",
        skill: "Evaluate solutions with stakeholder, cost and long-term analysis at Stage 9.",
        sections: [
          { heading: "Comprehensive evaluation", body: "Map all stakeholders: who gains, who loses, who's excluded? Assess costs (financial, social, environmental) and benefits. Consider unintended consequences — solutions often create new problems." },
          { heading: "Long-term thinking", body: "Short-term fixes may worsen long-term problems. Evaluate sustainability: will this still work in 20 years? Often, combined approaches (synergy) outperform single solutions." },
        ],
        keyFormulas: [
          { name: "Stakeholder map", statement: "who gains/loses/is excluded" },
          { name: "Opportunity cost", statement: "best alternative forgone" },
        ],
        workedExample: {
          problem: "Evaluate 'carbon tax' for climate change — stakeholders, costs, long-term.",
          solution: "Gains: emission reduction, green investment. Loses: low-income households, fossil industries. Long-term: effective if revenue recycled to vulnerable groups.",
        },
        questions: [
          {
            id: "cilgp-u2-de-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is an unintended consequence?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Unexpected effect of a solution" }, { id: "b", text: "A planned outcome" }, { id: "c", text: "A type of cost" }, { id: "d", text: "A voting result" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Unintended consequence", statement: "Unexpected effect." }],
              steps: [{ reasoning: "Solutions can have unplanned effects.", marks: 1, markCode: "M" }],
              finalAnswer: "Unexpected effect",
            },
          },
          {
            id: "cilgp-u2-de-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is stakeholder analysis and why do it before choosing a solution?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Stakeholder analysis", statement: "Map affected parties." }],
              steps: [
                { reasoning: "Identify who gains/loses/is excluded.", marks: 1, markCode: "M" },
                { reasoning: "Ensures equitable, informed choice.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Map affected parties for equity",
            },
          },
          {
            id: "cilgp-u2-de-q3", difficulty: "core", totalMarks: 3,
            stem: "Why might a short-term solution worsen a long-term problem? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Long-term thinking", statement: "Short vs long term." }],
              steps: [
                { reasoning: "e.g. cheap plastic bans → black market alternatives worse.", marks: 1, markCode: "M" },
                { reasoning: "Quick fixes ignore systemic causes.", marks: 1, markCode: "M" },
                { reasoning: "Long-term evaluation needed.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Short-term fixes can backfire",
            },
          },
          {
            id: "cilgp-u2-de-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define stakeholder analysis, unintended consequence, opportunity cost, long-term impact, risk assessment, synergy. (b) Map stakeholders for 'build more roads to reduce traffic'. (c) What unintended consequence might roads cause? (d) What is opportunity cost of choosing roads over public transport? (e) Evaluate long-term sustainability of road-building. (f) Give an example of solution synergy. (g) How does risk assessment work? (h) Design a combined solution to traffic congestion.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Deep evaluation", statement: "Stakeholders, costs, long-term." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Valid stakeholder map.", marks: 1, markCode: "M" },
                { reasoning: "(c) e.g. more cars → more emissions/pollution.", marks: 1, markCode: "M" },
                { reasoning: "(d) Lost opportunity for better transit.", marks: 1, markCode: "M" },
                { reasoning: "(e) Induced demand — roads fill up again.", marks: 1, markCode: "M" },
                { reasoning: "(f) e.g. roads+transit+pricing together.", marks: 1, markCode: "M" },
                { reasoning: "(g) Identify+weigh potential harms.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid combined solution.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Comprehensive solution evaluation.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cilgp-u2-de-notes", title: "Deep evaluation — notes",
      summary: "Map stakeholders, weigh costs/benefits, anticipate unintended consequences, think long-term.",
      sections: [
        { heading: "Key idea", body: "Solutions interact — evaluate combined approaches." },
        { heading: "Long-term", body: "Ask: will this still work in 20 years?" },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson44",
    lesson: {
      id: "cilgp-u2-lesson-2-4", code: "2-4",
      title: "Persuasive Communication of Findings",
      goal: "I CAN communicate complex findings persuasively to different audiences.",
      standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Communication", "Cambridge Global Perspectives skills: communication"],
      stage: 9,
      vocabulary: [
        { term: "Persuasion", definition: "Convincing others of your position." },
        { term: "Rhetorical device", definition: "Technique for persuasive effect — ethos, pathos, logos." },
        { term: "Evidence-based argument", definition: "Claims supported by data/facts." },
        { term: "Call to action", definition: "Request for audience to do something." },
        { term: "Narrative", definition: "Story structure making points memorable." },
        { term: "Visual aid", definition: "Chart/image supporting spoken points." },
      ],
      concept: {
        id: "cilgp-u2-s4-persuade", title: "Persuasive communication",
        skill: "Present findings persuasively to varied audiences at Stage 9 level.",
        sections: [
          { heading: "Persuasive structure", body: "Hook attention → establish credibility → present evidence → address counter-arguments → call to action. Use ethos (credibility), pathos (emotion), logos (logic) appropriately." },
          { heading: "Audience adaptation", body: "Policymakers need data and feasibility; public needs stories and emotion; peers need relevance. Same findings, different framing. Visual aids (charts, images) make data memorable." },
        ],
        keyFormulas: [
          { name: "Ethos/pathos/logos", statement: "credibility/emotion/logic" },
          { name: "Structure", statement: "hook→evidence→counter→CTA" },
        ],
        workedExample: {
          problem: "Persuade your school to adopt a recycling programme — structure your pitch.",
          solution: "Hook: 'We throw away X kg weekly.' Evidence: costs, environmental data. Counter: 'it's inconvenient' → solutions. CTA: 'vote for it Friday.'",
        },
        questions: [
          {
            id: "cilgp-u2-pe-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a call to action?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Request for audience to do something" }, { id: "b", text: "A type of chart" }, { id: "c", text: "A voting system" }, { id: "d", text: "A research method" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Call to action", statement: "Requested response." }],
              steps: [{ reasoning: "CTA tells audience what to do next.", marks: 1, markCode: "M" }],
              finalAnswer: "Request for action",
            },
          },
          {
            id: "cilgp-u2-pe-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What are ethos, pathos and logos? Give one example of each.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Rhetorical appeals", statement: "Credibility/emotion/logic." }],
              steps: [
                { reasoning: "Ethos=credibility, pathos=emotion, logos=logic.", marks: 1, markCode: "M" },
                { reasoning: "Examples for each.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Credibility/emotion/logic + examples",
            },
          },
          {
            id: "cilgp-u2-pe-q3", difficulty: "core", totalMarks: 3,
            stem: "Why should you address counter-arguments in a persuasive presentation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Counter-arguments", statement: "Strengthens persuasion." }],
              steps: [
                { reasoning: "Shows you've considered opposing views.", marks: 1, markCode: "M" },
                { reasoning: "Weakens audience objections.", marks: 1, markCode: "M" },
                { reasoning: "Builds credibility.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Strengthens credibility and position",
            },
          },
          {
            id: "cilgp-u2-pe-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define persuasion, rhetorical device, evidence-based argument, call to action, narrative, visual aid. (b) What is the persuasive structure? (c) Explain ethos/pathos/logos with examples. (d) How do you adapt to different audiences? (e) Why use visual aids? (f) What makes a strong opening hook? (g) Give an example of a persuasive statistic. (h) Write a 3-minute pitch outline for 'schools should teach financial literacy'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Persuasion", statement: "Structure, appeals, audience." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Hook→evidence→counter→CTA.", marks: 1, markCode: "M" },
                { reasoning: "(c) Credibility/emotion/logic explained.", marks: 1, markCode: "M" },
                { reasoning: "(d) Language/depth/examples adapted.", marks: 1, markCode: "M" },
                { reasoning: "(e) Make data memorable/clear.", marks: 1, markCode: "M" },
                { reasoning: "(f) Surprising fact/question/story.", marks: 1, markCode: "M" },
                { reasoning: "(g) e.g. '70% of adults can't budget' (if sourced).", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid pitch outline.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Persuasive communication techniques.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cilgp-u2-pe-notes", title: "Persuasion — notes",
      summary: "Hook→evidence→counter→CTA; use ethos/pathos/logos; adapt to audience.",
      sections: [
        { heading: "Key idea", body: "Persuasion combines logic, emotion and credibility." },
        { heading: "Audience", body: "Same data, different framing for different listeners." },
      ],
    },
  },
  {
    file: "lesson-2-5.ts", exportName: "lesson45",
    lesson: {
      id: "cilgp-u2-lesson-2-5", code: "2-5",
      title: "Project Synthesis: Full Global Perspectives Challenge",
      goal: "I CAN complete a full Global Perspectives project integrating all six skills.",
      standards: ["Cambridge Lower Secondary Global Perspectives 1129 strands: all six skills", "Cambridge Global Perspectives: integrated project"],
      stage: 9,
      vocabulary: [
        { term: "Integrated project", definition: "Work combining all six GP skills." },
        { term: "Challenge", definition: "Cambridge's thematic investigation task." },
        { term: "Synthesis", definition: "Combining findings into coherent whole." },
        { term: "Recommendation", definition: "Suggested action based on findings." },
        { term: "Limitations", definition: "Acknowledged weaknesses in research/methods." },
        { term: "Reflection", definition: "Learning gained from the process." },
      ],
      concept: {
        id: "cilgp-u2-s5-synth", title: "Integrated project work",
        skill: "Synthesize research, analysis, evaluation, reflection, collaboration and communication at Stage 9.",
        sections: [
          { heading: "The full cycle", body: "Research the issue → analyse evidence and perspectives → evaluate solutions → collaborate on presentation → communicate findings → reflect on learning and plan action. Each skill builds on the others." },
          { heading: "Quality markers", body: "Strong projects: clear research question, reliable sources, balanced analysis, evidence-based evaluation, clear communication, honest reflection on limitations." },
        ],
        keyFormulas: [
          { name: "GP cycle", statement: "research→analyse→evaluate→collaborate→communicate→reflect" },
          { name: "Quality", statement: "clear question + reliable sources + balanced analysis" },
        ],
        workedExample: {
          problem: "Design a project on 'Should cities ban cars from centres?'",
          solution: "Research: air quality data, traffic studies. Analyse: residents, businesses, commuters perspectives. Evaluate: congestion charges vs bans. Communicate: presentation + report. Reflect: what did you learn?",
        },
        questions: [
          {
            id: "cilgp-u2-sy-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What are the six Global Perspectives skills?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Research, analysis, evaluation, reflection, collaboration, communication" }, { id: "b", text: "Reading, writing, maths, science, art, PE" }, { id: "c", text: "Plan, do, check, act" }, { id: "d", text: "Ask, answer, explain, evaluate" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "GP skills", statement: "Six core skills." }],
              steps: [{ reasoning: "The six GP strands.", marks: 1, markCode: "M" }],
              finalAnswer: "Research/analysis/evaluation/reflection/collaboration/communication",
            },
          },
          {
            id: "cilgp-u2-sy-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What does 'synthesis' mean in project work?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Synthesis", statement: "Combining into whole." }],
              steps: [
                { reasoning: "Combining findings into coherent conclusion.", marks: 1, markCode: "M" },
                { reasoning: "More than summarising — integrates insights.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Integrating findings into whole",
            },
          },
          {
            id: "cilgp-u2-sy-q3", difficulty: "core", totalMarks: 3,
            stem: "What makes a strong Global Perspectives project? List three quality markers.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Project quality", statement: "Clear question, reliable sources, balance." }],
              steps: [
                { reasoning: "Clear research question.", marks: 1, markCode: "M" },
                { reasoning: "Reliable/corroborated sources.", marks: 1, markCode: "M" },
                { reasoning: "Balanced analysis + honest reflection.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Question + sources + balance",
            },
          },
          {
            id: "cilgp-u2-sy-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Name all six GP skills. (b) Describe the full GP project cycle. (c) What is a Challenge? (d) How do the skills integrate? (e) What is synthesis vs summary? (f) What are quality markers for a strong project? (g) Why acknowledge limitations? (h) Design a complete project plan for 'Should homework be abolished?'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Project synthesis", statement: "Full GP integration." }],
              steps: [
                { reasoning: "(a) All six skills named.", marks: 1, markCode: "M" },
                { reasoning: "(b) Full cycle described.", marks: 1, markCode: "M" },
                { reasoning: "(c) Thematic investigation task.", marks: 1, markCode: "M" },
                { reasoning: "(d) Each builds on previous.", marks: 1, markCode: "M" },
                { reasoning: "(e) Synthesis=integrated insights vs summary=condensed.", marks: 1, markCode: "M" },
                { reasoning: "(f) Three quality markers.", marks: 1, markCode: "M" },
                { reasoning: "(g) Shows rigour, honesty.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid complete project plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Integrated Global Perspectives project skills.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cilgp-u2-sy-notes", title: "Project synthesis — notes",
      summary: "All six skills integrate in a full project: research→analyse→evaluate→collaborate→communicate→reflect.",
      sections: [
        { heading: "Key idea", body: "GP is about applying skills to real issues, not just learning theory." },
        { heading: "Quality", body: "Clear question + reliable sources + balanced analysis + honest reflection." },
      ],
    },
  },
];
