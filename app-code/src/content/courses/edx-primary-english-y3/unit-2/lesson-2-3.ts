import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "edpe3-u2-lesson-2-3",
  code: "2-3",
  title: "Non-Fiction Deep Reading",
  goal: "I CAN read information texts closely and extract facts.",
  standards: ["Year 3 Reading"],
  vocabulary: [
    { term: "Fact file", definition: "A page of key facts about a topic." },
    { term: "Heading", definition: "A title for a section of text." },
    { term: "Glossary", definition: "A list of difficult words and meanings." },
    {
      term: "Key words",
      definition: "Important bold/coloured words in a text.",
    },
  ],
  concepts: [
    {
      id: "edpe3-u2-nonfiction",
      title: "Reading information texts",
      skill: "Use headings, glossaries and key words to understand facts.",
      lesson: {
        sections: [
          {
            heading: "Text features",
            body: "Information texts use: **headings** (section titles), **bold/key words** (important terms), **glossary** (word meanings at back), **diagrams** (labelled pictures). These help you navigate and understand.",
          },
          {
            heading: "Finding facts",
            body: "Read headings first to know what each section covers. Look up unknown words in the glossary. Use the index to find specific topics. Facts are usually in short sentences or bullet points.",
          },
        ],
        keyFormulas: [
          { name: "Headings", statement: "Section titles — read first" },
          { name: "Glossary", statement: "Word meanings at back of book" },
          { name: "Key words", statement: "Bold/coloured = important" },
        ],
        workedExample: {
          problem:
            "You don't know what 'nocturnal' means in a fact book about owls. Where do you look?",
          solution: "The glossary at the back of the book.",
        },
      },
      questions: [
        {
          id: "edpe3-u2-nf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a glossary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of difficult words and meanings" },
              { id: "b", text: "A list of characters" },
              { id: "c", text: "A picture section" },
              { id: "d", text: "A map of the book" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glossary",
                statement: "Word meanings.",
              },
            ],
            steps: [
              {
                reasoning: "Glossary = dictionary in book.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** A list of difficult words and meanings",
            commonErrors: ["Confusing with index."],
          },
        },
        {
          id: "edpe3-u2-nf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do information texts use headings?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To fill space" },
              { id: "b", text: "No reason" },
              { id: "c", text: "To show what each section is about" },
              { id: "d", text: "To make it pretty" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Headings",
                statement: "Show section topics.",
              },
            ],
            steps: [
              {
                reasoning: "Headings organise information.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: show topics.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To show what each section is about",
            commonErrors: ["Not understanding purpose."],
          },
        },
        {
          id: "edpe3-u2-nf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A fact book about sharks has headings 'Size', 'Diet' and 'Habitat'. Where would you find what sharks eat?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Using headings",
                statement: "Under 'Diet' heading.",
              },
            ],
            steps: [
              { reasoning: "Match topic to heading.", marks: 1, markCode: "M" },
              { reasoning: "Diet = food/eating.", marks: 1, markCode: "A" },
              {
                reasoning: "Correct section identified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Under the 'Diet' heading",
            commonErrors: ["Wrong section."],
          },
        },
        {
          id: "edpe3-u2-nf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Text: 'Owls are nocturnal birds. This means they hunt at night. Their large eyes help them see in the dark.'",
          parts: [
            {
              label: "a",
              prompt: "What does 'nocturnal' mean here?",
              marks: 1,
            },
            { label: "b", prompt: "When do owls hunt?", marks: 1 },
            { label: "c", prompt: "Why do owls have large eyes?", marks: 1 },
            {
              label: "d",
              prompt:
                "What book feature would define 'nocturnal' if you didn't understand?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-fiction reading",
                statement: "Active at night; night; see in dark; glossary.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Active at night.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "At night.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "To see in the dark.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Glossary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Active at night; night; see in dark; glossary",
            commonErrors: ["Not using text features."],
          },
        },
      ],
    },
    {
      id: "edpe3-u2-summaries",
      title: "Summarising and comparing",
      skill: "Summarise texts and compare information across texts.",
      lesson: {
        sections: [
          {
            heading: "Main points",
            body: "A summary captures the main points only — who, what, where, when, why. Leave out small details. 'The Romans built roads. They used them to move armies and goods quickly across their empire.'",
          },
          {
            heading: "Comparing sources",
            body: "Compare two texts on the same topic: a story and a fact book. Stories entertain; fact books inform. Compare what they say about the same thing — do they agree?",
          },
        ],
        keyFormulas: [
          { name: "Summary", statement: "Main points only" },
          { name: "Compare", statement: "Same topic, different texts" },
        ],
        workedExample: {
          problem:
            "Summarise: 'The school played football. They won 3-1. Everyone cheered.'",
          solution: "The school won their football match 3-1.",
        },
      },
      questions: [
        {
          id: "edpe3-u2-sm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a summary include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Every detail" },
              { id: "b", text: "Pictures" },
              { id: "c", text: "Main points only" },
              { id: "d", text: "Your opinion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Summary",
                statement: "Main points only.",
              },
            ],
            steps: [
              { reasoning: "Summaries are brief.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Main points only",
            commonErrors: ["Including all details."],
          },
        },
        {
          id: "edpe3-u2-sm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which best summarises: 'Ben planted sunflower seeds. He watered them daily. After a month, tall sunflowers grew.'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ben grew sunflowers from seeds" },
              { id: "b", text: "Ben likes gardening" },
              { id: "c", text: "Seeds need water" },
              { id: "d", text: "Sunflowers are tall" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Summary",
                statement: "Main event: grew sunflowers.",
              },
            ],
            steps: [
              { reasoning: "Identify main action.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: grew sunflowers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Ben grew sunflowers from seeds",
            commonErrors: ["Choosing detail not summary."],
          },
        },
        {
          id: "edpe3-u2-sm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a one-sentence summary of a text about recycling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Summary",
                statement:
                  "e.g. 'Recycling helps the environment by reusing materials.'",
              },
            ],
            steps: [
              { reasoning: "Main idea identified.", marks: 1, markCode: "M" },
              { reasoning: "One sentence written.", marks: 1, markCode: "A" },
              { reasoning: "Accurate summary.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'Recycling reuses materials to help the environment.'",
            commonErrors: ["Too much detail or wrong focus."],
          },
        },
        {
          id: "edpe3-u2-sm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare 'The Very Hungry Caterpillar' (story) with 'All About Caterpillars' (fact book).",
          parts: [
            { label: "a", prompt: "What does each teach you?", marks: 1 },
            {
              label: "b",
              prompt: "Which is more accurate about real caterpillars?",
              marks: 1,
            },
            { label: "c", prompt: "Which is more entertaining?", marks: 1 },
            { label: "d", prompt: "Why read both types?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Text comparison",
                statement: "Story entertains; fact book informs accurately.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Story vs facts identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Fact book — real info.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Story — made-up fun.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Both have value.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Story vs facts; fact book accurate; story entertaining; both valuable",
            commonErrors: ["Confusing purposes."],
          },
        },
      ],
    },
  ],
};
