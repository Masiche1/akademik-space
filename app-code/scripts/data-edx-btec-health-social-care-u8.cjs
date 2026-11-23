module.exports = [
  {
    file: "lesson-8-1.ts",
    exportName: "lesson801",
    lesson: {
      id: "edxbtechsc-u8-lesson-8-1",
      code: "8-1",
      title: "Mental Health, Wellbeing and Common Disorders",
      goal: "I CAN explain concepts of mental health and wellbeing and describe common mental health conditions.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 8: Mental Health and Wellbeing (extended certificate)",
      ],
      vocabulary: [
        { term: "Mental health", definition: "A state of wellbeing in which the individual realises their abilities, can cope with the normal stresses of life, and is able to work productively and make a contribution to their community." },
        { term: "Mental illness", definition: "A diagnosable condition that significantly disrupts thinking, feeling or behaviour and impairs functioning." },
        { term: "Wellbeing", definition: "A positive state encompassing physical, mental, social and economic dimensions." },
        { term: "Depression", definition: "A common mood disorder characterised by persistent low mood and loss of interest or pleasure." },
        { term: "Anxiety", definition: "A normal human emotion that becomes an illness when excessive, persistent and impairing." },
        { term: "Psychosis", definition: "A loss of contact with reality, often involving hallucinations and/or delusions." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u8-l1-continuum",
          title: "Mental Health, Wellbeing and the Continuum of Mental Illness",
          skill: "Define mental health, wellbeing and mental illness and describe where illness sits on a continuum.",
          sections: [
            {
              heading: "Mental health and wellbeing",
              body: "The WHO defines mental health as a state of wellbeing, not merely the absence of illness. Wellbeing is multidimensional: **physical** (fitness, sleep), **emotional/mental** (resilience, coping), **social** (relationships, support networks) and **economic** (housing, income, security). Mental health exists on a **continuum** — everyone moves between positive wellbeing, mild distress, diagnosable illness and crisis, and may sit in more than one place for different aspects of life.",
            },
            {
              heading: "Stress, resilience and the continuum",
              body: "Normal life stressors trigger the fight-or-flight response. When stress is prolonged or exceeds a person's **resilience** (ability to bounce back), it can progress along the continuum to anxiety, low mood or clinical conditions. Protective factors — social support, healthy coping, early help-seeking — keep people well; risk factors — isolation, poverty, trauma, stigma — push people towards illness. Mental illness is common: about 1 in 6 people experience a common mental health problem such as anxiety or depression in any year.",
            },
          ],
          keyFormulas: [
            { name: "WHO definition", statement: "Mental health = state of wellbeing, not absence of disease." },
            { name: "Wellbeing dimensions", statement: "Physical, emotional, social and economic." },
            { name: "Continuum", statement: "Wellbeing → mild distress → illness → crisis." },
          ],
          workedExample: {
            problem: "A young worker feels overwhelmed after losing their job, has trouble sleeping and feels worthless for two weeks. Explain where they sit on the mental health continuum and what could help.",
            solution:
              "The person shows mild-to-moderate distress — low mood and worry following a stressor, but still functioning. Strengthening social support, routine and early talking therapies can prevent progression to clinical depression.",
          },
          questions: [
            {
              id: "edxbtechsc-u8-l1-ct-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which statement best describes the relationship between mental health and mental illness?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Mental health and mental illness are opposites — you have one or the other" },
                  { id: "b", text: "Mental health is a continuum, and mental illness is a diagnosable condition that can occur anywhere on it" },
                  { id: "c", text: "Mental illness is purely genetic and cannot be influenced by environment" },
                  { id: "d", text: "Mental health only matters when a person is mentally ill" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Mental health continuum", statement: "Wellbeing is a spectrum; illness is a diagnosable disruption." }],
                steps: [{ reasoning: "Mental health spans a continuum from wellbeing to illness.", marks: 2, markCode: "B" }],
                finalAnswer: "**(b)** — continuum model",
              },
            },
            {
              id: "edxbtechsc-u8-l1-ct-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Define mental wellbeing and name three factors that support it.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Wellbeing", statement: "Positive multidimensional state of health." }],
                steps: [
                  { reasoning: "Wellbeing = positive state across physical, emotional, social and economic dimensions.", marks: 1, markCode: "M" },
                  { reasoning: "Any three: social support, healthy coping, financial security, physical activity, purpose, good housing.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Multidimensional positive state; e.g. social support, coping skills, financial security",
              },
            },
            {
              id: "edxbtechsc-u8-l1-ct-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain how prolonged stress can move a person along the mental health continuum towards illness.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Stress-vulnerability model", statement: "Stress exceeds coping capacity and resilience leads to illness." }],
                steps: [
                  { reasoning: "Normal stress triggers fight-or-flight; coping mechanisms manage short-term stress.", marks: 1, markCode: "M" },
                  { reasoning: "Prolonged stress or low resilience exhausts coping capacity.", marks: 1, markCode: "A" },
                  { reasoning: "Person moves along continuum from distress to diagnosable anxiety or depression.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Stress beyond coping capacity → progression along continuum to illness",
              },
            },
            {
              id: "edxbtechsc-u8-l1-ct-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Define mental health. (b) Define mental illness. (c) Describe the four dimensions of wellbeing. (d) Explain what is meant by the 'mental health continuum'. (e) Give one example of a protective factor and one risk factor for mental health.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Core concepts", statement: "Mental health, illness, wellbeing, continuum." }],
                steps: [
                  { reasoning: "(a) WHO definition of mental health — state of wellbeing.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Diagnosable condition disrupting thinking, feeling or behaviour.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Physical, emotional/mental, social, economic.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Spectrum from wellbeing through distress to crisis.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Protective e.g. social support; risk e.g. isolation, trauma, poverty.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Mental health is multidimensional wellbeing on a continuum from health to illness.",
              },
            },
            {
              id: "edxbtechsc-u8-l1-ct-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Compare mental health and mental illness. In your answer refer to: (a) definition, (b) impact on daily functioning, (c) whether they can co-exist, (d) how a person can move between them.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Continuum model", statement: "Health and illness are not binary opposites." }],
                steps: [
                  { reasoning: "(a) Health = wellbeing enabling function; illness = diagnosable disruption.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Health supports productivity/contribution; illness impairs functioning.", marks: 2, markCode: "A" },
                  { reasoning: "(c) A person can have good physical wellbeing but poor mental health, or recover partially.", marks: 1, markCode: "R" },
                  { reasoning: "(d) Movement along continuum via stressors, support, treatment, resilience.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Mental health and illness sit on a continuum; people move between them.",
              },
            },
            {
              id: "edxbtechsc-u8-l1-ct-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss the concept of mental health and wellbeing. Your answer should cover: (a) the WHO definition of mental health; (b) the dimensions of wellbeing; (c) the mental health continuum; (d) two risk factors for poor mental health; (e) two protective factors; (f) why mental health promotion matters in health and social care.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Mental health promotion", statement: "Wellbeing is multidimensional and can be actively promoted." }],
                steps: [
                  { reasoning: "(a) State of wellbeing; realising abilities, coping with stress, productive contribution.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Physical, emotional, social and economic dimensions described.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Continuum from wellbeing to crisis; people move along it.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Two risk factors: e.g. poverty, isolation, trauma, stigma, unemployment.", marks: 1, markCode: "A" },
                  { reasoning: "(e) Two protective factors: e.g. social support, purpose, healthy lifestyle, early help.", marks: 1, markCode: "A" },
                  { reasoning: "(f) Promotion reduces illness, improves outcomes and is a core care role.", marks: 3, markCode: "R" },
                ],
                finalAnswer: "Mental health is multidimensional wellbeing on a continuum; promotion prevents illness and supports recovery.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u8-l1-conditions",
          title: "Common Mental Health Conditions: Depression, Anxiety and Psychosis",
          skill: "Describe the symptoms, causes and impact of depression, anxiety and psychosis.",
          sections: [
            {
              heading: "Depression and anxiety",
              body: "**Depression** is characterised by persistent low mood and loss of interest or pleasure (anhedonia) lasting at least two weeks. Symptoms span emotional (sadness, hopelessness), physical (fatigue, sleep/appetite changes), cognitive (poor concentration, negative thoughts) and behavioural (withdrawal, neglect of self-care) domains. **Anxiety** is a normal emotion that becomes pathological when excessive and persistent — generalised anxiety disorder, panic disorder, phobias and OCD are common forms.",
            },
            {
              heading: "Psychosis and the bio-psycho-social model",
              body: "**Psychosis** involves a loss of contact with reality: **hallucinations** (perceiving things not present, e.g. hearing voices) and **delusions** (fixed false beliefs). Conditions include schizophrenia, schizoaffective disorder and brief psychotic episodes, often triggered by stress in vulnerable individuals. Mental health conditions arise from the interaction of **biological** (genetics, brain chemistry), **psychological** (trauma, coping style) and **social** (poverty, isolation, discrimination) factors — the bio-psycho-social model.",
            },
          ],
          keyFormulas: [
            { name: "Depression core", statement: "Low mood + anhedonia, ≥ 2 weeks, across emotional/physical/cognitive/behavioural domains." },
            { name: "Psychosis", statement: "Loss of contact with reality — hallucinations and/or delusions." },
            { name: "Bio-psycho-social", statement: "Biological + psychological + social factors interact." },
          ],
          workedExample: {
            problem: "A patient reports hearing voices telling them to hurt themselves, believes the government is watching them, and has stopped washing. Identify the condition and the immediate priorities.",
            solution:
              "Hallucinations (hearing voices) and delusions (being watched) indicate psychosis, likely with a risk of self-harm. Priorities: ensure immediate safety, do not argue with delusions, involve mental health services and follow safeguarding procedures.",
          },
          questions: [
            {
              id: "edxbtechsc-u8-l1-cd-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "A person believes they are being followed by secret agents and hears voices no one else can hear. This is most likely:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Depression" },
                  { id: "b", text: "An anxiety disorder" },
                  { id: "c", text: "Psychosis — delusions and hallucinations" },
                  { id: "d", text: "A personality disorder" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Psychosis", statement: "Loss of contact with reality — delusions and hallucinations." }],
                steps: [{ reasoning: "Delusions (agents following) + hallucinations (voices) = psychosis.", marks: 2, markCode: "B" }],
                finalAnswer: "**(c)** — psychosis",
              },
            },
            {
              id: "edxbtechsc-u8-l1-cd-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "State the difference between normal anxiety and an anxiety disorder.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Anxiety vs disorder", statement: "Normal emotion vs excessive persistent impairment." }],
                steps: [
                  { reasoning: "Anxiety is a normal, proportionate response to threat.", marks: 1, markCode: "M" },
                  { reasoning: "Disorder = excessive, persistent, disproportionate anxiety that impairs functioning.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Normal proportionate worry vs excessive persistent impairment",
              },
            },
            {
              id: "edxbtechsc-u8-l1-cd-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Describe the symptoms of depression across three different domains.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Depression symptoms", statement: "Low mood + anhedonia across emotional, physical, cognitive and behavioural domains." }],
                steps: [
                  { reasoning: "Emotional: persistent low mood, hopelessness, loss of interest.", marks: 1, markCode: "M" },
                  { reasoning: "Physical/cognitive: fatigue, sleep/appetite change, poor concentration.", marks: 1, markCode: "M" },
                  { reasoning: "Behavioural: withdrawal, neglect of self-care, loss of motivation.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Emotional, physical, cognitive and behavioural symptoms of depression",
              },
            },
            {
              id: "edxbtechsc-u8-l1-cd-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Define depression. (b) List four symptoms of depression. (c) Define anxiety disorder. (d) Give two examples of anxiety disorders. (e) Explain how the bio-psycho-social model explains the causes of mental illness.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Bio-psycho-social model", statement: "Biological, psychological and social factors interact to cause illness." }],
                steps: [
                  { reasoning: "(a) Mood disorder with persistent low mood and anhedonia ≥ 2 weeks.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Any four symptoms across domains (low mood, fatigue, withdrawal, sleep change, hopelessness, poor concentration).", marks: 1, markCode: "M" },
                  { reasoning: "(c) Excessive persistent disproportionate anxiety impairing function.", marks: 1, markCode: "M" },
                  { reasoning: "(d) GAD, panic disorder, phobia, OCD.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Genes/brain chemistry + trauma/coping + poverty/isolation interact.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Depression and anxiety disorders arise from interacting bio-psycho-social factors.",
              },
            },
            {
              id: "edxbtechsc-u8-l1-cd-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A care worker meets a service user who reports persistent worry, panic attacks and avoids leaving the house. (a) Identify the likely condition. (b) Describe three symptoms the worker might observe. (c) Explain two ways the condition could affect daily life. (d) State two appropriate responses by the care worker.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Recognising and responding to anxiety", statement: "Identify symptoms, understand impact, respond calmly and seek support." }],
                steps: [
                  { reasoning: "(a) Anxiety disorder — likely panic disorder or agoraphobia features.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Any three: panic attacks, restlessness, sleep disturbance, avoidance, physical symptoms (palpitations, sweating).", marks: 2, markCode: "A" },
                  { reasoning: "(c) Two impacts: social isolation, inability to work/travel, poor self-care, relationship strain.", marks: 2, markCode: "A" },
                  { reasoning: "(d) Two responses: listen non-judgementally, support GP/referral, encourage gradual exposure, manage own safety.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Anxiety disorder — respond calmly, validate, and support referral and gradual recovery.",
              },
            },
            {
              id: "edxbtechsc-u8-l1-cd-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Explain psychosis as a mental health condition. Your answer should cover: (a) the definition of psychosis; (b) what hallucinations are with an example; (c) what delusions are with an example; (d) two conditions associated with psychosis; (e) three possible causes or triggers; (f) how a care worker should respond when someone is experiencing psychosis.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Psychosis", statement: "Loss of contact with reality involving hallucinations and/or delusions." }],
                steps: [
                  { reasoning: "(a) Loss of contact with reality — impaired ability to distinguish thoughts from external events.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Hallucinations: perceiving something absent — e.g. hearing voices.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Delusions: fixed false beliefs — e.g. believing one is being followed or is a famous person.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Schizophrenia, schizoaffective disorder, bipolar disorder with psychotic features, brief psychotic episode.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Three causes: genetic vulnerability, stress/trauma, substance use, brain chemistry changes.", marks: 2, markCode: "A" },
                  { reasoning: "(f) Calm non-confrontational approach, do not argue with delusions, ensure safety, involve mental health team, document.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Psychosis involves hallucinations and delusions; respond calmly, keep safe and involve services.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u8-l1-notes",
      title: "Mental Health and Common Disorders — notes",
      summary: "Mental health is multidimensional wellbeing on a continuum; depression, anxiety and psychosis are key conditions.",
      sections: [
        { heading: "Key idea", body: "Mental health ≠ absence of illness — it is a state of wellbeing across physical, emotional, social and economic dimensions." },
        { heading: "Continuum", body: "People move between wellbeing, mild distress, diagnosable illness and crisis depending on stressors and support." },
        { heading: "Conditions", body: "Depression = low mood + anhedonia; anxiety = excessive persistent worry; psychosis = loss of contact with reality." },
      ],
    },
  },
  {
    file: "lesson-8-2.ts",
    exportName: "lesson802",
    lesson: {
      id: "edxbtechsc-u8-lesson-8-2",
      code: "8-2",
      title: "Mental Health Law and the Care Pathway",
      goal: "I CAN describe the Mental Health Act, compulsory powers and the assessment and care pathway for mental health.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 8: Mental Health and Wellbeing (extended certificate)",
      ],
      vocabulary: [
        { term: "Mental Health Act 1983", definition: "Primary legislation allowing compulsory detention and treatment of people with mental disorder." },
        { term: "Section 2", definition: "MHA section for detention for assessment in hospital for up to 28 days." },
        { term: "Section 3", definition: "MHA section for detention for treatment in hospital for up to 6 months, renewable." },
        { term: "Approved Mental Health Professional", definition: "Qualified professional who can apply for compulsory detention under the MHA." },
        { term: "Care Programme Approach", definition: "System of assessment, planning and review for people with mental health needs." },
        { term: "Deprivation of Liberty Safeguards", definition: "Legal framework protecting people who lack capacity and are deprived of liberty in care settings." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u8-l2-mha",
          title: "The Mental Health Act and Compulsory Powers",
          skill: "Describe the Mental Health Act 1983/2007 and the powers of compulsory detention.",
          sections: [
            {
              heading: "Purpose and safeguards",
              body: "The **Mental Health Act 1983** (amended 2007) allows compulsory detention ('sectioning') of people with a **mental disorder** of a nature or degree that warrants detention in the interests of their health or safety or for the protection of others. Powers require two doctors and an **Approved Mental Health Professional (AMHP)**. Safeguards include **nearest relative** rights, **tribunals** to challenge detention, and regular **reviews**.",
            },
            {
              heading: "Key sections",
              body: "**Section 2**: detention for **assessment** — up to 28 days, cannot be renewed. **Section 3**: detention for **treatment** — initially up to 6 months, renewable. **Section 5(2)**: emergency holding power (doctor's holding power) up to 72 hours pending formal sectioning. **Section 136**: police power to remove someone from a public place to a place of safety. The 2007 amendments expanded definition to include personality disorder and improved patient rights and after-care duties.",
            },
          ],
          keyFormulas: [
            { name: "Section 2", statement: "Assessment — up to 28 days, not renewable." },
            { name: "Section 3", statement: "Treatment — 6 months, renewable." },
            { name: "Section 5(2)", statement: "Emergency holding — up to 72 hours." },
            { name: "Section 136", statement: "Police removal to place of safety." },
          ],
          workedExample: {
            problem: "A GP believes a patient with severe psychosis is at risk of harming themselves and others but refuses admission. Explain the legal route to hospital admission.",
            solution:
              "The GP refers to an AMHP and two doctors, who assess whether the MHA criteria are met. If so, the AMHP can apply for Section 2 (assessment) or Section 3 (treatment) detention in hospital.",
          },
          questions: [
            {
              id: "edxbtechsc-u8-l2-mha-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Under the Mental Health Act 1983, Section 3 allows detention for:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Assessment only, for up to 28 days" },
                  { id: "b", text: "Treatment, initially for up to 6 months" },
                  { id: "c", text: "Emergency holding for up to 72 hours" },
                  { id: "d", text: "Removal from a public place" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Section 3", statement: "Detention for treatment, initially up to 6 months, renewable." }],
                steps: [{ reasoning: "Section 3 = treatment detention for up to 6 months.", marks: 2, markCode: "B" }],
                finalAnswer: "**(b)** — treatment, 6 months",
              },
            },
            {
              id: "edxbtechsc-u8-l2-mha-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "State two professionals who must be involved for a person to be compulsorily detained under the MHA.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Compulsory detention requirements", statement: "Two doctors and an AMHP required." }],
                steps: [
                  { reasoning: "Two doctors (one approved under MHA).", marks: 1, markCode: "M" },
                  { reasoning: "An Approved Mental Health Professional (AMHP).", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Two doctors + one AMHP",
              },
            },
            {
              id: "edxbtechsc-u8-l2-mha-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain the difference between Section 2 and Section 3 of the Mental Health Act.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "MHA sections 2 and 3", statement: "Assessment vs treatment detention." }],
                steps: [
                  { reasoning: "Section 2 = detention for assessment, up to 28 days, not renewable.", marks: 1, markCode: "M" },
                  { reasoning: "Section 3 = detention for treatment, initially 6 months, renewable.", marks: 1, markCode: "M" },
                  { reasoning: "Purpose differs: assessment vs actual treatment under section.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Section 2 = assessment (28 days); Section 3 = treatment (6 months renewable)",
              },
            },
            {
              id: "edxbtechsc-u8-l2-mha-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) What is meant by 'compulsory detention' under the MHA? (b) Name the legislation. (c) State the criteria for detention. (d) Describe two safeguards protecting detained patients. (e) Explain why the MHA is described as balancing individual rights with public safety.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "MHA balance", statement: "Compulsory powers balanced by legal safeguards and patient rights." }],
                steps: [
                  { reasoning: "(a) Legal authority to hold someone in hospital against their will.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Mental Health Act 1983 (amended 2007).", marks: 1, markCode: "M" },
                  { reasoning: "(c) Mental disorder of nature/degree warranting detention for health/safety or protection of others.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Two safeguards: nearest relative rights, tribunal appeals, independent reviews, advocates.", marks: 1, markCode: "A" },
                  { reasoning: "(e) Detention protects person and others but restricts liberty — safeguards restore balance.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "MHA allows justified compulsory detention with safeguards for patient rights.",
              },
            },
            {
              id: "edxbtechsc-u8-l2-mha-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A care worker finds a service user in acute psychosis in a public park, agitated and shouting that they will 'end it all'. (a) State the relevant MHA power for removing them to safety. (b) Explain what happens next under that power. (c) Describe two actions the care worker should take immediately. (d) Explain why Section 5(2) might be used by the receiving doctor.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "MHA emergency powers", statement: "Section 136 removes to place of safety; Section 5(2) is a doctor's holding power." }],
                steps: [
                  { reasoning: "(a) Section 136 — police power to remove from public place to place of safety.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Taken to a place of safety (e.g. police station or hospital) for assessment, max 24 hours (extendable).", marks: 1, markCode: "M" },
                  { reasoning: "(c) Two actions: stay with person, call emergency services/AMHP, keep safe distance, do not argue with delusions.", marks: 2, markCode: "A" },
                  { reasoning: "(d) Section 5(2) lets a doctor hold the person for up to 72 hours pending formal MHA assessment.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Section 136 removes to safety; Section 5(2) holds up to 72 hours for assessment.",
              },
            },
            {
              id: "edxbtechsc-u8-l2-mha-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss compulsory powers under the Mental Health Act 1983/2007. Your answer should cover: (a) when the MHA applies; (b) the roles of the AMHP and doctors; (c) Sections 2, 3 and 5(2) and their durations; (d) three safeguards for detained patients; (e) arguments for and against compulsory detention; (f) how care workers should respond to a person at risk of being sectioned.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Compulsory detention", statement: "Legal powers to detain, balanced by safeguards." }],
                steps: [
                  { reasoning: "(a) Mental disorder of nature/degree warranting detention for health/safety or others' protection.", marks: 2, markCode: "M" },
                  { reasoning: "(b) AMHP applies and coordinates assessment; two doctors provide medical opinions.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Section 2 = 28 days assessment; Section 3 = 6 months treatment renewable; Section 5(2) = 72-hour holding power.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Safeguards: nearest relative, tribunals/appeals, independent reviews, advocates, least restrictive principle.", marks: 1, markCode: "A" },
                  { reasoning: "(e) For: prevents harm, enables treatment; against: restricts liberty and autonomy.", marks: 2, markCode: "R" },
                  { reasoning: "(f) Calm the person, involve AMHP/GP early, support the person's voice, follow local policy.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "MHA compulsory detention is justified by risk but heavily safeguarded to protect patient rights.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u8-l2-pathway",
          title: "Mental Health Assessment and the Care Pathway",
          skill: "Describe mental health assessment, the Care Programme Approach and crisis intervention.",
          sections: [
            {
              heading: "Assessment and the Care Programme Approach",
              body: "**Mental health assessment** gathers information about symptoms, history, risk, strengths and social circumstances — often using structured tools. The **Care Programme Approach (CPA)** is the standard framework: (1) assessment of needs, (2) a written **care plan** agreed with the person, (3) allocation of a **key worker**, and (4) regular **review**. The CPA is person-centred — goals are meaningful to the individual.",
            },
            {
              heading: "The care pathway and crisis response",
              body: "The pathway typically runs: recognition of need → GP or self-referral → assessment → treatment (talking therapies, medication, social support) → review and step-down → relapse prevention. **Crisis intervention** focuses on immediate safety: de-escalation, crisis plans agreed in advance, 24-hour crisis lines, and emergency services. Early warning signs and crisis plans reduce the need for compulsory admission.",
            },
          ],
          keyFormulas: [
            { name: "CPA cycle", statement: "Assessment → care plan → key worker → review." },
            { name: "Care pathway", statement: "Recognition → assessment → treatment → review → relapse prevention." },
            { name: "Crisis plan", statement: "Agreed early-warning signs and agreed responses, made while well." },
          ],
          workedExample: {
            problem: "Describe the four stages of the Care Programme Approach for a person diagnosed with bipolar disorder.",
            solution:
              "Assessment of mental health and social needs; agreed care plan covering medication, therapy and crisis plan; allocation of a key worker for coordination; regular reviews to adjust treatment and monitor recovery.",
          },
          questions: [
            {
              id: "edxbtechsc-u8-l2-cp-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "The Care Programme Approach (CPA) consists of which four stages?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Admission, treatment, discharge, follow-up" },
                  { id: "b", text: "Assessment, care plan, key worker, review" },
                  { id: "c", text: "Diagnosis, medication, therapy, discharge" },
                  { id: "d", text: "Referral, triage, treatment, closure" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "CPA", statement: "Assessment → care plan → key worker → review." }],
                steps: [{ reasoning: "CPA = four-stage cycle of assessment, planning, coordination and review.", marks: 2, markCode: "B" }],
                finalAnswer: "**(b)** — assessment, plan, key worker, review",
              },
            },
            {
              id: "edxbtechsc-u8-l2-cp-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "State the purpose of a crisis plan in mental health care.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Crisis plan", statement: "Agreed early-warning signs and responses made while the person is well." }],
                steps: [
                  { reasoning: "Identifies early-warning signs of deterioration.", marks: 1, markCode: "M" },
                  { reasoning: "Lists agreed actions (who to contact, coping strategies) to prevent crisis.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Pre-agreed responses to early-warning signs to prevent or manage crisis",
              },
            },
            {
              id: "edxbtechsc-u8-l2-cp-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Describe three features of a person-centred mental health care plan.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Person-centred care plan", statement: "Plan reflects the individual's goals, strengths and preferences." }],
                steps: [
                  { reasoning: "Goals are meaningful to the person, not imposed.", marks: 1, markCode: "M" },
                  { reasoning: "Includes strengths, preferences, social support and crisis plan.", marks: 1, markCode: "A" },
                  { reasoning: "Developed and reviewed with the person actively involved.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Person-centred plans reflect individual goals, strengths and preferences.",
              },
            },
            {
              id: "edxbtechsc-u8-l2-cp-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Define mental health assessment. (b) Name four areas it should cover. (c) Explain the role of the key worker in the CPA. (d) Describe how reviews should be conducted. (e) State why the care plan should include a crisis plan.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Mental health assessment", statement: "Structured gathering of needs, risks and strengths." }],
                steps: [
                  { reasoning: "(a) Systematic gathering of information about symptoms, needs and circumstances.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Any four: symptoms, history, risk, strengths, social circumstances, medication.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Coordinates care, single point of contact, monitors plan.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Regular, person-centred, evidence-based, adjusts plan as needed.", marks: 1, markCode: "A" },
                  { reasoning: "(e) Crisis plans enable early response and reduce need for compulsory powers.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Assessment → plan → key worker → review, all person-centred with crisis planning.",
              },
            },
            {
              id: "edxbtechsc-u8-l2-cp-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A person with recurrent depression reports they are 'slipping again' — sleeping badly, withdrawing, and having dark thoughts. (a) Identify this as a crisis situation or early-warning stage. (b) Explain three actions the key worker should take. (c) Describe how the care plan should be reviewed. (d) State when compulsory powers might become relevant.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Crisis prevention and response", statement: "Early-warning signs trigger agreed plan actions before crisis." }],
                steps: [
                  { reasoning: "(a) Early-warning stage — signs of relapse before full crisis.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Three actions: contact GP/psychiatrist, activate crisis plan, increase support, review medication, assess risk of self-harm.", marks: 3, markCode: "A" },
                  { reasoning: "(c) Review assessment, adjust treatment, strengthen support network, update crisis plan.", marks: 1, markCode: "M" },
                  { reasoning: "(d) If risk of harm to self/others and unable to engage voluntarily, MHA powers may be considered.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Act on early-warning signs via the care plan; escalate to MHA only if risk requires it.",
              },
            },
            {
              id: "edxbtechsc-u8-l2-cp-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Explain the mental health care pathway and the Care Programme Approach. Your answer should cover: (a) the stages of the care pathway from recognition to recovery; (b) what a mental health assessment involves; (c) the four stages of the CPA; (d) the role of the key worker; (e) how crisis planning fits into the pathway; (f) why a person-centred approach improves outcomes.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Mental health care pathway", statement: "Structured journey from recognition through treatment to recovery." }],
                steps: [
                  { reasoning: "(a) Recognition → GP/self-referral → assessment → treatment → review/step-down → relapse prevention.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Assessment covers symptoms, history, risk, strengths, social needs, medication.", marks: 2, markCode: "M" },
                  { reasoning: "(c) CPA: assessment, care plan, key worker, review.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Key worker coordinates care and is single point of contact.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Crisis plans agreed while well enable early intervention and prevent compulsory admission.", marks: 1, markCode: "A" },
                  { reasoning: "(f) Person-centred goals increase engagement, adherence and recovery.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "The CPA provides a structured, person-centred pathway from assessment to recovery with crisis planning.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u8-l2-notes",
      title: "Mental Health Law and Care Pathway — notes",
      summary: "MHA 1983 allows compulsory detention (Sections 2, 3, 5(2), 136); the CPA structures assessment, planning, key worker and review.",
      sections: [
        { heading: "MHA powers", body: "Section 2 = 28-day assessment; Section 3 = 6-month treatment; Section 5(2) = 72-hour holding; Section 136 = police removal to safety." },
        { heading: "Safeguards", body: "Two doctors + AMHP required; nearest relative, tribunals and reviews protect patient rights." },
        { heading: "CPA", body: "Assessment → care plan → key worker → review, with crisis plans agreed while the person is well." },
      ],
    },
  },
  {
    file: "lesson-8-3.ts",
    exportName: "lesson803",
    lesson: {
      id: "edxbtechsc-u8-lesson-8-3",
      code: "8-3",
      title: "Supporting Mental Health and Reducing Stigma",
      goal: "I CAN describe treatments and interventions for mental health and explain how to reduce stigma and support individuals.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 8: Mental Health and Wellbeing (extended certificate)",
      ],
      vocabulary: [
        { term: "Talking therapies", definition: "Psychological treatments such as CBT and counselling that help people change thoughts, feelings and behaviours." },
        { term: "CBT", definition: "Cognitive Behavioural Therapy — links thoughts, feelings and behaviours to break unhelpful cycles." },
        { term: "Medication", definition: "Pharmacological treatment, e.g. antidepressants or antipsychotics, used alongside or instead of therapy." },
        { term: "Self-help", definition: "Strategies individuals use themselves, e.g. exercise, sleep hygiene, peer support, apps." },
        { term: "Stigma", definition: "Negative attitudes and stereotypes about mental illness that lead to discrimination and social exclusion." },
        { term: "Peer support", definition: "Support from people with lived experience of mental health conditions." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u8-l3-treatments",
          title: "Treatments and Interventions for Mental Health",
          skill: "Describe talking therapies, medication, self-help and crisis interventions for mental health.",
          sections: [
            {
              heading: "Talking therapies",
              body: "**Cognitive Behavioural Therapy (CBT)** identifies and challenges unhelpful thoughts and behaviours. **Counselling** offers a supportive space to explore feelings. Other therapies include **psychodynamic therapy**, **family therapy**, and **group therapy**. NICE recommends talking therapies such as CBT for depression and anxiety, often alongside medication for moderate-to-severe conditions.",
            },
            {
              heading: "Medication, self-help and crisis support",
              body: "**Medication** — antidepressants (e.g. SSRIs), antipsychotics, mood stabilisers and anxiolytics — is prescribed by doctors and reviewed regularly. **Self-help** includes exercise, sleep routines, mindfulness, peer support groups and digital tools. In crisis, interventions include **de-escalation**, crisis lines, safety planning and emergency services; least restrictive options are tried before compulsory powers.",
            },
          ],
          keyFormulas: [
            { name: "Treatment options", statement: "Talking therapies + medication + self-help + crisis support." },
            { name: "CBT", statement: "Thoughts ↔ feelings ↔ behaviours cycle." },
            { name: "Least restrictive", statement: "Try least restrictive option before compulsory powers." },
          ],
          workedExample: {
            problem: "Recommend a treatment plan for someone with moderate depression who prefers not to take medication.",
            solution:
              "Offer structured talking therapy (CBT or counselling), support self-help strategies (exercise, sleep routine, peer support), set goals, and review progress regularly; escalate to medication if needed.",
          },
          questions: [
            {
              id: "edxbtechsc-u8-l3-tx-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Cognitive Behavioural Therapy (CBT) focuses on:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Unconscious childhood experiences" },
                  { id: "b", text: "The links between thoughts, feelings and behaviours" },
                  { id: "c", text: "Brain chemistry only" },
                  { id: "d", text: "Medication management" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "CBT", statement: "Therapy addressing links between thoughts, feelings and behaviours." }],
                steps: [{ reasoning: "CBT targets the thought-feeling-behaviour cycle.", marks: 2, markCode: "B" }],
                finalAnswer: "**(b)** — thoughts, feelings and behaviours",
              },
            },
            {
              id: "edxbtechsc-u8-l3-tx-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Name two self-help strategies that support mental health.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Self-help", statement: "Individual strategies supporting wellbeing." }],
                steps: [{ reasoning: "Any two: regular exercise, sleep hygiene, mindfulness, peer support, limiting alcohol, routine, hobbies.", marks: 2, markCode: "A" }],
                finalAnswer: "e.g. exercise and sleep hygiene",
              },
            },
            {
              id: "edxbtechsc-u8-l3-tx-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain how medication and talking therapies can be used together in mental health treatment.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Combined treatment", statement: "Medication stabilises symptoms; therapy builds coping skills." }],
                steps: [
                  { reasoning: "Medication reduces symptoms such as low mood or psychosis.", marks: 1, markCode: "M" },
                  { reasoning: "Talking therapy addresses thoughts, behaviours and underlying issues.", marks: 1, markCode: "M" },
                  { reasoning: "Combined approach often more effective than either alone; reviewed regularly.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Medication stabilises; therapy builds skills — combined treatment is often best",
              },
            },
            {
              id: "edxbtechsc-u8-l3-tx-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Define talking therapies. (b) Describe CBT. (c) Give two examples of medication used in mental health. (d) Explain three benefits of peer support. (e) State the principle of least restrictive intervention in crisis.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Treatment options", statement: "Psychological, pharmacological and peer-led interventions." }],
                steps: [
                  { reasoning: "(a) Psychological treatments addressing thoughts, feelings and behaviours.", marks: 1, markCode: "M" },
                  { reasoning: "(b) CBT identifies and challenges unhelpful thought-behaviour cycles.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Antidepressants (e.g. SSRIs), antipsychotics, mood stabilisers.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Three benefits: reduced isolation, shared understanding, hope and role models.", marks: 1, markCode: "A" },
                  { reasoning: "(e) Try least restrictive options (support, crisis line, voluntary admission) before compulsory powers.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Treatments combine talking therapies, medication, self-help and least-restrictive crisis support.",
              },
            },
            {
              id: "edxbtechsc-u8-l3-tx-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A service user with anxiety refuses medication but agrees to therapy. (a) Recommend two appropriate talking therapies. (b) Describe three things the care worker can do to support engagement. (c) Explain how self-help strategies could complement therapy. (d) State two signs that the approach is not working and what should happen next.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Supporting engagement in therapy", statement: "Respect preferences, build rapport, monitor progress." }],
                steps: [
                  { reasoning: "(a) CBT and counselling (or exposure-based therapy for anxiety).", marks: 1, markCode: "M" },
                  { reasoning: "(b) Three supports: explain therapy clearly, encourage attendance, build trust, involve in goal-setting.", marks: 2, markCode: "A" },
                  { reasoning: "(c) Self-help: relaxation, sleep routine, exercise, journaling complement therapy.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Non-attendance or worsening symptoms → review plan, consider medication or psychiatry referral.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Respect the choice of therapy; support engagement; monitor and escalate if ineffective.",
              },
            },
            {
              id: "edxbtechsc-u8-l3-tx-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss treatments and support for mental health. Your answer should cover: (a) what talking therapies are and two examples; (b) how CBT works; (c) the role of medication; (d) self-help and peer support; (e) crisis intervention and de-escalation; (f) the principle of least restrictive care; (g) why treatment should be person-centred.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Mental health treatments", statement: "Evidence-based, person-centred, least-restrictive interventions." }],
                steps: [
                  { reasoning: "(a) Psychological treatments; CBT and counselling named.", marks: 2, markCode: "M" },
                  { reasoning: "(b) CBT targets unhelpful thoughts and behaviours via the thought-feeling-behaviour cycle.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Medication (antidepressants, antipsychotics) stabilises symptoms, prescribed and reviewed.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Self-help strategies and peer support reduce isolation and build skills.", marks: 1, markCode: "A" },
                  { reasoning: "(e) Crisis support: de-escalation, crisis plans, emergency services; calm non-confrontational approach.", marks: 2, markCode: "M" },
                  { reasoning: "(f) Least restrictive option tried before compulsory powers.", marks: 1, markCode: "R" },
                  { reasoning: "(g) Person-centred care respects preferences, improves engagement and outcomes.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Mental health treatment combines therapies, medication, self-help and crisis support in a person-centred, least-restrictive way.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u8-l3-stigma",
          title: "Stigma, Inclusion and Supporting Individuals",
          skill: "Explain the impact of stigma and describe how to support individuals with mental health conditions.",
          sections: [
            {
              heading: "Stigma and its impact",
              body: "**Stigma** — negative attitudes and stereotypes about mental illness — causes discrimination, social exclusion, reluctance to seek help and worse outcomes. **Self-stigma** (internalised shame) leads to isolation and low self-esteem. Challenging stigma through education, contact with people with lived experience and positive media representation improves help-seeking and recovery.",
            },
            {
              heading: "Supporting individuals",
              body: "Support means treating the person as a whole, not just their condition: listen without judgement, respect confidentiality, involve them in decisions, and support daily living. In workplaces and education, **reasonable adjustments** (flexible hours, phased return, quiet spaces) enable participation. Anti-stigma campaigns, peer support groups and inclusive language ('person with depression', not 'depressive') reduce barriers.",
            },
          ],
          keyFormulas: [
            { name: "Stigma", statement: "Negative attitudes → discrimination → exclusion and worse outcomes." },
            { name: "Self-stigma", statement: "Internalised shame → isolation and low self-esteem." },
            { name: "Person-first language", statement: "'Person with depression' not 'depressive'." },
          ],
          workedExample: {
            problem: "A colleague with depression is worried about telling their employer. How should they be supported?",
            solution:
              "Support them to consider disclosing voluntarily (they are protected by the Equality Act 2010), suggest reasonable adjustments like flexible hours, and offer to help them talk to their manager or occupational health.",
          },
          questions: [
            {
              id: "edxbtechsc-u8-l3-sg-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which is an example of self-stigma?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "An employer refusing to hire someone with depression" },
                  { id: "b", text: "A person feeling ashamed and hiding their condition because they believe they are 'weak'" },
                  { id: "c", text: "A friend avoiding someone who has been sectioned" },
                  { id: "d", text: "Media portraying people with mental illness as dangerous" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Self-stigma", statement: "Internalised shame about one's own condition." }],
                steps: [{ reasoning: "Self-stigma is internalised shame leading to hiding and isolation.", marks: 2, markCode: "B" }],
                finalAnswer: "**(b)** — internalised shame",
              },
            },
            {
              id: "edxbtechsc-u8-l3-sg-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "State two ways stigma affects people with mental health conditions.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Impact of stigma", statement: "Discrimination and exclusion worsen outcomes." }],
                steps: [{ reasoning: "Any two: reluctance to seek help, social isolation, discrimination in work/housing, worse recovery, self-stigma.", marks: 2, markCode: "A" }],
                finalAnswer: "e.g. reluctance to seek help and social isolation",
              },
            },
            {
              id: "edxbtechsc-u8-l3-sg-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain the difference between person-first and condition-first language, giving an example of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Person-first language", statement: "Separate the person from the condition to reduce stigma." }],
                steps: [
                  { reasoning: "Person-first: 'person with depression' — emphasises personhood.", marks: 1, markCode: "M" },
                  { reasoning: "Condition-first: 'depressive' or 'schizophrenic' — defines person by illness.", marks: 1, markCode: "M" },
                  { reasoning: "Person-first reduces stigma and supports dignity.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Person-first language ('person with X') reduces stigma vs condition-first labels.",
              },
            },
            {
              id: "edxbtechsc-u8-l3-sg-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Define stigma and self-stigma. (b) Describe three ways stigma harms people with mental illness. (c) Explain two strategies to reduce stigma in the workplace. (d) State why contact with people with lived experience is effective.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Stigma reduction", statement: "Education, contact and person-first language reduce stigma." }],
                steps: [
                  { reasoning: "(a) Stigma = negative attitudes; self-stigma = internalised shame.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Three harms: reluctance to seek help, isolation, discrimination, worse outcomes.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Two workplace strategies: anti-stigma training, open dialogue, reasonable adjustments, peer champions.", marks: 2, markCode: "A" },
                  { reasoning: "(d) Contact counters stereotypes by showing real people, building empathy.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Stigma harms outcomes; education, contact and inclusive language reduce it.",
              },
            },
            {
              id: "edxbtechsc-u8-l3-sg-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A service user with schizophrenia wants to return to work but fears disclosure. (a) Explain the legal protection they have. (b) Describe three reasonable adjustments an employer could make. (c) Explain how the care worker can support the return-to-work process. (d) State how stigma might affect the person's self-esteem.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Supporting employment for mental health", statement: "Legal protection, adjustments and emotional support." }],
                steps: [
                  { reasoning: "(a) Equality Act 2010 — disability discrimination protection; mental illness can be a disability.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Three adjustments: flexible hours, phased return, quiet workspace, adjusted workload, regular breaks.", marks: 2, markCode: "A" },
                  { reasoning: "(c) Support: discuss disclosure options, liaise with occupational health, build confidence, monitor stress.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Stigma/self-stigma may lower self-esteem, cause shame and fear of judgment.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Protect rights, arrange adjustments, and support confidence to enable successful return to work.",
              },
            },
            {
              id: "edxbtechsc-u8-l3-sg-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss stigma and how to support people with mental health conditions. Your answer should cover: (a) the definition and types of stigma; (b) three impacts of stigma on individuals; (c) how self-stigma affects recovery; (d) three strategies to reduce stigma in care settings; (e) how to support an individual who is reluctant to seek help; (f) why inclusion and person-first language matter.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Anti-stigma practice", statement: "Stigma worsens outcomes; education, contact and inclusive practice reduce it." }],
                steps: [
                  { reasoning: "(a) Stigma = negative attitudes/stereotypes; self-stigma = internalised version; public stigma affects attitudes.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Three impacts: reluctance to seek help, isolation, discrimination, worse outcomes, self-esteem loss.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Self-stigma → shame, hiding condition, reduced help-seeking and slower recovery.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Three strategies: staff training, person-first language, peer support, open dialogue, anti-stigma campaigns.", marks: 2, markCode: "A" },
                  { reasoning: "(e) Support: listen non-judgementally, normalise help-seeking, offer information, involve peer support, respect autonomy.", marks: 2, markCode: "R" },
                  { reasoning: "(f) Person-first language and inclusion affirm dignity and challenge stereotypes.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Stigma worsens mental health outcomes; inclusive, person-first practice and anti-stigma strategies support recovery.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u8-l3-notes",
      title: "Supporting Mental Health and Reducing Stigma — notes",
      summary: "Treatments combine talking therapies, medication, self-help and crisis support; stigma must be actively challenged.",
      sections: [
        { heading: "Treatments", body: "CBT targets thoughts-feelings-behaviours; medication stabilises; self-help and peer support build resilience." },
        { heading: "Crisis", body: "De-escalate calmly, use crisis plans, try least restrictive options before compulsory powers." },
        { heading: "Stigma", body: "Self-stigma and public stigma harm outcomes — counter with education, contact and person-first language." },
      ],
    },
  },
];
