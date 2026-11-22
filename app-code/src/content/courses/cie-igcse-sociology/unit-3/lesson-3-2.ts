import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cieisoc-u3-lesson-3-2",
  code: "3-2",
  title: "Socialisation and agencies of socialisation",
  goal: "I CAN explain primary and secondary socialisation and evaluate the agencies involved.",
  standards: [
    "Cambridge IGCSE Sociology 0495",
    "Section 3: Socialisation, agencies of socialisation, and deviance",
  ],
  vocabulary: [
    {
      term: "Primary socialisation",
      definition:
        "The first stage of socialisation, usually in the family, during early childhood.",
    },
    {
      term: "Secondary socialisation",
      definition:
        "Socialisation continuing beyond childhood through school, peers, media and work.",
    },
    {
      term: "Agency of socialisation",
      definition:
        "An institution or group that transmits norms and values — family, school, peers, media.",
    },
    {
      term: "Resocialisation",
      definition:
        "Re-learning norms and values to fit a new role or institution, e.g. entering prison or marriage.",
    },
    {
      term: "Anticipatory socialisation",
      definition:
        "Adopting the norms and values of a role before actually taking it on.",
    },
    {
      term: "Internalisation",
      definition:
        "Accepting society's norms and values as one's own, guiding behaviour unconsciously.",
    },
    {
      term: "Gender socialisation",
      definition:
        "Learning the norms and expectations associated with being male or female.",
    },
    {
      term: "Reference group",
      definition:
        "A group an individual uses as a standard for self-evaluation and behaviour.",
    },
    {
      term: "Total institution",
      definition:
        "An institution controlling all aspects of life, e.g. prison, monastery, boarding school.",
    },
    {
      term: "Hidden curriculum",
      definition:
        "The unofficial lessons and values pupils learn at school beyond formal subjects.",
    },
  ],
  concepts: [
    {
      id: "cieisoc-u3-s-process",
      title: "The socialisation process",
      skill: "Explain how individuals learn norms and values.",
      lesson: {
        sections: [
          {
            heading: "Primary socialisation",
            body: "**Primary socialisation** happens in early childhood, mainly through the **family**. Children learn language, basic norms (e.g. saying please), values (e.g. honesty) and gender roles. By about age 5 they have internalised core society values. This stage is crucial — failure here can lead to later deviance because the individual never absorbed society's basic rules.",
          },
          {
            heading: "Secondary socialisation",
            body: "**Secondary socialisation** continues through life as people encounter new roles and institutions: school, peer groups, media, religion, and work. Each transmits additional norms and values. For example, school teaches punctuality and obedience; work teaches professional behaviour. Secondary socialisation can also challenge primary values — e.g. peer pressure may contradict family teaching.",
          },
          {
            heading: "Key concepts",
            body: "**Internalisation** means norms become part of the self — we obey because we believe, not because we're forced. **Resocialisation** is needed when entering institutions with radically different norms (prisons, religious orders). **Anticipatory socialisation** means preparing for a future role — e.g. medical students adopting doctor-like behaviour before qualifying.",
          },
        ],
        keyFormulas: [
          {
            name: "Primary",
            statement: "Early childhood · family · core norms & values",
          },
          {
            name: "Secondary",
            statement: "Later life · school, peers, media, work",
          },
          {
            name: "Resocialisation",
            statement: "Re-learning norms for a new role/institution",
          },
        ],
        workedExample: {
          problem:
            "A child raised in a strict religious family joins a liberal university. Explain the socialisation processes involved.",
          solution:
            "Primary socialisation (family) instilled religious norms. University represents secondary socialisation — peers and staff transmit new values, potentially causing tension until the student resocialises to fit the new environment.",
        },
      },
      questions: [
        {
          id: "cieisoc-u3-s1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Primary socialisation mainly takes place:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At university" },
              { id: "b", text: "Only at work" },
              { id: "c", text: "In old age" },
              { id: "d", text: "In early childhood within the family" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary socialisation",
                statement: "First stage, in early childhood, mainly through family.",
              },
            ],
            steps: [
              {
                reasoning: "Primary socialisation occurs in early childhood via family.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) In early childhood within the family.",
          },
        },
        {
          id: "cieisoc-u3-s1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Secondary socialisation refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forgetting what you learned" },
              { id: "b", text: "Learning only from parents" },
              { id: "c", text: "The first stage of learning" },
              { id: "d", text: "Learning norms through school, peers, media and work after childhood" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary socialisation",
                statement: "Continued learning of norms through later institutions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Secondary socialisation happens after childhood via various agencies.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Learning norms through later institutions.",
          },
        },
        {
          id: "cieisoc-u3-s1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An agency of socialisation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of punishment" },
              { id: "b", text: "An institution or group that transmits norms and values" },
              { id: "c", text: "A sociological theory" },
              { id: "d", text: "A government department" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Agency of socialisation",
                statement: "Institution transmitting norms/values (family, school, peers, media).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Agencies are the agents/institutions of socialisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Institution transmitting norms and values.",
          },
        },
        {
          id: "cieisoc-u3-s1-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Internalisation means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Teaching others" },
              { id: "b", text: "Forgetting social rules" },
              { id: "c", text: "Being forced to obey rules" },
              { id: "d", text: "Accepting society's norms as part of one's own identity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internalisation",
                statement: "Norms become part of the self, guiding behaviour unconsciously.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Internalisation means norms are absorbed into the self.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Accepting norms as part of identity.",
          },
        },
        {
          id: "cieisoc-u3-s1-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Resocialisation is required when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Being born" },
              { id: "b", text: "Entering an institution with very different norms, e.g. prison" },
              { id: "c", text: "Learning to talk" },
              { id: "d", text: "Starting primary school" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Resocialisation",
                statement: "Re-learning norms for a new role/institution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Resocialisation is needed when norms change radically.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Entering institution with different norms.",
          },
        },
        {
          id: "cieisoc-u3-s1-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Anticipatory socialisation means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rejecting all roles" },
              { id: "b", text: "Socialising before work" },
              { id: "c", text: "Forgetting old roles" },
              { id: "d", text: "Adopting the norms of a future role before taking it on" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anticipatory socialisation",
                statement: "Preparing for a future role by adopting its norms early.",
              },
            ],
            steps: [
              {
                reasoning:
                  "People prepare for roles before formally occupying them.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Adopting future role's norms early.",
          },
        },
        {
          id: "cieisoc-u3-s1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the main agency of primary socialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The media" },
              { id: "b", text: "The family" },
              { id: "c", text: "The workplace" },
              { id: "d", text: "The government" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family as primary agency",
                statement: "Family is the main agent of primary socialisation.",
              },
            ],
            steps: [
              {
                reasoning: "The family dominates early childhood socialisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) The family.",
          },
        },
        {
          id: "cieisoc-u3-s1-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'total institution' is one that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Controls all aspects of an individual's life" },
              { id: "b", text: "Is run by the state" },
              { id: "c", text: "Is voluntary" },
              { id: "d", text: "Only teaches academic subjects" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Total institution",
                statement: "Institution controlling all aspects of life (prison, monastery).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total institutions regulate every aspect of daily life.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Controls all aspects of life.",
          },
        },
        {
          id: "cieisoc-u3-s1-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'hidden curriculum' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The official exam syllabus" },
              { id: "b", text: "Unofficial lessons and values pupils absorb at school" },
              { id: "c", text: "A secret school timetable" },
              { id: "d", text: "Religious education" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hidden curriculum",
                statement: "Unofficial values/lessons learned at school.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hidden curriculum = informal lessons beyond formal subjects.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Unofficial lessons learned at school.",
          },
        },
        {
          id: "cieisoc-u3-s1-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define primary socialisation and state the main agency responsible.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary socialisation",
                statement: "First stage of learning norms, mainly via family in childhood.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Primary socialisation is the first stage in early childhood.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The family is the main agency responsible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "First stage in childhood; mainly the family.",
          },
        },
        {
          id: "cieisoc-u3-s1-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one example of anticipatory socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anticipatory socialisation",
                statement: "Preparing for a future role before taking it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Example: medical students adopting professional behaviour before qualifying.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Or: teenagers dressing/acting like adults before leaving home.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "E.g. medical students acting like doctors before qualifying.",
          },
        },
        {
          id: "cieisoc-u3-s1-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why primary socialisation is considered more important than secondary socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Primary importance",
                statement: "Core values learned early shape all later behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Primary socialisation establishes basic norms, language and values.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "These become deeply internalised and hard to change later.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Secondary socialisation builds on this foundation rather than replacing it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Primary sets the foundation; secondary builds on it — core values are learned early.",
          },
        },
        {
          id: "cieisoc-u3-s1-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A prisoner enters a maximum-security prison. Explain the socialisation processes involved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Institutional socialisation",
                statement: "Total institutions require resocialisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prison is a total institution controlling all aspects of life.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The prisoner must undergo resocialisation to learn prison norms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This may involve a 'prison code' that contradicts outside values.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "On release, the ex-prisoner must resocialise again to outside norms — hard after long sentences.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Resocialisation to prison norms, then again to outside norms on release.",
          },
        },
        {
          id: "cieisoc-u3-s1-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Gender socialisation refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Biological differences" },
              { id: "b", text: "Learning the norms and expectations of being male or female" },
              { id: "c", text: "Choosing one's gender" },
              { id: "d", text: "A type of punishment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gender socialisation",
                statement: "Learning norms/expectations of masculinity/femininity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gender socialisation is learning culturally defined gender roles.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Learning gender norms and expectations.",
          },
        },
        {
          id: "cieisoc-u3-s1-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two things children learn through primary socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Primary socialisation content",
                statement: "Language, basic norms, values, gender roles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Language and basic social skills (e.g. politeness).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Core values (honesty, sharing) and gender roles.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Language/skills and core values/gender roles.",
          },
        },
        {
          id: "cieisoc-u3-s1-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT an agency of secondary socialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The family in infancy" },
              { id: "b", text: "School" },
              { id: "c", text: "Peer group" },
              { id: "d", text: "Media" },
            ],
            correctChoiceIa: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secondary agencies",
                statement: "School, peers, media, work — after childhood.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family in infancy is primary, not secondary socialisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(d) The family in infancy.",
          },
        },
        {
          id: "cieisoc-u3-s1-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'reference group' and why does it matter for socialisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reference group",
                statement: "Group used as a standard for self-evaluation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "People compare themselves to reference groups (e.g. friends, celebrities).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reference groups transmit norms and shape aspirations/behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A comparison group; shapes norms, aspirations and behaviour.",
          },
        },
        {
          id: "cieisoc-u3-s1-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the media acts as an agency of socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media as agency",
                statement: "Media transmits norms, values and role models.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Media presents images of acceptable behaviour, lifestyles and roles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It reinforces gender, class and cultural norms through content.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Young people especially may imitate media role models.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Media transmits norms and role models, especially influencing young people.",
          },
        },
        {
          id: "cieisoc-u3-s1-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the role of the family and the school as agencies of socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agency comparison",
                statement: "Family = primary/emotional; school = secondary/formal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family: primary socialisation, emotional bonds, early values.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Family transmits class, religion and basic norms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "School: secondary socialisation, formal curriculum, hidden curriculum.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "School teaches citizenship, punctuality and wider social roles.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Family = primary, emotional, early values; school = secondary, formal, citizenship.",
          },
        },
        {
          id: "cieisoc-u3-s1-q20",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which stage of socialisation happens first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Primary" },
              { id: "b", text: "Resocialisation" },
              { id: "c", text: "Secondary" },
              { id: "d", text: "Anticipatory" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Socialisation order",
                statement: "Primary precedes secondary.",
              },
            ],
            steps: [
              {
                reasoning: "Primary socialisation occurs in early childhood first.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Primary.",
          },
        },
        {
          id: "cieisoc-u3-s1-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two differences between primary and secondary socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Primary vs secondary",
                statement: "Timing, agency, content differ.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Primary = early childhood/family; secondary = later/school, peers, media.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Primary teaches basic norms; secondary adds roles and wider society values.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Timing (childhood vs later) and content (basic vs wider roles).",
          },
        },
        {
          id: "cieisoc-u3-s1-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how peer groups act as an agency of socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer group socialisation",
                statement: "Peers transmit norms through friendship and pressure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Peer groups provide belonging and shared norms/values.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Peer pressure encourages conformity to group standards.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Peer influence often peaks in adolescence, shaping identity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Peers transmit norms via belonging and pressure, especially in adolescence.",
          },
        },
        {
          id: "cieisoc-u3-s1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A child is raised by a single parent in poverty. Explain how different agencies of socialisation might affect this child's development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiple agencies",
                statement: "Different agencies transmit different norms and resources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family: may provide strong emotional bonds but limited material resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "School: may offer different norms and opportunities (or reinforce disadvantage).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Peers: may provide belonging but also transmit deviant norms if disadvantaged.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Media: may transmit aspirational values the child cannot access.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Agencies transmit different norms/resources; outcomes depend on interactions.",
          },
        },
        {
          id: "cieisoc-u3-s1-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which agency is MOST influential in primary socialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The workplace" },
              { id: "b", text: "The internet" },
              { id: "c", text: "The family" },
              { id: "d", text: "The media" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family dominance",
                statement: "Family dominates early socialisation.",
              },
            ],
            steps: [
              {
                reasoning: "The family is the primary agency in early childhood.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) The family.",
          },
        },
        {
          id: "cieisoc-u3-s1-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'role' in sociology?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Role",
                statement: "Expected behaviours attached to a social position.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A role is the set of expected behaviours for a position (e.g. student, parent).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "We learn roles through socialisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Expected behaviours for a social position; learned via socialisation.",
          },
        },
        {
          id: "cieisoc-u3-s1-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a school functions as an agency of socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "School socialisation",
                statement: "Formal and hidden curricula transmit norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Formal curriculum teaches subjects and skills.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hidden curriculum teaches punctuality, obedience, competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "School prepares children for adult/work roles and citizenship.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "School teaches formal subjects plus hidden values like punctuality and citizenship.",
          },
        },
        {
          id: "cieisoc-u3-s1-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of secondary socialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A teenager learning workplace dress codes" },
              { id: "b", text: "A toddler learning to say 'please'" },
              { id: "c", text: "A newborn bonding with mother" },
              { id: "d", text: "An infant learning language" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secondary example",
                statement: "Workplace norms are secondary socialisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Learning workplace norms happens after childhood — secondary.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Teenager learning workplace dress codes.",
          },
        },
        {
          id: "cieisoc-u3-s1-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might secondary socialisation sometimes contradict primary socialisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agency conflict",
                statement: "Different agencies may transmit different values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family and peers/media may promote different norms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This creates tension as individuals navigate conflicting expectations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Agencies transmit different values, creating conflict.",
          },
        },
        {
          id: "cieisoc-u3-s1-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that the family is the most important agency of socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family importance debate",
                statement: "Family dominates early but other agencies matter later.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family is primary — sets foundation in early childhood.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But school, peers and media increasingly shape identity in adolescence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Some argue media now rivals family in influence on young people.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Family remains crucial for emotional bonds and early values, but not sole influence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Family is foundational but not sole; other agencies gain influence later.",
          },
        },
        {
          id: "cieisoc-u3-s1-q30",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Resocialisation is most needed when entering:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A new job" },
              { id: "b", text: "A new house" },
              { id: "c", text: "A prison" },
              { id: "d", text: "A new school" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resocialisation context",
                statement: "Total institutions require resocialisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prisons have radically different norms requiring resocialisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) A prison.",
          },
        },
        {
          id: "cieisoc-u3-s1-q31",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'prison code' and how does it relate to resocialisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prison code",
                statement: "Informal rules prisoners follow — often anti-authority.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The prison code is the informal norm system prisoners adopt.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It often contradicts outside values, making release resocialisation hard.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Prisoners' informal rules; often conflict with outside norms.",
          },
        },
        {
          id: "cieisoc-u3-s1-q32",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how gender roles are learned through socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gender socialisation",
                statement: "Children learn gender-appropriate behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family reinforces gender roles through toys, chores and expectations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Media and peers further reinforce gender norms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Children internalise these as 'natural' through socialisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Gender roles learned via family, media and peers; internalised as natural.",
          },
        },
        {
          id: "cieisoc-u3-s1-q33",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A teenager from a strict religious family joins a liberal peer group. Explain the socialisation conflict and possible outcomes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Socialisation conflict",
                statement: "Competing agencies transmit different values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family (primary) instilled religious norms; peers transmit liberal values.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This creates tension as the teenager navigates conflicting expectations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Possible outcomes: conform to peers, maintain family values, or blend both.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Identity may be shaped by which agency the individual identifies with most.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Competing agencies create tension; outcome depends on which norms are internalised.",
          },
        },
        {
          id: "cieisoc-u3-s1-q34",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of anticipatory socialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An adult forgetting old habits" },
              { id: "b", text: "A law student acting like a lawyer before qualifying" },
              { id: "c", text: "A child learning to walk" },
              { id: "d", text: "A prisoner entering prison" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anticipatory socialisation",
                statement: "Preparing for future role early.",
              },
            ],
            steps: [
              {
                reasoning: "Law students preparing for professional role = anticipatory.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Law student acting like a lawyer.",
          },
        },
        {
          id: "cieisoc-u3-s1-q35",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the media increasingly seen as an important agency of socialisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media importance",
                statement: "Media reaches young people extensively.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Young people spend more time with media than ever before.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Media presents role models and values that shape identity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Media's extensive reach and role-model influence make it increasingly important.",
          },
        },
        {
          id: "cieisoc-u3-s1-q36",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the concept of 'role strain' and how socialisation relates to it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Role strain",
                statement: "Difficulty meeting competing role demands.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Role strain occurs when one role has too many demands.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Role conflict occurs when two roles demand incompatible behaviours.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Socialisation teaches which roles to prioritise and how to manage them.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Role strain = too many demands; socialisation teaches role management.",
          },
        },
        {
          id: "cieisoc-u3-s1-q37",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that social media is now the most powerful agency of socialisation for teenagers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media vs family debate",
                statement: "Influence depends on context and age.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social media reaches teenagers constantly and shapes peer norms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But family still provides foundational values and emotional bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "School and peers also remain influential for older teenagers.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Media influence varies by individual and context — not universally dominant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Social media is powerful but not universally dominant; family and peers still matter.",
          },
        },
        {
          id: "cieisoc-u3-s1-q38",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which agency of socialisation is most associated with the 'hidden curriculum'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The media" },
              { id: "b", text: "The school" },
              { id: "c", text: "The family" },
              { id: "d", text: "The workplace" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hidden curriculum",
                statement: "Unofficial lessons learned at school.",
              },
            ],
            steps: [
              {
                reasoning: "Hidden curriculum is specific to schooling.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) The school.",
          },
        },
        {
          id: "cieisoc-u3-s1-q39",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'conformity' in socialisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conformity",
                statement: "Adjusting behaviour to match group norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Conformity means behaving according to group expectations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Socialisation promotes conformity through rewards and sanctions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Adjusting to group norms; promoted through socialisation.",
          },
        },
        {
          id: "cieisoc-u3-s1-q40",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a study to investigate which agency of socialisation teenagers say is most influential. Justify your method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research design",
                statement: "Method must suit the research question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use structured questionnaire with Likert scale on influence of each agency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stratified sample of teenagers by age, gender, background.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Include open question for reasons behind choices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Justify: quantifies perceptions across large sample while capturing reasons.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Questionnaire with Likert scale + open question; stratified sample; captures breadth and reasons.",
          },
        },
        {
          id: "cieisoc-u3-s1-q41",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a total institution be effective at resocialising inmates?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Total institution power",
                statement: "Control of all life aspects enables deep resocialisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total control removes outside influences, enforcing new norms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But this may produce superficial compliance, not genuine internalisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Total control enforces new norms but may not produce genuine change.",
          },
        },
        {
          id: "cieisoc-u3-s1-q42",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a military boot camp resocialises recruits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Military resocialisation",
                statement: "Institutions replace civilian norms with military ones.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recruits' civilian identities are stripped away (haircuts, uniforms).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "New norms of discipline, obedience and collective identity are imposed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is resocialisation — replacing old norms with military ones.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Boot camps strip civilian identity and impose military norms — resocialisation.",
          },
        },
        {
          id: "cieisoc-u3-s1-q43",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the functionalist view that socialisation is necessary for social order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist view",
                statement: "Socialisation maintains consensus and order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Functionalists argue socialisation teaches shared norms → social cohesion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without it, individuals would not know how to behave — chaos.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Critics argue it can reproduce inequality — dominant group norms imposed.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Also ignores individual agency and resistance to norms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Socialisation maintains order (functionalist) but may reproduce inequality (critical view).",
          },
        },
        {
          id: "cieisoc-u3-s1-q44",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a stage of socialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resocialisation" },
              { id: "b", text: "Secondary" },
              { id: "c", text: "Tertiary" },
              { id: "d", text: "Primary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Socialisation stages",
                statement: "Primary, secondary, resocialisation — no 'tertiary'.",
              },
            ],
            steps: [
              {
                reasoning: "Tertiary is not a standard stage of socialisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) Tertiary.",
          },
        },
        {
          id: "cieisoc-u3-s1-q45",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'role conflict' and give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Role conflict",
                statement: "When two roles demand incompatible behaviours.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It occurs when roles require contradictory actions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: a parent asked to work overtime conflicts with childcare role.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Incompatible role demands; e.g. work vs childcare conflict.",
          },
        },
        {
          id: "cieisoc-u3-s1-q46",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the workplace acts as an agency of socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Workplace socialisation",
                statement: "Work transmits professional and adult norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Work teaches punctuality, discipline and professional behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It transmits class and status norms of the occupation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Workplace culture shapes adult identity and values.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Work teaches professional norms, discipline and occupational identity.",
          },
        },
        {
          id: "cieisoc-u3-s1-q47",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically assess the Marxist view that socialisation reproduces class inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist view",
                statement: "Socialisation reproduces capitalist relations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Marxists argue schools teach obedience and acceptance of hierarchy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This prepares workers for exploitation — reproducing class structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Family transmits class-based values and expectations.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Critics argue individuals can resist and socialisation is not deterministic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Socialisation may reproduce class inequality, but individuals retain agency.",
          },
        },
        {
          id: "cieisoc-u3-s1-q48",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The family is considered the main agency of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Secondary socialisation only" },
              { id: "b", text: "Primary socialisation" },
              { id: "c", text: "Deviance" },
              { id: "d", text: "Resocialisation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family role",
                statement: "Family = primary socialisation agency.",
              },
            ],
            steps: [
              {
                reasoning: "The family dominates primary socialisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Primary socialisation.",
          },
        },
        {
          id: "cieisoc-u3-s1-q49",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a religious community be considered a total institution?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Total institution",
                statement: "Controls all aspects of life.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Monastic orders control daily routines, dress, diet and beliefs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Members' entire lives are regulated by the institution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Religious orders control all aspects of members' lives.",
          },
        },
        {
          id: "cieisoc-u3-s1-q50",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that children are 'blank slates' shaped entirely by socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Blank slate debate",
                statement: "Nature vs nurture in socialisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Socialisation clearly shapes behaviour — norms are learned.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But children have innate temperaments and predispositions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Individual agency allows resistance to socialising influences.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Best view: interaction of nature, nurture and agency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Children are shaped by socialisation but also have innate traits and agency.",
          },
        },
      ],
    },
    {
      id: "cieisoc-u3-s-agencies",
      title: "Agencies of socialisation in detail",
      skill:
        "Evaluate the family, school, peer group and media as agencies of socialisation.",
      lesson: {
        sections: [
          {
            heading: "The family",
            body: "The family is the **primary agency** — transmitting class, religion, language and basic values. Functionalists see it as essential for social stability; Marxists argue it reproduces class inequality. Different family types (nuclear, extended, single-parent) socialise children differently.",
          },
          {
            heading: "School and peers",
            body: "**School** provides formal education plus the **hidden curriculum** (punctuality, obedience, competition). It can reinforce or challenge family values. **Peer groups** become crucial in adolescence — providing identity, belonging and often overriding family influence.",
          },
          {
            heading: "Media",
            body: "The **media** (TV, social media, advertising) presents role models and normalises certain behaviours and values. It can reinforce stereotypes or challenge them. Its influence is debated — some argue it rivals family and school, others say context matters.",
          },
        ],
        keyFormulas: [
          {
            name: "Family",
            statement: "Primary · class, religion, basic values",
          },
          {
            name: "School",
            statement: "Secondary · formal + hidden curriculum",
          },
          {
            name: "Peers",
            statement: "Adolescence · identity, belonging, pressure",
          },
          {
            name: "Media",
            statement: "All ages · role models, norms, values",
          },
        ],
        workedExample: {
          problem:
            "Compare how family and media might socialise a child differently.",
          solution:
            "Family provides direct, personal values and emotional bonds. Media provides indirect, mass-produced images that may contradict family values — creating tension the child must resolve.",
        },
      },
      questions: [
        {
          id: "cieisoc-u3-s2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which family type is traditionally called 'nuclear'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unrelated adults sharing a house" },
              { id: "b", text: "Parents and dependent children only" },
              { id: "c", text: "A single parent and child" },
              { id: "d", text: "Three generations living together" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nuclear family",
                statement: "Parents and dependent children.",
              },
            ],
            steps: [
              {
                reasoning: "Nuclear family = parents + children.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Parents and dependent children.",
          },
        },
        {
          id: "cieisoc-u3-s2-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An extended family includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unrelated friends" },
              { id: "b", text: "Only parents and children" },
              { id: "c", text: "Only one parent" },
              { id: "d", text: "Relatives beyond the nuclear family living together or nearby" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Extended family",
                statement: "Nuclear family plus other relatives.",
              },
            ],
            steps: [
              {
                reasoning: "Extended families include grandparents, aunts, uncles etc.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Relatives beyond nuclear family.",
          },
        },
        {
          id: "cieisoc-u3-s2-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "The hidden curriculum at school teaches:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing beyond the syllabus" },
              { id: "b", text: "Unofficial values like punctuality and obedience" },
              { id: "c", text: "Only academic subjects" },
              { id: "d", text: "Sports skills only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hidden curriculum",
                statement: "Unofficial values learned at school.",
              },
            ],
            steps: [
              {
                reasoning: "Hidden curriculum = informal lessons beyond subjects.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Unofficial values like punctuality.",
          },
        },
        {
          id: "cieisoc-u3-s2-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Peer pressure is strongest during:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adolescence" },
              { id: "b", text: "Early childhood" },
              { id: "c", text: "Old age" },
              { id: "d", text: "Infancy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer influence timing",
                statement: "Peer pressure peaks in adolescence.",
              },
            ],
            steps: [
              {
                reasoning: "Adolescence is when peer influence is strongest.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Adolescence.",
          },
        },
        {
          id: "cieisoc-u3-s2-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "The media can act as an agency of socialisation by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only entertaining" },
              { id: "b", text: "Replacing all other agencies" },
              { id: "c", text: "Presenting role models and normalising certain behaviours" },
              { id: "d", text: "Forcing people to watch" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media socialisation",
                statement: "Media presents role models and normalises behaviours.",
              },
            ],
            steps: [
              {
                reasoning: "Media transmits norms through content and role models.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Presenting role models and normalising behaviours.",
          },
        },
        {
          id: "cieisoc-u3-s2-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Functionalists argue the family is essential because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replaces the state" },
              { id: "b", text: "Produces goods" },
              { id: "c", text: "Controls the economy" },
              { id: "d", text: "Socialises children and stabilises society" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist family",
                statement: "Family socialises and stabilises society.",
              },
            ],
            steps: [
              {
                reasoning: "Functionalists see family as key to social stability.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Socialises children and stabilises society.",
          },
        },
        {
          id: "cieisoc-u3-s2-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Marxists argue the family reproduces class inequality by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eliminating inequality" },
              { id: "b", text: "Ignoring social class" },
              { id: "c", text: "Transmitting class-based values and resources to children" },
              { id: "d", text: "Being equally fair to all" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist family",
                statement: "Family reproduces class structure.",
              },
            ],
            steps: [
              {
                reasoning: "Family transmits class advantages/disadvantages.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Transmitting class-based values and resources.",
          },
        },
        {
          id: "cieisoc-u3-s2-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A single-parent family may socialise children differently because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Children are identical" },
              { id: "b", text: "It has no effect" },
              { id: "c", text: "There is only one parental role model and possibly fewer resources" },
              { id: "d", text: "It is always better" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family structure effect",
                statement: "Different structures transmit different experiences.",
              },
            ],
            steps: [
              {
                reasoning: "One parent = one role model and possibly fewer resources.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) One role model, possibly fewer resources.",
          },
        },
        {
          id: "cieisoc-u3-s2-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which agency has become MORE influential in recent decades?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The extended family" },
              { id: "b", text: "The media and social media" },
              { id: "c", text: "Local communities" },
              { id: "d", text: "Religious institutions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media growth",
                statement: "Media influence has grown with technology.",
              },
            ],
            steps: [
              {
                reasoning: "Digital media has expanded dramatically.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) The media and social media.",
          },
        },
        {
          id: "cieisoc-u3-s2-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways the family acts as an agency of socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family socialisation",
                statement: "Transmits values, language, roles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Teaches language, basic norms and values in early childhood.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Transmits class, religion and gender role expectations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Basic norms/language and class/religion/gender values.",
          },
        },
        {
          id: "cieisoc-u3-s2-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one strength and one weakness of the school as an agency of socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "School evaluation",
                statement: "Teaches skills but may reproduce inequality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: teaches knowledge, skills and prepares for adult roles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: hidden curriculum may reinforce class/gender inequalities.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Teaches skills; but hidden curriculum may reinforce inequality.",
          },
        },
        {
          id: "cieisoc-u3-s2-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how peer groups can both help and hinder socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer group dual role",
                statement: "Peers provide belonging but may transmit deviance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Help: provide belonging, identity and social skills.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hinder: may transmit deviant norms or pressure conformity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Effect depends on the group's values and the individual's position.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Peers provide belonging but may also transmit deviant norms.",
          },
        },
        {
          id: "cieisoc-u3-s2-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the influence of family and media on the socialisation of children.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family vs media",
                statement: "Direct personal influence vs mass media influence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family: direct, personal, emotional bonds; primary socialisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Family transmits class, religion and specific values.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Media: indirect, mass-produced images; may contradict family values.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Media influence grows with screen time but lacks personal relationship.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Family = direct personal influence; media = indirect mass influence, growing in importance.",
          },
        },
        {
          id: "cieisoc-u3-s2-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which family structure provides the most diverse role models?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Single-parent family" },
              { id: "b", text: "Extended family" },
              { id: "c", text: "Nuclear family" },
              { id: "d", text: "Childless couple" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Extended family advantage",
                statement: "More relatives = more role models.",
              },
            ],
            steps: [
              {
                reasoning: "Extended families include grandparents, aunts, uncles.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Extended family.",
          },
        },
        {
          id: "cieisoc-u3-s2-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two criticisms of the functionalist view of the family.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist critique",
                statement: "Ignores conflict, diversity and change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ignores family diversity — not all families are nuclear/harmonious.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ignores conflict within families and power imbalances.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ignores diversity and internal conflict; assumes harmony.",
          },
        },
        {
          id: "cieisoc-u3-s2-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the most influential agency during adolescence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "School" },
              { id: "b", text: "Family" },
              { id: "c", text: "Peer group" },
              { id: "d", text: "Workplace" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer dominance in adolescence",
                statement: "Peers dominate socialisation in adolescence.",
              },
            ],
            steps: [
              {
                reasoning: "Peer influence peaks in adolescence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Peer group.",
          },
        },
        {
          id: "cieisoc-u3-s2-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'role modelling' in socialisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Role modelling",
                statement: "Learning by imitating observed behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "People copy behaviours of those they admire or identify with.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Parents, peers and media figures all serve as role models.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Learning by imitating role models' behaviour.",
          },
        },
        {
          id: "cieisoc-u3-s2-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the media can reinforce gender stereotypes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media and gender",
                statement: "Media representations shape gender norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Media often portrays men and women in stereotyped roles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Repeated exposure normalises these stereotypes for audiences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Children may imitate these representations, reinforcing gender roles.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stereotyped portrayals normalise gender roles through repeated exposure.",
          },
        },
        {
          id: "cieisoc-u3-s2-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A child is raised by grandparents because parents work abroad. Evaluate how this might affect socialisation compared to a nuclear family.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Alternative care socialisation",
                statement: "Different caregivers transmit different values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Grandparents may provide stability but different values/generation gap.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lack of parental presence may affect emotional development.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But grandparents often provide strong family bonds and cultural values.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Outcomes vary — not all alternative arrangements are harmful.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Different values and possible emotional gaps, but also strong bonds; outcomes vary.",
          },
        },
        {
          id: "cieisoc-u3-s2-q20",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which agency of socialisation is MOST associated with the term 'peer pressure'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peer group" },
              { id: "b", text: "School" },
              { id: "c", text: "Family" },
              { id: "d", text: "Media" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer pressure",
                statement: "Pressure to conform comes from peers.",
              },
            ],
            steps: [
              {
                reasoning: "Peer pressure is exerted by peer groups.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Peer group.",
          },
        },
        {
          id: "cieisoc-u3-s2-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways the school can challenge family values.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "School vs family",
                statement: "School may promote different norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "School may promote values (e.g. gender equality) that differ from family teaching.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Exposure to diverse peers and teachers may challenge family assumptions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Promoting different values and exposing children to diversity.",
          },
        },
        {
          id: "cieisoc-u3-s2-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the media can challenge as well as reinforce social norms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media dual role",
                statement: "Media can reinforce or challenge norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reinforce: media often repeats existing stereotypes and norms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Challenge: media can also showcase diverse lifestyles and challenge prejudices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Effect depends on content and audience interpretation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Media both reinforces stereotypes and challenges them depending on content.",
          },
        },
        {
          id: "cieisoc-u3-s2-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student says 'My friends influence me more than my parents.' Evaluate this claim using sociological concepts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agency influence",
                statement: "Different agencies dominate at different life stages.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Peers dominate in adolescence — plausible claim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But family laid the foundation in primary socialisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Family values may be internalised even when peers seem more influential.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Influence varies by topic and individual.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Peers dominate adolescence but family foundation persists; influence varies.",
          },
        },
        {
          id: "cieisoc-u3-s2-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which family type is most common in modern industrial societies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nuclear family" },
              { id: "b", text: "Extended family" },
              { id: "c", text: "No family" },
              { id: "d", text: "Communal family" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family prevalence",
                statement: "Nuclear family is most common in industrial societies.",
              },
            ],
            steps: [
              {
                reasoning: "Nuclear families dominate modern industrial societies.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Nuclear family.",
          },
        },
        {
          id: "cieisoc-u3-s2-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'socialisation' in sociology?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Socialisation",
                statement: "Learning norms and values of society.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It is the lifelong process of learning social rules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It happens through various agencies throughout life.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Lifelong learning of society's norms and values via agencies.",
          },
        },
        {
          id: "cieisoc-u3-s2-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the media is often blamed for youth problems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media blame",
                statement: "Media is seen as transmitting deviant values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Media shows violence, sex and consumerism that some see as harmful.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Young people may imitate media role models.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But evidence for direct causation is weak — context and other factors matter.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Media blamed for transmitting harmful values, but causation is complex.",
          },
        },
        {
          id: "cieisoc-u3-s2-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT an agency of socialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peer group" },
              { id: "b", text: "Government census" },
              { id: "c", text: "Family" },
              { id: "d", text: "School" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agencies list",
                statement: "Family, school, peers, media — not censuses.",
              },
            ],
            steps: [
              {
                reasoning: "Census is data collection, not socialisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(d) Government census.",
          },
        },
        {
          id: "cieisoc-u3-s2-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might peer groups be more influential than family for teenagers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer influence",
                statement: "Peers offer identity and belonging teenagers seek.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Teenagers seek independence from family and identity through peers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Peer approval is highly valued during adolescence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Teens seek identity and peer approval during adolescence.",
          },
        },
        {
          id: "cieisoc-u3-s2-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a study to compare how family and media influence teenagers' attitudes to body image.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research design",
                statement: "Match method to research question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use mixed methods: questionnaire for breadth, interviews for depth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stratified sample of teenagers by gender and age.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Questions on perceived influence of family vs media on body image.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analyse which agency teenagers say is more influential and why.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mixed methods with stratified sample; compare perceived influence of family vs media.",
          },
        },
        {
          id: "cieisoc-u3-s2-q30",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'hidden curriculum' is most associated with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "School" },
              { id: "b", text: "Media" },
              { id: "c", text: "Family" },
              { id: "d", text: "Workplace" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hidden curriculum",
                statement: "Unofficial school lessons.",
              },
            ],
            steps: [
              {
                reasoning: "Hidden curriculum is specific to schooling.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) School.",
          },
        },
        {
          id: "cieisoc-u3-s2-q31",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'agency' in sociology?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Agency",
                statement: "Capacity of individuals to act independently.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Agency = individuals' ability to make choices and act.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Contrasts with structure — social forces shaping behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Individual capacity to act independently vs social structure.",
          },
        },
        {
          id: "cieisoc-u3-s2-q32",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the family transmits social class to children.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Class transmission",
                statement: "Family passes on class-based values and resources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Middle-class families transmit attitudes to education and deferred gratification.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Working-class families may transmit different values and fewer resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Economic resources (money, connections) also pass down.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Family transmits class values, attitudes and economic resources.",
          },
        },
        {
          id: "cieisoc-u3-s2-q33",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that 'the family is losing its importance as an agency of socialisation.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family decline debate",
                statement: "Family structure changing but still influential.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family structures are changing — more diverse, less time together.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Media and peers may rival family influence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But family still provides primary socialisation and emotional bonds.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Family remains important though its form and influence are changing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Family is changing but remains important — form shifts, function persists.",
          },
        },
        {
          id: "cieisoc-u3-s2-q34",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a strength of peer groups as agencies of socialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They eliminate family influence" },
              { id: "b", text: "They are formal institutions" },
              { id: "c", text: "They provide belonging and identity" },
              { id: "d", text: "They are always positive" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer group benefit",
                statement: "Peers provide belonging and identity.",
              },
            ],
            steps: [
              {
                reasoning: "Peer groups offer social belonging and identity.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) They provide belonging and identity.",
          },
        },
        {
          id: "cieisoc-u3-s2-q35",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might the media be considered a 'powerful' agency of socialisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media power",
                statement: "Widespread reach and repetition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Media reaches millions repeatedly, normalising messages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Professional production gives media authority and influence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Widespread repetitive reach and perceived authority give media power.",
          },
        },
        {
          id: "cieisoc-u3-s2-q36",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how different family structures might socialise children differently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family structure effect",
                statement: "Different structures provide different role models.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nuclear: two role models but less extended support.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Extended: more role models and support but possibly less privacy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Single-parent: one role model, possibly different values transmitted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Different structures provide different role models, support and values.",
          },
        },
        {
          id: "cieisoc-u3-s2-q37",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically assess the view that social media has replaced the family as the main agency of socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media vs family",
                statement: "Complementary rather than replacement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social media is highly influential for teenagers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But it cannot replace emotional bonds and primary socialisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Family still provides foundational values and support.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Agencies work together rather than one replacing another.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Social media is influential but complements rather than replaces family.",
          },
        },
        {
          id: "cieisoc-u3-s2-q38",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which agency transmits the 'hidden curriculum'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Media" },
              { id: "b", text: "Family" },
              { id: "c", text: "School" },
              { id: "d", text: "Peers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hidden curriculum",
                statement: "Unofficial school lessons.",
              },
            ],
            steps: [
              {
                reasoning: "Hidden curriculum is specific to schooling.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) School.",
          },
        },
        {
          id: "cieisoc-u3-s2-q39",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a child from a working-class family have different educational experiences than a middle-class child?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Class and education",
                statement: "Class affects values and resources for education.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Different class values and resources affect educational support.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Middle-class families may provide more educational encouragement and resources.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Class affects values, resources and educational support.",
          },
        },
        {
          id: "cieisoc-u3-s2-q40",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design an interview study to investigate which agency of socialisation teenagers find most influential. Justify your choices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research design",
                statement: "Method must suit question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use semi-structured interviews with teenagers aged 13-18.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Purposive sample across different backgrounds and school types.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ask about perceived influence of each agency and reasons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interviews give depth about personal perceptions; justify vs questionnaire.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Semi-structured interviews, purposive sample, explore reasons for perceived influence.",
          },
        },
        {
          id: "cieisoc-u3-s2-q41",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might the workplace be considered an agency of socialisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Workplace socialisation",
                statement: "Work teaches adult/professional norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Work transmits punctuality, discipline and occupational values.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It shapes adult identity and social status.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Work teaches professional norms and shapes adult identity.",
          },
        },
        {
          id: "cieisoc-u3-s2-q42",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how peer groups can transmit deviant norms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer deviance",
                statement: "Peers can normalise deviant behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Peer groups may reward deviant acts with status and acceptance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pressure to conform can lead members into deviance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is a form of secondary socialisation into deviant norms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Peers reward deviance and pressure conformity, transmitting deviant norms.",
          },
        },
        {
          id: "cieisoc-u3-s2-q43",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the functionalist claim that the family is the 'bedrock' of society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist family claim",
                statement: "Family provides stability and socialisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family is primary agency and provides emotional stability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But 'bedrock' ignores family diversity and dysfunction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ignores how family can reproduce inequality.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Other institutions also provide socialisation and stability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Family is important but 'bedrock' overstates its role; ignores diversity and other agencies.",
          },
        },
        {
          id: "cieisoc-u3-s2-q44",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which agency of socialisation is most likely to challenge family values?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Primary school" },
              { id: "b", text: "Peer group" },
              { id: "c", text: "Family" },
              { id: "d", text: "Religious community" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer challenge",
                statement: "Peers often challenge family values.",
              },
            ],
            steps: [
              {
                reasoning: "Peers often promote different values than family.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Peer group.",
          },
        },
        {
          id: "cieisoc-u3-s2-q45",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it difficult to separate the effects of different agencies of socialisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agency overlap",
                statement: "Agencies interact and reinforce each other.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Agencies overlap and interact — hard to isolate effects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Individuals are exposed to multiple agencies simultaneously.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Agencies interact and overlap, making effects hard to isolate.",
          },
        },
        {
          id: "cieisoc-u3-s2-q46",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the media might socialise children into consumerism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media and consumerism",
                statement: "Advertising normalises material desires.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Advertising presents products as essential for happiness/status.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Children internalise these messages through repeated exposure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is secondary socialisation into consumerist values.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Advertising normalises material desires; children internalise consumerist values.",
          },
        },
        {
          id: "cieisoc-u3-s2-q47",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that 'agencies of socialisation are becoming less important due to social media.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agency decline debate",
                statement: "Social media transforms but doesn't eliminate agencies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social media transforms how agencies operate (online peers, digital media).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But family and school still provide essential socialisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Social media itself becomes a new agency rather than replacing old ones.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Agencies adapt rather than decline.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Social media transforms agencies rather than making them less important.",
          },
        },
        {
          id: "cieisoc-u3-s2-q48",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which agency of socialisation is typically MOST influential in early childhood?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Family" },
              { id: "b", text: "Media" },
              { id: "c", text: "Peer group" },
              { id: "d", text: "Workplace" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Early influence",
                statement: "Family dominates early childhood.",
              },
            ],
            steps: [
              {
                reasoning: "Family is primary agency in early childhood.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Family.",
          },
        },
        {
          id: "cieisoc-u3-s2-q49",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might different cultures have different agencies of socialisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cultural variation",
                statement: "Cultural context shapes which agencies matter.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Different cultures emphasise different institutions (e.g. extended family vs school).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Religious institutions may be more important in some cultures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cultural context determines which institutions are most influential.",
          },
        },
        {
          id: "cieisoc-u3-s2-q50",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that 'children should be socialised primarily by their families, not by schools or media.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agency balance",
                statement: "Multiple agencies serve different functions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family provides primary socialisation and emotional bonds — essential.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But school provides education and prepares for citizenship — also essential.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Media provides information and cultural exposure — increasingly important.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "All agencies contribute; no single one should dominate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "All agencies contribute essential functions; family alone cannot socialise children fully.",
          },
        },
      ],
    },
    {
      id: "cieisoc-u3-s-deviance",
      title: "Deviance, crime and social control",
      skill:
        "Explain theories of deviance and mechanisms of social control.",
      lesson: {
        sections: [
          {
            heading: "What is deviance?",
            body: "**Deviance** is behaviour that violates social norms. It ranges from minor (dress code violations) to serious (crime). What counts as deviant varies by culture and time — homosexuality was once criminalised, now accepted in many societies. Deviance is relative, not absolute.",
          },
          {
            heading: "Theories of deviance",
            body: "**Functionalist** (Durkheim): deviance is normal and necessary — it clarifies norms and can lead to social change. **Marxist**: deviance results from inequality — the poor commit crime due to lack of legitimate opportunities. **Labelling theory**: deviance is created by society's reaction — being labelled 'criminal' can produce further deviance (self-fulfilling prophecy). **Subcultural theory**: deviant groups develop their own values in response to marginalisation.",
          },
          {
            heading: "Social control",
            body: "**Informal control**: gossip, ridicule, peer pressure, ostracism. **Formal control**: laws, police, courts, prisons. **Internal control**: conscience, guilt, self-regulation. Effective social control balances all three. Punishment serves deterrence (preventing crime) and rehabilitation (reforming offenders).",
          },
        ],
        keyFormulas: [
          {
            name: "Deviance",
            statement: "Behaviour violating social norms — relative, not absolute",
          },
          {
            name: "Labelling",
            statement: "Society's reaction creates deviance",
          },
          {
            name: "Control",
            statement: "Informal · formal · internal",
          },
        ],
        workedExample: {
          problem:
            "A teenager is caught shoplifting. Explain it using labelling theory.",
          solution:
            "Being labelled 'thief' may lead others to treat them as deviant, the teenager may accept the label and commit further theft — a self-fulfilling prophecy.",
        },
      },
      questions: [
        {
          id: "cieisoc-u3-d1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Deviance is best defined as behaviour that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Violates social norms" },
              { id: "b", text: "Is biologically determined" },
              { id: "c", text: "Is always criminal" },
              { id: "d", text: "Is always punished" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deviance",
                statement: "Behaviour violating social norms.",
              },
            ],
            steps: [
              {
                reasoning: "Deviance = norm violation, not necessarily crime.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Violates social norms.",
          },
        },
        {
          id: "cieisoc-u3-d1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of informal social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Arrest by police" },
              { id: "b", text: "Imprisonment" },
              { id: "c", text: "Gossip and ridicule" },
              { id: "d", text: "Court sentencing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informal control",
                statement: "Unofficial sanctions like gossip, ridicule.",
              },
            ],
            steps: [
              {
                reasoning: "Gossip and ridicule are informal controls.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Gossip and ridicule.",
          },
        },
        {
          id: "cieisoc-u3-d1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Labelling theory argues deviance is created by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Biological factors" },
              { id: "b", text: "Economic inequality alone" },
              { id: "c", text: "God's will" },
              { id: "d", text: "Society's reaction and labels" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Labelling theory",
                statement: "Deviance created by society's labelling reaction.",
              },
            ],
            steps: [
              {
                reasoning: "Labels like 'criminal' produce deviance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Society's reaction and labels.",
          },
        },
        {
          id: "cieisoc-u3-d1-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Functionalists (Durkheim) argue deviance is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always harmful" },
              { id: "b", text: "Normal and serves functions for society" },
              { id: "c", text: "Caused only by poverty" },
              { id: "d", text: "Impossible to prevent" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist deviance",
                statement: "Deviance is normal and necessary for society.",
              },
            ],
            steps: [
              {
                reasoning: "Durkheim saw deviance as normal and functional.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Normal and serves functions.",
          },
        },
        {
          id: "cieisoc-u3-d1-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Marxists explain crime primarily through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Biological defects" },
              { id: "b", text: "Economic inequality and lack of legitimate opportunities" },
              { id: "c", text: "Mental illness" },
              { id: "d", text: "Divine punishment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist deviance",
                statement: "Crime results from economic inequality.",
              },
            ],
            steps: [
              {
                reasoning: "Marxists link crime to poverty and inequality.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Economic inequality and lack of opportunities.",
          },
        },
        {
          id: "cieisoc-u3-d1-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'self-fulfilling prophecy' in labelling theory means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "People are born deviant" },
              { id: "b", text: "Being labelled deviant leads the person to act deviantly" },
              { id: "c", text: "Labels always prevent crime" },
              { id: "d", text: "Labels have no effect" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Self-fulfilling prophecy",
                statement: "Label produces the behaviour it predicts.",
              },
            ],
            steps: [
              {
                reasoning: "Being labelled 'criminal' can produce criminal behaviour.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Label leads to deviant behaviour.",
          },
        },
        {
          id: "cieisoc-u3-d1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Internal social control refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peer pressure only" },
              { id: "b", text: "Self-regulation through conscience and guilt" },
              { id: "c", text: "Police patrols" },
              { id: "d", text: "Court punishments" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal control",
                statement: "Self-regulation through conscience.",
              },
            ],
            steps: [
              {
                reasoning: "Internal control = conscience/guilt guiding behaviour.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Self-regulation through conscience.",
          },
        },
        {
          id: "cieisoc-u3-d1-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Formal social control includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gossip and ridicule" },
              { id: "b", text: "Laws, police and courts" },
              { id: "c", text: "Family approval" },
              { id: "d", text: "Religious beliefs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formal control",
                statement: "Official mechanisms: law, police, courts.",
              },
            ],
            steps: [
              {
                reasoning: "Formal control = official legal mechanisms.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Laws, police and courts.",
          },
        },
        {
          id: "cieisoc-u3-d1-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Deviance is relative because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What counts as deviant varies by culture and time" },
              { id: "b", text: "It is biologically fixed" },
              { id: "c", text: "It is always the same everywhere" },
              { id: "d", text: "It never changes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deviance relativity",
                statement: "Norms vary by culture and time period.",
              },
            ],
            steps: [
              {
                reasoning: "Deviance depends on cultural and temporal context.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Varies by culture and time.",
          },
        },
        {
          id: "cieisoc-u3-d1-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define deviance and give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deviance",
                statement: "Behaviour violating social norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deviance is behaviour that breaks accepted social rules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: dress code violation, graffiti, or crime.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Behaviour violating norms; e.g. graffiti or dress code violation.",
          },
        },
        {
          id: "cieisoc-u3-d1-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one strength and one weakness of informal social control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Informal control",
                statement: "Everyday sanctions maintain order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: constant, everyday enforcement without formal cost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: inconsistent, may be cruel or ineffective.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Constant and cheap; but inconsistent and potentially cruel.",
          },
        },
        {
          id: "cieisoc-u3-d1-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how labelling theory explains the development of a criminal career.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labelling process",
                statement: "Labels create deviant identities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A person commits a minor deviant act.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Society labels them 'criminal' and treats them accordingly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The person internalises the label and commits further deviance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Minor deviance → label → internalisation → further deviance.",
          },
        },
        {
          id: "cieisoc-u3-d1-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the functionalist view that deviance is necessary for society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist deviance",
                statement: "Deviance clarifies norms and enables change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deviance clarifies what is normal — defines boundaries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can lead to social change by challenging unjust norms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But excessive deviance threatens social order and cohesion.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Some deviance is purely harmful, not functional.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Deviance has functions but can also be harmful; balance is needed.",
          },
        },
        {
          id: "cieisoc-u3-d1-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which theory says deviance results from society's reaction to behaviour?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Labelling theory" },
              { id: "b", text: "Marxism" },
              { id: "c", text: "Functionalism" },
              { id: "d", text: "Biological theory" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labelling theory",
                statement: "Deviance created by social reaction.",
              },
            ],
            steps: [
              {
                reasoning: "Labelling theory emphasises society's reaction.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Labelling theory.",
          },
        },
        {
          id: "cieisoc-u3-d1-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two purposes of punishment in society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Punishment purposes",
                statement: "Deterrence and rehabilitation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deterrence — discouraging others from committing crime.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rehabilitation — reforming the offender to prevent reoffending.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Deterrence (preventing crime) and rehabilitation (reforming offenders).",
          },
        },
        {
          id: "cieisoc-u3-d1-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is formal social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ridicule" },
              { id: "b", text: "Police arrest" },
              { id: "c", text: "Ostracism by friends" },
              { id: "d", text: "Gossip" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formal control",
                statement: "Official mechanisms like police and courts.",
              },
            ],
            steps: [
              {
                reasoning: "Police arrest is formal control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Police arrest.",
          },
        },
        {
          id: "cieisoc-u3-d1-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'subculture' in the context of deviance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deviant subculture",
                statement: "Group with own values challenging mainstream norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A deviant subculture develops its own values and norms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It often emerges among marginalised groups as a response to exclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Group with own values, often among marginalised members.",
          },
        },
        {
          id: "cieisoc-u3-d1-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how informal social control works in everyday life.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Informal control mechanism",
                statement: "Everyday sanctions maintain conformity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gossip, ridicule and disapproval signal norm violation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ostracism threatens belonging — powerful sanction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Most people conform to avoid these informal sanctions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Everyday sanctions (gossip, ridicule, ostracism) enforce conformity.",
          },
        },
        {
          id: "cieisoc-u3-d1-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the Marxist explanation of crime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist crime theory",
                statement: "Crime results from economic inequality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Marxists argue poverty and lack of opportunities drive crime.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They also argue crime laws protect capitalist interests.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: doesn't explain all crime — white-collar crime by rich.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Ignores individual choice and non-economic motives.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Explains poverty crime but ignores white-collar crime and individual motives.",
          },
        },
        {
          id: "cieisoc-u3-d1-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of deviance that is NOT a crime?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wearing unconventional clothing" },
              { id: "b", text: "Fraud" },
              { id: "c", text: "Murder" },
              { id: "d", text: "Theft" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deviance vs crime",
                statement: "Deviance is broader than crime.",
              },
            ],
            steps: [
              {
                reasoning: "Unconventional dress is deviant but not criminal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Wearing unconventional clothing.",
          },
        },
        {
          id: "cieisoc-u3-d1-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between deviance and crime?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deviance vs crime",
                statement: "Deviance = norm violation; crime = legal violation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deviance violates social norms; crime violates laws.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "All crime is deviant, but not all deviance is criminal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Deviance = norm violation; crime = legal violation (subset of deviance).",
          },
        },
        {
          id: "cieisoc-u3-d1-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how formal social control differs from informal social control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control types",
                statement: "Formal = official; informal = everyday.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Formal: laws, police, courts — official, codified.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Informal: gossip, ridicule, peer pressure — unofficial.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Formal is used for serious violations; informal for everyday conformity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Formal = official legal mechanisms; informal = everyday social sanctions.",
          },
        },
        {
          id: "cieisoc-u3-d1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate labelling theory's explanation of crime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labelling evaluation",
                statement: "Powerful but incomplete explanation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: explains how labels create deviant identities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: highlights power of social reaction over individual choice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: ignores why initial deviance occurs.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: not all labelled people become deviant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Explains deviance amplification but ignores initial causes and individual resistance.",
          },
        },
        {
          id: "cieisoc-u3-d1-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a form of social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gossip" },
              { id: "b", text: "Arrest" },
              { id: "c", text: "Ridicule" },
              { id: "d", text: "Socialisation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control vs socialisation",
                statement: "Socialisation teaches; control enforces.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Socialisation is learning; control is enforcement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Socialisation.",
          },
        },
        {
          id: "cieisoc-u3-d1-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'deterrence' in punishment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deterrence",
                statement: "Punishment preventing crime through fear.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deterrence means punishment discourages potential offenders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It works through fear of consequences.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Punishment preventing crime through fear of consequences.",
          },
        },
        {
          id: "cieisoc-u3-d1-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a 'moral panic' relates to deviance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Moral panic",
                statement: "Exaggerated public fear of a deviant group.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Media amplifies fears about a deviant group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Public reaction creates panic disproportionate to actual threat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This can lead to harsh laws and further marginalisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Exaggerated fear of deviance → disproportionate response → further marginalisation.",
          },
        },
        {
          id: "cieisoc-u3-d1-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of informal social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prison sentence" },
              { id: "b", text: "Peer pressure" },
              { id: "c", text: "Fine" },
              { id: "d", text: "Police warning" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informal control",
                statement: "Unofficial social sanctions.",
              },
            ],
            steps: [
              {
                reasoning: "Peer pressure is informal control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Peer pressure.",
          },
        },
        {
          id: "cieisoc-u3-d1-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might labelling be harmful?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labelling harm",
                statement: "Labels create deviant identities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Labels can become self-fulfilling prophecies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Being labelled deviant limits opportunities and social acceptance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Labels create deviant identities and limit opportunities.",
          },
        },
        {
          id: "cieisoc-u3-d1-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare functionalist and Marxist explanations of crime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theory comparison",
                statement: "Functionalist = social function; Marxist = economic cause.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Functionalist: deviance is normal, clarifies norms, enables change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Functionalist sees crime as serving social functions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Marxist: crime results from poverty and inequality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Marxist sees crime laws as protecting capitalist interests.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Functionalist: deviance serves functions; Marxist: crime from inequality.",
          },
        },
        {
          id: "cieisoc-u3-d1-q30",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a form of social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Laws" },
              { id: "b", text: "Peer pressure" },
              { id: "c", text: "Punishment" },
              { id: "d", text: "Education" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control mechanisms",
                statement: "Control enforces; education socialises.",
              },
            ],
            steps: [
              {
                reasoning: "Education is socialisation, not control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Education.",
          },
        },
        {
          id: "cieisoc-u3-d1-q31",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'rehabilitation' in punishment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rehabilitation",
                statement: "Reforming offenders to prevent reoffending.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rehabilitation aims to change offenders' behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It contrasts with pure punishment/deterrence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reforming offenders to prevent reoffending.",
          },
        },
        {
          id: "cieisoc-u3-d1-q32",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a deviant subculture develops.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subculture development",
                statement: "Marginalised groups create own norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Marginalised groups face exclusion from mainstream opportunities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They develop own values and norms as alternatives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This creates deviant subcultures with their own social order.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Exclusion → alternative values → deviant subculture.",
          },
        },
        {
          id: "cieisoc-u3-d1-q33",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that 'crime is caused by poor parenting.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multi-causal crime",
                statement: "Crime has many causes, not just parenting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Poor parenting can contribute to deviance — lack of supervision, values.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But crime also results from poverty, inequality, peer influence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Many criminals come from good homes; many from poor homes don't offend.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Crime is multi-causal — parenting is one factor among many.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Parenting matters but is only one factor; crime is multi-causal.",
          },
        },
        {
          id: "cieisoc-u3-d1-q34",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of formal social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gossip" },
              { id: "b", text: "Peer pressure" },
              { id: "c", text: "Court sentencing" },
              { id: "d", text: "Ridicule" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formal control",
                statement: "Official legal mechanisms.",
              },
            ],
            steps: [
              {
                reasoning: "Court sentencing is formal control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Court sentencing.",
          },
        },
        {
          id: "cieisoc-u3-d1-q35",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'white-collar crime'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "White-collar crime",
                statement: "Crime committed by professionals in business.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It is crime committed by respectable business people.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examples: fraud, embezzlement, insider trading.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Professional/business crime like fraud and embezzlement.",
          },
        },
        {
          id: "cieisoc-u3-d1-q36",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the 'dark figure of crime' relates to official statistics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dark figure",
                statement: "Unreported crime not in statistics.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Many crimes are never reported to police.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Official statistics only show reported crime — a fraction of reality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This makes official crime rates unreliable measures of actual crime.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Unreported crime means statistics understate real crime rates.",
          },
        },
        {
          id: "cieisoc-u3-d1-q37",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a study to investigate why teenagers commit vandalism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research design",
                statement: "Match method to question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use interviews to explore motivations and meanings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use observation to see actual vandalism and group dynamics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sample: teenagers known to engage in or witness vandalism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ethical issues: confidentiality essential given illegal behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mixed methods (interviews + observation); ethical care for illegal behaviour.",
          },
        },
        {
          id: "cieisoc-u3-d1-q38",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which theory argues that being labelled 'criminal' produces further crime?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Functionalism" },
              { id: "b", text: "Labelling theory" },
              { id: "c", text: "Biological theory" },
              { id: "d", text: "Marxism" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labelling theory",
                statement: "Labels produce deviance.",
              },
            ],
            steps: [
              {
                reasoning: "Labelling theory explains deviance amplification.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Labelling theory.",
          },
        },
        {
          id: "cieisoc-u3-d1-q39",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'social order'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social order",
                statement: "Predictable patterns of behaviour maintained by norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social order = stable, predictable social life.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Maintained through norms, sanctions and social control.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stable predictable behaviour maintained by norms and control.",
          },
        },
        {
          id: "cieisoc-u3-d1-q40",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the use of imprisonment as a form of social control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Imprisonment evaluation",
                statement: "Deterrence vs costs and harm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: deters crime and removes dangerous offenders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: protects society from offenders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: expensive and may not rehabilitate.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: labelling and prison culture may increase reoffending.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Imprisonment deters but is costly and may increase reoffending via labelling.",
          },
        },
        {
          id: "cieisoc-u3-d1-q41",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might poverty lead to crime according to Marxists?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist poverty-crime",
                statement: "Lack of legitimate means drives crime.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Poverty limits access to legitimate means of success.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Some turn to crime as alternative means.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Poverty limits legitimate opportunities, driving some to crime.",
          },
        },
        {
          id: "cieisoc-u3-d1-q42",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how peer groups can act as agents of deviance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer deviance",
                statement: "Peers normalise and reward deviance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Peer groups may provide status for deviant acts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pressure to conform can lead members into deviance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is secondary socialisation into deviant norms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Peers reward deviance and pressure conformity, normalising deviant behaviour.",
          },
        },
        {
          id: "cieisoc-u3-d1-q43",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically assess the view that 'crime is a choice, not a product of society.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Individual vs social crime",
                statement: "Choice matters but social context constrains.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Individuals do make choices to commit crime.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But choices are shaped by poverty, family, peers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Structural factors constrain available options.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Best view: interaction of choice and social context.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Crime involves choice but is shaped by social context; neither view alone suffices.",
          },
        },
        {
          id: "cieisoc-u3-d1-q44",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of deviance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paying taxes" },
              { id: "b", text: "Working" },
              { id: "c", text: "Graffiti" },
              { id: "d", text: "Going to school" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deviance example",
                statement: "Graffiti violates norms.",
              },
            ],
            steps: [
              {
                reasoning: "Graffiti is deviant (and often criminal).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Graffiti.",
          },
        },
        {
          id: "cieisoc-u3-d1-q45",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is deviance considered relative?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deviance relativity",
                statement: "Norms vary by culture and time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "What is deviant in one culture may be normal in another.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Norms change over time — once-deviant becomes accepted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Deviance depends on cultural and temporal context.",
          },
        },
        {
          id: "cieisoc-u3-d1-q46",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how formal and informal social control work together.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control integration",
                statement: "Both types maintain order at different levels.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Informal control handles everyday minor deviance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Formal control handles serious violations requiring law.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Together they maintain social order at different levels.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Informal handles daily conformity; formal handles serious violations.",
          },
        },
        {
          id: "cieisoc-u3-d1-q47",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the view that 'prisons work — they punish criminals and deter others.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prison effectiveness",
                statement: "Punishment vs rehabilitation debate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prisons do remove offenders and may deter some.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But high reoffending rates suggest limited rehabilitation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Prison culture and labelling may increase criminality.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Alternative sanctions may be more effective.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Prisons punish but may not deter or rehabilitate; alternatives may work better.",
          },
        },
        {
          id: "cieisoc-u3-d1-q48",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a purpose of punishment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protection of society" },
              { id: "b", text: "Rehabilitation" },
              { id: "c", text: "Deterrence" },
              { id: "d", text: "Vengeance only" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Punishment purposes",
                statement: "Deterrence, rehabilitation, protection.",
              },
            ],
            steps: [
              {
                reasoning: "Pure vengeance is not a recognised purpose.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Vengeance only.",
          },
        },
        {
          id: "cieisoc-u3-d1-q49",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'conformity'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conformity",
                statement: "Behaving according to group norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Conformity means matching expected behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is maintained through socialisation and sanctions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Behaving according to group norms; maintained by sanctions.",
          },
        },
        {
          id: "cieisoc-u3-d1-q50",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically assess the view that 'social media has made deviance easier.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media and deviance",
                statement: "Online platforms enable new forms of deviance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social media enables cyberbullying, trolling, fraud.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Online anonymity reduces fear of sanctions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But deviance existed before social media too.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Social media transforms rather than creates deviance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Social media enables new deviance forms but doesn't create deviance itself.",
          },
        },
      ],
    },
    {
      id: "cieisoc-u3-s-control",
      title: "Social control mechanisms",
      skill:
        "Distinguish internal, informal and formal social control.",
      lesson: {
        sections: [
          {
            heading: "Types of social control",
            body: "**Internal control**: conscience, guilt, self-regulation — we obey because we believe it's right. **Informal control**: gossip, ridicule, peer pressure, ostracism — everyday sanctions. **Formal control**: laws, police, courts, prisons — official mechanisms. All three work together to maintain social order.",
          },
          {
            heading: "Punishment and deterrence",
            body: "Punishment aims to **deter** (prevent crime through fear), **rehabilitate** (reform offenders), and **protect** society. Debates: does prison work? Some argue punishment should be retributive (deserved); others focus on rehabilitation or restorative justice (repairing harm).",
          },
          {
            heading: "Resistance and deviance",
            body: "Not everyone conforms — some resist through deviance, protest or nonconformity. Functionalists see some deviance as necessary for change. Labelling theory shows how formal control can create more deviance. Understanding control means understanding why people obey AND why some don't.",
          },
        ],
        keyFormulas: [
          {
            name: "Internal",
            statement: "Conscience · guilt · self-regulation",
          },
          {
            name: "Informal",
            statement: "Gossip · ridicule · peer pressure · ostracism",
          },
          {
            name: "Formal",
            statement: "Laws · police · courts · prisons",
          },
        ],
        workedExample: {
          problem:
            "Why do most people not steal even when they could?",
          solution:
            "Internal control (conscience/guilt), informal control (fear of social disapproval), and formal control (fear of legal punishment) all deter theft.",
        },
      },
      questions: [
        {
          id: "cieisoc-u3-c1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Internal social control is based on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conscience and self-regulation" },
              { id: "b", text: "Court punishments" },
              { id: "c", text: "Peer pressure" },
              { id: "d", text: "Police patrols" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal control",
                statement: "Self-regulation through conscience.",
              },
            ],
            steps: [
              {
                reasoning: "Internal control = conscience/guilt.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Conscience and self-regulation.",
          },
        },
        {
          id: "cieisoc-u3-c1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Informal social control includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Police warnings" },
              { id: "b", text: "Court fines" },
              { id: "c", text: "Gossip, ridicule and peer pressure" },
              { id: "d", text: "Arrest and imprisonment" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informal control",
                statement: "Everyday unofficial sanctions.",
              },
            ],
            steps: [
              {
                reasoning: "Gossip, ridicule, peer pressure are informal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Gossip, ridicule and peer pressure.",
          },
        },
        {
          id: "cieisoc-u3-c1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Formal social control includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Family approval" },
              { id: "b", text: "Gossip" },
              { id: "c", text: "Religious beliefs" },
              { id: "d", text: "Laws, police and courts" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formal control",
                statement: "Official legal mechanisms.",
              },
            ],
            steps: [
              {
                reasoning: "Laws, police, courts = formal control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Laws, police and courts.",
          },
        },
        {
          id: "cieisoc-u3-c1-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which type of control is strongest for most people?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Internal control" },
              { id: "b", text: "None" },
              { id: "c", text: "Formal control" },
              { id: "d", text: "Informal control" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Internal control strength",
                statement: "Most people obey through internalised norms.",
              },
            ],
            steps: [
              {
                reasoning: "Internal control is most effective for most people.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Internal control.",
          },
        },
        {
          id: "cieisoc-u3-c1-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Deterrence means punishment aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reform offenders" },
              { id: "b", text: "Prevent crime through fear of consequences" },
              { id: "c", text: "Take revenge" },
              { id: "d", text: "Compensate victims" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deterrence",
                statement: "Punishment preventing crime through fear.",
              },
            ],
            steps: [
              {
                reasoning: "Deterrence = preventing crime via fear.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Prevent crime through fear.",
          },
        },
        {
          id: "cieisoc-u3-c1-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Restorative justice focuses on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only punishing" },
              { id: "b", text: "Maximum punishment" },
              { id: "c", text: "Ignoring victims" },
              { id: "d", text: "Repairing harm and reconciling offender and victim" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Restorative justice",
                statement: "Repairing harm through reconciliation.",
              },
            ],
            steps: [
              {
                reasoning: "Restorative justice focuses on repair and reconciliation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Repairing harm and reconciling.",
          },
        },
        {
          id: "cieisoc-u3-c1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Ostracism is a form of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formal social control" },
              { id: "b", text: "Legal punishment" },
              { id: "c", text: "Internal social control" },
              { id: "d", text: "Informal social control" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ostracism",
                statement: "Social exclusion as informal sanction.",
              },
            ],
            steps: [
              {
                reasoning: "Ostracism is informal social control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Informal social control.",
          },
        },
        {
          id: "cieisoc-u3-c1-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is most effective for preventing minor deviance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "None" },
              { id: "b", text: "Informal social control" },
              { id: "c", text: "Court trials" },
              { id: "d", text: "Prison" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Informal control effectiveness",
                statement: "Everyday sanctions handle minor deviance.",
              },
            ],
            steps: [
              {
                reasoning: "Informal control handles everyday minor deviance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Informal social control.",
          },
        },
        {
          id: "cieisoc-u3-c1-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'sanction' in sociology is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A social institution" },
              { id: "b", text: "A type of crime" },
              { id: "c", text: "A reward or punishment for behaviour" },
              { id: "d", text: "A research method" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sanction",
                statement: "Reward or punishment enforcing norms.",
              },
            ],
            steps: [
              {
                reasoning: "Sanctions reward/punish to enforce norms.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Reward or punishment for behaviour.",
          },
        },
        {
          id: "cieisoc-u3-c1-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'social control' and state its purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social control",
                statement: "Mechanisms maintaining social order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social control = mechanisms enforcing social norms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Purpose: maintain social order and conformity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mechanisms enforcing norms; purpose is maintaining social order.",
          },
        },
        {
          id: "cieisoc-u3-c1-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two types of sanctions in social control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sanctions",
                statement: "Positive (rewards) and negative (punishments).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Positive sanctions reward conformity (praise, acceptance).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Negative sanctions punish deviance (ridicule, arrest).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Positive (rewards) and negative (punishments).",
          },
        },
        {
          id: "cieisoc-u3-c1-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how internal social control develops through socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Internal control development",
                statement: "Norms internalised through socialisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Socialisation teaches norms and values from childhood.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "These become internalised — part of the self.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "We then self-regulate through conscience and guilt.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Socialisation → internalisation → self-regulation via conscience.",
          },
        },
        {
          id: "cieisoc-u3-c1-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the effectiveness of informal social control compared with formal control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control comparison",
                statement: "Informal = constant but inconsistent; formal = consistent but costly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Informal control is constant and handles everyday deviance cheaply.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But it is inconsistent and can be cruel or ineffective.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Formal control is consistent but expensive and only for serious cases.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Both are needed — neither alone maintains order.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Informal handles daily deviance cheaply but inconsistently; formal is consistent but costly.",
          },
        },
        {
          id: "cieisoc-u3-c1-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is NOT a type of social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Education" },
              { id: "b", text: "Formal control" },
              { id: "c", text: "Informal control" },
              { id: "d", text: "Internal control" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control types",
                statement: "Internal, informal, formal — education is separate.",
              },
            ],
            steps: [
              {
                reasoning: "Education is socialisation, not control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Education.",
          },
        },
        {
          id: "cieisoc-u3-c1-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two functions of punishment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Punishment functions",
                statement: "Deterrence and rehabilitation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deterrence — discouraging crime through fear.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rehabilitation — reforming offenders.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Deterrence and rehabilitation (also protection).",
          },
        },
        {
          id: "cieisoc-u3-c1-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of internal social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peer pressure" },
              { id: "b", text: "Fines" },
              { id: "c", text: "Being arrested" },
              { id: "d", text: "Feeling guilty for lying" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal control example",
                statement: "Guilt/conscience = internal control.",
              },
            ],
            steps: [
              {
                reasoning: "Feeling guilty is internal control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Feeling guilty for lying.",
          },
        },
        {
          id: "cieisoc-u3-c1-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'restorative justice'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Restorative justice",
                statement: "Approach repairing harm through reconciliation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It focuses on repairing harm done to victims.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Involves offender, victim and community in reconciliation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Repairing harm through offender-victim-community reconciliation.",
          },
        },
        {
          id: "cieisoc-u3-c1-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why informal social control is important even in societies with formal laws.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Informal control importance",
                statement: "Everyday sanctions maintain most conformity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Most deviance is minor and handled informally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Informal control operates constantly without formal cost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It maintains everyday social order that laws cannot.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Informal control handles most everyday deviance cheaply and constantly.",
          },
        },
        {
          id: "cieisoc-u3-c1-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the effectiveness of punishment as a form of social control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Punishment evaluation",
                statement: "Deterrence vs costs and harm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Punishment deters some crime and removes offenders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But high reoffending suggests limited effectiveness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Punishment can be expensive and may increase criminality via labelling.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Alternative approaches (restorative, rehabilitation) may work better.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Punishment deters some but is costly and may increase reoffending.",
          },
        },
        {
          id: "cieisoc-u3-c1-q20",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the strongest form of social control for most people?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All equal" },
              { id: "b", text: "Internal control" },
              { id: "c", text: "Informal control" },
              { id: "d", text: "Formal control" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control hierarchy",
                statement: "Internal control most effective for most.",
              },
            ],
            steps: [
              {
                reasoning: "Internal control is most effective for most people.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Internal control.",
          },
        },
        {
          id: "cieisoc-u3-c1-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'deterrence'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deterrence",
                statement: "Punishment preventing crime through fear.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deterrence = preventing crime via fear of punishment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can be general (deterring all) or specific (deterring offender).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Punishment preventing crime through fear of consequences.",
          },
        },
        {
          id: "cieisoc-u3-c1-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how peer pressure acts as informal social control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer pressure control",
                statement: "Peers enforce conformity through acceptance/rejection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Peers reward conformity with acceptance and status.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They punish deviance with rejection or ridicule.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This maintains group norms and social order.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Peers enforce norms through acceptance and rejection — informal control.",
          },
        },
        {
          id: "cieisoc-u3-c1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the effectiveness of internal, informal and formal social control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control comparison",
                statement: "Each type has strengths and limits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Internal: most effective for most, but fails for those lacking conscience.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Informal: constant and cheap, but inconsistent and can be cruel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Formal: consistent and authoritative, but expensive and only for serious cases.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "All three needed — they complement each other.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Internal most effective generally; informal handles daily; formal handles serious — all needed.",
          },
        },
        {
          id: "cieisoc-u3-c1-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a type of social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Informal" },
              { id: "b", text: "Formal" },
              { id: "c", text: "Internal" },
              { id: "d", text: "Education" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control types",
                statement: "Internal, informal, formal — education separate.",
              },
            ],
            steps: [
              {
                reasoning: "Education is socialisation, not control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Education.",
          },
        },
        {
          id: "cieisoc-u3-c1-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'rehabilitation' in punishment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rehabilitation",
                statement: "Reforming offenders to prevent reoffending.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rehabilitation aims to change offender behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It contrasts with pure punishment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reforming offenders to prevent reoffending.",
          },
        },
        {
          id: "cieisoc-u3-c1-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'going native' relates to social control research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Going native",
                statement: "Losing objectivity through full identification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Researchers may lose critical distance when studying deviant groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This undermines analysis of social control mechanisms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Researchers must maintain sociological perspective.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Going native undermines objective analysis of control mechanisms.",
          },
        },
        {
          id: "cieisoc-u3-c1-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a form of social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ridicule" },
              { id: "b", text: "Gossip" },
              { id: "c", text: "Education" },
              { id: "d", text: "Arrest" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control vs education",
                statement: "Education socialises; control enforces.",
              },
            ],
            steps: [
              {
                reasoning: "Education is socialisation, not control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) Education.",
          },
        },
        {
          id: "cieisoc-u3-c1-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might formal control be necessary even with strong informal control?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal control necessity",
                statement: "Serious violations need official mechanisms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Informal control fails for serious crimes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Formal control provides consistent, authoritative response.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Serious violations need formal control's consistency and authority.",
          },
        },
        {
          id: "cieisoc-u3-c1-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a study to investigate why people obey laws even when not watched.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research design",
                statement: "Match method to question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use interviews to explore internal control and motivations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sample diverse individuals across ages and backgrounds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ask about conscience, guilt, fear of punishment, social approval.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interviews reveal internal motivations that observation cannot.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Interviews exploring internal motivations for obeying laws.",
          },
        },
        {
          id: "cieisoc-u3-c1-q30",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of informal social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fine" },
              { id: "b", text: "Ridicule" },
              { id: "c", text: "Arrest" },
              { id: "d", text: "Prison" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informal control",
                statement: "Everyday unofficial sanctions.",
              },
            ],
            steps: [
              {
                reasoning: "Ridicule is informal control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Ridicule.",
          },
        },
        {
          id: "cieisoc-u3-c1-q31",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'social order'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social order",
                statement: "Stable predictable social patterns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social order = predictable, stable social life.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Maintained through norms and social control.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stable predictable patterns maintained by norms and control.",
          },
        },
        {
          id: "cieisoc-u3-c1-q32",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how formal social control can sometimes increase deviance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal control paradox",
                statement: "Punishment can create more deviance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Labelling can create deviant identities (labelling theory).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Prison may expose offenders to criminal subcultures.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stigmatisation limits legitimate opportunities, pushing further crime.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Labelling, prison culture and stigma can increase deviance.",
          },
        },
        {
          id: "cieisoc-u3-c1-q33",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the use of capital punishment as social control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Capital punishment debate",
                statement: "Deterrence vs irreversibility and morality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Supporters argue it deters serious crime.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence for deterrence is weak — murder rates don't clearly drop.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Risk of executing innocent people — irreversible.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Many argue it violates right to life and human dignity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Weak deterrence evidence, irreversibility risk, human rights concerns.",
          },
        },
        {
          id: "cieisoc-u3-c1-q34",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of formal social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gossip" },
              { id: "b", text: "Ostracism" },
              { id: "c", text: "Imprisonment" },
              { id: "d", text: "Peer pressure" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formal control",
                statement: "Official legal mechanisms.",
              },
            ],
            steps: [
              {
                reasoning: "Imprisonment is formal control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Imprisonment.",
          },
        },
        {
          id: "cieisoc-u3-c1-q35",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'social order'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social order",
                statement: "Stable predictable social patterns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social order = stable, predictable social life.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Maintained by norms and social control.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stable predictable patterns maintained by norms and control.",
          },
        },
        {
          id: "cieisoc-u3-c1-q36",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'moral panic' can lead to increased formal social control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moral panic",
                statement: "Exaggerated fear leads to harsh laws.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Media amplifies fears about deviant groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Public demands action → stricter laws and policing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This increases formal control, sometimes disproportionately.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Media panic → public demand → stricter laws → increased formal control.",
          },
        },
        {
          id: "cieisoc-u3-c1-q37",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a study to investigate which form of social control is most effective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research design",
                statement: "Match method to question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use surveys to measure perceived effectiveness of each control type.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stratified sample across different groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ask about deterrence, compliance and experiences of control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Survey gives breadth; could add interviews for depth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Survey measuring perceived effectiveness across control types.",
          },
        },
        {
          id: "cieisoc-u3-c1-q38",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a form of social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peer pressure" },
              { id: "b", text: "Education" },
              { id: "c", text: "Arrest" },
              { id: "d", text: "Punishment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control vs education",
                statement: "Education socialises; control enforces.",
              },
            ],
            steps: [
              {
                reasoning: "Education is socialisation, not control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Education.",
          },
        },
        {
          id: "cieisoc-u3-c1-q39",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'conformity'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conformity",
                statement: "Behaving according to norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Conformity = matching expected behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Maintained by social control mechanisms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Behaving according to norms; maintained by social control.",
          },
        },
        {
          id: "cieisoc-u3-c1-q40",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically assess the view that 'social control is too harsh in modern societies.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control harshness debate",
                statement: "Balance between order and freedom.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Some argue punishments are too harsh (long sentences, harsh laws).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But crime rates suggest control may be necessary.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Over-control can violate civil liberties and human rights.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Balance needed between order and individual freedom.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Control may be excessive; balance needed between order and freedom.",
          },
        },
        {
          id: "cieisoc-u3-c1-q41",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might informal social control be more effective than formal control for most people?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Informal effectiveness",
                statement: "Constant, personal, cheap enforcement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Informal control operates constantly in daily life.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is personal and cheap compared to formal mechanisms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Constant, personal and cheap enforcement makes informal control effective.",
          },
        },
        {
          id: "cieisoc-u3-c1-q42",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'going native' affects research on social control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Going native",
                statement: "Losing objectivity undermines analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Researchers may adopt the group's values and lose objectivity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This undermines analysis of control mechanisms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Researchers must maintain critical distance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Going native undermines objective analysis of social control.",
          },
        },
        {
          id: "cieisoc-u3-c1-q43",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate restorative justice as an alternative to punishment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Restorative justice evaluation",
                statement: "Repair vs limits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: repairs harm and involves victims meaningfully.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: may reduce reoffending through reconciliation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: not suitable for all crimes (e.g. murder).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: victims may not want to meet offenders.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Restorative justice repairs harm but unsuitable for all crimes and victims' wishes vary.",
          },
        },
        {
          id: "cieisoc-u3-c1-q44",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of internal social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Being fined" },
              { id: "b", text: "Peer pressure" },
              { id: "c", text: "Feeling guilty" },
              { id: "d", text: "Arrest" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal control",
                statement: "Conscience/guilt self-regulation.",
              },
            ],
            steps: [
              {
                reasoning: "Feeling guilty is internal control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Feeling guilty.",
          },
        },
        {
          id: "cieisoc-u3-c1-q45",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'conformity'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conformity",
                statement: "Behaving according to norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Conformity = matching expected behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Maintained through social control.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Behaving according to norms; maintained by social control.",
          },
        },
        {
          id: "cieisoc-u3-c1-q46",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'moral panic' leads to increased social control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moral panic",
                statement: "Exaggerated fear → harsh response.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Media amplifies fears about deviant groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Public demands action → stricter laws.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Formal control increases, sometimes disproportionately.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Media panic → public demand → stricter laws → increased control.",
          },
        },
        {
          id: "cieisoc-u3-c1-q47",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the use of surveillance (CCTV, data tracking) as social control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Surveillance control",
                statement: "Deterrence vs privacy concerns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Surveillance deters crime by increasing detection risk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It helps police investigate and monitor offenders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But threatens privacy and civil liberties.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Balance needed between security and freedom.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Surveillance deters crime but threatens privacy; balance needed.",
          },
        },
        {
          id: "cieisoc-u3-c1-q48",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a type of social control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Informal" },
              { id: "b", text: "Education" },
              { id: "c", text: "Internal" },
              { id: "d", text: "Formal" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control types",
                statement: "Internal, informal, formal — education separate.",
              },
            ],
            steps: [
              {
                reasoning: "Education is socialisation, not control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(d) Education.",
          },
        },
        {
          id: "cieisoc-u3-c1-q49",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'deterrence'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deterrence",
                statement: "Punishment preventing crime through fear.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deterrence = preventing crime via fear of punishment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Can be general (all) or specific (offender).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Punishment preventing crime through fear of consequences.",
          },
        },
        {
          id: "cieisoc-u3-c1-q50",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically assess the view that 'social media has weakened formal social control.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media and control",
                statement: "Online platforms enable evasion and new forms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social media enables anonymous deviance hard to police.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But platforms also enable surveillance and reporting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Formal control adapts to new technologies.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakened in some ways but transformed rather than eliminated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Social media creates new challenges but formal control adapts rather than weakens.",
          },
        },
      ],
    },
  ],
};
