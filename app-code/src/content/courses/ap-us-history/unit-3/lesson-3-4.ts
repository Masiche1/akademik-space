import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "apush-u3-lesson-3-4",
  code: "3-4",
  title: "Civil Rights and the 1960s",
  goal: "I CAN explain the civil rights movement, Great Society, and Vietnam War's impact.",
  standards: ["Period 8"],
  vocabulary: [
    { term: "Brown v. Board", definition: "1954 Supreme Court ruling ending school segregation." },
    { term: "Montgomery Bus Boycott", definition: "1955-56 protest led by Rosa Parks and MLK Jr." },
    { term: "Civil Rights Act", definition: "1964 law banning discrimination in public accommodations and employment." },
    { term: "Voting Rights Act", definition: "1965 law banning literacy tests and ensuring Black voting rights." },
    { term: "Great Society", definition: "LBJ's domestic program expanding welfare and civil rights." },
    { term: "Vietnam War", definition: "1955-1975 conflict dividing America; ~58,000 US deaths." },
  ],
  concepts: [
    {
      id: "apush-u3-civil-rights-1960s",
      title: "Civil rights and social upheaval",
      skill: "Trace the movement's legal victories and the decade's crises.",
      lesson: {
        sections: [
          {
            heading: "Civil rights movement",
            body: "Brown v. Board (1954) → Montgomery (1955) → sit-ins (1960) → Freedom Rides (1961) → March on Washington (1963) → Civil Rights Act (1964) → Voting Rights Act (1965) — a decade of legal and direct-action victories.",
          },
          {
            heading: "1960s turmoil",
            body: "Vietnam escalation, urban riots, assassinations (JFK, MLK, RFK), and counterculture divided America; the Great Society expanded welfare but faced funding limits.",
          },
        ],
        keyFormulas: [
          { name: "Civil rights timeline", statement: "Brown 1954 → Montgomery 1955 → March 1963 → CRA 1964 → VRA 1965" },
          { name: "Vietnam escalation", statement: "Advisors 1961 → Gulf of Tonkin 1964 → Tet Offensive 1968 → Paris Peace 1973" },
        ],
        workedExample: {
          problem: "Why did the Civil Rights Movement succeed when earlier efforts failed?",
          solution: "Combination of legal strategy (NAACP), direct action (MLK's nonviolence, sit-ins), federal pressure (Kennedy/JFK, LBJ), and media coverage of Southern violence turned Northern public opinion — forcing federal legislation.",
        },
      },
      questions: [
        {
          id: "apush-u3-civil-rights-1960s-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Brown v. Board of Education (1954) ruled that ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "segregation was unconstitutional in all public facilities"
                    },
                    {
                              "id": "b",
                              "text": "racially segregated schools were inherently unequal"
                    },
                    {
                              "id": "c",
                              "text": "schools could be segregated if 'separate but equal'"
                    },
                    {
                              "id": "d",
                              "text": "busing was unconstitutional"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Brown v. Board",
                              "statement": "Overturned Plessy; ended school segregation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Court unanimously ruled segregated schools violated the 14th Amendment's equal protection clause — 'separate educational facilities are inherently unequal.'",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Segregated schools inherently unequal",
          "commonErrors": [
                    "Saying it ended ALL segregation — it only addressed schools; broader desegregation took years."
          ]
},
        },
        {
          id: "apush-u3-civil-rights-1960s-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Montgomery Bus Boycott (1955-56) is significant because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "was the first bus boycott in history"
                    },
                    {
                              "id": "b",
                              "text": "launched MLK's national leadership and proved nonviolent protest could work"
                    },
                    {
                              "id": "c",
                              "text": "ended segregation immediately"
                    },
                    {
                              "id": "d",
                              "text": "was led by Malcolm X"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Montgomery Bus Boycott",
                              "statement": "381-day protest after Rosa Parks's arrest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The boycott, organized by a young MLK, forced desegregation of Montgomery buses and established nonviolent direct action as the movement's strategy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It made MLK a national figure and inspired similar protests across the South.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Launched MLK and nonviolent protest",
          "commonErrors": [
                    "Thinking it ended all segregation — it desegregated only Montgomery's buses."
          ]
},
        },
        {
          id: "apush-u3-civil-rights-1960s-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Civil Rights Act of 1964 passed the Senate 73-27. How many votes did it receive? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Yes votes",
                              "answer": 73
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Read the tally",
                              "statement": "$73$ votes for passage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Senate passed the CRA 73-27 after the longest filibuster in history (75 days).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $73$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "73",
          "commonErrors": [
                    "Giving the 'no' votes (27)."
          ]
},
        },
        {
          id: "apush-u3-civil-rights-1960s-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the Vietnam War divided American society, citing the draft, Tet Offensive, and counterculture.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Vietnam's divisiveness",
                              "statement": "War effort vs. anti-war movement."
                    },
                    {
                              "kind": "skill",
                              "name": "Causal explanation",
                              "statement": "Link war events to social division."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Escalation: Johnson sent combat troops after Gulf of Tonkin (1964); the draft disproportionately affected working-class and minority men while college deferments favored the privileged.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Tet Offensive (1968): despite 'victory' claims, Tet showed the war was stalemated — turning public opinion against it and prompting LBJ's withdrawal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Counterculture: anti-war protests, draft resistance, and the counterculture movement ('turn on, tune in, drop out') challenged authority; Kent State (1970) showed government violence against protesters.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Vietnam divided America along class, race, and generation lines",
          "commonErrors": [
                    "Treating opposition as monolithic — it spanned students, veterans, and working-class draftees."
          ]
},
        },
        {
          id: "apush-u3-civil-rights-1960s-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess the legacy of the 1960s: did the decade's reforms produce lasting change or did backlash limit them? Use civil rights and Great Society evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "1960s legacy",
                              "statement": "Lasting gains vs. backlash and incomplete change."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical evaluation",
                              "statement": "Weigh achievements and limits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Civil rights: CRA and VRA ended legal segregation and secured voting rights — lasting achievements enforced by federal courts; but de facto segregation and economic inequality persisted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Great Society: Medicare/Medicaid, food stamps, Head Start — still operating; but War on Poverty underfunded and later attacked as 'welfare dependency.'",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Backlash: Nixon's Southern Strategy, Reagan's 'welfare queen' rhetoric, and continued racial/economic inequality show reform's limits; urban riots and crime fears fueled law-and-order politics.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: the 1960s produced the most significant legal expansion of rights since Reconstruction — imperfect, contested, but durable.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1960s won lasting legal rights but faced persistent backlash and incomplete equality",
          "commonErrors": [
                    "Ignoring both the achievements and the backlash — one-sided verdicts miss the decade's complexity."
          ]
},
        },
      ],
    },
  ],
};
