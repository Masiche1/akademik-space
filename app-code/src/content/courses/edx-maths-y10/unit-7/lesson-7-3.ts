import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "edm10-u7-lesson-7-3",
  code: "7-3",
  title: "Two-Way Tables and Expected Frequency",
  goal: "I CAN calculate probabilities from two-way tables and find expected frequencies in repeated trials.",
  standards: ["4MA1 8.9", "4MA1 8.10"],
  
  vocabulary: [
    { term: "Two-way table", definition: "A table displaying frequencies for two variables at once, with row and column totals." },
    { term: "Marginal total", definition: "The totals on the edges of a two-way table (row totals and column totals)." },
    { term: "Relative frequency", definition: "The proportion of a total: $\\frac{\\text{frequency}}{\\text{total}}$." },
    { term: "Conditional probability", definition: "Probability of an event given another has occurred, e.g. $P(A|B)=\\frac{\\text{joint}}{\\text{row/column total}}$." },
    { term: "Expected frequency", definition: "The number of times an event is expected in $n$ trials: $E=n\\times p$." },
    { term: "Long-run frequency", definition: "The frequency an event settles to over many trials, approximating its probability." },
  ],
  concepts: [
    {
      id: "edm10-u7-two-way-tables",
      title: "Two-way tables",
      skill: "Calculate probabilities and conditional probabilities from two-way tables.",
      lesson: {
        sections: [
          {
            heading: "Reading a two-way table",
            body: "Rows and columns each represent one variable. The grand total is the bottom-right cell. Marginal totals give the totals for each category. Relative frequency of a cell is $\\frac{\\text{cell}}{\\text{grand total}}$; conditional probability divides by the relevant row or column total instead.",
          },
          {
            heading: "Probabilities from tables",
            body: "$P(\\text{event})=\\frac{\\text{favourable cells}}{\\text{grand total}}$. For 'or' events that overlap, add the cells or use $1-P(\\text{neither})$. For conditional probability like $P(\\text{pet}\\mid\\text{house})$, restrict to the 'house' column total and take the pet cell over it.",
          },
          {
            heading: "Worked example",
            body: "In a survey of 90 adults: 30 have a pet and a house, 20 have a pet but no house, 25 have no pet but a house, 15 have neither. $P(\\text{pet})=\\frac{50}{90}=\\frac{5}{9}$. $P(\\text{no pet}\\mid\\text{house})=\\frac{25}{55}=\\frac{5}{11}$.",
          },
        ],
        keyFormulas: [
          { name: "Relative frequency", statement: "$\\frac{\\text{cell frequency}}{\\text{grand total}}$" },
          { name: "Conditional probability", statement: "$P(A\\mid B)=\\frac{\\text{joint frequency}}{\\text{total for }B}$" },
          { name: "Either/or", statement: "$P(A\\text{ or }B)=1-P(\\text{neither})$" },
        ],
        workedExample: {
          problem: "In the table above (90 adults), find $P(\\text{pet or house})$.",
          solution: "$P(\\text{neither})=\\frac{15}{90}$, so $P(\\text{pet or house})=1-\\frac{15}{90}=\\frac{75}{90}=\\frac{5}{6}$.",
        },
      },
      questions: [
        {
          id: "edm10-u7-twoway-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "In a two-way table, the grand total is found by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "adding all the row totals"
                    },
                    {
                              "id": "b",
                              "text": "adding all the cell frequencies"
                    },
                    {
                              "id": "c",
                              "text": "multiplying the row and column totals"
                    },
                    {
                              "id": "d",
                              "text": "taking the largest cell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Two-way table",
                              "statement": "Grand total = sum of all cells = sum of row totals = sum of column totals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All cells sum to the grand total.",
                              "working": "\\sum\\text{cells}",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Adding all the cell frequencies",
          "commonErrors": [
                    "Multiplying totals."
          ]
},
        },
        {
          id: "edm10-u7-twoway-q2",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "In a survey of 90 adults: 30 have a pet and own a house, 20 have a pet but no house, 25 have no pet but own a house, and 15 have neither. Find the relative frequency of adults who have a pet and own a house.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Relative frequency",
                              "answer": 0.333333,
                              "tolerance": 0.001
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Relative frequency",
                              "statement": "$\\frac{\\text{cell}}{\\text{grand total}}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divide the cell by the total.",
                              "working": "\\frac{30}{90}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "\\frac{1}{3}\\approx0.333",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$\\frac{1}{3}$",
          "commonErrors": [
                    "Dividing by 50 (the pet row total) instead of 90."
          ]
},
        },
        {
          id: "edm10-u7-twoway-q3",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "Using the same survey of 90 adults (30 pet+house, 20 pet only, 25 house only, 15 neither), find the probability that a randomly chosen adult who owns a house does NOT have a pet.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Probability",
                              "answer": 0.454545,
                              "tolerance": 0.001
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Conditional probability",
                              "statement": "$P(\\text{no pet}\\mid\\text{house})=\\frac{25}{55}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Total house owners: $30+25=55$.",
                              "working": "30+25=55",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "House owners without pets: 25.",
                              "working": "\\frac{25}{55}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Simplify.",
                              "working": "\\frac{5}{11}\\approx0.455",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$\\frac{5}{11}$",
          "commonErrors": [
                    "Dividing 25 by 90 instead of by the house-owner total."
          ]
},
        },
        {
          id: "edm10-u7-twoway-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "Using the survey of 90 adults (30 pet+house, 20 pet only, 25 house only, 15 neither), one adult is chosen at random.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find $P(\\text{has a pet})$.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find $P(\\text{owns a house}\\mid\\text{has a pet})$.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Probability from a table",
                              "statement": "Divide favourable cells by grand total (or conditional total)."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Pet owners: $30+20=50$.",
                              "working": "P(\\text{pet})=\\frac{50}{90}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Simplify.",
                              "working": "\\frac{5}{9}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Among the 50 pet owners, 30 own a house.",
                              "working": "P(\\text{house}\\mid\\text{pet})=\\frac{30}{50}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Simplify.",
                              "working": "\\frac{3}{5}=0.6",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $\\frac{5}{9}$ (b) $\\frac{3}{5}$",
          "commonErrors": [
                    "In (b) dividing 30 by 90 instead of by 50."
          ]
},
        },
        {
          id: "edm10-u7-twoway-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "Using the survey of 90 adults (30 pet+house, 20 pet only, 25 house only, 15 neither), work out the following probabilities for a randomly chosen adult.",
          parts: [
          {
                    "label": "a",
                    "prompt": "$P(\\text{has a pet or owns a house})$.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "$P(\\text{has a pet and does not own a house})$.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Find the expected number of pet owners in a random sample of 450 adults from the same population.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Either/or",
                              "statement": "$P(A\\text{ or }B)=1-P(\\text{neither})$."
                    },
                    {
                              "kind": "formula",
                              "name": "Expected frequency",
                              "statement": "$E=n\\times p$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Neither = 15, so pet-or-house = $90-15=75$.",
                              "working": "1-\\frac{15}{90}=\\frac{75}{90}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Simplify.",
                              "working": "\\frac{5}{6}\\approx0.833",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pet without house is a single cell: 20.",
                              "working": "\\frac{20}{90}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Simplify.",
                              "working": "\\frac{2}{9}\\approx0.222",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Expected frequency $=450\\times\\frac{5}{9}$.",
                              "working": "450\\times\\frac{5}{9}=250",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State the answer.",
                              "working": "250",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $\\frac{5}{6}$ (b) $\\frac{2}{9}$ (c) $250$",
          "commonErrors": [
                    "In (a) adding $\\frac{50}{90}+\\frac{55}{90}$ and double-counting the overlap."
          ]
},
        },
        {
          id: "edm10-u7-twoway-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "A school surveyed 200 students about whether they play a musical instrument and whether they take part in sport.\n\n|  | Sport | No sport | Total |\n| --- | --- | --- | --- |\n| Instrument | 45 | 15 | 60 |\n| No instrument | 95 | 45 | 140 |\n| Total | 140 | 60 | 200 |",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down the row and column totals.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the probability that a randomly chosen student plays an instrument.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Find the probability that a student who takes part in sport also plays an instrument.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Find $P(\\text{no instrument or no sport})$.",
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
                              "name": "Two-way table",
                              "statement": "Marginal totals and the grand total."
                    },
                    {
                              "kind": "definition",
                              "name": "Conditional probability",
                              "statement": "Divide by the relevant total."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "State the totals: instrument 60, no instrument 140; sport 140, no sport 60; grand total 200.",
                              "working": "60,140,140,60,200",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Divide the instrument total by 200.",
                              "working": "P=\\frac{60}{200}=\\frac{3}{10}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the answer.",
                              "working": "0.3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Among the 140 sport students, 45 play an instrument.",
                              "working": "P=\\frac{45}{140}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Simplify.",
                              "working": "\\frac{9}{28}\\approx0.321",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State the answer.",
                              "working": "\\frac{9}{28}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Use $1-P(\\text{instrument and sport})=1-\\frac{45}{200}$.",
                              "working": "1-\\frac{45}{200}=\\frac{155}{200}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Simplify.",
                              "working": "\\frac{31}{40}=0.775",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "State the answer.",
                              "working": "0.775",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(b) $0.3$ (c) $\\frac{9}{28}$ (d) $\\frac{31}{40}$",
          "commonErrors": [
                    "In (c) dividing by 200 instead of 140."
          ]
},
        },
      ],
    },
    {
      id: "edm10-u7-expected-frequency",
      title: "Expected frequency",
      skill: "Calculate expected frequencies for repeated trials and compare with observed results.",
      lesson: {
        sections: [
          {
            heading: "Expected frequency",
            body: "If an event has probability $p$ and there are $n$ trials, the expected frequency is $E=n\\times p$. For example, rolling a fair die 300 times, the expected number of sixes is $300\\times\\frac{1}{6}=50$.",
          },
          {
            heading: "Interpreting expected frequency",
            body: "The expected frequency is an average over many trials — it does not guarantee exactly $E$ occurrences. Observed frequencies in a small number of trials will differ; the difference should shrink as trials increase.",
          },
          {
            heading: "Relative frequency as probability",
            body: "From experimental data, relative frequency $=\\frac{\\text{occurrences}}{\\text{trials}}$ estimates probability. Over many trials it approaches the true probability. Expected frequency can then be predicted for new experiments using this estimate.",
          },
        ],
        keyFormulas: [
          { name: "Expected frequency", statement: "$E=n\\times p$" },
          { name: "Relative frequency", statement: "$\\frac{\\text{occurrences}}{\\text{trials}}$" },
        ],
        workedExample: {
          problem: "A biased coin lands heads with probability $0.3$. It is tossed 200 times. How many heads are expected?",
          solution: "$E=200\\times0.3=60$ heads.",
        },
      },
      questions: [
        {
          id: "edm10-u7-expectfreq-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "The expected frequency of an event in $n$ trials is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$n \\times p$"
                    },
                    {
                              "id": "b",
                              "text": "$n \\div p$"
                    },
                    {
                              "id": "c",
                              "text": "$p \\div n$"
                    },
                    {
                              "id": "d",
                              "text": "$n+p$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Expected frequency",
                              "statement": "$E=n\\times p$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiply trials by probability.",
                              "working": "E=np",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $n \\times p$",
          "commonErrors": [
                    "Dividing instead of multiplying."
          ]
},
        },
        {
          id: "edm10-u7-expectfreq-q2",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "A fair six-sided die is rolled 300 times. Calculate the expected number of times it shows a six.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Expected number",
                              "answer": 50
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Expected frequency",
                              "statement": "$E=n\\times p=300\\times\\frac16$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Set up the calculation.",
                              "working": "E=300\\times\\frac{1}{6}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "E=50",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$50$",
          "commonErrors": [
                    "Using probability $\\frac16$ of each face but for all faces at once."
          ]
},
        },
        {
          id: "edm10-u7-expectfreq-q3",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "A biased coin lands heads with probability $0.3$. The coin is tossed 200 times.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the expected number of heads.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the expected number of tails.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "In one experiment, 55 heads were recorded. Is this surprising? Explain briefly.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Expected frequency",
                              "statement": "$E=n\\times p$; tails probability is $1-0.3=0.7$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Multiply.",
                              "working": "200\\times0.3=60",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use $p=0.7$ for tails.",
                              "working": "200\\times0.7=140",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "55 is below the expected 60 but within reasonable variation for 200 tosses; not strongly surprising.",
                              "working": "\\text{55 vs 60 — plausible}",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $60$ (b) $140$ (c) 55 is plausible, not strongly surprising",
          "commonErrors": [
                    "In (b) using $200-60=140$ is fine, but some students use $p=0.3$ for tails."
          ]
},
        },
        {
          id: "edm10-u7-expectfreq-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "A spinner has four sections with probabilities: red $\\frac{1}{2}$, blue $\\frac{1}{4}$, green $\\frac{1}{8}$ and yellow $\\frac{1}{8}$. The spinner is spun 400 times.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the expected frequency of red.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the expected frequency of blue.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Calculate the expected frequency of green and yellow combined.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Expected frequency",
                              "statement": "$E=n\\times p$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Multiply.",
                              "working": "400\\times\\frac{1}{2}=200",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Multiply.",
                              "working": "400\\times\\frac{1}{4}=100",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Add the probabilities: $\\frac{1}{8}+\\frac{1}{8}=\\frac{1}{4}$.",
                              "working": "400\\times\\frac{1}{4}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evaluate.",
                              "working": "100",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $200$ (b) $100$ (c) $100$",
          "commonErrors": [
                    "In (c) calculating each separately and forgetting they asked for combined."
          ]
},
        },
        {
          id: "edm10-u7-expectfreq-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "A biased coin lands heads with probability $0.35$. It is tossed 400 times.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the expected number of heads.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the expected number of tails.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "In a trial, 120 heads were recorded. Comment on this result compared with the expected frequency.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Expected frequency",
                              "statement": "$E=n\\times p$; tails probability $=0.65$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Set up.",
                              "working": "400\\times0.35",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Evaluate.",
                              "working": "140",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use $p=0.65$ for tails.",
                              "working": "400\\times0.65=260",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the answer.",
                              "working": "260",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Compare 120 with the expected 140.",
                              "working": "120<140",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Comment: fewer heads than expected, but the difference of 20 may still be within normal variation over 400 tosses.",
                              "working": "\\text{below expected but plausible}",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $140$ (b) $260$ (c) 120 heads is below expected; plausible variation",
          "commonErrors": [
                    "In (c) saying the coin is definitely biased — expected frequency is an average, not a guarantee."
          ]
},
        },
        {
          id: "edm10-u7-expectfreq-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "A shop estimates that $60\\%$ of its customers pay by card. In one day, 250 customers visit the shop.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the expected number of customers paying by card.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the expected number paying by cash or other methods.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "On one day, 140 customers paid by card. Compare this with the expected frequency.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain what is meant by 'expected frequency' and why it does not have to be exact.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Calculate the expected number of card payments over a 5-day week (1250 customers).",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Expected frequency",
                              "statement": "$E=n\\times p$."
                    },
                    {
                              "kind": "definition",
                              "name": "Long-run frequency",
                              "statement": "Observed frequency approaches probability over many trials."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Set up.",
                              "working": "250\\times0.6",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Evaluate.",
                              "working": "150",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use $p=0.4$ for non-card.",
                              "working": "250\\times0.4=100",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the answer.",
                              "working": "100",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Compare 140 with 150.",
                              "working": "140<150",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Comment: fewer card payments than expected, a difference of 10 — plausible daily variation.",
                              "working": "\\text{slightly below expected}",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Define expected frequency as the average number of occurrences over many trials.",
                              "working": "\\text{long-run average}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Explain it is not exact because individual trials vary.",
                              "working": "\\text{variation between days}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Multiply.",
                              "working": "1250\\times0.6",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Evaluate.",
                              "working": "750",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $150$ (b) $100$ (c) 140 is below expected but plausible (d) long-run average, not exact (e) $750$",
          "commonErrors": [
                    "Treating expected frequency as a fixed quota."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edm10-u7-probnotes-notes",
      title: "Two-way tables and expected frequency — notes",
      summary: "Probabilities from two-way tables (joint, marginal, conditional) and expected frequency E = n × p.",
      sections: [
        { heading: "Key idea", body: "Conditional probability divides by the relevant row or column total, not the grand total." },
        { heading: "Expected frequency", body: "$E=n\\times p$; it is a long-run average, not a guarantee." },
        { heading: "Relative frequency", body: "Observed relative frequency estimates probability over many trials." },
      ],
    },
  ],
};
