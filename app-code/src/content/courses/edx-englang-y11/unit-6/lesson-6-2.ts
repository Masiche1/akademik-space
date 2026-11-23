import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "el11-u6-lesson-6-2",
  code: "6-2",
  title: "Grammar and Sentence Control",
  goal: "I CAN use a range of sentence structures accurately and control tense and agreement for clear, effective writing.",
  standards: ["4EA1 AO4", "4EA1 AO5", "4EA1 Paper 1"],
  
  vocabulary: [
    { term: "Clause", definition: "Group of words with subject and verb; main clause makes sense alone." },
    { term: "Phrase", definition: "Group of words without a finite verb; adds detail but can't stand alone." },
    { term: "Fragment", definition: "An incomplete sentence missing subject or verb — used deliberately in creative writing." },
    { term: "Subject-verb agreement", definition: "Verb must match subject in number: 'she walks' not 'she walk'." },
    { term: "Tense consistency", definition: "Maintaining the same time frame throughout a piece unless deliberately shifting." },
    { term: "Modal verb", definition: "Verb expressing possibility/necessity: can, could, may, might, must, should." },
  ],
  concepts: [
    {
      id: "el11-u6-sentence-types",
      title: "Sentence types and variety",
      skill: "Use simple, compound and complex sentences effectively, and understand when fragments work.",
      lesson: {
        sections: [
          {
            heading: "The three types",
            body: "**Simple**: one main clause ('She ran.'). **Compound**: two main clauses joined by conjunction or semicolon ('She ran, and he walked.'). **Complex**: main clause + subordinate clause ('She ran because she was late.'). Variety matters — a page of only simple sentences feels childish; only complex sentences feel convoluted.",
          },
          {
            heading: "Fragments: error or effect?",
            body: "A **fragment** lacks a subject or verb ('Running through the rain.'). In formal writing it's an error; in creative writing it's a deliberate effect — creating urgency, fragmentation of thought, or mimicking speech. 'The door opened. Silence. Nothing.' — the fragment 'Silence.' hits harder than a full sentence.",
          },
          {
            heading: "Controlling rhythm",
            body: "Sentence length controls pace. Short sentences accelerate; long complex sentences slow and build. Writers manipulate this: action scenes use short sentences; reflective passages use longer ones. Match structure to purpose — don't write a eulogy in staccato fragments or a chase scene in meandering clauses.",
          },
        ],
        keyFormulas: [
          { name: "Simple sentence", statement: "One main clause only." },
          { name: "Compound sentence", statement: "Two or more main clauses joined by conjunction/semicolon." },
          { name: "Complex sentence", statement: "Main clause + subordinate clause(s)." },
          { name: "Fragment effect", statement: "Incomplete sentence for urgency or emphasis in creative writing." },
        ],
        workedExample: {
          problem: "Rewrite 'The dog barked. The cat ran. The bird flew away.' using varied sentence structures for better effect.",
          solution: "'The dog barked, and the cat ran; the bird flew away.' — compound-turned-complex structure linking the actions with cause-effect rhythm. Or more dramatic: 'The dog barked. The cat ran — and the bird was gone.' The semicolon/dash versions create flow; the fragment option adds punch. Variety prevents monotony.",
        },
      },
      questions: [
        {
          id: "el11-u6-sentence-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'complex sentence'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A very long sentence"
                    },
                    {
                              "id": "b",
                              "text": "A sentence with one main clause and at least one subordinate clause"
                    },
                    {
                              "id": "c",
                              "text": "A sentence with a difficult word"
                    },
                    {
                              "id": "d",
                              "text": "A sentence with many commas"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Complex sentence",
                              "statement": "Main + subordinate clause."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Complex = independent main clause + dependent subordinate clause.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "**(b)** Main clause + subordinate clause.",
          "commonErrors": [
                    "Confusing 'complex' with 'complicated' (a)."
          ]
},
        },
        {
          id: "el11-u6-sentence-types-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Identify the sentence type: 'Although it was raining, we went out.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Complex sentence",
                              "statement": "Subordinate clause + main clause."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies as complex: 'Although it was raining' is subordinate; 'we went out' is main.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Explains the subordinate clause adds contrast/dependency.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Complex sentence — subordinate clause 'Although it was raining' + main clause 'we went out'.",
          "commonErrors": [
                    "Calling it compound because it has two parts."
          ]
},
        },
        {
          id: "el11-u6-sentence-types-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why varying sentence length improves writing, using an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sentence variety",
                              "statement": "Mixing lengths controls rhythm and emphasis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains that uniform sentence length creates monotony.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Short sentences create urgency/punch; long create reflection/build-up.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Example given of contrast, e.g. 'She ran. Faster. The finish line was close.' vs single long version.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Varied sentence length controls rhythm — short for urgency, long for reflection; uniformity creates monotony.",
          "commonErrors": [
                    "Saying variety is 'nice' without explaining effect."
          ]
},
        },
        {
          id: "el11-u6-sentence-types-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Rewrite this monotonous passage using varied sentence types: 'The man walked to the shop. He bought some bread. He walked home. He ate the bread.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sentence variety",
                              "statement": "Mixing simple/compound/complex for rhythm."
                    },
                    {
                              "kind": "skill",
                              "name": "Rewriting craft",
                              "statement": "Applying variety deliberately."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Varied rewrite, e.g. 'The man walked to the shop and bought bread; then he walked home and ate it.' or 'Walking to the shop, he bought bread; walking home, he ate it.'",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Uses compound/complex structures to link related actions.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Could use fragment for effect: 'Bread. Then home.'",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Explains how variety improves flow or emphasis.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "E.g. 'The man walked to the shop, bought bread and walked home; he ate it on the doorstep.' — compound structure creates flow.",
          "commonErrors": [
                    "Just joining with 'and' repeatedly."
          ]
},
        },
        {
          id: "el11-u6-sentence-types-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Is 'Running through the rain.' a fragment? Explain.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain when a fragment might be effective in creative writing.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fragment",
                              "statement": "Incomplete sentence lacking subject or finite verb."
                    },
                    {
                              "kind": "technique",
                              "name": "Fragment effect",
                              "statement": "Deliberate incompleteness for urgency/emphasis."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Yes — 'Running' is participle, no subject or finite verb ('is running' would fix it).",
                              "marks": 3,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fragments work in creative writing for urgency, fragmentation, or mimicking speech/thought.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Example: 'The door opened. Silence. Nothing.' — fragment hits harder.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "In formal/exam writing, fragments are usually errors unless deliberately marked.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Correctly identifies the fragment and explains the missing finite verb."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Identification or explanation inaccurate."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Explains convincingly when deliberate fragments are effective in creative writing."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Vague claim that fragments 'add emphasis' without conditions."
                    }
          ],
