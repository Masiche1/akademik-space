import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "asoc-u5-lesson-5-1",
  code: "5-1",
  title: "Perspectives on Globalisation",
  goal: "I CAN describe globalisation and evaluate perspectives on it.",
  standards: [
    "9699 P4: Key debates, concepts and perspectives on globalisation",
  ],
  vocabulary: [
    {
      term: "Globalisation",
      definition:
        "Increasing interconnectedness of world societies economically, culturally, politically.",
    },
    {
      term: "Glocalisation",
      definition: "Local adaptation of global products/cultures.",
    },
    {
      term: "Global culture",
      definition: "Shared worldwide cultural practices and symbols.",
    },
    {
      term: "Hyperglobalist",
      definition: "View that globalisation makes nation-states obsolete.",
    },
    {
      term: "Sceptic",
      definition: "View that globalisation is exaggerated or reversible.",
    },
    {
      term: "Transformationalist",
      definition: "View that globalisation is real but uneven and contested.",
    },
  ],
  concepts: [
    {
      id: "asoc-u5-perspectives",
      title: "Perspectives on globalisation",
      skill: "Compare hyperglobalist, sceptic and transformationalist views.",
      lesson: {
        sections: [
          {
            heading: "Dimensions of globalisation",
            body: "Economic: trade, investment, corporations. Cultural: media, brands, ideas spreading. Political: international organisations, governance. Social: migration, identity, inequality. Each interconnected.",
          },
          {
            heading: "Three perspectives",
            body: "Hyperglobalists (Ohmae): nation-states declining, global markets/cultures dominate. Sceptics: globalisation exaggerated — national differences persist, trade mostly regional. Transformationalists: globalisation real but uneven, contested, still evolving.",
          },
          {
            heading: "Debates",
            body: "Does globalisation homogenise culture or create hybrid/glocal forms? Does it reduce or increase inequality? Is it inevitable or reversible? Evidence supports mixed/transformationalist view.",
          },
        ],
        keyFormulas: [
          {
            name: "Globalisation views",
            statement:
              "Hyperglobalist=states obsolete; Sceptic=exaggerated; Transformationalist=real but uneven.",
          },
        ],
        workedExample: {
          problem: "What is glocalisation?",
          solution:
            "Global products adapted to local cultures — McDonald's menus vary by country, hybrid cultural forms emerge.",
        },
      },
      questions: [
        {
          id: "asoc-u5-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the hyperglobalist view claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing has changed" },
              { id: "b", text: "Only economics matters" },
              { id: "c", text: "Nation-states are becoming obsolete" },
              { id: "d", text: "Globalisation is exaggerated" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hyperglobalist",
                statement: "States obsolete.",
              },
            ],
            steps: [
              {
                reasoning: "Hyperglobalist = states decline.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Nation-states are becoming obsolete",
            commonErrors: ["Confusing with sceptic."],
          },
        },
        {
          id: "asoc-u5-pe-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is glocalisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glocalisation",
                statement: "Global adapted to local.",
              },
            ],
            steps: [
              { reasoning: "Global + local mix.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Examples: adapted products/cultures.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Global products/cultures adapted to local contexts.",
            commonErrors: ["Saying it's purely global."],
          },
        },
        {
          id: "asoc-u5-pe-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare sceptic and transformationalist views of globalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sceptic vs transformationalist",
                statement: "Exaggerated vs real-but-uneven.",
              },
            ],
            steps: [
              {
                reasoning: "Sceptic: exaggerated/regional.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Transformationalist: real, uneven, contested.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Different conclusions.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Sceptic=doubts scale; transformationalist=accepts uneven reality.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "asoc-u5-pe-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Globalisation perspectives.",
          parts: [
            { label: "a", prompt: "Define globalisation.", marks: 1 },
            { label: "b", prompt: "Three dimensions?", marks: 3 },
            { label: "c", prompt: "Three perspectives?", marks: 3 },
            { label: "d", prompt: "Which is most supported?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation",
                statement: "Definition+dimensions+views+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Interconnectedness.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Economic/cultural/political.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Or social dimension.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Hyperglobalist/sceptic/transformationalist.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Correct descriptions.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Transformationalist best fit.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Evidence-based judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) definition (b) dimensions (c) perspectives (d) evaluation",
          },
        },
        {
          id: "asoc-u5-pe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which perspective argues that globalisation is exaggerated and national differences persist?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sceptic" },
              { id: "b", text: "Transformationalist" },
              { id: "c", text: "Hyperglobalist" },
              { id: "d", text: "Modernisation theorist" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sceptic",
                statement: "Globalisation exaggerated.",
              },
            ],
            steps: [
              {
                reasoning: "Sceptic = doubts scale of change.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Sceptic",
            commonErrors: ["Confusing with transformationalist."],
          },
        },
        {
          id: "asoc-u5-pe-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which perspective sees globalisation as real but uneven and contested?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sceptic" },
              { id: "b", text: "Hyperglobalist" },
              { id: "c", text: "Dependency theorist" },
              { id: "d", text: "Transformationalist" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transformationalist",
                statement: "Real but uneven.",
              },
            ],
            steps: [
              {
                reasoning: "Transformationalist = uneven reality.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Transformationalist",
            commonErrors: ["Confusing with hyperglobalist."],
          },
        },
        {
          id: "asoc-u5-pe-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is NOT a dimension of globalisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complete national isolation" },
              { id: "b", text: "Political international organisations" },
              { id: "c", text: "Economic flows of trade and investment" },
              { id: "d", text: "Cultural spread of media and brands" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dimensions",
                statement: "Economic, cultural, political, social.",
              },
            ],
            steps: [
              {
                reasoning: "Isolation is opposite of globalisation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Complete national isolation",
            commonErrors: ["Picking a real dimension."],
          },
        },
        {
          id: "asoc-u5-pe-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "McDonald's adapting its menus to local tastes in different countries is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dependency" },
              { id: "b", text: "Homogenisation" },
              { id: "c", text: "Colonialism" },
              { id: "d", text: "Glocalisation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glocalisation",
                statement: "Global adapted to local.",
              },
            ],
            steps: [
              {
                reasoning: "Local adaptation = glocalisation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(d)** Glocalisation",
            commonErrors: ["Calling it homogenisation."],
          },
        },
        {
          id: "asoc-u5-pe-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Ohmae is most associated with which perspective on globalisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sceptic" },
              { id: "b", text: "Hyperglobalist" },
              { id: "c", text: "Transformationalist" },
              { id: "d", text: "Marxist" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ohmae",
                statement: "Hyperglobalist thinker.",
              },
            ],
            steps: [
              {
                reasoning: "Ohmae = states obsolete view.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Hyperglobalist",
            commonErrors: ["Confusing with other theorists."],
          },
        },
        {
          id: "asoc-u5-pe-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country's exports grew from $40 billion to $50 billion. What was the percentage increase?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage increase",
                statement: "Change/original x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Find increase: 50 - 40 = 10.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "10/40 x 100 = 25%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "25",
            commonErrors: ["Dividing by the new value."],
          },
        },
        {
          id: "asoc-u5-pe-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey, 240 of 600 respondents said globalisation had improved their lives. What percentage is that?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              { reasoning: "240/600 = 0.4.", marks: 1, markCode: "AO1" },
              {
                reasoning: "0.4 x 100 = 40%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "40",
            commonErrors: ["Dividing the wrong way round."],
          },
        },
        {
          id: "asoc-u5-pe-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A region's share of world trade fell from 15% to 12%. What was the percentage-point decrease?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage points",
                statement: "Simple subtraction of percentages.",
              },
            ],
            steps: [
              { reasoning: "15 - 12 = 3.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Expressed as percentage points.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "3",
            commonErrors: ["Calculating a percentage change instead."],
          },
        },
        {
          id: "asoc-u5-pe-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Country A's GDP per capita is $30,000 and Country B's is $6,000. How many times larger is A's GDP per capita?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio",
                statement: "Larger/smaller.",
              },
            ],
            steps: [
              { reasoning: "30000/6000 = 5.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Five times larger.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "5",
            commonErrors: ["Subtracting instead of dividing."],
          },
        },
        {
          id: "asoc-u5-pe-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by 'glocalisation' and give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glocalisation",
                statement: "Global products adapted to local cultures.",
              },
            ],
            steps: [
              {
                reasoning: "Global culture adapted locally.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Example: McDonald's local menus.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shows hybrid cultural form.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Global products/cultures adapted to local contexts, e.g. localised fast-food menus.",
            commonErrors: ["Giving no example."],
          },
        },
        {
          id: "asoc-u5-pe-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the hyperglobalist and sceptic views of globalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hyper vs sceptic",
                statement: "States obsolete vs exaggerated.",
              },
            ],
            steps: [
              {
                reasoning: "Hyperglobalist: states obsolete, markets dominate.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sceptic: exaggerated, regional differences persist.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Opposite conclusions about scale/irreversibility.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Hyperglobalist sees nation-states declining; sceptic doubts the scale of change.",
            commonErrors: ["Only describing one view."],
          },
        },
        {
          id: "asoc-u5-pe-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Perspectives on globalisation — extended response.",
          parts: [
            { label: "a", prompt: "Define globalisation.", marks: 1 },
            {
              label: "b",
              prompt: "Identify two dimensions of globalisation.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Name and briefly describe the three main perspectives.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Evaluate the claim that globalisation produces a single homogeneous world culture.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Perspectives",
                statement: "Definition+dimensions+views+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Increasing interconnectedness.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two dimensions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Correct and clear.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Hyperglobalist/sceptic/transformationalist named.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Descriptions accurate.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clear presentation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Glocalisation/hybrid forms counter claim.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Local identities persist.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) definition (b) dimensions (c) perspectives (d) evaluation",
          },
        },
      ],
    },
    {
      id: "asoc-u5-identity-power",
      title: "Globalisation, Identity and Power",
      skill: "Explain how globalisation affects identity and power.",
      lesson: {
        sections: [
          {
            heading: "Globalisation and identity",
            body: "Global flows bring new identities — cosmopolitan, hybrid, transnational. Local identities persist or are reinforced in response ('glocal' identity). Diasporas maintain connections across borders. Identity becomes more complex and layered.",
          },
          {
            heading: "Globalisation and power",
            body: "Power shifts: multinational corporations rival states; international organisations (IMF, WTO) shape policy; 'global elite' vs marginalised groups. Nation-states retain power but constrained by global markets and agreements.",
          },
          {
            heading: "Resistance",
            body: "Anti-globalisation movements resist corporate dominance. Local movements defend cultures against homogenisation. Power is contested, not one-directional.",
          },
        ],
        keyFormulas: [
          {
            name: "Identity/power",
            statement:
              "Identity: hybrid/diaspora; Power: corporations+IOs vs states; resistance exists.",
          },
        ],
        workedExample: {
          problem: "How does globalisation affect political power?",
          solution:
            "States constrained by global markets and IOs; corporations gain influence; power becomes more diffuse.",
        },
      },
      questions: [
        {
          id: "asoc-u5-ip-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a diaspora?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A global corporation" },
              { id: "b", text: "A religious movement" },
              {
                id: "c",
                text: "Community maintaining connections across borders",
              },
              { id: "d", text: "A type of government" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diaspora",
                statement: "Cross-border community.",
              },
            ],
            steps: [
              {
                reasoning: "Diaspora = transnational community.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Community maintaining connections across borders",
            commonErrors: ["Confusing with migration."],
          },
        },
        {
          id: "asoc-u5-ip-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does globalisation affect political power?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Power shift",
                statement: "Corporations+IOs constrain states.",
              },
            ],
            steps: [
              {
                reasoning: "States constrained by markets/IOs.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Power becomes more diffuse.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Corporations and international organisations constrain nation-state power.",
            commonErrors: ["Saying states lose all power."],
          },
        },
        {
          id: "asoc-u5-ip-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that globalisation makes identities homogeneous.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Identity",
                statement: "Homogenisation vs hybrid/persistent.",
              },
            ],
            steps: [
              {
                reasoning: "Global culture spreads.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Local identities persist/hybridise.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Glocalisation creates mixes.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Globalisation creates hybrid identities; local ones persist and adapt.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "asoc-u5-ip-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Identity and power.",
          parts: [
            { label: "a", prompt: "Globalisation and identity?", marks: 3 },
            { label: "b", prompt: "Diaspora?", marks: 2 },
            { label: "c", prompt: "Power shifts?", marks: 2 },
            { label: "d", prompt: "Resistance to globalisation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Identity/power",
                statement: "Identity+diaspora+power+resistance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Hybrid/cosmopolitan identities.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Local persists.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Layered identity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Transnational community.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Maintains connections.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Corps/IOs constrain states.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Diffuse power.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Anti-globalisation movements.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Local defence of culture.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) identity (b) diaspora (c) power (d) resistance",
          },
        },
        {
          id: "asoc-u5-ip-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of identity combines local and global elements?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inherited identity" },
              { id: "b", text: "Fixed identity" },
              { id: "c", text: "Hybrid identity" },
              { id: "d", text: "Purely national identity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hybrid identity",
                statement: "Local + global mix.",
              },
            ],
            steps: [
              {
                reasoning: "Hybrid = layered local/global.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Hybrid identity",
            commonErrors: ["Confusing with cosmopolitan."],
          },
        },
        {
          id: "asoc-u5-ip-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Multinational corporations can rival nation-states mainly in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Territorial control" },
              { id: "b", text: "Military power" },
              { id: "c", text: "Economic influence" },
              { id: "d", text: "Citizenship rights" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Corporate power",
                statement: "Economic influence rivals states.",
              },
            ],
            steps: [
              {
                reasoning: "Corps rival states economically.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Economic influence",
            commonErrors: ["Overstating corporate power."],
          },
        },
        {
          id: "asoc-u5-ip-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Anti-globalisation movements typically aim to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resist corporate dominance and protect local culture" },
              { id: "b", text: "Increase labour migration" },
              { id: "c", text: "Promote free trade agreements" },
              { id: "d", text: "Abolish all nation-states" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resistance",
                statement: "Anti-globalisation resists corporate dominance.",
              },
            ],
            steps: [
              {
                reasoning: "Resistance targets corporate/global forces.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Resist corporate dominance and protect local culture",
            commonErrors: ["Confusing with pro-globalisation."],
          },
        },
        {
          id: "asoc-u5-ip-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Diaspora communities primarily maintain:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Purely religious identity" },
              { id: "b", text: "Only local ties in host country" },
              { id: "c", text: "No ties to country of origin" },
              { id: "d", text: "Transnational cultural and economic ties" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diaspora",
                statement: "Cross-border community ties.",
              },
            ],
            steps: [
              {
                reasoning: "Diaspora = transnational ties.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** Transnational cultural and economic ties",
            commonErrors: ["Thinking they sever origin ties."],
          },
        },
        {
          id: "asoc-u5-ip-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Political power in a globalised world is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solely held by corporations" },
              { id: "b", text: "Concentrated only in nation-states" },
              { id: "c", text: "Completely absent" },
              { id: "d", text: "More diffuse and contested" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diffuse power",
                statement: "Power spread across actors, contested.",
              },
            ],
            steps: [
              {
                reasoning: "Power spreads beyond states but persists.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** More diffuse and contested",
            commonErrors: ["Saying states lose all power."],
          },
        },
        {
          id: "asoc-u5-ip-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 800 respondents, 45% identified as cosmopolitan. How many people is that?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 360 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              { reasoning: "45% of 800 = 0.45 x 800.", marks: 1, markCode: "AO1" },
              { reasoning: "= 360.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "360",
            commonErrors: ["Calculating 45% of a different total."],
          },
        },
        {
          id: "asoc-u5-ip-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Remittances sent to a country rose from $12 billion to $15 billion. What was the percentage increase?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage increase",
                statement: "Change/original x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Increase = 15 - 12 = 3.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "3/12 x 100 = 25%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "25",
            commonErrors: ["Dividing by the new value."],
          },
        },
        {
          id: "asoc-u5-ip-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 1,200 migrants surveyed, 480 were refugees. What percentage were refugees?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "Part/whole x 100.",
              },
            ],
            steps: [
              { reasoning: "480/1200 = 0.4.", marks: 1, markCode: "AO1" },
              {
                reasoning: "0.4 x 100 = 40%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "40",
            commonErrors: ["Inverting the fraction."],
          },
        },
        {
          id: "asoc-u5-ip-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A country receives remittances equal to 8% of its GDP. If its GDP is $500 billion, what is the value of remittances?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of total",
                statement: "8% of 500.",
              },
            ],
            steps: [
              {
                reasoning: "0.08 x 500 = 40.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Remittances = $40 billion.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "40",
            commonErrors: ["Forgetting to convert the percentage."],
          },
        },
        {
          id: "asoc-u5-ip-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how globalisation can produce hybrid identities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hybrid identity",
                statement: "Local + global mix.",
              },
            ],
            steps: [
              {
                reasoning: "Global flows bring new cultural elements.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "People combine local and global.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Example or layered identity explanation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Globalisation exposes people to new cultures, creating layered hybrid identities.",
            commonErrors: ["Describing only one identity type."],
          },
        },
        {
          id: "asoc-u5-ip-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that globalisation distributes power equally.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Power distribution",
                statement: "Unequal power shifts.",
              },
            ],
            steps: [
              {
                reasoning: "Corporations and IOs gain influence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "States constrained but retain power.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Global elite vs marginalised groups.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Power shifts are unequal — elites and corporations gain while some groups are marginalised.",
            commonErrors: ["Accepting claim uncritically."],
          },
        },
        {
          id: "asoc-u5-ip-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Globalisation, identity and power — extended response.",
          parts: [
            {
              label: "a",
              prompt: "Describe two ways globalisation changes identity.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Define diaspora and give an example.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Outline two ways globalisation shifts political power.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Evaluate the view that globalisation makes identities homogeneous.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Identity/power",
                statement: "Identity+diaspora+power+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Hybrid/cosmopolitan identities.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Local persists/layered.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Transnational community.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Example given.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Corps/IOs constrain states.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Power becomes diffuse.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Hybridisation counter-argument.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Judgement reached.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) identity (b) diaspora (c) power (d) evaluation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u5-5-1-notes",
      title: "Globalisation — notes",
      summary:
        "Perspectives (hyperglobalist/sceptic/transformationalist), identity, power.",
      sections: [
        {
          heading: "Views",
          body: "Hyperglobalist=states obsolete; sceptic=exaggerated; transformationalist=real but uneven. Glocalisation=mix.",
        },
        {
          heading: "Identity/power",
          body: "Hybrid/diaspora identities; corporations+IOs constrain states; resistance exists.",
        },
      ],
    },
  ],
};
