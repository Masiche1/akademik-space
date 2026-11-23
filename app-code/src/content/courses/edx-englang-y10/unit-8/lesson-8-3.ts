import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "el10-u8-lesson-8-3",
  code: "8-3",
  title: "The Non-Examined Assessment",
  goal: "I CAN approach the Component 3 assignment and produce well-edited coursework responding to texts.",
  standards: ["4EA1 Component 3", "4EA1 AO1", "4EA1 AO3", "4EA1 AO4"],
  
  vocabulary: [
    { term: "Non-examined assessment", definition: "Coursework completed outside exam conditions — Component 3 of 4EA1." },
    { term: "Anthology", definition: "The Pearson Edexcel English anthology containing the set texts for the course." },
    { term: "Assignment task", definition: "The specific question or prompt the coursework must answer." },
    { term: "Selection", definition: "Choosing only the most relevant material from the texts for your answer." },
    { term: "Drafting", definition: "Writing an early version to be reviewed and improved." },
    { term: "Editing", definition: "Improving structure, evidence, accuracy and style before submission." },
  ],
  concepts: [
    {
      id: "el10-u8-coursework-assignment",
      title: "The Component 3 assignment",
      skill: "Understand and approach the non-examined assessment responding to anthology texts.",
      lesson: {
        sections: [
          {
            heading: "What Component 3 involves",
            body: "Component 3 is the **non-examined assessment**: a coursework assignment completed in controlled conditions at school, worth 40% of the qualification. Candidates respond to texts from **Part 2 of the anthology** (poetry and prose fiction studied during the course). Unlike Paper 2's exam questions, you have time to plan, draft and edit — but the marking criteria reward the same skills: understanding, analysis and effective organisation.",
          },
          {
            heading: "Reading the task",
            body: "Underline every word of the assignment question. Identify: how many texts must you cover? what aspect (language, structure, perspective, comparison)? what form should the answer take? Plan before writing: note each text's relevant methods, then decide your argument. The best coursework has a clear, arguable line through it — not a survey of everything you know.",
          },
          {
            heading: "Using anthology texts",
            body: "Because these are texts you have studied, you can select your evidence carefully rather than relying on memory under pressure. Re-read your notes and mark the moments that serve your argument. Quote precisely and briefly; embed quotations in analytical sentences; and keep returning to the question's exact focus throughout.",
          },
        ],
        keyFormulas: [
          { name: "Component 3", statement: "Non-examined assessment on anthology Part 2 texts; controlled conditions at school." },
          { name: "Task analysis", statement: "Underline the question; note text count, aspect and required form." },
          { name: "Arguable line", statement: "A clear thesis your evidence will prove, not a survey of everything." },
        ],
        workedExample: {
          problem: "An assignment asks: 'Compare how two anthology writers present conflict.' How do you approach it?",
          solution: "Step 1: choose the two texts and note each writer's methods for presenting conflict (imagery, dialogue, structure). Step 2: form an arguable line — e.g. 'Writer A dramatises conflict through dialogue while Writer B compresses it into violent imagery.' Step 3: gather three paired pieces of evidence. Step 4: draft point-by-point. Step 5: edit for embedded quotations and SPAG accuracy.",
        },
      },
      questions: [
        {
          id: "el10-u8-coursework-assignment-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which texts does the Component 3 non-examined assessment draw on?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Unseen texts provided on the day"
                    },
                    {
                              "id": "b",
                              "text": "Texts from Part 2 of the Pearson Edexcel anthology"
                    },
                    {
                              "id": "c",
                              "text": "Only your own creative writing"
                    },
                    {
                              "id": "d",
                              "text": "Newspaper articles"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Component 3",
                              "statement": "Non-examined assessment on anthology Part 2 texts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Component 3 uses the studied anthology texts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Part 2 of the anthology."
},
        },
        {
          id: "el10-u8-coursework-assignment-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two advantages coursework has over a timed exam for this kind of analysis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Coursework advantages",
                              "statement": "Time allows planning, drafting and editing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Time to re-read texts and select the best evidence.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Ability to draft and edit for accuracy and structure.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Time to re-read and select evidence, plus drafting and editing for accuracy and structure."
},
        },
        {
          id: "el10-u8-coursework-assignment-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "An assignment asks you to 'analyse how a writer presents a character'. Explain three steps you should take before writing your first draft.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Task analysis",
                              "statement": "Decode the question before planning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Underline key words: 'analyse', 'presents', 'character' — know what is required.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Re-read the text and mark moments where the character is presented.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Form an arguable line about how the writer presents the character.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Decode the question's demands, re-read and mark presentation moments, then form a clear arguable line before drafting."
},
        },
        {
          id: "el10-u8-coursework-assignment-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student plans to write about 'everything interesting' in two anthology poems for an assignment on writers' perspectives. Identify three problems with this plan and suggest improvements.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Focus and selection",
                              "statement": "Coursework rewards a clear line, not a survey."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Everything interesting' has no arguable line — the answer will lack focus.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "It ignores the question's aspect (perspectives); methods must serve that focus.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Improvement: choose one aspect of perspective (e.g. attitudes to loss) and select evidence that proves it.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "No focus, ignores the question's aspect, and will read as a survey; narrow to one aspect of perspective and select evidence that proves an arguable line.",
          "commonErrors": [
                    "Listing problems without improvements."
          ]
},
        },
        {
          id: "el10-u8-coursework-assignment-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Plan a coursework assignment response to: 'Compare how two anthology writers use language to create mood.' Include your text choices, arguable line, evidence plan and structure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Coursework planning",
                              "statement": "Choose texts, form a line, plan paired evidence and structure."
                    },
                    {
                              "kind": "technique",
                              "name": "Language and mood",
                              "statement": "Analyse word choice, imagery and sound for atmospheric effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two suitable anthology texts chosen with different mood-creating methods.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Arguable line formed (e.g. 'Writer A builds mood through imagery while Writer B uses sound and pace').",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Three paired evidence points planned (language features from each text).",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Point-by-point structure planned with embedded quotations.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "7",
                              "descriptor": "Complete plan: texts, arguable line, paired evidence and clear structure."
                    },
                    {
                              "level": "Level 2",
                              "marks": "4-6",
                              "descriptor": "Workable plan missing one element."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-3",
                              "descriptor": "Partial or unfocused plan."
                    }
          ],
          "finalAnswer": "Choose two texts with contrasting mood methods, form a line comparing language choices, plan three paired evidence points, structure point-by-point with embedded quotes.",
          "commonErrors": [
                    "Choosing texts without contrasting methods.",
                    "Planning evidence that does not serve the line."
          ]
},
        },
        {
          id: "el10-u8-coursework-assignment-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "You have been given this assignment: 'Analyse how ONE anthology writer presents a sense of place.' Answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Which anthology text would you choose and why? Give two reasons.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "State your arguable line about how the writer presents place.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Outline your essay structure, naming the methods you will analyse and where your evidence will come from.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Text selection",
                              "statement": "Choose a text rich enough in methods for the question."
                    },
                    {
                              "kind": "skill",
                              "name": "Arguable line",
                              "statement": "A clear, defensible thesis about the writer's methods."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Suitable text chosen with rich place-presentation methods.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Two reasons given (e.g. strong imagery, structural movement through place).",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Clear arguable line about the writer's methods for place.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Line is specific and defensible, not a topic statement.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Logical structure (introduction, method paragraphs, conclusion).",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Methods named and linked to specific evidence locations.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with relevant application and terminology.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding with partial application.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with relevant application and terminology.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding with partial application.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with relevant application and terminology.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding with partial application.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) A text rich in place-methods with two justified reasons. (b) A specific, defensible line on the writer's methods. (c) A structured plan naming methods and their evidence locations.",
          "commonErrors": [
                    "(a) Choosing a text without justification.",
                    "(b) Stating a topic rather than an argument."
          ]
},
        },
      ],
    },
    {
      id: "el10-u8-editing-presenting",
      title: "Editing and presenting coursework",
      skill: "Draft, edit and present coursework to a high standard of accuracy and structure.",
      lesson: {
        sections: [
          {
            heading: "The drafting process",
            body: "Never submit a first draft. Write freely first, then **revise** for content (does every paragraph serve the question?), then **edit** for accuracy (SPAG, quotations, paragraphing), then **proofread** for slips. Leave time between drafts so you can read with fresh eyes. Read your work aloud — awkward sentences reveal themselves.",
          },
          {
            heading: "Checking against criteria",
            body: "Before submitting, check your work against the assessment objectives: Does it show clear understanding (AO1)? Does it analyse methods (AO2)? Is it organised and comparative where required (AO3)? Is it accurate in spelling, punctuation and grammar (AO4)? A quick self-check against these catches most lost marks.",
          },
          {
            heading: "Presenting the final piece",
            body: "Follow all presentation requirements exactly: word count, formatting, quotation conventions (single quotation marks for quotations within your own writing), and any required cover information. Keep a backup copy. Submit early — last-minute technical problems are the most common avoidable disaster.",
          },
        ],
        keyFormulas: [
          { name: "Revise-edit-proofread", statement: "Content first, then accuracy, then final slips — in separate passes." },
          { name: "AO self-check", statement: "Check understanding, analysis, organisation and accuracy before submitting." },
          { name: "Quotation conventions", statement: "Single quotes for embedded quotations; cite accurately." },
        ],
        workedExample: {
          problem: "A student has a first draft of their assignment. Describe the editing process they should follow.",
          solution: "Day 1: read for content — does every paragraph answer the question? Cut or merge weak paragraphs. Day 2: edit for accuracy — check quotations are accurate and embedded, SPAG errors, paragraphing. Day 3: proofread aloud for slips. Final: check word count, formatting, quotation marks and AO coverage before submitting early.",
        },
      },
      questions: [
        {
          id: "el10-u8-editing-presenting-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct order of the writing process?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Proofread, draft, edit"
                    },
                    {
                              "id": "b",
                              "text": "Draft, revise for content, edit for accuracy, proofread"
                    },
                    {
                              "id": "c",
                              "text": "Edit, draft, submit"
                    },
                    {
                              "id": "d",
                              "text": "Submit, then draft"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Writing process",
                              "statement": "Content before accuracy before slips."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Revise content first, then edit accuracy, then proofread.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "**(b)** Draft → revise → edit → proofread."
},
        },
        {
          id: "el10-u8-editing-presenting-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two reasons to leave time between drafting and editing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Fresh eyes",
                              "statement": "Distance reveals errors familiarity hides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fresh eyes spot errors you have become blind to.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Time allows re-reading against the question and criteria.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Distance reveals hidden errors and gives time to re-check against the question and criteria."
},
        },
        {
          id: "el10-u8-editing-presenting-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain three things to check when proofreading a coursework essay.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Proofreading",
                              "statement": "Final pass catches slips and conventions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spelling, punctuation and grammar slips.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Quotation accuracy and conventions (single quotes, correct citation).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Formatting requirements: word count, paragraphing, title/cover details.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "SPAG slips, quotation accuracy and conventions, and formatting/word-count requirements."
},
        },
        {
          id: "el10-u8-editing-presenting-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student submits coursework with beautiful analysis but twelve spelling errors, two misquoted lines and no conclusion. Explain the impact of each problem and how to avoid it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Accuracy's impact",
                              "statement": "Presentation and accuracy affect how analysis is received."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spelling errors undermine credibility and lose AO4 marks despite good analysis.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Misquotations show unreliable evidence — a serious analytical flaw.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "No conclusion leaves the argument unfinished; avoid by planning structure and editing for completeness.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Spelling errors cost AO4 marks and credibility; misquotes undermine evidence; no conclusion leaves the argument incomplete — all avoidable by systematic editing.",
          "commonErrors": [
                    "Ignoring accuracy because analysis is strong."
          ]
},
        },
        {
          id: "el10-u8-editing-presenting-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Create a pre-submission checklist for coursework covering content, accuracy and presentation. Include at least six specific checks.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Pre-submission checklist",
                              "statement": "Systematic checks catch content, accuracy and presentation issues."
                    },
                    {
                              "kind": "technique",
                              "name": "AO self-check",
                              "statement": "Verify understanding, analysis, organisation and accuracy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Content checks: every paragraph answers the question; arguable line is clear.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Evidence checks: quotations accurate, embedded and analysed.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Accuracy checks: SPAG proofread, read aloud for slips.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Presentation checks: word count, formatting, conventions, backup copy, early submission.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "7",
                              "descriptor": "Comprehensive checklist covering content, evidence, accuracy and presentation."
                    },
                    {
                              "level": "Level 2",
                              "marks": "4-6",
                              "descriptor": "Checklist covering most areas."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-3",
                              "descriptor": "Partial checklist."
                    }
          ],
          "finalAnswer": "Checklist covering: question focus, arguable line, accurate embedded quotations, SPAG proofread, AO coverage, word count/formatting/conventions, backup and early submission.",
          "commonErrors": [
                    "Only checking spelling; missing content and presentation."
          ]
},
        },
        {
          id: "el10-u8-editing-presenting-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "A student has completed a first draft of their Component 3 assignment. Answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the revision pass they should do first and what they are looking for.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Describe the editing pass for accuracy and what specific checks it includes.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "List the final presentation checks before submission.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Revision",
                              "statement": "Check content and structure before surface accuracy."
                    },
                    {
                              "kind": "skill",
                              "name": "Editing and proofreading",
                              "statement": "Accuracy and conventions come last but matter most for AO4."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Revision for content: does every paragraph serve the question and arguable line?",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "Check structure, paragraphing and whether evidence is sufficient and relevant.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Editing for accuracy: quotation accuracy, embedded correctly, single quotes.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "SPAG check: spelling, punctuation, grammar; read aloud for slips.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Word count, formatting, title/cover, conventions followed.",
                              "marks": 2,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Backup copy made, submitted early, final read-through done.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with relevant application and terminology.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding with partial application.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with relevant application and terminology.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding with partial application.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with relevant application and terminology.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding with partial application.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) Revise for content: question focus, arguable line, structure, evidence sufficiency. (b) Edit for accuracy: quotations, SPAG, read aloud. (c) Final checks: word count, formatting, conventions, backup, early submission.",
          "commonErrors": [
                    "Doing surface edits before content revision.",
                    "Skipping final presentation checks."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u8-coursework-notes",
      title: "Non-examined assessment — notes",
      summary: "Component 3 uses anthology texts in controlled conditions. Decode the task, form an arguable line, draft, revise, edit, proofread, submit early.",
      sections: [
        { heading: "The task", body: "Underline the question; note text count, aspect and form. Choose texts with contrasting methods." },
        { heading: "The process", body: "Draft freely → revise content → edit accuracy → proofread → check AO coverage → submit early." },
      ],
    },
  ],
};
