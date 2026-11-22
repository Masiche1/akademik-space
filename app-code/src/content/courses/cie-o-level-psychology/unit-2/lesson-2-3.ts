import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "olep-u2-lesson-2-3",
  code: "2-3",
  title: "Attention and Learning",
  goal: "I CAN describe attention processes and types of learning.",
  standards: ["2219: Cognitive processes — attention and learning"],
  vocabulary: [
    {
      term: "Attention",
      definition: "Focusing mental resources on specific stimuli.",
    },
    {
      term: "Selective attention",
      definition: "Focusing on one stimulus while ignoring others.",
    },
    {
      term: "Divided attention",
      definition: "Distributing attention across multiple tasks.",
    },
    {
      term: "Classical conditioning",
      definition: "Learning through association.",
    },
    {
      term: "Operant conditioning",
      definition: "Learning through consequences.",
    },
    {
      term: "Insight learning",
      definition: "Sudden understanding without trial-and-error.",
    },
  ],
  concepts: [
    {
      id: "olep-u2-attention",
      title: "Attention",
      skill: "Describe selective and divided attention.",
      lesson: {
        sections: [
          {
            heading: "Attention",
            body: "Limited capacity — can't process everything. Attention selects what enters conscious awareness. Filter models explain how selection happens.",
          },
          {
            heading: "Selective attention",
            body: "Cherry (1953): participants follow one conversation in dichotic listening — notice little from unattended ear ('cocktail party effect'). Filter at sensory level.",
          },
          {
            heading: "Divided attention",
            body: "Multitasking — performance drops when tasks compete. Driving while phoning is dangerous. Some tasks can be automatic after practice (driving), freeing attention.",
          },
        ],
        keyFormulas: [
          {
            name: "Attention",
            statement:
              "Selective=filter one stimulus; Divided=multiple tasks with reduced performance.",
          },
        ],
        workedExample: {
          problem: "Why is talking on the phone while driving dangerous?",
          solution:
            "Divided attention reduces driving performance — both tasks compete for limited resources.",
        },
      },
      questions: [
        {
          id: "olep-u2-at-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is selective attention?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Doing two tasks at once" },
              { id: "b", text: "Hearing all sounds" },
              { id: "c", text: "Remembering everything" },
              {
                id: "d",
                text: "Focusing on one stimulus while ignoring others",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Selective attention",
                statement: "Focus on one, ignore others.",
              },
            ],
            steps: [
              {
                reasoning: "Selective = one stimulus.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Focusing on one stimulus",
            commonErrors: ["Confusing with divided."],
          },
        },
        {
          id: "olep-u2-at-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What did Cherry's dichotic listening study show?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cherry",
                statement: "People notice little from unattended ear.",
              },
            ],
            steps: [
              {
                reasoning: "Selective attention filters.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Unattended info mostly ignored.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Selective attention filters out unattended ear.",
            commonErrors: ["Saying all info processed."],
          },
        },
        {
          id: "olep-u2-at-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why divided attention reduces performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Divided attention",
                statement: "Limited capacity → tasks compete.",
              },
            ],
            steps: [
              { reasoning: "Attention is limited.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Tasks compete for resources.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Performance drops on both.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Limited capacity → competing tasks → reduced performance.",
            commonErrors: ["Saying it's impossible."],
          },
        },
        {
          id: "olep-u2-at-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Attention.",
          parts: [
            { label: "a", prompt: "Define selective attention.", marks: 1 },
            { label: "b", prompt: "Cherry's finding?", marks: 2 },
            { label: "c", prompt: "Divided attention risks?", marks: 3 },
            { label: "d", prompt: "Cocktail party effect?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attention",
                statement: "Selective+Cherry+divided+cocktail.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Focus one stimulus.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Dichotic listening.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Unattended ignored.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Limited capacity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Tasks compete.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Performance drops.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Hear own name.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Breaks through filter.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Meaningful info detected.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) selective (b) Cherry (c) divided (d) cocktail party",
          },
        },
        {
          id: "olep-u2-at-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Cherry's 1953 study investigated...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "depth perception" },
              { id: "b", text: "memory capacity" },
              { id: "c", text: "selective attention using dichotic listening" },
              { id: "d", text: "obedience to authority" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cherry",
                statement: "Selective attention/dichotic listening study.",
              },
            ],
            steps: [
              {
                reasoning: "Cherry studied selective attention.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Selective attention / dichotic listening",
            commonErrors: ["Confusing with Milgram."],
          },
        },
        {
          id: "olep-u2-at-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'cocktail party effect' refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "remembering everything said at a party" },
              { id: "b", text: "being unable to hear any conversation" },
              { id: "c", text: "noticing little from unattended conversations, yet instantly detecting your own name" },
              { id: "d", text: "dividing attention equally between two tasks" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cocktail party effect",
                statement: "Unattended input mostly filtered, own name detected.",
              },
            ],
            steps: [
              {
                reasoning: "Selective attention filters unattended channel.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Filtering unattended input but detecting own name",
            commonErrors: ["Saying all conversations are heard equally."],
          },
        },
        {
          id: "olep-u2-at-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Divided attention means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "automatic processing without effort" },
              { id: "b", text: "paying attention to everything equally well" },
              { id: "c", text: "attempting multiple tasks at once, with performance usually dropping" },
              { id: "d", text: "focusing on one stimulus and ignoring others" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Divided attention",
                statement: "Multiple tasks, reduced performance.",
              },
            ],
            steps: [
              {
                reasoning: "Divided attention = multitasking cost.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Multiple tasks with reduced performance",
            commonErrors: ["Confusing with selective attention."],
          },
        },
        {
          id: "olep-u2-at-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is driving while using a mobile phone particularly dangerous, in terms of attention?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attention is unlimited so it cannot be the cause" },
              { id: "b", text: "Phone use causes automatic processing of road signs" },
              { id: "c", text: "Both tasks compete for limited attentional capacity, so driving performance drops" },
              { id: "d", text: "Phones emit radiation that impairs vision" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attention capacity",
                statement: "Limited capacity → task competition.",
              },
            ],
            steps: [
              {
                reasoning: "Attention is limited.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Two demanding tasks compete → errors.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** Tasks compete for limited attention",
            commonErrors: ["Ignoring limited capacity."],
          },
        },
        {
          id: "olep-u2-at-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In filter models of attention, the 'filter' is best described as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a type of reinforcement" },
              { id: "b", text: "a physical barrier in the ear" },
              { id: "c", text: "a mechanism that selects which information enters conscious awareness" },
              { id: "d", text: "a memory store for all input" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Filter model",
                statement: "Selects info for conscious awareness.",
              },
            ],
            steps: [
              {
                reasoning: "Filter selects attended input.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Blocks or attenuates unattended input.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** Selects which input reaches awareness",
            commonErrors: ["Thinking it blocks all unattended input permanently."],
          },
        },
        {
          id: "olep-u2-at-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a dichotic-listening task, a participant correctly reported $30$ out of $40$ words from the attended ear. Calculate the percentage of attended words reported.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(attended reported / total attended) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "30 / 40 = 0.75.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 75%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "olep-u2-at-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A participant scored $92\\%$ accuracy on a single task but only $64\\%$ when performing it alongside a second task. Calculate the percentage-point drop.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 28, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Performance drop",
                statement: "single-task accuracy - dual-task accuracy.",
              },
            ],
            steps: [
              {
                reasoning: "92 - 64 = 28 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows cost of divided attention.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "28 percentage points",
          },
        },
        {
          id: "olep-u2-at-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a cocktail-party experiment, participants detected their own name in $18$ of $30$ unattended trials but only $3$ of $30$ for other names. Calculate the difference in detection rate in percentage points.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Detection difference",
                statement: "(18/30 - 3/30) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "60% - 10% = 50 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 50 percentage points.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "50 percentage points",
          },
        },
        {
          id: "olep-u2-at-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "When tracking two simultaneous conversations, participants followed the attended conversation correctly on $24$ of $30$ trials but split attention equally managed only $6$ of $30$. Calculate the percentage-point advantage of selective over divided attention.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Advantage",
                statement: "(24/30 - 6/30) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "80% - 20% = 60 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Supports limited-capacity view of attention.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Answer = 60 percentage points.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "60 percentage points",
          },
        },
        {
          id: "olep-u2-at-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define selective attention.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Selective attention",
                statement: "Focus on one stimulus, ignore others.",
              },
            ],
            steps: [
              {
                reasoning: "Focusing on one stimulus.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "While filtering out distractors.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Focusing on one stimulus while filtering out others.",
            commonErrors: ["Confusing with divided attention."],
          },
        },
        {
          id: "olep-u2-at-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the cocktail party effect and what it shows about attention.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cocktail party",
                statement: "Unattended input filtered; own name detected.",
              },
            ],
            steps: [
              {
                reasoning: "People follow one conversation, ignore the other.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Very little from unattended ear is noticed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Own name still detected — some processing continues.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shows selective filter at early stage.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Unattended conversations are mostly filtered, but personally significant input (own name) still breaks through — evidence for a selective filter.",
            commonErrors: ["Saying nothing from unattended input is processed."],
          },
        },
        {
          id: "olep-u2-at-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Attention.",
          parts: [
            { label: "a", prompt: "Define attention.", marks: 1 },
            { label: "b", prompt: "What did Cherry study?", marks: 2 },
            { label: "c", prompt: "Define divided attention.", marks: 2 },
            { label: "d", prompt: "Explain cocktail party effect.", marks: 2 },
            { label: "e", prompt: "Why is driving while phoning dangerous?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attention",
                statement: "Definition+Cherry+divided+cocktail+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Limited capacity selecting input.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Selective attention/dichotic listening.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Follow one conversation, notice little from other.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Multiple tasks at once.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Performance drops when tasks compete.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Unattended input filtered but own name detected.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Shows selective filter.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Limited capacity → competing demands.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Increased error risk while driving.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) definition (b) Cherry (c) divided (d) cocktail (e) driving",
          },
        },
      ],
    },
    {
      id: "olep-u2-learning-types",
      title: "Types of learning",
      skill: "Describe classical, operant and insight learning.",
      lesson: {
        sections: [
          {
            heading: "Classical conditioning",
            body: "Pavlov: neutral stimulus paired with unconditioned stimulus → conditioned response. Learning through association. Extinction when pairing stops.",
          },
          {
            heading: "Operant conditioning",
            body: "Skinner: behaviour shaped by consequences. Positive/negative reinforcement increases behaviour; punishment decreases. Schedules affect learning.",
          },
          {
            heading: "Insight and observational learning",
            body: "Insight: sudden understanding (Köhler's chimpanzee). Observational: learning by watching others (Bandura's Bobo doll). Social learning theory.",
          },
        ],
        keyFormulas: [
          {
            name: "Learning",
            statement:
              "Classical=association; Operant=consequences; Insight=sudden; Observational=watching.",
          },
        ],
        workedExample: {
          problem: "How does observational learning differ from operant?",
          solution:
            "Observational learns by watching models; operant learns through own consequences.",
        },
      },
      questions: [
        {
          id: "olep-u2-lt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is insight learning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copying others" },
              { id: "b", text: "Learning through consequences" },
              { id: "c", text: "Sudden understanding without trial-and-error" },
              { id: "d", text: "Learning through association" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Insight learning",
                statement: "Sudden understanding.",
              },
            ],
            steps: [
              {
                reasoning: "Insight = sudden understanding.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Sudden understanding",
            commonErrors: ["Confusing with conditioning."],
          },
        },
        {
          id: "olep-u2-lt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What did Köhler's chimpanzee study show?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Köhler",
                statement: "Insight learning — sudden solution.",
              },
            ],
            steps: [
              {
                reasoning: "Chimp solved problem suddenly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Showed insight learning.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Sudden solution without trial-and-error = insight.",
            commonErrors: ["Saying trial-and-error."],
          },
        },
        {
          id: "olep-u2-lt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare classical and operant conditioning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Classical vs operant",
                statement: "Association vs consequences.",
              },
            ],
            steps: [
              {
                reasoning: "Classical: stimulus association.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Operant: behaviour consequences.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Different mechanisms.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Classical=association; operant=consequences.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "olep-u2-lt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Types of learning.",
          parts: [
            { label: "a", prompt: "Define insight learning.", marks: 1 },
            { label: "b", prompt: "Köhler's study?", marks: 2 },
            { label: "c", prompt: "Classical vs operant?", marks: 3 },
            { label: "d", prompt: "Observational learning?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Learning",
                statement: "Insight+Köhler+conditioning+observational.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sudden understanding.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Chimp problem.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Sudden solution.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Association vs consequences.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clear distinction.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Examples.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Bandura/Bobo doll.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Vicarious reinforcement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) insight (b) Köhler (c) conditioning (d) observational",
          },
        },
        {
          id: "olep-u2-lt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Classical conditioning involves learning through...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "association between stimuli" },
              { id: "b", text: "watching others" },
              { id: "c", text: "sudden insight" },
              { id: "d", text: "consequences of behaviour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Classical conditioning",
                statement: "Learning by association (Pavlov).",
              },
            ],
            steps: [
              {
                reasoning: "Classical = stimulus association.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Association between stimuli",
            commonErrors: ["Confusing with operant conditioning."],
          },
        },
        {
          id: "olep-u2-lt-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Pavlov's experiment, the unconditioned stimulus (UCS) is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the salivation to the bell" },
              { id: "b", text: "food — which naturally triggers salivation" },
              { id: "c", text: "the experimenter" },
              { id: "d", text: "the bell — which becomes associated" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UCS",
                statement: "Naturally triggers response (food).",
              },
            ],
            steps: [
              {
                reasoning: "UCS = unconditioned stimulus = food.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Food",
            commonErrors: ["Confusing with the neutral stimulus."],
          },
        },
        {
          id: "olep-u2-lt-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Positive reinforcement increases behaviour by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "withholding a reward" },
              { id: "b", text: "removing an unpleasant consequence" },
              { id: "c", text: "adding an unpleasant consequence" },
              { id: "d", text: "adding a pleasant consequence" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Positive reinforcement",
                statement: "Add pleasant → increase behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Positive = add pleasant.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Adding a pleasant consequence",
            commonErrors: ["Confusing with negative reinforcement."],
          },
        },
        {
          id: "olep-u2-lt-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Negative reinforcement increases behaviour by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "punishing the behaviour" },
              { id: "b", text: "removing an unpleasant stimulus" },
              { id: "c", text: "adding a pleasant stimulus" },
              { id: "d", text: "ignoring the behaviour" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Negative reinforcement",
                statement: "Remove unpleasant → increase behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Negative = remove aversive.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Removing an unpleasant stimulus",
            commonErrors: ["Confusing with punishment."],
          },
        },
        {
          id: "olep-u2-lt-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In operant conditioning, extinction occurs when...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the behaviour is punished immediately" },
              { id: "b", text: "the reinforcer is withheld and the behaviour gradually disappears" },
              { id: "c", text: "the animal is removed from the situation permanently" },
              { id: "d", text: "a new stimulus is paired with the old one" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Extinction",
                statement: "Behaviour fades when reinforcement stops.",
              },
            ],
            steps: [
              {
                reasoning: "Extinction = no reinforcement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Behaviour gradually weakens.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** Reinforcement withheld → behaviour fades",
            commonErrors: ["Confusing with punishment."],
          },
        },
        {
          id: "olep-u2-lt-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A rat presses a lever $40$ times and receives food on $30$ of those presses. Calculate the reinforcement rate as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Reinforcement rate",
                statement: "(reinforced responses / total responses) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "30 / 40 = 0.75.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Rate = 75%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "olep-u2-lt-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Under a fixed-ratio schedule, a pigeon is rewarded after every $5$th peck. If it pecks $60$ times, how many rewards does it receive?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Fixed-ratio rewards",
                statement: "total responses / ratio.",
              },
            ],
            steps: [
              {
                reasoning: "60 / 5 = 12 rewards.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 12.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "olep-u2-lt-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a Bandura-style study, children who watched an aggressive model performed $18$ aggressive acts, while children who watched a non-aggressive model performed $6$. Calculate how many times more aggressive acts the first group performed.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ratio",
                statement: "aggressive model acts / non-aggressive model acts.",
              },
            ],
            steps: [
              {
                reasoning: "18 / 6 = 3.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Supports observational learning of aggression.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "3 times more",
          },
        },
        {
          id: "olep-u2-lt-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A model was rewarded for a behaviour on $8$ out of $10$ observed trials. Calculate the percentage of trials with vicarious reinforcement, and state what this demonstrates.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vicarious reinforcement rate",
                statement: "(rewarded trials / total trials) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "8 / 10 = 0.8.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Seeing the model rewarded increases imitation.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Percentage = 80%.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "80%",
          },
        },
        {
          id: "olep-u2-lt-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define classical conditioning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Classical conditioning",
                statement: "Learning through stimulus association.",
              },
            ],
            steps: [
              {
                reasoning: "Neutral stimulus paired with UCS.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Produces conditioned response.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Learning through association — a neutral stimulus paired with an unconditioned stimulus comes to trigger the conditioned response.",
            commonErrors: ["Confusing with operant conditioning."],
          },
        },
        {
          id: "olep-u2-lt-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between positive and negative reinforcement, with an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reinforcement",
                statement: "Positive=add pleasant; negative=remove aversive.",
              },
            ],
            steps: [
              {
                reasoning: "Positive: add pleasant consequence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Example e.g. praise or food.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Negative: remove unpleasant stimulus.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Example e.g. seatbelt buzzer stops.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Positive reinforcement adds a pleasant consequence; negative reinforcement removes an unpleasant one — both increase behaviour.",
            commonErrors: ["Confusing negative reinforcement with punishment."],
          },
        },
        {
          id: "olep-u2-lt-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Types of learning.",
          parts: [
            { label: "a", prompt: "Define classical conditioning.", marks: 1 },
            { label: "b", prompt: "Define operant conditioning.", marks: 2 },
            { label: "c", prompt: "Define insight learning.", marks: 2 },
            { label: "d", prompt: "Define observational learning.", marks: 2 },
            { label: "e", prompt: "Give one example of learning by observation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Learning types",
                statement: "Classical+operant+insight+observational.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Learning through stimulus association.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Behaviour shaped by consequences.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Reinforcement/punishment (Skinner).",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Sudden understanding without trial-and-error.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Köhler's chimpanzee.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Learning by watching others.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Bandura's social learning theory.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Any valid example e.g. Bobo doll aggression.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Model-observer link explained.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) classical (b) operant (c) insight (d) observational (e) example",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u2-2-3-notes",
      title: "Attention and learning — notes",
      summary:
        "Selective/divided attention, classical/operant/insight/observational learning.",
      sections: [
        {
          heading: "Attention",
          body: "Selective=filter one stimulus (Cherry); divided=multiple tasks with reduced performance; cocktail party effect.",
        },
        {
          heading: "Learning",
          body: "Classical=association; operant=consequences; insight=sudden; observational=watching models.",
        },
      ],
    },
  ],
};
