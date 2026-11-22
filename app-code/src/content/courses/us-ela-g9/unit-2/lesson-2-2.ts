import type { Lesson, TextExtract } from "../../../types.ts";
import { rubric } from "./levels.ts";

const SPEECH: TextExtract = {
  title: "Why Our Library Must Stay Open",
  author: "Written for Akademik Space",
  source: "Remarks to a town council meeting",
  text: "Members of the council, I have been a librarian in this town for twenty-two years, and I have never asked you for anything for myself. Tonight I ask on behalf of the people who walk through our doors.\n\nLast year, more than 40,000 visits were recorded at the Main Street Library. Half of the families who use our computers have no internet at home. Every one of them is a neighbor who is applying for a job, finishing homework, or filling out a form that the government now insists must be completed online.\n\nThink of a girl at a corner table, a library card in her hand and a stack of books she could never afford to buy. Think of what you take from her if the lights go off. Can we really call ourselves a community of opportunity if we lock the one door that is open to everyone?\n\nThe savings from closing the library amount to less than one percent of the town budget. Is that a price worth paying? I say it is not. Keep the library open, and keep faith with every resident who depends on it.",
};

const MEMO: TextExtract = {
  title: "The Case Against Homework Marathons",
  author: "Written for Akademik Space",
  text: "Schools in our district have long assumed that more homework produces better learners. The evidence does not support that assumption.\n\nResearch on homework shows a pattern of diminishing returns. A modest amount of practice helps students retain what they learned in class, but after about an hour a night, additional work adds little. In one district study, students who reported three hours of nightly homework earned grades no higher than those who reported ninety minutes.\n\nMoreover, heavy workloads carry costs. Students who sleep fewer than seven hours are more likely to struggle with attention and mood. A schedule that squeezes out sleep, family time, and exercise may therefore undermine the very learning it is meant to promote.\n\nCritics argue that reducing homework will lower standards. Yet standards are about what students learn, not how long they sit at a desk. Schools that cap homework should instead assign fewer, more carefully designed tasks.\n\nThe district should adopt a nightly limit of ninety minutes for high school students.",
};

