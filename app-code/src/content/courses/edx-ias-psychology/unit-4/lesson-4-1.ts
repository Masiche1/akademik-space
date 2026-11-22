import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "eias-psych-u4-lesson-4-1",
  code: "4-1",
  title: "Defining and Classifying Mental Disorders",
  goal: "I CAN explain criteria for abnormality and classification systems.",
  standards: ["Edexcel IAS Psychology 9PS01 Unit 4 — Psychopathology"],
  vocabulary: [
    {
      term: "Abnormality",
      definition:
        "Deviation from statistical norms, social norms, or failure to function.",
    },
    {
      term: "Statistical infrequency",
      definition: "Behaviour rare in population — e.g., IQ <70.",
    },
    {
      term: "Deviation from ideal mental health",
      definition: "Jahoda's criteria for healthy functioning.",
    },
    {
      term: "Failure to function adequately",
      definition: "Rosenhan & Seligman — can't cope with daily life.",
    },
    {
      term: "DSM-5",
      definition: "Diagnostic and Statistical Manual — US classification.",
    },
    {
      term: "ICD-11",
      definition:
        "International Classification of Diseases — WHO classification.",
    },
  ],
  concepts: [
    {
      id: "eias-psych-u4-abnormal",
      title: "Defining Abnormality",
      skill: "Evaluate criteria for defining mental disorder.",
      lesson: {
        sections: [
          {
            heading: "Four criteria",
            body: "**Statistical infrequency**: rare behaviour = abnormal — but genius also rare (false positive). **Deviation from social norms**: violates accepted behaviour — but norms vary by culture/time. **Failure to function adequately**: can't cope with daily life — but some 'function' despite distress. **Deviation from ideal mental health**: lacks Jahoda's criteria (self-actualisation, autonomy, etc.).\n\n**Evaluation**: no single definition works — combination needed; cultural relativism — what's abnormal in one culture may be normal in another.",
          },
          {
            heading: "Jahoda's ideal mental health",
            body: "**Six criteria**: positive self-attitude, self-actualisation, integration of personality, autonomy, accurate perception of reality, environmental mastery.\n\n**Evaluation**: idealistic — few meet all criteria; Western individualist bias — collectivist cultures value interdependence.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Behaviour is rare but beneficial (e.g., genius). Abnormal by statistical criterion?",
          solution: "Yes — but false positive.",
        },
      },
      questions: [
        {
          id: "eias-psych-u4-ab-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is statistical infrequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Common behaviour" },
              { id: "b", text: "Normal behaviour" },
              { id: "c", text: "Rare behaviour = abnormal" },
              { id: "d", text: "Cultural norm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Statistical infrequency",
                statement: "Rare = abnormal.",
              },
            ],
            steps: [
              {
                reasoning: "Statistical infrequency = rare behaviour.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Rare = abnormal",
            commonErrors: ["Common confused."],
          },
        },
        {
          id: "eias-psych-u4-ab-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two criteria for abnormality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Abnormality criteria",
                statement: "Four approaches.",
              },
            ],
            steps: [
              {
                reasoning: "Statistical infrequency — rare behaviour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Deviation from social norms — violates expectations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Failure to function adequately — can't cope.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Statistical, social norms, function, ideal health.",
            commonErrors: ["Only one.", "Wrong criterion."],
          },
        },
        {
          id: "eias-psych-u4-ab-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one limitation of statistical infrequency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Criterion limits",
                statement: "False positives.",
              },
            ],
            steps: [
              {
                reasoning: "Rare ≠ abnormal — genius, creativity also rare.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Cultural variation — what's rare in one culture may be common in another.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Statistical definition ignores distress/functioning — context matters.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No cutoff point — where does 'rare' end?",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Rare can be positive — false positives.",
            commonErrors: ["Perfect criterion.", "No limitation."],
          },
        },
        {
          id: "eias-psych-u4-ab-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A person hears voices but functions well and feels content.",
          parts: [
            {
              label: "a",
              prompt: "Is this abnormal? Use two criteria.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest why classification is difficult.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Abnormality ambiguity",
                statement: "Criteria conflict.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Statistical infrequency — hearing voices rare → abnormal.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) But functions well + content → not failing to function.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) No single criterion sufficient — need combination.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Cultural context — voices may be valued in some cultures.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) rare but functional (b) criteria conflict+culture",
            commonErrors: ["Clearly abnormal.", "Clearly normal."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u4-classification",
      title: "Classification Systems",
      skill: "Explain DSM-5 and ICD-11 and their purposes.",
      lesson: {
        sections: [
          {
            heading: "Purpose of classification",
            body: "**Diagnosis**: identify disorder for treatment. **Communication**: shared language among professionals. **Research**: group similar cases for study. **Statistics**: track prevalence, plan services.\n\n**DSM-5**: US manual — detailed criteria, used worldwide. **ICD-11**: WHO manual — global standard, includes physical + mental health.",
          },
          {
            heading: "Advantages and disadvantages",
            body: "**Advantages**: standardised diagnosis, research comparability, treatment planning. **Disadvantages**: labels can stigmatise, comorbidity common, categories may not reflect reality (dimensional vs categorical).\n\n**Comorbidity**: patients often have multiple disorders — challenges clear categorisation.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Global health organisation needs universal mental health codes. Which system?",
          solution: "ICD-11.",
        },
      },
      questions: [
        {
          id: "eias-psych-u4-class-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the DSM-5?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "US diagnostic manual" },
              { id: "b", text: "WHO classification" },
              { id: "c", text: "Treatment guide" },
              { id: "d", text: "Research journal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "DSM-5", statement: "US manual." },
            ],
            steps: [
              {
                reasoning: "DSM-5 = US diagnostic manual.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** US manual",
            commonErrors: ["ICD confused."],
          },
        },
        {
          id: "eias-psych-u4-class-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two purposes of classification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Classification purpose",
                statement: "Diagnosis + research.",
              },
            ],
            steps: [
              {
                reasoning: "Diagnosis — identify disorder for treatment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Communication — shared language among professionals.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Research — group cases for study.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Diagnosis, communication, research.",
            commonErrors: ["No purpose.", "Only one."],
          },
        },
        {
          id: "eias-psych-u4-class-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one disadvantage of psychiatric labels.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Label effects",
                statement: "Stigma + self-fulfilling.",
              },
            ],
            steps: [
              {
                reasoning: "Stigma — labels lead to discrimination.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Self-fulfilling prophecy — label shapes behaviour/identity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Comorbidity — labels may not reflect reality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Reductionism — complex experience reduced to label.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Stigma, self-fulfilling, comorbidity.",
            commonErrors: ["No disadvantage.", "Only one."],
          },
        },
        {
          id: "eias-psych-u4-class-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A patient has symptoms of both depression and anxiety.",
          parts: [
            { label: "a", prompt: "What is this called?", marks: 3 },
            {
              label: "b",
              prompt: "Explain implications for diagnosis.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comorbidity",
                statement: "Multiple disorders.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Comorbidity — co-occurrence of disorders.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Common — many patients have multiple conditions.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Challenges categorical classification — disorders overlap.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Treatment must address both — not single label.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Supports dimensional approach — symptoms on spectrum.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) comorbidity (b) challenges categories",
            commonErrors: ["Single diagnosis.", "No implication."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u4-treatments",
      title: "Treatment Approaches",
      skill:
        "Explain biological and psychological treatments for mental disorders.",
      lesson: {
        sections: [
          {
            heading: "Biological treatments",
            body: "**Drug therapy**: antidepressants (SSRIs), antipsychotics, anxiolytics — alter neurotransmitters. **Electroconvulsive therapy (ECT)**: electrical stimulation — severe depression. **Psychosurgery**: rare, controversial — last resort.\n\n**Evaluation**: effective for symptom relief; side effects; doesn't address causes.",
          },
          {
            heading: "Psychological treatments",
            body: "**CBT**: challenge negative thoughts/behaviours — structured, evidence-based. **Behavioural**: exposure therapy, systematic desensitisation — phobias. **Psychoanalytic**: explore unconscious — Freud's approach.\n\n**Evaluation**: CBT effective for anxiety/depression; but requires patient motivation, may not suit all.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Patient with phobia undergoes gradual exposure to feared object. Treatment?",
          solution: "Systematic desensitisation.",
        },
      },
      questions: [
        {
          id: "eias-psych-u4-treat-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is CBT?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Surgery" },
              { id: "b", text: "Psychoanalysis" },
              {
                id: "c",
                text: "Cognitive behavioural therapy — thoughts + behaviours",
              },
              { id: "d", text: "Drug therapy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CBT",
                statement: "Thought + behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "CBT = cognitive + behavioural therapy.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Cognitive behavioural",
            commonErrors: ["Drug confused."],
          },
        },
        {
          id: "eias-psych-u4-treat-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two biological treatments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biological treatments",
                statement: "Drugs + ECT.",
              },
            ],
            steps: [
              {
                reasoning: "Drug therapy — antidepressants, antipsychotics.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "ECT — electrical stimulation for severe depression.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Psychosurgery — rare, controversial last resort.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Drugs, ECT, psychosurgery.",
            commonErrors: ["Psychological.", "Only one."],
          },
        },
        {
          id: "eias-psych-u4-treat-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain systematic desensitisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Systematic desensitisation",
                statement: "Gradual exposure.",
              },
            ],
            steps: [
              {
                reasoning: "Create anxiety hierarchy — rank feared situations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Learn relaxation technique — counter-condition anxiety.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Gradual exposure — start least feared, work up hierarchy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Effective for phobias — pairs feared stimulus with relaxation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Hierarchy + relaxation + gradual exposure.",
            commonErrors: ["Flooding.", "No hierarchy."],
          },
        },
        {
          id: "eias-psych-u4-treat-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A patient has severe depression and hasn't responded to CBT.",
          parts: [
            { label: "a", prompt: "Suggest two treatment options.", marks: 4 },
            {
              label: "b",
              prompt: "Evaluate the biological approach.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Treatment evaluation",
                statement: "Options + critique.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Antidepressants — SSRIs alter serotonin.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) ECT — for severe, treatment-resistant depression.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Effective symptom relief — but side effects.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Doesn't address psychological/social causes — reductionist.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) drugs+ECT (b) relief but side effects",
            commonErrors: ["CBT only.", "No eval."],
          },
        },
      ],
    },
  ],
};
