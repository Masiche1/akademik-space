import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "va-u4-lesson-4-3",
  code: "4-3",
  title: "Critical Frameworks for Evaluation",
  goal: "I CAN apply critical frameworks — formalist, contextual, feminist, postcolonial — to evaluate artworks.",
  standards: [
    "Critical Studies",
    "Evaluation",
  ],
  vocabulary: [
    { term: "Formalist analysis", definition: "Evaluating art solely through formal elements — line, colour, composition — independent of context." },
    { term: "Contextual analysis", definition: "Evaluating art through its historical, cultural and social circumstances." },
    { term: "Feminist framework", definition: "Analysing how gender, power and representation shape an artwork's meaning." },
    { term: "Postcolonial framework", definition: "Analysing how colonial power relations shape representation and artistic production." },
    { term: "Critical framework", definition: "A lens or set of questions used to analyse and evaluate art from a particular perspective." },
    { term: "Evaluation criteria", definition: "The standards used to judge an artwork's success — coherence, originality, technical skill, conceptual depth." },
  ],
  concepts: [
    {
      id: "va-u4-critical-frameworks",
      title: "Applying critical frameworks",
      skill: "Apply formalist, contextual and ideological frameworks to evaluate artworks from different analytical angles.",
      lesson: {
        sections: [
          {
            heading: "Formalist framework",
            body: "Formalist analysis evaluates the work purely on visual merits: composition, colour, technique, originality of form. It asks: is this well-made? Is the visual structure coherent? It deliberately ignores context — useful for comparing purely visual achievement.",
          },
          {
            heading: "Contextual and ideological frameworks",
            body: "Contextual analysis asks how the work relates to its historical moment. **Feminist** analysis examines gender representation and power. **Postcolonial** analysis examines colonial legacies and representation of the 'other'. Each framework asks different questions and can reveal meanings invisible to formalism.",
          },
          {
            heading: "Choosing and combining frameworks",
            body: "No single framework is complete. Formalism misses social meaning; contextual analysis may excuse weak execution; ideological frameworks reveal power but may overlook craft. Strong evaluation combines frameworks: is it well-made (formalist), meaningful in context (contextual), and fair in representation (ideological)?",
          },
        ],
        keyFormulas: [
          { name: "Framework questions", statement: "Formalist: is it well-made? Contextual: what does it mean here? Ideological: who is represented and how?" },
          { name: "Combined evaluation", statement: "Craft + context + representation = fuller judgement" },
        ],
        workedExample: {
          problem: "A colonial-era painting depicts indigenous people in stereotyped poses for a European audience. Evaluate it through three frameworks.",
          solution: "Formalist: technically skilled composition and colour. Contextual: reflects colonial gaze and ethnographic display conventions of its era. Postcolonial: reinforces hierarchies of civilisation vs 'savagery', serving imperial ideology. A full evaluation requires all three lenses.",
        },
      },
      questions: [
        {
          id: "va-u4-critical-frameworks-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A formalist analysis of art focuses on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formal elements like line, colour and composition" },
              { id: "b", text: "The artist's biography" },
              { id: "c", text: "The artwork's market value" },
              { id: "d", text: "The political context of creation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Formalist analysis", statement: "Evaluation through formal elements independent of context." },
            ],
            steps: [
              { reasoning: "Formalism evaluates purely through visual elements — line, colour, composition, technique.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Formal elements like line, colour and composition",
            commonErrors: [
              "Confusing formalism with contextual or biographical analysis.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two questions a feminist framework would ask about an artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Feminist questions", statement: "How are women represented? Who holds power? Whose gaze dominates?" },
            ],
            steps: [
              { reasoning: "How are women depicted — as agents, muses, victims or objects?", marks: 1, markCode: "M" },
              { reasoning: "Who holds power or authority in the image, and who is passive or marginalised?", marks: 1, markCode: "M" },
              { reasoning: "Whose gaze structures the image — who looks and who is looked at?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Representation, power distribution and the controlling gaze are key feminist questions.",
            commonErrors: [
              "Applying feminist framework without specific questions about gender and power.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the strengths and limitations of a purely formalist evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Formalist limits", statement: "Formalism excels at visual judgement but misses social and contextual meaning." },
            ],
            steps: [
              { reasoning: "Strength: isolates and evaluates visual achievement — composition, technique, originality.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: ignores context, meaning and representation — a well-made propaganda poster still propagandises.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: cannot evaluate whether the work's subject or politics are problematic.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: formalism is necessary but insufficient for full evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formalism judges craft well but misses context and ideology — necessary but incomplete.",
            commonErrors: [
              "Claiming formalism is the only valid approach to evaluation.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described artwork",
            author: "Written for Akademik Space",
            source: "Critical framework exercise",
            text: "A photograph shows a factory worker at a machine, face lit dramatically, surrounded by shadows and sparks. The composition is powerful and technically accomplished; the image was commissioned by the factory's owner for a company magazine.",
          },
          stem: "Evaluate an artwork through two different critical frameworks.",
          parts: [
            { label: "a", prompt: "State the two frameworks being applied.", marks: 2 },
            { label: "b", prompt: "Explain what each framework reveals about the work.", marks: 2 },
            { label: "c", prompt: "Assess which framework gives the more useful evaluation for this work.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multi-framework evaluation", statement: "Different lenses reveal different dimensions of the same work." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. formalist and contextual frameworks — any two valid frameworks.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two frameworks clearly stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Formalist: powerful composition, dramatic lighting, technical skill. Contextual: commissioned image serving industrial PR, shaping worker as heroic or compliant.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each framework's revelation explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Contextual is more revealing for a commissioned image because it exposes purpose and power; formalism alone would miss the PR function.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on framework suitability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Formalist + contextual. (b) Craft vs commissioned purpose. (c) Contextual more revealing given the commission.",
            commonErrors: [
              "Applying frameworks mechanically without linking to the specific work.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A postcolonial framework primarily examines:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The colour theory of a work" },
              { id: "b", text: "The style of its frame" },
              { id: "c", text: "How colonial power relations shape representation and artistic production" },
              { id: "d", text: "Painting techniques and brushwork" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Postcolonial framework", statement: "Analysing how colonial power relations shape representation and artistic production." },
            ],
            steps: [
              { reasoning: "Postcolonial analysis addresses colonial power, representation and the 'other'.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** How colonial power relations shape representation and artistic production",
            commonErrors: [
              "Confusing postcolonial analysis with purely formal or stylistic study.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A feminist framework would focus primarily on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The artist's signature style" },
              { id: "b", text: "The market price of the work" },
              { id: "c", text: "Gender representation, power distribution and the controlling gaze" },
              { id: "d", text: "The weave of the canvas" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Feminist framework", statement: "Analysing how gender, power and representation shape an artwork's meaning." },
            ],
            steps: [
              { reasoning: "Feminist analysis centres on gender, power and the gaze.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Gender representation, power distribution and the controlling gaze",
            commonErrors: [
              "Confusing feminist analysis with general social commentary.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is formalism described as 'necessary but insufficient' for evaluating art?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it requires no analytical skill" },
              { id: "b", text: "Because it only works for sculpture" },
              { id: "c", text: "Because it is too expensive to practice" },
              { id: "d", text: "Because it judges visual craft well but misses context, meaning and representation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Formalist limits", statement: "Formalism excels at visual judgement but misses social and contextual meaning." },
            ],
            steps: [
              { reasoning: "Formalism is necessary for craft evaluation but blind to context and ideology.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Because it judges visual craft well but misses context, meaning and representation",
            commonErrors: [
              "Claiming formalism is either useless or complete.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A contextual framework asks primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Did the artist sign it?" },
              { id: "b", text: "Is the composition balanced?" },
              { id: "c", text: "How does the work relate to its historical, cultural and social moment?" },
              { id: "d", text: "Is the paint expensive?" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Contextual analysis", statement: "Evaluating art through its historical, cultural and social circumstances." },
            ],
            steps: [
              { reasoning: "Contextual analysis situates the work within its historical and social moment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** How does the work relate to its historical, cultural and social moment?",
            commonErrors: [
              "Confusing contextual questions with purely formal ones.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why no single critical framework can fully evaluate an artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Framework limits", statement: "Each framework asks different questions and has characteristic blind spots." },
            ],
            steps: [
              { reasoning: "Each framework asks a different set of questions — craft, context, gender, power.", marks: 1, markCode: "M" },
              { reasoning: "Each has blind spots: formalism misses meaning; contextual analysis may excuse weak execution.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: fuller evaluation requires combining frameworks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No single framework sees all dimensions; combining them yields fuller judgement.",
            commonErrors: [
              "Claiming one framework is universally sufficient.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe three questions a postcolonial framework would ask about an artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Postcolonial questions", statement: "Whose culture is represented? Whose gaze dominates? What power relations are encoded?" },
            ],
            steps: [
              { reasoning: "How are colonised peoples or cultures represented — as agents or as 'exotic' objects?", marks: 1, markCode: "M" },
              { reasoning: "Whose perspective or gaze structures the image?", marks: 1, markCode: "M" },
              { reasoning: "What colonial power relations or hierarchies does the work reinforce or challenge?", marks: 1, markCode: "M" },
              { reasoning: "Questions are framed as postcolonial analysis of representation and power.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Representation of the colonised, controlling gaze and encoded power relations are key postcolonial questions.",
            commonErrors: [
              "Asking generic questions without a postcolonial focus on power and representation.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that 'a technically brilliant but politically harmful image is still a success.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Framework-dependent evaluation", statement: "Judgements of success depend on which criteria and frameworks are applied." },
            ],
            steps: [
              { reasoning: "A formalist would agree — technical brilliance is craft success.", marks: 1, markCode: "M" },
              { reasoning: "A contextual or ideological framework would challenge this — propaganda or harmful imagery fails on meaning.", marks: 1, markCode: "M" },
              { reasoning: "The claim depends on whether 'success' means craft or ethical/contextual value.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the claim is defensible only under a purely formalist standard.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Only under formalism; ideological frameworks would call harmful imagery a failure.",
            commonErrors: [
              "Accepting or rejecting the claim without specifying the evaluative standard.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "A museum portrait shows a European coloniser surrounded by 'exotic' figures in staged poses. Analyse it through a formalist and a postcolonial framework.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multi-framework analysis", statement: "Different lenses reveal different dimensions of the same image." },
            ],
            steps: [
              { reasoning: "Formalist reading: composition, colour, technique and finish as pure visual achievement.", marks: 1, markCode: "M" },
              { reasoning: "Postcolonial reading: staged exoticism reinforces hierarchies of civilised versus 'savage'.", marks: 1, markCode: "M" },
              { reasoning: "Comparison shows formalism sees craft while postcolonialism sees ideology — complementary, not contradictory.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: a full evaluation needs both craft assessment and power analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formalist sees a well-made image; postcolonial sees colonial ideology — both needed.",
            commonErrors: [
              "Applying one framework and ignoring what the other reveals.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Choosing and combining frameworks' in evaluation means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Applying multiple analytical lenses to reach a fuller judgement" },
              { id: "b", text: "Using only the formalist framework" },
              { id: "c", text: "Avoiding analysis entirely" },
              { id: "d", text: "Using whichever framework is newest" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Combined evaluation", statement: "Craft + context + representation = fuller judgement." },
            ],
            steps: [
              { reasoning: "Combining frameworks broadens what the evaluation can see.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Applying multiple analytical lenses to reach a fuller judgement",
            commonErrors: [
              "Assuming one framework alone suffices for evaluation.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A work can be 'well-made' yet ethically problematic because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Problematic automatically means ugly" },
              { id: "b", text: "Only bad art can be problematic" },
              { id: "c", text: "Craft excellence and ethical or contextual soundness are separate dimensions" },
              { id: "d", text: "Well-made works can never be problematic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quality vs significance", statement: "Technical excellence and ethical or contextual value are distinct criteria." },
            ],
            steps: [
              { reasoning: "Craft quality and ethical/contextual soundness are judged on different dimensions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Craft excellence and ethical or contextual soundness are separate dimensions",
            commonErrors: [
              "Conflating aesthetic quality with moral or contextual value.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State the main critical frameworks discussed and one question each one asks about an artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Critical frameworks", statement: "Each framework poses a characteristic set of questions." },
            ],
            steps: [
              { reasoning: "Formalist framework named with its craft-focused question.", marks: 1, markCode: "M" },
              { reasoning: "Contextual framework named with its historical/social question.", marks: 1, markCode: "M" },
              { reasoning: "An ideological framework (feminist or postcolonial) named with a power/representation question.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formalist asks 'is it well-made?'; contextual asks 'what does it mean here?'; ideological asks 'who is represented and how?'",
            commonErrors: [
              "Listing frameworks without stating the questions they ask.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q16",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "Described artwork",
            author: "Written for Akademik Space",
            source: "Critical framework exercise",
            text: "A glossy advertising image shows a woman in a bikini on a beach, photographed from behind, gazing at a product placed at the edge of the frame. The lighting and retouching are technically flawless.",
          },
          stem: "Evaluate the described artwork through two critical frameworks.",
          parts: [
            { label: "a", prompt: "State the two frameworks being applied.", marks: 2 },
            { label: "b", prompt: "Explain what each framework reveals about the work.", marks: 2 },
            { label: "c", prompt: "Assess which framework is more revealing for this work.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multi-framework evaluation", statement: "Formal and ideological lenses reveal different dimensions of an image." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. formalist and feminist frameworks — any two valid frameworks.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two frameworks clearly stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Formalist: flawless lighting, retouching and composition. Feminist: female body as object of the male gaze serving commerce.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each framework's revelation explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The ideological framework is more revealing because it exposes the gaze and commodification.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Formalist + feminist. (b) Craft vs commodified gaze. (c) Feminist more revealing.",
            commonErrors: [
              "Praising technical quality while ignoring representational politics.",
            ],
          },
        },
        {
          id: "va-u4-critical-frameworks-q17",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described artwork",
            author: "Written for Akademik Space",
            source: "Critical framework exercise",
            text: "An early 20th-century ethnographic photograph shows indigenous people posed stiffly before a painted backdrop, taken by a colonial administrator for an exhibition on 'native life'.",
          },
          stem: "Apply three critical frameworks to evaluate the described artwork.",
          parts: [
            { label: "a", prompt: "State the three frameworks being applied.", marks: 2 },
            { label: "b", prompt: "Explain what each framework reveals about the work.", marks: 2 },
            { label: "c", prompt: "Assess which framework gives the most complete evaluation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multi-framework evaluation", statement: "Craft, context and power each reveal different dimensions." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. formalist, contextual and postcolonial frameworks — any three valid frameworks.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Three frameworks clearly stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Formalist: staged composition and period photographic technique. Contextual: colonial exhibition conventions. Postcolonial: staged 'native' poses reinforce civilisational hierarchy.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each framework's revelation explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Postcolonial is most revealing because the work's harm lies in its staged hierarchy, not its technique; formalism alone misses this.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on framework completeness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Formalist + contextual + postcolonial. (b) Technique vs colonial gaze. (c) Postcolonial most revealing of harm.",
            commonErrors: [
              "Judging the image only by photographic quality.",
            ],
          },
        },
      ],
    },
    {
      id: "va-u4-evaluation-criteria",
      title: "Criteria for artistic evaluation",
      skill: "Establish and apply explicit criteria to evaluate artistic success across different works.",
      lesson: {
        sections: [
          {
            heading: "Defining evaluation criteria",
            body: "Before judging, establish criteria: technical skill, compositional coherence, originality, conceptual depth, emotional power, appropriateness to purpose. Different artworks succeed on different criteria — a sketch succeeds on economy; a mural on scale and public impact. State your criteria before evaluating.",
          },
          {
            heading: "Comparative evaluation",
            body: "When comparing, apply the same criteria to both works. 'Work A has stronger composition; Work B has richer colour' is fair. 'Work A is better' is not — better at what? Evaluation requires specifying the dimension of comparison.",
          },
          {
            heading: "Beyond quality judgements",
            body: "Evaluation can also assess significance: does the work say something new? Does it expand the medium? Does it matter culturally? A technically modest work can be significant; a technically brilliant one can be trivial. Distinguish 'well-made' from 'important'.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation criteria", statement: "Skill + coherence + originality + depth + power + purpose-fit" },
          { name: "Fair comparison", statement: "Same criteria for both works; specify the dimension judged" },
        ],
        workedExample: {
          problem: "Two student artworks: one technically polished but conventional, one rough but conceptually original. Evaluate using explicit criteria.",
          solution: "Criteria: technical skill (Work A wins), originality (Work B wins), coherence (Work A slightly ahead), conceptual depth (Work B wins). Conclusion: Work A is better made; Work B is more interesting. Neither is simply 'better' — they excel on different criteria.",
        },
      },
      questions: [
        {
          id: "va-u4-evaluation-criteria-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The first step in evaluating an artwork fairly is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Establish explicit criteria for judgement" },
              { id: "b", text: "Decide if you like it" },
              { id: "c", text: "Compare it to the most famous artwork" },
              { id: "d", text: "Check its price" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation criteria", statement: "Explicit criteria must precede judgement for fair evaluation." },
            ],
            steps: [
              { reasoning: "Fair evaluation requires establishing criteria before judging.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Establish explicit criteria for judgement",
            commonErrors: [
              "Judging by personal taste without criteria.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three criteria you could use to evaluate a visual artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation criteria", statement: "Skill, coherence, originality, depth, power and purpose-fit are valid criteria." },
            ],
            steps: [
              { reasoning: "Technical skill — control of medium, technique, finish.", marks: 1, markCode: "M" },
              { reasoning: "Compositional coherence — organisation, balance, unity.", marks: 1, markCode: "M" },
              { reasoning: "Originality or conceptual depth — does it say something new or meaningful?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Skill, coherence and originality/depth are core evaluation criteria.",
            commonErrors: [
              "Using only 'I like it' as the criterion.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'well-made' and 'important' are different evaluative claims.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quality vs significance", statement: "Technical excellence and cultural/artistic importance are distinct dimensions." },
            ],
            steps: [
              { reasoning: "'Well-made' judges craft — skill, finish, compositional control.", marks: 1, markCode: "M" },
              { reasoning: "'Important' judges significance — originality, cultural impact, expansion of the medium.", marks: 1, markCode: "M" },
              { reasoning: "A work can excel at one and fail at the other — polished but trivial, or rough but groundbreaking.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: evaluation should specify which dimension is being judged.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Craft quality and cultural significance are separate evaluative dimensions.",
            commonErrors: [
              "Conflating technical polish with artistic importance.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Evaluation exercise",
            text: "Work A: A meticulously rendered graphite drawing of a skull, every detail precise, on toned paper. Work B: A bold gestural painting of a skull, thick paint, expressive marks, limited palette of black and red.",
          },
          stem: "Evaluate two described artworks using explicit criteria.",
          parts: [
            { label: "a", prompt: "State two evaluation criteria you will apply.", marks: 2 },
            { label: "b", prompt: "Apply the criteria to each work.", marks: 2 },
            { label: "c", prompt: "Reach a balanced conclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Criteria-based evaluation", statement: "Explicit criteria produce fair, defensible judgements." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. technical skill and expressive power — any two valid criteria stated.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two criteria clearly stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Work A: superior technical control, precision; Work B: greater expressive energy, boldness.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each work assessed against both criteria.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Balanced conclusion: Work A wins on skill, Work B on expression — neither simply 'better'.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Weighed judgement acknowledging different strengths.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Criteria stated. (b) Skill vs expression. (c) Each excels on different criteria.",
            commonErrors: [
              "Declaring a winner without specifying criteria.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Compositional coherence' as an evaluation criterion judges:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How well the elements are organised into a unified whole" },
              { id: "b", text: "The fame of the artist" },
              { id: "c", text: "The market value of the work" },
              { id: "d", text: "The colour of the frame" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compositional coherence", statement: "The organisation of elements into a unified, balanced whole." },
            ],
            steps: [
              { reasoning: "Coherence judges how well elements are organised into unity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** How well the elements are organised into a unified whole",
            commonErrors: [
              "Confusing coherence with technical finish or originality.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Comparing two artworks fairly requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Judging whichever one you personally prefer" },
              { id: "b", text: "Choosing the physically larger work" },
              { id: "c", text: "Using different criteria for each work" },
              { id: "d", text: "Applying the same criteria to both and specifying the dimension judged" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fair comparison", statement: "Same criteria for both works; specify the dimension judged." },
            ],
            steps: [
              { reasoning: "Fair comparison applies identical criteria and names the dimension judged.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Applying the same criteria to both and specifying the dimension judged",
            commonErrors: [
              "Comparing by preference or applying inconsistent criteria.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Originality' as an evaluation criterion refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whether the work uses rare materials" },
              { id: "b", text: "Whether the work is signed" },
              { id: "c", text: "Whether the work is the most expensive" },
              { id: "d", text: "Whether the work says or does something new or distinctive" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Originality", statement: "Whether a work contributes something new or distinctive." },
            ],
            steps: [
              { reasoning: "Originality judges novelty of idea or treatment, not price, signature or materials.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Whether the work says or does something new or distinctive",
            commonErrors: [
              "Confusing originality with expense or rarity.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rough sketch that powerfully captures an idea may best succeed on the criterion of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colour richness" },
              { id: "b", text: "Monumental scale" },
              { id: "c", text: "Economy of means and expressive power" },
              { id: "d", text: "Technical finish" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purpose-fit", statement: "Different works succeed on different criteria; sketches succeed on economy and expression." },
            ],
            steps: [
              { reasoning: "A sketch's strength is economy and expressive directness, not finish.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Economy of means and expressive power",
            commonErrors: [
              "Judging all works by the criteria suited to a different genre.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why stating evaluation criteria before judging produces fairer assessments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Criteria-based evaluation", statement: "Explicit criteria prevent taste-only judgement and enable consistent comparison." },
            ],
            steps: [
              { reasoning: "Without criteria, judgement collapses into personal preference ('I like it').", marks: 1, markCode: "M" },
              { reasoning: "With criteria, different works can be assessed consistently and compared fairly.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: criteria make evaluation explicit, defensible and comparable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Explicit criteria replace taste with stated standards, enabling fair and consistent judgement.",
            commonErrors: [
              "Claiming criteria are unnecessary because judgement is 'obvious'.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how 'appropriateness to purpose' can function as an evaluation criterion, using a public mural and a private sketchbook drawing as examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purpose-fit", statement: "A work succeeds when its form matches the demands of its function and audience." },
            ],
            steps: [
              { reasoning: "Purpose determines which criteria are relevant — a public mural must be legible at distance and address a community.", marks: 1, markCode: "M" },
              { reasoning: "A private sketchbook drawing succeeds on intimacy and economy, not public impact.", marks: 1, markCode: "M" },
              { reasoning: "Judging each by the other's criteria would be unfair — mismatch of purpose and evaluation.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: appropriateness to purpose is a valid evaluative criterion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Works succeed when evaluated against criteria suited to their function and audience.",
            commonErrors: [
              "Applying one set of criteria regardless of a work's purpose.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a technically modest work can be more significant than a technically brilliant one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quality vs significance", statement: "Technical excellence and artistic importance are distinct evaluative dimensions." },
            ],
            steps: [
              { reasoning: "'Significant' judges originality, cultural impact or expansion of the medium; 'well-made' judges craft.", marks: 1, markCode: "M" },
              { reasoning: "A rough but conceptually groundbreaking work can matter more than a polished but trivial one.", marks: 1, markCode: "M" },
              { reasoning: "The distinction means evaluation must specify which dimension is being judged.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: modest craft does not preclude major significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Significance and craft are separate dimensions; a modest work can be important.",
            commonErrors: [
              "Conflating technical polish with artistic importance.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Two student works are presented: a polished but conventional portrait, and a rough but conceptually original self-portrait. Evaluate both using explicit criteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Criteria-based evaluation", statement: "Explicit criteria reveal that different works excel on different dimensions." },
            ],
            steps: [
              { reasoning: "Apply the same criteria to both works, e.g. technical skill and originality.", marks: 1, markCode: "M" },
              { reasoning: "Work A wins on technical skill; Work B wins on originality and conceptual depth.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: neither is simply 'better' — they excel on different criteria.", marks: 1, markCode: "R" },
              { reasoning: "Evaluation specifies dimensions rather than declaring a winner.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Polished wins on craft; original wins on concept — each excels on different criteria.",
            commonErrors: [
              "Declaring one work 'better' without specifying criteria.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The statement 'Work A is better' is weak evaluation because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is always false" },
              { id: "b", text: "It uses too many words" },
              { id: "c", text: "It mentions the work by name" },
              { id: "d", text: "It does not specify the criterion or dimension of judgement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation criteria", statement: "Evaluation must specify the dimension on which judgement is made." },
            ],
            steps: [
              { reasoning: "'Better' without a criterion is undefined and unverifiable.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** It does not specify the criterion or dimension of judgement",
            commonErrors: [
              "Accepting vague superlatives as valid evaluation.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which criterion would most favour a minimalist sculpture over an ornate one?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Economy of means and formal purity" },
              { id: "b", text: "Monumental size" },
              { id: "c", text: "Variety of colour" },
              { id: "d", text: "Technical finish" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Criteria and genre", statement: "Different styles succeed on different criteria; minimalism favours economy and purity." },
            ],
            steps: [
              { reasoning: "Minimalist work is judged on economy and formal purity rather than richness.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Economy of means and formal purity",
            commonErrors: [
              "Judging minimalism by criteria suited to ornamented work.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State two criteria suited to evaluating a large public mural and one criterion suited to a small intimate drawing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose-fit criteria", statement: "Evaluation criteria should match the work's scale, function and audience." },
            ],
            steps: [
              { reasoning: "First mural criterion named, e.g. legibility at distance or public impact.", marks: 1, markCode: "M" },
              { reasoning: "Second mural criterion named, e.g. thematic clarity for a community audience.", marks: 1, markCode: "M" },
              { reasoning: "Drawing criterion named, e.g. intimacy, economy or expressive detail.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mural: legibility, public impact. Drawing: intimacy and economy.",
            commonErrors: [
              "Applying identical criteria to works of different scale and function.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q16",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Evaluation exercise",
            text: "Work A: A tightly rendered oil painting of a still life, flawless technique, conventional subject. Work B: A rough digital collage mixing photographs and drawn marks, unconventional composition, striking colour contrasts.",
          },
          stem: "Evaluate two described artworks using explicit criteria.",
          parts: [
            { label: "a", prompt: "State two evaluation criteria you will apply.", marks: 2 },
            { label: "b", prompt: "Apply the criteria to each work.", marks: 2 },
            { label: "c", prompt: "Reach a balanced conclusion.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Criteria-based evaluation", statement: "Explicit criteria produce fair, defensible judgements across different works." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. technical skill and originality — any two valid criteria stated.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two criteria clearly stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Work A wins on technical skill and coherence; Work B wins on originality and expressive energy.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each work assessed against both criteria.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Balanced conclusion: each excels on different dimensions — no unqualified winner.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Criteria stated. (b) Craft vs originality. (c) Each excels on different criteria.",
            commonErrors: [
              "Declaring a winner without applying stated criteria.",
            ],
          },
        },
        {
          id: "va-u4-evaluation-criteria-q17",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Evaluation exercise",
            text: "Work A: A community mural covering a building wall, depicting local historical events in bold flat colours, painted with neighbourhood residents. Work B: A slick gallery portrait of a celebrity, impeccably retouched, displayed in a white cube gallery.",
          },
          stem: "Evaluate the significance of two described artworks beyond their craft.",
          parts: [
            { label: "a", prompt: "State two criteria relevant to evaluating artistic significance.", marks: 2 },
            { label: "b", prompt: "Apply the criteria to each work.", marks: 2 },
            { label: "c", prompt: "Assess which work is more significant and justify your judgement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Significance evaluation", statement: "Significance is judged by cultural meaning and public function, not only craft." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. cultural meaning and public function/community engagement — any two valid criteria.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two significance criteria clearly stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Work A embodies collective memory and public participation; Work B offers polished but conventional celebrity image.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each work assessed against the stated criteria.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Work A is more significant for its communal function and cultural memory, despite lesser polish.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Justified judgement distinguishing significance from craft.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Cultural meaning + public function. (b) Community memory vs celebrity polish. (c) Mural more significant despite lesser craft.",
            commonErrors: [
              "Judging significance by technical polish alone.",
            ],
          },
        },
      ],
    },
  ],
};
