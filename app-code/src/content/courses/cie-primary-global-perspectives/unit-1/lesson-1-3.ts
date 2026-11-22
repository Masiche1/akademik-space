import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cipg-u1-lesson-1-3",
  code: "1-3",
  title: "Stage 1 — Working Together and Sharing Ideas",
  goal: "I CAN work with others, share ideas and listen to different opinions.",
  standards: [
    "Cambridge Primary Global Perspectives 0838 Stage 1: collaboration",
    "Cambridge Primary Global Perspectives 0838 strand: Collaboration",
  ],
  stage: 1,
  vocabulary: [
    { term: "Collaborate", definition: "To work together with others." },
    { term: "Idea", definition: "A thought or suggestion." },
    {
      term: "Opinion",
      definition: "What someone thinks or feels about something.",
    },
    { term: "Listen", definition: "To pay attention to what others say." },
    { term: "Take turns", definition: "Let everyone have a chance to speak." },
    { term: "Team", definition: "A group working together." },
  ],
  concepts: [
    {
      id: "cipg-u1-s1-collab",
      title: "Working together",
      skill:
        "Share ideas, listen and take turns in group work at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Working in a team",
            body: "Collaboration means working together — sharing ideas, listening to others, and taking turns. Everyone's idea is important, even if it's different from yours.",
          },
          {
            heading: "Sharing opinions",
            body: "An opinion is what someone thinks — 'I think we should plant sunflowers'. Listen carefully, say your own ideas politely, and let others have their turn. Good teams combine everyone's best ideas.",
          },
        ],
        keyFormulas: [
          { name: "Collaborate", statement: "work together, share ideas" },
          { name: "Take turns", statement: "everyone gets to speak" },
        ],
        workedExample: {
          problem:
            "Your group must choose a class pet. How do you collaborate?",
          solution:
            "Share ideas ('I think a hamster'), listen to others, take turns, then agree on the best choice together.",
        },
      },
      questions: [
        {
          id: "cipg-u1-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does collaborate mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Argue with friends",
              },
              {
                id: "b",
                text: "Work alone",
              },
              {
                id: "c",
                text: "Copy someone's work",
              },
              {
                id: "d",
                text: "Work together with others",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Collaborate",
                statement: "Work together.",
              },
            ],
            steps: [
              {
                reasoning: "Collaboration = joint work and shared ideas.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Work together",
          },
        },
        {
          id: "cipg-u1-co-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an opinion and how is it different from a fact?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Opinion vs fact",
                statement: "Belief vs checkable truth.",
              },
            ],
            steps: [
              {
                reasoning: "Opinion = what someone thinks/feels.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fact = checkable true information.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Belief vs truth",
          },
        },
        {
          id: "cipg-u1-co-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is taking turns important in group work? Give an example of sharing an idea politely.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Collaboration",
                statement: "Turns and polite ideas.",
              },
            ],
            steps: [
              {
                reasoning: "Turns let everyone contribute and feel included.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Polite example: 'I think... what do you think?'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Listening to others improves the result.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Inclusion; polite idea-sharing",
          },
        },
        {
          id: "cipg-u1-co-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define collaborate, opinion, take turns. (b) Why is every idea important? (c) How do you share an idea politely? (d) What should you do while others speak? (e) What happens if only one person talks? (f) Give an example of a group decision. (g) How do teams combine ideas? (h) Design group rules for a class project.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Collaboration",
                statement: "Ideas, turns, listening, decisions.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All three definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Different ideas → better solutions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) 'I think...' + invite others' views.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Listen carefully without interrupting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Others feel excluded; fewer ideas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Valid group decision example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Combine best parts of everyone's ideas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid group rules.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Collaboration, opinions, turns, listening, decisions.",
          },
        },
        {
          id: "cipg-u1-co-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does it mean to 'take turns' in group work?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Only the teacher speaks",
              },
              {
                id: "b",
                text: "Everyone gets a chance to speak",
              },
              {
                id: "c",
                text: "Nobody is allowed to talk",
              },
              {
                id: "d",
                text: "The loudest person wins",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Take turns",
                statement: "Everyone gets to speak.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Taking turns means sharing speaking opportunities fairly.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Everyone gets a chance to speak",
          },
        },
        {
          id: "cipg-u1-co-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two ways to share an idea politely in a group.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Polite ideas",
                statement: "Respectful language.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. say 'I think...' instead of 'You're wrong'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. ask 'What do you think?' to invite others.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. 'I think...' + 'What do you think?'",
          },
        },
        {
          id: "cipg-u1-co-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is listening important when working in a team?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "You learn from others' ideas and avoid interrupting",
              },
              {
                id: "b",
                text: "It means you do not have to work",
              },
              {
                id: "c",
                text: "It is only for the teacher",
              },
              {
                id: "d",
                text: "It stops you having opinions",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Listening",
                statement: "Learn from others.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Listening builds on others' ideas and shows respect.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Learn from others' ideas",
          },
        },
        {
          id: "cipg-u1-co-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Your group is choosing a name for a class project. Write one idea you could share politely, and explain why listening to others helps the group choose.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Collaboration",
                statement: "Ideas, turns, listening.",
              },
            ],
            steps: [
              {
                reasoning: "Polite idea, e.g. 'I think we should call it...'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Listening lets everyone contribute.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Better ideas emerge from the whole group.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Polite idea; listening improves choice",
          },
        },
        {
          id: "cipg-u1-co-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of an opinion?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "'I think blue is the best colour'",
              },
              {
                id: "b",
                text: "'There are 7 days in a week'",
              },
              {
                id: "c",
                text: "'The school has 30 desks'",
              },
              {
                id: "d",
                text: "'Water freezes at 0°C'",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Opinion",
                statement: "What someone thinks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Opinions express personal likes/beliefs; others are checkable facts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "'I think blue is the best colour'",
          },
        },
        {
          id: "cipg-u1-co-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Plan how your group will decide on a class trip destination: (a) how you will collect ideas, (b) how you will listen, (c) how you will agree on one choice, (d) what you will do if you disagree.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Group decision-making",
                statement: "Ideas, listening, agreement.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Everyone shares ideas, e.g. write or say them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Listen without interrupting, take turns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Vote or agree together on the best choice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Respectfully discuss or accept the group's choice.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Collect ideas, listen, agree, handle disagreement.",
          },
        },
        {
          id: "cipg-u1-co-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'team'? Give one example of working in a team.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Team",
                statement: "Group working together.",
              },
            ],
            steps: [
              {
                reasoning: "Team = group working together toward a goal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. group project, sports team, class job.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. group project",
          },
        },
        {
          id: "cipg-u1-co-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "In your group, one person always talks and nobody else gets a turn. Explain two problems this causes and one thing the group could do.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Taking turns",
                statement: "Everyone contributes.",
              },
            ],
            steps: [
              {
                reasoning: "Problem 1: others' ideas are missed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Problem 2: others feel excluded/unhappy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Solution: take turns / invite quieter members to speak.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Missed ideas + exclusion; take turns",
          },
        },
        {
          id: "cipg-u1-co-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why can different opinions in a group be a good thing?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They make work slower with no benefit",
              },
              {
                id: "b",
                text: "They prove one person is always right",
              },
              {
                id: "c",
                text: "They give more ideas to choose from",
              },
              {
                id: "d",
                text: "They mean the group should stop working",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diverse ideas",
                statement: "More views = better choices.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Different opinions add ideas the group can combine.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "They give more ideas to choose from",
          },
        },
        {
          id: "cipg-u1-co-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Your group disagrees about whether to build a model or write a story for a project. Describe how the group could work together to reach a decision everyone accepts.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Resolving disagreement",
                statement: "Listen, discuss, agree.",
              },
            ],
            steps: [
              {
                reasoning: "Everyone shares their reason for their choice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Group listens to each side without interrupting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Group weighs options and maybe combines ideas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Group agrees on one choice or a fair compromise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Process respects everyone's opinion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Share reasons, listen, combine, agree fairly.",
          },
        },
        {
          id: "cipg-u1-co-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between an opinion and a fact? Give one example of each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Opinion vs fact",
                statement: "Belief vs checkable truth.",
              },
            ],
            steps: [
              {
                reasoning: "Opinion = personal belief; fact = checkable truth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. opinion 'I like pizza' / fact 'Pizza has cheese'.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. 'I like pizza' vs 'Pizza has cheese'",
          },
        },
        {
          id: "cipg-u1-co-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Design four simple group rules that would help a class team work well together on a project.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Group rules",
                statement: "Fair collaboration rules.",
              },
            ],
            steps: [
              {
                reasoning: "Rule about taking turns / everyone speaks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rule about listening without interrupting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rule about being polite/respectful.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rule about sharing work/helping each other.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rules are practical and promote collaboration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. take turns, listen, be polite, share work",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-co-notes",
      title: "Collaboration — notes",
      summary:
        "Work together: share ideas, listen, take turns. Opinions differ; facts can be checked.",
      sections: [
        {
          heading: "Key idea",
          body: "Teams produce better results when everyone contributes.",
        },
        {
          heading: "Politeness",
          body: "'I think...' invites discussion; listening builds on ideas.",
        },
      ],
    },
  ],
};
