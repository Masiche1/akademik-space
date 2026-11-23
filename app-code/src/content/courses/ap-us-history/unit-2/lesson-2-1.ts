import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apush-u2-lesson-2-1",
  code: "2-1",
  title: "Slavery and Expansion",
  goal: "I CAN analyze how slavery drove sectional conflict and westward expansion.",
  standards: ["Period 5"],
  vocabulary: [
    { term: "Manifest Destiny", definition: "The belief that Americans were destined to expand across the continent." },
    { term: "Missouri Compromise", definition: "1820 agreement maintaining balance between slave and free states." },
    { term: "Kansas-Nebraska Act", definition: "1854 law allowing popular sovereignty on slavery — triggered 'Bleeding Kansas.'" },
    { term: "Dred Scott decision", definition: "1857 Supreme Court ruling denying citizenship to African Americans." },
    { term: "Compromise of 1850", definition: "Series of measures on California, Texas, and fugitive slaves — temporary sectional truce." },
    { term: "Underground Railroad", definition: "Network helping enslaved people escape to freedom." },
  ],
  concepts: [
    {
      id: "apush-u2-slavery-and-expansion",
      title: "Slavery, sectionalism, and westward expansion",
      skill: "Trace how slavery shaped political and territorial conflicts.",
      lesson: {
        sections: [
          {
            heading: "Sectional crisis",
            body: "Each new territory raised the question: slave or free? The Missouri Compromise (1820) drew a line; popular sovereignty (Kansas-Nebraska 1854) let settlers decide, causing violent conflict in Kansas.",
          },
          {
            heading: "Dred Scott",
            body: "The 1857 Supreme Court decision ruled African Americans could not be citizens and Congress could not ban slavery in territories — inflaming sectional tensions and strengthening the Republican Party.",
          },
        ],
        keyFormulas: [
          { name: "Missouri Compromise line", statement: "$36^\\circ 30'$ — north free, south slave" },
          { name: "Sectional flashpoints", statement: "Missouri 1820 → Compromise 1850 → Kansas-Nebraska 1854 → Dred Scott 1857" },
        ],
        workedExample: {
          problem: "Why did the Kansas-Nebraska Act destroy the Whig Party and strengthen the Republicans?",
          solution: "It repealed the Missouri Compromise's geographic limit on slavery, outraging anti-slavery Northerners. The Whigs split over slavery (Know-Nothings, Republicans formed), while the new Republican Party unified on a free-soil, anti-slavery-expansion platform.",
        },
      },
      questions: [
        {
          id: "apush-u2-slavery-and-expansion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Missouri Compromise of 1820 ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ended slavery in Missouri"
                    },
                    {
                              "id": "b",
                              "text": "maintained the balance between slave and free states by admitting Maine as free and Missouri as slave"
                    },
                    {
                              "id": "c",
                              "text": "gave Kansas popular sovereignty"
                    },
                    {
                              "id": "d",
                              "text": "was struck down by Dred Scott"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Missouri Compromise",
                              "statement": "Preserved sectional balance in the Senate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Maine entered as free, Missouri as slave — keeping Senate balance; also drew the $36^\\circ 30'$ line restricting slavery's expansion north.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Balanced free/Slave state admission",
          "commonErrors": [
                    "Confusing it with the Kansas-Nebraska Act."
          ]
},
        },
        {
          id: "apush-u2-slavery-and-expansion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Dred Scott decision (1857) ruled that ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Congress could ban slavery in territories"
                    },
                    {
                              "id": "b",
                              "text": "African Americans were not citizens and Congress could not exclude slavery from territories"
                    },
                    {
                              "id": "c",
                              "text": "slavery was unconstitutional everywhere"
                    },
                    {
                              "id": "d",
                              "text": "Scott was freed because he lived in a free state"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Dred Scott",
                              "statement": "Supreme Court strengthened slaveholders' constitutional claims."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chief Justice Taney ruled Black people had no citizenship rights and Congress lacked power to ban slavery in territories — overturning the Missouri Compromise line.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The decision outraged Northerners and convinced many that only political action against slavery's expansion could save the Union.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "No Black citizenship; no territorial ban on slavery",
          "commonErrors": [
                    "Thinking it freed Dred Scott — it denied his standing to sue."
          ]
},
        },
        {
          id: "apush-u2-slavery-and-expansion-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Kansas-Nebraska Act was passed in 1854. 'Bleeding Kansas' violence peaked in 1856. How many years later was the Civil War's start at Fort Sumter (1861)? Enter years from 1854.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Date subtraction",
                              "statement": "$1861 - 1854 = 7$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1861 - 1854 = 7$ years.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $7$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "7",
          "commonErrors": [
                    "Using 1856 as base (gives 5)."
          ]
},
        },
        {
          id: "apush-u2-slavery-and-expansion-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'popular sovereignty' in the Kansas-Nebraska Act led to violence in Kansas and destroyed the existing party system.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Popular sovereignty",
                              "statement": "Let settlers decide slavery's status."
                    },
                    {
                              "kind": "skill",
                              "name": "Causal explanation",
                              "statement": "Link policy to violence and political realignment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Act let Kansas settlers vote on slavery; pro-slavery 'Border Ruffians' from Missouri crossed the border to stuff ballot boxes and intimidate voters.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Free-soil settlers formed their own government; raids and massacres (e.g., Pottawatomie) killed dozens — 'Bleeding Kansas' previewed civil war.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The violence destroyed trust in popular sovereignty and split the Whig Party, paving the way for the Republican Party's rise on an anti-slavery-expansion platform.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Popular sovereignty caused Bleeding Kansas and destroyed the Whigs",
          "commonErrors": [
                    "Treating the violence as spontaneous rather than politically organized."
          ]
},
        },
        {
          id: "apush-u2-slavery-and-expansion-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the extent to which slavery was the primary cause of the Civil War. Address at least two other contributing factors and weigh their relative importance.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Slavery's centrality",
                              "statement": "Economic, political, and moral stakes of slavery."
                    },
                    {
                              "kind": "skill",
                              "name": "Historical argumentation",
                              "statement": "Weigh multiple causes in a thesis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thesis: slavery was the fundamental cause — it drove sectional economic systems (plantation South vs. industrial North), political conflict over expansion, and moral reform movements (abolitionism).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Other factors: tariff disputes (South resented Northern tariffs), states' rights ideology, and westward expansion competing for land — but these were largely proxies for the slavery question.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evidence for slavery primacy: every major crisis (Missouri, Compromise 1850, Kansas-Nebraska, Dred Scott, Election of 1860) centered on slavery; South seceded explicitly to protect slavery.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Nuance: without slavery's expansion crisis, other grievances might have been manageable; slavery made compromise impossible.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Slavery was the root cause; other factors were secondary or derivative",
          "commonErrors": [
                    "Listing causes without arguing which was primary."
          ]
},
        },
      ],
    },
  ],
};
