import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "ebz10-u10-lesson-10-3",
  code: "10-3",
  title: "Pressure Groups, Law and Government Influence",
  goal: "I CAN explain how pressure groups, laws and government policy influence business decisions.",
  standards: ["Edexcel IGCSE Business 4BS0 — External Influences: legal and political factors"],
  
  vocabulary: [
    { term: "Pressure group", definition: "An organised group campaigning to influence business or government decisions." },
    { term: "Lobbying", definition: "Trying to influence government or decision-makers directly." },
    { term: "Legislation", definition: "Laws made by government that businesses must follow." },
    { term: "Regulation", definition: "Rules controlling how businesses operate in an industry." },
    { term: "Government policy", definition: "Official plans and actions, e.g. taxes, grants, spending." },
  ],
  concepts: [
    {
      id: "ebz10-u10-pressure",
      title: "Pressure Groups and Stakeholder Power",
      skill: "Describe pressure groups and explain how they influence business behaviour.",
      lesson: {
        sections: [
          {
            heading: "What are pressure groups?",
            body: "A **pressure group** is an organised group that campaigns to influence decisions — e.g. environmental groups, consumer watchdogs, trade unions, industry bodies. They are not elected governments but use their collective voice to push for change. **Lobbying** is the direct attempt to influence politicians or officials.",
          },
          {
            heading: "Types and methods",
            body: "**Consumer groups** (e.g. Which?) campaign on prices and safety. **Environmental groups** protest pollution and push green laws. **Trade unions** negotiate wages and conditions. **Industry bodies** lobby for favourable rules. Methods include protests and boycotts, media campaigns, petitions, lobbying MPs, legal challenges and research reports.",
          },
          {
            heading: "How pressure groups influence business",
            body: "They can force **legislation** (campaigning for new laws), trigger **boycotts** and lost sales, damage **reputation**, influence **investor decisions**, and push firms to adopt voluntary codes. Businesses may respond by consulting groups, changing practices, or lobbying government themselves to shape favourable rules.",
          },
        ],
        keyFormulas: [
          { name: "Pressure group", statement: "Organised campaign group influencing decisions" },
          { name: "Lobbying", statement: "Direct influence on decision-makers" },
        ],
        workedExample: {
          problem: "An environmental group organises a boycott of a polluting manufacturer. How might this force change?",
          solution: "The boycott cuts sales and revenue, damages reputation and may push the firm to clean up — or lobby government for stricter rules.",
        },
      },
      questions: [
        {
          id: "ebz10-u10-pg-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a pressure group?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A government department"
                    },
                    {
                              "id": "b",
                              "text": "An organised group campaigning to influence decisions"
                    },
                    {
                              "id": "c",
                              "text": "A type of business organisation"
                    },
                    {
                              "id": "d",
                              "text": "A stock market index"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pressure group",
                              "statement": "Organised campaign group influencing decisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pressure groups campaign; they are not governments or businesses.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Organised campaigning group",
          "commonErrors": [
                    "Confused with government or a firm."
          ]
},
        },
        {
          id: "ebz10-u10-pg-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three methods pressure groups use to influence business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pressure-group methods",
                              "statement": "Protests, boycotts, media, lobbying, legal challenges."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Protests, demonstrations and boycotts.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Media campaigns and public petitions.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Lobbying politicians or legal challenges.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Protests/boycotts, media campaigns, lobbying, legal action.",
          "commonErrors": [
                    "Only one method.",
                    "Methods of businesses listed instead."
          ]
},
        },
        {
          id: "ebz10-u10-pg-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a consumer pressure group could influence a supermarket's behaviour.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Pressure group influence",
                              "statement": "Boycotts, campaigns and lobbying change business behaviour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Group campaigns on an issue, e.g. misleading prices.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Media coverage damages the supermarket's reputation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Customers may boycott → lost sales and revenue.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Group may lobby for new laws the supermarket must follow.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Campaigns damage reputation, boycotts cut sales, lobbying creates binding rules.",
          "commonErrors": [
                    "No mechanism linking group to business change."
          ]
},
        },
        {
          id: "ebz10-u10-pg-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A fast-fashion brand is targeted by a campaign group over factory conditions.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways the campaign could harm the brand.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one way the brand could respond constructively.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Campaign impact and response",
                              "statement": "Boycotts and reputation damage vs engagement and reform."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Consumers boycott → falling sales.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Media exposure damages brand image and investor confidence.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Group may lobby for stricter labour laws.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Engage the group, audit factories and publish improvements.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) boycotts, reputation/investor damage, new laws (b) engage, audit, reform",
          "commonErrors": [
                    "Response ignores the campaign's concerns."
          ]
},
        },
        {
          id: "ebz10-u10-pg-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An industry association wants to lobby the government for a subsidy for its members.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define lobbying.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two arguments the association might use.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Evaluate one risk of relying on lobbying.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Lobbying",
                              "statement": "Direct influence on decision-makers; may be seen as unfair advantage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Trying to influence government/decision-makers directly.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Subsidy protects jobs and competes with foreign rivals.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Industry is strategically important / facing unfair competition.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Lobbying may be seen as buying influence — public backlash or accusations of unfairness.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) direct influence attempt (b) jobs/competition arguments (c) perceived unfairness/backlash",
          "commonErrors": [
                    "Lobbying confused with bribery or campaigning."
          ]
},
        },
        {
          id: "ebz10-u10-pg-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A major retailer faces criticism from several pressure groups over plastic packaging.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define a pressure group.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name two types of pressure group that might campaign on this issue.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two ways the groups could influence the retailer.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain two ways the retailer could respond.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Evaluate whether the retailer should change its packaging.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Stakeholder pressure",
                              "statement": "Groups use boycotts, media and lobbying; firms respond by reforming or resisting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Organised group campaigning to influence decisions.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Environmental groups and consumer watchdogs.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Boycotts/media damage reputation; lobby for packaging laws.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Switch to recyclable packaging; engage groups in dialogue.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) Balanced judgement — costs vs reputation/regulatory risk.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "Definition; group types; influence and responses explained; justified evaluation.",
          "commonErrors": [
                    "No evaluation.",
                    "Types of group not named."
          ]
},
        },
      ],
    },
    {
      id: "ebz10-u10-govt",
      title: "Legal and Political Influences on Business",
      skill: "Explain how laws and government policies affect business decisions and costs.",
      lesson: {
        sections: [
          {
            heading: "Laws affecting business",
            body: "Governments pass **legislation** that businesses must obey: **consumer protection** (accurate labelling, refunds), **employment law** (minimum wage, contracts, discrimination rules), **health and safety** (safe workplaces), **competition law** (banning cartels and monopolies), and **environmental law** (emissions and waste limits). **Regulation** covers industry-specific rules — e.g. food-safety standards, financial conduct.",
          },
          {
            heading: "Government policies",
            body: "**Fiscal policy**: taxation and government spending — business taxes, VAT, corporation tax. **Monetary policy**: interest rates set by central banks affect borrowing costs. **Industrial policy**: grants, subsidies and support for chosen sectors. **Trade policy**: tariffs, quotas and trade agreements. Political stability and government priorities shape the whole business environment.",
          },
          {
            heading: "How businesses respond",
            body: "Firms must **comply** with law — appoint compliance staff, follow procedures, face fines for breaches. They may **lobby** government for favourable rules, relocate to lower-regulation countries, or pass costs to consumers via prices. Political change (new government, policy shift) can create opportunities or threats almost overnight.",
          },
        ],
        keyFormulas: [
          { name: "Legislation", statement: "Laws businesses must obey" },
          { name: "Fiscal policy", statement: "Government taxation and spending decisions" },
          { name: "Monetary policy", statement: "Interest rates and money supply controlled by central bank" },
        ],
        workedExample: {
          problem: "A government raises corporation tax from 19% to 25%. What must a profitable firm do?",
          solution: "Its tax bill rises; it may cut costs, raise prices, invest less, or lobby against the policy — compliance is compulsory.",
        },
      },
      questions: [
        {
          id: "ebz10-u10-govt-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is legislation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A voluntary business code"
                    },
                    {
                              "id": "b",
                              "text": "Laws made by government that businesses must follow"
                    },
                    {
                              "id": "c",
                              "text": "A type of pressure-group campaign"
                    },
                    {
                              "id": "d",
                              "text": "An internal company policy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Legislation",
                              "statement": "Government-made laws binding on business."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Legislation = binding law; codes of conduct are voluntary.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Laws made by government",
          "commonErrors": [
                    "Confused with voluntary codes or regulation alone."
          ]
},
        },
        {
          id: "ebz10-u10-govt-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three areas of law that affect how businesses operate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Business law areas",
                              "statement": "Consumer, employment, health & safety, competition, environmental."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Consumer protection law (labelling, refunds).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Employment law (wages, contracts, discrimination).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Health & safety or competition/environmental law.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Consumer, employment, health & safety, competition or environmental law.",
          "commonErrors": [
                    "Only one area named."
          ]
},
        },
        {
          id: "ebz10-u10-govt-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a rise in interest rates might affect a business that borrows to expand.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Interest-rate effects",
                              "statement": "Higher rates raise borrowing costs and slow investment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Interest rates are set by monetary policy.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Borrowing costs rise — loans and overdrafts dearer.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Expansion plans may be postponed or scaled back.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Consumers also borrow less → demand may fall.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Higher borrowing costs slow expansion; weaker consumer demand compounds the effect.",
          "commonErrors": [
                    "Effect on savers given instead of borrowers."
          ]
},
        },
        {
          id: "ebz10-u10-govt-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A government introduces a new law requiring all food businesses to display allergen information.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways the law affects food businesses.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one cost the businesses face.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Legislative impact",
                              "statement": "Compliance is compulsory; costs and behaviour change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Must redesign menus/packaging to show allergens.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Must train staff on allergen handling.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Non-compliance risks fines/prosecution.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Printing, training and admin costs reduce profit.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) redesign, training, legal risk (b) compliance costs",
          "commonErrors": [
                    "Only costs mentioned, no behavioural requirement."
          ]
},
        },
        {
          id: "ebz10-u10-govt-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A government offers grants to companies building solar farms but keeps corporation tax unchanged.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how the grant policy might change business behaviour.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Evaluate whether the grant is an effective policy tool.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Industrial policy",
                              "statement": "Grants steer investment toward chosen sectors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Firms redirect investment toward solar to capture grants.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) More solar capacity → lower energy costs and emissions.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Other sectors may lose investment to subsidised solar.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Effective if it crowds in green investment; wasteful if firms would have invested anyway.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Costs taxpayers money that could fund other priorities.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) steers investment to solar, cuts emissions (b) effective if additional investment, costly otherwise",
          "commonErrors": [
                    "Only benefits assumed — no evaluation."
          ]
},
        },
        {
          id: "ebz10-u10-govt-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A new government raises minimum wage and tightens environmental rules.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define legislation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name two other laws that commonly affect businesses.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two effects of the higher minimum wage on a low-margin retailer.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain two effects of tighter environmental rules on a manufacturer.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Evaluate whether the policies are likely to harm or help the economy overall.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Policy impact evaluation",
                              "statement": "Costs rise for firms; workers and environment gain; net effect depends on structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Laws made by government that businesses must follow.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Consumer protection and employment/health & safety law.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Wage costs rise → prices up or jobs cut; low-margin firms squeezed.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Compliance investment needed; fines risk falls; may pass costs to consumers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) Balanced judgement — protects workers/environment but raises costs and may reduce competitiveness.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "Definitions; policy effects on retailer and manufacturer explained; justified overall judgement.",
          "commonErrors": [
                    "One-sided evaluation.",
                    "Effects not linked to the scenario."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u10-103-notes",
      title: "Pressure groups, law and government — notes",
      summary: "Pressure groups campaign via boycotts, media and lobbying. Government law and policy (tax, grants, interest rates) are binding — firms must comply or lobby/relocate.",
      sections: [
        { heading: "Pressure groups", body: "Consumer, environmental, union and industry groups use protests, boycotts, media, lobbying and legal action to change business behaviour." },
        { heading: "Law", body: "Consumer protection, employment, health & safety, competition and environmental laws are binding; breaches bring fines." },
        { heading: "Policy", body: "Fiscal (tax/spending), monetary (interest rates) and industrial (grants/subsidies) policies shape costs and investment." },
      ],
    },
  ],
};
