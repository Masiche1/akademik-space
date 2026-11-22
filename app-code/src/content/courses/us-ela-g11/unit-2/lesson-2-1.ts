import type { Lesson, TextExtract } from "../../../types.ts";
import { rubric } from "./levels.ts";

const FOUNDING: TextExtract = {
  title: "Three Foundational Texts",
  author:
    "The Constitutional Convention (1787), the First Congress (1791), and Thomas Paine (1776)",
  source: "Preamble to the Constitution; First Amendment; Common Sense",
  text: "THE PREAMBLE TO THE CONSTITUTION (1787)\n\nWe the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.\n\nTHE FIRST AMENDMENT (1791)\n\nCongress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.\n\nTHOMAS PAINE, COMMON SENSE (1776)\n\nSociety in every state is a blessing, but Government, even in its best state, is but a necessary evil; in its worst state an intolerable one.",
};

const DECLARATION: TextExtract = {
  title: "The Declaration of Independence (excerpt)",
  author: "Thomas Jefferson and the Continental Congress",
  source: "The Declaration of Independence (1776)",
  text: "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes.",
};

export const lesson21: Lesson = {
  id: "ela11-u2-lesson-2-1",
  code: "2-1",
  title: "Founding Documents",
  goal: "I CAN analyze the themes, purposes and rhetorical features of foundational US documents, and evaluate the reasoning and premises behind their claims.",
  standards: ["RI.11-12.9", "RI.11-12.8", "RI.11-12.6"],
  vocabulary: [
    {
      term: "Foundational document",
      definition:
        "A text that establishes the principles, structure or purposes of a nation or government, such as a declaration, constitution or amendment.",
    },
    {
      term: "Premise",
      definition:
        "A statement an argument assumes or asserts to be true, from which a conclusion is drawn.",
    },
    {
      term: "Consent of the governed",
      definition:
        "The principle that a government's legitimate authority comes from the agreement of the people it rules.",
    },
    {
      term: "Unalienable",
      definition:
        "Impossible to take away or give up; used of rights that no government may remove.",
    },
    {
      term: "Sovereignty",
      definition:
        "Ultimate authority to govern; in a republic, the source of this authority is the people.",
    },
    {
      term: "Enumerate",
      definition:
        "To list items one by one, as the First Amendment lists protected freedoms.",
    },
    {
      term: "Qualification",
      definition:
        "A limit or condition placed on a claim to make it more precise and defensible.",
    },
  ],
  concepts: [
    {
      id: "ela11-u2-founding-documents",
      title: "Themes, purposes and features of founding texts",
      skill:
        "Analyze how foundational US texts of different kinds share themes but differ in purpose, form and rhetorical features.",
      lesson: {
        sections: [
          {
            heading: "Same themes, different jobs",
            body: "Foundational texts often return to the same large ideas: liberty, consent, the limits of power, and the common good. Yet each text does a different job. A **declaration** justifies action to the world. A **preamble** states purposes. An **amendment** sets a rule that binds government. A pamphlet such as Common Sense **persuades** readers to adopt a position. Always ask what the text is for before you ask how it is written.",
          },
          {
            heading: "Form follows purpose",
            body: "Purpose shapes rhetoric. A legal text uses precise, impersonal, often prohibitive language ('shall make no law'). A statement of purposes uses long lists of aims and a collective voice ('We the People'). A persuasive pamphlet uses balanced, quotable sentences and strong contrasts. When you compare founding texts, name the shared theme, then explain how each text's purpose and form change the way that theme is expressed.",
          },
        ],
        keyFormulas: [
          {
            name: "Purpose first",
            statement:
              "Identify whether a text declares, establishes, restricts or persuades before analyzing its style.",
          },
          {
            name: "Collective voice",
            statement:
              "First-person plural ('We') presents the authors as speaking for the whole people, not for themselves.",
          },
          {
            name: "Prohibition",
            statement:
              "Language such as 'shall make no law' limits government rather than granting it power.",
          },
          {
            name: "Comparison frame",
            statement:
              "Shared theme, different purpose, different rhetorical choices, and the effect of each.",
          },
        ],
        workedExample: {
          problem:
            "How does the Preamble's wording present the source of the Constitution's authority? (4 marks)",
          solution:
            "The Preamble opens with 'We the People of the United States', a collective voice that locates authority in the citizens themselves rather than in a monarch or a legislature. The closing verbs, 'do ordain and establish', show the people as the active authors of the document, and the formal, solemn diction of 'ordain' gives their act weight. By ending with 'ourselves and our Posterity', the sentence also claims authority over the future, presenting the Constitution as a lasting inheritance. Authority therefore comes from the governed, and the form of the sentence enacts that idea.",
        },
      },
      questions: [
        {
          id: "ela11-u2-founding-documents-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FOUNDING,
          stem: "Which text in the extract works mainly by prohibiting something government may do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All three equally" },
              { id: "b", text: "The Preamble" },
              { id: "c", text: "The passage from Common Sense" },
              { id: "d", text: "The First Amendment" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Legal prohibition",
                statement:
                  "An amendment that begins 'Congress shall make no law' restricts government power instead of stating aims or persuading.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The First Amendment is built on a prohibition directed at Congress.",
                evidence: "Congress shall make no law",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** The First Amendment forbids Congress to act. The Preamble states purposes, and Paine argues about government in general.",
            commonErrors: [
              "Choosing (a) because the Preamble is also part of the Constitution, without checking what its sentence actually does.",
            ],
          },
        },
        {
          id: "ela11-u2-founding-documents-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: FOUNDING,
          stem: "Paine writes that government is 'but a necessary evil' while society is 'a blessing'. Which statement best describes the idea he develops?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "People would be better off with no society at all.",
              },
              {
                id: "b",
                text: "Government is evil only when it is controlled by a king.",
              },
              {
                id: "c",
                text: "Government is acceptable only when it is kept limited, because it is a burden even at its best.",
              },
              {
                id: "d",
                text: "Society and government are equally good and should grow together.",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Antithesis",
                statement:
                  "Paine sets society against government to argue that government is a tool to be kept small, not a good in itself.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Society is praised without qualification, while government is only 'necessary', so it is tolerated for a purpose.",
                evidence: "Society in every state is a blessing",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Even 'in its best state' government remains an evil, which implies that its power should be limited.",
                evidence: "even in its best state, is but a necessary evil",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Paine treats government as a necessary burden. Choice (d) fails because he says government is an evil 'even in its best state', not only under kings.",
            commonErrors: [
              "Choosing (c): Paine praises society, so he does not reject it.",
              "Reading 'necessary' as praise rather than as a grudging concession.",
            ],
          },
        },
        {
          id: "ela11-u2-founding-documents-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: FOUNDING,
          stem: "Compare how the Preamble and the First Amendment differ in purpose and in the way their language is organized. Support your answer with evidence from both.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Purpose and form",
                statement:
                  "Name each text's purpose, then explain how its language serves that purpose.",
              },
              {
                kind: "convention",
                name: "Legal and civic registers",
                statement:
                  "Statements of purpose use aspirational lists; constitutional rules use precise prohibitions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Preamble states the aims of the Constitution. Its long list of goals, each beginning with a verb, presents government as a servant of shared purposes.",
                evidence:
                  "establish Justice, insure domestic Tranquility, provide for the common defence",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The First Amendment restricts government. Its prohibition and list of specific freedoms is precise and enforceable, not aspirational.",
                evidence: "Congress shall make no law",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The contrast shows a shared theme, liberty protected from power, reached by two routes: one declares collective hopes in a unified voice, the other draws firm legal boundaries.",
                evidence: "secure the Blessings of Liberty",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer:
              "The Preamble is a statement of purposes: a single, rising list of aims ('establish Justice, insure domestic Tranquility') in the collective voice of the people. The First Amendment is a rule: 'Congress shall make no law' sets a firm limit and then enumerates the protected freedoms. Both defend liberty, but the Preamble inspires by listing what government should do, while the Amendment protects by listing what government must not do.",
            commonErrors: [
              "Describing each text separately without a point of contrast.",
              "Quoting without explaining how the wording serves the purpose.",
            ],
          },
        },
        {
          id: "ela11-u2-founding-documents-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: FOUNDING,
          stem: "Answer all parts of this question about the three foundational texts.",
          parts: [
            {
              label: "a",
              prompt: "Identify two freedoms protected by the First Amendment.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the opening words of the Preamble present the source of the Constitution's authority.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Analyze how the structure of the Preamble's single sentence contributes to its force and dignity.",
              marks: 6,
            },
            {
              label: "d",
              prompt:
                "Evaluate how the three texts together express a shared view of the relationship between government and liberty, while differing in purpose.",
              marks: 6,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Purpose and form",
                statement:
                  "Link each rhetorical feature to what the text is trying to do.",
              },
              {
                kind: "technique",
                name: "Parallelism and the list",
                statement:
                  "A series of grammatically matched items builds momentum and presents aims as equal in weight.",
              },
              {
                kind: "context",
                name: "Popular sovereignty",
                statement:
                  "In the founding era, the claim that authority rests with the people challenged inherited monarchy.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Any one protected freedom: free exercise of religion, speech, the press, assembly or petition.",
                evidence: "the freedom of speech, or of the press",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "A second, different freedom from the same list.",
                evidence: "peaceably to assemble",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'We the People' places authority with the citizens as a whole, not with a king, a legislature or the states.",
                evidence: "We the People of the United States",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The final verbs make the people the active authors of the Constitution, so government's power is derived from them.",
                evidence: "do ordain and establish this Constitution",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "The sentence delays its main verb to the end, so the reader moves through the purposes before reaching the act of creation, which gives that act a sense of arrival.",
                evidence: "do ordain and establish this Constitution",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The matched series of verbs and objects gives each aim equal weight and builds a rhythm of steady, orderly purpose.",
                evidence:
                  "establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Capitalized abstractions and the reach to 'Posterity' give the sentence a solemn tone and a claim on the future.",
                evidence: "ourselves and our Posterity",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning:
                  "Shared theme: government exists to serve and protect the people, and its power must be bounded. Paine calls it 'a necessary evil' and the First Amendment restricts Congress.",
                evidence: "Congress shall make no law",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "Difference in purpose: the Preamble inspires with aims, the Amendment legislates a limit, and Paine argues to persuade, so each uses a different register.",
                evidence: "but a necessary evil",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning:
                  "Judgment: taken together they show the founding ideal that liberty is the end of government and that suspicion of power is the means of protecting it; the Preamble's trust and Paine's wariness are in tension.",
                evidence: "secure the Blessings of Liberty",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: [
              ...rubric(6, [5, 3, 2], "c"),
              ...rubric(6, [5, 3, 2], "d"),
            ],
            finalAnswer:
              "(a) Any two of: free exercise of religion, freedom of speech, freedom of the press, the right to assemble, the right to petition. (b) 'We the People' makes the citizens the source of authority, and 'do ordain and establish' makes them the authors of the Constitution. (c) The long, delayed-verb sentence, matched series of purposes and solemn diction build force and dignity and reach to 'Posterity'. (d) All three put liberty first and treat power with caution, but the Preamble inspires, the Amendment limits and Paine argues, so the texts balance trust in self-government against wariness of power.",
            commonErrors: [
              "In (b), saying only that the Preamble is 'about the people' without analyzing the wording.",
              "In (c), naming a list without explaining its effect.",
              "In (d), discussing each text separately instead of comparing them.",
            ],
          },
        },
      ],
    },
    {
      id: "ela11-u2-seminal-reasoning",
      title: "Evaluating reasoning in seminal texts",
      skill:
        "Delineate the premises and conclusion of an argument in a seminal US text and evaluate whether the reasoning is valid and sufficient.",
      lesson: {
        sections: [
          {
            heading: "Premises, principles and conclusions",
            body: "Seminal arguments are built from **premises**, claims offered as starting points, and a conclusion that is supposed to follow. In founding texts the premises are often constitutional principles: that rights belong to people by nature, that government exists to secure them, and that authority depends on consent. To delineate an argument, list each premise in your own words, then state the conclusion and check that it follows.",
          },
          {
            heading: "Is the reasoning sound?",
            body: "Evaluate two things. **Validity**: if the premises were true, would the conclusion follow? **Sufficiency and qualification**: are the premises supported, or only asserted, and does the author anticipate objections? A writer who calls a premise 'self-evident' avoids proving it, which is a strategy with strengths (it seems universal) and limits (it can be disputed). Qualifications, such as a warning against changing governments for 'light and transient causes', show that a writer has considered the opposing side.",
          },
        ],
        keyFormulas: [
          {
            name: "Premise",
            statement: "A claim treated as a starting point for the argument.",
          },
          {
            name: "Valid reasoning",
            statement:
              "The conclusion follows logically if the premises are true.",
          },
          {
            name: "Self-evident appeal",
            statement:
              "A premise stated as needing no proof; persuasive to a shared audience, but open to challenge.",
          },
          {
            name: "Qualification",
            statement:
              "A limit that answers an objection and builds the writer's credibility.",
          },
        ],
        workedExample: {
          problem:
            "Identify the main premises of the Declaration's argument and state the conclusion they support. (4 marks)",
          solution:
            "The first premise is that people have unalienable rights, including 'Life, Liberty and the pursuit of Happiness'. The second is that governments exist 'to secure these rights' and derive their 'just powers from the consent of the governed'. The conclusion follows: when a government 'becomes destructive of these ends', it is 'the Right of the People to alter or to abolish it'. If a government exists only to secure rights and holds power only by consent, then one that destroys those rights has lost its purpose and its claim to consent, so the conclusion is valid if the premises are accepted.",
        },
      },
      questions: [
        {
          id: "ela11-u2-seminal-reasoning-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DECLARATION,
          stem: "In the argument, the claim that governments derive 'their just powers from the consent of the governed' functions as",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "a premise about the source of legitimate authority",
              },
              { id: "b", text: "a conclusion based on a list of complaints" },
              { id: "c", text: "a counterargument made by the British crown" },
              { id: "d", text: "a definition of the word 'unalienable'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Premise",
                statement:
                  "A premise is a claim offered as a starting point from which a conclusion is drawn.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The consent claim is stated as a general principle used to support the later right to alter or abolish a government.",
                evidence:
                  "deriving their just powers from the consent of the governed",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** It is a principle on which the conclusion rests. The conclusion is the right 'to alter or to abolish' a destructive government.",
            commonErrors: [
              "Choosing (a) because the premise appears early and sounds like a result.",
            ],
          },
        },
        {
          id: "ela11-u2-seminal-reasoning-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: DECLARATION,
          stem: "Which claim follows most logically from the premises that governments exist to secure rights and rule by consent?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Citizens must obey any government that currently exists.",
              },
              {
                id: "b",
                text: "Only governments that are long established are legitimate.",
              },
              {
                id: "c",
                text: "A government that destroys the rights it was created to secure loses its claim to the people's consent.",
              },
              {
                id: "d",
                text: "Rights are granted to people by their government.",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Testing validity",
                statement:
                  "A conclusion is valid when it follows from the premises without adding new, unstated claims.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If government exists to secure rights, one that destroys them has abandoned its purpose.",
                evidence:
                  "to secure these rights, Governments are instituted among Men",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "If power depends on consent, a government acting against its purpose can lose that consent, which justifies the people's right to change it.",
                evidence:
                  "it is the Right of the People to alter or to abolish it",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** This is the logic of the passage. Choice (d) contradicts the claim that rights come from the 'Creator', and (c) is limited by the passage's own caution but not stated as a rule.",
            commonErrors: [
              "Choosing (c) because of the final sentence, which advises caution but does not make age the test of legitimacy.",
            ],
          },
        },
        {
          id: "ela11-u2-seminal-reasoning-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: DECLARATION,
          stem: "Evaluate how the final sentence ('Prudence, indeed, will dictate...') affects the strength of the Declaration's reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluating reasoning",
                statement:
                  "Judge how an argument handles objections and whether its qualifications strengthen or weaken the claim.",
              },
              {
                kind: "technique",
                name: "Concession",
                statement:
                  "Admitting a point on the opposing side can make a writer seem fair and credible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sentence anticipates the objection that the Declaration invites constant revolt, and answers it by conceding that stability matters.",
                evidence:
                  "Governments long established should not be changed for light and transient causes",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The calm word 'Prudence' and the reasonable tone make the authors seem careful and moderate, which builds ethical credibility with a skeptical audience.",
                evidence: "Prudence, indeed, will dictate",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "This qualification narrows the right to revolt to serious causes, so the conclusion is more defensible, although the passage does not say who decides what is 'light and transient'.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer:
              "The final sentence strengthens the reasoning by qualifying it. It concedes that governments 'long established' should not be changed for 'light and transient causes', which answers the charge that the argument licenses endless rebellion. The measured word 'Prudence' makes the authors seem judicious. The limit is that the test of a serious cause is left to judgment, so the qualification narrows the claim but does not define it.",
            commonErrors: [
              "Treating the sentence as contradicting the earlier right to abolish a government.",
              "Saying it is 'effective' without explaining which objection it answers.",
            ],
          },
        },
        {
          id: "ela11-u2-seminal-reasoning-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: DECLARATION,
          stem: "Answer all parts of this question about the reasoning in the Declaration of Independence.",
          parts: [
            {
              label: "a",
              prompt: "State two premises on which the argument rests.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain what the phrase 'self-evident' asks the audience to accept, and why a writer might choose it.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Evaluate the conditional reasoning of the sentence beginning 'That whenever any Form of Government becomes destructive...'. Comment on its strengths and on any gap in it.",
              marks: 6,
            },
            {
              label: "d",
              prompt:
                "The passage states general principles and does not list specific complaints against the king. Evaluate why an argument of this kind needs both principles and evidence.",
              marks: 6,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Delineating an argument",
                statement:
                  "Separate premises from conclusion and state each in your own words.",
              },
              {
                kind: "technique",
                name: "Appeal to the self-evident",
                statement:
                  "Presenting a premise as obvious avoids proof and invites agreement from a sympathetic audience.",
              },
              {
                kind: "context",
                name: "Natural rights",
                statement:
                  "Enlightenment political thought held that people have rights before government and that government is created to protect them.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "People have unalienable rights, including life, liberty and the pursuit of happiness.",
                evidence: "certain unalienable Rights",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "Governments exist to secure these rights and hold just power only by consent.",
                evidence:
                  "to secure these rights, Governments are instituted among Men",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Self-evident' asks the audience to accept the premises as obviously true without argument, treating them as shared common sense.",
                evidence: "We hold these truths to be self-evident",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The writer gains authority and avoids a long proof, but at the cost of leaving the premises open to challenge by a reader who does not share them.",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Strength: the sentence is a conditional, 'whenever' the government is destructive, which sets a clear test and ties the right to change directly to the purpose of government.",
                evidence:
                  "whenever any Form of Government becomes destructive of these ends",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Strength: placing the right with 'the People' follows from the consent premise; consent can be withdrawn by those who gave it.",
                evidence:
                  "it is the Right of the People to alter or to abolish it",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Gap: the sentence does not say who judges whether a government is destructive or how much destruction justifies change, and the standard 'Safety and Happiness' is broad and open to interpretation.",
                evidence: "most likely to effect their Safety and Happiness",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Principles alone are abstract: they explain why revolt can be justified, but not that this particular government has failed the test.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Specific evidence, such as the list of grievances that follows in the full document, supplies the minor premise: this king has acted destructively, so the general rule applies.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Judgment: the combination is stronger than either part, because the principles give the argument universal appeal and lasting force while the evidence makes it persuasive to a particular audience and prevents it from seeming a mere pretext.",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: [
              ...rubric(6, [5, 3, 2], "c"),
              ...rubric(6, [5, 3, 2], "d"),
            ],
            finalAnswer:
              "(a) People hold unalienable rights; governments exist to secure them and rule by consent. (b) 'Self-evident' asks readers to accept the premises as obvious, which gives authority and avoids proof but leaves them open to dispute. (c) The conditional sets a clear test and ties the right of change to consent, but leaves unclear who judges 'destructive' and what counts as enough. (d) General principles give the argument universal force, but evidence is needed to show that this government has failed the test; together they are persuasive and not merely abstract.",
            commonErrors: [
              "In (a), quoting a conclusion as if it were a premise.",
              "In (b), explaining the meaning of 'self-evident' without the effect on the audience.",
              "In (c), praising the sentence without finding any limit in its reasoning.",
            ],
            examinerNote:
              "In (d), the full Declaration is not printed; credit any accurate reference to its list of grievances or any logical explanation that a general rule needs a factual claim to apply.",
          },
        },
      ],
    },
  ],
};
