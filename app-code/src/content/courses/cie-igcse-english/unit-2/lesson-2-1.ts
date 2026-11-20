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
            { id: "a", text: "Metaphor" }, { id: "b", text: "Simile" }, { id: "c", text: "Personification" }, { id: "d", text: "Alliteration" },
          ], correctChoiceId: "b" },
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
            { id: "a", text: "Sight" }, { id: "b", text: "Smell" }, { id: "c", text: "Touch" }, { id: "d", text: "Taste" },
          ], correctChoiceId: "b" },
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