"finalAnswer": "(a) Yes — participle 'running' lacks subject/finite verb. (b) Fragments create urgency or mimic thought in creative writing; avoid in formal contexts.",
          "commonErrors": [
                    "Calling all short sentences fragments."
          ]
},
        },
        {
          id: "el11-u6-sentence-types-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words on how sentence structure affects meaning and effect in writing. Cover at least two sentence types and explain when each is most effective.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sentence structure effect",
                              "statement": "Types and lengths control rhythm and emphasis."
                    },
                    {
                              "kind": "skill",
                              "name": "Explanatory writing",
                              "statement": "Clear account with examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Covers at least two types (simple, compound, complex, fragment).",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Each type's effect explained.",
                              "marks": 3,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Examples given.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Clear organisation and conclusion.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Sentence types control rhythm: simple for punch, compound for balance, complex for nuance, fragments for urgency — matching structure to purpose.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Two types explained with examples and effects."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Types present, partial effects."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Vague account."
                    }
          ],
          "commonErrors": [
                    "No examples.",
                    "Types not explained."
          ]
},
        },
      ],
    },
    {
      id: "el11-u6-verb-tense-agreement",
      title: "Tense, agreement and verb control",
      skill: "Maintain tense consistency, ensure subject-verb agreement and use modal verbs accurately.",
      lesson: {
        sections: [
          {
            heading: "Subject-verb agreement",
            body: "The verb must match the subject in number: 'The dog barks' (singular) vs 'The dogs bark' (plural). Tricky cases: collective nouns ('the team is/are' — both acceptable in British English), 'each' and 'every' take singular ('each student is'), 'neither/nor' takes the nearer subject. Errors here undermine credibility instantly.",
          },
          {
            heading: "Tense consistency",
            body: "Keep the same time frame unless deliberately shifting. 'She walks in and sat down' mixes present and past — an error. Narrative usually stays in past tense; reports in present. Deliberate shifts signal flashbacks or general truths: 'She remembered how he always said: kindness costs nothing.'",
          },
          {
            heading: "Modal verbs",
            body: "**Modals** (can, could, may, might, must, should, will, would, shall) express possibility, permission, obligation, prediction. They add nuance: 'You must go' (obligation) vs 'You should go' (advice) vs 'You might go' (possibility). In formal writing, 'must' for obligation is stronger than 'should'.",
          },
        ],
        keyFormulas: [
          { name: "Agreement rule", statement: "Singular subject + singular verb; plural subject + plural verb." },
          { name: "Tense consistency", statement: "Maintain one time frame unless deliberately shifting for effect." },
          { name: "Modal meanings", statement: "must=obligation, should=advice, might=possibility, will=prediction." },
        ],
        workedExample: {
          problem: "Correct: 'Each of the students were happy with their results.'",
          solution: "'Each of the students was happy with their results.' — 'Each' is singular, so 'was' not 'were'. ('Their' is acceptable as singular they, though 'his or her' is more formal.) The trap is the plural 'students' distracting from the singular 'each'.",
        },
      },
      questions: [
        {
          id: "el11-u6-verb-tense-agreement-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is correct: 'The team is winning' or 'The team are winning'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Only 'is' is correct"
                    },
                    {
                              "id": "b",
                              "text": "Only 'are' is correct"
                    },
                    {
                              "id": "c",
                              "text": "Both are acceptable in British English"
                    },
                    {
                              "id": "d",
                              "text": "Neither is correct"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Collective nouns",
                              "statement": "Can take singular or plural verb in British English."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Collective nouns like 'team' can take either depending on emphasis — both are acceptable.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "**(c)** Both are acceptable in British English.",
          "commonErrors": [
                    "Insisting only one is correct."
          ]
},
        },
        {
          id: "el11-u6-verb-tense-agreement-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Identify the tense error: 'She walks into the room and sat down.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Tense consistency",
                              "statement": "Maintain same time frame."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies mixed tenses: 'walks' (present) + 'sat' (past).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Suggests fix: 'walked...sat' or 'walks...sits' for consistency.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Mixed tense error — 'walks' should be 'walked' (or 'sat' should be 'sits').",
          "commonErrors": [
                    "Not noticing the tense shift."
          ]
},
        },
        {
          id: "el11-u6-verb-tense-agreement-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between 'must', 'should' and 'might' with examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Modal verbs",
                              "statement": "Express obligation, advice, possibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Must' = strong obligation: 'You must submit by Friday.'",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "'Should' = advice/recommendation: 'You should see a doctor.'",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "'Might' = possibility: 'It might rain later.'",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Must=obligation, should=advice, might=possibility — each adds different force to the verb.",
          "commonErrors": [
                    "Using them interchangeably."
          ]
},
        },
        {
          id: "el11-u6-verb-tense-agreement-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Correct and explain: 'Neither the teacher nor the students was ready for the test.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Subject-verb agreement",
                              "statement": "Verb agrees with nearer subject in 'neither/nor' constructions."
                    },
                    {
                              "kind": "technique",
                              "name": "Proximity rule",
                              "statement": "Verb matches the closest subject."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correct: 'Neither the teacher nor the students were ready...' — 'were' agrees with nearer subject 'students'.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Explains proximity rule: with 'neither/nor', verb matches the subject closest to it.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Alternative acceptable: 'Neither the students nor the teacher was ready' — 'was' matches 'teacher'.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Notes the original 'was' is wrong because 'students' (plural) is nearer.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Correct: 'Neither the teacher nor the students were ready' — verb agrees with nearer plural subject 'students'.",
          "commonErrors": [
                    "Keeping 'was' because 'teacher' is singular — ignoring proximity rule."
          ]
},
        },
        {
          id: "el11-u6-verb-tense-agreement-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Correct: 'Each of the players have their own locker.'",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the agreement rule that applies.",
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
                              "name": "Subject-verb agreement",
                              "statement": "'Each' is singular."
                    },
                    {
                              "kind": "technique",
                              "name": "Distraction rule",
                              "statement": "Plural noun between subject and verb can mislead."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Correct: 'Each of the players has their own locker.' (or 'his or her own locker')",
                              "marks": 3,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "'Each' is singular — it refers to individuals one at a time.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "'Players' is plural but doesn't control the verb — it's part of the prepositional phrase.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Rule: find the true subject ('each'), ignore intervening plural nouns.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Correctly changes 'have' to 'has' (singular subject 'each')."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Error not corrected."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Explains the proximity-vs-subject agreement rule accurately."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Explanation vague or rule misapplied."
                    }
          ],
