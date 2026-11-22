import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ciege-u2-lesson-2-1",
  code: "2-1",
  title: "Figurative Language and Imagery",
  goal: "I CAN identify and analyse similes, metaphors and imagery.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 2: language analysis"],
  vocabulary: [
    { term: "Simile", definition: "A comparison using 'like' or 'as'." },
    { term: "Metaphor", definition: "A direct comparison saying one thing is another." },
    { term: "Personification", definition: "Giving human qualities to non-human things." },
    { term: "Imagery", definition: "Language that appeals to the senses." },
    { term: "Alliteration", definition: "Repeated initial consonant sounds." },
  ],
  concepts: [
    {
      id: "ciege-u2-s1-figurative",
      title: "Similes, metaphors and personification",
      skill: "Identify figurative devices and explain their effect.",
      lesson: {
        sections: [
          {
            heading: "The main devices",
            body: "Simile compares using like/as ('brave as a lion'). Metaphor states one thing is another ('the classroom was a zoo'). Personification gives human traits to objects ('the wind whispered').",
          },
          {
            heading: "Explaining effects",
            body: "Don't just name the device — explain what it suggests. 'A zoo' suggests chaos and noise, telling us how wild the classroom was.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Analyse: 'Her smile was a sunrise.'",
          solution: "Metaphor — the smile is compared to sunrise, suggesting brightness, warmth and happiness.",
        },
      },
      questions: [
        {
          id: "ciege-u2-s1-fi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Forest",
            author: "Written for Akademik Space",
            text: "The old oak stood like a guardian over the path, its branches spread wide.",
          },
          stem: "What figurative device is used in 'stood like a guardian'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Personification" },
            { id: "b", text: "Metaphor" },
            { id: "c", text: "Simile" },
            { id: "d", text: "Alliteration" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Simile", statement: "Comparison using like/as." }],
            steps: [
              { reasoning: "'Like a guardian' is a comparison with 'like' — a simile.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Simile",
          },
        },
        {
          id: "ciege-u2-s1-fi-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Forest",
            author: "Written for Akademik Space",
            text: "The old oak stood like a guardian over the path, its branches spread wide.",
          },
          stem: "What does comparing the oak to a guardian suggest?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile effect", statement: "Explain what the comparison suggests." }],
            steps: [
              { reasoning: "A guardian protects — the tree seems protective and watchful.", marks: 1, markCode: "AO2" },
              { reasoning: "It gives the tree a sense of age and authority.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Protective, watchful, ancient",
          },
        },
        {
          id: "ciege-u2-s1-fi-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The City",
            author: "Written for Akademik Space",
            text: "The city was a furnace at midday; heat shimmered off the asphalt and the air itself seemed to buzz.",
          },
          stem: "Identify the figurative language and explain its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "'Furnace' = intense heat." }],
            steps: [
              { reasoning: "'The city was a furnace' is a metaphor.", marks: 1, markCode: "AO3" },
              { reasoning: "It suggests intense, oppressive heat.", marks: 1, markCode: "AO2" },
              { reasoning: "'Air seemed to buzz' adds to the sense of discomfort.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Metaphor: furnace = intense heat",
          },
        },
        {
          id: "ciege-u2-s1-fi-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Storm",
            author: "Written for Akademik Space",
            text: "The wind screamed through the streets, tearing at chimney pots and sending bins rolling like toys.",
          },
          stem: "Analyse two examples of figurative language in this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Figurative analysis", statement: "Two devices + effects." }],
            steps: [
              { reasoning: "'Wind screamed' — personification, wind acts like a screaming creature.", marks: 1, markCode: "AO3" },
              { reasoning: "Suggests violence and noise of the storm.", marks: 1, markCode: "AO2" },
              { reasoning: "'Bins rolling like toys' — simile, suggests they're swept aside easily.", marks: 1, markCode: "AO3" },
              { reasoning: "Emphasises the storm's power over ordinary objects.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Personification + simile analysed",
          },
        },
        {
          id: "ciege-u2-s1-fi-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Night",
            author: "Written for Akademik Space",
            text: "The night was velvet, soft and dark against the sky.",
          },
          stem: "What figurative device is used in 'the night was velvet'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Metaphor" },
            { id: "b", text: "Onomatopoeia" },
            { id: "c", text: "Personification" },
            { id: "d", text: "Simile" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Metaphor", statement: "States one thing is another." }],
            steps: [
              { reasoning: "The night is described as velvet — a direct comparison without 'like' or 'as'.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Metaphor",
          },
        },
        {
          id: "ciege-u2-s1-fi-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Cat",
            author: "Written for Akademik Space",
            text: "The cat sat like a statue, watching the birds.",
          },
          stem: "How many similes are in this sentence?",
          response: { type: "numeric", parts: [
            { label: "Similes", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Simile", statement: "Comparison using like/as." }],
            steps: [
              { reasoning: "'Like a statue' is the only comparison — 1 simile.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "ciege-u2-s1-fi-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Break Time",
            author: "Written for Akademik Space",
            text: "The classroom was a zoo at break time.",
          },
          stem: "What does the metaphor 'a zoo' suggest about the classroom?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It was well organised" },
            { id: "b", text: "Excitement and chaos" },
            { id: "c", text: "It was very quiet" },
            { id: "d", text: "Animals were inside" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor effect", statement: "Comparison implies wildness and noise." }],
            steps: [
              { reasoning: "A zoo suggests noise, movement and lack of control — the class was wild with excitement.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Excitement and chaos",
          },
        },
        {
          id: "ciege-u2-s1-fi-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Her Appearance",
            author: "Written for Akademik Space",
            text: "Her eyes were diamonds, her hair was silk.",
          },
          stem: "How many metaphors are in this sentence?",
          response: { type: "numeric", parts: [
            { label: "Metaphors", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Metaphor", statement: "States one thing is another." }],
            steps: [
              { reasoning: "'Eyes were diamonds' and 'hair was silk' are two direct comparisons — 2 metaphors.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u2-s1-fi-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Old Door",
            author: "Written for Akademik Space",
            text: "The old door groaned as it opened.",
          },
          stem: "What figurative device is used in 'the door groaned'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Personification" },
            { id: "b", text: "Metaphor" },
            { id: "c", text: "Simile" },
            { id: "d", text: "Alliteration" },
          ], aorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Personification", statement: "Giving human qualities to objects." }],
            steps: [
              { reasoning: "A door cannot groan — the human action gives it a voice, so this is personification.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Personification",
          },
        },
        {
          id: "ciege-u2-s1-fi-q10",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Life's Lessons",
            author: "Written for Akademik Space",
            text: "Time is a thief; money is a river.",
          },
          stem: "How many metaphors appear in this extract? Identify each one.",
          response: { type: "numeric", parts: [
            { label: "Metaphors", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Metaphor", statement: "States one thing is another." }],
            steps: [
              { reasoning: "'Time is a thief' is a metaphor — 1.", marks: 1, markCode: "AO3" },
              { reasoning: "'Money is a river' is a metaphor — 1 more, total 2.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u2-s1-fi-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Whispering Wind",
            author: "Written for Akademik Space",
            text: "The wind whispered secrets through the trees.",
          },
          stem: "Analyse the personification in this sentence and explain its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Personification", statement: "Human traits given to nature." }],
            steps: [
              { reasoning: "The wind 'whispered' — a human action given to nature.", marks: 1, markCode: "AO3" },
              { reasoning: "'Secrets' suggests hidden, mysterious knowledge.", marks: 1, markCode: "AO2" },
              { reasoning: "Creates an eerie, mysterious atmosphere.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Whispering wind = mystery and unease",
          },
        },
        {
          id: "ciege-u2-s1-fi-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Two Roles",
            author: "Written for Akademik Space",
            text: "He was a lion in battle but a mouse in council.",
          },
          stem: "How does the contrast between 'lion' and 'mouse' shape the reader's view of the character?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It has no effect" },
            { id: "b", text: "It shows he is bold in action but timid in discussion" },
            { id: "c", text: "It shows he is brave everywhere" },
            { id: "d", text: "It shows he is an animal lover" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor + contrast", statement: "Different comparisons for different contexts." }],
            steps: [
              { reasoning: "A lion suggests courage; a mouse suggests timidity.", marks: 1, markCode: "AO2" },
              { reasoning: "The 'but' contrast shows he is brave in battle yet timid in council.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Bold in action, timid in discussion",
          },
        },
        {
          id: "ciege-u2-s1-fi-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Storm",
            author: "Written for Akademik Space",
            text: "The storm was a beast; it roared through the night.",
          },
          stem: "How many nouns are in this extract, and how many sentences?",
          response: { type: "numeric", parts: [
            { label: "Nouns", answer: 3 },
            { label: "Sentences", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Noun", statement: "Naming word." }],
            steps: [
              { reasoning: "Storm, beast and night are nouns — 3.", marks: 1, markCode: "AO1" },
              { reasoning: "The semicolon joins one sentence — 1.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3 nouns, 1 sentence",
          },
        },
        {
          id: "ciege-u2-s1-fi-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Soup",
            author: "Written for Akademik Space",
            text: "The soup was as hot as fire.",
          },
          stem: "What figurative device is used here?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Metaphor" },
            { id: "b", text: "Personification" },
            { id: "c", text: "Simile" },
            { id: "d", text: "Alliteration" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Simile", statement: "Comparison using like/as." }],
            steps: [
              { reasoning: "'As hot as fire' compares using 'as' — a simile.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Simile",
          },
        },
        {
          id: "ciege-u2-s1-fi-q15",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Rain",
            author: "Written for Akademik Space",
            text: "Rain fell like tears, drumming on the roof.",
          },
          stem: "How many similes appear in this extract?",
          response: { type: "numeric", parts: [
            { label: "Similes", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Simile", statement: "Comparison using like/as." }],
            steps: [
              { reasoning: "'Like tears' is the only simile — 1.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "ciege-u2-s1-fi-q16",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The City",
            author: "Written for Akademik Space",
            text: "The city was a jungle of concrete and noise.",
          },
          stem: "Analyse the metaphor in this sentence and explain the effect it creates.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor analysis", statement: "Identify, unpack, explain effect." }],
            steps: [
              { reasoning: "'A jungle' is a metaphor — the city is compared to a wild place.", marks: 1, markCode: "AO3" },
              { reasoning: "Jungles suggest danger, chaos and survival.", marks: 1, markCode: "AO2" },
              { reasoning: "'Concrete and noise' support the harsh, overwhelming image.", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: the city seems hostile and overwhelming to the character.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "City as hostile jungle — overwhelming",
          },
        },
      ],
    },
    {
      id: "ciege-u2-s1-imagery",
      title: "Imagery and sound devices",
      skill: "Analyse sensory imagery and sound patterning.",
      lesson: {
        sections: [
          {
            heading: "Sensory imagery",
            body: "Imagery appeals to sight, sound, smell, taste and touch. 'The cinnamon smell drifted from the bakery' is smell imagery; 'ice cracked underfoot' is touch/sound.",
          },
          {
            heading: "Sound devices",
            body: "Alliteration repeats initial sounds ('silver, silent sea'); onomatopoeia imitates sounds ('bang', 'whisper', 'hiss'); rhythm and rhyme shape how a passage feels when read aloud.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Analyse: 'The bacon sizzled and popped in the pan.'",
          solution: "Onomatopoeia — 'sizzled' and 'popped' imitate cooking sounds, making the scene vivid.",
        },
      },
      questions: [
        {
          id: "ciege-u2-s1-im-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Kitchen",
            author: "Written for Akademik Space",
            text: "The bacon sizzled and popped in the pan while coffee brewed, filling the kitchen with a rich, dark smell.",
          },
          stem: "Which sense does 'rich, dark smell' appeal to?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sight" },
            { id: "b", text: "Taste" },
            { id: "c", text: "Touch" },
            { id: "d", text: "Smell" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Imagery", statement: "Language appealing to the senses." }],
            steps: [
              { reasoning: "Smell imagery — 'smell' is explicit.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Smell",
          },
        },
        {
          id: "ciege-u2-s1-im-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Kitchen",
            author: "Written for Akademik Space",
            text: "The bacon sizzled and popped in the pan while coffee brewed, filling the kitchen with a rich, dark smell.",
          },
          stem: "What sound device is used in 'sizzled and popped'?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Onomatopoeia", statement: "Words imitating sounds." }],
            steps: [
              { reasoning: "Onomatopoeia.", marks: 1, markCode: "AO3" },
              { reasoning: "The words imitate the sounds of frying.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Onomatopoeia",
          },
        },
        {
          id: "ciege-u2-s1-im-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Sea",
            author: "Written for Akademik Space",
            text: "Beneath the silver, silent sea, the divers moved like shadows, their bubbles rising in silver threads.",
          },
          stem: "Analyse the imagery and sound devices in this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sound + imagery", statement: "Identify and explain devices." }],
            steps: [
              { reasoning: "Alliteration: 'silver, silent sea' repeats the s sound.", marks: 1, markCode: "AO3" },
              { reasoning: "Creates a hushed, mysterious mood.", marks: 1, markCode: "AO2" },
              { reasoning: "'Bubbles rising in silver threads' is visual imagery — delicate and beautiful.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Alliteration + visual imagery",
          },
        },
        {
          id: "ciege-u2-s1-im-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Forest Floor",
            author: "Written for Akademik Space",
            text: "Moss crept across the stones like green velvet; ferns whispered in the still air, and somewhere a woodpecker drummed its steady rhythm.",
          },
          stem: "How do the senses and sound devices work together in this description?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multi-sensory analysis", statement: "Combine senses + sound." }],
            steps: [
              { reasoning: "Touch/visual: 'moss... like green velvet' — texture.", marks: 1, markCode: "AO3" },
              { reasoning: "Sound: 'ferns whispered', 'woodpecker drummed' — personification of plants.", marks: 1, markCode: "AO3" },
              { reasoning: "'Steady rhythm' adds a calm, repetitive quality.", marks: 1, markCode: "AO2" },
              { reasoning: "Together they create a peaceful, alive atmosphere.", marks: 1, markCode: "AO2" },
          ],
            finalAnswer: "Touch + sound imagery, peaceful mood",
          },
        },
        {
          id: "ciege-u2-s1-im-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Sea Air",
            author: "Written for Akademik Space",
            text: "The air tasted of salt and seaweed.",
          },
          stem: "Which sense does this imagery appeal to?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Touch" },
            { id: "b", text: "Taste" },
            { id: "c", text: "Smell" },
            { id: "d", text: "Sight" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Imagery", statement: "Language appealing to the senses." }],
            steps: [
              { reasoning: "'Tasted of salt and seaweed' appeals to taste.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Taste",
          },
        },
        {
          id: "ciege-u2-s1-im-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Accident",
            author: "Written for Akademik Space",
            text: "The bell clanged, the doors banged and the crowd roared.",
          },
          stem: "How many onomatopoeic words appear in this sentence?",
          response: { type: "numeric", parts: [
            { label: "Onomatopoeic words", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Onomatopoeia", statement: "Words imitating sounds." }],
            steps: [
              { reasoning: "'Clanged', 'banged' and 'roared' imitate sounds — 3 words.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u2-s1-im-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Library",
            author: "Written for Akademik Space",
            text: "The silence was so thick you could touch it.",
          },
          stem: "Which sense does 'you could touch it' appeal to?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Touch" },
            { id: "b", text: "Smell" },
            { id: "c", text: "Hearing" },
            { id: "d", text: "Taste" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery", statement: "Sensory language creates vividness." }],
            steps: [
              { reasoning: "Touching silence is tactile imagery — it appeals to touch.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Touch",
          },
        },
        {
          id: "ciege-u2-s1-im-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Meal",
            author: "Written for Akademik Space",
            text: "The curry was spicy, the naan was warm, the chai was sweet.",
          },
          stem: "How many food items are named, and how many taste descriptors are used?",
          response: { type: "numeric", parts: [
            { label: "Food items", answer: 3 },
            { label: "Taste words", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Imagery", statement: "Taste imagery appeals to the palate." }],
            steps: [
              { reasoning: "Curry, naan and chai — 3 items.", marks: 1, markCode: "AO1" },
              { reasoning: "Spicy, warm and sweet — 3 taste words.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3 items, 3 taste words",
          },
        },
        {
          id: "ciege-u2-s1-im-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Fruit Stall",
            author: "Written for Akademik Space",
            text: "Mangoes dripped golden juice down her chin.",
          },
          stem: "Which type of imagery is used in this sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Auditory imagery" },
            { id: "b", text: "Olfactory imagery" },
            { id: "c", text: "Visual imagery" },
            { id: "d", text: "Gustatory imagery" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Imagery", statement: "Visual = what we see." }],
            steps: [
              { reasoning: "'Golden juice down her chin' is a picture we can see — visual imagery.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Visual imagery",
          },
        },
        {
          id: "ciege-u2-s1-im-q10",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Crash",
            author: "Written for Akademik Space",
            text: "Bang! Crash! The plates hit the floor.",
          },
          stem: "How many exclamation marks appear, and how many sentences are there?",
          response: { type: "numeric", parts: [
            { label: "Exclamation marks", answer: 2 },
            { label: "Sentences", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Sound and punctuation", statement: "Exclamations create impact." }],
            steps: [
              { reasoning: "Bang! and Crash! each take an exclamation mark — 2.", marks: 1, markCode: "AO1" },
              { reasoning: "Bang!, Crash! and the final statement make 3 sentences.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2 exclamation marks, 3 sentences",
          },
        },
        {
          id: "ciege-u2-s1-im-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Bonfire",
            author: "Written for Akademik Space",
            text: "The bonfire crackled, sending sparks spiralling into the dark sky.",
          },
          stem: "Analyse the imagery in this sentence. Which senses are appealed to and how?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multi-sensory imagery", statement: "Sound + sight create vividness." }],
            steps: [
              { reasoning: "'Crackled' is sound imagery — it imitates the fire's noise.", marks: 1, markCode: "AO3" },
              { reasoning: "'Sparks spiralling into the dark sky' is visual imagery.", marks: 1, markCode: "AO3" },
              { reasoning: "Together they create a lively, warm, festive atmosphere.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Sound + visual imagery, warm atmosphere",
          },
        },
        {
          id: "ciege-u2-s1-im-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Old House",
            author: "Written for Akademik Space",
            text: "The old house creaked in the wind, as if sighing.",
          },
          stem: "What device does 'as if sighing' create, and what does it suggest?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Simile — the house is calm" },
            { id: "b", text: "Alliteration — the wind is loud" },
            { id: "c", text: "Personification — the house seems to complain or yearn" },
            { id: "d", text: "Onomatopoeia — the house is silent" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Personification", statement: "Human action given to a building." }],
            steps: [
              { reasoning: "A sigh is human — giving the house this action is personification.", marks: 1, markCode: "AO3" },
              { reasoning: "It suggests the house is weary or mournful, adding to the eerie mood.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Personification — weary, mournful house",
          },
        },
        {
          id: "ciege-u2-s1-im-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Storm",
            author: "Written for Akademik Space",
            text: "Soft rain tapped gently on the window while distant thunder rolled.",
          },
          stem: "How many distinct sound images appear in this sentence?",
          response: { type: "numeric", parts: [
            { label: "Sound images", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Auditory imagery", statement: "Sounds create atmosphere." }],
            steps: [
              { reasoning: "Rain 'tapped' and thunder 'rolled' — 2 sound images.", marks: 1, markCode: "AO3" },
              { reasoning: "'Gently' and 'distant' show the contrast between near and far sounds.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u2-s1-im-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Perfume",
            author: "Written for Akademik Space",
            text: "The perfume smelled of roses and jasmine.",
          },
          stem: "Which sense does this imagery appeal to?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Touch" },
            { id: "b", text: "Sight" },
            { id: "c", text: "Taste" },
            { id: "d", text: "Smell" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Imagery", statement: "Olfactory = smell." }],
            steps: [
              { reasoning: "'Smelled of roses and jasmine' appeals to smell.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Smell",
          },
        },
        {
          id: "ciege-u2-s1-im-q15",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Winter Morning",
            author: "Written for Akademik Space",
            text: "The ice was sharp, the wind was cold, the ground was hard.",
          },
          stem: "How many touch descriptors appear in this sentence?",
          response: { type: "numeric", parts: [
            { label: "Touch words", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Tactile imagery", statement: "Words describing texture or temperature." }],
            steps: [
              { reasoning: "Sharp, cold and hard all describe how things feel — 3 touch words.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u2-s1-im-q16",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Market",
            author: "Written for Akademik Space",
            text: "The market roared with colour, noise and smell — a feast for every sense.",
          },
          stem: "Analyse how this sentence uses multi-sensory imagery and explain its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multi-sensory imagery", statement: "Several senses at once create immersion." }],
            steps: [
              { reasoning: "'Colour' is visual imagery.", marks: 1, markCode: "AO3" },
              { reasoning: "'Noise' and 'roared' are auditory imagery.", marks: 1, markCode: "AO3" },
              { reasoning: "'Smell' is olfactory imagery.", marks: 1, markCode: "AO3" },
              { reasoning: "Together they immerse the reader, matching 'a feast for every sense'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Colour + noise + smell = immersive",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u2-s1-fig-notes",
      title: "Figurative language and imagery — revision notes",
      summary: "Simile, metaphor, personification, imagery, sound devices.",
      sections: [
        { heading: "Devices", body: "Simile uses like/as; metaphor states identity; personification gives human traits. Name the device, then explain its effect." },
        { heading: "Sound", body: "Alliteration repeats initial sounds; onomatopoeia imitates sounds. Sensory imagery appeals to sight, sound, smell, taste, touch." },
      ],
    },
  ],
};
