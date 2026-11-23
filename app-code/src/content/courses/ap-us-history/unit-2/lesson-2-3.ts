import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "apush-u2-lesson-2-3",
  code: "2-3",
  title: "Gilded Age and Progressivism",
  goal: "I CAN explain industrialization, immigration, and Progressive reform.",
  standards: ["Period 6"],
  vocabulary: [
    { term: "Gilded Age", definition: "1870s-1900 era of rapid industrial growth, corruption, and inequality." },
    { term: "Social Darwinism", definition: "Belief that survival of the fittest justified inequality — used to oppose reform." },
    { term: "Progressive Era", definition: "1890s-1920s reform movement targeting corruption, monopolies, and social problems." },
    { term: "Muckrakers", definition: "Journalists exposing corruption and social ills (e.g., Upton Sinclair's 'The Jungle')." },
    { term: "Trust-busting", definition: "Breaking up monopolies under antitrust laws (Sherman Act 1890)." },
    { term: "19th Amendment", definition: "1920 amendment granting women the vote." },
  ],
  concepts: [
    {
      id: "apush-u2-gilded-age-progressivism",
      title: "Industrialization, immigration, and reform",
      skill: "Explain the tensions of industrial growth and the Progressive response.",
      lesson: {
        sections: [
          {
            heading: "Industrial growth and inequality",
            body: "Railroads, steel, and oil created vast fortunes (Rockefeller, Carnegie) and exploited workers; immigrants provided cheap labor but faced nativism.",
          },
          {
            heading: "Progressive reform",
            body: "Muckrakers exposed abuses; reformers pushed antitrust enforcement, food/drug safety (Pure Food and Drug Act 1906), women's suffrage, and direct election of senators (17th Amendment 1913).",
          },
        ],
        keyFormulas: [
          { name: "Key reforms", statement: "Sherman Act 1890 → Progressive Era → 17th Am. 1913, 18th Am. 1919, 19th Am. 1920" },
          { name: "Labor conflicts", statement: "Haymarket 1886 → Homestead 1892 → Pullman 1894" },
        ],
        workedExample: {
          problem: "How did 'The Jungle' lead to federal food regulation?",
          solution: "Sinclair exposed unsanitary meatpacking conditions intending to highlight labor exploitation, but public outrage focused on food safety — prompting the Meat Inspection Act and Pure Food and Drug Act (1906).",
        },
      },
      questions: [
        {
          id: "apush-u2-gilded-age-progressivism-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Muckrakers were ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "corrupt political bosses"
                    },
                    {
                              "id": "b",
                              "text": "journalists who exposed corruption and social problems"
                    },
                    {
                              "id": "c",
                              "text": "factory owners"
                    },
                    {
                              "id": "d",
                              "text": "immigrant labor organizers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Muckrakers",
                              "statement": "Reform-minded journalists (Sinclair, Tarbell, Lincoln Steffens)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Muckrakers like Upton Sinclair ('The Jungle') and Ida Tarbell (Standard Oil exposé) used investigative journalism to spur reform.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Investigative journalists",
          "commonErrors": [
                    "Confusing them with the corrupt politicians they exposed."
          ]
},
        },
        {
          id: "apush-u2-gilded-age-progressivism-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Sherman Antitrust Act (1890) was intended to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "regulate child labor"
                    },
                    {
                              "id": "b",
                              "text": "prohibit monopolies and restraint of trade"
                    },
                    {
                              "id": "c",
                              "text": "create a national income tax"
                    },
                    {
                              "id": "d",
                              "text": "grant women the vote"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sherman Antitrust Act",
                              "statement": "Made monopolization illegal; initially weakly enforced."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It outlawed trusts and monopolies 'in restraint of trade'; weak early enforcement limited it until Progressives strengthened its use (e.g., breaking up Standard Oil).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It reflected growing public concern about concentrated corporate power.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Prohibit monopolies",
          "commonErrors": [
                    "Thinking it was immediately effective — enforcement was weak until the Progressive Era."
          ]
},
        },
        {
          id: "apush-u2-gilded-age-progressivism-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Between 1870 and 1900, the US population grew from about 39 million to 76 million. Enter the approximate percent increase (e.g., 95 for 95%).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Increase %",
                              "answer": 95
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Percent change",
                              "statement": "$\\frac{76-39}{39} \\times 100 \\approx 94.9\\%$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$76 - 39 = 37$ million; $37/39 \\times 100 \\approx 94.9\\%$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $95\\%$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "95",
          "commonErrors": [
                    "Dividing by 76 instead of 39 (gives ~49%)."
          ]
},
        },
        {
          id: "apush-u2-gilded-age-progressivism-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how industrialization produced both economic growth and social conflict in the Gilded Age, citing labor disputes and immigration.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Industrialization's dual effects",
                              "statement": "Growth alongside exploitation and conflict."
                    },
                    {
                              "kind": "skill",
                              "name": "Causal explanation",
                              "statement": "Connect economic change to social consequences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Growth: railroads, steel, and oil drove GDP and created jobs; by 1900 the US had the world's largest industrial economy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Conflict: workers faced long hours, dangerous conditions, and wage cuts; strikes at Haymarket (1886), Homestead (1892), and Pullman (1894) were violently suppressed; corporations used strikebreakers and Pinkerton agents.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Immigration: ~20 million immigrants arrived 1870-1920, providing labor but facing nativism (Chinese Exclusion 1882) and urban poverty.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Industrialization brought growth but labor conflict and nativism",
          "commonErrors": [
                    "Celebrating growth without addressing exploitation and conflict."
          ]
},
        },
        {
          id: "apush-u2-gilded-age-progressivism-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess the effectiveness of Progressive Era reforms. Which achieved lasting change, which were limited, and why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Progressive reforms",
                              "statement": "Mixed record of lasting vs. limited reforms."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical evaluation",
                              "statement": "Weigh reform outcomes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lasting: food/drug safety (Pure Food and Drug Act), direct election of senators (17th Am.), women's suffrage (19th Am.), income tax (16th Am.) — all still in force.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Limited: trust-busting had mixed results (Standard Oil broken up but corporations persisted); many reforms addressed symptoms not causes of inequality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Social limitations: Progressivism often excluded African Americans (some Progressives supported segregation) and recent immigrants — reform was uneven.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Progressivism achieved significant structural reforms but its limits on race and its failure to address wealth inequality showed its middle-class, white-led character.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Progressivism won lasting reforms but was limited by race and class blind spots",
          "commonErrors": [
                    "Claiming all reforms succeeded or all failed — the record is mixed."
          ]
},
        },
      ],
    },
  ],
};
