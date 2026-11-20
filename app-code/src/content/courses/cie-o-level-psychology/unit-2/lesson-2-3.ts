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
              {
                id: "a",
                text: "Focusing on one stimulus while ignoring others",
              },
              { id: "b", text: "Doing two tasks at once" },
              { id: "c", text: "Remembering everything" },
              { id: "d", text: "Hearing all sounds" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Sudden understanding without trial-and-error" },
              { id: "b", text: "Learning through consequences" },
              { id: "c", text: "Learning through association" },
              { id: "d", text: "Copying others" },
            ],
            correctChoiceId: "a",
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
