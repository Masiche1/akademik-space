import type { Lesson } from "../../../types.ts";

export const lesson258: Lesson = {
  id: "cieibs-u1-lesson-1-8",
  code: "1-8",
  title: "Human Resources and Motivation",
  goal: "I CAN explain HR functions and motivation theories.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: human resources"],
  
  vocabulary: [
    { term: "Human resources", definition: "Management of employees." },
    { term: "Recruitment", definition: "Hiring new employees." },
    { term: "Training", definition: "Developing employee skills." },
    { term: "Motivation", definition: "Drive to achieve goals." },
    { term: "Maslow's hierarchy", definition: "Motivation theory: needs hierarchy." },
    { term: "Herzberg's theory", definition: "Motivation: hygiene vs motivator factors." },
  ],
  concepts: [
    {
      id: "cieibs-u1-s8-hr",
      title: "Human resources",
      skill: "Understand HR functions and motivation.",
      lesson: {
        sections: [
          {
            heading: "HR functions",
            body: "Recruitment: attract/select candidates. Training: develop skills. Appraisal: evaluate performance. Discipline: manage conduct. Remuneration: pay/benefits. Motivation: encourage performance.",
          },
          {
            heading: "Motivation theories",
            body: "Maslow: hierarchy of needs (physiological→safety→social→esteem→self-actualisation). Herzberg: hygiene factors (pay, conditions) prevent dissatisfaction; motivators (achievement, recognition) create satisfaction.",
          },
        ],
        keyFormulas: [
          { name: "HR functions", statement: "recruit, train, appraise, remunerate" },
          { name: "Maslow", statement: "needs hierarchy" },
          { name: "Herzberg", statement: "hygiene vs motivators" },
        ],
        workedExample: {
          problem: "An employee is paid well but feels unappreciated. What motivates them?",
          solution: "Herzberg: pay is hygiene factor (prevents dissatisfaction). Recognition/achievement are motivators — need praise, challenging work, growth opportunities.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-hr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is human resources?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Management of employees"
                    },
                    {
                              "id": "b",
                              "text": "A type of tax"
                    },
                    {
                              "id": "c",
                              "text": "A marketing strategy"
                    },
                    {
                              "id": "d",
                              "text": "A legal requirement"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "HR",
                              "statement": "Employee management."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "HR = managing employees.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Employee management"
},
        },
        {
          id: "cieibs-u1-hr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is Maslow's hierarchy?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Maslow",
                              "statement": "Needs hierarchy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hierarchy of needs: physiological→safety→social→esteem→self-actualisation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lower needs must be met before higher.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Needs hierarchy"
},
        },
        {
          id: "cieibs-u1-hr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between Herzberg's hygiene and motivator factors?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Herzberg",
                              "statement": "Hygiene vs motivators."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hygiene factors prevent dissatisfaction (pay, conditions).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Motivators create satisfaction (achievement, recognition).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both needed for motivation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Hygiene vs motivators"
},
        },
        {
          id: "cieibs-u1-hr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define human resources, recruitment, training, motivation, Maslow's hierarchy, Herzberg's theory. (b) What is HR? (c) What is recruitment? (d) What is training? (e) What is Maslow's hierarchy? (f) What is Herzberg's theory? (g) Give 3 hygiene factors. (h) Design a motivation programme for a restaurant.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "HR",
                              "statement": "Functions, motivation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Employee management.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Hiring employees.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Developing skills.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Needs hierarchy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Hygiene vs motivators.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Three valid hygiene factors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid motivation programme.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Human resources and motivation."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-hr-notes",
      title: "HR — notes",
      summary: "HR=recruit, train, appraise, remunerate. Maslow=needs hierarchy; Herzberg=hygiene vs motivators.",
      sections: [
        { heading: "Key idea", body: "Motivation requires both hygiene factors and motivators." },
        { heading: "Maslow", body: "Lower needs (physiological, safety) must be met before higher (esteem, self-actualisation)." },
      ],
    },
  ],
};
