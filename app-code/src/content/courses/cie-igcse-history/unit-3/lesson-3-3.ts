import type { Lesson } from "../../../types.ts";

export const lesson353: Lesson = {
  id: "cieihis-u3-lesson-3-3",
  code: "3-3",
  title: "Historical Skills: Interpretation and Enquiry",
  goal: "I CAN construct historical arguments and evaluate interpretations.",
  standards: ["Cambridge IGCSE History 0470", "Paper 3: interpretation"],

  vocabulary: [
    {
      term: "Historical enquiry",
      definition: "Investigation of historical questions.",
    },
    { term: "Interpretation", definition: "Historical viewpoint/analysis." },
    {
      term: "Argument",
      definition: "Reasoned position supported by evidence.",
    },
    { term: "Evidence", definition: "Facts supporting argument." },
    { term: "Historiography", definition: "Study of how history is written." },
    {
      term: "Significance",
      definition: "Historical importance of events/figures.",
    },
  ],
  concepts: [
    {
      id: "cieihis-u3-s3-interp",
      title: "Interpretation and enquiry",
      skill: "Construct and evaluate historical arguments.",
      lesson: {
        sections: [
          {
            heading: "Historical enquiry",
            body: "Formulate questions, gather evidence, analyse sources, construct arguments, evaluate interpretations. History is interpretation, not just facts.",
          },
          {
            heading: "Argument construction",
            body: "Thesis statement → evidence → analysis → conclusion. Consider multiple perspectives. Acknowledge limitations. Evaluate significance.",
          },
        ],
        keyFormulas: [
          { name: "Enquiry", statement: "question→evidence→argument" },
          { name: "Interpretation", statement: "historical viewpoint" },
        ],
        workedExample: {
          problem: "Was the Cold War inevitable? Construct an argument.",
          solution:
            "Thesis: partly inevitable due to ideological differences. Evidence: post-WWII power vacuum, incompatible systems. Counter: could have been managed differently. Conclusion: structural factors made conflict likely but not certain.",
        },
      },
      questions: [
        {
          id: "cieihis-u3-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is historical enquiry?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of source",
              },
              {
                id: "b",
                text: "A textbook",
              },
              {
                id: "c",
                text: "A map",
              },
              {
                id: "d",
                text: "Investigation of historical questions",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enquiry",
                statement: "Historical investigation.",
              },
            ],
            steps: [
              {
                reasoning: "Enquiry = investigating historical questions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Historical investigation",
          },
        },
        {
          id: "cieihis-u3-in-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an interpretation in history?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interpretation",
                statement: "Historical viewpoint.",
              },
            ],
            steps: [
              {
                reasoning: "Historical viewpoint/analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different historians interpret events differently.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Historical viewpoint",
          },
        },
        {
          id: "cieihis-u3-in-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do you construct a historical argument?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument construction",
                statement: "Evidence-based reasoning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thesis statement → evidence → analysis → conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Consider multiple perspectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Acknowledge limitations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Thesis→evidence→conclusion",
          },
        },
        {
          id: "cieihs-u3-in-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define historical enquiry, interpretation, argument, evidence, historiography, significance. (b) What is historical enquiry? (c) What is interpretation? (d) How construct argument? (e) What is historiography? (f) What is significance? (g) Why do historians disagree? (h) Construct an argument: 'The Cold War was inevitable.'",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Interpretation",
                statement: "Argument, enquiry.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Historical investigation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Historical viewpoint.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Thesis→evidence→conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Study of historical writing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Historical importance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Different evidence/perspectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid argument with evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Historical interpretation skills.",
          },
        },
        {
          id: "cieihis-u3-in-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is historiography?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The collection of primary documents",
              },
              {
                id: "b",
                text: "A method of carbon-dating artefacts",
              },
              {
                id: "c",
                text: "A type of historical map",
              },
              {
                id: "d",
                text: "The study of how history is written and interpreted",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Historiography",
                statement: "Study of historical writing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Historiography is the study of how history is written, including different interpretations of events.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** The study of how history is written and interpreted",
          },
        },
        {
          id: "cieihis-u3-in-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main elements does a well-structured historical argument combine: thesis, evidence, analysis and conclusion?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument structure",
                statement: "Four elements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A well-structured argument combines thesis, evidence, analysis and conclusion — four elements.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cieihis-u3-in-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is historical significance?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Significance",
                statement: "Historical importance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The historical importance of events, figures or developments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Assessed through impact, scale, duration and legacy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Historical importance of events",
          },
        },
        {
          id: "cieihis-u3-in-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the first step in constructing a historical argument?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Writing the conclusion",
              },
              {
                id: "b",
                text: "Counting the number of facts",
              },
              {
                id: "c",
                text: "Listing all available sources",
              },
              {
                id: "d",
                text: "Formulating a thesis statement",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument construction",
                statement: "Thesis first.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A historical argument begins with a thesis statement — the central claim to be argued.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Formulating a thesis statement",
          },
        },
        {
          id: "cieihis-u3-in-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) How many main enquiry stages are there in 'question → evidence → argument'? (b) How many parts make up 'thesis → evidence → analysis → conclusion'?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
              },
              {
                label: "b",
                answer: 4,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Enquiry structure",
                statement: "Stages and parts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The enquiry process has three main stages: question, evidence and argument.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "A structured response has four parts: thesis, evidence, analysis and conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 3, b) 4",
          },
        },
        {
          id: "cieihis-u3-in-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do historians often disagree about the interpretation of historical events?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Because all sources are always false",
              },
              {
                id: "b",
                text: "Because historians cannot read",
              },
              {
                id: "c",
                text: "Because history is not a real subject",
              },
              {
                id: "d",
                text: "Because they use different evidence, perspectives and values",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Historiographical debate",
                statement: "Different interpretations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Historians disagree because they weigh evidence, perspectives and values differently when interpreting events.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** Because they use different evidence, perspectives and values",
          },
        },
        {
          id: "cieihis-u3-in-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why acknowledging limitations strengthens a historical argument.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument limitations",
                statement: "Nuanced reasoning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Acknowledging counter-arguments and evidence gaps shows balanced, critical thinking rather than one-sided assertion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It demonstrates awareness that historical evidence is incomplete and interpretations are contestable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weighing limitations makes the conclusion more convincing and historically credible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Balance and nuance strengthen arguments",
          },
        },
        {
          id: "cieihis-u3-in-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is a thesis statement in a historical essay?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A summary of all the evidence",
              },
              {
                id: "b",
                text: "A list of sources used",
              },
              {
                id: "c",
                text: "The final sentence of the essay",
              },
              {
                id: "d",
                text: "The central argument or claim the essay will defend",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thesis statement",
                statement: "Central claim.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A thesis statement is the central argument or claim that the essay sets out to defend with evidence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** The central argument or claim the essay will defend",
          },
        },
        {
          id: "cieihis-u3-in-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) How many minimum perspectives should a balanced historical argument consider? (b) How many minimum sources should be used when corroborating a claim?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 2,
              },
              {
                label: "b",
                answer: 2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Balanced argument",
                statement: "Multiple views, sources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A balanced argument should consider at least two perspectives.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Corroboration requires comparing at least two sources.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 2, b) 2",
          },
        },
        {
          id: "cieihis-u3-in-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess the view that history is simply a collection of facts.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Assessment",
                statement: "Balanced judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thesis: history is more than facts — it is interpretation built on evidence and argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Supporting evidence: historians select, weigh and interpret evidence; different historians produce different accounts of the same facts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-argument: facts are the foundation — without verifiable evidence, interpretations have no basis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasoned judgement: history rests on facts but its meaning is constructed through interpretation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "History is interpretation built on facts",
          },
        },
        {
          id: "cieihis-u3-in-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is evidence in historical enquiry?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The conclusion of an essay",
              },
              {
                id: "b",
                text: "Facts and sources that support an argument",
              },
              {
                id: "c",
                text: "A type of essay structure",
              },
              {
                id: "d",
                text: "The historian's personal opinion",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evidence",
                statement: "Argument support.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence is the facts, sources and data used to support a historical argument.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Facts and sources that support an argument",
          },
        },
        {
          id: "cieihis-u3-in-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how a historian might evaluate competing interpretations of the same historical event.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluating interpretations",
                statement: "Comparative judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Compare the evidence each interpretation relies on and assess its reliability and relevance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Consider the historians' perspectives, purposes and the historiographical context of each account.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weigh which interpretation best fits the evidence, while acknowledging that reasonable disagreement may remain.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Weigh evidence, perspective and context",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u3-in-notes",
      title: "Interpretation — notes",
      summary:
        "History=interpretation not just facts. Enquiry: question→evidence→argument. Historians disagree.",
      sections: [
        {
          heading: "Key idea",
          body: "Good historical arguments consider evidence, perspectives, limitations.",
        },
        {
          heading: "Significance",
          body: "Evaluate historical importance — impact, scale, lasting effects.",
        },
      ],
    },
  ],
};
