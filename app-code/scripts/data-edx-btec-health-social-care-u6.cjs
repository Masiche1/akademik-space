module.exports = [
  {
    file: "lesson-6-1.ts", exportName: "lesson61",
    lesson: {
      id: "edxbtechsc-u6-lesson-6-1", code: "6-1",
      title: "Understanding Mental Health and Wellbeing",
      goal: "I CAN define mental health and wellbeing, describe the mental health continuum, and challenge stigma.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 6: Mental Health and Wellbeing",
      ],
      vocabulary: [
        { term: "Mental health", definition: "State of wellbeing in which a person realises their abilities, copes with normal stresses, works productively and contributes to their community (WHO)." },
        { term: "Mental wellbeing", definition: "Ability to feel good, function well and have satisfying relationships; includes happiness, resilience and self-esteem." },
        { term: "Mental health continuum", definition: "Model showing mental health ranges from optimal wellbeing through mild/common problems to severe mental illness." },
        { term: "Stigma", definition: "Negative attitudes, stereotypes and discrimination directed at people with mental health problems." },
        { term: "Recovery", definition: "Journey of regaining control of one's life and building a meaningful life beyond illness — not necessarily a cure." },
        { term: "Protective factors", definition: "Personal, social or environmental features that reduce the risk of mental illness, e.g. social support, coping skills." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u6-l1-definitions", title: "Mental health, wellbeing and the continuum",
          skill: "Define mental health and wellbeing and apply the mental health continuum model.",
          sections: [
            { heading: "Definitions", body: "**Mental health** (WHO) is a state of wellbeing enabling people to realise their abilities, cope with normal stresses of life, work productively and contribute to their community. It is not merely the absence of mental illness.\n\n**Mental wellbeing** is broader and more positive: feeling good (happiness, contentment), functioning well (resilience, self-esteem, purpose) and having satisfying relationships. Wellbeing fluctuates and can coexist with mental illness." },
            { heading: "The continuum", body: "The **mental health continuum** places everyone on a spectrum:\n\n- **Optimal mental health** — thriving, resilient, functioning well.\n- **Everyday worries** — mild anxiety or low mood, usually temporary and managed.\n- **Common mental health problems** — e.g. mild-moderate anxiety or depression affecting daily life.\n- **Severe mental illness** — e.g. schizophrenia, bipolar disorder, requiring specialist care.\n\nEveryone moves along the continuum; a diagnosis is not a fixed category. Recovery-oriented practice emphasises hope, choice and personal goals." },
          ],
          keyFormulas: [
            { name: "Mental health", statement: "wellbeing enabling coping, productivity and contribution" },
            { name: "Continuum", statement: "optimal health ↔ everyday worries ↔ common problems ↔ severe illness" },
            { name: "Wellbeing", statement: "feeling good + functioning well + satisfying relationships" },
          ],
          workedExample: {
            problem: "Explain why someone diagnosed with depression can still have moments of good mental wellbeing.",
            solution: "Wellbeing is a separate, broader concept from illness. A person with depression may still feel content during enjoyable activities, maintain some supportive relationships or experience purpose through work or hobbies — wellbeing and illness coexist on different dimensions.",
          },
          questions: [
            {
              id: "edxbtechsc-u6-mh-q1", difficulty: "foundation", totalMarks: 2,
              stem: "State the WHO definition of mental health.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Mental health (WHO)", statement: "State of wellbeing: realise abilities, cope with stress, work, contribute." }],
                steps: [
                  { reasoning: "State of wellbeing.", marks: 1, markCode: "B" },
                  { reasoning: "Realise abilities / cope with stress / work / contribute.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "A state of wellbeing enabling people to realise their abilities, cope with normal stresses, work productively and contribute to their community.",
              },
            },
            {
              id: "edxbtechsc-u6-mh-q2", difficulty: "foundation", totalMarks: 3,
              stem: "List the four stages of the mental health continuum from best to worst.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Mental health continuum", statement: "Spectrum from optimal health to severe illness." }],
                steps: [{ reasoning: "Optimal mental health → everyday worries → common mental health problems → severe mental illness.", marks: 3, markCode: "B" }],
                finalAnswer: "Optimal health; everyday worries; common mental health problems; severe mental illness.",
              },
            },
            {
              id: "edxbtechsc-u6-mh-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the difference between mental health and mental wellbeing.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Mental health vs wellbeing", statement: "Health = coping/functioning; wellbeing = feeling good + relationships." }],
                steps: [
                  { reasoning: "Mental health = ability to cope, function and contribute (WHO).", marks: 1, markCode: "M" },
                  { reasoning: "Wellbeing = subjective feeling good plus functioning and relationships.", marks: 1, markCode: "M" },
                  { reasoning: "They can coexist with illness — not simply opposites.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Mental health is about functioning/coping; wellbeing is about feeling good and relationships — related but distinct.",
              },
            },
            {
              id: "edxbtechsc-u6-mh-q4", difficulty: "core", totalMarks: 4,
              stem: "Explain what stigma is and describe two ways it can harm people with mental health problems.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Stigma", statement: "Negative attitudes/stereotypes → discrimination." }],
                steps: [
                  { reasoning: "Stigma = negative stereotypes and attitudes towards mental illness.", marks: 1, markCode: "M" },
                  { reasoning: "Harm 1, e.g. reluctance to seek help / delayed treatment.", marks: 1, markCode: "M" },
                  { reasoning: "Harm 2, e.g. social exclusion, unemployment, low self-esteem.", marks: 1, markCode: "M" },
                  { reasoning: "Link to discrimination in services/employment.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Stigma creates shame, delays help-seeking and causes discrimination.",
              },
            },
            {
              id: "edxbtechsc-u6-mh-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Explain the concept of 'recovery' in mental health, distinguishing it from a cure. Then describe two ways care workers can support recovery.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Recovery", statement: "Regaining control and building a meaningful life, not necessarily symptom-free." }],
                steps: [
                  { reasoning: "Recovery = personal journey of control, hope, meaningful life.", marks: 2, markCode: "M" },
                  { reasoning: "Different from cure — symptoms may persist; focus on quality of life.", marks: 2, markCode: "M" },
                  { reasoning: "Support 1, e.g. person-centred goals, choice, advocacy.", marks: 1, markCode: "M" },
                  { reasoning: "Support 2, e.g. social connection, employment support, peer support.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Recovery focuses on control and meaningful life beyond illness, supported by person-centred care.",
              },
            },
            {
              id: "edxbtechsc-u6-mh-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A care worker meets a new client who says they have been 'feeling low for months'.\n(a) Explain how the mental health continuum helps frame this.\n(b) Describe three questions the worker could ask to assess impact.\n(c) Explain two protective factors that support mental wellbeing.\n(d) Describe two signs that professional help may be needed.\n(e) Explain how the worker should record and escalate concerns.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Mental health assessment", statement: "Continuum + impact + protective factors guide care." }],
                steps: [
                  { reasoning: "(a) Continuum places them somewhere between everyday worries and common problems.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Three assessment questions, e.g. sleep, appetite, concentration, functioning, support.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Two protective factors, e.g. social support, coping skills, employment, physical health.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Two escalation signs, e.g. hopelessness, self-harm thoughts, inability to function.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Record accurately, follow safeguarding/mental health procedures, refer to GP/crisis team.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "Continuum framing, assessment questions, protective factors and escalation described.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u6-l1-factors", title: "Causes and risk factors",
          skill: "Explain the biological, psychological and social factors that influence mental health.",
          sections: [
            { heading: "The bio-psycho-social model", body: "Mental health problems usually arise from an interaction of factors:\n\n- **Biological**: genetics (family history), brain chemistry (neurotransmitters like serotonin, dopamine), physical illness, substance use, hormones.\n- **Psychological**: personality traits, coping style, past trauma, negative thinking patterns, low self-esteem.\n- **Social**: poverty, unemployment, isolation, bereavement, relationship breakdown, discrimination, stigma, stressful life events.\n\nNo single factor 'causes' mental illness — risk accumulates across domains." },
            { heading: "Protective factors and resilience", body: "**Protective factors** buffer against risk: strong social support networks, secure attachments, good physical health, coping skills, self-esteem, sense of purpose, employment/education, and access to services.\n\n**Resilience** is the ability to adapt and recover from adversity — it can be built through supportive relationships, skills and meaning. Vulnerable groups (e.g. refugees, people in poverty, those with physical disabilities, LGBTQ+ people facing discrimination) may face higher risk." },
          ],
          keyFormulas: [
            { name: "Bio-psycho-social", statement: "biological + psychological + social factors interact" },
            { name: "Protective factors", statement: "support, coping skills, purpose, physical health buffer risk" },
            { name: "Resilience", statement: "capacity to adapt and recover from adversity" },
          ],
          workedExample: {
            problem: "A person loses their job after a bereavement and develops depression. Identify one factor from each domain contributing to this.",
            solution: "Biological: possible genetic predisposition or stress-hormone effects. Psychological: grief and negative thinking patterns. Social: unemployment, financial stress and reduced social contact — together raising risk of depression.",
          },
          questions: [
            {
              id: "edxbtechsc-u6-fac-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Name the three domains of the bio-psycho-social model of mental health.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Bio-psycho-social model", statement: "Biological, psychological and social factors interact." }],
                steps: [{ reasoning: "Biological, psychological, social named.", marks: 2, markCode: "B" }],
                finalAnswer: "Biological, psychological and social.",
              },
            },
            {
              id: "edxbtechsc-u6-fac-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give one example of a biological, one psychological and one social risk factor for mental illness.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Risk factors", statement: "Bio-psycho-social contributors." }],
                steps: [
                  { reasoning: "Biological, e.g. genetics, brain chemistry, physical illness, substance use.", marks: 1, markCode: "B" },
                  { reasoning: "Psychological, e.g. trauma, negative thinking, low self-esteem.", marks: 1, markCode: "B" },
                  { reasoning: "Social, e.g. poverty, isolation, bereavement, discrimination.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "Any valid example from each domain.",
              },
            },
            {
              id: "edxbtechsc-u6-fac-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why no single factor can be said to 'cause' mental illness, using the bio-psycho-social model.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Multi-factorial causation", statement: "Risk accumulates across interacting domains." }],
                steps: [
                  { reasoning: "Mental illness results from interactions of biological, psychological and social factors.", marks: 1, markCode: "M" },
                  { reasoning: "Risk factors accumulate — more factors raise likelihood.", marks: 1, markCode: "M" },
                  { reasoning: "Protective factors can offset risk — no deterministic single cause.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Illness emerges from interacting bio-psycho-social risk and protective factors, not one cause.",
              },
            },
            {
              id: "edxbtechsc-u6-fac-q4", difficulty: "core", totalMarks: 4,
              stem: "Explain what resilience is and describe three ways it can be strengthened.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Resilience", statement: "Ability to adapt and recover from adversity." }],
                steps: [
                  { reasoning: "Resilience defined as adapting/recovering from setbacks.", marks: 1, markCode: "M" },
                  { reasoning: "Strengthen 1, e.g. supportive relationships.", marks: 1, markCode: "M" },
                  { reasoning: "Strengthen 2, e.g. coping skills/problem-solving.", marks: 1, markCode: "M" },
                  { reasoning: "Strengthen 3, e.g. physical health, purpose, professional support.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Resilience can be built via relationships, skills, health and purpose.",
              },
            },
            {
              id: "edxbtechsc-u6-fac-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Explain how social determinants such as poverty, unemployment and discrimination can affect mental health, giving an example of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Social determinants", statement: "Adversity and inequality raise mental illness risk." }],
                steps: [
                  { reasoning: "Poverty → financial stress, poor housing, reduced access to services → anxiety/depression.", marks: 2, markCode: "M" },
                  { reasoning: "Unemployment → loss of purpose, income, social contact → low mood/isolation.", marks: 2, markCode: "M" },
                  { reasoning: "Discrimination → stigma, exclusion, internalised shame → higher risk especially for minority groups.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Social adversity creates chronic stress and reduces protective resources → higher mental illness risk.",
              },
            },
            {
              id: "edxbtechsc-u6-fac-q6", difficulty: "challenge", totalMarks: 9,
              stem: "Using the bio-psycho-social model, analyse this scenario: 'A student from a low-income household experiences panic attacks before exams after their parents separated.'\n(a) Identify one biological, psychological and social factor.\n(b) Explain how these factors might interact.\n(c) Describe three protective factors that could reduce risk.\n(d) Explain how a care worker could support this student.\n(e) Explain when referral to specialist services would be appropriate.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Bio-psycho-social analysis", statement: "Interacting factors shape mental health outcomes." }],
                steps: [
                  { reasoning: "(a) One factor per domain identified correctly.", marks: 3, markCode: "M" },
                  { reasoning: "(b) Interaction explained, e.g. stress hormones + worry + exam pressure compound.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Three protective factors, e.g. supportive teacher, counselling, stable routine.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Support: listen, validate, signpost to school counselling/GP.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Referral if persistent, impairing or risky — GP/school mental health services.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Bio-psycho-social analysis with interaction, protective factors and appropriate support/referral.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u6-mh-understand-notes", title: "Understanding mental health — notes",
      summary: "Mental health = capacity to cope and function; wellbeing adds feeling good. The continuum shows everyone moves along a spectrum; bio-psycho-social factors shape risk.",
      sections: [
        { heading: "Key idea", body: "Mental health is not simply absence of illness — it includes positive wellbeing." },
        { heading: "Model", body: "Bio-psycho-social: biology, psychology and social circumstances interact; protective factors build resilience." },
      ],
    },
  },
  {
    file: "lesson-6-2.ts", exportName: "lesson62",
    lesson: {
      id: "edxbtechsc-u6-lesson-6-2", code: "6-2",
      title: "Common Mental Health Conditions",
      goal: "I CAN describe the symptoms, causes and care needs of anxiety, depression, psychosis and eating disorders.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 6: Mental Health and Wellbeing",
      ],
      vocabulary: [
        { term: "Anxiety disorder", definition: "Excessive, persistent worry and fear that interferes with daily functioning; includes generalised anxiety, panic disorder, phobias." },
        { term: "Depression", definition: "Persistent low mood, loss of interest/pleasure (anhedonia) and other symptoms lasting at least two weeks." },
        { term: "Anhedonia", definition: "Loss of interest or pleasure in activities that were previously enjoyable." },
        { term: "Psychosis", definition: "Loss of contact with reality involving hallucinations, delusions or disordered thinking; seen in schizophrenia and bipolar disorder." },
        { term: "Hallucination", definition: "Perceiving something (e.g. hearing voices) that is not present." },
        { term: "Delusion", definition: "Fixed false belief not shared by others and resistant to reasoning, e.g. believing one is being watched." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u6-l2-mood", title: "Anxiety and depression",
          skill: "Describe the symptoms, risk factors and care approaches for common mood and anxiety disorders.",
          sections: [
            { heading: "Anxiety disorders", body: "**Anxiety** is a normal emotion; an **anxiety disorder** involves excessive, persistent worry disproportionate to the situation. Types: **generalised anxiety disorder** (constant worrying), **panic disorder** (recurrent panic attacks — sudden intense fear with palpitations, breathlessness, dizziness), **phobias** (irrational fear of specific things), **OCD** (intrusive thoughts + compulsive rituals), **PTSD** (after trauma).\n\nSymptoms: restlessness, fatigue, irritability, muscle tension, sleep disturbance, concentration problems. Physical effects via adrenaline: raised heart rate, sweating, nausea." },
            { heading: "Depression", body: "**Depression** = persistent low mood or **anhedonia** plus other symptoms for ≥2 weeks. Symptoms: low mood most of the day, loss of interest, changes in sleep/appetite, fatigue, poor concentration, feelings of worthlessness or guilt, possible suicidal thoughts.\n\nRisk factors: genetics, life events (loss, unemployment), chronic illness, isolation, substance use, hormonal changes. Care: talking therapies (CBT, counselling), medication (antidepressants) for moderate-severe cases, lifestyle support, crisis plans. **Always take suicidal ideation seriously** — follow local safeguarding and crisis procedures." },
          ],
          keyFormulas: [
            { name: "Depression criteria", statement: "low mood/anhedonia + symptoms for ≥2 weeks" },
            { name: "Anxiety types", statement: "generalised, panic, phobias, OCD, PTSD" },
            { name: "Panic attack", statement: "sudden intense fear: palpitations, breathlessness, dizziness" },
          ],
          workedExample: {
            problem: "A client says they feel 'constantly worried, can't sleep and have lost interest in hobbies'. Which condition is most likely and what are two key care steps?",
            solution: "Symptoms suggest a common mental health problem — possibly anxiety and/or depression. Care steps: listen non-judgementally and assess impact (sleep, eating, functioning, suicidal thoughts); signpost to GP for assessment; support with relaxation, routine and social connection; follow safeguarding procedures if risk is identified.",
          },
          questions: [
            {
              id: "edxbtechsc-u6-mood-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Name the two core symptoms required for a diagnosis of depression.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Depression criteria", statement: "Low mood or anhedonia + symptoms ≥2 weeks." }],
                steps: [
                  { reasoning: "Persistent low mood.", marks: 1, markCode: "B" },
                  { reasoning: "Loss of interest/pleasure (anhedonia) — either can be core.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "Persistent low mood and/or anhedonia, with other symptoms for at least two weeks.",
              },
            },
            {
              id: "edxbtechsc-u6-mood-q2", difficulty: "foundation", totalMarks: 3,
              stem: "List four symptoms of anxiety.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Anxiety symptoms", statement: "Worry, restlessness, tension, sleep and concentration problems." }],
                steps: [{ reasoning: "Any four, e.g. excessive worry, restlessness, muscle tension, poor sleep.", marks: 3, markCode: "B" }],
                finalAnswer: "Any four valid anxiety symptoms.",
              },
            },
            {
              id: "edxbtechsc-u6-mood-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the difference between normal anxiety and an anxiety disorder.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Anxiety vs disorder", statement: "Disorder = excessive, persistent, impairing worry." }],
                steps: [
                  { reasoning: "Normal anxiety is proportional to threat and temporary.", marks: 1, markCode: "M" },
                  { reasoning: "Disorder involves excessive, persistent worry out of proportion to situation.", marks: 1, markCode: "M" },
                  { reasoning: "Disorder interferes with daily functioning.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Anxiety disorder = disproportionate, persistent worry that impairs daily life.",
              },
            },
            {
              id: "edxbtechsc-u6-mood-q4", difficulty: "core", totalMarks: 4,
              stem: "Describe a panic attack and explain why a person experiencing one may believe they are having a heart attack.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Panic attack", statement: "Sudden intense fear with physical symptoms." }],
                steps: [
                  { reasoning: "Panic attack described: sudden intense fear, palpitations, breathlessness, dizziness, chest pain.", marks: 2, markCode: "M" },
                  { reasoning: "Adrenaline causes real physical symptoms.", marks: 1, markCode: "M" },
                  { reasoning: "Symptoms mimic cardiac events → fear of heart attack.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Panic attacks cause real physical symptoms (palpitations, chest pain) that mimic heart problems.",
              },
            },
            {
              id: "edxbtechsc-u6-mood-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Explain how depression affects daily functioning and describe three care approaches for a client with moderate depression.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Depression impact", statement: "Affects mood, energy, sleep, concentration, motivation." }],
                steps: [
                  { reasoning: "Effects: low mood, fatigue, poor concentration, withdrawn behaviour, disrupted sleep/appetite.", marks: 2, markCode: "M" },
                  { reasoning: "Approach 1, e.g. talking therapy (CBT/counselling).", marks: 1, markCode: "M" },
                  { reasoning: "Approach 2, e.g. medication for moderate-severe cases.", marks: 1, markCode: "M" },
                  { reasoning: "Approach 3, e.g. lifestyle support, routine, social connection, crisis planning.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Depression impairs energy/mood/function; treat with therapy, medication and lifestyle support.",
              },
            },
            {
              id: "edxbtechsc-u6-mood-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Write an extended answer covering:\n(a) what anxiety disorders include;\n(b) four symptoms of anxiety;\n(c) the core features of depression;\n(d) four symptoms of depression;\n(e) two differences between anxiety and depression;\n(f) three ways depression affects daily life;\n(g) how care workers should respond if a client mentions suicidal thoughts.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Mood disorders", statement: "Anxiety and depression share and differ in features." }],
                steps: [
                  { reasoning: "(a) Types: GAD, panic, phobias, OCD, PTSD.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Four anxiety symptoms.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Core features: low mood/anhedonia ≥2 weeks.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Four depression symptoms, e.g. fatigue, sleep change, worthlessness.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Two differences, e.g. anxiety = worry/fear; depression = low mood/loss of pleasure.", marks: 2, markCode: "A" },
                  { reasoning: "(f) Three daily-life effects, e.g. withdrawal, poor concentration, disrupted routines.", marks: 1, markCode: "M" },
                  { reasoning: "(g) Take seriously, stay with client, follow crisis/safeguarding procedures, contact GP/crisis team.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "Complete comparison of anxiety and depression plus crisis response.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u6-l2-severe", title: "Psychosis, bipolar disorder and eating disorders",
          skill: "Describe the features and care needs of severe mental health conditions.",
          sections: [
            { heading: "Psychosis and schizophrenia", body: "**Psychosis** = loss of contact with reality. **Positive symptoms** (added experiences): **hallucinations** (hearing voices, seeing things) and **delusions** (fixed false beliefs). **Negative symptoms** (loss of normal function): apathy, social withdrawal, flattened emotion, poor motivation, disorganised speech/behaviour.\n\n**Schizophrenia** is the most common psychotic disorder — often emerges in late teens/early twenties. Causes: genetic vulnerability + stress/trauma/substance use. Treatment: antipsychotic medication, psychological therapy, social support and recovery programmes." },
            { heading: "Bipolar disorder and eating disorders", body: "**Bipolar disorder** involves extreme mood swings between **mania** (elevated/irritable mood, overconfidence, little sleep, risky behaviour, sometimes psychosis) and **depression**. Managed with mood stabilisers, therapy and routine.\n\n**Eating disorders**: **anorexia nervosa** (severe restriction, fear of weight gain, distorted body image, low weight) and **bulimia nervosa** (binge eating followed by purging). Both involve intense fear of weight gain and disturbed body image. Care: specialist eating-disorder services, medical monitoring, psychological therapy, family involvement." },
          ],
          keyFormulas: [
            { name: "Psychosis symptoms", statement: "positive = hallucinations/delusions; negative = apathy/withdrawal" },
            { name: "Bipolar", statement: "mania ↔ depression mood swings" },
            { name: "Eating disorders", statement: "anorexia = restriction; bulimia = binge + purge" },
          ],
          workedExample: {
            problem: "A client reports hearing voices that comment on their actions and believes neighbours are spying on them. Identify the symptoms and suggest the appropriate response.",
            solution: "Hearing voices = auditory hallucination; believing neighbours spy = persecutory delusion — both positive symptoms of psychosis. Respond calmly, do not argue with the delusion, ensure safety, contact GP/crisis team for assessment, and follow local mental health procedures. Document and involve the multidisciplinary team.",
          },
          questions: [
            {
              id: "edxbtechsc-u6-sev-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Define psychosis and name its two main symptom categories.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Psychosis", statement: "Loss of contact with reality; positive and negative symptoms." }],
                steps: [
                  { reasoning: "Psychosis = loss of contact with reality.", marks: 1, markCode: "B" },
                  { reasoning: "Positive and negative symptom categories named.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "Loss of contact with reality; positive (hallucinations/delusions) and negative (withdrawal/apathy) symptoms.",
              },
            },
            {
              id: "edxbtechsc-u6-sev-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Distinguish between a hallucination and a delusion.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Hallucination vs delusion", statement: "Hallucination = false perception; delusion = false belief." }],
                steps: [
                  { reasoning: "Hallucination: perceiving something not present, e.g. hearing voices.", marks: 1, markCode: "B" },
                  { reasoning: "Delusion: fixed false belief, e.g. being watched or having special powers.", marks: 1, markCode: "B" },
                  { reasoning: "Both are positive symptoms of psychosis.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Hallucination = false perception; delusion = fixed false belief.",
              },
            },
            {
              id: "edxbtechsc-u6-sev-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain what is meant by 'positive' and 'negative' symptoms of schizophrenia.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Schizophrenia symptoms", statement: "Positive = added experiences; negative = losses of function." }],
                steps: [
                  { reasoning: "Positive: hallucinations, delusions, disorganised speech — added experiences.", marks: 1, markCode: "M" },
                  { reasoning: "Negative: apathy, social withdrawal, flattened emotion, poor motivation.", marks: 1, markCode: "M" },
                  { reasoning: "Both types occur; negative often persist longer.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Positive = hallucinations/delusions; negative = apathy/withdrawal/loss of function.",
              },
            },
            {
              id: "edxbtechsc-u6-sev-q4", difficulty: "core", totalMarks: 4,
              stem: "Describe the mood pattern in bipolar disorder and explain how it differs from unipolar depression.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Bipolar disorder", statement: "Alternating mania and depression." }],
                steps: [
                  { reasoning: "Bipolar = episodes of mania and depression.", marks: 1, markCode: "M" },
                  { reasoning: "Mania: elevated/irritable mood, overconfidence, little sleep, risky behaviour.", marks: 1, markCode: "M" },
                  { reasoning: "Depression episodes resemble unipolar depression.", marks: 1, markCode: "M" },
                  { reasoning: "Difference: unipolar = depression only; bipolar = mania + depression.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Bipolar swings between mania and depression; unipolar is depression only.",
              },
            },
            {
              id: "edxbtechsc-u6-sev-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Compare anorexia nervosa and bulimia nervosa in terms of eating behaviour, body image and physical health risks.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Anorexia vs bulimia", statement: "Both involve fear of weight gain; differ in behaviour." }],
                steps: [
                  { reasoning: "Anorexia: severe restriction → very low weight.", marks: 1, markCode: "M" },
                  { reasoning: "Bulimia: binge eating then purging (vomiting/laxatives).", marks: 1, markCode: "M" },
                  { reasoning: "Both: distorted body image, fear of weight gain.", marks: 1, markCode: "M" },
                  { reasoning: "Physical risks: anorexia = starvation, organ damage; bulimia = tooth erosion, electrolyte imbalance.", marks: 2, markCode: "M" },
                  { reasoning: "Both need specialist services and psychological support.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Anorexia restricts to low weight; bulimia binges and purges — both driven by body-image fear.",
              },
            },
            {
              id: "edxbtechsc-u6-sev-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Write an extended answer covering:\n(a) what psychosis is;\n(b) two positive and two negative symptoms of schizophrenia;\n(c) how hallucinations and delusions differ;\n(d) the role of antipsychotic medication;\n(e) the mood pattern in bipolar disorder;\n(f) the difference between anorexia and bulimia;\n(g) how a care worker should respond to a client experiencing psychosis.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Severe mental illness", statement: "Psychosis, bipolar and eating disorders need specialist care." }],
                steps: [
                  { reasoning: "(a) Psychosis = loss of contact with reality.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Two positive + two negative symptoms.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Hallucination = false perception; delusion = false belief.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Antipsychotics reduce hallucinations/delusions.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Bipolar = mania ↔ depression.", marks: 1, markCode: "M" },
                  { reasoning: "(f) Anorexia restrict vs bulimia binge-purge.", marks: 1, markCode: "M" },
                  { reasoning: "(g) Calm, non-confrontational, safety, GP/crisis team, document, MDT.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "Complete overview of severe mental illness and appropriate care response.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u6-conditions-notes", title: "Common mental health conditions — notes",
      summary: "Anxiety and depression are common; psychosis, bipolar and eating disorders are severe and need specialist care. Always take suicidal ideation seriously.",
      sections: [
        { heading: "Key idea", body: "Common ≠ trivial; severe ≠ untreatable — all respond to appropriate care." },
        { heading: "Crisis", body: "Suicidal thoughts, psychosis and eating disorders require prompt, structured responses." },
      ],
    },
  },
  {
    file: "lesson-6-3.ts", exportName: "lesson63",
    lesson: {
      id: "edxbtechsc-u6-lesson-6-3", code: "6-3",
      title: "Supporting Mental Health and Wellbeing",
      goal: "I CAN describe the mental health care pathway and explain how to support someone's mental wellbeing.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 6: Mental Health and Wellbeing",
      ],
      vocabulary: [
        { term: "Talking therapy", definition: "Psychological treatments such as CBT, counselling and psychotherapy that help people change thoughts, feelings and behaviours." },
        { term: "CBT", definition: "Cognitive behavioural therapy — focuses on changing unhelpful thoughts and behaviours." },
        { term: "Care pathway", definition: "Sequence of services a person moves through for a mental health problem, e.g. GP → IAPT → specialist services." },
        { term: "Crisis intervention", definition: "Immediate, short-term support for someone at risk of harm to self or others." },
        { term: "Self-care", definition: "Activities people do to look after their own mental and physical health, e.g. sleep, exercise, social contact." },
        { term: "Signposting", definition: "Providing information about appropriate services and how to access them." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u6-l3-services", title: "Mental health services and treatment",
          skill: "Describe the mental health care pathway and main treatment approaches.",
          sections: [
            { heading: "The care pathway", body: "Most people start with their **GP**, who assesses and may refer to:\n\n- **IAPT** (Improving Access to Psychological Therapies) — NHS talking therapies for mild-moderate problems: **CBT**, counselling, guided self-help.\n- **Community mental health teams (CMHTs)** — for moderate-severe problems, involving psychiatrists, nurses, social workers, OT.\n- **Crisis teams** — 24/7 support for people in mental health crisis.\n- **Inpatient care** — hospital admission for severe risk or need for intensive treatment.\n\n**Medication** (antidepressants, antipsychotics, mood stabilisers) is prescribed by doctors for moderate-severe conditions; **psychological therapy** is often combined with it." },
            { heading: "Talking therapies", body: "**CBT** identifies and challenges unhelpful thoughts and behaviours — evidence-based for anxiety and depression. **Counselling** provides a safe space to explore feelings. **Psychotherapy** offers deeper, longer-term work. **Group therapy** and **peer support** reduce isolation and share coping strategies.\n\nTreatment choice should be collaborative — the person should be involved in decisions about their care." },
          ],
          keyFormulas: [
            { name: "Care pathway", statement: "GP → IAPT/talking therapies → CMHT → crisis/inpatient" },
            { name: "CBT", statement: "change unhelpful thoughts + behaviours" },
            { name: "Treatment principle", statement: "medication + therapy often combined for moderate-severe" },
          ],
          workedExample: {
            problem: "A client with moderate depression asks what help is available. Outline the care pathway and two treatment options.",
            solution: "Start with GP for assessment. GP may refer to IAPT for CBT or counselling (first-line for mild-moderate depression). If symptoms are severe or unresponsive, CMHT or medication may be added. Options: CBT to change negative thinking; antidepressants if recommended; lifestyle support alongside.",
          },
          questions: [
            {
              id: "edxbtechsc-u6-svc-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Name two types of talking therapy used in mental health care.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Talking therapies", statement: "CBT, counselling, psychotherapy, group therapy." }],
                steps: [{ reasoning: "Any two, e.g. CBT and counselling.", marks: 2, markCode: "B" }],
                finalAnswer: "Any two: CBT, counselling, psychotherapy, group/peer support.",
              },
            },
            {
              id: "edxbtechsc-u6-svc-q2", difficulty: "foundation", totalMarks: 3,
              stem: "State the typical first point of contact for someone seeking help for a mental health problem.",
              response: { type: "mcq", choices: [
                { id: "a", text: "GP" },
                { id: "b", text: "Psychiatrist" },
                { id: "c", text: "A&E" },
                { id: "d", text: "Social services" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Care pathway", statement: "GP is first contact; refers onwards." }],
                steps: [{ reasoning: "GP assesses and refers to IAPT/CMHT etc.", marks: 3, markCode: "B" }],
                finalAnswer: "(a) GP",
              },
            },
            {
              id: "edxbtechsc-u6-svc-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain what CBT is and how it helps people with anxiety or depression.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "CBT", statement: "Cognitive behavioural therapy — changes thoughts and behaviours." }],
                steps: [
                  { reasoning: "CBT identifies unhelpful thoughts and behaviours.", marks: 1, markCode: "M" },
                  { reasoning: "Challenges and reframes negative thinking patterns.", marks: 1, markCode: "M" },
                  { reasoning: "Builds coping strategies → reduces anxiety/depression symptoms.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "CBT changes unhelpful thoughts and behaviours to improve mood and coping.",
              },
            },
            {
              id: "edxbtechsc-u6-svc-q4", difficulty: "core", totalMarks: 4,
              stem: "Describe the stages of the mental health care pathway from first contact to specialist care.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Care pathway", statement: "Stepped care from GP to specialist." }],
                steps: [
                  { reasoning: "First contact: GP assessment.", marks: 1, markCode: "M" },
                  { reasoning: "Mild-moderate: IAPT talking therapies.", marks: 1, markCode: "M" },
                  { reasoning: "Moderate-severe: CMHT / medication.", marks: 1, markCode: "M" },
                  { reasoning: "Crisis/severe: crisis team or inpatient admission.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "GP → IAPT → CMHT/medication → crisis/inpatient as severity increases.",
              },
            },
            {
              id: "edxbtechsc-u6-svc-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Explain why medication and talking therapy are often combined for moderate-to-severe depression, and describe two benefits of involving the person in treatment decisions.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Combined treatment", statement: "Medication + therapy address biology and psychology." }],
                steps: [
                  { reasoning: "Medication (e.g. antidepressants) corrects brain chemistry.", marks: 1, markCode: "M" },
                  { reasoning: "Therapy addresses thoughts, behaviours and coping.", marks: 1, markCode: "M" },
                  { reasoning: "Together more effective than either alone for moderate-severe cases.", marks: 2, markCode: "M" },
                  { reasoning: "Benefit 1: improves adherence/engagement.", marks: 1, markCode: "M" },
                  { reasoning: "Benefit 2: respects autonomy, improves outcomes, reduces stigma.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Combined treatment targets biology + psychology; involvement improves adherence and outcomes.",
              },
            },
            {
              id: "edxbtechsc-u6-svc-q6", difficulty: "challenge", totalMarks: 9,
              stem: "Write an extended answer covering:\n(a) the typical first step in seeking mental health help;\n(b) what IAPT provides;\n(c) the role of community mental health teams;\n(d) when crisis teams are used;\n(e) two types of medication used in mental health;\n(f) three benefits of talking therapy;\n(g) why treatment should be collaborative.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Mental health services", statement: "Stepped pathway from GP to specialist/crisis." }],
                steps: [
                  { reasoning: "(a) GP assessment first.", marks: 1, markCode: "M" },
                  { reasoning: "(b) IAPT = NHS talking therapies for mild-moderate.", marks: 1, markCode: "M" },
                  { reasoning: "(c) CMHT = multidisciplinary care for moderate-severe.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Crisis teams = 24/7 support in mental health crisis.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Two medication types, e.g. antidepressants, antipsychotics, mood stabilisers.", marks: 1, markCode: "M" },
                  { reasoning: "(f) Three therapy benefits, e.g. coping skills, reduce symptoms, prevent relapse.", marks: 1, markCode: "M" },
                  { reasoning: "(g) Collaboration → autonomy, adherence, better outcomes.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "Complete mental health services and treatment overview.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u6-l3-support", title: "Supporting wellbeing and crisis care",
          skill: "Explain how to promote mental wellbeing, respond to crisis and apply safeguarding in mental health.",
          sections: [
            { heading: "Promoting mental wellbeing", body: "Everyone can support their own and others' mental health through:\n\n- **Five ways to wellbeing**: connect (relationships), be active (exercise), take notice (mindfulness), keep learning (new skills), give (helping others).\n- **Sleep hygiene**: regular routine, avoid screens before bed.\n- **Physical health**: exercise, balanced diet, limiting alcohol.\n- **Stress management**: relaxation, time management, boundaries.\n- **Early help**: talking to someone, GP visit when problems persist." },
            { heading: "Crisis and safeguarding", body: "A **mental health crisis** involves risk of harm to self or others, severe confusion or inability to cope. **Crisis intervention**: stay calm, listen, assess risk (suicidal thoughts, self-harm, harm to others), do not leave the person alone if at immediate risk, contact emergency services/GP/crisis team, follow local safeguarding procedures.\n\n**Self-harm** is often a coping mechanism, not necessarily a suicide attempt — respond with care, not judgement, and follow safeguarding and self-harm policies. Always document and escalate appropriately." },
          ],
          keyFormulas: [
            { name: "Five ways to wellbeing", statement: "connect, be active, take notice, keep learning, give" },
            { name: "Crisis response", statement: "calm, assess risk, don't leave alone, escalate, document" },
            { name: "Self-harm", statement: "often coping mechanism — respond with care, follow policies" },
          ],
          workedExample: {
            problem: "A client says 'sometimes I think everyone would be better off without me'. What should the care worker do?",
            solution: "Take it seriously — this suggests suicidal ideation. Stay with the client, ask directly about thoughts/plans, assess immediate risk, do not leave them alone, contact GP/crisis team or emergency services per local procedures, document, and follow up. Never dismiss or promise secrecy.",
          },
          questions: [
            {
              id: "edxbtechsc-u6-well-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Name three of the 'five ways to wellbeing'.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Five ways to wellbeing", statement: "Connect, be active, take notice, keep learning, give." }],
                steps: [{ reasoning: "Any three named correctly.", marks: 2, markCode: "B" }],
                finalAnswer: "Any three: connect, be active, take notice, keep learning, give.",
              },
            },
            {
              id: "edxbtechsc-u6-well-q2", difficulty: "foundation", totalMarks: 3,
              stem: "List three self-care activities that support mental wellbeing.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Self-care", statement: "Sleep, exercise, diet, social contact, relaxation." }],
                steps: [{ reasoning: "Any three valid self-care activities.", marks: 3, markCode: "B" }],
                finalAnswer: "Any three: good sleep, exercise, balanced diet, social contact, relaxation, hobbies.",
              },
            },
            {
              id: "edxbtechsc-u6-well-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain what is meant by 'signposting' and why it is important in mental health support.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Signposting", statement: "Providing information on appropriate services." }],
                steps: [
                  { reasoning: "Signposting = giving information about services and how to access them.", marks: 1, markCode: "M" },
                  { reasoning: "Connects people to professional help beyond the worker's role.", marks: 1, markCode: "M" },
                  { reasoning: "Reduces isolation and delays in treatment.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Signposting directs people to appropriate services, enabling timely professional support.",
              },
            },
            {
              id: "edxbtechsc-u6-well-q4", difficulty: "core", totalMarks: 4,
              stem: "Describe the correct response if a client expresses thoughts of suicide.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Crisis response", statement: "Stay, assess, don't leave alone, escalate, document." }],
                steps: [
                  { reasoning: "Take it seriously; ask directly about thoughts/plans.", marks: 1, markCode: "M" },
                  { reasoning: "Stay with the person; assess immediate risk.", marks: 1, markCode: "M" },
                  { reasoning: "Contact GP/crisis team/emergency services as appropriate.", marks: 1, markCode: "M" },
                  { reasoning: "Document and follow up; do not promise secrecy.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Stay, assess risk, escalate to crisis services, document and follow up.",
              },
            },
            {
              id: "edxbtechsc-u6-well-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Explain how a care worker can support someone's mental wellbeing through daily practice, giving four examples.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Wellbeing support", statement: "Daily interactions promote mental health." }],
                steps: [
                  { reasoning: "Example 1, e.g. active listening and validating feelings.", marks: 1, markCode: "M" },
                  { reasoning: "Example 2, e.g. encouraging social contact and activities.", marks: 1, markCode: "M" },
                  { reasoning: "Example 3, e.g. supporting routine, sleep, exercise and healthy eating.", marks: 2, markCode: "M" },
                  { reasoning: "Example 4, e.g. signposting to services and involving person in choices.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Daily listening, social support, healthy routines and signposting promote wellbeing.",
              },
            },
            {
              id: "edxbtechsc-u6-well-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Write an extended answer covering:\n(a) three ways to promote mental wellbeing;\n(b) what 'signposting' means;\n(c) the steps of a mental health crisis response;\n(d) how to respond to self-harm disclosures;\n(e) why documentation and escalation matter;\n(f) two ways to support a carer of someone with mental illness;\n(g) when to involve emergency services.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Wellbeing and crisis care", statement: "Promote wellbeing; respond to crisis safely; document and escalate." }],
                steps: [
                  { reasoning: "(a) Three wellbeing measures, e.g. five ways, sleep, exercise, social contact.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Signposting defined.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Crisis steps: calm, assess risk, don't leave alone, escalate.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Self-harm: respond with care, not judgement; follow policies; assess risk.", marks: 2, markCode: "M" },
                  { reasoning: "(e) Documentation + escalation ensure continuity and safeguarding.", marks: 1, markCode: "M" },
                  { reasoning: "(f) Two carer supports, e.g. respite, information, emotional support.", marks: 1, markCode: "M" },
                  { reasoning: "(g) Emergency services for immediate risk to life/others.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Complete wellbeing promotion and crisis care overview.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u6-support-notes", title: "Supporting mental health — notes",
      summary: "GP → IAPT → CMHT → crisis/inpatient. Promote wellbeing daily; take suicidal ideation seriously; document and escalate.",
      sections: [
        { heading: "Key idea", body: "Mental health care is stepped — early intervention prevents crisis." },
        { heading: "Crisis", body: "Stay calm, assess risk, don't leave alone, escalate, document." },
      ],
    },
  },
];
