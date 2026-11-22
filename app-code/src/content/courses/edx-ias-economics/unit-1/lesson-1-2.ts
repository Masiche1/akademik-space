import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "eias-econ-u1-lesson-1-2",
  code: "1-2",
  title: "Market Structures",
  goal: "I CAN compare perfect competition, monopoly, oligopoly and monopolistic competition.",
  standards: ["Edexcel IAS Economics 9EC01 Unit 1 — Introduction to Markets"],
  vocabulary: [
    {
      term: "Perfect competition",
      definition: "Many sellers, identical products, free entry.",
    },
    { term: "Monopoly", definition: "Single seller dominating the market." },
    { term: "Oligopoly", definition: "Few large firms dominate the market." },
    {
      term: "Monopolistic competition",
      definition: "Many sellers, differentiated products.",
    },
    { term: "Price maker", definition: "Firm able to set its own price." },
    { term: "Price taker", definition: "Firm must accept the market price." },
  ],
  concepts: [
    {
      id: "eias-econ-u1-structures",
      title: "Market Structure Comparison",
      skill: "Compare the four main market structures.",
      lesson: {
        sections: [
          {
            heading: "The four structures",
            body: "**Perfect competition**: many firms, identical products, no barriers — firms are price takers, zero economic profit long-run. **Monopoly**: one firm, high barriers — price maker, supernormal profit possible. **Oligopoly**: few firms, high barriers — interdependent pricing, non-price competition. **Monopolistic competition**: many firms, differentiated products — some price power via branding.\n\n**Real examples**: PC = agricultural commodities; monopoly = utilities/patents; oligopoly = airlines, supermarkets; monopolistic comp = restaurants, clothing.",
          },
          {
            heading: "Efficiency comparison",
            body: "PC is most efficient — P=MC, allocative + productive efficiency. Monopoly least efficient — P>MC, deadweight loss. Oligopoly/monopolistic comp fall between — some inefficiency but may drive innovation.\n\n**Contestable markets**: even monopolies behave competitively if entry barriers are low.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Four firms control 85% of smartphone market. Structure?",
          solution: "Oligopoly.",
        },
      },
      questions: [
        {
          id: "eias-econ-u1-ms-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What defines a monopoly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many sellers" },
              { id: "b", text: "Free entry" },
              { id: "c", text: "Single seller dominating the market" },
              { id: "d", text: "Identical products" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monopoly",
                statement: "One seller.",
              },
            ],
            steps: [
              {
                reasoning: "Monopoly = single dominant seller.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Single seller",
            commonErrors: ["Oligopoly confused."],
          },
        },
        {
          id: "eias-econ-u1-ms-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two features of oligopoly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Oligopoly",
                statement: "Few firms, interdependence.",
              },
            ],
            steps: [
              {
                reasoning: "Few large firms dominate — high concentration.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Interdependent decisions — each watches rivals' prices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "High entry barriers — capital, brand, scale.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Few firms, interdependence, barriers.",
            commonErrors: ["Many firms.", "Only one."],
          },
        },
        {
          id: "eias-econ-u1-ms-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why monopolistic competition allows some price power.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monopolistic competition",
                statement: "Differentiation = power.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Products differentiated — branding, quality, location.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Customers prefer specific products — less substitution.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Firm faces downward-sloping demand — can raise price slightly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "But many rivals limit power — can't raise too far.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Differentiation gives limited price power.",
            commonErrors: ["Price taker.", "Monopoly."],
          },
        },
        {
          id: "eias-econ-u1-ms-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare perfect competition and monopoly on efficiency.",
          parts: [
            {
              label: "a",
              prompt: "Explain allocative efficiency in each.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain productive efficiency in each.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Efficiency",
                statement: "P=MC vs P>MC.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) PC: P=MC — allocatively efficient, resources optimally allocated.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Monopoly: P>MC — under-provision, deadweight loss.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) PC: produces at minimum average cost — productively efficient.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Monopoly: may produce below capacity — X-inefficiency possible.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) PC alloc eff, monopoly DWL (b) PC prod eff, monopoly X-ineff",
            commonErrors: ["Monopoly efficient.", "No distinction."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u1-game",
      title: "Game Theory and Oligopoly Behaviour",
      skill: "Explain how firms in oligopoly use game theory.",
      lesson: {
        sections: [
          {
            heading: "Game theory basics",
            body: "**Payoff matrix**: shows outcomes for each firm's strategy combination. **Dominant strategy**: best response regardless of rivals' actions. **Nash equilibrium**: no firm can improve by changing strategy alone.\n\n**Prisoner's dilemma**: both firms would benefit from cooperation but each has incentive to cheat → suboptimal outcome.",
          },
          {
            heading: "Oligopoly strategies",
            body: "**Price leadership**: one firm sets price, others follow. **Collusion**: firms agree on prices/output — illegal in most countries. **Non-price competition**: advertising, branding, service — avoid direct price wars. **Kinked demand curve**: rivals match price cuts but not increases — price rigidity.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Two firms both advertise heavily though neither wants to. Game theory explains?",
          solution:
            "Prisoner's dilemma — dominant strategy leads to suboptimal outcome.",
        },
      },
      questions: [
        {
          id: "eias-econ-u1-gt-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a Nash equilibrium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Highest profit" },
              {
                id: "b",
                text: "No firm can improve by changing strategy alone",
              },
              { id: "c", text: "Price war" },
              { id: "d", text: "Collusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nash equilibrium",
                statement: "Stable strategies.",
              },
            ],
            steps: [
              {
                reasoning: "Nash = stable, no unilateral improvement.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Stable strategies",
            commonErrors: ["Highest profit confused."],
          },
        },
        {
          id: "eias-econ-u1-gt-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons oligopolists avoid price competition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Oligopoly behaviour",
                statement: "Interdependence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Price wars reduce everyone's profit — prisoner's dilemma.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Rivals may match cuts — no gain in market share.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Prefer non-price competition — advertising, service, quality.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Price wars hurt all; prefer non-price competition.",
            commonErrors: ["Only one.", "Collusion only."],
          },
        },
        {
          id: "eias-econ-u1-gt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the prisoner's dilemma in oligopoly pricing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prisoner's dilemma",
                statement: "Defection dominates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both firms would profit most by colluding on high prices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "But each has incentive to undercut — grab more market share.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Rational self-interest → both cut prices → lower profits for all.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Outcome worse than cooperation — but individually rational.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Cheating dominates → both worse off.",
            commonErrors: ["Collusion succeeds.", "No dilemma."],
          },
        },
        {
          id: "eias-econ-u1-gt-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two supermarkets consider a price war.",
          parts: [
            {
              label: "a",
              prompt: "Explain why both might cut prices using game theory.",
              marks: 4,
            },
            { label: "b", prompt: "Suggest a better strategy.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Game theory application",
                statement: "Dominant strategy trap.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Each fears rival undercutting — cutting feels safer.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Both cut → prisoner's dilemma → margins collapse.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Non-price competition — loyalty schemes, service, quality.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Or tacit collusion — price leadership, follow-the-leader.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) dilemma trap (b) non-price or collusion",
            commonErrors: ["War good.", "No alternative."],
          },
        },
      ],
    },
  ],
};
