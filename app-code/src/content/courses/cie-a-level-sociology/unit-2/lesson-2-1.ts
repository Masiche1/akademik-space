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
              { id: "a", text: "Learning norms, values and roles of society" },
              { id: "b", text: "Biological development" },
              { id: "c", text: "Genetic inheritance" },
              { id: "d", text: "Economic growth" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Family" },
              { id: "b", text: "Media" },
              { id: "c", text: "Peers" },
              { id: "d", text: "School" },
            ],
            correctChoiceId: "a",
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
