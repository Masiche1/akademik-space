import type { Lesson } from "../../../types.ts";

export const lesson96: Lesson = {
  id: "cieict-u3-lesson-3-1",
  code: "3-1",
  title: "Online Collaboration Tools",
  goal: "I CAN use online tools for collaborative document editing and project management.",
  standards: ["Cambridge IGCSE ICT 0417: collaboration", "0417: online tools"],

  vocabulary: [
    {
      term: "Cloud storage",
      definition: "Files stored on remote servers accessible online.",
    },
    {
      term: "Real-time collaboration",
      definition: "Multiple users editing simultaneously.",
    },
    {
      term: "Version history",
      definition: "Record of all changes to a document.",
    },
    {
      term: "Comments",
      definition: "Annotations on documents for discussion.",
    },
    { term: "Permissions", definition: "Who can view/edit/share files." },
    {
      term: "Shared drive",
      definition: "Central storage accessible to a team.",
    },
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
          problem:
            "Your team is writing a report together online. How do you collaborate effectively?",
          solution:
            "Shared doc with edit permissions, assign sections, use comments for queries, check version history for changes, agree on style guide first.",
        },
      },
      questions: [
        {
          id: "cieict-u3-oc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is real-time collaboration?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of software",
              },
              {
                id: "b",
                text: "Multiple users editing simultaneously",
              },
              {
                id: "c",
                text: "A network cable",
              },
              {
                id: "d",
                text: "Sending emails",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Real-time collaboration",
                statement: "Simultaneous editing.",
              },
            ],
            steps: [
              {
                reasoning: "Multiple users edit at once, see live changes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Simultaneous editing",
          },
        },
        {
          id: "cieict-u3-oc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is version history and why is it useful?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Version history",
                statement: "Change record.",
              },
            ],
            steps: [
              {
                reasoning: "Version history = record of all changes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Revert mistakes, see who changed what.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Change tracking; revert/audit",
          },
        },
        {
          id: "cieict-u3-oc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the three main permission levels for sharing files? When use each?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Permissions",
                statement: "View/comment/edit.",
              },
            ],
            steps: [
              {
                reasoning: "View=read only; comment=feedback; edit=modify.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use least privilege needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All three explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "View/comment/edit; least privilege",
          },
        },
        {
          id: "cieict-u3-oc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define cloud storage, real-time collaboration, version history, comments, permissions, shared drive. (b) What is real-time collaboration? (c) Why use version history? (d) What are comments for? (e) What permissions should you set? (f) What is a shared drive? (g) How do you ensure file security when sharing? (h) Design a collaboration workflow for a group project.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Collaboration",
                statement: "Cloud tools, permissions, workflow.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Simultaneous editing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Track/revert changes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Discussion without editing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Least privilege principle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Central team storage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Check settings, limit access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid collaboration workflow.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Online collaboration tools and workflows.",
          },
        },
        {
          id: "cieict-u3-oc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'real-time collaboration' mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Multiple users editing the same document at the same time and seeing changes live",
              },
              {
                id: "b",
                text: "Printing documents together",
              },
              {
                id: "c",
                text: "Taking turns editing a file one at a time",
              },
              {
                id: "d",
                text: "Working on separate files that are never shared",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Real-time collaboration",
                statement: "Simultaneous editing with live updates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Several users edit together and see each other's changes instantly.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Simultaneous live editing",
          },
        },
        {
          id: "cieict-u3-oc-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A document is shared with 5 people: 2 have edit permission, 2 have comment permission and 1 has view-only permission. How many people can directly change the document content?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "2",
              },
              {
                id: "b",
                text: "1",
              },
              {
                id: "c",
                text: "4",
              },
              {
                id: "d",
                text: "5",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Permissions",
                statement: "Only edit permission allows changes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "2 users have edit permission; comment/view cannot change content.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2 people",
          },
        },
        {
          id: "cieict-u3-oc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A document's version history shows 4 saved versions. If you revert to version 2, how many versions back from the latest (version 4) is that?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Version history",
                statement: "Track and revert changes.",
              },
            ],
            steps: [
              {
                reasoning: "Version 4 to version 2 = 2 versions back.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2 versions back",
          },
        },
        {
          id: "cieict-u3-oc-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If a file is shared with 'view-only' permission, what can the recipient NOT do?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Print the document",
              },
              {
                id: "b",
                text: "Edit or change the document",
              },
              {
                id: "c",
                text: "Download a copy",
              },
              {
                id: "d",
                text: "Read the document",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "View-only",
                statement: "Read access without editing.",
              },
            ],
            steps: [
              {
                reasoning: "View-only allows reading but blocks changes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Cannot edit the document",
          },
        },
        {
          id: "cieict-u3-oc-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it often better to use comments on a shared document instead of directly editing someone else's text?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Collaboration etiquette",
                statement: "Discuss via comments, edit with care.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Comments preserve the original text while raising suggestions or questions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It avoids conflicts and lets the author decide what to change.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Preserves original and avoids conflicts",
          },
        },
        {
          id: "cieict-u3-oc-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three collaborators each take responsibility for 2 sections of a report. How many sections are covered in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 6,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Task division",
                statement: "People x sections each.",
              },
            ],
            steps: [
              {
                reasoning: "3 x 2 = 6 sections.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "6 sections",
          },
        },
        {
          id: "cieict-u3-oc-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main benefit of version history in a shared document?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It deletes old versions permanently",
              },
              {
                id: "b",
                text: "It records every change so mistakes can be traced and undone",
              },
              {
                id: "c",
                text: "It makes the document load faster",
              },
              {
                id: "d",
                text: "It automatically translates the document",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Version history",
                statement: "Record of all changes to a document.",
              },
            ],
            steps: [
              {
                reasoning:
                  "History enables auditing who changed what and reverting errors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Trace and undo changes",
          },
        },
        {
          id: "cieict-u3-oc-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Four team members each make 8 edits to a shared document during a session. How many edits are recorded in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 32,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Edit count",
                statement: "Edits per person x people.",
              },
            ],
            steps: [
              {
                reasoning: "4 x 8 = 32 edits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "32 edits",
          },
        },
        {
          id: "cieict-u3-oc-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the risk of sharing a document using 'anyone with the link can edit'?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sharing risks",
                statement: "Least privilege protects data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Anyone who obtains the link can edit or view the document.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sensitive data may be exposed; better to share with named users only.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Uncontrolled access to sensitive data",
          },
        },
        {
          id: "cieict-u3-oc-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 1200-word report must be written equally by 4 collaborators. How many words should each person write?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 300,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Workload",
                statement: "Total / people.",
              },
            ],
            steps: [
              {
                reasoning: "1200 / 4 = 300 words each.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "300 words",
          },
        },
        {
          id: "cieict-u3-oc-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which tool is most suitable for a team needing to edit a document simultaneously from different locations?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Each person writing on paper",
              },
              {
                id: "b",
                text: "A shared cloud document with edit permissions",
              },
              {
                id: "c",
                text: "Passing a USB drive around",
              },
              {
                id: "d",
                text: "A calculator",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Collaboration tools",
                statement: "Cloud docs enable real-time editing.",
              },
            ],
            steps: [
              {
                reasoning: "Cloud documents allow simultaneous remote editing.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Shared cloud document",
          },
        },
        {
          id: "cieict-u3-oc-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A four-person team must produce a school magazine article together online. Describe an effective collaboration workflow.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Collaboration workflow",
                statement: "Plan, share, edit, review.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Agree on a plan/style guide and divide sections among members before writing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Work in a shared document with appropriate permissions, using comments for discussion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Review version history and comments, resolve issues, and agree the final version before publishing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Plan, shared editing with comments, review",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u3-oc-notes",
      title: "Collaboration — notes",
      summary:
        "Cloud tools enable real-time editing; version history tracks changes; permissions control access.",
      sections: [
        {
          heading: "Key idea",
          body: "Collaboration tools let teams work together regardless of location.",
        },
        {
          heading: "Security",
          body: "Set appropriate permissions — least privilege principle.",
        },
      ],
    },
  ],
};
