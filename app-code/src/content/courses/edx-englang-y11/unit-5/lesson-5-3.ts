import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "el11-u5-lesson-5-3",
  code: "5-3",
  title: "Comparing Accounts and Evaluating Sources",
  goal: "I CAN compare how different texts present the same event and evaluate the reliability and purpose of sources.",
  standards: ["4EA1 AO1", "4EA1 AO3", "4EA1 Paper 1"],
  
  vocabulary: [
    { term: "Source", definition: "The origin of information — who produced it, when, and for what purpose." },
    { term: "Point of view", definition: "The perspective from which a text presents events." },
    { term: "Reliability", definition: "Whether a source can be trusted — based on evidence, balance and transparency." },
    { term: "Corroboration", definition: "Confirming information across multiple independent sources." },
    { term: "Editorial line", definition: "A publication's consistent stance or bias across its coverage." },
    { term: "Framing", definition: "The context a source provides that shapes how events are interpreted." },
  ],
  concepts: [
    {
      id: "el11-u5-comparing-accounts",
      title: "Comparing accounts of the same event",
      skill: "Compare how different sources present the same event and analyse the differences in framing and emphasis.",
      lesson: {
        sections: [
          {
            heading: "Same event, different stories",
            body: "Every account of an event is a selection. A protest can be 'a demonstration of public anger' or 'a violent riot'. A fire can be 'a tragic accident' or 'a preventable disaster'. The facts may overlap; the framing — which facts are foregrounded, which language is used — creates completely different stories.",
          },
          {
            heading: "What to compare",
            body: "When comparing accounts: (1) identify the **core facts** both share; (2) note **differences in emphasis** — what each foregrounds; (3) analyse **language choices** — loaded vs neutral words; (4) consider **omissions** — what each leaves out; (5) evaluate which account is more reliable or balanced.",
          },
          {
            heading: "Framing and agenda",
            body: "Every source has an **agenda** — what it wants readers to believe or do. A government statement aims to reassure; an opposition statement aims to criticise; a tabloid aims to sell papers. Recognising the agenda helps you read 'between' the accounts to find the underlying event.",
          },
        ],
        keyFormulas: [
          { name: "Comparison method", statement: "Shared facts → different emphasis → language choices → omissions → agenda." },
          { name: "Framing", statement: "The context a source provides that shapes interpretation." },
          { name: "Agenda", statement: "What a source wants readers to believe or do." },
        ],
        workedExample: {
          problem: "Account A: 'The storm caused widespread disruption.' Account B: 'Residents pulled together to support each other through the storm.' Compare the representations.",
          solution: "Both acknowledge the storm but frame it differently. A foregrounds 'disruption' — the problem, the cost. B foregrounds 'pulled together' — community, resilience. A uses impersonal 'widespread' language; B uses warm collective language. Neither is false; each selects details serving its purpose. A might serve insurance/political purposes; B might serve community-building or human-interest journalism.",
        },
      },
      questions: [
        {
          id: "el11-u5-comparing-accounts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'framing' mean in source analysis?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The physical picture in an article"
                    },
                    {
                              "id": "b",
                              "text": "The context a source provides that shapes interpretation"
                    },
                    {
                              "id": "c",
                              "text": "The writer's handwriting"
                    },
                    {
                              "id": "d",
                              "text": "The number of words used"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Framing",
                              "statement": "Context that shapes interpretation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Framing is the interpretive context a source creates around events.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**(b)** The context a source provides that shapes interpretation.",
          "commonErrors": [
                    "Confusing framing with visual imagery (a)."
          ]
},
        },
        {
          id: "el11-u5-comparing-accounts-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain what an 'agenda' is in the context of media sources.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Agenda",
                              "statement": "What a source wants readers to believe or do."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines agenda as the source's underlying purpose or desired outcome.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Example: a government wants to reassure; a tabloid wants to sell papers; a charity wants donations.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Agenda = what a source wants readers to believe or do — its underlying purpose.",
          "commonErrors": [
                    "Confusing agenda with plot or schedule."
          ]
},
        },
        {
          id: "el11-u5-comparing-accounts-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Two reports on a factory closure",
          "author": "Written for Akademik Space",
          "source": "Local paper vs national business journal",
          "text": "LOCAL PAPER: 'Devastating blow as town's last factory closes, leaving 400 families facing an uncertain future.'\nBUSINESS JOURNAL: 'The closure reflects shifting market demands; the company is relocating operations to reduce costs and improve competitiveness.'"
},
          stem: "Compare how these two reports represent the same event and explain what each foregrounds.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Framing",
                              "statement": "Different emphasis creates different stories."
                    },
                    {
                              "kind": "skill",
                              "name": "Comparative analysis",
                              "statement": "Identifying foregrounded details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Local paper foregrounds human impact: 'devastating', '400 families', 'uncertain future' — emotional, community-focused.",
                              "evidence": "Devastating blow as town's last factory closes",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Business journal foregrounds economic logic: 'market demands', 'relocating', 'competitiveness' — analytical, impersonal.",
                              "evidence": "shifting market demands",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Each omits the other's focus: local paper ignores business rationale; journal ignores human cost.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The local paper frames closure as human tragedy affecting families; the business journal frames it as economic necessity. Each foregrounds details serving its audience's concerns.",
          "commonErrors": [
                    "Saying one is 'right' rather than analysing framing."
          ]
},
        },
        {
          id: "el11-u5-comparing-accounts-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Two accounts of a school trip",
          "author": "Written for Akademik Space",
          "source": "Student blog vs teacher's report",
          "text": "STUDENT BLOG: 'The trip was amazing! We got to explore the castle, had a great lunch, and Mr Davies was so funny the whole time.'\nTEACHER'S REPORT: 'The visit proceeded according to plan. Students demonstrated appropriate behaviour throughout. One minor incident was resolved without disruption.'"
},
          stem: "Analyse how these accounts differ in what they include, omit and emphasise, and suggest why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Selection/omission",
                              "statement": "Different purposes select different details."
                    },
                    {
                              "kind": "skill",
                              "name": "Purpose analysis",
                              "statement": "Audience and purpose drive representation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Student blog selects enjoyment: 'amazing', 'explore', 'great lunch', 'so funny' — experiential, personal.",
                              "evidence": "The trip was amazing!",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Teacher's report selects procedure and control: 'according to plan', 'appropriate behaviour', 'minor incident resolved' — institutional, risk-managed.",
                              "evidence": "proceeded according to plan",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Student omits the 'minor incident'; teacher omits the fun — each serves its audience.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Blog aims to entertain/share experience; report aims to document compliance and manage risk.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Neither is false; together they give a fuller picture than either alone.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "The blog represents the trip as enjoyable experience; the report represents it as managed procedure. Each selects details for its audience and omits the other's focus.",
          "commonErrors": [
                    "Assuming one account is lying."
          ]
},
        },
        {
          id: "el11-u5-comparing-accounts-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two words in the BUSINESS JOURNAL extract that create a neutral/analytical tone.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the local paper's language creates an emotional response.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Register and tone",
                              "statement": "Word choice creates emotional or analytical distance."
                    },
                    {
                              "kind": "skill",
                              "name": "Close analysis",
                              "statement": "Linking specific words to effect."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "'Market demands', 'competitiveness', 'relocating' — economic jargon, impersonal.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "'Devastating' — strong negative adjective triggering sympathy.",
                              "evidence": "Devastating blow",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "'Last factory' — emphasises finality and loss.",
                              "evidence": "town's last factory",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "'400 families facing an uncertain future' — humanises scale, creates anxiety.",
                              "evidence": "400 families facing an uncertain future",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Overall effect: reader feels personal loss and anger rather than analytical understanding.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Two accurate neutral/analyical word choices identified from the business journal."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "One or no accurate choices."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Explains how the local paper's emotive language shapes the reader's response, with specific references."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Notes emotional tone but without analysing specific word choices."
                    }
          ],
