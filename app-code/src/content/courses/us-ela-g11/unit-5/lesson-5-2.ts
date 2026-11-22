import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const SYNTHESIS: TextExtract = {
  title: "Informational Text: The Senate's Role in Checks and Balances",
  author: "U.S. Senate Educational Office",
  text: "The Senate serves as a check on executive power through its constitutional duties. The president nominates federal judges, ambassadors, and cabinet officials, but the Senate must confirm or reject each nominee by majority vote. This process ensures that presidential appointments reflect not just the executive's preferences but also the legislative branch's judgment of qualifications and fitness.\n\nThe Senate also ratifies treaties negotiated by the president, requiring a two-thirds supermajority. This high threshold reflects the framers' intent that international agreements carry broad consensus, not merely the president's signature. When the Senate rejects or amends a treaty, it signals that executive diplomacy must account for legislative concerns.\n\nPerhaps most dramatically, the Senate conducts impeachment trials. When the House impeaches a president or other official, the Senate serves as the trial court, with the Chief Justice presiding in presidential cases. Conviction requires a two-thirds majority. This power, rarely used, stands as the ultimate check on executive misconduct — a constitutional safeguard designed to ensure that no official is above the law.",
};

const BIAS: TextExtract = {
  title: "Informational Text: Evaluating Political Coverage",
  author: "Written for Akademik Space",
  text: "Political coverage varies widely in framing and emphasis. Consider two headlines reporting the same event: 'Senate Blocks Nomination in Historic Showdown' versus 'Senate Exercises Constitutional Duty on Nominee.' Both describe the same action, but the first emphasizes conflict and drama while the second emphasizes institutional function.\n\nFraming choices appear throughout news coverage: word selection ('blocked' vs 'rejected' vs 'declined'), source selection (which officials quoted), emphasis (how much space given to each side), and context (what background provided or omitted). A reporter who quotes only the president's press secretary presents a different picture than one who interviews opposition senators, affected agencies, and independent experts.\n\nMedia literacy requires readers to compare multiple sources, identify whose perspectives are amplified or marginalized, and distinguish factual reporting from editorial interpretation. The most reliable coverage typically provides attributed quotations, acknowledges uncertainty, and presents competing viewpoints fairly — though 'fair' does not mean 'equal'; evidence quality matters.",
};

