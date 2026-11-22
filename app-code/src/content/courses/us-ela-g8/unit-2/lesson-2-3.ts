import type { Lesson, TextExtract } from "../../../types.ts";
import { rubric } from "./levels.ts";

const PHONES: TextExtract = {
  title: "Keep Phones Out of Class",
  author: "Written for Akademik Space",
  text: "Schools should ban cell phones during class time. Students who keep phones in their pockets cannot focus. In a survey of 400 eighth graders at three schools, 62 percent admitted checking their phones at least once during a typical lesson, and teachers reported that these students missed instructions more often.\n\nA ban also protects learning in a second way. A district that adopted a ban reported that test scores in reading rose by six points in a single year. Banning phones is therefore the surest way to improve scores everywhere.\n\nFinally, phones are expensive. The newest models cost more than a thousand dollars, and the company that makes the most popular model was recently fined for misleading advertising. Nobody should trust a product from a company like that.",
};

const FOUR_DAY: TextExtract = {
  title: "The Case for a Four-Day School Week",
  author: "Written for Akademik Space",
  text: "Some rural districts have moved to a four-day school week, and many families like it. In one such district, attendance rose from 91 percent to 95 percent, and the district saved money on buses and heating. Those savings paid for tutoring on the fifth day for students who needed extra help.\n\nCritics worry that longer days tire young students, and it is true that days in this district last an hour longer. However, teachers there say that students used the extra time for projects and labs that would otherwise be rushed.\n\nEvery student deserves a school week that works for the family. Our district should try a four-day week.",
};

const FIRE_A: TextExtract = {
  title: "Lighthouses Were Our Safest Guides",
  author: "Written for Akademik Space",
  text: "Before satellite navigation, sailors depended on lighthouses, and their value cannot be overstated. The lighthouse at Pine Point guided ships safely for 140 years, and records show that wrecks near the point fell by more than half after the tower was built. The coast guard confirms that lighthouse beams are visible for up to twenty miles.\n\nIt is therefore reasonable to say that lighthouses saved thousands of lives, and that towns should preserve them for the history they represent.",
};

const FIRE_B: TextExtract = {
  title: "Lighthouses and the Limits of Light",
  author: "Written for Akademik Space",
  text: "The story that lighthouses saved thousands of lives is more comforting than accurate. Wrecks near Pine Point did fall after the tower was built, but historians note that over the same decades, ships grew larger, charts improved, and steam engines replaced sails. No one can separate the effect of the light from these other changes.\n\nThe coast guard does say beams can be seen from twenty miles away, but on foggy nights, which were common near the point, the visible range fell to a few hundred yards. Towns should preserve lighthouses as heritage, but they should not claim more for them than the evidence allows.",
};

