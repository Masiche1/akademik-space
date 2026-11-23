import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edxph-u4-lesson-4-2",
  code: "4-2",
  title: "Historical Enquiry Skills",
  goal: "I CAN conduct historical enquiries using sources and evidence.",
  standards: ["Y5-Y6 History", "Enquiry skills"],
  vocabulary: [
    {
      term: "Archive",
      definition: "A collection of historical documents and records.",
    },
    {
      term: "Museum",
      definition: "A building where historical objects are displayed.",
    },
    {
      term: "Corroboration",
      definition: "Checking if different sources agree.",
    },
    { term: "Bias", definition: "When a source favours one view over others." },
  ],
  concepts: [
    {
      id: "edxph-u4-archives",
      title: "Archives and Museums",
      skill: "Describe how archives and museums preserve history.",
      lesson: {
        sections: [
          {
            heading: "Archives",
            body: "Archives store historical documents — letters, diaries, official records, maps, photographs. The National Archives (UK) holds government records; local archives hold parish records, wills, newspapers. Archives let historians study original sources — the raw material of history.",
          },
          {
            heading: "Museums",
            body: "Museums display artefacts — objects made or used in the past. Objects tell stories: a Roman coin shows trade; a Victorian doll shows childhood; a WWII helmet shows war. Museums also preserve buildings — historic houses, castles, industrial sites. They make history accessible to everyone.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "What might a museum display about the Industrial Revolution?",
          solution:
            "Factory machines, workers' tools, photographs, domestic items.",
        },
      },
      questions: [
        {
          id: "edxph-u4-arch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an archive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of museum" },
              { id: "b", text: "A collection of historical documents" },
              { id: "c", text: "A library of books" },
              { id: "d", text: "A building" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Archive",
                statement: "Historical documents.",
              },
            ],
            steps: [
              { reasoning: "Archive = documents.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Documents",
            commonErrors: ["Confusing with museum."],
          },
        },
        {
          id: "edxph-u4-arch-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a museum display?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only books" },
              { id: "b", text: "Historical objects and artefacts" },
              { id: "c", text: "Only paintings" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Museum",
                statement: "Artefacts displayed.",
              },
            ],
            steps: [
              { reasoning: "Museum = artefacts.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Artefacts",
            commonErrors: ["Too narrow."],
          },
        },
        {
          id: "edxph-u4-arch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of items found in archives and two in museums.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Archives vs museums",
                statement: "Documents vs objects.",
              },
            ],
            steps: [
              {
                reasoning: "Archives — letters, records, maps.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Museums — artefacts, buildings, objects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both correctly identified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Documents vs artefacts",
            commonErrors: ["Reversed."],
          },
        },
        {
          id: "edxph-u4-arch-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why museums and archives are important for understanding history.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Preservation",
                statement: "Keep evidence accessible.",
              },
            ],
            steps: [
              {
                reasoning: "They preserve original evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They let people see history directly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They support historical research and education.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Preserve+accessible+research",
            commonErrors: ["No real reasons."],
          },
        },
      ],
    },
    {
      id: "edxph-u4-evidence",
      title: "Using Evidence",
      skill: "Evaluate sources and build historical arguments.",
      lesson: {
        sections: [
          {
            heading: "Evaluating sources",
            body: "When using sources: check provenance (where/when from), purpose (why made), bias (what view favoured), and reliability (can it be trusted?). A source might be accurate but biased — e.g., a government report praising itself. Cross-check with other sources (corroboration).",
          },
          {
            heading: "Building arguments",
            body: "A historical argument uses evidence to support a claim: 'The Normans changed England because...' then evidence: castles built, French words added, Domesday Book compiled. Strong arguments use multiple sources, acknowledge limitations, and consider alternative explanations.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A king's official record says he was a great ruler. Is this reliable?",
          solution:
            "Biased — official records often praise rulers. Check other sources.",
        },
      },
      questions: [
        {
          id: "edxph-u4-evd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is bias in a historical source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When a source is old" },
              { id: "b", text: "When a source favours one view" },
              { id: "c", text: "When a source is damaged" },
              { id: "d", text: "When a source is written" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bias",
                statement: "Favours one view.",
              },
            ],
            steps: [
              { reasoning: "Bias = one-sided.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** One-sided",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edxph-u4-evd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does corroboration mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Destroying evidence" },
              { id: "b", text: "Checking if sources agree" },
              { id: "c", text: "Writing history" },
              { id: "d", text: "Finding artefacts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Corroboration",
                statement: "Sources agree.",
              },
            ],
            steps: [
              {
                reasoning: "Corroboration = agreement.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Sources agree",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edxph-u4-evd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two things to check when evaluating a historical source.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Source evaluation",
                statement: "Bias, purpose, reliability.",
              },
            ],
            steps: [
              {
                reasoning: "Check 1 — who made it and why.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check 2 — is it reliable/accurate?",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both valid checks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. bias+reliability",
            commonErrors: ["Invalid checks."],
          },
        },
        {
          id: "edxph-u4-evd-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Build a historical argument: 'The printing press changed European society.' Support it with evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Historical argument",
                statement: "Claim+evidence+reasoning.",
              },
            ],
            steps: [
              { reasoning: "Claim clearly stated.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "Evidence — books became cheap, literacy spread, ideas circulated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reasoning — linked to Reformation/Renaissance.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Claim+evidence+reasoning",
            commonErrors: ["No evidence."],
          },
        },
      ],
    },
    {
      id: "edxph-u4-enquiry",
      title: "Conducting an Enquiry",
      skill: "Plan and carry out a historical enquiry.",
      lesson: {
        sections: [
          {
            heading: "Planning an enquiry",
            body: "A good enquiry has: a question ('Why did William win at Hastings?'), a hypothesis (possible answer to test), sources to examine, a method (what to look for), and a conclusion to reach. The enquiry should be fair — consider evidence for and against your hypothesis.",
          },
          {
            heading: "Writing it up",
            body: "Present enquiries clearly: state the question, describe sources used, present evidence, analyse it, draw conclusions, and evaluate — how confident are you? What are the limitations? A good enquiry acknowledges uncertainty and alternative interpretations.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Plan an enquiry: 'Was the Black Death the main cause of social change in medieval England?'",
          solution:
            "Question → sources (records, chronicles) → evidence of labour shortage → conclusion + evaluation.",
        },
      },
      questions: [
        {
          id: "edxph-u4-enq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a hypothesis in a historical enquiry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A proven fact" },
              { id: "b", text: "A possible answer to test" },
              { id: "c", text: "A type of source" },
              { id: "d", text: "A question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypothesis",
                statement: "Possible answer to test.",
              },
            ],
            steps: [
              {
                reasoning: "Hypothesis = testable answer.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Testable answer",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edxph-u4-enq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should a historical enquiry include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only opinions" },
              { id: "b", text: "Question, sources, evidence, conclusion" },
              { id: "c", text: "Only dates" },
              { id: "d", text: "Maps" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Enquiry structure",
                statement: "Question→sources→evidence→conclusion.",
              },
            ],
            steps: [
              { reasoning: "Full structure needed.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Full structure",
            commonErrors: ["Incomplete."],
          },
        },
        {
          id: "edxph-u4-enq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the stages of a historical enquiry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Enquiry stages",
                statement:
                  "Question→hypothesis→sources→evidence→conclusion→evaluation.",
              },
            ],
            steps: [
              { reasoning: "Question + hypothesis.", marks: 1, markCode: "M" },
              { reasoning: "Sources + evidence.", marks: 1, markCode: "M" },
              {
                reasoning: "Conclusion + evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Question→hypothesis→sources→evidence→conclusion→evaluation",
            commonErrors: ["Missing stages."],
          },
        },
        {
          id: "edxph-u4-enq-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a historical enquiry about any topic you have studied. Include question, sources and method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Enquiry planning",
                statement: "Structured investigation.",
              },
            ],
            steps: [
              {
                reasoning: "Clear historical question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sources identified — primary/secondary.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Method + expected conclusion described.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Question+sources+method",
            commonErrors: ["Incomplete plan."],
          },
        },
      ],
    },
  ],
};
