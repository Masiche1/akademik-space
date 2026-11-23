import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edpe2-u4-lesson-4-1",
  code: "4-1",
  title: "Comprehension: Inference and Prediction",
  goal: "I CAN make inferences and predictions from texts.",
  standards: ["Year 2 Reading"],
  vocabulary: [
    {
      term: "Inference",
      definition: "Working out something the text doesn't say directly.",
    },
    {
      term: "Prediction",
      definition: "Guessing what will happen next in a story.",
    },
    {
      term: "Evidence",
      definition: "Clues in the text that support your answer.",
    },
    {
      term: "Clue",
      definition: "Information that helps you work something out.",
    },
  ],
  concepts: [
    {
      id: "edpe2-u4-inference",
      title: "Making inferences",
      skill: "Use clues in the text to work out what isn't said directly.",
      lesson: {
        sections: [
          {
            heading: "Inference",
            body: "Inference means reading between the lines. If a story says 'Sam put on his coat and took his umbrella', you can infer it might rain — even though the text doesn't say so. Use clues and what you already know.",
          },
          {
            heading: "Finding evidence",
            body: "Good inferences use evidence from the text. Point to the words that gave you the clue. 'It was inference because the text says ___' shows your thinking.",
          },
        ],
        keyFormulas: [
          {
            name: "Inference",
            statement: "Clue in text + what I know = what I can work out",
          },
        ],
        workedExample: {
          problem:
            "Story: 'The girl shivered and pulled her blanket tight.' What can you infer?",
          solution:
            "She was cold. The clues 'shivered' and 'blanket' suggest cold.",
        },
      },
      questions: [
        {
          id: "edpe2-u4-inf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'inference' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading the words out loud" },
              { id: "b", text: "Working out something not said directly" },
              { id: "c", text: "Skipping parts of the text" },
              { id: "d", text: "Memorising the story" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inference",
                statement: "Working out unstated information.",
              },
            ],
            steps: [
              {
                reasoning: "Inference = reading between the lines.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Working out unstated info",
            commonErrors: ["Confusing with retelling."],
          },
        },
        {
          id: "edpe2-u4-inf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Story: 'Ben rubbed his eyes and yawned.' What can you infer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ben is hungry" },
              { id: "b", text: "Ben is tired or sleepy" },
              { id: "c", text: "Ben is angry" },
              { id: "d", text: "Ben is running" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement: "Rubbing eyes and yawning = sleepy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'rubbed his eyes' and 'yawned' are clues for sleepiness.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Ben is sleepy",
            commonErrors: ["Wrong inference."],
          },
        },
        {
          id: "edpe2-u4-inf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Story: 'The boy put on his wellies and picked up his bucket.' What is he probably going to do? Use evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement: "Going to the beach or playing in water.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Wellies = water or mud; bucket = collecting or building.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Likely going to the beach or playing in puddles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evidence: 'wellies' and 'bucket'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Going to beach or playing in water",
            commonErrors: ["No evidence given."],
          },
        },
        {
          id: "edpe2-u4-inf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Story: 'Maria looked at the dark clouds and heard thunder. She quickly closed the windows.' What can you infer about the weather? Give two pieces of evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement: "Rain or storm coming; evidence: clouds, thunder.",
              },
            ],
            steps: [
              {
                reasoning: "Dark clouds and thunder suggest rain or storm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evidence 1: 'dark clouds'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence 2: 'heard thunder'; closing windows supports rain coming.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Rain/storm; evidence: dark clouds and thunder",
            commonErrors: ["Only one piece of evidence."],
          },
        },
      ],
    },
    {
      id: "edpe2-u4-predict",
      title: "Predicting what happens next",
      skill: "Use clues to predict what will happen in a story.",
      lesson: {
        sections: [
          {
            heading: "Prediction",
            body: "Prediction means guessing what will happen next. Use what has happened so far and clues in the text. Think: What would make sense? What would the character do? Predictions can be right or wrong — that's okay!",
          },
          {
            heading: "Good predictions",
            body: "Good predictions use evidence: 'I think the bear will be friendly because earlier it shared its food.' Bad predictions ignore the story: 'I think aliens will come' with no clues.",
          },
        ],
        keyFormulas: [
          {
            name: "Prediction",
            statement: "What has happened + clues = what might happen next",
          },
        ],
        workedExample: {
          problem:
            "Story: 'The boy climbed the tree. He reached for the apples.' Predict what happens next.",
          solution:
            "He picks the apples or falls. Either is a reasonable prediction.",
        },
      },
      questions: [
        {
          id: "edpe2-u4-pre-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a prediction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Knowing exactly what happens" },
              { id: "b", text: "Guessing what might happen next" },
              { id: "c", text: "Reading the last page first" },
              { id: "d", text: "Skipping the story" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prediction",
                statement: "Guessing what happens next.",
              },
            ],
            steps: [
              {
                reasoning: "Prediction = educated guess about next events.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Guessing what happens next",
            commonErrors: ["Confusing with certainty."],
          },
        },
        {
          id: "edpe2-u4-pre-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Story: 'The girl planted a seed and watered it every day.' What will probably happen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The seed will disappear" },
              { id: "b", text: "A plant will grow" },
              { id: "c", text: "It will rain" },
              { id: "d", text: "Nothing will happen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Prediction",
                statement: "Watered seeds grow.",
              },
            ],
            steps: [
              {
                reasoning: "Seeds watered daily will grow into plants.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** A plant will grow",
            commonErrors: ["Unlikely prediction."],
          },
        },
        {
          id: "edpe2-u4-pre-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Story: 'Tom heard a noise behind the door. He opened it slowly.' Predict what Tom might find. Give a reason.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Prediction",
                statement: "Reasonable prediction with reason.",
              },
            ],
            steps: [
              {
                reasoning: "Something or someone made the noise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Could be a pet, friend, or stranger.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reason: the noise behind the door suggests someone/something is there.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Someone or something behind the door",
            commonErrors: ["No reason given."],
          },
        },
        {
          id: "edpe2-u4-pre-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Story: 'The little bird fell out of its nest. Its mother was not there.' Predict two things that might happen next.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Prediction",
                statement: "Two reasonable predictions.",
              },
            ],
            steps: [
              { reasoning: "Mother might return.", marks: 1, markCode: "M" },
              {
                reasoning: "Someone might help the bird.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both predictions linked to story clues.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Mother returns or someone helps",
            commonErrors: ["Unrelated predictions."],
          },
        },
      ],
    },
    {
      id: "edpe2-u4-nonfiction",
      title: "Non-fiction texts",
      skill: "Read and understand non-fiction texts like information books.",
      lesson: {
        sections: [
          {
            heading: "Non-fiction",
            body: "Non-fiction texts give real information: facts about animals, places, science, history. They have features like headings, labels, diagrams, captions and indexes. Non-fiction is for learning, not stories.",
          },
          {
            heading: "Text features",
            body: "Headings tell you what a section is about. Bold words are important. Diagrams and pictures show information. Captions explain pictures. The index at the back helps you find topics quickly.",
          },
        ],
        keyFormulas: [
          {
            name: "Non-fiction",
            statement: "Real facts and information, not made-up stories",
          },
        ],
        workedExample: {
          problem: "What is the heading 'Life Cycle of a Frog' telling you?",
          solution: "The section is about how a frog grows and changes.",
        },
      },
      questions: [
        {
          id: "edpe2-u4-nf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is non-fiction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Made-up stories" },
              { id: "b", text: "Real facts and information" },
              { id: "c", text: "Poems" },
              { id: "d", text: "Cartoons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-fiction",
                statement: "Real information.",
              },
            ],
            steps: [
              {
                reasoning: "Non-fiction gives real facts.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Real facts and information",
            commonErrors: ["Confusing with fiction."],
          },
        },
        {
          id: "edpe2-u4-nf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a heading in a non-fiction book do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tells you what the section is about" },
              { id: "b", text: "Is just decoration" },
              { id: "c", text: "Ends the book" },
              { id: "d", text: "Shows the price" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Text features",
                statement: "Headings label sections.",
              },
            ],
            steps: [
              {
                reasoning: "Headings tell you the topic of each section.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Tells section topic",
            commonErrors: ["Not understanding headings."],
          },
        },
        {
          id: "edpe2-u4-nf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A book about animals has a picture of a frog with the caption 'Frogs can jump 20 times their body length.' What does the caption tell you?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Text features",
                statement: "Caption explains the picture with facts.",
              },
            ],
            steps: [
              {
                reasoning: "Caption explains what the picture shows.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It gives a fact about frog jumping ability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Captions add information to pictures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Caption explains picture with a fact about frogs",
            commonErrors: ["Not understanding captions."],
          },
        },
        {
          id: "edpe2-u4-nf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You want to find information about 'whales' in a book about sea creatures. Which feature would you use first? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Text features",
                statement: "Index or contents helps find topics.",
              },
            ],
            steps: [
              {
                reasoning: "Use the index or contents to find the whale page.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Index lists topics alphabetically with page numbers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This is faster than reading every page.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Index or contents to find whale page quickly",
            commonErrors: ["Reading whole book."],
          },
        },
      ],
    },
    {
      id: "edpe2-u4-compare",
      title: "Comparing stories",
      skill: "Compare two texts and find similarities and differences.",
      lesson: {
        sections: [
          {
            heading: "Comparing texts",
            body: "When comparing two stories, look for: same or different characters, settings, problems, endings. Use words like 'both', 'same', 'different', 'whereas', 'but'. 'Both stories have animals, but one is in the forest and one is at the beach.'",
          },
          {
            heading: "Similarities and differences",
            body: "Similarities: both have a problem, both have a happy ending. Differences: different characters, different settings, different problems. A Venn diagram helps: put similarities in the middle, differences on each side.",
          },
        ],
        keyFormulas: [
          {
            name: "Comparing",
            statement: "Both/same = similarities; different/but = differences",
          },
        ],
        workedExample: {
          problem:
            "Compare: Story A has a dog who finds a bone. Story B has a cat who finds a fish.",
          solution:
            "Both animals find food. Different animals (dog vs cat) and different food (bone vs fish).",
        },
      },
      questions: [
        {
          id: "edpe2-u4-cp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'compare' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tell one story" },
              { id: "b", text: "Find similarities and differences" },
              { id: "c", text: "Skip the story" },
              { id: "d", text: "Write a new story" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compare",
                statement: "Find similarities and differences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Comparing means looking at what's the same and different.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Similarities and differences",
            commonErrors: ["Only finding differences."],
          },
        },
        {
          id: "edpe2-u4-cp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Story A: girl finds a puppy. Story B: boy finds a kitten. What is the same?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both find animals" },
              { id: "b", text: "Both are girls" },
              { id: "c", text: "Both find cats" },
              { id: "d", text: "Nothing is the same" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing",
                statement: "Both find animals.",
              },
            ],
            steps: [
              {
                reasoning: "Both stories have a character finding an animal.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Both find animals",
            commonErrors: ["Missing the similarity."],
          },
        },
        {
          id: "edpe2-u4-cp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare: 'The mouse helps the lion' vs 'The lion helps the mouse'. What is different about who helps whom?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing",
                statement: "Roles reversed.",
              },
            ],
            steps: [
              {
                reasoning: "In first, mouse helps lion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "In second, lion helps mouse.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The helper and helped are swapped.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Helper and helped roles are reversed",
            commonErrors: ["Not seeing the reversal."],
          },
        },
        {
          id: "edpe2-u4-cp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare two stories: 'The Three Little Pigs' (pigs build houses) and 'The Gingerbread Man' (gingerbread man runs away). Give two similarities and two differences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing",
                statement: "2 similarities + 2 differences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Similar: both have animals/characters, both have a problem.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Different: pigs stay and build; gingerbread man runs away.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Different endings: pigs win; gingerbread man is eaten.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Similar: characters+problem; Different: actions+endings",
            commonErrors: ["Missing similarities or differences."],
          },
        },
      ],
    },
  ],
};
