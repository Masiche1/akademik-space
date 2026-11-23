import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "ech10-u10-lesson-10-2",
  code: "10-2",
  title: "Carboxylic Acids and Esters",
  goal: "I CAN describe carboxylic acids, write their reactions and explain ester formation and uses.",
  standards: ["4CH1 4.34C", "4CH1 4.35C", "4CH1 4.36C", "4CH1 4.37C", "4CH1 4.38C", "4CH1 4.39C", "4CH1 4.40C", "4CH1 4.41C", "4CH1 4.42C"],
  
  vocabulary: [
    { term: "Carboxylic acid", definition: "An organic acid containing the carboxyl functional group -COOH." },
    { term: "Ethanoic acid", definition: "The carboxylic acid in vinegar; also called acetic acid." },
    { term: "Ester", definition: "An organic compound containing the -COO- functional group, often with a fruity smell." },
    { term: "Esterification", definition: "The reaction of an alcohol with a carboxylic acid in the presence of an acid catalyst to form an ester and water." },
    { term: "Ethyl ethanoate", definition: "The ester formed from ethanol and ethanoic acid; used in flavourings and perfumes." },
    { term: "Volatile", definition: "Evaporates easily, which is why esters can be smelled." },
  ],
  concepts: [
    {
      id: "ech10-u10-carboxylic-acids",
      title: "Carboxylic acids",
      skill: "Identify the -COOH group, name simple carboxylic acids and describe their reactions with metals, bases and carbonates.",
      lesson: {
        sections: [
          {
            heading: "Carboxylic acids",
            body: "Carboxylic acids contain the **-COOH** functional group. Names end in **-oic acid**. Examples up to four carbons include methanoic acid HCOOH, ethanoic acid CH3COOH, propanoic acid CH3CH2COOH and butanoic acid CH3CH2CH2COOH. They are acidic but weaker than mineral acids such as hydrochloric acid. Vinegar is an aqueous solution containing ethanoic acid.",
          },
          {
            heading: "Reactions",
            body: "Carboxylic acids react with **metals** to give a salt and hydrogen, with **bases** to give a salt and water, and with **carbonates** to give a salt, water and carbon dioxide. For example, ethanoic acid reacts with sodium carbonate to form sodium ethanoate, water and CO2.",
          },
        ],
        keyFormulas: [
          { name: "Functional group", statement: "-COOH" },
          { name: "Ethanoic acid", statement: "CH3COOH; in vinegar" },
          { name: "With carbonate", statement: "acid + carbonate -> salt + water + CO2" },
        ],
        workedExample: {
          problem: "Write the reaction between ethanoic acid and sodium carbonate.",
          solution: "2CH3COOH + Na2CO3 -> 2CH3COONa + H2O + CO2. A salt, water and carbon dioxide are formed.",
        },
      },
      questions: [
        {
          id: "ech10-u10-carboxylic-acids-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which group identifies a carboxylic acid?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "-OH"
                    },
                    {
                              "id": "b",
                              "text": "-COOH"
                    },
                    {
                              "id": "c",
                              "text": "-COO-"
                    },
                    {
                              "id": "d",
                              "text": "C=C"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Carboxylic acid",
                              "statement": "Contains the carboxyl group -COOH."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Carboxylic acids contain -COOH.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) -COOH",
          "commonErrors": [
                    "Confusing -COOH with alcohol -OH or ester -COO-."
          ]
},
        },
        {
          id: "ech10-u10-carboxylic-acids-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the carboxylic acid in vinegar and give its formula.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ethanoic acid",
                              "statement": "CH3COOH; the acid in vinegar."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ethanoic acid (also called acetic acid).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Formula CH3COOH or C2H4O2.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Ethanoic acid, CH3COOH."
},
        },
        {
          id: "ech10-u10-carboxylic-acids-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the reactions of carboxylic acids with metals, bases and carbonates.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Acid reactions",
                              "statement": "Carboxylic acids behave as acids but are weaker than mineral acids."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "With metals: salt + hydrogen, e.g. acid + Mg -> salt + H2.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "With bases: salt + water (neutralisation).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "With carbonates: salt + water + carbon dioxide.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Metals→salt+H2; bases→salt+water; carbonates→salt+water+CO2."
},
        },
        {
          id: "ech10-u10-carboxylic-acids-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Ethanoic acid reacts with sodium carbonate, sodium hydroxide and magnesium.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write an equation for the reaction with sodium carbonate.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the products for the reactions with sodium hydroxide and magnesium.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Acid reactions",
                              "statement": "Carbonate gives CO2; base gives water; metal gives H2."
                    },
                    {
                              "kind": "definition",
                              "name": "Salt",
                              "statement": "Metal ion replaces acidic H."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 2CH3COOH + Na2CO3 -> 2CH3COONa + H2O + CO2.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The equation balances atoms and charge.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) With NaOH: sodium ethanoate + water.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) With Mg: magnesium ethanoate + hydrogen.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Observations: effervescence with carbonate/metal; no gas with base.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Carbonate→salt+water+CO2; NaOH→salt+water; Mg→salt+H2."
},
        },
        {
          id: "ech10-u10-carboxylic-acids-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Ethanoic acid is a weak acid compared with hydrochloric acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what is meant by a weak acid.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe how ethanoic acid would affect indicators and react with a carbonate.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Weak acid",
                              "statement": "Only partially ionised in water."
                    },
                    {
                              "kind": "property",
                              "name": "Indicators",
                              "statement": "Acids turn litmus red and methyl orange pink/orange."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) A weak acid only partially dissociates into ions in water.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) It still has pH below 7 but higher than a strong acid at the same concentration.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Ethanoic acid is weak compared with HCl.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) It turns blue litmus red and methyl orange pink.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) It reacts with carbonates to produce CO2 effervescence.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) The reaction rate may be slower than with a strong mineral acid.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) The salt formed contains the ethanoate ion.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Weak acid partially ionises; acidic indicators and carbonate reactions still occur."
},
        },
        {
          id: "ech10-u10-carboxylic-acids-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student tests four solutions: ethanoic acid, hydrochloric acid, sodium ethanoate and water.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Predict which solutions are acidic, neutral or alkaline and justify each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Describe tests to distinguish ethanoic acid from hydrochloric acid.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why vinegar is a weak acid but still acidic enough for cooking preservation.",
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
                              "name": "Weak acid",
                              "statement": "Ethanoic acid partially ionises."
                    },
                    {
                              "kind": "method",
                              "name": "Distinguishing acids",
                              "statement": "Both give H+ but differ in strength/behaviour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Ethanoic and hydrochloric acids are acidic; water neutral; sodium ethanoate alkaline (salt of weak acid).",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Both acids turn indicators red/pink.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Sodium ethanoate solution is slightly alkaline because ethanoate is a weak base.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Water has pH 7 and does not change indicators.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Add sodium carbonate: both effervesce, so that does not distinguish them.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Measure pH or reaction rate with a metal: HCl is stronger/faster.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Ethanoic acid has a distinctive smell and is part of vinegar.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Vinegar contains dilute ethanoic acid, pH below 7.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) The acidity inhibits many microbes and enzymes.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) It is mild enough to be safe in food.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Ethanoic/HCl acidic; water neutral; sodium ethanoate alkaline; vinegar mildly acidic and antimicrobial."
},
        },
      ],
    },
    {
      id: "ech10-u10-esters",
      title: "Esters and esterification",
      skill: "Write esterification equations, name simple esters and explain their uses.",
      lesson: {
        sections: [
          {
            heading: "Ester formation",
            body: "An **ester** contains the **-COO-** functional group. It forms by **esterification**: an alcohol reacts with a carboxylic acid in the presence of an acid catalyst (often concentrated sulfuric acid) to give an ester and water. For example, ethanol + ethanoic acid -> ethyl ethanoate + water.",
          },
          {
            heading: "Naming and uses",
            body: "The ester name combines the alcohol part first and the acid part second: ethyl ethanoate = ethanol + ethanoic acid. Esters are often **volatile** and have **fruity smells**, so they are used in flavourings, perfumes and solvents. Ethyl ethanoate can be prepared experimentally by warming ethanol and ethanoic acid with concentrated sulfuric acid.",
          },
        ],
        keyFormulas: [
          { name: "Functional group", statement: "-COO-" },
          { name: "Esterification", statement: "alcohol + carboxylic acid -> ester + water" },
          { name: "Ethyl ethanoate", statement: "from ethanol + ethanoic acid" },
          { name: "Uses", statement: "flavourings, perfumes, solvents" },
        ],
        workedExample: {
          problem: "Write the esterification equation for ethanol and ethanoic acid and name the ester.",
          solution: "C2H5OH + CH3COOH -> CH3COOC2H5 + H2O. The ester is ethyl ethanoate.",
        },
      },
      questions: [
        {
          id: "ech10-u10-esters-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which group is present in esters?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "-OH"
                    },
                    {
                              "id": "b",
                              "text": "-COOH"
                    },
                    {
                              "id": "c",
                              "text": "-COO-"
                    },
                    {
                              "id": "d",
                              "text": "C=C"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ester",
                              "statement": "Contains the -COO- functional group."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Esters contain -COO-.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) -COO-",
          "commonErrors": [
                    "Confusing ester -COO- with carboxylic acid -COOH."
          ]
},
        },
        {
          id: "ech10-u10-esters-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the equation for esterification of ethanol with ethanoic acid.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Esterification",
                              "statement": "alcohol + carboxylic acid -> ester + water"
                    },
                    {
                              "kind": "definition",
                              "name": "Ethyl ethanoate",
                              "statement": "Ethanol + ethanoic acid ester."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "C2H5OH + CH3COOH -> CH3COOC2H5 + H2O.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The ester is ethyl ethanoate and water is also formed.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "C2H5OH + CH3COOH -> CH3COOC2H5 + H2O; ethyl ethanoate."
},
        },
        {
          id: "ech10-u10-esters-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "An ester is formed from methanol and propanoic acid. Name the ester and write its displayed/structural formula.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ester naming",
                              "statement": "Alcohol part first, acid part second."
                    },
                    {
                              "kind": "formula",
                              "name": "Ester structure",
                              "statement": "RCOOR' contains -COO-."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Name: methyl propanoate.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Structure: CH3CH2COOCH3, showing the -COO- group.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It contains the -COO- group.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Methyl propanoate, CH3CH2COOCH3."
},
        },
        {
          id: "ech10-u10-esters-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student prepares ethyl ethanoate by warming ethanol with ethanoic acid and concentrated sulfuric acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the role of concentrated sulfuric acid.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe how to collect and identify the ester product.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Esterification",
                              "statement": "Acid catalyst speeds ester formation."
                    },
                    {
                              "kind": "property",
                              "name": "Esters",
                              "statement": "Volatile, fruity-smelling liquids."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Concentrated sulfuric acid acts as a catalyst.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) It also absorbs water, shifting equilibrium towards the ester.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Warm the mixture gently in a water bath.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Ethyl ethanoate distils off because it is volatile.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) It has a fruity smell and sweet taste, characteristic of esters.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    }
          ],
          "finalAnswer": "H2SO4 catalyst/dehydrating agent; ester collected by distillation; fruity smell."
},
        },
        {
          id: "ech10-u10-esters-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Esters are used in food flavourings and perfumes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why esters are useful in flavourings and perfumes.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe how an ester could be identified from its alcohol and acid components.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Volatility",
                              "statement": "Esters evaporate easily and carry smell."
                    },
                    {
                              "kind": "definition",
                              "name": "Esterification",
                              "statement": "Alcohol + carboxylic acid -> ester + water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Esters are volatile and have distinctive fruity smells.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Small amounts can flavour foods without adding much bulk.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) They are used in perfumes because they evaporate and are detected by smell.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Identify the alcohol part from the first name, e.g. ethyl from ethanol.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Identify the acid part from the second name, e.g. ethanoate from ethanoic acid.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) The ester is formed by removing water between them.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Reverse deduction requires recognising the -COO- group.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Esters volatile/fruity; name gives alcohol+acid parts; reverse via -COO-."
},
        },
        {
          id: "ech10-u10-esters-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Ethyl ethanoate is formed from ethanol and ethanoic acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the esterification equation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the Mr of ethyl ethanoate using C=12, H=1, O=16.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why esters are often liquids at room temperature and have smells.",
                    "marks": 5
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Esterification",
                              "statement": "alcohol + acid -> ester + water"
                    },
                    {
                              "kind": "formula",
                              "name": "Molar mass",
                              "statement": "Mr = sum of Ar values."
                    },
                    {
                              "kind": "property",
                              "name": "Volatility",
                              "statement": "Small ester molecules evaporate easily."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) C2H5OH + CH3COOH -> CH3COOC2H5 + H2O.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) An acid catalyst and heat are used.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Ethyl ethanoate formula C4H8O2.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Mr = 4(12) + 8(1) + 2(16) = 48 + 8 + 32 = 88.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Unit g/mol or no unit depending on context; Mr is dimensionless.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Esters have small molecules with weak intermolecular forces.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Weak forces mean low boiling points and volatility.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Volatile molecules reach the nose and are smelled.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Different esters have different shapes and therefore different smells.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) This is why esters are used in flavourings and perfumes.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Equation; Mr(C4H8O2)=88; volatile small molecules give smell."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u10-acids-esters-notes",
      title: "Carboxylic acids and esters — notes",
      summary: "Carboxylic acids contain -COOH and react as weak acids. Esters contain -COO- and form from alcohol + acid + water.",
      sections: [
        { heading: "Key idea", body: "-COOH = acid; -COO- = ester; esterification removes water." },
        { heading: "Uses", body: "Ethanoic acid in vinegar; esters in flavourings/perfumes." },
      ],
    },
  ],
};
