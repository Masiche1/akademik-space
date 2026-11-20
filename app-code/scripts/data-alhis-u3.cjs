module.exports = [
  {
    file: "lesson-3-1.ts", exportName: "lesson631",
    lesson: {
      id: "ciealhis-u3-lesson-3-1", code: "3-1",
      title: "Historical Source Analysis",
      goal: "I CAN evaluate historical sources for reliability, bias and usefulness.",
      standards: ["Cambridge A Level History 9489", "Paper 3: source analysis"],
      vocabulary: [
        { term: "Primary source", definition: "Source created at the time of events." },
        { term: "Secondary source", definition: "Source created after events." },
        { term: "Reliability", definition: "Trustworthiness/accuracy." },
        { term: "Bias", definition: "Prejudice affecting perspective." },
        { term: "Usefulness", definition: "Value for answering question." },
        { term: "Corroboration", definition: "Cross-checking sources." },
      ],
      concept: {
        id: "ciealhis-u3-s1-source", title: "Source analysis",
        skill: "Evaluate historical sources critically.",
        sections: [
          { heading: "Source evaluation", body: "Who created it? When? Why? Purpose? Primary or secondary? Content? Intended audience?" },
          { heading: "Reliability vs usefulness", body: "Reliable = accurate/trustworthy. Useful = relevant to question. A source can be reliable but not useful, or useful but biased." },
        ],
        keyFormulas: [
          { name: "Primary", statement: "contemporary" },
          { name: "Secondary", statement: "later" },
          { name: "Reliability", statement: "trustworthiness" },
        ],
        workedExample: {
          problem: "A government report praising its own policies. How evaluate?",
          solution: "Likely biased — government has interest in positive portrayal. Useful for official perspective but not neutral facts.",
        },
        questions: [
          {
            id: "ciealhis-u3-src-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a primary source?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Source created at the time of events" }, { id: "b", text: "Source created after events" }, { id: "c", text: "A type of map" }, { id: "d", text: "A modern textbook" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Primary", statement: "Contemporary." }],
              steps: [{ reasoning: "Primary = created at time of events.", marks: 1, markCode: "M" }],
              finalAnswer: "Contemporary source",
            },
          },
          {
            id: "ciealhis-u3-src-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between reliability and usefulness?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Reliability vs usefulness", statement: "Trust vs relevance." }],
              steps: [
                { reasoning: "Reliable = accurate/trustworthy.", marks: 1, markCode: "M" },
                { reasoning: "Useful = relevant to question.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Trust vs relevance",
            },
          },
          {
            id: "ciealhis-u3-src-q3", difficulty: "core", totalMarks: 3,
            stem: "How do you evaluate a historical source?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Source evaluation", statement: "Critical analysis." }],
              steps: [
                { reasoning: "Who created it? When? Why?", marks: 1, markCode: "M" },
                { reasoning: "What's the purpose? Audience?", marks: 1, markCode: "M" },
                { reasoning: "Reliability, bias, usefulness.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Who/when/why/purpose",
            },
          },
          {
            id: "ciealhis-u3-src-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define primary source, secondary source, reliability, bias, usefulness, corroboration. (b) What is primary? (c) What is secondary? (d) What is reliability? (e) What is bias? (f) How evaluate sources? (g) What is corroboration? (h) Evaluate a government report praising its own policies.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Source analysis", statement: "Evaluation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Contemporary.", marks: 1, markCode: "M" },
                { reasoning: "(c) Later source.", marks: 1, markCode: "M" },
                { reasoning: "(d) Trustworthiness.", marks: 1, markCode: "M" },
                { reasoning: "(e) Prejudice.", marks: 1, markCode: "M" },
                { reasoning: "(f) Who/when/why/purpose.", marks: 1, markCode: "M" },
                { reasoning: "(g) Cross-checking.", marks: 1, markCode: "M" },
                { reasoning: "(h) Biased but useful for official view.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Source analysis skills.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u3-src-notes", title: "Source analysis — notes",
      summary: "Primary=contemporary; secondary=later. Evaluate who/when/why/purpose.",
      sections: [
        { heading: "Key idea", body: "Critical source analysis reveals perspective, bias and limitations." },
        { heading: "Corroboration", body: "Cross-check multiple sources to verify accuracy." },
      ],
    },
  },
  {
    file: "lesson-3-2.ts", exportName: "lesson632",
    lesson: {
      id: "ciealhis-u3-lesson-3-2", code: "3-2",
      title: "Historical Interpretation and Historiography",
      goal: "I CAN evaluate different historical interpretations and historiography.",
      standards: ["Cambridge A Level History 9489", "Paper 3: interpretation"],
      vocabulary: [
        { term: "Interpretation", definition: "Historical viewpoint/analysis." },
        { term: "Historiography", definition: "Study of how history is written." },
        { term: "Revisionism", definition: "Reinterpretation of established history." },
        { term: "Postmodernism", definition: "Scepticism about objective history." },
        { term: "Marxist history", definition: "Class struggle focus." },
        { term: "Feminist history", definition: "Gender perspective focus." },
      ],
      concept: {
        id: "ciealhis-u3-s2-hist", title: "Historiography",
        skill: "Evaluate historical interpretations.",
        sections: [
          { heading: "Interpretations", body: "Different historians interpret events differently based on evidence, perspective, values. History is interpretation, not just facts." },
          { heading: "Historiographical schools", body: "Traditional/political: leaders, events. Social: ordinary people, class, gender. Revisionist: challenges orthodox views. Postmodern: sceptical of objective truth." },
        ],
        keyFormulas: [
          { name: "Interpretation", statement: "viewpoint" },
          { name: "Historiography", statement: "history writing" },
          { name: "Revisionism", statement: "reinterpretation" },
        ],
        workedExample: {
          problem: "Why do historians disagree about causes of World War I?",
          solution: "Different interpretations: German war aims, systemic failure, alliance systems, nationalism. Evidence supports multiple explanations.",
        },
        questions: [
          {
            id: "ciealhis-u3-hist-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is historiography?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Study of how history is written" }, { id: "b", text: "A type of source" }, { id: "c", text: "A map" }, { id: "d", text: "A textbook" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Historiography", statement: "History writing." }],
              steps: [{ reasoning: "Historiography = study of historical writing.", marks: 1, markCode: "M" }],
              finalAnswer: "History writing study",
            },
          },
          {
            id: "ciealhis-u3-hist-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is an interpretation in history?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Interpretation", statement: "Viewpoint." }],
              steps: [
                { reasoning: "Historical viewpoint/analysis.", marks: 1, markCode: "M" },
                { reasoning: "Different historians interpret differently.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Historical viewpoint",
            },
          },
          {
            id: "ciealhis-u3-hist-q3", difficulty: "core", totalMarks: 3,
            stem: "Why do historians disagree?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Disagreement", statement: "Causes." }],
              steps: [
                { reasoning: "Different evidence/perspectives.", marks: 1, markCode: "M" },
                { reasoning: "Different values/methodologies.", marks: 1, markCode: "M" },
                { reasoning: "History is interpretation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Evidence, perspective, values",
            },
          },
          {
            id: "ciealhis-u3-hist-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define interpretation, historiography, revisionism, postmodernism, Marxist history, feminist history. (b) What is historiography? (c) What is interpretation? (d) Why do historians disagree? (e) What is revisionism? (f) What is postmodernism? (g) What is Marxist history? (h) Evaluate whether history can be objective.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Historiography", statement: "Interpretation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) History writing study.", marks: 1, markCode: "M" },
                { reasoning: "(c) Historical viewpoint.", marks: 1, markCode: "M" },
                { reasoning: "(d) Evidence, perspective, values.", marks: 1, markCode: "M" },
                { reasoning: "(e) Reinterpretation.", marks: 1, markCode: "M" },
                { reasoning: "(f) Scepticism about truth.", marks: 1, markCode: "M" },
                { reasoning: "(g) Class struggle focus.", marks: 1, markCode: "M" },
                { reasoning: "(h) Objective impossible but evidence-based.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Historiography analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u3-hist-notes", title: "Historiography — notes",
      summary: "History=interpretation not just facts. Historians disagree on evidence/perspective.",
      sections: [
        { heading: "Key idea", body: "Different schools of history emphasise different factors." },
        { heading: "Schools", body: "Traditional, social, revisionist, postmodern, Marxist, feminist." },
      ],
    },
  },
  {
    file: "lesson-3-3.ts", exportName: "lesson633",
    lesson: {
      id: "ciealhis-u3-lesson-3-3", code: "3-3",
      title: "Essay Writing and Structured Answers",
      goal: "I CAN write structured historical essays with clear arguments.",
      standards: ["Cambridge A Level History 9489", "Paper 3: essay skills"],
      vocabulary: [
        { term: "Essay", definition: "Structured written argument." },
        { term: "Introduction", definition: "Opening stating argument." },
        { term: "Body paragraphs", definition: "Supporting points with evidence." },
        { term: "Conclusion", definition: "Summary answering question." },
        { term: "Thesis", definition: "Main argument." },
        { term: "Evidence", definition: "Facts supporting argument." },
      ],
      concept: {
        id: "ciealhis-u3-s3-essay", title: "Essay writing",
        skill: "Write structured historical essays.",
        sections: [
          { heading: "Essay structure", body: "Introduction: thesis/argument. Body: each paragraph = point + evidence + analysis. Conclusion: answer question. PEEL: Point, Evidence, Explanation, Link." },
          { heading: "Good essays", body: "Answer question directly. Use specific evidence. Analyse not just describe. Consider multiple perspectives. Evaluate significance." },
        ],
        keyFormulas: [
          { name: "PEEL", statement: "Point, Evidence, Explanation, Link" },
          { name: "Structure", statement: "intro→body→conclusion" },
        ],
        workedExample: {
          problem: "Write essay plan for 'Was the Cold War inevitable?'",
          solution: "Intro: partly inevitable due to ideology. Body: ideological differences, power vacuum, could have been managed. Conclusion: structural factors made likely but not certain.",
        },
        questions: [
          {
            id: "ciealhis-u3-es-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is PEEL structure?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Point, Evidence, Explanation, Link" }, { id: "b", text: "A type of source" }, { id: "c", text: "A map skill" }, { id: "d", text: "A statistical method" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "PEEL", statement: "Essay structure." }],
              steps: [{ reasoning: "PEEL = Point, Evidence, Explanation, Link.", marks: 1, markCode: "M" }],
              finalAnswer: "Point, Evidence, Explanation, Link",
            },
          },
          {
            id: "ciealhis-u3-es-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What are the parts of a historical essay?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Essay structure", statement: "Parts." }],
              steps: [
                { reasoning: "Introduction, body, conclusion.", marks: 1, markCode: "M" },
                { reasoning: "Each serves specific purpose.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Intro, body, conclusion",
            },
          },
          {
            id: "ciealhis-u3-es-q3", difficulty: "core", totalMarks: 3,
            stem: "What makes a good historical essay?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Essay quality", statement: "Features." }],
              steps: [
                { reasoning: "Answers question, uses evidence.", marks: 1, markCode: "M" },
                { reasoning: "Analyses not just describes.", marks: 1, markCode: "M" },
                { reasoning: "Clear structure, multiple perspectives.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Answer, evidence, analysis",
            },
          },
          {
            id: "ciealhis-u3-es-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define essay, introduction, body paragraphs, conclusion, thesis, evidence. (b) What is PEEL? (c) What are essay parts? (d) What makes good essay? (e) How write introduction? (f) How write conclusion? (g) What is thesis? (h) Write essay plan for 'Was Cold War inevitable?'",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Essay writing", statement: "Skills." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) PEEL structure.", marks: 1, markCode: "M" },
                { reasoning: "(c) Intro, body, conclusion.", marks: 1, markCode: "M" },
                { reasoning: "(d) Answer, evidence, analysis.", marks: 1, markCode: "M" },
                { reasoning: "(e) State thesis.", marks: 1, markCode: "M" },
                { reasoning: "(f) Restate argument.", marks: 1, markCode: "M" },
                { reasoning: "(g) Main argument.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid essay plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Essay writing skills.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u3-es-notes", title: "Essay writing — notes",
      summary: "PEEL=Point, Evidence, Explanation, Link. Structure: intro→body→conclusion.",
      sections: [
        { heading: "Key idea", body: "Good essays have clear thesis, evidence-based arguments, logical structure." },
        { heading: "Analysis", body: "Go beyond description — explain significance, evaluate perspectives." },
      ],
    },
  },
  {
    file: "lesson-3-4.ts", exportName: "lesson634",
    lesson: {
      id: "ciealhis-u3-lesson-3-4", code: "3-4",
      title: "Historical Significance and Chronology",
      goal: "I CAN evaluate historical significance and organise chronologically.",
      standards: ["Cambridge A Level History 9489", "Paper 3: significance"],
      vocabulary: [
        { term: "Significance", definition: "Historical importance." },
        { term: "Chronology", definition: "Arrangement of events in time." },
        { term: "Periodisation", definition: "Division of history into periods." },
        { term: "Turning point", definition: "Event changing historical direction." },
        { term: "Scale", definition: "Size/scope of impact." },
        { term: "Duration", definition: "Length of impact." },
      ],
      concept: {
        id: "ciealhis-u3-s4-sig", title: "Significance and chronology",
        skill: "Evaluate historical importance.",
        sections: [
          { heading: "Significance", body: "Impact: who/what affected? Scale: how widespread? Duration: short/long-term? Legacy: lasting consequences? Turning point?" },
          { heading: "Chronology", body: "Understanding sequence matters — cause and effect. Timeline shows patterns and turning points. Periodisation divides history into eras." },
        ],
        keyFormulas: [
          { name: "Significance", statement: "historical importance" },
          { name: "Chronology", statement: "time order" },
          { name: "Turning point", statement: "direction change" },
        ],
        workedExample: {
          problem: "Was the fall of Berlin Wall significant?",
          solution: "Yes — symbolised Cold War end, led to German reunification, inspired Eastern European revolutions.",
        },
        questions: [
          {
            id: "ciealhis-u3-sg-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is historical significance?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Historical importance" }, { id: "b", text: "A type of source" }, { id: "c", text: "A map" }, { id: "d", text: "A statistical method" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Significance", statement: "Historical importance." }],
              steps: [{ reasoning: "Significance = historical importance.", marks: 1, markCode: "M" }],
              finalAnswer: "Historical importance",
            },
          },
          {
            id: "ciealhis-u3-sg-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a turning point?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Turning point", statement: "Direction change." }],
              steps: [
                { reasoning: "Event changing historical direction.", marks: 1, markCode: "M" },
                { reasoning: "Marks major shift in events.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Direction change event",
            },
          },
          {
            id: "ciealhis-u3-sg-q3", difficulty: "core", totalMarks: 3,
            stem: "How do you evaluate historical significance?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Significance", statement: "Evaluation." }],
              steps: [
                { reasoning: "Impact: who/what affected?", marks: 1, markCode: "M" },
                { reasoning: "Scale, duration, legacy.", marks: 1, markCode: "M" },
                { reasoning: "Turning point?", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Impact, scale, duration, legacy",
            },
          },
          {
            id: "ciealhis-u3-sg-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define significance, chronology, periodisation, turning point, scale, duration. (b) What is significance? (c) What is chronology? (d) How evaluate significance? (e) What is periodisation? (f) What is turning point? (g) Why is chronology important? (h) Evaluate which 20th century event was most significant.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Significance", statement: "Evaluation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Historical importance.", marks: 1, markCode: "M" },
                { reasoning: "(c) Time order.", marks: 1, markCode: "M" },
                { reasoning: "(d) Impact, scale, duration, legacy.", marks: 1, markCode: "M" },
                { reasoning: "(e) Historical periods.", marks: 1, markCode: "M" },
                { reasoning: "(f) Direction change.", marks: 1, markCode: "M" },
                { reasoning: "(g) Cause/effect, patterns.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid evaluation with justification.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Historical significance evaluation.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u3-sg-notes", title: "Significance — notes",
      summary: "Significance=historical importance. Evaluate impact, scale, duration, legacy.",
      sections: [
        { heading: "Key idea", body: "Not all events are equally significant — evaluate carefully." },
        { heading: "Chronology", body: "Understanding sequence reveals cause/effect and turning points." },
      ],
    },
  },
];
