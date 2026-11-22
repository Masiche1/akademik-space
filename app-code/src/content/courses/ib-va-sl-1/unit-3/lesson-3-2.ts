import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "va-u3-lesson-3-2",
  code: "3-2",
  title: "Writing Critical Responses",
  goal: "I CAN structure a critical response to an artwork using description, analysis and interpretation.",
  standards: ["Critical Studies", "Written Response"],
  vocabulary: [
    { term: "Critical response", definition: "A written analysis that describes, analyses and interprets an artwork's form and meaning." },
    { term: "Description", definition: "Stating what is objectively present in the artwork." },
    { term: "Analysis", definition: "Examining how formal elements and techniques produce effects." },
    { term: "Interpretation", definition: "Proposing what the artwork means or expresses." },
    { term: "Evidence", definition: "Specific visual details cited to support a claim." },
    { term: "Judgement", definition: "A reasoned conclusion about the artwork's success or significance." },
  ],
  concepts: [
    {
      id: "va-u3-analysis-structure",
      title: "Structuring formal analysis",
      skill: "Organise a written analysis moving from objective description through element analysis to interpretation.",
      lesson: {
        sections: [
          { heading: "The analysis structure", body: "A strong critical response moves through stages: **description** (what is there — subject, medium, composition), **analysis** (how elements work — line, colour, texture, space), **interpretation** (what it means — mood, theme, intention) and **judgement** (is it successful?). Each stage builds on the last." },
          { heading: "Using evidence", body: "Every claim needs visual evidence: 'the rough brushwork' not 'the painting is expressive'. Quote specific details — colours, marks, spatial arrangements — to anchor interpretation in the work. Vague praise ('beautiful', 'interesting') fails because it cites no evidence." },
          { heading: "Avoiding common errors", body: "Don't just retell the subject matter; don't assert meaning without evidence; don't use vague adjectives; don't ignore composition and technique. A good analysis makes the viewer see the work more clearly." },
        ],
        keyFormulas: [
          { name: "Response structure", statement: "Description → analysis of elements → interpretation → judgement" },
          { name: "Evidence rule", statement: "Every interpretive claim cites a specific visual detail" },
        ],
        workedExample: {
          problem: "A student writes: 'This painting is very emotional and beautiful.' Improve it using the analysis structure.",
          solution: "Replace with evidence-based analysis: 'The thick, agitated brushstrokes and clashing red-orange palette create visual turbulence (analysis), suggesting anxiety or inner conflict (interpretation); the centred, symmetrical composition gives the turmoil a contained, deliberate quality (judgement).",
        },
      },
      questions: [
        {
          id: "va-u3-analysis-structure-q1", difficulty: "foundation", totalMarks: 2,
          stem: "In a critical response, 'analysis' differs from 'description' because analysis:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Avoids mentioning colour" },
            { id: "b", text: "Examines how elements produce effects" },
            { id: "c", text: "Lists more details" },
            { id: "d", text: "Uses longer words" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Analysis", statement: "Examining how formal elements and techniques create effects." }],
            steps: [
              { reasoning: "Analysis examines how elements work; description only states what is present.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Examines how elements produce effects",
            commonErrors: ["Confusing description with analysis."],
          },
        },
        {
          id: "va-u3-analysis-structure-q2", difficulty: "core", totalMarks: 3,
          stem: "Describe the typical structure of a written critical response to an artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Response structure", statement: "Description, analysis, interpretation and judgement form the standard structure." }],
            steps: [
              { reasoning: "Description: objectively state subject, medium, composition and key features.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: examine how formal elements produce effects.", marks: 1, markCode: "M" },
              { reasoning: "Interpretation and judgement: propose meaning and evaluate success, supported by evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Description → analysis → interpretation → judgement, each supported by evidence.",
            commonErrors: ["Writing only description or only opinion."],
          },
        },
        {
          id: "va-u3-analysis-structure-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why vague evaluative language weakens a critical response.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evidence-based writing", statement: "Claims need specific visual evidence; vague praise persuades no one." }],
            steps: [
              { reasoning: "Words like 'beautiful' or 'interesting' state a reaction without explaining why.", marks: 1, markCode: "M" },
              { reasoning: "Without evidence, the reader cannot verify or learn from the analysis.", marks: 1, markCode: "M" },
              { reasoning: "Specific details — 'the impasto texture', 'the complementary palette' — make claims checkable and persuasive.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: evidence transforms opinion into analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vague language lacks evidence; specific visual detail makes analysis credible.",
            commonErrors: ["Using evaluative adjectives as substitutes for analysis."],
          },
        },
        {
          id: "va-u3-analysis-structure-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate a short critical response to an artwork.",
          parts: [
            { label: "a", prompt: "Identify what the response does well.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain why they matter.", marks: 2 },
            { label: "c", prompt: "Suggest how to strengthen the response.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluating writing", statement: "Assess whether description, analysis and evidence are present and effective." }],
            steps: [
              { part: "a", reasoning: "Identifies a strength, e.g. it attempts interpretation or names a technique.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Strength correctly identified and explained.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two weaknesses identified, e.g. vague language, no evidence, description only.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with reference to analytical standards.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding specific visual evidence, element analysis or contextual framing.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete, actionable improvement suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate by checking description/analysis/evidence balance and suggesting specific improvements.",
            commonErrors: ["Judging writing quality without reference to analytical criteria."],
          },
        },
        {
          id: "va-u3-analysis-structure-q5", difficulty: "foundation", totalMarks: 2,
          stem: "In a critical response, the stage where you state what is objectively present is called:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Description" },
            { id: "b", text: "Interpretation" },
            { id: "c", text: "Judgement" },
            { id: "d", text: "Evaluation" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Description", statement: "Objectively stating what is present — subject, medium, composition." }],
            steps: [
              { reasoning: "Description states what is objectively present in the work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Description",
            commonErrors: ["Confusing description with analysis or interpretation."],
          },
        },
        {
          id: "va-u3-analysis-structure-q6", difficulty: "foundation", totalMarks: 3,
          stem: "Explain the difference between the 'analysis' stage and the 'interpretation' stage of a critical response.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Analysis vs interpretation", statement: "Analysis examines how elements work; interpretation proposes what the work means." }],
            steps: [
              { reasoning: "Analysis examines how formal elements and techniques produce effects.", marks: 1, markCode: "M" },
              { reasoning: "Interpretation proposes what the artwork means — mood, theme or intention.", marks: 1, markCode: "M" },
              { reasoning: "Distinction: analysis answers 'how does it work?', interpretation answers 'what does it mean?'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Analysis explains how elements produce effects; interpretation proposes meaning.",
            commonErrors: ["Treating interpretation as a longer version of analysis."],
          },
        },
        {
          id: "va-u3-analysis-structure-q7", difficulty: "core", totalMarks: 2,
          stem: "Which sentence is an example of evidence-based analysis?",
          response: { type: "mcq", choices: [
            { id: "a", text: "\"The diagonal composition drives the viewer's eye toward the figure's face\"" },
            { id: "b", text: "\"It looks like a landscape\"" },
            { id: "c", text: "\"The painting is beautiful and moving\"" },
            { id: "d", text: "\"This artist is very famous\"" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Evidence-based analysis", statement: "Claims cite specific visual details that can be checked." }],
            steps: [
              { reasoning: "Only choice (b) cites a specific compositional detail and explains its effect.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** \"The diagonal composition drives the viewer's eye toward the figure's face\"",
            commonErrors: ["Mistaking evaluative adjectives for analysis."],
          },
        },
        {
          id: "va-u3-analysis-structure-q8", difficulty: "core", totalMarks: 4,
          stem: "Explain how citing specific visual details strengthens a critical response.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evidence rule", statement: "Every interpretive claim should cite a specific visual detail." }],
            steps: [
              { reasoning: "Vague claims like 'beautiful' cannot be checked or learned from.", marks: 1, markCode: "M" },
              { reasoning: "Specific details — colours, marks, spatial arrangements — anchor claims in the work.", marks: 1, markCode: "M" },
              { reasoning: "Readers can verify the evidence and see the work more clearly.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: evidence transforms opinion into analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specific visual details make claims verifiable and persuasive; vague language does neither.",
            commonErrors: ["Using adjectives as substitutes for evidence."],
          },
        },
        {
          id: "va-u3-analysis-structure-q9", difficulty: "challenge", totalMarks: 2,
          stem: "A response that only retells the subject matter fails because it:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Uses too many details" },
            { id: "b", text: "Stops at description and never analyses how formal elements work" },
            { id: "c", text: "Is too short" },
            { id: "d", text: "Mentions colour" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Beyond retelling", statement: "Critical response must analyse how elements produce effects, not recount content." }],
            steps: [
              { reasoning: "Retelling subject matter stays at description; it never examines how elements work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Stops at description and never analyses how formal elements work",
            commonErrors: ["Confusing detailed description with analysis."],
          },
        },
        {
          id: "va-u3-analysis-structure-q10", difficulty: "challenge", totalMarks: 6,
          stem: "Write a critical response to a described ceramic sculpture using the full structure.",
          extract: {
            title: "Described ceramic sculpture",
            author: "Written for Akademik Space",
            source: "Analysis structure exercise",
            text: "A ceramic sculpture of a twisted human figure stands on a plinth. The surface is cracked and glazed in uneven blue and grey tones; one arm reaches upward while the rest of the body curls inward.",
          },
          parts: [
            { label: "a", prompt: "Write two objective description sentences about the work.", marks: 2 },
            { label: "b", prompt: "Analyse how one formal element produces an effect.", marks: 2 },
            { label: "c", prompt: "Offer an interpretation and a judgement of the work.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Response structure", statement: "Description, analysis, interpretation and judgement each build on the last." }],
            steps: [
              { part: "a", reasoning: "Two accurate objective sentences, e.g. twisted figure, cracked blue-grey glaze, reaching arm.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Descriptions stay factual without interpretation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "One formal element analysed, e.g. cracked glaze suggests fragility or emotional damage.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Element linked explicitly to its produced effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Interpretation proposed, e.g. tension between reaching and withdrawal suggesting inner conflict.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement reached, e.g. the work is powerful because form mirrors theme.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Factual description. (b) Element-to-effect analysis. (c) Interpretation plus reasoned judgement.",
            commonErrors: ["Jumping to interpretation without description or analysis."],
          },
        },
        {
          id: "va-u3-analysis-structure-q11", difficulty: "foundation", totalMarks: 2,
          stem: "'Interpretation' in a critical response refers to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The artwork's sale price" },
            { id: "b", text: "The date it was made" },
            { id: "c", text: "What the artwork means or expresses" },
            { id: "d", text: "The frame's material" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Interpretation", statement: "Proposing what the artwork means — theme, mood or intention." }],
            steps: [
              { reasoning: "Interpretation proposes meaning; price, frame and date are factual details.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What the artwork means or expresses",
            commonErrors: ["Confusing interpretation with factual description."],
          },
        },
        {
          id: "va-u3-analysis-structure-q12", difficulty: "foundation", totalMarks: 3,
          stem: "Give two examples of specific visual evidence that could support an interpretation of an artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Visual evidence", statement: "Specific details are checkable; vague adjectives are not." }],
            steps: [
              { reasoning: "First example, e.g. empty negative space around a lone figure.", marks: 1, markCode: "M" },
              { reasoning: "Second example, e.g. thick impasto brushwork or a restricted palette.", marks: 1, markCode: "M" },
              { reasoning: "Both are checkable visual details rather than vague evaluative words.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two specific details, e.g. empty space, impasto texture, colour choices.",
            commonErrors: ["Giving vague descriptions like 'it looks sad'."],
          },
        },
        {
          id: "va-u3-analysis-structure-q13", difficulty: "core", totalMarks: 2,
          stem: "Which statement is a judgement rather than description or analysis?",
          response: { type: "mcq", choices: [
            { id: "a", text: "\"The work succeeds because its tension between order and chaos mirrors its theme\"" },
            { id: "b", text: "\"There are three figures in the foreground\"" },
            { id: "c", text: "\"The canvas measures two metres\"" },
            { id: "d", text: "\"The paint is oil on canvas\"" },
          ], aorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Judgement", statement: "A reasoned conclusion about the work's success or significance." }],
            steps: [
              { reasoning: "Only choice (c) evaluates success and links form to theme.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** \"The work succeeds because its tension between order and chaos mirrors its theme\"",
            commonErrors: ["Confusing analysis of effects with judgement of success."],
          },
        },
        {
          id: "va-u3-analysis-structure-q14", difficulty: "core", totalMarks: 4,
          stem: "Strengthen a vague critical statement using the analysis structure.",
          parts: [
            { label: "a", prompt: "A student writes: 'This artwork is very emotional.' Replace it with one evidence-based analytical claim.", marks: 2 },
            { label: "b", prompt: "State the interpretation that this claim could support.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evidence-based writing", statement: "Replace vague evaluation with specific detail and linked meaning." }],
            steps: [
              { part: "a", reasoning: "Vague statement identified as unsupported evaluation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Replacement cites specific evidence, e.g. 'the agitated brushwork and clashing palette create visual turbulence'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Interpretation offered, e.g. the turbulence suggests anxiety or inner conflict.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Interpretation clearly linked to the analytical claim.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Evidence-based claim. (b) Interpretation anchored in that evidence.",
            commonErrors: ["Swapping one vague adjective for another."],
          },
        },
        {
          id: "va-u3-analysis-structure-q15", difficulty: "challenge", totalMarks: 2,
          stem: "The strongest critical responses typically:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Offer interpretation only" },
            { id: "b", text: "Avoid judgement entirely" },
            { id: "c", text: "Keep description, analysis and interpretation clearly separated" },
            { id: "d", text: "Retell the artwork's story" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Response structure", statement: "Description, analysis, interpretation and judgement each have a distinct function." }],
            steps: [
              { reasoning: "Each stage builds on the last; keeping them distinct produces a clear structure.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Keep description, analysis and interpretation clearly separated",
            commonErrors: ["Blending all stages into undifferentiated opinion."],
          },
        },
        {
          id: "va-u3-analysis-structure-q16", difficulty: "challenge", totalMarks: 5,
          stem: "Analyse a described charcoal drawing of a market scene.",
          extract: {
            title: "Described charcoal drawing",
            author: "Written for Akademik Space",
            source: "Analysis structure exercise",
            text: "A charcoal drawing shows a crowded market scene. Faces are suggested by a few strokes, and diagonal lines push the viewer's eye toward a single stall glowing with light.",
          },
          parts: [
            { label: "a", prompt: "Make one analytical claim supported by specific evidence.", marks: 2 },
            { label: "b", prompt: "Offer an interpretation of the work's meaning.", marks: 1 },
            { label: "c", prompt: "Reach a balanced judgement about the work's success.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Structured response", statement: "Analysis links evidence to effects; judgement weighs overall success." }],
            steps: [
              { part: "a", reasoning: "Analytical claim made, e.g. diagonals create movement and the lit stall acts as focal point.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific evidence cited from the description.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Interpretation offered, e.g. light draws attention to commerce or a single moment amid chaos.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement reached, e.g. effective because composition directs attention purposefully.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement linked to the analysis and interpretation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Evidence-based analytical claim. (b) Interpretation. (c) Balanced judgement.",
            commonErrors: ["Judging without reference to the analysis."],
          },
        },
      ],
    },
    {
      id: "va-u3-interpretive-writing",
      title: "Interpretation and judgement",
      skill: "Develop interpretations supported by evidence and reach balanced judgements about artistic success.",
      lesson: {
        sections: [
          { heading: "From analysis to meaning", body: "Interpretation asks what the artwork means: what theme, mood or idea does it communicate? Meanings can be personal (my reading), contextual (what it meant to its audience) or universal (what it says about human experience). Strong interpretations acknowledge which kind they are." },
          { heading: "Supporting interpretation", body: "Interpretation must be anchored in evidence: the choice of colours, the distortion of form, the emptiness of space. If the evidence doesn't support the interpretation, it's speculation. Multiple valid interpretations can coexist — the question is whether each is argued from the work." },
          { heading: "Balanced judgement", body: "Judgement evaluates success: does the work achieve its apparent aims? Does form serve content? Is it original, coherent, powerful? A good judgement is specific ('the composition's tension between crowding and emptiness mirrors the theme of isolation') rather than generic ('it's good')." },
        ],
        keyFormulas: [
          { name: "Interpretation types", statement: "Personal, contextual and universal readings" },
          { name: "Judgement criteria", statement: "Does form serve content? Is it coherent, original, powerful?" },
        ],
        workedExample: {
          problem: "A student interprets a dark, crowded painting as 'about loneliness'. Is this supported? How could it be strengthened?",
          solution: "Crowding usually suggests the opposite — but if the figures are isolated within the crowd (turning away, separated by space), loneliness is supported. Strengthen by citing specific evidence: 'the figures stand apart despite proximity, their faces turned away, suggesting loneliness within community.'",
        },
      },
      questions: [
        {
          id: "va-u3-interpretive-writing-q1", difficulty: "foundation", totalMarks: 2,
          stem: "A 'contextual' interpretation of an artwork refers to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "What the artwork means to you personally" },
            { id: "b", text: "The artist's biography alone" },
            { id: "c", text: "What the artwork meant to its original audience and culture" },
            { id: "d", text: "The artwork's market value" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Contextual interpretation", statement: "Reading the work through its original cultural and historical setting." }],
            steps: [
              { reasoning: "Contextual interpretation reconstructs meaning for the work's original audience.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What the artwork meant to its original audience and culture",
            commonErrors: ["Confusing contextual with personal interpretation."],
          },
        },
        {
          id: "va-u3-interpretive-writing-q2", difficulty: "core", totalMarks: 3,
          stem: "Describe two ways to support an interpretation of an artwork with evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evidence for interpretation", statement: "Cite specific formal choices that motivate the proposed meaning." }],
            steps: [
              { reasoning: "Cite specific formal elements — colour, composition, texture — that support the reading.", marks: 1, markCode: "M" },
              { reasoning: "Link elements to meaning explicitly: 'the empty space isolates the figure, suggesting loneliness'.", marks: 1, markCode: "M" },
              { reasoning: "Acknowledge alternative readings or limits of the evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cite formal evidence and link it explicitly to the proposed meaning.",
            commonErrors: ["Asserting meaning without citing visual evidence."],
          },
        },
        {
          id: "va-u3-interpretive-writing-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why multiple valid interpretations of one artwork can coexist.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Plural interpretation", statement: "Artworks are ambiguous; different evidence selections yield different valid readings." }],
            steps: [
              { reasoning: "Artworks are complex enough to support several readings from different angles.", marks: 1, markCode: "M" },
              { reasoning: "Viewers bring different knowledge and values, producing different emphases.", marks: 1, markCode: "M" },
              { reasoning: "Validity depends on whether each interpretation is argued from evidence, not on being the only reading.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: ambiguity is a strength, not a failure of meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ambiguity allows multiple evidence-based readings to coexist validly.",
            commonErrors: ["Insisting on a single 'correct' interpretation."],
          },
        },
        {
          id: "va-u3-interpretive-writing-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate an interpretation of a described artwork.",
          extract: {
            title: "Described artwork",
            author: "Written for Akademik Space",
            source: "Interpretation exercise",
            text: "A photograph shows a child's toy boat in a flooded street, photographed at child's-eye height. The water reflects a pale sky; the boat's sail is bright against the grey street.",
          },
          parts: [
            { label: "a", prompt: "State the interpretation being evaluated.", marks: 2 },
            { label: "b", prompt: "Assess whether the evidence supports it.", marks: 2 },
            { label: "c", prompt: "Suggest an alternative interpretation and its supporting evidence.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evaluating interpretation", statement: "Interpretations are judged by how well evidence supports them." }],
            steps: [
              { part: "a", reasoning: "E.g. the interpretation is 'childhood innocence disrupted by disaster'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Interpretation clearly stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Evidence for: toy boat, child's-eye view, bright sail against grey — evidence partly supports.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Assesses fit between evidence and interpretation honestly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Alternative: 'resilience and play amid adversity' — the bright sail suggests hope; child's-eye view centres the child's perspective.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Alternative interpretation supported by specific evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Judge interpretation by evidence fit; offer alternatives grounded in the same details.",
            commonErrors: ["Rejecting or accepting interpretations without citing evidence."],
          },
        },
        {
          id: "va-u3-interpretive-writing-q5", difficulty: "foundation", totalMarks: 2,
          stem: "A 'personal' interpretation of an artwork is:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The artist's biography" },
            { id: "b", text: "The artwork's market value" },
            { id: "c", text: "What the work meant to its original audience" },
            { id: "d", text: "Your own reading of what the work means" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Personal interpretation", statement: "An individual's own reading of the work's meaning." }],
            steps: [
              { reasoning: "Personal interpretation is the viewer's own reading of meaning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Your own reading of what the work means",
            commonErrors: ["Confusing personal with contextual interpretation."],
          },
        },
        {
          id: "va-u3-interpretive-writing-q6", difficulty: "foundation", totalMarks: 3,
          stem: "Name the three types of interpretation and give a one-line description of each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Interpretation types", statement: "Personal, contextual and universal readings frame different kinds of meaning." }],
            steps: [
              { reasoning: "Personal: what the work means to you as a viewer.", marks: 1, markCode: "M" },
              { reasoning: "Contextual: what the work meant to its original audience and culture.", marks: 1, markCode: "M" },
              { reasoning: "Universal: what the work says about human experience across cultures and times.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Personal, contextual and universal interpretations.",
            commonErrors: ["Listing types without describing them."],
          },
        },
        {
          id: "va-u3-interpretive-writing-q7", difficulty: "core", totalMarks: 2,
          stem: "An interpretation of an artwork is strongest when it is supported by:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The title alone" },
            { id: "b", text: "Specific visual evidence from the work" },
            { id: "c", text: "Other students' opinions" },
            { id: "d", text: "The artist's fame" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evidence for interpretation", statement: "Interpretation must be anchored in specific visual details." }],
            steps: [
              { reasoning: "Interpretations are judged by whether evidence from the work supports them.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Specific visual evidence from the work",
            commonErrors: ["Treating interpretation as unsupported personal taste."],
          },
        },
        {
          id: "va-u3-interpretive-writing-q8", difficulty: "core", totalMarks: 4,
          stem: "Explain why an interpretation that the visual evidence does not support is weak.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evidence anchor", statement: "Interpretation is valid only when argued from the work." }],
            steps: [
              { reasoning: "Claims about meaning must be anchored in the artwork's details.", marks: 1, markCode: "M" },
              { reasoning: "Without supporting evidence the claim is speculation.", marks: 1, markCode: "M" },
              { reasoning: "Readers cannot verify or learn from an unsupported reading.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: validity is measured by fit between evidence and interpretation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unsupported interpretations are speculation; evidence determines validity.",
            commonErrors: ["Accepting any interpretation as equally valid regardless of evidence."],
          },
        },
        {
          id: "va-u3-interpretive-writing-q9", difficulty: "challenge", totalMarks: 2,
          stem: "Multiple valid interpretations of one artwork can coexist because:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Artworks are ambiguous and different evidence selections yield different readings" },
            { id: "b", text: "Artworks have no meaning" },
            { id: "c", text: "Interpretations are guesses" },
            { id: "d", text: "Critics disagree randomly" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "principle", name: "Plural interpretation", statement: "Ambiguity allows several evidence-based readings to coexist." }],
            steps: [
              { reasoning: "Different selections of evidence and viewer perspectives yield different but valid readings.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Artworks are ambiguous and different evidence selections yield different readings",
            commonErrors: ["Insisting on a single correct interpretation."],
          },
        },
        {
          id: "va-u3-interpretive-writing-q10", difficulty: "challenge", totalMarks: 6,
          stem: "Develop interpretations of a described sculpture.",
          extract: {
            title: "Described bronze sculpture",
            author: "Written for Akademik Space",
            source: "Interpretation exercise",
            text: "A bronze sculpture shows a human figure with wings half-open, standing on a cracked globe. One foot touches the ground while the other hovers above it.",
          },
          parts: [
            { label: "a", prompt: "State one interpretation of the sculpture.", marks: 2 },
            { label: "b", prompt: "Cite two pieces of visual evidence supporting your interpretation.", marks: 2 },
            { label: "c", prompt: "Offer an alternative interpretation supported by different evidence.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evidence-based interpretation", statement: "Interpretations are argued from specific visual details." }],
            steps: [
              { part: "a", reasoning: "Interpretation stated, e.g. the figure represents humanity poised between earth and aspiration.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Interpretation clearly articulated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two visual details cited, e.g. half-open wings, hovering foot, cracked globe.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each detail linked to the proposed meaning.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Alternative offered, e.g. the hovering foot suggests instability or indecision.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Alternative supported by different evidence from the same details.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Interpretation stated. (b) Two supporting details. (c) Alternative reading with evidence.",
            commonErrors: ["Offering interpretations with no visual evidence."],
          },
        },
        {
          id: "va-u3-interpretive-writing-q11", difficulty: "foundation", totalMarks: 2,
          stem: "A 'universal' interpretation asks what an artwork says about:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Human experience across cultures and times" },
            { id: "b", text: "Its auction price" },
            { id: "c", text: "The artist's nationality" },
            { id: "d", text: "Its original historical audience only" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Universal interpretation", statement: "Reading the work as speaking to shared human experience." }],
            steps: [
              { reasoning: "Universal interpretation addresses human experience beyond one culture or period.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Human experience across cultures and times",
            commonErrors: ["Confusing universal with contextual interpretation."],
          },
        },
        {
          id: "va-u3-interpretive-writing-q12", difficulty: "foundation", totalMarks: 3,
          stem: "Give an example of an interpretive claim about an artwork and the specific evidence that could support it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Claim and evidence", statement: "Interpretive claims must be tied to checkable visual details." }],
            steps: [
              { reasoning: "Claim example, e.g. 'the work expresses loneliness'.", marks: 1, markCode: "M" },
              { reasoning: "Evidence example, e.g. 'the figure stands alone in a large empty space'.", marks: 1, markCode: "M" },
              { reasoning: "Link explained: the empty space isolates the figure, supporting the loneliness reading.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any claim paired with specific supporting visual detail.",
            commonErrors: ["Stating a claim with no evidence or a vague one."],
          },
        },
        {
          id: "va-u3-interpretive-writing-q13", difficulty: "core", totalMarks: 2,
          stem: "Which judgement is specific and linked to evidence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "\"I prefer the other work\"" },
            { id: "b", text: "\"It is good\"" },
            { id: "c", text: "\"The colours are nice\"" },
            { id: "d", text: "\"The empty space around the lone figure creates isolation that mirrors the theme of exile\"" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Specific judgement", statement: "Strong judgements cite evidence and connect form to meaning." }],
            steps: [
              { reasoning: "Only choice (b) cites visual evidence and links it to theme.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** \"The empty space around the lone figure creates isolation that mirrors the theme of exile\"",
            commonErrors: ["Offering generic praise without evidence."],
          },
        },
        {
          id: "va-u3-interpretive-writing-q14", difficulty: "core", totalMarks: 4,
          stem: "Evaluate and strengthen an interpretation of a described painting.",
          parts: [
            { label: "a", prompt: "A student interprets a painting of a wilting flower in a vase as 'a celebration of nature's beauty'. Explain why this interpretation may be unsupported.", marks: 2 },
            { label: "b", prompt: "Suggest specific evidence that could support a revised interpretation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evidence fit", statement: "Interpretations must match what the details actually show." }],
            steps: [
              { part: "a", reasoning: "A wilting flower suggests decline or fragility, not celebration — mismatch identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Explanation that the interpretation ignores the wilted state.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Revised interpretation offered, e.g. 'the wilting flower evokes mortality or lost beauty'.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Specific evidence cited, e.g. drooping petals, muted colours, empty vase space.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'Celebration' contradicts the wilting evidence. (b) Revised reading of fragility supported by details.",
            commonErrors: ["Forcing an interpretation that contradicts the evidence."],
          },
        },
        {
          id: "va-u3-interpretive-writing-q15", difficulty: "challenge", totalMarks: 2,
          stem: "A balanced judgement of an artwork should assess whether:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The form serves the content and the work achieves its apparent aims coherently" },
            { id: "b", text: "The frame is expensive" },
            { id: "c", text: "The artist is famous" },
            { id: "d", text: "The work is old" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "principle", name: "Judgement criteria", statement: "Judgement asks whether form serves content and aims are achieved." }],
            steps: [
              { reasoning: "Balanced judgement assesses coherence between form and content and achievement of aims.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The form serves the content and the work achieves its apparent aims coherently",
            commonErrors: ["Judging by fame, age or material value rather than artistic achievement."],
          },
        },
        {
          id: "va-u3-interpretive-writing-q16", difficulty: "challenge", totalMarks: 5,
          stem: "Analyse an interactive sound installation.",
          extract: {
            title: "Described sound installation",
            author: "Written for Akademik Space",
            source: "Interpretation exercise",
            text: "An installation fills a room with hundreds of small bells hanging at head height. Visitors must duck and weave to cross, and the bells chime softly as they move.",
          },
          parts: [
            { label: "a", prompt: "State one interpretation of the installation.", marks: 1 },
            { label: "b", prompt: "Assess how well two pieces of evidence support it.", marks: 2 },
            { label: "c", prompt: "Reach a balanced judgement about the work's success.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evaluating interpretation", statement: "Interpretations and judgements are assessed by evidence and coherence." }],
            steps: [
              { part: "a", reasoning: "Interpretation stated, e.g. the work makes visitors physically negotiate a space of small sounds, suggesting delicate social interaction.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two evidence details assessed, e.g. head-height bells force bodily negotiation; chimes respond to movement.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Fit between evidence and interpretation evaluated honestly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Judgement reached, e.g. successful because the physical experience enacts the theme.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement linked to the evidence and interpretation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Interpretation. (b) Evidence fit assessed. (c) Balanced judgement.",
            commonErrors: ["Judging the work without engaging the described experience."],
          },
        },
      ],
    },
  ],
};
