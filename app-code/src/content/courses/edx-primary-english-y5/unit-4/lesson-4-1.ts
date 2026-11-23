import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edpe5-u4-lesson-4-1",
  code: "4-1",
  title: "Author's Craft and Literary Devices",
  goal: "I CAN analyse how authors use language and structure.",
  standards: ["Year 5 Reading"],
  vocabulary: [
    {
      term: "Metaphor",
      definition: "Direct comparison: 'her words were ice'.",
    },
    {
      term: "Symbolism",
      definition: "An object representing an idea: a dove for peace.",
    },
    {
      term: "Tone",
      definition: "The author's attitude: serious, humorous, ironic.",
    },
    { term: "Irony", definition: "Saying the opposite of what is meant." },
  ],
  concepts: [
    {
      id: "edpe5-u4-craft",
      title: "Language and literary devices",
      skill: "Identify metaphors, symbolism, tone and irony.",
      lesson: {
        sections: [
          {
            heading: "Beyond the surface",
            body: "Authors choose words deliberately. Metaphors create powerful images ('the crowd was a sea'). Symbolism lets objects carry meaning — a broken mirror might symbolise bad luck. Irony says one thing but means another, often for humour or criticism.",
          },
          {
            heading: "Tone and mood",
            body: "Tone is the author's attitude towards the subject: playful, solemn, sarcastic. Mood is the feeling created in the reader. A dark description creates a gloomy mood; light, bouncy language creates a cheerful one.",
          },
        ],
        keyFormulas: [
          {
            name: "Literary devices",
            statement: "Metaphor + symbolism + irony + tone",
          },
        ],
        workedExample: {
          problem: "What is ironic about: 'The fire station burned down'?",
          solution:
            "Irony: the place meant to fight fires was destroyed by fire.",
        },
      },
      questions: [
        {
          id: "edpe5-u4-cr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is symbolism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of poem" },
              { id: "b", text: "An object representing an idea" },
              { id: "c", text: "A rhyme scheme" },
              { id: "d", text: "A story structure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symbolism",
                statement: "Object = idea.",
              },
            ],
            steps: [
              {
                reasoning: "Symbols carry deeper meaning.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Object representing idea",
            commonErrors: ["Confusing with metaphor."],
          },
        },
        {
          id: "edpe5-u4-cr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is irony?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Saying exactly what you mean" },
              { id: "b", text: "Saying the opposite of what is meant" },
              { id: "c", text: "A type of rhyme" },
              { id: "d", text: "A formal letter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Irony",
                statement: "Opposite meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Irony = gap between words and meaning.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Opposite of what is meant",
            commonErrors: ["Confusing with sarcasm."],
          },
        },
        {
          id: "edpe5-u4-cr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify the device: 'The exam was a marathon that left me exhausted.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Literary devices",
                statement: "Metaphor.",
              },
            ],
            steps: [
              {
                reasoning: "Exam IS a marathon — direct comparison.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Implies endurance and difficulty.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Device: metaphor.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Metaphor",
            commonErrors: ["Calling it a simile."],
          },
        },
        {
          id: "edpe5-u4-cr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a writer creates a humorous tone. Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone",
                statement: "Word choice + irony + exaggeration.",
              },
            ],
            steps: [
              {
                reasoning: "Playful language, jokes, unexpected comparisons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: describing a messy room as 'a disaster zone'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains effect on reader.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Humour via wordplay + exaggeration",
            commonErrors: ["No example."],
          },
        },
      ],
    },
    {
      id: "edpe5-u4-structure",
      title: "Narrative Structure and Tension",
      skill: "Analyse story structure, pacing and tension.",
      lesson: {
        sections: [
          {
            heading: "Story architecture",
            body: "Stories have structure: opening (hook the reader), build-up (develop tension), climax (peak conflict), resolution (aftermath). Some use in medias res (starting mid-action) or flashbacks. Pacing controls speed — short sentences accelerate, long ones slow.",
          },
          {
            heading: "Creating tension",
            body: "Tension comes from: dramatic irony (reader knows more than character), foreshadowing, cliffhangers, sensory details, and obstacles. 'He heard footsteps behind him. They kept coming.' The unanswered question compels reading.",
          },
        ],
        keyFormulas: [
          {
            name: "Narrative",
            statement: "Hook + build-up + climax + resolution",
          },
        ],
        workedExample: {
          problem: "What is dramatic irony?",
          solution:
            "When the reader knows something the character doesn't — e.g., audience knows the bomb is under the table.",
        },
      },
      questions: [
        {
          id: "edpe5-u4-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is dramatic irony?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A sad story" },
              { id: "b", text: "Reader knows more than character" },
              { id: "c", text: "A type of poem" },
              { id: "d", text: "A flashback" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dramatic irony",
                statement: "Reader > character knowledge.",
              },
            ],
            steps: [
              {
                reasoning: "Dramatic irony = knowledge gap.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Reader knows more",
            commonErrors: ["Confusing with situational irony."],
          },
        },
        {
          id: "edpe5-u4-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is in medias res?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ending a story" },
              { id: "b", text: "Starting mid-action" },
              { id: "c", text: "A poem form" },
              { id: "d", text: "A type of character" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "In medias res",
                statement: "Start mid-action.",
              },
            ],
            steps: [
              {
                reasoning: "Latin for 'into the middle of things'.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Starting mid-action",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe5-u4-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how pacing affects tension. Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pacing",
                statement: "Sentence length controls speed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Short sentences = fast, tense; long = slow, descriptive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: 'He ran. He jumped. He landed.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains effect on reader.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Pacing controls tension via sentence length",
            commonErrors: ["No example."],
          },
        },
        {
          id: "edpe5-u4-st-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a cliffhanger ending for a story about a mysterious letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cliffhanger",
                statement: "Suspense + unanswered question.",
              },
            ],
            steps: [
              {
                reasoning: "Ends on suspense or revelation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Leaves question unanswered.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compels reader to continue.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Suspenseful cliffhanger",
            commonErrors: ["No suspense."],
          },
        },
      ],
    },
    {
      id: "edpe5-u4-character",
      title: "Characterisation and Perspective",
      skill: "Analyse character motivation and narrative voice.",
      lesson: {
        sections: [
          {
            heading: "Motivation and change",
            body: "Characters act for reasons: desire, fear, duty, love. Understanding motivation explains behaviour. Dynamic characters change through the story — usually through a crisis or realisation. Track how events transform them.",
          },
          {
            heading: "Narrative voice",
            body: "First person ('I') creates intimacy and subjectivity. Third person limited follows one character's thoughts. Third person omniscient knows all characters' thoughts. The voice shapes how we see events and judge characters.",
          },
        ],
        keyFormulas: [
          {
            name: "Characterisation",
            statement: "Motivation + change + narrative voice",
          },
        ],
        workedExample: {
          problem:
            "Why does a first-person narrator make a story feel different?",
          solution:
            "It creates intimacy — we see through one character's eyes, biased by their perspective.",
        },
      },
      questions: [
        {
          id: "edpe5-u4-ch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is character motivation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What characters look like" },
              { id: "b", text: "Why characters act as they do" },
              { id: "c", text: "Where the story is set" },
              { id: "d", text: "How the story ends" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Motivation",
                statement: "Reason for action.",
              },
            ],
            steps: [
              {
                reasoning: "Motivation = driving force.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Why characters act",
            commonErrors: ["Confusing with appearance."],
          },
        },
        {
          id: "edpe5-u4-ch-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is first-person narration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using 'he' or 'she'" },
              { id: "b", text: "Using 'I'" },
              { id: "c", text: "Using 'we'" },
              { id: "d", text: "Using 'you'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First person",
                statement: "'I' narrator.",
              },
            ],
            steps: [
              {
                reasoning: "First person = narrator is 'I'.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Using 'I'",
            commonErrors: ["Confusing with third person."],
          },
        },
        {
          id: "edpe5-u4-ch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a character can change during a story. Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Character change",
                statement: "Crisis → realisation → change.",
              },
            ],
            steps: [
              {
                reasoning: "Character faces challenge or learns lesson.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: shy character learns to speak up.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Change is believable and earned.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Character arc with example",
            commonErrors: ["No example."],
          },
        },
        {
          id: "edpe5-u4-ch-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare first-person and third-person narration. Which would you choose for a mystery story and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrative voice",
                statement: "Comparison + justified choice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First person = intimate, biased; third = broader view.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "First person good for unreliable narrator mystery.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Justified choice with reasoning.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Comparison + justified choice",
            commonErrors: ["No justification."],
          },
        },
      ],
    },
  ],
};
