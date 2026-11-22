import type { Lesson } from "../../../types.ts";

export const lesson114: Lesson = {
  id: "ciegp-u2-lesson-2-4",
  code: "2-4",
  title: "Persuasive Communication",
  goal: "I CAN communicate complex findings persuasively to different audiences.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457: persuasive communication",
    "0457: presentation",
  ],

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
      id: "ciegp-u2-s4-persuade",
      title: "Persuasive communication",
      skill: "Present findings persuasively at IGCSE GP level.",
      lesson: {
        sections: [
          {
            heading: "Persuasive structure",
            body: "Hook attention → establish credibility → present evidence → address counter-arguments → call to action. Use ethos (credibility), pathos (emotion), logos (logic) appropriately.",
          },
          {
            heading: "Audience adaptation",
            body: "Policymakers need data and feasibility; public needs stories and emotion; peers need relevance. Same findings, different framing. Visual aids make data memorable.",
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
          id: "ciegp-u2-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a call to action?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A research method",
              },
              {
                id: "b",
                text: "A type of chart",
              },
              {
                id: "c",
                text: "Request for audience to do something",
              },
              {
                id: "d",
                text: "A voting system",
              },
            ],
            correctChoiceId: "c",
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
          id: "ciegp-u2-pe-q2",
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
          id: "ciegp-u2-pe-q3",
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
          id: "ciegp-u2-pe-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define persuasion, rhetorical device, evidence-based argument, call to action, narrative, visual aid. (b) What is persuasive structure? (c) Explain ethos/pathos/logos with examples. (d) How do you adapt to audiences? (e) Why use visual aids? (f) What makes a strong opening hook? (g) Give an example of a persuasive statistic. (h) Write a 3-minute pitch outline for 'schools should teach financial literacy'.",
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
                reasoning: "(g) e.g. '70% can't budget' (if sourced).",
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
          id: "ciegp-u2-pe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which rhetorical appeal relies on the speaker's credibility?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Logos" },
              { id: "b", text: "Kairos" },
              { id: "c", text: "Pathos" },
              { id: "d", text: "Ethos" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethos",
                statement: "Credibility/trust appeal.",
              },
            ],
            steps: [
              {
                reasoning: "Ethos = credibility.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Ethos",
          },
        },
        {
          id: "ciegp-u2-pe-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A presenter supports a claim with statistics and logical reasoning. Which appeal is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethos" },
              { id: "b", text: "Pathos" },
              { id: "c", text: "Logos" },
              { id: "d", text: "None of these" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Logos",
                statement: "Logic and evidence appeal.",
              },
            ],
            steps: [
              {
                reasoning: "Logos = logic/data.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Logos",
          },
        },
        {
          id: "ciegp-u2-pe-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "When persuading government policymakers, what should lead your pitch?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience adaptation",
                statement: "Match content to audience needs.",
              },
            ],
            steps: [
              {
                reasoning: "Data, feasibility and costs matter most.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Emotion-heavy appeals fit this audience less.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Evidence, feasibility and cost data",
          },
        },
        {
          id: "ciegp-u2-pe-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 20-minute pitch allocates 8 minutes to evidence. What percentage of the pitch is evidence?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage (%)", answer: 40 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time allocation",
                statement: "Part/whole as percentage.",
              },
            ],
            steps: [
              {
                reasoning: "8/20 x 100 = 40%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "40%",
          },
        },
        {
          id: "ciegp-u2-pe-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a survey of 500 students, 72% support a school recycling programme. How many support it?",
          response: {
            type: "numeric",
            parts: [{ label: "Supporters", answer: 360 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Survey statistic",
                statement: "Percentage of sample.",
              },
            ],
            steps: [
              {
                reasoning: "0.72 x 500 = 360.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "360 students",
          },
        },
        {
          id: "ciegp-u2-pe-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how pathos (emotional appeal) can backfire in a persuasive presentation.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rhetorical balance",
                statement: "Over-emotion undermines credibility.",
              },
            ],
            steps: [
              {
                reasoning: "Excessive emotion can seem manipulative.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Audience may distrust speaker's objectivity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Balance pathos with logos/ethos.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Can seem manipulative; balance with logic and credibility",
          },
        },
        {
          id: "ciegp-u2-pe-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "How would you adapt the same climate-change findings for (a) government policymakers and (b) fellow students?",
          response: {
            type: "open",
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
                reasoning: "(a) Policy framing: costs, feasibility, data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Student framing: relevance, stories, actions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Same evidence, different emphasis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Data/costs for policymakers; relevance/stories for students",
          },
        },
        {
          id: "ciegp-u2-pe-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What makes a persuasive statistic convincing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is the biggest number available" },
              { id: "b", text: "It is from social media" },
              { id: "c", text: "It is repeated three times" },
              {
                id: "d",
                text: "It is accurate, sourced and relevant to the audience",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence quality",
                statement: "Accuracy + source + relevance.",
              },
            ],
            steps: [
              {
                reasoning: "Credible statistics need accuracy and sourcing.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Accurate, sourced, relevant",
          },
        },
        {
          id: "ciegp-u2-pe-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 15-minute pitch should spend 30% of time on evidence. How many minutes is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Minutes", answer: 4.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time allocation",
                statement: "Percentage of total time.",
              },
            ],
            steps: [
              {
                reasoning: "0.30 x 15 = 4.5 minutes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4.5 minutes",
          },
        },
        {
          id: "ciegp-u2-pe-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which opening hook is strongest for a pitch arguing schools should adopt a recycling programme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a",
                text: "Reading the entire project title aloud" },
              { id: "b",
                text: "'I will now begin my presentation.'" },
              { id: "c",
                text: "'Hello, my name is...'" },
              {
                id: "d",
                text: "A striking statistic: 'Our school throws away 40kg of recyclable waste weekly.'",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Hook",
                statement: "Attention-grabbing, relevant opening.",
              },
            ],
            steps: [
              {
                reasoning: "Striking relevant statistic hooks attention.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct option identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Striking statistic hook",
          },
        },
        {
          id: "ciegp-u2-pe-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write an outline for a 3-minute persuasive pitch to parents arguing schools should restrict smartphone use. Include structure and one rhetorical device per section.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Pitch structure",
                statement: "Hook → evidence → counter → CTA.",
              },
            ],
            steps: [
              {
                reasoning: "Hook: statistic or story on phone distraction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evidence: research on attention/learning; ethos via credentials.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Counter + pathos: address 'safety contact' concern.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CTA: support the policy vote; logos summary.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Structured pitch with hook, evidence, counter, CTA",
          },
        },
        {
          id: "ciegp-u2-pe-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An audience of 200 contains 60% parents and 40% students. If 75% of parents oppose the proposal and 80% of students support it, how many in each group hold those views?",
          response: {
            type: "numeric",
            parts: [
              { label: "Opposing parents", answer: 90 },
              { label: "Supporting students", answer: 64 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience analysis",
                statement: "Subgroup percentages of total.",
              },
            ],
            steps: [
              {
                reasoning: "Parents: 0.60 x 200 = 120; 0.75 x 120 = 90. Students: 80; 0.80 x 80 = 64.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both counts correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "90 parents oppose; 64 students support",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u2-pe-notes",
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
