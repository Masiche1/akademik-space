import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "eias-econ-u6-lesson-6-2",
  code: "6-2",
  title: "Market Structures and Game Theory",
  goal: "I CAN apply market structure analysis to business decisions.",
  standards: [
    "Edexcel IAS Economics 9EC01 Unit 6 — Business Economics and Quantitative Methods",
  ],
  vocabulary: [
    {
      term: "Price taker",
      definition: "Firm accepts market price — perfect competition.",
    },
    { term: "Price maker", definition: "Firm sets own price — monopoly." },
    {
      term: "Supernormal profit",
      definition: "Profit above normal — above minimum acceptable return.",
    },
    {
      term: "Normal profit",
      definition: "Minimum return needed to keep resources in current use.",
    },
    {
      term: "Contestable market",
      definition:
        "Market with low entry barriers — even monopoly behaves competitively.",
    },
    {
      term: "Kinked demand curve",
      definition: "Oligopoly model — rivals match price cuts not increases.",
    },
  ],
  concepts: [
    {
      id: "eias-econ-u6-structures",
      title: "Market Structures in Business",
      skill: "Apply market structure theory to firm strategy.",
      lesson: {
        sections: [
          {
            heading: "Structure implications",
            body: "**Perfect competition**: price taker, zero economic profit long-run — efficient but no differentiation. **Monopoly**: price maker, supernormal profit — barriers protect. **Oligopoly**: few firms, interdependent — non-price competition. **Monopolistic competition**: differentiated, some price power.\n\n**Business strategy**: structure determines pricing power, competitive strategy, profit potential.",
          },
          {
            heading: "Contestable markets",
            body: "Even monopoly may behave competitively if entry barriers low — threat of entry disciplines pricing. **Hit-and-run entry**: new firms enter if supernormal profits exist — contestability matters more than structure.\n\n**Example**: airline industry — oligopoly but contestable if easy entry/exit.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Local market has one dominant firm but low entry barriers. Structure?",
          solution: "Contestable monopoly — behaves competitively.",
        },
      },
      questions: [
        {
          id: "eias-econ-u6-ms-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a price taker?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sets own price" },
              { id: "b", text: "Monopoly" },
              { id: "c", text: "Oligopoly" },
              { id: "d", text: "Accepts market price" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Price taker",
                statement: "Accepts price.",
              },
            ],
            steps: [
              {
                reasoning: "Price taker = no price power.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Accepts price",
            commonErrors: ["Price maker confused."],
          },
        },
        {
          id: "eias-econ-u6-ms-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two characteristics of a contestable market.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Contestable",
                statement: "Low entry barriers.",
              },
            ],
            steps: [
              {
                reasoning: "Low entry barriers — new firms can enter easily.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Low exit barriers — firms can leave without loss.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Hit-and-run entry possible — even monopolies compete.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Low entry + exit barriers.",
            commonErrors: ["High barriers.", "Only one."],
          },
        },
        {
          id: "eias-econ-u6-ms-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the kinked demand curve model for oligopoly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kinked demand",
                statement: "Price rigidity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If firm raises price — rivals don't follow → loses share.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "If firm cuts price — rivals match → no gain in share.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Demand curve kinked at current price — price rigid.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Explains price stability in oligopolies.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Rivals match cuts not increases → rigid price.",
            commonErrors: ["Flexible price.", "No kink."],
          },
        },
        {
          id: "eias-econ-u6-ms-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A firm operates in a monopolistically competitive market.",
          parts: [
            { label: "a", prompt: "Explain its pricing power.", marks: 4 },
            { label: "b", prompt: "Suggest competitive strategy.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monopolistic comp",
                statement: "Differentiation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Differentiated product — branding, quality, service.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Limited price power — can raise price slightly without losing all customers.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Non-price competition — advertising, branding, innovation.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Niche focus — serve specific segment better than rivals.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) differentiation power (b) branding/niche",
            commonErrors: ["Price taker.", "No strategy."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u6-game",
      title: "Game Theory Applications",
      skill: "Apply game theory to business competition.",
      lesson: {
        sections: [
          {
            heading: "Game theory tools",
            body: "**Payoff matrix**: shows outcomes for each strategy combination. **Dominant strategy**: best response regardless of rivals. **Nash equilibrium**: stable outcome — no firm can improve alone.\n\n**Prisoner's dilemma**: both would benefit from cooperation but each has incentive to cheat → suboptimal outcome.",
          },
          {
            heading: "Business applications",
            body: "**Pricing**: firms avoid price wars — prisoner's dilemma. **Advertising**: heavy ad spending is dominant strategy — but reduces profits. **Collusion**: illegal but tempting — tacit collusion via price leadership.\n\n**Repeated games**: long-term relationships enable cooperation — tit-for-tat strategies.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Two firms both advertise despite reduced profits. Game theory?",
          solution: "Prisoner's dilemma — dominant strategy.",
        },
      },
      questions: [
        {
          id: "eias-econ-u6-gt-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a dominant strategy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cooperative strategy" },
              { id: "b", text: "Collusion" },
              { id: "c", text: "Best response regardless of rivals' actions" },
              { id: "d", text: "Nash equilibrium" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dominant strategy",
                statement: "Best always.",
              },
            ],
            steps: [
              {
                reasoning: "Dominant = best regardless.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Best always",
            commonErrors: ["Nash confused."],
          },
        },
        {
          id: "eias-econ-u6-gt-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two business applications of game theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Game theory apps",
                statement: "Pricing + advertising.",
              },
            ],
            steps: [
              {
                reasoning: "Pricing — avoid price wars, tacit collusion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Advertising — prisoner's dilemma of ad spending.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Market entry — deterrence strategies.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Pricing, advertising, entry.",
            commonErrors: ["Only one.", "Theoretical only."],
          },
        },
        {
          id: "eias-econ-u6-gt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why firms in oligopoly may avoid price competition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Oligopoly pricing",
                statement: "Interdependence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Price war → both firms' profits fall — prisoner's dilemma.",
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
                  "Prefer non-price competition — advertising, service.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Tacit collusion — follow price leader, avoid direct competition.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Price war hurts all → prefer non-price.",
            commonErrors: ["Price war good.", "No reason."],
          },
        },
        {
          id: "eias-econ-u6-gt-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two rival firms consider a price war.",
          parts: [
            { label: "a", prompt: "Explain prisoner's dilemma.", marks: 4 },
            { label: "b", prompt: "Suggest a better strategy.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Price war dilemma",
                statement: "Mutual destruction.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Both cut → prices fall → margins collapse.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Neither can gain share — rivals match cuts.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Non-price competition — differentiate, brand, service.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Tacit collusion — price leadership, follow-the-leader.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) mutual destruction (b) non-price/collusion",
            commonErrors: ["War good.", "No alternative."],
          },
        },
      ],
    },
  ],
};
