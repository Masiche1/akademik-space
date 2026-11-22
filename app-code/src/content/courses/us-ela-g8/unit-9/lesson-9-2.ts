import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const COMPREHENSION: TextExtract = {
  title: "Exam Passage: Reading Comprehension",
  author: "Written for Akademik Space",
  text: "Read the following passage carefully before answering questions.\n\nWhen Amara transferred to Westfield Middle School in September, she knew she would be different. At her old school, she'd been the girl who asked questions, the one who raised her hand even when she wasn't sure she was right. Here, she kept her head down. The hallways were louder, the cliques tighter, and the teachers seemed too busy to notice the new girl in the back row.\n\nThen came the poetry slam. Mr. Chen announced it at the end of October — a chance for students to perform original work. Amara almost didn't sign up. But her friend Destiny dragged her to the sign-up sheet, and before she knew it, her name was on the list.\n\nOn the night of the slam, Amara stood frozen behind the microphone. Her hands wouldn't stop shaking. Then she began — the poem she'd written about leaving home, about finding her voice in a new place. The words came out shaky at first, then steadier. By the end, the room was silent, then loud with applause.\n\nAfterward, Destiny grabbed her arm. 'You should do that more often,' she said. Amara looked at the crowd — at the faces that had listened, really listened — and smiled. Maybe this was what it felt like to find your people.",
};

const QUESTION: TextExtract = {
  title: "Sample Exam Question",
  author: "Written for Akademik Space",
  text: "Question: How does the author's use of pacing and sensory detail contribute to the meaning of the poem slam scene?\n\nWrite a 2-3 paragraph response using evidence from the text.",
};

