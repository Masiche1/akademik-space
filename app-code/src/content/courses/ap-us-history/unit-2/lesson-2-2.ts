import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apush-u2-lesson-2-2",
  code: "2-2",
  title: "Civil War and Reconstruction",
  goal: "I CAN explain the war's military course, emancipation, and Reconstruction's failures.",
  standards: ["Period 5"],
  vocabulary: [
    { term: "Emancipation Proclamation", definition: "1863 order freeing enslaved people in rebelling states — symbolic until Union victory." },
    { term: "13th Amendment", definition: "1865 amendment abolishing slavery nationwide." },
    { term: "14th Amendment", definition: "1868 amendment granting citizenship and equal protection under the law." },
    { term: "15th Amendment", definition: "1870 amendment prohibiting racial discrimination in voting." },
    { term: "Sharecropping", definition: "Postwar system trapping freedpeople in debt peonage to landowners." },
    { term: "Compromise of 1877", definition: "Deal ending Reconstruction by withdrawing federal troops from the South." },
  ],
  concepts: [
    {
      id: "apush-u2-civil-war-reconstruction",
      title: "War, emancipation, and Reconstruction",
      skill: "Trace emancipation, military strategy, and Reconstruction's collapse.",
      lesson: {
        sections: [
          {
            heading: "Emancipation and war aims",
            body: "The Emancipation Proclamation (1863) transformed the war into a struggle for freedom; Black soldiers joined the Union army (~180,000 served).",
          },
          {
            heading: "Reconstruction's failure",
            body: "Radical Reconstruction (1867-77) gave freedpeople citizenship and voting rights, but sharecropping, Black Codes, KKK violence, and Northern war-weariness led to the Compromise of 1877 and Jim Crow.",
          },
        ],
        keyFormulas: [
          { name: "Reconstruction amendments", statement: "13th (abolition) → 14th (citizenship) → 15th (voting)" },
          { name: "Reconstruction phases", statement: "Presidential (1865-66) → Radical (1867-77) → Redemption (1877+)" },
        ],
        workedExample: {
          problem: "Why did Reconstruction fail to secure lasting equality for freedpeople?",
          solution: "Northern commitment faded after 1870; Southern 'Redeemer' governments used violence (KKK), Black Codes, and sharecropping to restore white supremacy; Supreme Court narrowed the 14th Amendment (Plessy v. Ferguson 1896 legalized 'separate but equal').",
        },
      },
      questions: [
        {
          id: "apush-u2-civil-war-reconstruction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Emancipation Proclamation (1863) freed enslaved people ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "everywhere in the United States"
                    },
                    {
                              "id": "b",
                              "text": "only in states still in rebellion"
                    },
                    {
                              "id": "c",
                              "text": "only in border states"
                    },
                    {
                              "id": "d",
                              "text": "only in Union states"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Emancipation Proclamation",
                              "statement": "Applied only to rebelling states; border states and Union areas exempt."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lincoln freed enslaved people in Confederate states only — border states (Delaware, Maryland, Kentucky, Missouri) and already-occupied areas were exempt, keeping border states in the Union.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Only in rebelling states",
          "commonErrors": [
                    "Thinking it ended slavery everywhere — that took the 13th Amendment."
          ]
},
        },
        {
          id: "apush-u2-civil-war-reconstruction-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The 14th Amendment established ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "abolition of slavery"
                    },
                    {
                              "id": "b",
                              "text": "birthright citizenship and equal protection under the law"
                    },
                    {
                              "id": "c",
                              "text": "women's suffrage"
                    },
                    {
                              "id": "d",
                              "text": "the electoral college"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "14th Amendment",
                              "statement": "Citizenship + due process + equal protection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It made all persons born or naturalized in the US citizens and required states to provide due process and equal protection — overturning Dred Scott.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Later narrowed by Supreme Court rulings (Plessy 'separate but equal'), it became the basis for 20th-century civil rights litigation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Birthright citizenship and equal protection",
          "commonErrors": [
                    "Confusing with the 13th (abolition) or 15th (voting)."
          ]
},
        },
        {
          id: "apush-u2-civil-war-reconstruction-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Approximately 180,000 African Americans served in the Union military. If total Union forces numbered about 2.1 million, what percentage were Black soldiers? Enter the number (e.g., 9 for 9%).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Percent",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Percentage",
                              "statement": "$180/2100 \\times 100 \\approx 8.6\\%$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$180{,}000 / 2{,}100{,}000 \\times 100 \\approx 8.6\\%$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $9\\%$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "9",
          "commonErrors": [
                    "Using wrong denominator or rounding errors."
          ]
},
        },
        {
          id: "apush-u2-civil-war-reconstruction-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why Reconstruction ended in 1877 and what that meant for African Americans in the South.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Compromise of 1877",
                              "statement": "Northern withdrawal ended federal protection."
                    },
                    {
                              "kind": "skill",
                              "name": "Causal explanation",
                              "statement": "Link political compromise to social consequences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The disputed 1876 election was settled by the Compromise of 1877 — Hayes became president and withdrew federal troops from the South.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Without federal protection, 'Redeemer' governments reversed Reconstruction gains; Black Codes, poll taxes, literacy tests, and KKK violence restored white supremacy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "By 1896 (Plessy v. Ferguson), 'separate but equal' Jim Crow was entrenched — Reconstruction's promise was deferred nearly a century.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1877 compromise ended protection; Jim Crow followed",
          "commonErrors": [
                    "Claiming Reconstruction fully succeeded or failed overnight — it was contested and gradually reversed."
          ]
},
        },
        {
          id: "apush-u2-civil-war-reconstruction-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate Reconstruction as a revolutionary or a failure. Use evidence from constitutional amendments, Southern resistance, and long-term outcomes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Reconstruction's legacy",
                              "statement": "Constitutional revolution vs. practical failure."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical evaluation",
                              "statement": "Weigh evidence on both sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Revolutionary case: 13th-15th Amendments abolished slavery, made freedpeople citizens, and gave Black men the vote; two African Americans served in the Senate — unprecedented.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Failure case: sharecropping recreated slavery-like conditions; violence and intimidation suppressed Black voting; Northern retreat in 1877 abandoned the experiment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Long-term: Reconstruction established constitutional principles later vindicated by the Civil Rights Movement — its failure was incomplete, its amendments durable.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Reconstruction was revolutionary in law but failed in enforcement — a 'tragic era' whose constitutional legacy outlasted its political collapse.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Revolutionary in law, failed in enforcement — but its amendments endured",
          "commonErrors": [
                    "One-sided verdict without weighing both constitutional gains and practical failures."
          ]
},
        },
      ],
    },
  ],
};
