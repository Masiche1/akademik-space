import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "cipg-u2-lesson-2-5",
  code: "2-5",
  title: "Stage 4 — Collaborating on Global Projects",
  goal: "I CAN work effectively in a team on a global-issue project, assigning roles and combining contributions.",
  standards: [
    "Cambridge Primary Global Perspectives 0838 Stage 4: collaboration",
    "Cambridge Primary Global Perspectives 0838 strand: Collaboration",
  ],
  stage: 4,
  vocabulary: [
    { term: "Project", definition: "A planned piece of work with a goal." },
    { term: "Role", definition: "Your specific job in a team." },
    {
      term: "Contribution",
      definition: "What each member adds to the project.",
    },
    { term: "Deadline", definition: "When work must be finished." },
    { term: "Accountable", definition: "Responsible for your part." },
    {
      term: "Synergy",
      definition: "Team result better than individuals alone.",
    },
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
          problem:
            "Team project: 'Reduce food waste at school'. Assign 4 roles.",
          solution:
            "Researcher (gather data), Designer (poster), Coordinator (organise), Presenter (share findings).",
        },
      },
      questions: [
        {
          id: "cipg-u2-cl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a project role?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Your specific job in a team",
              },
              {
                id: "b",
                text: "A school grade",
              },
              {
                id: "c",
                text: "A weather term",
              },
              {
                id: "d",
                text: "A type of computer",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Role",
                statement: "Team member's job.",
              },
            ],
            steps: [
              {
                reasoning: "Role = defined responsibility in team.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Your job in the team",
          },
        },
        {
          id: "cipg-u2-cl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two benefits of teamwork on a project.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Teamwork",
                statement: "Shared effort benefits.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. more ideas / share workload.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. better result / learn from others.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. more ideas + shared work",
          },
        },
        {
          id: "cipg-u2-cl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why assign roles in a group project? What happens if everyone does the same task?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Roles",
                statement: "Division of labour.",
              },
            ],
            steps: [
              {
                reasoning: "Roles prevent duplication and cover all needs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Everyone same task = gaps + wasted effort.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Specialisation improves quality.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Avoid duplication; cover all tasks",
          },
        },
        {
          id: "cipg-u2-cl-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define project, role, contribution, deadline, accountable, synergy. (b) Design a team project on 'water conservation' with 4 roles. (c) Why is synergy valuable? (d) What makes a good team member? (e) How do you handle a teammate not doing their part? (f) What is a deadline and why meet it? (g) How do contributions combine? (h) Design team rules for your project.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Collaboration",
                statement: "Roles, contributions, teamwork.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Valid project + 4 sensible roles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Combined result > individual efforts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Reliable, communicative, helpful.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Talk privately, offer help, inform teacher if needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Agreed finish time; ensures progress.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Each part fits into whole project.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid team rules.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Team projects, roles, contributions, deadlines.",
          },
        },
        {
          id: "cipg-u2-cl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'contribution'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The project deadline",
              },
              {
                id: "b",
                text: "A school grade",
              },
              {
                id: "c",
                text: "A type of team meeting",
              },
              {
                id: "d",
                text: "What each member adds to the project",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Contribution",
                statement: "What each person adds.",
              },
            ],
            steps: [
              {
                reasoning: "A contribution is each member's part of the work.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "What each member adds",
          },
        },
        {
          id: "cipg-u2-cl-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A team of 4 members each has 1 role. (a) How many roles does the team have? (b) If 2 more members join with roles, how many roles will there be in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
              {
                label: "b",
                answer: 6,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Roles",
                statement: "Counting team roles.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 4 members = 4 roles.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 4 + 2 = 6 roles.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "4; 6",
          },
        },
        {
          id: "cipg-u2-cl-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'synergy' mean in teamwork?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Everyone does exactly the same task",
              },
              {
                id: "b",
                text: "The team result is better than individuals working alone",
              },
              {
                id: "c",
                text: "The project costs less money",
              },
              {
                id: "d",
                text: "Only one person does all the work",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synergy",
                statement: "Combined effort beats solo.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Synergy means teamwork achieves more than individuals could.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Team result better than individuals",
          },
        },
        {
          id: "cipg-u2-cl-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A team must complete 6 tasks with 3 members sharing the work evenly. (a) How many tasks are there? (b) How many tasks will each member do?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 6,
              },
              {
                label: "b",
                answer: 2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Collaboration",
                statement: "Sharing work evenly.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 6 tasks.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 6 / 3 = 2 tasks each.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "6 tasks; 2 each",
          },
        },
        {
          id: "cipg-u2-cl-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is meeting deadlines important in a team project?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It makes the project shorter than planned",
              },
              {
                id: "b",
                text: "It means you never have to check your work",
              },
              {
                id: "c",
                text: "It lets one person do everything",
              },
              {
                id: "d",
                text: "It keeps the project on schedule so work gets finished",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Deadlines",
                statement: "Agreed finish times keep progress.",
              },
            ],
            steps: [
              {
                reasoning: "Deadlines ensure tasks are completed on time.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Keeps project on schedule",
          },
        },
        {
          id: "cipg-u2-cl-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A project received 8 contributions from 4 members, 2 each. (a) How many contributions were made? (b) How many members contributed? (c) If one member adds 2 more contributions, how many contributions will there be in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 8,
              },
              {
                label: "b",
                answer: 4,
              },
              {
                label: "c",
                answer: 10,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Contributions",
                statement: "Counting team contributions.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 8 contributions.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 4 members.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 8 + 2 = 10 contributions.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "8, 4, 10",
          },
        },
        {
          id: "cipg-u2-cl-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Being 'accountable' in a team means...",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Watching other people work",
              },
              {
                id: "b",
                text: "Being responsible for your part of the work",
              },
              {
                id: "c",
                text: "Doing everyone else's job",
              },
              {
                id: "d",
                text: "Avoiding all responsibilities",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accountable",
                statement: "Responsible for your part.",
              },
            ],
            steps: [
              {
                reasoning: "Accountable means owning your assigned role.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Responsible for your part",
          },
        },
        {
          id: "cipg-u2-cl-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A project team has 2 researchers, 2 designers and 1 presenter. (a) How many researchers are there? (b) How many designers are there? (c) How many people are on the team in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 2,
              },
              {
                label: "b",
                answer: 2,
              },
              {
                label: "c",
                answer: 5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Roles",
                statement: "Counting team members by role.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 2 researchers.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 2 designers.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 2 + 2 + 1 = 5 members.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "2, 2, 5",
          },
        },
        {
          id: "cipg-u2-cl-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What happens if everyone in a team does the same task?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The project always finishes early",
              },
              {
                id: "b",
                text: "Some needed work is left undone and effort is wasted",
              },
              {
                id: "c",
                text: "The team gets better results",
              },
              {
                id: "d",
                text: "Nothing changes at all",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Division of labour",
                statement: "Roles prevent gaps and duplication.",
              },
            ],
            steps: [
              {
                reasoning: "Same task for all leaves gaps and wastes effort.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Gaps and wasted effort",
          },
        },
        {
          id: "cipg-u2-cl-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A project timeline is: research in weeks 1-2, design in weeks 3-4, presentation in week 5. (a) How many weeks for research? (b) How many weeks for design? (c) How many weeks for the presentation? (d) How many weeks does the whole project take?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 2,
              },
              {
                label: "b",
                answer: 2,
              },
              {
                label: "c",
                answer: 1,
              },
              {
                label: "d",
                answer: 5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Deadlines",
                statement: "Planning project time.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Weeks 1-2 = 2 weeks research.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Weeks 3-4 = 2 weeks design.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) Week 5 = 1 week presentation.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "(d) 2 + 2 + 1 = 5 weeks total.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "2, 2, 1, 5",
          },
        },
        {
          id: "cipg-u2-cl-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the best way to handle a teammate who is not doing their part?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Shout at them in front of everyone",
              },
              {
                id: "b",
                text: "Do all their work without telling them",
              },
              {
                id: "c",
                text: "Ignore the problem completely",
              },
              {
                id: "d",
                text: "Talk to them privately and offer help",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Teamwork",
                statement: "Communicate and support.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A private, helpful conversation resolves issues respectfully.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Talk privately, offer help",
          },
        },
        {
          id: "cipg-u2-cl-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define project, role, contribution, deadline, accountable, synergy. (b) Design a team project on 'water conservation' and assign 4 roles. (c) Why is synergy valuable? (d) What makes a good team member? (e) How do you handle a teammate not doing their part? (f) What is a deadline and why does it matter? (g) How do individual contributions combine into one project? (h) Write three team rules for your project.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Collaboration",
                statement: "Roles, contributions, teamwork.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Valid project with 4 sensible roles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Combined result is better than individual efforts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Reliable, communicative, helpful.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Talk privately, offer help, involve teacher if needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Agreed finish time; ensures progress.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Each part fits together into the whole.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Three valid team rules.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Team projects, roles, contributions, deadlines.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u2-cl-notes",
      title: "Team projects — notes",
      summary:
        "Assign roles, contribute your part, meet deadlines. Team result > individual work.",
      sections: [
        {
          heading: "Key idea",
          body: "Good teams combine different strengths.",
        },
        {
          heading: "Roles",
          body: "Researcher, designer, coordinator, presenter — cover all needs.",
        },
      ],
    },
  ],
};
