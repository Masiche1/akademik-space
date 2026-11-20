import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "cilgp-u2-lesson-2-5",
  code: "2-5",
  title: "Project Synthesis: Full Global Perspectives Challenge",
  goal: "I CAN complete a full Global Perspectives project integrating all six skills.",
  standards: ["Cambridge Lower Secondary Global Perspectives 1129 strands: all six skills", "Cambridge Global Perspectives: integrated project"],
  stage: 9,
  vocabulary: [
    { term: "Integrated project", definition: "Work combining all six GP skills." },
    { term: "Challenge", definition: "Cambridge's thematic investigation task." },
    { term: "Synthesis", definition: "Combining findings into coherent whole." },
    { term: "Recommendation", definition: "Suggested action based on findings." },
    { term: "Limitations", definition: "Acknowledged weaknesses in research/methods." },
    { term: "Reflection", definition: "Learning gained from the process." },
  ],
  concepts: [
    {
      id: "cilgp-u2-s5-synth",
      title: "Integrated project work",
      skill: "Synthesize research, analysis, evaluation, reflection, collaboration and communication at Stage 9.",
      lesson: {
        sections: [
          {
            heading: "The full cycle",
            body: "Research the issue → analyse evidence and perspectives → evaluate solutions → collaborate on presentation → communicate findings → reflect on learning and plan action. Each skill builds on the others.",
          },
          {
            heading: "Quality markers",
            body: "Strong projects: clear research question, reliable sources, balanced analysis, evidence-based evaluation, clear communication, honest reflection on limitations.",
          },
        ],
        keyFormulas: [
          { name: "GP cycle", statement: "research→analyse→evaluate→collaborate→communicate→reflect" },
          { name: "Quality", statement: "clear question + reliable sources + balanced analysis" },
        ],
        workedExample: {
          problem: "Design a project on 'Should cities ban cars from centres?'",
          solution: "Research: air quality data, traffic studies. Analyse: residents, businesses, commuters perspectives. Evaluate: congestion charges vs bans. Communicate: presentation + report. Reflect: what did you learn?",
        },
      },
      questions: [
        {
          id: "cilgp-u2-sy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the six Global Perspectives skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Research, analysis, evaluation, reflection, collaboration, communication"
                    },
                    {
                              "id": "b",
                              "text": "Reading, writing, maths, science, art, PE"
                    },
                    {
                              "id": "c",
                              "text": "Plan, do, check, act"
                    },
                    {
                              "id": "d",
                              "text": "Ask, answer, explain, evaluate"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "GP skills",
                              "statement": "Six core skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The six GP strands.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Research/analysis/evaluation/reflection/collaboration/communication"
},
        },
        {
          id: "cilgp-u2-sy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'synthesis' mean in project work?",
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
          id: "cilgp-u2-sy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a strong Global Perspectives project? List three quality markers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Project quality",
                              "statement": "Clear question, reliable sources, balance."
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
          id: "cilgp-u2-sy-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Name all six GP skills. (b) Describe the full GP project cycle. (c) What is a Challenge? (d) How do the skills integrate? (e) What is synthesis vs summary? (f) What are quality markers for a strong project? (g) Why acknowledge limitations? (h) Design a complete project plan for 'Should homework be abolished?'.",
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
                              "reasoning": "(a) All six skills named.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Full cycle described.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Thematic investigation task.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Each builds on previous.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Synthesis=integrated insights vs summary=condensed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Three quality markers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Shows rigour, honesty.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid complete project plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Integrated Global Perspectives project skills."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u2-sy-notes",
      title: "Project synthesis — notes",
      summary: "All six skills integrate in a full project: research→analyse→evaluate→collaborate→communicate→reflect.",
      sections: [
        { heading: "Key idea", body: "GP is about applying skills to real issues, not just learning theory." },
        { heading: "Quality", body: "Clear question + reliable sources + balanced analysis + honest reflection." },
      ],
    },
  ],
};
