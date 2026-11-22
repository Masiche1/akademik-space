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
              { id: "a", text: "Media has no effect" },
              { id: "b", text: "Audiences actively interpret" },
              {
                id: "c",
                text: "Media directly injects messages into passive audiences",
              },
              { id: "d", text: "Only elites are affected" },
            ],
            correctChoiceId: "c",
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
        {
          id: "asoc-u6-ef-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The hypodermic needle model is also known as the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Agenda-setting theory" },
              { id: "b", text: "Two-step flow" },
              { id: "c", text: "Cultivation theory" },
              { id: "d", text: "Magic bullet theory" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypodermic",
                statement: "Also called magic bullet.",
              },
            ],
            steps: [
              {
                reasoning: "Hypodermic = magic bullet.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Magic bullet theory",
            commonErrors: ["Confusing with other models."],
          },
        },
        {
          id: "asoc-u6-ef-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The uses and gratifications approach sees audiences as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Active choosers of media" },
              { id: "b", text: "Unaffected by media" },
              { id: "c", text: "Passive receivers" },
              { id: "d", text: "Completely controlled" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "U&G",
                statement: "Active audience.",
              },
            ],
            steps: [
              {
                reasoning: "U&G = active choice.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Active choosers of media",
            commonErrors: ["Thinking media controls."],
          },
        },
        {
          id: "asoc-u6-ef-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Reception analysis argues audiences interpret media messages:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Never at all" },
              { id: "b", text: "Only as intended by producers" },
              { id: "c", text: "Differently depending on social context" },
              { id: "d", text: "All in the same way" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reception",
                statement: "Varied interpretations.",
              },
            ],
            steps: [
              {
                reasoning: "Reception = context-dependent readings.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Differently depending on social context",
            commonErrors: ["Assuming uniform response."],
          },
        },
        {
          id: "asoc-u6-ef-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Cultivation theory was developed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gerbner" },
              { id: "b", text: "Karl Marx" },
              { id: "c", text: "Herman and Chomsky" },
              { id: "d", text: "Stanley Cohen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gerbner",
                statement: "Cultivation theory.",
              },
            ],
            steps: [
              {
                reasoning: "Gerbner = cultivation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Gerbner",
            commonErrors: ["Confusing with other theorists."],
          },
        },
        {
          id: "asoc-u6-ef-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'negotiated reading' means the audience:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Partially accepts and partially resists the message" },
              { id: "b", text: "Ignores the media" },
              { id: "c", text: "Rejects the message entirely" },
              { id: "d", text: "Accepts the message completely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Negotiated reading",
                statement: "Partial acceptance/resistance.",
              },
            ],
            steps: [
              {
                reasoning: "Negotiated = mixed reading.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Partially accepts and partially resists the message",
            commonErrors: ["Confusing with oppositional."],
          },
        },
        {
          id: "asoc-u6-ef-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 400 heavy TV viewers, 65% overestimated local crime rates. How many viewers was this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 260 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "65% of 400 = 0.65 x 400.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "= 260.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "260",
            commonErrors: ["Using the wrong base."],
          },
        },
        {
          id: "asoc-u6-ef-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Digital advertising spend rose from $5 billion to $6.5 billion. What was the percentage increase?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage increase",
                statement: "Change/original x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Increase = 6.5 - 5 = 1.5.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "1.5/5 x 100 = 30%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "30",
            commonErrors: ["Dividing by the new value."],
          },
        },
        {
          id: "asoc-u6-ef-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 800 media users surveyed, 480 said they choose media mainly for entertainment. What percentage was this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              { reasoning: "480/800 = 0.6.", marks: 1, markCode: "AO1" },
              {
                reasoning: "0.6 x 100 = 60%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "60",
            commonErrors: ["Inverting the fraction."],
          },
        },
        {
          id: "asoc-u6-ef-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Heavy TV viewers estimated the local crime rate at 30% when the actual rate was 10%. By how many percentage points did they overestimate it?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage points",
                statement: "Estimated - actual.",
              },
            ],
            steps: [
              { reasoning: "30 - 10 = 20.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Overestimate = 20 percentage points.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "20",
            commonErrors: ["Calculating a percentage change."],
          },
        },
        {
          id: "asoc-u6-ef-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the uses and gratifications approach to media effects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "U&G",
                statement: "Active audience needs.",
              },
            ],
            steps: [
              {
                reasoning: "Audience actively chooses media.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Fulfils needs: info, entertainment, identity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Contrast with passive models.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Audiences actively select media to fulfil their needs rather than being passively influenced.",
            commonErrors: ["Describing hypodermic instead."],
          },
        },
        {
          id: "asoc-u6-ef-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate cultivation theory as an explanation of media effects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cultivation",
                statement: "Heavy viewing shapes reality.",
              },
            ],
            steps: [
              {
                reasoning: "Heavy viewers internalise TV's distorted world.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Example: overestimating crime.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cumulative/subtle effect hard to prove.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Cultivation explains subtle cumulative effects but causation is difficult to establish.",
            commonErrors: ["Description without evaluation."],
          },
        },
        {
          id: "asoc-u6-ef-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Models of media effects — extended response.",
          parts: [
            {
              label: "a",
              prompt: "Explain the hypodermic needle model.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain uses and gratifications.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain reception analysis.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Evaluate the strengths and weaknesses of these models.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Effects models",
                statement: "Four models + evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Direct injection/passive audience.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Magic bullet assumption.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Active needs/choice.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Needs fulfilled.",
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
                reasoning: "Hypodermic discredited.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Active models more convincing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) hypodermic (b) U&G (c) reception (d) evaluation",
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
              { id: "a", text: "One-way broadcast only" },
              { id: "b", text: "Interactive and user-generated" },
              { id: "c", text: "Controlled by few owners" },
              { id: "d", text: "No audience participation" },
            ],
            correctChoiceId: "b",
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
        {
          id: "asoc-u6-nm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Social media is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Printed newspapers online" },
              { id: "b", text: "Radio streaming services" },
              { id: "c", text: "Interactive online platforms for user-generated content" },
              { id: "d", text: "One-way television broadcasts" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social media",
                statement: "Interactive, user-generated.",
              },
            ],
            steps: [
              {
                reasoning: "Social media = interactive platforms.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Interactive online platforms for user-generated content",
            commonErrors: ["Confusing with traditional media."],
          },
        },
        {
          id: "asoc-u6-nm-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "An echo chamber primarily reinforces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diverse opinions" },
              { id: "b", text: "Official news only" },
              { id: "c", text: "Advertising content" },
              { id: "d", text: "Users' existing beliefs" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Echo chamber",
                statement: "Reinforces existing views.",
              },
            ],
            steps: [
              {
                reasoning: "Echo chamber = belief reinforcement.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Users' existing beliefs",
            commonErrors: ["Thinking it broadens views."],
          },
        },
        {
          id: "asoc-u6-nm-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The digital divide refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unequal access to digital technology and the internet" },
              { id: "b", text: "Division between phone brands" },
              { id: "c", text: "Digital vs printed newspapers" },
              { id: "d", text: "A gap in television channels" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital divide",
                statement: "Unequal tech access.",
              },
            ],
            steps: [
              {
                reasoning: "Divide = unequal access.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Unequal access to digital technology and the internet",
            commonErrors: ["Thinking it's about content."],
          },
        },
        {
          id: "asoc-u6-nm-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Algorithm-driven content delivery can lead to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guaranteed diverse viewpoints" },
              { id: "b", text: "Complete information access" },
              { id: "c", text: "Filter bubbles and echo chambers" },
              { id: "d", text: "Reduced platform control" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Algorithms",
                statement: "Can narrow exposure.",
              },
            ],
            steps: [
              {
                reasoning: "Algorithms personalise → bubbles.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Filter bubbles and echo chambers",
            commonErrors: ["Assuming algorithms broaden views."],
          },
        },
        {
          id: "asoc-u6-nm-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The key difference between new and traditional media is that new media is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Controlled by few owners only" },
              { id: "b", text: "Interactive and user-generated" },
              { id: "c", text: "One-way broadcast" },
              { id: "d", text: "Printed on paper" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "New vs traditional",
                statement: "Interactive vs one-way.",
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
          id: "asoc-u6-nm-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 500 teenagers, 80% used social media daily. How many teenagers was this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 400 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "80% of 500 = 0.8 x 500.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "= 400.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "400",
            commonErrors: ["Forgetting decimal conversion."],
          },
        },
        {
          id: "asoc-u6-nm-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Reports of online misinformation rose from 2,000 to 2,600 in a year. What was the percentage increase?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage increase",
                statement: "Change/original x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Increase = 2600 - 2000 = 600.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "600/2000 x 100 = 30%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "30",
            commonErrors: ["Dividing by the new value."],
          },
        },
        {
          id: "asoc-u6-nm-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 1,000 social media users surveyed, 150 reported experiencing cyberbullying. What percentage was this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              { reasoning: "150/1000 = 0.15.", marks: 1, markCode: "AO1" },
              {
                reasoning: "0.15 x 100 = 15%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "15",
            commonErrors: ["Inverting the fraction."],
          },
        },
        {
          id: "asoc-u6-nm-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Internet access is 70% in urban areas but only 30% in rural areas. In a rural population of 2 million, how many people lack access?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1400000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "70% have access → 30% lack.",
              },
            ],
            steps: [
              {
                reasoning: "30% of 2,000,000 = 600,000 have access.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "2,000,000 - 600,000 = 1,400,000 lack access.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "1400000",
            commonErrors: ["Answering those WITH access."],
          },
        },
        {
          id: "asoc-u6-nm-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two benefits of new media for society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "New media benefits",
                statement: "Democratisation, access, mobilisation.",
              },
            ],
            steps: [
              {
                reasoning: "Amplifies excluded voices.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Enables social movements/education.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Challenges traditional gatekeepers.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "New media democratises voice, enables mobilisation and improves information access.",
            commonErrors: ["Listing concerns instead."],
          },
        },
        {
          id: "asoc-u6-nm-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the impact of social media on political participation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social media & politics",
                statement: "Mobilisation vs misinformation.",
              },
            ],
            steps: [
              {
                reasoning: "Enables mobilisation and activism.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Gives voice to marginalised groups.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Misinformation/echo chambers distort debate.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Social media boosts participation but also spreads misinformation — mixed impact.",
            commonErrors: ["One-sided answer."],
          },
        },
        {
          id: "asoc-u6-nm-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The new media — extended response.",
          parts: [
            {
              label: "a",
              prompt: "Describe three characteristics of new media.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain two benefits of new media.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain two concerns about new media.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Evaluate the impact of the digital divide.",
              marks: 3,
            },
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
                reasoning: "Global/instant delivery.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Two valid benefits.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Explained clearly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Two valid concerns.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Explained clearly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Unequal access exists.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Class/regional gaps described.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Reinforces inequality judgement.",
                marks: 1,
                markCode: "AO3",
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
