import type { Lesson } from "../../../types.ts";

export const lesson213: Lesson = {
  id: "cial-e-u1-lesson-1-3",
  code: "1-3",
  title: "Writer's methods, attitudes and perspectives",
  goal: "I CAN synthesise analysis of a whole unseen text — methods, attitudes, perspective and purpose.",
  standards: ["9093 Paper 2: whole-text analysis"],
  vocabulary: [
    {
      term: "Method",
      definition:
        "A deliberate technique the writer uses to achieve an effect.",
    },
    {
      term: "Attitude",
      definition:
        "The writer's stance toward the subject — supportive, critical, ambivalent.",
    },
    {
      term: "Perspective",
      definition: "The viewpoint from which events are narrated or described.",
    },
    {
      term: "Purpose",
      definition:
        "What the writer wants to achieve: inform, persuade, entertain, provoke.",
    },
    {
      term: "Ambiguity",
      definition: "Deliberate openness to multiple interpretations.",
    },
    {
      term: "Evaluation",
      definition: "Judging how effectively the writer achieves their purpose.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u1-methods-attitude",
      title: "Writer's methods and attitude",
      skill: "Synthesise methods and attitudes across a whole unseen text.",
      lesson: {
        sections: [
          {
            heading: "From methods to attitude",
            body: "Individual techniques accumulate into an overall impression. A text using statistics, expert quotes and formal register projects authority; one using anecdotes, emotive language and direct address projects intimacy. Track how methods combine to create the writer's stance.",
          },
          {
            heading: "Purpose and audience",
            body: "Every text has a purpose: to inform, persuade, entertain, instruct or provoke. The audience determines everything — a pamphlet for pensioners differs from a social media post for teenagers. Infer purpose from what the text does, not what it claims.",
          },
          {
            heading: "Ambiguity and evaluation",
            body: "Sophisticated texts often sustain multiple readings. A writer may deliberately leave a character's motives unclear. Evaluation asks: how well does the text achieve its apparent purpose? Does the method match the message?",
          },
        ],
        keyFormulas: [
          {
            name: "Whole-text analysis",
            statement:
              "Methods+attitude+purpose+evaluation=whole-text response.",
          },
        ],
        workedExample: {
          problem:
            "A text uses 'we must act now' repeatedly with emotive imagery.",
          solution:
            "Urgency-driven persuasion — the repetition and emotional language aim to mobilise the reader, suggesting a call-to-action purpose.",
        },
      },
      questions: [
        {
          id: "cial-e-u1-ma-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'ambiguity' in a text?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Deliberate openness to multiple interpretations",
              },
              { id: "b", text: "An unclear mistake" },
              { id: "c", text: "A type of punctuation" },
              { id: "d", text: "A long sentence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ambiguity",
                statement:
                  "Deliberate openness allowing multiple valid readings.",
              },
            ],
            steps: [
              {
                reasoning: "Ambiguity = intentional openness.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Deliberate openness",
            commonErrors: ["Confusing ambiguity with confusion or error."],
          },
        },
        {
          id: "cial-e-u1-ma-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the extract and identify the writer's purpose.",
          extract: {
            title: "The Cost of Convenience",
            author: "Written for Akademik Space",
            text: "We click 'buy now' without a second thought. The package arrives tomorrow, the receipt is digital, the shop is a memory. But somewhere, a warehouse worker's shift just ended, and the river behind the factory runs grey. Convenience has a price — we simply never see the invoice.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Purpose",
                statement:
                  "Purpose inferred from what the text does, not what it claims.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The text contrasts consumer convenience with hidden costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Purpose: to provoke reflection / criticise consumer culture.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'We simply never see the invoice' — the text aims to reveal.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "To provoke reflection on the hidden costs of convenience.",
            commonErrors: ["Saying 'to inform' when the text argues."],
          },
        },
        {
          id: "cial-e-u1-ma-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does a writer's attitude differ from their purpose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Attitude vs purpose",
                statement:
                  "Purpose = goal; attitude = stance toward subject. A persuasive text can have critical attitude.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Purpose is what the text tries to do; attitude is how the writer feels about it.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "A text can inform while being critical, or persuade while being ambivalent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Distinguishing them shows sophisticated analysis.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Purpose=goal; attitude=stance. They can differ — e.g. critical information.",
            commonErrors: ["Using the terms interchangeably."],
          },
        },
        {
          id: "cial-e-u1-ma-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Whole-text analysis.",
          extract: {
            title: "The Garden Wall",
            author: "Written for Akademik Space",
            text: "For twenty years the wall kept its counsel. Mr Hale had built it himself, brick by brick, and it had outlasted two dogs, a marriage, and the street's slow decline into neglect.\n\nNow the council wanted it down — 'an obstacle to regeneration', the letter said. Mr Hale read it twice, then walked to the wall and put his palm flat against the cold brick. It was not an obstacle. It was a boundary — between what the street had been and what it might become.",
          },
          parts: [
            {
              label: "a",
              prompt: "Identify the writer's attitude toward the wall.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Analyse two methods used to create this attitude.",
              marks: 4,
            },
            { label: "c", prompt: "What is the text's purpose?", marks: 2 },
            {
              label: "d",
              prompt:
                "Evaluate how effectively the ending achieves its effect.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Whole-text analysis",
                statement: "Attitude+methods+purpose+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Affectionate, protective — the wall is meaningful, not an obstacle.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning: "Clear attitude.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "Personification: wall 'kept its counsel' — loyal, silent witness.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "List of losses ('two dogs, a marriage') builds pathos.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "Final image 'boundary' reframes the wall's meaning.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Methods linked to effect.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "To honour personal history against impersonal 'regeneration'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Purpose identified.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "Ending is powerful — 'boundary' crystallises the theme.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Evaluative judgement given.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) protective/affectionate (b) personification+pathos+reframe (c) honour history (d) effective ending",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Attitude clear.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "a" },
              {
                level: "Level 4",
                marks: "3-4",
                descriptor: "Two methods analysed.",
                part: "b",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "One method.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Techniques only.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Purpose clear.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Evaluation given.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Listing techniques without synthesising attitude."],
          },
        },
      ],
    },
    {
      id: "cial-e-u1-perspectives",
      title: "Perspective and narrative voice",
      skill: "Analyse point of view and narrative reliability in unseen texts.",
      lesson: {
        sections: [
          {
            heading: "Types of perspective",
            body: "First person ('I') gives immediacy and subjectivity — the narrator may be unreliable. Third person limited follows one consciousness closely; omniscient moves between minds. Second person ('you') immerses the reader directly — rare and deliberate.",
          },
          {
            heading: "Reliability",
            body: "A narrator is unreliable when their account conflicts with evidence: contradictions, gaps, self-serving bias, or naivety. Look for moments where the narration seems to protest too much or where other characters' views differ.",
          },
          {
            heading: "Perspective and meaning",
            body: "The same events read differently through different eyes. Analysing perspective asks: who is telling this, what do they know, what might they be hiding or misunderstanding? Perspective is itself a method.",
          },
        ],
        keyFormulas: [
          {
            name: "Perspective",
            statement:
              "Who tells+what they know+what they hide=interpretive frame.",
          },
        ],
        workedExample: {
          problem:
            "A child narrates an adult argument she doesn't fully understand.",
          solution:
            "Limited perspective — the child's partial understanding creates dramatic irony; the reader sees more than the narrator.",
        },
      },
      questions: [
        {
          id: "cial-e-u1-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an 'unreliable narrator'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A narrator whose account conflicts with evidence",
              },
              { id: "b", text: "A narrator who lies constantly" },
              { id: "c", text: "A narrator who is always wrong" },
              { id: "d", text: "A narrator with no name" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unreliable narrator",
                statement:
                  "Account conflicts with evidence — bias, gaps, or self-deception.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unreliable = conflicts with evidence, not constant lying.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Account conflicts with evidence",
            commonErrors: ["Confusing unreliability with dishonesty."],
          },
        },
        {
          id: "cial-e-u1-pe-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the extract and identify the perspective.",
          extract: {
            title: "The Witness",
            author: "Written for Akademik Space",
            text: "I only saw him for a second — that's all anyone gave me. But I know what I saw: the grey coat, the limp, the way he checked the doorway before stepping out. The police asked if I was sure. I was. Mostly.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perspective",
                statement:
                  "First person + hedging ('mostly') = limited reliability.",
              },
            ],
            steps: [
              {
                reasoning: "First-person eyewitness account.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Hedging 'mostly' signals imperfect memory — partially unreliable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Limited perspective creates tension about truth.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "First-person, partially unreliable eyewitness — 'mostly' hedges certainty.",
            commonErrors: ["Assuming eyewitness = reliable."],
          },
        },
        {
          id: "cial-e-u1-pe-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How can perspective itself be a persuasive method?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Perspective as method",
                statement:
                  "Choosing who tells the story controls what the reader believes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First person creates intimacy and subjective truth.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Omniscient can guide judgement across characters.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Limited perspective withholds information, building suspense.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Accurate explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Perspective controls intimacy, knowledge and judgement — a persuasive choice.",
            commonErrors: ["Treating perspective as neutral."],
          },
        },
        {
          id: "cial-e-u1-pe-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Perspective and voice.",
          parts: [
            { label: "a", prompt: "Define unreliable narrator.", marks: 1 },
            {
              label: "b",
              prompt: "Identify the perspective in the witness extract.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How does 'mostly' affect reliability?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Explain how perspective can persuade.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perspective",
                statement: "Definition+identification+hedging+persuasion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Account conflicts with evidence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "First-person eyewitness.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Partial/humanising view.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Clear identification.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "'Mostly' hedges — admits possible error.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Creates doubt about certainty.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Effect explained.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Perspective controls what reader knows/believes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "First person=intimacy; limited=withholding.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Persuasive function clear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) conflicts with evidence (b) first-person witness (c) hedging=doubt (d) controls belief",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Perspective identified.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Hedging analysed.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Persuasion explained.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Assuming narrators are always reliable."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u1-perspective-notes",
      title: "Methods, attitudes and perspectives — revision notes",
      summary:
        "Synthesising whole-text analysis: methods, attitude, purpose, reliability.",
      sections: [
        {
          heading: "Framework",
          body: "Methods (techniques) → attitude (stance) → purpose (goal) → evaluation (effectiveness). Track how techniques accumulate into an overall impression.",
        },
        {
          heading: "Attitude vs purpose",
          body: "Purpose = what the text tries to do (inform/persuade/entertain). Attitude = how the writer feels (critical/supportive/ambivalent). They can differ.",
        },
        {
          heading: "Perspective",
          body: "First person = intimacy + possible unreliability. Third limited = one consciousness. Omniscient = wider view. Unreliable narrators conflict with evidence.",
        },
        {
          heading: "Exam checklist",
          body: "Did I synthesise methods into attitude? Did I infer purpose from function? Did I consider reliability? Did I evaluate effectiveness?",
        },
      ],
    },
  ],
};
