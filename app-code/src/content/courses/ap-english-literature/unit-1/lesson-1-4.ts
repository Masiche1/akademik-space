import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "apelit-u1-lesson-1-4",
  code: "1-4",
  title: "Analyzing Poetry",
  goal: "I CAN analyze imagery, metaphor, sound, and structure in poetry.",
  standards: ["AP Lit 4.x"],
  vocabulary: [
    { term: "Stanza", definition: "A grouped set of lines — the poem's paragraph." },
    { term: "Meter", definition: "The pattern of stressed and unstressed syllables." },
    { term: "Rhyme scheme", definition: "The pattern of end rhymes, labeled a-b-a-b." },
    { term: "Volta", definition: "A turn or shift in thought — often at a sonnet's ninth line." },
    { term: "Enjambment", definition: "Running a sentence across a line break." },
    { term: "Refrain", definition: "A repeated line or lines." },
  ],
  concepts: [
    {
      id: "apelit-u1-poetry-analysis",
      title: "Poetry analysis",
      skill: "Analyze how imagery, sound, and structure create meaning in poems.",
      lesson: {
        sections: [
          {
            heading: "What to track in a poem",
            body: "Track **images** (what senses are invoked), **sound** (alliteration, assonance, meter, rhyme), and **structure** (stanzas, line breaks, volta, refrain). A poem's meaning emerges from the interplay — a harsh image in smooth meter creates tension, for instance.",
          },
          {
            heading: "Structure as meaning",
            body: "**Enjambment** creates flow or instability; **end-stopped lines** create weight and pause. **Volta** marks a turn — the poem argues one way then pivples. **Refrain** creates obsession or ritual. Structure is never neutral.",
          },
        ],
        keyFormulas: [
          { name: "Poem analysis", statement: "Image + sound + structure → meaning" },
          { name: "Rhyme scheme", statement: "Label end rhymes a-b-a-b etc." },
        ],
        workedExample: {
          problem: "A poem ends every stanza with the line 'and still we waited.' What is the effect?",
          solution: "The repeated line is a refrain — it creates ritualistic persistence, emphasizing the unending wait. Its position at stanza-ends gives each stanza a heavy, resigned cadence.",
        },
      },
      questions: [
        {
          id: "apelit-u1-poetry-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A poem's 'volta' is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a type of rhyme"
                    },
                    {
                              "id": "b",
                              "text": "a turn or shift in thought"
                    },
                    {
                              "id": "c",
                              "text": "a stanza break"
                    },
                    {
                              "id": "d",
                              "text": "a repeated refrain"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Volta",
                              "statement": "The turn — shift in argument or emotion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Volta is the 'turn' where the poem pivots — most famously the sonnet's ninth line.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "A turn in thought",
          "commonErrors": [
                    "Confusing volta with refrain."
          ]
},
        },
        {
          id: "apelit-u1-poetry-analysis-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Enjambment — running a sentence across a line break — typically creates ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a strong pause"
                    },
                    {
                              "id": "b",
                              "text": "flow, momentum, or instability"
                    },
                    {
                              "id": "c",
                              "text": "a rhyme"
                    },
                    {
                              "id": "d",
                              "text": "a fixed meter"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Enjambment",
                              "statement": "Sentence spills past the line's edge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Enjambment pulls the reader forward without the pause of an end-stopped line — it creates momentum, breathlessness, or instability depending on context.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Flow and momentum",
          "commonErrors": [
                    "Assuming all line breaks create pauses."
          ]
},
        },
        {
          id: "apelit-u1-poetry-analysis-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Analyze how a refrain functions in a poem. What effects can repetition create?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Refrain",
                              "statement": "Repeated line creates ritual or obsession."
                    },
                    {
                              "kind": "skill",
                              "name": "Effect analysis",
                              "statement": "Weigh possibilities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A refrain returns like a ritual — it can create obsession, inevitability, or resignation depending on context; each repetition deepens or shifts its meaning.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Repetition can also create irony if the refrain's meaning changes as the poem progresses — the same words mean different things at the end.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Refrain creates ritual persistence; meaning may shift across repetitions",
          "commonErrors": [
                    "Saying repetition is always meaningful without analyzing how."
          ]
},
        },
        {
          id: "apelit-u1-poetry-analysis-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how a poem's structure can enact its theme — give an example of form mirroring content.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Form as meaning",
                              "statement": "Structure can embody theme."
                    },
                    {
                              "kind": "skill",
                              "name": "Synthesis",
                              "statement": "Connect form to content."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A poem about inescapable cycles might use a circular structure returning to its opening; a poem about fragmentation might use broken lines and irregular stanzas — form enacts content.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: villanelles repeat fixed lines — the form itself enacts obsession or fate, making structure a meaning-carrier, not just a container.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The strongest answers treat form and content as inseparable.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Form can enact theme — circular structure for cycles, fragmentation for chaos",
          "commonErrors": [
                    "Describing form without connecting it to meaning."
          ]
},
        },
      ],
    },
  ],
};
