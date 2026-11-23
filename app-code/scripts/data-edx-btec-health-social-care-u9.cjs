module.exports = [
  {
    file: "lesson-9-1.ts",
    exportName: "lesson901",
    lesson: {
      id: "edxbtechsc-u9-lesson-9-1",
      code: "9-1",
      title: "Understanding Dementia",
      goal: "I CAN describe the causes, types, symptoms and progression of dementia.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 9: Dementia and Care of Older Adults (extended certificate)",
      ],
      vocabulary: [
        { term: "Dementia", definition: "A group of conditions involving progressive decline in cognitive function affecting memory, thinking, communication and daily living." },
        { term: "Alzheimer's disease", definition: "The most common form of dementia, characterised by plaques and tangles in the brain." },
        { term: "Vascular dementia", definition: "Dementia caused by reduced blood flow to the brain, often after strokes or TIAs." },
        { term: "Lewy body dementia", definition: "Dementia associated with abnormal protein deposits, causing fluctuations in cognition and visual hallucinations." },
        { term: "Frontotemporal dementia", definition: "Dementia affecting personality, behaviour and language, often occurring at a younger age." },
        { term: "Cognitive impairment", definition: "Reduced ability to think, remember, reason and make decisions — a feature of dementia." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u9-l1-types",
          title: "Types and Causes of Dementia",
          skill: "Identify the main types of dementia and their underlying causes.",
          sections: [
            {
              heading: "What dementia is",
              body: "Dementia is not a single disease but a **syndrome** — a collection of symptoms caused by various brain diseases. It involves progressive decline in **memory**, **language**, **orientation**, **judgement** and **ability to carry out daily activities**. It is not a normal part of ageing, though risk increases with age. Over 850,000 people in the UK have dementia.",
            },
            {
              heading: "Main types",
              body: "**Alzheimer's disease** (~60-70% of cases): amyloid plaques and tau tangles damage neurons; memory loss is the earliest feature. **Vascular dementia** (~15-20%): reduced blood supply from strokes/TIAs; symptoms often appear suddenly and progress in steps. **Lewy body dementia**: abnormal alpha-synuclein deposits; fluctuating cognition, visual hallucinations, Parkinsonism. **Frontotemporal dementia**: affects personality, behaviour and language; often under 65.",
            },
          ],
          keyFormulas: [
            { name: "Dementia types", statement: "Alzheimer's, vascular, Lewy body, frontotemporal." },
            { name: "Alzheimer's share", statement: "~60-70% of dementia cases." },
            { name: "Vascular pattern", statement: "Sudden onset, stepwise decline after strokes/TIAs." },
          ],
          workedExample: {
            problem: "A 78-year-old has had two strokes and now shows stepwise decline in memory and orientation. Which type of dementia is most likely?",
            solution:
              "Vascular dementia — caused by cerebrovascular damage from strokes, with sudden onset and stepwise progression rather than gradual decline.",
          },
          questions: [
            {
              id: "edxbtechsc-u9-l1-tc-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which is the most common type of dementia?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Vascular dementia" },
                  { id: "b", text: "Lewy body dementia" },
                  { id: "c", text: "Alzheimer's disease" },
                  { id: "d", text: "Frontotemporal dementia" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Alzheimer's disease", statement: "Most common dementia, ~60-70% of cases." }],
                steps: [{ reasoning: "Alzheimer's is the most prevalent type of dementia.", marks: 2, markCode: "B" }],
                finalAnswer: "**(c)** — Alzheimer's disease",
              },
            },
            {
              id: "edxbtechsc-u9-l1-tc-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Define dementia and state whether it is a normal part of ageing.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Dementia", statement: "Progressive cognitive decline syndrome, not normal ageing." }],
                steps: [
                  { reasoning: "Dementia = syndrome of progressive decline in memory, thinking, communication and daily living.", marks: 1, markCode: "M" },
                  { reasoning: "It is not a normal part of ageing — it is caused by brain diseases.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Progressive cognitive decline syndrome; not normal ageing",
              },
            },
            {
              id: "edxbtechsc-u9-l1-tc-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Compare the causes of Alzheimer's disease and vascular dementia.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Alzheimer's vs vascular", statement: "Degenerative plaques/tangles vs cerebrovascular damage." }],
                steps: [
                  { reasoning: "Alzheimer's: amyloid plaques and tau tangles damage neurons degeneratively.", marks: 1, markCode: "M" },
                  { reasoning: "Vascular: reduced blood flow to brain from strokes/TIAs causes stepwise damage.", marks: 1, markCode: "M" },
                  { reasoning: "Different pathology but both cause progressive cognitive decline.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Alzheimer's = neurodegenerative plaques/tangles; vascular = stroke-related blood flow loss",
              },
            },
            {
              id: "edxbtechsc-u9-l1-tc-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Define dementia. (b) Name four types of dementia. (c) Describe the cause of Alzheimer's disease. (d) Describe the cause of vascular dementia. (e) Explain why dementia is described as a 'syndrome' rather than a single disease.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Dementia types", statement: "Alzheimer's, vascular, Lewy body, frontotemporal." }],
                steps: [
                  { reasoning: "(a) Syndrome of progressive cognitive decline affecting memory, thinking and daily living.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Alzheimer's, vascular, Lewy body, frontotemporal.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Amyloid plaques and tau tangles damage neurons.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Reduced blood flow to brain from strokes/TIAs.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Multiple diseases cause similar symptoms — not one single condition.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Dementia is a syndrome caused by several distinct brain diseases.",
              },
            },
            {
              id: "edxbtechsc-u9-l1-tc-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A 70-year-old experiences fluctuating confusion, vivid visual hallucinations, and movement difficulties. (a) Identify the most likely type of dementia. (b) Explain two features that support this diagnosis. (c) Describe how this differs from Alzheimer's disease. (d) State two implications for care.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Lewy body dementia", statement: "Fluctuating cognition, visual hallucinations, Parkinsonism." }],
                steps: [
                  { reasoning: "(a) Lewy body dementia.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Two features: fluctuating cognition, visual hallucinations, Parkinsonism/movement issues.", marks: 2, markCode: "A" },
                  { reasoning: "(c) Alzheimer's has gradual memory-predominant decline; LBD has fluctuations, hallucinations, motor symptoms.", marks: 2, markCode: "R" },
                  { reasoning: "(d) Two implications: antipsychotics can worsen symptoms, hallucinations need sensitive response, movement needs may increase.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Lewy body dementia — fluctuating cognition, hallucinations, Parkinsonism; requires tailored care.",
              },
            },
            {
              id: "edxbtechsc-u9-l1-tc-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss the causes and types of dementia. Your answer should cover: (a) the definition of dementia as a syndrome; (b) the four main types; (c) the cause of Alzheimer's disease; (d) the cause of vascular dementia; (e) the distinctive features of Lewy body dementia; (f) risk factors for dementia; (g) why dementia is not a normal part of ageing.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Dementia types and causes", statement: "Multiple brain diseases cause progressive cognitive decline." }],
                steps: [
                  { reasoning: "(a) Dementia = syndrome of progressive decline in memory, thinking, communication and daily living.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Four types: Alzheimer's, vascular, Lewy body, frontotemporal.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Alzheimer's: amyloid plaques and tau tangles damage neurons.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Vascular: reduced blood flow from strokes/TIAs causes stepwise damage.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Lewy body: alpha-synuclein deposits; fluctuating cognition, visual hallucinations, Parkinsonism.", marks: 2, markCode: "M" },
                  { reasoning: "(f) Risk factors: age, genetics, cardiovascular disease, lifestyle (smoking, alcohol, inactivity).", marks: 2, markCode: "A" },
                  { reasoning: "(g) While risk rises with age, dementia is caused by diseases — not inevitable or normal.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Dementia is a syndrome of several brain diseases; types differ in cause and presentation.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u9-l1-symptoms",
          title: "Symptoms, Progression and Diagnosis of Dementia",
          skill: "Describe the symptoms, stages and diagnostic process of dementia.",
          sections: [
            {
              heading: "Symptoms and progression",
              body: "Early symptoms include **memory loss** (especially recent events), difficulty with complex tasks, word-finding problems and disorientation. As dementia progresses: confusion, personality changes, wandering, incontinence, loss of ability to communicate and eventually full dependence. Progression varies by type — Alzheimer's is gradual; vascular is stepwise. Symptoms cause distress for the person and their family.",
            },
            {
              heading: "Diagnosis",
              body: "Diagnosis involves **history taking** (from person and family), **cognitive assessment** (e.g. MMSE, ACE-R), **physical examination**, **blood tests** to rule out reversible causes (e.g. vitamin B12 deficiency, thyroid problems), and **brain imaging** (CT/MRI) to identify changes. Early diagnosis enables planning, treatment of reversible causes and access to support services.",
            },
          ],
          keyFormulas: [
            { name: "Early symptoms", statement: "Memory loss, word-finding, disorientation, complex task difficulty." },
            { name: "Progression", statement: "Alzheimer's gradual; vascular stepwise; LBD fluctuating." },
            { name: "Diagnosis", statement: "History + cognitive tests + blood tests + brain imaging." },
          ],
          workedExample: {
            problem: "A GP suspects dementia in a patient with memory loss. Describe the diagnostic process.",
            solution:
              "Take history from patient and family, perform cognitive assessment (e.g. MMSE), check physical health and blood tests to exclude reversible causes, and arrange brain imaging to confirm structural changes.",
          },
          questions: [
            {
              id: "edxbtechsc-u9-l1-sp-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which is an early symptom of dementia?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Complete loss of mobility" },
                  { id: "b", text: "Difficulty finding words and forgetting recent events" },
                  { id: "c", text: "Sudden blindness" },
                  { id: "d", text: "Loss of bladder control only" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Early dementia symptoms", statement: "Memory loss, word-finding problems, disorientation." }],
                steps: [{ reasoning: "Early symptoms involve memory and language, not physical decline.", marks: 2, markCode: "B" }],
                finalAnswer: "**(b)** — word-finding and recent memory loss",
              },
            },
            {
              id: "edxbtechsc-u9-l1-sp-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "State two purposes of early diagnosis of dementia.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Early diagnosis", statement: "Enables planning, treatment and support." }],
                steps: [{ reasoning: "Any two: rule out reversible causes, access treatment and support, plan for future, involve family early.", marks: 2, markCode: "A" }],
                finalAnswer: "e.g. rule out reversible causes and enable planning",
              },
            },
            {
              id: "edxbtechsc-u9-l1-sp-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Describe how symptoms of dementia typically progress over time.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Dementia progression", statement: "Gradual decline from memory loss to full dependence." }],
                steps: [
                  { reasoning: "Early: memory loss, word-finding, disorientation.", marks: 1, markCode: "M" },
                  { reasoning: "Middle: confusion, personality change, wandering, difficulty with daily tasks.", marks: 1, markCode: "M" },
                  { reasoning: "Late: loss of communication, incontinence, full dependence on care.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Progressive decline from early memory loss to late-stage dependence",
              },
            },
            {
              id: "edxbtechsc-u9-l1-sp-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) List four early symptoms of dementia. (b) Describe the diagnostic process. (c) Explain why blood tests are important. (d) State what brain imaging can show. (e) Explain how family members contribute to diagnosis.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Dementia diagnosis", statement: "History, cognitive tests, blood tests, imaging, family input." }],
                steps: [
                  { reasoning: "(a) Any four: memory loss, word-finding, disorientation, complex task difficulty, mood changes.", marks: 1, markCode: "M" },
                  { reasoning: "(b) History, cognitive assessment, physical exam, blood tests, brain imaging.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Rule out reversible causes like B12 deficiency or thyroid problems.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Shows brain atrophy, vascular changes, tumours or other structural abnormalities.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Provide collateral history of changes over time that person may not recall.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Diagnosis combines clinical assessment, tests and family history to confirm and type dementia.",
              },
            },
            {
              id: "edxbtechsc-u9-l1-sp-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A family reports their mother has become increasingly confused over six months, forgets recent conversations, and has got lost twice. (a) Identify likely stage of dementia. (b) Describe three symptoms consistent with this. (c) Explain how progression might differ if vascular dementia were the cause. (d) State two ways early diagnosis would benefit the family.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Recognising dementia progression", statement: "Gradual memory loss and disorientation suggest early-to-moderate stage." }],
                steps: [
                  { reasoning: "(a) Early-to-moderate stage dementia.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Three symptoms: recent memory loss, confusion, disorientation, getting lost.", marks: 2, markCode: "A" },
                  { reasoning: "(c) Vascular would show sudden onset and stepwise decline after strokes rather than gradual worsening.", marks: 2, markCode: "R" },
                  { reasoning: "(d) Two benefits: access to treatment/support, plan for future, rule out reversible causes.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Early-to-moderate dementia; vascular would be stepwise, Alzheimer's gradual.",
              },
            },
            {
              id: "edxbtechsc-u9-l1-sp-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss the symptoms, progression and diagnosis of dementia. Your answer should cover: (a) early symptoms; (b) how symptoms progress; (c) differences in progression between Alzheimer's and vascular dementia; (d) the diagnostic process; (e) why blood tests are needed; (f) the role of brain imaging; (g) benefits of early diagnosis.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Dementia symptoms and diagnosis", statement: "Progressive decline diagnosed through assessment, tests and imaging." }],
                steps: [
                  { reasoning: "(a) Early symptoms: memory loss, word-finding, disorientation, complex task difficulty.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Progression to confusion, personality change, wandering, incontinence, dependence.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Alzheimer's gradual; vascular stepwise after strokes.", marks: 1, markCode: "R" },
                  { reasoning: "(d) Diagnostic process: history, cognitive tests, physical exam, blood tests, imaging.", marks: 2, markCode: "M" },
                  { reasoning: "(e) Blood tests exclude reversible causes (B12, thyroid).", marks: 1, markCode: "M" },
                  { reasoning: "(f) Imaging shows atrophy, vascular damage, tumours.", marks: 1, markCode: "M" },
                  { reasoning: "(g) Early diagnosis enables treatment, planning and support.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Dementia progresses from memory loss to dependence; diagnosis is multi-modal and enables early support.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u9-l1-notes",
      title: "Understanding Dementia — notes",
      summary: "Dementia is a syndrome of several brain diseases; Alzheimer's is most common, vascular is stepwise, LBD has hallucinations.",
      sections: [
        { heading: "Types", body: "Alzheimer's (60-70%), vascular, Lewy body, frontotemporal — each with distinct pathology." },
        { heading: "Symptoms", body: "Progress from memory loss and word-finding problems to confusion, wandering and dependence." },
        { heading: "Diagnosis", body: "History + cognitive tests + blood tests (exclude reversible causes) + brain imaging." },
      ],
    },
  },
  {
    file: "lesson-9-2.ts",
    exportName: "lesson902",
    lesson: {
      id: "edxbtechsc-u9-lesson-9-2",
      code: "9-2",
      title: "Person-Centred Dementia Care",
      goal: "I CAN describe person-centred approaches, communication and behaviour management in dementia care.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 9: Dementia and Care of Older Adults (extended certificate)",
      ],
      vocabulary: [
        { term: "Person-centred care", definition: "Care that treats the individual as a whole person, respecting their preferences, history and dignity." },
        { term: "Validation therapy", definition: "Approach that acknowledges the person's feelings and reality rather than correcting them." },
        { term: "Reality orientation", definition: "Approach that uses cues (clocks, calendars, signs) to help the person stay oriented to time and place." },
        { term: "Challenging behaviour", definition: "Behaviour that challenges carers or the environment, often expressing unmet needs in dementia." },
        { term: "Life story work", definition: "Gathering and using personal history to personalise care and support identity." },
        { term: "Reminiscence therapy", definition: "Using memories and past experiences to improve wellbeing and communication." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u9-l2-communication",
          title: "Communication and Person-Centred Approaches",
          skill: "Apply person-centred communication and approaches when caring for people with dementia.",
          sections: [
            {
              heading: "Communication challenges",
              body: "Dementia affects language and cognition, making communication difficult. Strategies include: **slow speech**, **short sentences**, **one idea at a time**, **eye contact**, **non-verbal cues** (touch, gesture), and **patience**. **Validation therapy** accepts the person's reality — if they think it's 1960, don't argue; acknowledge their feelings. **Reality orientation** uses environmental cues but should not cause distress.",
            },
            {
              heading: "Person-centred care and life story",
              body: "Person-centred care sees the person, not the disease: preserve **identity**, **dignity** and **autonomy**. **Life story work** gathers personal history (hobbies, family, career, preferences) to personalise care and trigger positive memories. **Reminiscence therapy** uses photos, music and familiar objects to improve mood and communication. Familiar environments, routines and objects reduce anxiety and support orientation.",
            },
          ],
          keyFormulas: [
            { name: "Communication strategies", statement: "Slow, short sentences, eye contact, non-verbal cues, patience." },
            { name: "Validation", statement: "Acknowledge feelings and reality; don't argue or correct." },
            { name: "Life story work", statement: "Personal history → personalised care and identity." },
          ],
          workedExample: {
            problem: "A resident with dementia insists it is 1955 and asks to see their late husband. How should a care worker respond?",
            solution:
              "Use validation — acknowledge their feelings ('You must miss him') without arguing about the date. Offer comfort and redirect gently, perhaps with a photo or familiar object.",
          },
          questions: [
            {
              id: "edxbtechsc-u9-l2-pc-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which communication strategy is most appropriate for a person with dementia?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Speaking quickly and giving complex instructions" },
                  { id: "b", text: "Speaking slowly, using short sentences and maintaining eye contact" },
                  { id: "c", text: "Correcting every mistake they make" },
                  { id: "d", text: "Ignoring non-verbal cues" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "method", name: "Dementia communication", statement: "Slow, simple, patient, non-verbal aware." }],
                steps: [{ reasoning: "Slow speech, short sentences and eye contact support comprehension.", marks: 2, markCode: "B" }],
                finalAnswer: "**(b)** — slow, short, eye contact",
              },
            },
            {
              id: "edxbtechsc-u9-l2-pc-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Define validation therapy.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Validation therapy", statement: "Acknowledge feelings and reality without arguing." }],
                steps: [{ reasoning: "Accept the person's reality and emotions rather than correcting them — reduces distress.", marks: 2, markCode: "M" }],
                finalAnswer: "Acknowledging feelings and reality without arguing or correcting",
              },
            },
            {
              id: "edxbtechsc-u9-l2-pc-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain how life story work supports person-centred dementia care.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Life story work", statement: "Personal history personalises care and preserves identity." }],
                steps: [
                  { reasoning: "Gathers personal history: hobbies, family, career, preferences.", marks: 1, markCode: "M" },
                  { reasoning: "Enables personalised activities, conversations and care choices.", marks: 1, markCode: "M" },
                  { reasoning: "Preserves sense of identity and self-worth despite cognitive decline.", marks: 1, markCode: "R" }],
                finalAnswer: "Life story work personalises care and maintains identity",
              },
            },
            {
              id: "edxbtechsc-u9-l2-pc-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Define person-centred care. (b) Describe validation therapy. (c) Explain three communication strategies for dementia. (d) State the purpose of life story work. (e) Describe one way to use reminiscence therapy.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Person-centred dementia care", statement: "Respects identity, uses validation and personal history." }],
                steps: [
                  { reasoning: "(a) Care treating person as whole, respecting preferences, history and dignity.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Acknowledging feelings/reality without arguing or correcting.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Three strategies: slow speech, short sentences, eye contact, non-verbal cues, patience.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Personal history → personalised care and identity preservation.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Use photos, music, familiar objects to trigger memories and improve mood.", marks: 1, markCode: "A" }],
                finalAnswer: "Person-centred dementia care respects identity, uses validation and personalises through life story.",
              },
            },
            {
              id: "edxbtechsc-u9-l2-pc-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A resident with Alzheimer's repeatedly asks for her mother, who died 20 years ago. (a) Identify the communication challenge. (b) Explain how validation would help. (c) Describe how reality orientation might be used appropriately. (d) Suggest how life story work could support her. (e) Explain why correcting her would be unhelpful.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Validation in dementia care", statement: "Acknowledge feelings; don't argue with the person's reality." }],
                steps: [
                  { reasoning: "(a) Memory loss leads to seeking deceased mother — distress and disorientation.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Validation: acknowledge her feelings ('You must miss her') without correcting.", marks: 2, markCode: "A" },
                  { reasoning: "(c) Reality orientation: gentle cues about current date/place without causing distress.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Life story: photos and stories of mother can provide comfort and connection.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Correcting causes confusion, distress and erodes trust and self-esteem.", marks: 1, markCode: "R" }],
                finalAnswer: "Validate feelings, use gentle orientation and life story to comfort without arguing.",
              },
            },
            {
              id: "edxbtechsc-u9-l2-pc-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss person-centred approaches in dementia care. Your answer should cover: (a) what person-centred care means; (b) communication strategies; (c) validation therapy; (d) life story work; (e) reminiscence therapy; (f) how these approaches preserve dignity; (g) why they are more effective than task-focused care.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Person-centred dementia care", statement: "Care that respects identity, uses validation and personalises through life story." }],
                steps: [
                  { reasoning: "(a) Treating person as whole — preferences, history, dignity, autonomy.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Communication: slow, short sentences, eye contact, non-verbal cues, patience.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Validation: acknowledge feelings and reality without arguing.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Life story work: personal history → personalised care.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Reminiscence: photos, music, objects trigger positive memories.", marks: 1, markCode: "M" },
                  { reasoning: "(f) These preserve identity, self-worth and dignity despite cognitive decline.", marks: 2, markCode: "R" },
                  { reasoning: "(g) More effective: reduces distress, improves mood, supports communication and wellbeing.", marks: 2, markCode: "R" }],
                finalAnswer: "Person-centred dementia care preserves dignity and improves outcomes through validation and personalisation.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u9-l2-behaviour",
          title: "Managing Behaviour and Supporting Daily Living",
          skill: "Understand and respond to challenging behaviour and support daily living in dementia.",
          sections: [
            {
              heading: "Challenging behaviour",
              body: "'Challenging behaviour' in dementia (agitation, aggression, wandering, shouting) usually expresses **unmet needs** — pain, hunger, thirst, boredom, fear, or inability to communicate. The person may not understand what's happening or feel safe. Responses: identify the cause, reduce triggers, provide reassurance, ensure basic needs are met, and avoid confrontation. **Physical restraint** should be avoided; de-escalation and diversion are preferred.",
            },
            {
              heading: "Daily living support",
              body: "Support daily activities while preserving independence: **prompts rather than doing for** the person, **routine and familiarity**, **adapted environment** (labels, contrasting colours, safe wandering spaces), **dignity in personal care** (privacy, choice, respect). Monitor for pain, infection or medication side-effects that may cause behaviour changes — always rule out physical causes first.",
            },
          ],
          keyFormulas: [
            { name: "Challenging behaviour", statement: "Usually expresses unmet needs — find the cause." },
            { name: "De-escalation", statement: "Calm, non-confrontational, identify and meet the need." },
            { name: "Prompts not doing", statement: "Support independence; don't take over tasks." },
          ],
          workedExample: {
            problem: "A resident with dementia becomes aggressive at bath time. How should a care worker respond?",
            solution:
              "Recognise aggression may express fear or discomfort. Ensure privacy and warmth, explain steps slowly, offer choice, and if distress persists, postpone and try later. Check for pain or infection.",
          },
          questions: [
            {
              id: "edxbtechsc-u9-l2-bd-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Challenging behaviour in dementia is most often caused by:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The person being deliberately difficult" },
                  { id: "b", text: "Unmet needs such as pain, hunger or fear" },
                  { id: "c", text: "Medications always" },
                  { id: "d", text: "The person's personality unchanged" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "principle", name: "Challenging behaviour", statement: "Usually expresses unmet needs or distress." }],
                steps: [{ reasoning: "Behaviour is communication of unmet needs — pain, fear, hunger, boredom.", marks: 2, markCode: "B" }],
                finalAnswer: "**(b)** — unmet needs",
              },
            },
            {
              id: "edxbtechsc-u9-l2-bd-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "State two reasons why physical restraint should be avoided in dementia care.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Avoiding restraint", statement: "Restraint causes distress, injury and rights violations." }],
                steps: [{ reasoning: "Any two: causes distress/aggression, risk of injury, violates dignity/rights, increases falls.", marks: 2, markCode: "A" }],
                finalAnswer: "e.g. causes distress and violates dignity",
              },
            },
            {
              id: "edxbtechsc-u9-l2-bd-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Describe three strategies to support daily living for a person with dementia while preserving independence.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Supporting daily living", statement: "Prompts, routine, adapted environment, dignity." }],
                steps: [
                  { reasoning: "Use prompts rather than doing tasks for the person.", marks: 1, markCode: "M" },
                  { reasoning: "Maintain routine and familiar environment to reduce anxiety.", marks: 1, markCode: "M" },
                  { reasoning: "Adapt environment (labels, colours, safe spaces) and preserve dignity in personal care.", marks: 1, markCode: "A" }],
                finalAnswer: "Prompts, routine, adapted environment — preserve independence and dignity.",
              },
            },
            {
              id: "edxbtechsc-u9-l2-bd-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Define challenging behaviour. (b) Explain three possible causes. (c) Describe the preferred response approach. (d) Explain why physical causes should be ruled out first. (e) State one de-escalation technique.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Managing challenging behaviour", statement: "Find the unmet need; de-escalate; rule out physical causes." }],
                steps: [
                  { reasoning: "(a) Behaviour that challenges carers/environment — often expressing unmet needs.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Three causes: pain, hunger/thirst, fear, boredom, infection, medication side-effects.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Identify cause, reassure, meet need, divert — non-confrontational.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Physical illness (UTI, pain) can cause sudden behaviour change — treat cause.", marks: 1, markCode: "A" },
                  { reasoning: "(e) One technique: calm voice, slow movements, distraction, leaving space, offering choice.", marks: 1, markCode: "R" }],
                finalAnswer: "Challenging behaviour signals unmet needs; respond calmly and rule out physical causes.",
              },
            },
            {
              id: "edxbtechsc-u9-l2-bd-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A resident with mid-stage dementia becomes agitated every evening ('sundowning'), pacing and shouting. (a) Explain what sundowning is. (b) Describe three possible triggers. (c) Suggest four care strategies. (d) State when medication might be considered.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Managing sundowning", statement: "Evening agitation — reduce triggers, maintain routine, calm environment." }],
                steps: [
                  { reasoning: "(a) Sundowning = increased confusion/agitation in late afternoon/evening.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Three triggers: fatigue, low light/shadows, hunger, unmet needs, routine disruption.", marks: 2, markCode: "A" },
                  { reasoning: "(c) Four strategies: consistent routine, good lighting, calm reassurance, meet needs, reduce noise, familiar objects.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Medication only if non-pharmacological approaches fail and risk is significant — review regularly.", marks: 1, markCode: "R" }],
                finalAnswer: "Sundowning needs routine, lighting, reassurance; medication only as last resort.",
              },
            },
            {
              id: "edxbtechsc-u9-l2-bd-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss supporting daily living and managing behaviour in dementia. Your answer should cover: (a) what challenging behaviour means; (b) likely causes; (c) why behaviour is a form of communication; (d) de-escalation strategies; (e) why restraint should be avoided; (f) strategies for daily living; (g) the importance of person-centred, dignified care.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Dementia behaviour support", statement: "Behaviour expresses unmet needs; respond calmly and preserve dignity." }],
                steps: [
                  { reasoning: "(a) Challenging behaviour = actions challenging carers/environment.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Causes: unmet needs (pain, hunger, fear), physical illness, environment, routine changes.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Behaviour communicates needs the person cannot express verbally.", marks: 1, markCode: "R" },
                  { reasoning: "(d) De-escalation: calm voice, slow movements, reassurance, distraction, space.", marks: 2, markCode: "M" },
                  { reasoning: "(e) Restraint causes distress, injury, violates rights — avoid.", marks: 1, markCode: "R" },
                  { reasoning: "(f) Daily living: prompts not doing, routine, adapted environment, dignity in personal care.", marks: 2, markCode: "M" },
                  { reasoning: "(g) Person-centred care preserves identity, autonomy and wellbeing.", marks: 1, markCode: "R" }],
                finalAnswer: "Challenging behaviour expresses unmet needs; respond calmly, preserve dignity, avoid restraint.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u9-l2-notes",
      title: "Person-Centred Dementia Care — notes",
      summary: "Person-centred care uses validation, life story and reminiscence; challenging behaviour signals unmet needs.",
      sections: [
        { heading: "Communication", body: "Slow, short sentences, eye contact, validation — don't argue with the person's reality." },
        { heading: "Personalisation", body: "Life story work and reminiscence preserve identity and improve wellbeing." },
        { heading: "Behaviour", body: "Challenging behaviour = unmet needs; de-escalate, avoid restraint, rule out physical causes." },
      ],
    },
  },
  {
    file: "lesson-9-3.ts",
    exportName: "lesson903",
    lesson: {
      id: "edxbtechsc-u9-lesson-9-3",
      code: "9-3",
      title: "Health Needs of Older Adults and Loss",
      goal: "I CAN describe the health needs of older adults and support people experiencing loss and bereavement.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 9: Dementia and Care of Older Adults (extended certificate)",
      ],
      vocabulary: [
        { term: "Frailty", definition: "A state of increased vulnerability to stressors due to age-related decline across multiple body systems." },
        { term: "Falls", definition: "A leading cause of injury in older adults, often due to muscle weakness, poor balance and environmental hazards." },
        { term: "Malnutrition", definition: "Poor nutritional status from inadequate intake — common in older adults due to appetite loss, swallowing problems or isolation." },
        { term: "Bereavement", definition: "The period of grief and mourning after the death of someone close." },
        { term: "Grief", definition: "The emotional response to loss, involving sadness, anger, guilt and confusion." },
        { term: "Anticipatory grief", definition: "Grief experienced before an expected death, allowing emotional preparation." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u9-l3-health",
          title: "Health Needs of Older Adults",
          skill: "Describe common health needs and risks for older adults including falls, nutrition and frailty.",
          sections: [
            {
              heading: "Physical health needs",
              body: "Older adults face increased risk of **falls** (muscle weakness, poor balance, hazards), **malnutrition** (appetite loss, swallowing problems, isolation), **incontinence**, **pressure ulcers**, and **frailty** (vulnerability to stressors). Chronic conditions — arthritis, heart disease, diabetes, dementia — are common. Medications may interact or cause side-effects.",
            },
            {
              heading: "Promoting independence and safety",
              body: "Support independence through **risk assessment**, **home adaptations** (grab rails, ramps), **falls prevention** (strength/balance exercises, vision checks, medication review), **nutrition support** (fortified foods, swallowing assessment), and **social engagement**. Person-centred care respects choices while managing risk — enable rather than restrict.",
            },
          ],
          keyFormulas: [
            { name: "Falls risk", statement: "Muscle weakness + poor balance + environmental hazards." },
            { name: "Malnutrition causes", statement: "Appetite loss, swallowing problems, isolation, cost." },
            { name: "Frailty", statement: "Age-related decline → vulnerability to stressors." },
          ],
          workedExample: {
            problem: "An 85-year-old has fallen twice at home. Describe a falls prevention plan.",
            solution:
              "Assess home for hazards (rugs, poor lighting, stairs), review medications, arrange strength/balance exercises, check vision, and consider grab rails or walking aids.",
          },
          questions: [
            {
              id: "edxbtechsc-u9-l3-hn-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which is a leading cause of injury in older adults?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Falls" },
                  { id: "b", text: "Sunburn" },
                  { id: "c", text: "Dental decay" },
                  { id: "d", text: "Broken glasses" },
                ],
                correctChoiceId: "a",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Falls in older adults", statement: "Leading cause of injury due to weakness, balance and hazards." }],
                steps: [{ reasoning: "Falls are the leading cause of injury in older adults.", marks: 2, markCode: "B" }],
                finalAnswer: "**(a)** — falls",
              },
            },
            {
              id: "edxbtechsc-u9-l3-hn-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Define frailty.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Frailty", statement: "Age-related decline increasing vulnerability to stressors." }],
                steps: [{ reasoning: "Frailty = state of increased vulnerability across multiple body systems due to age-related decline.", marks: 2, markCode: "M" }],
                finalAnswer: "Age-related decline → vulnerability to stressors",
              },
            },
            {
              id: "edxbtechsc-u9-l3-hn-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain three causes of malnutrition in older adults.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Malnutrition in older adults", statement: "Inadequate intake from appetite loss, swallowing, isolation, cost." }],
                steps: [
                  { reasoning: "Appetite loss and reduced taste/smell reduce intake.", marks: 1, markCode: "M" },
                  { reasoning: "Swallowing problems (dysphagia) make eating difficult or unsafe.", marks: 1, markCode: "M" },
                  { reasoning: "Social isolation, poverty or difficulty preparing food reduce nutrition.", marks: 1, markCode: "A" }],
                finalAnswer: "Appetite loss, swallowing problems, isolation/poverty cause malnutrition.",
              },
            },
            {
              id: "edxbtechsc-u9-l3-hn-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Define falls and state two causes. (b) Describe three falls prevention strategies. (c) Explain what frailty means. (d) Describe two ways to support nutrition in older adults. (e) Explain why independence should be supported even when risks exist.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Older adult health needs", statement: "Falls, malnutrition, frailty — support independence with risk management." }],
                steps: [
                  { reasoning: "(a) Falls = unintentional descent; causes: muscle weakness, poor balance, hazards, medications.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Three strategies: home hazard assessment, strength/balance exercise, medication review, vision check, aids.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Frailty = increased vulnerability to stressors from age-related decline.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Two nutrition supports: fortified foods, swallowing assessment, mealtime support, social eating.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Independence preserves dignity, wellbeing and function — manage risk rather than eliminate it.", marks: 1, markCode: "R" }],
                finalAnswer: "Older adults need falls prevention, nutrition support and frailty management while preserving independence.",
              },
            },
            {
              id: "edxbtechsc-u9-l3-hn-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "An 88-year-old woman lives alone, has fallen twice, and has lost weight. (a) Identify three health concerns. (b) Describe a falls prevention plan. (c) Explain how malnutrition might be addressed. (d) Suggest two social interventions to support her wellbeing.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Assessing older adult needs", statement: "Falls, nutrition, isolation — multi-factorial assessment and support." }],
                steps: [
                  { reasoning: "(a) Three concerns: falls risk, malnutrition/weight loss, social isolation.", marks: 2, markCode: "A" },
                  { reasoning: "(b) Falls plan: home hazard check, grab rails, exercise, medication review, vision check.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Malnutrition: dietitian referral, fortified foods, swallowing assessment, meal support.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Two social interventions: day centre, community alarm, befriending, meals on wheels.", marks: 1, markCode: "A" }],
                finalAnswer: "Address falls, nutrition and isolation through assessment, adaptation and community support.",
              },
            },
            {
              id: "edxbtechsc-u9-l3-hn-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss the health needs of older adults. Your answer should cover: (a) common physical health risks; (b) falls — causes and prevention; (c) malnutrition — causes and support; (d) frailty; (e) chronic conditions; (f) how to support independence; (g) the role of social care in promoting health.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Older adult health", statement: "Multiple age-related risks require person-centred, independence-preserving care." }],
                steps: [
                  { reasoning: "(a) Common risks: falls, malnutrition, incontinence, pressure ulcers, frailty, chronic disease.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Falls: causes = weakness, balance, hazards; prevention = assessment, exercise, adaptations.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Malnutrition: appetite loss, dysphagia, isolation; support = fortified foods, assessment, meals.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Frailty = vulnerability to stressors from multisystem decline.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Chronic conditions: arthritis, heart disease, diabetes, dementia common.", marks: 1, markCode: "M" },
                  { reasoning: "(f) Support independence: enable choice, adapt environment, manage risk rather than restrict.", marks: 2, markCode: "R" },
                  { reasoning: "(g) Social care promotes health through support, adaptation, community connection.", marks: 1, markCode: "R" }],
                finalAnswer: "Older adults need multi-factorial health support that manages risk while preserving independence.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u9-l3-loss",
          title: "Loss, Grief and Bereavement",
          skill: "Describe grief responses and support people experiencing loss and bereavement.",
          sections: [
            {
              heading: "Types of loss and grief",
              body: "Loss includes **bereavement** (death of someone close), but also loss of health, independence, home, role or future. **Grief** is the emotional response — sadness, anger, guilt, confusion, numbness. **Anticipatory grief** occurs before an expected death. Grief is not linear — people move between stages of denial, anger, bargaining, depression and acceptance (Kübler-Ross), but modern understanding sees grief as individual and ongoing.",
            },
            {
              heading: "Supporting bereaved people",
              body: "Support means being present, listening without judgement, acknowledging the loss, and allowing expression of grief. Avoid clichés ('they're in a better place'), rushing recovery, or avoiding the topic. Practical support (meals, paperwork, company) helps. Watch for **complicated grief** — persistent intense grief, inability to function, or suicidal thoughts — which needs professional help. Bereavement affects health: increased risk of illness, isolation and mortality ('broken heart').",
            },
          ],
          keyFormulas: [
            { name: "Types of loss", statement: "Bereavement, health, independence, home, role, future." },
            { name: "Grief stages", statement: "Denial, anger, bargaining, depression, acceptance — not linear." },
            { name: "Complicated grief", statement: "Persistent intense grief, dysfunction or suicidal thoughts → professional help." },
          ],
          workedExample: {
            problem: "A widow says 'I feel fine' but hasn't slept or eaten properly since her husband died two weeks ago. How should a care worker respond?",
            solution:
              "Acknowledge her loss gently, listen without judgement, offer practical support, and monitor for complicated grief or depression. Don't force her to talk but make clear support is available.",
          },
          questions: [
            {
              id: "edxbtechsc-u9-l3-lg-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Grief is best described as:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A linear process with fixed stages everyone follows" },
                  { id: "b", text: "An individual emotional response to loss that varies over time" },
                  { id: "c", text: "Only experienced after death" },
                  { id: "d", text: "A sign of mental illness" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Grief", statement: "Individual emotional response to loss; not linear or fixed." }],
                steps: [{ reasoning: "Grief is individual, varies, and can follow many losses not just death.", marks: 2, markCode: "B" }],
                finalAnswer: "**(b)** — individual emotional response to loss",
              },
            },
            {
              id: "edxbtechsc-u9-l3-lg-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Define anticipatory grief.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Anticipatory grief", statement: "Grief experienced before an expected death." }],
                steps: [{ reasoning: "Grief felt in advance of an expected death, allowing emotional preparation.", marks: 2, markCode: "M" }],
                finalAnswer: "Grief experienced before an expected death",
              },
            },
            {
              id: "edxbtechsc-u9-l3-lg-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Describe three common emotional responses to grief.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Grief responses", statement: "Sadness, anger, guilt, confusion, numbness." }],
                steps: [
                  { reasoning: "Sadness and crying are common grief responses.", marks: 1, markCode: "M" },
                  { reasoning: "Anger and guilt may also be experienced.", marks: 1, markCode: "M" },
                  { reasoning: "Confusion, numbness and withdrawal are also normal.", marks: 1, markCode: "A" }],
                finalAnswer: "Sadness, anger, guilt, confusion, numbness are common grief responses.",
              },
            },
            {
              id: "edxbtechsc-u9-l3-lg-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Define bereavement and grief. (b) Describe anticipatory grief. (c) List three common grief responses. (d) Explain two ways to support a bereaved person. (e) State what complicated grief is.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Supporting bereavement", statement: "Listen, acknowledge, practical help, watch for complicated grief." }],
                steps: [
                  { reasoning: "(a) Bereavement = period after death; grief = emotional response to loss.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Anticipatory grief = grief before expected death.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Three responses: sadness, anger, guilt, confusion, numbness.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Two supports: listen without judgement, acknowledge loss, practical help, allow expression.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Complicated grief = persistent intense grief, dysfunction or suicidal thoughts needing professional help.", marks: 1, markCode: "R" }],
                finalAnswer: "Support bereavement by listening, acknowledging and helping practically; refer complicated grief.",
              },
            },
            {
              id: "edxbtechsc-u9-l3-lg-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A care worker's colleague's husband dies suddenly. (a) Describe three grief responses the colleague might show. (b) Explain how the care worker can support her. (c) Describe two practical ways to help. (d) State three signs of complicated grief requiring professional referral.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Bereavement support", statement: "Listen, acknowledge, practical help, monitor for complicated grief." }],
                steps: [
                  { reasoning: "(a) Three responses: sadness/crying, anger, numbness, guilt, difficulty concentrating.", marks: 2, markCode: "A" },
                  { reasoning: "(b) Support: listen without judgement, acknowledge loss, don't rush recovery, offer presence.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Two practical helps: meals, help with paperwork, company, childcare, errands.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Three signs: grief lasting >6-12 months with no improvement, inability to function, suicidal thoughts, severe depression.", marks: 1, markCode: "R" }],
                finalAnswer: "Support with listening, presence and practical help; refer complicated grief to professionals.",
              },
            },
            {
              id: "edxbtechsc-u9-l3-lg-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss loss, grief and bereavement. Your answer should cover: (a) types of loss; (b) what grief is and its responses; (c) anticipatory grief; (d) how to support a bereaved person; (e) common mistakes when supporting grief; (f) complicated grief; (g) the impact of bereavement on health.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Bereavement care", statement: "Grief is individual; support with presence, listening and practical help." }],
                steps: [
                  { reasoning: "(a) Types of loss: death, health, independence, home, role, future.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Grief = emotional response; sadness, anger, guilt, confusion, numbness; not linear.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Anticipatory grief = grief before expected death, allowing preparation.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Support: listen, acknowledge, practical help, allow expression, don't rush.", marks: 2, markCode: "M" },
                  { reasoning: "(e) Mistakes: clichés, avoiding topic, rushing recovery, making assumptions.", marks: 1, markCode: "A" },
                  { reasoning: "(f) Complicated grief = persistent dysfunction or suicidal thoughts → professional help.", marks: 1, markCode: "R" },
                  { reasoning: "(g) Bereavement increases illness, isolation and mortality risk.", marks: 2, markCode: "R" }],
                finalAnswer: "Grief is individual and ongoing; support with presence, listening and practical help; refer complicated grief.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u9-l3-notes",
      title: "Health Needs and Loss — notes",
      summary: "Older adults face falls, malnutrition, frailty and chronic disease; bereavement requires presence, listening and practical support.",
      sections: [
        { heading: "Health needs", body: "Falls, malnutrition, frailty, chronic conditions — support independence with risk management." },
        { heading: "Grief", body: "Grief is individual and not linear; support with presence, listening and practical help." },
        { heading: "Complicated grief", body: "Persistent dysfunction or suicidal thoughts need professional referral." },
      ],
    },
  },
];
