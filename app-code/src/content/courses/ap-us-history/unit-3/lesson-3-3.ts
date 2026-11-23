import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "apush-u3-lesson-3-3",
  code: "3-3",
  title: "World War II and the Cold War",
  goal: "I CAN explain the US role in WWII and the origins of the Cold War.",
  standards: ["Period 8"],
  vocabulary: [
    { term: "Lend-Lease", definition: "1941 program supplying Britain and USSR with war materials before US entry." },
    { term: "Pearl Harbor", definition: "December 7, 1941 Japanese attack bringing the US into WWII." },
    { term: "Manhattan Project", definition: "Secret program producing the atomic bomb (Hiroshima/Nagasaki 1945)." },
    { term: "Yalta/Potsdam", definition: "1945 conferences shaping postwar Europe and the UN." },
    { term: "Truman Doctrine", definition: "1947 policy containing Soviet expansion ('Mr. X' containment)." },
    { term: "Marshall Plan", definition: "1948 US aid rebuilding Western Europe to counter communism." },
  ],
  concepts: [
    {
      id: "apush-u3-world-war-2-cold-war",
      title: "WWII and the Cold War's origins",
      skill: "Explain US wartime strategy and postwar containment.",
      lesson: {
        sections: [
          {
            heading: "WWII",
            body: "US entered after Pearl Harbor (Dec 1941); 'arsenal of democracy' supplied allies; D-Day (June 1944) opened Western Front; atomic bombs ended war in Pacific (Aug 1945).",
          },
          {
            heading: "Cold War origins",
            body: "Soviet control of Eastern Europe, Berlin Blockade (1948), Korean War (1950-53), and McCarthyism defined containment; NATO (1949) vs. Warsaw Pact (1955) formalized the divide.",
          },
        ],
        keyFormulas: [
          { name: "WWII timeline", statement: "Pearl Harbor 1941 → D-Day 1944 → V-E Day May 1945 → V-J Day Aug 1945" },
          { name: "Containment", statement: "Truman Doctrine 1947 → Marshall Plan 1948 → NATO 1949 → Korean War 1950" },
        ],
        workedExample: {
          problem: "Why did the US use atomic bombs on Japan?",
          solution: "Truman sought to end the war quickly and avoid a costly invasion of Japan (estimated 500,000+ casualties); critics argue it was also a signal to the USSR at the start of the Cold War.",
        },
      },
      questions: [
        {
          id: "apush-u3-world-war-2-cold-war-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Lend-Lease (1941) was significant because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ended the Great Depression"
                    },
                    {
                              "id": "b",
                              "text": "allowed the US to supply Britain and the USSR before entering the war"
                    },
                    {
                              "id": "c",
                              "text": "created the United Nations"
                    },
                    {
                              "id": "d",
                              "text": "banned Japanese immigration"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Lend-Lease",
                              "statement": "'Arsenal of democracy' aid before US entry."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lend-Lease let the US sell/lease war supplies to allies while remaining formally neutral — turning America into the 'arsenal of democracy.'",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Pre-entry military aid",
          "commonErrors": [
                    "Thinking the US was already at war — it entered in Dec 1941."
          ]
},
        },
        {
          id: "apush-u3-world-war-2-cold-war-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Truman Doctrine (1947) committed the US to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rebuilding Europe economically"
                    },
                    {
                              "id": "b",
                              "text": "containing communism worldwide"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Truman Doctrine",
                              "statement": "Containment of Soviet expansion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Truman pledged to 'support free peoples' resisting communist subjugation — the policy of containment guiding US Cold War strategy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It marked the shift from isolationism to global engagement.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Containing communism",
          "commonErrors": [
                    "Confusing with the Marshall Plan (economic aid)."
          ]
},
        },
        {
          id: "apush-u3-world-war-2-cold-war-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The US spent about $341 billion on WWII (in 1945 dollars). If GDP was about $228 billion that year, military spending was roughly what percent of GDP? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Percent of GDP",
                              "answer": 150
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Percentage",
                              "statement": "$341/228 \\times 100 \\approx 150\\%$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$341 / 228 \\times 100 \\approx 149.6\\%$ — wartime spending exceeded annual GDP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $150$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "150",
          "commonErrors": [
                    "Using wrong GDP figure or decimal errors."
          ]
},
        },
        {
          id: "apush-u3-world-war-2-cold-war-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how WWII transformed the US economically and socially, citing the GI Bill, women's labor, and the atomic bomb's legacy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "WWII's transformation",
                              "statement": "Economic boom + social change + nuclear age."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical analysis",
                              "statement": "Connect wartime events to long-term change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Economy: war spending ended the Depression; US emerged as sole economic superpower; GI Bill educated millions and fueled suburban growth.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Society: women entered workforce ('Rosie the Riveter') — though largely pushed out postwar; African Americans fought for Double V (victory abroad, victory against racism at home), fueling civil rights.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Atomic bomb: ended WWII but began nuclear arms race; Hiroshima/Nagasaki killed ~200,000 and cast shadow over postwar peace.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "WWII brought prosperity and change but also nuclear peril and unresolved racial inequality",
          "commonErrors": [
                    "Ignoring the war's racial and gender contradictions."
          ]
},
        },
        {
          id: "apush-u3-world-war-2-cold-war-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the US policy of containment during the early Cold War. Was it successful? Address Korea, NATO, and the limits of containment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Containment strategy",
                              "statement": "Truman Doctrine through Korean War."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical evaluation",
                              "statement": "Weigh successes and limits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Successes: NATO (1949) deterred Soviet expansion in Europe; Marshall Plan rebuilt Western Europe economically and politically; Berlin Airlift (1948-49) defeated blockade without war.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Korea: containment worked militarily — US-led UN forces pushed North Korea back to the 38th parallel, though at cost of ~36,000 US lives and Chinese intervention.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Limits: containment couldn't prevent Soviet atomic bomb (1949), China's communist revolution (1949), or Cuban missile crisis (1962); it sometimes supported authoritarian regimes (South Vietnam).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: containment prevented Soviet global domination but at enormous military and economic cost — a qualified success that defined US foreign policy for 40 years.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Containment succeeded in Europe but was costly and incomplete globally",
          "commonErrors": [
                    "Treating containment as total success or failure without nuance."
          ]
},
        },
      ],
    },
  ],
};