"finalAnswer": "(a) 'Each of the players has their own locker.' (b) 'Each' is singular; 'players' is just a distractor in the prepositional phrase.",
          "commonErrors": [
                    "Keeping 'have' because 'players' is plural."
          ]
},
        },
        {
          id: "el11-u6-verb-tense-agreement-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words on how grammar control affects the quality of writing. Cover at least two areas (agreement, tense, sentence structure, modals) and explain why accuracy matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Grammar control",
                              "statement": "Accuracy builds credibility and clarity."
                    },
                    {
                              "kind": "skill",
                              "name": "Explanatory writing",
                              "statement": "Areas + importance explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Covers at least two grammar areas.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Each area explained with example of error/effect.",
                              "marks": 3,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Explains why accuracy matters (clarity, credibility, marks).",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Clear organisation and conclusion.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Grammar control (agreement, tense, sentence variety, modals) ensures clarity and credibility; errors distract readers and undermine the writer's authority.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Two areas explained with examples and importance."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Areas present, partial explanation."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Vague account."
                    }
          ],
          "commonErrors": [
                    "No examples.",
                    "No link to quality."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el11-u6-grammar-notes",
      title: "Grammar and sentence control — notes",
      summary: "Vary sentence types for rhythm; maintain tense consistency; agreement rules (each=singular, neither/nor=nearer subject).",
      sections: [
        { heading: "Sentence types", body: "Simple=1 clause, compound=2 main clauses, complex=main+subordinate. Fragments work in creative writing only." },
        { heading: "Agreement traps", body: "'Each' is singular; 'neither/nor' takes nearer subject; collective nouns can take either." },
        { heading: "Modals", body: "must=obligation, should=advice, might=possibility, will=prediction." },
      ],
    },
  ],
};
