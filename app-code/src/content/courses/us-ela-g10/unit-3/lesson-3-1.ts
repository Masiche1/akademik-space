import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const MACBETH: TextExtract = {
  title: "Macbeth's soliloquy after his wife's death",
  author: "William Shakespeare",
  source: "Macbeth, Act 5, Scene 5",
  lineNumbers: true,
  text: "Tomorrow, and tomorrow, and tomorrow,\nCreeps in this petty pace from day to day,\nTo the last syllable of recorded time;\nAnd all our yesterdays have lighted fools\nThe way to dusty death. Out, out, brief candle!\nLife's but a walking shadow, a poor player,\nThat struts and frets his hour upon the stage,\nAnd then is heard no more. It is a tale\nTold by an idiot, full of sound and fury,\nSignifying nothing.",
};

const DRAFT: TextExtract = {
  title: "Body paragraph draft",
  author: "Written for Akademik Space",
  text: "In Act 5, Macbeth hears that his wife has died. He says that tomorrow creeps in at a petty pace. He also says that life is a walking shadow. Then he says that life is a tale told by an idiot. After that, he says it signifies nothing. This shows how Macbeth feels.",
};

export const lesson31: Lesson = {
  id: "ela10-u3-lesson-3-1",
  code: "3-1",
  title: "Literary Analysis Writing",
  goal: "I CAN write a debatable thesis about literature, embed and analyze quotations, and organize an essay that offers commentary rather than summary.",
  standards: ["W.9-10.1", "W.9-10.9", "W.9-10.9a"],
  vocabulary: [
    {
      term: "Thesis statement",
      definition:
        "A one- or two-sentence claim that states your arguable interpretation of a text and previews your reasoning.",
    },
    {
      term: "Embedded quotation",
      definition:
        "A short quotation worked into your own sentence so that it fits grammatically and is punctuated correctly.",
    },
    {
      term: "Commentary",
      definition:
        "Your own analysis of evidence: what a choice means, how it works and why it matters.",
    },
    {
      term: "Summary",
      definition:
        "A retelling of what happens in a text, which lacks interpretation.",
    },
    {
      term: "Topic sentence",
      definition:
        "The first sentence of a body paragraph, which states the paragraph's single main claim.",
    },
    {
      term: "Analytical verb",
      definition:
        "A precise verb such as reveals, underscores or complicates that shows how evidence supports a claim.",
    },
  ],
  concepts: [
    {
      id: "ela10-u3-thesis-quotations",
      title: "Thesis statements and quotations",
      skill:
        "Write an arguable thesis about a literary text, then embed short quotations and analyze their language.",
      lesson: {
        sections: [
          {
            heading: "A thesis you can argue",
            body: "A strong literary thesis makes a **claim a reader could disagree with**, names the text's choices (for example imagery, repetition or structure) and explains what they reveal. Weak: 'Macbeth talks about time.' (a fact, not an argument). Strong: 'By comparing life to a fleeting candle and a bad actor, Macbeth reveals a despair so complete that ambition no longer gives his life meaning.' Test your thesis with two questions: **Could someone argue the opposite?** and **Does it answer how and why, not just what?**",
          },
          {
            heading: "Embedding and analyzing quotations",
            body: "Never drop a quotation into a paragraph on its own line. **Embed** a short piece so your sentence stays grammatical: Macbeth calls life 'a walking shadow, a poor player,' suggesting that existence is insubstantial and merely performed. Quote only the words you will analyze, copy them exactly, put the period after the quotation mark (or after a parenthetical citation), and follow every quotation with **commentary**: name the specific word or device, then explain its effect. Use analytical verbs such as reveals, emphasizes and implies instead of 'shows' and 'talks about'.",
          },
        ],
        keyFormulas: [
          {
            name: "Thesis formula",
            statement:
              "Text + choices + what they reveal (an arguable claim), not a fact or a topic.",
          },
          {
            name: "Quotation sandwich",
            statement:
              "Lead-in (context), embedded quotation, then analysis of specific words.",
          },
          {
            name: "Analytical verbs",
            statement:
              "Reveals, implies, underscores, contrasts, complicates: verbs that explain how evidence supports a claim.",
          },
        ],
        workedExample: {
          problem:
            "Write a thesis about lines 1-3 of the soliloquy and embed one quotation with analysis.",
          solution:
            "Thesis: Through repetition and a slow, creeping rhythm, Macbeth's opening lines present time as a monotonous burden that robs life of purpose. Evidence: The verb 'creeps' and the adjective 'petty' make each day seem both sluggish and trivial, which emphasizes his weariness. The quotation is embedded in the sentence, copied exactly, and followed by analysis of two specific words rather than a retelling.",
        },
      },
      questions: [
        {
          id: "ela10-u3-thesis-quotations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MACBETH,
          stem: "Which thesis statement about this soliloquy is the strongest?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "In this speech, Macbeth talks about life and death.",
              },
              {
                id: "b",
                text: "Many readers feel that Macbeth is sad in this speech, but others disagree.",
              },
              {
                id: "c",
                text: "Macbeth's soliloquy is a famous example of Shakespeare's use of figurative language.",
              },
              {
                id: "d",
                text: "By comparing life to a fleeting candle and a bad actor, Macbeth reveals a despair so complete that he can no longer find meaning in his own ambition.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Arguable thesis",
                statement:
                  "A thesis makes a debatable claim about how choices create meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only (c) names specific choices (the candle and actor comparisons) and makes an interpretive claim about what they reveal.",
                evidence: "brief candle",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "**(d)**. It is specific and arguable and explains how the speech creates meaning. The others are vague, a statement of fact or avoid taking a position.",
            commonErrors: [
              "Choosing (b) because it names figurative language, but it does not say what the language reveals.",
            ],
          },
        },
        {
          id: "ela10-u3-thesis-quotations-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: MACBETH,
          stem: "Which sentence embeds a quotation from the soliloquy correctly and follows it with analysis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Macbeth says, Life's but a walking shadow, a poor player that is a metaphor.",
              },
              {
                id: "b",
                text: 'Macbeth calls life "a walking shadow, a poor player," suggesting that existence is insubstantial and merely performed.',
              },
              {
                id: "c",
                text: '"Life\'s but a walking shadow." This shows Macbeth is sad.',
              },
              {
                id: "d",
                text: 'Macbeth says "Life\'s but a walking shadow" which is a metaphor.',
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Embedding",
                statement:
                  "Work the quoted words into your own sentence and punctuate them correctly.",
              },
              {
                kind: "technique",
                name: "Analysis",
                statement:
                  "Follow a quotation with an explanation of what its words suggest.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The quotation is short, exact and fits grammatically after 'calls life'.",
                evidence: "a walking shadow, a poor player",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The sentence then explains what the metaphor suggests ('insubstantial', 'merely performed') instead of only naming it.",
                evidence: "insubstantial and merely performed",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(b)**. The quotation is embedded and analyzed. (a) only labels the device and lacks a comma, (c) drops the quotation in alone and gives vague analysis, (d) has no quotation marks.",
            commonErrors: [
              "Choosing (a) because it names the device, but 'a metaphor' is feature-spotting, not analysis.",
            ],
          },
        },
        {
          id: "ela10-u3-thesis-quotations-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: MACBETH,
          stem: "Write (1) a one-sentence thesis about how Macbeth's attitude toward time is presented in lines 1-5, (2) one sentence that embeds a short quotation from those lines and (3) one sentence that analyzes the quotation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis and evidence",
                statement:
                  "A debatable claim, exact embedded evidence and specific analysis.",
              },
              {
                kind: "technique",
                name: "Word-level analysis",
                statement:
                  "Analysis focuses on the effect of particular words.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A clear, arguable thesis that names Shakespeare's choices (repetition, rhythm) and what they reveal about Macbeth's view of time.",
                evidence: "Tomorrow, and tomorrow, and tomorrow",
                marks: 2,
                markCode: "AO4",
              },
              {
                reasoning:
                  "A short quotation, copied exactly, is embedded grammatically and punctuated correctly.",
                evidence: "Creeps in this petty pace",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Analysis of specific words such as 'creeps' or 'petty' and their effect, rather than retelling.",
                evidence: "petty pace",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: levels("writing", 6),
            finalAnswer:
              "Model: Through relentless repetition, Shakespeare presents time as a monotonous burden that has drained Macbeth's life of purpose. The days, he says, 'creep in this petty pace,' a movement that is slow and trivial. The verb 'creeps' makes time seem like something stealthy and sluggish, while 'petty' reduces each day to meaninglessness.",
            commonErrors: [
              "Writing a thesis that only states a topic ('Macbeth discusses time').",
              "Quoting a whole line when two words would do.",
              "Analyzing with 'this shows he is sad' instead of discussing specific words.",
            ],
          },
        },
        {
          id: "ela10-u3-thesis-quotations-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: MACBETH,
          stem: "Answer all parts about Macbeth's soliloquy.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why this thesis is weak: 'Macbeth is a play with many themes.'",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                'A student wrote: Macbeth says. "Creeps in this petty pace from day to day." This is about time. Rewrite this so the quotation is embedded correctly and the analysis focuses on specific words.',
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Write an analytical paragraph (six to eight sentences) arguing that Macbeth presents life as meaningless. Begin with a topic sentence, embed at least two quotations from the soliloquy and analyze the language of each.",
              marks: 10,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis",
                statement:
                  "A thesis is arguable, specific and focused on how and why.",
              },
              {
                kind: "skill",
                name: "Embedding quotations",
                statement:
                  "Quotations are short, exact, grammatically embedded and analyzed.",
              },
              {
                kind: "technique",
                name: "Close reading",
                statement:
                  "Interpretation grows from the effect of particular words and images.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "It is too general: it describes the play as a whole and names no text choices.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "a",
                reasoning:
                  "It states a fact nobody could argue and makes no claim about meaning.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "b",
                reasoning:
                  "The quotation is worked into the sentence with a lead-in and correct punctuation.",
                evidence: "Creeps in this petty pace",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning:
                  "It is shortened to the words that will be analyzed and copied exactly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Analysis of 'creeps' (slow, stealthy, burdensome).",
                evidence: "Creeps",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "Analysis of 'petty' (trivial, small) leading to a claim about meaninglessness.",
                evidence: "petty",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "A clear topic sentence makes an arguable claim about meaninglessness.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning: "First quotation is short, accurate and embedded.",
                evidence: "a walking shadow",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Analysis of the first quotation: a shadow has no substance, so life is empty.",
                evidence: "walking shadow",
                marks: 3,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Second quotation is embedded and analyzed, for example 'full of sound and fury, / Signifying nothing' as noise without meaning.",
                evidence: "full of sound and fury",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "A concluding sentence links the evidence back to the claim.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Spelling, punctuation and quotation conventions are accurate.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            levels: levels("writing", 10, "c"),
            finalAnswer:
              "(a) It is too general and states a fact, so it makes no arguable claim. (b) Model: Macbeth says that time 'creeps in this petty pace from day to day,' and the verb 'creeps' makes each day seem sluggish while 'petty' shrinks it to something trivial. (c) Model: Macbeth's soliloquy presents life as an empty performance. He calls it 'a walking shadow,' and because a shadow has no substance, the metaphor suggests that human existence leaves no real mark. He then compares it to a story 'full of sound and fury,' where the noisy sounds hide the fact that the tale means 'nothing.' Together, the images imply that ambition has led only to hollowness.",
            commonErrors: [
              "Beginning the paragraph with a quotation instead of a claim.",
              "Using 'this shows' without naming a word or effect.",
              "Ending the sentence before the closing quotation mark instead of after it.",
            ],
          },
        },
      ],
    },
    {
      id: "ela10-u3-essay-organization",
      title: "Organizing a literary analysis essay",
      skill:
        "Structure body paragraphs with topic sentences and commentary, and replace summary with analysis.",
      lesson: {
        sections: [
          {
            heading: "Essay and paragraph structure",
            body: "A literary analysis essay has an **introduction** (context, then the thesis), **body paragraphs** that each prove one part of the thesis, and a **conclusion** that explains why the interpretation matters. Each body paragraph opens with a **topic sentence** that makes a claim (not a plot event), supplies evidence, analyzes it and ends by linking back to the thesis. Order paragraphs logically, for example by theme, by stage of a character's change or by device, and use transitions such as 'in contrast' and 'as a result'.",
          },
          {
            heading: "Commentary versus summary",
            body: "**Summary** answers 'what happens?' **Commentary** answers 'how does this work, and what does it mean?' A useful guide is to aim for at least two sentences of commentary for every sentence of evidence. Replace 'Then he says...' and 'This shows how he feels' with specific analysis: name the word, image or structure and explain its effect. Summary tells readers what they already know; commentary gives them your idea.",
          },
        ],
        keyFormulas: [
          {
            name: "Paragraph pattern",
            statement:
              "Topic sentence (claim), evidence, commentary, link back to thesis.",
          },
          {
            name: "Summary test",
            statement:
              "If a sentence only retells events, it is summary; if it explains meaning or effect, it is commentary.",
          },
          {
            name: "Commentary ratio",
            statement:
              "Aim for at least two sentences of commentary for each piece of evidence.",
          },
        ],
        workedExample: {
          problem:
            "Turn this summary into commentary: 'Macbeth says life is a walking shadow.'",
          solution:
            "Commentary: Macbeth's description of life as 'a walking shadow' strips existence of substance, implying that human achievements, including his own bloody rise, leave no lasting trace. The change from retelling to analysis comes from selecting two exact words and explaining what each suggests and why it matters to the claim.",
        },
      },
      questions: [
        {
          id: "ela10-u3-essay-organization-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DRAFT,
          stem: "Which sentence is commentary rather than summary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Then he says that life is a tale." },
              {
                id: "b",
                text: "Macbeth hears of his wife's death and speaks about tomorrow.",
              },
              {
                id: "c",
                text: "The relentless repetition of 'tomorrow' mimics the dull march of days, suggesting Macbeth feels trapped in time without purpose.",
              },
              { id: "d", text: "He says that the candle should go out." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Commentary",
                statement: "Commentary explains how language creates meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only (b) analyzes the effect of repetition and interprets Macbeth's state of mind; the others retell events.",
                evidence: "relentless repetition",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(c)**. It explains how repetition works and what it suggests. The others report what Macbeth says.",
            commonErrors: [
              "Choosing (a) because it mentions a reason (the death) for his speech; that is still plot.",
            ],
          },
        },
        {
          id: "ela10-u3-essay-organization-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: DRAFT,
          stem: "Which topic sentence would best open a body paragraph arguing that the soliloquy reduces life to an empty performance?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Many characters in Shakespeare's plays are actors.",
              },
              { id: "b", text: "Macbeth uses a metaphor." },
              { id: "c", text: "In Act 5, Macbeth's soliloquy begins." },
              {
                id: "d",
                text: "Through theatrical imagery, Macbeth reduces life to a hollow performance, conveying his despair at its futility.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Topic sentence",
                statement:
                  "A topic sentence states one arguable claim that the paragraph will prove.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It makes a claim that directly supports the thesis about performance.",
                evidence: "reduces life to a hollow performance",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning:
                  "It names the device (theatrical imagery) and its meaning (despair at futility), previewing the evidence and commentary.",
                evidence: "Through theatrical imagery",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(d)**. It states a focused, arguable claim. (a) is too vague, (b) only locates the scene and (d) is a general observation.",
            commonErrors: [
              "Choosing (b) because it mentions the act and soliloquy, but it makes no claim.",
            ],
          },
        },
        {
          id: "ela10-u3-essay-organization-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: MACBETH,
          stem: 'A student\'s draft ends: "Then he says that life is a tale told by an idiot. After that, he says it signifies nothing. This shows how Macbeth feels." These sentences are summary. Rewrite them as two or three sentences of commentary that embed at least one exact quotation from the soliloquy and explain its effect.',
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Summary to commentary",
                statement:
                  "Replace retelling with analysis of specific language.",
              },
              {
                kind: "technique",
                name: "Analytical verbs",
                statement:
                  "Precise verbs make the link between evidence and claim.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At least one exact quotation is embedded into the writer's own sentence.",
                evidence: "a walking shadow",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The language is analyzed: what a word or image suggests and why it matters for Macbeth's despair.",
                evidence: "Signifying nothing",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The sentences flow, begin with a link to the paragraph's claim and avoid the phrase 'this shows how he feels'.",
                marks: 2,
                markCode: "AO4",
              },
            ],
            levels: levels("writing", 6),
            finalAnswer:
              "Model: Macbeth's image of life as 'a walking shadow' strips it of substance, implying that human striving leaves no mark. His final judgment that life is a tale 'Signifying nothing' underscores his belief that even his own violent ambition has been meaningless. The blunt, final phrase hammers home that the loss of his wife has emptied his world of purpose.",
            commonErrors: [
              "Using 'then he says' and keeping the retelling structure.",
              "Ending with 'this shows how Macbeth feels' with no analysis.",
            ],
          },
        },
        {
          id: "ela10-u3-essay-organization-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: MACBETH,
          stem: "Answer all parts about analyzing Macbeth's soliloquy in an essay. A student's draft paragraph reads: \"In Act 5, Macbeth hears that his wife has died. He says that tomorrow creeps in at a petty pace. He also says that life is a walking shadow. Then he says that life is a tale told by an idiot. This shows how Macbeth feels.\"",
          parts: [
            {
              label: "a",
              prompt: "Identify two weaknesses of the draft paragraph.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Plan a three-paragraph body for an essay with the thesis: 'Macbeth's soliloquy uses repetition, theatrical imagery and blunt endings to present life as an empty performance.' Give a topic sentence and the evidence you will use for each paragraph.",
              marks: 6,
            },
            {
              label: "c",
              prompt:
                "Write one full body paragraph from your plan. Include a topic sentence, at least two embedded quotations, commentary on word choice and a sentence linking to the thesis.",
              marks: 12,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Paragraph structure",
                statement:
                  "Topic sentence, evidence, commentary, link to thesis.",
              },
              {
                kind: "skill",
                name: "Planning",
                statement:
                  "Each body paragraph proves one part of the thesis, in logical order.",
              },
              {
                kind: "technique",
                name: "Commentary",
                statement:
                  "Analysis of language, not summary, develops the argument.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "It is mostly summary ('he says that...'), retelling the soliloquy in order.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "a",
                reasoning:
                  "It has no topic sentence claim, no exact quotations and only vague commentary ('this shows how Macbeth feels').",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "b",
                reasoning:
                  "Three topic sentences, each making a distinct claim that matches one part of the thesis (repetition, theatrical imagery, blunt endings).",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "b",
                reasoning:
                  "Appropriate exact evidence for each paragraph, for example 'Tomorrow, and tomorrow, and tomorrow', 'a poor player' and 'Signifying nothing'.",
                evidence: "Signifying nothing",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Brief notes of the commentary planned (what each device suggests) and a logical order.",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "A topic sentence that makes an arguable claim and matches the plan.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "At least two short, exact quotations, embedded grammatically.",
                evidence: "a poor player",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Commentary on specific words and effects, for example how 'struts and frets' makes life seem an anxious performance.",
                evidence: "struts and frets",
                marks: 4,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "A sentence linking the paragraph to the essay's thesis.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning: "Transitions give flow from one idea to the next.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Conventions, including punctuation of quotations, are accurate.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            levels: [
              ...levels("writing", 6, "b"),
              ...levels("writing", 12, "c"),
            ],
            finalAnswer:
              "(a) It is summary, with no claim or exact evidence. (b) Plan: (1) Repetition: 'Tomorrow, and tomorrow, and tomorrow' to show monotony. (2) Imagery: 'a poor player / That struts and frets' to show life as performance. (3) Endings: 'Signifying nothing' to show finality. (c) Model: Shakespeare's theatrical imagery reduces life to an empty performance. Macbeth calls humanity 'a poor player / That struts and frets his hour upon the stage,' and the verbs 'struts' and 'frets' make existence seem both vain and anxious. Because the actor is 'heard no more,' the image implies that even a lifetime of noise leaves nothing behind. This supports the claim that Macbeth sees his ambition as a meaningless show.",
            commonErrors: [
              "Writing a plan that lists quotations but no claims.",
              "Dropping quotations without lead-in or analysis.",
              "Summarizing the plot of Act 5 instead of analyzing the language.",
            ],
          },
        },
      ],
    },
  ],
};
