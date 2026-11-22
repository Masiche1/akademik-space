import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cieisoc-u2-lesson-2-2",
  code: "2-2",
  title: "Beliefs in society: religion and ideology",
  goal: "I CAN explain the functions of religion in society and how beliefs shape social behaviour.",
  standards: [
    "Cambridge IGCSE Sociology 0495",
    "Section 2: Culture and identity",
  ],
  vocabulary: [
    {
      term: "Religion",
      definition:
        "A system of beliefs, practices and organisations centred on the sacred or supernatural.",
    },
    {
      term: "Secularisation",
      definition:
        "The declining influence of religion in public and private life.",
    },
    {
      term: "Ideology",
      definition:
        "A system of ideas that justifies or challenges the existing social order.",
    },
    {
      term: "Social cohesion",
      definition: "The bonds that hold a society together.",
    },
    {
      term: "Fundamentalism",
      definition:
        "Strict adherence to literal religious texts and traditional values.",
    },
    {
      term: "Civil religion",
      definition:
        "Shared secular beliefs and rituals that bind a nation, e.g. national ceremonies.",
    },
  ],
  concepts: [
    {
      id: "cieisoc-u2-beliefs",
      title: "Religion and ideology in society",
      skill:
        "Explain the social functions of religion and the role of ideology.",
      lesson: {
        sections: [
          {
            heading: "Functions of religion",
            body: "Functionalists argue religion promotes **social cohesion** — shared rituals and beliefs unite members. It also provides **meaning and comfort** in suffering, reinforces **social norms** (moral codes) and can legitimate the social order. Critics note it can also divide societies along religious lines or justify inequality.",
          },
          {
            heading: "Secularisation",
            body: "Many sociologists argue religion's influence has declined in modern societies — falling attendance, religion confined to private life, science replacing religious explanations. However, religion persists in new forms (New Age, fundamentalism) and in some societies remains central — so 'secularisation' is debated rather than universally accepted.",
          },
          {
            heading: "Ideology",
            body: "An **ideology** is a body of ideas legitimising or challenging power — e.g. capitalism, socialism, nationalism, feminism. Marxists see dominant ideology as serving ruling-class interests by making inequality seem natural. Ideologies shape institutions, policy and everyday common sense — what people take for granted as 'normal'.",
          },
        ],
        keyFormulas: [
          {
            name: "Religion functions",
            statement:
              "Cohesion + meaning + moral order + legitimacy (functionalists)",
          },
          {
            name: "Ideology question",
            statement: "Whose interests does this set of ideas serve?",
          },
        ],
        workedExample: {
          problem:
            "How might a functionalist and a Marxist each view religion's role in society?",
          solution:
            "Functionalist: religion binds society through shared rituals and values. Marxist: religion is 'the opium of the people' — it dulls suffering and legitimises the inequalities that cause it.",
        },
      },
      questions: [
        {
          id: "cieisoc-u2-bel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Secularisation refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "State control of churches" },
              { id: "b", text: "The separation of church and state" },
              {
                id: "c",
                text: "The declining influence of religion in society",
              },
              { id: "d", text: "The growth of new religious movements" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secularisation",
                statement:
                  "Declining social and political influence of religion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Secularisation = religion losing influence; new religious movements and church-state separation are different concepts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) The declining influence of religion in society.",
            commonErrors: [
              "Confusing secularisation with the mere existence of multiple religions.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two functions of religion identified by functionalist sociologists.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Functionalist view of religion",
                statement:
                  "Religion maintains social order through cohesion and shared values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social cohesion: shared rituals and beliefs create bonds and a sense of collective identity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Moral regulation: religious teachings reinforce norms — e.g. prohibitions that support social order.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Meaning and comfort: religion helps individuals cope with suffering, death and uncertainty.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cohesion through shared rituals, moral regulation of behaviour, and meaning in suffering.",
            commonErrors: [
              "Listing functions without explaining how they maintain society.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by an 'ideology' and give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ideology",
                statement:
                  "A system of ideas that justifies or challenges the social order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ideology = a coherent set of beliefs about how society should be organised.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It legitimates existing arrangements (e.g. capitalism) or challenges them (e.g. socialism).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: the ideology of meritocracy suggests inequality is earned and just.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A system of ideas justifying or challenging the social order — e.g. capitalism, meritocracy, feminism.",
            commonErrors: [
              "Confusing ideology with 'brainwashing' or 'propaganda' only.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that religion is becoming less important in modern societies.",
          parts: [
            {
              label: "a",
              prompt: "Present evidence supporting secularisation.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Present evidence against secularisation and reach a judgement.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Secularisation debate",
                statement:
                  "Declining institutional religion vs persistent/new forms of belief.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Evidence: falling church attendance, religion confined to private life, science replacing religious explanations.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Government and law operate on secular principles in many societies.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Younger generations identify less with organised religion.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Against: new religious movements, fundamentalism and informal spirituality persist or grow.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Religion remains central in many non-Western societies — secularisation may be a Western pattern only.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: institutional religion declines in some societies, but belief itself has not disappeared — 'believing without belonging'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Falling attendance, privatisation, science. (b) New movements, non-Western persistence — institutional decline but not disappearance of belief.",
            commonErrors: [
              "One-sided answers ignoring either the evidence or the counter-evidence.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An ideology is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A religious ceremony" },
              { id: "b", text: "A political party" },
              { id: "c", text: "A personal hobby" },
              {
                id: "d",
                text: "A system of ideas that justifies or challenges the social order",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ideology",
                statement:
                  "A system of ideas that justifies or challenges the social order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ideology = ideas about how society should be organised; it can legitimate or challenge power.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) A system of ideas that justifies or challenges the social order.",
            commonErrors: [
              "Confusing ideology with a political party or religion.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'social cohesion' and name one way religion can promote it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social cohesion",
                statement: "The bonds that hold a society together.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social cohesion = the shared bonds, trust and solidarity uniting members of society.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Religion promotes cohesion through shared rituals, beliefs and collective identity — e.g. communal worship.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Social cohesion is the bonds uniting society; religion promotes it through shared rituals and beliefs.",
            commonErrors: [
              "Naming religion's function without defining social cohesion.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how religion can provide 'meaning and comfort' in times of suffering.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Religion and meaning",
                statement:
                  "Religious beliefs explain suffering and promise hope beyond it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Religion offers explanations for suffering — e.g. divine purpose or testing — making pain intelligible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It promises comfort — an afterlife or divine justice — making present hardship bearable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Communal rituals and support give individuals emotional strength and a sense of not facing suffering alone.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Religion gives meaning to suffering, promises comfort beyond it, and provides communal support.",
            commonErrors: [
              "Describing the claim without explaining the mechanism.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a dominant ideology can make social inequality seem 'natural' or 'fair'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ideology and legitimacy",
                statement:
                  "Dominant ideas frame existing arrangements as normal and just.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ideology shapes 'common sense' — what people take for granted as normal ways of organising society.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ideas like meritocracy suggest inequality results from effort and talent, not structural advantage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Once inequality is seen as 'earned', it appears legitimate and is rarely challenged.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dominant ideology frames inequality as natural or earned, making it seem legitimate and unquestioned.",
            commonErrors: [
              "Describing ideology as mere propaganda rather than shaping common sense.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fundamentalism is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The blending of many faiths" },
              {
                id: "b",
                text: "Strict adherence to literal religious texts and traditional values",
              },
              { id: "c", text: "A political ideology only" },
              { id: "d", text: "A rejection of all religion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fundamentalism",
                statement:
                  "Strict adherence to literal religious texts and traditional values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fundamentalism = literal, traditional religious adherence; it can resist secularisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Strict adherence to literal religious texts and traditional values.",
            commonErrors: [
              "Confusing fundamentalism with secularism or atheism.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by 'civil religion' and give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Civil religion",
                statement:
                  "Shared secular beliefs and rituals that bind a nation together.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Civil religion = non-religious beliefs, symbols and rituals that create national unity — e.g. flags, anthems, national days.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It functions like religion socially — creating cohesion and shared identity without theological doctrine.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: national ceremonies, memorial days or pledges that unite citizens across different faiths.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Civil religion is shared secular ritual and belief binding a nation — e.g. national ceremonies and symbols.",
            commonErrors: [
              "Confusing civil religion with organised religion.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is evidence used to support the secularisation thesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Falling attendance at churches" },
              { id: "b", text: "The rise of fundamentalism" },
              { id: "c", text: "Religion remaining central in some societies" },
              {
                id: "d",
                text: "The growth of new religious movements",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Secularisation evidence",
                statement:
                  "Declining attendance, privatisation of religion, scientific explanation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Falling attendance supports secularisation; the other options are counter-evidence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Falling attendance at churches.",
            commonErrors: [
              "Choosing counter-evidence rather than evidence for secularisation.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the Marxist view of religion as 'the opium of the people'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist view of religion",
                statement:
                  "Religion eases the pain of inequality and legitimises the existing order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Religion offers comfort and meaning in suffering, numbing awareness of exploitation — like a drug.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It promises reward in the afterlife, discouraging challenges to class inequality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Marxists argue religion is produced by the material conditions of society and serves ruling-class interests.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Religion dulls suffering caused by inequality and legitimises the order — 'opium of the people'.",
            commonErrors: [
              "Presenting the quote as a positive view of religion.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement best describes 'believing without belonging'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Governments ban religious practice" },
              { id: "b", text: "People hold religious beliefs but do not attend religious organisations" },
              { id: "c", text: "People leave all religions entirely" },
              { id: "d", text: "People join many churches at once" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Believing without belonging",
                statement:
                  "Maintaining personal beliefs while not participating in organised religion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The phrase describes declining institutional participation alongside persistent private belief — a middle position in the secularisation debate.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) People hold religious beliefs but do not attend religious organisations.",
            commonErrors: [
              "Confusing it with complete loss of belief.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways religion can reinforce social norms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Religion and norms",
                statement:
                  "Religious teachings define right and wrong, guiding behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Moral codes: religious teachings define right and wrong — e.g. prohibitions on theft or dishonesty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sanctions and rituals: religious communities reward conformity and censure deviance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Moral codes defining right and wrong, and community sanctions rewarding conformity.",
            commonErrors: [
              "Naming functions of religion generally without linking to norm reinforcement.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why sociologists debate whether secularisation is happening.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Secularisation debate",
                statement:
                  "Evidence of decline vs evidence of persistence and new forms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence for: falling attendance, religion moving to private life, science offering alternative explanations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence against: new religious movements, fundamentalism and informal spirituality persist or grow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The pattern varies by society — secularisation may describe Western Europe but not all countries.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The debate continues because institutional religion declines in some societies while belief persists or transforms in others.",
            commonErrors: [
              "Treating secularisation as universally accepted or universally rejected.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine the view that religion in modern societies mainly creates division rather than unity.",
          parts: [
            {
              label: "a",
              prompt: "Explain how religion can promote social cohesion.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate the claim that religion mainly divides societies, reaching a judgement.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Religion: cohesion vs division",
                statement:
                  "Religion can unite through shared ritual or divide along faith lines and justify inequality.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Shared rituals and beliefs create collective identity and social bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Religious moral codes reinforce shared norms, supporting social order.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Religious communities provide support networks and meaning, strengthening social ties.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Religion divides: religious differences fuel conflict, sectarian tension and discrimination.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Critics note religion can justify inequality or be used to legitimise the powerful.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: religion's effect depends on context — it can unite or divide; neither claim is absolute.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Cohesion via shared ritual, morals and community. (b) Religion can also divide — effect depends on context.",
            commonErrors: [
              "One-sided answers ignoring either cohesion or division.",
            ],
          },
        },
      ],
    },
  ],
};