export const lesson52: Lesson = {
  id: "ela11-u5-lesson-5-2",
  code: "5-2",
  title: "Informational Text: Structure, Synthesis, and Media Literacy",
  goal: "I CAN analyze informational text structure, synthesize multiple sources, and evaluate media framing and bias.",
  standards: [
    "RI.11-12.2",
    "RI.11-12.5",
    "RI.11-12.6",
    "RI.11-12.7",
    "RI.11-12.9",
  ],
  vocabulary: [
    {
      term: "Checks and balances",
      definition: "System preventing any branch dominating.",
    },
    { term: "Supermajority", definition: "Two-thirds vote requirement." },
    {
      term: "Framing",
      definition: "How information is presented affects perception.",
    },
    { term: "Attribution", definition: "Crediting information sources." },
    {
      term: "Synthesis",
      definition: "Combining multiple sources into coherent understanding.",
    },
    {
      term: "Editorial interpretation",
      definition: "Opinion vs factual reporting.",
    },
  ],
  concepts: [
    {
      id: "ela11-u5-structure",
      title: "Informational text structure",
      skill:
        "Identify how structure organizes information and supports comprehension.",
      lesson: {
        sections: [
          {
            heading: "Structure types",
            body: "Informational texts use structures: **chronological** (events in order), **cause/effect** (reasons and consequences), **compare/contrast** (similarities and differences), **problem/solution** (challenge and resolution), **description** (features and characteristics). The Senate text uses **enumeration by function** — appointments, treaties, impeachment — organizing by constitutional duties. The bias text uses **compare/contrast** — two headlines, different framings — to illustrate media literacy concepts.",
          },
          {
            heading: "Structure signals purpose",
            body: "Structure reveals author's purpose: chronological suggests narrative/history, cause/effect suggests explanation, compare/contrast suggests analysis, problem/solution suggests advocacy. Recognizing structure helps predict content and evaluate effectiveness. The Senate text's functional organization emphasizes institutional roles; the bias text's comparative structure emphasizes how presentation shapes perception.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure types",
            statement:
              "Chronological, cause/effect, compare/contrast, problem/solution.",
          },
          {
            name: "Structure = purpose",
            statement: "Organization reveals intent.",
          },
          {
            name: "Signal words",
            statement: "'First,' 'because,' 'however,' 'therefore.'",
          },
        ],
        workedExample: {
          problem: "What structure does the Senate text use?",
          solution:
            "Enumeration by function — appointments, treaties, impeachment organized by constitutional duties.",
        },
      },
      questions: [
        {
          id: "ela11-u5-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SYNTHESIS,
          stem: "What structure does the Senate text use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Compare/contrast" },
              { id: "b", text: "Problem/solution" },
              { id: "c", text: "Chronological" },
              { id: "d", text: "Enumeration by function" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Text structure",
                statement: "Organization pattern.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text organizes by constitutional functions — appointments, treaties, impeachment.",
                evidence: "enumeration",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Enumeration by function.",
            commonErrors: ["Missing organizational pattern."],
          },
        },
        {
          id: "ela11-u5-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SYNTHESIS,
          stem: "How does the Senate text's structure support its purpose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure-purpose link",
                statement: "How organization serves intent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Structure: three constitutional duties — appointments, treaties, impeachment.",
                evidence: "duties",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Purpose: explain Senate's check on executive — each duty demonstrates check.",
                evidence: "purpose",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: functional organization emphasizes institutional role — not narrative.",
                evidence: "effect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Structure (three duties) supports purpose (explain check) — functional organization emphasizes institutional role.",
            commonErrors: ["Not linking structure to purpose."],
          },
        },
        {
          id: "ela11-u5-structure-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SYNTHESIS,
          stem: "Analyze how structure choices affect reader comprehension of the Senate text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure analysis",
                statement: "How organization affects meaning.",
              },
              {
                kind: "skill",
                name: "Reader response",
                statement: "How structure guides comprehension.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Enumeration by function: clear organization — reader sees three distinct checks.",
                evidence: "enumeration",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Parallel structure: each duty explained similarly — easy to compare importance.",
                evidence: "parallel",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conclusion builds: appointments → treaties → impeachment — escalating significance.",
                evidence: "escalating",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Structure enhances comprehension: enumeration by function provides clear organization, parallel explanations enable comparison, escalating order (appointments → treaties → impeachment) builds significance. Reader understands Senate's escalating checks on executive.",
            commonErrors: ["Describing structure without analyzing effect."],
          },
        },
        {
          id: "ela11-u5-structure-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SYNTHESIS,
          parts: [
            {
              label: "a",
              prompt: "What are 'signal words' in informational text?",
              marks: 2,
            },
            { label: "b", prompt: "Give examples.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Signal words",
                statement: "Structural indicators.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Words indicating structure or relationship — 'first,' 'because,' 'however.'",
                evidence: "signal",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Examples: 'first,' 'because,' 'however,' 'therefore,' 'in addition.'",
                evidence: "examples",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Structural indicators. (b) 'First,' 'because,' 'however,' 'therefore.'",
            commonErrors: ["Confusing with vocabulary."],
          },
        },
      ],
    },
    {
      id: "ela11-u5-synthesis",
      title: "Synthesizing Multiple Sources",
      skill:
        "Combine information from multiple sources into coherent understanding.",
      lesson: {
        sections: [
          {
            heading: "Synthesis process",
            body: "Synthesis requires: **read all sources** (understand each), **identify common themes** (what connects?), **note differences** (where disagree?), **integrate** (combine into coherent view), **attribute** (cite sources). Not just summarizing each source separately — creating new understanding from combined information.",
          },
          {
            heading: "Synthesis vs summary",
            body: "Summary = condensed version of one source. Synthesis = integrated understanding from multiple sources. Example: Source A says Senate confirms nominees; Source B says Senate rejects 20% of nominees; Source C says confirmation takes average 60 days. Synthesis: 'The Senate's confirmation role involves both rejection and delay — exercising substantive check, not rubber stamp.' New insight from combining sources.",
          },
        ],
        keyFormulas: [
          {
            name: "Synthesis = integration",
            statement: "Combine, don't just summarize.",
          },
          {
            name: "Steps",
            statement: "Read → identify → note → integrate → attribute.",
          },
          {
            name: "New insight",
            statement: "Understanding beyond individual sources.",
          },
        ],
        workedExample: {
          problem: "How would you synthesize sources on Senate confirmation?",
          solution:
            "Combine: A (confirms nominees) + B (rejects 20%) + C (60-day delay) → 'Substantive check, not rubber stamp.'",
        },
      },
      questions: [
        {
          id: "ela11-u5-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SYNTHESIS,
          stem: "What's the difference between summary and synthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summary is better" },
              { id: "b", text: "Synthesis is shorter" },
              { id: "c", text: "Summary = one source; synthesis = multiple" },
              { id: "d", text: "No difference" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Summary vs synthesis",
                statement: "One vs multiple.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Summary condenses one source; synthesis integrates multiple.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Summary = one source; synthesis = multiple.",
            commonErrors: ["Confusing the terms."],
          },
        },
        {
          id: "ela11-u5-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SYNTHESIS,
          stem: "Describe the synthesis process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis process",
                statement: "Integration steps.",
              },
            ],
            steps: [
              {
                reasoning: "Read all sources — understand each fully.",
                evidence: "read",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Identify common themes — what connects sources?",
                evidence: "themes",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Note differences — where do sources disagree?",
                evidence: "differences",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Read → identify themes → note differences → integrate → attribute.",
            commonErrors: ["Summarizing instead of synthesizing."],
          },
        },
        {
          id: "ela11-u5-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SYNTHESIS,
          stem: "Analyze why synthesis produces deeper understanding than summary alone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis analysis",
                statement: "Why it matters.",
              },
              {
                kind: "skill",
                name: "Knowledge integration",
                statement: "How combining works.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Summary provides partial view — one source's perspective.",
                evidence: "partial",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesis combines perspectives — reveals patterns, contradictions, consensus.",
                evidence: "patterns",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "New understanding: synthesis creates insights neither source alone provides.",
                evidence: "insight",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Synthesis produces deeper understanding: summary gives partial view, synthesis combines perspectives revealing patterns/contradictions/consensus, creates insights beyond individual sources.",
            commonErrors: ["Thinking summary is enough."],
          },
        },
        {
          id: "ela11-u5-synthesis-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SYNTHESIS,
          parts: [
            {
              label: "a",
              prompt: "What is 'triangulation' in research?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does it relate to synthesis?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triangulation",
                statement: "Cross-verification.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Using multiple sources/methods to verify findings — cross-checking.",
                evidence: "triangulation",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Synthesis integrates triangulated sources — stronger conclusions.",
                evidence: "relation",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Cross-verification using multiple sources. (b) Synthesis integrates verified sources — stronger.",
            commonErrors: ["Confusing with synthesis."],
          },
        },
      ],
    },
    {
      id: "ela11-u5-framing",
      title: "Media Framing and Bias",
      skill:
        "Analyze how framing choices shape perception of events and issues.",
      lesson: {
        sections: [
          {
            heading: "Framing techniques",
            body: "Framing shapes perception through: **word choice** ('blocked' vs 'rejected' vs 'declined' — same action, different connotation), **source selection** (which voices quoted?), **emphasis** (what gets highlighted?), **context** (what background provided/omitted?). 'Historic Showdown' frames as drama; 'Constitutional Duty' frames as institutional function. Same event, different perception.",
          },
          {
            heading: "Detecting bias",
            body: "Bias indicators: **loaded language** ('radical,' 'extremist'), **one-sided sourcing** (only one perspective quoted), **false balance** (equal weight to unequal evidence), **omission** (important context missing), **framing** (presentation shapes interpretation). Media literacy: compare sources, identify amplified/marginalized voices, distinguish fact from interpretation.",
          },
        ],
        keyFormulas: [
          {
            name: "Framing = perception",
            statement: "Presentation shapes interpretation.",
          },
          {
            name: "Five techniques",
            statement: "Word choice, sources, emphasis, context, framing.",
          },
          {
            name: "Bias indicators",
            statement: "Loaded language, one-sided, false balance, omission.",
          },
        ],
        workedExample: {
          problem:
            "How does 'Historic Showdown' vs 'Constitutional Duty' frame differently?",
          solution:
            "Showdown = drama/conflict; Duty = institutional function. Same event, different perception.",
        },
      },
      questions: [
        {
          id: "ela11-u5-framing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: BIAS,
          stem: "What's 'framing' in media?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Advertising" },
              { id: "b", text: "Opinion only" },
              { id: "c", text: "Fact reporting" },
              { id: "d", text: "How presentation shapes perception" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Framing",
                statement: "Presentation shapes perception.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Framing = how information presented affects interpretation.",
                evidence: "framing",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. How presentation shapes perception.",
            commonErrors: ["Thinking framing = fact."],
          },
        },
        {
          id: "ela11-u5-framing-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: BIAS,
          stem: "Identify two framing techniques in the bias text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Framing analysis",
                statement: "Presentation techniques.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Word choice: 'blocked' vs 'rejected' vs 'declined' — different connotations.",
                evidence: "word choice",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Emphasis: 'Historic Showdown' emphasizes drama; 'Constitutional Duty' emphasizes function.",
                evidence: "emphasis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Source selection: which officials quoted shapes perspective.",
                evidence: "sources",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Word choice ('blocked' vs 'rejected'), emphasis ('Showdown' vs 'Duty'), source selection.",
            commonErrors: ["Missing framing techniques."],
          },
        },
        {
          id: "ela11-u5-framing-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: BIAS,
          stem: "Analyze how the two headlines create different perceptions of the same event.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Framing analysis",
                statement: "How presentation shapes meaning.",
              },
              {
                kind: "skill",
                name: "Perception study",
                statement: "Different interpretations.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "'Historic Showdown': drama, conflict, spectacle — frames as entertainment/news.",
                evidence: "showdown",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Constitutional Duty': institution, function, responsibility — frames as civic process.",
                evidence: "duty",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Same event, different perception — framing shapes what readers think happened.",
                evidence: "perception",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Headlines create different perceptions: 'Showdown' frames as drama/conflict (entertainment), 'Duty' frames as institutional function (civic process). Same event — framing determines whether readers see spectacle or governance.",
            commonErrors: ["Thinking headlines are neutral."],
          },
        },
        {
          id: "ela11-u5-framing-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: BIAS,
          parts: [
            {
              label: "a",
              prompt: "What's 'false balance' in media?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "False balance",
                statement: "Equal weight to unequal evidence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Giving equal weight to viewpoints with unequal evidence — 'both sides' fallacy.",
                evidence: "false balance",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: climate change — giving equal time to consensus and fringe denial.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Equal weight to unequal evidence. (b) Climate consensus vs denial given equal time.",
            commonErrors: ["Thinking balance is always good."],
          },
        },
      ],
    },
    {
      id: "ela11-u5-integrated-r2",
      title: "Integrated Informational Text Practice",
      skill:
        "Integrate structure analysis, synthesis, and media literacy in comprehensive informational text study.",
      lesson: {
        sections: [
          {
            heading: "Integrated skills",
            body: "Informational text mastery requires: **structure** (how organized?), **synthesis** (combine sources), **media literacy** (evaluate framing/bias). The Senate text demonstrates structure; the bias text demonstrates media literacy; synthesis combines multiple sources. Exam questions often require all three: 'Analyze how structure and framing affect understanding of political coverage.'",
          },
          {
            heading: "Exam application",
            body: "Comprehensive analysis: identify structure → evaluate how it serves purpose → synthesize with other sources → assess framing/bias. Each skill alone is partial; together reveal how informational texts shape understanding.",
          },
        ],
        keyFormulas: [
          {
            name: "Three skills",
            statement: "Structure + synthesis + media literacy.",
          },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
          { name: "Exam synthesis", statement: "Combine analysis types." },
        ],
        workedExample: {
          problem: "How would you comprehensively analyze political coverage?",
          solution:
            "Structure (how organized) → synthesis (combine sources) → framing/bias (how presented) → conclusion (how shapes understanding).",
        },
      },
      questions: [
        {
          id: "ela11-u5-integrated-q1-r2",
          difficulty: "foundation",
          totalMarks: 1,
          extract: BIAS,
          stem: "What three skills are needed for comprehensive informational text analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only vocabulary" },
              { id: "b", text: "Only reading" },
              { id: "c", text: "Structure + synthesis + media literacy" },
              { id: "d", text: "Only structure" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comprehensive analysis",
                statement: "Three skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Structure + synthesis + media literacy = comprehensive.",
                evidence: "three skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Structure + synthesis + media literacy.",
            commonErrors: ["Missing skills."],
          },
        },
        {
          id: "ela11-u5-integrated-q2-r2",
          difficulty: "core",
          totalMarks: 3,
          extract: BIAS,
          stem: "Apply two informational text skills to the bias text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Framing: 'Historic Showdown' vs 'Constitutional Duty' — different presentation.",
                evidence: "framing",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure: compare/contrast — two headlines analyzed together.",
                evidence: "structure",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Media literacy: word choice shapes perception — 'blocked' vs 'rejected.'",
                evidence: "literacy",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Framing (different presentation), structure (compare/contrast), media literacy (word choice).",
            commonErrors: ["Only applying one skill."],
          },
        },
        {
          id: "ela11-u5-integrated-q3-r2",
          difficulty: "challenge",
          totalMarks: 8,
          extract: BIAS,
          stem: "Write an analysis paragraph on how framing and structure work together in the bias text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
              {
                kind: "skill",
                name: "Comprehensive interpretation",
                statement: "How choices serve purpose.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Structure: compare/contrast — two headlines presented together for analysis.",
                evidence: "structure",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Framing: 'Showdown' vs 'Duty' — word choice shapes perception.",
                evidence: "framing",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Integration: structure enables comparison → reveals framing choices → demonstrates media literacy need.",
                evidence: "integration",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The text uses compare/contrast structure to present two headlines together, enabling analysis of framing choices. Word selection (Showdown vs Duty) shapes perception — structure facilitates discovering how presentation affects interpretation.'",
            commonErrors: ["Analyzing structure or framing separately."],
          },
        },
        {
          id: "ela11-u5-integrated-q4-r2",
          difficulty: "core",
          totalMarks: 4,
          extract: BIAS,
          parts: [
            {
              label: "a",
              prompt: "Why is integrated analysis stronger than single-skill?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integration value",
                statement: "Why it matters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Each skill alone is partial; together reveal how choices serve purpose.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: structure+framing shows how presentation works — single skill misses this.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Each skill partial; together reveal purpose. (b) Structure+framing shows how presentation works.",
            commonErrors: ["Thinking one skill is enough."],
          },
        },
      ],
    },
  ],
};
