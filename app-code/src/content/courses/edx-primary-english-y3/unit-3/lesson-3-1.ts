import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "edpe3-u3-lesson-3-1",
  code: "3-1",
  title: "Paragraphs and Text Structure",
  goal: "I CAN organise writing into paragraphs with a clear structure.",
  standards: ["Year 3 Writing"],
  vocabulary: [
    { term: "Paragraph", definition: "A group of sentences about one idea." },
    {
      term: "Topic sentence",
      definition: "The first sentence telling what the paragraph is about.",
    },
    {
      term: "Text structure",
      definition: "How writing is organised: beginning, middle, end.",
    },
    {
      term: "Connective",
      definition: "A word linking sentences: however, therefore, first.",
    },
  ],
  concepts: [
    {
      id: "edpe3-u3-paragraphs",
      title: "Writing paragraphs",
      skill: "Organise ideas into clear paragraphs.",
      lesson: {
        sections: [
          {
            heading: "One idea per paragraph",
            body: "A paragraph groups sentences about ONE idea. 'My holiday' paragraph: where you went, what you did. New idea = new paragraph. Start with a topic sentence, then supporting details.",
          },
          {
            heading: "Connectives",
            body: "Link sentences smoothly: **and** (adds), **but** (contrasts), **so** (result), **because** (reason), **then** (time), **however** (contrast), **therefore** (result). They make writing flow.",
          },
        ],
        keyFormulas: [
          {
            name: "Paragraph",
            statement: "One idea, topic sentence + details",
          },
          { name: "Connectives", statement: "and, but, so, because, however" },
        ],
        workedExample: {
          problem: "What goes in a paragraph about 'My Pet'?",
          solution:
            "Topic sentence: 'I have a pet dog.' Then details about its name, colour, habits.",
        },
      },
      questions: [
        {
          id: "edpe3-u3-pa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A group of sentences about one idea" },
              { id: "b", text: "A list of words" },
              { id: "c", text: "A single word" },
              { id: "d", text: "One long sentence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Paragraph",
                statement: "Sentences about one idea.",
              },
            ],
            steps: [
              { reasoning: "Paragraph structure.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A group of sentences about one idea",
            commonErrors: ["Confusing with sentence."],
          },
        },
        {
          id: "edpe3-u3-pa-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which connective shows contrast? 'I wanted to play ___ it was raining.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "so" },
              { id: "b", text: "but" },
              { id: "c", text: "because" },
              { id: "d", text: "and" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Connective",
                statement: "but = contrast.",
              },
            ],
            steps: [
              {
                reasoning: "Wanted vs rained = contrast.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: but.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** but",
            commonErrors: ["Choosing 'and'."],
          },
        },
        {
          id: "edpe3-u3-pa-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a topic sentence for a paragraph about your favourite food.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Topic sentence",
                statement: "e.g. 'My favourite food is pizza.'",
              },
            ],
            steps: [
              { reasoning: "Clear topic stated.", marks: 1, markCode: "M" },
              { reasoning: "Complete sentence.", marks: 1, markCode: "A" },
              { reasoning: "Suitable for paragraph.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'My favourite food is pizza.'",
            commonErrors: ["Too vague or not a sentence."],
          },
        },
        {
          id: "edpe3-u3-pa-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a short paragraph (3-4 sentences) about a rainy day using connectives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Paragraph writing",
                statement: "3-4 sentences with connectives about rain.",
              },
            ],
            steps: [
              { reasoning: "Topic sentence present.", marks: 1, markCode: "A" },
              { reasoning: "Connectives used.", marks: 1, markCode: "A" },
              { reasoning: "Sentences about rain.", marks: 1, markCode: "A" },
              { reasoning: "Paragraph flows well.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'It rained all day, so we stayed inside. We played board games and read books because it was too wet to go out.'",
            commonErrors: ["No connectives or off-topic."],
          },
        },
      ],
    },
    {
      id: "edpe3-u3-planning",
      title: "Planning and structuring writing",
      skill: "Plan non-fiction and fiction writing with clear structure.",
      lesson: {
        sections: [
          {
            heading: "Planning first",
            body: "Before writing, decide: what's the topic? what's the main point? what order will ideas go in? For stories: character, setting, problem, solution. For reports: heading, facts, conclusion.",
          },
          {
            heading: "Structure matters",
            body: "Good writing has a beginning (introduce), middle (develop), end (conclude). 'The Romans came to Britain' — intro; 'They built roads and towns' — develop; 'Their influence remains today' — conclude.",
          },
        ],
        keyFormulas: [
          { name: "Plan", statement: "Topic + main point + order" },
          { name: "Structure", statement: "Beginning → middle → end" },
        ],
        workedExample: {
          problem: "Plan a report about 'My School'.",
          solution:
            "Intro: name, location. Develop: classrooms, teachers, activities. Conclude: why I like it.",
        },
      },
      questions: [
        {
          id: "edpe3-u3-pl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do before writing a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Draw a picture" },
              { id: "b", text: "Start writing immediately" },
              { id: "c", text: "Plan the structure and facts" },
              { id: "d", text: "Read a story" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Planning",
                statement: "Plan before writing.",
              },
            ],
            steps: [
              {
                reasoning: "Planning improves structure.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Plan the structure and facts",
            commonErrors: ["Skipping planning."],
          },
        },
        {
          id: "edpe3-u3-pl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the correct structure for most writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Middle, end, beginning" },
              { id: "b", text: "Beginning, middle, end" },
              { id: "c", text: "End, middle, beginning" },
              { id: "d", text: "Random order" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Structure", statement: "B-M-E." },
            ],
            steps: [
              { reasoning: "Standard writing order.", marks: 1, markCode: "M" },
              { reasoning: "Answer: B-M-E.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Beginning, middle, end",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edpe3-u3-pl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Plan a story about a lost puppy. List character, setting, problem, solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Story planning",
                statement: "Four elements planned.",
              },
            ],
            steps: [
              { reasoning: "Character given.", marks: 1, markCode: "A" },
              { reasoning: "Setting given.", marks: 1, markCode: "A" },
              { reasoning: "Problem and solution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Girl; park; puppy lost; finds puppy'",
            commonErrors: ["Missing elements."],
          },
        },
        {
          id: "edpe3-u3-pl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the opening paragraph (3-4 sentences) of a story about a magic tree.",
          parts: [
            { label: "a", prompt: "Introduce the setting.", marks: 1 },
            { label: "b", prompt: "Introduce the character.", marks: 1 },
            { label: "c", prompt: "Hint at the magic.", marks: 1 },
            { label: "d", prompt: "Check punctuation and flow.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Story opening",
                statement: "Setting, character, magic hint.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Setting described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Character introduced.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Magic hinted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Punctuation correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. 'In the forest there was an old tree. Its leaves glowed gold at night. A girl named Amy discovered its secret.'",
            commonErrors: ["No story structure."],
          },
        },
      ],
    },
  ],
};
