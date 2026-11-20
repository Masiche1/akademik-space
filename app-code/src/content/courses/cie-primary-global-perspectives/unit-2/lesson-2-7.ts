import type { Lesson } from "../../../types.ts";

export const lesson27: Lesson = {
  id: "cipg-u2-lesson-2-7",
  code: "2-7",
  title: "Stage 5 — Deep Analysis of Global Issues",
  goal: "I CAN analyse a global issue from multiple angles — causes, effects, stakeholders and solutions.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 5: analysis", "Cambridge Primary Global Perspectives 0838 strand: Analysis"],
  stage: 5,
  vocabulary: [
    { term: "Stakeholder", definition: "A person or group affected by or involved in an issue." },
    { term: "Cause", definition: "What makes something happen." },
    { term: "Effect", definition: "What happens as a result." },
    { term: "Consequence", definition: "A result or outcome of an action." },
    { term: "Root cause", definition: "The deepest underlying reason for a problem." },
    { term: "Multi-perspective", definition: "Looking at an issue from several angles." },
  ],
  concepts: [
    {
      id: "cipg-u2-s5-analyse",
      title: "Deep issue analysis",
      skill: "Analyse causes, effects, stakeholders and solutions at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Multiple angles",
            body: "Deep analysis looks at an issue from many sides: What causes it? Who is affected (stakeholders)? What are the effects? What solutions exist? Climate change affects farmers, cities, animals — each sees it differently.",
          },
          {
            heading: "Root causes",
            body: "Surface causes (plastic in ocean) vs root causes (overproduction, poor waste management). Solutions that only treat symptoms fail; addressing root causes creates lasting change.",
          },
        ],
        keyFormulas: [
          { name: "Stakeholder", statement: "person/group affected by issue" },
          { name: "Root cause", statement: "deepest underlying reason" },
          { name: "Analysis", statement: "causes + effects + stakeholders + solutions" },
        ],
        workedExample: {
          problem: "Analyse 'food waste' — causes, effects, stakeholders, one solution.",
          solution: "Causes: overbuying, cosmetic standards. Effects: landfill, methane, hunger. Stakeholders: shoppers, farmers, charities. Solution: better portion planning + food donation.",
        },
      },
      questions: [
        {
          id: "cipg-u2-dan-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stakeholder?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A person or group affected by an issue"
                    },
                    {
                              "id": "b",
                              "text": "A company share"
                    },
                    {
                              "id": "c",
                              "text": "A type of chart"
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
                              "name": "Stakeholder",
                              "statement": "Affected party."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stakeholder = anyone impacted by/involved in issue.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Affected person/group"
},
        },
        {
          id: "cipg-u2-dan-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the four angles for analysing a global issue.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Analysis angles",
                              "statement": "Causes, effects, stakeholders, solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Causes and effects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Stakeholders and solutions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "causes+effects+stakeholders+solutions"
},
        },
        {
          id: "cipg-u2-dan-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between a cause and a root cause? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Causes",
                              "statement": "Surface vs underlying."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cause = immediate reason; root = deepest underlying.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. plastic in ocean (cause) vs overproduction/waste systems (root).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Root causes enable lasting solutions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Immediate vs underlying reason"
},
        },
        {
          id: "cipg-u2-dan-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define stakeholder, cause, effect, consequence, root cause, multi-perspective. (b) Analyse 'endangered animals': causes, effects, stakeholders. (c) Identify one root cause. (d) Who are the key stakeholders? (e) Why consider multiple perspectives? (f) Propose two solutions. (g) Why do surface solutions fail? (h) Design an analysis framework for any issue.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Issue analysis",
                              "statement": "Angles, causes, stakeholders."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Valid causes, effects, stakeholders.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Valid root cause identified.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Valid stakeholders: animals, humans, governments.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Different views reveal complexity/solutions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Two plausible solutions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Symptoms return without root fix.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Reusable analysis framework.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Deep issue analysis: causes, effects, stakeholders, solutions."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u2-dan-notes",
      title: "Deep analysis — notes",
      summary: "Analyse causes, effects, stakeholders, root causes and solutions from multiple angles.",
      sections: [
        { heading: "Key idea", body: "Surface fixes fail; root causes need addressing." },
        { heading: "Stakeholders", body: "Different groups experience issues differently." },
      ],
    },
  ],
};
