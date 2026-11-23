import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "satrw-u2-lesson-2-1",
  code: "2-1",
  title: "Words in Context",
  goal: "I CAN determine word meaning from passage context.",
  standards: ["SAT RW 6.x"],
  vocabulary: [
    { term: "Context clues", definition: "Surrounding text that reveals word meaning." },
    { term: "Denotation", definition: "Literal dictionary meaning." },
    { term: "Connotation", definition: "Associated feelings/attitudes." },
    { term: "Inference from context", definition: "Deduce meaning from how word is used." },
    { term: "Tone indicator", definition: "Word's emotional coloring." },
    { term: "Precise meaning", definition: "The specific sense used in THIS passage." },
  ],
  concepts: [
    {
      id: "satrw-u2-words-in-context",
      title: "Words in context",
      skill: "Determine precise word meaning from surrounding text.",
      lesson: {
        sections: [
          {
            heading: "Context clue types",
            body: "**Definition** ('X, which means Y'), **example** ('such as X'), **contrast** ('unlike X'), **inference** (meaning from usage). SAT questions give a word and ask its meaning IN THIS PASSAGE — the same word can mean different things in different contexts; use the passage, not your first association.",
          },
          {
            heading: "Connotation matters",
            body: "'Frugal' vs 'stingy' vs 'economical' — same basic meaning (careful with money) but different attitudes: frugal is positive, stingy negative, economical neutral. SAT questions test whether you catch the connotative shading — the passage's tone tells you which sense fits.",
          },
        ],
        keyFormulas: [
          { name: "Context clue", statement: "Look BEFORE and AFTER the word for definition/example/contrast" },
          { name: "Connotation", statement: "Positive/negative/neutral shading matters" },
        ],
        workedExample: {
          problem: "In 'the politician's equivocal answer confused everyone,' what does 'equivocal' mean?",
          solution: "Context: 'confused everyone' implies the answer was unclear/ambiguous — equivocal means deliberately vague or ambiguous, not 'equal' (its root). The context disambiguates.",
        },
      },
      questions: [
        {
          id: "satrw-u2-words-in-context-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Context clues are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the dictionary definition"
                    },
                    {
                              "id": "b",
                              "text": "surrounding text that reveals meaning"
                    },
                    {
                              "id": "c",
                              "text": "the title"
                    },
                    {
                              "id": "d",
                              "text": "the author's name"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Context clues",
                              "statement": "Surrounding evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Context clues are the words around a term that reveal its meaning — definition, example, contrast, or inference.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Surrounding text",
          "commonErrors": [
                    "Relying on dictionary first."
          ]
},
        },
        {
          id: "satrw-u2-words-in-context-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Frugal' vs 'stingy' differ mainly in ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "denotation"
                    },
                    {
                              "id": "b",
                              "text": "connotation — positive vs negative"
                    },
                    {
                              "id": "c",
                              "text": "length"
                    },
                    {
                              "id": "d",
                              "text": "formality"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Connotation",
                              "statement": "Attitude differs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both mean careful with money (same denotation) but frugal is positive, stingy negative — connotation carries the judgment.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Connotation",
          "commonErrors": [
                    "Thinking they mean different things literally."
          ]
},
        },
        {
          id: "satrw-u2-words-in-context-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to use context clues when encountering an unfamiliar word in a passage.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Context strategy",
                              "statement": "Read around the word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Look at surrounding sentences for clues: definitions ('X, which...'), examples ('such as X'), contrasts ('unlike X'), or inference from how the word is used — the passage often explains itself.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Check tone: does the passage treat the word positively or negatively? Connotation narrows the meaning — 'admirable' vs 'pathetic' behavior have different valence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Eliminate answers that don't fit the passage's tone — SAT distractors offer plausible dictionary meanings that don't match THIS context.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Read surrounding text + check connotation + match tone",
          "commonErrors": [
                    "Using dictionary meaning without context."
          ]
},
        },
        {
          id: "satrw-u2-words-in-context-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A word means 'clever' in one passage and 'deceitful' in another. How can this happen, and how does SAT test it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Polysemy",
                              "statement": "Multiple meanings per word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Words have multiple meanings (polysemy) — 'clever' can mean intelligent OR cunning/deceitful; context determines which sense applies.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "SAT tests this by offering both dictionary-valid meanings as choices — only the one matching the passage's tone and usage is correct; the skill is reading context, not knowing definitions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: 'his clever scheme' implies deceit (negative context), while 'her clever solution' implies intelligence (positive) — same word, different sense.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Polysemy + context determines sense",
          "commonErrors": [
                    "Thinking each word has one fixed meaning."
          ]
},
        },
      ],
    },
  ],
};
