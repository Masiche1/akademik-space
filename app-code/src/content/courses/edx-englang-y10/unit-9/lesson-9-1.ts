import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "el10-u9-lesson-9-1",
  code: "9-1",
  title: "Structure: Chronology, Flashback and Juxtaposition",
  goal: "I CAN analyse how writers use chronology, flashback, juxtaposition and pace to control meaning and suspense.",
  standards: ["4EA1 Paper 1 Section A", "4EA1 Paper 2 Section A", "4EA1 AO2"],
  
  vocabulary: [
    { term: "Chronology", definition: "The order in which events are presented; may be linear or deliberately disrupted." },
    { term: "Flashback", definition: "A shift back in time to an earlier event, often to explain or recontextualise the present." },
    { term: "Flash-forward", definition: "A brief anticipation of a future event, used to create tension or irony." },
    { term: "Juxtaposition", definition: "Placing two contrasting images, settings or emotions side by side so the contrast creates meaning." },
    { term: "Pace", definition: "The speed at which a narrative moves, controlled by sentence length, paragraphing and scene versus summary." },
    { term: "Scene and summary", definition: "Scene slows time to show a moment in detail; summary compresses time to move the story forward." },
  ],
  concepts: [
    {
      id: "el10-u9-structure-fiction",
      title: "Structural choices in fiction",
      skill: "Analyse how chronology, flashback, juxtaposition and pace shape meaning and suspense in fiction.",
      lesson: {
        sections: [
          {
            heading: "Chronology and time-shifts",
            body: "Most stories move in **chronological order**, but writers deliberately disrupt time. A **flashback** returns to an earlier event; opening with a later moment (as ‘The Last Voyage of the Tamar’ does with the discovered boat) creates a puzzle the reader must solve. Non-linear structure controls what the reader knows and when, which is one of the main engines of **suspense**. It also lets a writer recontextualise events: a childhood memory read after the truth lands very differently.",
          },
          {
            heading: "Juxtaposition and contrast",
            body: "**Juxtaposition** places two contrasting things side by side so the contrast itself creates meaning — a violent storm beside a sketch of a lit house, a crowded street beside a solitary figure. The effect is rarely stated; the reader does the work. Look for images that belong to different emotional or physical worlds, and ask what their collision suggests about character, theme or mood.",
          },
          {
            heading: "Pace, sentence length and paragraphing",
            body: "**Pace** is how fast the story feels. Short sentences and one-line paragraphs hit like drumbeats and suit moments of action or shock — notice ‘He had not.’ in the extract. Longer, flowing sentences suit reflection or description. Writers also switch between **scene** (time expanded, detail shown) and **summary** (time compressed). Analysing pace means asking why the writer chose to slow down or speed up at exactly that moment.",
          },
        ],
        keyFormulas: [
          { name: "Chronology", statement: "The order in which events are presented; linear or deliberately disrupted by time-shifts." },
          { name: "Flashback", statement: "A shift to an earlier event that explains or recontextualises what is happening now." },
          { name: "Juxtaposition", statement: "Two contrasting images or ideas placed side by side so the contrast creates meaning." },
          { name: "Pace", statement: "Narrative speed, controlled by sentence length, paragraphing and the choice of scene or summary." },
        ],
        workedExample: {
          problem: "How does the writer create contrast in the final paragraph of ‘The Last Voyage of the Tamar’ and why does it matter?",
          solution: "The storm that destroyed the boat is set against the father’s small sketch of the house with every window lit — a violent sea beside a domestic image of light. The juxtaposition shows that he was far away yet still thinking of home. It matters because it converts a factual logbook entry into an emotional revelation: the structure delivers the story’s deepest meaning without the writer ever stating it.",
        },
      },
      questions: [
        {
          id: "el10-u9-sfiction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "The Last Voyage of the Tamar",
          "author": "Written for Akademik Space",
          "source": "Short story extract",
          "text": "The harbourmaster found the boat on a Tuesday, upside down in the mud, forty years after she was lost. I was eleven when my father sailed the Tamar out of St Ives for the last time, and for most of my childhood I believed he had simply decided to stay.\n\nHe had not. The storm came up in an hour, a black wall of weather that the fishermen swore had been born over the Atlantic that morning. My mother lit every lamp in the house and sat by the window until dawn, talking to the empty chair where he had sat at breakfast. I remember the porridge going cold on the table, the clock ticking, the gulls screaming past the glass like thrown handfuls of gravel.\n\nYears later, my uncle showed me the logbook. The final entry is four words long: ‘Wind rising. No return.’ Beneath it, in my father’s cramped hand, is a sketch of our house with every window lit — a man drawing light into a dark room from a hundred miles out at sea."
},
          stem: "How does opening with the boat’s discovery forty years later, before the day it was lost, affect the reader?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It removes suspense by giving away the ending immediately."
                    },
                    {
                              "id": "b",
                              "text": "It creates a puzzle: the reader must work out what happened in between."
                    },
                    {
                              "id": "c",
                              "text": "It shows the story is science fiction."
                    },
                    {
                              "id": "d",
                              "text": "It proves that the narrator cannot be trusted."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Non-linear opening",
                              "statement": "Presenting a later moment first withholds the explanation and turns the middle of the story into a puzzle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opening with the discovered boat raises questions — what happened? — that the flashback then answers, which is the definition of a structural puzzle.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(b)** The delayed explanation creates a puzzle the reader must solve, building suspense and investment.",
          "commonErrors": [
                    "Choosing (a): the ending is not given away — the cause of the wreck is withheld."
          ]
},
        },
        {
          id: "el10-u9-sfiction-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "The Last Voyage of the Tamar",
          "author": "Written for Akademik Space",
          "source": "Short story extract",
          "text": "The harbourmaster found the boat on a Tuesday, upside down in the mud, forty years after she was lost. I was eleven when my father sailed the Tamar out of St Ives for the last time, and for most of my childhood I believed he had simply decided to stay.\n\nHe had not. The storm came up in an hour, a black wall of weather that the fishermen swore had been born over the Atlantic that morning. My mother lit every lamp in the house and sat by the window until dawn, talking to the empty chair where he had sat at breakfast. I remember the porridge going cold on the table, the clock ticking, the gulls screaming past the glass like thrown handfuls of gravel.\n\nYears later, my uncle showed me the logbook. The final entry is four words long: ‘Wind rising. No return.’ Beneath it, in my father’s cramped hand, is a sketch of our house with every window lit — a man drawing light into a dark room from a hundred miles out at sea."
},
          stem: "Identify two features in the storm paragraph that speed up the pace of the narrative.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Pace through sentence control",
                              "statement": "Short sentences, fragments and rapid lists quicken pace; analysis must link the feature to the effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The blunt three-word sentence ‘He had not.’ stops the reader and hits like a drumbeat, accelerating the pace.",
                              "evidence": "He had not.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The rapid list of concrete details — cold porridge, ticking clock, screaming gulls — piles images up quickly, quickening the pace.",
                              "evidence": "the porridge going cold on the table, the clock ticking",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The short sentence ‘He had not.’ and the rapid list of cold porridge, ticking clock and screaming gulls both quicken the pace.",
          "commonErrors": [
                    "Describing the storm’s violence instead of the pace.",
                    "Quoting features without explaining how they affect speed."
          ]
},
        },
        {
          id: "el10-u9-sfiction-q3",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "The Last Voyage of the Tamar",
          "author": "Written for Akademik Space",
          "source": "Short story extract",
          "text": "The harbourmaster found the boat on a Tuesday, upside down in the mud, forty years after she was lost. I was eleven when my father sailed the Tamar out of St Ives for the last time, and for most of my childhood I believed he had simply decided to stay.\n\nHe had not. The storm came up in an hour, a black wall of weather that the fishermen swore had been born over the Atlantic that morning. My mother lit every lamp in the house and sat by the window until dawn, talking to the empty chair where he had sat at breakfast. I remember the porridge going cold on the table, the clock ticking, the gulls screaming past the glass like thrown handfuls of gravel.\n\nYears later, my uncle showed me the logbook. The final entry is four words long: ‘Wind rising. No return.’ Beneath it, in my father’s cramped hand, is a sketch of our house with every window lit — a man drawing light into a dark room from a hundred miles out at sea."
},
          stem: "Explain how the writer uses juxtaposition in the final paragraph to deepen the story’s meaning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Juxtaposition",
                              "statement": "Contrasting images placed side by side make the reader supply the meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The violent storm and the father’s small sketch of the lit house are placed side by side — destruction beside domestic light.",
                              "evidence": "a sketch of our house with every window lit",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The contrast shrinks the father’s gesture: he is far out at sea, yet his thought is of home.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Juxtaposition implies absence and love in the same image — he cannot return, but he still draws light into the dark room.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It deepens the meaning: grief is converted into enduring attachment, and the reader does this interpretive work themselves.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The storm and the sketch of the lit house are set side by side; the contrast shows the father far away yet still devoted to home, turning a factual record into an emotional revelation.",
          "commonErrors": [
                    "Feature-spotting: naming ‘contrast’ without explaining its effect.",
                    "Ignoring the reader’s role in supplying the meaning."
          ]
},
        },
        {
          id: "el10-u9-sfiction-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "The Last Voyage of the Tamar",
          "author": "Written for Akademik Space",
          "source": "Short story extract",
          "text": "The harbourmaster found the boat on a Tuesday, upside down in the mud, forty years after she was lost. I was eleven when my father sailed the Tamar out of St Ives for the last time, and for most of my childhood I believed he had simply decided to stay.\n\nHe had not. The storm came up in an hour, a black wall of weather that the fishermen swore had been born over the Atlantic that morning. My mother lit every lamp in the house and sat by the window until dawn, talking to the empty chair where he had sat at breakfast. I remember the porridge going cold on the table, the clock ticking, the gulls screaming past the glass like thrown handfuls of gravel.\n\nYears later, my uncle showed me the logbook. The final entry is four words long: ‘Wind rising. No return.’ Beneath it, in my father’s cramped hand, is a sketch of our house with every window lit — a man drawing light into a dark room from a hundred miles out at sea."
},
          stem: "Analyse how the writer moves between past and present to shape the reader’s response across the whole extract.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Time-shift structure",
                              "statement": "Controlling when information is revealed directs the reader’s emotions."
                    },
                    {
                              "kind": "skill",
                              "name": "Sustained analysis",
                              "statement": "Track the effect of the structure across the whole text, not just one paragraph."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The present-tense frame — the boat found upside down — poses a question the rest of the extract exists to answer.",
                              "evidence": "The harbourmaster found the boat on a Tuesday",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The childhood memory creates false certainty: the reader, like the narrator, believes he chose to stay.",
                              "evidence": "I believed he had simply decided to stay",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The storm scene is the withheld explanation, delivered only once the reader is fully invested in the boy’s hope.",
                              "evidence": "The storm came up in an hour",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The logbook reveal lands as a shock because it flatly contradicts years of assumption.",
                              "evidence": "Wind rising. No return.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The closing sketch recontextualises the grief, so the reader reinterprets the whole story — structure itself delivers the emotional impact.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The found boat creates a mystery; the flashback builds a false belief that he left willingly; the storm supplies the withheld explanation; the logbook shatters the assumption; the sketch converts grief into enduring love. The time-shifts control exactly when the reader grieves, which is the extract’s structural power.",
          "commonErrors": [
                    "Retelling the plot chronologically instead of analysing the effect of the shifts.",
                    "Analysing only the storm paragraph and ignoring the frame."
          ]
},
        },
        {
          id: "el10-u9-sfiction-q5",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
          "title": "The Last Voyage of the Tamar",
          "author": "Written for Akademik Space",
          "source": "Short story extract",
          "text": "The harbourmaster found the boat on a Tuesday, upside down in the mud, forty years after she was lost. I was eleven when my father sailed the Tamar out of St Ives for the last time, and for most of my childhood I believed he had simply decided to stay.\n\nHe had not. The storm came up in an hour, a black wall of weather that the fishermen swore had been born over the Atlantic that morning. My mother lit every lamp in the house and sat by the window until dawn, talking to the empty chair where he had sat at breakfast. I remember the porridge going cold on the table, the clock ticking, the gulls screaming past the glass like thrown handfuls of gravel.\n\nYears later, my uncle showed me the logbook. The final entry is four words long: ‘Wind rising. No return.’ Beneath it, in my father’s cramped hand, is a sketch of our house with every window lit — a man drawing light into a dark room from a hundred miles out at sea."
},
          stem: "Read ‘The Last Voyage of the Tamar’ and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two details that show the father’s absence has affected the family.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the storm is described in the second paragraph.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Analyse how the writer’s movement between past and present shapes meaning across the whole extract.",
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
                              "name": "Retrieval then analysis",
                              "statement": "Short accurate points for (a) and (b); developed structural analysis for (c)."
                    },
                    {
                              "kind": "technique",
                              "name": "Descriptive language",
                              "statement": "The storm is given scale and violence through metaphor and simile."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The mother keeps a vigil: she lights every lamp and speaks to his empty chair.",
                              "evidence": "sat by the window until dawn, talking to the empty chair where he had sat at breakfast",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "The boy’s misunderstanding — believing he simply decided to stay — shows the absence distorted the family’s understanding of him.",
                              "evidence": "I believed he had simply decided to stay",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The storm is given unnatural scale through the metaphor ‘a black wall of weather’.",
                              "evidence": "a black wall of weather",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The simile of the gulls ‘like thrown handfuls of gravel’ makes the storm feel violent, chaotic and deafening.",
                              "evidence": "the gulls screaming past the glass like thrown handfuls of gravel",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The present frame withholds the cause of the wreck, turning the flashback into an answer the reader is desperate for.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The childhood memory builds a false belief that he chose to leave, so the storm reveal reverses the reader’s judgement.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The logbook and sketch recontextualise everything, showing structure itself delivers the emotional payoff.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Clear, relevant analysis with some well-chosen references to the text; points are developed but not always fully synthesised."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple or partial comment on the feature; limited development or few relevant references."
                    }
          ],
          "finalAnswer": "(a) The mother keeps a lamp-lit vigil and speaks to his empty chair; the boy believes he chose to stay. (b) ‘Black wall of weather’ gives the storm unnatural scale; the ‘thrown handfuls of gravel’ simile makes it violent and chaotic. (c) The frame creates a withheld explanation; the flashback builds false belief; the reveal and sketch deliver the emotional impact.",
          "commonErrors": [
                    "Answering (b) with a list of storm details rather than explaining the description.",
                    "In (c) retelling events instead of analysing the structural effect."
          ]
},
        },
        {
          id: "el10-u9-sfiction-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Last Voyage of the Tamar",
          "author": "Written for Akademik Space",
          "source": "Short story extract",
          "text": "The harbourmaster found the boat on a Tuesday, upside down in the mud, forty years after she was lost. I was eleven when my father sailed the Tamar out of St Ives for the last time, and for most of my childhood I believed he had simply decided to stay.\n\nHe had not. The storm came up in an hour, a black wall of weather that the fishermen swore had been born over the Atlantic that morning. My mother lit every lamp in the house and sat by the window until dawn, talking to the empty chair where he had sat at breakfast. I remember the porridge going cold on the table, the clock ticking, the gulls screaming past the glass like thrown handfuls of gravel.\n\nYears later, my uncle showed me the logbook. The final entry is four words long: ‘Wind rising. No return.’ Beneath it, in my father’s cramped hand, is a sketch of our house with every window lit — a man drawing light into a dark room from a hundred miles out at sea."
},
          stem: "Read ‘The Last Voyage of the Tamar’ and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give three details from the final paragraph that reveal the father’s feelings or state of mind.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Analyse how the writer uses the logbook — a found document — to deepen the story’s emotional impact.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how effectively the writer’s structural choices create an emotional impact across the whole extract.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "The found document",
                              "statement": "A discovered object (logbook, letter, photograph) lets a writer reveal character and emotion indirectly."
                    },
                    {
                              "kind": "technique",
                              "name": "Structural evaluation",
                              "statement": "Judge the effect of the whole design — frame, flashback, reveal — not isolated features."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The terse entry ‘Wind rising. No return.’ shows calm acceptance of his fate.",
                              "evidence": "Wind rising. No return.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "The sketch of the house with every window lit shows he was thinking of home.",
                              "evidence": "a sketch of our house with every window lit",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "The ‘cramped hand’ suggests haste and the finality of a man writing under pressure.",
                              "evidence": "in my father’s cramped hand",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The logbook feels authentic — a real artefact — so the reveal carries documentary weight.",
                              "evidence": "my uncle showed me the logbook",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The four-word entry is brutally economical; its brevity mirrors a man with no time left.",
                              "evidence": "The final entry is four words long",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The private sketch beneath the official record contrasts duty with devotion, deepening the emotional impact.",
                              "evidence": "Beneath it, in my father’s cramped hand",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The present-tense frame withholds the cause, so the reader reads the flashback as an explanation they need.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The childhood belief creates sympathy and a false judgement the storm later overturns.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The storm paragraph’s pace and imagery make the disaster visceral rather than reported.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The logbook reveal is timed for maximum shock because it contradicts everything assumed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The closing sketch converts grief into enduring love and gives the story a resonant, ambiguous ending.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Overall judgement: the structure is highly effective because meaning is delivered by design, not statement.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, well-argued evaluation sustained across the whole text; judgements are precise and supported by well-chosen references."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant evaluation with some developed points and appropriate references."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited evaluation; descriptive or partly relevant comments."
                    }
          ],
          "finalAnswer": "(a) ‘Wind rising. No return.’ shows acceptance; the lit-window sketch shows love of home; the cramped hand suggests urgency. (b) The logbook is authentic, its four-word entry is brutally economical, and the private sketch under the official record contrasts duty with devotion. (c) The frame withholds the cause, the flashback builds false belief, the storm makes loss visceral, the reveal shocks, and the sketch leaves lasting emotional resonance — the structure is the story’s engine.",
          "commonErrors": [
                    "Describing the logbook’s content without analysing why the device works.",
                    "In (c) listing features without reaching a judgement about effectiveness."
          ],
          "examinerNote": "Award the final mark in (c) only for an explicit evaluative judgement, not merely description."
},
        },
      ],
    },
    {
      id: "el10-u9-structure-nonfiction",
      title: "Structure in non-fiction argument",
      skill: "Analyse how non-fiction writers structure arguments through openings, anecdotes, concessions and conclusions.",
      lesson: {
        sections: [
          {
            heading: "Openings that hook",
            body: "Non-fiction writers rarely begin with a thesis. They open with an **anecdote** (a real scene, as in ‘A Case for the Library’), a surprising fact, a question or a bold claim. The opening’s job is to make the reader need the argument. Analyse what the opening makes the reader feel or wonder — that is the writer’s purpose in miniature.",
          },
          {
            heading: "Concession and counter-argument",
            body: "Strong arguments acknowledge the opposition: ‘Critics say… and they have a point.’ This **concession** makes the writer seem fair and makes the later rebuttal stronger. Look for the pivot words — ‘But’, ‘However’, ‘Of course’ — where the writer turns from agreement to disagreement. Structure, not just content, carries the argument’s credibility.",
          },
          {
            heading: "Building the case and concluding",
            body: "Writers build through **triadic lists** (three parallel examples), rhetorical questions and direct address. Conclusions often qualify rather than overclaim — ‘Of course, libraries must change’ — then end with an **imperative** or rallying cry (‘We should fight for that’). The best conclusions echo the opening’s image or idea, closing the structural loop.",
          },
        ],
        keyFormulas: [
          { name: "Anecdotal opening", statement: "A real or plausible scene used to personalise an argument and hook the reader." },
          { name: "Concession", statement: "Acknowledging the opposition’s point before rebutting it; strengthens the writer’s credibility." },
          { name: "Triadic list", statement: "Three parallel examples or clauses; creates rhythm and a sense of completeness." },
          { name: "Structural loop", statement: "A conclusion that echoes the opening image or idea, giving the piece shape." },
        ],
        workedExample: {
          problem: "How does the writer of ‘A Case for the Library’ use structure to persuade the reader?",
          solution: "She opens with a personal anecdote — a girl reading alone while friends shop — which makes the argument feel observed rather than abstract. She then concedes the critics’ point (‘they have a point’) before pivoting with ‘But’. Paragraph three defines the library through a triadic list of what it offers, and the conclusion qualifies (‘must change’) before ending on a rallying imperative. Each structural choice either hooks, persuades or qualifies — the argument is engineered, not just asserted.",
        },
      },
      questions: [
        {
          id: "el10-u9-snonfic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "A Case for the Library",
          "author": "Written for Akademik Space",
          "source": "Opinion column",
          "text": "On the last Friday of term I watched a girl of perhaps sixteen sit alone in the public library, surrounded by books, while her friends laughed their way through the shopping centre two streets away. It was a small thing, but it stayed with me all weekend.\n\nCritics say libraries are a relic of a print-obsessed age, and they have a point: borrowing has fallen by a third in ten years, and councils have closed hundreds of branches. But the answer to empty shelves is not to padlock the door. It is to ask what libraries are actually for.\n\nA library is not just a warehouse for books. It is the one public space where nobody is expected to spend money, where a child can sit all afternoon without being moved on, and where a pensioner and a teenager can read shoulder to shoulder. None of that can be replaced by a screen.\n\nOf course, libraries must change. They can lend e-readers, run homework clubs, offer Wi-Fi to families who have none at home. But the building — the quiet, the light, the sense of belonging to something older than the checkout queue — is the product. We should fight for that, not apologise for it."
},
          stem: "What structural technique does the writer use to open the article?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A statistical claim about library funding."
                    },
                    {
                              "id": "b",
                              "text": "An anecdote: a real scene the writer witnessed."
                    },
                    {
                              "id": "c",
                              "text": "A rhetorical question addressed to the reader."
                    },
                    {
                              "id": "d",
                              "text": "A formal definition of a library."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Anecdotal opening",
                              "statement": "A witnessed scene used as an entry point into an argument."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The first paragraph narrates a specific Friday scene the writer ‘watched’, which is an anecdote, not a statistic or definition.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** The article opens with an anecdote — a girl reading alone while her friends shop.",
          "commonErrors": [
                    "Choosing (c): no question appears until later in the piece."
          ]
},
        },
        {
          id: "el10-u9-snonfic-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "A Case for the Library",
          "author": "Written for Akademik Space",
          "source": "Opinion column",
          "text": "On the last Friday of term I watched a girl of perhaps sixteen sit alone in the public library, surrounded by books, while her friends laughed their way through the shopping centre two streets away. It was a small thing, but it stayed with me all weekend.\n\nCritics say libraries are a relic of a print-obsessed age, and they have a point: borrowing has fallen by a third in ten years, and councils have closed hundreds of branches. But the answer to empty shelves is not to padlock the door. It is to ask what libraries are actually for.\n\nA library is not just a warehouse for books. It is the one public space where nobody is expected to spend money, where a child can sit all afternoon without being moved on, and where a pensioner and a teenager can read shoulder to shoulder. None of that can be replaced by a screen.\n\nOf course, libraries must change. They can lend e-readers, run homework clubs, offer Wi-Fi to families who have none at home. But the building — the quiet, the light, the sense of belonging to something older than the checkout queue — is the product. We should fight for that, not apologise for it."
},
          stem: "Identify the counter-argument the writer acknowledges, and the phrase that shows he accepts it has some force.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Concession",
                              "statement": "Acknowledging the opposition before rebutting it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The counter-argument is that libraries are outdated: critics call them ‘a relic of a print-obsessed age’ with falling borrowing and closures.",
                              "evidence": "Critics say libraries are a relic of a print-obsessed age",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The concession phrase is ‘they have a point’, which accepts the criticism has some validity.",
                              "evidence": "and they have a point",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "The critics’ claim that libraries are a relic of a print age, conceded with the phrase ‘they have a point’.",
          "commonErrors": [
                    "Quoting the borrowing statistics without identifying them as the critics’ argument."
          ]
},
        },
        {
          id: "el10-u9-snonfic-q3",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "A Case for the Library",
          "author": "Written for Akademik Space",
          "source": "Opinion column",
          "text": "On the last Friday of term I watched a girl of perhaps sixteen sit alone in the public library, surrounded by books, while her friends laughed their way through the shopping centre two streets away. It was a small thing, but it stayed with me all weekend.\n\nCritics say libraries are a relic of a print-obsessed age, and they have a point: borrowing has fallen by a third in ten years, and councils have closed hundreds of branches. But the answer to empty shelves is not to padlock the door. It is to ask what libraries are actually for.\n\nA library is not just a warehouse for books. It is the one public space where nobody is expected to spend money, where a child can sit all afternoon without being moved on, and where a pensioner and a teenager can read shoulder to shoulder. None of that can be replaced by a screen.\n\nOf course, libraries must change. They can lend e-readers, run homework clubs, offer Wi-Fi to families who have none at home. But the building — the quiet, the light, the sense of belonging to something older than the checkout queue — is the product. We should fight for that, not apologise for it."
},
          stem: "Explain how the anecdote in the first paragraph works to establish the writer’s purpose.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Anecdote as evidence",
                              "statement": "A witnessed scene makes an argument feel observed and personal rather than abstract."
                    },
                    {
                              "kind": "skill",
                              "name": "Purpose analysis",
                              "statement": "Explain what the opening makes the reader feel and why that serves the argument."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The concrete scene — a girl alone among books while friends shop — makes the subject immediate and real.",
                              "evidence": "sat alone in the public library, surrounded by books",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The contrast with the shopping centre quietly suggests libraries offer something commerce does not.",
                              "evidence": "her friends laughed their way through the shopping centre two streets away",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "‘It stayed with me all weekend’ signals personal stake, framing the article as testimony rather than opinion.",
                              "evidence": "it stayed with me all weekend",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The opening’s purpose is to make the reader curious and sympathetic before any claim is stated.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "The anecdote turns an abstract debate into an observed scene; the girl-versus-shopping contrast hints at the article’s value judgement; and ‘it stayed with me’ makes the writer a credible witness, hooking the reader before the argument begins.",
          "commonErrors": [
                    "Retelling the anecdote without explaining its persuasive function."
          ]
},
        },
        {
          id: "el10-u9-snonfic-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "A Case for the Library",
          "author": "Written for Akademik Space",
          "source": "Opinion column",
          "text": "On the last Friday of term I watched a girl of perhaps sixteen sit alone in the public library, surrounded by books, while her friends laughed their way through the shopping centre two streets away. It was a small thing, but it stayed with me all weekend.\n\nCritics say libraries are a relic of a print-obsessed age, and they have a point: borrowing has fallen by a third in ten years, and councils have closed hundreds of branches. But the answer to empty shelves is not to padlock the door. It is to ask what libraries are actually for.\n\nA library is not just a warehouse for books. It is the one public space where nobody is expected to spend money, where a child can sit all afternoon without being moved on, and where a pensioner and a teenager can read shoulder to shoulder. None of that can be replaced by a screen.\n\nOf course, libraries must change. They can lend e-readers, run homework clubs, offer Wi-Fi to families who have none at home. But the building — the quiet, the light, the sense of belonging to something older than the checkout queue — is the product. We should fight for that, not apologise for it."
},
          stem: "Analyse how the writer structures the argument across the whole article, including the concession and rebuttal.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Argument architecture",
                              "statement": "Hook, concession, reframe, evidence and qualified conclusion form a persuasive structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The anecdotal opening hooks the reader with a human scene before any claim is made.",
                              "evidence": "On the last Friday of term I watched a girl",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The concession — ‘they have a point’ — disarms opposition and makes the writer seem fair-minded.",
                              "evidence": "and they have a point",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The pivot ‘But the answer… is to ask what libraries are actually for’ reframes the debate on the writer’s terms.",
                              "evidence": "It is to ask what libraries are actually for",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Paragraph three builds the case through a triadic list of what a library offers.",
                              "evidence": "nobody is expected to spend money… sit all afternoon… shoulder to shoulder",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The conclusion qualifies (‘must change’) then rallies with an imperative, echoing a balanced but firm stance.",
                              "evidence": "We should fight for that, not apologise for it",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The article hooks with an anecdote, concedes the critics’ point to gain credibility, reframes the question, supports its case with a triadic list, and concludes with a qualified rallying cry — a deliberately engineered persuasive structure.",
          "commonErrors": [
                    "Listing devices without explaining how they serve the argument.",
                    "Ignoring the concession and treating the piece as one-sided."
          ]
},
        },
        {
          id: "el10-u9-snonfic-q5",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
          "title": "A Case for the Library",
          "author": "Written for Akademik Space",
          "source": "Opinion column",
          "text": "On the last Friday of term I watched a girl of perhaps sixteen sit alone in the public library, surrounded by books, while her friends laughed their way through the shopping centre two streets away. It was a small thing, but it stayed with me all weekend.\n\nCritics say libraries are a relic of a print-obsessed age, and they have a point: borrowing has fallen by a third in ten years, and councils have closed hundreds of branches. But the answer to empty shelves is not to padlock the door. It is to ask what libraries are actually for.\n\nA library is not just a warehouse for books. It is the one public space where nobody is expected to spend money, where a child can sit all afternoon without being moved on, and where a pensioner and a teenager can read shoulder to shoulder. None of that can be replaced by a screen.\n\nOf course, libraries must change. They can lend e-readers, run homework clubs, offer Wi-Fi to families who have none at home. But the building — the quiet, the light, the sense of belonging to something older than the checkout queue — is the product. We should fight for that, not apologise for it."
},
          stem: "Read ‘A Case for the Library’ and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two things the writer says a library offers that cannot be replaced by a screen.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the effect of the writer’s list of three in the third paragraph.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how effectively the conclusion persuades the reader to value libraries.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Triadic list",
                              "statement": "Three parallel items create rhythm and a sense of completeness."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluative judgement",
                              "statement": "Judge whether the conclusion’s qualification and rallying close persuade."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A space where nobody is expected to spend money.",
                              "evidence": "the one public space where nobody is expected to spend money",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "A place where a child can sit all afternoon without being moved on, or where different generations read together.",
                              "evidence": "a pensioner and a teenager can read shoulder to shoulder",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The three parallel clauses — free entry, a child left alone, generations together — build rhythm and make the library’s value feel comprehensive.",
                              "evidence": "where a child can sit all afternoon without being moved on",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The list’s completeness makes ‘None of that can be replaced by a screen’ feel like a verdict rather than a claim.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The qualification ‘libraries must change’ concedes ground, which paradoxically strengthens trust.",
                              "evidence": "Of course, libraries must change",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Naming concrete adaptations — e-readers, homework clubs, Wi-Fi — shows the writer is realistic, not nostalgic.",
                              "evidence": "They can lend e-readers, run homework clubs",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The closing imperative ‘We should fight for that’ converts agreement into action, an effective persuasive ending.",
                              "evidence": "We should fight for that, not apologise for it",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Clear, relevant analysis with some well-chosen references to the text; points are developed but not always fully synthesised."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple or partial comment on the feature; limited development or few relevant references."
                    }
          ],
          "finalAnswer": "(a) Free public space; a place a child can occupy all afternoon / generations reading together. (b) The triadic list builds rhythm and completeness, making the claim about screens feel conclusive. (c) The conclusion persuades well: it concedes change is needed, proves realism with concrete adaptations, and ends on a rallying imperative.",
          "commonErrors": [
                    "In (b) describing the list without linking it to rhythm or completeness.",
                    "In (c) summarising the conclusion instead of judging its persuasive force."
          ]
},
        },
        {
          id: "el10-u9-snonfic-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "A Case for the Library",
          "author": "Written for Akademik Space",
          "source": "Opinion column",
          "text": "On the last Friday of term I watched a girl of perhaps sixteen sit alone in the public library, surrounded by books, while her friends laughed their way through the shopping centre two streets away. It was a small thing, but it stayed with me all weekend.\n\nCritics say libraries are a relic of a print-obsessed age, and they have a point: borrowing has fallen by a third in ten years, and councils have closed hundreds of branches. But the answer to empty shelves is not to padlock the door. It is to ask what libraries are actually for.\n\nA library is not just a warehouse for books. It is the one public space where nobody is expected to spend money, where a child can sit all afternoon without being moved on, and where a pensioner and a teenager can read shoulder to shoulder. None of that can be replaced by a screen.\n\nOf course, libraries must change. They can lend e-readers, run homework clubs, offer Wi-Fi to families who have none at home. But the building — the quiet, the light, the sense of belonging to something older than the checkout queue — is the product. We should fight for that, not apologise for it."
},
          stem: "Read ‘A Case for the Library’ and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give three criticisms of libraries that the writer acknowledges.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Analyse how the writer uses a rhetorical question and direct address in the second and fourth paragraphs.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the overall structure of the argument and its effectiveness in persuading the reader.",
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
                              "name": "Rhetorical question",
                              "statement": "A question posed for effect, not answer; recruits the reader into the argument."
                    },
                    {
                              "kind": "skill",
                              "name": "Whole-text evaluation",
                              "statement": "Judge the argument’s architecture — opening, concession, evidence, conclusion — as a design."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Libraries are called ‘a relic of a print-obsessed age’ — outdated.",
                              "evidence": "a relic of a print-obsessed age",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Borrowing has fallen by a third in ten years.",
                              "evidence": "borrowing has fallen by a third in ten years",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Councils have closed hundreds of branches.",
                              "evidence": "councils have closed hundreds of branches",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The rhetorical question ‘what libraries are actually for’ forces the reader to reconsider the debate’s terms.",
                              "evidence": "It is to ask what libraries are actually for",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "‘We should fight for that’ uses the inclusive ‘we’ to recruit the reader into the campaign.",
                              "evidence": "We should fight for that",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Direct address throughout — ‘I watched’, ‘we’ — keeps the argument personal and conversational.",
                              "evidence": "I watched a girl of perhaps sixteen",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The anecdotal opening converts abstraction into an observed human scene.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The concession buys credibility before the rebuttal.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The triadic definition of a library supplies the argumentative evidence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The qualified conclusion with concrete adaptations avoids overclaiming.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The structural loop — anecdote to action — gives the piece a satisfying shape.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Overall judgement: the structure is effective because each stage does a distinct persuasive job.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, well-argued evaluation sustained across the whole text; judgements are precise and supported by well-chosen references."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant evaluation with some developed points and appropriate references."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited evaluation; descriptive or partly relevant comments."
                    }
          ],
          "finalAnswer": "(a) Outdated relic; borrowing down by a third; hundreds of branches closed. (b) The rhetorical question reframes the debate; ‘we should fight’ recruits the reader; first-person witness keeps it personal. (c) The anecdote hooks, the concession persuades by fairness, the list supplies evidence, the qualified conclusion avoids overclaim, and the ending rallies — a highly effective persuasive architecture.",
          "commonErrors": [
                    "In (a) giving opinions rather than the criticisms the writer acknowledges.",
                    "In (c) describing paragraphs in order without evaluating the design."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u9-l11-notes",
      title: "Structure in fiction — notes",
      summary: "Non-linear chronology, juxtaposition and pace are structural tools that control what the reader knows and feels.",
      sections: [
        { heading: "Key idea", body: "Flashbacks and disrupted chronology withhold or recontextualise information; juxtaposition makes the reader supply meaning; pace is controlled by sentence length and paragraphing." },
        { heading: "Exam technique", body: "Always link the structural feature to its effect on the reader — mystery, suspense, shock, sympathy — and track it across the whole text for top marks." },
      ],
    },
  ],
};
