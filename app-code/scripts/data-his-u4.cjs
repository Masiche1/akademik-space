module.exports = [
  {
    file: "lesson-4-1.ts", exportName: "lesson361",
    lesson: {
      id: "cieihis-u4-lesson-4-1", code: "4-1",
      title: "Historical Skills: Essay Writing and Structured Answers",
      goal: "I CAN write structured historical essays with clear arguments.",
      standards: ["Cambridge IGCSE History 0470", "Paper 3: essay skills"],
      vocabulary: [
        { term: "Essay", definition: "Structured written argument on historical topic." },
        { term: "Introduction", definition: "Opening paragraph stating argument." },
        { term: "Body paragraphs", definition: "Supporting points with evidence." },
        { term: "Conclusion", definition: "Summary answering the question." },
        { term: "Thesis", definition: "Main argument of essay." },
        { term: "Evidence", definition: "Facts supporting argument." },
      ],
      concept: {
        id: "cieihis-u4-s1-essay", title: "Essay writing",
        skill: "Write structured historical essays.",
        sections: [
          { heading: "Essay structure", body: "Introduction: state thesis/argument. Body: each paragraph = one point + evidence + analysis. Conclusion: restate argument, answer question. PEEL structure: Point, Evidence, Explanation, Link." },
          { heading: "Good essays", body: "Answer the question directly. Use specific evidence. Analyse not just describe. Consider multiple perspectives. Evaluate significance. Clear logical structure." },
        ],
        keyFormulas: [
          { name: "PEEL", statement: "Point, Evidence, Explanation, Link" },
          { name: "Structure", statement: "intro→body→conclusion" },
        ],
        workedExample: {
          problem: "Write essay plan for 'Was the Cold War inevitable?'",
          solution: "Intro: thesis — partly inevitable. Body 1: ideological differences. Body 2: power vacuum. Body 3: could have been managed. Conclusion: structural factors made likely but not certain.",
        },
        questions: [
          {
            id: "cieihis-u4-es-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is PEEL structure?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Point, Evidence, Explanation, Link" }, { id: "b", text: "A type of source" }, { id: "c", text: "A map skill" }, { id: "d", text: "A statistical method" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "PEEL", statement: "Essay paragraph structure." }],
              steps: [{ reasoning: "PEEL = Point, Evidence, Explanation, Link.", marks: 1, markCode: "M" }],
              finalAnswer: "Point, Evidence, Explanation, Link",
            },
          },
          {
            id: "cieihs-u4-es-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What are the parts of a historical essay?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Essay structure", statement: "Intro/body/conclusion." }],
              steps: [
                { reasoning: "Introduction, body paragraphs, conclusion.", marks: 1, markCode: "M" },
                { reasoning: "Each serves specific purpose.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Intro, body, conclusion",
            },
          },
          {
            id: "cieihs-u4-es-q3", difficulty: "core", totalMarks: 3,
            stem: "What makes a good historical essay?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Essay quality", statement: "Good essay features." }],
              steps: [
                { reasoning: "Answers question directly, uses evidence.", marks: 1, markCode: "M" },
                { reasoning: "Analyses not just describes.", marks: 1, markCode: "M" },
                { reasoning: "Clear structure, considers perspectives.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Direct answer, evidence, analysis",
            },
          },
          {
            id: "cieihs-u4-es-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define essay, introduction, body paragraphs, conclusion, thesis, evidence. (b) What is PEEL? (c) What are essay parts? (d) What makes good essay? (e) How do you write introduction? (f) How do you write conclusion? (g) What is thesis? (h) Write essay plan for 'Was the Cold War inevitable?'",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Essay writing", statement: "Structure, skills." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Point, Evidence, Explanation, Link.", marks: 1, markCode: "M" },
                { reasoning: "(c) Intro, body, conclusion.", marks: 1, markCode: "M" },
                { reasoning: "(d) Answer, evidence, analysis, structure.", marks: 1, markCode: "M" },
                { reasoning: "(e) State thesis/argument.", marks: 1, markCode: "M" },
                { reasoning: "(f) Restate argument, answer question.", marks: 1, markCode: "M" },
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
      id: "cieihis-u4-es-notes", title: "Essay writing — notes",
      summary: "PEEL=Point, Evidence, Explanation, Link. Structure: intro→body→conclusion. Answer question directly.",
      sections: [
        { heading: "Key idea", body: "Good essays have clear thesis, evidence-based arguments, logical structure." },
        { heading: "Analysis", body: "Go beyond description — explain significance, evaluate perspectives." },
      ],
    },
  },
  {
    file: "lesson-4-2.ts", exportName: "lesson362",
    lesson: {
      id: "cieihis-u4-lesson-4-2", code: "4-2",
      title: "Historical Skills: Chronology and Periodisation",
      goal: "I CAN organise events chronologically and understand historical periods.",
      standards: ["Cambridge IGCSE History 0470", "Paper 3: chronology"],
      vocabulary: [
        { term: "Chronology", definition: "Arrangement of events in time order." },
        { term: "Periodisation", definition: "Division of history into periods." },
        { term: "Timeline", definition: "Visual representation of events over time." },
        { term: "Century", definition: "100-year period." },
        { term: "Decade", definition: "10-year period." },
        { term: "Era", definition: "Distinct historical period." },
      ],
      concept: {
        id: "cieihis-u4-s2-chron", title: "Chronology",
        skill: "Organise and understand historical time.",
        sections: [
          { heading: "Chronological thinking", body: "Understanding sequence matters — cause and effect. Events lead to consequences. Timeline helps see patterns and turning points." },
          { heading: "Periodisation", body: "History divided into eras: Ancient, Medieval, Early Modern, Modern. IGCSE focuses on 20th century — WWI, interwar, WWII, Cold War, contemporary." },
        ],
        keyFormulas: [
          { name: "Chronology", statement: "time order" },
          { name: "Periodisation", statement: "historical periods" },
        ],
        workedExample: {
          problem: "Place in order: Berlin Wall falls, Cuban Missile Crisis, USSR dissolves, Vietnam War ends.",
          solution: "Cuban Crisis (1962) → Vietnam ends (1975) → Wall falls (1989) → USSR dissolves (1991).",
        },
        questions: [
          {
            id: "cieihs-u4-ch-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is chronology?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Arrangement of events in time order" }, { id: "b", text: "A type of source" }, { id: "c", text: "A map" }, { id: "d", text: "A statistical method" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Chronology", statement: "Time order." }],
              steps: [{ reasoning: "Chronology = events in time order.", marks: 1, markCode: "M" }],
              finalAnswer: "Time order",
            },
          },
          {
            id: "cieihs-u4-ch-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is periodisation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Periodisation", statement: "Historical periods." }],
              steps: [
                { reasoning: "Division of history into periods.", marks: 1, markCode: "M" },
                { reasoning: "e.g. Ancient, Medieval, Modern.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Historical periods",
            },
          },
          {
            id: "cieihs-u4-ch-q3", difficulty: "core", totalMarks: 3,
            stem: "Why is chronology important in history?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Chronological thinking", statement: "Cause/effect." }],
              steps: [
                { reasoning: "Understanding sequence reveals cause/effect.", marks: 1, markCode: "M" },
                { reasoning: "Shows patterns and turning points.", marks: 1, markCode: "M" },
                { reasoning: "Essential for historical analysis.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Cause/effect, patterns",
            },
          },
          {
            id: "cieihs-u4-ch-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define chronology, periodisation, timeline, century, decade, era. (b) What is chronology? (c) What is periodisation? (d) Why is chronology important? (e) What are major 20th century periods? (f) Place in order: Cuban Crisis, Vietnam ends, Wall falls, USSR dissolves. (g) What is a timeline? (h) Explain how periodisation helps understand history.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Chronology", statement: "Time, periods." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Time order.", marks: 1, markCode: "M" },
                { reasoning: "(c) Historical periods.", marks: 1, markCode: "M" },
                { reasoning: "(d) Cause/effect, patterns.", marks: 1, markCode: "M" },
                { reasoning: "(e) WWI, interwar, WWII, Cold War.", marks: 1, markCode: "M" },
                { reasoning: "(f) Correct chronological order.", marks: 1, markCode: "M" },
                { reasoning: "(g) Visual time representation.", marks: 1, markCode: "M" },
                { reasoning: "(h) Organises complexity, reveals patterns.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Chronology and periodisation.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u4-ch-notes", title: "Chronology — notes",
      summary: "Chronology=time order; periodisation=historical periods. Sequence reveals cause/effect.",
      sections: [
        { heading: "Key idea", body: "Understanding when events happened is essential for historical analysis." },
        { heading: "20th century", body: "WWI→interwar→WWII→Cold War→contemporary periods." },
      ],
    },
  },
  {
    file: "lesson-4-3.ts", exportName: "lesson363",
    lesson: {
      id: "cieihis-u4-lesson-4-3", code: "4-3",
      title: "Historical Skills: Historical Significance",
      goal: "I CAN evaluate the historical significance of events and figures.",
      standards: ["Cambridge IGCSE History 0470", "Paper 3: significance"],
      vocabulary: [
        { term: "Significance", definition: "Historical importance of events/figures." },
        { term: "Impact", definition: "Effect on people/events." },
        { term: "Legacy", definition: "Long-term consequences." },
        { term: "Turning point", definition: "Event that changes historical direction." },
        { term: "Scale", definition: "Size/scope of impact." },
        { term: "Duration", definition: "Length of impact." },
      ],
      concept: {
        id: "cieihis-u4-s3-sig", title: "Historical significance",
        skill: "Evaluate historical importance.",
        sections: [
          { heading: "Evaluating significance", body: "Impact: who/what affected? Scale: how widespread? Duration: short/long-term? Legacy: lasting consequences? Turning point: did it change direction?" },
          { heading: "Significant events", body: "WWII, Cold War, Holocaust, decolonisation, Civil Rights — transformed world. Figures: MLK, Mandela, Gandhi, Churchill — shaped history." },
        ],
        keyFormulas: [
          { name: "Significance", statement: "historical importance" },
          { name: "Turning point", statement: "changes direction" },
        ],
        workedExample: {
          problem: "Was the fall of the Berlin Wall significant?",
          solution: "Yes — symbolised Cold War end, led to German reunification, inspired Eastern European revolutions, reshaped global politics.",
        },
        questions: [
          {
            id: "cieihs-u4-sg-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is historical significance?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Historical importance of events/figures" }, { id: "b", text: "A type of source" }, { id: "c", text: "A map" }, { id: "d", text: "A statistical method" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Significance", statement: "Historical importance." }],
              steps: [{ reasoning: "Significance = historical importance.", marks: 1, markCode: "M" }],
              finalAnswer: "Historical importance",
            },
          },
          {
            id: "cieihs-u4-sg-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a turning point?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Turning point", statement: "Direction change." }],
              steps: [
                { reasoning: "Event that changes historical direction.", marks: 1, markCode: "M" },
                { reasoning: "Marks major shift in events.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Direction change event",
            },
          },
          {
            id: "cieihs-u4-sg-q3", difficulty: "core", totalMarks: 3,
            stem: "How do you evaluate historical significance?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Significance evaluation", statement: "Impact assessment." }],
              steps: [
                { reasoning: "Impact: who/what affected?", marks: 1, markCode: "M" },
                { reasoning: "Scale/duration/legacy.", marks: 1, markCode: "M" },
                { reasoning: "Turning point?", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Impact, scale, duration, legacy",
            },
          },
          {
            id: "cieihs-u4-sg-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define significance, impact, legacy, turning point, scale, duration. (b) What is significance? (c) What is a turning point? (d) How evaluate significance? (e) Was Cold War significant? Why? (f) Was Civil Rights significant? Why? (g) Was Mandela significant? Why? (h) Evaluate which 20th century event was most significant.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Significance", statement: "Evaluation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Historical importance.", marks: 1, markCode: "M" },
                { reasoning: "(c) Direction change.", marks: 1, markCode: "M" },
                { reasoning: "(d) Impact, scale, duration, legacy.", marks: 1, markCode: "M" },
                { reasoning: "(e) Yes — shaped world politics.", marks: 1, markCode: "M" },
                { reasoning: "(f) Yes — transformed US race relations.", marks: 1, markCode: "M" },
                { reasoning: "(g) Yes — ended apartheid, model for reconciliation.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid evaluation with justification.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Historical significance evaluation.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u4-sg-notes", title: "Significance — notes",
      summary: "Significance=historical importance. Evaluate impact, scale, duration, legacy, turning point.",
      sections: [
        { heading: "Key idea", body: "Not all events are equally significant — evaluate carefully." },
        { heading: "Criteria", body: "Impact, scale, duration, legacy determine significance." },
      ],
    },
  },
  {
    file: "lesson-4-4.ts", exportName: "lesson364",
    lesson: {
      id: "cieihis-u4-lesson-4-4", code: "4-4",
      title: "Historical Skills: Extended Essay and Research",
      goal: "I CAN conduct historical research and write extended responses.",
      standards: ["Cambridge IGCSE History 0470", "Paper 3: extended response"],
      vocabulary: [
        { term: "Research question", definition: "Question guiding historical investigation." },
        { term: "Historiography", definition: "Different historical interpretations." },
        { term: "Synthesis", definition: "Combining multiple sources/perspectives." },
        { term: "Evaluation", definition: "Judging quality/validity of arguments." },
        { term: "Context", definition: "Historical background/setting." },
        { term: "Nuance", definition: "Subtle complexity in analysis." },
      ],
      concept: {
        id: "cieihis-u4-s4-research", title: "Research and extended response",
        skill: "Conduct historical research and write complex answers.",
        sections: [
          { heading: "Research process", body: "Formulate question → gather sources → analyse evidence → construct argument → evaluate. Use primary and secondary sources. Consider historiography." },
          { heading: "Extended responses", body: "Longer answers require: clear structure, multiple points, evidence integration, analysis depth, evaluation. Balance different perspectives." },
        ],
        keyFormulas: [
          { name: "Research", statement: "question→sources→argument" },
          { name: "Synthesis", statement: "combine perspectives" },
        ],
        workedExample: {
          problem: "Research question: 'Was decolonisation a success?' Plan your approach.",
          solution: "Gather evidence on independence movements, post-colonial development, neocolonialism. Compare successes (political independence) vs failures (economic dependence). Synthesize multiple perspectives.",
        },
        questions: [
          {
            id: "cieihs-u4-rs-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a research question in history?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Question guiding historical investigation" }, { id: "b", text: "A type of source" }, { id: "c", text: "A map" }, { id: "d", text: "A statistical method" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Research question", statement: "Investigation guide." }],
              steps: [{ reasoning: "Research question = investigation guide.", marks: 1, markCode: "M" }],
              finalAnswer: "Investigation guide",
            },
          },
          {
            id: "cieihs-u4-rs-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is historiography?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Historiography", statement: "Historical interpretations." }],
              steps: [
                { reasoning: "Different historical interpretations.", marks: 1, markCode: "M" },
                { reasoning: "Study of how history is written.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Historical interpretations",
            },
          },
          {
            id: "cieihs-u4-rs-q3", difficulty: "core", totalMarks: 3,
            stem: "What is synthesis in historical writing?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Synthesis", statement: "Combining perspectives." }],
              steps: [
                { reasoning: "Combining multiple sources/perspectives.", marks: 1, markCode: "M" },
                { reasoning: "Creates comprehensive analysis.", marks: 1, markCode: "M" },
                { reasoning: "Shows nuanced understanding.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Combining perspectives",
            },
          },
          {
            id: "cieihs-u4-rs-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define research question, historiography, synthesis, evaluation, context, nuance. (b) What is research question? (c) What is historiography? (d) What is synthesis? (e) What is evaluation? (f) How conduct historical research? (g) What makes good extended response? (h) Plan research for 'Was the Cold War inevitable?'",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Research", statement: "Extended response." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Investigation guide.", marks: 1, markCode: "M" },
                { reasoning: "(c) Historical interpretations.", marks: 1, markCode: "M" },
                { reasoning: "(d) Combining perspectives.", marks: 1, markCode: "M" },
                { reasoning: "(e) Judging quality.", marks: 1, markCode: "M" },
                { reasoning: "(f) Question→sources→argument.", marks: 1, markCode: "M" },
                { reasoning: "(g) Structure, evidence, analysis, evaluation.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid research plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Historical research skills.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u4-rs-notes", title: "Research — notes",
      summary: "Research: question→sources→argument. Synthesis combines perspectives. Extended responses need depth.",
      sections: [
        { heading: "Key idea", body: "Good historical research balances evidence, analysis, evaluation." },
        { heading: "Nuance", body: "Avoid simplistic answers — acknowledge complexity and multiple perspectives." },
      ],
    },
  },
];
