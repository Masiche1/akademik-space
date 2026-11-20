import type { Lesson } from "../../../types.ts";

export const lesson115: Lesson = {
  id: "ciegp-u2-lesson-2-5",
  code: "2-5",
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
  concepts: [
    {
      id: "ciegp-u2-s5-synth",
      title: "Project synthesis",
      skill: "Integrate all GP skills in a complete project at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "The full cycle",
            body: "Select issue → formulate question → research → analyse evidence/perspectives → evaluate solutions → develop recommendations → reflect → present findings. Each skill builds on others.",
          },
          {
            heading: "Quality markers",
            body: "Strong projects: clear research question, reliable corroborated sources, balanced analysis, evidence-based evaluation, clear recommendations, honest reflection on limitations.",
          },
        ],
        keyFormulas: [
          { name: "GP cycle", statement: "select→research→analyse→evaluate→recommend→reflect→present" },
          { name: "Quality", statement: "clear question + reliable sources + balanced analysis" },
        ],
        workedExample: {
          problem: "Design a complete GP project on 'Should cities ban cars from centres?'",
          solution: "Research: air quality data, traffic studies, resident surveys. Analyse: residents, businesses, commuters perspectives. Evaluate: congestion charges vs bans vs public transport. Recommend: combined approach. Reflect on learning.",
        },
      },
      questions: [
        {
          id: "ciegp-u2-sy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the main stages of a GP research project?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Select→research→analyse→evaluate→recommend→reflect→present"
                    },
                    {
                              "id": "b",
                              "text": "Read→write→test→submit"
                    },
                    {
                              "id": "c",
                              "text": "Plan→do→check→act"
                    },
                    {
                              "id": "d",
                              "text": "Ask→answer→explain→evaluate"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "GP project stages",
                              "statement": "Full research cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The complete GP research process.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Full research cycle"
},
        },
        {
          id: "ciegp-u2-sy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does synthesis mean in project work?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Synthesis",
                              "statement": "Combining into whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combining findings into coherent conclusion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More than summarising — integrates insights.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Integrating findings into whole"
},
        },
        {
          id: "ciegp-u2-sy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a strong GP project? List three quality markers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Project quality",
                              "statement": "Question, sources, balance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clear research question.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reliable/corroborated sources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balanced analysis + honest reflection.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Question + sources + balance"
},
        },
        {
          id: "ciegp-u2-sy-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Describe the full GP project cycle. (b) What is synthesis vs summary? (c) What are quality markers? (d) Why acknowledge limitations? (e) How do skills integrate? (f) What is a good research question? (g) How do you ensure source reliability? (h) Design a complete project plan for 'Should homework be abolished?'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Project synthesis",
                              "statement": "Full GP integration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Full cycle described.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Synthesis=integrated vs summary=condensed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Three quality markers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Shows rigour, honesty.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Each builds on previous.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Specific, arguable, investigable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Credentials, dates, corroboration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid complete project plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Integrated GP project skills."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u2-sy-notes",
      title: "Project synthesis — notes",
      summary: "Full cycle: select→research→analyse→evaluate→recommend→reflect→present. Quality = clear question + reliable sources + balance.",
      sections: [
        { heading: "Key idea", body: "GP is about applying skills to real issues, not just learning theory." },
        { heading: "Quality", body: "Clear question + reliable sources + balanced analysis + honest reflection." },
      ],
    },
  ],
};
