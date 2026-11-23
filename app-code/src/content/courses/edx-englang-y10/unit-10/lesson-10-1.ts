import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "el10-u10-lesson-10-1",
  code: "10-1",
  title: "Descriptive Writing: Showing Not Telling",
  goal: "I CAN use sensory detail and figurative language to show a scene rather than tell it.",
  standards: ["4EA1 Paper 2 Section B", "4EA1 AO4", "4EA1 AO5"],
  
  vocabulary: [
    { term: "Sensory detail", definition: "Concrete description engaging one or more of the five senses." },
    { term: "Connotation", definition: "The associations a word carries beyond its dictionary meaning." },
    { term: "Simile", definition: "A comparison using ‘like’ or ‘as’." },
    { term: "Metaphor", definition: "A direct comparison stating that one thing is another." },
    { term: "Personification", definition: "Giving human qualities or actions to non-human things." },
    { term: "Show, don’t tell", definition: "Replacing abstract judgement with concrete sensory evidence." },
  ],
  concepts: [
    {
      id: "el10-u10-sensory-figurative",
      title: "Sensory detail and figurative language",
      skill: "Use sensory detail, similes, metaphors and personification to bring a description to life.",
      lesson: {
        sections: [
          {
            heading: "Beyond sight: engaging the senses",
            body: "Strong description uses all five senses, not just sight. ‘The market was busy’ tells; ‘the air thick with spice and shouting’ shows. The rule of **show, don’t tell**: replace adjectives that name a quality (‘nice’, ‘scary’, ‘cold’) with evidence the reader can perceive. A cold room is better shown by a detail — ‘my breath fogged the window’ — than stated.",
          },
          {
            heading: "Figurative language",
            body: "**Similes** compare using ‘like’ or ‘as’; **metaphors** state the comparison directly; **personification** gives human qualities to the non-human. Each should sharpen the image, not decorate it. ‘The old fridge grumbled awake’ tells us more about the kitchen’s personality than ‘the old fridge made a noise’. Choose comparisons that are fresh and precise — avoid the first idea that comes to mind if it is a cliché.",
          },
          {
            heading: "Connotation and precision",
            body: "Every word carries **connotation** — associations beyond the dictionary. ‘Slim’ and ‘scrawny’ both mean thin, but one flatters and one insults. In descriptive writing, check each adjective: does its connotation serve the **dominant impression** you want? A word that sounds impressive but means nothing precise (‘very’, ‘really’, ‘nice’) weakens the image — replace it with a specific noun or verb.",
          },
        ],
        keyFormulas: [
          { name: "Sensory detail", statement: "Concrete description engaging sight, sound, smell, touch or taste." },
          { name: "Simile", statement: "Comparison using ‘like’ or ‘as’: ‘quiet as a held breath’." },
          { name: "Metaphor", statement: "Direct comparison: ‘the city was a machine’." },
          { name: "Personification", statement: "Human qualities given to the non-human: ‘the wind declared itself’." },
          { name: "Connotation", statement: "The associations a word carries beyond its dictionary meaning." },
        ],
        workedExample: {
          problem: "Improve this telling sentence: ‘The old house was scary.’",
          solution: "The old house groaned in the wind, its windows like blind eyes, and the garden had grown wild enough to hide anything. — Now the reader sees the movement, feels the menace and supplies the fear themselves.",
        },
      },
      questions: [
        {
          id: "el10-u10-sensfig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence best ‘shows’ rather than ‘tells’?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The market was busy and noisy."
                    },
                    {
                              "id": "b",
                              "text": "Stalls squeezed together, the air thick with spice and shouting, coins flashing between fingers."
                    },
                    {
                              "id": "c",
                              "text": "It was a very exciting place to be."
                    },
                    {
                              "id": "d",
                              "text": "Everyone felt happy there."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Show don’t tell",
                              "statement": "Concrete sensory evidence replaces abstract judgement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only (b) supplies concrete sensory detail — sight, sound and smell — instead of naming feelings or categories.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "**(b)** It shows the scene through sensory detail rather than telling us it was busy.",
          "commonErrors": [
                    "Choosing (a): ‘busy and noisy’ still names categories rather than showing images."
          ]
},
        },
        {
          id: "el10-u10-sensfig-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Rewrite ‘The soup was nice’ as one sentence that shows the soup through a sensory detail.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sensory substitution",
                              "statement": "Replace the telling adjective with evidence from one of the five senses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The sentence contains a concrete sensory detail — sight, smell, taste, touch or sound.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The telling phrase ‘was nice’ is gone and the sentence is controlled and accurate.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "e.g. ‘Steam carried thyme and black pepper to the back of my throat as the first spoonful warmed my hands.’",
          "commonErrors": [
                    "Keeping ‘nice’ or ‘delicious’ — still telling.",
                    "Generic detail like ‘it smelled good’ that shows nothing specific."
          ]
},
        },
        {
          id: "el10-u10-sensfig-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write two sentences describing a kitchen at dawn. One sentence must contain a simile and the other a personification.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Simile and personification",
                              "statement": "Comparisons and human qualities must be accurate and serve the image."
                    },
                    {
                              "kind": "skill",
                              "name": "Sentence control",
                              "statement": "Crafted sentences need accurate punctuation, spelling and grammar."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A simile using ‘like’ or ‘as’ is used accurately.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "A personification gives a non-human thing a human quality or action.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Both sentences are anchored in sensory detail of the scene.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Sentences are controlled, punctuated and free of errors.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "e.g. ‘Light came in like spilled milk across the cold counter. The old fridge grumbled awake, complaining at the dark.’",
          "commonErrors": [
                    "Writing a metaphor while calling it a simile, or plain description while calling it personification.",
                    "Devices that decorate rather than sharpen the image."
          ]
},
        },
        {
          id: "el10-u10-sensfig-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe a busy market in four sentences, concentrating on sound and smell.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sensory focus",
                              "statement": "Restricting to sound and smell forces inventive, non-visual description."
                    },
                    {
                              "kind": "skill",
                              "name": "Sentence variety",
                              "statement": "Varying sentence length controls the pace of description."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "At least four distinct sensory impressions are given, mainly sound and smell.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Figurative language or a precise verb is used at least once.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Details are specific and original rather than generic.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Sentence lengths vary to control pace.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Punctuation, spelling and grammar are accurate throughout.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "A four-sentence passage rich in sound and smell, e.g. ‘The market announced itself before I saw it — a tide of shouting, the clang of shutters, knives on stone. Spices hit the back of my throat: turmeric, cumin, something sweet I could not name. Stalls called their prices over each other in different languages, and my ears rang pleasantly for an hour afterwards. By the time I left, my clothes smelled of smoke and my pockets of warm bread.’",
          "commonErrors": [
                    "Defaulting to sight despite the sound-and-smell focus.",
                    "Generic sensory words like ‘nice smells’ or ‘loud noises’."
          ]
},
        },
        {
          id: "el10-u10-sensfig-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a short descriptive paragraph (about 60-80 words) about a beach at sunset.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Plan: name three sensory details you will use and the sense each appeals to.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write the opening two sentences of the paragraph.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Complete the paragraph with a strong closing image.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Planning description",
                              "statement": "Sensory planning prevents generic, unfocused description."
                    },
                    {
                              "kind": "technique",
                              "name": "Closing image",
                              "statement": "A final concrete image gives a description shape and resonance."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "At least two distinct senses are identified with specific details.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "Details are concrete rather than generic.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "The opening sentences establish the scene with sensory or figurative detail.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "The sentences are controlled and punctuated accurately.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "The closing image is concrete, memorable and fits the dominant impression.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Figurative language or precise word choice is sustained into the ending.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The paragraph is cohesive and largely error-free.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Clear, effective use of the required technique with some developed detail; mostly accurate."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Limited or partial attempt; technique present but underdeveloped or inaccurate."
                    }
          ],
          "finalAnswer": "A 60-80 word paragraph with planned sensory detail, a strong opening and a resonant closing image — e.g. opening ‘The tide withdrew like a held breath…’ and closing on the last red line of light sinking into the wet sand.",
          "commonErrors": [
                    "Skipping the plan and producing generic description.",
                    "Ending abruptly with no closing image."
          ]
},
        },
        {
          id: "el10-u10-sensfig-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Write a descriptive passage of about 120 words about a scene of your choice.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List five pieces of sensory detail you will include.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write three sentences — one simile, one metaphor and one personification.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Write the complete polished passage.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sustained sensory description",
                              "statement": "Multiple senses and figurative devices must work together toward one impression."
                    },
                    {
                              "kind": "skill",
                              "name": "Polished craft",
                              "statement": "Top-band description integrates technique, variety and accuracy."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Five sensory details are listed across at least three different senses.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "The details are specific rather than generic.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "The details support a coherent dominant impression.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "The simile is accurate and uses ‘like’ or ‘as’ correctly.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "The metaphor states the comparison directly and freshly.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "The personification gives a non-human thing a convincing human quality.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "A clear dominant impression is sustained throughout.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Figurative language is integrated naturally, not bolted on.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "A wide range of senses is engaged.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sentence lengths vary to control pace.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Vocabulary is precise and largely error-free.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "The passage forms a coherent, satisfying whole.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Assured, imaginative and well-controlled writing; techniques sustained and integrated; virtually error-free."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Effective writing with several well-chosen techniques; mostly controlled and accurate."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited writing; few techniques and frequent errors."
                    }
          ],
          "finalAnswer": "A ~120-word passage demonstrating planned sensory detail, all three figurative devices, a sustained dominant impression, varied sentences and accurate, precise language.",
          "commonErrors": [
                    "Listing devices without integrating them into the scene.",
                    "Generic sensory detail and inconsistent tone."
          ]
},
        },
      ],
    },
    {
      id: "el10-u10-structuring-description",
      title: "Structuring a description",
      skill: "Structure a description around a dominant impression, using zooming, perspective and a strong opening and close.",
      lesson: {
        sections: [
          {
            heading: "Dominant impression",
            body: "Every good description has a **dominant impression** — the single mood or idea it builds towards: decay, warmth, menace, freedom. Decide it first, then select only details that serve it. A ‘cozy’ café description needs lamplight and steam, not the flickering tube light above the counter. Every detail is a vote for or against the impression.",
          },
          {
            heading: "Zooming in",
            body: "Control the reader’s eye by **zooming**: start wide (the street, the sky, the crowd) and narrow to a single detail (a crack in the pavement, a wilting flower). Alternatively zoom out from a small object to its setting. The order of presentation is structure — it decides what the reader notices first and what they return to. Plan the sequence before writing.",
          },
          {
            heading: "Perspective, opening and closing",
            body: "Choose a **perspective**: first person puts the reader inside the scene (‘I smelled…’); third person gives a more detached, observational view. The **opening** should establish place and mood immediately; the **closing** should land on a resonant image — an object, a sound, a thought — rather than trailing off. A strong close echoes or completes the opening’s impression.",
          },
        ],
        keyFormulas: [
          { name: "Dominant impression", statement: "The single mood or idea a description builds towards; every detail serves it." },
          { name: "Zooming in", statement: "Ordering detail from wide to narrow (or narrow to wide) to control what the reader notices." },
          { name: "Perspective", statement: "The viewpoint chosen — first-person immersion or third-person observation." },
        ],
        workedExample: {
          problem: "Plan the structure for a description of an old library with a dominant impression of peaceful decay.",
          solution: "Perspective: third person, slightly detached. Opening: wide shot of the quiet street outside. Zoom: the heavy door, the smell of dust and paper, shafts of light. Close: a single detail — dust motes in the light, or a book left open mid-sentence — echoing the stillness. Every detail chosen serves ‘peaceful decay’.",
        },
      },
      questions: [
        {
          id: "el10-u10-structdesc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a ‘dominant impression’ in descriptive writing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The first sentence of the description."
                    },
                    {
                              "id": "b",
                              "text": "The single mood or idea the whole description builds towards."
                    },
                    {
                              "id": "c",
                              "text": "The longest sentence in the passage."
                    },
                    {
                              "id": "d",
                              "text": "A list of all five senses."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dominant impression",
                              "statement": "The unifying mood or idea that all details serve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A dominant impression is the single effect — decay, warmth, menace — that every selected detail supports.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "**(b)** The single mood or idea the description builds towards.",
          "commonErrors": [
                    "Confusing it with the opening line or a technique."
          ]
},
        },
        {
          id: "el10-u10-structdesc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write an opening sentence for a description of an abandoned house that establishes a dominant impression of decay.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Impression-led opening",
                              "statement": "The first sentence should establish mood through a concrete image."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The sentence conveys decay through a concrete image or figurative detail.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The sentence is controlled, punctuated and accurate.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "e.g. ‘The garden had forgotten the house existed, brambles stitching themselves through the porch where the door hung open like a dropped jaw.’",
          "commonErrors": [
                    "Telling us it was ‘run down’ instead of showing decay.",
                    "An opening with no mood at all."
          ]
},
        },
        {
          id: "el10-u10-structdesc-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe a single object (for example an old pocket watch) in three sentences, zooming in from overall appearance to fine detail.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Zooming in",
                              "statement": "Ordering detail from whole to part controls the reader’s attention."
                    },
                    {
                              "kind": "skill",
                              "name": "Sustained focus",
                              "statement": "Three sentences must stay on one object while narrowing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Details move logically from overall appearance to fine detail.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Sensory detail is used throughout.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "At least one figurative or precise language choice sharpens the image.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Sentences are controlled and accurate.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "e.g. ‘The watch lay in my palm, heavy as a small stone, its brass gone green at the edges. The glass was cracked in a star across the face, but the hands still pointed somewhere — ten past, always ten past. Up close I could see the maker’s mark worn smooth, a name nobody alive could read.’",
          "commonErrors": [
                    "Jumping between unrelated details instead of zooming.",
                    "Describing the room rather than the object."
          ]
},
        },
        {
          id: "el10-u10-structdesc-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Plan and begin a description of a storm approaching: state your perspective, the order of details, and write the first three sentences.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structural planning",
                              "statement": "Perspective and detail order must be decided before writing."
                    },
                    {
                              "kind": "technique",
                              "name": "Build-up",
                              "statement": "The opening should move from stillness to disturbance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A clear perspective is stated (first or third person).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The order of details is logical — e.g. sky, wind, then impact.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The first three sentences show a build from calm to disturbance.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Sensory detail and at least one figurative choice are used.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Language is controlled and accurate.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "Plan + three sentences showing stillness breaking into storm, e.g. third-person view moving from a motionless garden to the first gust and the sky ‘turning the colour of a held breath’.",
          "commonErrors": [
                    "Writing before planning, producing a shapeless opening.",
                    "Starting at the storm’s peak rather than building to it."
          ]
},
        },
        {
          id: "el10-u10-structdesc-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write the opening section (about 50 words) of a description of a place you know well.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the dominant impression you will create and why that impression suits the place.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "List the order in which you will present details (wide to narrow, or narrow to wide).",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Write the first two sentences of the description.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Impression planning",
                              "statement": "The dominant impression must be chosen and justified before details."
                    },
                    {
                              "kind": "technique",
                              "name": "Ordered detail",
                              "statement": "The sequence of details is itself a structural choice."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A single dominant impression is named clearly.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "The choice is justified by a feature of the place.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "The order of details is logical and serves the impression.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "A zoom direction (wide-to-narrow or reverse) is identified.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The opening sentences establish place and mood immediately.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sensory or figurative detail is used.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sentences are controlled and accurate.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Clear, effective use of the required technique with some developed detail; mostly accurate."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Limited or partial attempt; technique present but underdeveloped or inaccurate."
                    }
          ],
          "finalAnswer": "A planned opening: clear dominant impression, justified detail order, and two sentences that establish place and mood with sensory or figurative detail.",
          "commonErrors": [
                    "Choosing details before choosing the impression.",
                    "An opening that describes everything at once rather than focusing."
          ]
},
        },
        {
          id: "el10-u10-structdesc-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Write a complete descriptive passage (about 120 words) about a place or object.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Plan: state the dominant impression, your perspective and the order of detail.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write three sentences that establish the scene.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Write the complete polished passage.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structural control",
                              "statement": "Impression, perspective and order must be planned before drafting."
                    },
                    {
                              "kind": "technique",
                              "name": "Sustained description",
                              "statement": "The whole passage must serve one dominant impression."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A single dominant impression is named.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "Perspective (first or third person) is chosen deliberately.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "a",
                              "reasoning": "The order of detail (zoom sequence) is logical.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "The three sentences establish place and mood.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sensory and figurative detail is present.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "The sentences are controlled and accurate.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "The dominant impression is sustained throughout.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The zoom structure guides the reader’s attention.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Figurative language is integrated naturally.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "A resonant closing image completes the structure.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sentence variety and precise vocabulary are controlled.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "The passage is coherent and largely error-free.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Assured, imaginative and well-controlled writing; techniques sustained and integrated; virtually error-free."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Effective writing with several well-chosen techniques; mostly controlled and accurate."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited writing; few techniques and frequent errors."
                    }
          ],
          "finalAnswer": "A ~120-word passage showing planned impression, perspective and zoom; scene-establishing opening; sustained sensory and figurative detail; resonant close; controlled, accurate prose.",
          "commonErrors": [
                    "No plan, so details wander without focus.",
                    "A flat ending that trails off instead of closing the impression."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u10-l11-notes",
      title: "Descriptive writing — notes",
      summary: "Show don't tell: sensory detail, figurative language and a dominant impression give description shape and power.",
      sections: [
        { heading: "Key idea", body: "Choose one dominant impression, plan your detail order (zoom in or out), and select only details that serve the mood." },
        { heading: "Exam technique", body: "Plan before writing: impression first, then senses, then sequence. Close on a resonant image rather than trailing off." },
      ],
    },
  ],
};
