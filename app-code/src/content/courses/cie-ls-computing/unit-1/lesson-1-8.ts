import type { Lesson } from "../../../types.ts";

export const lesson18: Lesson = {
  id: "cils-c-u1-lesson-1-8",
  code: "1-8",
  title: "Stage 9 — Programming Project: Full Lifecycle",
  goal: "I CAN manage a complete programming project from specification to evaluation.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 9: programming", "Cambridge Lower Secondary Computing 0860 strand: Programming"],
  stage: 9,
  vocabulary: [
    { term: "Specification", definition: "Document defining what the program must do." },
    { term: "Design document", definition: "Plan of structure, functions, data." },
    { term: "Version control", definition: "Tracking changes to code over time." },
    { term: "User acceptance", definition: "Program meets the user's actual needs." },
    { term: "Maintenance", definition: "Ongoing fixes and improvements after release." },
    { term: "Technical debt", definition: "Shortcuts that make future changes harder." },
  ],
  concepts: [
    {
      id: "cils-c-u1-s8-proj",
      title: "Programming project lifecycle",
      skill: "Manage spec→design→build→test→deploy→maintain at Stage 9 level.",
      lesson: {
        sections: [
          {
            heading: "The lifecycle",
            body: "Professional programming: write specification → design architecture → build incrementally → test thoroughly → deploy → maintain and improve. Each stage has deliverables and checkpoints.",
          },
          {
            heading: "Real-world concerns",
            body: "Version control tracks changes (Git). Technical debt accumulates from shortcuts. User acceptance testing ensures the program solves the real problem, not just the imagined one.",
          },
        ],
        keyFormulas: [
          { name: "Lifecycle", statement: "spec→design→build→test→deploy→maintain" },
          { name: "Version control", statement: "track and revert code changes" },
        ],
        workedExample: {
          problem: "Your team built a school library app. List the lifecycle stages it went through and one risk at each.",
          solution: "Spec: misunderstood requirements. Design: poor architecture. Build: bugs. Test: missed edge cases. Deploy: downtime. Maintain: technical debt from shortcuts.",
        },
      },
      questions: [
        {
          id: "cils-c-u1-pj-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a program specification?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Document defining what the program must do"
                    },
                    {
                              "id": "b",
                              "text": "A type of code"
                    },
                    {
                              "id": "c",
                              "text": "A computer part"
                    },
                    {
                              "id": "d",
                              "text": "A network device"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Specification",
                              "statement": "Requirements document."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spec defines requirements before coding.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Requirements document"
},
        },
        {
          id: "cils-c-u1-pj-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the stages of the programming lifecycle in order.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lifecycle",
                              "statement": "Development stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spec→design→build→test→deploy→maintain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct order.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "spec→design→build→test→deploy→maintain"
},
        },
        {
          id: "cils-c-u1-pj-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is technical debt and why does it matter? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Technical debt",
                              "statement": "Shortcut costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shortcuts that make future work harder.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. copying code instead of function → harder to fix later.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Accumulates 'interest' over time.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Future cost of shortcuts"
},
        },
        {
          id: "cils-c-u1-pj-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define specification, design document, version control, user acceptance, maintenance, technical debt. (b) Describe the lifecycle stages. (c) Why write a spec first? (d) What is version control for? (e) What is user acceptance testing? (f) What is maintenance after release? (g) How do you avoid technical debt? (h) Design a project plan for a 'school club finder' app.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Project lifecycle",
                              "statement": "Spec to maintenance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) All stages in order.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Clear target prevents rework.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Track changes, revert, collaborate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Users verify it meets real needs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Ongoing fixes/improvements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Write clean code, refactor, document.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid project plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Programming lifecycle and project management."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u1-pj-notes",
      title: "Project lifecycle — notes",
      summary: "Spec→design→build→test→deploy→maintain. Version control tracks changes; avoid technical debt.",
      sections: [
        { heading: "Key idea", body: "Professional software is managed through a full lifecycle." },
        { heading: "Debt", body: "Shortcuts cost more later — write clean code." },
      ],
    },
  ],
};
