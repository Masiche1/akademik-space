import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "asoc-u6-lesson-6-3",
  code: "6-3",
  title: "Media Effects and the New Media",
  goal: "I CAN compare models of media effects and evaluate the impact of new media.",
  standards: ["9699 P4: Media effects and new media"],
  vocabulary: [
    {
      term: "Hypodermic needle",
      definition:
        "Model: media injects messages directly into passive audiences.",
    },
    {
      term: "Uses and gratifications",
      definition: "Audience actively uses media for needs.",
    },
    {
      term: "Reception analysis",
      definition: "Audiences interpret media differently based on context.",
    },
    {
      term: "Cultivation theory",
      definition: "Heavy TV viewing shapes perceptions of reality.",
    },
    {
      term: "Social media",
      definition: "Interactive online platforms for user-generated content.",
    },
    {
      term: "Echo chamber",
      definition: "Online environment reinforcing existing beliefs.",
    },
  ],
  concepts: [
    {
      id: "asoc-u6-effects",
      title: "Models of media effects",
      skill:
        "Compare hypodermic, uses and gratifications, and reception analysis models.",
      lesson: {
        sections: [
          {
            heading: "Hypodermic needle model",
            body: "Early model: media directly injects messages into passive mass audience — 'magic bullet'. Assumes uniform response. Largely discredited but persists in moral panic thinking.",
          },
          {
            heading: "Audience-centred models",
            body: "Uses and gratifications: audiences actively choose media to fulfil needs (information, entertainment, identity). Reception analysis: audiences interpret messages differently based on social context — negotiated/oppositional readings.",
          },
          {
            heading: "Cultivation theory",
            body: "Gerbner: heavy TV viewers' perceptions of reality are 'cultivated' to match TV's distorted world — e.g., overestimating crime rates. Shows subtle, cumulative media influence.",
          },
        ],
        keyFormulas: [
          {
            name: "Media effects",
            statement:
              "Hypodermic=passive; U&G=active needs; Reception=interpretation; Cultivation=perception shift.",
          },
        ],
        workedExample: {
          problem: "How does cultivation theory explain media influence?",
          solution:
            "Heavy TV viewers internalise TV's distorted picture of reality over time — cumulative effect.",
        },
      },
      questions: [
        {
          id: "asoc-u6-ef-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the hypodermic needle model assume?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Media directly injects messages into passive audiences",
              },
              { id: "b", text: "Audiences actively interpret" },
              { id: "c", text: "Media has no effect" },
              { id: "d", text: "Only elites are affected" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypodermic",
                statement: "Direct injection into passive audience.",
              },
            ],
            steps: [
              {
                reasoning: "Hypodermic = passive/direct.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Media directly injects messages into passive audiences",
            commonErrors: ["Confusing with active models."],
          },
        },
        {
          id: "asoc-u6-ef-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the uses and gratifications approach?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "U&G",
                statement: "Audiences actively use media for needs.",
              },
            ],
            steps: [
              {
                reasoning: "Active audience choice.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Fulfils needs (info/entertainment).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Audiences actively choose media to fulfil their needs.",
            commonErrors: ["Saying media controls audience."],
          },
        },
        {
          id: "asoc-u6-ef-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare hypodermic and reception analysis models.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Effects models",
                statement: "Passive vs active interpretation.",
              },
            ],
            steps: [
              {
                reasoning: "Hypodermic: passive, uniform.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reception: active, varied readings.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Different audience assumptions.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Hypodermic=passive injection; reception=active varied interpretation.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "asoc-u6-ef-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Media effects models.",
          parts: [
            { label: "a", prompt: "Hypodermic model?", marks: 2 },
            { label: "b", prompt: "Uses & gratifications?", marks: 2 },
            { label: "c", prompt: "Reception analysis?", marks: 2 },
            { label: "d", prompt: "Cultivation theory?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media effects",
                statement: "Four models compared.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Direct injection.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Passive audience.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Active needs.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Audience chooses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Varied interpretations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Context matters.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Heavy viewing shapes reality.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Cumulative effect.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Example crime rates.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) hypodermic (b) U&G (c) reception (d) cultivation",
          },
        },
      ],
    },
    {
      id: "asoc-u6-new-media",
      title: "The New Media",
      skill: "Evaluate the impact of new media on society and behaviour.",
      lesson: {
        sections: [
          {
            heading: "New media characteristics",
            body: "Interactive, user-generated, global, instant. Social media, blogs, streaming, smartphones. Blurs producer/consumer — everyone can create content. Algorithm-driven content delivery.",
          },
          {
            heading: "Benefits",
            body: "Democratisation — voices previously excluded can be heard. Information access, social movements, community building, education. Challenged traditional gatekeepers.",
          },
          {
            heading: "Concerns",
            body: "Misinformation/echo chambers. Privacy issues. Cyberbullying, addiction. Algorithm bias. New forms of inequality (digital divide). Fake news and radicalisation concerns.",
          },
        ],
        keyFormulas: [
          {
            name: "New media",
            statement:
              "Interactive+user-generated+global; benefits=democratisation; concerns=misinformation/privacy.",
          },
        ],
        workedExample: {
          problem: "How does new media differ from traditional media?",
          solution:
            "Interactive, user-generated, algorithm-driven vs one-way broadcast; challenges gatekeepers but raises new issues.",
        },
      },
      questions: [
        {
          id: "asoc-u6-nm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a characteristic of new media?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interactive and user-generated" },
              { id: "b", text: "One-way broadcast only" },
              { id: "c", text: "Controlled by few owners" },
              { id: "d", text: "No audience participation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "New media",
                statement: "Interactive, user-generated.",
              },
            ],
            steps: [
              {
                reasoning: "New media = interactive.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Interactive and user-generated",
            commonErrors: ["Confusing with traditional."],
          },
        },
        {
          id: "asoc-u6-nm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an echo chamber?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Echo chamber",
                statement: "Online env reinforcing beliefs.",
              },
            ],
            steps: [
              {
                reasoning: "Reinforces existing views.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Limits exposure to others.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Online environment where users only encounter views they already agree with.",
            commonErrors: ["Saying it's about sound."],
          },
        },
        {
          id: "asoc-u6-nm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the impact of new media on democracy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "New media & democracy",
                statement: "Democratisation vs misinformation.",
              },
            ],
            steps: [
              {
                reasoning: "Amplifies excluded voices.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Enables mobilisation.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Misinformation/echo chambers.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Democratising but also enables misinformation — mixed impact.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "asoc-u6-nm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "New media.",
          parts: [
            { label: "a", prompt: "New media characteristics?", marks: 2 },
            { label: "b", prompt: "Two benefits?", marks: 2 },
            { label: "c", prompt: "Two concerns?", marks: 2 },
            { label: "d", prompt: "Digital divide?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "New media",
                statement: "Characteristics+benefits+concerns+divide.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Interactive/user-generated.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Global/instant.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Any two benefits.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Democratisation/mobilisation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any two concerns.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Misinformation/privacy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Unequal access.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Class/regional gaps.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Reinforces inequality.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) characteristics (b) benefits (c) concerns (d) divide",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u6-6-3-notes",
      title: "Media effects and new media — notes",
      summary:
        "Four effects models, new media benefits/concerns, digital divide.",
      sections: [
        {
          heading: "Effects",
          body: "Hypodermic=passive; U&G=active needs; reception=interpretation; cultivation=perception shift.",
        },
        {
          heading: "New media",
          body: "Interactive/user-generated; democratises but misinformation/privacy; digital divide persists.",
        },
      ],
    },
  ],
};