export const lesson23: Lesson = {
  id: "ela8-u2-lesson-2-3",
  code: "2-3",
  title: "Argument and Conflicting Texts",
  goal: "I CAN evaluate an argument and its evidence, spot irrelevant evidence, and analyze two texts that disagree on facts or interpretation.",
  standards: ["RI.8.8", "RI.8.9"],
  vocabulary: [
    {
      term: "Claim",
      definition: "The position an author wants the reader to accept.",
    },
    {
      term: "Relevant evidence",
      definition:
        "Evidence that directly supports the claim it is attached to.",
    },
    {
      term: "Irrelevant evidence",
      definition:
        "Information that does not help prove the claim, even if it is true or interesting.",
    },
    {
      term: "Sufficient evidence",
      definition: "Enough evidence to make a claim convincing.",
    },
    {
      term: "Interpretation",
      definition: "A way of explaining what facts mean.",
    },
    {
      term: "Conflicting texts",
      definition:
        "Two texts on the same topic that disagree on facts or on how facts should be understood.",
    },
  ],
  concepts: [
    {
      id: "ela8-u2-evaluating-arguments",
      title: "Evaluating arguments and evidence",
      skill:
        "Delineate an argument and evaluate whether the reasoning is sound and the evidence is relevant and sufficient, recognizing irrelevant evidence.",
      lesson: {
        sections: [
          {
            heading: "Breaking an argument into parts",
            body: "To **delineate** an argument, identify the **claim** (what the author wants you to accept), the **reasons** (why the claim is true), and the **evidence** (facts, statistics, examples, or expert statements that support each reason). Then ask three questions. Is the reasoning logical? Is the evidence **relevant**? Is there **sufficient** evidence, or only one example?",
          },
          {
            heading: "Spotting weak evidence",
            body: "Evidence is **irrelevant** when it does not prove the claim, even if it is true. A fact about the price of a product does not show that the product harms learning. Watch for other weak moves: a result from one small case used to prove something about 'everywhere', attacking a company instead of the argument, and sweeping words such as 'surest', 'nobody', or 'always' that claim more than the evidence supports.",
          },
        ],
        keyFormulas: [
          {
            name: "Argument",
            statement: "A claim supported by reasons and evidence.",
          },
          {
            name: "Relevant evidence",
            statement:
              "Evidence that directly helps to prove the specific claim it supports.",
          },
          {
            name: "Sufficient evidence",
            statement:
              "Enough evidence, from enough cases, to make the claim convincing.",
          },
        ],
        workedExample: {
          problem:
            "Evaluate the final paragraph of 'Keep Phones Out of Class'. (3 marks)",
          solution:
            "The paragraph argues that phones are expensive and that the maker of the most popular model was fined for misleading advertising, so nobody should trust the product. Neither point is relevant to the claim that phones harm learning in class. The price of a phone says nothing about attention, and a company's advertising record does not show how its product affects students. The word 'nobody' also overstates the case. This paragraph weakens the argument because its evidence does not support the claim.",
        },
      },
      questions: [
        {
          id: "ela8-u2-evaluating-arguments-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PHONES,
          stem: "What is the author's claim in 'Keep Phones Out of Class'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Teachers should be allowed to use phones." },
              { id: "b", text: "Phones are too expensive for students." },
              { id: "c", text: "Test scores are rising across the country." },
              {
                id: "d",
                text: "Schools should ban cell phones during class time.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Claim",
                statement:
                  "The claim is the position the whole text argues for.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The opening sentence states the position the rest of the text supports.",
                evidence: "Schools should ban cell phones during class time",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** The author argues for a ban. Cost and test scores are used as reasons and evidence.",
            commonErrors: [
              "Choosing a reason or piece of evidence (price, test scores) instead of the claim.",
            ],
          },
        },
        {
          id: "ela8-u2-evaluating-arguments-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: PHONES,
          stem: "Which statement from the text is irrelevant evidence for the claim that phones should be banned in class?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "'62 percent admitted checking their phones at least once during a typical lesson'",
              },
              {
                id: "b",
                text: "'teachers reported that these students missed instructions more often'",
              },
              {
                id: "c",
                text: "'test scores in reading rose by six points in a single year'",
              },
              {
                id: "d",
                text: "'The newest models cost more than a thousand dollars'",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Relevance",
                statement:
                  "Evidence must connect directly to the claim, not just to the topic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The price of phones has no direct link to whether phones harm learning in class.",
                evidence: "cost more than a thousand dollars",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The other choices link phone use to missed instructions or to scores, so they bear on the claim.",
                evidence: "missed instructions more often",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** The cost of phones is about money, not about learning. The other statements link phones to distraction or scores.",
            commonErrors: [
              "Choosing (d) because the reading-score claim feels weak; it is at least about learning, so it is relevant even if not sufficient.",
            ],
          },
        },
        {
          id: "ela8-u2-evaluating-arguments-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: PHONES,
          stem: "Evaluate the second paragraph of 'Keep Phones Out of Class'. Is the reasoning sound and is the evidence sufficient? Explain with reference to the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sufficiency",
                statement: "One case cannot prove a claim about everywhere.",
              },
              {
                kind: "skill",
                name: "Evaluating reasoning",
                statement:
                  "Check that the conclusion follows from the evidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The evidence is relevant: a rise in reading scores connects to the claim that bans help learning.",
                evidence: "test scores in reading rose by six points",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It is not sufficient: it comes from one district and one year, and other causes are not ruled out.",
                evidence: "A district that adopted a ban",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The conclusion overreaches by claiming a ban is the 'surest way' to improve scores 'everywhere', which one case cannot prove.",
                evidence: "the surest way to improve scores everywhere",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer:
              "The evidence is relevant because reading scores concern learning, but it is not sufficient. It comes from a single district in a single year, and the author does not rule out other causes of the rise. The conclusion that a ban is 'the surest way to improve scores everywhere' overreaches, since one example cannot prove a claim about every school.",
            commonErrors: [
              "Saying the evidence is wrong rather than insufficient.",
              "Evaluating the third paragraph instead of the second.",
            ],
          },
        },
        {
          id: "ela8-u2-evaluating-arguments-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: FOUR_DAY,
          stem: "Answer all parts of this question about 'The Case for a Four-Day School Week'.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down two pieces of evidence the author gives in paragraph 1.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the author responds to the critics' concern about longer days.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Evaluate the argument. Is the claim supported by relevant and sufficient evidence, and are there any weaknesses in the reasoning?",
              marks: 6,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Relevance and sufficiency",
                statement:
                  "Judge whether evidence connects to the claim and whether there is enough of it.",
              },
              {
                kind: "technique",
                name: "Counterclaim and response",
                statement:
                  "A strong argument admits a concern and answers it with evidence.",
              },
              {
                kind: "skill",
                name: "Evaluating",
                statement:
                  "Give a judgment and justify it with evidence from the text.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Attendance rose in the district.",
                evidence: "attendance rose from 91 percent to 95 percent",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "The district saved money, which paid for tutoring.",
                evidence: "saved money on buses and heating",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The author concedes that the concern is fair and that days are longer.",
                evidence:
                  "it is true that days in this district last an hour longer",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The author answers with teachers' reports that extra time was used for projects and labs, which suggests a benefit.",
                evidence: "students used the extra time for projects and labs",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Strength: the attendance and savings evidence is specific and relevant to a school week that works for families and budgets.",
                evidence: "from 91 percent to 95 percent",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Weakness: all evidence comes from one rural district and the author gives no learning results, so it is not sufficient.",
                evidence: "In one such district",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Weakness: the conclusion about every family and the teachers' reports are general and unsupported by data.",
                evidence:
                  "Every student deserves a school week that works for the family",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: rubric(6, [5, 3, 2], "c"),
            finalAnswer:
              "(a) Attendance rose from 91 to 95 percent; the district saved money on buses and heating. (b) The author concedes that days are an hour longer, then answers with teachers' reports that students used the time for projects and labs. (c) The attendance and savings figures are relevant and specific, but the argument relies on one rural district and offers no evidence about learning outcomes. The claim that every student deserves a week that works for the family is a value statement, not evidence, so the evidence is relevant but not yet sufficient.",
            commonErrors: [
              "In (c), listing evidence without judging it.",
              "Treating the conclusion's value statement as evidence.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u2-conflicting-texts",
      title: "Conflicting information in two texts",
      skill:
        "Analyze two texts on the same topic that disagree on matters of fact or interpretation, and identify where they conflict.",
      lesson: {
        sections: [
          {
            heading: "Two texts, one topic",
            body: "Writers can disagree in two ways. They may disagree on **facts**, such as the number of wrecks or the distance a beam can be seen. They may agree on the facts but differ in **interpretation**, which is the meaning they draw from the facts. Read both texts, mark the shared facts, then list where they differ. Do not simply decide who sounds more confident.",
          },
          {
            heading: "Explaining and judging the conflict",
            body: "Ask why the texts disagree. They may choose different facts, give different weight to the same fact, consider other causes, or have different purposes. Then judge which interpretation is better supported. Look for specific evidence, acknowledgment of other explanations, and careful wording. A careful writer says what the evidence allows; an overconfident one claims more than the evidence supports.",
          },
        ],
        keyFormulas: [
          {
            name: "Conflict of fact",
            statement:
              "The texts state different details, numbers, or events as true.",
          },
          {
            name: "Conflict of interpretation",
            statement:
              "The texts accept the same facts but explain their meaning or cause differently.",
          },
          {
            name: "Better supported",
            statement:
              "An interpretation that uses specific evidence and considers other explanations.",
          },
        ],
        workedExample: {
          problem:
            "Do the two lighthouse texts disagree on facts or on interpretation? (3 marks)",
          solution:
            "They mostly agree on the facts: wrecks fell after the tower was built, and the coast guard says beams can be seen for twenty miles. They disagree on interpretation. Text A concludes that the lighthouse saved thousands of lives. Text B argues that the fall in wrecks may also be due to larger ships, better charts, and steam engines, and that fog reduced the beam's range. Text B considers other causes, so its interpretation is more cautious and arguably better supported.",
        },
      },
      questions: [
        {
          id: "ela8-u2-conflicting-texts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FIRE_A,
          stem: "Read 'Lighthouses Were Our Safest Guides' (Text A) and 'Lighthouses and the Limits of Light' (Text B). On which point do the two texts agree?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The beam was always visible from twenty miles.",
              },
              {
                id: "b",
                text: "Wrecks near Pine Point fell after the tower was built.",
              },
              { id: "c", text: "Steam engines had no effect on shipping." },
              { id: "d", text: "Lighthouses saved thousands of lives." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Shared facts",
                statement:
                  "Identify what both texts accept before looking at disagreements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both texts state that wrecks fell after the tower was built, though they explain it differently.",
                evidence: "wrecks near the point fell by more than half",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "**(b)** Both texts accept this fact. Text B disputes (b) and (c), and (d) is not stated in either.",
            commonErrors: [
              "Choosing (b), which is Text A's interpretation and which Text B challenges.",
            ],
          },
        },
        {
          id: "ela8-u2-conflicting-texts-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: FIRE_B,
          stem: "Text B says that 'No one can separate the effect of the light from these other changes.' How does this sentence challenge Text A?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It agrees that lighthouses saved thousands of lives.",
              },
              { id: "b", text: "It denies that the tower was ever built." },
              {
                id: "c",
                text: "It suggests Text A credits the lighthouse for results that may have other causes.",
              },
              {
                id: "d",
                text: "It argues that lighthouses should be destroyed.",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cause and interpretation",
                statement:
                  "Two texts can accept a fact but disagree about its cause.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text B lists other possible causes: larger ships, better charts, and steam engines.",
                evidence:
                  "ships grew larger, charts improved, and steam engines replaced sails",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning:
                  "It says the lighthouse's share of credit cannot be proved, which questions Text A's confident conclusion.",
                evidence: "No one can separate the effect of the light",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "**(c)** Text B accepts that wrecks fell but argues that the lighthouse may not deserve all the credit. It never denies the tower or calls for its destruction.",
            commonErrors: [
              "Choosing (d); Text B says towns should preserve lighthouses as heritage.",
            ],
          },
        },
        {
          id: "ela8-u2-conflicting-texts-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: FIRE_B,
          stem: "Using Text A ('Lighthouses Were Our Safest Guides') and Text B ('Lighthouses and the Limits of Light'), explain how the texts treat the coast guard's statement about twenty miles differently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing treatment of a fact",
                statement: "The same fact can be used for different purposes.",
              },
              {
                kind: "skill",
                name: "Context",
                statement:
                  "A fact may be accurate but incomplete without its conditions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text A presents the twenty-mile range as a plain fact that proves the lighthouse's value.",
                evidence: "visible for up to twenty miles",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Text B accepts the figure but adds a condition: in fog, which was common, the range fell sharply.",
                evidence: "the visible range fell to a few hundred yards",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning:
                  "The difference shows a conflict of interpretation, not of fact: Text A uses the figure to support its claim, while Text B limits what it proves.",
                evidence:
                  "they should not claim more for them than the evidence allows",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer:
              "Text A states that beams are 'visible for up to twenty miles' as a fact that supports its praise of lighthouses. Text B accepts the figure but adds that on foggy nights, which were common near the point, the range fell to a few hundred yards. The texts therefore agree on the fact but interpret it differently: Text A uses it to make lighthouses look more effective, while Text B limits what the figure proves.",
            commonErrors: [
              "Saying Text B denies the twenty-mile figure.",
              "Describing only one text.",
            ],
          },
        },
        {
          id: "ela8-u2-conflicting-texts-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: FIRE_A,
          stem: "Answer all parts of this question about Text A ('Lighthouses Were Our Safest Guides') and Text B ('Lighthouses and the Limits of Light').",
          parts: [
            {
              label: "a",
              prompt: "Write down two facts on which Text A and Text B agree.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how Text B interprets the fall in wrecks differently from Text A.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Which text presents the better supported interpretation? Evaluate both texts, using evidence from each to support your judgment.",
              marks: 6,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Interpretation",
                statement:
                  "Texts that share facts can disagree about what the facts mean.",
              },
              {
                kind: "skill",
                name: "Evaluating conflicting texts",
                statement:
                  "Judge which interpretation is better supported, and why.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Wrecks near Pine Point fell after the tower was built.",
                evidence: "wrecks near the point fell by more than half",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "a",
                reasoning:
                  "The coast guard says beams can be seen from twenty miles, and both texts suggest lighthouses should be preserved.",
                evidence: "visible for up to twenty miles",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "Text A concludes that lighthouses saved thousands of lives.",
                evidence: "lighthouses saved thousands of lives",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "Text B argues other changes, such as larger ships, better charts, and steam engines, may explain the fall.",
                evidence: "ships grew larger, charts improved",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Text A offers specific, relevant facts but jumps to a large conclusion with no acknowledgment of other causes.",
                evidence: "It is therefore reasonable to say",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Text B considers alternative explanations and adds context about fog, so its claim is more careful.",
                evidence: "on foggy nights, which were common near the point",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "A reasoned judgment: Text B is better supported because it limits its claim to what the evidence allows, although it does not prove that lighthouses saved no lives.",
                evidence: "more comforting than accurate",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: rubric(6, [5, 3, 2], "c"),
            finalAnswer:
              "(a) Wrecks fell after the tower was built; the coast guard says beams can be seen for twenty miles. (b) Text A claims the lighthouse saved thousands of lives, while Text B argues larger ships, better charts, and steam engines may explain the fall in wrecks. (c) Text B is better supported. Text A gives relevant facts but jumps to a large conclusion without considering other causes. Text B accepts the same facts, adds the effect of fog and other changes, and claims only what the evidence allows, though it does not prove that lighthouses had no effect.",
            commonErrors: [
              "Choosing a text by tone alone, without citing evidence.",
              "In (a), giving a point on which the texts disagree.",
            ],
            examinerNote:
              "In part (a), accept any two shared facts, such as the fall in wrecks, the coast guard's range figure, or the view that towns should preserve lighthouses.",
          },
        },
      ],
    },
  ],
};
