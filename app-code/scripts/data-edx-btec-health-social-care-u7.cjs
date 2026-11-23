module.exports = [
  {
    file: "lesson-7-1.ts", exportName: "lesson71",
    lesson: {
      id: "edxbtechsc-u7-lesson-7-1", code: "7-1",
      title: "Safeguarding Frameworks and Legislation",
      goal: "I CAN explain the safeguarding framework, key legislation and the duties of care workers in protecting adults and children.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 7: Safeguarding and Care Planning in Practice",
      ],
      vocabulary: [
        { term: "Safeguarding", definition: "Protecting people's health, wellbeing and human rights, and enabling them to live free from harm, abuse and neglect." },
        { term: "Adult at risk", definition: "Person aged 18+ who has needs for care and support, is experiencing or at risk of abuse or neglect, and as a result cannot protect themselves." },
        { term: "Child protection", definition: "The process of protecting children from abuse, neglect and exploitation; involves statutory services and safeguarding partners." },
        { term: "Making Safeguarding Personal", definition: "Approach putting the person at the centre of safeguarding, focusing on their wishes and outcomes rather than process." },
        { term: "Duty of care", definition: "Legal and moral obligation to act in the best interests of those in your care and avoid harm." },
        { term: "Capacity", definition: "A person's ability to make a specific decision at a specific time, assessed under the Mental Capacity Act 2005." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u7-l1-framework", title: "The safeguarding framework",
          skill: "Explain the safeguarding framework for adults and children and the principles of Making Safeguarding Personal.",
          sections: [
            { heading: "Adult safeguarding", body: "The **Care Act 2014** sets out adult safeguarding duties: local authorities must inquire when they suspect an adult at risk is experiencing or at risk of abuse or neglect and the adult cannot protect themselves. Key principles:\n\n- **Empowerment** — people are supported to make their own decisions and give informed consent.\n- **Prevention** — action taken before harm occurs.\n- **Proportionality** — response is proportionate to risk.\n- **Protection** — support for those most at risk.\n- **Partnership** — local services work together.\n- **Accountability** — transparency and accountability in safeguarding.\n\n**Making Safeguarding Personal** ensures the person's views, wishes and desired outcomes drive the safeguarding plan." },
            { heading: "Child safeguarding", body: "**Children Act 1989/2004** and **Working Together to Safeguard Children** set the framework. The four categories of abuse: **physical, emotional, sexual and neglect**. Key principles: the child's welfare is paramount; safeguarding is everyone's responsibility; early help prevents escalation.\n\nEveryone who works with children has a duty to recognise signs of abuse and report concerns to the designated safeguarding lead or children's services. **Female genital mutilation (FGM)** and **child sexual exploitation (CSE)** are specific safeguarding concerns requiring specialist responses." },
          ],
          keyFormulas: [
            { name: "Safeguarding principles", statement: "empowerment, prevention, proportionality, protection, partnership, accountability" },
            { name: "Adult at risk", statement: "18+, care needs, abuse/neglect risk, cannot self-protect" },
            { name: "Child abuse categories", statement: "physical, emotional, sexual, neglect" },
          ],
          workedExample: {
            problem: "A care worker notices unexplained bruising on a client's arm. Explain how the safeguarding framework guides the response.",
            solution: "The worker should not ignore or confront the client. They should record the observation accurately, report to their manager/designated safeguarding lead, and follow local safeguarding procedures — which may lead to a Section 42 enquiry under the Care Act. The adult's wishes are considered throughout (Making Safeguarding Personal), but the worker has a duty to escalate concerns.",
          },
          questions: [
            {
              id: "edxbtechsc-u7-saf-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Define 'safeguarding' and state who it applies to.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Safeguarding", statement: "Protecting health, wellbeing and rights from harm/abuse/neglect." }],
                steps: [
                  { reasoning: "Safeguarding defined.", marks: 1, markCode: "B" },
                  { reasoning: "Applies to children and adults at risk.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "Protecting people from harm, abuse and neglect — applies to children and adults at risk.",
              },
            },
            {
              id: "edxbtechsc-u7-saf-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Name the six principles of adult safeguarding under the Care Act 2014.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Safeguarding principles", statement: "Six principles underpin adult safeguarding." }],
                steps: [{ reasoning: "Empowerment, prevention, proportionality, protection, partnership, accountability.", marks: 3, markCode: "B" }],
                finalAnswer: "Empowerment, prevention, proportionality, protection, partnership, accountability.",
              },
            },
            {
              id: "edxbtechsc-u7-saf-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain what is meant by 'Making Safeguarding Personal' and why it matters.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Making Safeguarding Personal", statement: "Person-centred safeguarding outcomes." }],
                steps: [
                  { reasoning: "Puts the person's wishes and desired outcomes at the centre.", marks: 1, markCode: "M" },
                  { reasoning: "Focuses on what the person wants to achieve, not just process.", marks: 1, markCode: "M" },
                  { reasoning: "Respects autonomy and promotes empowerment.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Safeguarding centred on the person's wishes and outcomes, respecting their autonomy.",
              },
            },
            {
              id: "edxbtechsc-u7-saf-q4", difficulty: "core", totalMarks: 4,
              stem: "Explain the duty of care and describe two situations where a care worker might face a conflict between duty of care and a client's wishes.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Duty of care", statement: "Obligation to act in best interests and avoid harm." }],
                steps: [
                  { reasoning: "Duty of care defined: act in best interests, avoid harm, work within competence.", marks: 1, markCode: "M" },
                  { reasoning: "Conflict 1, e.g. client refusing medication that worker believes necessary.", marks: 1, markCode: "M" },
                  { reasoning: "Conflict 2, e.g. client wanting to go out alone despite fall risk.", marks: 1, markCode: "M" },
                  { reasoning: "Resolution: assess capacity, involve family/professionals, follow procedures.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Duty of care = act in best interests; conflicts arise with autonomy and are managed via capacity assessment and procedures.",
              },
            },
            {
              id: "edxbtechsc-u7-saf-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Explain the four categories of child abuse and give one sign of each that a care worker might observe.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Child abuse categories", statement: "Physical, emotional, sexual, neglect." }],
                steps: [
                  { reasoning: "Physical abuse defined + sign, e.g. unexplained bruises.", marks: 1, markCode: "M" },
                  { reasoning: "Emotional abuse defined + sign, e.g. withdrawal, low self-esteem.", marks: 1, markCode: "M" },
                  { reasoning: "Sexual abuse defined + sign, e.g. inappropriate behaviour, distress.", marks: 1, markCode: "M" },
                  { reasoning: "Neglect defined + sign, e.g. poor hygiene, hunger, untreated illness.", marks: 1, markCode: "M" },
                  { reasoning: "All signs require reporting to designated safeguarding lead.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Four abuse categories each with a possible observable sign.",
              },
            },
            {
              id: "edxbtechsc-u7-saf-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Write an extended answer covering:\n(a) the definition of safeguarding;\n(b) the six safeguarding principles;\n(c) what 'adult at risk' means;\n(d) the four categories of child abuse;\n(e) the role of the Mental Capacity Act in safeguarding;\n(f) why 'Making Safeguarding Personal' matters;\n(g) the duty of every care worker to report concerns.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Safeguarding overview", statement: "Framework, principles, legislation, duties." }],
                steps: [
                  { reasoning: "(a) Safeguarding defined.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Six principles listed.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Adult at risk defined.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Four abuse categories.", marks: 1, markCode: "M" },
                  { reasoning: "(e) MCA: assess capacity for specific decisions; best interests if lacking.", marks: 1, markCode: "M" },
                  { reasoning: "(f) MSP puts person at centre of safeguarding.", marks: 1, markCode: "M" },
                  { reasoning: "(g) Everyone must report concerns — duty to protect.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "Complete safeguarding framework overview.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u7-l1-legislation", title: "Key legislation in safeguarding",
          skill: "Describe the main legislation protecting adults and children and how it affects care practice.",
          sections: [
            { heading: "Adult protection legislation", body: "**Care Act 2014**: adult safeguarding duties, wellbeing duty, personal budgets, carer's assessment. **Mental Capacity Act 2005**: presumption of capacity, best interests decisions, lasting power of attorney, deprivation of liberty safeguards (DoLS). **Human Rights Act 1998**: right to life, dignity, privacy, non-discrimination. **Equality Act 2010**: prohibits discrimination in services. **Data Protection Act 2018/GDPR**: protects personal information; information sharing must be lawful and proportionate.\n\n**Safeguarding Vulnerable Groups Act 2006**: vetting and barring scheme (DBS checks) for those working with vulnerable people." },
            { heading: "Child protection legislation", body: "**Children Act 1989**: welfare of the child is paramount; parental responsibility. **Children Act 2004**: Every Child Matters — five outcomes (be healthy, stay safe, enjoy and achieve, make a positive contribution, achieve economic wellbeing). **Working Together to Safeguard Children**: statutory guidance on inter-agency cooperation.\n\n**Female Genital Mutilation Act 2003**: criminalises FGM; mandatory reporting for professionals. **Modern Slavery Act 2015**: addresses trafficking and exploitation. All legislation requires workers to know their duties and follow local safeguarding procedures." },
          ],
          keyFormulas: [
            { name: "Care Act 2014", statement: "adult safeguarding, wellbeing duty, personal budgets" },
            { name: "Mental Capacity Act", statement: "presumption of capacity, best interests, DoLS" },
            { name: "Every Child Matters", statement: "five outcomes for children's wellbeing" },
          ],
          workedExample: {
            problem: "Explain how the Mental Capacity Act affects a care worker supporting a client who wants to refuse a bath.",
            solution: "The worker must assume the client has capacity unless assessed otherwise. Capacity is decision-specific — the client may have capacity to refuse a bath even if they struggle with other tasks. If they have capacity, their decision must be respected (even if it seems unwise). If they lack capacity, the worker must act in their best interests, involving family and professionals, and consider least restrictive options.",
          },
          questions: [
            {
              id: "edxbtechsc-u7-leg-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Name two key pieces of legislation that protect adults from abuse.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Adult protection legislation", statement: "Care Act, MCA, Human Rights Act, Equality Act." }],
                steps: [{ reasoning: "Any two, e.g. Care Act 2014 and Mental Capacity Act 2005.", marks: 2, markCode: "B" }],
                finalAnswer: "Any two: Care Act 2014, Mental Capacity Act 2005, Human Rights Act 1998, Equality Act 2010.",
              },
            },
            {
              id: "edxbtechsc-u7-leg-q2", difficulty: "foundation", totalMarks: 3,
              stem: "State the five outcomes of 'Every Child Matters'.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Every Child Matters", statement: "Five wellbeing outcomes for children." }],
                steps: [{ reasoning: "Be healthy, stay safe, enjoy and achieve, make a positive contribution, achieve economic wellbeing.", marks: 3, markCode: "B" }],
                finalAnswer: "Be healthy; stay safe; enjoy and achieve; make a positive contribution; achieve economic wellbeing.",
              },
            },
            {
              id: "edxbtechsc-u7-leg-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the presumption of capacity under the Mental Capacity Act and why it matters.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Mental Capacity Act", statement: "Presume capacity unless assessed otherwise." }],
                steps: [
                  { reasoning: "Every adult is presumed to have capacity unless proven otherwise.", marks: 1, markCode: "M" },
                  { reasoning: "Capacity is decision-specific and time-specific.", marks: 1, markCode: "M" },
                  { reasoning: "Matters because it protects autonomy and prevents unnecessary intervention.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Presumption of capacity protects autonomy; assessment is decision-specific.",
              },
            },
            {
              id: "edxbtechsc-u7-leg-q4", difficulty: "core", totalMarks: 4,
              stem: "Explain how the Data Protection Act 2018 affects information sharing in health and social care.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Data Protection Act", statement: "Protects personal data; sharing must be lawful." }],
                steps: [
                  { reasoning: "Personal data must be processed lawfully, fairly and transparently.", marks: 1, markCode: "M" },
                  { reasoning: "Information should only be shared when necessary and proportionate.", marks: 1, markCode: "M" },
                  { reasoning: "Safeguarding may require sharing without consent if risk is serious.", marks: 1, markCode: "M" },
                  { reasoning: "Workers must follow local information-sharing policies.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Data must be shared lawfully and proportionately; safeguarding may override consent.",
              },
            },
            {
              id: "edxbtechsc-u7-leg-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Explain how the Care Act 2014 and Mental Capacity Act 2005 work together in adult safeguarding, giving an example.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Legislative interplay", statement: "Care Act = safeguarding duties; MCA = capacity framework." }],
                steps: [
                  { reasoning: "Care Act: local authority duty to inquire into abuse/neglect of adults at risk.", marks: 2, markCode: "M" },
                  { reasoning: "MCA: assess whether adult has capacity for specific decisions.", marks: 2, markCode: "M" },
                  { reasoning: "If lacks capacity: act in best interests; if has capacity: respect decisions.", marks: 1, markCode: "M" },
                  { reasoning: "Example: client refusing care — assess capacity, then act accordingly.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Care Act triggers safeguarding; MCA determines capacity and best-interests response.",
              },
            },
            {
              id: "edxbtechsc-u7-leg-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Write an extended answer covering:\n(a) three key adult protection laws;\n(b) the role of the Mental Capacity Act;\n(c) two child protection laws;\n(d) the purpose of DBS checks;\n(e) why information sharing must be proportionate;\n(f) the duty to report under FGM legislation;\n(g) how legislation affects daily care practice.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Safeguarding legislation", statement: "Multiple laws protect adults and children." }],
                steps: [
                  { reasoning: "(a) Three adult laws, e.g. Care Act, MCA, Human Rights Act.", marks: 2, markCode: "M" },
                  { reasoning: "(b) MCA role: capacity assessment, best interests, DoLS.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Two child laws, e.g. Children Act 1989/2004, Working Together.", marks: 1, markCode: "M" },
                  { reasoning: "(d) DBS checks vet workers for suitability.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Proportionate sharing = only necessary information, lawful basis.", marks: 1, markCode: "M" },
                  { reasoning: "(f) FGM: mandatory reporting by professionals.", marks: 1, markCode: "M" },
                  { reasoning: "(g) Legislation shapes daily practice: documentation, reporting, capacity checks.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "Complete overview of safeguarding legislation and its practice impact.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u7-safeguarding-notes", title: "Safeguarding frameworks and legislation — notes",
      summary: "Care Act + MCA protect adults; Children Act + Working Together protect children. Everyone has a duty to report.",
      sections: [
        { heading: "Key idea", body: "Safeguarding is everyone's responsibility — know the framework and report concerns." },
        { heading: "Legislation", body: "Care Act (adults), Children Act (children), MCA (capacity), Data Protection (information)." },
      ],
    },
  },
  {
    file: "lesson-7-2.ts", exportName: "lesson72",
    lesson: {
      id: "edxbtechsc-u7-lesson-7-2", code: "7-2",
      title: "Abuse, Neglect and Risk Assessment",
      goal: "I CAN identify types of abuse and neglect, recognise signs and complete a basic risk assessment.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 7: Safeguarding and Care Planning in Practice",
      ],
      vocabulary: [
        { term: "Physical abuse", definition: "Deliberate use of force causing pain, injury or suffering, e.g. hitting, restraining inappropriately." },
        { term: "Emotional abuse", definition: "Persistent emotional ill-treatment causing severe adverse effects on emotional development, e.g. humiliation, threats, isolation." },
        { term: "Sexual abuse", definition: "Forcing or enticing someone into sexual activity without consent, including exploitation." },
        { term: "Neglect", definition: "Failure to provide necessary care, resulting in harm or risk of harm — includes self-neglect." },
        { term: "Financial abuse", definition: "Illegal or unauthorised use of someone's money, property or assets, e.g. theft, coercion, fraud." },
        { term: "Institutional abuse", definition: "Abuse occurring within a care setting due to poor practice, culture or systems." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u7-l2-abuse", title: "Types of abuse and neglect",
          skill: "Identify and describe the main types of abuse and their signs.",
          sections: [
            { heading: "Types of abuse", body: "**Physical abuse**: hitting, slapping, pushing, inappropriate restraint, medication misuse. Signs: unexplained bruises, burns, fractures, fear of physical contact.\n\n**Emotional abuse**: humiliation, threats, intimidation, isolation, controlling behaviour. Signs: withdrawal, low self-esteem, anxiety, fear of specific people.\n\n**Sexual abuse**: forced sexual activity, exploitation, inappropriate touching. Signs: sexualised behaviour, distress, genital injuries, pregnancy.\n\n**Neglect**: failure to provide food, hygiene, medical care, supervision. Signs: poor hygiene, malnutrition, untreated conditions, unsafe environment.\n\n**Financial abuse**: theft, fraud, coercion over money/property. Signs: missing money, unexplained withdrawals, changes to wills.\n\n**Institutional abuse**: poor practice embedded in care settings — rigid routines, lack of choice, dehumanising treatment." },
            { heading: "Recognising and responding", body: "Signs of abuse may be physical (injuries, poor hygiene) or behavioural (fear, withdrawal, changes in mood). Workers should be alert to changes in behaviour, inconsistent explanations, and reluctance to discuss.\n\n**Response**: record observations accurately (facts, not opinions), report to manager/designated safeguarding lead immediately, follow local procedures. Never investigate alone or confront the suspected abuser. If immediate danger, contact emergency services." },
          ],
          keyFormulas: [
            { name: "Abuse types", statement: "physical, emotional, sexual, neglect, financial, institutional" },
            { name: "Response", statement: "record facts → report → follow procedures → escalate if needed" },
            { name: "Signs", statement: "physical injuries + behavioural changes" },
          ],
          workedExample: {
            problem: "A client becomes withdrawn and anxious whenever a particular family member visits. Explain what this might indicate and how to respond.",
            solution: "This could indicate emotional or physical abuse by the family member. The worker should record the observation, note the pattern, and report to the manager/designated safeguarding lead. They should not confront the family member or investigate alone — follow local safeguarding procedures and consider whether the client feels safe.",
          },
          questions: [
            {
              id: "edxbtechsc-u7-abuse-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Name four types of abuse.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Types of abuse", statement: "Physical, emotional, sexual, neglect, financial, institutional." }],
                steps: [{ reasoning: "Any four named correctly.", marks: 2, markCode: "B" }],
                finalAnswer: "Any four: physical, emotional, sexual, neglect, financial, institutional.",
              },
            },
            {
              id: "edxbtechsc-u7-abuse-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Define financial abuse and give two examples.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Financial abuse", statement: "Illegal/unauthorised use of money or property." }],
                steps: [
                  { reasoning: "Financial abuse defined.", marks: 1, markCode: "B" },
                  { reasoning: "Example 1, e.g. theft or unauthorised withdrawals.", marks: 1, markCode: "B" },
                  { reasoning: "Example 2, e.g. coercion to change will or sign documents.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "Illegal use of someone's money/property — theft, fraud, coercion.",
              },
            },
            {
              id: "edxbtechsc-u7-abuse-q3", difficulty: "core", totalMarks: 3,
              stem: "Describe three signs that might indicate physical abuse.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Physical abuse signs", statement: "Injuries, fear, inconsistent explanations." }],
                steps: [{ reasoning: "Any three, e.g. unexplained bruises, burns, fractures, fear of contact.", marks: 3, markCode: "B" }],
                finalAnswer: "Any three valid signs of physical abuse.",
              },
            },
            {
              id: "edxbtechsc-u7-abuse-q4", difficulty: "core", totalMarks: 4,
              stem: "Explain the difference between neglect and self-neglect, and describe one consequence of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Neglect vs self-neglect", statement: "Neglect = failure by others; self-neglect = failure by person themselves." }],
                steps: [
                  { reasoning: "Neglect defined: carer/family fails to provide care.", marks: 1, markCode: "M" },
                  { reasoning: "Self-neglect defined: person fails to care for themselves.", marks: 1, markCode: "M" },
                  { reasoning: "Consequence of neglect, e.g. malnutrition, untreated illness, unsafe environment.", marks: 1, markCode: "M" },
                  { reasoning: "Consequence of self-neglect, e.g. isolation, health deterioration, hoarding.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Neglect = others fail; self-neglect = self-failure — both harm health and wellbeing.",
              },
            },
            {
              id: "edxbtechsc-u7-abuse-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Explain what institutional abuse is and describe three ways it can occur in a care setting.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Institutional abuse", statement: "Abuse embedded in care systems/culture." }],
                steps: [
                  { reasoning: "Institutional abuse defined: poor practice/systemic issues in care settings.", marks: 1, markCode: "M" },
                  { reasoning: "Way 1, e.g. rigid routines removing choice.", marks: 1, markCode: "M" },
                  { reasoning: "Way 2, e.g. staff treating people as tasks not individuals.", marks: 1, markCode: "M" },
                  { reasoning: "Way 3, e.g. lack of privacy, dehumanising language, ignoring preferences.", marks: 1, markCode: "M" },
                  { reasoning: "Requires systemic review and culture change to address.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Institutional abuse = systemic poor practice; examples: rigid routines, depersonalisation, ignored choices.",
              },
            },
            {
              id: "edxbtechsc-u7-abuse-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Write an extended answer covering:\n(a) four types of abuse;\n(b) two signs of emotional abuse;\n(c) two signs of neglect;\n(d) how to respond to suspected abuse;\n(e) why workers should not investigate alone;\n(f) the role of the designated safeguarding lead;\n(g) how to record concerns accurately.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Abuse recognition and response", statement: "Identify, record, report, escalate." }],
                steps: [
                  { reasoning: "(a) Four abuse types.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Two emotional abuse signs, e.g. withdrawal, low self-esteem.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Two neglect signs, e.g. poor hygiene, untreated illness.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Response: record, report, follow procedures.", marks: 2, markCode: "M" },
                  { reasoning: "(e) Investigation alone risks evidence loss and confrontation.", marks: 1, markCode: "M" },
                  { reasoning: "(f) DSL coordinates safeguarding response and liaises with authorities.", marks: 1, markCode: "M" },
                  { reasoning: "(g) Record facts, times, observations — not opinions or speculation.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Complete abuse recognition and response overview.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u7-l2-risk", title: "Risk assessment and management",
          skill: "Explain the risk assessment process and describe how to manage risks in care settings.",
          sections: [
            { heading: "The risk assessment process", body: "**Risk assessment** identifies hazards, evaluates likelihood and severity, and plans controls. Steps:\n\n1. **Identify hazards** — what could cause harm (falls, medication errors, abuse, environmental hazards).\n2. **Evaluate risk** — likelihood (low/medium/high) x severity (minor/serious/severe).\n3. **Plan controls** — eliminate, reduce or manage the risk.\n4. **Implement and monitor** — put controls in place and review regularly.\n\nRisk assessments are person-centred — they consider the individual's choices and capacity, not just generic hazards." },
            { heading: "Risk management strategies", body: "**Elimination**: remove the hazard entirely. **Reduction**: modify the environment or practice to lower risk (e.g. grab rails, medication prompts). **Management**: accept residual risk with monitoring and contingency plans.\n\n**Positive risk-taking** recognises that people have the right to take reasonable risks — e.g. a client choosing to walk unaided despite fall risk, with appropriate support. Risk assessments must balance safety with autonomy and dignity.\n\nAll risks should be documented, reviewed regularly, and updated when circumstances change." },
          ],
          keyFormulas: [
            { name: "Risk assessment", statement: "identify → evaluate → plan → implement → review" },
            { name: "Risk = likelihood x severity", statement: "higher likelihood or severity = higher risk" },
            { name: "Positive risk-taking", statement: "supporting informed choices despite residual risk" },
          ],
          workedExample: {
            problem: "A client with dementia wants to go outside alone but has previously wandered. How should a risk assessment be approached?",
            solution: "Identify the hazard (wandering, getting lost). Evaluate risk (high likelihood given history, severe consequence). Plan controls that balance safety and autonomy: door alarms, GPS tracking, supervised walks, familiar routes, identification. Implement and review — positive risk-taking means supporting independence while managing risk, not simply banning outdoor access.",
          },
          questions: [
            {
              id: "edxbtechsc-u7-risk-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Name the five steps of the risk assessment process.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Risk assessment", statement: "Identify, evaluate, plan, implement, review." }],
                steps: [{ reasoning: "Identify → evaluate → plan → implement → review.", marks: 2, markCode: "B" }],
                finalAnswer: "Identify hazards, evaluate risk, plan controls, implement, review.",
              },
            },
            {
              id: "edxbtechsc-u7-risk-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Define 'positive risk-taking' and give one example.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Positive risk-taking", statement: "Supporting informed choices despite risk." }],
                steps: [
                  { reasoning: "Positive risk-taking defined: supporting choices with managed risk.", marks: 1, markCode: "B" },
                  { reasoning: "Example, e.g. client choosing to walk unaided with supervision.", marks: 1, markCode: "B" },
                  { reasoning: "Balances autonomy with safety.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Supporting informed decisions that carry reasonable risk — e.g. supervised independence.",
              },
            },
            {
              id: "edxbtechsc-u7-risk-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain how likelihood and severity are used to evaluate risk.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Risk evaluation", statement: "Risk = likelihood x severity." }],
                steps: [
                  { reasoning: "Likelihood = how often the hazard might occur.", marks: 1, markCode: "M" },
                  { reasoning: "Severity = how serious the harm would be.", marks: 1, markCode: "M" },
                  { reasoning: "Both high = highest priority for controls.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Risk = likelihood x severity; both factors determine priority.",
              },
            },
            {
              id: "edxbtechsc-u7-risk-q4", difficulty: "core", totalMarks: 4,
              stem: "Describe three risk control strategies and give an example of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Risk controls", statement: "Elimination, reduction, management." }],
                steps: [
                  { reasoning: "Elimination: remove hazard, e.g. remove trip hazard.", marks: 1, markCode: "M" },
                  { reasoning: "Reduction: modify to lower risk, e.g. grab rails, non-slip flooring.", marks: 1, markCode: "M" },
                  { reasoning: "Management: accept residual risk with monitoring, e.g. supervision.", marks: 1, markCode: "M" },
                  { reasoning: "Examples show practical application.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Elimination, reduction, management — each with a practical example.",
              },
            },
            {
              id: "edxbtechsc-u7-risk-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A client with mobility difficulties lives alone and has fallen twice recently.\n(a) Identify two hazards.\n(b) Evaluate the risk level.\n(c) Plan three control measures.\n(d) Explain how to balance safety with the client's independence.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Risk assessment", statement: "Person-centred hazard identification and controls." }],
                steps: [
                  { reasoning: "(a) Two hazards, e.g. loose rugs, poor lighting, stairs, medication side-effects.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Risk evaluated: high likelihood (two falls) x moderate-severe harm.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Three controls, e.g. grab rails, physiotherapy, medication review, alarm.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Balance via positive risk-taking: support choices with managed risk, involve client.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Hazards identified, risk evaluated, controls planned, autonomy preserved.",
              },
            },
            {
              id: "edxbtechsc-u7-risk-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Write an extended answer covering:\n(a) the five steps of risk assessment;\n(b) what likelihood and severity mean;\n(c) three risk control strategies with examples;\n(d) what positive risk-taking is;\n(e) why risk assessments must be person-centred;\n(f) when risk assessments should be reviewed;\n(g) how to document a risk assessment.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Risk management", statement: "Structured process balancing safety and autonomy." }],
                steps: [
                  { reasoning: "(a) Five steps listed.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Likelihood and severity defined.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Three controls with examples.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Positive risk-taking defined.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Person-centred = considers individual choices, capacity, circumstances.", marks: 1, markCode: "M" },
                  { reasoning: "(f) Review when circumstances change or regularly.", marks: 1, markCode: "M" },
                  { reasoning: "(g) Document hazards, evaluations, controls, reviews, signatures.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Complete risk assessment and management overview.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u7-abuse-risk-notes", title: "Abuse and risk assessment — notes",
      summary: "Recognise abuse signs; record facts, report, escalate. Risk assessment = identify, evaluate, plan, implement, review.",
      sections: [
        { heading: "Key idea", body: "Safeguarding requires vigilance — know the signs and follow procedures." },
        { heading: "Risk", body: "Balance safety with autonomy via positive risk-taking and person-centred assessment." },
      ],
    },
  },
  {
    file: "lesson-7-3.ts", exportName: "lesson73",
    lesson: {
      id: "edxbtechsc-u7-lesson-7-3", code: "7-3",
      title: "Care Planning and Person-Centred Practice",
      goal: "I CAN explain person-centred care planning, SMART objectives and how care plans support wellbeing.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 7: Safeguarding and Care Planning in Practice",
      ],
      vocabulary: [
        { term: "Care plan", definition: "Document outlining a person's needs, goals, interventions and responsibilities for their care." },
        { term: "Person-centred care", definition: "Care that puts the individual at the centre, respecting their preferences, values and choices." },
        { term: "SMART objective", definition: "Specific, Measurable, Achievable, Relevant, Time-bound goal." },
        { term: "Assessment", definition: "Process of gathering information about a person's needs, strengths and preferences." },
        { term: "Intervention", definition: "Action taken to meet a need or achieve a goal in the care plan." },
        { term: "Review", definition: "Regular evaluation of whether care plan goals are being met and whether the plan needs updating." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u7-l3-careplan", title: "The care planning process",
          skill: "Explain the stages of care planning and how to write effective SMART objectives.",
          sections: [
            { heading: "The care planning cycle", body: "Care planning is cyclical:\n\n1. **Assessment** — gather information about needs, preferences, strengths, risks.\n2. **Planning** — agree goals and interventions with the person.\n3. **Implementation** — carry out the interventions.\n4. **Review** — evaluate progress and update the plan.\n\nThe person should be actively involved at every stage — their views, wishes and preferences drive the plan. Family/carers may contribute with consent." },
            { heading: "SMART objectives", body: "Good care plan objectives are **SMART**:\n\n- **Specific**: clearly defined, e.g. 'walk to the shop' not 'improve mobility'.\n- **Measurable**: can be tracked, e.g. 'walk 50 metres with frame'.\n- **Achievable**: realistic given abilities.\n- **Relevant**: linked to the person's goals and values.\n- **Time-bound**: has a timeframe, e.g. 'within 3 months'.\n\nPoor objectives are vague ('improve wellbeing'), unmeasurable ('feel better') or unrealistic. Good objectives enable progress monitoring and accountability." },
          ],
          keyFormulas: [
            { name: "Care planning cycle", statement: "assessment → planning → implementation → review" },
            { name: "SMART", statement: "Specific, Measurable, Achievable, Relevant, Time-bound" },
            { name: "Person-centred", statement: "person's wishes drive the plan" },
          ],
          workedExample: {
            problem: "Rewrite this objective to make it SMART: 'Help Mr Jones with his mobility.'",
            solution: "SMART version: 'Support Mr Jones to walk 50 metres independently using a walking frame, three times per week, within 3 months.' Specific (walk 50m), measurable (distance/frequency), achievable (frame), relevant (mobility goal), time-bound (3 months).",
          },
          questions: [
            {
              id: "edxbtechsc-u7-plan-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Name the four stages of the care planning cycle.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Care planning cycle", statement: "Assessment, planning, implementation, review." }],
                steps: [{ reasoning: "Assessment → planning → implementation → review.", marks: 2, markCode: "B" }],
                finalAnswer: "Assessment, planning, implementation, review.",
              },
            },
            {
              id: "edxbtechsc-u7-plan-q2", difficulty: "foundation", totalMarks: 3,
              stem: "What does SMART stand for in care planning?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "SMART objectives", statement: "Specific, Measurable, Achievable, Relevant, Time-bound." }],
                steps: [{ reasoning: "Specific, Measurable, Achievable, Relevant, Time-bound.", marks: 3, markCode: "B" }],
                finalAnswer: "Specific, Measurable, Achievable, Relevant, Time-bound.",
              },
            },
            {
              id: "edxbtechsc-u7-plan-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why person-centred care planning is important.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Person-centred care", statement: "Individual's wishes drive care." }],
                steps: [
                  { reasoning: "Respects autonomy and dignity.", marks: 1, markCode: "M" },
                  { reasoning: "Produces more relevant, effective care.", marks: 1, markCode: "M" },
                  { reasoning: "Improves engagement and outcomes.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Person-centred planning respects autonomy and produces better outcomes.",
              },
            },
            {
              id: "edxbtechsc-u7-plan-q4", difficulty: "core", totalMarks: 4,
              stem: "Identify what's wrong with this objective and rewrite it: 'Improve Mrs Patel's health.'",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "SMART objectives", statement: "Must be specific, measurable, achievable, relevant, time-bound." }],
                steps: [
                  { reasoning: "Problem: vague, not measurable, no timeframe.", marks: 1, markCode: "M" },
                  { reasoning: "Rewrite: specific health goal, e.g. 'Reduce Mrs Patel's blood pressure to below 140/90 through daily medication and weekly walks'.", marks: 1, markCode: "M" },
                  { reasoning: "Measurable: BP target stated.", marks: 1, markCode: "M" },
                  { reasoning: "Time-bound: 'within 3 months'.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Original is vague; SMART version specifies measurable goal with timeframe.",
              },
            },
            {
              id: "edxbtechsc-u7-plan-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A care plan for a client with diabetes includes the objective: 'Eat better.'\n(a) Explain why this objective is ineffective.\n(b) Rewrite it as a SMART objective.\n(c) Describe how progress would be monitored.\n(d) Explain when the care plan should be reviewed.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "SMART objectives", statement: "Vague objectives cannot be measured or monitored." }],
                steps: [
                  { reasoning: "(a) 'Eat better' is vague, unmeasurable, no timeframe.", marks: 1, markCode: "M" },
                  { reasoning: "(b) SMART rewrite, e.g. 'Reduce HbA1c below 48 mmol/mol through diet and exercise within 6 months'.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Monitor via HbA1c tests, weight, glucose logs.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Review regularly and when health/status changes.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Vague objective rewritten as SMART with monitoring and review plan.",
              },
            },
            {
              id: "edxbtechsc-u7-plan-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Write an extended answer covering:\n(a) the four stages of care planning;\n(b) what happens at each stage;\n(c) what SMART stands for;\n(d) why person-centred planning matters;\n(e) three things a good care plan should include;\n(f) how to involve family/carers;\n(g) how often care plans should be reviewed.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Care planning", statement: "Cyclical, person-centred, SMART objectives." }],
                steps: [
                  { reasoning: "(a) Four stages listed.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Each stage described.", marks: 2, markCode: "M" },
                  { reasoning: "(c) SMART defined.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Person-centred = autonomy, dignity, better outcomes.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Three elements: needs, goals, interventions, responsibilities.", marks: 1, markCode: "M" },
                  { reasoning: "(f) Family/carers involved with consent, contribute views.", marks: 1, markCode: "M" },
                  { reasoning: "(g) Regular reviews, e.g. 3-6 monthly or when needs change.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Complete care planning overview.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u7-l3-practice", title: "Person-centred values in practice",
          skill: "Explain how care values are applied in daily practice and the role of confidentiality and consent.",
          sections: [
            { heading: "Applying care values", body: "The **6Cs** (NHS values): **Care** (compassionate care), **Compassion** (empathy for suffering), **Competence** (knowledge and skills), **Communication** (clear, honest, effective), **Courage** (speaking up, doing right thing), **Commitment** (dedication to quality care).\n\n**Dignity** means treating people as individuals with worth — privacy, respect, choice. **Equality and diversity** means treating everyone fairly regardless of characteristics. **Anti-discriminatory practice** actively challenges prejudice and promotes inclusion." },
            { heading: "Confidentiality and consent", body: "**Confidentiality**: personal information must be kept private and only shared when necessary and lawful — e.g. with consent, for safeguarding, or when required by law.\n\n**Consent**: a person must agree to care/treatment. Types: **expressed** (verbal/written), **implied** (cooperation), **retrospective** (after the fact). For people lacking capacity, decisions are made in their **best interests** under the Mental Capacity Act. Consent can be withdrawn at any time.\n\nCare workers must respect confidentiality while recognising that safeguarding concerns may require sharing information." },
          ],
          keyFormulas: [
            { name: "6Cs", statement: "Care, Compassion, Competence, Communication, Courage, Commitment" },
            { name: "Consent types", statement: "expressed, implied, retrospective" },
            { name: "Confidentiality", statement: "share only when necessary and lawful" },
          ],
          workedExample: {
            problem: "A client asks the care worker not to tell anyone about their depression. How should the worker respond?",
            solution: "The worker should respect confidentiality and reassure the client — information is kept private unless there's a safeguarding concern or legal requirement. However, if the client is at risk of harm, the worker has a duty to share information. The worker should explain this limit clearly and involve the client in decisions where possible.",
          },
          questions: [
            {
              id: "edxbtechsc-u7-values-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Name the six '6Cs' of NHS values.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "6Cs", statement: "Care, Compassion, Competence, Communication, Courage, Commitment." }],
                steps: [{ reasoning: "All six named.", marks: 2, markCode: "B" }],
                finalAnswer: "Care, Compassion, Competence, Communication, Courage, Commitment.",
              },
            },
            {
              id: "edxbtechsc-u7-values-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Define dignity and give two examples of how care workers can promote it.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Dignity", statement: "Treating people as individuals with worth." }],
                steps: [
                  { reasoning: "Dignity defined: respect, privacy, individuality.", marks: 1, markCode: "B" },
                  { reasoning: "Example 1, e.g. knocking before entering, privacy during care.", marks: 1, markCode: "B" },
                  { reasoning: "Example 2, e.g. using preferred name, offering choices.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "Dignity = respect and individuality; promote via privacy, choice, preferred names.",
              },
            },
            {
              id: "edxbtechsc-u7-values-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the difference between expressed and implied consent.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Consent types", statement: "Expressed = verbal/written; implied = cooperation." }],
                steps: [
                  { reasoning: "Expressed consent: explicit verbal or written agreement.", marks: 1, markCode: "M" },
                  { reasoning: "Implied consent: cooperation without explicit statement.", marks: 1, markCode: "M" },
                  { reasoning: "Both require the person to have capacity.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Expressed = explicit agreement; implied = cooperation — both need capacity.",
              },
            },
            {
              id: "edxbtechsc-u7-values-q4", difficulty: "core", totalMarks: 4,
              stem: "Explain when confidentiality can be breached and give two examples.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Confidentiality", statement: "Share only when necessary and lawful." }],
                steps: [
                  { reasoning: "Breach when necessary and lawful: safeguarding concerns, legal requirement, consent given.", marks: 2, markCode: "M" },
                  { reasoning: "Example 1, e.g. suspected abuse must be reported.", marks: 1, markCode: "M" },
                  { reasoning: "Example 2, e.g. court order or risk to others.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Confidentiality breached for safeguarding, legal requirements or with consent.",
              },
            },
            {
              id: "edxbtechsc-u7-values-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Explain how care workers can apply the 6Cs in daily practice, giving one example of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "6Cs in practice", statement: "Values guide daily care interactions." }],
                steps: [
                  { reasoning: "Care: provide compassionate, person-centred care.", marks: 1, markCode: "M" },
                  { reasoning: "Compassion: show empathy for suffering.", marks: 1, markCode: "M" },
                  { reasoning: "Competence: use knowledge and skills correctly.", marks: 1, markCode: "M" },
                  { reasoning: "Communication: clear, honest, effective communication.", marks: 1, markCode: "M" },
                  { reasoning: "Courage: speak up, do the right thing.", marks: 1, markCode: "M" },
                  { reasoning: "Commitment: dedication to quality care.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "All six 6Cs applied with practical examples.",
              },
            },
            {
              id: "edxbtechsc-u7-values-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Write an extended answer covering:\n(a) the 6Cs and what each means;\n(b) what dignity means in care;\n(c) the three types of consent;\n(d) when confidentiality can be breached;\n(e) how to support someone who lacks capacity;\n(f) why anti-discriminatory practice matters;\n(g) how values affect daily care interactions.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Care values and practice", statement: "6Cs, dignity, consent, confidentiality, anti-discrimination." }],
                steps: [
                  { reasoning: "(a) Six 6Cs defined.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Dignity = respect, privacy, individuality.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Three consent types.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Confidentiality breach conditions.", marks: 1, markCode: "M" },
                  { reasoning: "(e) Lacks capacity → best interests decisions under MCA.", marks: 1, markCode: "M" },
                  { reasoning: "(f) Anti-discrimination = fair treatment for all.", marks: 1, markCode: "M" },
                  { reasoning: "(g) Values guide every interaction: respect, choice, dignity.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "Complete person-centred values and practice overview.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u7-values-notes", title: "Care planning and values — notes",
      summary: "Care plans follow assessment → planning → implementation → review with SMART objectives. 6Cs guide practice; consent and confidentiality are fundamental.",
      sections: [
        { heading: "Key idea", body: "Person-centred care puts the individual's wishes, values and choices at the centre." },
        { heading: "Values", body: "6Cs: Care, Compassion, Competence, Communication, Courage, Commitment." },
      ],
    },
  },
];
