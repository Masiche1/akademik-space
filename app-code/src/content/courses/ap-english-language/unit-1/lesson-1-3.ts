import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "apel-u1-lesson-1-3",
  code: "1-3",
  title: "The Rhetorical Analysis Essay",
  goal: "I CAN structure a rhetorical analysis essay with a defensible thesis and integrated evidence.",
  standards: ["AP Lang 3.x"],
  vocabulary: [
    { term: "Rhetorical analysis", definition: "Examining HOW a text persuades — the author's choices, not whether you agree." },
    { term: "Thesis", definition: "A defensible claim about the author's rhetorical strategies and their effect." },
    { term: "SOAPSTone", definition: "Speaker, Occasion, Audience, Purpose, Subject, Tone — context for analysis." },
    { term: "Rhetorical situation", definition: "The context (speaker, audience, purpose, occasion) shaping every text." },
    { term: "Integration", definition: "Weaving quotations into your own sentences with commentary." },
    { term: "Commentary", definition: "Your explanation of how evidence supports the thesis — the analytical 'so what'." },
  ],
  concepts: [
    {
      id: "apel-u1-rhetorical-analysis-frq",
      title: "Writing the rhetorical analysis",
      skill: "Construct a thesis and body paragraphs that analyze strategy, not content.",
      lesson: {
        sections: [
          {
            heading: "The analysis stance",
            body: "Rhetorical analysis asks HOW the text works, not WHAT it says or whether you agree. A strong thesis names the author's strategy and its effect: 'Through sustained medical metaphor and second-person address, Smith reframes vaccination as a civic duty rather than a personal choice.'",
          },
          {
            heading: "Structure and commentary",
            body: "Intro: context (SOAPSTone) + thesis. Body paragraphs: one strategy each — introduce the device, quote precisely, analyze its effect on THIS audience for THIS purpose, connect back to thesis. Commentary is the engine: every quotation needs 2-3 sentences of 'how' and 'why it matters'.",
          },
        ],
        keyFormulas: [
          { name: "Thesis formula", statement: "Author + strategy + effect on audience/purpose" },
          { name: "Paragraph pattern", statement: "Device → quote → analysis → thesis link" },
        ],
        workedExample: {
          problem: "Write a thesis for an analysis of a speech using statistics and emotional anecdotes.",
          solution: "'By alternating cold statistical evidence with intimate anecdote, the speaker constructs vaccination as both a rational imperative and a moral obligation, making refusal seem simultaneously foolish and cruel.'",
        },
      },
      questions: [
        {
          id: "apel-u1-rhetorical-analysis-frq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rhetorical analysis essay focuses on ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "whether the argument is correct"
                    },
                    {
                              "id": "b",
                              "text": "how the author persuades"
                    },
                    {
                              "id": "c",
                              "text": "summarizing the text"
                    },
                    {
                              "id": "d",
                              "text": "the author's biography"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Rhetorical analysis",
                              "statement": "Analyze strategies and effects, not truth or summary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The task is analyzing HOW persuasion works — devices, appeals, audience adaptation.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Confusing analysis with summary or agreement."
          ]
},
        },
        {
          id: "apel-u1-rhetorical-analysis-frq-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "SOAPSTone stands for ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a text's grammatical features"
                    },
                    {
                              "id": "b",
                              "text": "Speaker, Occasion, Audience, Purpose, Subject, Tone"
                    },
                    {
                              "id": "c",
                              "text": "the five appeals"
                    },
                    {
                              "id": "d",
                              "text": "essay paragraph types"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "SOAPSTone",
                              "statement": "Framework for rhetorical situation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Speaker, Occasion, Audience, Purpose, Subject, Tone — establishes context for analysis.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Misremembering the acronym's components."
          ]
},
        },
        {
          id: "apel-u1-rhetorical-analysis-frq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a thesis sentence analyzing a hypothetical editorial that uses personal narrative and statistical evidence to argue for later school start times.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Thesis construction",
                              "statement": "Author + strategy + effect."
                    },
                    {
                              "kind": "convention",
                              "name": "Defensible claim",
                              "statement": "Must be arguable, not obvious."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thesis must name the dual strategy (narrative + data) and its combined effect on the audience.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Model: 'By grounding statistical evidence in a student's firsthand account of exhaustion, the editorial transforms abstract policy data into an urgent moral claim about adolescent wellbeing.'",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Thesis is specific, arguable, and names strategy plus effect — not a summary.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Thesis naming strategy + audience effect, e.g., 'narrative humanizes data into moral urgency'",
          "commonErrors": [
                    "Writing 'The author uses evidence' — too vague to analyze."
          ]
},
        },
        {
          id: "apel-u1-rhetorical-analysis-frq-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read this passage and write a thesis for a rhetorical analysis of the writer's strategies.",
          extract: {
          "title": "Passage for analysis",
          "author": "Written for Akademik Space",
          "text": "Every autumn, the same letters arrive.\n\nDear concerned citizen, our records show...\n\nYours sincerely, the Board.\n\nThe writer catalogs these identical form letters — each bearing a different bureaucratic form number — then concludes: 'A thousand copies of concern, none of it addressed to me.'"
},
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Thesis from text",
                              "statement": "Identify strategy and effect."
                    },
                    {
                              "kind": "context",
                              "name": "Rhetorical situation",
                              "statement": "Bureaucratic dismissal vs personal concern."
                    },
                    {
                              "kind": "technique",
                              "name": "Juxtaposition/irony",
                              "statement": "Mass-produced 'concern' vs individual address."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies the central strategy: cataloging impersonal form letters against the personal 'Dear concerned citizen' salutation — bureaucratic mass production versus genuine individual concern.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Thesis articulates the effect: the irony exposes institutional indifference masquerading as responsiveness.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Thesis is defensible and specific — names strategy (catalog/juxtaposition) and effect (exposing bureaucratic indifference).",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Response demonstrates sophisticated understanding of how form mirrors content.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Sample thesis: 'Through the cataloging of identical form letters, the writer exposes bureaucratic indifference masquerading as concern — mass-produced sympathy that addresses no one.'",
          "commonErrors": [
                    "Thesis summarizes rather than analyzes the rhetoric."
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "7-8",
                              "descriptor": "Thesis precisely names the rhetorical strategy (cataloging/juxtaposition of form letters) and its effect (exposing bureaucratic indifference); analysis is sophisticated and specific to the text."
                    },
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Thesis identifies a relevant strategy and effect but is somewhat general; analysis engages the text but misses nuance."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Thesis gestures at theme or summarizes content rather than analyzing rhetoric; limited strategic insight."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Minimal or irrelevant response; merely summarizes the passage or states an obvious observation."
                    }
          ]
},
        },
      ],
    },
  ],
};
