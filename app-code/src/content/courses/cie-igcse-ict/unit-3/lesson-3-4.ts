import type { Lesson } from "../../../types.ts";

export const lesson99: Lesson = {
  id: "cieict-u3-lesson-3-4",
  code: "3-4",
  title: "ICT Project Evaluation",
  goal: "I CAN evaluate ICT projects against objectives and identify improvements.",
  standards: ["Cambridge IGCSE ICT 0417: evaluation", "0417: project assessment"],
  
  vocabulary: [
    { term: "Evaluation", definition: "Assessing success against criteria." },
    { term: "Success criteria", definition: "Measurable standards for judging outcomes." },
    { term: "User feedback", definition: "Opinions from people using the product." },
    { term: "Efficiency", definition: "How well resources are used." },
    { term: "Effectiveness", definition: "Whether objectives were achieved." },
    { term: "Improvement", definition: "Changes to make product better." },
  ],
  concepts: [
    {
      id: "cieict-u3-s4-eval",
      title: "Project evaluation",
      skill: "Evaluate ICT projects systematically at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Evaluation criteria",
            body: "Did it meet objectives? Is it user-friendly? Is it efficient? Is it secure? Gather user feedback. Compare actual vs planned outcomes.",
          },
          {
            heading: "Improvement cycle",
            body: "Identify weaknesses → prioritise fixes → implement changes → re-test. Evaluation isn't just criticism — it's learning what works and planning next iteration.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation", statement: "objectives vs outcomes" },
          { name: "Feedback", statement: "user opinions guide improvement" },
          { name: "Iteration", statement: "evaluate→improve→re-test" },
        ],
        workedExample: {
          problem: "Evaluate a school website you built. What criteria and feedback would you gather?",
          solution: "Check: meets objectives? User-friendly? Fast? Mobile-friendly? Gather teacher/student feedback → identify issues → plan improvements.",
        },
      },
      questions: [
        {
          id: "cieict-u3-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is evaluation in ICT projects?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Assessing success against criteria"
                    },
                    {
                              "id": "b",
                              "text": "A type of software"
                    },
                    {
                              "id": "c",
                              "text": "A network device"
                    },
                    {
                              "id": "d",
                              "text": "A programming language"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Evaluation",
                              "statement": "Success assessment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evaluation = judging against criteria.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Success assessment"
},
        },
        {
          id: "cieict-u3-pe-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between effectiveness and efficiency?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Effective vs efficient",
                              "statement": "Goals vs resources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Effective=achieved objectives; efficient=used resources well.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both matter for success.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Goals vs resource use"
},
        },
        {
          id: "cieict-u3-pe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why gather user feedback when evaluating a project? What types of feedback are useful?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "User feedback",
                              "statement": "Real-world validation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Feedback reveals real usability issues.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Types: usability, functionality, satisfaction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Guides improvements.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Reveals real issues; guides improvements"
},
        },
        {
          id: "cieict-u3-pe-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define evaluation, success criteria, user feedback, efficiency, effectiveness, improvement. (b) What makes good success criteria? (c) How do you gather user feedback? (d) What is effectiveness vs efficiency? (e) Why iterate after evaluation? (f) What should an evaluation report include? (g) How do you prioritise improvements? (h) Evaluate a hypothetical school canteen ordering system.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Evaluation",
                              "statement": "Criteria, feedback, improvement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Measurable, relevant, achievable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Surveys, interviews, observation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Goals vs resources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Improve based on findings.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Objectives, outcomes, feedback, recommendations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Impact vs effort.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid canteen system evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Project evaluation and improvement cycles."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u3-pe-notes",
      title: "Evaluation — notes",
      summary: "Evaluate against objectives; gather user feedback; iterate to improve.",
      sections: [
        { heading: "Key idea", body: "Evaluation closes the loop — learn, improve, re-test." },
        { heading: "Criteria", body: "Measurable success criteria set before starting." },
      ],
    },
  ],
};
