import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "psych-u4-lesson-4-3",
  code: "4-3",
  title: "Prejudice, Discrimination and Crowd Behaviour",
  goal: "I CAN describe the causes and reduction of prejudice and discrimination, and explain theories of crowd and collective behaviour.",
  standards: ["Paper 1", "Paper 2", "Topic 4"],
  vocabulary: [
    { term: "Prejudice", definition: "A negative attitude or emotional reaction toward a group and its members." },
    { term: "Discrimination", definition: "Unfair treatment of individuals based on group membership." },
    { term: "Stereotype", definition: "An oversimplified, generalised belief about a group of people." },
    { term: "In-group favouritism", definition: "Preferential treatment of members of one's own group over out-group members." },
    { term: "Social identity theory", definition: "Tajfel and Turner's theory that group membership shapes self-concept and intergroup behaviour." },
    { term: "Collective behaviour", definition: "Spontaneous, relatively unstructured group behaviour such as crowds, riots and panics." },
  ],
  concepts: [
    {
      id: "psych-u4-prejudice",
      title: "Prejudice and discrimination",
      skill: "Describe the causes of prejudice and discrimination and evaluate strategies for reducing intergroup conflict.",
      lesson: {
        sections: [
          {
            heading: "Origins of prejudice",
            body: "Prejudice has multiple causes: **scapegoat theory** (frustration is displaced onto out-groups during hardship — e.g. economic downturns increase prejudice); **social learning** (children absorb prejudiced attitudes from parents and media); **realistic conflict theory** (competition for scarce resources breeds hostility — Sherif's Robbers Cave study); **social identity theory** (people derive self-esteem from in-group favouritism and out-group denigration — Tajfel's minimal group studies show bias from trivial groupings).",
          },
          {
            heading: "Manifestations",
            body: "**Stereotypes** (cognitive beliefs), **prejudice** (emotional attitudes) and **discrimination** (behavioural treatment) form a chain — stereotypes justify prejudice, which motivates discrimination. Discrimination can be **individual** (one person's acts) or **institutional/systemic** (policies and structures that disadvantage groups even without individual intent). Prejudice operates both explicitly (overt hostility) and implicitly (unconscious bias).",
          },
          {
            heading: "Reducing prejudice",
            body: "Effective strategies include **contact hypothesis** (Allport): equal-status, cooperative contact reduces prejudice — especially with institutional support and shared goals (jigsaw classroom technique). **Superordinate goals** require groups to work together toward a common aim, reducing perceived competition. **Perspective-taking** and intergroup dialogue also help. However, contact alone can backfire if groups compete or differ in status — conditions matter.",
          },
        ],
        keyFormulas: [
          { name: "Prejudice chain", statement: "Stereotype (belief) → Prejudice (attitude) → Discrimination (behaviour)" },
          { name: "Contact conditions", statement: "Equal status + cooperation + institutional support + common goals" },
        ],
        workedExample: {
          problem: "A school integrates two rival youth groups for a shared community project. Explain why this might reduce prejudice.",
          solution: "Contact hypothesis: equal-status cooperative work toward a superordinate goal (the project) reduces perceived competition and builds positive intergroup attitudes — provided conditions like equal status and institutional support are met.",
        },
      },
      questions: [
        {
          id: "psych-u4-pjq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to realistic conflict theory, prejudice increases when groups:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Compete for scarce resources" },
              { id: "b", text: "Have equal status" },
              { id: "c", text: "Share common goals" },
              { id: "d", text: "Interact cooperatively" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Realistic conflict", statement: "Competition for scarce resources produces intergroup hostility and prejudice." },
            ],
            steps: [
              { reasoning: "Realistic conflict theory links prejudice to resource competition.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Compete for scarce resources",
            commonErrors: ["Choosing cooperation — that reduces prejudice per contact hypothesis."],
          },
        },
        {
          id: "psych-u4-pjq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between individual and institutional discrimination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Discrimination types", statement: "Individual = personal acts; institutional = systemic policies disadvantaging groups." },
            ],
            steps: [
              { reasoning: "Individual discrimination: one person's unfair treatment — e.g. a shopkeeper refusing service based on ethnicity.", marks: 1, markCode: "M" },
              { reasoning: "Institutional discrimination: policies, procedures or structures that disadvantage groups even without individual intent.", marks: 1, markCode: "M" },
              { reasoning: "Institutional forms can persist even when individuals hold no prejudice — e.g. biased hiring criteria.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Individual = personal acts; institutional = systemic disadvantage embedded in structures.",
            commonErrors: ["Assuming discrimination requires personal prejudice — institutional forms don't."],
          },
        },
        {
          id: "psych-u4-pjq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how Tajfel's minimal group studies demonstrate the power of social identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Minimal group paradigm", statement: "Arbitrary groupings produce in-group favouritism — identity alone drives bias." },
            ],
            steps: [
              { reasoning: "Participants were assigned to groups by trivial criteria (e.g. coin toss, art preference) with no real conflict.", marks: 1, markCode: "M" },
              { reasoning: "Despite meaningless groups, participants allocated more rewards to in-group members.", marks: 1, markCode: "M" },
              { reasoning: "This shows mere categorisation triggers in-group favouritism — social identity alone produces bias.", marks: 1, markCode: "R" },
              { reasoning: "Implication: prejudice does not require real competition or history — identity processes suffice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Trivial group assignments still produce in-group bias — social identity alone drives discrimination.",
            commonErrors: ["Assuming prejudice requires real conflict — minimal groups show otherwise."],
          },
        },
        {
          id: "psych-u4-pjq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Two neighbourhoods with historical tension are being integrated into a shared school.",
          parts: [
            { label: "a", prompt: "Explain three causes of the existing prejudice between the neighbourhoods.", marks: 3 },
            { label: "b", prompt: "Describe how the school could apply contact hypothesis principles.", marks: 2 },
            { label: "c", prompt: "Evaluate the limitations of contact-based prejudice reduction.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intergroup contact", statement: "Prejudice has multiple causes; contact reduces it only under specific conditions." },
            ],
            steps: [
              { part: "a", reasoning: "Realistic conflict: historical competition for jobs, housing or resources.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Social identity: generations of in-group/out-group categorisation and stereotyping.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Social learning: prejudiced attitudes transmitted through family and community.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ensure equal-status contact — mixed classes, shared activities, not segregated tracking.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Create superordinate goals — collaborative projects requiring both groups to succeed.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Contact fails if conditions aren't met — unequal status or competitive framing can worsen prejudice.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Surface contact without institutional support or meaningful interaction produces little change.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Deep-seated historical grievances may need additional approaches beyond contact alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Conflict + identity + learning. (b) Equal status + superordinate goals. (c) Conditions critical; contact alone insufficient.",
            commonErrors: ["Assuming mere contact reduces prejudice — conditions must be right."],
          },
        },
        {
          id: "psych-u4-pjq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A stereotype is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "an oversimplified, generalised belief about a group" },
              { id: "b", text: "a shared objective requiring cooperation" },
              { id: "c", text: "an emotional prejudice toward a group" },
              { id: "d", text: "unfair treatment of group members" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stereotype", statement: "Cognitive component: oversimplified beliefs about a group." },
            ],
            steps: [
              { reasoning: "Stereotypes are beliefs (cognitive), distinct from prejudice (affective) and discrimination (behavioural).", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Oversimplified, generalised belief about a group",
            commonErrors: ["Confusing stereotypes (beliefs) with prejudice (emotions) or discrimination (behaviour)."],
          },
        },
        {
          id: "psych-u4-pjq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Scapegoat theory explains prejudice as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "displacement of frustration onto out-groups during hardship" },
              { id: "b", text: "competition between groups for resources" },
              { id: "c", text: "behaviour learned from parents and media" },
              { id: "d", text: "categorisation into in-groups and out-groups" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scapegoat theory", statement: "Frustration is displaced onto a target group during economic or social hardship." },
            ],
            steps: [
              { reasoning: "Scapegoating redirects aggression and frustration onto a convenient out-group.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Displaced frustration during hardship",
            commonErrors: ["Confusing scapegoat theory with realistic conflict (resource competition)."],
          },
        },
        {
          id: "psych-u4-pjq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "During an economic downturn, prejudice incidents in a town rose from 40 to 55 per month. What was the increase in incidents?",
          response: { type: "numeric", parts: [{ label: "Increase in incidents", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Change calculation", statement: "Increase = new value - old value." },
            ],
            steps: [
              { reasoning: "55 - 40 = 15.", working: "55 - 40", marks: 1, markCode: "M" },
              { reasoning: "The increase was 15 incidents per month.", working: "15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
            commonErrors: ["Reporting the new total (55) instead of the increase."],
          },
        },
        {
          id: "psych-u4-pjq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Allport's contact hypothesis predicts prejudice reduction when contact is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "forced without shared goals" },
              { id: "b", text: "between groups of unequal status" },
              { id: "c", text: "brief and competitive" },
              { id: "d", text: "equal-status, cooperative and institutionally supported" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contact conditions", statement: "Equal status + cooperation + institutional support + common goals enable prejudice reduction." },
            ],
            steps: [
              { reasoning: "Contact reduces prejudice only when Allport's conditions are met.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Equal-status, cooperative, institutionally supported",
            commonErrors: ["Thinking any contact helps — unequal or competitive contact can worsen prejudice."],
          },
        },
        {
          id: "psych-u4-pjq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the chain from stereotype to prejudice to discrimination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Prejudice chain", statement: "Cognitive beliefs justify emotional attitudes which motivate behavioural treatment." },
            ],
            steps: [
              { reasoning: "Stereotype: the cognitive component — oversimplified beliefs about a group.", marks: 1, markCode: "M" },
              { reasoning: "Prejudice: the affective component — negative emotional attitude toward the group.", marks: 1, markCode: "M" },
              { reasoning: "Discrimination: the behavioural component — unfair treatment based on group membership; each stage can reinforce the others.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stereotype (belief) → prejudice (emotion) → discrimination (behaviour).",
            commonErrors: ["Treating the three as identical — they are distinct cognitive, affective and behavioural components."],
          },
        },
        {
          id: "psych-u4-pjq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a survey of 150 students, 90 admitted favouring their own group in team selection. What percentage showed in-group favouritism?",
          response: { type: "numeric", parts: [{ label: "In-group favouritism percentage", answer: 60, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "Percentage = part / total x 100." },
            ],
            steps: [
              { reasoning: "90 / 150 x 100 = 60%.", working: "90 / 150 x 100", marks: 1, markCode: "M" },
              { reasoning: "60% showed in-group favouritism.", working: "60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60%",
            commonErrors: ["Answering 40% (those who did not favour their group)."],
          },
        },
        {
          id: "psych-u4-pjq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Tajfel's minimal group studies showed that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "real resource conflict is necessary for prejudice" },
              { id: "b", text: "contact always reduces intergroup bias" },
              { id: "c", text: "arbitrary groupings alone produce in-group favouritism" },
              { id: "d", text: "stereotypes require media exposure to form" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Minimal group paradigm", statement: "Trivial categorisation produces in-group bias — identity alone drives discrimination." },
            ],
            steps: [
              { reasoning: "Participants showed bias toward groups assigned by meaningless criteria.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Arbitrary groupings alone produce bias",
            commonErrors: ["Assuming prejudice requires real conflict — minimal groups show otherwise."],
          },
        },
        {
          id: "psych-u4-pjq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the jigsaw classroom technique applies the contact hypothesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Jigsaw classroom", statement: "Students from different groups depend on each other to complete shared material." },
            ],
            steps: [
              { reasoning: "Each student holds a unique piece of information — the group must cooperate to complete the 'puzzle'.", marks: 1, markCode: "M" },
              { reasoning: "This creates equal-status contact toward a superordinate goal, backed by teacher structure.", marks: 1, markCode: "M" },
              { reasoning: "Mutual dependence replaces competition with cooperation, meeting Allport's conditions.", marks: 1, markCode: "A" },
              { reasoning: "Evidence shows reduced intergroup prejudice in classrooms using the technique.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Mutual dependence + equal status + shared goal satisfies contact conditions → reduced prejudice.",
            commonErrors: ["Describing jigsaw as mere contact — the interdependence is the key mechanism."],
          },
        },
        {
          id: "psych-u4-pjq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe realistic conflict theory with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Realistic conflict theory", statement: "Competition for scarce resources produces intergroup hostility." },
            ],
            steps: [
              { reasoning: "When groups compete for limited jobs, housing or resources, hostility and prejudice increase.", marks: 1, markCode: "M" },
              { reasoning: "The out-group becomes a scapegoat blamed for the group's frustrations.", marks: 1, markCode: "M" },
              { reasoning: "Example: Sherif's Robbers Cave — two camps competing over resources developed strong prejudice; cooperation on superordinate goals reduced it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Resource competition → hostility; shared superordinate goals → reduced prejudice (Robbers Cave).",
            commonErrors: ["Ignoring the reversibility — cooperation on superordinate goals reduces realistic conflict."],
          },
        },
        {
          id: "psych-u4-pjq14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to scapegoat theory, during economic hardship people tend to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "seek superordinate shared goals" },
              { id: "b", text: "reduce all forms of prejudice" },
              { id: "c", text: "cooperate more across group boundaries" },
              { id: "d", text: "direct frustration and blame onto out-groups" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scapegoating", statement: "Frustration is displaced onto a target group when the real source cannot be blamed." },
            ],
            steps: [
              { reasoning: "Hardship creates frustration that is redirected at convenient out-groups.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Direct frustration onto out-groups",
            commonErrors: ["Choosing cooperation — hardship typically increases, not decreases, prejudice."],
          },
        },
        {
          id: "psych-u4-pjq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate the contact hypothesis as a strategy for reducing prejudice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contact hypothesis evaluation", statement: "Contact reduces prejudice only under specific conditions." },
            ],
            steps: [
              { reasoning: "Works under Allport's conditions: equal status, cooperative contact, common goals, institutional support.", marks: 2, markCode: "M" },
              { reasoning: "Evidence: jigsaw classroom and Robbers Cave superordinate goals show reduced prejudice.", marks: 2, markCode: "M" },
              { reasoning: "Failures: unequal status or competitive framing can worsen prejudice; surface contact alone does little.", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: powerful but conditional — contact is necessary, not sufficient, for deep change.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Effective under strict conditions; mere contact without them can backfire.",
            commonErrors: ["Claiming contact always works — conditions determine its success."],
          },
        },
        {
          id: "psych-u4-pjq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A 'superordinate goal' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "an individual performance target" },
              { id: "b", text: "a shared objective requiring cooperation between groups" },
              { id: "c", text: "a stereotype about out-group members" },
              { id: "d", text: "a goal that separates groups further" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Superordinate goal", statement: "A shared aim that overrides group differences and requires cooperation." },
            ],
            steps: [
              { reasoning: "Superordinate goals unite groups against a common challenge, reducing perceived competition.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shared objective requiring cooperation",
            commonErrors: ["Confusing superordinate goals with subgroup goals."],
          },
        },
        {
          id: "psych-u4-pjq17",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Distinguish between explicit and implicit prejudice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Explicit vs implicit prejudice", statement: "Conscious overt attitudes vs unconscious automatic associations." },
            ],
            steps: [
              { reasoning: "Explicit prejudice: conscious, openly expressed attitudes and intentional discrimination.", marks: 1, markCode: "M" },
              { reasoning: "Implicit prejudice: unconscious biases — automatic associations that operate without awareness.", marks: 1, markCode: "M" },
              { reasoning: "Implicit bias can persist even when explicit attitudes are egalitarian.", marks: 1, markCode: "A" },
              { reasoning: "Both produce discrimination — implicit bias affects rapid judgements like hiring and policing.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Explicit = conscious/intentional; implicit = unconscious/automatic — both can discriminate.",
            commonErrors: ["Assuming egalitarian explicit attitudes eliminate implicit bias."],
          },
        },
        {
          id: "psych-u4-pjq18",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe how social learning contributes to the development of prejudice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Social learning of prejudice", statement: "Children absorb prejudiced attitudes through observation, imitation and reinforcement." },
            ],
            steps: [
              { reasoning: "Children observe and imitate the attitudes expressed by parents, peers and media.", marks: 1, markCode: "M" },
              { reasoning: "Reinforcement shapes which intergroup behaviours are rewarded or punished.", marks: 1, markCode: "M" },
              { reasoning: "Prejudice can thus be acquired without direct teaching — and unlearned through counter-examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Observation + imitation + reinforcement transmit prejudiced attitudes across generations.",
            commonErrors: ["Assuming prejudice is purely innate — social learning is a major pathway."],
          },
        },
        {
          id: "psych-u4-pjq19",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A company notices its hiring panel consistently rejects candidates from certain ethnic backgrounds.",
          parts: [
            { label: "a", prompt: "Explain three possible causes of this discrimination.", marks: 3 },
            { label: "b", prompt: "Describe two evidence-based strategies to reduce it.", marks: 2 },
            { label: "c", prompt: "Evaluate the difficulty of eliminating institutional discrimination.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Institutional discrimination", statement: "Bias embedded in structures persists even without individual prejudice." },
            ],
            steps: [
              { part: "a", reasoning: "Realistic conflict: perceived competition for limited positions fuels out-group hostility.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Social identity: panel members favour their own in-group through in-group favouritism.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Social learning/implicit bias: prejudiced norms and unconscious associations shape judgements.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Structured equal-status contact — mixed teams with shared goals reduce intergroup bias.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Blind recruitment and structured interviews remove discretionary bias from selection.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Implicit biases operate automatically — awareness alone does not eliminate them.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Institutional practices embed advantage — informal networks, criteria and culture favour incumbents.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: requires sustained multi-level change — policies, culture and accountability together.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Conflict + identity + implicit bias. (b) Structured contact + blind recruitment. (c) Deep-rooted — needs systemic change.",
            commonErrors: ["Blaming only individual 'bad apples' — institutional bias operates systemically."],
          },
        },
        {
          id: "psych-u4-pjq20",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which arrangement best satisfies the conditions of the contact hypothesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Competing sports teams with unequal resources" },
              { id: "b", text: "Segregated tracking by group background" },
              { id: "c", text: "Brief, unstructured interaction between groups" },
              { id: "d", text: "Mixed-status cooperative projects with shared goals and institutional backing" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contact conditions", statement: "Equal status, cooperation, common goals and institutional support are required." },
            ],
            steps: [
              { reasoning: "Only option (b) combines equal status, cooperation, shared goals and institutional support.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cooperative projects with shared goals and backing",
            commonErrors: ["Choosing any contact — the conditions determine whether it helps or harms."],
          },
        },
      ],
    },
    {
      id: "psych-u4-crowd-behaviour",
      title: "Crowd and collective behaviour",
      skill: "Describe theories explaining crowd behaviour including contagion, emergent norm and convergence.",
      lesson: {
        sections: [
          {
            heading: "Le Bon's contagion theory",
            body: "Gustave **Le Bon (1895)** argued crowds produce a 'group mind' — individuals lose rationality and personal identity, becoming suggestible and emotional. Behaviour spreads by **contagion** like a disease: one person's action triggers others to imitate. This explains emotional intensity in crowds but is criticised for treating crowd members as passive and irrational — modern research shows individuals retain some rationality and personal norms.",
          },
          {
            heading: "Emergent norm theory",
            body: "**Turner and Killian (1972)** proposed crowd members share a **common grievance** but lack established norms for action. In the crowd, **emergent norms** develop spontaneously — new situational rules arise through interaction and key individuals' actions. Members then conform to these emergent norms. This explains varied crowd behaviour: different crowds develop different norms, producing different outcomes from similar grievances.",
          },
          {
            heading: "Convergence and deindividuation",
            body: "**Convergence theory** argues crowd behaviour results from like-minded individuals gathering — the predispositions were already present; the crowd merely provides opportunity. **Deindividuation** (Zimbardo) adds that anonymity in crowds reduces self-awareness, disinhibiting behaviour normally suppressed. Modern integrated views combine these: predispositions + anonymity + emergent norms + emotional contagion together explain crowd action.",
          },
        ],
        keyFormulas: [
          { name: "Contagion theory", statement: "Crowd creates group mind; behaviour spreads by imitation" },
          { name: "Emergent norm", statement: "Shared grievance + no norms → spontaneous new rules develop" },
          { name: "Convergence", statement: "Like-minded individuals gather → predispositions expressed" },
        ],
        workedExample: {
          problem: "Why might two protests against the same injustice produce different outcomes — one peaceful, one violent?",
          solution: "Emergent norm theory: the crowds developed different situational norms through interaction — one norm supported peaceful protest, the other violent confrontation. Same grievance, different emergent norms, different behaviour.",
        },
      },
      questions: [
        {
          id: "psych-u4-cbq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Le Bon's contagion theory proposes that crowd behaviour spreads through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shared pre-existing attitudes" },
              { id: "b", text: "Deliberate planning" },
              { id: "c", text: "Imitation and emotional contagion" },
              { id: "d", text: "Emergent group norms" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contagion theory", statement: "Crowd behaviour spreads like disease through imitation and emotional contagion." },
            ],
            steps: [
              { reasoning: "Le Bon proposed behaviour spreads via contagion — one person's action triggers imitation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Imitation and emotional contagion",
            commonErrors: ["Confusing contagion with convergence — contagion is spread, convergence is pre-selection."],
          },
        },
        {
          id: "psych-u4-cbq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe how emergent norm theory explains crowd behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Emergent norm theory", statement: "Crowds develop spontaneous situational norms through interaction that guide behaviour." },
            ],
            steps: [
              { reasoning: "Crowd members share a grievance but lack established norms for how to act.", marks: 1, markCode: "M" },
              { reasoning: "Through interaction, spontaneous norms emerge — e.g. whether to chant, march or confront.", marks: 1, markCode: "M" },
              { reasoning: "Members then conform to these emergent norms, producing collective action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shared grievance → interaction → emergent norms → collective behaviour.",
            commonErrors: ["Assuming crowds have fixed norms — emergent norms arise spontaneously."],
          },
        },
        {
          id: "psych-u4-cbq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Compare contagion theory and convergence theory as explanations of crowd behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Crowd theories compared", statement: "Contagion: behaviour spreads in crowd; Convergence: predisposed individuals gather." },
            ],
            steps: [
              { reasoning: "Contagion (Le Bon): the crowd transforms individuals — behaviour spreads by imitation and emotional contagion.", marks: 1, markCode: "M" },
              { reasoning: "Convergence: individuals with similar predispositions gather — the crowd provides opportunity, not transformation.", marks: 1, markCode: "M" },
              { reasoning: "Key difference: contagion sees the crowd as cause; convergence sees it as context for pre-existing tendencies.", marks: 1, markCode: "R" },
              { reasoning: "Evidence: convergence explains why only certain people join riots; contagion explains rapid spread within crowds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contagion = crowd transforms; convergence = predisposed gather. Complementary explanations.",
            commonErrors: ["Treating them as mutually exclusive — modern views integrate both."],
          },
        },
        {
          id: "psych-u4-cbq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "During a music festival, a crowd suddenly panics and stampedes toward the exits.",
          parts: [
            { label: "a", prompt: "Explain the panic using contagion and emergent norm theories.", marks: 3 },
            { label: "b", prompt: "Describe how deindividuation contributed to the stampede.", marks: 2 },
            { label: "c", prompt: "Evaluate the usefulness of crowd psychology theories for managing such events.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Crowd panic", statement: "Panic spreads through emotional contagion; emergent norms of flight develop rapidly." },
            ],
            steps: [
              { part: "a", reasoning: "Contagion: initial fear (e.g. a scream) spread rapidly through the crowd by imitation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Emergent norm: 'run to exits' became the spontaneous norm everyone conformed to.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Emotional contagion amplified individual fear into collective panic faster than rational assessment.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Deindividuation: anonymity in the crowd reduced self-awareness — people acted on impulse.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Diffusion of responsibility meant no one felt individually accountable for pushing or panicking.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Useful: understanding contagion helps design crowd management — clear exits, calm authority figures.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Useful: knowing emergent norms develop means early calm leadership can set positive norms.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: theories describe behaviour after it starts — prevention requires anticipating triggers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Contagion + emergent norm of flight. (b) Anonymity + diffusion. (c) Guides management but is reactive, not preventive.",
            commonErrors: ["Blaming crowd members as irrational — theories explain, not excuse, behaviour."],
          },
        },
        {
          id: "psych-u4-cbq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Collective behaviour refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "individual decision-making under pressure" },
              { id: "b", text: "planned organisational activity" },
              { id: "c", text: "spontaneous, relatively unstructured group behaviour such as crowds, riots and panics" },
              { id: "d", text: "conformity in laboratory line-judgment tasks" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collective behaviour", statement: "Spontaneous, relatively unstructured group action — crowds, riots, panics." },
            ],
            steps: [
              { reasoning: "Collective behaviour is unplanned and emerges in gatherings without formal structure.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Spontaneous, relatively unstructured group behaviour",
            commonErrors: ["Confusing collective behaviour with organised group activity."],
          },
        },
        {
          id: "psych-u4-cbq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Emergent norm theory (Turner and Killian) proposes that crowd behaviour is guided by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "contagion of emotion alone" },
              { id: "b", text: "a fixed set of pre-existing group norms" },
              { id: "c", text: "detailed plans made by crowd leaders" },
              { id: "d", text: "spontaneous situational norms that develop through interaction" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Emergent norm theory", statement: "Crowds lacking established norms develop new situational rules through interaction." },
            ],
            steps: [
              { reasoning: "Emergent norms arise spontaneously as members interact — they are not pre-existing or planned.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Spontaneous situational norms",
            commonErrors: ["Confusing emergent norms with the contagion mechanism."],
          },
        },
        {
          id: "psych-u4-cbq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Researchers observed 60 crowd members: 12 initiated actions and the remaining 48 imitated them. What percentage imitated the initiators?",
          response: { type: "numeric", parts: [{ label: "Imitation rate", answer: 80, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "Percentage = part / total x 100." },
            ],
            steps: [
              { reasoning: "48 / 60 x 100 = 80%.", working: "48 / 60 x 100", marks: 1, markCode: "M" },
              { reasoning: "80% of members imitated the initiators.", working: "80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80%",
            commonErrors: ["Using 12/60 (the initiator rate, 20%) instead of imitators."],
          },
        },
        {
          id: "psych-u4-cbq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Convergence theory argues that crowd behaviour results mainly from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "like-minded individuals with similar predispositions gathering together" },
              { id: "b", text: "spontaneous new norms emerging" },
              { id: "c", text: "anonymity reducing self-awareness" },
              { id: "d", text: "emotion spreading through imitation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Convergence theory", statement: "Crowds gather predisposed individuals — the crowd provides opportunity, not transformation." },
            ],
            steps: [
              { reasoning: "Convergence emphasises pre-existing similarity among participants rather than crowd influence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Like-minded predisposed individuals gathering",
            commonErrors: ["Confusing convergence with contagion — convergence is about who joins, not how behaviour spreads."],
          },
        },
        {
          id: "psych-u4-cbq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between contagion theory and convergence theory as explanations of crowd behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Contagion vs convergence", statement: "Contagion: crowd transforms individuals; convergence: predisposed individuals gather." },
            ],
            steps: [
              { reasoning: "Contagion (Le Bon): the crowd itself transforms members — behaviour spreads by imitation and emotional contagion.", marks: 1, markCode: "M" },
              { reasoning: "Convergence: individuals with similar predispositions self-select into the crowd — it provides opportunity, not transformation.", marks: 1, markCode: "M" },
              { reasoning: "Complementary: contagion explains spread within crowds; convergence explains who joins them.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contagion = crowd transforms; convergence = predisposed individuals gather.",
            commonErrors: ["Treating them as mutually exclusive — modern views integrate both."],
          },
        },
        {
          id: "psych-u4-cbq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "During a panic observation, 75% of a 200-person crowd showed panic behaviour by 20 seconds. How many people showed panic?",
          response: { type: "numeric", parts: [{ label: "Panicked individuals", answer: 150 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage calculation", statement: "Part = percentage x total." },
            ],
            steps: [
              { reasoning: "0.75 x 200 = 150.", working: "0.75 x 200", marks: 1, markCode: "M" },
              { reasoning: "150 people showed panic behaviour.", working: "150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "150",
            commonErrors: ["Computing 75% of the wrong total or leaving the answer as 75."],
          },
        },
        {
          id: "psych-u4-cbq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A major criticism of Le Bon's contagion theory is that it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ignores the role of emotion in crowds" },
              { id: "b", text: "relies on too much empirical evidence" },
              { id: "c", text: "treats crowd members as passive and irrational, denying their retained rationality and personal norms" },
              { id: "d", text: "overemphasises individual choice" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contagion criticism", statement: "Modern research shows crowd members retain rationality and personal norms." },
            ],
            steps: [
              { reasoning: "Le Bon's 'group mind' portrays members as passive — research shows they remain active interpreters.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Treats members as passive and irrational",
            commonErrors: ["Saying the theory ignores emotion — it over-relies on it."],
          },
        },
        {
          id: "psych-u4-cbq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how deindividuation contributes to crowd behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deindividuation in crowds", statement: "Anonymity reduces self-awareness and accountability, disinhibiting behaviour." },
            ],
            steps: [
              { reasoning: "Anonymity — crowds, masks, darkness — reduces sense of individual identity.", marks: 1, markCode: "M" },
              { reasoning: "Lowered self-awareness and accountability remove restraints on normally suppressed behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Emotional contagion and arousal amplify the disinhibited response.", marks: 1, markCode: "A" },
              { reasoning: "The result can be aggression — or prosocial collective action like peaceful protest.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Anonymity + arousal + reduced accountability → disinhibited crowd behaviour.",
            commonErrors: ["Assuming deindividuation only produces violence — it enables collective action generally."],
          },
        },
        {
          id: "psych-u4-cbq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe how emergent norms develop in a crowd according to Turner and Killian.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Emergent norm development", statement: "Shared grievance + no established norms → spontaneous rules arise through interaction." },
            ],
            steps: [
              { reasoning: "Members share a grievance but lack established norms for how to act.", marks: 1, markCode: "M" },
              { reasoning: "Through interaction — and key individuals' actions — new situational norms spontaneously emerge.", marks: 1, markCode: "M" },
              { reasoning: "Members conform to these emergent norms, producing collective behaviour that differs between crowds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Grievance + interaction → emergent norms → collective behaviour.",
            commonErrors: ["Assuming crowds have pre-set norms — they develop situationally."],
          },
        },
        {
          id: "psych-u4-cbq14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Turner and Killian's explanation of crowd behaviour is known as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "contagion theory" },
              { id: "b", text: "convergence theory" },
              { id: "c", text: "emergent norm theory" },
              { id: "d", text: "social identity theory" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Turner and Killian", statement: "Proposed that crowds develop spontaneous situational norms." },
            ],
            steps: [
              { reasoning: "Turner and Killian (1972) formulated the emergent norm account of collective behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Emergent norm theory",
            commonErrors: ["Confusing Turner and Killian with Le Bon (contagion)."],
          },
        },
        {
          id: "psych-u4-cbq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate the usefulness of crowd psychology theories for managing crowds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theory application", statement: "Crowd theories explain mechanisms but predict behaviour imperfectly." },
            ],
            steps: [
              { reasoning: "Useful: understanding contagion informs crowd management — calm authority figures, clear exits, reduced ambiguity.", marks: 2, markCode: "M" },
              { reasoning: "Useful: knowing emergent norms develop means early calm leadership can set positive norms.", marks: 2, markCode: "M" },
              { reasoning: "Limitation: theories describe behaviour once it emerges — they cannot reliably predict triggers.", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: most useful as an integrated framework for real-time management, less so for prevention.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Guides real-time management well; limited for predicting or preventing crowd action.",
            commonErrors: ["Expecting theories to predict specific outcomes — they explain mechanisms, not events."],
          },
        },
        {
          id: "psych-u4-cbq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which theory best explains why only certain predisposed individuals join a riot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Contagion theory" },
              { id: "b", text: "Drive theory" },
              { id: "c", text: "Convergence theory" },
              { id: "d", text: "Emergent norm theory" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Convergence prediction", statement: "Like-minded individuals self-select into crowds — explaining selective participation." },
            ],
            steps: [
              { reasoning: "Selective joining is the signature prediction of convergence theory.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Convergence theory",
            commonErrors: ["Choosing contagion — that explains spread, not who participates."],
          },
        },
        {
          id: "psych-u4-cbq17",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why two protests against the same injustice might produce different outcomes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Crowd outcome variability", statement: "Same grievance, different crowds → different emergent norms and outcomes." },
            ],
            steps: [
              { reasoning: "Different crowds develop different emergent norms through their own interactions.", marks: 1, markCode: "M" },
              { reasoning: "Composition differs — convergence means crowds gather people with different predispositions.", marks: 1, markCode: "M" },
              { reasoning: "One crowd's norm may support peaceful protest while another's supports confrontation.", marks: 1, markCode: "A" },
              { reasoning: "Outcome depends on norms and membership, not the grievance alone.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Different emergent norms + different members → different outcomes from the same grievance.",
            commonErrors: ["Assuming identical grievances produce identical behaviour — context and norms intervene."],
          },
        },
        {
          id: "psych-u4-cbq18",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In an observed event, an anonymous crowd committed 60 disinhibited acts compared with 24 in an identifiable crowd of the same size. What was the percentage increase?",
          response: { type: "numeric", parts: [{ label: "Percentage increase", answer: 150, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage increase", statement: "Increase % = (new - old) / old x 100." },
            ],
            steps: [
              { reasoning: "(60 - 24) / 24 x 100 = 150%.", working: "36 / 24 x 100", marks: 1, markCode: "M" },
              { reasoning: "The increase was 150%.", working: "150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "150%",
            commonErrors: ["Computing 60/24 = 250% (the ratio, not the increase)."],
          },
        },
        {
          id: "psych-u4-cbq19",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "After a controversial match, rival fans clash and vandalise the stadium.",
          parts: [
            { label: "a", prompt: "Explain the clash using contagion and emergent norm theories.", marks: 3 },
            { label: "b", prompt: "Describe how deindividuation contributed to the vandalism.", marks: 2 },
            { label: "c", prompt: "Evaluate crowd theories' value for preventing such events.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Integrated crowd explanation", statement: "Contagion spreads action; emergent norms direct it; deindividuation disinhibits it." },
            ],
            steps: [
              { part: "a", reasoning: "Contagion: an initial provocation spread rapidly through the crowd by imitation and emotional contagion.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Emergent norm: 'confront the rivals' became the spontaneous norm members conformed to.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Shared grievance (the controversial result) supplied the motivation for the emergent norm.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Anonymity in the crowd — masks, darkness, numbers — reduced self-awareness.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Diffusion of responsibility meant no individual felt accountable for vandalising.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Useful: understanding contagion and norms informs management — separation of rival fans, calm stewards.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limitation: theories explain mechanisms but cannot predict when triggers occur.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: valuable for intervention, less reliable for prevention.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Contagion + emergent norm of confrontation. (b) Anonymity + diffusion. (c) Guides intervention, weak for prediction.",
            commonErrors: ["Blaming individual 'hooligans' only — crowd dynamics amplify and spread behaviour."],
          },
        },
        {
          id: "psych-u4-cbq20",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Le Bon's concept of the 'group mind' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a collective mentality in which individuals lose rationality and personal identity" },
              { id: "b", text: "shared planning made by crowd leaders" },
              { id: "c", text: "pooled knowledge improving group decisions" },
              { id: "d", text: "formal norms governing crowd conduct" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Group mind", statement: "Le Bon's term for the collective mentality that overrides individual rationality in crowds." },
            ],
            steps: [
              { reasoning: "The group mind is Le Bon's explanation for emotional, suggestible crowd behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Collective mentality overriding individual rationality",
            commonErrors: ["Thinking the group mind involves planning — it is an emergent, irrational state."],
          },
        },
      ],
    },
  ],
};
