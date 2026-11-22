import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "edpe5-u2-lesson-1-1",
  code: "2-1",
  title: "Inference and Author's Craft",
  goal: "I CAN make sophisticated inferences and analyse the author's techniques.",
  standards: ["Year 5 Reading"],
  vocabulary: [
    {
      term: "Inference",
      definition: "Working out unstated meaning from clues.",
    },
    {
      term: "Author's craft",
      definition: "Techniques writers use to achieve effects.",
    },
    { term: "Tone", definition: "The writer's attitude toward the subject." },
    { term: "Mood", definition: "The feeling created for the reader." },
  ],
  concepts: [
    {
      id: "edpe5-u2-inference",
      title: "Deep inference",
      skill: "Make layered inferences from subtle clues.",
      lesson: {
        sections: [
          {
            heading: "Multi-layer inference",
            body: "Go beyond surface meaning: 'She stared at the door, key in hand, hesitating' → she wants to go in but is nervous. Combine multiple clues for deeper understanding.",
          },
          {
            heading: "Subtext",
            body: "Characters often mean more than they say. 'I'm fine' said through gritted teeth → she's not fine. Look for contradictions between words and actions.",
          },
        ],
        keyFormulas: [
          { name: "Clues", statement: "Actions, words, contrasts" },
          { name: "Subtext", statement: "What characters really mean" },
          { name: "Evidence", statement: "Combine clues for depth" },
        ],
        workedExample: {
          problem:
            "Text: 'He smiled, but his eyes were cold.' What does this reveal?",
          solution:
            "He's hiding his true feelings — fake smile, cold eyes show he doesn't care.",
        },
      },
      questions: [
        {
          id: "edpe5-u2-inf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Text: 'She gritted her teeth and clenched her fists.' How does she feel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Happy" },
              { id: "b", text: "Sleepy" },
              { id: "c", text: "Angry" },
              { id: "d", text: "Calm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inference",
                statement: "Body language shows anger.",
              },
            ],
            steps: [
              { reasoning: "Use physical clues.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Angry",
            commonErrors: ["Surface reading only."],
          },
        },
        {
          id: "edpe5-u2-inf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Text: 'He laughed, but no sound came out.' What might this mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He's mute" },
              { id: "b", text: "He's tired" },
              { id: "c", text: "He's very happy" },
              { id: "d", text: "He's pretending to laugh" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subtext",
                statement: "Fake laugh hides true feeling.",
              },
            ],
            steps: [
              { reasoning: "Contradiction spotted.", marks: 1, markCode: "M" },
              { reasoning: "Answer: pretending.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** He's pretending to laugh",
            commonErrors: ["Missing contradiction."],
          },
        },
        {
          id: "edpe5-u2-inf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Text: 'The old house stood alone on the hill, windows dark and doors creaking.' What mood does this create?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mood",
                statement: "Dark, lonely, spooky.",
              },
            ],
            steps: [
              {
                reasoning: "Descriptive clues identified.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Mood inferred.", marks: 1, markCode: "A" },
              {
                reasoning: "Justified with evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dark, lonely, possibly spooky",
            commonErrors: ["No mood or no evidence."],
          },
        },
        {
          id: "edpe5-u2-inf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Text: 'She said she wasn't bothered, but she checked her phone every minute.'",
          parts: [
            {
              label: "a",
              prompt: "What does she say she's feeling?",
              marks: 1,
            },
            { label: "b", prompt: "What do her actions suggest?", marks: 1 },
            { label: "c", prompt: "What is the subtext?", marks: 1 },
            {
              label: "d",
              prompt: "Why is this an effective characterisation?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subtext",
                statement:
                  "Says 'not bothered' but actions show she's anxious.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Says not bothered.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Checking phone = anxious.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Subtext: she cares deeply.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Contrast creates depth.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Not bothered vs anxious; cares deeply; contrast shows complexity",
            commonErrors: ["Only surface meaning."],
          },
        },
      ],
    },
    {
      id: "edpe5-u2-craft",
      title: "Analysing author's techniques",
      skill:
        "Identify and evaluate the author's craft: tone, mood, structure, language choices.",
      lesson: {
        sections: [
          {
            heading: "Tone and mood",
            body: "**Tone**: writer's attitude ('sarcastic', 'sympathetic', 'humorous'). **Mood**: feeling created ('tense', 'peaceful', 'exciting'). Tone comes from word choice; mood from overall effect.",
          },
          {
            heading: "Structural choices",
            body: "Why did the author choose this structure? Flashbacks create mystery; chronological builds suspense; first-person creates intimacy. Ask: how does structure serve the purpose?",
          },
        ],
        keyFormulas: [
          { name: "Tone", statement: "Writer's attitude" },
          { name: "Mood", statement: "Reader's feeling" },
          { name: "Structure", statement: "How organisation serves purpose" },
        ],
        workedExample: {
          problem: "Text: 'The villain cackled with glee.' What's the tone?",
          solution:
            "Dark/menacing — 'cackled' and 'glee' create sinister tone.",
        },
      },
      questions: [
        {
          id: "edpe5-u2-cr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'tone' in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The writer's attitude" },
              { id: "b", text: "The genre" },
              { id: "c", text: "The mood" },
              { id: "d", text: "The volume" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tone",
                statement: "Writer's attitude.",
              },
            ],
            steps: [{ reasoning: "Tone = attitude.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** The writer's attitude",
            commonErrors: ["Confusing with mood."],
          },
        },
        {
          id: "edpe5-u2-cr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What tone does 'The hero galloped bravely into battle' create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sad" },
              { id: "b", text: "Heroic/exciting" },
              { id: "c", text: "Boring" },
              { id: "d", text: "Scary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tone",
                statement: "'bravely', 'galloped' = heroic.",
              },
            ],
            steps: [
              { reasoning: "Word choice analysed.", marks: 1, markCode: "M" },
              { reasoning: "Answer: heroic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Heroic/exciting",
            commonErrors: ["Not analysing word choice."],
          },
        },
        {
          id: "edpe5-u2-cr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does first-person narration affect a story?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narrative voice",
                statement:
                  "Creates intimacy; reader sees through character's eyes.",
              },
            ],
            steps: [
              { reasoning: "Effect identified.", marks: 1, markCode: "M" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear reasoning.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Creates intimacy; reader experiences events through character's perspective",
            commonErrors: ["Vague or wrong effect."],
          },
        },
        {
          id: "edpe5-u2-cr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the effect of these openings: 'Once upon a time...' vs 'The knife was already in his hand.'",
          parts: [
            { label: "a", prompt: "What genre does each suggest?", marks: 1 },
            { label: "b", prompt: "What mood does each create?", marks: 1 },
            {
              label: "c",
              prompt: "Why might an author choose each?",
              marks: 1,
            },
            {
              label: "d",
              prompt: "Which is more effective for a thriller? Why?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Opening analysis",
                statement: "Fairy tale vs thriller; calm vs tense.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Genres identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Moods identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Purposes explained.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Thriller opening justified.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Fairy tale vs thriller; calm vs tense; purpose; knife more effective for thriller",
            commonErrors: ["No comparison or weak reasoning."],
          },
        },
      ],
    },
  ],
};
