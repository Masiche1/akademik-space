import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "apush-u1-lesson-1-3",
  code: "1-3",
  title: "The Early Republic",
  goal: "I CAN analyze the political and economic conflicts of 1789-1820.",
  standards: ["Period 4"],
  vocabulary: [
    { term: "Federalists", definition: "Hamilton, Adams, Jay — favored strong central government and industrial economy." },
    { term: "Democratic-Republicans", definition: "Jefferson, Madison, Monroe — favored states' rights, agrarianism, strict construction." },
    { term: "Alien and Sedition Acts", definition: "1798 laws restricting immigrants and criminalizing criticism of the government." },
    { term: "Marbury v. Madison", definition: "1803 Supreme Court case establishing judicial review." },
    { term: "Louisiana Purchase", definition: "1803 acquisition doubling the nation's size for $15 million." },
    { term: "Embargo Act", definition: "1807 ban on foreign trade that devastated New England's economy." },
  ],
  concepts: [
    {
      id: "apush-u1-early-republic",
      title: "Federalism, parties, and expansion",
      skill: "Explain the emergence of political parties and territorial expansion.",
      lesson: {
        sections: [
          {
            heading: "First party system",
            body: "Hamilton's financial program (national bank, tariffs, assumption of state debts) divided Federalists from Jeffersonian Republicans — the first American party divide.",
          },
          {
            heading: "Expansion and foreign policy",
            body: "The Louisiana Purchase (1803) and War of 1812 tested the young nation; the Hartford Convention and Treaty of Ghent ended the war with status quo, fueling nationalism.",
          },
        ],
        keyFormulas: [
          { name: "Hamilton's program", statement: "National bank + tariffs + assumption of debts" },
          { name: "Party divide", statement: "Federalists (strong govt, industry) vs. Democratic-Republicans (states' rights, agrarian)" },
        ],
        workedExample: {
          problem: "Why did the Louisiana Purchase create constitutional controversy?",
          solution: "Jefferson believed in strict construction — the Constitution didn't explicitly grant power to buy land. He acted pragmatically, reasoning the purchase served the public good (removing a foreign power, securing the frontier), showing the gap between constitutional theory and governing practice.",
        },
      },
      questions: [
        {
          id: "apush-u1-early-republic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Alexander Hamilton's financial program included all of the following EXCEPT ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a national bank"
                    },
                    {
                              "id": "b",
                              "text": "assumption of state debts"
                    },
                    {
                              "id": "c",
                              "text": "protective tariffs"
                    },
                    {
                              "id": "d",
                              "text": "abolition of slavery"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Hamilton's program",
                              "statement": "Bank, tariffs, assumption — industrial growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hamilton's program (bank, tariffs, debt assumption) aimed at industrial growth; slavery was not part of it.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Abolition of slavery",
          "commonErrors": [
                    "Confusing Hamilton's economic program with moral reform movements."
          ]
},
        },
        {
          id: "apush-u1-early-republic-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Marbury v. Madison (1803) established ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the power of judicial review"
                    },
                    {
                              "id": "b",
                              "text": "the right to bear arms"
                    },
                    {
                              "id": "c",
                              "text": "federal supremacy over states"
                    },
                    {
                              "id": "d",
                              "text": "the electoral college"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Judicial review",
                              "statement": "Courts may invalidate laws that violate the Constitution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chief Justice Marshall ruled the Supreme Court could strike down unconstitutional laws — establishing judicial review as a check on Congress and the president.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This made the judiciary a co-equal branch able to check the other two.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Judicial review",
          "commonErrors": [
                    "Saying it established 'federal supremacy' — that's McCulloch v. Maryland."
          ]
},
        },
        {
          id: "apush-u1-early-republic-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Louisiana Purchase doubled the size of the United States. If the territory added was about 827,000 square miles, and the nation was about 827,000 square miles before, what was the total area after? Enter in thousands of sq mi (e.g., 1654 for 1,654,000).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Total (thousands)",
                              "answer": 1654
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Doubling",
                              "statement": "$827 + 827 = 1654$ thousand sq mi."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$827 + 827 = 1654$ thousand square miles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $1654$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1654",
          "commonErrors": [
                    "Adding instead of doubling or unit errors."
          ]
},
        },
        {
          id: "apush-u1-early-republic-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the Federalist and Democratic-Republican visions for the new nation — government power, economy, and constitutional interpretation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "First party system",
                              "statement": "Hamilton vs. Jefferson on the nation's future."
                    },
                    {
                              "kind": "skill",
                              "name": "Comparison",
                              "statement": "Weigh two competing visions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Federalists (Hamilton, Adams): strong central government, national bank, tariffs, loose construction of the Constitution to promote industrial growth and national credit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Democratic-Republicans (Jefferson, Madison): limited federal government, states' rights, strict construction, agrarian economy, suspicion of centralized power.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both agreed on republican government and individual liberty but disagreed on how much power the national government should wield.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Federalists: strong govt + industry; Republicans: states' rights + agrarian",
          "commonErrors": [
                    "Treating the parties as identical or only differing on foreign policy."
          ]
},
        },
        {
          id: "apush-u1-early-republic-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess the significance of the War of 1812 for American nationalism and foreign policy. What did it resolve, and what problems did it leave?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "War of 1812",
                              "statement": "Second war with Britain over maritime rights and expansion."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical assessment",
                              "statement": "Weigh consequences and limitations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Causes: British impressment of sailors, trade restrictions, and western expansion conflicts (Tecumseh's confederacy) pushed Congress to declare war.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Consequences: Treaty of Ghent (1814) restored status quo — no territorial gains; but American victories (New Orleans, Lake Erie) fueled nationalism and the 'Era of Good Feelings.'",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It ended British support for Native resistance (Tecumseh died), opening the Old Northwest to American settlement.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Limitations: unresolved maritime grievances, heavy national debt, and sectional tensions (Missouri Crisis 1819) showed nationalism's limits.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "War boosted nationalism but settled little diplomatically; exposed sectional fractures",
          "commonErrors": [
                    "Claiming the US 'won' decisively — the treaty was a status quo ante bellum."
          ]
},
        },
      ],
    },
  ],
};
