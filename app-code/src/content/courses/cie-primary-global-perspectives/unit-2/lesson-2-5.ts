import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "cipg-u2-lesson-2-5",
  code: "2-5",
  title: "Stage 4 — Collaborating on Global Projects",
  goal: "I CAN work effectively in a team on a global-issue project, assigning roles and combining contributions.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 4: collaboration", "Cambridge Primary Global Perspectives 0838 strand: Collaboration"],
  stage: 4,
  vocabulary: [
    { term: "Project", definition: "A planned piece of work with a goal." },
    { term: "Role", definition: "Your specific job in a team." },
    { term: "Contribution", definition: "What each member adds to the project." },
    { term: "Deadline", definition: "When work must be finished." },
    { term: "Accountable", definition: "Responsible for your part." },
    { term: "Synergy", definition: "Team result better than individuals alone." },
  ],
  concepts: [
    {
      id: "cipg-u2-s4-collab",
      title: "Team projects on global issues",
      skill: "Assign roles, contribute and coordinate at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Team projects",
            body: "Global Perspective projects need teamwork: research, design, build, present. Assign roles based on strengths — researcher, designer, writer, presenter. Everyone contributes; the team result is better than individuals working alone.",
          },
          {
            heading: "Working effectively",
            body: "Communicate regularly, meet deadlines, help each other, and combine everyone's contributions into one cohesive project. Review together and celebrate what the team achieved.",
          },
        ],
        keyFormulas: [
          { name: "Role", statement: "specific job each member does" },
          { name: "Contribution", statement: "what each person adds" },
        ],
        workedExample: {
          problem: "Team project: 'Reduce food waste at school'. Assign 4 roles.",
          solution: "Researcher (gather data), Designer (poster), Coordinator (organise), Presenter (share findings).",
        },
      },
      questions: [
        {
          id: "cipg-u2-cl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a project role?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Your specific job in a team"
                    },
                    {
                              "id": "b",
                              "text": "A type of computer"
                    },
                    {
                              "id": "c",
                              "text": "A school grade"
                    },
                    {
                              "id": "d",
                              "text": "A weather term"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Role",
                              "statement": "Team member's job."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Role = defined responsibility in team.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Your job in the team"
},
        },
        {
          id: "cipg-u2-cl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two benefits of teamwork on a project.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Teamwork",
                              "statement": "Shared effort benefits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. more ideas / share workload.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. better result / learn from others.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. more ideas + shared work"
},
        },
        {
          id: "cipg-u2-cl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why assign roles in a group project? What happens if everyone does the same task?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Roles",
                              "statement": "Division of labour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Roles prevent duplication and cover all needs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Everyone same task = gaps + wasted effort.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Specialisation improves quality.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Avoid duplication; cover all tasks"
},
        },
        {
          id: "cipg-u2-cl-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define project, role, contribution, deadline, accountable, synergy. (b) Design a team project on 'water conservation' with 4 roles. (c) Why is synergy valuable? (d) What makes a good team member? (e) How do you handle a teammate not doing their part? (f) What is a deadline and why meet it? (g) How do contributions combine? (h) Design team rules for your project.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Collaboration",
                              "statement": "Roles, contributions, teamwork."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Valid project + 4 sensible roles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Combined result > individual efforts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Reliable, communicative, helpful.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Talk privately, offer help, inform teacher if needed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Agreed finish time; ensures progress.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Each part fits into whole project.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid team rules.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Team projects, roles, contributions, deadlines."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u2-cl-notes",
      title: "Team projects — notes",
      summary: "Assign roles, contribute your part, meet deadlines. Team result > individual work.",
      sections: [
        { heading: "Key idea", body: "Good teams combine different strengths." },
        { heading: "Roles", body: "Researcher, designer, coordinator, presenter — cover all needs." },
      ],
    },
  ],
};
