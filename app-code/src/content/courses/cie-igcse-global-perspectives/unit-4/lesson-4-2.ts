import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ciegp-u4-lesson-4-2",
  code: "4-2",
  title: "Conflict, Migration and Global Health",
  goal: "I CAN analyse conflict, forced migration and pandemic issues with evidence and multiple perspectives.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457",
    "Unit 4: global issue analysis",
  ],
  vocabulary: [
    {
      term: "Fragile state",
      definition:
        "State with weak institutions unable to provide security or services.",
    },
    {
      term: "Asylum seeker",
      definition:
        "Person seeking international protection while awaiting a decision.",
    },
    {
      term: "Refugee",
      definition:
        "Person forced to flee across borders with a well-founded fear of persecution.",
    },
    {
      term: "Push-pull migration",
      definition:
        "Factors driving people from one place (push) and attracting them to another (pull).",
    },
    {
      term: "Pandemic",
      definition:
        "Epidemic disease spreading across many countries or continents.",
    },
    {
      term: "Herd immunity",
      definition:
        "Indirect protection when enough people are immune to stop transmission.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u4l2-c1-conflict",
      title: "Conflict and fragile states",
      skill:
        "Analyse causes of conflict, role of resources and institutions, and intervention debates.",
      lesson: {
        sections: [
          {
            heading: "Causes of conflict",
            body: "Conflict arises from competition over **scarce resources** (water, land, minerals), **identity divisions** (ethnicity, religion), weak governance, economic inequality and external interference. The **resource curse** describes how abundant resources can fuel conflict rather than development — 'blood diamonds' and conflict minerals fund armed groups.",
          },
          {
            heading: "Intervention and peace",
            body: "Responses include mediation, peacekeeping forces, sanctions and institutional reform. Debates: humanitarian intervention vs sovereignty; sanctions effectiveness vs harm to civilians; whether economic development or political reform comes first. Fragile states often need both security and institution-building — elections without institutions can entrench elites.",
          },
        ],
        keyFormulas: [
          {
            name: "Resource curse",
            statement:
              "Resource wealth correlates with conflict and weak governance",
          },
          {
            name: "Fragile state",
            statement:
              "Weak institutions → insecurity → underdevelopment cycle",
          },
          {
            name: "Humanitarian intervention",
            statement:
              "External action to protect civilians, contested on sovereignty grounds",
          },
        ],
        workedExample: {
          problem:
            "Why might a mineral-rich country be poorer than a resource-poor one?",
          solution:
            "Resource wealth can fund armed groups ('resource curse'), inflate currency harming other exports, concentrate wealth in elites, and weaken incentive for institutional development.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'resource curse'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resources always cause war directly" },
              { id: "b", text: "Poor countries cannot use resources" },
              { id: "c", text: "Resources are infinite" },
              {
                id: "d",
                text: "Resource-rich countries often suffer conflict and underdevelopment",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Resource curse",
                statement:
                  "Resource abundance linked to conflict, corruption, weak growth.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Resource wealth linked to poor outcomes",
            commonErrors: [
              "Saying resources directly cause war — the mechanism is institutional.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two causes of armed conflict in fragile states.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conflict causes",
                statement:
                  "Resource competition, identity divisions, weak institutions, inequality.",
              },
            ],
            steps: [
              { reasoning: "Two valid causes.", marks: 1, markCode: "M" },
              { reasoning: "Each briefly explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. competition over water/minerals; ethnic or religious divisions exploited by elites when institutions are weak.",
            commonErrors: ["Only economic or only political causes."],
          },
        },
        {
          id: "ciegp-q-u4l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'conflict minerals' link global consumers to armed conflict.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conflict minerals",
                statement:
                  "Minerals mined in conflict zones fund armed groups; supply chains lack traceability.",
              },
            ],
            steps: [
              {
                reasoning: "Explains mining-funding link.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Notes traceability gap in supply chains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Connects consumer demand to harm.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Demand for tin, tantalum, tungsten, gold etc. finances militias; untraceable supply chains mean consumer electronics may indirectly fund conflict.",
            commonErrors: [
              "Stopping at 'minerals fund war' without the supply-chain mechanism.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l2c1-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the use of economic sanctions to stop conflict.",
          parts: [
            { label: "a", prompt: "Arguments for sanctions", marks: 2 },
            { label: "b", prompt: "Arguments against", marks: 2 },
            { label: "c", prompt: "Balanced judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sanctions debate",
                statement: "Pressure elites vs humanitarian harm and evasion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Non-violent pressure; can force negotiations.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Targets regime revenue.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Often harms civilians; elites evade via smuggling.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "May entrench regimes via rally-round-flag.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Targeted sanctions + humanitarian exemptions more defensible.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Weighed conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sanctions can pressure regimes non-violently but blunt sanctions harm civilians and are often evaded; targeted measures with exemptions are preferable.",
            commonErrors: ["One-sided or ignoring humanitarian costs."],
          },
        },
        {
          id: "ciegp-q-u4l2c1-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might elections in a fragile state fail to bring peace?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Institutions before elections",
                statement:
                  "Voting without independent courts, media, civil service entrenches elites.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies institutional weakness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains how elites manipulate process.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Without independent institutions, elections can legitimise manipulation by armed or elite groups rather than produce accountable government.",
            commonErrors: ["Claiming elections always fail — nuance needed."],
          },
        },
        {
          id: "ciegp-q-u4l2c1-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two push and two pull factors driving forced migration from conflict zones.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Push-pull factors",
                statement:
                  "Push: war, persecution, disaster. Pull: safety, work, family.",
              },
            ],
            steps: [
              { reasoning: "Two push factors.", marks: 1, markCode: "M" },
              { reasoning: "Two pull factors.", marks: 1, markCode: "M" },
              {
                reasoning: "Factors contextually appropriate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Push: armed conflict, persecution. Pull: safety, family reunification or economic opportunity.",
            commonErrors: ["Listing economic migration factors only."],
          },
        },
        {
          id: "ciegp-q-u4l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a state 'fragile'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Weak institutions unable to provide security, services or legitimate authority",
              },
              { id: "b", text: "A country at war only temporarily" },
              { id: "c", text: "Any poor country" },
              { id: "d", text: "A state with no natural resources" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fragile state",
                statement: "Weak capacity and legitimacy.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Weak institutions and legitimacy",
            commonErrors: ["Equating fragile with poor or at war only."],
          },
        },
        {
          id: "ciegp-q-u4l2c1-8",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the tension between humanitarian intervention and national sovereignty.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intervention debate",
                statement:
                  "Protect civilians vs respect sovereignty and non-interference.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sovereignty argument: UN Charter, non-interference.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Intervention argument: 'responsibility to protect', atrocities prevention.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Practical problems: selectivity, regime-change risk.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both sides.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sovereignty protects states from abuse of power, but mass atrocities can void legitimacy; R2P permits action but selective application undermines it — UN-authorised intervention is the contested middle ground.",
            commonErrors: [
              "One-sided or ignoring practical precedent problems.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l2c1-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'identity-based conflict'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Identity conflict",
                statement:
                  "Conflict organised around ethnic, religious or communal identities.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Notes elites can instrumentalise identity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Conflict where groups mobilise around shared ethnic, religious or communal identity — often exploited by elites to secure loyalty.",
            commonErrors: [
              "Treating identity as the sole cause rather than a mobilisation tool.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l2c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is 'development' sometimes proposed as a conflict prevention strategy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development-peace nexus",
                statement:
                  "Poverty and unemployment create grievance; opportunity reduces recruitment.",
              },
            ],
            steps: [
              {
                reasoning: "Links poverty to grievance/recruitment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Acknowledges limits — development alone insufficient.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Economic opportunity reduces grievances and armed-group recruitment, but it must be paired with political inclusion or it may entrench the status quo.",
            commonErrors: ["Claiming development alone prevents conflict."],
          },
        },
        {
          id: "ciegp-q-u4l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'resource curse'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Countries run out of resources" },
              {
                id: "b",
                text: "Resource wealth correlates with conflict and weak governance rather than development",
              },
              { id: "c", text: "Resources are always bad" },
              { id: "d", text: "Resources cause peace" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Resource curse",
                statement: "Resource wealth fuels conflict and weak outcomes.",
              },
            ],
            steps: [
              { reasoning: "Resource wealth can fund armed groups and elites.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Resource wealth → conflict/weak governance",
            commonErrors: ["Assuming resources automatically bring development."],
          },
        },
        {
          id: "ciegp-q-u4l2c1-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A peacekeeping mission needs 8,000 personnel but only 5,000 are deployed. What percentage of the requirement is met?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage deployed", answer: 62.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Deployment coverage",
                statement: "Deployed/required x 100.",
              },
            ],
            steps: [
              { reasoning: "5000/8000 x 100 = 62.5%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "62.5%",
            commonErrors: ["Inverting the ratio."],
          },
        },
        {
          id: "ciegp-q-u4l2c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A $120 million peace fund is divided equally across 3 conflict regions. How much does each region receive?",
          response: {
            type: "numeric",
            parts: [{ label: "Per region ($m)", answer: 40 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Resource allocation",
                statement: "Total divided equally.",
              },
            ],
            steps: [
              { reasoning: "120/3 = $40m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40 million",
            commonErrors: ["Not checking whether equal division is fair given differing needs."],
          },
        },
        {
          id: "ciegp-q-u4l2c1-14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the strongest argument FOR humanitarian intervention in a fragile state?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Humanitarian intervention",
                statement: "Protecting civilians vs respecting sovereignty.",
              },
            ],
            steps: [
              {
                reasoning: "States have a duty to protect civilians from mass atrocities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sovereignty argument acknowledged as counterweight.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Duty to protect civilians from atrocities — but contested on sovereignty grounds.",
            commonErrors: ["One-sided argument without acknowledging sovereignty."],
          },
        },
        {
          id: "ciegp-q-u4l2c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why holding elections in a fragile state without strong institutions can entrench elites rather than deliver democracy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Institutions before elections",
                statement: "Elections without checks can legitimise incumbents.",
              },
            ],
            steps: [
              {
                reasoning: "Weak institutions can't enforce fair rules or checks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Elites control media, money and coercion to win votes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Result: elections legitimise rather than constrain power.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Without independent courts, media and anti-corruption bodies, elections can legitimise entrenched elites.",
            commonErrors: ["Assuming elections alone equal democracy."],
          },
        },
        {
          id: "ciegp-q-u4l2c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that sanctions are an effective way to end armed conflict in fragile states.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sanctions debate",
                statement: "Pressure elites vs harm to civilians.",
              },
            ],
            steps: [
              {
                reasoning: "For: restrict funds/resources to armed groups and elites.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Against: harm civilians, elites evade, humanitarian costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Effectiveness varies with design and enforcement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: most effective when targeted and multilateral.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Can pressure elites but often harms civilians; effective mainly when targeted, multilateral and paired with diplomacy.",
            commonErrors: ["Treating sanctions as cost-free or always effective."],
          },
        },
      ],
    },
    {
      id: "ciegp-u4l2-c2-migration",
      title: "Migration and global health",
      skill:
        "Analyse forced migration drivers, impacts and pandemic governance.",
      lesson: {
        sections: [
          {
            heading: "Forced migration",
            body: "Forced migrants include **refugees** (fleeing persecution across borders), **asylum seekers** (awaiting protection decisions) and **internally displaced persons** (flee within their country). Drivers: war, persecution, climate disasters, economic desperation. Impacts: strain on host services, brain drain for origin countries, but also skills and remittances. Debates: burden-sharing between states, 'pull vs push' explanations, and whether migration is a right or a privilege.",
          },
          {
            heading: "Pandemics and global health",
            body: "Pandemics like COVID-19 and Ebola show health is a global public good — pathogens cross borders regardless of politics. Responses include surveillance, vaccines, travel restrictions and WHO coordination. Tensions: national sovereignty vs global health security; vaccine equity (COVAX aimed for fair distribution); lockdown economic costs vs health benefits; 'infodemic' misinformation.",
          },
        ],
        keyFormulas: [
          {
            name: "Refugee vs asylum seeker",
            statement:
              "Asylum seeker awaits decision; refugee has been recognised",
          },
          {
            name: "Global public good",
            statement:
              "Health security benefits all but is underprovided by individual states",
          },
          {
            name: "Vaccine equity",
            statement: "Fair access to vaccines across rich and poor countries",
          },
        ],
        workedExample: {
          problem: "Why do pandemics require international cooperation?",
          solution:
            "Pathogens ignore borders; one country's outbreak threatens all. Surveillance, data-sharing and vaccine distribution need coordination that no single state can achieve alone.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between a refugee and an asylum seeker?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Asylum seekers are always economic migrants" },
              {
                id: "b",
                text: "Asylum seekers await a protection decision; refugees have been recognised",
              },
              { id: "c", text: "They are identical terms" },
              {
                id: "d",
                text: "Refugees move within their country; asylum seekers cross borders",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Refugee vs asylum seeker",
                statement: "Status vs process.",
              },
            ],
            steps: [
              {
                reasoning: "Correct legal distinction.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(b)** Asylum seeker = awaiting decision; refugee = recognised protection",
            commonErrors: ["Using the terms interchangeably."],
          },
        },
        {
          id: "ciegp-q-u4l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two drivers of forced migration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Forced migration drivers",
                statement: "War, persecution, climate disasters, famine.",
              },
            ],
            steps: [
              { reasoning: "Two valid drivers.", marks: 1, markCode: "M" },
              { reasoning: "Each clearly stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. armed conflict and persecution; also climate-induced disasters and famine.",
            commonErrors: ["Listing voluntary economic motives only."],
          },
        },
        {
          id: "ciegp-q-u4l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two impacts of forced migration on host countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Host impacts",
                statement:
                  "Pressure on services vs economic/cultural contributions.",
              },
            ],
            steps: [
              { reasoning: "One pressure impact.", marks: 1, markCode: "M" },
              {
                reasoning: "One contribution impact.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Balanced framing.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Pressure on housing, health and education services; offset partly by labour supply, skills and cultural diversity — net effect depends on management.",
            commonErrors: ["Only negative impacts listed."],
          },
        },
        {
          id: "ciegp-q-u4l2c2-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Should wealthy countries accept more refugees? Evaluate.",
          parts: [
            { label: "a", prompt: "Arguments for", marks: 2 },
            { label: "b", prompt: "Arguments against", marks: 2 },
            { label: "c", prompt: "Balanced judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Refugee burden-sharing",
                statement:
                  "Humanitarian duty + capacity vs integration costs and public opinion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Legal/moral duty under refugee conventions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Capacity exists in wealthy states.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Integration costs; strain on services.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Most refugees hosted by poorer neighbouring states.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Burden-sharing proportional to capacity is fairest.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Weighed conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Moral and legal duty plus capacity argue for acceptance, but costs and the fact poorer states host most refugees support proportional burden-sharing rather than open-ended quotas.",
            commonErrors: ["One-sided answer."],
          },
        },
        {
          id: "ciegp-q-u4l2c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'pandemic'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A seasonal flu" },
              { id: "b", text: "Any disease outbreak" },
              {
                id: "c",
                text: "An epidemic disease spreading across many countries",
              },
              { id: "d", text: "A disease only in one city" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pandemic",
                statement: "Global-scale epidemic.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer:
              "**(c)** Disease spreading across countries/continents",
            commonErrors: ["Confusing with epidemic."],
          },
        },
        {
          id: "ciegp-q-u4l2c2-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why health is described as a 'global public good'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Global public good",
                statement:
                  "Non-excludable, non-rival benefits; underprovided without cooperation.",
              },
            ],
            steps: [
              {
                reasoning: "Explains non-excludability/non-rivalry.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Notes free-rider/underprovision problem.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Links to need for WHO/international action.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Disease control benefits everyone regardless of contribution; individual states underinvest because others free-ride, so international coordination (WHO, treaties) is needed.",
            commonErrors: [
              "Defining public good without the cooperation implication.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l2c2-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the aim of COVAX during COVID-19?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "COVAX",
                statement: "Facility for equitable global vaccine access.",
              },
            ],
            steps: [
              {
                reasoning: "Aims at fair distribution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Notes rich-country hoarding undermined it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "To ensure low- and middle-income countries got COVID-19 vaccines alongside rich nations — though vaccine nationalism limited its success.",
            commonErrors: [
              "Describing it as a treatment rather than distribution mechanism.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l2c2-8",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the tension between national sovereignty and global health security in pandemic response.",
          parts: [
            {
              label: "a",
              prompt: "Why do states resist external health rules?",
              marks: 2,
            },
            { label: "b", prompt: "Why is cooperation necessary?", marks: 2 },
            { label: "c", prompt: "Balanced judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Health sovereignty",
                statement:
                  "States guard policy autonomy but pathogens ignore borders.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Lockdowns and mandates are domestically unpopular/sovereign.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "States fear external interference in health policy.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Pathogens cross borders; one outbreak threatens all.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Surveillance, data and vaccines need coordination.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Cooperation on surveillance/vaccines; sovereignty on implementation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Weighed conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "States legitimately guard health policy autonomy, but shared threats require shared surveillance and vaccine access — cooperation on the global parts, sovereignty on domestic implementation.",
            commonErrors: ["One-sided or ignoring real sovereignty concerns."],
          },
        },
        {
          id: "ciegp-q-u4l2c2-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'vaccine nationalism'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vaccine nationalism",
                statement:
                  "Rich countries prioritising own populations over global equity.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "Notes consequence: prolonged pandemic via variants.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Wealthy states hoarding vaccines for domestic use, slowing global rollout — which also prolongs the pandemic through continued transmission and variants.",
            commonErrors: ["Confusing with vaccine hesitancy."],
          },
        },
        {
          id: "ciegp-q-u4l2c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might travel restrictions during a pandemic be controversial?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Travel restrictions",
                statement:
                  "May delay spread but harm economies and are of limited effect once widespread.",
              },
            ],
            steps: [
              { reasoning: "One benefit noted.", marks: 1, markCode: "M" },
              { reasoning: "One cost/limit noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "They can slow importation early but damage trade/tourism and give false security once community transmission is established.",
            commonErrors: ["One-sided view."],
          },
        },
        {
          id: "ciegp-q-u4l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a 'push' factor driving forced migration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Family already overseas" },
              { id: "b", text: "A better job abroad" },
              { id: "c", text: "War and persecution in the home country" },
              { id: "d", text: "Higher wages elsewhere" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Push factor",
                statement: "Conditions forcing people to leave.",
              },
            ],
            steps: [
              { reasoning: "Push factors drive people out; war/persecution are classic examples.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** War and persecution",
            commonErrors: ["Confusing push factors with pull factors."],
          },
        },
        {
          id: "ciegp-q-u4l2c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is herd immunity and why does it matter for pandemic control?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Herd immunity",
                statement: "Enough immune people to stop transmission.",
              },
            ],
            steps: [
              {
                reasoning: "Defines herd immunity correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Protects those who cannot be vaccinated; slows spread.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "When enough people are immune, transmission chains break — protecting vulnerable individuals.",
            commonErrors: ["Confusing with individual immunity only."],
          },
        },
        {
          id: "ciegp-q-u4l2c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A host country receives 50,000 refugees, of whom 60% are of working age. How many are of working age?",
          response: {
            type: "numeric",
            parts: [{ label: "Working-age refugees", answer: 30000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Population data",
                statement: "Percentage of total.",
              },
            ],
            steps: [
              { reasoning: "0.60 x 50000 = 30000.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30,000",
            commonErrors: ["Using 60% of a different base."],
          },
        },
        {
          id: "ciegp-q-u4l2c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A vaccination campaign covers 70% of a population of 200 million. How many people are vaccinated?",
          response: {
            type: "numeric",
            parts: [{ label: "Vaccinated (millions)", answer: 140 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Coverage calculation",
                statement: "Coverage % x population.",
              },
            ],
            steps: [
              { reasoning: "0.70 x 200 = 140 million.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "140 million",
            commonErrors: ["Forgetting units — answer in millions."],
          },
        },
        {
          id: "ciegp-q-u4l2c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what 'vaccine equity' means and why COVAX was created.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vaccine equity",
                statement: "Fair access to vaccines across rich and poor countries.",
              },
            ],
            steps: [
              {
                reasoning: "Defines vaccine equity: fair access regardless of income.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "COVAX pooled funds to buy vaccines for poor countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reason: vaccine nationalism slows global control.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fair vaccine access for all; COVAX coordinated pooled procurement for low-income countries.",
            commonErrors: ["Confusing equity with equality of doses."],
          },
        },
        {
          id: "ciegp-q-u4l2c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that 'migration is mainly a burden on host countries'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Migration impacts",
                statement: "Costs to hosts vs benefits to both sides.",
              },
            ],
            steps: [
              {
                reasoning: "For the claim: strain on housing, services, jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Against: migrants fill labour gaps; remittances help origin countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complicating: brain drain for origin; integration costs short-term.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: net effect depends on management and context.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Short-term service strain is real, but migrants contribute labour and remittances; outcomes depend on policy and integration.",
            commonErrors: ["Ignoring benefits to origin countries (remittances)."],
          },
        },
      ],
    },
  ],
};
