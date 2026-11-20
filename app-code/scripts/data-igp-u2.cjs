module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson111",
    lesson: {
      id: "ciegp-u2-lesson-2-1", code: "2-1",
      title: "Advanced Research Methods",
      goal: "I CAN conduct rigorous primary research ethically and triangulate findings.",
      standards: ["Cambridge IGCSE Global Perspectives 0457: advanced research", "0457: methods"],
      vocabulary: [
        { term: "Primary research", definition: "Collecting your own data first-hand." },
        { term: "Survey", definition: "Structured questionnaire collecting responses." },
        { term: "Interview", definition: "Face-to-face or remote questioning." },
        { term: "Sample", definition: "Subset of population studied." },
        { term: "Triangulation", definition: "Cross-checking via multiple methods/sources." },
        { term: "Ethics", definition: "Moral principles guiding research conduct." },
      ],
      concept: {
        id: "ciegp-u2-s1-advres", title: "Advanced research methods",
        skill: "Design and conduct primary research at IGCSE GP level.",
        sections: [
          { heading: "Primary research design", body: "Surveys need clear questions, representative samples, unbiased wording. Interviews give depth but small samples. Choose method matching research question: surveys for breadth, interviews for depth." },
          { heading: "Ethics and rigour", body: "Obtain consent, ensure anonymity, avoid harm, be honest about limitations. Triangulate: combine methods and sources to verify findings. Acknowledge sample limitations." },
        ],
        keyFormulas: [
          { name: "Primary", statement: "surveys, interviews, observation" },
          { name: "Triangulation", statement: "multiple methods verify" },
          { name: "Ethics", statement: "consent, anonymity, no harm" },
        ],
        workedExample: {
          problem: "Design primary research on 'student attitudes to homework'.",
          solution: "Survey 100 students (random sample) + 10 interviews for depth. Questions: frequency, perceived value, stress levels. Ensure consent + anonymity.",
        },
        questions: [
          {
            id: "ciegp-u2-ar-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is primary research?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Collecting your own data first-hand" }, { id: "b", text: "Reading books" }, { id: "c", text: "Using Wikipedia" }, { id: "d", text: "Guessing answers" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Primary research", statement: "First-hand data." }],
              steps: [{ reasoning: "Primary = you collect the data.", marks: 1, markCode: "M" }],
              finalAnswer: "Collecting own data",
            },
          },
          {
            id: "ciegp-u2-ar-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is triangulation and why use it?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Triangulation", statement: "Multi-method verification." }],
              steps: [
                { reasoning: "Cross-check via multiple methods/sources.", marks: 1, markCode: "M" },
                { reasoning: "Increases reliability/validity.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Multi-method verification",
            },
          },
          {
            id: "ciegp-u2-ar-q3", difficulty: "core", totalMarks: 3,
            stem: "What ethical rules apply to surveying people about sensitive topics?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Research ethics", statement: "Consent, anonymity, no harm." }],
              steps: [
                { reasoning: "Informed consent + right to withdraw.", marks: 1, markCode: "M" },
                { reasoning: "Anonymity/confidentiality.", marks: 1, markCode: "M" },
                { reasoning: "Avoid harm; sensitive wording.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Consent, anonymity, no harm",
            },
          },
          {
            id: "ciegp-u2-ar-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define primary research, survey, interview, sample, triangulation, ethics. (b) When is primary better than secondary? (c) What makes a representative sample? (d) Why avoid leading questions? (e) What is validity vs reliability? (f) Give 3 ethical rules for interviews. (g) How would you research 'should uniforms be compulsory?' (h) Evaluate limitations of your method in (g).",
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
      id: "ciegp-u2-ar-notes", title: "Advanced research — notes",
      summary: "Primary research needs design, ethics, representative samples; triangulate for reliability.",
      sections: [
        { heading: "Key idea", body: "Rigorous research acknowledges limitations honestly." },
        { heading: "Ethics", body: "Consent, anonymity, no harm — always." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson112",
    lesson: {
      id: "ciegp-u2-lesson-2-2", code: "2-2",
      title: "Complex Issue Analysis",
      goal: "I CAN analyse structural, cultural and power factors in global issues.",
      standards: ["Cambridge IGCSE Global Perspectives 0457: complex analysis", "0457: structural factors"],
      vocabulary: [
        { term: "Structural factors", definition: "Systemic causes beyond individual choices." },
        { term: "Cultural lens", definition: "How culture shapes perception." },
        { term: "Power dynamics", definition: "Who has influence over decisions." },
        { term: "Global North/South", definition: "Wealthy vs developing country divide." },
        { term: "Narrative", definition: "Story framing how issue is understood." },
        { term: "Intersectionality", definition: "Overlapping identities shaping experience." },
      ],
      concept: {
        id: "ciegp-u2-s2-complex", title: "Complex issue analysis",
        skill: "Analyse structural and cultural factors at IGCSE GP level.",
        sections: [
          { heading: "Structural analysis", body: "Global issues have systemic causes: poverty isn't just personal failure — shaped by economics, colonial history, trade rules. Analyse systems, not just individuals." },
          { heading: "Cultural and power context", body: "Same issue looks different across cultures. Power dynamics determine whose perspective dominates. Narratives frame understanding — question whose story is told." },
        ],
        keyFormulas: [
          { name: "Structural", statement: "systemic causes" },
          { name: "Power", statement: "who influences decisions" },
          { name: "Cultural lens", statement: "culture shapes perception" },
        ],
        workedExample: {
          problem: "Why does 'developing countries should just industrialise' ignore structural factors?",
          solution: "Ignores colonial extraction, debt burdens, unequal trade terms — structural barriers beyond individual effort.",
        },
        questions: [
          {
            id: "ciegp-u2-ca-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What are structural factors?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Systemic causes beyond individual choices" }, { id: "b", text: "Building designs" }, { id: "c", text: "Personal opinions" }, { id: "d", text: "Weather patterns" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Structural factors", statement: "Systemic causes." }],
              steps: [{ reasoning: "Structural = systems/economics/history.", marks: 1, markCode: "M" }],
              finalAnswer: "Systemic causes",
            },
          },
          {
            id: "ciegp-u2-ca-q2", difficulty: "foundation", totalMarks: 2,
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
            id: "ciegp-u2-ca-q3", difficulty: "core", totalMarks: 3,
            stem: "Why is analysing power dynamics important for global issues? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Power dynamics", statement: "Who influences decisions." }],
              steps: [
                { reasoning: "Power determines whose voice matters.", marks: 1, markCode: "M" },
                { reasoning: "e.g. wealthy nations set climate policy.", marks: 1, markCode: "M" },
                { reasoning: "Reveals hidden inequalities.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Power shapes dominant perspective",
            },
          },
          {
            id: "ciegp-u2-ca-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define structural factors, cultural lens, power dynamics, Global North/South, narrative, intersectionality. (b) How does colonial history affect current poverty? (c) Why is 'just work harder' incomplete? (d) How does narrative frame an issue? (e) Give an example of intersectionality. (f) How do trade rules create inequality? (g) Analyse 'immigration' from two national perspectives. (h) What would structural analysis of climate change include?",
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
              finalAnswer: "Structural and cultural analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciegp-u2-ca-notes", title: "Complex analysis — notes",
      summary: "Global issues have structural causes; culture and power shape perspectives.",
      sections: [
        { heading: "Key idea", body: "Analyse systems and contexts, not just individuals." },
        { heading: "Power", body: "Whose voice dominates shapes the 'official' narrative." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson113",
    lesson: {
      id: "ciegp-u2-lesson-2-3", code: "2-3",
      title: "Solution Evaluation at Depth",
      goal: "I CAN evaluate complex solutions considering stakeholders, costs and long-term effects.",
      standards: ["Cambridge IGCSE Global Perspectives 0457: deep evaluation", "0457: solutions"],
      vocabulary: [
        { term: "Stakeholder analysis", definition: "Mapping who is affected and how." },
        { term: "Unintended consequence", definition: "Unexpected effect of solution." },
        { term: "Opportunity cost", definition: "What you give up choosing one option." },
        { term: "Long-term impact", definition: "Effects over years/decades." },
        { term: "Risk assessment", definition: "Identifying and weighing potential harms." },
        { term: "Synergy", definition: "Combined solutions working better together." },
      ],
      concept: {
        id: "ciegp-u2-s3-deepeval", title: "Deep solution evaluation",
        skill: "Evaluate solutions comprehensively at IGCSE GP level.",
        sections: [
          { heading: "Comprehensive evaluation", body: "Map all stakeholders: who gains, loses, excluded? Assess costs (financial, social, environmental) and benefits. Consider unintended consequences — solutions often create new problems." },
          { heading: "Long-term thinking", body: "Short-term fixes may worsen long-term problems. Evaluate sustainability: will this work in 20 years? Combined approaches often outperform single solutions." },
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
            id: "ciegp-u2-de-q1", difficulty: "foundation", totalMarks: 1,
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
            id: "ciegp-u2-de-q2", difficulty: "foundation", totalMarks: 2,
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
            id: "ciegp-u2-de-q3", difficulty: "core", totalMarks: 3,
            stem: "Why might a short-term solution worsen a long-term problem? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Long-term thinking", statement: "Short vs long term." }],
              steps: [
                { reasoning: "e.g. cheap plastic bans → black market alternatives.", marks: 1, markCode: "M" },
                { reasoning: "Quick fixes ignore systemic causes.", marks: 1, markCode: "M" },
                { reasoning: "Long-term evaluation needed.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Short-term fixes can backfire",
            },
          },
          {
            id: "ciegp-u2-de-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define stakeholder analysis, unintended consequence, opportunity cost, long-term impact, risk assessment, synergy. (b) Map stakeholders for 'build more roads to reduce traffic'. (c) What unintended consequence might roads cause? (d) What is opportunity cost of roads over public transport? (e) Evaluate long-term sustainability of road-building. (f) Give an example of solution synergy. (g) How does risk assessment work? (h) Design a combined solution to traffic congestion.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Deep evaluation", statement: "Stakeholders, costs, long-term." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Valid stakeholder map.", marks: 1, markCode: "M" },
                { reasoning: "(c) e.g. more cars → more emissions.", marks: 1, markCode: "M" },
                { reasoning: "(d) Lost opportunity for better transit.", marks: 1, markCode: "M" },
                { reasoning: "(e) Induced demand — roads fill up again.", marks: 1, markCode: "M" },
                { reasoning: "(f) e.g. roads+transit+pricing.", marks: 1, markCode: "M" },
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
      id: "ciegp-u2-de-notes", title: "Deep evaluation — notes",
      summary: "Map stakeholders, weigh costs/benefits, anticipate unintended consequences, think long-term.",
      sections: [
        { heading: "Key idea", body: "Solutions interact — evaluate combined approaches." },
        { heading: "Long-term", body: "Ask: will this still work in 20 years?" },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson114",
    lesson: {
      id: "ciegp-u2-lesson-2-4", code: "2-4",
      title: "Persuasive Communication",
      goal: "I CAN communicate complex findings persuasively to different audiences.",
      standards: ["Cambridge IGCSE Global Perspectives 0457: persuasive communication", "0457: presentation"],
      vocabulary: [
        { term: "Persuasion", definition: "Convincing others of your position." },
        { term: "Rhetorical device", definition: "Technique for persuasive effect — ethos, pathos, logos." },
        { term: "Evidence-based argument", definition: "Claims supported by data/facts." },
        { term: "Call to action", definition: "Request for audience to do something." },
        { term: "Narrative", definition: "Story structure making points memorable." },
        { term: "Visual aid", definition: "Chart/image supporting spoken points." },
      ],
      concept: {
        id: "ciegp-u2-s4-persuade", title: "Persuasive communication",
        skill: "Present findings persuasively at IGCSE GP level.",
        sections: [
          { heading: "Persuasive structure", body: "Hook attention → establish credibility → present evidence → address counter-arguments → call to action. Use ethos (credibility), pathos (emotion), logos (logic) appropriately." },
          { heading: "Audience adaptation", body: "Policymakers need data and feasibility; public needs stories and emotion; peers need relevance. Same findings, different framing. Visual aids make data memorable." },
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
            id: "ciegp-u2-pe-q1", difficulty: "foundation", totalMarks: 1,
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
            id: "ciegp-u2-pe-q2", difficulty: "foundation", totalMarks: 2,
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
            id: "ciegp-u2-pe-q3", difficulty: "core", totalMarks: 3,
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
            id: "ciegp-u2-pe-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define persuasion, rhetorical device, evidence-based argument, call to action, narrative, visual aid. (b) What is persuasive structure? (c) Explain ethos/pathos/logos with examples. (d) How do you adapt to audiences? (e) Why use visual aids? (f) What makes a strong opening hook? (g) Give an example of a persuasive statistic. (h) Write a 3-minute pitch outline for 'schools should teach financial literacy'.",
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
                { reasoning: "(g) e.g. '70% can't budget' (if sourced).", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid pitch outline.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Persuasive communication techniques.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciegp-u2-pe-notes", title: "Persuasion — notes",
      summary: "Hook→evidence→counter→CTA; use ethos/pathos/logos; adapt to audience.",
      sections: [
        { heading: "Key idea", body: "Persuasion combines logic, emotion and credibility." },
        { heading: "Audience", body: "Same data, different framing for different listeners." },
      ],
    },
  },
  {
    file: "lesson-2-5.ts", exportName: "lesson115",
    lesson: {
      id: "ciegp-u2-lesson-2-5", code: "2-5",
      title: "Full Research Project Synthesis",
      goal: "I CAN complete a full GP research project integrating all skills.",
      standards: ["Cambridge IGCSE Global Perspectives 0457: full project", "0457: synthesis"],
      vocabulary: [
        { term: "Research project", definition: "Complete investigation of global issue." },
        { term: "Synthesis", definition: "Combining findings into coherent whole." },
        { term: "Recommendation", definition: "Suggested action based on findings." },
        { term: "Reflection", definition: "Learning gained from process." },
        { term: "Limitations", definition: "Acknowledged weaknesses in research." },
        { term: "Stakeholder", definition: "Person/group affected by issue." },
      ],
      concept: {
        id: "ciegp-u2-s5-synth", title: "Project synthesis",
        skill: "Integrate all GP skills in a complete project at IGCSE level.",
        sections: [
          { heading: "The full cycle", body: "Select issue → formulate question → research → analyse evidence/perspectives → evaluate solutions → develop recommendations → reflect → present findings. Each skill builds on others." },
          { heading: "Quality markers", body: "Strong projects: clear research question, reliable corroborated sources, balanced analysis, evidence-based evaluation, clear recommendations, honest reflection on limitations." },
        ],
        keyFormulas: [
          { name: "GP cycle", statement: "select→research→analyse→evaluate→recommend→reflect→present" },
          { name: "Quality", statement: "clear question + reliable sources + balanced analysis" },
        ],
        workedExample: {
          problem: "Design a complete GP project on 'Should cities ban cars from centres?'",
          solution: "Research: air quality data, traffic studies, resident surveys. Analyse: residents, businesses, commuters perspectives. Evaluate: congestion charges vs bans vs public transport. Recommend: combined approach. Reflect on learning.",
        },
        questions: [
          {
            id: "ciegp-u2-sy-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What are the main stages of a GP research project?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Select→research→analyse→evaluate→recommend→reflect→present" }, { id: "b", text: "Read→write→test→submit" }, { id: "c", text: "Plan→do→check→act" }, { id: "d", text: "Ask→answer→explain→evaluate" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "GP project stages", statement: "Full research cycle." }],
              steps: [{ reasoning: "The complete GP research process.", marks: 1, markCode: "M" }],
              finalAnswer: "Full research cycle",
            },
          },
          {
            id: "ciegp-u2-sy-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What does synthesis mean in project work?",
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
            id: "ciegp-u2-sy-q3", difficulty: "core", totalMarks: 3,
            stem: "What makes a strong GP project? List three quality markers.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Project quality", statement: "Question, sources, balance." }],
              steps: [
                { reasoning: "Clear research question.", marks: 1, markCode: "M" },
                { reasoning: "Reliable/corroborated sources.", marks: 1, markCode: "M" },
                { reasoning: "Balanced analysis + honest reflection.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Question + sources + balance",
            },
          },
          {
            id: "ciegp-u2-sy-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Describe the full GP project cycle. (b) What is synthesis vs summary? (c) What are quality markers? (d) Why acknowledge limitations? (e) How do skills integrate? (f) What is a good research question? (g) How do you ensure source reliability? (h) Design a complete project plan for 'Should homework be abolished?'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Project synthesis", statement: "Full GP integration." }],
              steps: [
                { reasoning: "(a) Full cycle described.", marks: 1, markCode: "M" },
                { reasoning: "(b) Synthesis=integrated vs summary=condensed.", marks: 1, markCode: "M" },
                { reasoning: "(c) Three quality markers.", marks: 1, markCode: "M" },
                { reasoning: "(d) Shows rigour, honesty.", marks: 1, markCode: "M" },
                { reasoning: "(e) Each builds on previous.", marks: 1, markCode: "M" },
                { reasoning: "(f) Specific, arguable, investigable.", marks: 1, markCode: "M" },
                { reasoning: "(g) Credentials, dates, corroboration.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid complete project plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Integrated GP project skills.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciegp-u2-sy-notes", title: "Project synthesis — notes",
      summary: "Full cycle: select→research→analyse→evaluate→recommend→reflect→present. Quality = clear question + reliable sources + balance.",
      sections: [
        { heading: "Key idea", body: "GP is about applying skills to real issues, not just learning theory." },
        { heading: "Quality", body: "Clear question + reliable sources + balanced analysis + honest reflection." },
      ],
    },
  },
];
