import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "eias-psych-u2-lesson-2-1",
  code: "2-1",
  title: "Memory Models and Encoding",
  goal: "I CAN explain multi-store and working memory models and encoding processes.",
  standards: ["Edexcel IAS Psychology 9PS01 Unit 2 — Memory"],
  vocabulary: [
    {
      term: "Memory",
      definition: "Process of encoding, storing and retrieving information.",
    },
    {
      term: "Encoding",
      definition: "Converting information into storable form.",
    },
    {
      term: "Multi-store model",
      definition: "Atkinson-Shiffrin: sensory → short-term → long-term memory.",
    },
    {
      term: "Working memory",
      definition: "Baddeley: active processing system with components.",
    },
    {
      term: "Sensory memory",
      definition: "Brief storage of sensory input (~seconds).",
    },
    {
      term: "Chunking",
      definition: "Grouping information into meaningful units to aid memory.",
    },
  ],
  concepts: [
    {
      id: "eias-psych-u2-models",
      title: "Memory Models",
      skill: "Compare multi-store and working memory models.",
      lesson: {
        sections: [
          {
            heading: "Multi-store model",
            body: "**Sensory memory**: brief (~seconds), large capacity. **Short-term memory (STM)**: ~18 seconds, 7±2 items, acoustic encoding. **Long-term memory (LTM)**: unlimited duration/capacity, semantic encoding.\n\n**Transfer**: rehearsal moves STM → LTM. **Forgetting**: decay in STM, displacement in STM, retrieval failure in LTM.",
          },
          {
            heading: "Working memory",
            body: "**Central executive**: attention/control. **Phonological loop**: verbal info. **Visuospatial sketchpad**: visual/spatial info. **Episodic buffer**: integrates info, links to LTM.\n\n**Evaluation**: working memory explains how we process multiple types simultaneously — more complex than simple STM.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Remembering a phone number by repeating it. Which process?",
          solution: "Rehearsal — STM to LTM transfer.",
        },
      },
      questions: [
        {
          id: "eias-psych-u2-mod-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the multi-store model?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sensory → STM → LTM stores" },
              { id: "b", text: "Working memory" },
              { id: "c", text: "One memory store" },
              { id: "d", text: "Forgetting theory" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multi-store",
                statement: "Three stores.",
              },
            ],
            steps: [
              {
                reasoning: "Multi-store = 3-stage model.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Three stores",
            commonErrors: ["Working confused."],
          },
        },
        {
          id: "eias-psych-u2-mod-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two differences between STM and LTM.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "STM vs LTM",
                statement: "Duration + encoding.",
              },
            ],
            steps: [
              {
                reasoning: "Duration: STM ~18 sec, LTM unlimited.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Encoding: STM acoustic, LTM semantic.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Capacity: STM 7±2, LTM unlimited.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Duration, encoding, capacity differ.",
            commonErrors: ["Same.", "Only one."],
          },
        },
        {
          id: "eias-psych-u2-mod-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the components of working memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Working memory",
                statement: "Component system.",
              },
            ],
            steps: [
              {
                reasoning: "Central executive — attention/control.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Phonological loop — verbal info rehearsal.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Visuospatial sketchpad — visual/spatial info.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Episodic buffer — integrates info, links to LTM.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Executive + phonological + visuospatial + buffer.",
            commonErrors: ["One component.", "Multi-store."],
          },
        },
        {
          id: "eias-psych-u2-mod-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student struggles to remember lecture content.",
          parts: [
            {
              label: "a",
              prompt: "Explain encoding problem using memory model.",
              marks: 4,
            },
            { label: "b", prompt: "Suggest two memory strategies.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Memory strategies",
                statement: "Encoding aids.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Info may decay in STM — not rehearsed to LTM.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Poor encoding — shallow processing (maintenance vs elaborative).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Elaborative rehearsal — connect to existing knowledge.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Chunking — group info into meaningful units.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) decay/shallow (b) elaborative+chunking",
            commonErrors: ["LTM problem.", "No strategy."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u2-encoding",
      title: "Encoding and Levels of Processing",
      skill: "Explain encoding types and levels of processing.",
      lesson: {
        sections: [
          {
            heading: "Encoding types",
            body: "**Acoustic**: sound-based — STM uses this. **Visual**: image-based — iconic memory. **Semantic**: meaning-based — LTM uses this. Deeper processing → better retention.\n\n**Baddeley's study**: STM errors acoustic (confuse 'cat'/'mat'), LTM errors semantic (confuse 'huge'/'enormous').",
          },
          {
            heading: "Levels of processing",
            body: "**Shallow**: structural — appearance (is word in capital letters?). **Phonemic**: sound — rhymes with 'cat'? **Semantic**: meaning — is it an animal?\n\n**Craik & Lockhart**: deeper processing → better memory. Semantic encoding best — meaning creates stronger traces.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Remembering word by meaning vs sound. Which is better?",
          solution: "Semantic — deeper processing.",
        },
      },
      questions: [
        {
          id: "eias-psych-u2-enc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is semantic encoding?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Structural" },
              { id: "b", text: "Visual" },
              { id: "c", text: "Sound-based" },
              { id: "d", text: "Meaning-based" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Semantic encoding",
                statement: "Meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Semantic = meaning-based.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Meaning-based",
            commonErrors: ["Acoustic confused."],
          },
        },
        {
          id: "eias-psych-u2-enc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of encoding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Encoding types",
                statement: "Acoustic, visual, semantic.",
              },
            ],
            steps: [
              {
                reasoning: "Acoustic — sound-based (STM).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Visual — image-based (sensory).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Semantic — meaning-based (LTM).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Acoustic, visual, semantic.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eias-psych-u2-enc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the levels of processing theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "LOP",
                statement: "Depth → retention.",
              },
            ],
            steps: [
              {
                reasoning: "Shallow: structural — appearance only.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Phonemic: sound — rhyming.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Semantic: meaning — deepest, best retention.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Deeper processing → stronger memory trace.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Shallow→deep processing → better memory.",
            commonErrors: ["Shallow best.", "No levels."],
          },
        },
        {
          id: "eias-psych-u2-enc-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student memorises vocabulary by making sentences with each word.",
          parts: [
            { label: "a", prompt: "Identify the encoding strategy.", marks: 3 },
            { label: "b", prompt: "Explain why it works.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Elaborative encoding",
                statement: "Meaning links.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Semantic/elaborative encoding — connects to meaning.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Sentences create meaningful associations.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Deep processing → stronger memory trace.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Personal relevance → easier retrieval cues.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Links to existing knowledge — schema integration.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) semantic encoding (b) deep processing works",
            commonErrors: ["Shallow.", "No explanation."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u2-forgetting",
      title: "Forgetting and Retrieval",
      skill: "Explain forgetting causes and retrieval processes.",
      lesson: {
        sections: [
          {
            heading: "Forgetting causes",
            body: "**Decay**: memory trace fades over time — STM mainly. **Displacement**: new info pushes old out of limited STM. **Interference**: proactive (old disrupts new) vs retroactive (new disrupts old). **Retrieval failure**: info stored but can't access — cue-dependent forgetting.\n\n**Repression**: motivated forgetting — traumatic memories suppressed (Freud).",
          },
          {
            heading: "Retrieval",
            body: "**Recognition**: identify from options — easier. **Recall**: reproduce from memory — harder. **Context-dependent**: same context aids retrieval — study/exam same room. **State-dependent**: same physiological state — drunk studying recalled drunk.\n\n**Retrieval cues**: prompts that trigger memory — 'on the tip of tongue'.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Can't remember name until someone says first letter. Effect?",
          solution: "Retrieval cue — tip-of-tongue.",
        },
      },
      questions: [
        {
          id: "eias-psych-u2-forget-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is proactive interference?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memory fades" },
              { id: "b", text: "New disrupts old" },
              { id: "c", text: "Retrieval failure" },
              { id: "d", text: "Old disrupts new" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proactive interference",
                statement: "Old→new.",
              },
            ],
            steps: [
              {
                reasoning: "Proactive = old disrupts new.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Old disrupts new",
            commonErrors: ["Retroactive confused."],
          },
        },
        {
          id: "eias-psych-u2-forget-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of forgetting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Forgetting types",
                statement: "Decay + interference.",
              },
            ],
            steps: [
              {
                reasoning: "Decay — memory trace fades.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Interference — competing memories.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Retrieval failure — stored but inaccessible.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Decay, interference, retrieval failure.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eias-psych-u2-forget-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain context-dependent forgetting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context-dependent",
                statement: "Same context aids.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Memory encoded with context — place, mood, surroundings.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Same context → easier retrieval — matching cues.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Different context → harder retrieval — cues absent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: study in library → recall better in library.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Context match → better retrieval.",
            commonErrors: ["Any context.", "No example."],
          },
        },
        {
          id: "eias-psych-u2-forget-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A witness can't recall details of a crime they saw.",
          parts: [
            { label: "a", prompt: "Explain two possible causes.", marks: 4 },
            {
              label: "b",
              prompt: "Suggest two retrieval strategies.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Eyewitness memory",
                statement: "Encoding + retrieval.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Poor encoding — stress, brief exposure.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Decay/interference — time passed, other info.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Context reinstatement — return to scene mentally.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Cognitive interview — recall in different order, different perspectives.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) encoding+decay (b) context+cognitive interview",
            commonErrors: ["Lying.", "No strategy."],
          },
        },
      ],
    },
  ],
};
