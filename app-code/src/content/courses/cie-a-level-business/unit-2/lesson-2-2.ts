import type { Lesson } from "../../../types.ts";

export const lesson382: Lesson = {
  id: "ciealbus-u2-lesson-2-2",
  code: "2-2",
  title: "Human Resource Management",
  goal: "I CAN explain HRM functions and motivation theories.",
  standards: ["Cambridge A Level Business 9707", "Paper 2: HRM"],
  
  vocabulary: [
    { term: "HRM", definition: "Managing human resources." },
    { term: "Recruitment", definition: "Hiring new employees." },
    { term: "Training", definition: "Developing employee skills." },
    { term: "Motivation", definition: "Driving employee performance." },
    { term: "Maslow's hierarchy", definition: "Needs hierarchy: physiological→safety→belonging→esteem→self-actualisation." },
    { term: "Herzberg's theory", definition: "Hygiene factors vs motivators." },
  ],
  concepts: [
    {
      id: "ciealbus-u2-s2-hrm",
      title: "Human resource management",
      skill: "Understand HRM functions and motivation.",
      lesson: {
        sections: [
          {
            heading: "HRM functions",
            body: "Recruitment and selection, training and development, performance management, remuneration, industrial relations, health and safety.",
          },
          {
            heading: "Motivation theories",
            body: "Maslow: hierarchy of needs — lower needs must be met before higher. Herzberg: hygiene factors (salary, conditions) prevent dissatisfaction; motivators (achievement, recognition) create satisfaction.",
          },
        ],
        keyFormulas: [
          { name: "HRM", statement: "human resource management" },
          { name: "Maslow", statement: "needs hierarchy" },
          { name: "Herzberg", statement: "hygiene vs motivators" },
        ],
        workedExample: {
          problem: "An employee is paid well but unmotivated. What could explain this?",
          solution: "Herzberg: salary is hygiene factor — prevents dissatisfaction but doesn't motivate. Need motivators: recognition, achievement, responsibility.",
        },
      },
      questions: [
        {
          id: "ciealbus-u2-hr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is HRM?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Managing human resources"
                    },
                    {
                              "id": "b",
                              "text": "Marketing"
                    },
                    {
                              "id": "c",
                              "text": "Finance"
                    },
                    {
                              "id": "d",
                              "text": "Operations"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "HRM",
                              "statement": "Human resources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "HRM = managing human resources.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Human resources"
},
        },
        {
          id: "ciealbus-u2-hr-q2",
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
                              "reasoning": "Hierarchy of needs: physiological→safety→belonging→esteem→self-actualisation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lower needs must be met first.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Needs hierarchy"
},
        },
        {
          id: "ciealbus-u2-hr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is Herzberg's two-factor theory?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Herzberg",
                              "statement": "Hygiene vs motivators."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hygiene factors prevent dissatisfaction (salary, conditions).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Motivators create satisfaction (achievement, recognition).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different factors for different outcomes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Hygiene vs motivators"
},
        },
        {
          id: "ciealbus-u2-hr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define HRM, recruitment, training, motivation, Maslow's hierarchy, Herzberg's theory. (b) What is HRM? (c) What are HRM functions? (d) What is Maslow's hierarchy? (e) What is Herzberg's theory? (f) Compare Maslow and Herzberg. (g) How does motivation affect productivity? (h) Evaluate which motivation theory is most useful for managers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "HRM",
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
                              "reasoning": "(b) Human resources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Recruitment, training, performance, remuneration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Needs hierarchy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Hygiene vs motivators.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Maslow hierarchy vs Herzberg factors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Motivated employees more productive.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Context-dependent evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "HRM and motivation theories."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u2-hr-notes",
      title: "HRM — notes",
      summary: "HRM functions: recruitment→training→performance→remuneration. Maslow vs Herzberg motivation.",
      sections: [
        { heading: "Key idea", body: "Human resources are key competitive advantage — motivation drives performance." },
        { heading: "Theories", body: "Maslow: needs hierarchy. Herzberg: hygiene prevents dissatisfaction, motivators create satisfaction." },
      ],
    },
  ],
};
