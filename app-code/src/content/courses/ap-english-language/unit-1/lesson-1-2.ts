import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apel-u1-lesson-1-2",
  code: "1-2",
  title: "Style and Rhetorical Devices",
  goal: "I CAN analyze diction, syntax, imagery, and figurative language.",
  standards: ["AP Lang 2.x"],
  vocabulary: [
    { term: "Diction", definition: "Word choice — formal/informal, concrete/abstract, denotative/connotative." },
    { term: "Syntax", definition: "Sentence structure — length, variety, parallelism, periodic vs cumulative." },
    { term: "Imagery", definition: "Sensory language appealing to sight, sound, touch, taste, smell." },
    { term: "Metaphor", definition: "Direct comparison: 'the classroom was a battlefield'." },
    { term: "Simile", definition: "Comparison with 'like' or 'as'." },
    { term: "Tone", definition: "The author's attitude toward subject and audience." },
    { term: "Parallelism", definition: "Repeated grammatical structure for emphasis and rhythm." },
  ],
  concepts: [
    {
      id: "apel-u1-style-devices",
      title: "Analyzing style",
      skill: "Connect specific language choices to rhetorical effect.",
      lesson: {
        sections: [
          {
            heading: "Diction and tone",
            body: "Word choice carries attitude: 'slim' vs 'scrawny', 'frugal' vs 'cheap'. Analyzing diction means naming the specific words and explaining their connotation and cumulative effect on tone — not just labeling tone as 'angry' or 'sarcastic'.",
          },
          {
            heading: "Syntax and figures",
            body: "Sentence structure controls pace: short declaratives punch; long periodic sentences build suspense. **Parallelism** creates rhythm and emphasis ('of the people, by the people, for the people'). **Imagery** makes abstractions concrete. Strong analysis always links device to effect to purpose.",
          },
        ],
        keyFormulas: [
          { name: "Analysis chain", statement: "Device → specific example → effect → purpose" },
          { name: "Tone", statement: "Attitude conveyed through diction, syntax, imagery" },
        ],
        workedExample: {
          problem: "Analyze: 'The bill died quietly in committee, its supporters' hopes buried with it.'",
          solution: "Metaphor ('died', 'buried') personifies legislation, framing defeat as death — likely mocking or lamenting tone. The quiet adverbs suggest ineffectuality or resignation.",
        },
      },
      questions: [
        {
          id: "apel-u1-style-devices-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The repetition of 'We shall fight on the beaches, we shall fight on the landing grounds' is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "metaphor"
                    },
                    {
                              "id": "b",
                              "text": "parallelism"
                    },
                    {
                              "id": "c",
                              "text": "synecdoche"
                    },
                    {
                              "id": "d",
                              "text": "hyperbole"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Parallelism",
                              "statement": "Repeated grammatical structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Repeated 'we shall fight on...' structure creates rhythm and mounting determination.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Parallelism",
          "commonErrors": [
                    "Calling every repetition a metaphor."
          ]
},
        },
        {
          id: "apel-u1-style-devices-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In analysis, 'diction' refers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sentence length"
                    },
                    {
                              "id": "b",
                              "text": "word choice and its connotations"
                    },
                    {
                              "id": "c",
                              "text": "paragraph structure"
                    },
                    {
                              "id": "d",
                              "text": "punctuation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Diction",
                              "statement": "The selection of words and their associations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Diction analysis examines specific word choices and their connotative weight.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Confusing diction with syntax."
          ]
},
        },
        {
          id: "apel-u1-style-devices-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Analyze the effect of this sentence's structure: 'Short sentences. Then longer ones that wind through qualifications until the reader almost loses the point — and then, suddenly, the verdict.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Syntax variation",
                              "statement": "Short-to-long shift controls pacing."
                    },
                    {
                              "kind": "skill",
                              "name": "Effect analysis",
                              "statement": "Structure mimics the suspense described."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The opening fragments and short sentences create abrupt tension; the winding long sentence enacts the 'qualifications' it describes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The final short sentence delivers the 'verdict' with punch — form mirrors content.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Syntax mirrors suspense; short verdict lands hard",
          "commonErrors": [
                    "Describing devices without linking to effect."
          ]
},
        },
        {
          id: "apel-u1-style-devices-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student writes: 'The author uses imagery.' Rewrite this as a strong analytical sentence that names the specific image, its sensory quality, and its effect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Specific analysis",
                              "statement": "Name device + content + effect."
                    },
                    {
                              "kind": "convention",
                              "name": "Analytical writing",
                              "statement": "Avoid vague labels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weak version labels without analyzing; strong version must specify WHICH imagery, WHAT sense it engages, and WHAT effect it creates.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Model: 'The olfactory image of \"burning sugar\" converts abstract dread into a bodily sensation, making the character's anxiety physically present to the reader.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The rewrite demonstrates device + sensory detail + effect — the full analysis chain.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Name the image, sensory channel, and effect — not just 'imagery'",
          "commonErrors": [
                    "Keeping the vague label 'imagery' without specifics."
          ]
},
        },
      ],
    },
  ],
};
