import type { Lesson, TextExtract } from "../../../types.ts";
import { rubric } from "./levels.ts";

const BIKES: TextExtract = {
  title: "Close the Roads to Cars on Saturdays",
  author: "Written for Akademik Space",
  text: "Our city should close Main Street to cars every Saturday. Nobody can seriously disagree, because everyone knows that cars are bad for cities.\n\nIn the three cities that tried Saturday closures, retail sales on the closed streets rose by an average of eight percent, according to a report by the national retailers' association. Closures also reduce noise, and a city councilor who opposes them has been late with her own taxes, so her views should be ignored.\n\nIf we allow even one Saturday closure, soon the council will ban cars entirely, and then no one will be able to get to work. We must either close the street every week or accept traffic jams forever.\n\nThe closure was a success in the neighboring city, so it will certainly succeed here.",
};

const RAIL: TextExtract = {
  title: "A Case for Rebuilding the Rail Line",
  author: "Written for Akademik Space",
  text: "Our county should rebuild the old rail line to the coast. First, it would cut travel time. A study by the state transportation department found that the trip would take 55 minutes by train, compared with 90 minutes by car in current traffic.\n\nSecond, it would reduce costs for commuters. The same study estimates that a monthly pass would cost about half as much as the gas and parking now needed for the same trip.\n\nSome residents worry that construction will be expensive. That is a fair concern: the department projects a building cost of 300 million dollars. However, the line would also bring tourism and jobs to the coast, and a similar rebuilt line in another state recovered its costs in twelve years.\n\nThe county can afford to wait no longer.",
};

const DECL: TextExtract = {
  title: "The Declaration of Independence (1776)",
  author: "Thomas Jefferson and the Continental Congress",
  source: "Opening and second paragraph",
  text: "When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.\n\nWe hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.",
};

const GETTY: TextExtract = {
  title: "The Gettysburg Address (1863)",
  author: "Abraham Lincoln",
  source: "Selected sentences",
  text: "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.\n\nNow we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure.",
};

