import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "el11-u9-lesson-9-3",
  code: "9-3",
  title: "Evaluating Viewpoints and Bias",
  goal: "I CAN identify a writer's viewpoint and biased language in non-fiction texts, and write evaluative comment that weighs competing arguments.",
  standards: ["4EA1 Paper 1 Section B", "4EA1 AO1", "4EA1 AO3"],
  
  vocabulary: [
    { term: "Viewpoint", definition: "The position or opinion a writer is arguing for in a text." },
    { term: "Bias", definition: "A tendency to favour one side, shown through selection, language and omission." },
    { term: "Loaded language", definition: "Words with strong emotional charge used to sway the reader, e.g. 'blanket bans', 'portal to distraction'." },
    { term: "Counter-argument", definition: "The opposing view a writer acknowledges before answering it." },
    { term: "Straw man", definition: "Misrepresenting an opponent's argument to make it easier to defeat." },
    { term: "Evaluation", definition: "Weighing how convincing, balanced and well-supported a viewpoint is." },
  ],
  concepts: [
    {
      id: "el11-u9-viewpoint-bias",
      title: "Viewpoint and biased language",
      skill: "Identify a writer's viewpoint, spot loaded and biased language, and analyse how the writer handles the opposing view.",
      lesson: {
        sections: [
          {
            heading: "Finding the viewpoint",
            body: "A viewpoint is the position the writer wants you to accept — 'Schools should ban mobile phones outright' is a viewpoint stated plainly. Often it is implied rather than stated: look for evaluative adjectives, one-sided evidence and loaded nouns. Ask: **what does this writer want me to believe?**",
          },
          {
            heading: "Loaded and biased language",
            body: "Loaded words carry attitude: 'collapsed', 'portal to distraction', 'glowing screen' all frame phones negatively; 'powerful learning tool', 'blanket bans' frame them positively. Bias also shows in **selection** — one anecdote ('My son's concentration has collapsed') treated as proof — and **omission** — no mention of the other side's best evidence.",
          },
          {
            heading: "The counter-argument test",
            body: "A fair-minded writer acknowledges the opposing view ('Some say phones can support learning. Perhaps.') before answering it. A weak writer dismisses it ('Blanket bans ... ignore what research actually shows'). The way a writer treats the counter-argument is one of the best clues to their bias and their confidence.",
          },
        ],
        keyFormulas: [
          { name: "Viewpoint", statement: "The position a writer argues for, stated or implied through evaluative language and selection." },
          { name: "Loaded language", statement: "Words carrying emotional charge that frame a subject favourably or unfavourably." },
          { name: "Counter-argument", statement: "The opposing view acknowledged before being answered; its treatment reveals bias." },
        ],
        workedExample: {
          problem: "How does 'Phones Out' reveal its viewpoint and bias?",
          solution: "The viewpoint is stated in the opening: 'Schools should ban mobile phones outright.' The writer supports it with loaded language — 'collapsed', 'portal to distraction', 'glowing screen', 'never get back' — all of which frame phones as dangerous. Bias appears in the evidence: a single anecdote about 'my son' and unnamed 'teachers' is treated as proof ('The evidence is plain'). The counter-argument is dismissed in two words — 'Perhaps.' — and answered with a claim about 'burden of proof' rather than evidence, showing the writer has decided before weighing the other side.",
        },
      },
      questions: [
        {
          id: "el11-u9-viewpoint-bias-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Phones Out",
          "author": "Written for Akademik Space",
          "source": "Original opinion article (position: ban)",
          "text": "Schools should ban mobile phones outright. My son's concentration has collapsed since he got a smartphone, and he is not alone: teachers up and down the country report the same pattern. The evidence is plain. A phone in a pocket is a portal to distraction, and no child should be expected to resist it.\n\nSome say phones can support learning. Perhaps. But the burden of proof lies with those who want to introduce the distraction, not with those who want to protect childhood. Every lesson lost to a glowing screen is a lesson the child will never get back."
},
          stem: "Which phrase from 'Phones Out' most clearly reveals the writer's viewpoint?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "'teachers up and down the country report the same pattern'"
                    },
                    {
                              "id": "b",
                              "text": "'A phone in a pocket is a portal to distraction'"
                    },
                    {
                              "id": "c",
                              "text": "'Some say phones can support learning'"
                    },
                    {
                              "id": "d",
                              "text": "'the burden of proof lies with those who want to introduce the distraction'"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Viewpoint",
                              "statement": "The position a writer is arguing for, often revealed by evaluative language."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'A portal to distraction' is a loaded metaphor that frames phones as harmful — it reveals the writer's anti-phone stance directly.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(b)** 'A phone in a pocket is a portal to distraction' — a loaded metaphor revealing the writer's negative viewpoint.",
          "commonErrors": [
                    "Choosing (c), which reports the opposing view rather than the writer's own.",
                    "Choosing (d), which is an argument about proof, not the viewpoint itself."
          ]
},
        },
        {
          id: "el11-u9-viewpoint-bias-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "Phones Out",
          "author": "Written for Akademik Space",
          "source": "Original opinion article (position: ban)",
          "text": "Schools should ban mobile phones outright. My son's concentration has collapsed since he got a smartphone, and he is not alone: teachers up and down the country report the same pattern. The evidence is plain. A phone in a pocket is a portal to distraction, and no child should be expected to resist it.\n\nSome say phones can support learning. Perhaps. But the burden of proof lies with those who want to introduce the distraction, not with those who want to protect childhood. Every lesson lost to a glowing screen is a lesson the child will never get back."
},
          stem: "Give two examples of loaded or emotive language in 'Phones Out' and state the attitude each reveals.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Loaded language",
                              "statement": "Emotive words frame a subject favourably or unfavourably."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Credit one loaded phrase — 'collapsed', 'portal to distraction', 'glowing screen', 'never get back' — and its negative attitude.",
                              "evidence": "portal to distraction",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Credit a second phrase with its attitude, e.g. 'collapsed' suggests harm; 'never get back' suggests irreversible loss.",
                              "evidence": "a lesson the child will never get back",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "e.g. 'collapsed' (harm) and 'a portal to distraction' (danger); both frame phones as threatening to children's learning.",
          "commonErrors": [
                    "Quoting neutral words like 'smartphone' as loaded.",
                    "Giving the phrase but not the attitude it reveals."
          ]
},
        },
        {
          id: "el11-u9-viewpoint-bias-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Phones In",
          "author": "Written for Akademik Space",
          "source": "Original opinion article (position: allow)",
          "text": "Blanket bans on phones ignore what research actually shows. Used well, a smartphone is the most powerful learning tool a child has ever owned. Revision apps, language tools and access to the world's libraries sit in every pocket. Banning them is like banning dictionaries because some children cheat with them.\n\nOf course, misuse happens. But schools already teach children to manage screens outside the classroom; they should teach them to manage them inside it too. A total ban solves nothing and punishes every responsible pupil."
},
          stem: "How does the writer of 'Phones In' acknowledge the opposing view before answering it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Counter-argument",
                              "statement": "Acknowledging the other side before answering it can make a writer seem fair-minded — or can set up a straw man."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The writer concedes that 'misuse happens', validating the ban argument's starting point.",
                              "evidence": "Of course, misuse happens",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "She then reframes the issue: the question is not whether phones can be misused but whether schools teach management.",
                              "evidence": "they should teach them to manage them inside it too",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Her counter is practical rather than dismissive — 'A total ban solves nothing' — showing she has considered the other side.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The writer concedes 'misuse happens' before arguing that schools should teach phone management rather than impose bans — a counter-argument that acknowledges then redirects the debate.",
          "commonErrors": [
                    "Saying the writer 'agrees' with the ban; she concedes a point, not the position."
          ]
},
        },
        {
          id: "el11-u9-viewpoint-bias-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Phones Out",
          "author": "Written for Akademik Space",
          "source": "Original opinion article (position: ban)",
          "text": "Schools should ban mobile phones outright. My son's concentration has collapsed since he got a smartphone, and he is not alone: teachers up and down the country report the same pattern. The evidence is plain. A phone in a pocket is a portal to distraction, and no child should be expected to resist it.\n\nSome say phones can support learning. Perhaps. But the burden of proof lies with those who want to introduce the distraction, not with those who want to protect childhood. Every lesson lost to a glowing screen is a lesson the child will never get back."
},
          stem: "How does 'Phones Out' use anecdote and exaggeration to support its viewpoint?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Anecdotal evidence",
                              "statement": "A single personal story presented as typical can feel more convincing than statistics."
                    },
                    {
                              "kind": "technique",
                              "name": "Hyperbole",
                              "statement": "Deliberate exaggeration heightens emotional impact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The writer opens with a personal anecdote — 'My son's concentration has collapsed' — which feels vivid and true.",
                              "evidence": "My son's concentration has collapsed since he got a smartphone",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "She generalises from one case: 'he is not alone' and 'teachers up and down the country report the same pattern' — but no evidence is given for the general claim.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'The evidence is plain' asserts certainty the anecdote cannot support — a bias marker.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Exaggeration — 'a portal to distraction', 'never get back' — makes the harm feel total and irreversible.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The writer uses a vivid personal anecdote ('my son's concentration has collapsed') and generalises it into 'evidence', then heightens the threat with hyperbole ('a portal to distraction', 'never get back') — emotionally persuasive but logically thin.",
          "commonErrors": [
                    "Accepting the anecdote as proof rather than analysing its persuasive function."
          ]
},
        },
        {
          id: "el11-u9-viewpoint-bias-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Two Articles on Phones in Schools",
          "author": "Written for Akademik Space",
          "source": "Original texts for comparison",
          "text": "Text 1 - 'Phones Out'\nSchools should ban mobile phones outright. My son's concentration has collapsed since he got a smartphone, and he is not alone: teachers up and down the country report the same pattern. The evidence is plain. A phone in a pocket is a portal to distraction, and no child should be expected to resist it. Some say phones can support learning. Perhaps. But the burden of proof lies with those who want to introduce the distraction, not with those who want to protect childhood. Every lesson lost to a glowing screen is a lesson the child will never get back.\n\nText 2 - 'Phones In'\nBlanket bans on phones ignore what research actually shows. Used well, a smartphone is the most powerful learning tool a child has ever owned. Revision apps, language tools and access to the world's libraries sit in every pocket. Banning them is like banning dictionaries because some children cheat with them. Of course, misuse happens. But schools already teach children to manage screens outside the classroom; they should teach them to manage them inside it too. A total ban solves nothing and punishes every responsible pupil."
},
          stem: "Compare the balance of argument in 'Phones Out' and 'Phones In'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Balance assessment",
                              "statement": "Judge how fairly each writer represents the opposing view."
                    },
                    {
                              "kind": "technique",
                              "name": "One-sidedness",
                              "statement": "A text that never fairly states the other side is more biased than one that does."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Phones Out' mentions the opposing view only to dismiss it: 'Some say phones can support learning. Perhaps.'",
                              "evidence": "Some say phones can support learning. Perhaps.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Its answer — 'the burden of proof lies with those who want to introduce the distraction' — shifts the burden rather than engaging the claim.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Phones In' engages more: it names the counter ('misuse happens'), offers an analogy ('banning dictionaries') and proposes an alternative (teaching management).",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "'Phones Out' is more one-sided: it acknowledges the opposing view only to dismiss it in 'Perhaps' and shifts the burden of proof. 'Phones In' engages more fairly by conceding misuse and proposing an alternative, though both ultimately argue their own side.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating comparison of how fairly each text balances argument; judicious, well-chosen evidence"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant comparison of how fairly each text balances argument; appropriate references"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited comparison of how fairly each text balances argument; few or unselective references"
                    }
          ],
          "commonErrors": [
                    "Saying one text is 'balanced' when both argue a position; the question is how the other side is treated."
          ]
},
        },
        {
          id: "el11-u9-viewpoint-bias-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Two Articles on Phones in Schools",
          "author": "Written for Akademik Space",
          "source": "Original texts for comparison",
          "text": "Text 1 - 'Phones Out'\nSchools should ban mobile phones outright. My son's concentration has collapsed since he got a smartphone, and he is not alone: teachers up and down the country report the same pattern. The evidence is plain. A phone in a pocket is a portal to distraction, and no child should be expected to resist it. Some say phones can support learning. Perhaps. But the burden of proof lies with those who want to introduce the distraction, not with those who want to protect childhood. Every lesson lost to a glowing screen is a lesson the child will never get back.\n\nText 2 - 'Phones In'\nBlanket bans on phones ignore what research actually shows. Used well, a smartphone is the most powerful learning tool a child has ever owned. Revision apps, language tools and access to the world's libraries sit in every pocket. Banning them is like banning dictionaries because some children cheat with them. Of course, misuse happens. But schools already teach children to manage screens outside the classroom; they should teach them to manage them inside it too. A total ban solves nothing and punishes every responsible pupil."
},
          stem: "Read both articles on phones in schools.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the main claim of each writer.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Evaluate which writer's viewpoint is better supported by evidence and reasoning.",
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
                              "name": "Claim identification",
                              "statement": "State each viewpoint precisely before evaluating it."
                    },
                    {
                              "kind": "skill",
                              "name": "Evidence evaluation",
                              "statement": "Judge support by quality (anecdote vs research, assertion vs reasoning), not by how strongly it is phrased."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Text 1 claims schools should ban phones outright; Text 2 claims bans are wrong and phones should be managed in class.",
                              "evidence": "Schools should ban mobile phones outright",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Credit a precise contrast: ban versus managed use, with each claim attributed to the right text.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Text 1's support is thin: one anecdote generalised as 'evidence', no data, counter dismissed with 'Perhaps'.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Text 2's support is stronger: it references 'what research actually shows', offers an analogy and a practical alternative.",
                              "evidence": "ignore what research actually shows",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "A top answer concludes Text 2 is better supported but notes both rely on assertion — a nuanced verdict earns full credit.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) Text 1: ban phones outright. Text 2: reject blanket bans and teach phone management instead. (b) Text 2 is better supported: it invokes research, uses an analogy and proposes an alternative, while Text 1 rests on a single anecdote and dismisses the counter-argument.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating evaluation of which viewpoint is better supported; judicious, well-chosen evidence",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant evaluation of which viewpoint is better supported; appropriate references",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited evaluation of which viewpoint is better supported; few or unselective references",
                              "part": "b"
                    }
          ],
          "commonErrors": [
                    "In (a) giving views rather than claims.",
                    "In (b) choosing a side without weighing the quality of evidence."
          ]
},
        },
      ],
    },
    {
      id: "el11-u9-evaluative-writing",
      title: "Writing evaluative comment",
      skill: "Write evaluative paragraphs that summarise viewpoints, identify bias and reach a justified judgement (AO3).",
      lesson: {
        sections: [
          {
            heading: "What AO3 asks for",
            body: "AO3 rewards **critical understanding and evaluation**: not just what a text says, but how convincing, fair and well-supported it is. An evaluative answer names the viewpoint, assesses the evidence, notices bias, and reaches a judgement you can defend. It is the difference between describing a text and judging it.",
          },
          {
            heading: "The evaluative paragraph",
            body: "A strong evaluative paragraph follows a pattern: **point** (the judgement), **evidence** (quotation or feature), **analysis** (why it matters), **verdict** (so what). e.g. 'The writer's case is weakened by its reliance on anecdote: \"My son's concentration has collapsed\" is vivid but proves only one case, so the claim that \"the evidence is plain\" outruns the proof.'",
          },
          {
            heading: "Judging fairly",
            body: "Evaluation does not mean fault-finding. A good judgement weighs strengths and weaknesses: a text can be emotionally powerful yet logically thin, or balanced yet unconvincing. Always acknowledge what the text does well before or alongside what it does badly — examiners reward nuance.",
          },
        ],
        keyFormulas: [
          { name: "AO3 evaluation", statement: "Critical understanding and evaluation of viewpoints: judging how convincing and balanced a text is." },
          { name: "Evaluative paragraph", statement: "Point, evidence, analysis, verdict — a judgement defended by reference to the text." },
          { name: "Balanced judgement", statement: "Weighing strengths and weaknesses rather than only praising or condemning." },
        ],
        workedExample: {
          problem: "Write one evaluative sentence judging 'Phones Out'.",
          solution: "'Phones Out' is emotionally persuasive but logically thin: its vivid anecdote about the writer's son ('concentration has collapsed') feels convincing, yet it is generalised into 'the evidence is plain' while the opposing view is dismissed in a single word ('Perhaps'). The verdict — that the writer has decided before weighing the evidence — makes the argument powerful in tone but weak in support.",
        },
      },
      questions: [
        {
          id: "el11-u9-evaluative-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Phones Out",
          "author": "Written for Akademik Space",
          "source": "Original opinion article (position: ban)",
          "text": "Schools should ban mobile phones outright. My son's concentration has collapsed since he got a smartphone, and he is not alone: teachers up and down the country report the same pattern. The evidence is plain. A phone in a pocket is a portal to distraction, and no child should be expected to resist it.\n\nSome say phones can support learning. Perhaps. But the burden of proof lies with those who want to introduce the distraction, not with those who want to protect childhood. Every lesson lost to a glowing screen is a lesson the child will never get back."
},
          stem: "What does the assessment objective AO3 require in an analytical answer?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Retelling the text accurately."
                    },
                    {
                              "id": "b",
                              "text": "Identifying literary techniques only."
                    },
                    {
                              "id": "c",
                              "text": "Critical understanding and evaluation of viewpoints."
                    },
                    {
                              "id": "d",
                              "text": "Comparing the text with its historical context."
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AO3",
                              "statement": "AO3 assesses critical understanding and evaluation of viewpoints in texts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AO3 is the evaluation objective: judging how convincing, fair and well-supported a viewpoint is.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**(c)** Critical understanding and evaluation of viewpoints.",
          "commonErrors": [
                    "Confusing AO3 (evaluate) with AO1 (understand) or AO2 (analyse methods)."
          ]
},
        },
        {
          id: "el11-u9-evaluative-writing-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "Phones Out",
          "author": "Written for Akademik Space",
          "source": "Original opinion article (position: ban)",
          "text": "Schools should ban mobile phones outright. My son's concentration has collapsed since he got a smartphone, and he is not alone: teachers up and down the country report the same pattern. The evidence is plain. A phone in a pocket is a portal to distraction, and no child should be expected to resist it.\n\nSome say phones can support learning. Perhaps. But the burden of proof lies with those who want to introduce the distraction, not with those who want to protect childhood. Every lesson lost to a glowing screen is a lesson the child will never get back."
},
          stem: "State one strength and one weakness of 'Phones Out' as an argument.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Balanced evaluation",
                              "statement": "A judgement names both what works and what does not."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strength: the anecdote is vivid and emotionally engaging ('My son's concentration has collapsed').",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Weakness: the counter-argument is dismissed ('Perhaps.') and the evidence is a single generalised case.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Strength: emotionally vivid opening anecdote. Weakness: thin evidence — one anecdote treated as proof and the opposing view dismissed.",
          "commonErrors": [
                    "Giving two weaknesses or two strengths instead of one of each.",
                    "Praising without reference to the text."
          ]
},
        },
        {
          id: "el11-u9-evaluative-writing-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Phones In",
          "author": "Written for Akademik Space",
          "source": "Original opinion article (position: allow)",
          "text": "Blanket bans on phones ignore what research actually shows. Used well, a smartphone is the most powerful learning tool a child has ever owned. Revision apps, language tools and access to the world's libraries sit in every pocket. Banning them is like banning dictionaries because some children cheat with them.\n\nOf course, misuse happens. But schools already teach children to manage screens outside the classroom; they should teach them to manage them inside it too. A total ban solves nothing and punishes every responsible pupil."
},
          stem: "How might a reader's own experience of phones affect their response to 'Phones In'?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Reader response",
                              "statement": "A reader's own experience filters how they judge a viewpoint."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A reader who has seen phones aid learning may find 'the most powerful learning tool' convincing.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A reader whose child was distracted may resist the claim regardless of the analogy.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A top answer notes that 'Of course, misuse happens' may satisfy sceptics while the dictionary analogy persuades those who value fairness.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "A reader's experience acts as a filter: those who have seen phones help learning will accept 'the most powerful learning tool', while those who have seen distraction will resist it — so the same argument persuades differently depending on the reader.",
          "commonErrors": [
                    "Saying readers 'agree' or 'disagree' without linking to experience."
          ]
},
        },
        {
          id: "el11-u9-evaluative-writing-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Two Articles on Phones in Schools",
          "author": "Written for Akademik Space",
          "source": "Original texts for comparison",
          "text": "Text 1 - 'Phones Out'\nSchools should ban mobile phones outright. My son's concentration has collapsed since he got a smartphone, and he is not alone: teachers up and down the country report the same pattern. The evidence is plain. A phone in a pocket is a portal to distraction, and no child should be expected to resist it. Some say phones can support learning. Perhaps. But the burden of proof lies with those who want to introduce the distraction, not with those who want to protect childhood. Every lesson lost to a glowing screen is a lesson the child will never get back.\n\nText 2 - 'Phones In'\nBlanket bans on phones ignore what research actually shows. Used well, a smartphone is the most powerful learning tool a child has ever owned. Revision apps, language tools and access to the world's libraries sit in every pocket. Banning them is like banning dictionaries because some children cheat with them. Of course, misuse happens. But schools already teach children to manage screens outside the classroom; they should teach them to manage them inside it too. A total ban solves nothing and punishes every responsible pupil."
},
          stem: "Write a short evaluative paragraph comparing the balance of the two articles.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evaluative paragraph",
                              "statement": "Point, evidence, analysis, verdict — judge the texts with quotations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point: one text is more balanced than the other.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Evidence: 'Phones Out' dismisses the counter in 'Perhaps.' while 'Phones In' concedes 'misuse happens'.",
                              "evidence": "Of course, misuse happens",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Analysis: conceding then redirecting is fairer than dismissing; it shows the writer has weighed the other side.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Verdict: 'Phones In' is the more balanced article, though both argue their own side.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "A paragraph judging 'Phones In' as more balanced because it concedes 'misuse happens' and offers an alternative, while 'Phones Out' dismisses the counter-argument with 'Perhaps.' — supported by quotations and a clear verdict.",
          "commonErrors": [
                    "Retelling both articles instead of judging them.",
                    "Quoting without analysis."
          ]
},
        },
        {
          id: "el11-u9-evaluative-writing-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Phones Out",
          "author": "Written for Akademik Space",
          "source": "Original opinion article (position: ban)",
          "text": "Schools should ban mobile phones outright. My son's concentration has collapsed since he got a smartphone, and he is not alone: teachers up and down the country report the same pattern. The evidence is plain. A phone in a pocket is a portal to distraction, and no child should be expected to resist it.\n\nSome say phones can support learning. Perhaps. But the burden of proof lies with those who want to introduce the distraction, not with those who want to protect childhood. Every lesson lost to a glowing screen is a lesson the child will never get back."
},
          stem: "Evaluate the overall effectiveness of 'Phones Out' as persuasion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Holistic evaluation",
                              "statement": "Weigh emotional power against logical support and fairness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Emotionally effective: the anecdote and loaded language ('portal to distraction', 'never get back') are gripping.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Logically weak: one anecdote is generalised into 'the evidence is plain' with no data.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Unfair: the counter-argument gets two words ('Perhaps.') and the burden of proof is shifted rather than argued.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Verdict: powerful in tone, weak in support — it may move readers but will not convince sceptics.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "'Phones Out' is emotionally persuasive — vivid anecdote, loaded language — but logically thin and unfair in its treatment of the counter-argument; it moves readers without convincing them.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating evaluation of persuasive effectiveness; judicious, well-chosen evidence"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant evaluation of persuasive effectiveness; appropriate references"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited evaluation of persuasive effectiveness; few or unselective references"
                    }
          ],
          "commonErrors": [
                    "Judging only by how much you agree with the viewpoint.",
                    "Ignoring the treatment of the counter-argument."
          ]
},
        },
        {
          id: "el11-u9-evaluative-writing-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "Two Articles on Phones in Schools",
          "author": "Written for Akademik Space",
          "source": "Original texts for comparison",
          "text": "Text 1 - 'Phones Out'\nSchools should ban mobile phones outright. My son's concentration has collapsed since he got a smartphone, and he is not alone: teachers up and down the country report the same pattern. The evidence is plain. A phone in a pocket is a portal to distraction, and no child should be expected to resist it. Some say phones can support learning. Perhaps. But the burden of proof lies with those who want to introduce the distraction, not with those who want to protect childhood. Every lesson lost to a glowing screen is a lesson the child will never get back.\n\nText 2 - 'Phones In'\nBlanket bans on phones ignore what research actually shows. Used well, a smartphone is the most powerful learning tool a child has ever owned. Revision apps, language tools and access to the world's libraries sit in every pocket. Banning them is like banning dictionaries because some children cheat with them. Of course, misuse happens. But schools already teach children to manage screens outside the classroom; they should teach them to manage them inside it too. A total ban solves nothing and punishes every responsible pupil."
},
          stem: "Read both articles on phones in schools.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Summarise each writer's viewpoint in one sentence.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Identify one example of bias or loaded language in each text.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write an evaluative paragraph judging which article is the more convincing piece of persuasion.",
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
                              "name": "Summarise viewpoints",
                              "statement": "One precise sentence per writer."
                    },
                    {
                              "kind": "technique",
                              "name": "Bias detection",
                              "statement": "Loaded language and one-sided evidence reveal bias."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluative writing",
                              "statement": "Point, evidence, analysis, verdict — judge with justification."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Text 1: schools should ban phones outright. Text 2: reject blanket bans and teach management instead.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Text 1: loaded language — 'portal to distraction', 'collapsed', 'never get back' (1) plus bias — anecdote treated as proof (1).",
                              "evidence": "a portal to distraction",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Text 2: loaded language — 'powerful learning tool', 'blanket bans' (1) plus bias — 'what research actually shows' invoked without citation (1).",
                              "evidence": "Blanket bans on phones",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Point: judge which is more convincing and why.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evidence and analysis: Text 2 engages the counter ('misuse happens') and offers an analogy; Text 1 dismisses it ('Perhaps.') and rests on anecdote.",
                              "evidence": "Of course, misuse happens",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Verdict: Text 2 is more convincing because it weighs the other side, though both argue their own position.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) Text 1 argues for an outright ban; Text 2 argues against blanket bans in favour of teaching management. (b) Text 1: 'portal to distraction' and anecdotal 'evidence'; Text 2: 'powerful learning tool' and uncited 'research'. (c) A justified evaluative paragraph concluding Text 2 is more convincing for engaging the counter-argument and offering an alternative.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating evaluative judgement of the more convincing article; judicious, well-chosen evidence",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant evaluative judgement of the more convincing article; appropriate references",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited evaluative judgement of the more convincing article; few or unselective references",
                              "part": "c"
                    }
          ],
          "commonErrors": [
                    "In (a) summarising content rather than viewpoint.",
                    "In (b) quoting without explaining the bias.",
                    "In (c) retelling instead of judging."
          ]
},
        },
      ],
    },
  ],

};