export const lesson22: Lesson = {
  id: "ela9-u2-lesson-2-2",
  code: "2-2",
  title: "Rhetoric and Point of View",
  goal: "I CAN analyze an author's point of view and use of rhetoric, and explain how specific sentences, paragraphs, or sections develop and refine claims.",
  standards: ["RI.9-10.6", "RI.9-10.5"],
  vocabulary: [
    {
      term: "Rhetoric",
      definition:
        "The art of using language effectively to inform or persuade an audience.",
    },
    {
      term: "Ethos",
      definition:
        "An appeal to the audience's trust, based on the speaker's credibility, character, or expertise.",
    },
    {
      term: "Pathos",
      definition:
        "An appeal to the audience's emotions, such as pity, pride, fear, or hope.",
    },
    {
      term: "Logos",
      definition:
        "An appeal to reason, using facts, statistics, and logical argument.",
    },
    {
      term: "Rhetorical question",
      definition:
        "A question asked for effect, not because an answer is expected.",
    },
    {
      term: "Counterclaim",
      definition:
        "An opposing position that an author acknowledges, often in order to answer it.",
    },
  ],
  concepts: [
    {
      id: "ela9-u2-rhetoric",
      title: "Point of view and rhetoric",
      skill:
        "Determine an author's point of view or purpose and analyze how the author uses rhetoric (ethos, pathos, logos, and rhetorical devices) to advance it.",
      lesson: {
        sections: [
          {
            heading: "Point of view and purpose",
            body: "An author's **point of view** is the position or attitude the author takes toward the topic. Purpose is the reason the text was written: to inform, to persuade, to move to action, or to honor. Find both by looking at word choice, what the author includes and leaves out, and how the author treats opposing views. In the library speech, the librarian's purpose is to persuade a council to keep a library open, and her point of view is that the library is essential.",
          },
          {
            heading: "The three appeals",
            body: "Classical rhetoric names three appeals. **Ethos** builds trust by showing the speaker is credible ('I have been a librarian in this town for twenty-two years'). **Pathos** moves emotions through vivid images and stories ('Think of a girl at a corner table'). **Logos** persuades with reasons, facts, and numbers ('more than 40,000 visits'). Strong arguments usually combine all three. When you analyze an appeal, name it, quote the words, and explain the effect on the audience.",
          },
          {
            heading: "Rhetorical devices",
            body: "Authors also use devices that shape how an argument sounds. A **rhetorical question** pushes the audience to reach the writer's conclusion themselves. **Repetition** and parallel structure make a point memorable. **Direct address** ('Members of the council') makes the audience feel responsible. The mark of a strong answer is explaining the effect: not just 'she uses a rhetorical question', but 'the question implies the answer is obvious and invites the council to feel uncomfortable about refusing'.",
          },
        ],
        keyFormulas: [
          {
            name: "Ethos",
            statement:
              "Appeal to credibility and character: why the audience should trust the speaker.",
          },
          {
            name: "Pathos",
            statement:
              "Appeal to emotion: images, stories, and loaded words that make the audience feel.",
          },
          {
            name: "Logos",
            statement: "Appeal to logic: facts, statistics, and reasons.",
          },
          {
            name: "Analyzing rhetoric",
            statement:
              "Name the device or appeal, quote it, and explain its effect on the audience and purpose.",
          },
        ],
        workedExample: {
          problem:
            "Explain how the speaker uses pathos in paragraph 3 of 'Why Our Library Must Stay Open'. (3 marks)",
          solution:
            "The speaker uses pathos by asking the council to picture a single child: 'a girl at a corner table, a library card in her hand and a stack of books she could never afford to buy'. A specific, sympathetic person replaces statistics, which makes the audience feel the human cost of closure. The command 'Think of what you take from her' makes the council responsible for that loss, and the rhetorical question that follows suggests it would be shameful to lock 'the one door that is open to everyone'.",
        },
      },
      questions: [
        {
          id: "ela9-u2-rhetoric-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SPEECH,
          stem: "Which rhetorical appeal is mainly used in the sentence 'Last year, more than 40,000 visits were recorded at the Main Street Library'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Logos, because it offers a statistic to support the argument.",
              },
              { id: "b", text: "Humor, because it makes the audience laugh." },
              {
                id: "c",
                text: "Ethos, because it shows the speaker is an expert.",
              },
              {
                id: "d",
                text: "Pathos, because it describes a suffering child.",
              },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Logos",
                statement:
                  "An appeal to reason through facts, numbers, and logic.",
              },
            ],
            steps: [
              {
                reasoning: "A specific number is evidence, which is logos.",
                evidence: "more than 40,000 visits were recorded",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(c)** The visit count is a statistic. The credibility appeal comes in paragraph 1 and the emotional appeal in paragraph 3.",
            commonErrors: [
              "Confusing a statistic (logos) with credibility (ethos).",
            ],
          },
        },
        {
          id: "ela9-u2-rhetoric-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SPEECH,
          stem: "What is the main effect of the question 'Can we really call ourselves a community of opportunity if we lock the one door that is open to everyone?'",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It shows that the speaker is uncertain about her own position.",
              },
              {
                id: "b",
                text: "It suggests that closing the library would contradict the town's own values, inviting the council to agree.",
              },
              {
                id: "c",
                text: "It requests information that the council can supply.",
              },
              { id: "d", text: "It changes the topic to the town budget." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Rhetorical question",
                statement:
                  "A question that implies its own answer in order to lead the audience to the speaker's conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The question does not need an answer; the obvious answer is 'no'.",
                evidence:
                  "Can we really call ourselves a community of opportunity",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "It challenges the council's self-image, which puts moral pressure on them.",
                evidence: "if we lock the one door that is open to everyone",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(b)** The question leads the council to the conclusion that closure would contradict their values. It does not ask for information or show uncertainty.",
            commonErrors: [
              "Treating a rhetorical question as a genuine request for information.",
            ],
          },
        },
        {
          id: "ela9-u2-rhetoric-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SPEECH,
          stem: "Analyze how the speaker uses ethos in her opening paragraph and logos in paragraph 2 to build her argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ethos",
                statement:
                  "Establishes the speaker's credibility and good character.",
              },
              {
                kind: "technique",
                name: "Logos",
                statement:
                  "Uses facts and reasons so the argument seems rational and reliable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ethos: her long experience establishes her as knowledgeable and committed to the town.",
                evidence:
                  "I have been a librarian in this town for twenty-two years",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Ethos: she says she asks nothing for herself, which suggests she is unselfish and therefore trustworthy.",
                evidence: "I have never asked you for anything for myself",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Logos: specific numbers show real, measurable need, so the argument is grounded in evidence and not just feeling.",
                evidence:
                  "Half of the families who use our computers have no internet at home",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Together, credibility and facts make the later emotional appeal more believable.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer:
              "The speaker first establishes ethos by stating her twenty-two years as a librarian and that she has 'never asked you for anything for myself', which makes her seem experienced and unselfish. In paragraph 2 she turns to logos, offering figures such as 'more than 40,000 visits' and that half of families lack home internet. The facts make her argument seem grounded in evidence, which prepares the council to respond to her later emotional appeal.",
            commonErrors: [
              "Naming ethos and logos without explaining their effect.",
              "Describing the content of the speech without quoting.",
            ],
          },
        },
        {
          id: "ela9-u2-rhetoric-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: SPEECH,
          stem: "Answer all parts of this question about 'Why Our Library Must Stay Open'.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down two pieces of factual evidence the speaker gives to support her argument.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the speaker's use of direct address and the pronoun 'we' shapes her relationship with her audience.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Analyze how the speaker uses pathos in paragraph 3.",
              marks: 6,
            },
            {
              label: "d",
              prompt:
                "Evaluate how effectively the speaker combines ethos, pathos, and logos to achieve her purpose. Support your judgment with evidence from the text.",
              marks: 6,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Rhetorical appeals",
                statement:
                  "Ethos, pathos, and logos work together to persuade.",
              },
              {
                kind: "technique",
                name: "Direct address and inclusive pronouns",
                statement:
                  "Addressing the audience and using 'we' creates a sense of shared responsibility.",
              },
              {
                kind: "skill",
                name: "Evaluating effectiveness",
                statement:
                  "Judge how well methods fit the audience and purpose, and note limitations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "More than 40,000 library visits were recorded last year.",
                evidence: "more than 40,000 visits",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "Half of families using library computers lack internet at home, or closing would save under one percent of the budget (accept either).",
                evidence: "less than one percent of the town budget",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Addressing the council directly makes the speech personal and holds them accountable as decision makers.",
                evidence: "Members of the council",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "'We' and 'our' place speaker and council on the same side as members of one community, which suggests a shared duty.",
                evidence:
                  "Can we really call ourselves a community of opportunity",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The imagined girl is a concrete, sympathetic figure, which prompts empathy that statistics alone cannot.",
                evidence:
                  "a library card in her hand and a stack of books she could never afford to buy",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The imperative 'Think' asks the audience to take part in the scene and to picture the consequence of their vote.",
                evidence:
                  "Think of what you take from her if the lights go off",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The closing image of a single open door symbolizes opportunity and makes closure feel like a moral failing.",
                evidence: "the one door that is open to everyone",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning:
                  "Ethos opens the speech and wins trust, logos supplies evidence, and pathos adds emotional force, so the three reinforce each other.",
                evidence:
                  "I have been a librarian in this town for twenty-two years",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning:
                  "The budget comparison turns the issue into a cost-benefit choice and the rhetorical question frames refusal as unreasonable.",
                evidence: "Is that a price worth paying?",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning:
                  "A balanced judgment: the speech is effective but does not address counterclaims, such as other uses for the money, so a skeptical listener might not be fully persuaded.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: [
              ...rubric(6, [5, 3, 2], "c"),
              ...rubric(6, [5, 3, 2], "d"),
            ],
            finalAnswer:
              "(a) More than 40,000 visits were recorded last year; closing would save less than one percent of the budget. (b) Direct address makes the council personally accountable, and 'we' and 'our' cast everyone as members of one community with a shared duty. (c) The speaker invites the council to picture a girl with a library card and books she could never buy, uses the command 'Think' to involve them, and ends on the image of the one open door, so closure feels like a moral loss. (d) The three appeals support each other, with ethos building trust, logos supplying figures, and pathos giving them human meaning. The speech is effective, though it never answers opposing arguments directly.",
            commonErrors: [
              "In (b), saying the pronoun 'we' is 'friendly' without explaining the effect on the council.",
              "In (d), assessing only one appeal.",
            ],
          },
        },
      ],
    },
    {
      id: "ela9-u2-developing-claims",
      title: "How structure develops and refines claims",
      skill:
        "Analyze in detail how an author's ideas or claims are developed and refined by particular sentences, paragraphs, or larger portions of a text.",
      lesson: {
        sections: [
          {
            heading: "Claims, evidence, and counterclaims",
            body: "An argument is built from a **claim** (the position), reasons, and evidence. Look at how each paragraph contributes: one may state the claim, another provide evidence, another admit a **counterclaim** and answer it, and a last one recommend action. When you analyze structure, identify the job of the section ('this paragraph narrows the claim'), not only what it says.",
          },
          {
            heading: "Refining a claim",
            body: "Good writers often **refine** their claims: they qualify or narrow them to make them more precise and more defensible. Words such as 'modest', 'after about an hour', 'more likely', and 'may' show care. A refined claim ('homework helps up to a point') is harder to attack than a sweeping one ('homework is useless'). Notice where a sentence adds a limit, a concession, or a distinction, and explain how it makes the claim stronger.",
          },
          {
            heading: "Analyzing one key sentence",
            body: "Questions about 'a specific sentence' ask you to zoom in. Explain what the sentence says, what it does for the argument (introduces the claim, concedes, qualifies, answers a critic, or concludes), and how it connects to the paragraphs around it. Always quote the key words and explain the effect, not just the content.",
          },
        ],
        keyFormulas: [
          {
            name: "Counterclaim",
            statement:
              "An opposing view the author acknowledges, usually to answer it and strengthen the main claim.",
          },
          {
            name: "Qualification",
            statement:
              "A word or phrase that limits a claim (may, often, up to a point), making it more precise.",
          },
          {
            name: "Function of a section",
            statement:
              "State the job a sentence or paragraph does in the argument, then prove it with a quotation.",
          },
        ],
        workedExample: {
          problem:
            "Explain how the second paragraph of 'The Case Against Homework Marathons' refines the claim made in the first paragraph. (4 marks)",
          solution:
            "The first paragraph makes a broad claim: the belief that more homework produces better learners is not supported. The second paragraph refines it by conceding that 'a modest amount of practice helps students retain what they learned in class', so the author does not say homework is worthless. The author then narrows the problem to excess: 'after about an hour a night, additional work adds little'. The study of students with three hours and ninety minutes provides specific evidence, so the claim becomes more precise and more defensible: homework has diminishing returns.",
        },
      },
      questions: [
        {
          id: "ela9-u2-developing-claims-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MEMO,
          stem: "What is the function of the final paragraph of 'The Case Against Homework Marathons'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It introduces a new topic unrelated to homework.",
              },
              { id: "b", text: "It presents the first piece of evidence." },
              {
                id: "c",
                text: "It admits that the author's claim is mistaken.",
              },
              {
                id: "d",
                text: "It recommends a specific action based on the argument.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Function of a paragraph",
                statement: "Name the job a paragraph does in the argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The single sentence ends the argument with a concrete recommendation.",
                evidence:
                  "The district should adopt a nightly limit of ninety minutes",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(b)** The final paragraph turns the argument into a recommendation for action.",
            commonErrors: [
              "Describing the paragraph's topic instead of its role in the argument.",
            ],
          },
        },
        {
          id: "ela9-u2-developing-claims-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: MEMO,
          stem: "How does the sentence 'A modest amount of practice helps students retain what they learned in class' refine the author's claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It shifts the focus to teachers' attitudes." },
              {
                id: "b",
                text: "It concedes that some homework is useful, which narrows the claim to the problem of too much homework.",
              },
              {
                id: "c",
                text: "It proves that students should not have any homework.",
              },
              {
                id: "d",
                text: "It contradicts the claim that more homework is unhelpful.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Concession",
                statement:
                  "Admitting a point in the opposing view's favor makes the writer's own claim more precise and credible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sentence admits that homework has value in moderation.",
                evidence: "A modest amount of practice helps students",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "This narrows the author's claim to excessive homework, so it is more defensible than an attack on all homework.",
                evidence:
                  "after about an hour a night, additional work adds little",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** The concession shows the author is arguing against too much homework, not all homework. It does not contradict the claim (b) or call for no homework (c).",
            commonErrors: [
              "Choosing (b) because the sentence says something positive about homework; it limits the claim, it does not contradict it.",
            ],
          },
        },
        {
          id: "ela9-u2-developing-claims-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: MEMO,
          stem: "Analyze how the fourth paragraph ('Critics argue that reducing homework will lower standards...') develops the author's argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Counterclaim and rebuttal",
                statement: "The author states an opposing view and answers it.",
              },
              {
                kind: "skill",
                name: "Redefining terms",
                statement:
                  "Redefining a key word can shift the grounds of the debate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The paragraph acknowledges a counterclaim, which shows the author has considered opposing views and appears fair-minded.",
                evidence:
                  "Critics argue that reducing homework will lower standards",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The author answers by redefining standards as learning, not hours spent, which shifts the question to the quality of work.",
                evidence:
                  "standards are about what students learn, not how long they sit at a desk",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The paragraph then refines the recommendation to fewer, better-designed tasks, which prepares for the final proposal.",
                evidence: "fewer, more carefully designed tasks",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer:
              "The fourth paragraph introduces a counterclaim, 'Critics argue that reducing homework will lower standards', which makes the author seem fair. The author then answers it by redefining standards: they concern 'what students learn, not how long they sit at a desk'. The paragraph ends by refining the proposal to 'fewer, more carefully designed tasks', preparing the final recommendation.",
            commonErrors: [
              "Summarizing the paragraph without explaining its role in the argument.",
              "Missing the redefinition of 'standards'.",
            ],
          },
        },
        {
          id: "ela9-u2-developing-claims-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: MEMO,
          stem: "Answer all parts of this question about 'The Case Against Homework Marathons'.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down two costs of heavy homework workloads that the author mentions in paragraph 3.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the phrase 'diminishing returns' in paragraph 2 helps to refine the author's claim.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Analyze how the author organizes the whole text to build the argument from the first paragraph to the last.",
              marks: 6,
            },
            {
              label: "d",
              prompt:
                "Evaluate how convincingly the author develops and supports the claim. Refer to specific sentences and paragraphs.",
              marks: 8,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Qualification",
                statement:
                  "Limiting a claim makes it more precise and defensible.",
              },
              {
                kind: "skill",
                name: "Argument structure",
                statement:
                  "Claim, evidence, cost, counterclaim, recommendation: each section has a job.",
              },
              {
                kind: "skill",
                name: "Evaluating support",
                statement:
                  "Judge whether the evidence is specific, relevant, and sufficient.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Heavy workloads cut into sleep, which is linked to problems with attention and mood.",
                evidence: "Students who sleep fewer than seven hours",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "They also squeeze out family time and exercise.",
                evidence: "squeezes out sleep, family time, and exercise",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The phrase means that each extra hour of work gives less benefit, so the claim is about the point beyond which homework stops helping.",
                evidence: "a pattern of diminishing returns",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "It lets the author avoid the weaker claim that homework is useless and replace it with a more defensible, evidence-based one.",
                evidence:
                  "after about an hour a night, additional work adds little",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The opening challenges an assumption and states the claim directly.",
                evidence: "The evidence does not support that assumption",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The middle paragraphs move from evidence of limited benefit to evidence of harm, which builds the case from two directions.",
                evidence: "heavy workloads carry costs",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The counterclaim paragraph answers critics before the short final paragraph states a precise recommendation.",
                evidence: "a nightly limit of ninety minutes",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning:
                  "Strength: the comparison of three hours to ninety minutes is specific evidence that supports the diminishing-returns claim.",
                evidence:
                  "earned grades no higher than those who reported ninety minutes",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Strength: qualified language ('more likely', 'may') makes claims about sleep believable and avoids overstatement.",
                evidence: "more likely to struggle with attention and mood",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Limitation: the study is from one district and relies on students' self-reports, so it may not apply everywhere.",
                evidence: "students who reported three hours",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Limitation: the recommendation of ninety minutes is not fully justified, since the earlier evidence mentions about an hour; the argument for the exact number is weaker than the argument for a limit.",
                evidence: "a nightly limit of ninety minutes",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: [
              ...rubric(6, [5, 3, 2], "c"),
              ...rubric(8, [7, 5, 3], "d"),
            ],
            finalAnswer:
              "(a) Heavy workloads reduce sleep, with effects on attention and mood, and squeeze out family time and exercise. (b) 'Diminishing returns' means extra homework gives less and less benefit, so the author can argue against excess and avoid claiming that homework is useless. (c) The text opens with a challenge to an assumption, develops evidence of limited benefit and then of harm, answers critics in a counterclaim paragraph, and ends with a precise recommendation. (d) The specific comparison and qualified wording make the argument convincing, but the evidence comes from one district and self-reports, and the exact ninety-minute limit is not fully justified by it.",
            commonErrors: [
              "In (b), defining the phrase without saying how it refines the claim.",
              "In (d), saying the argument is 'convincing' without citing specific sentences.",
            ],
          },
        },
      ],
    },
  ],
};
