import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "eias-psych-u2-lesson-2-2",
  code: "2-2",
  title: "Memory Improvement and Eyewitness Testimony",
  goal: "I CAN explain mnemonic techniques and eyewitness memory factors.",
  standards: ["Edexcel IAS Psychology 9PS01 Unit 2 — Memory"],
  vocabulary: [
    {
      term: "Mnemonics",
      definition: "Memory aids — techniques to improve retention.",
    },
    {
      term: "Method of loci",
      definition: "Associating items with familiar locations.",
    },
    { term: "Acronym", definition: "Word formed from first letters of items." },
    {
      term: "Eyewitness testimony",
      definition: "Memory report of witnessed event.",
    },
    {
      term: "Misleading information",
      definition: "Post-event info that alters memory.",
    },
    {
      term: "Cognitive interview",
      definition: "Retrieval technique enhancing eyewitness recall.",
    },
  ],
  concepts: [
    {
      id: "eias-psych-u2-mnemonics",
      title: "Mnemonics and Memory Aids",
      skill: "Explain and evaluate memory improvement techniques.",
      lesson: {
        sections: [
          {
            heading: "Mnemonic types",
            body: "**Method of loci**: associate items with familiar route/locations — memory palace. **Acronyms**: first letters form word — 'ROYGBIV' for rainbow. **Acrostics**: first letters form sentence. **Chunking**: group into meaningful units — phone numbers. **Rhymes**: '30 days hath September'.\n\n**Evaluation**: effective for ordered/listed info; less useful for complex concepts; requires practice.",
          },
          {
            heading: "Why mnemonics work",
            body: "**Elaborative encoding**: creates meaningful associations → deeper processing. **Visual imagery**: concrete images more memorable. **Organization**: structure aids retrieval — schema theory.\n\n**Example**: remembering periodic table via songs, historical dates via acronyms.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Remembering planets order via 'My Very Educated Mother'. Technique?",
          solution: "Acronym.",
        },
      },
      questions: [
        {
          id: "eias-psych-u2-mnem-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are mnemonics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Brain damage" },
              { id: "b", text: "Memory aids to improve retention" },
              { id: "c", text: "Memory tests" },
              { id: "d", text: "Forgetting techniques" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mnemonics",
                statement: "Memory aids.",
              },
            ],
            steps: [
              {
                reasoning: "Mnemonics = memory improvement.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Memory aids",
            commonErrors: ["Forgetting confused."],
          },
        },
        {
          id: "eias-psych-u2-mnem-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of mnemonics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mnemonic types",
                statement: "Loci, acronym.",
              },
            ],
            steps: [
              {
                reasoning: "Method of loci — associate with locations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Acronym — first letters form word.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Chunking — group into units.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Loci, acronym, chunking.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eias-psych-u2-mnem-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the method of loci is effective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method of loci",
                statement: "Spatial encoding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Associates items with familiar locations — spatial memory.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Visual imagery — concrete, memorable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Organised structure — retrieval path through locations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Deep processing — meaningful associations.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Spatial + visual + organized → effective.",
            commonErrors: ["Random.", "No mechanism."],
          },
        },
        {
          id: "eias-psych-u2-mnem-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student must memorise 20 vocabulary words for exam.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two mnemonic strategies.",
              marks: 4,
            },
            { label: "b", prompt: "Evaluate effectiveness.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mnemonic application",
                statement: "Word memory.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Make sentences/stories with words — narrative linking.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Group by theme/category — semantic clustering.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Good for ordered/listed info — words easier than numbers.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Requires practice — takes time to learn technique.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) sentences+categories (b) good but practice",
            commonErrors: ["Rote only.", "No eval."],
          },
        },
      ],
    },
    {
      id: "eias-psych-u2-eyewitness",
      title: "Eyewitness Testimony",
      skill: "Explain factors affecting eyewitness accuracy.",
      lesson: {
        sections: [
          {
            heading: "Memory factors",
            body: "**Encoding**: stress, weapon focus, brief exposure → poor encoding. **Retention**: time delay → decay/interference. **Retrieval**: misleading questions → memory distortion.\n\n**Loftus studies**: 'smashed' vs 'hit' verb → speed estimates differed. Post-event info alters memory — misinformation effect.",
          },
          {
            heading: "Improving testimony",
            body: "**Cognitive interview**: recall in different order, different perspectives, report everything — increases accurate recall by ~35%. **Context reinstatement**: mentally return to scene. **Avoid leading questions**: don't suggest answers.\n\n**Evaluation**: eyewitness testimony unreliable — but still used in courts; reforms (double-blind procedures, expert testimony).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Witness says 'smashed' vs 'hit' — speed estimate differs. Effect?",
          solution: "Misinformation effect.",
        },
      },
      questions: [
        {
          id: "eias-psych-u2-ew-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the misinformation effect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfect memory" },
              { id: "b", text: "Forgetting" },
              { id: "c", text: "Accurate recall" },
              { id: "d", text: "Post-event info alters memory" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Misinformation effect",
                statement: "Post-event distortion.",
              },
            ],
            steps: [
              {
                reasoning: "Misinformation = post-event alters memory.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Post-event distortion",
            commonErrors: ["Accurate confused."],
          },
        },
        {
          id: "eias-psych-u2-ew-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors that reduce eyewitness accuracy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Eyewitness factors",
                statement: "Stress + delay.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stress — weapon focus, high arousal impairs encoding.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Time delay — decay/interference before recall.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Misleading questions — post-event info distorts memory.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Stress, delay, misleading questions.",
            commonErrors: ["Improve factors.", "Only one."],
          },
        },
        {
          id: "eias-psych-u2-ew-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the cognitive interview technique.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cognitive interview",
                statement: "Enhanced recall.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recall in different order — reverse, start from end.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Different perspectives — what would others see?",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Report everything — no editing, even uncertain details.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Context reinstatement — mentally return to scene.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Multiple retrieval strategies → ~35% more accurate.",
            commonErrors: ["Standard interview.", "No techniques."],
          },
        },
        {
          id: "eias-psych-u2-ew-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A witness identifies a suspect after seeing a photo lineup.",
          parts: [
            { label: "a", prompt: "Explain two risks to accuracy.", marks: 4 },
            { label: "b", prompt: "Suggest two improvements.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lineup accuracy",
                statement: "Memory + procedure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Misidentification — similar-looking suspects confuse.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Misinformation — feedback can alter memory post-identification.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Double-blind procedure — administrator doesn't know suspect.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Sequential lineup — one photo at a time, not simultaneous.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) misidentification+feedback (b) double-blind+sequential",
            commonErrors: ["Perfect ID.", "No improvement."],
          },
        },
      ],
    },
  ],
};
