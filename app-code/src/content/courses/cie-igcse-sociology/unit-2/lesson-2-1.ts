import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cieisoc-u2-lesson-2-1",
  code: "2-1",
  title: "Culture and identity",
  goal: "I CAN explain what culture is and how identity is formed through socialisation.",
  standards: [
    "Cambridge IGCSE Sociology 0495",
    "Section 2: Culture and identity",
  ],
  vocabulary: [
    {
      term: "Culture",
      definition:
        "The shared beliefs, values, norms, symbols and practices of a society or group.",
    },
    {
      term: "Subculture",
      definition:
        "A group within a culture sharing distinctive values or practices — e.g. youth, religious, occupational.",
    },
    {
      term: "Identity",
      definition:
        "Who a person understands themselves to be — shaped by social categories and personal experience.",
    },
    {
      term: "Social identity",
      definition:
        "The part of identity derived from group memberships — class, ethnicity, gender, religion.",
    },
    {
      term: "Counter-culture",
      definition:
        "A subculture that rejects dominant cultural values — e.g. punk, hippie movements.",
    },
    {
      term: "Material culture",
      definition:
        "Physical objects of a society — technology, buildings, clothing.",
    },
  ],
  concepts: [
    {
      id: "cieisoc-u2-culture",
      title: "Culture and the formation of identity",
      skill:
        "Explain culture, subcultures and how socialisation shapes identity.",
      lesson: {
        sections: [
          {
            heading: "What is culture?",
            body: "Culture includes **non-material** elements — beliefs, values, norms, language, symbols — and **material** elements — tools, buildings, clothing, technology. Shared culture is what makes a society coherent: it tells members what is normal, valuable and expected.",
          },
          {
            heading: "Subcultures and counter-cultures",
            body: "Within any culture, **subcultures** share the mainstream but add distinctive practices — youth fashion, religious communities, occupational groups. **Counter-cultures** actively reject dominant values — e.g. 1960s hippies rejecting materialism. Subcultures can become sources of identity and resistance.",
          },
          {
            heading: "How identity forms",
            body: "Identity is shaped by **social categories** (class, ethnicity, gender, religion) and by **socialisation** — family, school, peers and media teach us who we 'should' be. Individuals also exercise **agency**, crafting personal identities within these constraints. Identity can be **ascribed** (fixed at birth, e.g. ethnicity) or **achieved** (earned through choices, e.g. profession).",
          },
        ],
        keyFormulas: [
          {
            name: "Culture layers",
            statement:
              "Non-material (beliefs/norms/language) + material (objects/technology)",
          },
          {
            name: "Identity sources",
            statement: "Social categories + socialisation + personal agency",
          },
        ],
        workedExample: {
          problem:
            "A teenager adopts a distinctive dress style shared by a music scene. Is this a subculture? How does it affect identity?",
          solution:
            "Yes — a youth/music subculture. It provides belonging and a distinctive identity, marking the teen as part of a group while still sharing mainstream culture.",
        },
      },
      questions: [
        {
          id: "cieisoc-u2-cult-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A subculture is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A religious doctrine" },
              {
                id: "b",
                text: "A group within a culture sharing distinctive practices",
              },
              { id: "c", text: "A group that rejects all mainstream values" },
              { id: "d", text: "A foreign culture" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subculture",
                statement:
                  "Distinctive group within the wider culture sharing practices and values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subcultures share mainstream culture but add distinctive features; counter-cultures are the ones that reject dominant values.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) A group within a culture sharing distinctive practices.",
            commonErrors: ["Confusing subculture with counter-culture."],
          },
        },
        {
          id: "cieisoc-u2-cult-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between material and non-material culture, with an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Material vs non-material",
                statement:
                  "Material = physical objects; non-material = ideas, beliefs, norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Material culture: physical objects — buildings, tools, clothing, technology.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: smartphones or traditional clothing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Non-material culture: beliefs, values, norms, language — e.g. the value placed on punctuality.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Material = objects (smartphones); non-material = ideas (values, norms, language).",
            commonErrors: [
              "Giving examples of only one type or mixing the categories.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the family acts as an agent of socialisation in shaping identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Family socialisation",
                statement:
                  "Primary agent transmitting language, values and role expectations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family is the first and most influential agent — children learn language and basic norms there.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Parents model gender, class and cultural roles — e.g. who does housework, attitudes to authority.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This early imprinting shapes core identity before other agents act.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Family transmits language, values and role models first, forming the core of identity.",
            commonErrors: [
              "Claiming identity is fixed at birth rather than socially shaped.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine the view that identity is entirely determined by socialisation.",
          parts: [
            {
              label: "a",
              prompt: "Explain two ways socialisation shapes identity.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate the role of individual agency in forming identity.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Identity formation",
                statement:
                  "Socialisation provides the framework; agency allows individual interpretation and choice.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Agents (family, school, peers, media) transmit the norms, values and role expectations of society.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Social categories — class, ethnicity, gender — position individuals and shape available identities.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Repeated reinforcement makes certain identities seem 'natural' — e.g. gender roles.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Agency: individuals reinterpret and choose — e.g. adopting a different religion, career or lifestyle.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Identities are not fixed — people negotiate, resist and change who they are.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: socialisation constrains the menu of identities, but agency selects and reshapes within it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Agents and categories shape identity. (b) Agency allows choice and change within social constraints.",
            commonErrors: [
              "Arguing identity is either fully determined or fully free — both extremes fail.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an example of material culture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A smartphone" },
              { id: "b", text: "A traditional wedding ceremony" },
              { id: "c", text: "The norm of queueing" },
              { id: "d", text: "The value of honesty" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Material culture",
                statement: "Physical objects of a society — technology, buildings, clothing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Material culture consists of physical objects; values, ceremonies and norms are non-material.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) A smartphone.",
            commonErrors: [
              "Choosing a ceremony or value — those are non-material culture.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'identity' and name one social category that shapes it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Identity",
                statement:
                  "Who a person understands themselves to be, shaped by social categories and experience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identity = an individual's sense of who they are.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Social category: class, ethnicity, gender, religion (accept any valid category).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Identity is a person's sense of self, shaped by categories such as class, ethnicity or gender.",
            commonErrors: [
              "Treating identity as fixed at birth rather than socially shaped.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A counter-culture differs from a subculture because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shares all mainstream values" },
              { id: "b", text: "Exists only online" },
              {
                id: "c",
                text: "Actively rejects dominant cultural values",
              },
              { id: "d", text: "Is always religious" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counter-culture",
                statement:
                  "A subculture that rejects dominant cultural values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Counter-cultures oppose mainstream values; subcultures share them while adding distinctive practices.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Actively rejects dominant cultural values.",
            commonErrors: [
              "Confusing counter-culture with subculture.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between 'ascribed' and 'achieved' identity, with an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ascribed vs achieved",
                statement:
                  "Ascribed = fixed at birth; achieved = earned through choices and effort.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ascribed identity is assigned at birth and cannot easily be changed — e.g. ethnicity or sex.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Achieved identity is gained through effort and choice — e.g. profession, religion adopted as an adult.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: being born into a class is ascribed; becoming a doctor is achieved.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ascribed = fixed at birth (ethnicity); achieved = earned through effort (profession).",
            commonErrors: [
              "Giving no example or using the same example for both types.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the school shapes identity through both formal and informal processes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "School and identity",
                statement:
                  "School transmits knowledge plus hidden-curriculum values and role expectations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Formally: schools teach knowledge, skills and examination success that shape life chances and identity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Informally: the hidden curriculum teaches punctuality, obedience and competition, shaping self-image.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Labelling and streaming can confirm or challenge a pupil's sense of who they are.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "School shapes identity through formal learning, hidden-curriculum values and labelling processes.",
            commonErrors: [
              "Covering only formal education and ignoring the hidden curriculum.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Subcultures within a wider culture typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exist only in traditional societies" },
              { id: "b", text: "Are identical to counter-cultures" },
              {
                id: "c",
                text: "Reject all aspects of the mainstream culture",
              },
              {
                id: "d",
                text: "Share the mainstream culture but add distinctive practices and values",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subculture",
                statement:
                  "Distinctive group within the wider culture sharing practices and values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subcultures coexist with the mainstream; counter-cultures are the ones that reject it.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Share the mainstream culture but add distinctive practices.",
            commonErrors: [
              "Confusing subculture with counter-culture.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the media contributes to the formation of identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Media and identity",
                statement:
                  "Media supply images and role models that individuals compare themselves against.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Media present idealised images of lifestyle, appearance and success that shape aspirations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Advertising and entertainment reinforce gender, class and ethnic stereotypes — or challenge them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Social media lets individuals curate and perform identities, adding a new layer of self-presentation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Media shapes identity through role models, stereotypes and the opportunity to perform chosen selves online.",
            commonErrors: [
              "Describing media influence without linking it to identity formation.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two ways in which youth subcultures can act as a source of identity and resistance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subculture and identity",
                statement:
                  "Subcultures provide belonging and a distinctive identity, sometimes resisting mainstream norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Belonging: subcultures give members a shared style, language and group membership.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Distinctive identity: adopting subcultural dress, music and values marks a person as part of a group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Resistance: subcultures can reject adult or mainstream expectations — e.g. fashion challenging conventions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-cultures go further, openly opposing dominant values and offering an alternative lifestyle.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Subcultures give belonging and distinctive identity, and can resist mainstream norms — counter-cultures resist most strongly.",
            commonErrors: [
              "Describing subcultures only negatively without noting identity benefits.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Non-material culture includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Buildings and technology" },
              { id: "b", text: "Physical artefacts only" },
              { id: "c", text: "Clothing and tools" },
              { id: "d", text: "Beliefs, values, norms and language" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-material culture",
                statement: "Ideas, beliefs, values, norms and language of a society.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Non-material = ideas and meanings; buildings, clothing and tools are material culture.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Beliefs, values, norms and language.",
            commonErrors: [
              "Mixing material objects into the non-material category.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how religious identity can be both ascribed and chosen, depending on context.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Religious identity",
                statement:
                  "Religion can be inherited at birth or adopted through personal choice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In many societies children inherit their family's religion — an ascribed identity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Individuals may also choose or change religion — an achieved identity through personal conviction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In secular societies religion is more often a chosen identity; in traditional societies it is more often inherited.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Religious identity can be inherited (ascribed) or adopted through choice (achieved), varying by society.",
            commonErrors: [
              "Treating all identity as purely ascribed or purely achieved.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which agent of socialisation is usually considered the most influential in early childhood?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The family" },
              { id: "b", text: "The media" },
              { id: "c", text: "The peer group" },
              { id: "d", text: "The workplace" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Family socialisation",
                statement:
                  "The family is the primary agent, transmitting first language and basic norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family is the first and most influential agent in early childhood.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) The family.",
            commonErrors: [
              "Overestimating later agents like peers or media in early childhood.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine the view that culture shapes identity more than individuals shape their own identity.",
          parts: [
            {
              label: "a",
              prompt: "Explain two ways culture and socialisation shape identity.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Evaluate the role of individual agency in identity formation.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Culture vs agency in identity",
                statement:
                  "Culture supplies the framework of identity; agency selects and reshapes within it.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Agents transmit the norms, values and role expectations of the culture.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Social categories — class, ethnicity, gender — position individuals and limit available identities.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Cultural symbols, language and rituals make certain identities seem 'natural' or normal.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Agency: individuals interpret, choose and change identities — e.g. adopting new religions, careers or lifestyles.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Subcultures and counter-cultures show people actively crafting identities that differ from the mainstream.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: culture constrains the 'menu' of identities but agency selects, combines and sometimes invents within it — neither fully determines identity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Culture shapes identity through agents, categories and symbols. (b) Agency allows choice and innovation within cultural limits.",
            commonErrors: [
              "Arguing one side absolutely — culture alone or agency alone — without weighing both.",
            ],
          },
        },
      ],
    },
  ],
};
