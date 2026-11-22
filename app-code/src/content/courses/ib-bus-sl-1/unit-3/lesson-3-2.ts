import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "bus-u3-lesson-3-2",
  code: "3-2",
  title: "Communication and group behaviour",
  goal: "I CAN explain communication methods and barriers, and describe group formation stages, roles and team types.",
  standards: ["Paper 1", "Paper 2", "Topic 3.2"],
  vocabulary: [
    {
      term: "Communication",
      definition:
        "The process of passing information, ideas or feelings between people.",
    },
    {
      term: "Vertical communication",
      definition: "Messages flowing up or down the organisational hierarchy.",
    },
    {
      term: "Horizontal communication",
      definition:
        "Messages between people at the same level, e.g. between departments.",
    },
    {
      term: "Grapevine",
      definition:
        "The informal, unofficial network through which rumours and gossip travel.",
    },
    {
      term: "Formal communication",
      definition: "Planned channels such as memos, meetings and reports.",
    },
    {
      term: "Group norms",
      definition: "Unwritten rules about acceptable behaviour within a team.",
    },
    {
      term: "Group cohesion",
      definition:
        "The degree to which members feel united and committed to the group.",
    },
    {
      term: "Team roles",
      definition:
        "Belbin's categories such as leader, co-ordinator, specialist and implementer.",
    },
  ],
  concepts: [
    {
      id: "bus-u3-comm",
      title: "Communication methods and barriers",
      skill:
        "Compare formal and informal communication, describe methods and identify barriers.",
      lesson: {
        sections: [
          {
            heading: "Formal vs informal communication",
            body: "**Formal communication** follows official channels: downward instructions, upward reports, horizontal liaison between departments — recorded and accountable. **Informal communication** flows freely through conversations and the **grapevine**, spreading rumours quickly. Formal channels ensure clarity and authority; informal channels build relationships but can distort information.",
          },
          {
            heading: "Methods of communication",
            body: "Rich methods carry more cues: **face-to-face** and **meetings** suit complex or sensitive issues; **written** methods (emails, memos, reports) create records; **visual** aids support presentations; **electronic** tools (chat, video calls) enable speed and remote work. Match the method to the message — routine updates suit email; conflict needs a meeting.",
          },
          {
            heading: "Barriers to communication",
            body: "Common barriers: **physical** (distance, noise), **perceptual** (prejudice, assumptions), **language** (jargon, translation), **emotional** (stress, anger) and **status** (reluctance to question superiors). The sender must check understanding — feedback closes the loop. Poor communication causes errors, conflict and low morale.",
          },
        ],
        keyFormulas: [
          {
            name: "Communication flow",
            statement:
              "Downward (instructions), upward (feedback), horizontal (liaison)",
          },
          {
            name: "Barrier types",
            statement: "Physical, perceptual, language, emotional, status",
          },
        ],
        workedExample: {
          problem:
            "A manager emails complex new procedures and later finds staff misunderstood them. Explain the failure and suggest a fix.",
          solution:
            "Email is a lean channel poor for complex information; written jargon added language barriers. Fix: hold a face-to-face briefing, provide a written summary and check understanding through questions.",
        },
      },
      questions: [
        {
          id: "bus-u3-comm-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Messages passing between departments at the same level are called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diagonal communication" },
              { id: "b", text: "Horizontal communication" },
              { id: "c", text: "Upward communication" },
              { id: "d", text: "Downward communication" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Horizontal communication",
                statement:
                  "Messages exchanged between people or departments at the same organisational level.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Same-level exchange between departments is horizontal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Horizontal communication",
            commonErrors: [
              "Confusing horizontal with diagonal (across levels and departments).",
            ],
          },
        },
        {
          id: "bus-u3-comm-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A team of 8 members is forming. Using Tuckman's stages, which stage comes first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forming" },
              { id: "b", text: "Storming" },
              { id: "c", text: "Performing" },
              { id: "d", text: "Norming" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tuckman's stages",
                statement:
                  "Forming, storming, norming, performing, (adjourning).",
              },
            ],
            steps: [
              {
                reasoning: "The first stage of group development is forming.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Forming",
            commonErrors: ["Reversing storming and norming."],
          },
        },
        {
          id: "bus-u3-comm-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the grapevine can be a problem for management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Informal communication",
                statement:
                  "The grapevine spreads rumours quickly and often inaccurately.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rumours spread faster than official announcements and cannot be controlled.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Distorted information causes anxiety, conflict and wrong decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can undermine management authority and damage morale before facts emerge.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: informal channels need monitoring and prompt official communication.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Uncontrolled, often inaccurate rumours cause anxiety and conflict faster than official channels.",
            commonErrors: [
              "Claiming informal communication is always harmful — it also builds relationships.",
            ],
          },
        },
        {
          id: "bus-u3-comm-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A company introduces a new shift system by email only. Complaints and errors rise sharply.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two barriers to communication in this situation.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why face-to-face communication would have been more effective.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Recommend how management should now communicate the changes.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Communication barriers",
                statement:
                  "Lean channels suit simple messages; rich channels suit complex or sensitive ones.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Email is a lean channel — poor for complex, sensitive change information.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "No feedback mechanism; staff could not ask questions or confirm understanding.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Face-to-face allows tone, questions and immediate feedback.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Staff concerns can be addressed on the spot, reducing resistance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Non-verbal cues signal management's commitment, building trust.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Hold team meetings, allow Q&A, provide written summary afterwards and check understanding.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Practical, two-way recommendation clearly described.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Lean channel, no feedback. (b) Rich channel allows questions, tone and trust. (c) Meetings + written follow-up + feedback checks.",
            commonErrors: [
              "Blaming staff rather than the communication method.",
            ],
          },
        },
        {
          id: "bus-u3-comm-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The informal, unofficial network through which rumours and gossip spread is called the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formal channel" },
              { id: "b", text: "Chain of command" },
              { id: "c", text: "Grapevine" },
              { id: "d", text: "Hierarchy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Grapevine",
                statement:
                  "The informal network through which unofficial messages and rumours travel.",
              },
            ],
            steps: [
              {
                reasoning: "The informal rumour network is the grapevine.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Grapevine",
            commonErrors: [
              "Confusing the grapevine (informal) with formal channels.",
            ],
          },
        },
        {
          id: "bus-u3-comm-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Planned messages such as memos, reports and official meetings are examples of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diagonal communication" },
              { id: "b", text: "The grapevine" },
              { id: "c", text: "Informal communication" },
              { id: "d", text: "Formal communication" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formal communication",
                statement:
                  "Planned communication through official channels such as memos, meetings and reports.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Official, planned channels are formal communication.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Formal communication",
            commonErrors: [
              "Confusing planned official messages with informal chat.",
            ],
          },
        },
        {
          id: "bus-u3-comm-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a survey of 150 staff, 45 said they prefer face-to-face meetings. Calculate the percentage preferring meetings (%).",
          response: {
            type: "numeric",
            parts: [
              { label: "Preferring meetings (%)", answer: 30, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "Percentage = (part / whole) x 100",
              },
            ],
            steps: [
              {
                reasoning: "Divide those preferring meetings by total staff.",
                working: "45 / 150 = 0.3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by 100 to express as a percentage.",
                working: "0.3 x 100 = 30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the percentage.",
                working: "30%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$30\\%$",
            commonErrors: ["Forgetting to multiply by 100 — giving 0.3."],
          },
        },
        {
          id: "bus-u3-comm-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A communication audit records 40 messages sent and 10 misunderstood by recipients. Calculate the percentage misunderstood (%).",
          response: {
            type: "numeric",
            parts: [{ label: "Misunderstood (%)", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "Percentage = (part / whole) x 100",
              },
            ],
            steps: [
              {
                reasoning:
                  "Divide misunderstood messages by total messages sent.",
                working: "10 / 40 = 0.25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by 100 to express as a percentage.",
                working: "0.25 x 100 = 25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the percentage.",
                working: "25%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$25\\%$",
            commonErrors: ["Using 40/10 instead of 10/40."],
          },
        },
        {
          id: "bus-u3-comm-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two ways physical distance can act as a barrier to communication and how a business can reduce it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Physical barriers",
                statement:
                  "Distance limits face-to-face contact and rich non-verbal cues.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Distance limits face-to-face contact, so tone and non-verbal cues are lost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Written channels used instead are lean and easy to misread.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Video calls, clear written summaries and regular check-ins restore richness.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: matching the channel to the distance preserves understanding.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Distance removes non-verbal cues; richer channels and check-ins can compensate.",
            commonErrors: [
              "Listing barriers without explaining how to reduce them.",
            ],
          },
        },
        {
          id: "bus-u3-comm-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why feedback is important in the communication process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Feedback",
                statement:
                  "Feedback confirms the receiver understood the message correctly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Feedback confirms the receiver understood the message as intended.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It reveals errors early so they can be corrected before they spread.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It closes the communication loop, making communication two-way.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: without feedback, misunderstanding goes unnoticed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Feedback confirms understanding and closes the loop of communication.",
            commonErrors: [
              "Treating communication as one-way — feedback completes the loop.",
            ],
          },
        },
        {
          id: "bus-u3-comm-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Head office issues daily emails full of technical jargon about a new inventory system; regional staff complain they do not understand it.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two barriers to communication in this situation.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain one advantage of communicating this information face-to-face.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Recommend how head office should communicate the new system to staff.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Communication barriers",
                statement:
                  "Jargon, lean channels and no feedback block understanding.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Jargon creates a language barrier staff cannot understand.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Email is a lean channel for complex information with no feedback.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Face-to-face allows questions, tone and immediate clarification.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Concerns can be addressed on the spot, building trust and understanding.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Hold plain-language briefings with Q&A plus a written summary afterwards.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Practical, two-way recommendation clearly described.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Jargon and lean one-way email. (b) Rich channel allows questions and trust. (c) Briefings + written summary + feedback checks.",
            commonErrors: [
              "Recommending more emails rather than a richer channel.",
            ],
          },
        },
        {
          id: "bus-u3-comm-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two advantages of informal communication in a workplace.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Informal communication",
                statement:
                  "Informal channels spread information fast and build relationships.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It spreads information quickly and builds social relationships and morale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It lets staff share concerns and ideas freely, surfacing problems official channels miss.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Informal leaders can mobilise support informally.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: informal channels complement formal ones despite their risks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Informal communication is fast and builds relationships, but can distort information.",
            commonErrors: ["Claiming informal communication is only harmful."],
          },
        },
        {
          id: "bus-u3-comm-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For a complex and sensitive issue such as announcing redundancies, the richest communication method is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A notice board" },
              { id: "b", text: "A face-to-face meeting" },
              { id: "c", text: "A poster" },
              { id: "d", text: "An email" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rich vs lean channels",
                statement:
                  "Rich channels (face-to-face) suit complex, sensitive messages.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sensitive, complex news needs tone, questions and feedback — face-to-face.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** A face-to-face meeting",
            commonErrors: [
              "Choosing a lean channel like email for sensitive news.",
            ],
          },
        },
        {
          id: "bus-u3-comm-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In Tuckman's model, the stage where the group experiences conflict over roles and ideas is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forming" },
              { id: "b", text: "Performing" },
              { id: "c", text: "Storming" },
              { id: "d", text: "Norming" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Storming",
                statement:
                  "The stage of conflict over roles, ideas and leadership.",
              },
            ],
            steps: [
              {
                reasoning: "Conflict over roles and ideas defines storming.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Storming",
            commonErrors: [
              "Confusing storming (conflict) with norming (agreement).",
            ],
          },
        },
        {
          id: "bus-u3-comm-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A team holds 12 meetings each quarter, and each meeting lasts an average of 45 minutes. Calculate the total meeting time per quarter in hours.",
          response: {
            type: "numeric",
            parts: [
              { label: "Meeting hours per quarter", answer: 9, unit: "hours" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total meeting time",
                statement: "Meetings x minutes each, converted to hours",
              },
            ],
            steps: [
              {
                reasoning: "Calculate total minutes first.",
                working: "12 x 45 = 540 minutes",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert minutes to hours.",
                working: "540 / 60 = 9",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the answer in hours.",
                working: "9 hours",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$9$ hours",
            commonErrors: ["Forgetting to convert minutes into hours."],
          },
        },
        {
          id: "bus-u3-comm-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how high group cohesion can become a disadvantage for a team.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Groupthink",
                statement:
                  "Strong cohesion can discourage questioning and critical evaluation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strong cohesion can discourage members from questioning decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The team may fall into 'groupthink', ignoring warnings or better alternatives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This reduces creativity and critical evaluation of options.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: cohesion helps only if members still challenge ideas.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "High cohesion can produce groupthink, reducing critical thinking and creativity.",
            commonErrors: ["Assuming cohesion is always beneficial."],
          },
        },
        {
          id: "bus-u3-comm-q17",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Messages sent upwards reporting problems or suggestions to senior managers are called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Horizontal communication" },
              { id: "b", text: "Downward communication" },
              { id: "c", text: "Upward communication" },
              { id: "d", text: "Lateral communication" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Upward communication",
                statement:
                  "Messages flowing up the hierarchy, such as reports and feedback.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reporting upwards to senior managers is upward communication.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Upward communication",
            commonErrors: [
              "Confusing upward (to seniors) with downward (instructions).",
            ],
          },
        },
      ],
    },
    {
      id: "bus-u3-group",
      title: "Group behaviour and teams",
      skill:
        "Describe Tuckman's stages, group norms and roles, and compare formal and informal groups.",
      lesson: {
        sections: [
          {
            heading: "Stages of group development",
            body: "**Tuckman's model**: **forming** (members meet, polite, uncertain), **storming** (conflict over roles and ideas), **norming** (rules and cohesion develop), **performing** (the group works effectively), and sometimes **adjourning** (project ends). Managers can anticipate conflict in storming rather than be surprised by it.",
          },
          {
            heading: "Group norms, roles and cohesion",
            body: "**Group norms** are unwritten rules — punctuality, dress, effort — enforced by peer pressure. **Roles** describe what members do: task roles (leader, organiser, specialist) and maintenance roles (peace-maker, encourager). **Belbin's team roles** show balanced teams need diverse roles. High **cohesion** boosts morale and output but can create groupthink.",
          },
          {
            heading: "Formal and informal groups",
            body: "**Formal groups** are created by management (departments, project teams) with set objectives. **Informal groups** form naturally (friendships, interest groups) and satisfy social needs. Informal leaders can rival formal authority; wise managers work with informal networks rather than against them.",
          },
        ],
        keyFormulas: [
          {
            name: "Tuckman stages",
            statement: "Forming → storming → norming → performing → adjourning",
          },
          {
            name: "Belbin roles",
            statement:
              "Task roles + maintenance/people roles create balanced teams",
          },
        ],
        workedExample: {
          problem:
            "A new project team argues constantly in its second month. Using Tuckman, explain what is happening and what comes next.",
          solution:
            "The team is in storming — conflict over roles and ideas is normal. If managed well it moves to norming, where rules and trust develop, then performing.",
        },
      },
      questions: [
        {
          id: "bus-u3-grp-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The stage where group members establish rules and begin to cooperate is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Storming" },
              { id: "b", text: "Norming" },
              { id: "c", text: "Performing" },
              { id: "d", text: "Forming" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Norming",
                statement:
                  "Stage where the group settles into agreed rules and cooperation.",
              },
            ],
            steps: [
              {
                reasoning: "Rules and cooperation define norming.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Norming",
            commonErrors: [
              "Confusing storming (conflict) with norming (agreement).",
            ],
          },
        },
        {
          id: "bus-u3-grp-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An unwritten rule in a team that everyone must arrive on time is an example of a group:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Objective" },
              { id: "b", text: "Status" },
              { id: "c", text: "Role" },
              { id: "d", text: "Norm" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Group norm",
                statement:
                  "An unwritten rule of acceptable behaviour within a group.",
              },
            ],
            steps: [
              {
                reasoning: "Unwritten behavioural rules are norms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Norm",
            commonErrors: [
              "Confusing norms with formal policies — norms are unwritten.",
            ],
          },
        },
        {
          id: "bus-u3-grp-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a team made up entirely of 'plant' and 'shaper' roles (Belbin) might underperform.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Belbin balance",
                statement:
                  "Effective teams need a mix of task and people/maintenance roles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Plants generate ideas and shapers push them forward — both are task-oriented.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without co-ordinators, team-workers and implementers, ideas may not be organised or executed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lack of people-focused roles means poor communication and morale.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: role imbalance reduces team effectiveness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Task-heavy teams lack the co-ordination, implementation and people skills to succeed.",
            commonErrors: [
              "Assuming more creative roles always improve a team.",
            ],
          },
        },
        {
          id: "bus-u3-grp-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A manager forms a project team to redesign the company website within three months.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe the four stages the team will pass through (Tuckman).",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain two problems that might occur during the 'storming' stage.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate the advantage of the manager including informal group leaders in the project.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tuckman + informal leadership",
                statement:
                  "Groups develop through predictable stages; informal leaders influence outcomes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Forming: members meet and learn roles.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Storming: conflict over ideas; Norming: rules and trust.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Performing: effective collaboration on the project.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Disagreements over creative direction, roles or workload.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Possible cliques or resistance to the project.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "For: informal leaders carry peer influence and can mobilise support. Against: their goals may not match the project's.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Balanced judgement on involving informal leaders.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Forming, storming, norming, performing. (b) Role conflict, cliques, resistance. (c) Peer influence helps but goals may diverge.",
            commonErrors: [
              "Skipping the storming stage as 'bad' rather than a normal development phase.",
            ],
          },
        },
        {
          id: "bus-u3-grp-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Tuckman's model, the stage where a temporary group prepares to disband after completing its task is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Storming" },
              { id: "b", text: "Performing" },
              { id: "c", text: "Adjourning" },
              { id: "d", text: "Norming" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adjourning",
                statement:
                  "The final stage where a temporary group completes its task and disbands.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Disbanding after task completion is the adjourning stage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Adjourning",
            commonErrors: [
              "Forgetting that adjourning applies mainly to temporary groups.",
            ],
          },
        },
        {
          id: "bus-u3-grp-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A team member whose main contribution is settling arguments and maintaining morale is performing a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formal role" },
              { id: "b", text: "Task role" },
              { id: "c", text: "Maintenance (people) role" },
              { id: "d", text: "Leadership role" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Maintenance role",
                statement:
                  "People-focused roles such as peace-maker and encourager that support the group.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Settling disputes and supporting morale are maintenance roles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Maintenance (people) role",
            commonErrors: [
              "Confusing task roles (doing the work) with maintenance roles (supporting people).",
            ],
          },
        },
        {
          id: "bus-u3-grp-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a work team of 20 members, 14 fill task-oriented roles and 6 fill people-oriented roles. Calculate the percentage of members in people-oriented roles (%).",
          response: {
            type: "numeric",
            parts: [{ label: "People-oriented (%)", answer: 30, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "Percentage = (part / whole) x 100",
              },
            ],
            steps: [
              {
                reasoning: "Divide people-oriented members by total members.",
                working: "6 / 20 = 0.3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by 100 to express as a percentage.",
                working: "0.3 x 100 = 30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the percentage.",
                working: "30%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$30\\%$",
            commonErrors: ["Forgetting to multiply by 100 — giving 0.3."],
          },
        },
        {
          id: "bus-u3-grp-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A project team of 8 members holds weekly meetings lasting 2 hours each. Calculate the total team meeting time per week in hours.",
          response: {
            type: "numeric",
            parts: [
              { label: "Meeting hours per week", answer: 16, unit: "hours" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total meeting time",
                statement: "Members x hours per meeting per week",
              },
            ],
            steps: [
              {
                reasoning: "Multiply members by weekly meeting hours.",
                working: "8 x 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the result.",
                working: "16",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the answer in hours.",
                working: "16 hours",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$16$ hours",
            commonErrors: ["Multiplying by the wrong number of members."],
          },
        },
        {
          id: "bus-u3-grp-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two benefits of high group cohesion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Group cohesion",
                statement:
                  "Cohesion is the degree to which members feel united and committed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Members trust and support each other, raising morale and commitment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Coordinated effort improves productivity and quality of work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cohesion also helps the group withstand setbacks and conflict.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: cohesive groups often outperform fragmented ones.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cohesion raises morale, coordination and resilience within the group.",
            commonErrors: ["Listing benefits without explaining them."],
          },
        },
        {
          id: "bus-u3-grp-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two reasons why conflict commonly occurs during the 'storming' stage of group development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Storming",
                statement:
                  "Members compete for roles and clash over ideas while norms form.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Members compete for roles, status and influence within the new group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Different ideas and working styles clash as the group finds its methods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conflict is a normal part of establishing shared norms.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: storming conflict can be constructive if managed well.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Role competition and clashing ideas cause conflict during storming.",
            commonErrors: [
              "Treating storming conflict as abnormal rather than a development stage.",
            ],
          },
        },
        {
          id: "bus-u3-grp-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A sales team of 10 has split into two cliques that rarely cooperate or share information.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe the stage of group development this team is likely to be experiencing.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain two problems the cliques create.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Recommend two actions the manager could take to improve teamwork.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Group development and cliques",
                statement:
                  "Cliques signal unresolved conflict; shared goals need cooperation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Cliques suggest unresolved role and status conflict — the storming stage.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Without shared norms the team cannot reach norming or performing.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Cliques compete rather than cooperate, duplicating effort.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Key information stays trapped within cliques, weakening the whole team.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Set shared targets requiring cross-clique collaboration; rotate members between groups.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Practical actions clearly linked to rebuilding cooperation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Storming — cliques show unresolved conflict. (b) Duplication and hidden information. (c) Shared targets and rotation.",
            commonErrors: [
              "Ignoring the cliques rather than addressing the underlying conflict.",
            ],
          },
        },
        {
          id: "bus-u3-grp-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Unwritten rules of acceptable behaviour within a group, such as punctuality, are called group:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Statuses" },
              { id: "b", text: "Roles" },
              { id: "c", text: "Objectives" },
              { id: "d", text: "Norms" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Group norm",
                statement:
                  "An unwritten rule of acceptable behaviour enforced by peer pressure.",
              },
            ],
            steps: [
              {
                reasoning: "Unwritten behavioural rules are norms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Norms",
            commonErrors: ["Confusing norms (unwritten) with formal policies."],
          },
        },
        {
          id: "bus-u3-grp-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a 'people' (maintenance) role in Belbin's team role model?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Monitor-evaluator" },
              { id: "b", text: "Plant" },
              { id: "c", text: "Team-worker" },
              { id: "d", text: "Shaper" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Belbin team roles",
                statement:
                  "Teams need task roles plus people/maintenance roles such as team-worker.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Plant, shaper and monitor-evaluator are task roles; team-worker supports people.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Team-worker",
            commonErrors: [
              "Confusing task-oriented Belbin roles with people-oriented ones.",
            ],
          },
        },
        {
          id: "bus-u3-grp-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two differences between formal and informal groups in a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal vs informal groups",
                statement:
                  "Formal groups are created by management; informal groups form naturally.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Formal groups have set objectives and official authority; informal groups form around friendships.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Formal groups pursue organisational goals; informal groups satisfy social needs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Informal leaders influence through peer relationships rather than authority.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: managers should work with, not against, informal groups.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Formal groups are official with set goals; informal groups form naturally and satisfy social needs.",
            commonErrors: ["Treating informal groups as unimportant."],
          },
        },
        {
          id: "bus-u3-grp-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a team survey, 12 out of 16 members reported a strong sense of belonging to the group. Calculate the percentage cohesion score (%).",
          response: {
            type: "numeric",
            parts: [{ label: "Cohesion score (%)", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "Percentage = (part / whole) x 100",
              },
            ],
            steps: [
              {
                reasoning: "Divide members with belonging by total members.",
                working: "12 / 16 = 0.75",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by 100 to express as a percentage.",
                working: "0.75 x 100 = 75",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the score.",
                working: "75%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$75\\%$",
            commonErrors: ["Forgetting to multiply by 100 — giving 0.75."],
          },
        },
        {
          id: "bus-u3-grp-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate whether high group cohesion is always beneficial for a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cohesion evaluation",
                statement:
                  "Cohesion helps when aligned with organisational goals; it can harm via groupthink.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For: cohesion raises morale, coordination and output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: it can produce groupthink and resistance to new ideas or change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Effectiveness depends on whether the group's goals match the firm's.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: cohesion is beneficial when aligned with organisational objectives.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cohesion helps only when the group's goals align with the firm's; otherwise it breeds groupthink.",
            commonErrors: ["One-sided evaluation with no judgement."],
          },
        },
        {
          id: "bus-u3-grp-q17",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The stage in Tuckman's model where the group works effectively towards shared goals is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Storming" },
              { id: "b", text: "Performing" },
              { id: "c", text: "Adjourning" },
              { id: "d", text: "Forming" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Performing",
                statement:
                  "The stage where the group collaborates effectively towards its goals.",
              },
            ],
            steps: [
              {
                reasoning: "Effective coordinated work defines performing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Performing",
            commonErrors: ["Confusing performing with norming."],
          },
        },
      ],
    },
  ],
};
