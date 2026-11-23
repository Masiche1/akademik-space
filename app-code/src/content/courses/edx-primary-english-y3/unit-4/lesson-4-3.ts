import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edpe3-u4-lesson-4-3",
  code: "4-3",
  title: "Writing Poems and Formal Letters",
  goal: "I CAN write a poem and a formal letter.",
  standards: ["Year 3 Writing"],
  vocabulary: [
    {
      term: "Stanza",
      definition: "A group of lines in a poem, like a paragraph.",
    },
    {
      term: "Formal letter",
      definition: "A polite letter to someone you don't know well.",
    },
    {
      term: "Salutation",
      definition: "The greeting at the start: 'Dear Sir or Madam'.",
    },
    {
      term: "Subject line",
      definition: "A short line saying what the letter is about.",
    },
  ],
  concepts: [
    {
      id: "edpe3-u4-writepoem",
      title: "Writing poems",
      skill: "Write a poem with rhyme, rhythm and imagery.",
      lesson: {
        sections: [
          {
            heading: "Composing a poem",
            body: "Choose a topic, then use sound features: rhyme (end words alike), rhythm (regular beat), alliteration (repeated starts), imagery (describing words). A poem doesn't need to rhyme, but rhyme makes it memorable. Keep lines short and punchy.",
          },
          {
            heading: "Editing poems",
            body: "Read your poem aloud. Does it flow? Are the rhymes right? Could you swap a boring word for a vivid one? 'The big dog' → 'The enormous shaggy dog'. Small changes make poems powerful.",
          },
        ],
        keyFormulas: [
          { name: "Poem writing", statement: "Topic + rhyme/rhythm + imagery" },
        ],
        workedExample: {
          problem: "Write the first two lines of a poem about autumn.",
          solution: "Leaves of gold and red, / Dancing softly overhead.",
        },
      },
      questions: [
        {
          id: "edpe3-u4-wp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stanza?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of rhyme" },
              { id: "b", text: "A group of lines in a poem" },
              { id: "c", text: "The title of a poem" },
              { id: "d", text: "A poem without rhyme" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stanza",
                statement: "Group of poem lines.",
              },
            ],
            steps: [
              {
                reasoning: "Stanza = verse paragraph.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Group of lines",
            commonErrors: ["Confusing with rhyme."],
          },
        },
        {
          id: "edpe3-u4-wp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is better imagery: 'The food was nice' or 'The steaming curry filled the air with spices'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The first one" },
              { id: "b", text: "The second one" },
              { id: "c", text: "Both are the same" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Imagery",
                statement: "Vivid words create pictures.",
              },
            ],
            steps: [
              {
                reasoning: "Second has sensory details and vivid words.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Second one",
            commonErrors: ["Preferring plain language."],
          },
        },
        {
          id: "edpe3-u4-wp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a 4-line rhyming poem about the sea.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Poem writing",
                statement: "Rhyme + imagery.",
              },
            ],
            steps: [
              {
                reasoning: "At least two rhyming word pairs.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Describing words used.", marks: 1, markCode: "M" },
              {
                reasoning: "Makes sense and reads well aloud.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4-line rhyming sea poem",
            commonErrors: ["No rhyme or no meaning."],
          },
        },
        {
          id: "edpe3-u4-wp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a short acrostic poem for 'FRIEND' and explain how the first letters work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Acrostic",
                statement: "First letters spell FRIEND.",
              },
            ],
            steps: [
              {
                reasoning: "6 lines, each starting F-R-I-E-N-D.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each line relates to friendship.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct explanation of acrostic.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Acrostic FRIEND + explanation",
            commonErrors: ["Wrong letters or no meaning."],
          },
        },
      ],
    },
    {
      id: "edpe3-u4-formal",
      title: "Formal letters",
      skill: "Write a formal letter with correct layout and polite language.",
      lesson: {
        sections: [
          {
            heading: "Formal letter layout",
            body: "A formal letter has: sender's address, date, recipient's address, salutation ('Dear Sir or Madam' or 'Dear Mr Smith'), subject line, body paragraphs, closing ('Yours faithfully' or 'Yours sincerely'), signature, printed name. Polite, clear language — no slang or emojis.",
          },
          {
            heading: "Formal vs informal",
            body: "Formal letters are for people you don't know well: complaints, job applications, enquiries. Informal letters (to friends) can be casual: 'Hi Sam, How are you?' Formal letters need proper greetings, full sentences, and correct punctuation throughout.",
          },
        ],
        keyFormulas: [
          {
            name: "Formal letter",
            statement:
              "Addresses + salutation + subject + polite body + closing",
          },
        ],
        workedExample: {
          problem:
            "What greeting do you use when you don't know the person's name?",
          solution: "'Dear Sir or Madam' — then end with 'Yours faithfully'.",
        },
      },
      questions: [
        {
          id: "edpe3-u4-fl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When would you write a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To a close friend" },
              { id: "b", text: "To someone you don't know well" },
              { id: "c", text: "To your mum" },
              { id: "d", text: "To your pet" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formal letter",
                statement: "For unknown recipients.",
              },
            ],
            steps: [
              {
                reasoning: "Formal = people you don't know well.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Someone you don't know well",
            commonErrors: ["Confusing formal/informal."],
          },
        },
        {
          id: "edpe3-u4-fl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a salutation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The closing of a letter" },
              { id: "b", text: "The greeting at the start" },
              { id: "c", text: "The subject line" },
              { id: "d", text: "The signature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Salutation",
                statement: "Greeting at start.",
              },
            ],
            steps: [
              {
                reasoning: "Salutation = 'Dear ...' at the top.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Greeting at the start",
            commonErrors: ["Confusing with closing."],
          },
        },
        {
          id: "edpe3-u4-fl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the opening of a formal letter asking about a lost dog. Include salutation and subject line.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Formal letter",
                statement: "Correct layout.",
              },
            ],
            steps: [
              {
                reasoning: "Salutation: 'Dear Sir or Madam'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subject line: 'Lost dog'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Polite opening paragraph.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Formal letter opening for lost dog",
            commonErrors: ["No salutation or subject."],
          },
        },
        {
          id: "edpe3-u4-fl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "List the correct order of parts in a formal letter from top to bottom.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Letter layout",
                statement: "Correct order.",
              },
            ],
            steps: [
              {
                reasoning: "Sender's address and date.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Recipient's address, salutation, subject.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Body, closing, signature, printed name.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Address → date → recipient → salutation → subject → body → closing → signature",
            commonErrors: ["Wrong order."],
          },
        },
      ],
    },
    {
      id: "edpe3-u4-editing",
      title: "Editing and Improving Writing",
      skill: "Review and improve poems, letters and stories.",
      lesson: {
        sections: [
          {
            heading: "The editing checklist",
            body: "When editing, check: Does it make sense? Is punctuation correct? Are sentences varied? Could words be more interesting? Is the structure clear? For poems: rhyme, rhythm, imagery. For letters: layout, politeness, clarity. For stories: problem, resolution, dialogue.",
          },
          {
            heading: "Peer review",
            body: "Ask a partner to read your work and give feedback: 'What do you like?' 'What could be clearer?' 'Does anything confuse you?' Use their feedback to improve. Good writers always revise — first drafts are never perfect.",
          },
        ],
        keyFormulas: [
          {
            name: "Editing",
            statement: "Sense + punctuation + word choice + structure",
          },
        ],
        workedExample: {
          problem:
            "How do you improve 'The dog was nice and I liked it' in a story?",
          solution: "Add detail: 'The fluffy dog wagged its tail happily.'",
        },
      },
      questions: [
        {
          id: "edpe3-u4-ed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first thing to check when editing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Does it make sense?" },
              { id: "b", text: "Is it long enough?" },
              { id: "c", text: "Does it rhyme?" },
              { id: "d", text: "Is it colourful?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Editing", statement: "Sense first." },
            ],
            steps: [
              {
                reasoning: "Clarity comes before style.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Does it make sense?",
            commonErrors: ["Focusing on surface features first."],
          },
        },
        {
          id: "edpe3-u4-ed-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is peer review useful?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It lets others do the work" },
              { id: "b", text: "It gives fresh feedback on your work" },
              { id: "c", text: "It's quicker than editing yourself" },
              { id: "d", text: "It avoids writing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Peer review",
                statement: "Fresh eyes find issues.",
              },
            ],
            steps: [
              {
                reasoning: "Others see what you miss.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Fresh feedback",
            commonErrors: ["Thinking it's cheating."],
          },
        },
        {
          id: "edpe3-u4-ed-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this sentence for a story: 'The boy was sad.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Editing", statement: "Add detail." },
            ],
            steps: [
              {
                reasoning: "Add describing words or action.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: 'The boy's shoulders slumped as tears rolled down his cheeks.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Improved version makes reader feel the sadness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Vivid sentence showing sadness",
            commonErrors: ["No improvement or too vague."],
          },
        },
        {
          id: "edpe3-u4-ed-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Give three questions you should ask when editing a poem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Editing checklist",
                statement: "Three relevant questions.",
              },
            ],
            steps: [
              {
                reasoning: "Does it rhyme/flow well?",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Is the imagery vivid?", marks: 1, markCode: "M" },
              {
                reasoning: "Does it convey the right feeling?",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Rhyme/flow + imagery + feeling",
            commonErrors: ["Generic questions not poem-specific."],
          },
        },
      ],
    },
  ],
};
