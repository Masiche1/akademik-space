module.exports = [
  {
    file: "lesson-10-1.ts",
    exportName: "lesson101",
    lesson: {
      id: "edxbtechsc-u10-lesson-10-1",
      code: "10-1",
      title: "Understanding Learning Disability",
      goal: "I CAN describe learning disability, its causes, impact and the legislative framework.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 10: Learning Disability and Autism (extended certificate)",
      ],
      vocabulary: [
        { term: "Learning disability", definition: "A significantly reduced ability to understand new or complex information, learn new skills, or cope independently — with lifelong impact on everyday life." },
        { term: "Intellectual disability", definition: "Reduced intellectual functioning and adaptive behaviour, often used interchangeably with learning disability." },
        { term: "Adaptive behaviour", definition: "Skills needed for everyday life — communication, self-care, social skills, safety." },
        { term: "SEND", definition: "Special Educational Needs and Disabilities — the framework for supporting children with additional needs in education." },
        { term: "EHCP", definition: "Education, Health and Care Plan — a legal document setting out a child's special educational needs and support." },
        { term: "Person-centred planning", definition: "Planning care around the individual's wishes, strengths and goals." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u10-l1-understanding",
          title: "What is Learning Disability? Causes and Impact",
          skill: "Define learning disability, describe causes and explain its impact on daily life.",
          sections: [
            {
              heading: "Definition and causes",
              body: "**Learning disability** means a significantly reduced ability to understand new or complex information, learn new skills, or cope independently, with a **lifelong impact** on everyday life. It is defined by reduced intellectual functioning **and** impaired **adaptive behaviour** (communication, self-care, social skills, safety). Causes: **genetic** (Down's syndrome, fragile X), **prenatal** (alcohol — FASD, infection, malnutrition), **perinatal** (premature birth, birth asphyxia) and **postnatal** (illness, injury, neglect).",
            },
            {
              heading: "Impact and the social model",
              body: "Learning disability affects learning, communication, social skills and independence — but impact depends on support and environment. Many people with learning disability live independently, work, have relationships and contribute. The **social model** says disability results from barriers in society (inaccessible information, discrimination, lack of support), not just impairment. Person-centred support enables people to live the lives they choose.",
            },
          ],
          keyFormulas: [
            { name: "Learning disability", statement: "Reduced ability to understand/learn/cope + lifelong impact." },
            { name: "Two criteria", statement: "Reduced intellectual functioning AND impaired adaptive behaviour." },
            { name: "Causes", statement: "Genetic, prenatal, perinatal, postnatal." },
          ],
          workedExample: {
            problem: "A child with Down's syndrome struggles with reading but communicates well and has friends. Does this indicate learning disability?",
            solution:
              "Yes — Down's syndrome causes reduced intellectual functioning and adaptive challenges. Support should build on strengths (communication, sociability) while addressing learning needs.",
          },
          questions: [
            {
              id: "edxbtechsc-u10-l1-ud-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Learning disability is best defined as:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A temporary difficulty with reading" },
                  { id: "b", text: "A significantly reduced ability to understand, learn and cope, with lifelong impact" },
                  { id: "c", text: "A mental illness" },
                  { id: "d", text: "A physical impairment" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Learning disability", statement: "Reduced ability to understand, learn and cope with lifelong impact." }],
                steps: [{ reasoning: "LD = significantly reduced ability + lifelong impact on everyday life.", marks: 2, markCode: "B" }],
                finalAnswer: "**(b)** — reduced ability with lifelong impact",
              },
            },
            {
              id: "edxbtechsc-u10-l1-ud-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Name the two criteria for diagnosing learning disability.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "LD criteria", statement: "Reduced intellectual functioning + impaired adaptive behaviour." }],
                steps: [{ reasoning: "Two criteria: significantly reduced intellectual functioning AND impaired adaptive behaviour.", marks: 2, markCode: "M" }],
                finalAnswer: "Reduced intellectual functioning + impaired adaptive behaviour",
              },
            },
            {
              id: "edxbtechsc-u10-l1-ud-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Describe three causes of learning disability.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Causes of LD", statement: "Genetic, prenatal, perinatal, postnatal." }],
                steps: [
                  { reasoning: "Genetic: Down's syndrome, fragile X.", marks: 1, markCode: "M" },
                  { reasoning: "Prenatal: alcohol (FASD), infection, malnutrition.", marks: 1, markCode: "M" },
                  { reasoning: "Perinatal/postnatal: premature birth, illness, injury, neglect.", marks: 1, markCode: "A" }],
                finalAnswer: "Genetic, prenatal, perinatal and postnatal causes.",
              },
            },
            {
              id: "edxbtechsc-u10-l1-ud-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Define learning disability. (b) State the two diagnostic criteria. (c) Describe three causes. (d) Explain how the social model views disability. (e) Explain why person-centred support matters.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Learning disability", statement: "Reduced ability + adaptive impairment; social model sees barriers in society." }],
                steps: [
                  { reasoning: "(a) Significantly reduced ability to understand, learn and cope with lifelong impact.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Reduced intellectual functioning + impaired adaptive behaviour.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Three causes: genetic, prenatal, perinatal/postnatal.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Social model: disability results from barriers (access, discrimination, lack of support), not just impairment.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Person-centred support respects choices, enables independence and better outcomes.", marks: 1, markCode: "R" }],
                finalAnswer: "Learning disability = reduced ability + adaptive impairment; support should be person-centred.",
              },
            },
            {
              id: "edxbtechsc-u10-l1-ud-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A young adult with learning disability wants to live independently but struggles with cooking and budgeting. (a) Identify the support need. (b) Explain how person-centred planning would help. (c) Describe three supports that could enable independence. (d) Explain how the social model applies here.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Supporting independence", statement: "Person-centred planning + targeted support enables choice." }],
                steps: [
                  { reasoning: "(a) Support need: daily living skills (cooking, budgeting) for independent living.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Person-centred planning: identify goals, strengths, support needed, review regularly.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Three supports: skills training, support worker, technology aids, pictorial guides, community classes.", marks: 2, markCode: "A" },
                  { reasoning: "(d) Social model: barriers (lack of accessible info, support) create disability — remove them.", marks: 1, markCode: "R" }],
                finalAnswer: "Person-centred planning + targeted support enables independent living.",
              },
            },
            {
              id: "edxbtechsc-u10-l1-ud-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss learning disability. Your answer should cover: (a) the definition; (b) the two diagnostic criteria; (c) causes; (d) impact on daily life; (e) the social model; (f) person-centred support; (g) common misconceptions.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Learning disability", statement: "Reduced ability + adaptive impairment; person-centred support enables choice." }],
                steps: [
                  { reasoning: "(a) Significantly reduced ability to understand, learn and cope with lifelong impact.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Reduced intellectual functioning + impaired adaptive behaviour.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Causes: genetic, prenatal, perinatal, postnatal.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Impact: learning, communication, social skills, independence — varies with support.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Social model: barriers in society create disability.", marks: 2, markCode: "R" },
                  { reasoning: "(f) Person-centred support: respect choices, enable independence, review goals.", marks: 2, markCode: "R" },
                  { reasoning: "(g) Misconceptions: 'can't learn', 'always dependent', 'only children' — all false.", marks: 2, markCode: "A" }],
                finalAnswer: "Learning disability is lifelong but with person-centred support people can live independently and contribute.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u10-l1-legislation",
          title: "Legislation and Support Frameworks",
          skill: "Describe legislation and frameworks supporting people with learning disability.",
          sections: [
            {
              heading: "Education framework",
              body: "The **SEND Code of Practice** guides education for children with special educational needs. An **EHCP** (Education, Health and Care Plan) is a legal document for children with significant needs, setting out required support across education, health and social care. Support ranges from mainstream with adjustments to specialist provision. Early identification enables early intervention.",
            },
            {
              heading: "Rights and protection",
              body: "The **Equality Act 2010** prohibits discrimination and requires **reasonable adjustments**. The **Care Act 2014** sets wellbeing duties and safeguarding responsibilities. The **Mental Capacity Act 2005** protects decision-making for people who lack capacity — assess capacity, support decision-making, act in best interests. The **Human Rights Act 1998** guarantees rights to dignity, privacy and non-discrimination.",
            },
          ],
          keyFormulas: [
            { name: "EHCP", statement: "Legal document for children's SEND support across education, health, social care." },
            { name: "Equality Act 2010", statement: "Prohibits discrimination; requires reasonable adjustments." },
            { name: "MCA 2005", statement: "Assess capacity, support decisions, act in best interests." },
          ],
          workedExample: {
            problem: "A child with learning disability needs extra support in school. What legal framework applies?",
            solution:
              "Assess needs under the SEND Code of Practice; if significant, request an EHCP which legally requires the support described to be provided.",
          },
          questions: [
            {
              id: "edxbtechsc-u10-l1-lg-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "An EHCP is:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A medical prescription" },
                  { id: "b", text: "A legal document setting out a child's SEND support needs" },
                  { id: "c", text: "A type of school" },
                  { id: "d", text: "A medication" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "EHCP", statement: "Legal document for children's SEND support." }],
                steps: [{ reasoning: "EHCP = Education, Health and Care Plan — legally binding support document.", marks: 2, markCode: "B" }],
                finalAnswer: "**(b)** — legal SEND support document",
              },
            },
            {
              id: "edxbtechsc-u10-l1-lg-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What does the Equality Act 2010 require providers to do for people with disabilities?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Equality Act 2010", statement: "Prohibits discrimination; requires reasonable adjustments." }],
                steps: [{ reasoning: "Prohibit discrimination and make reasonable adjustments to enable access and participation.", marks: 2, markCode: "M" }],
                finalAnswer: "Prohibit discrimination and make reasonable adjustments",
              },
            },
            {
              id: "edxbtechsc-u10-l1-lg-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain the role of the Mental Capacity Act 2005 in supporting people with learning disability.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "MCA 2005", statement: "Assess capacity, support decisions, act in best interests." }],
                steps: [
                  { reasoning: "Assess whether person can make a specific decision at the time.", marks: 1, markCode: "M" },
                  { reasoning: "Support decision-making — provide information, time, communication support.", marks: 1, markCode: "M" },
                  { reasoning: "If lacking capacity, act in best interests following MCA principles.", marks: 1, markCode: "A" }],
                finalAnswer: "MCA protects decision-making — assess capacity, support choices, act in best interests.",
              },
            },
            {
              id: "edxbtechsc-u10-l1-lg-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Define SEND. (b) Explain the purpose of an EHCP. (c) Describe what the Equality Act 2010 requires. (d) State the three key principles of the Mental Capacity Act. (e) Explain why legislation matters for people with learning disability.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Legislation for LD", statement: "Legal frameworks protect rights and require support." }],
                steps: [
                  { reasoning: "(a) SEND = Special Educational Needs and Disabilities framework for children.", marks: 1, markCode: "M" },
                  { reasoning: "(b) EHCP = legal document setting out required support across education, health, social care.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Equality Act: prohibits discrimination, requires reasonable adjustments.", marks: 1, markCode: "M" },
                  { reasoning: "(d) MCA principles: assume capacity, support decisions, act in best interests, least restrictive.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Legislation protects rights, requires support and prevents discrimination.", marks: 1, markCode: "R" }],
                finalAnswer: "Legislation protects rights and requires support for people with learning disability.",
              },
            },
            {
              id: "edxbtechsc-u10-l1-lg-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A school refuses to provide extra support for a child with learning disability, calling it 'unfair to other children'. (a) Identify the legislation that applies. (b) Explain what the school must do. (c) Describe the EHCP process if support is needed. (d) Explain what reasonable adjustments might look like.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Legal support for SEND", statement: "Equality Act + SEND Code + EHCP protect children's rights." }],
                steps: [
                  { reasoning: "(a) SEND Code of Practice, Equality Act 2010, EHCP if needed.", marks: 1, markCode: "M" },
                  { reasoning: "(b) School must make reasonable adjustments and provide support — not optional.", marks: 2, markCode: "M" },
                  { reasoning: "(c) EHCP process: assess needs, request plan, plan legally requires provision.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Adjustments: extra time, adapted materials, support worker, modified curriculum.", marks: 1, markCode: "A" }],
                finalAnswer: "Schools must provide reasonable adjustments; EHCP legally requires significant support.",
              },
            },
            {
              id: "edxbtechsc-u10-l1-lg-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss legislation and support frameworks for people with learning disability. Your answer should cover: (a) the SEND framework; (b) the EHCP; (c) the Equality Act 2010; (d) the Mental Capacity Act 2005; (e) the Care Act 2014; (f) why legislation protects rights; (g) how these frameworks support person-centred care.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "LD legislation", statement: "Legal frameworks protect rights, require support and enable person-centred care." }],
                steps: [
                  { reasoning: "(a) SEND framework: Code of Practice guides education support for children.", marks: 1, markCode: "M" },
                  { reasoning: "(b) EHCP: legal document for significant needs across education, health, social care.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Equality Act 2010: prohibits discrimination, requires reasonable adjustments.", marks: 1, markCode: "M" },
                  { reasoning: "(d) MCA 2005: assess capacity, support decisions, act in best interests.", marks: 2, markCode: "M" },
                  { reasoning: "(e) Care Act 2014: wellbeing duty, safeguarding, adult social care duties.", marks: 1, markCode: "M" },
                  { reasoning: "(f) Legislation protects against discrimination and ensures support is a right.", marks: 1, markCode: "R" },
                  { reasoning: "(g) Frameworks enable person-centred, rights-based care.", marks: 2, markCode: "R" }],
                finalAnswer: "Legislation protects rights and requires support — enabling person-centred care.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u10-l1-notes",
      title: "Understanding Learning Disability — notes",
      summary: "Learning disability = reduced ability + adaptive impairment, lifelong; legislation protects rights and requires support.",
      sections: [
        { heading: "Definition", body: "Significantly reduced ability to understand, learn and cope with lifelong impact — two criteria: intellectual functioning + adaptive behaviour." },
        { heading: "Causes", body: "Genetic, prenatal (FASD), perinatal, postnatal — but impact depends on support." },
        { heading: "Legislation", body: "EHCP for children, Equality Act 2010, MCA 2005, Care Act 2014 protect rights." },
      ],
    },
  },
  {
    file: "lesson-10-2.ts",
    exportName: "lesson102",
    lesson: {
      id: "edxbtechsc-u10-lesson-10-2",
      code: "10-2",
      title: "Autism Spectrum Condition",
      goal: "I CAN describe autism, its characteristics and support strategies.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 10: Learning Disability and Autism (extended certificate)",
      ],
      vocabulary: [
        { term: "Autism", definition: "A developmental condition affecting communication, social interaction and behaviour, existing on a spectrum." },
        { term: "ASD", definition: "Autism Spectrum Disorder — clinical diagnosis on the autism spectrum." },
        { term: "Triad of impairments", definition: "The three areas affected: social interaction, communication, and flexible thinking/behaviour." },
        { term: "Sensory processing", definition: "How the brain interprets sensory information — often atypical in autism, causing overload or seeking." },
        { term: "Special interests", definition: "Intense, focused interests common in autism that can be channelled positively." },
        { term: "Social stories", definition: "Short stories explaining social situations to help autistic people understand expectations." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u10-l2-characteristics",
          title: "Characteristics of Autism",
          skill: "Describe the characteristics of autism across the triad of impairments and sensory processing.",
          sections: [
            {
              heading: "The triad of impairments",
              body: "Autism affects three areas (the **triad**): **social interaction** (difficulty reading social cues, maintaining relationships, eye contact), **communication** (delayed speech, literal understanding, echolalia), and **flexible thinking/behaviour** (insistence on routine, repetitive behaviours, difficulty with change). Presentation varies widely — hence 'spectrum'.",
            },
            {
              heading: "Sensory processing and strengths",
              body: "Many autistic people have **atypical sensory processing** — hypersensitivity (overwhelm from noise, light, touch) or hyposensitivity (seeking intense sensory input). This can cause distress or meltdowns. Strengths often include **attention to detail**, **honesty**, **loyalty**, **special interests**, **pattern recognition** and **systematic thinking**. Many autistic people also have co-occurring conditions (anxiety, ADHD, epilepsy, learning disability).",
            },
          ],
          keyFormulas: [
            { name: "Triad of impairments", statement: "Social interaction + communication + flexible thinking/behaviour." },
            { name: "Sensory processing", statement: "Hypersensitivity (overwhelm) or hyposensitivity (seeking)." },
            { name: "Spectrum", statement: "Wide variation in presentation and support needs." },
          ],
          workedExample: {
            problem: "An autistic child covers their ears and runs out during a noisy assembly. Explain what is happening.",
            solution:
              "The child is experiencing sensory overload — hypersensitivity to noise overwhelms them. Support includes warning of loud events, allowing ear defenders, and having a quiet space to retreat to.",
          },
          questions: [
            {
              id: "edxbtechsc-u10-l2-ch-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "The 'triad of impairments' in autism refers to difficulties with:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Hearing, seeing and walking" },
                  { id: "b", text: "Social interaction, communication and flexible thinking/behaviour" },
                  { id: "c", text: "Reading, writing and maths" },
                  { id: "d", text: "Eating, sleeping and toileting" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Triad of impairments", statement: "Social interaction, communication, flexible thinking/behaviour." }],
                steps: [{ reasoning: "Triad = social interaction + communication + flexible thinking.", marks: 2, markCode: "B" }],
                finalAnswer: "**(b)** — social, communication, flexible thinking",
              },
            },
            {
              id: "edxbtechsc-u10-l2-ch-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Define sensory processing difficulties in autism.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Sensory processing", statement: "Atypical interpretation of sensory input causing overload or seeking." }],
                steps: [{ reasoning: "Brain interprets sensory info atypically — hypersensitivity (overwhelm) or hyposensitivity (seeking).", marks: 2, markCode: "M" }],
                finalAnswer: "Atypical sensory interpretation — hypersensitivity or hyposensitivity",
              },
            },
            {
              id: "edxbtechsc-u10-l2-ch-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Describe three strengths commonly associated with autism.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Autism strengths", statement: "Attention to detail, honesty, special interests, pattern recognition." }],
                steps: [
                  { reasoning: "Attention to detail and pattern recognition.", marks: 1, markCode: "M" },
                  { reasoning: "Honesty, loyalty and directness.", marks: 1, markCode: "M" },
                  { reasoning: "Deep special interests and systematic thinking.", marks: 1, markCode: "A" }],
                finalAnswer: "Attention to detail, honesty, special interests, pattern recognition.",
              },
            },
            {
              id: "edxbtechsc-u10-l2-ch-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Define autism. (b) Describe the triad of impairments. (c) Explain sensory processing difficulties. (d) Give two strengths associated with autism. (e) Explain why autism is described as a 'spectrum'.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Autism", statement: "Developmental condition affecting social interaction, communication and behaviour on a spectrum." }],
                steps: [
                  { reasoning: "(a) Developmental condition affecting communication, social interaction and behaviour.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Triad: social interaction, communication, flexible thinking/behaviour.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Atypical sensory processing — hypersensitivity or hyposensitivity causing distress or seeking.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Two strengths: attention to detail, honesty, special interests, pattern recognition.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Wide variation in presentation and support needs — hence 'spectrum'.", marks: 1, markCode: "R" }],
                finalAnswer: "Autism is a spectrum condition affecting the triad plus sensory processing, with individual strengths.",
              },
            },
            {
              id: "edxbtechsc-u10-l2-ch-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "An autistic adult becomes distressed in a busy supermarket, covers their ears and starts rocking. (a) Identify likely cause. (b) Explain the sensory experience. (c) Describe three support strategies. (d) Explain how special interests could help in this situation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Supporting sensory needs", statement: "Reduce sensory load, provide quiet space, use calming strategies." }],
                steps: [
                  { reasoning: "(a) Sensory overload — hypersensitivity to noise, lights, crowds.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Brain overwhelmed by sensory input — distress behaviours are coping mechanisms.", marks: 2, markCode: "A" },
                  { reasoning: "(c) Three strategies: ear defenders, quiet space, go at quieter times, visual supports, calm reassurance.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Special interest could distract (e.g. counting items, focusing on a task) or motivate visit.", marks: 1, markCode: "R" }],
                finalAnswer: "Sensory overload needs reduced stimulation, quiet space and calming strategies.",
              },
            },
            {
              id: "edxbtechsc-u10-l2-ch-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss the characteristics of autism. Your answer should cover: (a) the definition; (b) the triad of impairments; (c) sensory processing; (d) strengths; (e) co-occurring conditions; (f) why 'spectrum' is accurate; (g) how understanding characteristics informs support.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Autism characteristics", statement: "Triad of impairments + sensory differences on a spectrum with strengths." }],
                steps: [
                  { reasoning: "(a) Developmental condition affecting communication, social interaction and behaviour.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Triad: social interaction, communication, flexible thinking/behaviour.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Sensory processing: hypersensitivity (overwhelm) or hyposensitivity (seeking).", marks: 2, markCode: "M" },
                  { reasoning: "(d) Strengths: attention to detail, honesty, special interests, pattern recognition.", marks: 1, markCode: "A" },
                  { reasoning: "(e) Co-occurring: anxiety, ADHD, epilepsy, learning disability common.", marks: 1, markCode: "M" },
                  { reasoning: "(f) Wide variation in presentation and needs → 'spectrum'.", marks: 1, markCode: "R" },
                  { reasoning: "(g) Understanding characteristics → tailored support (sensory, communication, routine).", marks: 2, markCode: "R" }],
                finalAnswer: "Autism is a spectrum condition — triad impairments + sensory differences + strengths require individualised support.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u10-l2-support",
          title: "Assessment, Diagnosis and Support",
          skill: "Describe autism assessment, diagnosis and evidence-based support strategies.",
          sections: [
            {
              heading: "Assessment and diagnosis",
              body: "Autism is diagnosed through **developmental history**, **observation**, **standardised assessments** (ADOS, ADI-R) and information from parents/carers. Diagnosis can occur in childhood or adulthood — many adults are diagnosed later after lifelong difficulties. Early diagnosis enables early intervention; late diagnosis can bring relief and explanation.",
            },
            {
              heading: "Support strategies",
              body: "Support is individualised: **communication supports** (visual schedules, PECS, AAC, Makaton), **structured environments** (predictability, clear routines, low sensory stimulation), **social skills training**, **sensory accommodations**, and **special interest integration**. Evidence-based approaches include **ABA** (applied behaviour analysis), **TEACCH** (structured teaching) and **social stories**. Person-centred planning respects the individual's goals and communication preferences.",
            },
          ],
          keyFormulas: [
            { name: "Diagnosis", statement: "Developmental history + observation + standardised assessments." },
            { name: "Support approaches", statement: "ABA, TEACCH, social stories, AAC, sensory accommodations." },
            { name: "Early intervention", statement: "Earlier diagnosis → earlier support → better outcomes." },
          ],
          workedExample: {
            problem: "A teacher wants to support an autistic student who struggles with transitions. Suggest three strategies.",
            solution:
              "Use visual schedules showing the day's routine, give advance warning of transitions ('in 5 minutes'), and provide a calm, predictable environment with clear expectations.",
          },
          questions: [
            {
              id: "edxbtechsc-u10-l2-as-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Autism is diagnosed through:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A blood test" },
                  { id: "b", text: "Developmental history, observation and standardised assessments" },
                  { id: "c", text: "An X-ray" },
                  { id: "d", text: "A genetic test only" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "method", name: "Autism diagnosis", statement: "History + observation + standardised assessments." }],
                steps: [{ reasoning: "Diagnosis is clinical — history, observation, ADOS/ADI-R assessments.", marks: 2, markCode: "B" }],
                finalAnswer: "**(b)** — history, observation, assessments",
              },
            },
            {
              id: "edxbtechsc-u10-l2-as-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Name two communication supports for autistic people.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Communication supports", statement: "Visual schedules, PECS, AAC, Makaton, social stories." }],
                steps: [{ reasoning: "Any two: visual schedules, PECS, AAC devices, Makaton, social stories, picture exchange.", marks: 2, markCode: "A" }],
                finalAnswer: "e.g. visual schedules and AAC",
              },
            },
            {
              id: "edxbtechsc-u10-l2-as-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain three support strategies for autistic people.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Autism support", statement: "Communication supports, structured environments, sensory accommodations." }],
                steps: [
                  { reasoning: "Communication supports: visual schedules, AAC, social stories.", marks: 1, markCode: "M" },
                  { reasoning: "Structured environment: predictable routines, clear expectations, low sensory load.", marks: 1, markCode: "M" },
                  { reasoning: "Sensory accommodations: quiet spaces, ear defenders, controlled lighting.", marks: 1, markCode: "A" }],
                finalAnswer: "Communication supports, structured environments, sensory accommodations.",
              },
            },
            {
              id: "edxbtechsc-u10-l2-as-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Describe the autism diagnostic process. (b) Explain why early diagnosis matters. (c) Name three communication supports. (d) Describe a structured environment. (e) Explain how special interests can be used positively.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Autism support", statement: "Early diagnosis enables early intervention; individualised support." }],
                steps: [
                  { reasoning: "(a) Diagnostic process: developmental history, observation, standardised assessments (ADOS, ADI-R).", marks: 1, markCode: "M" },
                  { reasoning: "(b) Early diagnosis enables early intervention and support → better outcomes.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Three supports: visual schedules, PECS, AAC, Makaton, social stories.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Structured environment: predictable routines, clear expectations, low sensory stimulation.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Special interests motivate learning, build confidence, and can be channelled into skills.", marks: 1, markCode: "R" }],
                finalAnswer: "Early diagnosis enables tailored support through communication aids, structure and sensory accommodations.",
              },
            },
            {
              id: "edxbtechsc-u10-l2-as-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A care worker supports an autistic adult who communicates mainly through pictures and becomes distressed by unexpected changes. (a) Identify two support needs. (b) Describe how to use their communication system effectively. (c) Explain how to manage unexpected changes. (d) Suggest how their special interest could support engagement.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Supporting autistic adults", statement: "Respect communication, prepare for change, use interests positively." }],
                steps: [
                  { reasoning: "(a) Two needs: alternative communication (pictures/AAC), predictability for changes.", marks: 2, markCode: "A" },
                  { reasoning: "(b) Use pictures consistently, allow processing time, respond to attempts, don't force speech.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Manage changes: advance warning, visual schedules, prepare alternatives, stay calm.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Special interest: use as reward, incorporate into activities, build confidence.", marks: 1, markCode: "R" }],
                finalAnswer: "Respect communication preferences, prepare for change, use special interests positively.",
              },
            },
            {
              id: "edxbtechsc-u10-l2-as-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss assessment, diagnosis and support for autism. Your answer should cover: (a) the diagnostic process; (b) why early diagnosis matters; (c) communication supports; (d) structured environments; (e) sensory accommodations; (f) evidence-based approaches (ABA, TEACCH); (g) person-centred planning.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Autism support", statement: "Individualised, person-centred, evidence-based support." }],
                steps: [
                  { reasoning: "(a) Diagnosis: developmental history, observation, standardised assessments (ADOS, ADI-R).", marks: 2, markCode: "M" },
                  { reasoning: "(b) Early diagnosis → early intervention → better outcomes.", marks: 1, markCode: "R" },
                  { reasoning: "(c) Communication supports: visual schedules, PECS, AAC, Makaton, social stories.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Structured environments: predictable routines, clear expectations, low sensory load.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Sensory accommodations: quiet spaces, ear defenders, controlled lighting.", marks: 1, markCode: "M" },
                  { reasoning: "(f) Evidence-based: ABA (behaviour), TEACCH (structured teaching), social stories.", marks: 1, markCode: "M" },
                  { reasoning: "(g) Person-centred: respect individual goals, communication preferences, strengths.", marks: 2, markCode: "R" }],
                finalAnswer: "Autism support is individualised — communication aids, structure, sensory accommodations and person-centred planning.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u10-l2-notes",
      title: "Autism Spectrum Condition — notes",
      summary: "Autism affects social interaction, communication and flexible thinking on a spectrum; support is individualised.",
      sections: [
        { heading: "Characteristics", body: "Triad of impairments + atypical sensory processing + individual strengths." },
        { heading: "Diagnosis", body: "Developmental history, observation, standardised assessments — can be childhood or adult." },
        { heading: "Support", body: "Communication aids, structured environments, sensory accommodations, special interests." },
      ],
    },
  },
  {
    file: "lesson-10-3.ts",
    exportName: "lesson103",
    lesson: {
      id: "edxbtechsc-u10-lesson-10-3",
      code: "10-3",
      title: "Inclusive Practice and Person-Centred Planning",
      goal: "I CAN describe inclusive practice, person-centred planning and communication support for learning disability and autism.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 10: Learning Disability and Autism (extended certificate)",
      ],
      vocabulary: [
        { term: "Inclusive practice", definition: "Practice that enables full participation and belonging for all, regardless of ability." },
        { term: "Person-centred planning", definition: "Planning that puts the individual's wishes, strengths and goals at the centre." },
        { term: "Easy-read", definition: "Information rewritten in simple language with pictures for people with learning disability." },
        { term: "Positive Behaviour Support", definition: "Approach understanding behaviour as communication and teaching skills rather than punishment." },
        { term: "Safeguarding", definition: "Protecting people from abuse, neglect and exploitation." },
        { term: "Co-production", definition: "Working in partnership — people with lived experience help design their own support." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u10-l3-inclusive",
          title: "Inclusive Practice and Communication Support",
          skill: "Apply inclusive practice and accessible communication for people with learning disability and autism.",
          sections: [
            {
              heading: "Inclusive practice",
              body: "Inclusive practice removes barriers so everyone can participate: **accessible information** (easy-read, pictures, clear language), **physical access** (ramps, adapted toilets), **reasonable adjustments** (extra time, supports), **positive attitudes** (see the person, not the disability), and **participation in decisions**. Inclusion benefits everyone — it promotes belonging and reduces isolation.",
            },
            {
              heading: "Accessible communication",
              body: "Adapt communication to needs: **easy-read** (simple words, pictures, large print), **visual supports** (symbols, photographs, Makaton), **AAC devices** (speech-generating devices), **clear language** (short sentences, concrete terms, avoid jargon), **processing time** (allow time to respond), and **checking understanding**. Communication is a right — ensure everyone can express wishes and be understood.",
            },
          ],
          keyFormulas: [
            { name: "Inclusive practice", statement: "Remove barriers — accessible info, physical access, adjustments, participation." },
            { name: "Easy-read", statement: "Simple language + pictures for accessible information." },
            { name: "AAC", statement: "Augmentative and Alternative Communication devices." },
          ],
          workedExample: {
            problem: "A community centre wants to be more inclusive for people with learning disability. Suggest three changes.",
            solution:
              "Provide easy-read information and pictorial signage, train staff in accessible communication, and offer reasonable adjustments like quieter sessions or support workers.",
          },
          questions: [
            {
              id: "edxbtechsc-u10-l3-ip-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Inclusive practice means:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Separating people with disabilities from others" },
                  { id: "b", text: "Removing barriers so everyone can participate and belong" },
                  { id: "c", text: "Providing charity for people with disabilities" },
                  { id: "d", text: "Treating everyone exactly the same regardless of needs" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Inclusive practice", statement: "Removing barriers for full participation and belonging." }],
                steps: [{ reasoning: "Inclusion = remove barriers, enable participation, promote belonging.", marks: 2, markCode: "B" }],
                finalAnswer: "**(b)** — removing barriers for participation",
              },
            },
            {
              id: "edxbtechsc-u10-l3-ip-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Define easy-read information.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Easy-read", statement: "Information in simple language with pictures." }],
                steps: [{ reasoning: "Easy-read = simple words, short sentences, pictures — for people with learning disability.", marks: 2, markCode: "M" }],
                finalAnswer: "Information in simple language with pictures",
              },
            },
            {
              id: "edxbtechsc-u10-l3-ip-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Describe three ways to make communication accessible for people with learning disability.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Accessible communication", statement: "Easy-read, visual supports, clear language, processing time." }],
                steps: [
                  { reasoning: "Use easy-read: simple language, pictures, large print.", marks: 1, markCode: "M" },
                  { reasoning: "Use visual supports: symbols, photographs, Makaton.", marks: 1, markCode: "M" },
                  { reasoning: "Speak clearly, allow processing time, check understanding.", marks: 1, markCode: "A" }],
                finalAnswer: "Easy-read, visual supports, clear language with processing time.",
              },
            },
            {
              id: "edxbtechsc-u10-l3-ip-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Define inclusive practice. (b) Describe three barriers to inclusion. (c) Explain how easy-read helps. (d) Describe AAC. (e) Explain why communication is a human right.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Inclusion and communication", statement: "Remove barriers; communication is a right." }],
                steps: [
                  { reasoning: "(a) Inclusive practice = removing barriers for participation and belonging.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Three barriers: inaccessible information, physical barriers, attitudes/discrimination.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Easy-read makes information accessible via simple language and pictures.", marks: 1, markCode: "M" },
                  { reasoning: "(d) AAC = devices/supports for communication when speech is difficult (PECS, speech devices).", marks: 1, markCode: "M" },
                  { reasoning: "(e) Communication enables expression of wishes, consent and participation — a fundamental right.", marks: 1, markCode: "R" }],
                finalAnswer: "Inclusion removes barriers; accessible communication enables participation and is a right.",
              },
            },
            {
              id: "edxbtechsc-u10-l3-ip-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A housing association wants to make its services accessible to tenants with learning disability. (a) Identify three barriers they might face. (b) Suggest four inclusive changes. (c) Explain how to involve tenants in decisions. (d) State why co-production matters.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Inclusive services", statement: "Remove barriers; involve people with lived experience." }],
                steps: [
                  { reasoning: "(a) Three barriers: complex forms, inaccessible website, lack of easy-read, staff attitudes.", marks: 2, markCode: "A" },
                  { reasoning: "(b) Four changes: easy-read forms, pictorial website, staff training, reasonable adjustments.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Involve tenants: consultation groups, easy-read surveys, feedback mechanisms, peer champions.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Co-production ensures services meet real needs — people with experience design support.", marks: 1, markCode: "R" }],
                finalAnswer: "Make services accessible through easy-read, adjustments, staff training and tenant involvement.",
              },
            },
            {
              id: "edxbtechsc-u10-l3-ip-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss inclusive practice and accessible communication. Your answer should cover: (a) what inclusive practice means; (b) barriers to inclusion; (c) accessible information (easy-read); (d) communication supports (AAC, Makaton); (e) reasonable adjustments; (f) co-production; (g) why inclusion benefits everyone.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Inclusive practice", statement: "Remove barriers; communication is a right; involve people with lived experience." }],
                steps: [
                  { reasoning: "(a) Inclusive practice = removing barriers for full participation and belonging.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Barriers: inaccessible info, physical barriers, attitudes, lack of adjustments.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Easy-read: simple language + pictures for accessible information.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Communication supports: AAC devices, Makaton, visual schedules, PECS.", marks: 2, markCode: "M" },
                  { reasoning: "(e) Reasonable adjustments: extra time, adapted materials, supports, quiet spaces.", marks: 1, markCode: "M" },
                  { reasoning: "(f) Co-production: involve people with lived experience in designing services.", marks: 2, markCode: "R" },
                  { reasoning: "(g) Inclusion benefits everyone — promotes belonging, reduces isolation, improves services.", marks: 2, markCode: "R" }],
                finalAnswer: "Inclusive practice removes barriers and ensures communication access — benefiting all.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u10-l3-planning",
          title: "Person-Centred Planning and Positive Behaviour Support",
          skill: "Describe person-centred planning, positive behaviour support and safeguarding for learning disability and autism.",
          sections: [
            {
              heading: "Person-centred planning",
              body: "**Person-centred planning** puts the individual at the centre: their wishes, strengths, goals and support network. Tools include **PATH** (Planning Alternative Tomorrows with Hope), **MAPS**, and **person-centred reviews**. Planning should be **co-produced** — the person actively participates. Goals should be meaningful and achievable; plans are reviewed regularly and flexible.",
            },
            {
              heading: "Positive Behaviour Support and safeguarding",
              body: "**Positive Behaviour Support (PBS)** understands behaviour as communication — identify the function (attention, escape, sensory, tangible) and teach replacement skills rather than punish. Avoid restrictive practices. **Safeguarding** protects from abuse, neglect and exploitation — know reporting procedures, watch for signs, and always act in the person's best interests. People with learning disability and autism are at higher risk of abuse due to communication needs and vulnerability.",
            },
          ],
          keyFormulas: [
            { name: "Person-centred planning", statement: "Individual's wishes, strengths, goals at the centre; co-produced." },
            { name: "PBS", statement: "Behaviour = communication; teach skills, don't punish." },
            { name: "Safeguarding", statement: "Protect from abuse, neglect, exploitation — know reporting procedures." },
          ],
          workedExample: {
            problem: "A person with learning disability becomes distressed and hits out when asked to do a task. How should this be understood and addressed?",
            solution:
              "The behaviour likely communicates distress — the task may be too difficult or unclear. Use PBS: assess the function, simplify the task, offer choices, teach coping skills, and ensure the environment is supportive.",
          },
          questions: [
            {
              id: "edxbtechsc-u10-l3-pp-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Person-centred planning means:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Planning done by professionals without the person" },
                  { id: "b", text: "Planning centred on the individual's wishes, strengths and goals" },
                  { id: "c", text: "Planning only about medical needs" },
                  { id: "d", text: "Planning that ignores the person's preferences" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Person-centred planning", statement: "Individual's wishes, strengths and goals at the centre." }],
                steps: [{ reasoning: "PCP = person's wishes, strengths, goals, co-produced.", marks: 2, markCode: "B" }],
                finalAnswer: "**(b)** — individual's wishes and goals",
              },
            },
            {
              id: "edxbtechsc-u10-l3-pp-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Define Positive Behaviour Support (PBS).",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "PBS", statement: "Behaviour as communication; teach skills rather than punish." }],
                steps: [{ reasoning: "PBS understands behaviour as communication and teaches replacement skills.", marks: 2, markCode: "M" }],
                finalAnswer: "Behaviour as communication; teach skills rather than punish",
              },
            },
            {
              id: "edxbtechsc-u10-l3-pp-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain three features of person-centred planning.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Person-centred planning", statement: "Wishes, strengths, goals, co-production, regular review." }],
                steps: [
                  { reasoning: "Centred on individual's wishes and goals.", marks: 1, markCode: "M" },
                  { reasoning: "Co-produced — person actively participates in planning.", marks: 1, markCode: "M" },
                  { reasoning: "Reviewed regularly and flexible; strengths-based.", marks: 1, markCode: "A" }],
                finalAnswer: "Wishes, strengths, goals, co-production, regular review.",
              },
            },
            {
              id: "edxbtechsc-u10-l3-pp-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "(a) Define person-centred planning. (b) Explain three features. (c) Define PBS. (d) Explain the function of behaviour in PBS. (e) Describe two safeguarding responsibilities.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Person-centred planning and PBS", statement: "Individual goals + behaviour as communication + safeguarding." }],
                steps: [
                  { reasoning: "(a) Planning centred on individual's wishes, strengths and goals.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Three features: co-production, strengths-based, regular review, meaningful goals.", marks: 1, markCode: "M" },
                  { reasoning: "(c) PBS = behaviour as communication; teach skills not punish.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Function of behaviour: attention, escape, sensory, tangible — identify and address need.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Two safeguarding duties: know reporting procedures, watch for signs of abuse, act in best interests.", marks: 1, markCode: "R" }],
                finalAnswer: "Person-centred planning + PBS + safeguarding protect and empower individuals.",
              },
            },
            {
              id: "edxbtechsc-u10-l3-pp-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A person with autism becomes aggressive when asked to stop a preferred activity. (a) Identify the likely function of the behaviour. (b) Explain how PBS would assess this. (c) Describe three strategies to address it. (d) Explain why punishment would be inappropriate.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "PBS in practice", statement: "Identify function, teach skills, avoid punishment." }],
                steps: [
                  { reasoning: "(a) Likely function: escape/avoidance or access to preferred activity (tangible).", marks: 2, markCode: "A" },
                  { reasoning: "(b) PBS assessment: observe patterns, identify triggers and function, check physical/emotional needs.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Three strategies: visual timetable showing activity end, warning before transition, teach coping skills, offer choices.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Punishment doesn't teach skills, increases distress, damages relationship, violates rights.", marks: 1, markCode: "R" }],
                finalAnswer: "PBS identifies behaviour function and teaches skills — punishment is inappropriate.",
              },
            },
            {
              id: "edxbtechsc-u10-l3-pp-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Discuss person-centred planning and positive behaviour support. Your answer should cover: (a) person-centred planning; (b) co-production; (c) PBS principles; (d) function of behaviour; (e) teaching replacement skills; (f) safeguarding; (g) why person-centred approaches improve outcomes.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Person-centred planning and PBS", statement: "Individual goals + behaviour as communication + safeguarding." }],
                steps: [
                  { reasoning: "(a) PCP = individual's wishes, strengths, goals at the centre.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Co-production: person actively participates in designing their support.", marks: 1, markCode: "M" },
                  { reasoning: "(c) PBS: behaviour as communication; understand function; teach skills.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Functions: attention, escape, sensory, tangible.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Teach replacement skills: communication, coping, requesting help.", marks: 1, markCode: "M" },
                  { reasoning: "(f) Safeguarding: protect from abuse, know reporting, act in best interests.", marks: 2, markCode: "R" },
                  { reasoning: "(g) Person-centred approaches improve outcomes — respect, autonomy, better engagement.", marks: 2, markCode: "R" }],
                finalAnswer: "Person-centred planning + PBS + safeguarding empower individuals and improve outcomes.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u10-l3-notes",
      title: "Inclusive Practice and Planning — notes",
      summary: "Inclusion removes barriers; person-centred planning and PBS empower individuals; safeguarding protects rights.",
      sections: [
        { heading: "Inclusion", body: "Easy-read, AAC, reasonable adjustments, co-production — communication is a right." },
        { heading: "Person-centred planning", body: "Individual wishes, strengths, goals — co-produced and regularly reviewed." },
        { heading: "PBS", body: "Behaviour = communication; identify function, teach skills, avoid punishment; safeguard always." },
      ],
    },
  },
];
