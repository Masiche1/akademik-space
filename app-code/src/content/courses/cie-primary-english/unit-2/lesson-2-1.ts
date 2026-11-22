import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cipe-u2-lesson-2-1",
  code: "2-1",
  title: "Stage 4 — Reading for Inference",
  goal: "I CAN read a passage and infer what is not directly stated.",
  standards: ["Cambridge Primary English 0058 Stage 4: reading",
  "Cambridge Primary English 0058 framework substrands: 4Ri"],
  stage: 4,
  vocabulary: [
    { term: "Inference", definition: "Working out meaning using clues in the text." },
    { term: "Literal", definition: "What the text says directly." },
    { term: "Mood", definition: "The feeling of a text." },
    { term: "Tone", definition: "The writer's attitude towards the subject." },
    { term: "Evidence", definition: "Words or details from the text that support an answer." },
  ],
  concepts: [
    {
      id: "cipe-u2-s4-inference",
      title: "Inferring meaning",
      skill: "Infer character feelings and events at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Literal vs inference",
            body: "Literal questions ask what the text says directly. Inference questions ask what you can work out from clues — feelings, reasons, or what happens next.",
          },
          {
            heading: "Finding clues",
            body: "Look for describing words, actions and speech. If a character 'stamped their feet', you can infer they are angry even if the text does not say so.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Read: 'Lily hugged her mum tightly and smiled.' How does Lily feel?",
          solution: "Lily feels happy and loving — the words 'hugged' and 'smiled' are the clues.",
        },
      },
      questions: [
        {
          id: "cipe-u2-s4-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an inference?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Working out meaning from clues" },
            { id: "b", text: "Writing a summary" },
            { id: "c", text: "Copying words from the text" },
            { id: "d", text: "Reading aloud" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Inference", statement: "Working out unstated meaning from clues." }],
            steps: [{ reasoning: "Inference means using clues to understand more than the literal words.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Working out meaning from clues",
          },
        },
        {
          id: "cipe-u2-s4-in-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Lost Scarf",
            author: "Written for Akademik Space",
            text: "Tom searched everywhere for his red scarf. He checked under the bed, behind the sofa and in every drawer. When he could not find it, he sat down and sighed.",
          },
          stem: "How does Tom feel when he cannot find the scarf?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Use clues like 'sighed' to infer feelings." }],
            steps: [
              { reasoning: "The clue is 'he sat down and sighed'.", marks: 1, markCode: "AO2" },
              { reasoning: "Tom feels sad or worried because he cannot find his scarf.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Sad or worried",
          },
        },
        {
          id: "cipe-u2-s4-in-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Rainy Day",
            author: "Written for Akademik Space",
            text: "The sky turned dark grey. People hurried home with umbrellas. The rain hammered on the windows and the streets glistened.",
          },
          stem: "What does 'the streets glistened' tell you about the weather?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Infer meaning from describing words." }],
            steps: [
              { reasoning: "'Glistened' means the streets were wet and shiny.", marks: 1, markCode: "AO2" },
              { reasoning: "This tells us it had been raining and the ground was wet.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: the streets were wet from rain.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Streets were wet from rain",
          },
        },
        {
          id: "cipe-u2-s4-in-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Exam",
            author: "Written for Akademik Space",
            text: "Amara's hands trembled as she opened the exam paper. She took a deep breath, closed her eyes for a moment, then began to write.",
          },
          stem: "How does Amara feel before the exam? Use evidence from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference with evidence", statement: "Quote clues and explain the feeling." }],
            steps: [
              { reasoning: "Clue: 'her hands trembled'.", marks: 1, markCode: "AO2" },
              { reasoning: "Clue: 'took a deep breath'.", marks: 1, markCode: "AO2" },
              { reasoning: "These suggest she feels nervous or anxious.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: nervous/anxious, supported by the trembling hands.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Nervous — trembling hands",
          },
        },
        {
          id: "cipe-u2-s4-in-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which question requires inference rather than finding the answer directly in the text?",
          response: { type: "mcq", choices: [
            { id: "a", text: "What colour is the car?" },
            { id: "b", text: "What is the character's name?" },
            { id: "c", text: "How does the character feel?" },
            { id: "d", text: "Where does the story happen?" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Inference", statement: "Working out unstated meaning from clues." }],
            steps: [{ reasoning: "Feelings are not stated directly — you infer them from clues.", marks: 1, markCode: "AO1" }],
            finalAnswer: "How does the character feel?",
          },
        },
        {
          id: "cipe-u2-s4-in-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Read: 'Mia grinned from ear to ear.' How does Mia feel?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Angry" },
            { id: "b", text: "Bored" },
            { id: "c", text: "Sad" },
            { id: "d", text: "Happy" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Use clues like actions to infer feelings." }],
            steps: [{ reasoning: "Grinning from ear to ear shows happiness.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Happy",
          },
        },
        {
          id: "cipe-u2-s4-in-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Read: 'The wind howled. The door banged. Shadows moved on the wall.' How many sentences are in this extract? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence counting", statement: "Each full stop ends a sentence." }],
            steps: [
              { reasoning: "Three full stops = three sentences.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-s4-in-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read: 'The old house stood alone on the hill, its windows dark and empty.' What is the mood of this description?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Excited" },
            { id: "b", text: "Cheerful" },
            { id: "c", text: "Funny" },
            { id: "d", text: "Scary or mysterious" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Mood", statement: "The feeling created by describing words." }],
            steps: [{ reasoning: "'Alone', 'dark' and 'empty' create a scary/mysterious mood.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Scary or mysterious",
          },
        },
        {
          id: "cipe-u2-s4-in-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read: 'She tiptoed into the room and held her breath.' How many describing/action words tell you she is being careful? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Clue spotting", statement: "Actions and describing words are clues." }],
            steps: [
              { reasoning: "'tiptoed' and 'held her breath' = 2 clues.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipe-u2-s4-in-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Read: 'Jack paced up and down the room, checking his watch every few seconds.' How does Jack probably feel?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Use clues to infer feelings." }],
            steps: [
              { reasoning: "Clues: pacing and checking the watch.", marks: 1, markCode: "AO2" },
              { reasoning: "Jack feels anxious or worried — he is waiting for something.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Anxious or worried",
          },
        },
        {
          id: "cipe-u2-s4-in-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which piece of evidence best supports the inference that a character is excited?",
          response: { type: "mcq", choices: [
            { id: "a", text: "'They sat quietly.'" },
            { id: "b", text: "'He yawned and stretched.'" },
            { id: "c", text: "'She slept all day.'" },
            { id: "d", text: "'She bounced on her toes, clapping her hands.'" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evidence", statement: "Quote clues that support an answer." }],
            steps: [{ reasoning: "Bouncing and clapping show excitement.", marks: 1, markCode: "AO2" }],
            finalAnswer: "'She bounced on her toes, clapping her hands.'",
          },
        },
        {
          id: "cipe-u2-s4-in-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read: 'Nadia refused to eat her dinner and pushed the plate away.' Why might Nadia be behaving this way? Use a clue from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference with evidence", statement: "Quote the clue and explain." }],
            steps: [
              { reasoning: "Clue: she pushed the plate away and would not eat.", marks: 1, markCode: "AO2" },
              { reasoning: "Possible reasons: she is not hungry, upset, or does not like the food.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer links the clue to the inference.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. She is upset or not hungry — pushing the plate away shows she does not want it.",
          },
        },
        {
          id: "cipe-u2-s4-in-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many words are in the sentence 'The children ran quickly to the gate'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "The-children-ran-quickly-to-the-gate = 7 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 7.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cipe-u2-s4-in-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Read: 'The narrator described the garden as warm, golden and peaceful.' What is the tone of this description?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Angry" },
            { id: "b", text: "Scary" },
            { id: "c", text: "Calm and happy" },
            { id: "d", text: "Confused" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Tone", statement: "The writer's attitude towards the subject." }],
            steps: [{ reasoning: "'Warm, golden, peaceful' show a calm, happy attitude.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Calm and happy",
          },
        },
        {
          id: "cipe-u2-s4-in-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read: 'Ben scratched his head and stared at the locked door. Then he tried the handle again.' Infer two things about Ben's situation and support each with a clue.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Multiple inferences", statement: "Each inference needs a supporting clue." }],
            steps: [
              { reasoning: "Inference 1: Ben is trying to get in — clue: he tried the handle.", marks: 1, markCode: "AO2" },
              { reasoning: "Inference 2: Ben is confused or frustrated — clue: he scratched his head and stared.", marks: 1, markCode: "AO2" },
              { reasoning: "Each inference is linked to a specific clue.", marks: 1, markCode: "AO3" },
              { reasoning: "Two sensible, supported inferences given.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. wants to enter (tried handle); confused/frustrated (scratched head)",
          },
        },
        {
          id: "cipe-u2-s4-in-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read: 'The bakery opened at dawn. Warm bread smells drifted down the street, and people queued before the doors even opened.' Write two inferences about the bakery, each with evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference with evidence", statement: "Quote clues and explain what they show." }],
            steps: [
              { reasoning: "Inference 1: the bakery is popular — people queued before it opened.", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: 'people queued before the doors even opened'.", marks: 1, markCode: "AO2" },
              { reasoning: "Inference 2: the bread smells inviting/fresh — 'warm bread smells drifted down the street'.", marks: 1, markCode: "AO2" },
              { reasoning: "Two inferences clearly supported by quoted evidence.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. popular (queue before opening); inviting smell (warm bread smells)",
          },
        },
      ],
    },
    {
      id: "cipe-u2-s4-compare",
      title: "Comparing and summarising",
      skill: "Compare texts and summarise main ideas at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Comparing texts",
            body: "When comparing two texts, look at what they have in common and how they differ — characters, settings, events or feelings.",
          },
          {
            heading: "Summarising",
            body: "A summary tells the main points in your own words. Do not include every small detail — just the most important events.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Summarise: 'A girl finds a lost dog and returns it to its owner.'",
          solution: "A girl finds a lost dog and returns it to its owner — this is already a short summary of the main event.",
        },
      },
      questions: [
        {
          id: "cipe-u2-s4-cp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a summary?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The title" },
            { id: "b", text: "The main points in your own words" },
            { id: "c", text: "Every detail of the text" },
            { id: "d", text: "A list of characters" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Summary", statement: "Main points in your own words." }],
            steps: [{ reasoning: "A summary gives the key points briefly, not every detail.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Main points",
          },
        },
        {
          id: "cipe-u2-s4-cp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main event in this text? 'Sam planted a seed. He watered it every day. A week later, a small plant appeared.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Main idea", statement: "Identify the most important event." }],
            steps: [
              { reasoning: "The main event is that a plant grew from the seed.", marks: 1, markCode: "AO1" },
              { reasoning: "Sam planted and watered the seed, then it grew.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "A plant grew",
          },
        },
        {
          id: "cipe-u2-s4-cp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read: 'The market was crowded and noisy. Stalls sold fruit, bread and clothes.' What kind of place is described?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Summarising", statement: "Identify the main description." }],
            steps: [
              { reasoning: "The text describes a market.", marks: 1, markCode: "AO1" },
              { reasoning: "It is crowded, noisy, and sells fruit, bread and clothes.", marks: 1, markCode: "AO1" },
              { reasoning: "Answer: a busy market selling food and clothes.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "A busy market",
          },
        },
        {
          id: "cipe-u2-s4-cp-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write one sentence summarising what happened in a story you have read.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Summary", statement: "One sentence with the main event." }],
            steps: [
              { reasoning: "The sentence includes the main character.", marks: 1, markCode: "AO1" },
              { reasoning: "It includes the main event or problem.", marks: 1, markCode: "AO1" },
              { reasoning: "It is in your own words, not copied.", marks: 1, markCode: "AO1" },
              { reasoning: "Punctuation is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One sentence summary",
          },
        },
        {
          id: "cipe-u2-s4-cp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When comparing two texts, what should you look for?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The number of pages" },
            { id: "b", text: "Only the differences" },
            { id: "c", text: "What they have in common and how they differ" },
            { id: "d", text: "Only the titles" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Comparing texts", statement: "Look at similarities and differences." }],
            steps: [{ reasoning: "Comparison covers both what is shared and what differs.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Similarities and differences",
          },
        },
        {
          id: "cipe-u2-s4-cp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Read: 'A boy finds a kite stuck in a tree. He climbs up and frees it, then flies it in the park.' What is the best one-sentence summary?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A boy frees a kite from a tree and flies it." },
            { id: "b", text: "A boy has a kite." },
            { id: "c", text: "The kite was lost forever." },
            { id: "d", text: "A boy climbs a tree every day." },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Summarising", statement: "Main event in your own words." }],
            steps: [{ reasoning: "Option b covers the main events: freeing the kite and flying it.", marks: 1, markCode: "AO2" }],
            finalAnswer: "A boy frees a kite from a tree and flies it.",
          },
        },
        {
          id: "cipe-u2-s4-cp-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Read: 'The rain stopped. The sun came out. Children ran outside to play.' How many sentences are in this text? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence counting", statement: "Each full stop ends a sentence." }],
            steps: [
              { reasoning: "Three full stops = three sentences.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-s4-cp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Text A: 'The desert was hot and dry.' Text B: 'The forest was cool and green.' What is the main difference?",
          response: { type: "mcq", choices: [
            { id: "a", text: "One is hot and dry; the other is cool and green" },
            { id: "b", text: "One is about animals" },
            { id: "c", text: "They are the same" },
            { id: "d", text: "One is a story" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Comparing", statement: "Spot differences in description." }],
            steps: [{ reasoning: "The descriptions contrast: hot/dry vs cool/green.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Hot/dry vs cool/green",
          },
        },
        {
          id: "cipe-u2-s4-cp-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many words are in the summary sentence 'A girl found a lost dog.'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "A-girl-found-a-lost-dog = 6 words? Count: A, girl, found, a, lost, dog = 6.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 6.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cipe-u2-s4-cp-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a one-sentence summary of this text: 'A farmer wakes early, feeds the animals and collects fresh eggs each morning.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Summarising", statement: "Main points in your own words." }],
            steps: [
              { reasoning: "The sentence captures the farmer's daily routine.", marks: 1, markCode: "AO2" },
              { reasoning: "One complete, punctuated sentence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'Each morning the farmer feeds the animals and collects eggs.'",
          },
        },
        {
          id: "cipe-u2-s4-cp-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which detail should be LEFT OUT of a short summary?",
          response: { type: "mcq", choices: [
            { id: "a", text: "How the story ends" },
            { id: "b", text: "The colour of the character's socks" },
            { id: "c", text: "The problem in the story" },
            { id: "d", text: "The main event" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Summarising", statement: "Only the most important events." }],
            steps: [{ reasoning: "Small details like sock colour are not main points.", marks: 1, markCode: "AO2" }],
            finalAnswer: "The colour of the character's socks",
          },
        },
        {
          id: "cipe-u2-s4-cp-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Text A: 'Swimming is fun because you can splash and float.' Text B: 'Swimming is hard because you must keep moving.' Give one similarity between the texts.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Comparing", statement: "Find what the texts share." }],
            steps: [
              { reasoning: "Both texts are about swimming.", marks: 1, markCode: "AO2" },
              { reasoning: "Similarity clearly stated.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer is accurate.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Both are about swimming",
          },
        },
        {
          id: "cipe-u2-s4-cp-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many sentences are in this extract: 'The ship sailed all night. The crew sang songs to stay awake. At dawn they saw land.'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence counting", statement: "Each full stop ends a sentence." }],
            steps: [
              { reasoning: "Three full stops = three sentences.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-s4-cp-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do summaries leave out small details?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Because readers do not want to know" },
            { id: "b", text: "Because they are boring to write" },
            { id: "c", text: "Because details are always wrong" },
            { id: "d", text: "Because summaries only need the most important points" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Summarising", statement: "Main points only, briefly." }],
            steps: [{ reasoning: "A summary is short, so it keeps only key events.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Summaries only need the most important points",
          },
        },
        {
          id: "cipe-u2-s4-cp-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read: 'Every winter, the town floods when the river rises. Residents move their furniture upstairs. Volunteers build sandbag walls. When the water drops, everyone helps clean up.' Write a two-sentence summary.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Summarising", statement: "Main events in your own words." }],
            steps: [
              { reasoning: "Main point 1: the town floods each winter when the river rises.", marks: 1, markCode: "AO2" },
              { reasoning: "Main point 2: people protect and clean up afterwards.", marks: 1, markCode: "AO2" },
              { reasoning: "Two complete sentences in own words.", marks: 1, markCode: "AO2" },
              { reasoning: "No unnecessary small details included.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'Every winter the river floods the town. Residents and volunteers protect their homes and clean up afterwards.'",
          },
        },
        {
          id: "cipe-u2-s4-cp-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare these two texts and give one similarity and one difference. Text A: 'The library was quiet and full of books.' Text B: 'The playground was noisy and full of children.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing texts", statement: "Similarities and differences." }],
            steps: [
              { reasoning: "Similarity: both describe places that are 'full of' something.", marks: 1, markCode: "AO2" },
              { reasoning: "Difference: quiet/books vs noisy/children.", marks: 1, markCode: "AO2" },
              { reasoning: "Similarity accurately identified.", marks: 1, markCode: "AO1" },
              { reasoning: "Difference accurately identified.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Similarity: both full of something; Difference: quiet vs noisy, books vs children",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-s4-infer-notes",
      title: "Stage 4 inference and summary — revision notes",
      summary: "Inferring feelings and events, summarising main ideas.",
      sections: [
        { heading: "Inference", body: "Use clues like actions and describing words. Quote the clue, then explain what it tells you." },
        { heading: "Summary", body: "Include only the main points in your own words. One good sentence can summarise a whole story." },
      ],
    },
  ],
};
