import type { Lesson } from "../../../types.ts";

export const lesson18: Lesson = {
  id: "apelit-u1-lesson-1-8",
  code: "1-8",
  title: "The Poetry Analysis Essay",
  goal: "I CAN write an analytical essay on a poem with attention to form and meaning.",
  standards: ["AP Lit 8.x"],
  vocabulary: [
    { term: "Poetry essay", definition: "Timed analysis of a provided poem." },
    { term: "Close reading", definition: "Attention to word choice, imagery, sound, structure." },
    { term: "Form analysis", definition: "How stanza, meter, rhyme, and line breaks create meaning." },
    { term: "Thesis development", definition: "Claim about how the poem's methods produce its effect." },
    { term: "Synthesis", definition: "Connecting multiple elements into a unified argument." },
  ],
  concepts: [
    {
      id: "apelit-u1-poetry-essay",
      title: "The poetry analysis essay",
      skill: "Write a poetry essay integrating form, imagery, and meaning.",
      lesson: {
        sections: [
          {
            heading: "Poetry essay strategy",
            body: "Poems demand attention to **compression** (every word matters), **sound** (the poem is heard as well as read), and **form** (structure is meaning). Your thesis should address how these elements combine — not just what the poem is about.",
          },
          {
            heading: "Common essay traps",
            body: "Avoid paraphrasing the poem's content (the reader has it), listing devices without analysis, and ignoring form. The strongest essays treat sound and structure as meaning-carriers: a sonnet's volta, a villanelle's repetitions, or enjambment's momentum all argue something.",
          },
        ],
        keyFormulas: [
          { name: "Poetry essay", statement: "Thesis on form+imagery → evidence paragraphs → significance" },
          { name: "Compression principle", statement: "Every word in a poem is chosen — analyze why THIS word" },
        ],
        workedExample: {
          problem: "A poem uses slant rhyme and irregular stanzas to describe chaos. Outline an essay.",
          solution: "Thesis: the poem's formal instability enacts its subject — broken rhyme and unpredictable stanzas make readers experience the chaos rather than merely observe it. Body: analyze specific sonic choices, stanza breaks, and their cumulative effect.",
        },
      },
      questions: [
        {
          id: "apelit-u1-poetry-essay-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a poetry essay, analyzing the poem's sound pattern is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "optional decoration"
                    },
                    {
                              "id": "b",
                              "text": "essential — poems are heard as well as read"
                    },
                    {
                              "id": "c",
                              "text": "only for rhythm experts"
                    },
                    {
                              "id": "d",
                              "text": "the thesis"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Sound as meaning",
                              "statement": "Poetry is oral art."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sound — meter, rhyme, alliteration — is a meaning-carrier in poetry; ignoring it misses half the poem.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Essential — sound carries meaning",
          "commonErrors": [
                    "Treating sound as optional ornament."
          ]
},
        },
        {
          id: "apelit-u1-poetry-essay-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does compression matter in poetry analysis?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "poems are short"
                    },
                    {
                              "id": "b",
                              "text": "every word is chosen — word-level analysis is where meaning lives"
                    },
                    {
                              "id": "c",
                              "text": "it's easier to quote"
                    },
                    {
                              "id": "d",
                              "text": "rhyme requires it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Poetic compression",
                              "statement": "No wasted words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In poetry, diction is dense with significance — analyzing WHY 'gloaming' instead of 'evening' reveals the poem's concerns; compression makes every choice meaningful.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Every word is significant",
          "commonErrors": [
                    "Analyzing only big ideas, missing word-level craft."
          ]
},
        },
        {
          id: "apelit-u1-poetry-essay-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a poem's form (stanza structure, line breaks, rhyme) can create meaning — not just organize it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Form as meaning",
                              "statement": "Structure enacts content."
                    },
                    {
                              "kind": "skill",
                              "name": "Integrated analysis",
                              "statement": "Connect form to effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Form can enact content: irregular stanzas and broken rhyme make readers experience chaos; a volta's turn mirrors an argument's pivot; refrain's repetition creates obsession — structure is argument, not container.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Line breaks control pace and emphasis — an enjambed line hurries, an end-stopped line lands; caesura creates a breath or fracture.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strong essays treat form choices as deliberate meaning-making.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Form enacts meaning — structure argues as much as words",
          "commonErrors": [
                    "Describing form without analyzing its effect."
          ]
},
        },
        {
          id: "apelit-u1-poetry-essay-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student claims 'the poem is about nature.' Rewrite this as a thesis that could actually be argued in an essay.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Thesis formulation",
                              "statement": "Topic → arguable claim about method+meaning."
                    },
                    {
                              "kind": "context",
                              "name": "Poetry thesis",
                              "statement": "Must address how the poem works."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'About nature' is a topic; a thesis must claim something about how the poem works — e.g., 'the poem uses natural imagery not to celebrate nature but to expose humanity's alienation from it, as the speaker's language grows increasingly mechanical.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The strong thesis names a method (natural imagery), an argument (alienation, not celebration), and implies analysis of the poem's language choices.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Even stronger: acknowledge complexity — 'while the surface celebrates nature's beauty, the poem's shifting tone ultimately reveals...'",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Claim about method + arguable interpretation, not topic",
          "commonErrors": [
                    "Confusing subject with argument."
          ]
},
        },
      ],
    },
  ],
};
