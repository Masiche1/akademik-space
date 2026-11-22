import type { Lesson } from "../../../types.ts";

export const lesson303: Lesson = {
  id: "edxbtechsc-u3-lesson-3-3",
  code: "3-3",
  title: "Care Settings and the Workforce",
  goal: "I CAN describe the main care settings, the roles of health and social care workers, and the regulation of care services.",
  standards: [
    "BTEC L3 National Health and Social Care — Unit 3: Principles of Health and Social Care Practice",
  ],
  vocabulary: [
    {
      term: "Care setting",
      definition:
        "The environment where care is delivered — hospital, residential home, nursing home, community, supported living.",
    },
    {
      term: "Care worker",
      definition:
        "A registered professional providing personal care — support workers, care assistants, nurses, social workers.",
    },
    {
      term: "Regulator",
      definition:
        "Body overseeing care quality — CQC (England), CIW (Wales), CSSIW (Scotland), RQIA (NI).",
    },
    {
      term: "Care Certificate",
      definition:
        "The minimum training standard for adult social care workers in England.",
    },
  ],
  concepts: [
    {
      id: "edxbtechsc-u3-l3-settings",
      title: "Types of Care Settings",
      skill: "Describe and compare the main care settings and their purposes.",
      lesson: {
        sections: [
          {
            heading: "Health vs social care settings",
            body: "**Health care** settings focus on treatment: hospitals (acute care), GP surgeries (primary care), clinics, emergency departments. Staff are regulated health professionals (doctors, nurses).\n\n**Social care** settings focus on daily living support: residential care homes (24-hour care), nursing homes (nursing + personal care), domiciliary care (visits to people's homes), day centres, supported living. Social care staff include care workers, support workers, social workers.",
          },
          {
            heading: "Community and specialist settings",
            body: "**Community settings** include: **domiciliary care** (help at home), **extra-care/sheltered housing** (independent living with support available), **supported living** (own tenancy + tailored support), **respite care** (temporary relief for carers), **hospice care** (end-of-life).\n\nSpecialist settings: mental health units, learning disability services, substance misuse services, children's services. The trend is **care in the community** — supporting people in their own homes rather than institutions.",
          },
        ],
        keyFormulas: [
          {
            name: "Setting choice",
            statement:
              "Depends on needs: acute → hospital; daily support → residential; independence → domiciliary/supported living.",
          },
          {
            name: "Health vs social care",
            statement:
              "Health = treatment; social care = daily living support.",
          },
        ],
        workedExample: {
          problem:
            "An elderly person with mobility issues but good cognition wants to stay at home. Which settings might suit?",
          solution:
            "Domiciliary care (visiting support), sheltered housing (if housing unsuitable), or supported living — balancing independence with safety.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u3-l3-settings-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which setting provides 24-hour personal care for people who cannot live independently?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Residential care home" },
              { id: "b", text: "Domiciliary care" },
              { id: "c", text: "Day centre" },
              { id: "d", text: "GP surgery" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Residential care",
                statement: "24-hour accommodation + personal care.",
              },
            ],
            steps: [
              {
                reasoning: "Residential home = 24hr care.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Residential care home",
            commonErrors: ["Confusing with domiciliary (visiting)."],
          },
        },
        {
          id: "edxbtechsc-u3-l3-settings-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between a residential care home and a nursing home.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Residential vs nursing",
                statement:
                  "Residential = personal care; nursing = nursing care + personal care.",
              },
            ],
            steps: [
              {
                reasoning: "Residential: personal care, no nursing staff.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Nursing: registered nurses + medical care.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Residential = personal care only; nursing home = nursing + personal care for complex needs.",
            commonErrors: ["Terms conflated.", "No staffing distinction."],
          },
        },
        {
          id: "edxbtechsc-u3-l3-settings-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the shift from institutional care to care in the community.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Community care",
                statement:
                  "Policy shift supports independence but requires adequate community services.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefits: independence, familiarity, cost-effectiveness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Challenges: service gaps, carer burden, isolation.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Weighs both sides.", marks: 1, markCode: "R" },
              { reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Community care promotes independence but needs adequate services; not suitable for all needs.",
            commonErrors: ["One-sided.", "No practical consideration."],
          },
        },
        {
          id: "edxbtechsc-u3-l3-settings-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 75-year-old with early dementia lives alone and is struggling.",
          parts: [
            {
              label: "a",
              prompt: "Identify three care settings that could support them.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Compare the benefits of two of these settings.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Identify one factor that should influence the choice.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Setting selection",
                statement:
                  "Match setting to needs: safety, independence, clinical needs, preferences.",
              },
            ],
            steps: [
              {
                reasoning: "Setting 1 e.g. domiciliary care.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Setting 2 e.g. sheltered housing.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Setting 3 e.g. residential/memory care.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Benefit of setting 1: independence/familiarity.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Benefit of setting 2: safety + support.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Comparison clear.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Relevant factor e.g. safety vs preference/cost.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Factor linked to decision.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) domiciliary/sheltered/residential (b) independence vs safety (c) e.g. risk level vs preference",
            commonErrors: ["Settings not matched to needs.", "No comparison."],
          },
        },
      ],
    },
    {
      id: "edxbtechsc-u3-l3-workforce",
      title: "The Care Workforce and Regulation",
      skill:
        "Describe the roles of care workers, the Care Certificate, and how care services are regulated.",
      lesson: {
        sections: [
          {
            heading: "Care roles",
            body: "**Care workers/support workers** provide personal care — washing, dressing, feeding, mobility — often the most frequent contact with service users. **Nurses** deliver clinical care — medication, wound care, assessments. **Social workers** assess needs, coordinate services and protect vulnerable people.\n\n**Healthcare assistants** support nurses; **occupational therapists** help with daily living skills; **physiotherapists** restore movement; **psychologists** address mental health; **GPs/doctors** diagnose and treat. The **Care Certificate** is the minimum standard for adult social care workers.",
          },
          {
            heading: "Regulation and standards",
            body: "The **Care Quality Commission (CQC)** regulates English care services — inspecting and rating them (Outstanding, Good, Requires Improvement, Inadequate). Registration is required for providers; managers must be fit and qualified.\n\nStandards include: person-centred care, dignity and respect, safeguarding, staffing levels, training, complaints handling. **Skills for Care** and **Skills for Health** set workforce standards. Professional bodies (NMC for nurses, HCPC for therapists) maintain registers and codes of conduct.",
          },
        ],
        keyFormulas: [
          {
            name: "CQC ratings",
            statement:
              "Outstanding / Good / Requires Improvement / Inadequate.",
          },
          {
            name: "Care Certificate",
            statement: "Minimum training standard for care workers.",
          },
        ],
        workedExample: {
          problem: "What does CQC registration mean for a care home?",
          solution:
            "The provider must meet fundamental standards — safe, effective, caring, responsive, well-led — and is subject to inspection and rating.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u3-l3-workforce-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which body regulates care services in England?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Care Quality Commission" },
              { id: "b", text: "Skills for Care" },
              { id: "c", text: "Department of Health" },
              { id: "d", text: "NHS England" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CQC",
                statement: "Regulates/registers care providers in England.",
              },
            ],
            steps: [
              {
                reasoning: "CQC = care regulator in England.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** CQC",
            commonErrors: ["Confusing NHS commissioning with regulation."],
          },
        },
        {
          id: "edxbtechsc-u3-l3-workforce-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between the roles of a care worker and a social worker.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Care vs social worker",
                statement:
                  "Care worker = hands-on personal care; social worker = assessment, coordination, protection.",
              },
            ],
            steps: [
              {
                reasoning: "Care worker role described.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Social worker role described.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Care worker: personal care tasks; social worker: assessment, care planning, safeguarding.",
            commonErrors: ["Roles conflated.", "No distinction."],
          },
        },
        {
          id: "edxbtechsc-u3-l3-workforce-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the importance of the Care Certificate in ensuring care quality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Care Certificate",
                statement:
                  "Minimum training standard ensures baseline competence.",
              },
            ],
            steps: [
              {
                reasoning: "Sets minimum competency standard.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Covers essential topics (safeguarding, dignity, health).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitations: minimum ≠ sufficient for complex roles.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Balanced evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Care Certificate ensures baseline competence but is a minimum — ongoing training and supervision still needed.",
            commonErrors: ["One-sided.", "No limitations."],
          },
        },
        {
          id: "edxbtechsc-u3-l3-workforce-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A care provider receives a 'Requires Improvement' CQC rating.",
          parts: [
            { label: "a", prompt: "Explain what the rating means.", marks: 2 },
            {
              label: "b",
              prompt: "Identify three areas the provider must address.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest how the provider could demonstrate improvement.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CQC regulation",
                statement:
                  "Ratings drive quality improvement; providers must address concerns.",
              },
            ],
            steps: [
              {
                reasoning: "Rating meaning: below expected standards.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Risk of further downgrade/closure.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Area 1 e.g. safeguarding concerns.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Area 2 e.g. staffing/training gaps.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Area 3 e.g. person-centred care failures.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Action 1 e.g. training programme.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Action 2 e.g. policy review/staff supervision.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Action 3 e.g. user feedback/complaints handling.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) below standards, improvement required (b) safeguarding/staffing/PCC (c) training/policy/feedback",
            commonErrors: ["Rating misunderstood.", "No improvement actions."],
          },
        },
      ],
    },
  ],
};