"finalAnswer": "(a) 'Market demands', 'competitiveness', 'relocating' create neutral analytical tone. (b) 'Devastating', 'last factory', '400 families' create emotional response of loss and sympathy.",
          "commonErrors": [
                    "Identifying tone without quoting words."
          ]
},
        },
        {
          id: "el11-u5-comparing-accounts-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words comparing how two sources present the same event differently. Identify what each foregrounds, analyse language choices, and evaluate which account is more reliable.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparative source analysis",
                              "statement": "Foregrounding, language, omissions, reliability."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluative writing",
                              "statement": "Balanced judgement supported by evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies shared core facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Analyses differences in emphasis/foregrounding.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Analyses language choices (loaded vs neutral).",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Notes omissions.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Evaluates reliability with justification.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Clear organisation and conclusion.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Different sources frame the same event through selection, emphasis and language; reliability depends on balance, evidence and transparency.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Shared facts, differences analysed, reliability judged."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Differences noted, partial analysis."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Vague comparison."
                    }
          ],
          "commonErrors": [
                    "Only describing one source.",
                    "No reliability judgement."
          ]
},
        },
      ],
    },
    {
      id: "el11-u5-evaluating-sources",
      title: "Evaluating reliability and purpose",
      skill: "Evaluate sources for reliability, purpose and potential bias, and use corroboration to verify information.",
      lesson: {
        sections: [
          {
            heading: "Questions to ask of a source",
            body: "**Who** produced it? What's their expertise or agenda? **When** was it produced — is it current? **Why** was it produced — to inform, persuade, sell, attack? **What evidence** does it provide — data, named sources, or just assertion? **What is omitted** — does it acknowledge counter-arguments? These questions reveal reliability.",
          },
          {
            heading: "Types of sources",
            body: "**Primary sources**: eyewitness accounts, official documents, raw data — closest to events. **Secondary sources**: news reports, analysis, textbooks — interpret primary sources. **Tertiary sources**: encyclopedias, summaries — distil others. Each has different reliability: primary is most direct but may be biased by involvement; secondary offers perspective but adds interpretation.",
          },
          {
            heading: "Corroboration",
            body: "No single source should be trusted alone. **Corroboration** means confirming information across multiple independent sources. If three unrelated sources report the same fact, it's more reliable than one source's claim. Look for: do sources agree? Do they cite the same original source (then they're not independent)? Do any contradict?",
          },
        ],
        keyFormulas: [
          { name: "Source checklist", statement: "Who? When? Why? What evidence? What's omitted?" },
          { name: "Source types", statement: "Primary (direct) → Secondary (interpreted) → Tertiary (summarised)." },
          { name: "Corroboration", statement: "Confirmation across multiple independent sources." },
        ],
        workedExample: {
          problem: "A claim: 'This supplement cures cancer.' Evaluate the source: a company website with no scientific citations, selling the supplement for 50 pounds.",
          solution: "Highly unreliable. Agenda: profit — the company benefits from the claim. Evidence: none — no studies, no named researchers, no peer review. Omission: no mention of risks, side effects, or medical consensus. Type: promotional/tertiary at best. Corroboration: none offered. Red flags: unverifiable claim, commercial interest, absence of balanced evidence. A reliable source would cite independent research and acknowledge limitations.",
        },
      },
      questions: [
        {
          id: "el11-u5-evaluating-sources-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'primary source'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A summary of other sources"
                    },
                    {
                              "id": "b",
                              "text": "A source closest to the original event or data"
                    },
                    {
                              "id": "c",
                              "text": "The first source alphabetically"
                    },
                    {
                              "id": "d",
                              "text": "A biased source"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Primary source",
                              "statement": "Closest to original event/data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primary sources are direct: eyewitness accounts, documents, raw data.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**(b)** A source closest to the original event or data.",
          "commonErrors": [
                    "Confusing with 'first published' (c)."
          ]
},
        },
        {
          id: "el11-u5-evaluating-sources-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain what 'corroboration' means and why it matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Corroboration",
                              "statement": "Confirmation across independent sources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines corroboration as confirmation from multiple independent sources.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Matters because it reduces reliance on any single possibly-biased source.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Corroboration = confirming info across independent sources; it increases reliability by cross-checking.",
          "commonErrors": [
                    "Thinking corroboration means repeating the same source."
          ]
},
        },
        {
          id: "el11-u5-evaluating-sources-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Evaluating a claim",
          "author": "Written for Akademik Space",
          "source": "Study summary vs news report",
          "text": "RESEARCH PAPER (peer-reviewed journal): 'Study of 5,000 participants found a 15% reduction in symptoms with treatment X. Limitations: 6-month duration, self-reported data.'\nNEWS HEADLINE: 'MIRACLE CURE FOUND! Scientists prove treatment X works!'"
},
          stem: "Evaluate the reliability of each source and explain what the news report omits.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Source evaluation",
                              "statement": "Assessing evidence, balance and transparency."
                    },
                    {
                              "kind": "technique",
                              "name": "Headline exaggeration",
                              "statement": "Sensationalism distorts findings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Research paper is reliable: peer-reviewed, large sample (5,000), acknowledges limitations — transparent about uncertainty.",
                              "evidence": "Limitations: 6-month duration",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "News headline is unreliable: 'MIRACLE CURE', 'prove' — exaggerates modest findings (15% symptom reduction, not cure).",
                              "evidence": "MIRACLE CURE FOUND!",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "News omits: limitations, modest effect size, self-reported data — all the caveats that make the paper trustworthy.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The research paper is reliable (peer-reviewed, transparent limitations); the news headline is unreliable (exaggerates '15% reduction' to 'miracle cure', omits caveats).",
          "commonErrors": [
                    "Trusting the headline because it cites 'scientists'."
          ]
},
        },
        {
          id: "el11-u5-evaluating-sources-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Three sources on a new drug",
          "author": "Written for Akademik Space",
          "source": "Source evaluation exercise",
          "text": "SOURCE A (pharmaceutical company press release): 'Our revolutionary drug has been proven safe and effective.'\nSOURCE B (independent medical journal): 'Trial of 2,000 patients showed modest improvement; side effects reported in 12% of cases.'\nSOURCE C (patient forum post): 'This drug saved my life — no side effects at all!'"
},
          stem: "Evaluate the reliability of each source and explain why corroboration across sources matters here.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Source evaluation",
                              "statement": "Agenda, evidence, transparency."
                    },
                    {
                              "kind": "definition",
                              "name": "Corroboration",
                              "statement": "Cross-source verification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Source A unreliable: company agenda (profit), 'proven safe and effective' without data — promotional.",
                              "evidence": "proven safe and effective",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Source B most reliable: independent, specific data (2,000 patients, 12% side effects), balanced — acknowledges both benefit and risk.",
                              "evidence": "modest improvement; side effects reported in 12%",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Source C unreliable alone: anecdotal, single experience, 'no side effects' contradicts trial data — not representative.",
                              "evidence": "saved my life — no side effects at all",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Corroboration matters: B's data is independent and specific; A and C are interested parties. Only B can be verified against trial evidence.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Conclusion: B is most reliable; A and C illustrate why single interested sources cannot be trusted.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Source B (independent journal with data and balanced reporting) is most reliable; A (company PR) and C (anecdote) are interested/unrepresentative. Corroboration across independent sources is essential.",
          "commonErrors": [
                    "Trusting the company or the testimonial."
          ]
},
        },
        {
          id: "el11-u5-evaluating-sources-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "List three questions you should ask when evaluating a source's reliability.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "A source says 'Studies prove this works' without naming the studies. Explain why this is a reliability problem.",
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
                              "name": "Source checklist",
                              "statement": "Who? When? Why? What evidence? What's omitted?"
                    },
                    {
                              "kind": "skill",
                              "name": "Verifiability",
                              "statement": "Claims must be checkable."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Any three valid questions: Who produced it? What's their agenda? What evidence is given? Is it current? What's omitted?",
                              "marks": 3,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "'Studies prove' is vague — no titles, authors, journals, dates.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cannot be verified or corroborated — reader must take claim on faith.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Reliable sources cite specific, checkable evidence; vague appeals to authority are a red flag.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
                    "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Three relevant, evaluative questions about source reliability."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Fewer than three or questions that are not evaluative."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Explains clearly why unnamed 'studies' undermine credibility — unverifiable authority."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Notes it is untrustworthy without explaining the verification problem."
                    }
          ],
