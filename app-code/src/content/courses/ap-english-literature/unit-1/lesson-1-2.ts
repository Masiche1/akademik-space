import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apelit-u1-lesson-1-2",
  code: "1-2",
  title: "Figurative Language and Sound Devices",
  goal: "I CAN identify and analyze metaphor, simile, personification, and sound devices.",
  standards: ["AP Lit 2.x"],
  vocabulary: [
    { term: "Metaphor", definition: "Direct comparison: 'time is a thief'." },
    { term: "Simile", definition: "Comparison with 'like' or 'as'." },
    { term: "Personification", definition: "Giving human traits to non-human things." },
    { term: "Alliteration", definition: "Repeated initial consonant sounds." },
    { term: "Assonance", definition: "Repeated vowel sounds." },
    { term: "Onomatopoeia", definition: "Words that imitate sounds." },
  ],
  concepts: [
    {
      id: "apelit-u1-figurative-language",
      title: "Figurative language",
      skill: "Identify figurative devices and explain their precise effects.",
      lesson: {
        sections: [
          {
            heading: "The comparison family",
            body: "A **metaphor** asserts identity ('the classroom was a zoo'); a **simile** hedges with like/as ('like a zoo'); **personification** grants humanity ('the wind whispered'). Each choice carries different force — metaphor is more absolute, simile more tentative.",
          },
          {
            heading: "Sound devices",
            body: "**Alliteration** (repeated consonants), **assonance** (repeated vowels), and **onomatopoeia** (sound-words) create rhythm and mood. Analyze them by asking what the sound pattern makes the reader feel — harsh consonants versus flowing vowels.",
          },
        ],
        keyFormulas: [
          { name: "Device effect", statement: "Name device → quote → sensory/meaning effect" },
          { name: "Sound analysis", statement: "Pattern of sounds → rhythm → emotional resonance" },
        ],
        workedExample: {
          problem: "Analyze: 'The old bell tolled midnight, a bronze tongue mourning the dead year.'",
          solution: "Personification (the bell has a 'tongue' that 'mourns') plus a metaphor linking the bell to grief. The personification makes time itself seem to lament — the new year arrives amid mourning, establishing a somber tone.",
        },
      },
      questions: [
        {
          id: "apelit-u1-figurative-language-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Her eyes were pools of sadness' is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a simile"
                    },
                    {
                              "id": "b",
                              "text": "a metaphor"
                    },
                    {
                              "id": "c",
                              "text": "personification"
                    },
                    {
                              "id": "d",
                              "text": "alliteration"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Metaphor",
                              "statement": "Direct comparison without like/as."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Eyes are asserted to BE pools of sadness — no like/as, so it's a metaphor.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Metaphor",
          "commonErrors": [
                    "Confusing metaphor with simile."
          ]
},
        },
        {
          id: "apelit-u1-figurative-language-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'The silver sands sang beneath our feet' uses ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "metaphor"
                    },
                    {
                              "id": "b",
                              "text": "simile"
                    },
                    {
                              "id": "c",
                              "text": "personification and onomatopoeia"
                    },
                    {
                              "id": "d",
                              "text": "hyperbole only"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Personification",
                              "statement": "Sands 'sing' — a human action."
                    },
                    {
                              "kind": "definition",
                              "name": "Onomatopoeia",
                              "statement": "'sang' evokes sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The sands are given the human ability to sing — personification — while 'sing' itself is sound imagery approaching onomatopoeia.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Personification",
          "commonErrors": [
                    "Missing the human-action giveaway."
          ]
},
        },
        {
          id: "apelit-u1-figurative-language-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Analyze the effect of personification in: 'Shadows crept across the walls as evening deepened.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Personification",
                              "statement": "Shadows 'crept' — human movement."
                    },
                    {
                              "kind": "skill",
                              "name": "Effect analysis",
                              "statement": "Link to mood."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Crept' personifies shadows with slow, stealthy human movement, making the encroaching darkness feel alive and threatening.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This builds unease and foreshadows that something hidden may emerge — the personified shadows suggest secret menace.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Personified shadows create creeping menace and foreshadow hidden threat",
          "commonErrors": [
                    "Naming the device without explaining the menace effect."
          ]
},
        },
        {
          id: "apelit-u1-figurative-language-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare the effects of a metaphor and a simile conveying the same comparison. Why might a poet choose one over the other?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Metaphor vs simile",
                              "statement": "Assertive vs tentative comparison."
                    },
                    {
                              "kind": "skill",
                              "name": "Comparative analysis",
                              "statement": "Weigh rhetorical force."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A metaphor asserts identity absolutely ('time is a thief') — more forceful, more memorable, less room for doubt; a simile ('like a thief') is gentler, more observational.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Poets choose metaphor for intensity and compression, simile for clarity and nuance — the choice itself signals how committed the speaker is to the comparison.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strong answers connect the choice to the poem's tone or argument.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Metaphor asserts absolutely; simile compares tentatively — choice signals commitment",
          "commonErrors": [
                    "Describing both without analyzing the difference in force."
          ]
},
        },
      ],
    },
  ],
};
