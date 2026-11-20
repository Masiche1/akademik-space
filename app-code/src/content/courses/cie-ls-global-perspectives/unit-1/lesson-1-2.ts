import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cilgp-u1-lesson-1-2",
  code: "1-2",
  title: "Analysing Evidence and Perspectives",
  goal: "I CAN analyse evidence critically and understand different perspectives on an issue.",
  standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Analysis", "Cambridge Global Perspectives skills: analysis"],
  
  vocabulary: [
    { term: "Perspective", definition: "A particular viewpoint shaped by experience/culture." },
    { term: "Stakeholder", definition: "Person/group affected by or affecting an issue." },
    { term: "Evidence", definition: "Facts/data supporting a claim." },
    { term: "Inference", definition: "Conclusion drawn from evidence." },
    { term: "Assumption", definition: "Unstated belief underlying an argument." },
    { term: "Counter-argument", definition: "Reasoning against a position." },
  ],
  concepts: [
    {
      id: "cilgp-u1-s2-ana",
      title: "Critical analysis of evidence and perspectives",
      skill: "Analyse evidence quality and multiple viewpoints at lower secondary level.",
      lesson: {
        sections: [
          {
            heading: "Multiple perspectives",
            body: "Every issue affects stakeholders differently: a factory closing hurts workers but may help environment. Understanding all perspectives — not just your own — is core to global perspectives work.",
          },
          {
            heading: "Analysing evidence",
            body: "Check: Is the evidence relevant to the claim? Is it sufficient? Are there alternative explanations? Strong analysis distinguishes fact from interpretation and acknowledges uncertainty.",
          },
        ],
        keyFormulas: [
          { name: "Perspective", statement: "viewpoint shaped by context" },
          { name: "Counter-argument", statement: "strongest opposing view" },
        ],
        workedExample: {
          problem: "Analyse: 'Building a dam provides clean energy.' What perspectives and evidence matter?",
          solution: "Supporters: clean energy, flood control. Opponents: displaced communities, ecosystem damage. Evidence: energy output, relocation costs, environmental impact studies.",
        },
      },
      questions: [
        {
          id: "cilgp-u1-an-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stakeholder?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Person/group affected by an issue"
                    },
                    {
                              "id": "b",
                              "text": "A type of evidence"
                    },
                    {
                              "id": "c",
                              "text": "A voting system"
                    },
                    {
                              "id": "d",
                              "text": "A research tool"
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
                              "reasoning": "Stakeholders are affected by/affect issues.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Affected person/group"
},
        },
        {
          id: "cilgp-u1-an-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between evidence and inference?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Evidence vs inference",
                              "statement": "Data vs conclusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evidence = facts/data observed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Inference = conclusion drawn from it.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Data vs conclusion"
},
        },
        {
          id: "cilgp-u1-an-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify two perspectives on 'social media use by teenagers' and one evidence type for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Perspectives",
                              "statement": "Multiple viewpoints + evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. Parents: safety concerns — evidence: cyberbullying stats.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Teens: social connection — evidence: usage surveys.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both perspectives + evidence each.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Two perspectives with evidence"
},
        },
        {
          id: "cilgp-u1-an-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define perspective, stakeholder, evidence, inference, assumption, counter-argument. (b) List 4 stakeholders in 'should city build a new airport?'. (c) Give one perspective + evidence for each. (d) What is an assumption? (e) Why consider counter-arguments? (f) How do you evaluate evidence quality? (g) Find the inference in: 'Ice caps are melting, therefore sea levels will rise.' (h) Analyse both sides of 'universal basic income'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Analysis",
                              "statement": "Perspectives, evidence, inference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Four valid stakeholders.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Perspective+evidence pairs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Unstated underlying belief.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Tests strength of position.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Relevance, sufficiency, reliability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) 'Sea levels will rise' is the inference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced analysis of UBI.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Critical analysis of evidence and perspectives."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u1-an-notes",
      title: "Analysis — notes",
      summary: "Consider all stakeholder perspectives; distinguish evidence from inference; test assumptions.",
      sections: [
        { heading: "Key idea", body: "Strong analysis weighs multiple viewpoints fairly." },
        { heading: "Evidence", body: "Check relevance, sufficiency, reliability — not just quantity." },
      ],
    },
  ],
};
