import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "edxbtechsc-u1-lesson-1-1",
  code: "1-1",
  title: "Stages of the Lifespan and Development",
  goal: "I CAN describe the main stages of human development from conception to older adulthood and the factors that influence development.",
  standards: [
    "BTEC L3 National Health and Social Care — Unit 1: Human Lifespan and Development",
  ],
  vocabulary: [
    {
      term: "Development",
      definition:
        "The progressive changes in physical, cognitive, social and emotional functioning that occur across the lifespan.",
    },
    {
      term: "Nature vs nurture",
      definition:
        "The debate over whether development is driven by genetic inheritance (nature) or environmental experience (nurture) — in practice both interact.",
    },
    {
      term: "Milestone",
      definition:
        "A key developmental achievement expected within a typical age range, e.g. walking by ~12 months.",
    },
    {
      term: "Lifespan",
      definition:
        "The whole of a person's life from conception to death, divided into stages for study.",
    },
  ],
  concepts: [
    {
      id: "edxbtechsc-u1-l1-stages",
      title: "Lifespan Stages",
      skill:
        "Identify the stages of development and typical characteristics of each.",
      lesson: {
        sections: [
          {
            heading: "Prenatal to infancy",
            body: "Development begins at conception. The **prenatal stage** (conception–birth) covers rapid cell division and organ formation; teratogens (alcohol, smoking, infection, drugs) can cause permanent damage. **Infancy** (0–2 years) brings motor milestones — rolling, sitting, crawling, walking — and attachment formation.\n\n**Early childhood** (3–7) develops language, play skills and independence. **Middle childhood** (8–11) refines physical skills, peer relationships and academic learning. **Adolescence** (12–18) involves puberty, identity formation and abstract thinking.",
          },
          {
            heading: "Adulthood to older age",
            body: "**Early adulthood** (18–40) covers career formation, intimate relationships and often parenthood; physical peak occurs here. **Middle adulthood** (41–64) brings career consolidation, possible family changes and the first signs of physical decline.\n\n**Older adulthood** (65+) involves retirement, possible health changes and, for many, reflection. Development continues throughout life — it is not confined to childhood. Stages are approximate guides, not rigid categories.",
          },
        ],
        keyFormulas: [
          {
            name: "Stage boundaries",
            statement:
              "Prenatal → infancy (0–2) → early childhood (3–7) → middle childhood (8–11) → adolescence (12–18) → early/middle/older adulthood",
          },
          {
            name: "Developmental domains",
            statement:
              "Physical, cognitive, social, emotional (and often spiritual/moral)",
          },
        ],
        workedExample: {
          problem:
            "A 14-year-old is starting puberty and questioning their identity. Which stage and domains are most affected?",
          solution:
            "Adolescence. Affected domains: physical (puberty changes), emotional (mood swings, identity), social (peer pressure, relationships), cognitive (abstract thinking emerging).",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u1-l1-stages-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which stage of development typically covers ages 3–7?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Infancy" },
              { id: "b", text: "Early childhood" },
              { id: "c", text: "Adolescence" },
              { id: "d", text: "Middle childhood" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lifespan stages",
                statement: "Early childhood = roughly 3–7 years.",
              },
            ],
            steps: [
              {
                reasoning: "3–7 years is early childhood.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Early childhood",
            commonErrors: ["Confusing early and middle childhood boundaries."],
          },
        },
        {
          id: "edxbtechsc-u1-l1-stages-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the prenatal stage is considered especially vulnerable to damage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prenatal vulnerability",
                statement:
                  "Rapid cell division and organ formation mean teratogens can cause permanent structural damage.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identifies rapid development/organ formation in utero.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Teratogens (alcohol, smoking, infection) cross the placenta.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Damage at this stage is permanent and affects all later development.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Organs form rapidly; teratogens can permanently disrupt structure and function.",
            commonErrors: [
              "Treating prenatal development as less important than later stages.",
            ],
          },
        },
        {
          id: "edxbtechsc-u1-l1-stages-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the physical and social development of a typically developing 10-year-old with a 16-year-old.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Developmental comparison",
                statement:
                  "Middle childhood consolidates skills; adolescence transforms body and social world.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Physical: 10-year-old steady growth vs 16-year-old puberty changes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cognitive: concrete vs emerging abstract reasoning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Social: family-centred vs peer/identity focus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear comparative structure across domains.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "10-year-old: steady physical growth, concrete thinking, family peer groups. 16-year-old: puberty, abstract thought, identity and intimate peer relationships.",
            commonErrors: [
              "Only describing one stage.",
              "Ignoring a developmental domain.",
            ],
          },
        },
        {
          id: "edxbtechsc-u1-l1-stages-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Development does not stop at adulthood.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe two physical changes typical of middle and older adulthood.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Describe two cognitive or social changes typical of the same stages.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why describing development as 'complete by 18' is inaccurate.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lifelong development",
                statement:
                  "Physical, cognitive and social change continues through all adult stages.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Physical change 1 e.g. muscle loss, vision/hearing decline.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Physical change 2 e.g. menopause/andropause, bone density loss.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Clear physical comparison across adult stages.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Cognitive/social change 1 e.g. career expertise or retirement transition.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Cognitive/social change 2 e.g. generativity, grandparenting, reflection.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Domain coverage clear.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Identifies that adult stages involve major transitions.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Conclusion justified.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) muscle/bone loss, menopause (b) career peak→retirement, generativity (c) adult life involves continued major change",
            commonErrors: [
              "Treating adulthood as static.",
              "Ignoring older adulthood.",
            ],
          },
        },
      ],
    },
    {
      id: "edxbtechsc-u1-l1-factors",
      title: "Factors Influencing Development",
      skill:
        "Explain how nature, nurture and individual circumstances shape development.",
      lesson: {
        sections: [
          {
            heading: "Nature and nurture",
            body: "**Nature** refers to genetic inheritance — the DNA programme that sets potentials for height, temperament and susceptibility to disease. **Nurture** refers to environment — nutrition, parenting, education, relationships, socioeconomic status.\n\nThe interaction is bidirectional: a child's temperament (nature) shapes how parents respond (nurture), and the environment epigenetically modifies gene expression. Twin studies show both contributions: identical twins raised apart still share traits, but differ where environments diverge.",
          },
          {
            heading: "Risk and protective factors",
            body: "Development is shaped by **risk factors** — poverty, abuse, poor nutrition, low parental education, illness — and **protective factors** — stable attachment, good nutrition, education, social support, access to healthcare.\n\nResilience is the ability to develop well despite adversity; it is built through relationships and opportunities, not just individual toughness. Socioeconomic status affects development through material resources, stress exposure and access to services.",
          },
        ],
        keyFormulas: [
          {
            name: "Nature–nurture interaction",
            statement:
              "Genes set range; environment determines position within it; both influence each other.",
          },
          {
            name: "Resilience",
            statement:
              "Positive development despite risk factors, supported by protective factors.",
          },
        ],
        workedExample: {
          problem:
            "Two identical twins are separated at birth; one grows up in poverty, one in affluence. Predict differences.",
          solution:
            "Genetically identical → shared traits like temperament and disease susceptibility. Environmental differences → likely differences in height (nutrition), education, health outcomes, and stress-related conditions. Nature gives the range; nurture positions within it.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u1-l1-factors-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Nurture' in development refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prenatal development" },
              { id: "b", text: "Genetic mutation" },
              { id: "c", text: "Genetic inheritance" },
              { id: "d", text: "Environmental influences" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nurture",
                statement: "Environmental influences on development.",
              },
            ],
            steps: [
              { reasoning: "Nurture = environment.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Environmental influences",
            commonErrors: ["Confusing nature and nurture."],
          },
        },
        {
          id: "edxbtechsc-u1-l1-factors-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how socioeconomic status can affect a child's development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SES and development",
                statement:
                  "Poverty affects development through nutrition, stress, education access and healthcare.",
              },
            ],
            steps: [
              {
                reasoning: "Material pathway: nutrition, housing, resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Psychosocial pathway: stress, parental availability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Access pathway: education, healthcare, enrichment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "SES affects development via material resources, stress exposure and access to services.",
            commonErrors: [
              "One pathway only.",
              "Deterministic view ignoring resilience.",
            ],
          },
        },
        {
          id: "edxbtechsc-u1-l1-factors-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that 'genes determine development'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nature–nurture debate",
                statement:
                  "Genes provide potential; environment shapes expression; interaction is the reality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence for genetic influence (twin studies, heritability).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence for environmental influence (SES, intervention studies).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Interaction/epigenetics point.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Balanced evaluative conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Genetic determinism is false — genes set ranges but environment determines outcomes within them; the two interact.",
            commonErrors: ["One-sided argument.", "No evidence cited."],
          },
        },
        {
          id: "edxbtechsc-u1-l1-factors-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A child grows up in poverty but attends a well-resourced school with a supportive mentor.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two risk factors and two protective factors in this scenario.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how these factors might interact to shape the child's development.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the child is 'destined' for poor outcomes.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Risk and protective factors",
                statement:
                  "Development outcomes reflect the balance of cumulative risk and protective factors.",
              },
            ],
            steps: [
              {
                reasoning: "Risk factors identified (poverty + one more).",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Protective factors identified (school + mentor).",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "All four factors correct.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Explains interaction e.g. school buffers poverty effects.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Mentor provides relational protection.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Cumulative effect explained.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Rejects determinism.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Balanced conclusion.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) poverty/neglect vs school/mentor (b) protective factors buffer risk (c) not destined — outcomes depend on factor balance",
            commonErrors: [
              "Listing factors without interaction.",
              "Deterministic conclusion.",
            ],
          },
        },
      ],
    },
  ],
};
