import type { Lesson } from "../../../types.ts";

export const lesson364: Lesson = {
  id: "cieihis-u4-lesson-4-4",
  code: "4-4",
  title: "Historical Skills: Extended Essay and Research",
  goal: "I CAN conduct historical research and write extended responses.",
  standards: ["Cambridge IGCSE History 0470", "Paper 3: extended response"],

  vocabulary: [
    {
      term: "Research question",
      definition: "Question guiding historical investigation.",
    },
    {
      term: "Historiography",
      definition: "Different historical interpretations.",
    },
    {
      term: "Synthesis",
      definition: "Combining multiple sources/perspectives.",
    },
    {
      term: "Evaluation",
      definition: "Judging quality/validity of arguments.",
    },
    { term: "Context", definition: "Historical background/setting." },
    { term: "Nuance", definition: "Subtle complexity in analysis." },
  ],
  concepts: [
    {
      id: "cieihis-u4-s4-research",
      title: "Research and extended response",
      skill: "Conduct historical research and write complex answers.",
      lesson: {
        sections: [
          {
            heading: "Research process",
            body: "Formulate question → gather sources → analyse evidence → construct argument → evaluate. Use primary and secondary sources. Consider historiography.",
          },
          {
            heading: "Extended responses",
            body: "Longer answers require: clear structure, multiple points, evidence integration, analysis depth, evaluation. Balance different perspectives.",
          },
        ],
        keyFormulas: [
          { name: "Research", statement: "question→sources→argument" },
          { name: "Synthesis", statement: "combine perspectives" },
        ],
        workedExample: {
          problem:
            "Research question: 'Was decolonisation a success?' Plan your approach.",
          solution:
            "Gather evidence on independence movements, post-colonial development, neocolonialism. Compare successes (political independence) vs failures (economic dependence). Synthesize multiple perspectives.",
        },
      },
      questions: [
        {
          id: "cieihs-u4-rs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a research question in history?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A statistical method",
              },
              {
                id: "b",
                text: "A map",
              },
              {
                id: "c",
                text: "A type of source",
              },
              {
                id: "d",
                text: "Question guiding historical investigation",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Research question",
                statement: "Investigation guide.",
              },
            ],
            steps: [
              {
                reasoning: "Research question = investigation guide.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Investigation guide",
          },
        },
        {
          id: "cieihs-u4-rs-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is historiography?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Historiography",
                statement: "Historical interpretations.",
              },
            ],
            steps: [
              {
                reasoning: "Different historical interpretations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Study of how history is written.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Historical interpretations",
          },
        },
        {
          id: "cieihs-u4-rs-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is synthesis in historical writing?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "Combining perspectives.",
              },
            ],
            steps: [
              {
                reasoning: "Combining multiple sources/perspectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates comprehensive analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shows nuanced understanding.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Combining perspectives",
          },
        },
        {
          id: "cieihs-u4-rs-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define research question, historiography, synthesis, evaluation, context, nuance. (b) What is research question? (c) What is historiography? (d) What is synthesis? (e) What is evaluation? (f) How conduct historical research? (g) What makes good extended response? (h) Plan research for 'Was the Cold War inevitable?'",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Research",
                statement: "Extended response.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Investigation guide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Historical interpretations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Combining perspectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Judging quality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Question→sources→argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Structure, evidence, analysis, evaluation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid research plan.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Historical research skills.",
          },
        },
        {
          id: "cieihs-u4-rs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is synthesis in historical writing?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Copying sources word for word",
              },
              {
                id: "b",
                text: "Combining multiple sources and perspectives into one argument",
              },
              {
                id: "c",
                text: "A type of primary source",
              },
              {
                id: "d",
                text: "The final conclusion only",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "Combining perspectives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Synthesis is combining evidence and perspectives from multiple sources into a coherent argument.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** Combining multiple sources and perspectives into one argument",
          },
        },
        {
          id: "cieihs-u4-rs-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many stages are there in the historical research process: formulate question → gather sources → analyse evidence → construct argument → evaluate?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research process",
                statement: "Five stages.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The research process has five stages: question, sources, analysis, argument and evaluation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cieihs-u4-rs-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'context' in historical writing?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Context",
                statement: "Historical background.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The historical background or setting in which events took place.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Providing context helps explain why events happened as they did.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Historical background and setting",
          },
        },
        {
          id: "cieihs-u4-rs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which best describes what makes a good extended historical response?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Clear structure, integrated evidence, analysis and evaluation",
              },
              {
                id: "b",
                text: "A long list of facts with no argument",
              },
              {
                id: "c",
                text: "Only one source repeated many times",
              },
              {
                id: "d",
                text: "A summary of the textbook",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Extended response",
                statement: "Structure and depth.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A good extended response combines clear structure, evidence integration, analytical depth and evaluation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** Clear structure, integrated evidence, analysis and evaluation",
          },
        },
        {
          id: "cieihs-u4-rs-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) How many source types — primary and secondary — should historical research ideally combine? (b) How many criteria — structure, evidence, analysis, evaluation — define a strong extended response?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 2,
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
                name: "Research quality",
                statement: "Sources and criteria.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Research should combine two source types: primary and secondary.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "A strong extended response is defined by four criteria: structure, evidence, analysis and evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 2, b) 4",
          },
        },
        {
          id: "cieihs-u4-rs-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'nuance' in historical analysis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Subtle complexity recognising multiple factors and perspectives",
              },
              {
                id: "b",
                text: "Simplicity and one-sided judgement",
              },
              {
                id: "c",
                text: "A type of source citation",
              },
              {
                id: "d",
                text: "A method of counting evidence",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nuance",
                statement: "Subtle complexity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nuance is the recognition of subtle complexity — multiple factors, perspectives and shades of judgement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** Subtle complexity recognising multiple factors and perspectives",
          },
        },
        {
          id: "cieihs-u4-rs-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Outline how you would plan research for the question: 'Was the Cold War inevitable?'",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research planning",
                statement: "Question to sources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Define the question and gather primary and secondary sources on post-WWII relations, ideology and superpower rivalry.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analyse evidence for structural causes (ideology, power vacuum) versus contingent factors (leadership decisions).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Construct a balanced argument weighing inevitability against the possibility of different outcomes, then evaluate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sources on causes; balance inevitability vs contingency",
          },
        },
        {
          id: "cieihs-u4-rs-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In historical writing, what does 'evaluation' mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Copying sources accurately",
              },
              {
                id: "b",
                text: "Listing all available facts",
              },
              {
                id: "c",
                text: "Judging the quality and validity of arguments and evidence",
              },
              {
                id: "d",
                text: "Writing the introduction",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation",
                statement: "Judging quality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evaluation is judging the quality, validity and strength of arguments and evidence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** Judging the quality and validity of arguments and evidence",
          },
        },
        {
          id: "cieihs-u4-rs-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) How many elements should a research plan identify — question, sources, argument and evaluation? (b) How many perspectives should a balanced historical essay weigh at minimum?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
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
                name: "Research planning",
                statement: "Elements and balance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A research plan identifies four elements: question, sources, argument and evaluation.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "A balanced essay should weigh at least two perspectives.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 4, b) 2",
          },
        },
        {
          id: "cieihs-u4-rs-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess the view that a good historical essay is simply a list of facts.",
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
                  "Thesis: a good essay is argument-driven — facts are the evidence, not the answer itself.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Supporting evidence: top responses show analysis, synthesis of perspectives and evaluation, not mere factual recall.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-argument: accurate facts are essential — an argument without evidence is worthless.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasoned judgement: facts underpin the essay, but structure, analysis and evaluation make it good.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Argument and analysis, not just facts",
          },
        },
        {
          id: "cieihs-u4-rs-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first stage of the historical research process?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Evaluating sources",
              },
              {
                id: "b",
                text: "Formulating a research question",
              },
              {
                id: "c",
                text: "Writing the conclusion",
              },
              {
                id: "d",
                text: "Listing all textbooks",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Research process",
                statement: "Question first.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Historical research begins by formulating a clear research question that guides the investigation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Formulating a research question",
          },
        },
        {
          id: "cieihs-u4-rs-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how synthesis improves an extended historical response.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis",
                statement: "Combining perspectives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Synthesis weaves evidence from multiple sources into a single coherent argument rather than listing separate points.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It shows nuanced understanding by balancing different perspectives and interpretations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Synthesised answers demonstrate deeper analysis and stronger evaluation, producing more convincing conclusions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Synthesis creates coherent, nuanced arguments",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u4-rs-notes",
      title: "Research — notes",
      summary:
        "Research: question→sources→argument. Synthesis combines perspectives. Extended responses need depth.",
      sections: [
        {
          heading: "Key idea",
          body: "Good historical research balances evidence, analysis, evaluation.",
        },
        {
          heading: "Nuance",
          body: "Avoid simplistic answers — acknowledge complexity and multiple perspectives.",
        },
      ],
    },
  ],
};
