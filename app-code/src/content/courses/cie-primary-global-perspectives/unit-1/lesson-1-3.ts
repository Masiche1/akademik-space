import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cipg-u1-lesson-1-3",
  code: "1-3",
  title: "Stage 1 — Working Together and Sharing Ideas",
  goal: "I CAN work with others, share ideas and listen to different opinions.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 1: collaboration", "Cambridge Primary Global Perspectives 0838 strand: Collaboration"],
  stage: 1,
  vocabulary: [
    { term: "Collaborate", definition: "To work together with others." },
    { term: "Idea", definition: "A thought or suggestion." },
    { term: "Opinion", definition: "What someone thinks or feels about something." },
    { term: "Listen", definition: "To pay attention to what others say." },
    { term: "Take turns", definition: "Let everyone have a chance to speak." },
    { term: "Team", definition: "A group working together." },
  ],
  concepts: [
    {
      id: "cipg-u1-s1-collab",
      title: "Working together",
      skill: "Share ideas, listen and take turns in group work at Stage 1 level.",
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
          problem: "Your group must choose a class pet. How do you collaborate?",
          solution: "Share ideas ('I think a hamster'), listen to others, take turns, then agree on the best choice together.",
        },
      },
      questions: [
        {
          id: "cipg-u1-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does collaborate mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Work together with others"
                    },
                    {
                              "id": "b",
                              "text": "Work alone"
                    },
                    {
                              "id": "c",
                              "text": "Copy someone's work"
                    },
                    {
                              "id": "d",
                              "text": "Argue with friends"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Collaborate",
                              "statement": "Work together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Collaboration = joint work and shared ideas.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Work together"
},
        },
        {
          id: "cipg-u1-co-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an opinion and how is it different from a fact?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Opinion vs fact",
                              "statement": "Belief vs checkable truth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opinion = what someone thinks/feels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fact = checkable true information.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Belief vs truth"
},
        },
        {
          id: "cipg-u1-co-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is taking turns important in group work? Give an example of sharing an idea politely.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Collaboration",
                              "statement": "Turns and polite ideas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Turns let everyone contribute and feel included.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Polite example: 'I think... what do you think?'",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Listening to others improves the result.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Inclusion; polite idea-sharing"
},
        },
        {
          id: "cipg-u1-co-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define collaborate, opinion, take turns. (b) Why is every idea important? (c) How do you share an idea politely? (d) What should you do while others speak? (e) What happens if only one person talks? (f) Give an example of a group decision. (g) How do teams combine ideas? (h) Design group rules for a class project.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Collaboration",
                              "statement": "Ideas, turns, listening, decisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All three definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Different ideas → better solutions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 'I think...' + invite others' views.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Listen carefully without interrupting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Others feel excluded; fewer ideas.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid group decision example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Combine best parts of everyone's ideas.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid group rules.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Collaboration, opinions, turns, listening, decisions."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-co-notes",
      title: "Collaboration — notes",
      summary: "Work together: share ideas, listen, take turns. Opinions differ; facts can be checked.",
      sections: [
        { heading: "Key idea", body: "Teams produce better results when everyone contributes." },
        { heading: "Politeness", body: "'I think...' invites discussion; listening builds on ideas." },
      ],
    },
  ],
};
