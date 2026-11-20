import type { Lesson } from "../../../types.ts";

export const lesson210: Lesson = {
  id: "cipg-u2-lesson-2-10",
  code: "2-10",
  title: "Stage 6 — Synthesising Research into Action",
  goal: "I CAN combine research, analysis, evaluation and communication into a complete project with real-world action.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 6: all strands", "Cambridge Primary Global Perspectives 0838 strands: Research, Analysis, Evaluation, Reflection, Collaboration, Communication"],
  stage: 6,
  vocabulary: [
    { term: "Synthesis", definition: "Combining research, analysis and evaluation into one coherent whole." },
    { term: "Outcome", definition: "The result or impact of your project." },
    { term: "Deliverable", definition: "The final product — presentation, poster, report." },
    { term: "Impact assessment", definition: "Measuring what difference your project made." },
    { term: "Sustainability", definition: "Whether the change continues after the project ends." },
    { term: "Legacy", definition: "The lasting effect your project leaves behind." },
  ],
  concepts: [
    {
      id: "cipg-u2-s6-synth",
      title: "Synthesising into action",
      skill: "Integrate all six skills into a complete project with measurable outcomes at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "The full cycle",
            body: "Stage 6 projects use all six strands: research an issue → analyse perspectives and causes → evaluate solutions → reflect on your role → collaborate with others → communicate findings and take action.",
          },
          {
            heading: "Measuring impact",
            body: "Ask: What changed because of your project? Did behaviour change? Was the solution sustainable? Document outcomes — before/after data, testimonials, photos. A project isn't complete until you've assessed its real-world impact.",
          },
        ],
        keyFormulas: [
          { name: "Synthesis", statement: "research+analysis+evaluation+reflection+collaboration+communication" },
          { name: "Impact", statement: "measurable change from your project" },
        ],
        workedExample: {
          problem: "You ran 'Meat-Free Monday' at school for a month. How do you assess impact?",
          solution: "Compare waste data before/after, survey student attitudes, count participation, interview canteen staff. Document findings and suggest continuation.",
        },
      },
      questions: [
        {
          id: "cipg-u2-sy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does synthesis mean in Global Perspectives?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combining all skills into a coherent whole"
                    },
                    {
                              "id": "b",
                              "text": "A type of music"
                    },
                    {
                              "id": "c",
                              "text": "A computer program"
                    },
                    {
                              "id": "d",
                              "text": "A school subject"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Synthesis",
                              "statement": "Integrating all strands."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Synthesis = combining research through action.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Combining all skills"
},
        },
        {
          id: "cipg-u2-sy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways to measure a project's impact.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Impact",
                              "statement": "Measurable change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. before/after data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. surveys, participation counts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. data comparison + surveys"
},
        },
        {
          id: "cipg-u2-sy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is sustainability important for a project's impact? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sustainability",
                              "statement": "Long-term change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Temporary change fades; sustainable continues.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. habit vs one-off event.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Design for continuation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Long-term vs temporary change"
},
        },
        {
          id: "cipg-u2-sy-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define synthesis, outcome, deliverable, impact assessment, sustainability, legacy. (b) Describe the full Global Perspectives project cycle. (c) Design a project on 'reducing school waste'. (d) How will you measure success? (e) What makes it sustainable? (f) What legacy could it leave? (g) How do all six strands appear in your project? (h) Evaluate your project's likely impact.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Project synthesis",
                              "statement": "Full cycle, impact, sustainability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Research→analyse→evaluate→reflect→collaborate→communicate→act.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Valid comprehensive project design.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Valid measurement method.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Continuation plan/habit formation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid legacy description.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) All six strands identified in project.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Realistic impact evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Complete project cycle with impact assessment."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u2-sy-notes",
      title: "Synthesising — notes",
      summary: "Combine all six strands into a complete project. Measure impact; ensure sustainability.",
      sections: [
        { heading: "Key idea", body: "A project isn't done until impact is measured and change is sustainable." },
        { heading: "Cycle", body: "Research → analyse → evaluate → reflect → collaborate → communicate → act." },
      ],
    },
  ],
};