"finalAnswer": "(a) Who? What's the agenda? What evidence? Is it current? What's omitted? (b) Unnamed 'studies' cannot be verified — vague authority is a reliability red flag.",
          "commonErrors": [
                    "Accepting 'studies prove' at face value."
          ]
},
        },
        {
          id: "el11-u5-evaluating-sources-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write about 200 words on how to evaluate the reliability of a source. Cover at least three criteria and explain how corroboration strengthens or weakens a claim.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Source evaluation",
                              "statement": "Agenda, evidence, transparency, currency."
                    },
                    {
                              "kind": "skill",
                              "name": "Corroboration",
                              "statement": "Cross-source verification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Three or more criteria explained (who/agenda, evidence, omissions, currency).",
                              "marks": 3,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Corroboration explained with example.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Connects evaluation to reliability judgement.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Clear organisation and conclusion.",
                              "marks": 3,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Evaluate sources by asking who produced them, their agenda, the evidence given, what's omitted, and whether claims are corroborated across independent sources.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "8-9",
                              "descriptor": "Three criteria explained, corroboration illustrated."
                    },
                    {
                              "level": "Level 2",
                              "marks": "5-7",
                              "descriptor": "Criteria present, partial corroboration."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-4",
                              "descriptor": "Vague checklist."
                    }
          ],
          "commonErrors": [
                    "No criteria named.",
                    "Corroboration not explained."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el11-u5-sources-notes",
      title: "Comparing sources — notes",
      summary: "Same event, different framings. Evaluate sources by agenda, evidence, omissions and corroboration.",
      sections: [
        { heading: "Comparison method", body: "Shared facts → different emphasis → language choices → omissions → agenda." },
        { heading: "Source checklist", body: "Who? When? Why? What evidence? What's omitted?" },
        { heading: "Corroboration", body: "Independent sources agreeing = more reliable; interested parties agreeing = less so." },
      ],
    },
  ],
};
