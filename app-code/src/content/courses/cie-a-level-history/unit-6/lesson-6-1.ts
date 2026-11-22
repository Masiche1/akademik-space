import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ciealehist-u6-lesson-6-1",
  code: "6-1",
  title: "Source Analysis and Historical Interpretation",
  goal: "I CAN evaluate sources critically and analyse historical interpretations.",
  standards: ["Cambridge A Level History 9489", "Unit 6: skills"],
  vocabulary: [
    {
      term: "Primary source",
      definition: "Contemporary evidence from the time.",
    },
    {
      term: "Secondary source",
      definition: "Later interpretation by historians.",
    },
    { term: "Provenance", definition: "Origin and purpose of source." },
    {
      term: "Corroboration",
      definition: "Checking sources against each other.",
    },
    {
      term: "Historiography",
      definition: "History of historical interpretations.",
    },
    {
      term: "Revisionism",
      definition: "Reinterpretation of established history.",
    },
  ],
  concepts: [
    {
      id: "ciealehist-u6l1-c1-sources",
      title: "Critical source analysis",
      skill: "Evaluate source reliability, utility and bias.",
      lesson: {
        sections: [
          {
            heading: "Source evaluation framework",
            body: "**Provenance**: who made it, when, why — purpose shapes content. **Content**: what it says, what's omitted. **Reliability**: can it be trusted? **Utility**: what can it tell us about the question? **Corroboration**: does other evidence agree? Always consider: audience, bias, context, omissions.",
          },
          {
            heading: "Types of sources",
            body: "**Official**: government documents, reports — authoritative but self-serving. **Personal**: diaries, letters, memoirs — intimate but biased. **Visual**: photographs, cartoons — powerful but staged/interpretive. **Statistical**: data — quantitative but collection methods vary. **Oral**: testimony — valuable but memory fades.",
          },
        ],
        keyFormulas: [
          { name: "Provenance", statement: "Origin + purpose" },
          { name: "Corroboration", statement: "Cross-checking" },
          { name: "Bias", statement: "Perspective shaping content" },
        ],
        workedExample: {
          problem:
            "A Stalin-era newspaper praises industrial output. How reliable?",
          solution:
            "Official propaganda source — shows what regime wanted people to believe, not reality; useful for understanding propaganda, unreliable for actual output figures — needs corroboration with other sources.",
        },
      },
      questions: [
        {
          id: "ciealehist-q-u6l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Provenance' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Content of source" },
              { id: "b", text: "Origin and purpose of a source" },
              { id: "c", text: "Date of source" },
              { id: "d", text: "Author's age" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Provenance",
                statement: "Origin+purpose.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Origin+purpose",
            commonErrors: ["Content."],
          },
        },
        {
          id: "ciealehist-q-u6l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'corroboration' in source analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Corroboration",
                statement: "Cross-check.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Checking sources against each other to verify accuracy — if multiple independent sources agree, more reliable; discrepancies reveal bias or error.",
            commonErrors: ["Single source."],
          },
        },
        {
          id: "ciealehist-q-u6l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'bias' affects source reliability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bias", statement: "Perspective." },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Types.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sources reflect creator's perspective — political, cultural, personal — affects selection and interpretation; e.g. government reports hide failures, diaries exaggerate personal role.",
            commonErrors: ["No bias."],
          },
        },
        {
          id: "ciealehist-q-u6l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate a government report as a historical source.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Official sources",
                statement: "Authority vs self-interest.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Weaknesses.", marks: 1, markCode: "M" },
              { reasoning: "Best use.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Authoritative data but self-serving — useful for official positions/policies, unreliable for failures/outcomes; best corroborated with independent sources.",
            commonErrors: ["Always reliable."],
          },
        },
        {
          id: "ciealehist-q-u6l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the strengths and limitations of oral history as a source.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Oral history",
                statement: "Memory + perspective.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Best use.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Captures voices absent from documents (women, minorities, ordinary people) but memory fades, retrospective bias, interviewer influence — best for lived experience, needs corroboration.",
            commonErrors: ["Perfect source."],
          },
        },
        {
          id: "ciealehist-q-u6l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'utility' in source evaluation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Utility", statement: "Relevance." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Assessment.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "How useful a source is for answering the specific question — a source may be reliable but irrelevant, or biased but revealing about perceptions.",
            commonErrors: ["Reliability confused."],
          },
        },
        {
          id: "ciealehist-q-u6l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'primary source' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Official history" },
              { id: "b", text: "Fiction" },
              { id: "c", text: "Contemporary evidence from the time" },
              { id: "d", text: "Later interpretation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary",
                statement: "Contemporary.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Contemporary",
            commonErrors: ["Secondary."],
          },
        },
        {
          id: "ciealehist-q-u6l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why 'photographs' can be misleading historical sources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Photo limits",
                statement: "Staged + selective.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. staged for propaganda effect and selective framing omits context — photos show what photographer wanted, not full reality.",
            commonErrors: ["Perfect record."],
          },
        },
        {
          id: "ciealehist-q-u6l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'diaries' be both valuable and problematic sources?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diaries",
                statement: "Intimate but biased.",
              },
            ],
            steps: [
              { reasoning: "Value.", marks: 1, markCode: "M" },
              { reasoning: "Problems.", marks: 1, markCode: "M" },
              { reasoning: "Best use.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Contemporaneous, personal insight into daily life/events — but private bias, exaggeration, self-justification; valuable for attitudes/perceptions, unreliable for facts.",
            commonErrors: ["Fully reliable."],
          },
        },
        {
          id: "ciealehist-q-u6l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the 'historian's craft' — how do historians construct knowledge?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Historiography",
                statement: "Interpretation.",
              },
            ],
            steps: [
              { reasoning: "Process.", marks: 1, markCode: "M" },
              { reasoning: "Debates.", marks: 1, markCode: "M" },
              { reasoning: "Objectivity.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Select, evaluate, corroborate sources → construct interpretations → debate among historians; 'objectivity' aspirational — all history is interpretation shaped by questions asked and perspectives.",
            commonErrors: ["Single truth."],
          },
        },
        {
          id: "ciealehist-q-u6l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Corroboration' means checking sources:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "For spelling mistakes" },
              { id: "b", text: "Against each other to verify accuracy" },
              { id: "c", text: "For publication dates" },
              { id: "d", text: "Against modern values" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Corroboration",
                statement: "Cross-checking.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Against each other",
            commonErrors: ["Copy editing."],
          },
        },
        {
          id: "ciealehist-q-u6l1c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'omission' and why does it matter in source analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Omission",
                statement: "What's left out.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "What a source deliberately or accidentally leaves out — omissions can reveal bias or limits of knowledge; e.g. official reports omit failures, memoirs omit embarrassments.",
            commonErrors: ["Content only."],
          },
        },
        {
          id: "ciealehist-q-u6l1c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'audience' affects the reliability of a source.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Audience",
                statement: "Intended readers shape content.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Assessment.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sources are shaped by who they are written for — propaganda for public consumption differs from confidential reports; e.g. speeches for rallies exaggerate, internal memos are candid — audience determines tone and omissions.",
            commonErrors: ["Audience irrelevant."],
          },
        },
        {
          id: "ciealehist-q-u6l1c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are 'statistical sources' both valuable and problematic?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Statistics",
                statement: "Quantitative but method-dependent.",
              },
            ],
            steps: [
              { reasoning: "Value.", marks: 1, markCode: "M" },
              { reasoning: "Problems.", marks: 1, markCode: "M" },
              { reasoning: "Best use.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Quantitative data enables comparison and trends — but collection methods vary, definitions change, data may be manipulated or incomplete; best used comparatively and corroborated.",
            commonErrors: ["Always objective."],
          },
        },
        {
          id: "ciealehist-q-u6l1c1-15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the usefulness of 'official documents' and 'personal letters' as historical sources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Source types",
                statement: "Official vs personal.",
              },
            ],
            steps: [
              { reasoning: "Official strengths.", marks: 1, markCode: "M" },
              { reasoning: "Official limits.", marks: 1, markCode: "M" },
              { reasoning: "Personal strengths.", marks: 1, markCode: "M" },
              { reasoning: "Weighing/conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Official documents: authoritative, detailed, but self-serving and selective. Personal letters: candid, reveal attitudes/daily life, but biased and narrow. Complementary — best used together for corroboration.",
            commonErrors: ["One type only."],
          },
        },
        {
          id: "ciealehist-q-u6l1c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why 'no source can be completely reliable' — evaluate this claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reliability limits",
                statement: "All sources shaped.",
              },
            ],
            steps: [
              { reasoning: "Why unreliable.", marks: 1, markCode: "M" },
              { reasoning: "Degrees of reliability.", marks: 1, markCode: "M" },
              { reasoning: "Corroboration role.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Every source has provenance, purpose, audience and omissions — none is a transparent window on truth; but reliability is a spectrum — corroboration, context and evaluation allow historians to use sources judiciously despite imperfections.",
            commonErrors: ["All sources equal."],
          },
        },
      ],
    },
    {
      id: "ciealehist-u6l1-c2-interpretation",
      title: "Historiography and interpretation",
      skill:
        "Analyse competing historical interpretations and revisionist debates.",
      lesson: {
        sections: [
          {
            heading: "Historiography",
            body: "**Traditional**: political/diplomatic focus, 'great men', archive-based. **Social**: ordinary people, class, gender, race. **Postmodern**: sceptical of grand narratives, emphasises language/power. **Revisionist**: challenges orthodox views with new evidence/angles.",
          },
          {
            heading: "Interpretation debates",
            body: "Historians disagree — same evidence, different conclusions. E.g. Cold War: orthodox (US defensive, USSR aggressive) vs revisionist (US expansionist) vs post-revisionist (shared responsibility). Questions shaped by contemporary concerns — 'history is written by winners' critique.",
          },
        ],
        keyFormulas: [
          { name: "Orthodox", statement: "Traditional view" },
          { name: "Revisionist", statement: "Challenge orthodox" },
          { name: "Post-revisionist", statement: "Balanced view" },
        ],
        workedExample: {
          problem: "Why do historians disagree about Cold War origins?",
          solution:
            "Different archives accessed, different questions asked, different values — orthodox blames USSR, revisionist blames US, post-revisionist sees mutual suspicion — all use same events, different interpretations.",
        },
      },
      questions: [
        {
          id: "ciealehist-q-u6l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Historiography' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "History of historical interpretations" },
              { id: "b", text: "Oral history" },
              { id: "c", text: "Ancient history" },
              { id: "d", text: "Writing history" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Historiography",
                statement: "Interpretations history.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Interpretations",
            commonErrors: ["Writing."],
          },
        },
        {
          id: "ciealehist-q-u6l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'revisionism' in history?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Revisionism",
                statement: "Reinterpretation.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Trigger.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Challenging established historical interpretations with new evidence or perspectives — not 'wrong' history but re-examination; e.g. revisionist Cold War views.",
            commonErrors: ["Error correction."],
          },
        },
        {
          id: "ciealehist-q-u6l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between orthodox and revisionist Cold War interpretations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interpretations",
                statement: "Blame assignment.",
              },
            ],
            steps: [
              { reasoning: "Orthodox.", marks: 1, markCode: "M" },
              { reasoning: "Revisionist.", marks: 1, markCode: "M" },
              { reasoning: "Post-revisionist.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Orthodox: USSR aggressive, US defensive. Revisionist: US expansionist, USSR reactive. Post-revisionist: mutual suspicion, shared responsibility — same events, different blame.",
            commonErrors: ["Same view."],
          },
        },
        {
          id: "ciealehist-q-u6l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why do 'questions asked' shape historical interpretations?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Questions shape",
                statement: "Perspective.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Contemporary link.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Historians ask different questions based on contemporary concerns — Cold War historians asked different questions in 1960s vs 1990s → interpretations shift with context.",
            commonErrors: ["Objective history."],
          },
        },
        {
          id: "ciealehist-q-u6l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether historical 'objectivity' is possible.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Objectivity",
                statement: "Aspiration vs reality.",
              },
            ],
            steps: [
              { reasoning: "For objectivity.", marks: 1, markCode: "M" },
              { reasoning: "Against.", marks: 1, markCode: "M" },
              { reasoning: "Middle ground.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Complete objectivity impossible — historians bring values, questions, limited sources — but 'rigorous objectivity' (testing evidence, acknowledging bias) achievable; aim for honest interpretation.",
            commonErrors: ["Pure objectivity/relativism."],
          },
        },
        {
          id: "ciealehist-q-u6l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'social history' vs 'political history'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "History types",
                statement: "Ordinary vs elite.",
              },
            ],
            steps: [
              { reasoning: "Political.", marks: 1, markCode: "M" },
              { reasoning: "Social.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Political: leaders, states, diplomacy, wars. Social: ordinary people, class, gender, daily life — 'history from below' vs 'history from above'.",
            commonErrors: ["Same field."],
          },
        },
        {
          id: "ciealehist-q-u6l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Postmodern' history emphasises:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Economic determinism" },
              {
                id: "b",
                text: "Language, power and scepticism of grand narratives",
              },
              { id: "c", text: "Great leaders" },
              { id: "d", text: "Archive facts only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Postmodern",
                statement: "Language+power.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Language+power",
            commonErrors: ["Traditional."],
          },
        },
        {
          id: "ciealehist-q-u6l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why 'new archives' changed historical interpretations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Archives", statement: "New evidence." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. Soviet archives post-1991 revealed internal deliberations (changed Cold War views); oral histories captured voices absent from official records.",
            commonErrors: ["No change."],
          },
        },
        {
          id: "ciealehist-q-u6l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'women's history' challenge traditional narratives?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Women's history",
                statement: "Missing half.",
              },
            ],
            steps: [
              { reasoning: "Gap.", marks: 1, markCode: "M" },
              { reasoning: "New questions.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Traditional history focused on male leaders/states — women's history reveals different experiences, roles, perspectives → challenges 'universal' narratives that were actually male-centric.",
            commonErrors: ["No difference."],
          },
        },
        {
          id: "ciealehist-q-u6l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how 'presentism' affects historical interpretation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Presentism",
                statement: "Judging past by present.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Problem.", marks: 1, markCode: "M" },
              { reasoning: "Value.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Judging past by present values is anachronistic (e.g. condemning all historical figures) but ignoring present relevance makes history pointless — balance: understand context AND draw lessons.",
            commonErrors: ["No relevance/only relevance."],
          },
        },
        {
          id: "ciealehist-q-u6l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Traditional' history typically focuses on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Literary criticism" },
              { id: "b", text: "Gender and race only" },
              {
                id: "c",
                text: "Political events, leaders and diplomacy",
              },
              { id: "d", text: "Ordinary people's daily life" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Traditional",
                statement: "Elite politics.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Political+leaders",
            commonErrors: ["Social focus."],
          },
        },
        {
          id: "ciealehist-q-u6l1c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'history is written by the winners' mean?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Winners' history",
                statement: "Power shapes records.",
              },
            ],
            steps: [
              { reasoning: "Meaning.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Dominant powers control archives, monuments and narratives — losers' perspectives underrepresented; e.g. colonial histories written by colonisers — official records reflect victors' interests.",
            commonErrors: ["Literal only."],
          },
        },
        {
          id: "ciealehist-q-u6l1c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'contemporary concerns' influence historical interpretation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contemporary link",
                statement: "Present shapes past.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Historians ask questions relevant to their own times — Cold War debates intensify during tensions, feminist history grows with women's movements — interpretations reflect contemporary debates and values.",
            commonErrors: ["History separate."],
          },
        },
        {
          id: "ciealehist-q-u6l1c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'economic history' offer different insights from political history?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Economic history",
                statement: "Structures vs events.",
              },
            ],
            steps: [
              { reasoning: "Focus.", marks: 1, markCode: "M" },
              { reasoning: "Different questions.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Focuses on trade, production, class, long-term structures rather than leaders/events — e.g. explains revolutions through economic hardship rather than political decisions; reveals patterns political history misses.",
            commonErrors: ["Same questions."],
          },
        },
        {
          id: "ciealehist-q-u6l1c2-15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare 'orthodox' and 'post-revisionist' interpretations of the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interpretations",
                statement: "Blame vs balance.",
              },
            ],
            steps: [
              { reasoning: "Orthodox view.", marks: 1, markCode: "M" },
              { reasoning: "Post-revisionist view.", marks: 1, markCode: "M" },
              { reasoning: "Key difference.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Orthodox: USSR primarily responsible, US defensive. Post-revisionist: shared responsibility — mutual suspicion, misperception, domestic pressures on both sides; moves beyond blame to structural analysis.",
            commonErrors: ["Same view."],
          },
        },
        {
          id: "ciealehist-q-u6l1c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse whether historical 'truth' exists or is only interpretation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Truth vs interpretation",
                statement: "Evidence + perspective.",
              },
            ],
            steps: [
              { reasoning: "Case for truth.", marks: 1, markCode: "M" },
              { reasoning: "Case for interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Middle ground.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Evidence constrains interpretation — facts exist (dates, events) but their meaning is contested; 'truth' is best understood as well-evidenced, tested interpretation rather than absolute certainty — historians seek defensible accounts, not final truth.",
            commonErrors: ["Absolute truth/relativism."],
          },
        },
      ],
    },
  ],
};
