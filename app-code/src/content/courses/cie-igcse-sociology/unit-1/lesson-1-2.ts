import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cieisoc-u1-lesson-1-2",
  code: "1-2",
  title: "The sociological perspective: structure and action",
  goal: "I CAN explain how social structure shapes individual behaviour and how individuals can change society.",
  standards: [
    "Cambridge IGCSE Sociology 0495",
    "Section 1: Sociology and sociological methods",
  ],
  vocabulary: [
    {
      term: "Social structure",
      definition:
        "Persistent patterns of social relationships and institutions that constrain behaviour.",
    },
    {
      term: "Agency",
      definition:
        "The capacity of individuals to act independently and make choices.",
    },
    {
      term: "Socialisation",
      definition:
        "Learning the norms, values and roles of society through agents like family, school, peers and media.",
    },
    {
      term: "Role",
      definition:
        "The expected behaviours attached to a social position, e.g. student, parent, employee.",
    },
    {
      term: "Norm",
      definition:
        "A rule of behaviour considered acceptable in a society or group.",
    },
    {
      term: "Value",
      definition:
        "A culturally defined standard of what is good, right or desirable.",
    },
  ],
  concepts: [
    {
      id: "cieisoc-u1-structure",
      title: "Structure, agency and socialisation",
      skill:
        "Explain how social structures shape behaviour and how socialisation transmits norms and values.",
      lesson: {
        sections: [
          {
            heading: "Social structure vs agency",
            body: "**Structure** refers to the enduring patterns — class, institutions, laws — that shape what is possible for individuals. **Agency** is the individual's capacity to choose and act. Sociology debates how much behaviour is determined by structure versus how much individuals can exercise agency to change it.",
          },
          {
            heading: "Socialisation and agents",
            body: "People learn society's rules through **agents of socialisation**: the **family** (first norms and values), **school** (formal learning, hidden curriculum), **peer group** (belonging and pressure), **media** (images and messages) and **religion/workplace**. Socialisation explains why people in the same society behave similarly — and why deviants stand out.",
          },
          {
            heading: "Roles, norms and values",
            body: "A **role** carries expectations — a student should attend, study, respect teachers. **Norms** are the rules enforcing roles (queueing, dress codes). **Values** are deeper beliefs about what is good (e.g. equality, achievement). Conflict arises when roles clash — e.g. a working mother balancing employee and parent roles.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure ↔ agency",
            statement:
              "Structures constrain choices; agency can reproduce or challenge structures",
          },
          {
            name: "Socialisation agents",
            statement: "Family → school → peers → media → workplace/religion",
          },
        ],
        workedExample: {
          problem:
            "Explain how a child learns that 'honesty is important' — name two agents and the mechanism.",
          solution:
            "Family: parents praise honesty and punish lying — values transmitted directly. School: rewards for honest work and sanctions for cheating — the hidden curriculum reinforces the value.",
        },
      },
      questions: [
        {
          id: "cieisoc-u1-str-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Agency in sociology refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The capacity of individuals to make independent choices",
              },
              { id: "b", text: "The force of social institutions" },
              { id: "c", text: "Inherited social status" },
              { id: "d", text: "Government control of society" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Agency",
                statement:
                  "Individual capacity for independent choice and action.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Agency is the individual's power to act; structure is the social patterns that constrain it.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) The capacity of individuals to make independent choices.",
            commonErrors: ["Confusing agency with structure."],
          },
        },
        {
          id: "cieisoc-u1-str-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three agents of socialisation and state what each contributes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Agents of socialisation",
                statement:
                  "Family, school, peers, media and workplace transmit norms and values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family: primary socialisation — first language, basic norms and values.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "School: formal knowledge plus the hidden curriculum — punctuality, obedience, competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Peer group/media: belonging, fashion, attitudes and role models beyond family control.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Family (primary norms), school (hidden curriculum), peers/media (belonging and attitudes).",
            commonErrors: [
              "Listing agents without explaining their contribution.",
            ],
          },
        },
        {
          id: "cieisoc-u1-str-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a norm, a value and a role, using an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Norms, values, roles",
                statement:
                  "Values = beliefs about good; norms = rules of behaviour; roles = expected behaviours of a position.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Value: 'education is important' — a culturally approved standard.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Norm: 'students should attend class punctually' — a rule guiding behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Role: 'student' carries expectations — study, respect teachers, complete work.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Value = belief (education matters); norm = rule (attend punctually); role = position expectations (student duties).",
            commonErrors: [
              "Using the terms interchangeably without definitions.",
            ],
          },
        },
        {
          id: "cieisoc-u1-str-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine the claim that individuals have little real choice because social structure determines behaviour.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two ways social structure constrains individual choice.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate the extent to which agency can overcome structural constraints.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure vs agency",
                statement:
                  "Structures shape options; agency operates within — and sometimes changes — them.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Class and income structure limit access to education, housing and opportunities.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Institutions (laws, schools, media) define acceptable behaviour and punish deviation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Socialisation internalises norms so that 'choices' often reproduce existing patterns.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "For agency: individuals do make choices — career changes, migration, activism — within structural limits.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Against: the range of choices is itself structured; 'choice' within constraints is not full freedom.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: structure and agency interact — individuals are shaped by society yet can collectively transform it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Class, institutions and socialisation constrain choice. (b) Agency operates within structures but can change them over time.",
            commonErrors: [
              "Treating structure and agency as mutually exclusive rather than interacting.",
            ],
          },
        },
        {
          id: "cieisoc-u1-str-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an example of a norm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Families should stay together" },
              {
                id: "b",
                text: "Students should wear a school uniform",
              },
              { id: "c", text: "Money buys happiness" },
              { id: "d", text: "Education is important" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Norm",
                statement:
                  "A rule of behaviour considered acceptable in a society or group.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A norm is a rule of conduct — wearing a uniform; the others are values or beliefs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Students should wear a school uniform.",
            commonErrors: [
              "Confusing norms (rules) with values (beliefs about what is good).",
            ],
          },
        },
        {
          id: "cieisoc-u1-str-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define socialisation and name one agent that carries it out.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Socialisation",
                statement:
                  "Learning the norms, values and roles of society through its agents.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Socialisation = the lifelong process of learning norms, values and roles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Agent: family, school, peer group, media, religion or workplace.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Socialisation is learning society's norms, values and roles, carried out by agents such as the family or school.",
            commonErrors: [
              "Describing socialisation as only happening in childhood.",
            ],
          },
        },
        {
          id: "cieisoc-u1-str-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Role conflict occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A person refuses to play any role" },
              { id: "b", text: "A role is newly created in society" },
              { id: "c", text: "Two people argue about their roles" },
              {
                id: "d",
                text: "The expectations of two of a person's roles clash",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Role conflict",
                statement:
                  "Clashing demands from two or more roles held by the same person.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Role conflict arises within one individual — e.g. employee vs parent demands.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) The expectations of two of a person's roles clash.",
            commonErrors: [
              "Confusing role conflict with conflict between two different people.",
            ],
          },
        },
        {
          id: "cieisoc-u1-str-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how schools transmit norms and values through the 'hidden curriculum'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hidden curriculum",
                statement:
                  "The unofficial lessons schools teach — punctuality, obedience, competition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Beyond formal subjects, schools teach behaviour expectations: attendance, uniform, respect for authority.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rewards and punishments (grades, sanctions) reinforce norms such as hard work and conformity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Competition and streaming socialise pupils into accepting hierarchy and individual achievement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Schools transmit norms through routines, rewards and sanctions that teach punctuality, obedience and competitiveness.",
            commonErrors: [
              "Describing only formal subjects rather than the hidden curriculum.",
            ],
          },
        },
        {
          id: "cieisoc-u1-str-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the media acts as an agent of socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Media socialisation",
                statement:
                  "Media transmit images, values and role models beyond family control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Media — TV, films, social media — present role models and images of 'normal' behaviour and lifestyles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Advertising and news reinforce values such as consumerism, beauty standards and gender roles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unlike the family, media reaches audiences on a mass scale and shapes attitudes across society.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Media socialise by broadcasting role models, images and values that shape identity and behaviour on a mass scale.",
            commonErrors: [
              "Listing media examples without explaining the socialising mechanism.",
            ],
          },
        },
        {
          id: "cieisoc-u1-str-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Socialisation is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The study of social statistics" },
              {
                id: "b",
                text: "The division of society into social classes",
              },
              {
                id: "c",
                text: "The ability of individuals to change society",
              },
              {
                id: "d",
                text: "The process by which people learn society's norms, values and roles",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Socialisation",
                statement:
                  "Learning norms, values and roles of society through its agents.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Socialisation is learning society's rules; stratification, agency and statistics are different concepts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) The process of learning society's norms, values and roles.",
            commonErrors: [
              "Confusing socialisation with social mobility or agency.",
            ],
          },
        },
        {
          id: "cieisoc-u1-str-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the peer group influences an individual's behaviour and identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Peer group socialisation",
                statement:
                  "Peers provide belonging and enforce group norms and fashion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Peers offer acceptance and belonging — especially important for adolescents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Peer pressure enforces norms — dress, slang, attitudes — through approval or exclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Peer groups can produce subcultural identities that differ from family or school expectations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Peers shape identity through belonging, pressure to conform and subcultural styles.",
            commonErrors: [
              "Assuming peer influence is only negative — it also provides support and identity.",
            ],
          },
        },
        {
          id: "cieisoc-u1-str-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two ways in which individuals exercise agency within the constraints of social structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agency within structure",
                statement:
                  "Individuals choose within structured options and can sometimes reshape structures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Personal choices: individuals select careers, partners, lifestyles within the options society makes available.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Resistance and reinterpretation: people reject or reinterpret norms — e.g. non-traditional gender roles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Collective action: social movements and activism can change laws and institutions over time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "However, agency operates within structured limits — class and institutions still shape the range of choices.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Agency shows in personal choices, resisting norms and collective change — but always within structural limits.",
            commonErrors: [
              "Claiming individuals are completely free of structural constraints.",
            ],
          },
        },
        {
          id: "cieisoc-u1-str-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement best describes the relationship between structure and agency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Structure determines all behaviour completely" },
              { id: "b", text: "Agency is impossible because individuals have no choice" },
              {
                id: "c",
                text: "Agency and structure interact — individuals are shaped by society yet can act within and change it",
              },
              { id: "d", text: "Structure and agency are unrelated concepts" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure-agency debate",
                statement:
                  "Structures constrain choices; agency operates within and can transform structures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sociology treats structure and agency as interacting forces, not mutually exclusive.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Agency and structure interact — shaped by society yet able to act and change it.",
            commonErrors: [
              "Presenting a false either/or choice between structure and agency.",
            ],
          },
        },
        {
          id: "cieisoc-u1-str-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give one example of a role and state one expectation attached to it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Role",
                statement:
                  "Expected behaviours attached to a social position.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Role: student, parent, employee, teacher (accept any valid role).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Expectation: e.g. a student should attend class, study and respect teachers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "E.g. role = student; expectation = attend class and complete work.",
            commonErrors: [
              "Naming a role without stating its expected behaviour.",
            ],
          },
        },
        {
          id: "cieisoc-u1-str-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'hidden curriculum' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A school's official syllabus" },
              {
                id: "b",
                text: "The unofficial lessons schools teach about behaviour and values",
              },
              { id: "c", text: "Subjects taught in secret" },
              { id: "d", text: "Homework set without marks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hidden curriculum",
                statement:
                  "Unintended lessons — punctuality, obedience, competition — learned at school.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The hidden curriculum is the unofficial socialisation of norms, not formal subjects.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) The unofficial lessons schools teach about behaviour and values.",
            commonErrors: [
              "Confusing the hidden curriculum with the formal timetable or syllabus.",
            ],
          },
        },
        {
          id: "cieisoc-u1-str-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine the claim that socialisation produces conformity and limits individuality.",
          parts: [
            {
              label: "a",
              prompt: "Explain two ways socialisation encourages conformity.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Evaluate the extent to which individuals can resist socialisation.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conformity and resistance",
                statement:
                  "Socialisation pressures conformity; agency allows partial resistance and reinterpretation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Agents reward conformity — praise for obeying norms, sanctions for deviance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Internalisation: norms become 'common sense', so people police themselves without external pressure.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Shared socialisation produces similar behaviour across a society — evidence of conformity.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Individuals resist: deviance, subcultures and counter-cultures reject mainstream norms.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Agency: people reinterpret roles and choose identities — e.g. rejecting gender or class expectations.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: socialisation strongly shapes behaviour, but conformity is never total — resistance is possible within limits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Rewards, internalisation and shared agents create conformity. (b) Deviance and agency allow resistance, but socialisation remains powerful.",
            commonErrors: [
              "Ignoring either the conformist pressure or the possibility of resistance.",
            ],
          },
        },
      ],
    },
  ],
};
