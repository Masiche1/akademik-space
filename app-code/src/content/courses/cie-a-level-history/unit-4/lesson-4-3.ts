import type { Lesson } from "../../../types.ts";

export const lesson643: Lesson = {
  id: "ciealhis-u4-lesson-4-3",
  code: "4-3",
  title: "Post-Cold War World",
  goal: "I CAN analyse post-Cold War international relations and conflicts.",
  standards: ["Cambridge A Level History 9489", "Paper 1: post-Cold War"],
  
  vocabulary: [
    { term: "Unipolarity", definition: "US as sole superpower." },
    { term: "9/11", definition: "2001 terrorist attacks on US." },
    { term: "War on Terror", definition: "US-led response to terrorism." },
    { term: "Iraq War", definition: "2003 US-led invasion of Iraq." },
    { term: "Afghanistan War", definition: "2001 US-led intervention." },
    { term: "Multipolarity", definition: "Multiple power centres." },
  ],
  concepts: [
    {
      id: "ciealhis-u4-s3-post",
      title: "Post-Cold War",
      skill: "Analyse post-Cold War world order.",
      lesson: {
        sections: [
          {
            heading: "US unipolarity",
            body: "1991: US sole superpower. 'New World Order' — democracy, free markets, US leadership. NATO expansion into Eastern Europe.",
          },
          {
            heading: "Post-9/11",
            body: "2001: terrorist attacks transformed US foreign policy. War on Terror: Afghanistan 2001, Iraq 2003. Challenged US hegemony.",
          },
          {
            heading: "Multipolar emergence",
            body: "China's rise, Russia's resurgence, EU integration. Power shifting from US unipolarity to multipolarity.",
          },
        ],
        keyFormulas: [
          { name: "Unipolar", statement: "US dominance" },
          { name: "9/11", statement: "2001 attacks" },
          { name: "Multipolar", statement: "multiple powers" },
        ],
        workedExample: {
          problem: "How did 9/11 change international relations?",
          solution: "Transformed US foreign policy — War on Terror, Afghanistan/Iraq wars, strained alliances, rise of terrorism as key threat.",
        },
      },
      questions: [
        {
          id: "ciealhis-u4-pcw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was unipolarity?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "US as sole superpower"
                    },
                    {
                              "id": "b",
                              "text": "A trade agreement"
                    },
                    {
                              "id": "c",
                              "text": "A type of government"
                    },
                    {
                              "id": "d",
                              "text": "Multiple powers"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Unipolarity",
                              "statement": "US dominance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unipolarity = US sole superpower.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "US sole superpower"
},
        },
        {
          id: "ciealhis-u4-pcw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the War on Terror?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "War on Terror",
                              "statement": "US response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "US-led response to terrorism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Afghanistan 2001, Iraq 2003.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "US terrorism response"
},
        },
        {
          id: "ciealhis-u4-pcw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How did 9/11 change international relations?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "9/11 impact",
                              "statement": "Changes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Transformed US foreign policy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "War on Terror, Afghanistan/Iraq.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strained alliances, new threats.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Policy transformation"
},
        },
        {
          id: "ciealhis-u4-pcw-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define unipolarity, 9/11, War on Terror, Iraq War, Afghanistan War, multipolarity. (b) What was unipolarity? (c) What was 9/11? (d) What was War on Terror? (e) What was Iraq War? (f) What was Afghanistan War? (g) What is multipolarity? (h) Evaluate whether US hegemony is declining.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Post-Cold War",
                              "statement": "Analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) US dominance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 2001 attacks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) US terrorism response.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 2003 invasion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) 2001 intervention.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Multiple powers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) China/Russia rising — multipolar emerging.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Post-Cold War analysis."
},
        },
        {
          id: "ciealhis-u4-pcw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which country emerged as the sole superpower after the Cold War?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The Soviet Union"
                    },
                    {
                              "id": "b",
                              "text": "China"
                    },
                    {
                              "id": "c",
                              "text": "The United States"
                    },
                    {
                              "id": "d",
                              "text": "The European Union"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Unipolarity",
                              "statement": "US dominance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The USA emerged as the sole superpower, creating unipolarity.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** The United States"
},
        },
        {
          id: "ciealhis-u4-pcw-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In what year did the 9/11 terrorist attacks occur?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 2001
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "9/11",
                              "statement": "2001 attacks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The 9/11 attacks occurred in 2001.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "2001"
},
        },
        {
          id: "ciealhis-u4-pcw-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what the 'New World Order' meant after 1991.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "New World Order",
                              "statement": "Post-Cold War order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It described a US-led order promoting democracy, free markets and US leadership.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It included NATO expansion into Eastern Europe and expectations of cooperation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "US-led order of democracy, free markets and expanded alliances"
},
        },
        {
          id: "ciealhis-u4-pcw-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the War on Terror?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A Soviet military doctrine"
                    },
                    {
                              "id": "b",
                              "text": "An economic sanctions regime"
                    },
                    {
                              "id": "c",
                              "text": "A UN peacekeeping operation"
                    },
                    {
                              "id": "d",
                              "text": "A US-led response to terrorism after 9/11"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "War on Terror",
                              "statement": "US response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The War on Terror was the US-led response to terrorism after 9/11.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(d)** US-led response to terrorism"
},
        },
        {
          id: "ciealhis-u4-pcw-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In what year did the US-led invasion of Iraq begin?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 2003
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Iraq War",
                              "statement": "2003 invasion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The US-led invasion of Iraq began in 2003.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "2003"
},
        },
        {
          id: "ciealhis-u4-pcw-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how the rise of China and Russia's resurgence contributed to the shift from unipolarity to multipolarity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multipolarity",
                              "statement": "Power shift."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "China's economic growth and military modernisation created a second major power centre.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Russia's resurgence under Putin reasserted great-power ambitions after the USSR's collapse.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "EU integration and regional powers further diluted US dominance.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "The result is an emerging multipolar system in which the US can no longer act unilaterally.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Rising powers diluted US unipolar dominance"
},
        },
        {
          id: "ciealhis-u4-pcw-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is multipolarity?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A system with multiple centres of power"
                    },
                    {
                              "id": "b",
                              "text": "US dominance of world affairs"
                    },
                    {
                              "id": "c",
                              "text": "Nuclear disarmament"
                    },
                    {
                              "id": "d",
                              "text": "A single world government"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Multipolarity",
                              "statement": "Multiple powers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multipolarity means power is distributed among several centres.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Multiple centres of power"
},
        },
        {
          id: "ciealhis-u4-pcw-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which event most directly triggered the US intervention in Afghanistan in 2001?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The fall of the Berlin Wall"
                    },
                    {
                              "id": "b",
                              "text": "The invasion of Iraq"
                    },
                    {
                              "id": "c",
                              "text": "The end of the Cold War"
                    },
                    {
                              "id": "d",
                              "text": "The 9/11 terrorist attacks"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Afghanistan War",
                              "statement": "9/11 trigger."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The 9/11 attacks led the US to intervene in Afghanistan against the Taliban and al-Qaeda.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(d)** The 9/11 terrorist attacks"
},
        },
        {
          id: "ciealhis-u4-pcw-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In what year was the Warsaw Pact dissolved?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1991
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Warsaw Pact",
                              "statement": "1991 dissolution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Warsaw Pact was dissolved in 1991 as the Cold War ended.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1991"
},
        },
        {
          id: "ciealhis-u4-pcw-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why did the Iraq War strain US alliances?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Disagreements over justification and UN support"
                    },
                    {
                              "id": "b",
                              "text": "It created the European Union"
                    },
                    {
                              "id": "c",
                              "text": "It ended the Cold War"
                    },
                    {
                              "id": "d",
                              "text": "It was fought directly against NATO"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Iraq War",
                              "statement": "Alliance strain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Iraq War strained alliances because of disputes over its justification and lack of UN backing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** Disagreements over justification and UN support"
},
        },
        {
          id: "ciealhis-u4-pcw-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In what year did Poland, Hungary and the Czech Republic join NATO, marking its expansion into Eastern Europe?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1999
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "NATO expansion",
                              "statement": "1999 enlargement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poland, Hungary and the Czech Republic joined NATO in 1999.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1999"
},
        },
        {
          id: "ciealhis-u4-pcw-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether US hegemony is declining in the 21st century.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "US hegemony",
                              "statement": "Decline debate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evidence for decline: rise of China, Russia's resurgence, and limits exposed by the Iraq and Afghanistan wars.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evidence for continued power: unmatched military, economic and technological capabilities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Hegemony is relative — the US remains first among powers but can no longer act unilaterally.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Conclusion should weigh relative decline against absolute power, not binary loss of dominance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Relative decline amid continued absolute power"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u4-pcw-notes",
      title: "Post-Cold War — notes",
      summary: "US unipolarity→9/11→War on Terror→multipolar emergence.",
      sections: [
        { heading: "Key idea", body: "Post-Cold War world order shifted from bipolar to unipolar to emerging multipolar." },
        { heading: "9/11", body: "Transformed US foreign policy and global security landscape." },
      ],
    },
  ],
};
