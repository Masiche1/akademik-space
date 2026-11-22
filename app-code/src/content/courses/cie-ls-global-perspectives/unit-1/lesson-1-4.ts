import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "cilgp-u1-lesson-1-4",
  code: "1-4",
  title: "Collaboration and Communication",
  goal: "I CAN work collaboratively on global issues and communicate findings clearly.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129 strand: Collaboration",
    "Cambridge Global Perspectives skills: collaboration and communication",
  ],

  vocabulary: [
    {
      term: "Collaboration",
      definition: "Working together toward shared goals.",
    },
    { term: "Communication", definition: "Exchanging information clearly." },
    { term: "Audience", definition: "Who will receive your message." },
    { term: "Presentation", definition: "Structured delivery of findings." },
    {
      term: "Active listening",
      definition: "Fully attending to others' contributions.",
    },
    { term: "Consensus", definition: "General agreement among group members." },
  ],
  concepts: [
    {
      id: "cilgp-u1-s4-collab",
      title: "Collaboration and communication",
      skill:
        "Contribute effectively to group work and present findings at lower secondary level.",
      lesson: {
        sections: [
          {
            heading: "Effective collaboration",
            body: "Define roles, share tasks fairly, listen actively, resolve disagreements respectfully, and build on each other's ideas. Good teams communicate early and often.",
          },
          {
            heading: "Clear communication",
            body: "Adapt to your audience: peers need context, teachers need rigour, public needs accessible language. Structure presentations: hook → evidence → analysis → conclusion.",
          },
        ],
        keyFormulas: [
          {
            name: "Collaboration",
            statement: "roles + listening + shared goals",
          },
          {
            name: "Presentation",
            statement: "hook→evidence→analysis→conclusion",
          },
        ],
        workedExample: {
          problem:
            "Your team disagrees on which solution to present. How do you reach consensus?",
          solution:
            "Each member presents their case with evidence → group evaluates against agreed criteria → choose best-supported option → document reasoning.",
        },
      },
      questions: [
        {
          id: "cilgp-u1-cc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is active listening?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Talking louder",
              },
              {
                id: "b",
                text: "Fully attending to others' contributions",
              },
              {
                id: "c",
                text: "Taking notes only",
              },
              {
                id: "d",
                text: "Agreeing with everything",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Active listening",
                statement: "Full attention.",
              },
            ],
            steps: [
              {
                reasoning: "Active listening = engaged, not just hearing.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Fully attentive listening",
          },
        },
        {
          id: "cilgp-u1-cc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two ways to adapt communication to your audience.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience adaptation",
                statement: "Match message to receiver.",
              },
            ],
            steps: [
              {
                reasoning:
                  "e.g. simpler language for public; technical detail for experts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adjust depth/examples for audience needs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Language level + detail adapted",
          },
        },
        {
          id: "cilgp-u1-cc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Your group is researching 'online privacy'. How would you divide the work and communicate progress?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Collaboration",
                statement: "Roles and communication.",
              },
            ],
            steps: [
              {
                reasoning: "Assign roles: sources, analysis, presentation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Regular check-ins/share findings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Coherent combined output.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Roles + regular updates",
          },
        },
        {
          id: "cilgp-u1-cc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define collaboration, communication, audience, presentation, active listening, consensus. (b) What makes a good team? (c) How do you handle disagreement in a group? (d) What is a presentation structure? (e) Why adapt to audience? (f) What is netiquette in online collaboration? (g) How do you ensure everyone's voice is heard? (h) Plan a 10-minute presentation on 'should homework be banned?'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Collaboration",
                statement: "Teamwork and presentation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Roles, trust, communication.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Evidence-based respectful discussion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Hook→evidence→analysis→conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Match language/depth to receivers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Polite, clear online behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Rotate roles, invite quiet members.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid presentation plan.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Collaboration and communication skills.",
          },
        },
        {
          id: "cilgp-u1-cc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is consensus in group work?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The loudest member's opinion",
              },
              {
                id: "b",
                text: "A type of presentation",
              },
              {
                id: "c",
                text: "A vote with one winner",
              },
              {
                id: "d",
                text: "General agreement among group members",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Consensus",
                statement: "General group agreement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Consensus means the group broadly agrees, not just a majority vote.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "General agreement among members",
          },
        },
        {
          id: "cilgp-u1-cc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A team of 6 students must make 18 presentation slides. If the work is shared equally, how many slides does each student make?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equal sharing",
                statement: "Total / people.",
              },
            ],
            steps: [
              {
                reasoning: "18 / 6 = 3 slides each.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cilgp-u1-cc-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two features of a strong opening (hook) in a presentation.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Presentation hook",
                statement: "Attention-grabbing opening.",
              },
            ],
            steps: [
              {
                reasoning:
                  "e.g. surprising statistic, question, story or bold claim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Second valid hook feature, e.g. relevance to audience.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. surprising fact + audience relevance",
          },
        },
        {
          id: "cilgp-u1-cc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the correct order of the presentation structure taught in this course?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Hook -> evidence -> analysis -> conclusion",
              },
              {
                id: "b",
                text: "Analysis -> conclusion -> hook -> evidence",
              },
              {
                id: "c",
                text: "Conclusion -> hook -> evidence -> analysis",
              },
              {
                id: "d",
                text: "Evidence -> hook -> conclusion -> analysis",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Presentation structure",
                statement: "Hook, evidence, analysis, conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Structure starts with a hook and ends with a conclusion.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Hook -> evidence -> analysis -> conclusion",
          },
        },
        {
          id: "cilgp-u1-cc-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A presentation lasts 8 minutes. The hook should take about 10% of the time. How many seconds is that?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 48,
                unit: "seconds",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Time allocation",
                statement: "Total x percentage, convert units.",
              },
            ],
            steps: [
              {
                reasoning: "10% of 8 minutes = 0.8 minutes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "0.8 x 60 = 48 seconds.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "48 seconds",
          },
        },
        {
          id: "cilgp-u1-cc-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A teammate has missed two research deadlines. Describe two respectful, constructive ways to address this in your group.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conflict resolution",
                statement: "Respectful problem-solving.",
              },
            ],
            steps: [
              {
                reasoning:
                  "e.g. private check-in asking what support they need.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. redistribute tasks or agree new deadlines together.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Keeps respect and shared goal rather than blaming publicly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Supportive check-in + revised plan",
          },
        },
        {
          id: "cilgp-u1-cc-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should you adapt your language when presenting findings to a younger audience?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It makes the presentation shorter",
              },
              {
                id: "b",
                text: "Younger audiences need simpler vocabulary and clearer examples",
              },
              {
                id: "c",
                text: "It is a legal requirement",
              },
              {
                id: "d",
                text: "It removes the need for evidence",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience adaptation",
                statement: "Match language to audience.",
              },
            ],
            steps: [
              {
                reasoning: "Simpler language ensures comprehension.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Simpler language for comprehension",
          },
        },
        {
          id: "cilgp-u1-cc-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A group spends 40 minutes on a meeting: 60% planning and the rest reviewing progress. How many minutes are spent reviewing?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 16,
                unit: "minutes",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Remaining share",
                statement: "Total minus allocated percentage.",
              },
            ],
            steps: [
              {
                reasoning: "Planning = 60% of 40 = 24 min; review = 40 - 24.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "40 - 24 = 16 minutes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16 minutes",
          },
        },
        {
          id: "cilgp-u1-cc-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how 'communicating early and often' helps a group avoid problems in a research project.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Team communication",
                statement: "Early, frequent updates.",
              },
            ],
            steps: [
              {
                reasoning: "Problems surface early while still fixable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Members avoid duplicating work or drifting from the shared goal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Builds trust and keeps the final output coherent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Early issues surface; shared direction maintained",
          },
        },
        {
          id: "cilgp-u1-cc-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which best describes 'netiquette' in online group work?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A research survey method",
              },
              {
                id: "b",
                text: "A type of hardware",
              },
              {
                id: "c",
                text: "Polite and respectful online communication",
              },
              {
                id: "d",
                text: "A grading system for essays",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Netiquette",
                statement: "Online communication manners.",
              },
            ],
            steps: [
              {
                reasoning: "Netiquette = polite, clear online behaviour.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Polite online communication",
          },
        },
        {
          id: "cilgp-u1-cc-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A 20-minute presentation has 4 equal sections: hook, evidence, analysis, conclusion. How many minutes does each section get?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 5,
                unit: "minutes",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equal time split",
                statement: "Total / number of sections.",
              },
            ],
            steps: [
              {
                reasoning: "20 / 4 = 5 minutes per section.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 5 minutes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5 minutes",
          },
        },
        {
          id: "cilgp-u1-cc-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Your group must debate 'should schools ban phones?'. Plan the collaboration: (a) two roles to assign, (b) one way to ensure quieter members contribute, (c) how disagreements should be resolved, (d) the structure of the final presentation.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Collaboration",
                statement: "Roles, inclusion, resolution, structure.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Two valid roles, e.g. researcher and speaker.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Valid inclusion method, e.g. round-robin speaking or paired tasks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Evidence-based resolution via agreed criteria.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Hook -> evidence -> analysis -> conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Roles, inclusion, resolution and presentation plan",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u1-cc-notes",
      title: "Collaboration — notes",
      summary:
        "Teams need roles, listening and shared goals; presentations need structure and audience adaptation.",
      sections: [
        {
          heading: "Key idea",
          body: "Global Perspectives is inherently collaborative — skills matter.",
        },
        {
          heading: "Communication",
          body: "Adapt to audience; structure: hook→evidence→analysis→conclusion.",
        },
      ],
    },
  ],
};
