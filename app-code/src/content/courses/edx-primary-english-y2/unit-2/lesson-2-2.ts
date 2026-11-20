import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "edpe2-u2-lesson-2-2",
  code: "2-2",
  title: "Non-Fiction Comprehension",
  goal: "I CAN find facts, use contents pages and understand information texts.",
  standards: ["Year 2 Reading"],
  vocabulary: [
    {
      term: "Contents page",
      definition: "Lists chapters/topics with page numbers.",
    },
    {
      term: "Index",
      definition: "Alphabetical list of topics with page numbers.",
    },
    { term: "Caption", definition: "Text explaining a picture or photo." },
    {
      term: "Diagram",
      definition: "A labelled drawing that explains something.",
    },
  ],
  concepts: [
    {
      id: "edpe2-u2-nonfiction",
      title: "Using information text features",
      skill: "Use contents pages, captions and labels to find information.",
      lesson: {
        sections: [
          {
            heading: "Book features",
            body: "Information books have special features: **contents page** (what's inside and where), **index** (A-Z topics), **captions** (explaining pictures), **labels** (naming diagram parts). Use them to find facts quickly.",
          },
          {
            heading: "Finding facts",
            body: "To find information: check the contents page first → go to the page → read the relevant section → check captions for pictures. This is called **skimming** — finding what you need fast.",
          },
        ],
        keyFormulas: [
          { name: "Contents page", statement: "Topics + page numbers" },
          { name: "Caption", statement: "Explains the picture below/above it" },
          { name: "Skimming", statement: "Scan for specific information" },
        ],
        workedExample: {
          problem:
            "You want to know about 'Sharks' in a book. Where do you look first?",
          solution: "The contents page or index to find the shark page.",
        },
      },
      questions: [
        {
          id: "edpe2-u2-nf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a contents page?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The last page of a book" },
              { id: "b", text: "A list of topics with page numbers" },
              { id: "c", text: "A page with pictures" },
              { id: "d", text: "The title page" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Contents page",
                statement: "Lists topics + pages.",
              },
            ],
            steps: [
              {
                reasoning: "Contents = what's inside.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** A list of topics with page numbers",
            commonErrors: ["Confusing with index or title page."],
          },
        },
        {
          id: "edpe2-u2-nf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "You see a picture of a volcano with text underneath: 'Mount Vesuvius erupted in 79 AD.' What is this text called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Title" },
              { id: "b", text: "Caption" },
              { id: "c", text: "Index" },
              { id: "d", text: "Contents" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Caption",
                statement: "Text explaining a picture.",
              },
            ],
            steps: [
              {
                reasoning: "Text under picture = caption.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: caption.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Caption",
            commonErrors: ["Calling it a title."],
          },
        },
        {
          id: "edpe2-u2-nf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a book about animals, you want to find 'whales' quickly. Which feature should you use?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Index/contents",
                statement: "Index or contents page.",
              },
            ],
            steps: [
              {
                reasoning: "Identify lookup feature.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Index gives A-Z topics.", marks: 1, markCode: "A" },
              { reasoning: "Or contents page.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The index or contents page",
            commonErrors: ["Reading every page — inefficient."],
          },
        },
        {
          id: "edpe2-u2-nf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Text: 'Sharks are fish that live in the sea. They have sharp teeth and a skeleton made of cartilage.'",
          parts: [
            { label: "a", prompt: "Where do sharks live?", marks: 1 },
            {
              label: "b",
              prompt: "What are two features of sharks?",
              marks: 1,
            },
            {
              label: "c",
              prompt: "Is a shark's skeleton made of bone? Why not?",
              marks: 1,
            },
            {
              label: "d",
              prompt:
                "What book feature would help you find more about sharks?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-fiction reading",
                statement:
                  "Sea; sharp teeth, cartilage; no — cartilage not bone; index/contents.",
              },
            ],
            steps: [
              { part: "a", reasoning: "In the sea.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Sharp teeth, cartilage skeleton.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "No — cartilage not bone.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Index or contents page.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sea; sharp teeth/cartilage; no, cartilage; index/contents",
            commonErrors: ["For (c): not understanding 'cartilage'."],
          },
        },
      ],
    },
    {
      id: "edpe2-u2-comparison",
      title: "Comparing texts",
      skill: "Compare similar stories or information texts.",
      lesson: {
        sections: [
          {
            heading: "Same or different?",
            body: "Compare two texts: 'The Three Little Pigs' and 'The Three Billy Goats Gruff' — both have three animals and a villain, but different settings. Compare characters, settings, and endings.",
          },
          {
            heading: "Fiction vs non-fiction",
            body: "Fiction tells made-up stories; non-fiction gives real facts. Compare: 'The Hungry Caterpillar' (fiction) vs 'All About Butterflies' (non-fiction) — same topic, different purpose.",
          },
        ],
        keyFormulas: [
          { name: "Compare", statement: "Find similarities and differences" },
          { name: "Fiction", statement: "Made-up story" },
          { name: "Non-fiction", statement: "Real information" },
        ],
        workedExample: {
          problem: "Compare 'Cinderella' and 'Snow White' — what's the same?",
          solution: "Both princesses, magic help, happy endings.",
        },
      },
      questions: [
        {
          id: "edpe2-u2-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do 'The Three Little Pigs' and 'The Three Billy Goats Gruff' have in common?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same characters" },
              { id: "b", text: "Three main animals" },
              { id: "c", text: "Same setting" },
              { id: "d", text: "Same ending" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparison",
                statement: "Both have three animals.",
              },
            ],
            steps: [{ reasoning: "Find similarity.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Three main animals",
            commonErrors: ["Choosing 'same characters' — different animals."],
          },
        },
        {
          id: "edpe2-u2-co-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How is 'The Very Hungry Caterpillar' different from 'All About Caterpillars'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One is fiction, one is non-fiction" },
              { id: "b", text: "They're the same" },
              { id: "c", text: "One is longer" },
              { id: "d", text: "Different animals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fiction vs non-fiction",
                statement: "Story vs facts.",
              },
            ],
            steps: [
              { reasoning: "Identify text types.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: fiction vs non-fiction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Fiction vs non-fiction",
            commonErrors: ["Thinking they're identical."],
          },
        },
        {
          id: "edpe2-u2-co-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare 'Cinderella' and 'Snow White'. Give one similarity and one difference.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparison",
                statement:
                  "Similar: princesses/magic; different: plot details.",
              },
            ],
            steps: [
              { reasoning: "Similarity identified.", marks: 1, markCode: "A" },
              { reasoning: "Difference identified.", marks: 1, markCode: "A" },
              { reasoning: "Both accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Similar: princesses/magic; different: plot",
            commonErrors: ["Only similarities or only differences."],
          },
        },
        {
          id: "edpe2-u2-co-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare these two texts about dogs: 'The Dog Who Saved the Cat' (story) and 'Dogs: A Fact Book' (information).",
          parts: [
            { label: "a", prompt: "What type is each text?", marks: 1 },
            { label: "b", prompt: "What is the purpose of each?", marks: 1 },
            { label: "c", prompt: "What features would each have?", marks: 1 },
            {
              label: "d",
              prompt: "Which would you choose to learn facts about dogs? Why?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Text comparison",
                statement:
                  "Fiction vs non-fiction; entertain vs inform; story vs facts.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Story=fiction; fact book=non-fiction.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Entertain vs teach facts.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Plot/characters vs facts/labels.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Fact book — gives real information.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Fiction vs non-fiction; entertain vs inform; story vs facts; fact book",
            commonErrors: ["Confusing purposes."],
          },
        },
      ],
    },
  ],
};
