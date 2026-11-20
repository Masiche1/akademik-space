import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "theatre-u4-lesson-4-3",
  code: "4-3",
  title: "Critical Frameworks for Evaluation",
  goal: "I CAN apply critical frameworks — formalist, contextual, feminist, postcolonial — to evaluate dramatic texts.",
  standards: [
    "Critical Studies",
    "Evaluation",
  ],
  vocabulary: [
    { term: "Formalist analysis", definition: "Evaluating drama solely through dramatic structure and conventions." },
    { term: "Contextual analysis", definition: "Evaluating drama through its historical, cultural and social circumstances." },
    { term: "Feminist framework", definition: "Analysing how gender, power and representation shape a play's meaning." },
    { term: "Postcolonial framework", definition: "Analysing how colonial power relations shape representation and drama." },
    { term: "Critical framework", definition: "A lens or set of questions used to analyse drama from a particular perspective." },
    { term: "Evaluation criteria", definition: "The standards used to judge a play's success — structure, character, theme, impact." },
  ],
  concepts: [
    {
      id: "theatre-u4-critical-frameworks",
      title: "Applying critical frameworks",
      skill: "Apply formalist, contextual and ideological frameworks to evaluate dramatic texts from different angles.",
      lesson: {
        sections: [
          {
            heading: "Formalist framework",
            body: "Formalist analysis evaluates the play purely on dramatic merits: structure, character development, dialogue quality, thematic coherence. It asks: is this well-made? Is the dramatic action effective? It deliberately ignores context — useful for comparing pure dramatic achievement.",
          },
          {
            heading: "Contextual and ideological frameworks",
            body: "Contextual analysis asks how the play relates to its historical moment. **Feminist** analysis examines gender representation and power. **Postcolonial** analysis examines colonial legacies and representation of the 'other'. Each framework asks different questions and can reveal meanings invisible to formalism.",
          },
          {
            heading: "Choosing and combining frameworks",
            body: "No single framework is complete. Formalism misses social meaning; contextual analysis may excuse weak writing; ideological frameworks reveal power but may overlook craft. Strong evaluation combines frameworks: is it well-made (formalist), meaningful in context (contextual), and fair in representation (ideological)?",
          },
        ],
        keyFormulas: [
          { name: "Framework questions", statement: "Formalist: is it well-made? Contextual: what does it mean here? Ideological: who is represented and how?" },
          { name: "Combined evaluation", statement: "Craft + context + representation = fuller judgement" },
        ],
        workedExample: {
          problem: "A colonial-era play depicts indigenous people in stereotyped roles for European audiences. Evaluate it through three frameworks.",
          solution: "Formalist: well-structured plot and dialogue. Contextual: reflects colonial attitudes and dramatic conventions of its era. Postcolonial: reinforces hierarchies of civilisation vs 'savagery', serving imperial ideology. A full evaluation requires all three lenses.",
        },
      },
      questions: [
        {
          id: "theatre-u4-critical-frameworks-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A formalist analysis of drama focuses on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The playwright's biography" },
              { id: "b", text: "Dramatic structure, character and dialogue" },
              { id: "c", text: "The play's political context" },
              { id: "d", text: "The audience's reaction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Formalist analysis", statement: "Evaluation through dramatic elements independent of context." },
            ],
            steps: [
              { reasoning: "Formalism evaluates purely through dramatic structure, character and dialogue.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Dramatic structure, character and dialogue",
            commonErrors: [
              "Confusing formalism with contextual or biographical analysis.",
            ],
          },
        },
        {
          id: "theatre-u4-critical-frameworks-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two questions a feminist framework would ask about a play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Feminist questions", statement: "How are women represented? Who holds power? Whose perspective dominates?" },
            ],
            steps: [
              { reasoning: "How are women depicted — as agents, objects, victims or stereotypes?", marks: 1, markCode: "M" },
              { reasoning: "Who holds power or authority, and who is marginalised?", marks: 1, markCode: "M" },
              { reasoning: "Whose perspective structures the play — male or female gaze?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Representation, power distribution and controlling perspective are key questions.",
            commonErrors: [
              "Applying feminist framework without specific questions about gender and power.",
            ],
          },
        },
        {
          id: "theatre-u4-critical-frameworks-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the strengths and limitations of a purely formalist evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Formalist limits", statement: "Formalism excels at dramatic judgement but misses social and contextual meaning." },
            ],
            steps: [
              { reasoning: "Strength: isolates and evaluates dramatic achievement — structure, character, dialogue.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: ignores context and representation — a well-made propaganda play still propagandises.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: cannot evaluate whether the play's politics or representations are problematic.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: formalism is necessary but insufficient for full evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formalism judges craft well but misses context and ideology — necessary but incomplete.",
            commonErrors: [
              "Claiming formalism is the only valid approach.",
            ],
          },
        },
        {
          id: "theatre-u4-critical-frameworks-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described play",
            author: "Written for Akademik Space",
            source: "Critical framework exercise",
            text: "A play about factory workers fighting for rights: powerful dramatic structure, compelling characters, but all female characters are defined solely through their relationships to male leaders. Written in 1930s America.",
          },
          stem: "Evaluate a play through two different critical frameworks.",
          parts: [
            { label: "a", prompt: "State the two frameworks being applied.", marks: 2 },
            { label: "b", prompt: "Explain what each framework reveals about the play.", marks: 2 },
            { label: "c", prompt: "Assess which framework gives the more useful evaluation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multi-framework evaluation", statement: "Different lenses reveal different dimensions of the same play." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. formalist and feminist frameworks — any two valid frameworks.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two frameworks clearly stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Formalist: strong structure, compelling characters, effective dialogue. Feminist: women marginalised, defined through male relationships — reveals gender limitations.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each framework's revelation explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Feminist more revealing for this play because it exposes representation problems that formalism misses; but formalism still needed to assess craft.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on framework suitability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Formalist + feminist. (b) Craft vs gender representation. (c) Feminist more revealing for representation issues.",
            commonErrors: [
              "Applying frameworks mechanically without linking to the specific play.",
            ],
          },
        },
        {
          id: "theatre-u4-critical-frameworks-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'critical framework' is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The theatre's stage design" },
              { id: "b", text: "A lens or set of questions used to analyse drama from a particular perspective" },
              { id: "c", text: "The play's ticket price" },
              { id: "d", text: "A list of actors" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Critical framework", statement: "A perspective supplying questions for analysis." },
            ],
            steps: [
              { reasoning: "Frameworks are analytical lenses, not production elements.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A lens or set of questions used to analyse drama from a particular perspective",
            commonErrors: [
              "Confusing analytical frameworks with staging elements.",
            ],
          },
        },
        {
          id: "theatre-u4-critical-frameworks-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two questions a postcolonial framework would ask about a play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Postcolonial questions", statement: "Who is represented as 'civilised' vs 'other'? Whose voice is marginalised?" },
            ],
            steps: [
              { reasoning: "How are colonised peoples or cultures represented — as agents or stereotypes?", marks: 1, markCode: "M" },
              { reasoning: "Whose perspective structures the play — coloniser or colonised?", marks: 1, markCode: "M" },
              { reasoning: "Does the play reinforce or challenge colonial power hierarchies?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Representation of the 'other' and whose perspective dominates are key questions.",
            commonErrors: [
              "Applying postcolonial lens without specific representation questions.",
            ],
          },
        },
        {
          id: "theatre-u4-critical-frameworks-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A play praised as 'well-made' by formalist analysis may still be criticised by feminist analysis because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formalism ignores gender representation and power" },
              { id: "b", text: "Feminist critics dislike all plays" },
              { id: "c", text: "The play has too many scenes" },
              { id: "d", text: "Formalists never praise plays" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Framework blind spots", statement: "Each framework misses what others reveal." },
            ],
            steps: [
              { reasoning: "Formalist evaluation excludes representation questions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Formalism ignores gender representation and power",
            commonErrors: [
              "Thinking one framework's verdict settles all questions.",
            ],
          },
        },
        {
          id: "theatre-u4-critical-frameworks-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why no single critical framework can give a complete evaluation of a play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Framework complementarity", statement: "Each framework answers different questions and has blind spots." },
            ],
            steps: [
              { reasoning: "Formalist judges craft but misses social meaning.", marks: 1, markCode: "M" },
              { reasoning: "Contextual explains meaning but may excuse weak craft; ideological reveals power but may overlook technique.", marks: 1, markCode: "M" },
              { reasoning: "Plays are multi-dimensional — craft, context and representation all matter.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: complete evaluation combines frameworks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No framework covers all dimensions — craft, context and representation require multiple lenses.",
            commonErrors: [
              "Assuming one framework is sufficient or that frameworks contradict rather than complement.",
            ],
          },
        },
        {
          id: "theatre-u4-critical-frameworks-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Ideological frameworks (feminist, postcolonial) primarily reveal:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the plot structure" },
              { id: "b", text: "How power and representation shape meaning" },
              { id: "c", text: "The actors' salaries" },
              { id: "d", text: "The theatre's architecture" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ideological analysis", statement: "These frameworks interrogate power and representation." },
            ],
            steps: [
              { reasoning: "Ideological frameworks centre on power and representation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** How power and representation shape meaning",
            commonErrors: [
              "Confusing ideological frameworks with formalist ones.",
            ],
          },
        },
        {
          id: "theatre-u4-critical-frameworks-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A play set in a colonial outpost shows the colonisers as complex individuals and the colonised only as servants and threats.",
          parts: [
            { label: "a", prompt: "State one framework suited to this play.", marks: 1 },
            { label: "b", prompt: "Explain what this framework would reveal.", marks: 1 },
            { label: "c", prompt: "Assess what a formalist reading would miss.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Framework application", statement: "Postcolonial lens exposes representation hierarchies invisible to craft analysis." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. postcolonial (or contextual) framework — any valid choice.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reveals one-sided representation serving colonial ideology.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Formalist would judge structure and dialogue but miss the ideological work of representation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Assessment of what is missed is specific.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Postcolonial. (b) One-sided representation. (c) Formalism misses ideological content.",
            commonErrors: [
              "Choosing a framework without explaining what it reveals.",
            ],
          },
        },
        {
          id: "theatre-u4-critical-frameworks-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A contextual analysis of drama asks primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whether the dialogue is witty" },
              { id: "b", text: "How the play relates to its historical and social moment" },
              { id: "c", text: "How many acts the play has" },
              { id: "d", text: "Whether the audience clapped" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Contextual analysis", statement: "Evaluation through historical, cultural and social circumstances." },
            ],
            steps: [
              { reasoning: "Contextual analysis situates the play in its moment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** How the play relates to its historical and social moment",
            commonErrors: [
              "Confusing contextual with formalist analysis.",
            ],
          },
        },
        {
          id: "theatre-u4-critical-frameworks-q12",
          difficulty: "core",
          totalMarks: 6,
          stem: "Play: A well-structured 1930s drama about striking workers, in which all women are defined through relationships to male leaders.",
          parts: [
            { label: "a", prompt: "State two frameworks you will apply.", marks: 1 },
            { label: "b", prompt: "Explain what a formalist reading reveals.", marks: 2 },
            { label: "c", prompt: "Explain what a feminist reading reveals.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multi-lens evaluation", statement: "Formalist and feminist readings reveal different dimensions." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. formalist + feminist — any two valid frameworks.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strong structure and craft — well-made play.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Assessment specific to the play.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Women marginalised, defined relationally — gender power imbalance exposed.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Linked to specific play details.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Insightful feminist evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Two frameworks. (b) Craft strengths. (c) Gender marginalisation revealed.",
            commonErrors: [
              "Applying frameworks generically without play-specific evidence.",
            ],
          },
        },
        {
          id: "theatre-u4-critical-frameworks-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Combining multiple critical frameworks is strongest because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the essay longer" },
              { id: "b", text: "Each framework covers the blind spots of the others" },
              { id: "c", text: "Critics always disagree" },
              { id: "d", text: "It avoids making judgements" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complementary lenses", statement: "Combined frameworks yield fuller evaluation." },
            ],
            steps: [
              { reasoning: "Frameworks compensate for each other's blind spots.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Each framework covers the blind spots of the others",
            commonErrors: [
              "Thinking more frameworks just means more words.",
            ],
          },
        },
        {
          id: "theatre-u4-critical-frameworks-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A play uses beautiful verse and tight structure but glorifies colonial conquest and depicts colonised characters as childlike.",
          parts: [
            { label: "a", prompt: "Choose the framework most suited to a full evaluation.", marks: 2 },
            { label: "b", prompt: "Explain what this framework reveals that others miss.", marks: 2 },
            { label: "c", prompt: "Assess whether craft alone could justify praising this play.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Framework choice", statement: "Ideological frameworks expose content that craft analysis cannot judge." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. postcolonial framework — best suited to representation issues.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Choice clearly justified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reveals glorification of conquest and infantilising stereotypes serving imperial ideology.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Specific play details cited.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "No — formalist praise would endorse harmful representation; craft does not excuse ideology.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned assessment of craft-only evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Postcolonial. (b) Ideological content exposed. (c) Craft alone cannot justify praise.",
            commonErrors: [
              "Letting technical excellence override ethical evaluation.",
            ],
          },
        },
        {
          id: "theatre-u4-critical-frameworks-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A limitation of relying on contextual analysis alone is that it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "May excuse weak dramatic craft as 'typical of its era'" },
              { id: "b", text: "Ignores all historical facts" },
              { id: "c", text: "Cannot discuss representation" },
              { id: "d", text: "Only works for comedies" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contextual limits", statement: "Context can excuse rather than evaluate craft." },
            ],
            steps: [
              { reasoning: "Contextual analysis risks excusing poor technique as era-typical.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** May excuse weak dramatic craft as 'typical of its era'",
            commonErrors: [
              "Thinking context automatically improves a play's evaluation.",
            ],
          },
        },
        {
          id: "theatre-u4-critical-frameworks-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Play: A structurally brilliant tragedy about a queen whose power destroys her family; written in an era when female rule was contested.",
          parts: [
            { label: "a", prompt: "State three frameworks you will apply.", marks: 2 },
            { label: "b", prompt: "Explain what each framework reveals about the play.", marks: 4 },
            { label: "c", prompt: "Reach a combined evaluative judgement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Combined evaluation", statement: "Craft + context + representation = fuller judgement." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. formalist, contextual, feminist — any three valid frameworks.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Three frameworks clearly named.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Formalist: structural brilliance and tragic power. Contextual: reflects anxiety about female authority. Feminist: examines how gender shapes the queen's portrayal.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Formalist reading explained.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Contextual and feminist readings explained.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "All readings linked to play specifics.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Synthesised judgement weighing craft, era meaning and representation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Coherent combined conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Three frameworks. (b) Craft, era anxiety and gender reading. (c) Synthesised judgement.",
            commonErrors: [
              "Applying frameworks in isolation without synthesis.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u4-evaluation-criteria",
      title: "Criteria for dramatic evaluation",
      skill: "Establish and apply explicit criteria to evaluate dramatic texts across different plays.",
      lesson: {
        sections: [
          {
            heading: "Defining evaluation criteria",
            body: "Before judging, establish criteria: dramatic structure, character development, dialogue quality, thematic depth, emotional impact, originality, appropriateness to genre. Different plays succeed on different criteria — a farce succeeds on timing and wit; a tragedy on emotional power and structural inevitability.",
          },
          {
            heading: "Comparative evaluation",
            body: "When comparing, apply the same criteria to both plays. 'Play A has stronger structure; Play B has richer characters' is fair. 'Play A is better' is not — better at what? Evaluation requires specifying the dimension of comparison.",
          },
          {
            heading: "Beyond quality judgements",
            body: "Evaluation can also assess significance: does the play say something new? Does it expand dramatic possibilities? Does it matter culturally? A technically modest play can be significant; a technically brilliant one can be trivial. Distinguish 'well-made' from 'important'.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation criteria", statement: "Structure + character + dialogue + theme + impact + originality" },
          { name: "Fair comparison", statement: "Same criteria for both plays; specify the dimension judged" },
        ],
        workedExample: {
          problem: "Two plays: one technically polished but conventional, one rough but conceptually original. Evaluate using explicit criteria.",
          solution: "Criteria: structure (Play A wins), character depth (Play B wins), dialogue quality (Play A slightly ahead), thematic originality (Play B wins), emotional impact (depends). Conclusion: Play A is better made; Play B is more interesting. Neither is simply 'better' — they excel on different criteria.",
        },
      },
      questions: [
        {
          id: "theatre-u4-evaluation-criteria-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The first step in evaluating a play fairly is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decide if you liked it" },
              { id: "b", text: "Establish explicit criteria for judgement" },
              { id: "c", text: "Compare it to Shakespeare" },
              { id: "d", text: "Check ticket prices" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation criteria", statement: "Explicit criteria must precede judgement for fair evaluation." },
            ],
            steps: [
              { reasoning: "Fair evaluation requires establishing criteria before judging.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Establish explicit criteria for judgement",
            commonErrors: [
              "Judging by personal taste without criteria.",
            ],
          },
        },
        {
          id: "theatre-u4-evaluation-criteria-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three criteria you could use to evaluate a play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation criteria", statement: "Structure, character, dialogue, theme, impact and originality." },
            ],
            steps: [
              { reasoning: "Dramatic structure — organisation, pacing, resolution.", marks: 1, markCode: "M" },
              { reasoning: "Character development — depth, believability, arc.", marks: 1, markCode: "M" },
              { reasoning: "Thematic depth or emotional impact — does it say something meaningful?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Structure, character and theme/impact are core criteria.",
            commonErrors: [
              "Using only 'I liked it' as the criterion.",
            ],
          },
        },
        {
          id: "theatre-u4-evaluation-criteria-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'well-made' and 'important' are different evaluative claims.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quality vs significance", statement: "Technical excellence and cultural importance are distinct dimensions." },
            ],
            steps: [
              { reasoning: "'Well-made' judges craft — structure, dialogue, character.", marks: 1, markCode: "M" },
              { reasoning: "'Important' judges significance — originality, cultural impact, expansion of drama.", marks: 1, markCode: "M" },
              { reasoning: "A play can excel at one and fail at the other — polished but trivial, or rough but groundbreaking.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: evaluation should specify which dimension is being judged.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Craft quality and cultural significance are separate evaluative dimensions.",
            commonErrors: [
              "Conflating technical polish with artistic importance.",
            ],
          },
        },
        {
          id: "theatre-u4-evaluation-criteria-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described plays",
            author: "Written for Akademik Space",
            source: "Evaluation exercise",
            text: "Play A: A meticulously structured tragedy with complex characters and elegant dialogue. Play B: A rough-edged play with simple structure but devastating emotional honesty and original perspective on its theme.",
          },
          stem: "Evaluate two described plays using explicit criteria.",
          parts: [
            { label: "a", prompt: "State two evaluation criteria you will apply.", marks: 2 },
            { label: "b", prompt: "Apply the criteria to each play.", marks: 2 },
            { label: "c", prompt: "Reach a balanced conclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Criteria-based evaluation", statement: "Explicit criteria produce fair, defensible judgements." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. structure and emotional impact — any two valid criteria stated.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two criteria clearly stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Play A: superior structure and dialogue; Play B: greater emotional honesty and originality.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each play assessed against both criteria.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Balanced conclusion: Play A wins on craft, Play B on emotional truth — neither simply 'better'.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Weighed judgement acknowledging different strengths.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Criteria stated. (b) Craft vs emotional truth. (c) Each excels on different criteria.",
            commonErrors: [
              "Declaring a winner without specifying criteria.",
            ],
          },
        },
        {
          id: "theatre-u4-evaluation-criteria-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The first step in evaluating a play fairly is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decide whether you personally liked it" },
              { id: "b", text: "Establish explicit criteria before judging" },
              { id: "c", text: "Compare it to the most famous play" },
              { id: "d", text: "Check the reviews first" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Criteria first", statement: "Explicit criteria must precede judgement." },
            ],
            steps: [
              { reasoning: "Fair evaluation requires criteria established before judgement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Establish explicit criteria before judging",
            commonErrors: [
              "Judging by personal reaction without criteria.",
            ],
          },
        },
        {
          id: "theatre-u4-evaluation-criteria-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three criteria you could use to evaluate a play's dramatic achievement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation criteria", statement: "Structure, character, dialogue, theme, impact and originality." },
            ],
            steps: [
              { reasoning: "Dramatic structure — organisation, pacing, resolution.", marks: 1, markCode: "M" },
              { reasoning: "Character development — depth, believability, arc.", marks: 1, markCode: "M" },
              { reasoning: "Dialogue quality, thematic depth or emotional impact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Structure, character and theme/impact are core criteria.",
            commonErrors: [
              "Using only personal preference as a criterion.",
            ],
          },
        },
        {
          id: "theatre-u4-evaluation-criteria-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A farce should primarily be evaluated on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tragic weight and inevitability" },
              { id: "b", text: "Comic timing, wit and effective resolution of confusion" },
              { id: "c", text: "Historical accuracy" },
              { id: "d", text: "Poetic language" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Genre-appropriate criteria", statement: "Different genres succeed on different criteria." },
            ],
            steps: [
              { reasoning: "Farce succeeds through timing, wit and comic mechanics.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Comic timing, wit and effective resolution of confusion",
            commonErrors: [
              "Applying tragedy criteria to comedy.",
            ],
          },
        },
        {
          id: "theatre-u4-evaluation-criteria-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a play being 'well-made' and being 'important.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quality vs significance", statement: "Craft excellence and cultural importance are separate dimensions." },
            ],
            steps: [
              { reasoning: "'Well-made' judges craft — structure, dialogue, character.", marks: 1, markCode: "M" },
              { reasoning: "'Important' judges significance — originality, impact, expansion of drama.", marks: 1, markCode: "M" },
              { reasoning: "A play can excel at one and fail at the other.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: evaluation must specify which dimension is claimed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Craft quality and cultural significance are distinct evaluative claims.",
            commonErrors: [
              "Conflating technical polish with artistic importance.",
            ],
          },
        },
        {
          id: "theatre-u4-evaluation-criteria-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The judgement 'Play A is better than Play B' is unfair primarily because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It specifies no dimension or criteria" },
              { id: "b", text: "It is always wrong" },
              { id: "c", text: "It compares different genres" },
              { id: "d", text: "It uses too few words" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dimension-specific judgement", statement: "'Better' requires stating better at what." },
            ],
            steps: [
              { reasoning: "Without criteria the judgement is untestable and vague.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It specifies no dimension or criteria",
            commonErrors: [
              "Thinking any comparative verdict is acceptable.",
            ],
          },
        },
        {
          id: "theatre-u4-evaluation-criteria-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Play A: polished structure, conventional themes. Play B: rough structure, original perspective and emotional honesty.",
          parts: [
            { label: "a", prompt: "State one criterion on which each play would win.", marks: 2 },
            { label: "b", prompt: "Explain why neither is simply 'better.'", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Criteria-based verdict", statement: "Different criteria produce different winners." },
            ],
            steps: [
              { part: "a", reasoning: "Play A wins on structure/craft; Play B wins on originality/emotional impact.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both criterion-winners correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "'Better' depends on which criterion is weighted — craft vs significance.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Explanation of criterion-dependence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Craft vs originality. (b) Winner depends on weighted criteria.",
            commonErrors: [
              "Forcing a single winner across all criteria.",
            ],
          },
        },
        {
          id: "theatre-u4-evaluation-criteria-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Good evaluation criteria should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vague and flexible" },
              { id: "b", text: "Explicit and applied consistently" },
              { id: "c", text: "Different for each play" },
              { id: "d", text: "Chosen after the verdict" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Explicit criteria", statement: "Consistency and clarity make evaluation fair." },
            ],
            steps: [
              { reasoning: "Explicit, consistently applied criteria produce fair judgements.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Explicit and applied consistently",
            commonErrors: [
              "Changing criteria mid-analysis to favour a conclusion.",
            ],
          },
        },
        {
          id: "theatre-u4-evaluation-criteria-q12",
          difficulty: "core",
          totalMarks: 6,
          stem: "Play: A modestly staged play with plain dialogue but a devastating final image that reframes everything before it.",
          parts: [
            { label: "a", prompt: "State three evaluation criteria you will apply.", marks: 2 },
            { label: "b", prompt: "Apply each criterion to the play.", marks: 2 },
            { label: "c", prompt: "Reach a balanced evaluative conclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multi-criteria evaluation", statement: "Different criteria reward different strengths." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. dialogue quality, structural impact, emotional effect — any three valid.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Three criteria clearly stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Plain dialogue but powerful structural/emotional payoff — each criterion applied.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Assessment specific to play details.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Balanced conclusion — modest craft but significant impact; neither simply 'good' or 'bad'.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Weighed evaluative judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Three criteria. (b) Plain craft vs powerful impact. (c) Balanced conclusion.",
            commonErrors: [
              "Judging only on surface polish or only on emotional effect.",
            ],
          },
        },
        {
          id: "theatre-u4-evaluation-criteria-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In evaluation, 'significance' most often refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How long the play runs" },
              { id: "b", text: "Originality, cultural impact and expansion of dramatic possibility" },
              { id: "c", text: "The number of set changes" },
              { id: "d", text: "The playwright's fame" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Significance in evaluation", statement: "Importance beyond technical quality." },
            ],
            steps: [
              { reasoning: "Significance concerns originality and impact, not production scale.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Originality, cultural impact and expansion of dramatic possibility",
            commonErrors: [
              "Confusing significance with scale or fame.",
            ],
          },
        },
        {
          id: "theatre-u4-evaluation-criteria-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A play is technically flawless but says nothing new; another is technically rough but opens a new dramatic possibility.",
          parts: [
            { label: "a", prompt: "State the criteria on which each play excels.", marks: 2 },
            { label: "b", prompt: "Explain the tension between craft and significance.", marks: 2 },
            { label: "c", prompt: "Reach a weighed judgement on overall value.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Craft vs significance", statement: "Technical excellence and cultural importance can diverge." },
            ],
            steps: [
              { part: "a", reasoning: "Play A: craft criteria; Play B: originality/significance criteria.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Flawless craft can serve trivial content; rough craft can carry groundbreaking ideas — dimensions conflict.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Tension explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Weighed judgement — e.g. B more valuable culturally, A more accomplished formally; depends on weighting.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement acknowledges both dimensions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Craft vs originality. (b) Dimensions can conflict. (c) Weighed judgement on value.",
            commonErrors: [
              "Declaring one play superior without weighing both dimensions.",
            ],
          },
        },
        {
          id: "theatre-u4-evaluation-criteria-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Different genres require different evaluation criteria because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Success means different things in different forms" },
              { id: "b", text: "Criteria are arbitrary" },
              { id: "c", text: "Genres never overlap" },
              { id: "d", text: "It makes evaluation easier" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Genre-specific criteria", statement: "Each genre has its own markers of success." },
            ],
            steps: [
              { reasoning: "A farce, tragedy and documentary each succeed differently.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Success means different things in different forms",
            commonErrors: [
              "Applying one universal standard to all genres.",
            ],
          },
        },
        {
          id: "theatre-u4-evaluation-criteria-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Conduct a comparative evaluation of two plays using explicit criteria.",
          parts: [
            { label: "a", prompt: "State at least three criteria and justify them.", marks: 2 },
            { label: "b", prompt: "Apply the criteria to each play with specific evidence.", marks: 4 },
            { label: "c", prompt: "Reach a balanced comparative conclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair comparative evaluation", statement: "Same criteria + specific evidence + weighed conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Three valid criteria stated and justified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Criteria clearly explained.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each play assessed against each criterion with specific evidence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evidence specific to Play A.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Evidence specific to Play B.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Consistent application across both plays.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Balanced conclusion weighing strengths on each criterion.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Coherent final judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Criteria justified. (b) Evidence-based application. (c) Balanced conclusion.",
            commonErrors: [
              "Declaring a winner without criterion-specific evidence.",
            ],
          },
        },
      ],
    },
  ],
};
