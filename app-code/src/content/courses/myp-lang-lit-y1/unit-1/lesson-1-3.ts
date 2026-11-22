import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mll1-u1-lesson-1-3",
  code: "1-3",
  title: "Reading for Feelings: Tone and Simple Inference",
  goal: "I CAN notice how a text makes me feel and work out what is really going on, even when it is not said directly.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Tone", definition: "The feeling or attitude a text has — happy, sad, scary, calm." },
    { term: "Inference", definition: "Working out something that is not said directly, using clues." },
    { term: "Mood", definition: "The feeling a text creates in the reader." },
    { term: "Clue", definition: "A small detail that helps you understand something bigger." },
    { term: "Feeling words", definition: "Words that name emotions, like 'glad', 'worried', 'excited', 'brave'." },
  ],
  concepts: [
    {
      id: "mll1-u1-tone-mood",
      title: "Tone and mood",
      skill: "Identify the feeling of a text and explain which words create it.",
      lesson: {
        sections: [
          {
            heading: "Tone and mood",
            body: "**Tone** is the feeling the writer puts into a text — it might be **happy**, **sad**, **scary** or **calm**. **Mood** is the feeling the text creates in you, the reader. They are close friends: a scary story has a scary tone and gives you a scary mood.",
          },
          {
            heading: "Finding the feeling",
            body: "Look at the **words** the writer chooses. 'She smiled and laughed' sounds happy. 'Her hands shook in the dark' sounds scared. Feeling words, describing words and even the shape of sentences all point to the tone.",
          },
          {
            heading: "Why tone matters",
            body: "The same event can be written in different tones. 'It rained all day' can be gloomy ('the rain never stopped') or cosy ('we stayed in with cocoa'). The tone tells you how to feel about what happens.",
          },
        ],
        keyFormulas: [
          { name: "Tone question", statement: "How does this text make me feel, and which words create that feeling?" },
        ],
        workedExample: {
          problem: "Read: 'The wind howled through the broken window. Shadows moved on the walls.' What is the tone?",
          solution: "The tone is scary or tense. 'Howled', 'broken' and 'shadows' are dark, unsettling words.",
        },
      },
      questions: [
        {
          id: "mll1-u1-tone-mood-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story says: 'The sun shone, birds sang, and everyone cheered.' What is the tone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Angry" },
              { id: "b", text: "Happy" },
              { id: "c", text: "Scary" },
              { id: "d", text: "Sad" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tone", statement: "Tone is the feeling a text creates through its word choices." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'shone', 'sang' and 'cheered' are all happy words, so the tone is happy — (c).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Happy",
          },
        },
        {
          id: "mll1-u1-tone-mood-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Waiting",
            author: "Written for Akademik Space",
            text: "Nina checked the clock again. Still no sign of her dad. The room felt too quiet, and she hugged her knees under the table.",
          },
          stem: "What is the mood of this passage? Name two words that create it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mood through word choice", statement: "Words like 'too quiet' and 'hugged her knees' create feelings in the reader." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the mood is anxious, worried or lonely — Nina is waiting and scared.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): two mood words are 'too quiet' and 'hugged her knees' (or 'checked the clock again' for worry).", evidence: "The room felt too quiet ... hugged her knees", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mood: anxious/worried. Words: 'too quiet', 'hugged her knees', 'checked the clock again'.",
          },
        },
        {
          id: "mll1-u1-tone-mood-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Old House",
            author: "Written for Akademik Space",
            text: "The house had not been loved in years. Paint peeled from the door like old skin, and the garden had grown wild with weeds taller than the fence.",
          },
          stem: "Explain how the writer creates a sad or neglected feeling. Refer to at least two word choices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Diction and tone", statement: "Word choice carries feeling: 'not been loved', 'peeled', 'wild' all suggest neglect." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'had not been loved in years' directly states neglect — it makes the reader feel sorry for the house.", evidence: "had not been loved in years", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'paint peeled from the door like old skin' uses a decay image that makes the house seem damaged and unloved.", evidence: "Paint peeled from the door like old skin", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'weeds taller than the fence' shows the garden is out of control, proving nobody has cared for the house for a long time.", evidence: "weeds taller than the fence", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The writer uses 'had not been loved', 'peeled like old skin' and 'weeds taller than the fence' to make the house seem neglected and sad.",
          },
        },
        {
          id: "mll1-u1-tone-mood-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The Long Wait",
            author: "Written for Akademik Space",
            text: "Jonas counted the minutes on the platform clock. His train was late — forty minutes late, maybe more. He shifted his bag from one shoulder to the other and watched the empty track.\n\nWhen the engine finally appeared around the bend, he felt his shoulders drop. The whistle blew, sharp and bright, and the doors hissed open.",
          },
          parts: [
            { label: "a", prompt: "Describe the mood of the first paragraph and name two words that create it.", marks: 2 },
            { label: "b", prompt: "Describe how the mood changes in the second paragraph and name the words that show the change.", marks: 2 },
            { label: "c", prompt: "What does 'his shoulders drop' tell you about Jonas's feelings?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mood shift", statement: "Mood can change within a text as events change; writers signal this through word choice." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): the first paragraph's mood is tense, bored or anxious — Jonas is stuck waiting.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): words like 'counted', 'empty track', 'shifted his bag' show restless waiting.", evidence: "watched the empty track", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the mood lifts to relief or excitement when the train arrives.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'shoulders drop', 'sharp and bright' whistle and 'hissed open' doors signal the release of tension.", evidence: "he felt his shoulders drop", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): dropping shoulders show he relaxes — the worry drains out of his body.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Tense/bored waiting — 'counted', 'empty track'. (b) Relief — 'shoulders drop', 'sharp and bright'. (c) He relaxes; the tension leaves his body.",
          },
        },
        {
          id: "mll1-u1-tone-mood-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story says: 'Dark clouds gathered and the wind began to howl.' What is the tone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Funny" },
              { id: "b", text: "Happy" },
              { id: "c", text: "Scary or tense" },
              { id: "d", text: "Calm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone", statement: "Tone is the feeling created by the writer's word choices." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'dark clouds' and 'howl' are threatening words — the tone is scary or tense, (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Scary or tense",
          },
        },
        {
          id: "mll1-u1-tone-mood-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which words would most likely create a CALM mood?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "screamed, raced, smashed" },
              { id: "b", text: "roared, crashed, exploded" },
              { id: "c", text: "stomped, banged, shook" },
              { id: "d", text: "gently, softly, quietly" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood words", statement: "Gentle, quiet words create calm; loud, violent words create excitement or fear." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'gently, softly, quietly' are calm words — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** gently, softly, quietly",
          },
        },
        {
          id: "mll1-u1-tone-mood-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read: 'The little dog wagged its tail and licked her hand.' What is the tone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sad" },
              { id: "b", text: "Happy and friendly" },
              { id: "c", text: "Angry" },
              { id: "d", text: "Scary" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone", statement: "Friendly actions like wagging tails create a happy tone." }],
            steps: [{ reasoning: "Criterion A (Analysing): wagging and licking are affectionate actions — the tone is happy and friendly, (c).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** Happy and friendly",
          },
        },
        {
          id: "mll1-u1-tone-mood-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Empty Playground",
            author: "Written for Akademik Space",
            text: "The swings moved gently in the breeze, creaking on their chains. One shoe lay in the sand, and a forgotten ball rolled slowly toward the fence.",
          },
          stem: "What mood does this passage create? Name two details that build it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood through detail", statement: "Quiet details and empty places create lonely or peaceful feelings." }],
            steps: [
              { reasoning: "Criterion A (Analysing): the mood is lonely, quiet or abandoned — the playground is empty.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): details — 'creaking' swings, 'one shoe', 'forgotten ball' — show people have left and nobody is there.", evidence: "One shoe lay in the sand ... forgotten ball", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lonely/abandoned mood — creaking swings, a lone shoe and a forgotten ball show the playground is empty.",
          },
        },
        {
          id: "mll1-u1-tone-mood-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "First Snow",
            author: "Written for Akademik Space",
            text: "The first snow of winter fell softly all night. By morning the world was dressed in white, and children ran outside shouting with joy.",
          },
          stem: "Describe the mood of this passage and name two words that create it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood words", statement: "Words like 'softly' and 'joy' tell the reader how to feel." }],
            steps: [
              { reasoning: "Criterion A (Analysing): the mood is joyful, excited and peaceful — a happy winter morning.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): mood words — 'softly', 'dressed in white', 'shouting with joy'.", evidence: "fell softly ... shouting with joy", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Joyful/peaceful mood — 'softly', 'dressed in white', 'shouting with joy'.",
          },
        },
        {
          id: "mll1-u1-tone-mood-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Rainy Days",
            author: "Written for Akademik Space",
            text: "The rain hammered on the roof all day, and the garden turned to mud.",
          },
          stem: "Rewrite the mood of this sentence by changing two words, and explain how your changes alter the feeling.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Diction and tone", statement: "Changing key words changes the mood of a sentence." }],
            steps: [
              { reasoning: "Criterion D (Using language): the rewritten sentence uses gentle words ('tapped', 'silver') to create a calm, pretty mood.", marks: 1, markCode: "D" },
              { reasoning: "Criterion A (Analysing): 'hammered' (violent) becomes 'tapped' (gentle), softening the mood.", evidence: "hammered ... tapped", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'mud' (ugly) becomes 'silver' (beautiful), making the rain seem pretty instead of miserable.", evidence: "mud ... silver", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'The rain tapped gently on the roof, and the garden turned to silver' — gentle words make it calm and pretty instead of gloomy.",
          },
        },
        {
          id: "mll1-u1-tone-mood-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the difference between TONE and MOOD?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tone is about weather; mood is about characters" },
              { id: "b", text: "Tone is the feeling the writer puts in; mood is the feeling the reader gets" },
              { id: "c", text: "They mean exactly the same thing" },
              { id: "d", text: "Tone is the plot; mood is the setting" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Tone vs mood", statement: "Tone is the writer's attitude; mood is the reader's feeling." }],
            steps: [{ reasoning: "Criterion D (Using language): tone belongs to the text, mood to the reader — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** Tone is the writer's feeling; mood is the reader's feeling",
          },
        },
        {
          id: "mll1-u1-tone-mood-q12",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Birthday Card",
            author: "Written for Akademik Space",
            text: "There was a card on the table with no name on it. It was plain white, sealed with a blue sticker, and a single sprig of dried lavender was tucked inside.",
          },
          stem: "Explain how the writer creates a gentle, mysterious mood. Refer to at least two word choices.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood through detail", statement: "Soft, careful details create quiet, mysterious moods." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'no name on it' creates mystery — who is it from?", evidence: "with no name on it", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'plain white' and 'a single sprig of dried lavender' are soft, delicate details that feel gentle and careful.", evidence: "a single sprig of dried lavender", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): together the details make the card feel special and secret — a quiet, thoughtful mood.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'No name' adds mystery; 'plain white' and 'single sprig of lavender' add gentleness — a soft, mysterious mood.",
          },
        },
        {
          id: "mll1-u1-tone-mood-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The School Fete",
            author: "Written for Akademik Space",
            text: "Bunting flapped in the warm breeze as the school fete got under way. Cake stalls dozed in the sun, the bouncy castle swallowed giggling children, and somewhere a brass band struck up a wobbly tune.",
          },
          parts: [
            { label: "a", prompt: "Describe the mood of the passage.", marks: 1 },
            { label: "b", prompt: "Name three details that create this mood.", marks: 2 },
            { label: "c", prompt: "Explain how the tone would change if the writer described a storm arriving instead.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood and tone", statement: "Festive details create a happy mood; threatening details would change the tone completely." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): the mood is cheerful, lively and relaxed — a happy school event.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): details — 'bunting flapped', 'warm breeze', 'giggles', 'brass band' all suggest fun and warmth.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'cake stalls dozed in the sun' adds a lazy, happy feeling.", evidence: "Cake stalls dozed in the sun", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): a storm would shift the tone to tense or dramatic — wind, dark clouds, cancelled stalls.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the same setting (the fete) would feel threatening instead of joyful — showing how tone changes meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Cheerful and lively. (b) Bunting, warm breeze, giggles, brass band, dozing cake stalls. (c) A storm would make it tense and dramatic — same event, opposite tone.",
          },
        },
        {
          id: "mll1-u1-tone-mood-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A text uses words like 'shouted', 'banged' and 'roared'. What tone does it have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sad" },
              { id: "b", text: "Calm" },
              { id: "c", text: "Bored" },
              { id: "d", text: "Angry or exciting" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone", statement: "Loud, forceful words create an angry or exciting tone." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'shouted', 'banged', 'roared' are loud, forceful words — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Angry or exciting",
          },
        },
        {
          id: "mll1-u1-tone-mood-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read: 'Footsteps whispered across the carpet. Books stood in neat rows like sleeping soldiers.' What mood does this create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excited" },
              { id: "b", text: "Calm and hushed" },
              { id: "c", text: "Angry" },
              { id: "d", text: "Scary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood words", statement: "Soft, quiet words create calm moods." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'whispered' and 'sleeping soldiers' create a calm, hushed mood — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Calm and hushed",
          },
        },
        {
          id: "mll1-u1-tone-mood-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The Long Winter",
            author: "Written for Akademik Space",
            text: "December gripped the valley in its cold fist. The river froze solid, school closed for a week, and the only colour in the whole valley was the red scarf Mrs Adeyemi knitted for her grandson.",
          },
          parts: [
            { label: "a", prompt: "Describe the mood of the first two sentences.", marks: 1 },
            { label: "b", prompt: "Name two details that create this mood.", marks: 2 },
            { label: "c", prompt: "Explain how the 'red scarf' changes the mood at the end.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood shift", statement: "A single warm detail can shift a bleak mood toward hope." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): the first sentences feel bleak, cold and harsh — winter has the valley trapped.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'cold fist', 'froze solid', 'school closed' show a severe, isolating winter.", evidence: "gripped the valley in its cold fist ... froze solid", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'the only colour' emphasizes how grey and lifeless everything else is.", evidence: "the only colour in the whole valley", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the red scarf is warm, handmade and personal — it brings human love into the cold scene.", evidence: "the red scarf Mrs Adeyemi knitted", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): it shifts the mood from bleak to hopeful — warmth and care survive the winter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Bleak and cold. (b) 'Cold fist', 'froze solid', 'only colour'. (c) The red scarf adds warmth and love, shifting the mood toward hope.",
          },
        },
      ],
    },
    {
      id: "mll1-u1-inference",
      title: "Inference: reading between the lines",
      skill: "Work out what a text really means using clues, even when it is not said directly.",
      lesson: {
        sections: [
          {
            heading: "What is an inference?",
            body: "An **inference** is something you work out that the writer does **not** say directly. If a story says 'Tomas grabbed his coat and ran outside', you can infer he is in a hurry — even though the word 'hurry' never appears. You use **clues**.",
          },
          {
            heading: "Using clues",
            body: "To make an inference, ask: **what do I know?** and **what does it suggest?** A character who 'ate her dinner in one bite' might be very hungry, or in a rush. A dog who 'whined at the door' probably wants to go out. Always point to the clue that helped you.",
          },
          {
            heading: "Inference in poems",
            body: "Poems are full of inference. 'The garden is sleeping under its blanket of snow' does not say 'winter' — you infer it. Poems trust you to do some of the work.",
          },
        ],
        keyFormulas: [
          { name: "Inference steps", statement: "1. Find the clue. 2. Ask what it suggests. 3. Say your inference in a full sentence." },
        ],
        workedExample: {
          problem: "Read: 'The baby smiled at the red balloon.' What can you infer?",
          solution: "You can infer the baby is happy or excited — babies smile when something pleases them, and a bright balloon is a likely cause.",
        },
      },
      questions: [
        {
          id: "mll1-u1-inference-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story says: 'Kofi's hands were shaking as he opened the envelope.' What can you infer about Kofi?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He has hurt his hands" },
              { id: "b", text: "He is angry at someone" },
              { id: "c", text: "He is nervous about what is in the envelope" },
              { id: "d", text: "He is cold" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inference", statement: "Inferences are educated guesses based on clues in the text." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): shaking hands before opening something suggests nervousness or fear about the result — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** He is nervous about what is in the envelope",
          },
        },
        {
          id: "mll1-u1-inference-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Empty Fridge",
            author: "Written for Akademik Space",
            text: "Dad opened the fridge and stared at the bare shelves. 'We need to do a shop,' he said quietly, closing the door.",
          },
          stem: "Write one inference about the family's situation and the clue that supports it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inference from detail", statement: "Details like 'bare shelves' let you infer bigger facts about a situation." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): an inference such as 'the family has little food and may be short of money' — the family is struggling.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the clue is 'stared at the bare shelves' — an empty fridge shows there is no food.", evidence: "the bare shelves", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Inference: the family is short of food (possibly money). Clue: 'the bare shelves' of the fridge.",
          },
        },
        {
          id: "mll1-u1-inference-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Gifts",
            author: "Written for Akademik Space",
            text: "Ravi unwrapped the first gift: a loud drum. He smiled politely. The second gift was a sketchbook. He held it with both hands and didn't let go all afternoon.",
          },
          stem: "What can you infer about what Ravi really wanted? Explain using two clues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inferring preference", statement: "Actions and reactions show true feelings better than words like 'smiled politely'." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): inference — Ravi wanted the sketchbook, not the drum.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): clue 1 — he only 'smiled politely' at the drum (polite = not truly pleased).", evidence: "He smiled politely", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): clue 2 — he 'held it with both hands and didn't let go all afternoon' — he loved the sketchbook.", evidence: "held it with both hands and didn't let go", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ravi really wanted the sketchbook — he was only polite about the drum but could not put the sketchbook down.",
          },
        },
        {
          id: "mll1-u1-inference-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this story opening.",
          extract: {
            title: "The Door",
            author: "Written for Akademik Space",
            text: "The letter arrived on Tuesday, in a cream envelope with no return address. Meera turned it over twice before she opened it.\n\nInside was a single photograph — the old house where she had been born, standing empty under a grey sky.",
          },
          parts: [
            { label: "a", prompt: "What can you infer about why Meera is nervous? Give one clue.", marks: 2 },
            { label: "b", prompt: "What do you think the letter is about? Explain your inference.", marks: 2 },
            { label: "c", prompt: "Why might the writer choose not to say directly what the letter says?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inference and suspense", statement: "Withholding information and giving clues creates suspense and invites the reader to guess." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): inference — Meera is nervous because the letter may bring bad or surprising news.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): clue — 'turned it over twice before she opened it' shows hesitation and worry.", evidence: "turned it over twice before she opened it", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): inference — the letter is about her childhood home, possibly a sale, inheritance or a past event.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): clue — the photograph of 'the old house where she had been born' connects the letter to her past.", evidence: "the old house where she had been born", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): keeping the letter's contents hidden creates suspense and makes the reader curious.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) She is nervous about the news; she hesitates twice before opening. (b) The letter concerns her childhood home — sale or inheritance. (c) To create suspense and curiosity.",
          },
        },
        {
          id: "mll1-u1-inference-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story says: 'Sara put on her coat, grabbed her umbrella and ran outside.' What can you infer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sara is going to sleep" },
              { id: "b", text: "It is probably raining" },
              { id: "c", text: "Sara is very cold" },
              { id: "d", text: "It is a sunny day" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Inference", statement: "Clues like 'umbrella' let you guess what is not said." }],
            steps: [{ reasoning: "Criterion A (Analysing): an umbrella suggests rain — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** It is probably raining",
          },
        },
        {
          id: "mll1-u1-inference-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story says: 'Tom licked his lips and stared at the bakery window.' What can you infer about Tom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He is angry at the bakery" },
              { id: "b", text: "He is lost in the street" },
              { id: "c", text: "He is hungry and wants to buy something" },
              { id: "d", text: "He works at the bakery" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Inference", statement: "Actions like licking lips and staring suggest desire." }],
            steps: [{ reasoning: "Criterion A (Analysing): licking lips and staring at food suggest hunger — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** He is hungry and wants to buy something",
          },
        },
        {
          id: "mll1-u1-inference-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A story says: 'The baby smiled when she saw the red balloon.' What can you infer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The baby cannot see colours" },
              { id: "b", text: "The baby is happy or excited by the balloon" },
              { id: "c", text: "The balloon is broken" },
              { id: "d", text: "The baby is scared of balloons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Inference", statement: "Smiles usually mean pleasure or happiness." }],
            steps: [{ reasoning: "Criterion A (Analysing): babies smile at things they like — the balloon pleases her, (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** The baby is happy or excited by the balloon",
          },
        },
        {
          id: "mll1-u1-inference-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Full Glass",
            author: "Written for Akademik Space",
            text: "Amina sipped her water slowly, watching the children play outside the window. She put the glass down half full and sighed.",
          },
          stem: "Write one inference about how Amina feels and the clue that supports it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inference from detail", statement: "Small actions like sighing reveal bigger feelings." }],
            steps: [
              { reasoning: "Criterion A (Analysing): an inference such as 'Amina feels lonely or wistful — she watches others play but is not joining in.'", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): clues — 'watching the children play', 'sighed', drinking slowly alone.", evidence: "watching the children play ... sighed", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amina feels lonely or wistful — she watches the children and sighs while drinking alone.",
          },
        },
        {
          id: "mll1-u1-inference-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Untouched Plate",
            author: "Written for Akademik Space",
            text: "Dad cooked a huge dinner, but when everyone sat down, Sam pushed his plate away untouched. 'I'm not hungry,' he said, staring at his shoes.",
          },
          stem: "What can you infer is really bothering Sam? Give two clues.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reading between lines", statement: "When words and actions disagree, actions often show the truth." }],
            steps: [
              { reasoning: "Criterion A (Analysing): inference — Sam is upset about something other than food; his 'I'm not hungry' is probably not the real reason.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): clues — he 'pushed his plate away untouched' and 'stared at his shoes' (avoiding eye contact = upset or guilty).", evidence: "staring at his shoes", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sam is upset about something — the untouched plate and staring at his shoes show he is not really just 'not hungry'.",
          },
        },
        {
          id: "mll1-u1-inference-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Empty Chair",
            author: "Written for Akademik Space",
            text: "Every Sunday, Gran set three plates at the table. This week she set only two, and she kept glancing at the empty chair by the window.",
          },
          stem: "What can you infer about the family situation? Explain using two clues.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inference", statement: "Changes in routine and emotional actions reveal what is happening." }],
            steps: [
              { reasoning: "Criterion A (Analysing): inference — someone is missing from the family meals; a person has died, moved away or is absent.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): clue 1 — 'every Sunday ... three plates' shows the routine changed to 'only two' this week.", evidence: "set three plates ... only two", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): clue 2 — Gran 'kept glancing at the empty chair', showing she misses whoever sat there.", evidence: "kept glancing at the empty chair", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Someone is missing from the family — a plate was removed and Gran keeps looking at the empty chair.",
          },
        },
        {
          id: "mll1-u1-inference-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A poem says: 'The garden sleeps under a blanket of snow.' What can you infer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is winter and the garden is covered in snow" },
              { id: "b", text: "Someone is sleeping in the garden" },
              { id: "c", text: "The garden is on fire" },
              { id: "d", text: "It is summer and very hot" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Inference in poems", statement: "Poems use images; you infer the literal meaning." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'blanket of snow' means snow covers the garden — winter, (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** It is winter and the garden is covered in snow",
          },
        },
        {
          id: "mll1-u1-inference-q12",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The New Shoes",
            author: "Written for Akademik Space",
            text: "Nina tried on the new shoes in the shop, walked to the mirror, then walked back. 'They're too tight,' she said, but she didn't take them off.",
          },
          stem: "Explain what Nina really wants, using two clues.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Contradictory clues", statement: "When words and actions disagree, actions reveal true feelings." }],
            steps: [
              { reasoning: "Criterion A (Analysing): inference — Nina wants to keep the shoes even though she says they are too tight.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): clue 1 — she walked to the mirror and back, checking how they look (she cares about appearance).", evidence: "walked to the mirror, then walked back", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): clue 2 — 'she didn't take them off' shows she likes them despite the tightness.", evidence: "she didn't take them off", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nina wants the shoes — she checks them in the mirror and does not take them off, despite saying they are tight.",
          },
        },
        {
          id: "mll1-u1-inference-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this story opening.",
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "The envelope had no stamp and no address — only a name written in green ink: 'For the person who waters the plants.'\n\nRavi looked around the empty office. Who could it be for?",
          },
          parts: [
            { label: "a", prompt: "What can you infer about who wrote the letter? Give one clue.", marks: 2 },
            { label: "b", prompt: "Why is Ravi confused? Explain your inference.", marks: 2 },
            { label: "c", prompt: "What does 'green ink' suggest about the writer?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inference and mystery", statement: "Unusual details invite readers to guess what the writer left unsaid." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): inference — the writer knows the office plants are watered regularly; probably someone who works there or visits.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): clue — the note is addressed to 'the person who waters the plants', so the writer knows that routine.", evidence: "the person who waters the plants", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Ravi is confused because the office is 'empty' — he cannot tell who the note is for.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the mystery of the unstamped, oddly addressed letter makes him puzzle over it.", evidence: "Who could it be for?", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): unusual green ink suggests the writer is playful, artistic or trying to be mysterious.", evidence: "green ink", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Someone who knows the office routine — clue: the plants address. (b) The office is empty, so the note's target is unclear. (c) Playful or mysterious.",
          },
        },
        {
          id: "mll1-u1-inference-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story says: 'The dog whimpered and hid under the bed.' What can you infer about the dog?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is sleeping" },
              { id: "b", text: "It is scared or upset" },
              { id: "c", text: "It is hungry" },
              { id: "d", text: "It is playing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Inference", statement: "Whimpering and hiding suggest fear or sadness." }],
            steps: [{ reasoning: "Criterion A (Analysing): whimpered and hid suggests scared or upset — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** It is scared or upset",
          },
        },
        {
          id: "mll1-u1-inference-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A story says: 'The house was dark. No music played, no TV murmured, and a single bowl sat washed on the rack.' What can you infer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The whole family is home and busy" },
              { id: "b", text: "There is a party" },
              { id: "c", text: "It is daytime" },
              { id: "d", text: "Nobody else is home" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Inference from absence", statement: "Missing sounds and objects reveal that someone is away." }],
            steps: [{ reasoning: "Criterion A (Analysing): no sounds of life and one washed bowl suggest nobody else is home — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Nobody else is home",
          },
        },
        {
          id: "mll1-u1-inference-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this story opening.",
          extract: {
            title: "The Second Key",
            author: "Written for Akademik Space",
            text: "Under the doormat, where she always kept it, Mina found a key she did not recognise. It was heavy, old-fashioned, and warm to the touch as if it had been held recently.",
          },
          parts: [
            { label: "a", prompt: "What can you infer about who left the key? Give one clue.", marks: 2 },
            { label: "b", prompt: "Why might the writer say the key was 'warm to the touch'?", marks: 1 },
            { label: "c", prompt: "What do you think the key might open? Explain your inference.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inference and suspense", statement: "Physical clues and hidden details let readers build theories about the story." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): inference — someone who knows Mina's hiding place left it; probably someone close or someone who has watched her.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): clue — 'where she always kept it' shows the person knows her secret spot.", evidence: "where she always kept it", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'warm to the touch' makes the key feel alive — as if someone just held it, adding mystery and eeriness.", evidence: "warm to the touch as if it had been held recently", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): inference — it could open an old lock, a box, a door in the house or somewhere connected to her family's past.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'old-fashioned' suggests it belongs to an older place or time — not a modern door.", evidence: "old-fashioned", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Someone who knows her hiding spot — 'where she always kept it'. (b) It feels recently held — eerie and mysterious. (c) An old lock/box connected to her past.",
          },
        },
      ],
    },
  ],
};
