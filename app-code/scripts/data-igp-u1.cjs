module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson101",
    lesson: {
      id: "ciegp-u1-lesson-1-1", code: "1-1",
      title: "Research Question and Issue Selection",
      goal: "I CAN select a suitable global issue and formulate a focused research question.",
      standards: ["Cambridge IGCSE Global Perspectives 0457: research", "0457: issue selection"],
      vocabulary: [
        { term: "Global issue", definition: "Problem affecting people across countries/regions." },
        { term: "Research question", definition: "Focused question guiding investigation." },
        { term: "Scope", definition: "Boundaries of investigation — what's included/excluded." },
        { term: "Relevance", definition: "Connection to real-world significance." },
        { term: "Feasibility", definition: "Whether research can realistically be completed." },
        { term: "Stakeholder", definition: "Person/group affected by or affecting the issue." },
      ],
      concept: {
        id: "ciegp-u1-s1-issue", title: "Issue selection and research questions",
        skill: "Choose issues and formulate questions at IGCSE GP level.",
        sections: [
          { heading: "Choosing an issue", body: "Good GP issues are significant, current, researchable, and have multiple perspectives. Avoid issues too broad ('poverty') or too narrow ('one family's poverty'). Consider your interests and available resources." },
          { heading: "Formulating questions", body: "Research questions should be specific, arguable, and answerable with evidence: 'How effective are cash transfers in reducing poverty in Kenya?' not 'Is poverty bad?' Frame as investigation, not opinion." },
        ],
        keyFormulas: [
          { name: "Good question", statement: "specific + arguable + investigable" },
          { name: "Scope", statement: "clear boundaries" },
        ],
        workedExample: {
          problem: "Turn 'climate change is bad' into a researchable GP question.",
          solution: "'How does climate change affect food security in South Asia, and which adaptation strategies show evidence of success?'",
        },
        questions: [
          {
            id: "ciegp-u1-rq-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What makes a good research question?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Specific, arguable, investigable" }, { id: "b", text: "Short and simple" }, { id: "c", text: "Has a yes/no answer" }, { id: "d", text: "Is famous" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Research question", statement: "Focused investigable query." }],
              steps: [{ reasoning: "Good questions are specific, arguable, answerable with evidence.", marks: 1, markCode: "M" }],
              finalAnswer: "Specific + arguable + investigable",
            },
          },
          {
            id: "ciegp-u1-rq-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is scope and why define it in research?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Scope", statement: "Research boundaries." }],
              steps: [
                { reasoning: "Scope = what's included/excluded.", marks: 1, markCode: "M" },
                { reasoning: "Prevents research becoming too broad/unfocused.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Boundaries preventing overreach",
            },
          },
          {
            id: "ciegp-u1-rq-q3", difficulty: "core", totalMarks: 3,
            stem: "Improve this research question: 'Is technology good?'",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Question improvement", statement: "Specific and arguable." }],
              steps: [
                { reasoning: "Too broad/vague — 'technology' and 'good' undefined.", marks: 1, markCode: "M" },
                { reasoning: "e.g. 'How has mobile technology affected small business in rural India?'", marks: 1, markCode: "M" },
                { reasoning: "Specific, arguable, investigable.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Specific arguable question",
            },
          },
          {
            id: "ciegp-u1-rq-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define global issue, research question, scope, relevance, feasibility, stakeholder. (b) What makes a good GP issue? (c) Improve: 'Is poverty bad?' (d) Improve: 'Should guns be banned?' (e) What is scope? (f) Why is feasibility important? (g) List 3 stakeholders for 'social media regulation'. (h) Design a research question on 'water scarcity'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Research design", statement: "Issues and questions." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Significant, current, researchable, multi-perspective.", marks: 1, markCode: "M" },
                { reasoning: "(c) Improved specific question.", marks: 1, markCode: "M" },
                { reasoning: "(d) Improved specific question.", marks: 1, markCode: "M" },
                { reasoning: "(e) Boundaries of investigation.", marks: 1, markCode: "M" },
                { reasoning: "(f) Realistic completion.", marks: 1, markCode: "M" },
                { reasoning: "(g) Three valid stakeholders.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid research question.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Issue selection and research question formulation.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciegp-u1-rq-notes", title: "Issue selection — notes",
      summary: "Choose significant researchable issues; formulate specific arguable questions with clear scope.",
      sections: [
        { heading: "Key idea", body: "Good research starts with focused, answerable questions." },
        { heading: "Scope", body: "Define boundaries to keep research manageable." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson102",
    lesson: {
      id: "ciegp-u1-lesson-1-2", code: "1-2",
      title: "Research Methods and Sources",
      goal: "I CAN gather reliable information using appropriate research methods and sources.",
      standards: ["Cambridge IGCSE Global Perspectives 0457: research methods", "0457: sources"],
      vocabulary: [
        { term: "Primary source", definition: "Original data/document created first-hand." },
        { term: "Secondary source", definition: "Information about primary sources." },
        { term: "Reliability", definition: "Trustworthiness of a source." },
        { term: "Validity", definition: "Whether source measures what it claims." },
        { term: "Bias", definition: "Slanted presentation favouring one view." },
        { term: "Corroboration", definition: "Cross-checking claims across sources." },
      ],
      concept: {
        id: "ciegp-u1-s2-methods", title: "Research methods and sources",
        skill: "Gather reliable evidence at IGCSE GP level.",
        sections: [
          { heading: "Source types", body: "Primary sources: original data (surveys, interviews, official statistics, documents). Secondary sources: analysis/commentary (news, books, reports). Both needed — primary for raw data, secondary for context." },
          { heading: "Evaluating reliability", body: "Check: author credentials, publication date, purpose, bias, corroboration across sources. Reputable organisations (UN, NGOs, peer-reviewed journals) more reliable than anonymous blogs or social media." },
        ],
        keyFormulas: [
          { name: "Primary", statement: "original data" },
          { name: "Secondary", statement: "analysis/commentary" },
          { name: "Corroborate", statement: "verify across sources" },
        ],
        workedExample: {
          problem: "Evaluate this source for a climate research project: 'A blog post claiming vaccines cause autism'.",
          solution: "Unreliable: anonymous author, no evidence, debunked claim, biased purpose. Use peer-reviewed medical journals instead.",
        },
        questions: [
          {
            id: "ciegp-u1-mr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a primary source?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Original data created first-hand" }, { id: "b", text: "A news article" }, { id: "c", text: "A book about history" }, { id: "d", text: "A Wikipedia page" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Primary source", statement: "Original data." }],
              steps: [{ reasoning: "Primary = original first-hand data.", marks: 1, markCode: "M" }],
              finalAnswer: "Original first-hand data",
            },
          },
          {
            id: "ciegp-u1-mr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is corroboration and why is it important?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Corroboration", statement: "Multi-source verification." }],
              steps: [
                { reasoning: "Corroboration = confirm across independent sources.", marks: 1, markCode: "M" },
                { reasoning: "Increases reliability; single sources may be wrong.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Multi-source verification",
            },
          },
          {
            id: "ciegp-u1-mr-q3", difficulty: "core", totalMarks: 3,
            stem: "List three criteria for evaluating source reliability.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Reliability", statement: "Source evaluation." }],
              steps: [
                { reasoning: "Author credentials/expertise.", marks: 1, markCode: "M" },
                { reasoning: "Publication date/relevance.", marks: 1, markCode: "M" },
                { reasoning: "Purpose/bias/corroboration.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Credentials, date, bias, corroboration",
            },
          },
          {
            id: "ciegp-u1-mr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define primary source, secondary source, reliability, validity, bias, corroboration. (b) When use primary vs secondary? (c) What is bias? (d) Why check publication dates? (e) Why are social media posts weak evidence? (f) List 3 reputable source types for global issues. (g) How do you corroborate a claim? (h) Evaluate: 'UN report on refugee statistics' as a source.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Research methods", statement: "Sources, reliability, corroboration." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Primary=raw data; secondary=context.", marks: 1, markCode: "M" },
                { reasoning: "(c) Slanted favouring one view.", marks: 1, markCode: "M" },
                { reasoning: "(d) Old data may be outdated.", marks: 1, markCode: "M" },
                { reasoning: "(e) Unverified, often opinion.", marks: 1, markCode: "M" },
                { reasoning: "(f) Three valid source types.", marks: 1, markCode: "M" },
                { reasoning: "(g) Cross-check across independent sources.", marks: 1, markCode: "M" },
                { reasoning: "(h) Reliable — UN authority, official data.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Research methods and source evaluation.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciegp-u1-mr-notes", title: "Research methods — notes",
      summary: "Primary=original data, secondary=analysis. Evaluate credentials, dates, bias; corroborate claims.",
      sections: [
        { heading: "Key idea", body: "Reliable research uses verified, corroborated sources." },
        { heading: "Bias", body: "Check purpose — who benefits from this information?" },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson103",
    lesson: {
      id: "ciegp-u1-lesson-1-3", code: "1-3",
      title: "Analysing Perspectives and Evidence",
      goal: "I CAN analyse multiple perspectives and evaluate evidence quality on global issues.",
      standards: ["Cambridge IGCSE Global Perspectives 0457: analysis", "0457: perspectives"],
      vocabulary: [
        { term: "Perspective", definition: "Viewpoint shaped by experience/culture." },
        { term: "Stakeholder", definition: "Person/group affected by or affecting issue." },
        { term: "Evidence", definition: "Facts/data supporting claims." },
        { term: "Inference", definition: "Conclusion drawn from evidence." },
        { term: "Counter-argument", definition: "Reasoning against a position." },
        { term: "Assumption", definition: "Unstated belief underlying argument." },
      ],
      concept: {
        id: "ciegp-u1-s3-persp", title: "Perspectives and evidence analysis",
        skill: "Analyse viewpoints and evidence at IGCSE GP level.",
        sections: [
          { heading: "Multiple perspectives", body: "Every global issue affects stakeholders differently. Map who gains, who loses, who's excluded. Consider cultural, economic, political contexts shaping each viewpoint." },
          { heading: "Evidence evaluation", body: "Check relevance (does it address the question?), sufficiency (enough evidence?), reliability (trustworthy source?). Distinguish fact from inference; identify assumptions underlying claims." },
        ],
        keyFormulas: [
          { name: "Stakeholder map", statement: "who gains/loses/is excluded" },
          { name: "Evidence check", statement: "relevant + sufficient + reliable" },
        ],
        workedExample: {
          problem: "Analyse perspectives on 'should cities ban cars from centres?'",
          solution: "Supporters: cleaner air, safer streets. Opponents: accessibility, business impact. Evidence needed: air quality data, economic studies, resident surveys.",
        },
        questions: [
          {
            id: "ciegp-u1-pe-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a stakeholder?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Person/group affected by an issue" }, { id: "b", text: "A type of evidence" }, { id: "c", text: "A research tool" }, { id: "d", text: "A voting system" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Stakeholder", statement: "Affected party." }],
              steps: [{ reasoning: "Stakeholders affected by/affect issues.", marks: 1, markCode: "M" }],
              finalAnswer: "Affected person/group",
            },
          },
          {
            id: "ciegp-u1-pe-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between evidence and inference?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Evidence vs inference", statement: "Data vs conclusion." }],
              steps: [
                { reasoning: "Evidence = facts/data; inference = conclusion drawn.", marks: 1, markCode: "M" },
                { reasoning: "Distinguish to avoid treating opinion as fact.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Data vs conclusion",
            },
          },
          {
            id: "ciegp-u1-pe-q3", difficulty: "core", totalMarks: 3,
            stem: "Identify two perspectives on 'social media use by teenagers' with evidence for each.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Perspectives", statement: "Multiple viewpoints + evidence." }],
              steps: [
                { reasoning: "e.g. Parents: safety concerns — cyberbullying stats.", marks: 1, markCode: "M" },
                { reasoning: "Teens: social connection — usage surveys.", marks: 1, markCode: "M" },
                { reasoning: "Both perspectives + evidence.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Two perspectives with evidence",
            },
          },
          {
            id: "ciegp-u1-pe-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define perspective, stakeholder, evidence, inference, counter-argument, assumption. (b) List 4 stakeholders in 'should schools ban phones?'. (c) Give one perspective + evidence for each. (d) What is an assumption? (e) Why consider counter-arguments? (f) How do you evaluate evidence quality? (g) Find the inference in: 'Pollution is rising, therefore health will worsen.' (h) Analyse both sides of 'universal basic income'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Analysis", statement: "Perspectives, evidence, inference." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Four valid stakeholders.", marks: 1, markCode: "M" },
                { reasoning: "(c) Perspective+evidence pairs.", marks: 1, markCode: "M" },
                { reasoning: "(d) Unstated underlying belief.", marks: 1, markCode: "M" },
                { reasoning: "(e) Tests position strength.", marks: 1, markCode: "M" },
                { reasoning: "(f) Relevance, sufficiency, reliability.", marks: 1, markCode: "M" },
                { reasoning: "(g) 'Health will worsen' is inference.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced UBI analysis.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Perspective and evidence analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciegp-u1-pe-notes", title: "Analysis — notes",
      summary: "Map stakeholder perspectives; distinguish evidence from inference; test assumptions.",
      sections: [
        { heading: "Key idea", body: "Strong analysis weighs multiple viewpoints fairly." },
        { heading: "Evidence", body: "Check relevance, sufficiency, reliability — not just quantity." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson104",
    lesson: {
      id: "ciegp-u1-lesson-1-4", code: "1-4",
      title: "Evaluation and Recommendations",
      goal: "I CAN evaluate solutions and develop evidence-based recommendations for global issues.",
      standards: ["Cambridge IGCSE Global Perspectives 0457: evaluation", "0457: recommendations"],
      vocabulary: [
        { term: "Evaluation", definition: "Judging quality/effectiveness of solutions." },
        { term: "Criteria", definition: "Standards for judging options." },
        { term: "Trade-off", definition: "Giving up one benefit for another." },
        { term: "Feasibility", definition: "Whether solution can realistically be implemented." },
        { term: "Recommendation", definition: "Suggested action based on findings." },
        { term: "Cost-benefit", definition: "Weighing costs against benefits." },
      ],
      concept: {
        id: "ciegp-u1-s4-eval", title: "Evaluation and recommendations",
        skill: "Evaluate solutions and recommend actions at IGCSE GP level.",
        sections: [
          { heading: "Evaluation framework", body: "Judge solutions by: effectiveness (solves problem?), feasibility (can be done?), cost, equity (fair distribution?), sustainability (long-term?), unintended consequences. Acknowledge trade-offs." },
          { heading: "Recommendations", body: "Base recommendations on evidence: what does research show works? Consider stakeholders, resources, context. Recommendations should be specific, realistic, and justified by findings." },
        ],
        keyFormulas: [
          { name: "Criteria", statement: "effective, feasible, fair, sustainable" },
          { name: "Recommendation", statement: "evidence-based + realistic" },
        ],
        workedExample: {
          problem: "Evaluate solutions to plastic pollution and recommend one.",
          solution: "Bans: effective but costly enforcement. Recycling: feasible but contamination issues. Best: combined approach — ban single-use plastics + improve recycling infrastructure.",
        },
        questions: [
          {
            id: "ciegp-u1-ev-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a trade-off?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Giving up one benefit for another" }, { id: "b", text: "A type of argument" }, { id: "c", text: "A research method" }, { id: "d", text: "A voting system" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Trade-off", statement: "Benefit vs benefit." }],
              steps: [{ reasoning: "Trade-offs sacrifice one gain for another.", marks: 1, markCode: "M" }],
              finalAnswer: "Giving up one benefit for another",
            },
          },
          {
            id: "ciegp-u1-ev-q2", difficulty: "foundation", totalMarks: 2,
            stem: "List three criteria for evaluating solutions to a global issue.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Criteria", statement: "Evaluation standards." }],
              steps: [
                { reasoning: "e.g. effectiveness, feasibility, cost.", marks: 1, markCode: "M" },
                { reasoning: "Three valid criteria.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. effective/feasible/cost",
            },
          },
          {
            id: "ciegp-u1-ev-q3", difficulty: "core", totalMarks: 3,
            stem: "What makes a good recommendation? Give two features.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Recommendations", statement: "Evidence-based, realistic." }],
              steps: [
                { reasoning: "Based on evidence/findings.", marks: 1, markCode: "M" },
                { reasoning: "Realistic and specific.", marks: 1, markCode: "M" },
                { reasoning: "Considers stakeholders/context.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Evidence-based + realistic + contextual",
            },
          },
          {
            id: "ciegp-u1-ev-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define evaluation, criteria, trade-off, feasibility, recommendation, cost-benefit. (b) List 5 evaluation criteria. (c) Why is 'effectiveness' key? (d) What is feasibility? (e) Give an example of equity in a solution. (f) Why consider unintended consequences? (g) Evaluate 'carbon tax' — strengths and weaknesses. (h) Design criteria and a recommendation for 'reducing school food waste'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Evaluation", statement: "Criteria, trade-offs, recommendations." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Five valid criteria.", marks: 1, markCode: "M" },
                { reasoning: "(c) Must actually solve problem.", marks: 1, markCode: "M" },
                { reasoning: "(d) Realistically achievable.", marks: 1, markCode: "M" },
                { reasoning: "(e) Fair distribution of benefits.", marks: 1, markCode: "M" },
                { reasoning: "(f) Solutions can backfire.", marks: 1, markCode: "M" },
                { reasoning: "(g) Balanced carbon tax analysis.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid criteria + recommendation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Solution evaluation and recommendations.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciegp-u1-ev-notes", title: "Evaluation — notes",
      summary: "Judge by effectiveness, feasibility, cost, equity, sustainability; recommendations must be evidence-based.",
      sections: [
        { heading: "Key idea", body: "No perfect solution — evaluation means weighing trade-offs." },
        { heading: "Recommendations", body: "Specific, realistic, justified by research findings." },
      ],
    },
  },
  {
    file: "lesson-1-5.ts", exportName: "lesson105",
    lesson: {
      id: "ciegp-u1-lesson-1-5", code: "1-5",
      title: "Reflection and Communication",
      goal: "I CAN reflect on the research process and communicate findings effectively.",
      standards: ["Cambridge IGCSE Global Perspectives 0457: reflection and communication", "0457: presentation"],
      vocabulary: [
        { term: "Reflection", definition: "Thinking about experience to learn from it." },
        { term: "Communication", definition: "Exchanging information clearly." },
        { term: "Presentation", definition: "Structured delivery of findings." },
        { term: "Audience", definition: "Who will receive your message." },
        { term: "Synthesis", definition: "Combining findings into coherent whole." },
        { term: "Limitations", definition: "Acknowledged weaknesses in research." },
      ],
      concept: {
        id: "ciegp-u1-s5-refl", title: "Reflection and communication",
        skill: "Reflect critically and present findings at IGCSE GP level.",
        sections: [
          { heading: "Critical reflection", body: "Reflection asks: What did I learn? What assumptions did I challenge? How has my thinking changed? What limitations did my research have? Honest reflection strengthens the project." },
          { heading: "Effective communication", body: "Structure: hook → evidence → analysis → conclusion → recommendations. Adapt to audience: academic for teachers, accessible for public. Visual aids make data memorable. Acknowledge limitations honestly." },
        ],
        keyFormulas: [
          { name: "Reflection", statement: "what happened → what it means → what changes" },
          { name: "Presentation", statement: "hook→evidence→analysis→conclusion→recommendations" },
        ],
        workedExample: {
          problem: "Present your GP research findings on 'online privacy' to your class.",
          solution: "Hook: surprising statistic. Evidence: research findings. Analysis: perspectives. Conclusion: balanced view. Recommendations: practical steps. Acknowledge limitations.",
        },
        questions: [
          {
            id: "ciegp-u1-rc-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is reflection in GP?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Thinking about experience to learn from it" }, { id: "b", text: "Looking in a mirror" }, { id: "c", text: "Writing a summary" }, { id: "d", text: "Copying notes" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Reflection", statement: "Learning from experience." }],
              steps: [{ reasoning: "Reflection = deeper thinking about experience.", marks: 1, markCode: "M" }],
              finalAnswer: "Learning from experience",
            },
          },
          {
            id: "ciegp-u1-rc-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the structure of an effective presentation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Presentation structure", statement: "Hook→evidence→analysis→conclusion." }],
              steps: [
                { reasoning: "Hook→evidence→analysis→conclusion→recommendations.", marks: 1, markCode: "M" },
                { reasoning: "Logical flow engaging audience.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Hook→evidence→analysis→conclusion→recommendations",
            },
          },
          {
            id: "ciegp-u1-rc-q3", difficulty: "core", totalMarks: 3,
            stem: "Why acknowledge limitations in research? Give an example limitation.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Limitations", statement: "Honest research assessment." }],
              steps: [
                { reasoning: "Shows rigour; readers understand scope.", marks: 1, markCode: "M" },
                { reasoning: "e.g. small sample size, time constraints.", marks: 1, markCode: "M" },
                { reasoning: "Strengthens credibility.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Honesty + scope awareness",
            },
          },
          {
            id: "ciegp-u1-rc-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define reflection, communication, presentation, audience, synthesis, limitations. (b) What questions does reflection ask? (c) What is presentation structure? (d) How do you adapt to audience? (e) What is synthesis? (f) Why acknowledge limitations? (g) Give an example limitation. (h) Write a reflection on completing a GP project.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Reflection", statement: "Learning and communication." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) What learned/assumptions challenged/changes.", marks: 1, markCode: "M" },
                { reasoning: "(c) Hook→evidence→analysis→conclusion→recommendations.", marks: 1, markCode: "M" },
                { reasoning: "(d) Language/depth/examples adapted.", marks: 1, markCode: "M" },
                { reasoning: "(e) Integrated findings into whole.", marks: 1, markCode: "M" },
                { reasoning: "(f) Shows rigour, honesty.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid limitation example.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid reflection.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Reflection and communication skills.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciegp-u1-rc-notes", title: "Reflection — notes",
      summary: "Reflect on learning and limitations; present findings with clear structure adapted to audience.",
      sections: [
        { heading: "Key idea", body: "Reflection turns research into learning." },
        { heading: "Communication", body: "Structure + audience adaptation + honest limitations." },
      ],
    },
  },
];
