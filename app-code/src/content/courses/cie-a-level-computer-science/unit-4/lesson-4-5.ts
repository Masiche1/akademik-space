import type { Lesson } from "../../../types.ts";

export const lesson155: Lesson = {
  id: "ciealc-u4-lesson-4-5",
  code: "4-5",
  title: "Programming Project: Design and Evaluation",
  goal: "I CAN design, implement and evaluate a programming project.",
  standards: ["Cambridge A Level Computer Science 9618: project", "9618 Paper 2"],
  
  vocabulary: [
    { term: "Project", definition: "Extended programming task for assessment." },
    { term: "Specification", definition: "Requirements defining what program must do." },
    { term: "Testing", definition: "Verifying program works correctly." },
    { term: "Evaluation", definition: "Assessing how well program meets requirements." },
    { term: "Documentation", definition: "Comments, user guides explaining code." },
    { term: "Maintenance", definition: "Updating/fixing program after release." },
  ],
  concepts: [
    {
      id: "ciealc-u4-s5-proj",
      title: "Programming project",
      skill: "Design and evaluate programming projects.",
      lesson: {
        sections: [
          {
            heading: "Project lifecycle",
            body: "Design: requirements, specifications. Implement: code development. Test: verify functionality. Evaluate: assess against requirements. Maintain: update and fix.",
          },
          {
            heading: "Evaluation criteria",
            body: "Does it meet all requirements? Is code readable? Are edge cases handled? Is it efficient? Is it user-friendly? Documentation adequate?",
          },
        ],
        keyFormulas: [
          { name: "Lifecycle", statement: "design→implement→test→evaluate→maintain" },
          { name: "Evaluation", statement: "requirements, readability, efficiency, usability" },
        ],
        workedExample: {
          problem: "Design a student grade calculator project.",
          solution: "Requirements: input scores, calculate average, output grade. Implement: functions for input, calculation, output. Test: various score combinations. Evaluate: meets all requirements?",
        },
      },
      questions: [
        {
          id: "ciealc-u4-pj-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a programming project?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Extended programming task for assessment"
                    },
                    {
                              "id": "b",
                              "text": "A type of hardware"
                    },
                    {
                              "id": "c",
                              "text": "A network protocol"
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
                              "name": "Project",
                              "statement": "Extended programming task."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Project = substantial programming assignment.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Extended programming task"
},
        },
        {
          id: "ciealc-u4-pj-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the stages of the project lifecycle?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Project lifecycle",
                              "statement": "Design→implement→test→evaluate→maintain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Design, implement, test, evaluate, maintain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All five stages correct.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Design→implement→test→evaluate→maintain"
},
        },
        {
          id: "ciealc-u4-pj-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What should you test in a programming project?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Testing",
                              "statement": "Verify functionality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Test normal cases and edge cases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Verify all requirements met.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check error handling.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Normal cases, edge cases, requirements"
},
        },
        {
          id: "ciealc-u4-pj-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define project, specification, testing, evaluation, documentation, maintenance. (b) What is the project lifecycle? (c) What is a specification? (d) What is testing? (e) What is evaluation? (f) What is documentation? (g) Why maintain software? (h) Design a project for a school library system.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Project",
                              "statement": "Design, implementation, evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Design→implement→test→evaluate→maintain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Requirements defining program.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Verifying correctness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Assessing against requirements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Comments, guides explaining code.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Fix bugs, add features, adapt.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid library system project.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Programming project lifecycle."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u4-pj-notes",
      title: "Project — notes",
      summary: "Project lifecycle: design→implement→test→evaluate→maintain. Test thoroughly, document well.",
      sections: [
        { heading: "Key idea", body: "Good projects meet requirements, are tested thoroughly, well documented." },
        { heading: "Evaluation", body: "Does it work? Is it efficient? Is it maintainable?" },
      ],
    },
  ],
};
