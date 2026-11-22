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
              { id: "a", text: "Government media agency" },
              { id: "b", text: "Individual journalist" },
              { id: "c", text: "Large company owning multiple media outlets" },
              { id: "d", text: "Small independent newspaper" },
            ],
            correctChoiceId: "c",
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
        {
          id: "asoc-u6-ow-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The propaganda model of media was developed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gerbner and Katz" },
              { id: "b", text: "Herman and Chomsky" },
              { id: "c", text: "Durkheim and Weber" },
              { id: "d", text: "Marx and Engels" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Propaganda model",
                statement: "Herman & Chomsky.",
              },
            ],
            steps: [
              {
                reasoning: "Herman & Chomsky = propaganda model.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Herman and Chomsky",
            commonErrors: ["Confusing with other theorists."],
          },
        },
        {
          id: "asoc-u6-ow-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is a 'filter' in the propaganda model?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Audience literacy levels" },
              { id: "b", text: "Printing technology" },
              { id: "c", text: "Journalists' salaries" },
              { id: "d", text: "Ownership of media by wealthy elites" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Propaganda filters",
                statement: "Ownership, advertising, sourcing, flak, ideology.",
              },
            ],
            steps: [
              {
                reasoning: "Ownership is one of the five filters.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Ownership of media by wealthy elites",
            commonErrors: ["Picking a non-filter factor."],
          },
        },
        {
          id: "asoc-u6-ow-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pluralists argue media diversity results from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Journalist unions" },
              { id: "b", text: "Government censorship" },
              { id: "c", text: "A single dominant owner" },
              { id: "d", text: "Many owners competing for audiences" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pluralism",
                statement: "Diverse owners → diverse content.",
              },
            ],
            steps: [
              {
                reasoning: "Pluralism relies on competition.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Many owners competing for audiences",
            commonErrors: ["Confusing with Marxist view."],
          },
        },
        {
          id: "asoc-u6-ow-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "New media ownership is most dominated by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Small independent bloggers" },
              { id: "b", text: "National governments" },
              { id: "c", text: "Large technology companies like Google and Meta" },
              { id: "d", text: "Print newspaper conglomerates" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "New media ownership",
                statement: "Tech giants dominate platforms.",
              },
            ],
            steps: [
              {
                reasoning: "Platforms owned by tech giants.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Large technology companies like Google and Meta",
            commonErrors: ["Assuming new media is uncontrolled."],
          },
        },
        {
          id: "asoc-u6-ow-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gatekeepers are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Advertising agencies" },
              { id: "b", text: "People who decide what news is published" },
              { id: "c", text: "Media audiences" },
              { id: "d", text: "Government censors only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gatekeepers",
                statement: "Decide what becomes news.",
              },
            ],
            steps: [
              {
                reasoning: "Gatekeepers control news flow.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** People who decide what news is published",
            commonErrors: ["Thinking only officials count."],
          },
        },
        {
          id: "asoc-u6-ow-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Five media conglomerates control 60% of a country's 300 media outlets. How many outlets do they control?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 180 }],
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
              {
                reasoning: "60% of 300 = 0.6 x 300.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "= 180.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "180",
            commonErrors: ["Using the wrong base."],
          },
        },
        {
          id: "asoc-u6-ow-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 500 journalists, 40% said they felt pressure from advertisers. How many journalists was this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200 }],
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
              {
                reasoning: "40% of 500 = 0.4 x 500.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "= 200.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "200",
            commonErrors: ["Forgetting decimal conversion."],
          },
        },
        {
          id: "asoc-u6-ow-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "The combined audience share of the top three TV channels fell from 45% to 36%. What was the percentage-point decrease?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage points",
                statement: "Simple subtraction.",
              },
            ],
            steps: [
              { reasoning: "45 - 36 = 9.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Expressed in percentage points.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "9",
            commonErrors: ["Calculating a percentage change."],
          },
        },
        {
          id: "asoc-u6-ow-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A media company earns 70% of its $2 billion revenue from advertising. How much is that?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of total",
                statement: "70% of 2 billion.",
              },
            ],
            steps: [
              {
                reasoning: "0.7 x 2 = 1.4.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Advertising revenue = $1.4 billion.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "1.4",
            commonErrors: ["Forgetting decimal conversion."],
          },
        },
        {
          id: "asoc-u6-ow-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Outline the pluralist view of media ownership.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pluralism",
                statement: "Diverse owners → fair representation.",
              },
            ],
            steps: [
              {
                reasoning: "Many owners, audiences choose.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Competition ensures variety.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reflects public opinion fairly.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Media is diverse — many owners compete and audiences choose, reflecting public opinion.",
            commonErrors: ["Describing the Marxist view instead."],
          },
        },
        {
          id: "asoc-u6-ow-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that new media has broken the power of traditional gatekeepers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "New gatekeepers",
                statement: "Democratisation vs platform control.",
              },
            ],
            steps: [
              {
                reasoning: "User-generated content bypasses traditional gatekeepers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Algorithms/platforms act as new gatekeepers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Tech giants still control visibility.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "New media challenges traditional gatekeepers but creates new ones — algorithms and platforms.",
            commonErrors: ["One-sided claim."],
          },
        },
        {
          id: "asoc-u6-ow-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Media ownership and control — extended response.",
          parts: [
            {
              label: "a",
              prompt: "Describe media ownership patterns today.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain the pluralist view.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain the Marxist view and the propaganda model.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "How does new media differ in ownership and control?",
              marks: 2,
            },
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
                reasoning: "Tech giants dominate new media.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Diverse owners claim.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Reflects public opinion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Elite ownership serves interests.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Propaganda filters named.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Reproduces dominant ideology.",
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
                reasoning: "Platform dominance persists.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) ownership (b) pluralist (c) Marxist/propaganda (d) new media",
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
              { id: "b", text: "Ethical codes only" },
              { id: "c", text: "Monetary values of news" },
              { id: "d", text: "Journalists' salaries" },
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
        {
          id: "asoc-u6-ct-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Timeliness, proximity and conflict are examples of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Journalists' salaries" },
              { id: "b", text: "News values" },
              { id: "c", text: "Audience ratings" },
              { id: "d", text: "Media regulations" },
            ],
            correctChoiceId: "b",
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
                reasoning: "These are classic news values.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** News values",
            commonErrors: ["Confusing with regulations."],
          },
        },
        {
          id: "asoc-u6-ct-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Agenda-setting theory claims media influences:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Journalists' salaries" },
              { id: "b", text: "What issues the public thinks are important" },
              { id: "c", text: "Only election outcomes" },
              { id: "d", text: "Exactly what people think about issues" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Agenda-setting",
                statement: "Shapes priorities, not opinions directly.",
              },
            ],
            steps: [
              {
                reasoning: "Agenda = what to think about.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** What issues the public thinks are important",
            commonErrors: ["Claiming media dictates opinions."],
          },
        },
        {
          id: "asoc-u6-ct-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which factor most directly pressures media content through revenue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Journalists' unions" },
              { id: "b", text: "Advertisers" },
              { id: "c", text: "Weather reports" },
              { id: "d", text: "Library regulations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Advertiser influence",
                statement: "Revenue pressure shapes content.",
              },
            ],
            steps: [
              {
                reasoning: "Advertisers fund most media.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Advertisers",
            commonErrors: ["Picking a non-commercial factor."],
          },
        },
        {
          id: "asoc-u6-ct-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Journalists' professional norms and ethics act as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A constraint on commercial and political pressures" },
              { id: "b", text: "A guarantee of objectivity" },
              { id: "c", text: "A reason to ignore accuracy" },
              { id: "d", text: "A source of advertising revenue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Professional norms",
                statement: "Ethics counter commercial pressure.",
              },
            ],
            steps: [
              {
                reasoning: "Norms restrain bias pressures.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** A constraint on commercial and political pressures",
            commonErrors: ["Overstating their power."],
          },
        },
        {
          id: "asoc-u6-ct-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gatekeepers primarily decide:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Printing quality" },
              { id: "b", text: "Advertising rates" },
              { id: "c", text: "Journalists' pay" },
              { id: "d", text: "What stories become news" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gatekeepers",
                statement: "Control news selection.",
              },
            ],
            steps: [
              {
                reasoning: "Gatekeepers filter news.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** What stories become news",
            commonErrors: ["Vague answers."],
          },
        },
        {
          id: "asoc-u6-ct-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A news outlet produced 800 stories last month; 25% covered crime. How many stories was this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200 }],
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
              {
                reasoning: "25% of 800 = 0.25 x 800.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "= 200.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "200",
            commonErrors: ["Using the wrong total."],
          },
        },
        {
          id: "asoc-u6-ct-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A programme's ratings rose from 1.2 million viewers to 1.5 million. What was the percentage increase?",
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
                reasoning: "Increase = 1.5 - 1.2 = 0.3.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "0.3/1.2 x 100 = 25%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "25",
            commonErrors: ["Dividing by the new value."],
          },
        },
        {
          id: "asoc-u6-ct-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 400 people, 55% said the media sets what issues they think about. How many people was this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 220 }],
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
              {
                reasoning: "55% of 400 = 0.55 x 400.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "= 220.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "220",
            commonErrors: ["Forgetting decimal conversion."],
          },
        },
        {
          id: "asoc-u6-ct-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Of 120 front-page news stories analysed, 30 mentioned government policy. What percentage was this?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25 }],
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
              { reasoning: "30/120 = 0.25.", marks: 1, markCode: "AO1" },
              {
                reasoning: "0.25 x 100 = 25%.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "25",
            commonErrors: ["Inverting the fraction."],
          },
        },
        {
          id: "asoc-u6-ct-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how news values shape what counts as 'news'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "News values",
                statement: "Selection criteria for stories.",
              },
            ],
            steps: [
              {
                reasoning: "Criteria: timeliness, proximity, conflict etc.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Routine stories excluded.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Drama/controversy favoured.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "News values select dramatic, timely, relevant stories over routine events.",
            commonErrors: ["Only listing values without explaining."],
          },
        },
        {
          id: "asoc-u6-ct-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the influence of journalists' professional norms on media content.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Professional norms",
                statement: "Ethics vs commercial pressure.",
              },
            ],
            steps: [
              {
                reasoning: "Norms promote accuracy and fairness.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "They constrain advertiser/owner pressure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Often overridden by commercial demands.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Professional norms matter but are often subordinated to commercial pressures.",
            commonErrors: ["One-sided assessment."],
          },
        },
        {
          id: "asoc-u6-ct-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Media content and influences — extended response.",
          parts: [
            {
              label: "a",
              prompt: "Name two news values and explain their effect.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify three factors influencing media content.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain agenda-setting.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Evaluate the influence of advertisers on content.",
              marks: 2,
            },
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
                reasoning: "Two valid news values.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Effect explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Three factors named.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Factors accurate.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Clear presentation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Sets public priorities.",
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
                reasoning: "Revenue pressure acknowledged.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Balanced evaluation.",
                marks: 1,
                markCode: "AO3",
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
