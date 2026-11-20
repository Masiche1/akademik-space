import type { Lesson } from "../../../types.ts";

export const lesson641: Lesson = {
  id: "ciealhis-u4-lesson-4-1",
  code: "4-1",
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
  concepts: [
    {
      id: "ciealhis-u4-s1-res",
      title: "Research skills",
      skill: "Conduct research and write complex answers.",
      lesson: {
        sections: [
          {
            heading: "Research process",
            body: "Formulate question → gather sources → analyse evidence → construct argument → evaluate. Use primary and secondary sources. Consider historiography.",
          },
          {
            heading: "Extended responses",
            body: "Longer answers require: clear structure, multiple points, evidence integration, analysis depth, evaluation. Balance perspectives.",
          },
        ],
        keyFormulas: [
          { name: "Research", statement: "question→sources→argument" },
          { name: "Synthesis", statement: "combine perspectives" },
        ],
        workedExample: {
          problem: "Research question: 'Was decolonisation successful?' Plan approach.",
          solution: "Gather evidence on independence movements, post-colonial development, neocolonialism. Compare political success vs economic challenges. Synthesize perspectives.",
        },
      },
      questions: [
        {
          id: "ciealhis-u4-rs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a research question in history?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Question guiding historical investigation"
                    },
                    {
                              "id": "b",
                              "text": "A type of source"
                    },
                    {
                              "id": "c",
                              "text": "A map"
                    },
                    {
                              "id": "d",
                              "text": "A statistical method"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Research question",
                              "statement": "Investigation guide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Research question = investigation guide.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Investigation guide"
},
        },
        {
          id: "ciealhis-u4-rs-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is historiography?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Historiography",
                              "statement": "Interpretations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Different historical interpretations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Study of how history is written.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Historical interpretations"
},
        },
        {
          id: "ciealhis-u4-rs-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is synthesis in historical writing?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Synthesis",
                              "statement": "Combining."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combining multiple sources/perspectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Creates comprehensive analysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shows nuanced understanding.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Combining perspectives"
},
        },
        {
          id: "ciealhis-u4-rs-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define research question, historiography, synthesis, evaluation, context, nuance. (b) What is research question? (c) What is historiography? (d) What is synthesis? (e) What is evaluation? (f) How conduct research? (g) What makes good extended response? (h) Plan research for 'Was Cold War inevitable?'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Research",
                              "statement": "Extended response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Investigation guide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Interpretations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Combining perspectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Judging quality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Question→sources→argument.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Structure, evidence, analysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid research plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Historical research skills."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u4-rs-notes",
      title: "Research — notes",
      summary: "Research: question→sources→argument. Synthesis combines perspectives.",
      sections: [
        { heading: "Key idea", body: "Good historical research balances evidence, analysis, evaluation." },
        { heading: "Nuance", body: "Avoid simplistic answers — acknowledge complexity." },
      ],
    },
  ],
};
