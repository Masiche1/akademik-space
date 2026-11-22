import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ciege-u4-lesson-4-2",
  code: "4-2",
  title: "Discursive Writing",
  goal: "I CAN write a balanced discursive essay exploring viewpoints.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 1: discursive"],
  vocabulary: [
    { term: "Discursive", definition: "Exploring a topic from multiple viewpoints." },
    { term: "For and against", definition: "Presenting both sides of an argument." },
    { term: "Balanced", definition: "Giving fair weight to different views." },
    { term: "Concession", definition: "Acknowledging the opposing side." },
    { term: "Evaluation", definition: "Weighing up arguments to reach a judgement." },
  ],
  concepts: [
    {
      id: "ciege-u4-s2-balance",
      title: "Presenting both sides",
      skill: "Structure a discursive essay fairly at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Discursive vs argumentative",
            body: "Argumentative essays argue one side strongly. Discursive essays explore multiple viewpoints, often ending with a balanced conclusion or personal judgement.",
          },
          {
            heading: "Structure",
            body: "Introduction: introduce the debate. Body: present 'for' arguments, then 'against', or interweave viewpoints. Conclusion: evaluate and reach a balanced position.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Plan a discursive essay on 'Should homework be given?'.",
          solution: "Intro: homework debate. For: reinforces learning. Against: stress, less free time. Conclusion: balanced view — some homework useful if appropriate.",
        },
      },
      questions: [
        {
          id: "ciege-u4-s2-ba-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is discursive writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Describing a place" },
            { id: "b", text: "Arguing one side" },
            { id: "c", text: "Exploring multiple viewpoints" },
            { id: "d", text: "Telling a story" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Discursive", statement: "Multiple viewpoints." }],
            steps: [
              { reasoning: "Discursive explores different viewpoints fairly.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Multiple viewpoints",
          },
        },
        {
          id: "ciege-u4-s2-ba-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence presenting the 'for' side of 'Should schools have uniforms?'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Presenting viewpoint", statement: "One side clearly." }],
            steps: [
              { reasoning: "The sentence gives a pro-uniform argument.", marks: 1, markCode: "AO2" },
              { reasoning: "It could be developed with evidence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One pro-uniform sentence",
          },
        },
        {
          id: "ciege-u4-s2-ba-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence presenting the 'against' side of the same topic.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Opposing viewpoint", statement: "Balanced presentation." }],
            steps: [
              { reasoning: "The sentence gives an anti-uniform argument.", marks: 1, markCode: "AO2" },
              { reasoning: "It differs from the 'for' side.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One anti-uniform sentence",
          },
        },
        {
          id: "ciege-u4-s2-ba-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a balanced conclusion for a discursive essay on school uniforms.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Balanced conclusion", statement: "Weighs both sides." }],
            steps: [
              { reasoning: "The conclusion acknowledges both sides.", marks: 1, markCode: "AO2" },
              { reasoning: "It reaches a reasoned judgement.", marks: 1, markCode: "AO2" },
              { reasoning: "It does not simply repeat arguments.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Balanced conclusion",
          },
        },
        {
          id: "ciege-u4-s2-ba-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'concession' in discursive writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A summary sentence" },
            { id: "b", text: "Acknowledging the opposing viewpoint" },
            { id: "c", text: "A strong argument" },
            { id: "d", text: "A statistic" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Concession", statement: "Acknowledge opposing view." }],
            steps: [
              { reasoning: "A concession admits a point to the other side.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** Acknowledging the opposing viewpoint",
          },
        },
        {
          id: "ciege-u4-s2-ba-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence presenting the 'for' side of 'Should mobile phones be allowed in exams?'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Presenting viewpoint", statement: "One side clearly." }],
            steps: [
              { reasoning: "The sentence gives a pro-phones argument.", marks: 1, markCode: "AO2" },
              { reasoning: "It could be developed with evidence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One pro-phones sentence",
          },
        },
        {
          id: "ciege-u4-s2-ba-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence presenting the 'against' side of 'Should mobile phones be allowed in exams?'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Opposing viewpoint", statement: "Balanced presentation." }],
            steps: [
              { reasoning: "The sentence gives an anti-phones argument.", marks: 1, markCode: "AO2" },
              { reasoning: "It differs from the 'for' side.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One anti-phones sentence",
          },
        },
        {
          id: "ciege-u4-s2-ba-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which structure best suits a discursive essay?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Present both viewpoints, then reach a balanced judgement" },
            { id: "b", text: "Only one viewpoint throughout" },
            { id: "c", text: "A list of facts with no opinion" },
            { id: "d", text: "A story about the topic" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Discursive structure", statement: "Both sides + evaluation." }],
            steps: [
              { reasoning: "Discursive writing explores multiple viewpoints fairly.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** Present both viewpoints, then reach a balanced judgement",
          },
        },
        {
          id: "ciege-u4-s2-ba-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write one sentence that presents both sides of 'Should school uniforms be compulsory?'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Balanced sentence", statement: "Both viewpoints in one sentence." }],
            steps: [
              { reasoning: "The sentence includes a 'for' viewpoint.", marks: 1, markCode: "AO2" },
              { reasoning: "The sentence includes an 'against' viewpoint.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One balanced sentence",
          },
        },
        {
          id: "ciege-u4-s2-ba-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write two sentences on 'Should homework be banned?' — one supporting and one opposing.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Both viewpoints", statement: "For and against." }],
            steps: [
              { reasoning: "One sentence supports banning homework.", marks: 1, markCode: "AO2" },
              { reasoning: "One sentence opposes banning homework.", marks: 1, markCode: "AO2" },
              { reasoning: "Both are punctuated correctly.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two opposing sentences",
          },
        },
        {
          id: "ciege-u4-s2-ba-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "List the 'for' and 'against' points you would use in a discursive essay on 'Should zoos exist?'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Viewpoint planning", statement: "Both sides listed." }],
            steps: [
              { reasoning: "At least two 'for' points are given.", marks: 1, markCode: "AO2" },
              { reasoning: "At least two 'against' points are given.", marks: 1, markCode: "AO2" },
              { reasoning: "Points are relevant to the topic.", marks: 1, markCode: "AO2" },
              { reasoning: "Points are concise and clear.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "For and against points",
          },
        },
        {
          id: "ciege-u4-s2-ba-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Plan a discursive essay on 'Should students wear school uniforms?' — write an introduction sentence, two 'for' points, two 'against' points, and a conclusion sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Discursive plan", statement: "Complete balanced structure." }],
            steps: [
              { reasoning: "The introduction presents the debate.", marks: 1, markCode: "AO2" },
              { reasoning: "Two distinct 'for' points are given.", marks: 1, markCode: "AO2" },
              { reasoning: "Two distinct 'against' points are given.", marks: 1, markCode: "AO2" },
              { reasoning: "The conclusion reaches a balanced position.", marks: 1, markCode: "AO2" },
              { reasoning: "All points are relevant and well punctuated.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Discursive essay plan",
          },
        },
        {
          id: "ciege-u4-s2-ba-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which conclusion is most balanced for a discursive essay?",
          response: { type: "mcq", choices: [
            { id: "a", text: "In conclusion, uniforms exist." },
            { id: "b", text: "Uniforms are terrible and everyone should reject them." },
            { id: "c", text: "While uniforms promote equality, they may restrict individuality; a balanced view suggests optional smart dress." },
            { id: "d", text: "I think uniforms are boring." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Balanced conclusion", statement: "Weighs both sides." }],
            steps: [
              { reasoning: "Option b acknowledges both viewpoints and reaches a reasoned judgement.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** While uniforms promote equality, they may restrict individuality; a balanced view suggests optional smart dress.",
          },
        },
        {
          id: "ciege-u4-s2-ba-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a balanced conclusion (2-3 sentences) for a discursive essay on 'Is social media good for young people?'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Balanced conclusion", statement: "Weighs both sides." }],
            steps: [
              { reasoning: "Both sides of the debate are acknowledged.", marks: 1, markCode: "AO2" },
              { reasoning: "A reasoned judgement is reached.", marks: 1, markCode: "AO2" },
              { reasoning: "The conclusion does not simply repeat earlier arguments.", marks: 1, markCode: "AO2" },
              { reasoning: "Connectives link the evaluation.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Balanced conclusion",
          },
        },
        {
          id: "ciege-u4-s2-ba-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a paragraph presenting both sides of 'Should the school day be shorter?', using 'for' and 'against' viewpoints.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Balanced paragraph", statement: "Fair presentation." }],
            steps: [
              { reasoning: "At least two 'for' arguments are given.", marks: 1, markCode: "AO2" },
              { reasoning: "At least two 'against' arguments are given.", marks: 1, markCode: "AO2" },
              { reasoning: "The viewpoints are presented fairly without bias.", marks: 1, markCode: "AO2" },
              { reasoning: "The paragraph is coherent and well organised.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Balanced paragraph",
          },
        },
        {
          id: "ciege-u4-s2-ba-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write an introduction and a balanced conclusion for a discursive essay on 'Should animals be used in scientific experiments?'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Discursive frame", statement: "Intro + balanced conclusion." }],
            steps: [
              { reasoning: "The introduction presents the debate.", marks: 1, markCode: "AO2" },
              { reasoning: "The introduction is engaging and relevant.", marks: 1, markCode: "AO2" },
              { reasoning: "The conclusion acknowledges both viewpoints.", marks: 1, markCode: "AO2" },
              { reasoning: "The conclusion reaches a reasoned judgement.", marks: 1, markCode: "AO2" },
              { reasoning: "The conclusion does not introduce new arguments.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate throughout.", marks: 1, markCode: "AO2" },
            ],
                        levels: [
                        { level: "Level 3", marks: "4-6", descriptor: "Complete, accurate and well-crafted response." },
                        { level: "Level 2", marks: "2-3", descriptor: "Mostly secure with some weaknesses or thin development." },
                        { level: "Level 1", marks: "0-1", descriptor: "Limited creditable material." },
                        ],
            finalAnswer: "Introduction + balanced conclusion",
          },
        },
      ],
    },
    {
      id: "ciege-u4-s2-evaluate",
      title: "Evaluating arguments",
      skill: "Weigh up viewpoints and reach a judgement.",
      lesson: {
        sections: [
          {
            heading: "Evaluation",
            body: "Evaluating means judging which arguments are strongest. Consider: Are the reasons logical? Is the evidence convincing? Does the conclusion follow?",
          },
          {
            heading: "Balanced judgement",
            body: "A good discursive conclusion doesn't just pick a side — it explains why, weighing the strengths of each viewpoint. 'While uniforms promote equality, they may restrict individuality; however, the benefits of unity seem greater.'",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Evaluate: 'Uniforms save money' vs 'Uniforms restrict self-expression'.",
          solution: "The cost argument is practical; the self-expression argument is about rights. A balanced view might say uniforms could be optional but smart.",
        },
      },
      questions: [
        {
          id: "ciege-u4-s2-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'evaluate' mean in discursive writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Weigh up viewpoints to reach a judgement" },
            { id: "b", text: "Summarise" },
            { id: "c", text: "Describe" },
            { id: "d", text: "List arguments" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Evaluation", statement: "Weighing arguments." }],
            steps: [
              { reasoning: "Evaluation means judging which view is stronger.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Weighing viewpoints",
          },
        },
        {
          id: "ciege-u4-s2-ev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence evaluating whether homework helps learning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluation", statement: "Judgement with reasons." }],
            steps: [
              { reasoning: "The sentence gives a judgement.", marks: 1, markCode: "AO2" },
              { reasoning: "It gives a reason for the judgement.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One evaluative sentence",
          },
        },
        {
          id: "ciege-u4-s2-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence that concedes a point to the opposing side.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Concession", statement: "Acknowledge opposing view." }],
            steps: [
              { reasoning: "The sentence acknowledges an opposing viewpoint.", marks: 1, markCode: "AO2" },
              { reasoning: "It could use 'although', 'while', 'it is true that'.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One concession sentence",
          },
        },
        {
          id: "ciege-u4-s2-ev-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write two sentences that could form the conclusion of a discursive essay on 'Should phones be allowed in school?'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Discursive conclusion", statement: "Balanced judgement." }],
            steps: [
              { reasoning: "Both sentences weigh the arguments.", marks: 1, markCode: "AO2" },
              { reasoning: "A balanced position is reached.", marks: 1, markCode: "AO2" },
              { reasoning: "Connectives link the evaluation.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two-sentence conclusion",
          },
        },
        {
          id: "ciege-u4-s2-ev-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When evaluating an argument in discursive writing, what should you consider?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Who wrote it" },
            { id: "b", text: "How long it is" },
            { id: "c", text: "Only whether you agree with it" },
            { id: "d", text: "Whether the reasons are logical and the evidence convincing" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Evaluation", statement: "Judge by logic and evidence." }],
            steps: [
              { reasoning: "Strong arguments have logical reasons and convincing evidence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** Whether the reasons are logical and the evidence convincing",
          },
        },
        {
          id: "ciege-u4-s2-ev-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence evaluating whether 'Uniforms save money' is a strong argument.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluation", statement: "Judgement with reason." }],
            steps: [
              { reasoning: "The sentence gives a judgement on the argument.", marks: 1, markCode: "AO2" },
              { reasoning: "It gives a reason, e.g. about practicality or evidence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One evaluative sentence",
          },
        },
        {
          id: "ciege-u4-s2-ev-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence judging which viewpoint is stronger on the topic of homework: 'Homework reinforces learning' versus 'Homework causes stress'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Judgement", statement: "Choose and justify." }],
            steps: [
              { reasoning: "The sentence chooses a stronger viewpoint.", marks: 1, markCode: "AO2" },
              { reasoning: "It gives a reason for the choice.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One judgement sentence",
          },
        },
        {
          id: "ciege-u4-s2-ev-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the strongest evaluative phrase for a discursive conclusion?",
          response: { type: "mcq", choices: [
            { id: "a", text: "On balance, the evidence suggests a middle path is wisest." },
            { id: "b", text: "In conclusion, both sides have points." },
            { id: "c", text: "I don't know what to think." },
            { id: "d", text: "Homework is boring." },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluative language", statement: "Weighs and judges." }],
            steps: [
              { reasoning: "Option b weighs the arguments and reaches a judgement.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** On balance, the evidence suggests a middle path is wisest.",
          },
        },
        {
          id: "ciege-u4-s2-ev-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a concession followed by a counter-argument on the topic 'Should phones be allowed in school?'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Concession + counter", statement: "Acknowledge then refute." }],
            steps: [
              { reasoning: "The first sentence concedes a point to the other side.", marks: 1, markCode: "AO2" },
              { reasoning: "The second counters it with the writer's position.", marks: 1, markCode: "AO2" },
              { reasoning: "Connectives link the sentences.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Concession + counter pair",
          },
        },
        {
          id: "ciege-u4-s2-ev-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence evaluating the evidence in this claim: 'A survey of ten students shows phones distract everyone in class.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evidence evaluation", statement: "Assess reliability." }],
            steps: [
              { reasoning: "The sentence judges the evidence (e.g. small sample size).", marks: 1, markCode: "AO2" },
              { reasoning: "It explains why the evidence may or may not be convincing.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One evidence-evaluation sentence",
          },
        },
        {
          id: "ciege-u4-s2-ev-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a balanced judgement paragraph on 'Should school start earlier?', weighing both viewpoints.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Balanced judgement", statement: "Weigh + decide." }],
            steps: [
              { reasoning: "The paragraph presents the main viewpoints.", marks: 1, markCode: "AO2" },
              { reasoning: "It weighs their strengths.", marks: 1, markCode: "AO2" },
              { reasoning: "It reaches a reasoned position.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Judgement paragraph",
          },
        },
        {
          id: "ciege-u4-s2-ev-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a balanced conclusion (2-3 sentences) for a discursive essay on 'Should the voting age be lowered to 16?'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluative conclusion", statement: "Weigh + judge." }],
            steps: [
              { reasoning: "Both viewpoints are acknowledged.", marks: 1, markCode: "AO2" },
              { reasoning: "The stronger arguments are identified.", marks: 1, markCode: "AO2" },
              { reasoning: "A clear judgement is reached.", marks: 1, markCode: "AO2" },
              { reasoning: "Connectives link the evaluation.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Evaluative conclusion",
          },
        },
        {
          id: "ciege-u4-s2-ev-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the weakest argument?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Everyone knows uniforms are just better." },
            { id: "b", text: "Schools with uniforms report fewer bullying incidents." },
            { id: "c", text: "Uniforms reduce peer pressure because students look the same." },
            { id: "d", text: "Uniforms save families money on clothing." },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Argument strength", statement: "Evidence beats assertion." }],
            steps: [
              { reasoning: "Option b is an unsupported assertion with no reason or evidence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** Everyone knows uniforms are just better.",
          },
        },
        {
          id: "ciege-u4-s2-ev-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a paragraph evaluating two arguments about banning cars from city centres: 'It reduces pollution' versus 'It harms businesses'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Argument evaluation", statement: "Weigh both claims." }],
            steps: [
              { reasoning: "Both arguments are explained fairly.", marks: 1, markCode: "AO2" },
              { reasoning: "Their strengths and weaknesses are compared.", marks: 1, markCode: "AO2" },
              { reasoning: "A judgement is reached on which is stronger.", marks: 1, markCode: "AO2" },
              { reasoning: "Reasons are given for the judgement.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Evaluation paragraph",
          },
        },
        {
          id: "ciege-u4-s2-ev-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write an evaluative conclusion for a discursive essay on 'Is online learning as good as classroom learning?'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluative conclusion", statement: "Balanced judgement." }],
            steps: [
              { reasoning: "Advantages of online learning are acknowledged.", marks: 1, markCode: "AO2" },
              { reasoning: "Limitations or advantages of classroom learning are considered.", marks: 1, markCode: "AO2" },
              { reasoning: "A balanced judgement is reached.", marks: 1, markCode: "AO2" },
              { reasoning: "The conclusion reinforces rather than repeats.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Evaluative conclusion",
          },
        },
        {
          id: "ciege-u4-s2-ev-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a full evaluation paragraph (5-6 sentences) on 'Should junk food be banned from schools?', weighing the strongest arguments on each side.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Full evaluation", statement: "Weigh + judge." }],
            steps: [
              { reasoning: "The 'for banning' arguments are presented.", marks: 1, markCode: "AO2" },
              { reasoning: "The 'against banning' arguments are presented.", marks: 1, markCode: "AO2" },
              { reasoning: "The arguments are compared by strength.", marks: 1, markCode: "AO2" },
              { reasoning: "A clear judgement is reached.", marks: 1, markCode: "AO2" },
              { reasoning: "The paragraph is coherent and well organised.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
                        levels: [
                        { level: "Level 3", marks: "4-6", descriptor: "Complete, accurate and well-crafted response." },
                        { level: "Level 2", marks: "2-3", descriptor: "Mostly secure with some weaknesses or thin development." },
                        { level: "Level 1", marks: "0-1", descriptor: "Limited creditable material." },
                        ],
            finalAnswer: "Full evaluation paragraph",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u4-s2-disc-notes",
      title: "Discursive writing — revision notes",
      summary: "Multiple viewpoints, balance, evaluation.",
      sections: [
        { heading: "Balance", body: "Present both sides fairly. Use concessions ('although...') to acknowledge opposing views." },
        { heading: "Evaluation", body: "Weigh arguments by logic and evidence. Reach a reasoned judgement, not just a summary." },
      ],
    },
  ],
};
