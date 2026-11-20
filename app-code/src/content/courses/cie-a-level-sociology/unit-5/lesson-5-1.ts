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
              { id: "a", text: "Nation-states are becoming obsolete" },
              { id: "b", text: "Globalisation is exaggerated" },
              { id: "c", text: "Nothing has changed" },
              { id: "d", text: "Only economics matters" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Nation-states are becoming obsolete",
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
              {
                id: "a",
                text: "Community maintaining connections across borders",
              },
              { id: "b", text: "A global corporation" },
              { id: "c", text: "A type of government" },
              { id: "d", text: "A religious movement" },
            ],
            correctChoiceId: "a",
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
              "**(a)** Community maintaining connections across borders",
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
