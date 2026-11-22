import type { Lesson } from "../../../types.ts";

export const lesson203: Lesson = {
  id: "edxbtechsc-u2-lesson-2-3",
  code: "2-3",
  title: "Health Across the Lifespan",
  goal: "I CAN describe how health needs and common conditions change across the lifespan and identify appropriate health promotion strategies.",
  standards: [
    "BTEC L3 National Health and Social Care — Unit 2: Human Biology and Health",
  ],
  vocabulary: [
    {
      term: "Health promotion",
      definition:
        "Activities enabling people to increase control over and improve their health — education, screening, environmental change.",
    },
    {
      term: "Screening",
      definition:
        "Testing apparently healthy people to detect disease early — e.g. cervical smear, breast screening.",
    },
    {
      term: "Immunisation",
      definition:
        "Introducing weakened/inactivated pathogens to build immunity without causing disease.",
    },
    {
      term: "Life expectancy",
      definition:
        "Average number of years a person can expect to live; healthy life expectancy measures years in good health.",
    },
  ],
  concepts: [
    {
      id: "edxbtechsc-u2-l3-childhood",
      title: "Health in Childhood and Adolescence",
      skill:
        "Describe child health needs, immunisation and common childhood conditions.",
      lesson: {
        sections: [
          {
            heading: "Child health",
            body: "Childhood is a period of rapid growth making good nutrition, sleep, immunisation and safety critical. The **NHS childhood programme** includes developmental checks, vaccinations and health visitor support.\n\n**Immunisation** trains the immune system safely — the UK schedule protects against measles, mumps, rubella, diphtheria, tetanus, pertussis, polio, meningitis, HPV and others. Herd immunity protects those who cannot be vaccinated (infants, immunocompromised).",
          },
          {
            heading: "Adolescent health",
            body: "Adolescence brings unique challenges: mental health problems emerge (anxiety, depression, self-harm), risk-taking increases (substances, unprotected sex, dangerous driving), body image issues and eating disorders rise.\n\nHealth promotion must be youth-appropriate: confidential services, peer education, digital engagement. School-based PHSE covers puberty, relationships, drugs and mental health.",
          },
        ],
        keyFormulas: [
          {
            name: "Herd immunity",
            statement: "High vaccination coverage protects the unvaccinated.",
          },
          {
            name: "Screening principle",
            statement:
              "Early detection improves outcomes for treatable conditions.",
          },
        ],
        workedExample: {
          problem: "Why vaccinate healthy children?",
          solution:
            "Vaccines prevent serious disease, protect vulnerable contacts via herd immunity, and are far safer than the diseases they prevent.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u2-l3-childhood-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Herd immunity' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only adults need vaccines" },
              { id: "b", text: "Diseases disappear naturally" },
              {
                id: "c",
                text: "High vaccination rates protect the unvaccinated",
              },
              { id: "d", text: "Vaccines make individuals completely immune" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Herd immunity",
                statement:
                  "Community-level protection when enough people are immune.",
              },
            ],
            steps: [
              {
                reasoning: "Herd immunity protects the vulnerable.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Protects unvaccinated",
            commonErrors: ["Individual vs population confusion."],
          },
        },
        {
          id: "edxbtechsc-u2-l3-childhood-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two health challenges specific to adolescence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adolescent health",
                statement:
                  "Mental health emergence, risk-taking, body image and health behaviours established in adolescence.",
              },
            ],
            steps: [
              {
                reasoning: "Mental health: anxiety/depression onset.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Risk behaviours: substances, unprotected sex, accidents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Accurate adolescent-specific description.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. mental health problems emerging, risk-taking behaviours, eating disorders.",
            commonErrors: [
              "Childhood issues repeated.",
              "Not adolescent-specific.",
            ],
          },
        },
        {
          id: "edxbtechsc-u2-l3-childhood-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the benefits of childhood vaccination programmes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vaccination evaluation",
                statement:
                  "Vaccines prevent disease, protect vulnerable groups and are cost-effective.",
              },
            ],
            steps: [
              {
                reasoning: "Individual benefit: prevents serious disease.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Population benefit: herd immunity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Criticism addressed: rare side effects vs disease risk.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Vaccination is highly beneficial — prevents disease and protects communities; rare side effects outweigh by disease prevention.",
            commonErrors: ["One-sided.", "No risk-benefit weighing."],
          },
        },
        {
          id: "edxbtechsc-u2-l3-childhood-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Vaccination rates in a community have fallen below the herd immunity threshold.",
          parts: [
            {
              label: "a",
              prompt: "Explain what herd immunity threshold means.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify three consequences of falling below it.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest two strategies to restore coverage.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Herd immunity threshold",
                statement:
                  "Minimum vaccinated proportion needed to prevent sustained transmission.",
              },
            ],
            steps: [
              {
                reasoning: "Threshold defined correctly.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Varies by disease transmissibility.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Consequence 1 e.g. disease outbreaks.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Consequence 2 e.g. vulnerable groups at risk.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Consequence 3 e.g. loss of elimination status.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Strategy 1 e.g. outreach/reminder systems.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Strategy 2 e.g. address hesitancy/misinformation.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Strategies evidence-based.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) minimum coverage for protection (b) outbreaks/vulnerable risk (c) outreach + hesitancy work",
            commonErrors: ["Threshold confused with 100%.", "No strategies."],
          },
        },
      ],
    },
    {
      id: "edxbtechsc-u2-l3-adult",
      title: "Health in Adulthood and Older Age",
      skill:
        "Describe adult health promotion, screening programmes and the health needs of older adults.",
      lesson: {
        sections: [
          {
            heading: "Adult health and screening",
            body: "Adulthood health focuses on **prevention and early detection**: NHS screening programmes cover breast (mammography), cervical (smear), bowel (FOBT/home kit), abdominal aortic aneurysm and diabetic retinopathy. Screening detects disease early when treatment is most effective.\n\n**Health promotion** targets modifiable risks: smoking cessation, alcohol reduction, weight management, physical activity, mental health awareness. GP health checks (NHS Health Check, 40–74) assess cardiovascular and diabetes risk.",
          },
          {
            heading: "Older adult health",
            body: "Older adulthood (65+) faces **multimorbidity** — multiple chronic conditions (arthritis, diabetes, heart disease, dementia) requiring coordinated care. Frailty — reduced physiological reserve — increases vulnerability to stressors like falls and infections.\n\nKey needs: falls prevention, medication review (polypharmacy risks), social connection (loneliness is a health risk comparable to smoking), dignity and independence. **Healthy life expectancy** — years lived in good health — is the key policy metric.",
          },
        ],
        keyFormulas: [
          {
            name: "Screening criteria",
            statement:
              "Wilson and Jungner: condition important, test acceptable, treatment available, cost-effective.",
          },
          {
            name: "Multimorbidity",
            statement: "2+ chronic conditions — requires integrated care.",
          },
        ],
        workedExample: {
          problem: "Why does screening target 'well' people?",
          solution:
            "Early detection before symptoms — treatment is more effective and less costly; screening only works if the condition is treatable at the detected stage.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u2-l3-adult-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which screening programme detects breast cancer early?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blood pressure check" },
              { id: "b", text: "HPV test only" },
              { id: "c", text: "Mammography" },
              { id: "d", text: "Bowel screening" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mammography",
                statement: "X-ray screening for breast cancer.",
              },
            ],
            steps: [
              {
                reasoning: "Mammography = breast screening.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Mammography",
            commonErrors: ["Confusing screening types."],
          },
        },
        {
          id: "edxbtechsc-u2-l3-adult-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why screening programmes target apparently healthy people.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Screening rationale",
                statement:
                  "Early detection before symptoms improves treatment outcomes and reduces burden.",
              },
            ],
            steps: [
              {
                reasoning: "Early stage = better treatment outcomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cost-effectiveness of early vs late treatment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Prevents progression to symptomatic disease.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Early detection in symptom-free people allows simpler treatment and better outcomes.",
            commonErrors: [
              "Screening confused with diagnosis.",
              "No outcome link.",
            ],
          },
        },
        {
          id: "edxbtechsc-u2-l3-adult-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse the health challenges of an 80-year-old with three chronic conditions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multimorbidity",
                statement:
                  "Multiple chronic conditions interact, complicating treatment and increasing care needs.",
              },
            ],
            steps: [
              {
                reasoning: "Condition interactions complicate management.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Polypharmacy risk — drug interactions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Frailty/vulnerability to stressors.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Holistic care need explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Multimorbidity → interacting conditions, polypharmacy risk, frailty — needs coordinated holistic care.",
            commonErrors: [
              "Treating conditions separately.",
              "No interaction awareness.",
            ],
          },
        },
        {
          id: "edxbtechsc-u2-l3-adult-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A local authority wants to improve older residents' health.",
          parts: [
            {
              label: "a",
              prompt: "Identify three health needs specific to older adults.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest an intervention for each need.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate how 'healthy life expectancy' could be improved.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Older adult health needs",
                statement:
                  "Falls prevention, social connection, chronic disease management, independence.",
              },
            ],
            steps: [
              {
                reasoning: "Need 1 e.g. fall prevention.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Need 2 e.g. social isolation.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Need 3 e.g. chronic condition management.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Intervention matched to need 1.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Intervention matched to need 2.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Intervention matched to need 3.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "HLE concept understood (years in good health).",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Improvement strategy linked to HLE.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) falls/social/chronic (b) exercise classes/community groups/medication review (c) extend healthy years via prevention",
            commonErrors: ["Generic elderly care.", "No HLE understanding."],
          },
        },
      ],
    },
  ],
};
