import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "va-u3-lesson-3-1",
  code: "3-1",
  title: "Comparative Artwork Analysis",
  goal: "I CAN compare two artworks using formal and contextual criteria to identify similarities, differences and significance.",
  standards: ["Comparative", "Critical Studies"],
  vocabulary: [
    { term: "Comparative analysis", definition: "Examining two or more artworks side by side to identify similarities, differences and significance." },
    { term: "Similarity", definition: "A shared formal or contextual feature between works." },
    { term: "Contrast", definition: "A point where works differ in form, style, context or intent." },
    { term: "Significance", definition: "Why the similarities or differences matter — what they reveal about the works or their contexts." },
    { term: "Provenance", definition: "The history of ownership and location of an artwork." },
    { term: "Comparative framework", definition: "A set of criteria used consistently to compare works, e.g. medium, composition, context." },
  ],
  concepts: [
    {
      id: "va-u3-comparison-method",
      title: "Methods of comparison",
      skill: "Apply a consistent comparative framework to identify similarities, differences and significance between artworks.",
      lesson: {
        sections: [
          { heading: "Choosing criteria", body: "Effective comparison uses explicit criteria: formal elements (line, colour, composition), medium and technique, subject matter, context (period, culture, purpose), and intention. Applying the same criteria to both works prevents cherry-picking and produces balanced analysis." },
          { heading: "Similarities and differences", body: "Similarities reveal shared traditions, influences or universal concerns. Differences reveal distinct contexts, intentions or innovations. Neither is inherently better — the significance lies in what the comparison reveals about each work's choices." },
          { heading: "Beyond description", body: "Comparison must move past 'work A has X, work B has Y' to explain why those choices matter: what do the differences say about the artists' contexts, purposes or audiences? The best comparisons end with a judgement about relative significance." },
        ],
        keyFormulas: [
          { name: "Comparative criteria", statement: "Formal elements + medium + subject + context + intention" },
          { name: "Comparison structure", statement: "Similarities → differences → significance of each" },
        ],
        workedExample: {
          problem: "Compare two portraits: one Renaissance, one contemporary photograph. Apply three criteria.",
          solution: "Medium: oil on panel vs photographic print — permanence vs reproducibility. Composition: posed, hierarchical vs candid, intimate. Context: commission for status vs personal expression. Significance: each reflects its era's relationship between artist, subject and viewer.",
        },
      },
      questions: [
        {
          id: "va-u3-comparison-method-q1", difficulty: "foundation", totalMarks: 2,
          stem: "A comparative framework in art analysis is:",
          response: { type: "mcq", choices: [
            { id: "a", text: "A list of artists' birth dates" },
            { id: "b", text: "A picture frame used for two paintings" },
            { id: "c", text: "A consistent set of criteria applied to both works" },
            { id: "d", text: "A scoring system for grading art" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Comparative framework", statement: "Consistent criteria used to analyse works side by side." }],
            steps: [
              { reasoning: "A comparative framework is a consistent set of criteria for fair comparison.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A consistent set of criteria applied to both works",
            commonErrors: ["Confusing framework with physical frame."],
          },
        },
        {
          id: "va-u3-comparison-method-q2", difficulty: "core", totalMarks: 3,
          stem: "Describe two criteria you could use to compare two artworks from different periods.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparison criteria", statement: "Medium, composition, subject, context and intention provide consistent grounds." }],
            steps: [
              { reasoning: "Medium and technique — materials and processes used in each work.", marks: 1, markCode: "M" },
              { reasoning: "Composition — arrangement of elements on the picture plane.", marks: 1, markCode: "M" },
              { reasoning: "Context — historical period, patronage and intended audience of each work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Medium, composition and context are valid comparative criteria.",
            commonErrors: ["Comparing only subject matter without formal or contextual criteria."],
          },
        },
        {
          id: "va-u3-comparison-method-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why comparison should move beyond listing similarities and differences.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Comparative significance", statement: "Comparison is meaningful only when it explains what differences reveal." }],
            steps: [
              { reasoning: "Listing differences alone is descriptive, not analytical.", marks: 1, markCode: "M" },
              { reasoning: "Explaining what differences reveal about context, intention or innovation adds meaning.", marks: 1, markCode: "M" },
              { reasoning: "The best comparisons end with a judgement about relative significance or achievement.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: comparison should answer 'so what?' not just 'what is different?'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Comparison must explain significance, not merely catalogue differences.",
            commonErrors: ["Stopping at description without interpretation."],
          },
        },
        {
          id: "va-u3-comparison-method-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Apply a comparative framework to analyse two described artworks.",
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Comparative analysis exercise",
            text: "Work A: A detailed pencil drawing of a hand, every tendon and line carefully rendered, on white paper. Work B: A bold ink painting of the same hand, reduced to five expressive strokes on black paper, with red accents on the knuckles.",
          },
          parts: [
            { label: "a", prompt: "Identify one similarity between the two works.", marks: 2 },
            { label: "b", prompt: "Identify one significant difference and explain its effect.", marks: 2 },
            { label: "c", prompt: "Evaluate which work better serves its apparent purpose.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Comparative analysis", statement: "Same subject, radically different treatment reveals different intentions." }],
            steps: [
              { part: "a", reasoning: "Shared subject (a hand) and both use drawing/ink media — any valid similarity.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Similarity correctly identified from the descriptions.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Detail vs abstraction, white vs black ground, pencil vs ink — any valid significant difference with effect explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effect of the difference explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Work A serves accurate observation; Work B serves expressive communication — judgement depends on stated purpose.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned evaluation linked to apparent purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Shared subject. (b) Detail vs expression. (c) Each serves different purposes; judgement depends on intent.",
            commonErrors: ["Declaring one work 'better' without reference to purpose or context."],
          },
        },
        {
          id: "va-u3-comparison-method-q5", difficulty: "foundation", totalMarks: 2,
          stem: "Which of the following is a contextual criterion for comparing two artworks?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The composition of the picture plane" },
            { id: "b", text: "The historical period and patronage" },
            { id: "c", text: "The colour palette used" },
            { id: "d", text: "The brushwork technique" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Contextual criterion", statement: "Period, culture, patronage and purpose situate a work historically and socially." }],
            steps: [
              { reasoning: "Colour, brushwork and composition are formal criteria, not contextual ones.", marks: 1, markCode: "M" },
              { reasoning: "Historical period and patronage are contextual criteria, so choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The historical period and patronage",
            commonErrors: ["Confusing formal elements with contextual criteria."],
          },
        },
        {
          id: "va-u3-comparison-method-q6", difficulty: "foundation", totalMarks: 3,
          stem: "State three formal elements that can be used as criteria when comparing two artworks.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Formal criteria", statement: "Line, shape, colour, value, texture and composition are the formal elements of comparison." }],
            steps: [
              { reasoning: "Line and shape describe the contours and masses in the work.", marks: 1, markCode: "M" },
              { reasoning: "Colour and value describe palette and tonal structure.", marks: 1, markCode: "M" },
              { reasoning: "Composition or texture describes arrangement and surface quality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any three of: line/shape, colour/value, texture, composition.",
            commonErrors: ["Listing subject matter instead of formal elements."],
          },
        },
        {
          id: "va-u3-comparison-method-q7", difficulty: "core", totalMarks: 2,
          stem: "Applying the same criteria to both artworks in a comparison prevents:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cherry-picking features that favour one work" },
            { id: "b", text: "Reaching any judgement" },
            { id: "c", text: "Using colour as a criterion" },
            { id: "d", text: "Describing the works at all" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "principle", name: "Fair comparison", statement: "Consistent criteria applied equally prevent biased selection of evidence." }],
            steps: [
              { reasoning: "Using the same criteria for both works stops the analyst favouring convenient features.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Cherry-picking features that favour one work",
            commonErrors: ["Thinking consistent criteria remove judgement rather than bias."],
          },
        },
        {
          id: "va-u3-comparison-method-q8", difficulty: "core", totalMarks: 4,
          stem: "Explain why a comparative analysis should move beyond listing similarities and differences.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Comparative significance", statement: "Comparison is meaningful only when it explains what features reveal about intention, context or innovation." }],
            steps: [
              { reasoning: "Listing similarities and differences is descriptive and neutral; it does not interpret.", marks: 1, markCode: "M" },
              { reasoning: "Explaining what a feature reveals about intention, context or innovation adds meaning.", marks: 1, markCode: "M" },
              { reasoning: "Weighing which differences matter most produces a reasoned judgement.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: comparison should answer 'so what?', not just 'what is different?'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Comparison must explain significance and reach a judgement, not merely catalogue differences.",
            commonErrors: ["Stopping at description without interpretation."],
          },
        },
        {
          id: "va-u3-comparison-method-q9", difficulty: "challenge", totalMarks: 2,
          stem: "Two artworks share a subject but treat it in opposite ways. The most revealing comparison would focus on:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The titles of the works only" },
            { id: "b", text: "The artists' ages" },
            { id: "c", text: "How each treats the subject formally and what that reveals about intention" },
            { id: "d", text: "The colours of the frames" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "principle", name: "Treatment of subject", statement: "Divergent treatment of a shared subject reveals divergent intentions and contexts." }],
            steps: [
              { reasoning: "Formal treatment of a shared subject exposes each artist's approach and purpose.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** How each treats the subject formally and what that reveals about intention",
            commonErrors: ["Comparing only surface features like titles or frames."],
          },
        },
        {
          id: "va-u3-comparison-method-q10", difficulty: "challenge", totalMarks: 6,
          stem: "Apply a comparative framework to analyse two described posters.",
          extract: {
            title: "Two described posters",
            author: "Written for Akademik Space",
            source: "Comparative method exercise",
            text: "Poster A: a minimalist travel poster — a single red circle on a cream field, the word 'Go' in small black type at the bottom. Poster B: a dense collage poster for the same destination — overlapping photographs of landmarks, bold yellow lettering, and a map filling the lower third.",
          },
          parts: [
            { label: "a", prompt: "Identify one similarity between the posters.", marks: 2 },
            { label: "b", prompt: "Identify one significant difference and explain its effect on the viewer.", marks: 2 },
            { label: "c", prompt: "Judge which poster more effectively communicates its purpose.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Comparative analysis", statement: "Same purpose, radically different formal strategies reveal different communicative intentions." }],
            steps: [
              { part: "a", reasoning: "Shared purpose (promoting the same destination) and both are posters — any valid similarity.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Similarity correctly identified from the descriptions.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Minimalism vs density, single symbol vs information overload — any valid significant difference with effect explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effect on the viewer explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Poster A suggests immediacy and aspiration; Poster B suggests information and exploration — judgement depends on stated purpose.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned evaluation linked to communicative purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Shared purpose and format. (b) Minimalism vs density. (c) Each serves different communicative strategies; judgement depends on intent.",
            commonErrors: ["Declaring one poster 'better' without reference to purpose."],
          },
        },
        {
          id: "va-u3-comparison-method-q11", difficulty: "foundation", totalMarks: 2,
          stem: "Provenance is useful in comparison because it provides:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only the sale price of the work" },
            { id: "b", text: "Automatic proof of which work is older" },
            { id: "c", text: "The history of ownership and location, which informs context" },
            { id: "d", text: "A substitute for looking at the work" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Provenance", statement: "The ownership and location history of a work, which shapes its context." }],
            steps: [
              { reasoning: "Provenance records where and with whom a work has been, informing contextual reading.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The history of ownership and location, which informs context",
            commonErrors: ["Confusing provenance with authentication or market value."],
          },
        },
        {
          id: "va-u3-comparison-method-q12", difficulty: "foundation", totalMarks: 3,
          stem: "Describe what 'moving beyond description' means when comparing artworks.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Beyond description", statement: "Comparison should explain effects and significance, not just catalogue features." }],
            steps: [
              { reasoning: "It means moving from 'what is there' to 'what it does or means'.", marks: 1, markCode: "M" },
              { reasoning: "It explains the effects produced by formal and contextual choices.", marks: 1, markCode: "M" },
              { reasoning: "It connects those effects to a judgement about significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Moving beyond description means explaining effects and significance rather than listing features.",
            commonErrors: ["Equating longer description with deeper analysis."],
          },
        },
        {
          id: "va-u3-comparison-method-q13", difficulty: "core", totalMarks: 2,
          stem: "A student compares a Renaissance altarpiece and a graffiti mural using only colour. This approach is limited because:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Graffiti cannot be analysed" },
            { id: "b", text: "Altarpieces contain no colour" },
            { id: "c", text: "Colour is never a valid comparison criterion" },
            { id: "d", text: "One criterion misses major differences in medium, context and intention" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "principle", name: "Multiple criteria", statement: "A single criterion cannot capture differences across medium, context and intention." }],
            steps: [
              { reasoning: "Colour alone ignores medium, function, context and intention, which differ radically here.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** One criterion misses major differences in medium, context and intention",
            commonErrors: ["Assuming one formal criterion is sufficient for comparison."],
          },
        },
        {
          id: "va-u3-comparison-method-q14", difficulty: "core", totalMarks: 4,
          stem: "Apply comparative criteria to two described objects.",
          extract: {
            title: "Two described objects",
            author: "Written for Akademik Space",
            source: "Comparative method exercise",
            text: "Object A: a porcelain vase with delicate blue floral painting. Object B: a rough concrete planter carrying the same floral motif spray-painted in bright orange.",
          },
          parts: [
            { label: "a", prompt: "State two similarities between the works.", marks: 2 },
            { label: "b", prompt: "Identify one significant difference and explain why it matters.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Comparative analysis", statement: "Shared motif across different media and contexts reveals different intentions." }],
            steps: [
              { part: "a", reasoning: "Shared floral motif and both are decorated vessels/containers — any two valid similarities.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two similarities correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Porcelain vs concrete, delicate vs rough, blue vs orange — any valid significant difference.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effect on meaning (fragility vs endurance, refinement vs street aesthetic) explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Shared motif and function. (b) Material and palette transform the same motif's meaning.",
            commonErrors: ["Noting differences without explaining their significance."],
          },
        },
        {
          id: "va-u3-comparison-method-q15", difficulty: "challenge", totalMarks: 2,
          stem: "The strongest comparative conclusion typically:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Declares one work universally superior" },
            { id: "b", text: "Simply repeats the descriptions" },
            { id: "c", text: "Weighs the evidence and acknowledges limits" },
            { id: "d", text: "Avoids all judgement" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Weighed judgement", statement: "Good conclusions weigh evidence and state what the comparison can and cannot claim." }],
            steps: [
              { reasoning: "A strong conclusion weighs evidence and acknowledges limits rather than overclaiming.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Weighs the evidence and acknowledges limits",
            commonErrors: ["Forcing a winner or refusing to judge at all."],
          },
        },
        {
          id: "va-u3-comparison-method-q16", difficulty: "challenge", totalMarks: 5,
          stem: "Compare two described drawings of a runner.",
          extract: {
            title: "Two described drawings",
            author: "Written for Akademik Space",
            source: "Comparative method exercise",
            text: "Work A: a detailed graphite study of a runner's musculature, drawn life-size on toned paper. Work B: a blurred charcoal gesture drawing of the same runner, suggesting speed through smeared motion lines.",
          },
          parts: [
            { label: "a", prompt: "State one similarity and its significance.", marks: 2 },
            { label: "b", prompt: "Identify the most significant difference.", marks: 1 },
            { label: "c", prompt: "Explain what the comparison reveals about each artist's approach.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Comparative analysis", statement: "Same subject treated by observation vs gesture reveals different artistic aims." }],
            steps: [
              { part: "a", reasoning: "Shared subject (a runner) and both are drawings — similarity identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Significance explained, e.g. shared interest in the moving body.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Most significant difference: anatomical precision vs expressive blur — correctly identified.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Work A values observation and structure; Work B values movement and energy — divergence explained.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion links differences to each artist's approach.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Shared subject. (b) Precision vs gesture. (c) Observation vs expression of movement.",
            commonErrors: ["Describing differences without linking them to artistic approach."],
          },
        },
      ],
    },
    {
      id: "va-u3-comparison-evaluation",
      title: "Evaluating comparative significance",
      skill: "Judge the relative significance of similarities and differences in comparative analysis.",
      lesson: {
        sections: [
          { heading: "What makes a comparison significant", body: "Not all differences matter equally. A difference in frame colour is trivial; a difference in how artists treat the human figure may be profound. Significance depends on what the feature reveals about artistic intention, cultural context or formal innovation." },
          { heading: "Contextual significance", body: "Two works may look similar but mean opposite things in their contexts: a religious image in a church vs the same image in a museum of 'primitives'. Conversely, visually different works may share deep structural concerns. Context determines whether a similarity or difference is significant." },
          { heading: "Making a judgement", body: "A strong comparative conclusion weighs the evidence: which differences are most revealing? What do they suggest about each artist's project? Acknowledge limits — the comparison is based on available evidence, and other criteria might yield different conclusions." },
        ],
        keyFormulas: [
          { name: "Significance test", statement: "Does this similarity/difference reveal intention, context or innovation?" },
          { name: "Judgement structure", statement: "Evidence → interpretation → weighed conclusion with acknowledged limits" },
        ],
        workedExample: {
          problem: "Two paintings of trees: one hyperrealist, one abstract. Is the difference in style significant?",
          solution: "Yes, if it reflects different intentions: hyperrealism may explore perception and detail; abstraction may explore essence, emotion or formal structure. The difference is significant because it reveals divergent answers to 'what is a tree's essential nature?' — but only if supported by evidence of intent.",
        },
      },
      questions: [
        {
          id: "va-u3-comparison-evaluation-q1", difficulty: "foundation", totalMarks: 2,
          stem: "In comparative analysis, a 'significant' difference is one that:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Is the largest visually" },
            { id: "b", text: "Appears first in the description" },
            { id: "c", text: "Reveals something meaningful about intention, context or innovation" },
            { id: "d", text: "Is easiest to describe" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "principle", name: "Significant difference", statement: "Differences matter when they reveal intention, context or innovation." }],
            steps: [
              { reasoning: "Significance depends on what the difference reveals, not its size or ease of description.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Reveals something meaningful about intention, context or innovation",
            commonErrors: ["Confusing visual size with analytical significance."],
          },
        },
        {
          id: "va-u3-comparison-evaluation-q2", difficulty: "core", totalMarks: 3,
          stem: "Explain how context can make visually similar artworks mean very different things.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Contextual meaning", statement: "The same forms activate different meanings in different cultural settings." }],
            steps: [
              { reasoning: "Symbols and styles carry meanings specific to their culture and period.", marks: 1, markCode: "M" },
              { reasoning: "An image's function — worship, propaganda, decoration — reframes its content.", marks: 1, markCode: "M" },
              { reasoning: "Museum display vs original setting changes how viewers read the work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Context activates different meanings for the same visual forms.",
            commonErrors: ["Assuming visual similarity guarantees semantic similarity."],
          },
        },
        {
          id: "va-u3-comparison-evaluation-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a comparative conclusion should acknowledge its limits.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Acknowledging limits", statement: "Analysis is based on selected evidence and criteria; other approaches might differ." }],
            steps: [
              { reasoning: "Comparisons select specific criteria — different criteria could yield different conclusions.", marks: 1, markCode: "M" },
              { reasoning: "Available evidence (images, texts, provenance) may be incomplete or biased.", marks: 1, markCode: "M" },
              { reasoning: "Acknowledging limits shows critical awareness rather than overclaiming certainty.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: honest analysis states what it can and cannot claim.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Limits arise from chosen criteria and available evidence; acknowledging them is good practice.",
            commonErrors: ["Overclaiming certainty in comparative judgement."],
          },
        },
        {
          id: "va-u3-comparison-evaluation-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate a comparative judgement between two described artworks.",
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Comparative evaluation exercise",
            text: "Work A: A bronze sculpture of a seated figure, realistic proportions, polished surface, on a plinth in a public square. Work B: A wire sculpture of the same seated pose, distorted proportions, exposed armature visible, suspended from a ceiling in a gallery.",
          },
          parts: [
            { label: "a", prompt: "State one similarity and one difference between the works.", marks: 2 },
            { label: "b", prompt: "Explain which difference is more significant and why.", marks: 2 },
            { label: "c", prompt: "Assess the limits of this comparison.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evaluating comparison", statement: "Weigh which differences matter and acknowledge evidence limits." }],
            steps: [
              { part: "a", reasoning: "Similarity: same subject (seated figure) and sculptural medium. Difference: realism vs distortion, bronze vs wire, public vs gallery.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "One similarity and one difference correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The treatment of the human figure (realistic vs distorted) is more significant than material or setting because it reveals different ideas about the body.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Justifies significance with reference to meaning.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Limits: only descriptions available, no artist statements, single view of each work, context partial.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned assessment of evidential limits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Same subject/medium; different treatment. (b) Figure treatment most significant. (c) Limited by available descriptions and missing context.",
            commonErrors: ["Declaring a winner without weighing evidence and limits."],
          },
        },
        {
          id: "va-u3-comparison-evaluation-q5", difficulty: "foundation", totalMarks: 2,
          stem: "Which difference between two artworks would likely be MOST significant in analysis?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The colour of the picture frame" },
            { id: "b", text: "The style of the artist's signature" },
            { id: "c", text: "The language of the title" },
            { id: "d", text: "How each artist treats the human figure" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "principle", name: "Significance test", statement: "Differences matter most when they reveal intention, context or innovation." }],
            steps: [
              { reasoning: "Treatment of the human figure reveals ideas about the body and humanity; frame colour or signature does not.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** How each artist treats the human figure",
            commonErrors: ["Judging significance by visual size rather than revealed meaning."],
          },
        },
        {
          id: "va-u3-comparison-evaluation-q6", difficulty: "foundation", totalMarks: 3,
          stem: "Give one example of a trivial difference and one example of a significant difference between two artworks, and explain the distinction.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Trivial vs significant", statement: "Significance depends on what a feature reveals, not its visibility." }],
            steps: [
              { reasoning: "Trivial example: frame colour, signature style or title language.", marks: 1, markCode: "M" },
              { reasoning: "Significant example: treatment of the figure, use of space or medium choice.", marks: 1, markCode: "M" },
              { reasoning: "Explanation: significant differences reveal intention, context or innovation; trivial ones do not.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Trivial differences (e.g. frame colour) reveal little; significant differences (e.g. figure treatment) reveal intention and context.",
            commonErrors: ["Choosing examples without explaining the distinction."],
          },
        },
        {
          id: "va-u3-comparison-evaluation-q7", difficulty: "core", totalMarks: 2,
          stem: "Two artworks look visually similar but were made for very different purposes. This situation shows that:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Formal analysis is useless" },
            { id: "b", text: "Comparison between them is impossible" },
            { id: "c", text: "One work must be a copy of the other" },
            { id: "d", text: "Context determines whether a similarity is meaningful" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "principle", name: "Contextual significance", statement: "The same forms can carry different meanings in different cultural settings." }],
            steps: [
              { reasoning: "Different purposes and contexts can give identical forms different meanings.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Context determines whether a similarity is meaningful",
            commonErrors: ["Assuming visual similarity guarantees semantic similarity."],
          },
        },
        {
          id: "va-u3-comparison-evaluation-q8", difficulty: "core", totalMarks: 4,
          stem: "Explain how the original display context of an artwork can change the significance of a similarity between two works.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Context reframes meaning", statement: "Function and audience determine what shared forms signify." }],
            steps: [
              { reasoning: "Context assigns function — worship, propaganda, decoration or trade — which reframes content.", marks: 1, markCode: "M" },
              { reasoning: "The same symbols and styles activate different meanings in different cultures and periods.", marks: 1, markCode: "M" },
              { reasoning: "Original setting vs museum display changes how viewers read the shared features.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: significance is contextual, not purely visual.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Original context and function determine whether a shared visual feature is significant or trivial.",
            commonErrors: ["Treating visual similarity as sufficient evidence of shared meaning."],
          },
        },
        {
          id: "va-u3-comparison-evaluation-q9", difficulty: "challenge", totalMarks: 2,
          stem: "A comparative conclusion should acknowledge its limits because:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Judgements are always wrong" },
            { id: "b", text: "It makes the writing longer" },
            { id: "c", text: "Examiners require it" },
            { id: "d", text: "The chosen criteria and available evidence are selected and may be incomplete" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Acknowledging limits", statement: "Analysis rests on selected criteria and partial evidence." }],
            steps: [
              { reasoning: "Criteria are chosen and evidence may be incomplete, so conclusions are provisional.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The chosen criteria and available evidence are selected and may be incomplete",
            commonErrors: ["Overclaiming certainty in comparative judgement."],
          },
        },
        {
          id: "va-u3-comparison-evaluation-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate the significance of differences between two described seascapes.",
          extract: {
            title: "Two described seascapes",
            author: "Written for Akademik Space",
            source: "Comparative evaluation exercise",
            text: "Work A: a stormy seascape painted in turbulent impasto, the waves rendered as violent strokes of grey and white. Work B: a calm harbour scene in smooth glazes, the water mirror-still and tinted pink at dusk.",
          },
          parts: [
            { label: "a", prompt: "Identify the most significant difference between the works.", marks: 1 },
            { label: "b", prompt: "Explain what that difference reveals about each artist's concern.", marks: 2 },
            { label: "c", prompt: "State one limit of this comparison.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evaluating comparison", statement: "Weigh which differences matter and acknowledge evidence limits." }],
            steps: [
              { part: "a", reasoning: "Most significant difference: turbulent vs calm treatment of the sea — correctly identified.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Work A explores nature's violence and energy; Work B explores tranquillity and reflection — divergence explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Link between treatment and artistic concern justified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Limit stated, e.g. only descriptions available, no artist statements or full context.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Turbulence vs calm. (b) Violence vs tranquillity of nature. (c) Limited by available descriptions.",
            commonErrors: ["Naming a difference without explaining what it reveals."],
          },
        },
        {
          id: "va-u3-comparison-evaluation-q11", difficulty: "foundation", totalMarks: 2,
          stem: "Context can make a visual similarity between artworks:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Prove the works are copies" },
            { id: "b", text: "Mean opposite things depending on function and audience" },
            { id: "c", text: "Make comparison impossible" },
            { id: "d", text: "Irrelevant to analysis" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Contextual meaning", statement: "Function and audience determine what shared forms signify." }],
            steps: [
              { reasoning: "The same forms can carry opposite meanings in different contexts.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Mean opposite things depending on function and audience",
            commonErrors: ["Assuming identical forms carry identical meanings."],
          },
        },
        {
          id: "va-u3-comparison-evaluation-q12", difficulty: "foundation", totalMarks: 3,
          stem: "Describe a simple test for whether a similarity between two artworks is significant.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Significance test", statement: "Ask what the shared feature reveals about tradition, influence or concern." }],
            steps: [
              { reasoning: "Ask what the shared feature reveals — shared tradition, influence or concern.", marks: 1, markCode: "M" },
              { reasoning: "Check whether it changes or deepens the meaning of each work.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: it is significant only if it reveals something meaningful.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A similarity is significant if it reveals meaningful connection in tradition, influence or concern.",
            commonErrors: ["Treating every shared feature as equally meaningful."],
          },
        },
        {
          id: "va-u3-comparison-evaluation-q13", difficulty: "core", totalMarks: 2,
          stem: "An artist's religious icon and an advertiser's use of the same motif share a visual feature. The comparison shows that:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The image is meaningless in advertising" },
            { id: "b", text: "Context can give the same feature different significance" },
            { id: "c", text: "The motif means exactly the same thing in both" },
            { id: "d", text: "One artist must have copied the other" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Contextual significance", statement: "Context reframes the meaning of shared visual features." }],
            steps: [
              { reasoning: "Sacred function vs commercial function gives the motif different significance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Context can give the same feature different significance",
            commonErrors: ["Assuming a shared symbol carries a fixed meaning."],
          },
        },
        {
          id: "va-u3-comparison-evaluation-q14", difficulty: "core", totalMarks: 4,
          stem: "Compare two described Buddha figures.",
          extract: {
            title: "Two described Buddha figures",
            author: "Written for Akademik Space",
            source: "Comparative evaluation exercise",
            text: "Work A: a bronze Buddha statue, eyes downcast, hands in meditation, incense smoke curling around it in a temple. Work B: a chrome Buddha figurine on an office desk, one hand raised in a wave, beside a laptop.",
          },
          parts: [
            { label: "a", prompt: "Identify one similarity and state whether it is likely significant.", marks: 2 },
            { label: "b", prompt: "Identify one difference and explain its significance.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evaluating comparison", statement: "Weigh similarities and differences by what they reveal about context and intention." }],
            steps: [
              { part: "a", reasoning: "Similarity: same subject (Buddha figure). Significance judged — in this case likely trivial because context differs so radically.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Similarity and its significance correctly assessed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Difference: sacred meditation vs casual desk ornament — material, setting and gesture.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Significance explained: reverence vs appropriation/commercial casualness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Shared subject, limited significance given contexts. (b) Sacred vs secular treatment is the significant difference.",
            commonErrors: ["Assuming the shared subject makes the works comparable in meaning."],
          },
        },
        {
          id: "va-u3-comparison-evaluation-q15", difficulty: "challenge", totalMarks: 2,
          stem: "Weighing evidence in comparative analysis means:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Choosing the more attractive work" },
            { id: "b", text: "Ignoring context entirely" },
            { id: "c", text: "Counting the number of similarities" },
            { id: "d", text: "Judging which differences carry the most interpretive weight" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Weighing evidence", statement: "Not all differences matter equally; judgement ranks their significance." }],
            steps: [
              { reasoning: "Weighing evidence means judging which differences reveal the most about intention and context.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Judging which differences carry the most interpretive weight",
            commonErrors: ["Treating all differences as equally important."],
          },
        },
        {
          id: "va-u3-comparison-evaluation-q16", difficulty: "challenge", totalMarks: 5,
          stem: "Compare two described portraits across cultures.",
          extract: {
            title: "Two described portraits",
            author: "Written for Akademik Space",
            source: "Comparative evaluation exercise",
            text: "Work A: a formal portrait of a chief in a painted mantle, symmetrical and frontal against a gold background. Work B: a candid photograph of an elder in everyday clothes, off-centre in natural window light.",
          },
          parts: [
            { label: "a", prompt: "State one similarity between the portraits.", marks: 1 },
            { label: "b", prompt: "Identify the most significant difference and explain why it matters.", marks: 2 },
            { label: "c", prompt: "Write a weighed conclusion that acknowledges one limit of the comparison.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evaluating comparison", statement: "Weigh which differences matter and state evidential limits." }],
            steps: [
              { part: "a", reasoning: "Similarity: same subject (a portrait of an elder/authority figure) — correctly identified.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Most significant difference: formal painted authority vs candid photographic intimacy — identified.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Significance explained: ideals of status and permanence vs everyday presence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Weighed conclusion reached, not a simple winner declaration.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "One limit acknowledged, e.g. partial descriptions, no artist statements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Shared subject. (b) Formal vs candid treatment. (c) Weighed judgement with acknowledged limits.",
            commonErrors: ["Ignoring how medium and context shape portraiture."],
          },
        },
      ],
    },
  ],
};
