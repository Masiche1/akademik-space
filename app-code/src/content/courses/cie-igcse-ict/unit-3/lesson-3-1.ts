import type { Lesson } from "../../../types.ts";

export const lesson96: Lesson = {
  id: "cieict-u3-lesson-3-1",
  code: "3-1",
  title: "Online Collaboration Tools",
  goal: "I CAN use online tools for collaborative document editing and project management.",
  standards: ["Cambridge IGCSE ICT 0417: collaboration", "0417: online tools"],
  
  vocabulary: [
    { term: "Cloud storage", definition: "Files stored on remote servers accessible online." },
    { term: "Real-time collaboration", definition: "Multiple users editing simultaneously." },
    { term: "Version history", definition: "Record of all changes to a document." },
    { term: "Comments", definition: "Annotations on documents for discussion." },
    { term: "Permissions", definition: "Who can view/edit/share files." },
    { term: "Shared drive", definition: "Central storage accessible to a team." },
  ],
  concepts: [
    {
      id: "cieict-u3-s1-collab",
      title: "Online collaboration",
      skill: "Use cloud tools for teamwork at IGCSE ICT level.",
      lesson: {
        sections: [
          {
            heading: "Cloud collaboration",
            body: "Google Docs/Office 365 enable real-time editing: multiple users edit simultaneously, see changes live, use comments for discussion, access version history to revert.",
          },
          {
            heading: "Permissions and sharing",
            body: "Control access: view-only, comment, edit permissions. Share via links or specific users. Shared drives give teams central storage. Always verify sharing settings to protect sensitive data.",
          },
        ],
        keyFormulas: [
          { name: "Real-time", statement: "simultaneous editing" },
          { name: "Version history", statement: "track/revert changes" },
          { name: "Permissions", statement: "view/comment/edit control" },
        ],
        workedExample: {
          problem: "Your team is writing a report together online. How do you collaborate effectively?",
          solution: "Shared doc with edit permissions, assign sections, use comments for queries, check version history for changes, agree on style guide first.",
        },
      },
      questions: [
        {
          id: "cieict-u3-oc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is real-time collaboration?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Multiple users editing simultaneously"
                    },
                    {
                              "id": "b",
                              "text": "Sending emails"
                    },
                    {
                              "id": "c",
                              "text": "A type of software"
                    },
                    {
                              "id": "d",
                              "text": "A network cable"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Real-time collaboration",
                              "statement": "Simultaneous editing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiple users edit at once, see live changes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Simultaneous editing"
},
        },
        {
          id: "cieict-u3-oc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is version history and why is it useful?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Version history",
                              "statement": "Change record."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Version history = record of all changes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Revert mistakes, see who changed what.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Change tracking; revert/audit"
},
        },
        {
          id: "cieict-u3-oc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the three main permission levels for sharing files? When use each?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Permissions",
                              "statement": "View/comment/edit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "View=read only; comment=feedback; edit=modify.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Use least privilege needed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All three explained.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "View/comment/edit; least privilege"
},
        },
        {
          id: "cieict-u3-oc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define cloud storage, real-time collaboration, version history, comments, permissions, shared drive. (b) What is real-time collaboration? (c) Why use version history? (d) What are comments for? (e) What permissions should you set? (f) What is a shared drive? (g) How do you ensure file security when sharing? (h) Design a collaboration workflow for a group project.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Collaboration",
                              "statement": "Cloud tools, permissions, workflow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Simultaneous editing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Track/revert changes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Discussion without editing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Least privilege principle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Central team storage.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Check settings, limit access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid collaboration workflow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Online collaboration tools and workflows."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u3-oc-notes",
      title: "Collaboration — notes",
      summary: "Cloud tools enable real-time editing; version history tracks changes; permissions control access.",
      sections: [
        { heading: "Key idea", body: "Collaboration tools let teams work together regardless of location." },
        { heading: "Security", body: "Set appropriate permissions — least privilege principle." },
      ],
    },
  ],
};
