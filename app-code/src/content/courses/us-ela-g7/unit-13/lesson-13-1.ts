import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const READINGPROMPT: TextExtract = {
  title: "Writing About Reading Prompt",
  author: "Written for Akademik Space",
  text: "Read the excerpt from 'The Lantern Keeper.' Write a response that analyzes how the author develops the theme of quiet dedication. Cite specific evidence from the text to support your analysis.",
};

const ANALYSISDRAFT: TextExtract = {
  title: "Student Analysis Draft",
  author: "Written for Akademik Space",
  text: "The author shows dedication through Elias. He lights the lighthouse every night. This shows he is dedicated. The story is about a lighthouse keeper who helps people.",
};

export const lesson131: Lesson = {
  id: "ela7-u13-lesson-13-1",
  code: "13-1",
  title: "Writing About Reading: Analysis and Response",
  goal: "I CAN write analytical responses to texts that cite evidence and explain how craft choices create meaning.",
  standards: ["W.7.7", "W.7.7a", "W.7.7b", "W.7.9d"],
  vocabulary: [
    {
      term: "Analysis",
      definition: "Breaking down a text to examine how parts work together.",
    },
    {
      term: "Response",
      definition: "A written reaction or interpretation of a text.",
    },
    {
      term: "Evidence",
      definition:
        "Specific details from the text that support your interpretation.",
    },
    {
      term: "Interpretation",
      definition: "Your understanding of what the text means.",
    },
    {
      term: "Commentary",
      definition: "Explanation of how evidence supports your interpretation.",
    },
    {
      term: "Claim",
      definition: "Your argument about the text's meaning or craft.",
    },
  ],
  concepts: [
    {
      id: "ela7-u13-analysis",
      title: "Writing analytical responses",
      skill:
        "Structure analytical writing with claim, evidence, and commentary.",
      lesson: {
        sections: [
          {
            heading: "Claim-evidence-commentary",
            body: "Strong analysis follows a pattern: **claim** (your interpretation), **evidence** (quote or paraphrase from text), **commentary** (explain how evidence proves your claim). 'Elias embodies quiet dedication' (claim) + 'Every evening for thirty years, Elias climbed the hill' (evidence) + 'This shows his commitment is habitual, not occasional' (commentary).",
          },
          {
            heading: "Avoiding summary",
            body: "Analysis isn't summary — don't just retell what happens. 'Elias lights the lighthouse every night' is summary. 'Elias's nightly ritual shows dedication because...' is analysis. Ask: what does this detail REVEAL? Why did the author include it? How does it develop theme or character?",
          },
        ],
        keyFormulas: [
          {
            name: "CEC structure",
            statement: "Claim + Evidence + Commentary.",
          },
          {
            name: "Analysis vs summary",
            statement: "Analysis explains meaning; summary retells events.",
          },
          {
            name: "Evidence integration",
            statement: "Quote/paraphrase + explain significance.",
          },
        ],
        workedExample: {
          problem:
            "Why is 'The author shows dedication through Elias' weak analysis?",
          solution:
            "It states a claim but provides no evidence or explanation. Strong version: 'Elias embodies quiet dedication — he climbs the hill every evening for thirty years without recognition, showing that true dedication doesn't require an audience.'",
        },
      },
      questions: [
        {
          id: "ela7-u13-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ANALYSISDRAFT,
          stem: "What is the main problem with the student's analysis draft?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It's summary, not analysis — no evidence or explanation",
              },
              { id: "b", text: "It's too long" },
              { id: "c", text: "It's about the wrong story" },
              { id: "d", text: "It uses wrong words" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Analysis vs summary",
                statement: "Analysis explains meaning; summary retells.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The draft retells plot ('lights the lighthouse') without explaining what it means or why it matters.",
                evidence: "He lights the lighthouse every night",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. It's summary — retells events without analysis or evidence.",
            commonErrors: [
              "Thinking it's 'wrong' — it's just not analytical enough.",
            ],
          },
        },
        {
          id: "ela7-u13-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ANALYSISDRAFT,
          stem: "Rewrite the first sentence of the draft as proper analysis with claim, evidence, and commentary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "CEC structure",
                statement: "Claim + Evidence + Commentary.",
              },
            ],
            steps: [
              {
                reasoning: "Claim: 'Elias embodies quiet dedication.'",
                evidence: "The author shows dedication through Elias",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence: 'Every evening for thirty years, Elias climbed the hill to light the lighthouse.'",
                evidence: "He lights the lighthouse every night",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Commentary: 'This shows his commitment is habitual and unrecognized — true dedication doesn't require an audience.'",
                evidence: "This shows he is dedicated",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Elias embodies quiet dedication — every evening for thirty years, he climbs the hill to light the lighthouse, showing that true dedication doesn't require recognition or an audience.'",
            commonErrors: [
              "Adding evidence without commentary — must explain what it proves.",
            ],
          },
        },
        {
          id: "ela7-u13-analysis-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: READINGPROMPT,
          stem: "Write an analytical paragraph analyzing how the author develops the theme of quiet dedication. Include claim, evidence, and commentary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analytical writing",
                statement: "Claim + evidence + commentary.",
              },
              {
                kind: "skill",
                name: "Theme analysis",
                statement: "Connect craft to thematic meaning.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Claim: 'The author develops the theme of quiet dedication through Elias's consistent actions.'",
                evidence: "analyzes how the author develops the theme",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence: 'Every evening for thirty years, Elias climbed the hill' — shows consistency.",
                evidence: "Cite specific evidence from the text",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Commentary: 'The thirty-year duration emphasizes that dedication is habitual, not occasional — it persists without recognition.'",
                evidence: "quiet dedication",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Additional evidence: 'Someone might need it' — shows motivation is service, not recognition.",
                evidence: "That's all the reason anyone needs",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The author develops the theme of quiet dedication through Elias's consistent actions. Every evening for thirty years, he climbs the hill to light the lighthouse — the duration emphasizes that dedication is habitual, not occasional. His motivation, 'Someone might need it,' shows that true dedication persists without recognition or audience.'",
            commonErrors: [
              "Retelling plot instead of analyzing how theme develops.",
            ],
          },
        },
        {
          id: "ela7-u13-analysis-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ANALYSISDRAFT,
          parts: [
            {
              label: "a",
              prompt: "Identify what's missing from the draft's analysis.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Add a sentence with evidence and commentary.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence integration",
                statement: "Analysis needs proof and explanation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Missing: evidence from text and commentary explaining significance.",
                evidence: "The author shows dedication through Elias",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'For instance, Elias climbs the hill every evening for thirty years — this consistency shows dedication is habitual, not occasional.'",
                evidence: "He lights the lighthouse every night",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Evidence and commentary. (b) 'For instance, Elias climbs the hill every evening for thirty years — this consistency shows dedication is habitual, not occasional.'",
            commonErrors: [
              "Adding more summary — 'He lights it every night' is still summary without analysis.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u13-analysis2",
      title: "Citing textual evidence",
      skill:
        "Quote and paraphrase text accurately and integrate evidence smoothly.",
      lesson: {
        sections: [
          {
            heading: "Quoting vs paraphrasing",
            body: "**Quoting** uses exact words in quotation marks: 'Someone might need it.' **Paraphrasing** restates in your own words: 'Elias believes someone might need the light.' Quotes need quotation marks AND citation; paraphrases need citation but no quotes. Both must be accurate — don't change meaning when paraphrasing.",
          },
          {
            heading: "Integrating evidence",
            body: "Introduce evidence smoothly: 'As Elias says, \"Someone might need it\"' or 'Elias's words, \"Someone might need it,\" reveal...'. Then explain significance: 'This shows his motivation is service, not recognition.' Never drop quotes without context — always connect to your claim.",
          },
        ],
        keyFormulas: [
          {
            name: "Quote",
            statement: "Exact words + quotation marks + citation.",
          },
          {
            name: "Paraphrase",
            statement: "Own words + citation (no quotes needed).",
          },
          {
            name: "Integration",
            statement: "Introduce + quote/paraphrase + explain significance.",
          },
        ],
        workedExample: {
          problem:
            "Integrate this evidence: 'Every evening for thirty years, Elias climbed the hill.'",
          solution:
            "'The text states, \"Every evening for thirty years, Elias climbed the hill\" — this consistency emphasizes that his dedication is habitual, not occasional.' Quote + introduction + significance.",
        },
      },
      questions: [
        {
          id: "ela7-u13-analysis2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ANALYSISDRAFT,
          stem: "What is missing from 'He lights the lighthouse every night' to make it proper evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A different verb" },
              { id: "b", text: "A question mark" },
              { id: "c", text: "More words" },
              {
                id: "d",
                text: "Quotation marks or citation + explanation of significance",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence integration",
                statement: "Evidence needs context and significance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sentence states a fact but doesn't cite it or explain what it proves.",
                evidence: "He lights the lighthouse every night",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. Quotation marks/citation + explanation of significance.",
            commonErrors: [
              "Thinking the fact itself is enough — must explain what it means.",
            ],
          },
        },
        {
          id: "ela7-u13-analysis2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: READINGPROMPT,
          stem: "Rewrite this as a properly cited quote: 'Elias lights the lighthouse every night.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Quoting",
                statement: "Exact words + quotation marks + context.",
              },
            ],
            steps: [
              {
                reasoning: "Use exact words from text in quotation marks.",
                evidence:
                  "Every evening for thirty years, Elias climbed the hill",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Introduce with context: 'As the text states, \"Every evening for thirty years, Elias climbed the hill.\"'",
                evidence: "Elias lights the lighthouse every night",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add significance: 'This consistency emphasizes his dedication is habitual.'",
                evidence: "lights the lighthouse",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'As the text states, \"Every evening for thirty years, Elias climbed the hill\" — this consistency emphasizes that his dedication is habitual, not occasional.'",
            commonErrors: [
              "Quoting without introducing — 'As the text states' or similar needed.",
            ],
          },
        },
        {
          id: "ela7-u13-analysis2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: READINGPROMPT,
          stem: "Write a paragraph that paraphrases the text's description of Elias's motivation and explains what it reveals about his character.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paraphrasing",
                statement: "Restate in own words accurately.",
              },
              {
                kind: "skill",
                name: "Character analysis",
                statement: "Evidence reveals character traits.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Paraphrase: 'Elias believes someone might need the light — his motivation is potential service.'",
                evidence: "Someone might need it",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Character insight: 'This reveals his selflessness — he serves without expecting recognition.'",
                evidence: "That's all the reason anyone needs",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Connect to theme: 'His motivation embodies the theme of quiet dedication — doing good without an audience.'",
                evidence: "quiet dedication",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The paragraph should flow: paraphrase → character insight → thematic connection.",
                evidence: "he grabbed the spare lantern",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Elias believes someone might need the light — his motivation is potential service rather than recognition. This reveals his selflessness: he serves without expecting thanks or attention. His motivation embodies the theme of quiet dedication — doing good without an audience.'",
            commonErrors: [
              "Paraphrasing but changing meaning — must stay accurate to text.",
            ],
          },
        },
        {
          id: "ela7-u13-analysis2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ANALYSISDRAFT,
          parts: [
            {
              label: "a",
              prompt:
                "Convert this quote to a paraphrase: 'Someone might need it.'",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain when to use quote vs paraphrase.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Quote vs paraphrase",
                statement: "Choose appropriate evidence format.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'Elias believes someone might need the lighthouse light.'",
                evidence: "Someone might need it",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Use quotes for powerful exact language; paraphrase for summarizing or when exact words aren't essential.",
                evidence: "Cite specific evidence",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Elias believes someone might need the lighthouse light.' (b) Quotes for powerful exact language; paraphrase for summary or when exact words aren't essential.",
            commonErrors: [
              "Paraphrasing but keeping some exact words without quotes — plagiarism risk.",
            ],
          },
        },
      ],
    },
  ],
};
