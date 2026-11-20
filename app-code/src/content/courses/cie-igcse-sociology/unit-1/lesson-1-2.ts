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
              { id: "a", text: "The force of social institutions" },
              {
                id: "b",
                text: "The capacity of individuals to make independent choices",
              },
              { id: "c", text: "Government control of society" },
              { id: "d", text: "Inherited social status" },
            ],
            correctChoiceId: "b",
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
      ],
    },
  ],
};
