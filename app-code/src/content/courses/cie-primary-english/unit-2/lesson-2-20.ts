import type { Lesson } from "../../../types.ts";

export const lesson220: Lesson = {
  id: "cipe-u2-lesson-2-20",
  code: "2-20",
  title: "Stage 6 — Reading: Vocabulary, Structure and Interpretation",
  goal: "I CAN analyse writers' vocabulary choices, evaluate text structure and interpret complex meaning with evidence.",
  standards: ["Cambridge Primary English 0058 Stage 6: reading",
  "Cambridge Primary English 0058 framework substrands: 6Rv, 6Rs, 6Ri, 6Ra"],
  stage: 6,
  vocabulary: [
    { term: "Connotation", definition: "The feelings or ideas a word suggests beyond its dictionary meaning." },
    { term: "Figurative language", definition: "Language using imagery, e.g. metaphor, simile, personification." },
    { term: "Structure", definition: "How ideas are organised and sequenced in a text." },
    { term: "Ambiguity", definition: "When a text can be interpreted in more than one way." },
    { term: "Bias", definition: "When a text presents one viewpoint unfairly." },
    { term: "Purpose", definition: "What the writer intends the text to achieve." },
  ],
  concepts: [
    {
      id: "cipe-u2-s20-reading",
      title: "Analysing vocabulary, structure and meaning",
      skill: "Evaluate word choice and text organisation, interpret complex meaning and detect bias at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Vocabulary and language",
            body: "Analyse why writers choose particular words — connotation, imagery, figurative language. 'Slim' vs 'scrawny' describe the same thing but suggest different judgements. Consider how vocabulary builds tone and reveals viewpoint.",
          },
          {
            heading: "Structure, interpretation and purpose",
            body: "Evaluate how structure serves purpose: does the text build to a climax? Use flashbacks? Withhold information? Interpret ambiguity — texts often support multiple readings. Detect bias: whose voice is missing? Judge the text's purpose — to inform, persuade, entertain — and whether it achieves it.",
          },
        ],
        keyFormulas: [
          { name: "Vocabulary analysis", statement: "word choice → connotation → effect on reader" },
          { name: "Interpretation", statement: "meaning + evidence + awareness of ambiguity/bias" },
        ],
        workedExample: {
          problem: "A newspaper article calls a new law 'a welcome reform' while an opponent calls it 'a dangerous experiment'. Analyse the vocabulary.",
          solution: "'Welcome' has positive connotation (like a guest); 'reform' implies improvement needed. 'Dangerous' signals threat; 'experiment' implies untested risk. Both reveal viewpoint through word choice — the article is not neutral.",
        },
      },
      questions: [
        {
          id: "cipe-u2-rd6-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'connotation' mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The feelings or ideas a word suggests" }, { id: "b", text: "The dictionary definition" }, { id: "c", text: "The spelling of a word" }, { id: "d", text: "The number of letters" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Connotation", statement: "Suggested meanings/feelings." }],
            steps: [{ reasoning: "Connotation = implied associations beyond literal meaning.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Feelings/ideas a word suggests",
          },
        },
        {
          id: "cipe-u2-rd6-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two ways a writer's word choice can reveal their viewpoint.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Viewpoint through vocabulary", statement: "Connotation and loaded terms." }],
            steps: [
              { reasoning: "e.g. positive vs negative adjectives.", marks: 1, markCode: "AO2" },
              { reasoning: "e.g. loaded/emotive words that favour one side.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. connotation, loaded/emotive words",
          },
        },
        {
          id: "cipe-u2-rd6-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read: 'The so-called reform will force schools to cut arts subjects.' Analyse the effect of 'so-called' and 'force'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Vocabulary analysis", statement: "Word choice → connotation → effect." }],
            steps: [
              { reasoning: "'So-called' implies doubt — suggests it isn't a real reform.", marks: 1, markCode: "AO3" },
              { reasoning: "'Force' implies compulsion/violence — negative framing.", marks: 1, markCode: "AO3" },
              { reasoning: "Both reveal a critical viewpoint.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Doubt + coercion; reveals critical bias",
          },
        },
        {
          id: "cipe-u2-rd6-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Read this extract: 'The expedition had failed — or had it? The frozen journals told a different story. Perhaps the crew hadn't perished at all; perhaps they were still out there, waiting.' (a) Explain how the structure creates suspense. (b) Interpret the ambiguity in 'or had it?'. (c) Analyse the effect of 'frozen journals' and 'different story'. (d) What is the writer's likely purpose? (e) Could this text be read two ways? Justify. (f) Identify any bias or missing viewpoint.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Advanced reading analysis", statement: "Structure, ambiguity, vocabulary, purpose, bias." }],
            steps: [
              { reasoning: "(a) Rhetorical question + reversal structure delays resolution → suspense.", marks: 1, markCode: "AO3" },
              { reasoning: "(b) Ambiguity: 'failed' may mean differently than assumed — invites reinterpretation.", marks: 1, markCode: "AO3" },
              { reasoning: "(c) 'Frozen' personifies/creates desolation; 'different story' signals hidden truth.", marks: 1, markCode: "AO3" },
              { reasoning: "(d) Purpose: intrigue/entertain — hook reader into mystery.", marks: 1, markCode: "AO4" },
              { reasoning: "(e) Yes — could read as ghost story or survival tale; justified.", marks: 2, markCode: "AO3" },
              { reasoning: "(f) Bias: presents survival hypothesis favourably; no evidence from crew's perspective.", marks: 1, markCode: "AO4" },
              { reasoning: "All parts addressed with evidence.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Suspense via reversal; ambiguity invites reinterpretation; imagery creates mystery; purpose=intrigue; two readings possible; survival view favoured.",
            levels: [
              { level: "3", marks: "7-8", descriptor: "All parts analysed with precise technique, ambiguity and bias awareness." },
              { level: "2", marks: "4-6", descriptor: "Most parts covered; some analysis of structure/vocabulary." },
              { level: "1", marks: "1-3", descriptor: "Limited analysis; few valid points." },
            ],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-rd6-notes",
      title: "Reading analysis — notes",
      summary: "Word choice → connotation → effect. Structure serves purpose. Ambiguity and bias are features to identify.",
      sections: [
        { heading: "Vocabulary", body: "Compare near-synonyms; ask what each suggests beyond definition." },
        { heading: "Structure and bias", body: "Ask: whose voice is missing? What does the organisation emphasise?" },
      ],
    },
  ],
};