export const lesson23: Lesson = {
  id: "ela9-u2-lesson-2-3",
  code: "2-3",
  title: "Argument and Seminal Documents",
  goal: "I CAN delineate and evaluate an argument, identify fallacious reasoning, and analyze themes and concepts in seminal U.S. documents and speeches.",
  standards: ["RI.9-10.8", "RI.9-10.9"],
  vocabulary: [
    {
      term: "Valid reasoning",
      definition:
        "Reasoning in which the conclusion follows logically from the evidence and premises offered.",
    },
    {
      term: "Fallacy",
      definition:
        "An error in reasoning that makes an argument seem stronger than it is.",
    },
    {
      term: "Ad hominem",
      definition:
        "A fallacy that attacks the person making an argument instead of the argument itself.",
    },
    {
      term: "Hasty generalization",
      definition:
        "A conclusion drawn from too few or unrepresentative examples.",
    },
    {
      term: "Seminal document",
      definition:
        "A foundational text that shaped a nation's ideas, laws, or history.",
    },
    {
      term: "Proposition",
      definition: "A statement or principle put forward for acceptance.",
    },
  ],
  concepts: [
    {
      id: "ela9-u2-evaluating-arguments",
      title: "Evaluating arguments and fallacies",
      skill:
        "Delineate and evaluate an argument and its specific claims, assessing whether the reasoning is valid and the evidence relevant and sufficient, and identify false statements and fallacious reasoning.",
      lesson: {
        sections: [
          {
            heading: "Delineating an argument",
            body: "To **delineate** an argument, separate it into parts: the central **claim**, the reasons, the evidence for each reason, and any counterclaims. Then evaluate each link. Is the evidence **relevant** (does it bear on this exact claim), **sufficient** (is there enough, from enough cases), and from a credible source? Is the reasoning **valid**, meaning that the conclusion truly follows? Check statements of fact too: a claim stated as fact may be unsupported, exaggerated, or false.",
          },
          {
            heading: "Common fallacies",
            body: "A **fallacy** is an error in reasoning. **Ad hominem** attacks the speaker instead of the argument. **Hasty generalization** draws a broad conclusion from a few cases. **Slippery slope** claims, without evidence, that one step will inevitably lead to a disaster. **False dilemma** presents only two options when others exist. **Bandwagon** claims something is true because many believe it ('everyone knows'). **Circular reasoning** assumes what it is trying to prove. **False cause** assumes that because B followed A, A caused B.",
          },
          {
            heading: "Judging a sound argument",
            body: "A strong argument cites specific, credible evidence, uses cautious language, admits and answers counterclaims, and draws a conclusion that follows from the evidence. When you evaluate, give a judgment, such as 'the first two paragraphs are sound but the third relies on a slippery slope', and support it by naming the fallacy, quoting the text, and explaining why the reasoning fails.",
          },
        ],
        keyFormulas: [
          {
            name: "Relevant and sufficient",
            statement:
              "Relevant: connects to the claim. Sufficient: enough evidence from enough cases.",
          },
          {
            name: "Valid reasoning",
            statement:
              "The conclusion follows logically from the reasons and evidence.",
          },
          {
            name: "Fallacy",
            statement:
              "Flawed reasoning; name it, quote it, explain why the conclusion does not follow.",
          },
        ],
        workedExample: {
          problem:
            "Identify and explain one fallacy in paragraph 3 of 'Close the Roads to Cars on Saturdays'. (3 marks)",
          solution:
            "Paragraph 3 uses a slippery slope: 'If we allow even one Saturday closure, soon the council will ban cars entirely, and then no one will be able to get to work.' The author offers no evidence that one closure leads to a total ban, so the chain of events is only assumed. The paragraph also contains a false dilemma: 'We must either close the street every week or accept traffic jams forever'. These are not the only options, so the reasoning is not valid.",
        },
      },
      questions: [
        {
          id: "ela9-u2-evaluating-arguments-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: BIKES,
          stem: "Which fallacy is used in the sentence 'a city councilor who opposes them has been late with her own taxes, so her views should be ignored'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bandwagon" },
              { id: "b", text: "Slippery slope" },
              { id: "c", text: "Circular reasoning" },
              { id: "d", text: "Ad hominem" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ad hominem",
                statement: "Attacks the person instead of the argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sentence criticizes the councilor's personal record instead of answering her argument.",
                evidence: "has been late with her own taxes",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** The councilor's taxes have nothing to do with whether closures are a good idea.",
            commonErrors: [
              "Choosing bandwagon because of 'everyone knows' elsewhere in the text; that is a different sentence.",
            ],
          },
        },
        {
          id: "ela9-u2-evaluating-arguments-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: BIKES,
          stem: "The author writes: 'The closure was a success in the neighboring city, so it will certainly succeed here.' What is the main weakness of this reasoning?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It uses an emotional appeal rather than facts.",
              },
              {
                id: "b",
                text: "It assumes one case guarantees the same result here without considering differences between the cities.",
              },
              { id: "c", text: "It is a rhetorical question." },
              {
                id: "d",
                text: "It attacks the people in the neighboring city.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sufficiency",
                statement:
                  "One example, or an example from a different context, cannot guarantee a result elsewhere.",
              },
            ],
            steps: [
              {
                reasoning: "The conclusion rests on a single case.",
                evidence: "a success in the neighboring city",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The word 'certainly' overstates what that one case can prove.",
                evidence: "it will certainly succeed here",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** The statement generalizes from one neighboring city to a certain result here. Sweeping words like 'certainly' claim more than the evidence supports.",
            commonErrors: [
              "Choosing (a); the sentence offers a comparison, not an emotional appeal.",
            ],
          },
        },
        {
          id: "ela9-u2-evaluating-arguments-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: BIKES,
          stem: "Evaluate the reasoning and evidence in paragraphs 1 and 2 of 'Close the Roads to Cars on Saturdays'. Identify at least one false or unsupported statement and one fallacy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Unsupported claims",
                statement:
                  "A statement presented as obvious fact still needs evidence.",
              },
              {
                kind: "skill",
                name: "Naming fallacies",
                statement:
                  "Name the fallacy, quote it, and explain why the conclusion does not follow.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bandwagon and unsupported claim: 'everyone knows' and 'nobody can disagree' replace evidence with claimed agreement, and the sweeping statement that cars are bad is not supported.",
                evidence:
                  "Nobody can seriously disagree, because everyone knows that cars are bad for cities",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Ad hominem: the councilor's tax record is irrelevant to her argument, so ignoring her views is not justified.",
                evidence:
                  "has been late with her own taxes, so her views should be ignored",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The sales figure is relevant and specific, but it comes from only three cities and from a retailers' association with an interest in sales, so it is limited in sufficiency and neutrality.",
                evidence:
                  "retail sales on the closed streets rose by an average of eight percent",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer:
              "Paragraph 1 relies on the bandwagon fallacy and an unsupported claim: 'Nobody can seriously disagree, because everyone knows' replaces evidence with a claim of agreement. Paragraph 2 contains a relevant statistic, an eight percent rise in sales in three cities, but the source is a retailers' association and the sample is small. It then commits an ad hominem fallacy by dismissing a councilor because she was late with her taxes, which has nothing to do with her argument.",
            commonErrors: [
              "Naming a fallacy without quoting or explaining it.",
              "Rejecting all the evidence rather than judging which is relevant and which is not.",
            ],
          },
        },
        {
          id: "ela9-u2-evaluating-arguments-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: RAIL,
          stem: "Answer all parts of this question about 'A Case for Rebuilding the Rail Line'.",
          parts: [
            {
              label: "a",
              prompt:
                "State the author's central claim and write down one reason given in support.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the author uses evidence from the state transportation department.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Analyze how the author deals with the concern about building costs in paragraph 3.",
              marks: 6,
            },
            {
              label: "d",
              prompt:
                "Evaluate the argument as a whole. Is the reasoning valid and the evidence relevant and sufficient? Identify any weaknesses.",
              marks: 8,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Delineating an argument",
                statement:
                  "Separate the claim, reasons, evidence, and counterclaims.",
              },
              {
                kind: "technique",
                name: "Counterclaim and rebuttal",
                statement:
                  "Concede a fair point, then answer it with evidence.",
              },
              {
                kind: "skill",
                name: "Evaluating evidence",
                statement:
                  "Judge relevance, sufficiency, and credibility of sources.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The claim is that the county should rebuild the old rail line to the coast.",
                evidence:
                  "Our county should rebuild the old rail line to the coast",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "One reason: it would cut travel time (or reduce commuter costs).",
                evidence: "it would cut travel time",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The study provides specific figures comparing train and car travel times, which make the claim concrete and testable.",
                evidence:
                  "55 minutes by train, compared with 90 minutes by car",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The same credible source supports the cost reason, with a relative comparison that strengthens its reliability and consistency.",
                evidence: "a monthly pass would cost about half as much",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The author concedes the concern and gives a figure, which appears honest and fair-minded.",
                evidence:
                  "That is a fair concern: the department projects a building cost of 300 million dollars",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The author answers with additional benefits, tourism and jobs, shifting from cost alone to overall value.",
                evidence:
                  "the line would also bring tourism and jobs to the coast",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "A comparison with a rebuilt line elsewhere offers precedent that the investment can pay off, though from one example.",
                evidence: "recovered its costs in twelve years",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Strength: reasons are clearly organized and rest on a credible state source with specific figures, so the evidence is relevant to the claim.",
                evidence: "A study by the state transportation department",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Strength: the counterclaim is acknowledged and answered rather than ignored, which improves the validity of the reasoning.",
                evidence: "That is a fair concern",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Weakness: the tourism and jobs claims have no figures, and the precedent rests on a single line in another state, which is not sufficient to show the county will recover costs.",
                evidence: "a similar rebuilt line in another state",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Weakness: the final sentence is an emotional urgency with no evidence for why waiting is unaffordable, and the time to recover the cost (twelve years) is not weighed against the 300 million dollar price.",
                evidence: "The county can afford to wait no longer",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: [
              ...rubric(6, [5, 3, 2], "c"),
              ...rubric(8, [7, 5, 3], "d"),
            ],
            finalAnswer:
              "(a) The author claims that the county should rebuild the old rail line; one reason is that it would cut travel time. (b) The state study gives specific, credible figures: 55 minutes by train against 90 by car, and a monthly pass at about half the cost of gas and parking. (c) The author concedes that 300 million dollars is a fair concern, then answers it with tourism, jobs, and an example of a line that recovered its costs in twelve years. (d) The argument is mostly valid: it is organized by reasons and uses credible specific evidence, and it answers a counterclaim. It is weaker where it relies on unsupported benefits, a single precedent, and an urgent closing sentence with no evidence.",
            commonErrors: [
              "In (d), calling the argument 'good' or 'bad' without naming evidence or weaknesses.",
              "In (c), restating the cost without explaining how the author responds.",
            ],
          },
        },
      ],
    },
    {
      id: "ela9-u2-seminal-documents",
      title: "Seminal U.S. documents and speeches",
      skill:
        "Analyze seminal U.S. documents of historical and literary significance, including how they address related themes and concepts.",
      lesson: {
        sections: [
          {
            heading: "Reading foundational texts",
            body: "A **seminal document** shaped the nation's ideas, such as the Declaration of Independence (1776) or Lincoln's Gettysburg Address (1863). Read them as arguments written for a specific audience at a specific moment. Ask who is being addressed, what the occasion is, what central ideas are stated, and which words signal the writer's purpose. The long, formal sentences of the 1700s can be unpacked by finding the main subject and verb.",
          },
          {
            heading: "Themes and concepts",
            body: "These documents return to related ideas: **equality**, **liberty**, **consent of the governed**, and the purpose of government. The Declaration states that 'all men are created equal' and are endowed with certain 'unalienable Rights'. Lincoln, nearly ninety years later, returns to the same phrase and says that the nation was 'dedicated to the proposition that all men are created equal', then says the Civil War tests whether such a nation can survive. When you compare documents, trace how an idea is stated in the first and reinterpreted or tested in the second.",
          },
          {
            heading: "Language and purpose",
            body: "Notice the authors' choices. The Declaration begins with 'a decent respect to the opinions of mankind', which treats the world as an audience and justifies a break with Britain by reason. Lincoln opens with 'Four score and seven years ago', an elevated, biblical phrase that links the present to the founding. Each text uses collective pronouns, parallel structure, and carefully chosen verbs to give its ideas weight. Explain the effect of the words, not only what they mean.",
          },
        ],
        keyFormulas: [
          {
            name: "Seminal document",
            statement:
              "A foundational text that shapes a nation's ideas and history.",
          },
          {
            name: "Tracing a concept",
            statement:
              "Show how the same idea (such as equality) is stated in one text and extended or tested in another.",
          },
          {
            name: "Four score and seven",
            statement:
              "A score is twenty, so 'four score and seven years' means eighty-seven years.",
          },
        ],
        workedExample: {
          problem:
            "Explain how Lincoln connects the Gettysburg Address to the Declaration of Independence. (3 marks)",
          solution:
            "Lincoln begins 'Four score and seven years ago', which means eighty-seven years before 1863, or 1776, the year of the Declaration. He then repeats the Declaration's central idea nearly word for word, saying the nation was 'dedicated to the proposition that all men are created equal'. By echoing the Declaration, he presents the Civil War as a test of whether that founding principle can survive: 'testing whether that nation, or any nation so conceived and so dedicated, can long endure'.",
        },
      },
      questions: [
        {
          id: "ela9-u2-seminal-documents-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: GETTY,
          stem: "In the Gettysburg Address, what does 'Four score and seven years ago' refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One hundred seven years before the speech" },
              { id: "b", text: "Forty-seven years before the speech" },
              { id: "c", text: "Eighty-seven years before the speech" },
              { id: "d", text: "Four years before the speech" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Four score and seven",
                statement:
                  "A score is twenty; four score is eighty, plus seven makes eighty-seven.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Four times twenty plus seven equals eighty-seven years.",
                evidence: "Four score and seven years ago",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Four score = 80; 80 + 7 = 87. Counting back from 1863 leads to 1776.",
            commonErrors: ["Treating 'score' as meaning ten or one."],
          },
        },
        {
          id: "ela9-u2-seminal-documents-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: DECL,
          stem: "In the first sentence of the Declaration, what is the purpose of the phrase 'a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To ask other nations for permission to separate",
              },
              {
                id: "b",
                text: "To suggest that the signers feel ashamed of separating",
              },
              {
                id: "c",
                text: "To threaten other nations that might disagree",
              },
              {
                id: "d",
                text: "To explain that the signers owe the world a public explanation of their reasons for separating",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Audience of the Declaration",
                statement:
                  "The Declaration addresses the world, aiming to justify independence by reason.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Decent respect' signals that the signers consider the world's judgment important.",
                evidence: "a decent respect to the opinions of mankind",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "They therefore feel required to explain their reasons openly, not to ask permission.",
                evidence:
                  "declare the causes which impel them to the separation",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(d)** The sentence announces that the document will give reasons. It does not request permission, express shame, or threaten.",
            commonErrors: ["Reading 'respect' as asking for permission."],
          },
        },
        {
          id: "ela9-u2-seminal-documents-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: DECL,
          stem: "Analyze how the second paragraph of the Declaration of Independence uses language to present its central idea.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Parallel structure",
                statement:
                  "Repeated 'that' clauses list ideas in a balanced series that gives them weight.",
              },
              {
                kind: "context",
                name: "Natural rights",
                statement:
                  "The Declaration argues that rights come from nature or a Creator, not from government.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'We hold these truths to be self-evident' presents the ideas as obvious to any reasonable person, which asks the audience to agree without further proof.",
                evidence: "We hold these truths to be self-evident",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The repeated 'that' clauses build a balanced, formal series that gives the statement authority.",
                evidence:
                  "that all men are created equal, that they are endowed by their Creator",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The rights are said to come from a Creator and to be 'unalienable', meaning they cannot be taken away, which makes liberty a basic claim and not a favor from a government.",
                evidence: "certain unalienable Rights",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer:
              "The paragraph presents its central idea as beyond dispute: 'We hold these truths to be self-evident'. The repeated 'that' clauses create a balanced series that gives the statement formal authority. By describing rights as given by a Creator and 'unalienable', the writers argue that liberty belongs to people by nature, so a government cannot legitimately remove it.",
            commonErrors: [
              "Paraphrasing the sentence without analyzing the language.",
              "Explaining 'unalienable' wrongly as rights that people may give up.",
            ],
          },
        },
        {
          id: "ela9-u2-seminal-documents-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: GETTY,
          stem: "Answer all parts of this question about the Gettysburg Address and the Declaration of Independence. The extracts are printed with the question and the Declaration's central sentence is: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.'",
          parts: [
            {
              label: "a",
              prompt:
                "Write down the phrase in the first sentence of the Gettysburg Address that Lincoln takes from the Declaration's central idea.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain what Lincoln suggests about the nation by describing it as 'conceived in Liberty'.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Analyze how Lincoln uses the second paragraph to connect the idea of equality to the events of 1863.",
              marks: 6,
            },
            {
              label: "d",
              prompt:
                "Compare how the Declaration and the Gettysburg Address treat the theme of equality. Refer to specific language in both.",
              marks: 8,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Historical purpose",
                statement:
                  "The Declaration justifies independence; the Address honors the dead and renews the nation's purpose during the Civil War.",
              },
              {
                kind: "technique",
                name: "Allusion and echo",
                statement:
                  "Repeating an earlier text's words links the new text to its authority.",
              },
              {
                kind: "skill",
                name: "Comparing texts",
                statement:
                  "Trace one theme across two texts, using evidence from each.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Lincoln repeats the Declaration's phrase 'all men are created equal'.",
                evidence: "all men are created equal",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "a",
                reasoning:
                  "He calls it a 'proposition' to which the nation is dedicated, showing it is a principle to be tested.",
                evidence: "dedicated to the proposition",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "'Conceived' suggests the nation was born from an idea, like a child, with liberty as its origin.",
                evidence: "a new nation, conceived in Liberty",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "By capitalizing and emphasizing 'Liberty', Lincoln links the nation's identity to the principle from 1776, giving the nation a moral, not just a political, origin.",
                evidence: "conceived in Liberty",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "'Now' moves from the founding to the present crisis, making the past ideals urgent.",
                evidence: "Now we are engaged in a great civil war",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The verb 'testing' presents the war as a trial of the founding principle, not just a military conflict.",
                evidence: "testing whether that nation",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The repeated 'so conceived and so dedicated' widens the question to 'any nation', giving it universal importance.",
                evidence:
                  "or any nation so conceived and so dedicated, can long endure",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning:
                  "Similarity: both present equality as a basic principle; the Declaration calls it 'self-evident' and Lincoln calls it a 'proposition'.",
                evidence: "all men are created equal",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "Difference: the Declaration states equality as a fact to justify separating from Britain; Lincoln treats it as an unfinished principle tested by war.",
                evidence: "testing whether that nation",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "Language: the Declaration's formal, confident 'We hold these truths' contrasts with Lincoln's questioning 'testing whether... can long endure', which shows more uncertainty.",
                evidence: "We hold these truths to be self-evident",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "Both use collective language, 'We' and 'our fathers', to unite the audience around a shared identity.",
                evidence: "our fathers brought forth on this continent",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: [
              ...rubric(6, [5, 3, 2], "c"),
              ...rubric(8, [7, 5, 3], "d"),
            ],
            finalAnswer:
              "(a) Lincoln takes the phrase 'all men are created equal' and calls it a 'proposition' to which the nation is dedicated. (b) 'Conceived in Liberty' suggests that the nation was born from an idea, linking it to the 1776 principle. (c) 'Now' brings the founding ideal into the crisis, 'testing' makes the war a trial of that ideal, and 'any nation so conceived and so dedicated' widens its importance. (d) Both texts treat equality as basic and use 'we'-style collective language. The Declaration states it confidently as 'self-evident', while Lincoln presents it as something tested by war that must be preserved.",
            commonErrors: [
              "In (d), discussing only one text.",
              "In (c), retelling the history without analyzing Lincoln's word choices.",
            ],
            examinerNote:
              "In (d), reward any well-supported comparison, for instance of tone, purpose, or collective language.",
          },
        },
      ],
    },
  ],
};
