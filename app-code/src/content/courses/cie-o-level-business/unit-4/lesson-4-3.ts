import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "olbus-u4-lesson-4-3",
  code: "4-3",
  title: "Communication and Teamwork",
  goal: "I CAN explain communication methods and the importance of teamwork.",
  standards: ["7100 4.3"],
  vocabulary: [
    { term: "Communication", definition: "Exchange of information between people." },
    { term: "Formal communication", definition: "Communication through official channels (reports, meetings)." },
    { term: "Informal communication", definition: "Casual communication (chat, grapevine)." },
    { term: "Grapevine", definition: "Informal network of rumours and news." },
    { term: "Teamwork", definition: "People working together towards shared goals." },
    { term: "Conflict", definition: "Disagreement between individuals or groups." },
  ],
  concepts: [
    {
      id: "olbus-u4-communication",
      title: "Communication in business",
      skill: "Compare formal and informal communication and their uses.",
      lesson: {
        sections: [
          { heading: "Formal communication", body: "Official channels: reports, emails, meetings, notices. Clear, documented, but can be slow and bureaucratic." },
          { heading: "Informal communication", body: "Grapevine, casual chat, social media. Fast and builds relationships but can spread rumours and inaccuracies." },
          { heading: "Barriers", body: "Language differences, noise, poor listening, information overload, cultural differences can all block effective communication." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Management announces a restructure via official email and notice board. Which type?",
          solution: "Formal communication — official channels for important announcements.",
        },
      },
      questions: [
        {
          id: "olbus-u4-comm-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Formal communication includes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reports and official meetings" }, { id: "b", text: "Gossip" }, { id: "c", text: "Casual chat" }, { id: "d", text: "Rumours" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Formal communication", statement: "Official channels." }], steps: [{ reasoning: "Official methods.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-comm-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two barriers to communication.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Communication barriers", statement: "Obstacles." }], steps: [
            { reasoning: "Language, noise, poor listening, overload, culture — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: language, noise, poor listening, overload, cultural differences." },
        },
        {
          id: "olbus-u4-comm-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why informal communication (grapevine) can be problematic.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Grapevine", statement: "Risks of informal." }], steps: [
            { reasoning: "Rumours spread quickly and inaccurately.", marks: 1, markCode: "AO2" },
            { reasoning: "Can cause anxiety and conflict.", marks: 1, markCode: "AO2" },
            { reasoning: "Uncontrolled and unverified.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Grapevine spreads unverified rumours quickly, causing anxiety and conflict." },
        },
        {
          id: "olbus-u4-comm-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Communication review.",
          parts: [
            { label: "a", prompt: "Formal vs informal communication?", marks: 2 },
            { label: "b", prompt: "Name two formal methods.", marks: 2 },
            { label: "c", prompt: "Name two barriers.", marks: 2 },
            { label: "d", prompt: "How can businesses reduce communication barriers?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Communication", statement: "Types, barriers, solutions." },
          ], steps: [
            { part: "a", reasoning: "Formal=official; informal=casual/grapevine.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Reports, meetings, emails, notices — any two.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Two barriers.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear messages, training, feedback, multiple channels.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Practical solutions.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) formal/informal (b) 2 methods (c) 2 barriers (d) clarity+feedback" },
        },
      ],
    },
    {
      id: "olbus-u4-teamwork",
      title: "Teamwork and Conflict",
      skill: "Explain the benefits of teamwork and how to manage conflict.",
      lesson: {
        sections: [
          { heading: "Benefits of teamwork", body: "Shared ideas, division of labour, mutual support, higher morale, better problem-solving. Teams achieve more than individuals." },
          { heading: "Building teams", body: "Clear goals, defined roles, good communication, trust, appropriate leadership style, recognition of contributions." },
          { heading: "Managing conflict", body: "Conflict is normal — address early, listen to both sides, find common ground, involve mediator if needed, focus on issues not personalities." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Two team members disagree on project approach. How should a manager respond?",
          solution: "Listen to both, identify common goals, facilitate discussion, and agree on a solution together.",
        },
      },
      questions: [
        {
          id: "olbus-u4-tw-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Teamwork benefits include…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Shared ideas and higher morale" }, { id: "b", text: "Less work for everyone" }, { id: "c", text: "No need for management" }, { id: "d", text: "Lower quality" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Teamwork", statement: "Collaboration benefits." }], steps: [{ reasoning: "Shared effort/ideas.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-tw-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two ways to build effective teams.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Team building", statement: "Methods." }], steps: [
            { reasoning: "Clear goals, defined roles, communication, trust — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: clear goals, roles, communication, trust, recognition." },
        },
        {
          id: "olbus-u4-tw-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how conflict can be managed in a team.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Conflict management", statement: "Resolution." }], steps: [
            { reasoning: "Address early before escalation.", marks: 1, markCode: "AO2" },
            { reasoning: "Listen to both sides, focus on issues.", marks: 1, markCode: "AO2" },
            { reasoning: "Find common ground / compromise.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Address early, listen, focus on issues, find compromise." },
        },
        {
          id: "olbus-u4-tw-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Teamwork review.",
          parts: [
            { label: "a", prompt: "Two benefits of teamwork?", marks: 2 },
            { label: "b", prompt: "Two ways to build teams?", marks: 2 },
            { label: "c", prompt: "Is conflict always bad?", marks: 2 },
            { label: "d", prompt: "Three conflict resolution steps?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Teamwork", statement: "Benefits, building, conflict." },
          ], steps: [
            { part: "a", reasoning: "Shared ideas; morale/support.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Two benefits.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Clear goals; roles/trust/communication.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two methods.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "No — can spark innovation if managed.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Nuance shown.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Listen, address early, compromise/mediation.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Second step.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Third step.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 2 benefits (b) 2 methods (c) managed=constructive (d) 3 steps" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u4-4-3-notes", title: "Communication and teamwork — notes", summary: "Formal/informal communication, barriers and team building.",
      sections: [
        { heading: "Communication", body: "Formal = official channels; informal = grapevine (fast but risky). Barriers: language, noise, overload." },
        { heading: "Teamwork", body: "Clear goals, roles, trust; manage conflict by listening and compromising." },
      ] },
  ],
};
