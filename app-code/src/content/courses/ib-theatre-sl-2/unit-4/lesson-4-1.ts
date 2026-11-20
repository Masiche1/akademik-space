import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "theatre-u4-lesson-4-1",
  code: "4-1",
  title: "Comparing Dramatic Texts",
  goal: "I CAN compare two dramatic texts using consistent criteria to identify similarities, differences and significance.",
  standards: [
    "Comparative",
    "Play Analysis",
  ],
  vocabulary: [
    { term: "Comparative analysis", definition: "Examining two plays side by side using consistent criteria." },
    { term: "Dramatic text", definition: "A written play including dialogue, stage directions and structure." },
    { term: "Theme", definition: "The central idea or subject a play explores." },
    { term: "Convention", definition: "An accepted dramatic device or structural element." },
    { term: "Context", definition: "The historical, cultural and social circumstances of a play's creation." },
    { term: "Significance", definition: "Why similarities or differences matter — what they reveal." },
  ],
  concepts: [
    {
      id: "theatre-u4-comparison-method",
      title: "Comparative methods",
      skill: "Apply consistent criteria to compare two plays and identify significant similarities and differences.",
      lesson: {
        sections: [
          {
            heading: "Choosing criteria",
            body: "Effective comparison uses explicit criteria: theme, character types, dramatic structure, genre conventions, language style, context. Applying the same criteria to both plays prevents cherry-picking and produces balanced analysis. Choose criteria that reveal meaningful connections or contrasts.",
          },
          {
            heading: "Similarities and differences",
            body: "Similarities reveal shared concerns, influences or universal themes. Differences reveal distinct contexts, intentions or innovations. Neither is inherently better — the significance lies in what the comparison reveals about each play's choices and circumstances.",
          },
          {
            heading: "Beyond description",
            body: "Comparison must move past 'Play A has X, Play B has Y' to explain why those choices matter: what do the differences say about the playwrights' contexts, purposes or audiences? The best comparisons end with a judgement about relative significance or achievement.",
          },
        ],
        keyFormulas: [
          { name: "Comparative criteria", statement: "Theme + structure + character + genre + context + language" },
          { name: "Comparison structure", statement: "Similarities → differences → significance of each" },
        ],
        workedExample: {
          problem: "Compare two plays about betrayal: one classical tragedy, one contemporary drama. Apply three criteria.",
          solution: "Theme: both explore betrayal's consequences. Structure: tragedy follows classic arc to downfall; contemporary may be episodic or unresolved. Context: classical reflects fate and honour; contemporary reflects psychological realism and moral ambiguity. Significance: each reveals its era's understanding of betrayal.",
        },
      },
      questions: [
        {
          id: "theatre-u4-comparison-method-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A comparative framework for plays should include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the plot summary" },
              { id: "b", text: "A consistent set of criteria applied to both plays" },
              { id: "c", text: "The actors' names" },
              { id: "d", text: "The theatre's address" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Comparative framework", statement: "Consistent criteria used to analyse plays side by side." },
            ],
            steps: [
              { reasoning: "A comparative framework is a consistent set of criteria for fair comparison.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A consistent set of criteria applied to both plays",
            commonErrors: [
              "Comparing plays without consistent criteria.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-method-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three criteria you could use to compare two plays.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparison criteria", statement: "Theme, structure, character, genre, context and language." },
            ],
            steps: [
              { reasoning: "Theme — the central idea each play explores.", marks: 1, markCode: "M" },
              { reasoning: "Structure — how each play organises its dramatic action.", marks: 1, markCode: "M" },
              { reasoning: "Character and context — how characters are constructed and the circumstances of creation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Theme, structure and character/context are valid criteria.",
            commonErrors: [
              "Comparing only plot events without analytical criteria.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-method-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why comparison should move beyond listing similarities and differences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparative significance", statement: "Comparison is meaningful only when it explains what differences reveal." },
            ],
            steps: [
              { reasoning: "Listing differences alone is descriptive, not analytical.", marks: 1, markCode: "M" },
              { reasoning: "Explaining what differences reveal about context, intention or innovation adds meaning.", marks: 1, markCode: "M" },
              { reasoning: "The best comparisons end with a judgement about relative significance.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: comparison should answer 'so what?' not just 'what is different?'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Comparison must explain significance, not merely catalogue differences.",
            commonErrors: [
              "Stopping at description without interpretation.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-method-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described plays",
            author: "Written for Akademik Space",
            source: "Comparative analysis exercise",
            text: "Play A: A classical tragedy where a nobleman's ambition leads to his downfall through a series of irreversible choices. Play B: A contemporary drama where a working-class woman's choices lead to ambiguous consequences — neither clear triumph nor defeat.",
          },
          stem: "Apply a comparative framework to two described plays.",
          parts: [
            { label: "a", prompt: "Identify one similarity between the plays.", marks: 2 },
            { label: "b", prompt: "Identify one significant difference and explain its effect.", marks: 2 },
            { label: "c", prompt: "Evaluate which play better serves its apparent purpose.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparative analysis", statement: "Same theme (ambition/consequence) treated through different conventions." },
            ],
            steps: [
              { part: "a", reasoning: "Shared theme: ambition and consequences — any valid similarity.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Similarity correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tragic downfall vs ambiguous outcome — classical vs contemporary treatment of consequence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Difference and effect explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each serves its genre's purpose — tragedy provides catharsis; contemporary drama provides moral complexity. Judgement depends on criteria.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned evaluation linked to purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Shared theme. (b) Tragic vs ambiguous outcome. (c) Each serves different genre purposes.",
            commonErrors: [
              "Declaring one play 'better' without reference to genre or purpose.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-method-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why should a comparative analysis apply the same criteria to both plays?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because criteria make the essay longer" },
              { id: "b", text: "Because consistent criteria make the comparison fair and balanced" },
              { id: "c", text: "Because both plays necessarily share a theme" },
              { id: "d", text: "Because it is quicker to write" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair comparison", statement: "The same criteria applied to both texts prevent cherry-picking." },
            ],
            steps: [
              { reasoning: "Consistent criteria ensure neither play is favoured by a rigged standard.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because consistent criteria make the comparison fair and balanced",
            commonErrors: [
              "Thinking criteria are only a formatting device rather than a fairness tool.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-method-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two criteria that could be used to compare how a tragedy and a comedy treat the same theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparison criteria", statement: "Genre conventions, tone, structure and moral outcome all shape treatment." },
            ],
            steps: [
              { reasoning: "Genre convention — how each form's rules (catharsis vs comic resolution) shape the theme.", marks: 1, markCode: "M" },
              { reasoning: "Tone — serious, satirical or light treatment of the same subject.", marks: 1, markCode: "M" },
              { reasoning: "Moral outcome — whether the theme ends in punishment, reconciliation or unresolved ambiguity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Genre conventions, tone and moral outcome are valid comparative criteria.",
            commonErrors: [
              "Describing plot events rather than criteria for analysis.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-method-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A comparison that lists similarities and differences but never explains their significance is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Analytical" },
              { id: "b", text: "Descriptive" },
              { id: "c", text: "Evaluative" },
              { id: "d", text: "Contextual" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Descriptive vs analytical", statement: "Listing features describes; explaining what they reveal analyses." },
            ],
            steps: [
              { reasoning: "Listing without interpretation only describes the texts.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Descriptive",
            commonErrors: [
              "Assuming any comparison is automatically analytical.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-method-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two plays share the theme of ambition but reach different conclusions about it. Explain how to move from noticing this similarity to arguing its significance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparative significance", statement: "Significance comes from contrasting treatment and linking it to intention or context." },
            ],
            steps: [
              { reasoning: "Identify the shared theme explicitly — ambition.", marks: 1, markCode: "M" },
              { reasoning: "Contrast how each playwright treats it — rewarded vs punished, fulfilled vs hollow.", marks: 1, markCode: "M" },
              { reasoning: "Link the contrast to context or intention — what each treatment says about its era or purpose.", marks: 1, markCode: "R" },
              { reasoning: "Conclude with a judgement about which treatment is more revealing or effective.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Move from shared theme to contrasting treatment to contextual significance to judgement.",
            commonErrors: [
              "Stopping at 'both plays are about ambition' without interpretation.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-method-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which finding would be most significant in a comparison of two plays?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Play A uses more descriptive adjectives than Play B" },
              { id: "b", text: "Both plays are set indoors" },
              { id: "c", text: "Play A treats betrayal as fate while Play B treats it as choice, revealing different worldviews" },
              { id: "d", text: "Play B has more scenes than Play A" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Significance", statement: "The most significant differences reveal intention, context or worldview." },
            ],
            steps: [
              { reasoning: "Only choice (c) links a difference to meaning about worldviews.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Play A treats betrayal as fate while Play B treats it as choice",
            commonErrors: [
              "Confusing surface detail with analytical significance.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-method-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A comparison of two plays about war notes that they end differently.",
          parts: [
            { label: "a", prompt: "State the likely difference in endings.", marks: 1 },
            { label: "b", prompt: "Explain one formal reason endings differ.", marks: 1 },
            { label: "c", prompt: "Assess how significant this difference is.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structural difference", statement: "Ending type (tragic, comic, unresolved) reflects genre and worldview." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. one ends in defeat or death, the other in survival or stalemate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Genre conventions determine whether resolution is closed, open or ironic.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The ending difference is significant because it reveals each play's stance on war's meaning.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Significance linked to dramatic purpose or worldview.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Different ending types. (b) Genre conventions. (c) Significant for what it reveals about each play's stance.",
            commonErrors: [
              "Describing the endings without assessing significance.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-method-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In comparative analysis, a 'criterion' is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The critic's final verdict" },
              { id: "b", text: "A standard applied consistently to both plays" },
              { id: "c", text: "The play's title" },
              { id: "d", text: "The theatre's seating plan" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Criterion", statement: "A consistent standard used to assess both texts." },
            ],
            steps: [
              { reasoning: "A criterion is a measuring standard applied to both plays equally.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A standard applied consistently to both plays",
            commonErrors: [
              "Confusing criteria with conclusions.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-method-q12",
          difficulty: "core",
          totalMarks: 6,
          stem: "Play A is a classical tragedy in which a general's ambition destroys his family. Play B is a contemporary drama in which a soldier's ambition leads to moral compromise but survival.",
          parts: [
            { label: "a", prompt: "Identify one meaningful similarity.", marks: 2 },
            { label: "b", prompt: "Identify one significant difference and explain its effect.", marks: 2 },
            { label: "c", prompt: "Assess which treatment better serves its genre's purpose.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparative framework", statement: "Same theme of ambition treated through tragic vs ambiguous structures." },
            ],
            steps: [
              { part: "a", reasoning: "Shared theme: ambition and its consequences — correctly identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Similarity accurately stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tragic destruction vs compromised survival — classical inevitability vs contemporary ambiguity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Difference and its effect explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Tragedy delivers catharsis through downfall; contemporary drama delivers moral complexity. Each serves its genre.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Weighed judgement linked to genre purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Shared theme of ambition. (b) Tragic vs ambiguous outcome. (c) Each serves its genre's purpose.",
            commonErrors: [
              "Judging one play 'better' without reference to genre.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-method-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Cherry-picking' in a comparative analysis refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Selecting only evidence that supports a preferred conclusion" },
              { id: "b", text: "Comparing every detail of both plays equally" },
              { id: "c", text: "Ignoring both texts completely" },
              { id: "d", text: "Using too many criteria at once" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cherry-picking", statement: "Biased selection of evidence undermines fair comparison." },
            ],
            steps: [
              { reasoning: "Cherry-picking means choosing only favourable evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Selecting only evidence that supports a preferred conclusion",
            commonErrors: [
              "Not recognising biased evidence selection as a flaw.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-method-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A classmate concludes 'Play A is simply better than Play B' after a brief comparison.",
          parts: [
            { label: "a", prompt: "State what is missing from this judgement.", marks: 2 },
            { label: "b", prompt: "Rewrite it as a fair comparative statement.", marks: 2 },
            { label: "c", prompt: "Explain why stating criteria strengthens evaluation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair judgement", statement: "'Better' is meaningless without specifying the dimension judged." },
            ],
            steps: [
              { part: "a", reasoning: "No criteria stated — better at what? Structure, theme, impact?", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Missing evidence and acknowledged limits.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "E.g. 'Play A has stronger structure; Play B has deeper characterisation' — dimension specified.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Fair comparative statement with criteria applied to both.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criteria make judgement testable, consistent and defensible.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Explanation of why explicit criteria matter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Missing criteria. (b) Dimension-specific comparison. (c) Criteria make judgements defensible.",
            commonErrors: [
              "Accepting 'better' as a self-evident judgement.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-method-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The strongest comparative conclusions usually:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Declare one play superior to the other" },
              { id: "b", text: "Weigh evidence and acknowledge the limits of the comparison" },
              { id: "c", text: "Avoid making any judgement at all" },
              { id: "d", text: "List every difference without ranking them" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Weighed conclusion", statement: "Strong conclusions weigh evidence and state limits." },
            ],
            steps: [
              { reasoning: "Weighing evidence and acknowledging limits is the hallmark of rigorous comparison.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Weigh evidence and acknowledge the limits of the comparison",
            commonErrors: [
              "Thinking good analysis must avoid judgement entirely.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-method-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare two plays on a shared theme of your choice using a full comparative framework.",
          parts: [
            { label: "a", prompt: "State the theme and at least two criteria you will apply.", marks: 2 },
            { label: "b", prompt: "Apply the criteria to identify meaningful similarities.", marks: 3 },
            { label: "c", prompt: "Apply the criteria to identify significant differences and their meaning.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparative method", statement: "Theme + consistent criteria + significance = full comparison." },
            ],
            steps: [
              { part: "a", reasoning: "Theme and criteria clearly stated.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "At least two valid criteria named.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Similarities identified using the stated criteria.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each similarity developed beyond description.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Accurate and relevant application.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Differences identified using the same criteria.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Significance of each difference explained via context or intention.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Coherent comparative conclusion reached.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Theme + criteria. (b) Developed similarities. (c) Significant differences with meaning.",
            commonErrors: [
              "Inconsistent criteria or purely descriptive comparison.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u4-comparison-evaluation",
      title: "Evaluating comparative significance",
      skill: "Judge the relative significance of similarities and differences in comparative theatre analysis.",
      lesson: {
        sections: [
          {
            heading: "What makes a comparison significant",
            body: "Not all differences matter equally. A difference in costume style is trivial; a difference in how plays treat power is profound. Significance depends on what the feature reveals about dramatic intention, cultural context or formal innovation.",
          },
          {
            heading: "Contextual significance",
            body: "Two plays may share themes but mean different things in their contexts: a play about rebellion in 1960s America means something different from the same theme in 1980s Eastern Europe. Conversely, visually different plays may share deep structural concerns. Context determines whether a similarity or difference is significant.",
          },
          {
            heading: "Making a judgement",
            body: "A strong comparative conclusion weighs the evidence: which differences are most revealing? What do they suggest about each playwright's project? Acknowledge limits — the comparison is based on available texts and interpretations, and other criteria might yield different conclusions.",
          },
        ],
        keyFormulas: [
          { name: "Significance test", statement: "Does this similarity/difference reveal intention, context or innovation?" },
          { name: "Judgement structure", statement: "Evidence → interpretation → weighed conclusion with acknowledged limits" },
        ],
        workedExample: {
          problem: "Two plays feature a character who dies at the end. Is the similarity significant?",
          solution: "Depends on context: if both are tragedies, the death serves catharsis — significant as convention. If one is comedy and one is tragedy, the same event means opposite things — highly significant. The significance lies not in the event but in what it reveals about each play's dramatic purpose.",
        },
      },
      questions: [
        {
          id: "theatre-u4-comparison-evaluation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In comparative analysis, a 'significant' difference is one that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is easiest to describe" },
              { id: "b", text: "Reveals something meaningful about intention, context or innovation" },
              { id: "c", text: "Is the most dramatic" },
              { id: "d", text: "Appears first in the text" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Significant difference", statement: "Differences matter when they reveal intention, context or innovation." },
            ],
            steps: [
              { reasoning: "Significance depends on what the difference reveals, not its size or ease of description.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reveals something meaningful about intention, context or innovation",
            commonErrors: [
              "Confusing dramatic impact with analytical significance.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-evaluation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how context can make similar plays mean different things.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Contextual meaning", statement: "The same themes activate different meanings in different cultural settings." },
            ],
            steps: [
              { reasoning: "Themes carry meanings specific to their period and culture.", marks: 1, markCode: "M" },
              { reasoning: "A play's function — entertainment, propaganda, ritual — reframes its content.", marks: 1, markCode: "M" },
              { reasoning: "Original audience vs modern audience reads differently as values change.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Context activates different meanings for the same themes.",
            commonErrors: [
              "Assuming theme similarity guarantees meaning similarity.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-evaluation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a comparative conclusion should acknowledge its limits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Acknowledging limits", statement: "Analysis is based on selected evidence and criteria; other approaches might differ." },
            ],
            steps: [
              { reasoning: "Comparisons select specific criteria — different criteria could yield different conclusions.", marks: 1, markCode: "M" },
              { reasoning: "Available evidence (texts, interpretations, context) may be incomplete.", marks: 1, markCode: "M" },
              { reasoning: "Acknowledging limits shows critical awareness rather than overclaiming certainty.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: honest analysis states what it can and cannot claim.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Limits arise from chosen criteria and available evidence; acknowledging them is good practice.",
            commonErrors: [
              "Overclaiming certainty in comparative judgement.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-evaluation-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described plays",
            author: "Written for Akademik Space",
            source: "Comparative evaluation exercise",
            text: "Play A: A Greek tragedy where a king's hubris leads to inevitable downfall witnessed by the chorus. Play B: A modern drama where a politician's corruption is exposed through journalism, ending with ambiguous accountability.",
          },
          stem: "Evaluate a comparative judgement between two described plays.",
          parts: [
            { label: "a", prompt: "State one similarity and one difference between the plays.", marks: 2 },
            { label: "b", prompt: "Explain which difference is more significant and why.", marks: 2 },
            { label: "c", prompt: "Assess the limits of this comparison.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluating comparison", statement: "Weigh which differences matter and acknowledge evidence limits." },
            ],
            steps: [
              { part: "a", reasoning: "Similarity: both about power and downfall; Difference: tragic fate vs journalistic exposure — any valid pair.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Similarity and difference correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The treatment of downfall (fate vs accountability) is more significant than surface details because it reveals different worldviews.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Significance justified with reference to meaning.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Limits: only descriptions available, no full texts, interpretations may vary, historical context incomplete.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned assessment of evidential limits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Shared theme; different treatment. (b) Treatment most significant. (c) Limited by available descriptions.",
            commonErrors: [
              "Declaring a winner without weighing evidence and limits.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-evaluation-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'significant' similarity between two plays is one that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is easiest to spot" },
              { id: "b", text: "Reveals a shared concern, influence or meaningful connection" },
              { id: "c", text: "Appears in both titles" },
              { id: "d", text: "Is the most recent addition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Significant similarity", statement: "Similarities matter when they reveal shared concerns or influence." },
            ],
            steps: [
              { reasoning: "Significance depends on what the similarity reveals, not its visibility.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reveals a shared concern, influence or meaningful connection",
            commonErrors: [
              "Equating obviousness with significance.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-evaluation-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by 'contextual significance' when comparing two plays.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Contextual significance", statement: "The same feature means different things in different historical or cultural settings." },
            ],
            steps: [
              { reasoning: "A feature's importance depends on the circumstances of each play's creation.", marks: 1, markCode: "M" },
              { reasoning: "Historical events, social values and audience expectations reframe meaning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore significance is judged relative to context, not in isolation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contextual significance means judging a feature's importance through each play's historical and cultural circumstances.",
            commonErrors: [
              "Treating significance as fixed regardless of context.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-evaluation-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two plays share a theme but were written in very different eras. The most significant comparative question is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Which play is longer?" },
              { id: "b", text: "How does each era's context reframe the theme's meaning?" },
              { id: "c", text: "Which play has more characters?" },
              { id: "d", text: "Which theatre staged it first?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Contextual meaning", statement: "Era determines what a shared theme means." },
            ],
            steps: [
              { reasoning: "Context reframes theme meaning — that is the significant question.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** How does each era's context reframe the theme's meaning?",
            commonErrors: [
              "Focusing on superficial differences instead of contextual meaning.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-evaluation-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a small formal difference can be more significant than a large surface difference when comparing plays.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Depth of significance", statement: "Significance is measured by what a difference reveals, not its size." },
            ],
            steps: [
              { reasoning: "Surface differences (setting, costume) may be large but trivial in meaning.", marks: 1, markCode: "M" },
              { reasoning: "A small formal choice (e.g. an open vs closed ending) can transform a play's meaning.", marks: 1, markCode: "M" },
              { reasoning: "Formal choices encode dramatic intention and worldview.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: judge significance by revelation, not magnitude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Significance lies in what a difference reveals about intention or worldview, not its size.",
            commonErrors: [
              "Ranking differences by how noticeable they are.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-evaluation-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A comparative analysis should acknowledge its own limits because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Critics are always uncertain people" },
              { id: "b", text: "The chosen criteria and available evidence are selected and open to interpretation" },
              { id: "c", text: "Plays are never fully understood" },
              { id: "d", text: "It makes the essay shorter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Limits of analysis", statement: "Criteria and evidence are selections; conclusions are interpretive." },
            ],
            steps: [
              { reasoning: "Criteria and evidence are chosen, so other approaches might differ.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The chosen criteria and available evidence are selected and open to interpretation",
            commonErrors: [
              "Believing analysis can be completely objective.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-evaluation-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Play A is a farce in which a class conflict resolves through marriage. Play B is a drama in which class conflict remains unresolved at the end.",
          parts: [
            { label: "a", prompt: "State one similarity between the plays.", marks: 1 },
            { label: "b", prompt: "State one significant difference.", marks: 1 },
            { label: "c", prompt: "Judge which treatment of conflict is more significant and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Genre and resolution", statement: "Comic resolution vs unresolved drama encode different views of social change." },
            ],
            steps: [
              { part: "a", reasoning: "Both centre on class conflict — correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Resolved vs unresolved ending — significant structural difference.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The unresolved ending is arguably more significant for dramatising ongoing inequality; the comic resolution offers catharsis.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement justified by reference to dramatic purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Shared theme of class conflict. (b) Resolution differs. (c) Unresolved treatment dramatises ongoing inequality.",
            commonErrors: [
              "Treating resolution type as a trivial detail.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-evaluation-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluating 'significance' in a comparison means asking:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How large or dramatic the difference appears" },
              { id: "b", text: "What the difference reveals about intention, context or innovation" },
              { id: "c", text: "Which play is more famous" },
              { id: "d", text: "How many pages the difference spans" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Significance", statement: "Significance is about revealed meaning, not size." },
            ],
            steps: [
              { reasoning: "Significance is measured by what a feature reveals, not its magnitude.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What the difference reveals about intention, context or innovation",
            commonErrors: [
              "Judging significance by dramatic impact alone.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-evaluation-q12",
          difficulty: "core",
          totalMarks: 6,
          stem: "Play A is a tragedy in which a mother's death breaks her son's world. Play B is a comedy in which a father's death becomes the occasion for family reconciliation.",
          parts: [
            { label: "a", prompt: "Explain how context (genre) shapes the meaning of death in each play.", marks: 2 },
            { label: "b", prompt: "Assess the significance of this shared theme treated so differently.", marks: 2 },
            { label: "c", prompt: "Reach a weighed comparative judgement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Thematic significance", statement: "The same theme carries opposite meanings across genres." },
            ],
            steps: [
              { part: "a", reasoning: "Tragedy treats death as irreparable loss; comedy treats it as catalyst for renewal — genre reframes meaning.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Explanation linked to genre conventions.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Highly significant: identical subject produces opposite emotional and moral outcomes.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Significance explained via contrast of treatment.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each serves its genre's purpose — catharsis vs reconciliation; judgement depends on criteria.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Weighed conclusion acknowledging genre-specific aims.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Death as loss vs catalyst. (b) Highly significant contrast. (c) Each serves its genre's purpose.",
            commonErrors: [
              "Ignoring genre when judging thematic treatment.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-evaluation-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which pair of plays would produce the richest comparative analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two plays with identical plots set in the same city" },
              { id: "b", text: "Two plays sharing a theme but written in different eras and genres" },
              { id: "c", text: "Two plays with no shared subject at all" },
              { id: "d", text: "Two plays by the same playwright with identical themes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rich comparison", statement: "Shared theme plus contextual difference yields the deepest analysis." },
            ],
            steps: [
              { reasoning: "Shared theme gives common ground; difference gives meaningful contrast.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Two plays sharing a theme but written in different eras and genres",
            commonErrors: [
              "Choosing pairs too similar or too unrelated.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-evaluation-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student argues that two visually different plays 'share nothing worth comparing.'",
          parts: [
            { label: "a", prompt: "Challenge this assumption.", marks: 2 },
            { label: "b", prompt: "Propose two deeper criteria that might reveal connections.", marks: 2 },
            { label: "c", prompt: "Evaluate whether surface difference rules out meaningful comparison.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Depth of comparison", statement: "Surface difference can mask shared structural or thematic concerns." },
            ],
            steps: [
              { part: "a", reasoning: "Visual/surface difference does not preclude shared themes, structures or concerns.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Challenge clearly articulated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "E.g. theme and dramatic structure as deeper criteria.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two valid deeper criteria proposed.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Surface difference only limits comparison if no deeper criteria are applied.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned evaluation of the claim.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Assumption challenged. (b) Deeper criteria proposed. (c) Surface difference does not rule out comparison.",
            commonErrors: [
              "Accepting surface appearance as the limit of analysis.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-evaluation-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "When weighing similarities against differences in a comparison, an analyst should prioritise:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whichever is easier to describe" },
              { id: "b", text: "Whichever reveals more about intention, context or innovation" },
              { id: "c", text: "Always the similarities" },
              { id: "d", text: "Always the differences" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Prioritising significance", statement: "Weigh by revealed meaning, not ease or type." },
            ],
            steps: [
              { reasoning: "Significance, not convenience or category, should guide prioritisation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Whichever reveals more about intention, context or innovation",
            commonErrors: [
              "Assuming similarities or differences are inherently more valuable.",
            ],
          },
        },
        {
          id: "theatre-u4-comparison-evaluation-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Play A is a 19th-century drama in which a woman's rebellion against her family is punished. Play B is a contemporary play in which a woman's rebellion against her family leads to independence. Evaluate the significance of comparing these plays.",
          parts: [
            { label: "a", prompt: "Identify the shared theme and one key contextual difference.", marks: 2 },
            { label: "b", prompt: "Explain how context shapes the treatment of rebellion.", marks: 3 },
            { label: "c", prompt: "Reach a weighed judgement on the comparison's significance and its limits.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contextual comparison", statement: "Same theme across eras reveals changing social values." },
            ],
            steps: [
              { part: "a", reasoning: "Shared theme: rebellion against family; contextual difference: era and social expectations of women.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Theme and context correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Punishment reflects 19th-century constraints on women; independence reflects contemporary individualism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Treatment linked to historical context.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Explanation is convincing and specific.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Comparison is significant as a record of changing attitudes to gender.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limits acknowledged — different genres, audiences and evidence available.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighed judgement delivered.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Rebellion theme + era difference. (b) Punishment vs independence reflects changing values. (c) Significant as cultural record, with acknowledged limits.",
            commonErrors: [
              "Ignoring era when evaluating identical themes.",
            ],
          },
        },
      ],
    },
  ],
};
