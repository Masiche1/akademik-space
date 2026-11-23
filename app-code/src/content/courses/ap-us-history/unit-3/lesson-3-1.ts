import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apush-u3-lesson-3-1",
  code: "3-1",
  title: "World War I and the Roaring Twenties",
  goal: "I CAN explain US involvement in WWI and the social conflicts of the 1920s.",
  standards: ["Period 7"],
  vocabulary: [
    { term: "Zimmermann Telegram", definition: "1917 German message proposing alliance with Mexico — pushed US into WWI." },
    { term: "Espionage Act", definition: "1917 law criminalizing interference with the war effort — used against dissenters." },
    { term: "Great Migration", definition: "1916-1970 movement of ~6 million African Americans from South to North." },
    { term: "Scopes Trial", definition: "1925 case testing Tennessee's ban on teaching evolution — symbol of cultural conflict." },
    { term: "Prohibition", definition: "1920-1933 constitutional ban on alcohol (18th Amendment)." },
    { term: "Harlem Renaissance", definition: "1920s flourishing of African American art, literature, and music." },
  ],
  concepts: [
    {
      id: "apush-u3-world-war-1",
      title: "WWI and the 1920s",
      skill: "Explain America's entry into WWI and the decade's social tensions.",
      lesson: {
        sections: [
          {
            heading: "Entering WWI",
            body: "Despite initial neutrality, unrestricted submarine warfare and the Zimmermann Telegram pushed the US to declare war in April 1917; the war ended with the Treaty of Versailles and Wilson's failed League of Nations bid.",
          },
          {
            heading: "1920s tensions",
            body: "Prosperity coexisted with nativism (immigration quotas), Prohibition's failure, the Scopes Trial's culture war, and the Great Migration reshaping cities.",
          },
        ],
        keyFormulas: [
          { name: "WWI turning points", statement: "Zimmermann Telegram 1917 → US entry → Armistice 1918" },
          { name: "1920s conflicts", statement: "Prohibition + immigration quotas + Scopes Trial + Great Migration" },
        ],
        workedExample: {
          problem: "Why did the US reject the League of Nations despite Wilson's advocacy?",
          solution: "Henry Cabot Lodge and Senate isolationists feared the League would drag America into foreign wars and infringe on sovereignty; Wilson refused to compromise, and the Senate rejected the treaty.",
        },
      },
      questions: [
        {
          id: "apush-u3-world-war-1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Zimmermann Telegram contributed to US entry into WWI by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "revealing British war plans"
                    },
                    {
                              "id": "b",
                              "text": "proposing a German-Mexican alliance against the US"
                    },
                    {
                              "id": "c",
                              "text": "announcing unrestricted submarine warfare"
                    },
                    {
                              "id": "d",
                              "text": "declaring war on Britain"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Zimmermann Telegram",
                              "statement": "German proposal to ally with Mexico if US entered war."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The telegram promised Mexico Texas, New Mexico, and Arizona if it joined Germany — inflaming American public opinion for war.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "German-Mexican alliance proposal",
          "commonErrors": [
                    "Confusing it with unrestricted submarine warfare (also a cause)."
          ]
},
        },
        {
          id: "apush-u3-world-war-1-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Scopes Trial (1925) centered on ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Prohibition enforcement"
                    },
                    {
                              "id": "b",
                              "text": "a teacher's right to teach evolution"
                    },
                    {
                              "id": "c",
                              "text": "women's suffrage"
                    },
                    {
                              "id": "d",
                              "text": "labor union rights"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Scopes Trial",
                              "statement": "Tennessee's Butler Act banned teaching evolution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "John Scopes was prosecuted for teaching Darwin's theory; Clarence Darrow vs. William Jennings Bryan became a national spectacle symbolizing science vs. fundamentalism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Scopes was convicted (later overturned) but the trial exposed deep cultural divisions over modernity.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Teaching evolution in public schools",
          "commonErrors": [
                    "Thinking it was about Prohibition — that was a separate 1920s conflict."
          ]
},
        },
        {
          id: "apush-u3-world-war-1-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "About 6 million African Americans migrated North between 1916 and 1970. If 1.5 million moved during WWI-era (1916-1920), what percent of the total was that era? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Percent",
                              "answer": 25
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Percentage",
                              "statement": "$1.5/6 \\times 100 = 25\\%$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1.5 / 6 \\times 100 = 25\\%$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $25$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "25",
          "commonErrors": [
                    "Using wrong total or decimal errors."
          ]
},
        },
        {
          id: "apush-u3-world-war-1-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how Prohibition illustrated the limits of moral reform legislation, citing enforcement problems and unintended consequences.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Prohibition",
                              "statement": "18th Amendment banned alcohol 1920-33."
                    },
                    {
                              "kind": "skill",
                              "name": "Causal explanation",
                              "statement": "Link policy to unintended outcomes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The 18th Amendment and Volstead Act banned manufacture and sale of alcohol — a moral reform backed by Anti-Saloon League and women's groups.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Enforcement proved impossible: bootlegging, speakeasies, and organized crime (Capone) flourished; the government lost ~$11 billion in tax revenue during the Depression.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The 21st Amendment (1933) repealed Prohibition — an admission that the cure was worse than the disease.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Prohibition failed due to enforcement impossibility and crime",
          "commonErrors": [
                    "Treating it as a success or ignoring the crime/tax-revenue costs."
          ]
},
        },
        {
          id: "apush-u3-world-war-1-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the extent to which the 1920s represented a 'return to normalcy' versus a period of profound social change. Use evidence from immigration, race, and culture.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "1920s dual character",
                              "statement": "Surface normalcy over deep change."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical analysis",
                              "statement": "Weigh continuity vs. change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Normalcy' case: Harding/Coolidge pro-business policies, isolationism, limited government — a reaction against Progressive activism and wartime controls.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Change case: Great Migration transformed Northern cities; Harlem Renaissance and jazz redefined American culture; flappers challenged gender norms; consumer culture and cars changed daily life.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Immigration: quotas (1921, 1924) sharply restricted 'new' immigrants from Southern/Eastern Europe — xenophobia disguised as normalcy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Verdict: the 1920s combined political conservatism with cultural revolution — 'normalcy' was largely myth for those outside the white middle class.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1920s mixed conservative politics with radical cultural change",
          "commonErrors": [
                    "Accepting 'return to normalcy' at face value without examining who it excluded."
          ]
},
        },
      ],
    },
  ],
};
