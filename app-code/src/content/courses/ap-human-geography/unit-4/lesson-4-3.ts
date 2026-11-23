import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "aphg-u4-lesson-4-3",
  code: "4-3",
  title: "Globalization and Interdependence",
  goal: "I CAN explain globalization's drivers, effects, and debates.",
  standards: ["Unit 8"],
  vocabulary: [
    { term: "Globalization", definition: "Increasing interconnectedness of world economies, cultures, and politics." },
    { term: "Time-space compression", definition: "Technology reducing time/space barriers — instant communication, fast transport." },
    { term: "Transnational corporation", definition: "Company operating in multiple countries — e.g., Apple, Toyota, Walmart." },
    { term: "Comparative advantage", definition: "Theory that countries should specialize in what they produce most efficiently." },
    { term: "Trade liberalization", definition: "Removing barriers to trade (tariffs, quotas) — WTO, NAFTA/USMCA, EU." },
    { term: "Cultural globalization", definition: "Spread of global cultural forms — fast food, pop music, English language dominance." },
  ],
  concepts: [
    {
      id: "aphg-u4-globalization-interdependence",
      title: "The globalized world",
      skill: "Analyze globalization's drivers and consequences.",
      lesson: {
        sections: [
          {
            heading: "Globalization drivers",
            body: "Technology (internet, container shipping), trade liberalization (WTO), multinational corporations, financial flows — creating integrated global economy.",
          },
          {
            heading: "Effects",
            body: "Economic: efficiency gains but job losses in developed countries, inequality. Cultural: homogenization (McDonald's everywhere) vs. hybridization (fusion). Political: reduced sovereignty, global governance challenges (climate, pandemics).",
          },
        ],
        keyFormulas: [
          { name: "Globalization drivers", statement: "Technology + trade liberalization + MNCs + finance" },
          { name: "Effects", statement: "Economic efficiency vs. inequality; cultural homogenization vs. hybridization" },
        ],
        workedExample: {
          problem: "How does comparative advantage explain specialization?",
          solution: "Countries should specialize in producing goods where they have lowest opportunity cost — then trade benefits all; e.g., Portugal wine + England cloth both gain by specializing and trading.",
        },
      },
      questions: [
        {
          id: "aphg-u4-globalization-interdependence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Globalization is driven primarily by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only technology"
                    },
                    {
                              "id": "b",
                              "text": "technology, trade liberalization, and multinational corporations"
                    },
                    {
                              "id": "c",
                              "text": "only politics"
                    },
                    {
                              "id": "d",
                              "text": "only culture"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Globalization drivers",
                              "statement": "Multiple interconnected factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Globalization is driven by technology (internet, shipping), trade liberalization (WTO), multinational corporations, and financial flows — interconnected forces.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Multiple drivers",
          "commonErrors": [
                    "Attributing to single factor — it's multifaceted."
          ]
},
        },
        {
          id: "aphg-u4-globalization-interdependence-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Comparative advantage theory states that ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "all countries should produce everything"
                    },
                    {
                              "id": "b",
                              "text": "countries should specialize in what they produce most efficiently"
                    },
                    {
                              "id": "c",
                              "text": "trade always harms developing countries"
                    },
                    {
                              "id": "d",
                              "text": "autarky is best"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Comparative advantage",
                              "statement": "Specialize in lowest opportunity cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Comparative advantage: countries should specialize in producing goods where they have lowest opportunity cost — then trade benefits all parties.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's about relative efficiency, not absolute advantage.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Specialize in efficiency",
          "commonErrors": [
                    "Confusing with absolute advantage (produce more of everything)."
          ]
},
        },
        {
          id: "aphg-u4-globalization-interdependence-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If world trade as percentage of GDP grew from 10% in 1950 to 60% today, what is the increase in percentage points? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Percentage points",
                              "answer": 50
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Subtract",
                              "statement": "$60 - 10 = 50$ percentage points."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$60\\% - 10\\% = 50$ percentage points increase in trade/GDP ratio.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $50$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "50",
          "commonErrors": [
                    "Using wrong base or percent vs. percentage points."
          ]
},
        },
        {
          id: "aphg-u4-globalization-interdependence-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how multinational corporations both promote and complicate globalization.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "MNCs",
                              "statement": "Global corporate actors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Promote: MNCs create jobs, transfer technology, integrate economies — Apple in China, Toyota in US; they drive trade and investment flows.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Complicate: MNCs can exploit labor (sweatshops), avoid taxes (tax havens), influence policies (lobbying); their size gives them power rivaling states — 'too big to fail.'",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Net effect: MNCs are engines of globalization but also sources of inequality and accountability challenges — regulation struggles to keep pace.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "MNCs drive globalization but create inequality/accountability issues",
          "commonErrors": [
                    "One-sided — they both promote and complicate."
          ]
},
        },
        {
          id: "aphg-u4-globalization-interdependence-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether globalization benefits all countries equally. Who gains and who loses?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Globalization's distribution",
                              "statement": "Uneven benefits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gains: developed countries get cheaper goods, new markets; developing countries get investment, jobs, technology transfer (China, Vietnam industrialized); consumers worldwide benefit from variety/low prices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Losses: developed lose manufacturing jobs (rust belt); developing face exploitation (low wages, poor conditions); inequality within countries grows (winners vs. losers); environment degraded.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evidence: global inequality between countries decreased (China, India rose) but within-country inequality increased — globalization's gains are unevenly distributed.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: globalization benefits some while harming others — net positive globally but requires policies to distribute gains equitably.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Globalization benefits some, harms others — uneven distribution",
          "commonErrors": [
                    "Universal benefit/harm claims — effects are uneven."
          ]
},
        },
      ],
    },
  ],
};
