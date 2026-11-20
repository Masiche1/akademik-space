import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "asoc-u6-lesson-6-1",
  code: "6-1",
  title: "Media Ownership and Control",
  goal: "I CAN describe media ownership and evaluate theories of media control.",
  standards: ["9699 P4: Media ownership and control"],
  vocabulary: [
    {
      term: "Media conglomerate",
      definition: "Large company owning multiple media outlets.",
    },
    {
      term: "Pluralism",
      definition: "View that media represents diverse views fairly.",
    },
    {
      term: "Marxist view",
      definition: "Media serves ruling class interests.",
    },
    {
      term: "Propaganda model",
      definition: "Herman & Chomsky — media filters serve elite.",
    },
    {
      term: "New media",
      definition: "Digital/internet-based media vs traditional.",
    },
    {
      term: "Gatekeepers",
      definition: "People deciding what news is published.",
    },
  ],
  concepts: [
    {
      id: "asoc-u6-ownership",
      title: "Media ownership and theories of control",
      skill:
        "Describe media ownership and compare pluralist and Marxist views.",
      lesson: {
        sections: [
          {
            heading: "Ownership",
            body: "Traditional media owned by few large conglomerates (Murdoch's News Corp etc.). New media (internet, social media) more diverse but dominated by tech giants (Google, Meta). Ownership concentration raises questions about diversity of viewpoints.",
          },
          {
            heading: "Pluralist view",
            body: "Media is diverse — many owners, audiences choose, reflects public opinion. Competition ensures variety. Criticised: ignores actual concentration of ownership.",
          },
          {
            heading: "Marxist view",
            body: "Media owners are wealthy elite — content serves their interests. Herman & Chomsky's propaganda model: media filters (ownership, advertising, sourcing, flak, ideology) ensure pro-establishment content. Media reproduces dominant ideology.",
          },
        ],
        keyFormulas: [
          {
            name: "Media control",
            statement:
              "Pluralist=diverse; Marxist=elite interests via propaganda filters.",
          },
        ],
        workedExample: {
          problem: "How does the propaganda model explain media bias?",
          solution:
            "Ownership, advertising, official sources, criticism and ideology filter content to serve elite interests.",
        },
      },
      questions: [
        {
          id: "asoc-u6-ow-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a media conglomerate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large company owning multiple media outlets" },
              { id: "b", text: "Small independent newspaper" },
              { id: "c", text: "Government media agency" },
              { id: "d", text: "Individual journalist" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conglomerate",
                statement: "Owns multiple outlets.",
              },
            ],
            steps: [
              {
                reasoning: "Conglomerate = multiple outlets.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Large company owning multiple media outlets",
            commonErrors: ["Confusing with single outlet."],
          },
        },
        {
          id: "asoc-u6-ow-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the pluralist view of media?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pluralism",
                statement: "Media represents diverse views.",
              },
            ],
            steps: [
              {
                reasoning: "Diverse owners/audiences.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reflects public opinion.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Media is diverse and reflects public opinion fairly.",
            commonErrors: ["Confusing with Marxist."],
          },
        },
        {
          id: "asoc-u6-ow-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the Marxist view of media control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist media",
                statement: "Elite interests vs audience agency.",
              },
            ],
            steps: [
              {
                reasoning: "Owners are wealthy elite.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Propaganda filters shape content.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ignores audience interpretation.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Media serves elite interests via filters, though audiences can resist/interpret.",
            commonErrors: ["Description only."],
          },
        },
        {
          id: "asoc-u6-ow-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Media ownership and control.",
          parts: [
            { label: "a", prompt: "Media ownership patterns?", marks: 2 },
            { label: "b", prompt: "Pluralist view?", marks: 2 },
            { label: "c", prompt: "Marxist view?", marks: 3 },
            { label: "d", prompt: "New media differences?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media control",
                statement: "Ownership+views+new media.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Conglomerate concentration.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Tech giants too.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Diverse views claim.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Reflects public.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Elite ownership.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Propaganda model.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Filters serve interests.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "More diverse/interactive.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "But platform dominance.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) ownership (b) pluralist (c) Marxist (d) new media",
          },
        },
      ],
    },
    {
      id: "asoc-u6-content",
      title: "Media Content and Influences",
      skill: "Describe theories of media content and factors influencing it.",
      lesson: {
        sections: [
          {
            heading: "Factors influencing content",
            body: "Ownership and profit motives. Advertisers' influence — content attracts audiences for advertisers. Journalists' professional norms. Government regulation. Audience demand/ratings. Gatekeepers decide what becomes news.",
          },
          {
            heading: "News values",
            body: "Stories selected for: timeliness, proximity, prominence, conflict, human interest, surprise. Shapes what counts as 'news' — often drama/controversy over routine.",
          },
          {
            heading: "Agenda-setting",
            body: "Media doesn't tell us what to think but what to think ABOUT — by selecting which issues get coverage, media sets public agenda. Powerful but subtle influence.",
          },
        ],
        keyFormulas: [
          {
            name: "Media content",
            statement:
              "Ownership+advertisers+norms+news values+agenda-setting.",
          },
        ],
        workedExample: {
          problem: "What is agenda-setting?",
          solution:
            "Media influences which issues public considers important by selecting what to cover — not opinions directly.",
        },
      },
      questions: [
        {
          id: "asoc-u6-ct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are 'news values'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Criteria for selecting news stories" },
              { id: "b", text: "Monetary values of news" },
              { id: "c", text: "Journalists' salaries" },
              { id: "d", text: "Ethical codes only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "News values",
                statement: "Story selection criteria.",
              },
            ],
            steps: [
              {
                reasoning: "News values = selection criteria.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Criteria for selecting news stories",
            commonErrors: ["Thinking it's about money."],
          },
        },
        {
          id: "asoc-u6-ct-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is agenda-setting?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Agenda-setting",
                statement: "Media sets what we think about.",
              },
            ],
            steps: [
              {
                reasoning: "Selects issues for coverage.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shapes public priorities.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Media influences which issues public considers important by selecting coverage.",
            commonErrors: ["Confusing with telling opinions."],
          },
        },
        {
          id: "asoc-u6-ct-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the influence of advertisers on media content.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Advertiser influence",
                statement: "Revenue pressure vs editorial independence.",
              },
            ],
            steps: [
              {
                reasoning: "Media depends on ad revenue.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Content shaped to attract audiences.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Editorial independence varies.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Advertisers influence content through revenue pressure, though extent varies.",
            commonErrors: ["Absolute claim."],
          },
        },
        {
          id: "asoc-u6-ct-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Media content.",
          parts: [
            { label: "a", prompt: "News values?", marks: 2 },
            { label: "b", prompt: "Factors influencing content?", marks: 3 },
            { label: "c", prompt: "Agenda-setting?", marks: 2 },
            { label: "d", prompt: "Advertiser influence?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media content",
                statement: "Values+factors+agenda+advertisers.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Timeliness/proximity/etc.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Selection criteria.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Ownership/profit.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Advertisers/norms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Gatekeepers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Sets priorities.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Not opinions directly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Revenue pressure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Audience attraction.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) values (b) factors (c) agenda (d) advertisers",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u6-6-1-notes",
      title: "Media ownership and content — notes",
      summary:
        "Conglomerates, pluralist vs Marxist views, propaganda model, news values, agenda-setting.",
      sections: [
        {
          heading: "Control",
          body: "Pluralist=diverse; Marxist=elite via propaganda filters. New media more diverse but platform-dominated.",
        },
        {
          heading: "Content",
          body: "News values select stories; agenda-setting shapes priorities; advertisers influence via revenue.",
        },
      ],
    },
  ],
};
