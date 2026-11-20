module.exports = [
  {
    file: "lesson-4-1.ts", exportName: "lesson641",
    lesson: {
      id: "ciealhis-u4-lesson-4-1", code: "4-1",
      title: "Extended Essay and Research Skills",
      goal: "I CAN conduct historical research and write extended responses.",
      standards: ["Cambridge A Level History 9489", "Paper 3: extended response"],
      vocabulary: [
        { term: "Research question", definition: "Question guiding investigation." },
        { term: "Historiography", definition: "Different historical interpretations." },
        { term: "Synthesis", definition: "Combining multiple sources/perspectives." },
        { term: "Evaluation", definition: "Judging quality of arguments." },
        { term: "Context", definition: "Historical background." },
        { term: "Nuance", definition: "Subtle complexity in analysis." },
      ],
      concept: {
        id: "ciealhis-u4-s1-res", title: "Research skills",
        skill: "Conduct research and write complex answers.",
        sections: [
          { heading: "Research process", body: "Formulate question → gather sources → analyse evidence → construct argument → evaluate. Use primary and secondary sources. Consider historiography." },
          { heading: "Extended responses", body: "Longer answers require: clear structure, multiple points, evidence integration, analysis depth, evaluation. Balance perspectives." },
        ],
        keyFormulas: [
          { name: "Research", statement: "question→sources→argument" },
          { name: "Synthesis", statement: "combine perspectives" },
        ],
        workedExample: {
          problem: "Research question: 'Was decolonisation successful?' Plan approach.",
          solution: "Gather evidence on independence movements, post-colonial development, neocolonialism. Compare political success vs economic challenges. Synthesize perspectives.",
        },
        questions: [
          {
            id: "ciealhis-u4-rs-q1", difficulty: "foundation", totalMarks: 1,
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
            id: "ciealhis-u4-rs-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is historiography?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Historiography", statement: "Interpretations." }],
              steps: [
                { reasoning: "Different historical interpretations.", marks: 1, markCode: "M" },
                { reasoning: "Study of how history is written.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Historical interpretations",
            },
          },
          {
            id: "ciealhis-u4-rs-q3", difficulty: "core", totalMarks: 3,
            stem: "What is synthesis in historical writing?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Synthesis", statement: "Combining." }],
              steps: [
                { reasoning: "Combining multiple sources/perspectives.", marks: 1, markCode: "M" },
                { reasoning: "Creates comprehensive analysis.", marks: 1, markCode: "M" },
                { reasoning: "Shows nuanced understanding.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Combining perspectives",
            },
          },
          {
            id: "ciealhis-u4-rs-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define research question, historiography, synthesis, evaluation, context, nuance. (b) What is research question? (c) What is historiography? (d) What is synthesis? (e) What is evaluation? (f) How conduct research? (g) What makes good extended response? (h) Plan research for 'Was Cold War inevitable?'",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Research", statement: "Extended response." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Investigation guide.", marks: 1, markCode: "M" },
                { reasoning: "(c) Interpretations.", marks: 1, markCode: "M" },
                { reasoning: "(d) Combining perspectives.", marks: 1, markCode: "M" },
                { reasoning: "(e) Judging quality.", marks: 1, markCode: "M" },
                { reasoning: "(f) Question→sources→argument.", marks: 1, markCode: "M" },
                { reasoning: "(g) Structure, evidence, analysis.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid research plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Historical research skills.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u4-rs-notes", title: "Research — notes",
      summary: "Research: question→sources→argument. Synthesis combines perspectives.",
      sections: [
        { heading: "Key idea", body: "Good historical research balances evidence, analysis, evaluation." },
        { heading: "Nuance", body: "Avoid simplistic answers — acknowledge complexity." },
      ],
    },
  },
  {
    file: "lesson-4-2.ts", exportName: "lesson642",
    lesson: {
      id: "ciealhis-u4-lesson-4-2", code: "4-2",
      title: "Cold War: Comparative Analysis",
      goal: "I CAN compare and contrast superpower strategies and outcomes.",
      standards: ["Cambridge A Level History 9489", "Paper 1: analysis"],
      vocabulary: [
        { term: "Containment", definition: "US policy to prevent communism." },
        { term: "Expansionism", definition: "Soviet policy to spread communism." },
        { term: "Detente", definition: "Period of reduced tension." },
        { term: "Proxy war", definition: "Conflict through allies." },
        { term: "Arms race", definition: "Nuclear weapons competition." },
        { term: "Spheres of influence", definition: "Areas controlled by superpowers." },
      ],
      concept: {
        id: "ciealhis-u4-s2-comp", title: "Comparative analysis",
        skill: "Compare superpower strategies.",
        sections: [
          { heading: "US strategy", body: "Containment: prevent communism spread. Marshall Plan: economic aid. NATO: military alliance. Nuclear deterrence: MAD doctrine." },
          { heading: "Soviet strategy", body: "Expansionism: spread communism. Comecon: economic bloc. Warsaw Pact: military alliance. Proxy support: Korea, Vietnam, Afghanistan." },
        ],
        keyFormulas: [
          { name: "US", statement: "containment" },
          { name: "USSR", statement: "expansionism" },
          { name: "Proxy", statement: "allied conflict" },
        ],
        workedExample: {
          problem: "Compare US and Soviet approaches to Cold War.",
          solution: "US: containment, economic aid, alliances. USSR: expansion, military support, proxy wars. Both avoided direct conflict.",
        },
        questions: [
          {
            id: "ciealhis-u4-comp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was US containment policy?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Prevent communism spread" }, { id: "b", text: "Spread communism" }, { id: "c", text: "A trade agreement" }, { id: "d", text: "A military alliance" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Containment", statement: "Prevent communism." }],
              steps: [{ reasoning: "Containment = prevent communism spread.", marks: 1, markCode: "M" }],
              finalAnswer: "Prevent communism",
            },
          },
          {
            id: "ciealhis-u4-comp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What was Soviet expansionism?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Expansionism", statement: "Communism spread." }],
              steps: [
                { reasoning: "Soviet policy to spread communism.", marks: 1, markCode: "M" },
                { reasoning: "Through military, political, economic means.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Communism spread",
            },
          },
          {
            id: "ciealhis-u4-comp-q3", difficulty: "core", totalMarks: 3,
            stem: "Compare US and Soviet Cold War strategies.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Comparison", statement: "Strategies." }],
              steps: [
                { reasoning: "US: containment, economic aid, NATO.", marks: 1, markCode: "M" },
                { reasoning: "USSR: expansion, Warsaw Pact, proxies.", marks: 1, markCode: "M" },
                { reasoning: "Both avoided direct war.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Containment vs expansion",
            },
          },
          {
            id: "ciealhis-u4-comp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define containment, expansionism, detente, proxy war, arms race, spheres of influence. (b) What was containment? (c) What was expansionism? (d) What was detente? (e) What was proxy war? (f) What was arms race? (g) What were spheres of influence? (h) Evaluate which superpower 'won' the Cold War.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Comparison", statement: "Analysis." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Prevent communism.", marks: 1, markCode: "M" },
                { reasoning: "(c) Spread communism.", marks: 1, markCode: "M" },
                { reasoning: "(d) Reduced tension.", marks: 1, markCode: "M" },
                { reasoning: "(e) Allied conflict.", marks: 1, markCode: "M" },
                { reasoning: "(f) Nuclear competition.", marks: 1, markCode: "M" },
                { reasoning: "(g) Controlled areas.", marks: 1, markCode: "M" },
                { reasoning: "(h) USSR collapsed — US strategic victory.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Cold War comparative analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u4-comp-notes", title: "Comparison — notes",
      summary: "US containment vs USSR expansion. Both used proxies and alliances.",
      sections: [
        { heading: "Key idea", body: "Superpower strategies shaped Cold War outcomes." },
        { heading: "Outcome", body: "US strategic victory — USSR collapsed." },
      ],
    },
  },
  {
    file: "lesson-4-3.ts", exportName: "lesson643",
    lesson: {
      id: "ciealhis-u4-lesson-4-3", code: "4-3",
      title: "Post-Cold War World",
      goal: "I CAN analyse post-Cold War international relations and conflicts.",
      standards: ["Cambridge A Level History 9489", "Paper 1: post-Cold War"],
      vocabulary: [
        { term: "Unipolarity", definition: "US as sole superpower." },
        { term: "9/11", definition: "2001 terrorist attacks on US." },
        { term: "War on Terror", definition: "US-led response to terrorism." },
        { term: "Iraq War", definition: "2003 US-led invasion of Iraq." },
        { term: "Afghanistan War", definition: "2001 US-led intervention." },
        { term: "Multipolarity", definition: "Multiple power centres." },
      ],
      concept: {
        id: "ciealhis-u4-s3-post", title: "Post-Cold War",
        skill: "Analyse post-Cold War world order.",
        sections: [
          { heading: "US unipolarity", body: "1991: US sole superpower. 'New World Order' — democracy, free markets, US leadership. NATO expansion into Eastern Europe." },
          { heading: "Post-9/11", body: "2001: terrorist attacks transformed US foreign policy. War on Terror: Afghanistan 2001, Iraq 2003. Challenged US hegemony." },
          { heading: "Multipolar emergence", body: "China's rise, Russia's resurgence, EU integration. Power shifting from US unipolarity to multipolarity." },
        ],
        keyFormulas: [
          { name: "Unipolar", statement: "US dominance" },
          { name: "9/11", statement: "2001 attacks" },
          { name: "Multipolar", statement: "multiple powers" },
        ],
        workedExample: {
          problem: "How did 9/11 change international relations?",
          solution: "Transformed US foreign policy — War on Terror, Afghanistan/Iraq wars, strained alliances, rise of terrorism as key threat.",
        },
        questions: [
          {
            id: "ciealhis-u4-pcw-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was unipolarity?",
            response: { type: "mcq", choices: [
              { id: "a", text: "US as sole superpower" }, { id: "b", text: "Multiple powers" }, { id: "c", text: "A type of government" }, { id: "d", text: "A trade agreement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Unipolarity", statement: "US dominance." }],
              steps: [{ reasoning: "Unipolarity = US sole superpower.", marks: 1, markCode: "M" }],
              finalAnswer: "US sole superpower",
            },
          },
          {
            id: "ciealhis-u4-pcw-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What was the War on Terror?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "War on Terror", statement: "US response." }],
              steps: [
                { reasoning: "US-led response to terrorism.", marks: 1, markCode: "M" },
                { reasoning: "Afghanistan 2001, Iraq 2003.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "US terrorism response",
            },
          },
          {
            id: "ciealhis-u4-pcw-q3", difficulty: "core", totalMarks: 3,
            stem: "How did 9/11 change international relations?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "9/11 impact", statement: "Changes." }],
              steps: [
                { reasoning: "Transformed US foreign policy.", marks: 1, markCode: "M" },
                { reasoning: "War on Terror, Afghanistan/Iraq.", marks: 1, markCode: "M" },
                { reasoning: "Strained alliances, new threats.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Policy transformation",
            },
          },
          {
            id: "ciealhis-u4-pcw-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define unipolarity, 9/11, War on Terror, Iraq War, Afghanistan War, multipolarity. (b) What was unipolarity? (c) What was 9/11? (d) What was War on Terror? (e) What was Iraq War? (f) What was Afghanistan War? (g) What is multipolarity? (h) Evaluate whether US hegemony is declining.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Post-Cold War", statement: "Analysis." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) US dominance.", marks: 1, markCode: "M" },
                { reasoning: "(c) 2001 attacks.", marks: 1, markCode: "M" },
                { reasoning: "(d) US terrorism response.", marks: 1, markCode: "M" },
                { reasoning: "(e) 2003 invasion.", marks: 1, markCode: "M" },
                { reasoning: "(f) 2001 intervention.", marks: 1, markCode: "M" },
                { reasoning: "(g) Multiple powers.", marks: 1, markCode: "M" },
                { reasoning: "(h) China/Russia rising — multipolar emerging.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Post-Cold War analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u4-pcw-notes", title: "Post-Cold War — notes",
      summary: "US unipolarity→9/11→War on Terror→multipolar emergence.",
      sections: [
        { heading: "Key idea", body: "Post-Cold War world order shifted from bipolar to unipolar to emerging multipolar." },
        { heading: "9/11", body: "Transformed US foreign policy and global security landscape." },
      ],
    },
  },
  {
    file: "lesson-4-4.ts", exportName: "lesson644",
    lesson: {
      id: "ciealhis-u4-lesson-4-4", code: "4-4",
      title: "Historical Enquiry and Synthesis",
      goal: "I CAN conduct historical enquiries and synthesise multiple perspectives.",
      standards: ["Cambridge A Level History 9489", "Paper 3: enquiry"],
      vocabulary: [
        { term: "Historical enquiry", definition: "Investigation of historical question." },
        { term: "Synthesis", definition: "Combining multiple perspectives." },
        { term: "Evaluation", definition: "Judging quality of arguments." },
        { term: "Context", definition: "Historical background." },
        { term: "Nuance", definition: "Subtle complexity." },
        { term: "Counterfactual", definition: "What might have happened." },
      ],
      concept: {
        id: "ciealhis-u4-s4-enq", title: "Historical enquiry",
        skill: "Conduct enquiries and synthesise perspectives.",
        sections: [
          { heading: "Enquiry process", body: "Formulate question → gather evidence → analyse → construct argument → evaluate. Consider multiple interpretations." },
          { heading: "Synthesis", body: "Combine different perspectives to create nuanced understanding. Acknowledge complexity, contradictions, unintended consequences." },
        ],
        keyFormulas: [
          { name: "Enquiry", statement: "question→evidence→argument" },
          { name: "Synthesis", statement: "multiple perspectives" },
        ],
        workedExample: {
          problem: "Enquiry: 'Was the Cold War inevitable?' Synthesize perspectives.",
          solution: "Structural factors (ideology, power vacuum) made likely. But contingency (leadership decisions, accidents) could have prevented. Complex, not deterministic.",
        },
        questions: [
          {
            id: "ciealhis-u4-enq-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is historical enquiry?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Investigation of historical question" }, { id: "b", text: "A type of source" }, { id: "c", text: "A map" }, { id: "d", text: "A statistical method" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Enquiry", statement: "Investigation." }],
              steps: [{ reasoning: "Enquiry = historical investigation.", marks: 1, markCode: "M" }],
              finalAnswer: "Historical investigation",
            },
          },
          {
            id: "ciealhis-u4-enq-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is synthesis in historical writing?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Synthesis", statement: "Combining." }],
              steps: [
                { reasoning: "Combining multiple perspectives.", marks: 1, markCode: "M" },
                { reasoning: "Creates nuanced understanding.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Multiple perspectives",
            },
          },
          {
            id: "ciealhis-u4-enq-q3", difficulty: "core", totalMarks: 3,
            stem: "How do you conduct a historical enquiry?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Enquiry", statement: "Process." }],
              steps: [
                { reasoning: "Question → evidence → argument → evaluation.", marks: 1, markCode: "M" },
                { reasoning: "Consider multiple interpretations.", marks: 1, markCode: "M" },
                { reasoning: "Acknowledge complexity.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Question→evidence→argument",
            },
          },
          {
            id: "ciealhis-u4-enq-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define enquiry, synthesis, evaluation, context, nuance, counterfactual. (b) What is enquiry? (c) What is synthesis? (d) How conduct enquiry? (e) What is counterfactual? (f) What is nuance? (g) How synthesize perspectives? (h) Conduct enquiry: 'Was the Cold War inevitable?'",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Enquiry", statement: "Synthesis." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Investigation.", marks: 1, markCode: "M" },
                { reasoning: "(c) Combining perspectives.", marks: 1, markCode: "M" },
                { reasoning: "(d) Question→evidence→argument.", marks: 1, markCode: "M" },
                { reasoning: "(e) What might have happened.", marks: 1, markCode: "M" },
                { reasoning: "(f) Subtle complexity.", marks: 1, markCode: "M" },
                { reasoning: "(g) Balance multiple viewpoints.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid enquiry with synthesis.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Historical enquiry synthesis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u4-enq-notes", title: "Enquiry — notes",
      summary: "Enquiry=question→evidence→argument. Synthesis combines perspectives.",
      sections: [
        { heading: "Key idea", body: "Good historical enquiries balance evidence, analysis, evaluation." },
        { heading: "Nuance", body: "Avoid simplistic answers — acknowledge complexity." },
      ],
    },
  },
];
