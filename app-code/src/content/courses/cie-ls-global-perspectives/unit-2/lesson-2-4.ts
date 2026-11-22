import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "cilgp-u2-lesson-2-4",
  code: "2-4",
  title: "Persuasive Communication of Findings",
  goal: "I CAN communicate complex findings persuasively to different audiences.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129 strand: Communication",
    "Cambridge Global Perspectives skills: communication",
  ],
  stage: 9,
  vocabulary: [
    { term: "Persuasion", definition: "Convincing others of your position." },
    {
      term: "Rhetorical device",
      definition: "Technique for persuasive effect — ethos, pathos, logos.",
    },
    {
      term: "Evidence-based argument",
      definition: "Claims supported by data/facts.",
    },
    {
      term: "Call to action",
      definition: "Request for audience to do something.",
    },
    {
      term: "Narrative",
      definition: "Story structure making points memorable.",
    },
    { term: "Visual aid", definition: "Chart/image supporting spoken points." },
  ],
  concepts: [
    {
      id: "cilgp-u2-s4-persuade",
      title: "Persuasive communication",
      skill:
        "Present findings persuasively to varied audiences at Stage 9 level.",
      lesson: {
        sections: [
          {
            heading: "Persuasive structure",
            body: "Hook attention → establish credibility → present evidence → address counter-arguments → call to action. Use ethos (credibility), pathos (emotion), logos (logic) appropriately.",
          },
          {
            heading: "Audience adaptation",
            body: "Policymakers need data and feasibility; public needs stories and emotion; peers need relevance. Same findings, different framing. Visual aids (charts, images) make data memorable.",
          },
        ],
        keyFormulas: [
          {
            name: "Ethos/pathos/logos",
            statement: "credibility/emotion/logic",
          },
          { name: "Structure", statement: "hook→evidence→counter→CTA" },
        ],
        workedExample: {
          problem:
            "Persuade your school to adopt a recycling programme — structure your pitch.",
          solution:
            "Hook: 'We throw away X kg weekly.' Evidence: costs, environmental data. Counter: 'it's inconvenient' → solutions. CTA: 'vote for it Friday.'",
        },
      },
      questions: [
        {
          id: "cilgp-u2-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a call to action?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of chart",
              },
              {
                id: "b",
                text: "A voting system",
              },
              {
                id: "c",
                text: "A research method",
              },
              {
                id: "d",
                text: "Request for audience to do something",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Call to action",
                statement: "Requested response.",
              },
            ],
            steps: [
              {
                reasoning: "CTA tells audience what to do next.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Request for action",
          },
        },
        {
          id: "cilgp-u2-pe-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are ethos, pathos and logos? Give one example of each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rhetorical appeals",
                statement: "Credibility/emotion/logic.",
              },
            ],
            steps: [
              {
                reasoning: "Ethos=credibility, pathos=emotion, logos=logic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Examples for each.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Credibility/emotion/logic + examples",
          },
        },
        {
          id: "cilgp-u2-pe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should you address counter-arguments in a persuasive presentation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Counter-arguments",
                statement: "Strengthens persuasion.",
              },
            ],
            steps: [
              {
                reasoning: "Shows you've considered opposing views.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakens audience objections.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Builds credibility.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Strengthens credibility and position",
          },
        },
        {
          id: "cilgp-u2-pe-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define persuasion, rhetorical device, evidence-based argument, call to action, narrative, visual aid. (b) What is the persuasive structure? (c) Explain ethos/pathos/logos with examples. (d) How do you adapt to different audiences? (e) Why use visual aids? (f) What makes a strong opening hook? (g) Give an example of a persuasive statistic. (h) Write a 3-minute pitch outline for 'schools should teach financial literacy'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Persuasion",
                statement: "Structure, appeals, audience.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Hook→evidence→counter→CTA.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Credibility/emotion/logic explained.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Language/depth/examples adapted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Make data memorable/clear.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Surprising fact/question/story.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) e.g. '70% of adults can't budget' (if sourced).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid pitch outline.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Persuasive communication techniques.",
          },
        },
        {
          id: "cilgp-u2-pe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is ethos in persuasive communication?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Using colourful slides",
              },
              {
                id: "b",
                text: "Using emotional stories",
              },
              {
                id: "c",
                text: "Establishing the speaker's credibility and trustworthiness",
              },
              {
                id: "d",
                text: "Presenting logical arguments",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethos",
                statement: "Credibility appeal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ethos persuades through the speaker's authority and character.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Credibility and trustworthiness",
          },
        },
        {
          id: "cilgp-u2-pe-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 20-minute persuasive talk includes 5 charts used to support key claims. How many minutes does each chart effectively cover if time is shared equally?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
                unit: "minutes",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equal time",
                statement: "Total / number of items.",
              },
            ],
            steps: [
              {
                reasoning: "20 / 5 = 4 minutes per chart.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4 minutes",
          },
        },
        {
          id: "cilgp-u2-pe-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give one ethical way to use emotion (pathos) in a persuasive presentation about a global issue.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pathos",
                statement: "Emotional appeal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "e.g. tell a real person's story linked to verified evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Emotion paired with facts, not manipulation or exaggeration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Real story + verified evidence",
          },
        },
        {
          id: "cilgp-u2-pe-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which opening is the strongest hook for a talk on plastic pollution?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "'Every minute, a truckload of plastic enters the ocean.'",
              },
              {
                id: "b",
                text: "'Let me start with my name.'",
              },
              {
                id: "c",
                text: "'Plastic is a material.'",
              },
              {
                id: "d",
                text: "'Today I will talk about plastic.'",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Hook",
                statement: "Surprising fact/question/story.",
              },
            ],
            steps: [
              {
                reasoning: "A striking statistic grabs attention immediately.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Striking statistic",
          },
        },
        {
          id: "cilgp-u2-pe-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A persuasive pitch lasts 5 minutes. The evidence section takes 40% of the time. How many minutes is the evidence section?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 2,
                unit: "minutes",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage of time",
                statement: "Total x fraction.",
              },
            ],
            steps: [
              {
                reasoning: "0.4 x 5 = 2 minutes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 2 minutes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2 minutes",
          },
        },
        {
          id: "cilgp-u2-pe-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this weak call to action into a strong one: 'Think about recycling more.'",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Call to action",
                statement: "Specific, urgent request.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identifies weakness: vague, no specific action or urgency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adds a specific action, e.g. 'bring a reusable bottle tomorrow'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adds urgency or benefit, e.g. 'and help cut our school's waste by 10% this term'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Specific action + urgency/benefit",
          },
        },
        {
          id: "cilgp-u2-pe-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should you frame findings differently for policymakers than for the general public?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The facts change depending on the audience",
              },
              {
                id: "b",
                text: "Only one audience can be persuaded",
              },
              {
                id: "c",
                text: "Policymakers need data and feasibility; the public responds to stories and emotion",
              },
              {
                id: "d",
                text: "Policymakers cannot understand stories",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience adaptation",
                statement: "Same findings, different framing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Different audiences value different evidence types.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Data for policymakers; stories for public",
          },
        },
        {
          id: "cilgp-u2-pe-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A persuasive argument has 3 main claims. Each claim needs 2 pieces of supporting evidence. How many pieces of evidence are needed in total?",
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
                kind: "method",
                name: "Evidence count",
                statement: "Claims x evidence per claim.",
              },
            ],
            steps: [
              {
                reasoning: "3 x 2 = 6 pieces of evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 6.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cilgp-u2-pe-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Classify these persuasive techniques as ethos, pathos or logos: (a) 'As a doctor, I can tell you...'; (b) 'Imagine a child drinking dirty water every day'; (c) 'The data shows a 40% reduction'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rhetorical appeals",
                statement: "Ethos/pathos/logos.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Ethos — appeals to authority/credibility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Pathos — emotional appeal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Logos — logical/data-based appeal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ethos, pathos, logos",
          },
        },
        {
          id: "cilgp-u2-pe-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What makes a visual aid effective in a persuasive presentation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It uses every colour available",
              },
              {
                id: "b",
                text: "It is simple, clearly labelled and directly supports a spoken point",
              },
              {
                id: "c",
                text: "It contains as much text as possible",
              },
              {
                id: "d",
                text: "It replaces the need to speak",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Visual aids",
                statement: "Support, don't distract.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Effective visuals are simple and reinforce the message.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Simple, labelled, supports the point",
          },
        },
        {
          id: "cilgp-u2-pe-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 15-minute persuasive speech allocates 10% to the hook, 50% to evidence, 20% to counter-arguments and 20% to the call to action. How many minutes does the hook get?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1.5,
                unit: "minutes",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Time allocation",
                statement: "Total x percentage.",
              },
            ],
            steps: [
              {
                reasoning: "10% of 15 = 1.5 minutes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Percentages sum to 100% — the allocation is complete and consistent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 1.5 minutes (90 seconds).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1.5 minutes",
          },
        },
        {
          id: "cilgp-u2-pe-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a persuasive presentation outline for 'schools should start the day later': (a) your hook, (b) the main evidence type, (c) one counter-argument to address, (d) your call to action.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Persuasion",
                statement: "Hook, evidence, counter, CTA.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Valid hook, e.g. 'Teenagers' body clocks make 8am classes biologically unfair.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Evidence-based, e.g. sleep studies, attainment data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Valid counter, e.g. 'afterschool activities clash' with a response.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Specific CTA, e.g. 'sign the petition / ask the principal for a trial term.'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hook, evidence, counter-argument and CTA",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u2-pe-notes",
      title: "Persuasion — notes",
      summary:
        "Hook→evidence→counter→CTA; use ethos/pathos/logos; adapt to audience.",
      sections: [
        {
          heading: "Key idea",
          body: "Persuasion combines logic, emotion and credibility.",
        },
        {
          heading: "Audience",
          body: "Same data, different framing for different listeners.",
        },
      ],
    },
  ],
};
