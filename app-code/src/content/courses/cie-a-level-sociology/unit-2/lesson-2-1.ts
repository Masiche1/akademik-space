import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "asoc-u2-lesson-2-1",
  code: "2-1",
  title: "Socialisation and Agents of Socialisation",
  goal: "I CAN explain socialisation and evaluate the main agents of socialisation.",
  standards: ["9699: Socialisation, culture and identity"],
  vocabulary: [
    {
      term: "Socialisation",
      definition: "Process of learning norms, values and roles of society.",
    },
    {
      term: "Primary socialisation",
      definition: "Early socialisation in family — foundation of identity.",
    },
    {
      term: "Secondary socialisation",
      definition: "Later socialisation in school, peers, media, work.",
    },
    {
      term: "Agent of socialisation",
      definition:
        "Institution transmitting culture — family, school, peers, media.",
    },
    {
      term: "Role",
      definition: "Expected behaviour attached to a social position.",
    },
    {
      term: "Social identity",
      definition: "Part of self-concept derived from group membership.",
    },
  ],
  concepts: [
    {
      id: "asoc-u2-socialisation",
      title: "Socialisation process",
      skill: "Explain primary and secondary socialisation.",
      lesson: {
        sections: [
          {
            heading: "What is socialisation?",
            body: "Lifelong process of learning society's norms, values, beliefs and roles. Without it, humans couldn't function socially — we learn language, customs, expectations from others.",
          },
          {
            heading: "Primary socialisation",
            body: "Occurs in early childhood, mainly through family. Child learns language, basic norms, gender roles, emotional bonds. Foundation of personality and identity — most influential stage.",
          },
          {
            heading: "Secondary socialisation",
            body: "Occurs throughout life via school, peers, media, religion, workplace. Extends and sometimes challenges primary socialisation. School teaches formal knowledge and citizenship; peers shape subcultures.",
          },
        ],
        keyFormulas: [
          {
            name: "Socialisation",
            statement:
              "Primary=family+early; Secondary=school+peers+media+lifelong.",
          },
        ],
        workedExample: {
          problem: "How does socialisation differ between cultures?",
          solution:
            "Different agents transmit different norms — e.g. independence vs interdependence values in Western vs collectivist cultures.",
        },
      },
      questions: [
        {
          id: "asoc-u2-so-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is socialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Biological development" },
              { id: "b", text: "Learning norms, values and roles of society" },
              { id: "c", text: "Economic growth" },
              { id: "d", text: "Genetic inheritance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Socialisation",
                statement: "Learning norms/values/roles.",
              },
            ],
            steps: [
              {
                reasoning: "Socialisation = learning society.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Learning norms/values/roles",
            commonErrors: ["Confusing with biology."],
          },
        },
        {
          id: "asoc-u2-so-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is primary socialisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary socialisation",
                statement: "Early socialisation in family.",
              },
            ],
            steps: [
              {
                reasoning: "Early childhood/family.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Foundation of identity.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Early socialisation in family — foundation of identity.",
            commonErrors: ["Saying it's school."],
          },
        },
        {
          id: "asoc-u2-so-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare primary and secondary socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Primary vs secondary",
                statement: "Family+early vs school+peers+lifelong.",
              },
            ],
            steps: [
              {
                reasoning: "Primary: family, early, foundational.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Secondary: school/peers/media, lifelong.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Different agents and stages.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Primary=family+early; secondary=school+peers+lifelong.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "asoc-u2-so-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Socialisation.",
          parts: [
            { label: "a", prompt: "Define socialisation.", marks: 1 },
            { label: "b", prompt: "Define primary socialisation.", marks: 2 },
            { label: "c", prompt: "Define secondary socialisation.", marks: 2 },
            {
              label: "d",
              prompt: "Why is primary socialisation most influential?",
              marks: 2,
            },
            {
              label: "e",
              prompt: "How does socialisation differ between cultures?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Socialisation",
                statement: "Definitions+comparison+cultural variation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Learning norms/values.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Family+early.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Foundation of identity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "School/peers/media.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Lifelong.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Forms personality early.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Strong emotional bonds.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Different norms transmitted.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Example given.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) learning (b) primary (c) secondary (d) foundational (e) cultural variation",
          },
        },
        {
          id: "asoc-u2-so-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When does primary socialisation mainly occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Retirement, through community groups" },
              { id: "b", text: "Adolescence, mainly through peers" },
              { id: "c", text: "Early childhood, mainly through the family" },
              { id: "d", text: "Adulthood, mainly through work" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary socialisation",
                statement: "Early childhood via family.",
              },
            ],
            steps: [
              {
                reasoning: "Primary = early + family.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Early childhood via family",
            commonErrors: ["Confusing with secondary."],
          },
        },
        {
          id: "asoc-u2-so-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which agent is most associated with secondary socialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Family" },
              { id: "b", text: "School" },
              { id: "c", text: "Primary socialisation" },
              { id: "d", text: "Biological inheritance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secondary agents",
                statement: "School, peers, media, work.",
              },
            ],
            steps: [
              {
                reasoning: "School is a key secondary agent.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** School",
            commonErrors: ["Saying family (primary agent)."],
          },
        },
        {
          id: "asoc-u2-so-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a 'role' in sociology?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Expected behaviour attached to a social position",
              },
              { id: "b", text: "A job title only" },
              { id: "c", text: "A stage of development" },
              { id: "d", text: "A person's personality type" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Role",
                statement: "Expected behaviour for a position.",
              },
            ],
            steps: [
              {
                reasoning: "Role = expected behaviour.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Expected behaviour for a position",
            commonErrors: ["Confusing with personality."],
          },
        },
        {
          id: "asoc-u2-so-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is socialisation described as 'lifelong'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It only happens at school" },
              { id: "b", text: "It ends in childhood" },
              { id: "c", text: "It is purely biological" },
              {
                id: "d",
                text: "Secondary socialisation continues throughout life via school, peers, media and work",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lifelong socialisation",
                statement: "Secondary agents act across the life course.",
              },
            ],
            steps: [
              {
                reasoning: "Agents act throughout life.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Continues throughout life",
            commonErrors: ["Saying it ends in childhood."],
          },
        },
        {
          id: "asoc-u2-so-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a survey of 200 people, 55% said the family most influenced their values. How many people is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 110 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "55% of 200 = 0.55 x 200 = 110.",
              },
            ],
            steps: [
              { reasoning: "Convert 55% to 0.55.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.55 by 200 to get 110.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "110",
            commonErrors: ["Using 55 instead of 0.55."],
          },
        },
        {
          id: "asoc-u2-so-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 400 respondents, 25% identified school as their main agent of socialisation. How many respondents is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 100 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "25% of 400 = 0.25 x 400 = 100.",
              },
            ],
            steps: [
              { reasoning: "Convert 25% to 0.25.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.25 by 400 to get 100.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "100",
            commonErrors: ["Reporting 0.25 instead of 100."],
          },
        },
        {
          id: "asoc-u2-so-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A study of 300 people found that 40% cited peers as an influential agent. How many people is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 120 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "40% of 300 = 0.4 x 300 = 120.",
              },
            ],
            steps: [
              { reasoning: "Convert 40% to 0.4.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.4 by 300 to get 120.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "120",
            commonErrors: ["Using 40 instead of 0.4."],
          },
        },
        {
          id: "asoc-u2-so-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The share of people naming the family as the main influence fell from 60% to 45% among 400 respondents. By how many fewer respondents did it fall?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change in respondents",
                statement: "60% of 400 = 240; 45% of 400 = 180; fall = 60.",
              },
            ],
            steps: [
              {
                reasoning: "240 respondents at 60%; 180 at 45%.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Decrease = 240 - 180 = 60.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "60",
            commonErrors: ["Answering 15 (percentage points) not the number of respondents."],
          },
        },
        {
          id: "asoc-u2-so-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Three agents of socialisation — school, peers and media — each account for an equal share of 480 respondents naming them as influential. How many respondents name each agent?",
          response: { type: "numeric", parts: [{ label: "a", answer: 160 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equal shares",
                statement: "480 / 3 = 160 per agent.",
              },
            ],
            steps: [
              {
                reasoning: "Divide the total by the number of agents.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "480 / 3 = 160.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "160",
            commonErrors: ["Dividing by 4 or using a percentage."],
          },
        },
        {
          id: "asoc-u2-so-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which best explains why socialisation differs between cultures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Socialisation is purely genetic" },
              { id: "b", text: "Different agents transmit different norms and values" },
              { id: "c", text: "All cultures socialise children identically" },
              { id: "d", text: "Only schools differ between cultures" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cultural variation",
                statement: "Agents transmit culture-specific norms.",
              },
            ],
            steps: [
              {
                reasoning: "Agents carry different cultural content.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Different norms transmitted",
            commonErrors: ["Claiming socialisation is identical everywhere."],
          },
        },
        {
          id: "asoc-u2-so-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What distinguishes secondary from primary socialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It happens only in childhood" },
              { id: "b", text: "It occurs later via school, peers, media and work, continuing lifelong" },
              { id: "c", text: "It involves no learning" },
              { id: "d", text: "It is done only by the family" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secondary vs primary",
                statement: "Later, lifelong, wider agents.",
              },
            ],
            steps: [
              {
                reasoning: "Secondary = later + lifelong.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Later, lifelong, wider agents",
            commonErrors: ["Confusing the two stages."],
          },
        },
        {
          id: "asoc-u2-so-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Socialisation.",
          parts: [
            { label: "a", prompt: "Define socialisation.", marks: 1 },
            {
              label: "b",
              prompt: "Explain why primary socialisation is most influential.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Give two agents of secondary socialisation.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain what is meant by 'role'.",
              marks: 2,
            },
            {
              label: "e",
              prompt: "Suggest how socialisation can differ between cultures.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Socialisation",
                statement: "Definition+primary+agents+role+culture.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Learning norms/values/roles.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Early + emotional bonds.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Forms foundation of identity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any two of school/peers/media/work.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Correctly identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Expected behaviour for position.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Learned through socialisation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Different norms/values transmitted.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Example given (e.g. individualist vs collectivist).",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) learning (b) primary influence (c) agents (d) role (e) cultural variation",
          },
        },
      ],
    },
    {
      id: "asoc-u2-agents",
      title: "Agents of socialisation",
      skill: "Evaluate the influence of family, school, peers and media.",
      lesson: {
        sections: [
          {
            heading: "Family",
            body: "Most influential agent — primary socialisation. Transmits values, gender roles, class background. Different family types (nuclear, extended, single-parent) socialise differently. Class and ethnicity shape experiences.",
          },
          {
            heading: "School and peers",
            body: "School: formal knowledge, citizenship, hidden curriculum (punctuality, obedience). Peer group: subcultures, youth culture, status. Peers gain influence in adolescence — can challenge family values.",
          },
          {
            heading: "Media and religion",
            body: "Media: shapes attitudes, consumer culture, gender stereotypes, moral panics. Religion: transmits beliefs, moral codes, community belonging. Workplace: occupational socialisation into adult roles.",
          },
        ],
        keyFormulas: [
          {
            name: "Agents",
            statement:
              "Family>school>peers>media>religion — varying influence.",
          },
        ],
        workedExample: {
          problem: "How does school socialise differently by class?",
          solution:
            "Middle-class values dominate curriculum; working-class students may feel alienated — hidden curriculum reproduces class inequality.",
        },
      },
      questions: [
        {
          id: "asoc-u2-ag-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the most influential agent of socialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peers" },
              { id: "b", text: "Family" },
              { id: "c", text: "School" },
              { id: "d", text: "Media" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Family",
                statement: "Most influential agent.",
              },
            ],
            steps: [
              {
                reasoning: "Family = primary agent.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Family",
            commonErrors: ["Saying media."],
          },
        },
        {
          id: "asoc-u2-ag-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'hidden curriculum'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hidden curriculum",
                statement:
                  "Unwritten lessons — punctuality, obedience, values.",
              },
            ],
            steps: [
              {
                reasoning: "Unwritten lessons learned.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Punctuality, obedience, values.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Unwritten lessons — punctuality, obedience, values.",
            commonErrors: ["Saying it's the formal syllabus."],
          },
        },
        {
          id: "asoc-u2-ag-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the influence of peer groups on socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer influence",
                statement: "Subcultures/youth culture vs family values.",
              },
            ],
            steps: [
              {
                reasoning: "Peers shape subcultures and identity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Strong in adolescence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Can challenge family values.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Peers shape identity/subcultures; strong in adolescence; can challenge family.",
            commonErrors: ["Ignoring positive/negative aspects."],
          },
        },
        {
          id: "asoc-u2-ag-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Agents of socialisation.",
          parts: [
            { label: "a", prompt: "Name three agents.", marks: 1 },
            { label: "b", prompt: "Why is family most influential?", marks: 2 },
            { label: "c", prompt: "What is hidden curriculum?", marks: 2 },
            { label: "d", prompt: "How does media socialise?", marks: 2 },
            { label: "e", prompt: "Evaluate peer group influence.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agents",
                statement: "Names+family+hidden curriculum+media+peers.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Any three agents.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Primary agent.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Early emotional bonds.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Unwritten lessons.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Values/behaviours.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Shapes attitudes/stereotypes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Consumer culture.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Subcultures/identity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Challenges family.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) agents (b) family primary (c) hidden curriculum (d) media shapes attitudes (e) peer evaluation",
          },
        },
        {
          id: "asoc-u2-ag-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which agent transmits values mainly through early childhood?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The government" },
              { id: "b", text: "The family" },
              { id: "c", text: "The workplace" },
              { id: "d", text: "The media" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Family agent",
                statement: "Primary agent in early childhood.",
              },
            ],
            steps: [
              {
                reasoning: "Family = primary agent.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The family",
            commonErrors: ["Saying media."],
          },
        },
        {
          id: "asoc-u2-ag-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'hidden curriculum'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The formal examination syllabus" },
              {
                id: "b",
                text: "Unwritten lessons such as punctuality and obedience learned at school",
              },
              { id: "c", text: "Religious teaching in school" },
              { id: "d", text: "Homework set by teachers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hidden curriculum",
                statement: "Unwritten lessons of schooling.",
              },
            ],
            steps: [
              {
                reasoning: "Hidden = unwritten school lessons.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Unwritten lessons",
            commonErrors: ["Saying it's the formal syllabus."],
          },
        },
        {
          id: "asoc-u2-ag-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which agent of socialisation gains particular influence during adolescence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Primary socialisation" },
              { id: "b", text: "Biological maturation" },
              { id: "c", text: "Peer group" },
              { id: "d", text: "Genetic inheritance" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer influence",
                statement: "Peers peak in adolescence.",
              },
            ],
            steps: [
              {
                reasoning: "Peers strong in adolescence.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Peer group",
            commonErrors: ["Saying family remains strongest."],
          },
        },
        {
          id: "asoc-u2-ag-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does the media act as an agent of socialisation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It shapes attitudes, stereotypes and consumer culture",
              },
              { id: "b", text: "It has no socialising effect" },
              { id: "c", text: "It only transmits religious beliefs" },
              { id: "d", text: "It replaces the family entirely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media agent",
                statement: "Shapes attitudes and culture.",
              },
            ],
            steps: [
              {
                reasoning: "Media shapes attitudes/stereotypes.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Shapes attitudes/stereotypes",
            commonErrors: ["Saying media has no effect."],
          },
        },
        {
          id: "asoc-u2-ag-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a survey of 400 people, 30% said peers most influenced their values. How many people is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 120 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "30% of 400 = 0.3 x 400 = 120.",
              },
            ],
            steps: [
              { reasoning: "Convert 30% to 0.3.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.3 by 400 to get 120.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "120",
            commonErrors: ["Using 30 instead of 0.3."],
          },
        },
        {
          id: "asoc-u2-ag-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 250 students, 60% reported learning punctuality at school through the hidden curriculum. How many students is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 150 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "60% of 250 = 0.6 x 250 = 150.",
              },
            ],
            steps: [
              { reasoning: "Convert 60% to 0.6.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.6 by 250 to get 150.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "150",
            commonErrors: ["Reporting 0.6 instead of 150."],
          },
        },
        {
          id: "asoc-u2-ag-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three agents of socialisation — family, school and media — are cited equally by 300 respondents as most influential. How many respondents cite each agent?",
          response: { type: "numeric", parts: [{ label: "a", answer: 100 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equal shares",
                statement: "300 / 3 = 100 per agent.",
              },
            ],
            steps: [
              {
                reasoning: "Divide total by number of agents.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "300 / 3 = 100.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "100",
            commonErrors: ["Dividing by 2 or 4 instead of 3."],
          },
        },
        {
          id: "asoc-u2-ag-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The share of respondents naming the family as most influential fell from 50% to 35% among 200 people. By how many fewer respondents did it fall?",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change in respondents",
                statement: "50% of 200 = 100; 35% of 200 = 70; fall = 30.",
              },
            ],
            steps: [
              {
                reasoning: "100 respondents at 50%; 70 at 35%.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Decrease = 100 - 70 = 30.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "30",
            commonErrors: ["Answering 15 (percentage points) instead of respondents."],
          },
        },
        {
          id: "asoc-u2-ag-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Of 500 people surveyed, 18% said religion most influenced their values. How many people is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 90 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "18% of 500 = 0.18 x 500 = 90.",
              },
            ],
            steps: [
              { reasoning: "Convert 18% to 0.18.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.18 by 500 to get 90.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "90",
            commonErrors: ["Using 18 instead of 0.18."],
          },
        },
        {
          id: "asoc-u2-ag-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why might the media be considered a weaker agent of socialisation than the family?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Its influence is indirect compared with the close emotional bonds of the family",
              },
              { id: "b", text: "It is illegal in most societies" },
              { id: "c", text: "It operates only in adulthood" },
              { id: "d", text: "It has no influence at all" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media vs family",
                statement: "Indirect vs primary emotional influence.",
              },
            ],
            steps: [
              {
                reasoning: "Media influence is second-hand.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Indirect vs close bonds",
            commonErrors: ["Saying media has zero effect."],
          },
        },
        {
          id: "asoc-u2-ag-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'occupational socialisation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Socialisation during childhood only" },
              { id: "b", text: "Unemployment benefit process" },
              { id: "c", text: "Training for a specific qualification" },
              { id: "d", text: "Learning adult work roles through the workplace" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Occupational socialisation",
                statement: "Workplace transmits work roles.",
              },
            ],
            steps: [
              {
                reasoning: "Workplace teaches adult roles.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Learning adult work roles",
            commonErrors: ["Confusing with formal training."],
          },
        },
        {
          id: "asoc-u2-ag-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Agents of socialisation.",
          parts: [
            { label: "a", prompt: "Name three agents of socialisation.", marks: 1 },
            {
              label: "b",
              prompt: "Explain why the family is the most influential agent.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain what is meant by the hidden curriculum.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain how the workplace socialises adults.",
              marks: 2,
            },
            {
              label: "e",
              prompt: "Evaluate the influence of the media as an agent of socialisation.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agents",
                statement: "Names+family+hidden curriculum+workplace+media.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Any three agents named.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Primary agent + early bonds.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Forms identity foundation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Unwritten lessons learned.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Punctuality, obedience, values.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Teaches work roles/norms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Occupational socialisation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Shapes attitudes/stereotypes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Influence is indirect/second-hand.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) agents (b) family (c) hidden curriculum (d) workplace (e) media evaluation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u2-2-1-notes",
      title: "Socialisation — notes",
      summary:
        "Primary (family) vs secondary (school, peers, media) socialisation and agents.",
      sections: [
        {
          heading: "Socialisation",
          body: "Primary=family+early+foundational; secondary=school+peers+media+lifelong.",
        },
        {
          heading: "Agents",
          body: "Family>school>peers>media>religion. Hidden curriculum=unwritten lessons.",
        },
      ],
    },
  ],
};