export const lesson92: Lesson = {
  id: "ela8-u9-lesson-9-2",
  code: "9-2",
  title: "Reading Comprehension and Constructed Response",
  goal: "I CAN answer evidence-based questions about text, citing specific details and explaining reasoning.",
  standards: ["RL.8.1", "RL.8.1a", "RL.8.1b", "RL.8.1c", "RL.8.1d", "RL.8.2"],
  vocabulary: [
    {
      term: "Constructed response",
      definition: "Open-ended answer requiring explanation and evidence.",
    },
    {
      term: "Textual evidence",
      definition: "Specific details from the passage supporting your answer.",
    },
    {
      term: "Inference",
      definition: "Drawing conclusions beyond what's explicitly stated.",
    },
    {
      term: "Pacing",
      definition: "Speed and rhythm of narrative — how time is handled.",
    },
    {
      term: "Sensory detail",
      definition: "Description appealing to sight, sound, touch, taste, smell.",
    },
    {
      term: "Elaboration",
      definition: "Explaining how evidence supports your claim.",
    },
  ],
  concepts: [
    {
      id: "ela8-u9-comprehension",
      title: "Evidence-based comprehension",
      skill:
        "Answer questions by citing specific text evidence and explaining reasoning.",
      lesson: {
        sections: [
          {
            heading: "Citing evidence effectively",
            body: "Strong answers quote or paraphrase specific text: 'Amara's hands wouldn't stop shaking' shows fear; 'the words came out shaky at first, then steadier' shows growth. Don't just say 'she was nervous' — cite the detail that proves it. Evidence should be: specific (exact quote or clear paraphrase), relevant (directly supports claim), explained (you interpret what it means).",
          },
          {
            heading: "Inference vs explicit",
            body: "**Explicit** = directly stated: 'she knew she would be different.' **Inference** = implied: her silence suggests loneliness even though not stated. Questions may ask either — 'what does the text say' (explicit) vs 'what can you infer' (read between lines). For inference, cite evidence + explain reasoning: 'Amara keeps her head down (evidence), suggesting she's withdrawn (inference) because she feels out of place (reasoning).",
          },
        ],
        keyFormulas: [
          {
            name: "Evidence = quote + explanation",
            statement: "Cite specific detail, then explain what it means.",
          },
          {
            name: "Explicit vs inference",
            statement: "Stated vs implied — know which is asked.",
          },
          {
            name: "Inference formula",
            statement: "Evidence + reasoning = conclusion.",
          },
        ],
        workedExample: {
          problem:
            "How does 'her hands wouldn't stop shaking' support the idea that Amara is nervous?",
          solution:
            "The detail shows physical manifestation of fear — hands shaking is involuntary response to nervousness. Evidence proves the inference that she's anxious about performing.",
        },
      },
      questions: [
        {
          id: "ela8-u9-comprehension-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: COMPREHENSION,
          stem: "What does 'her hands wouldn't stop shaking' reveal about Amara?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She was nervous" },
              { id: "b", text: "She was cold" },
              { id: "c", text: "She was angry" },
              { id: "d", text: "She was excited" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement: "Physical detail reveals emotion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shaking hands = physical sign of nervousness before performance.",
                evidence: "hands wouldn't stop shaking",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. She was nervous.",
            commonErrors: [
              "Choosing (a) — shaking can be excitement but context (frozen, first performance) suggests fear.",
            ],
          },
        },
        {
          id: "ela8-u9-comprehension-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: COMPREHENSION,
          stem: "Explain how the author's use of pacing contributes to the poem slam scene's meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pacing analysis",
                statement: "How timing affects meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Slow pacing before performance: 'froze behind the microphone' — builds tension.",
                evidence: "froze behind the microphone",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Accelerating pacing during poem: 'words came out shaky at first, then steadier' — shows growth.",
                evidence: "shaky at first, then steadier",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fast pacing after: 'room was silent, then loud with applause' — quick shift shows impact.",
                evidence: "silent, then loud with applause",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Slow pacing builds tension ('froze'), accelerating pace shows growth ('shaky then steadier'), quick shift to applause shows impact.",
            commonErrors: ["Describing pacing without connecting to meaning."],
          },
        },
        {
          id: "ela8-u9-comprehension-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: QUESTION,
          stem: "Write a 2-3 paragraph response analyzing how pacing and sensory detail contribute to the poem slam scene's meaning. Use evidence from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Constructed response",
                statement: "Evidence-based analysis.",
              },
              {
                kind: "skill",
                name: "Technique analysis",
                statement: "How craft creates meaning.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Pacing analysis: slow before ('froze'), building tension; accelerating during poem shows growth.",
                evidence:
                  "froze behind the microphone... shaky at first, then steadier",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Sensory detail: 'hands wouldn't stop shaking' (tactile), 'room was silent, then loud' (auditory) — makes experience visceral.",
                evidence: "hands wouldn't stop shaking... silent, then loud",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Meaning connection: techniques make reader feel Amara's fear and triumph — not just told, experienced.",
                evidence: "let readers experience",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              'Example: \'The author uses slow pacing before the performance — Amara "froze behind the microphone" — building tension. During the poem, pacing accelerates as "the words came out shaky at first, then steadier," showing her growth. Sensory details like "hands wouldn\'t stop shaking" and "room was silent, then loud with applause" make the experience visceral. These techniques transform the scene from event to experience — readers feel Amara\'s fear and triumph rather than just learning about them.\'',
            commonErrors: [
              "Analyzing techniques without connecting to meaning.",
            ],
          },
        },
        {
          id: "ela8-u9-comprehension-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: COMPREHENSION,
          parts: [
            {
              label: "a",
              prompt:
                "What is the difference between explicit and inferred information?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give one example of each from the passage.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Explicit vs inference",
                statement: "Stated vs implied.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Explicit = directly stated; inference = implied requiring reasoning.",
                evidence: "explicit vs inferred",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Explicit: 'she knew she would be different.' Inference: silence suggests loneliness (implied).",
                evidence: "knew she would be different",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Explicit = stated; inference = implied. (b) Explicit: 'she knew she would be different.' Inference: her silence suggests loneliness.",
            commonErrors: ["Confusing stated facts with inferences."],
          },
        },
      ],
    },
    {
      id: "ela8-u9-response",
      title: "Writing constructed responses",
      skill:
        "Structure answers with claim, evidence, and explanation for maximum marks.",
      lesson: {
        sections: [
          {
            heading: "Response structure",
            body: "Strong constructed responses follow: **claim** (answer the question directly), **evidence** (cite specific text), **explanation** (connect evidence to claim), **significance** (why it matters). 'The author uses pacing to build tension (claim). Amara 'froze behind the microphone' (evidence). This slow moment makes readers feel her fear (explanation). The tension makes her eventual triumph more powerful (significance).'",
          },
          {
            heading: "Common pitfalls",
            body: "Avoid: plot summary without analysis ('she performed the poem'), vague claims ('the author uses good techniques'), evidence without explanation ('she was nervous because her hands shook' — but what does that SHOW?). Every claim needs evidence; every evidence needs explanation. The 'so what?' test: does your answer explain WHY the technique matters, not just identify it?",
          },
        ],
        keyFormulas: [
          {
            name: "Claim + evidence + explanation",
            statement: "Structure for maximum marks.",
          },
          { name: "So what test", statement: "Explain why technique matters." },
          { name: "Avoid summary", statement: "Analysis, not retelling." },
        ],
        workedExample: {
          problem: "Why is 'Amara was nervous' a weak answer?",
          solution:
            "It's just observation — doesn't analyze HOW author creates nervousness or WHY it matters. Strong: 'The author builds tension through slow pacing and sensory detail — 'froze behind the microphone,' 'hands wouldn't stop shaking' — making readers feel her fear before her triumph.'",
        },
      },
      questions: [
        {
          id: "ela8-u9-response-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: QUESTION,
          stem: "What should a strong constructed response include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summary of the passage" },
              { id: "b", text: "Just your opinion" },
              { id: "c", text: "Claim + evidence + explanation" },
              { id: "d", text: "As many quotes as possible" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Constructed response",
                statement: "Evidence-based analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strong responses need claim, evidence, explanation — not just opinion or summary.",
                evidence: "constructed response",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Claim + evidence + explanation.",
            commonErrors: ["Thinking more quotes = better — need explanation."],
          },
        },
        {
          id: "ela8-u9-response-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: QUESTION,
          stem: "Rewrite 'Amara was nervous' as a stronger analytical claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analytical upgrade",
                statement: "From observation to analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weak: 'Amara was nervous' — states fact, no analysis.",
                evidence: "Amara was nervous",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Stronger: 'The author builds tension through slow pacing and sensory detail, making readers feel Amara's fear.'",
                evidence: "nervous",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Now explains HOW (techniques) and WHY (reader experience).",
                evidence: "make readers feel",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'The author builds tension through slow pacing and sensory detail — 'froze,' 'hands wouldn't stop shaking' — making readers feel Amara's fear before her triumph.'",
            commonErrors: [
              "Adding adjectives without analysis — 'very nervous' still weak.",
            ],
          },
        },
        {
          id: "ela8-u9-response-q3",
          difficulty: "challenge",
          totalMarks: 9,
          extract: QUESTION,
          stem: "Write a model constructed response analyzing how sensory details contribute to the poem slam scene's emotional impact.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Model response",
                statement: "Demonstrate full structure.",
              },
              {
                kind: "skill",
                name: "Sensory analysis",
                statement: "How details create feeling.",
              },
            ],
            levels: [
            { level: "Level 4", marks: "8-9", descriptor: "Thorough, precise response that is well supported by carefully chosen textual evidence and explains clearly how the evidence supports the point." },
            { level: "Level 3", marks: "5-7", descriptor: "Clear, adequate response with relevant evidence and some explanation of how it supports the point." },
            { level: "Level 2", marks: "3-4", descriptor: "Partial, general response with some evidence but little explanation." },
            { level: "Level 1", marks: "1-2", descriptor: "Minimal response with little or no evidence from the text." },
          ],
            steps: [
              {
                reasoning:
                  "Claim: sensory details make the scene visceral, not just described.",
                evidence: "sensory details",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence: 'hands wouldn't stop shaking' (tactile), 'room was silent, then loud' (auditory), 'froze' (physical).",
                evidence: "hands wouldn't stop shaking... silent, then loud",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Explanation: these details appeal to touch/sound — readers physically feel fear and triumph.",
                evidence: "visceral",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Significance: emotional impact makes Amara's growth meaningful — readers experience transformation.",
                evidence: "emotional impact",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The author uses sensory details to make the scene visceral rather than merely described. \"Hands wouldn't stop shaking\" appeals to touch, conveying fear physically. \"Room was silent, then loud with applause\" appeals to sound, marking the shift from tension to triumph. These details don't just tell us Amara was nervous — they make readers feel it. The emotional impact transforms her performance from event to experience, making her growth meaningful.'",
            commonErrors: [
              "Listing sensory details without explaining emotional effect.",
            ],
          },
        },
        {
          id: "ela8-u9-response-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: QUESTION,
          parts: [
            { label: "a", prompt: "What is the 'so what' test?", marks: 2 },
            {
              label: "b",
              prompt: "Apply it to 'the author uses pacing.'",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analytical depth",
                statement: "Explain significance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Does your answer explain WHY the technique matters, not just identify it?",
                evidence: "so what test",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Weak: 'author uses pacing.' Strong: 'author uses slow pacing to build tension before Amara's performance, making her triumph more powerful.'",
                evidence: "author uses pacing",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Explain why technique matters. (b) 'Author uses slow pacing to build tension, making Amara's triumph more powerful.'",
            commonErrors: ["Identifying technique without significance."],
          },
        },
      ],
    },
  ],
};
