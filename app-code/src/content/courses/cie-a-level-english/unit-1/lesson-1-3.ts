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
              { id: "b", text: "A long sentence" },
              { id: "c", text: "An unclear mistake" },
              { id: "d", text: "A type of punctuation" },
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
        {
          id: "cial-e-u1-ma-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best defines a writer's purpose?",
          response: { type: "mcq", choices: [ { id: "a", text: "What the writer wants the text to achieve" }, { id: "b", text: "The writer's biography" }, { id: "c", text: "The number of paragraphs" }, { id: "d", text: "The genre of the text" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Purpose", statement: "The intended effect or goal of the text." }], steps: [{ reasoning: "Purpose concerns intended achievement, not form or biography.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** What the text is meant to achieve", commonErrors: ["Confusing purpose with subject matter."] },
        },
        {
          id: "cial-e-u1-ma-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A text uses statistics, expert quotation and formal register. What attitude does it most likely project?",
          response: { type: "mcq", choices: [ { id: "a", text: "Playful and intimate" }, { id: "b", text: "Hostile and personal" }, { id: "c", text: "Authoritative and measured" }, { id: "d", text: "Confused and uncertain" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Attitude through method", statement: "Formal evidence-based methods project authority." }], steps: [{ reasoning: "Statistics, authority and formal register combine to create an authoritative stance.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Authoritative and measured", commonErrors: ["Listing methods without inferring attitude."] },
        },
        {
          id: "cial-e-u1-ma-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is ambiguity sometimes a strength in a sophisticated text?",
          response: { type: "mcq", choices: [ { id: "a", text: "It removes the need for evidence" }, { id: "b", text: "It proves the writer is careless" }, { id: "c", text: "It makes the text shorter" }, { id: "d", text: "It allows multiple defensible interpretations" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Ambiguity", statement: "Deliberate openness can sustain richer readings." }], steps: [{ reasoning: "Controlled ambiguity rewards interpretation without collapsing meaning.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Multiple defensible interpretations", commonErrors: ["Treating ambiguity as accidental vagueness."] },
        },
        {
          id: "cial-e-u1-ma-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should be inferred first when judging a text's purpose?",
          response: { type: "mcq", choices: [ { id: "a", text: "What the text actually does for its audience" }, { id: "b", text: "The length of the conclusion" }, { id: "c", text: "The number of adjectives" }, { id: "d", text: "The writer's stated intention only" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Purpose inference", statement: "Purpose is judged by textual effect, not self-description." }], steps: [{ reasoning: "The text's methods and audience effect reveal purpose most reliably.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** What the text actually does", commonErrors: ["Accepting the writer's claim without checking effect."] },
        },
        {
          id: "cial-e-u1-ma-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which response best 'evaluates' a text?",
          response: { type: "mcq", choices: [ { id: "a", text: "It retells the content" }, { id: "b", text: "It lists three techniques" }, { id: "c", text: "It defines every difficult word" }, { id: "d", text: "It judges how effectively methods achieve the purpose" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Evaluation", statement: "Evaluation weighs effectiveness against purpose." }], steps: [{ reasoning: "Evaluation requires a judgement of method and effect.", marks: 1, markCode: "AO3" }], finalAnswer: "**(b)** Judging effectiveness against purpose", commonErrors: ["Stopping at technique identification."] },
        },
        {
          id: "cial-e-u1-ma-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many common purposes are listed in the lesson: inform, persuade, entertain, instruct and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "definition", name: "Purposes", statement: "Inform, persuade, entertain, instruct and provoke." }], steps: [{ reasoning: "Five purposes are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "5", commonErrors: ["Omitting 'provoke' as a purpose."] },
        },
        {
          id: "cial-e-u1-ma-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many broad sides are presented in balanced discursive writing?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "convention", name: "Discursive balance", statement: "For and against viewpoints." }], steps: [{ reasoning: "Two broad viewpoints are balanced.", marks: 1, markCode: "AO1" }], finalAnswer: "2", commonErrors: ["Expecting only the writer's side."] },
        },
        {
          id: "cial-e-u1-ma-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many elements are combined in the whole-text formula: methods, attitude, purpose and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "skill", name: "Whole-text formula", statement: "Methods + attitude + purpose + evaluation." }], steps: [{ reasoning: "Four components form the formula.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Leaving out evaluation."] },
        },
        {
          id: "cial-e-u1-ma-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In 'methods + attitude + purpose + evaluation', how many components concern the writer's stance or judgement rather than individual techniques?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "skill", name: "Whole-text synthesis", statement: "Attitude, purpose and evaluation move beyond isolated methods." }], steps: [{ reasoning: "Attitude, purpose and evaluation are three non-technique components.", marks: 1, markCode: "AO2" }], finalAnswer: "3", commonErrors: ["Counting methods as a stance."] },
        },
        {
          id: "cial-e-u1-ma-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how a writer's methods can accumulate into an attitude.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Method-to-attitude", statement: "Repeated choices create a cumulative stance." }], steps: [{ reasoning: "A strong answer shows that patterns of evidence, diction and address build a consistent position rather than isolated effects.", marks: 2, markCode: "AO2" }], finalAnswer: "Individual methods accumulate through repetition and consistency to project the writer's overall attitude.", commonErrors: ["Analysing one technique as if it alone proves attitude."] },
        },
        {
          id: "cial-e-u1-ma-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Distinguish between a text's subject and its purpose.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Subject vs purpose", statement: "Subject is what is discussed; purpose is what the text tries to do." }], steps: [{ reasoning: "A strong answer gives a clear distinction and shows how the same subject can inform, persuade or provoke.", marks: 2, markCode: "AO2" }], finalAnswer: "Subject is the topic; purpose is the intended effect on the audience.", commonErrors: ["Answering 'what it is about' when asked 'why it is written'."] },
        },
        {
          id: "cial-e-u1-ma-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Evaluate why ambiguity should be treated as deliberate until proven otherwise.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Deliberate ambiguity", statement: "Sophisticated texts often sustain more than one valid reading." }], steps: [{ reasoning: "A strong answer recognises that ambiguity can be a designed effect, while still testing whether evidence supports intentional openness.", marks: 2, markCode: "AO3" }], finalAnswer: "Ambiguity may be deliberate because it creates interpretive depth; the analyst should test it against textual evidence rather than assume error.", commonErrors: ["Dismissing ambiguity as confusion or praising it without evidence."] },
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
              { id: "a", text: "A narrator who lies constantly" },
              { id: "b", text: "A narrator who is always wrong" },
              {
                id: "c",
                text: "A narrator whose account conflicts with evidence",
              },
              { id: "d", text: "A narrator with no name" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cial-e-u1-pe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main advantage of first-person narration?",
          response: { type: "mcq", choices: [ { id: "a", text: "It always proves reliability" }, { id: "b", text: "It removes all bias" }, { id: "c", text: "It gives complete objectivity" }, { id: "d", text: "It creates immediacy and subjective access" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "First person", statement: "Immediate subjective access, with possible bias." }], steps: [{ reasoning: "First person gives closeness but also subjectivity.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Immediacy and subjective access", commonErrors: ["Treating first person as objective."] },
        },
        {
          id: "cial-e-u1-pe-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature most strongly suggests an unreliable narrator?",
          response: { type: "mcq", choices: [ { id: "a", text: "The story is set indoors" }, { id: "b", text: "The account contradicts evidence or shows self-serving bias" }, { id: "c", text: "The narrator uses vivid description" }, { id: "d", text: "The narrator is named" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Unreliability", statement: "Contradictions, gaps and bias undermine trust." }], steps: [{ reasoning: "Conflict with evidence is the key signal.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Contradiction or self-serving bias", commonErrors: ["Assuming detailed narration equals reliable narration."] },
        },
        {
          id: "cial-e-u1-pe-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does an omniscient narrator typically provide?",
          response: { type: "mcq", choices: [ { id: "a", text: "Access to multiple minds and wider knowledge" }, { id: "b", text: "Direct commands to the reader" }, { id: "c", text: "Only one character's thoughts" }, { id: "d", text: "No knowledge of events" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Omniscient perspective", statement: "The narrator can move between minds and know more than characters." }], steps: [{ reasoning: "Omniscience widens knowledge across characters.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Access to multiple minds", commonErrors: ["Confusing omniscient with first person."] },
        },
        {
          id: "cial-e-u1-pe-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is second-person narration unusual?",
          response: { type: "mcq", choices: [ { id: "a", text: "It removes all tension" }, { id: "b", text: "It directly immerses the reader as 'you'" }, { id: "c", text: "It is grammatically impossible" }, { id: "d", text: "It can only be used in poems" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Second person", statement: "Direct address immerses the reader in the action." }], steps: [{ reasoning: "Second person makes the reader a participant.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** It immerses the reader directly", commonErrors: ["Treating second person as a mistake."] },
        },
        {
          id: "cial-e-u1-pe-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does limited perspective most often create?",
          response: { type: "mcq", choices: [ { id: "a", text: "A neutral report" }, { id: "b", text: "Gaps that can produce suspense or dramatic irony" }, { id: "c", text: "Automatic comedy" }, { id: "d", text: "Complete certainty for the reader" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Limited perspective", statement: "Restricted knowledge creates gaps between narrator and reader." }], steps: [{ reasoning: "Limited knowledge withholds information and shapes interpretation.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Gaps creating suspense or irony", commonErrors: ["Assuming limited perspective is unreliable."] },
        },
        {
          id: "cial-e-u1-pe-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main perspective types are described in the lesson?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "Perspective types", statement: "First, second and third person." }], steps: [{ reasoning: "Three person-based perspectives are described.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Counting omniscient and limited as separate person types."] },
        },
        {
          id: "cial-e-u1-pe-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many reliability warning signs are listed: contradictions, gaps, self-serving bias and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Reliability signs", statement: "Contradictions, gaps, bias and naivety." }], steps: [{ reasoning: "Four warning signs are identified.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Omitting naivety as a reliability issue."] },
        },
        {
          id: "cial-e-u1-pe-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many person-based pronouns define the three main narrative perspectives?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "Narrative persons", statement: "I, you and he/she/they perspectives." }], steps: [{ reasoning: "Three person categories use three pronoun systems.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Treating 'we' as a fourth basic perspective."] },
        },
        {
          id: "cial-e-u1-pe-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In the witness extract, how many narrators are present?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Narrator count", statement: "The extract is a single first-person account." }], steps: [{ reasoning: "Only the witness narrates the extract.", marks: 1, markCode: "AO1" }], finalAnswer: "1", commonErrors: ["Counting the police as narrators."] },
        },
        {
          id: "cial-e-u1-pe-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how a narrator's knowledge limits can create dramatic irony.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Dramatic irony", statement: "When readers know more than the narrator, meaning is layered." }], steps: [{ reasoning: "A strong answer explains that the reader compares the narrator's partial account with evidence or wider context.", marks: 2, markCode: "AO2" }], finalAnswer: "Limited knowledge lets readers see more than the narrator, creating tension between what is said and what is implied.", commonErrors: ["Defining dramatic irony without linking it to limited knowledge."] },
        },
        {
          id: "cial-e-u1-pe-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How can perspective function as a persuasive method?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perspective as method", statement: "The chosen viewpoint controls intimacy, sympathy and judgement." }], steps: [{ reasoning: "A strong answer explains how first, limited or omniscient viewpoint guides trust and emotional alignment.", marks: 2, markCode: "AO2" }], finalAnswer: "Perspective persuades by controlling how close, informed and sympathetic the reader feels toward events and characters.", commonErrors: ["Treating viewpoint as neutral packaging."] },
        },
        {
          id: "cial-e-u1-pe-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Analyse how a child narrator might make an adult argument seem different.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Limited child perspective", statement: "Partial understanding reframes adult conflict through innocent interpretation." }], steps: [{ reasoning: "A strong answer links the child's vocabulary and comprehension to irony, pathos or distorted significance.", marks: 2, markCode: "AO3" }], finalAnswer: "A child's partial understanding can make adult conflict seem puzzling or poignant, adding dramatic irony and emotional distance.", commonErrors: ["Assuming the child narrator understands everything correctly."] },
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
