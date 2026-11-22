import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "theatre-u3-lesson-3-1",
  code: "3-1",
  title: "Devising Original Theatre",
  goal: "I CAN devise original theatre through collaborative creation, research and improvisation.",
  standards: [
    "Devising",
    "Performance",
  ],
  vocabulary: [
    { term: "Devising", definition: "Creating theatre collaboratively without a pre-existing script." },
    { term: "Stimulus", definition: "The starting point for devising — an image, text, question or theme." },
    { term: "Research", definition: "Gathering material — interviews, observations, texts — to inform devised work." },
    { term: "Improvisation", definition: "Spontaneous performance used to generate material during devising." },
    { term: "Edit", definition: "The process of selecting, shaping and structuring devised material." },
    { term: "Ensemble creation", definition: "Collaborative development where all members contribute to the work." },
  ],
  concepts: [
    {
      id: "theatre-u3-devising-process",
      title: "The devising process",
      skill: "Apply the devising process — stimulus, research, improvisation, edit — to create original theatre.",
      lesson: {
        sections: [
          {
            heading: "Starting points",
            body: "Devising begins with a **stimulus**: an image, poem, news article, question or theme. The stimulus provides direction without prescribing outcome — 'What does home mean to different people?' opens exploration; 'Perform this script' doesn't. The stimulus should be rich enough to generate diverse responses.",
          },
          {
            heading: "Research and generation",
            body: "**Research** gathers material: interviews, observations, texts, images. **Improvisation** generates performance material from this research. The process is cyclical: research → improvise → reflect → research more → improvise more. Material accumulates; the ensemble sifts for what resonates.",
          },
          {
            heading: "Edit and structure",
            body: "Devised work emerges from chaos through **editing**: selecting the strongest moments, shaping them into structure, cutting what doesn't serve the whole. The director or ensemble decides what the piece is about — theme emerges from material. The final work is a shaped selection, not everything that was generated.",
          },
        ],
        keyFormulas: [
          { name: "Devising process", statement: "Stimulus → research → improvisation → edit = devised work" },
          { name: "Stimulus quality", statement: "Rich enough to generate diverse responses, open enough to allow discovery" },
        ],
        workedExample: {
          problem: "A group wants to devise a play about 'borders' but doesn't know where to start. What stimulus and process should they use?",
          solution: "Stimulus: a photograph of a border crossing, or the question 'What does a border mean?' Research: interview people about borders (literal and metaphorical), gather news articles, collect images. Improvise: physical exercises exploring separation and connection. Edit: select moments that capture the theme's complexity.",
        },
      },
      questions: [
        {
          id: "theatre-u3-devising-process-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Devising in theatre refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Designing costumes" },
              { id: "b", text: "Performing a published script" },
              { id: "c", text: "Creating theatre collaboratively without a pre-existing script" },
              { id: "d", text: "Writing a play alone" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Devising", statement: "Collaborative creation of theatre without a pre-existing script." },
            ],
            steps: [
              { reasoning: "Devising is collaborative creation of original theatre without a script.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Creating theatre collaboratively without a pre-existing script",
            commonErrors: [
              "Confusing devising with script interpretation or solo writing.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-process-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the main stages of the devising process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Devising stages", statement: "Stimulus, research, improvisation and edit." },
            ],
            steps: [
              { reasoning: "Stimulus — starting point that opens exploration.", marks: 1, markCode: "M" },
              { reasoning: "Research and improvisation — gather material and generate performance.", marks: 1, markCode: "M" },
              { reasoning: "Edit — select and structure the strongest material into a coherent work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stimulus → research → improvisation → edit.",
            commonErrors: [
              "Skipping research or edit stages.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-process-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a good stimulus is crucial for successful devising.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stimulus quality", statement: "A rich, open stimulus generates diverse material; a narrow one limits possibilities." },
            ],
            steps: [
              { reasoning: "A rich stimulus generates diverse responses — different interpretations and materials.", marks: 1, markCode: "M" },
              { reasoning: "An open stimulus allows discovery — the ensemble isn't constrained to one answer.", marks: 1, markCode: "M" },
              { reasoning: "A poor stimulus leads to thin or generic work.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the stimulus is the seed from which the work grows.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Good stimuli are rich enough for diversity and open enough for discovery.",
            commonErrors: [
              "Choosing stimuli that are too specific or too vague.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-process-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a group's devising approach.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating devising", statement: "Assess stimulus quality, process stages and collaborative editing." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. good stimulus, thorough research, collaborative process.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. no editing stage, poor stimulus, no research — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with devising effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests better stimulus, adding research, structured editing process.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate devising by stimulus, process and collaborative editing.",
            commonErrors: [
              "Judging devising only by final product, not process.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-process-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is NOT a stage of the devising process?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Research" },
              { id: "b", text: "Editing" },
              { id: "c", text: "Stimulus" },
              { id: "d", text: "Rehearsing a published script" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Devising stages", statement: "Stimulus, research, improvisation and edit — no pre-existing script." },
            ],
            steps: [
              { reasoning: "Devising creates original theatre without a script, so rehearsing a published script is not part of it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Rehearsing a published script",
            commonErrors: [
              "Confusing devising with script rehearsal.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-process-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "In devising, a 'stimulus' is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A starting point that opens exploration" },
              { id: "b", text: "A costume design brief" },
              { id: "c", text: "A lighting cue" },
              { id: "d", text: "A finished script to perform" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stimulus", statement: "The starting point for devising that provides direction without prescribing outcome." },
            ],
            steps: [
              { reasoning: "A stimulus is the starting point — an image, text, question or theme — that opens exploration.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A starting point that opens exploration",
            commonErrors: [
              "Thinking a stimulus must prescribe the final outcome.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-process-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Research' in the devising process refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Auditioning actors" },
              { id: "b", text: "Writing a research report" },
              { id: "c", text: "Looking up facts online only" },
              { id: "d", text: "Gathering material — interviews, observations, texts — to inform the work" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Research", statement: "Gathering material such as interviews, observations and texts to inform devised work." },
            ],
            steps: [
              { reasoning: "Research gathers material — interviews, observations, texts — that informs the devised work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Gathering material to inform the work",
            commonErrors: [
              "Reducing research to desk-based fact-finding only.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-process-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The devising process is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random generation with no structure" },
              { id: "b", text: "Cyclical: research, improvisation, reflection, then more research and improvisation" },
              { id: "c", text: "Copying an existing play" },
              { id: "d", text: "Linear: stimulus to script to performance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cyclical process", statement: "Devising loops research, improvisation and reflection, accumulating material." },
            ],
            steps: [
              { reasoning: "The process cycles: research leads to improvisation, reflection sends the group back to research.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cyclical: research, improvisation, reflection, then more",
            commonErrors: [
              "Describing devising as a single linear pass.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-process-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should a devising group generate much more material than it needs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To fill rehearsal time" },
              { id: "b", text: "To demonstrate each member's skill" },
              { id: "c", text: "Because the stimulus requires it" },
              { id: "d", text: "Because most material will be cut in editing; quantity increases the chance of finding strong moments" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Generation principle", statement: "Generate much more than needed; edit ruthlessly." },
            ],
            steps: [
              { reasoning: "Quantity matters because editing will cut most material; generating widely increases the chance of discovering gems.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Quantity increases the chance of finding strong moments",
            commonErrors: [
              "Assuming every generated moment must appear in the final piece.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-process-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which stimulus would likely produce the richest devised work about 'home'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A detailed script outline" },
              { id: "b", text: "The question \"What does home mean to different people?\"" },
              { id: "c", text: "\"Perform a monologue about home\"" },
              { id: "d", text: "A single photograph with a caption prescribing exactly what to perform" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stimulus quality", statement: "Rich enough for diversity, open enough for discovery." },
            ],
            steps: [
              { reasoning: "An open question invites diverse responses; a prescribed monologue or outline constrains discovery.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The question \"What does home mean to different people?\"",
            commonErrors: [
              "Choosing stimuli that are too prescriptive.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-process-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List three types of stimulus that can begin a devising project.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Stimulus types", statement: "Images, texts, questions, themes, physical experiences can all stimulate devising." },
            ],
            steps: [
              { reasoning: "Visual or written stimulus — an image, poem, news article or text.", marks: 1, markCode: "M" },
              { reasoning: "Conceptual or experiential stimulus — a question, theme or physical experience.", marks: 1, markCode: "M" },
              { reasoning: "Three valid types of stimulus correctly identified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Images, texts/questions and themes or experiences are valid stimuli.",
            commonErrors: [
              "Listing only one type of stimulus or confusing stimulus with final form.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-process-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe what happens during the 'research' stage of devising.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Research stage", statement: "Gathering interviews, observations and texts that inform improvisation." },
            ],
            steps: [
              { reasoning: "The group gathers material — interviews, observations, texts, images — related to the stimulus.", marks: 1, markCode: "M" },
              { reasoning: "This research becomes prompts for improvisation, grounding performance in real material.", marks: 1, markCode: "M" },
              { reasoning: "Research is integrated into the work rather than left as background notes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Research gathers material that grounds and prompts improvisation.",
            commonErrors: [
              "Treating research as separate from the creative work.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-process-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why the devising process is cyclical rather than linear.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cyclical process", statement: "Each stage generates questions and material for the next cycle." },
            ],
            steps: [
              { reasoning: "Research raises questions that improvisation answers, and improvisation reveals gaps needing more research.", marks: 1, markCode: "M" },
              { reasoning: "Reflection on generated material sends the group back to gather more or try new approaches.", marks: 1, markCode: "M" },
              { reasoning: "Material accumulates and deepens through repeated cycles rather than a single pass.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: discovery requires looping back, not moving straight through.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Devising cycles because each stage feeds and questions the others.",
            commonErrors: [
              "Assuming one research session and one improvisation session is enough.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-process-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "A group has the stimulus 'borders' and has completed research but generated little material. Suggest three improvisation exercises they could try.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Improvisation exercises", statement: "Exercises that translate research into physical and dramatic material." },
            ],
            steps: [
              { reasoning: "Exercises connected to the 'borders' theme, e.g. crossing/being stopped improvisations.", marks: 1, markCode: "M" },
              { reasoning: "Physical or image-based techniques, e.g. tableaux of separation and connection.", marks: 1, markCode: "M" },
              { reasoning: "Three concrete exercises suggested that respond to the research.", marks: 1, markCode: "M" },
              { reasoning: "Exercises plausibly generate usable material from the stimulus.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Suggest theme-linked physical, image and interview-based improvisations.",
            commonErrors: [
              "Suggesting exercises unconnected to the stimulus or research.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-process-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate this devising approach: A group chooses the stimulus 'perform a poem about war', skips research, improvises once for 20 minutes and performs everything they generated.",
          parts: [
            { label: "a", prompt: "Identify two weaknesses.", marks: 2 },
            { label: "b", prompt: "Explain the effect of each weakness on the work.", marks: 2 },
            { label: "c", prompt: "Suggest an improved process.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating devising", statement: "Assess stimulus quality, research, generation and editing." },
            ],
            steps: [
              { part: "a", reasoning: "Weaknesses: prescriptive stimulus, no research, single short improvisation, no editing.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two weaknesses correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Effects: thin material, no grounding, unfocused final piece.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with its effect on the work.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Improved process: open stimulus, research stage, repeated cycles, ruthless editing.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weak stimulus and skipped stages produce thin work; add research, cycles and editing.",
            commonErrors: [
              "Judging devising only by the final performance, not the process.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-process-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the difference between a stimulus that is 'rich but open' and one that is 'narrow and prescriptive', using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stimulus quality", statement: "Richness generates diversity; openness allows discovery." },
            ],
            steps: [
              { reasoning: "A rich but open stimulus, e.g. 'What is a border?', invites many interpretations and materials.", marks: 1, markCode: "M" },
              { reasoning: "A narrow prescriptive stimulus, e.g. 'Perform this exact scene', limits what can be discovered.", marks: 1, markCode: "M" },
              { reasoning: "The open stimulus produces diverse responses; the prescriptive one produces imitation.", marks: 1, markCode: "R" },
              { reasoning: "Example clearly illustrates the contrast.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: stimulus quality determines the richness of devised work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Open stimuli generate diversity; prescriptive ones limit discovery.",
            commonErrors: [
              "Confusing 'rich' with 'detailed instructions'.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u3-devising-creation",
      title: "Collaborative creation",
      skill: "Generate and shape theatrical material through ensemble improvisation, research and editing.",
      lesson: {
        sections: [
          {
            heading: "Generating material",
            body: "Improvise from research: use interviews as prompts for scenes; physical exercises to explore themes; image work to create tableaux. The goal is quantity — generate much more than needed. Material that seems useless may contain a gem; the editing stage will find it.",
          },
          {
            heading: "Finding the shape",
            body: "As material accumulates, patterns emerge: recurring images, emotional throughlines, structural possibilities. The ensemble identifies what the piece is about — theme crystallises from material. Try different structures: chronological, fragmented, circular. The structure should serve the content.",
          },
          {
            heading: "Collaboration and ownership",
            body: "Devising requires shared ownership: everyone's contributions matter; credit is shared; decisions are collective (or clearly delegated). The director shapes but doesn't impose — the work belongs to the ensemble. This collaborative ownership is what makes devised work feel authentic.",
          },
        ],
        keyFormulas: [
          { name: "Generation principle", statement: "Generate much more than needed; edit ruthlessly" },
          { name: "Theme emergence", statement: "Theme crystallises from material, not imposed before" },
        ],
        workedExample: {
          problem: "A devising group has generated 3 hours of improvisation but can't find the piece's focus. What should they do?",
          solution: "Review the material together: look for recurring images, emotional patterns, strong moments. Identify what keeps appearing — that's likely the theme. Try structuring the strongest 20 minutes first, then see what the piece wants to become.",
        },
      },
      questions: [
        {
          id: "theatre-u3-devising-creation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In devising, the 'edit' stage involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Designing costumes" },
              { id: "b", text: "Adding more material" },
              { id: "c", text: "Writing dialogue" },
              { id: "d", text: "Selecting and structuring the strongest generated material" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Edit stage", statement: "Selecting, shaping and structuring devised material." },
            ],
            steps: [
              { reasoning: "Editing selects and structures the strongest material into coherent form.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Selecting and structuring the strongest generated material",
            commonErrors: [
              "Thinking devising ends with generation rather than editing.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-creation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two techniques for generating material in devising.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Generation techniques", statement: "Interviews, physical exercises, image work and improvisation." },
            ],
            steps: [
              { reasoning: "Interview-based scenes — use real people's words and stories.", marks: 1, markCode: "M" },
              { reasoning: "Physical exercises — explore themes through movement and tableaux.", marks: 1, markCode: "M" },
              { reasoning: "Image work — respond to photographs or artworks with physical improvisation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Interviews, physical exercises and image work generate material.",
            commonErrors: [
              "Generating material without connection to research or stimulus.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-creation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why theme should emerge from material rather than being imposed at the start.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theme emergence", statement: "Organic themes are authentic; imposed themes feel forced." },
            ],
            steps: [
              { reasoning: "Imposed themes constrain generation — material serves the concept rather than revealing it.", marks: 1, markCode: "M" },
              { reasoning: "Emergent themes arise from what the ensemble discovers — more authentic and surprising.", marks: 1, markCode: "M" },
              { reasoning: "The stimulus guides but doesn't dictate — discovery is part of the process.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: let the material teach you what the piece is about.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Emergent themes are authentic; imposed themes constrain discovery.",
            commonErrors: [
              "Forcing material to fit a predetermined theme.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-creation-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a devising group's creative process.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating process", statement: "Assess generation quantity, research integration and editing discipline." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. generates much material, good research, collaborative.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. no editing, material not connected to research, no structure — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with process effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests structured editing sessions, connecting material to research, identifying theme.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate process by generation, research integration and editing.",
            commonErrors: [
              "Judging devising only by final product, not process quality.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-creation-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In devising, 'generating material' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing the final script" },
              { id: "b", text: "Designing the set" },
              { id: "c", text: "Creating much more performance material than the piece will need" },
              { id: "d", text: "Choosing the music" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Generation principle", statement: "Generate far more material than needed; editing selects from it." },
            ],
            steps: [
              { reasoning: "Generation produces a surplus of material so editing can select the strongest moments.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Creating much more material than needed",
            commonErrors: [
              "Confusing generation with writing the final script.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-creation-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Theme in devised work typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emerges from the material the ensemble discovers" },
              { id: "b", text: "Is fixed by the stimulus" },
              { id: "c", text: "Comes from the audience" },
              { id: "d", text: "Is chosen before any creative work begins" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theme emergence", statement: "Theme crystallises from material rather than being imposed." },
            ],
            steps: [
              { reasoning: "Devised theme emerges organically as the ensemble reviews and shapes generated material.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Emerges from the material the ensemble discovers",
            commonErrors: [
              "Imposing a theme before exploring the material.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-creation-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Image work in devising involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Drawing costume designs" },
              { id: "b", text: "Projecting photographs on stage" },
              { id: "c", text: "Responding to images physically through improvisation" },
              { id: "d", text: "Writing stage directions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Image work", statement: "Physically improvising responses to photographs or artworks." },
            ],
            steps: [
              { reasoning: "Image work uses pictures as prompts for physical improvisation that generates material.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Responding to images physically through improvisation",
            commonErrors: [
              "Confusing image work with set or costume design.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-creation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Interview-based devising uses:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Newspaper headlines" },
              { id: "b", text: "The actors' own biographies" },
              { id: "c", text: "Real people's words and stories as prompts for scenes" },
              { id: "d", text: "Questions from the audience" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Interview-based devising", statement: "Real interviews become prompts for generated scenes." },
            ],
            steps: [
              { reasoning: "Interview material — real words, stories and perspectives — is used as prompts for scenes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Real people's words and stories as prompts",
            commonErrors: [
              "Using interviews as decoration rather than as scene material.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-creation-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is 'shared ownership' important in devised theatre?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It removes the director's role entirely" },
              { id: "b", text: "It makes the work feel authentic and collaborative" },
              { id: "c", text: "It speeds up rehearsals" },
              { id: "d", text: "It is required by copyright law" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collaborative ownership", statement: "Shared ownership makes devised work feel authentic." },
            ],
            steps: [
              { reasoning: "Shared ownership means everyone's contribution matters, giving the work an authentic collaborative quality.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It makes the work feel authentic and collaborative",
            commonErrors: [
              "Thinking ownership means no leadership or direction at all.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-creation-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which structure best serves a piece of devised work?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The structure that best serves the content — chronological, fragmented or circular" },
              { id: "b", text: "Always chronological" },
              { id: "c", text: "Always non-linear" },
              { id: "d", text: "Always linear" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure serves content", statement: "The structure should fit the material, not follow a fixed rule." },
            ],
            steps: [
              { reasoning: "The structure should serve the content; chronological, fragmented or circular may all fit depending on the material.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The structure that best serves the content",
            commonErrors: [
              "Assuming one structure is always correct.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-creation-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe how physical exercises can generate material in devising.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Physical exercises", statement: "Movement-based improvisation that explores themes bodily." },
            ],
            steps: [
              { reasoning: "Physical exercises explore themes through movement — e.g. separation, connection, conflict.", marks: 1, markCode: "M" },
              { reasoning: "They produce embodied material that dialogue-led work might miss.", marks: 1, markCode: "M" },
              { reasoning: "Description accurately links movement exploration to material generation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Physical exercises generate embodied material exploring themes through movement.",
            commonErrors: [
              "Describing physical exercises as unrelated warm-ups.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-creation-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why groups should generate far more material than the final piece needs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Generation principle", statement: "Quantity increases the chance of finding strong moments; editing cuts the rest." },
            ],
            steps: [
              { reasoning: "Most generated material will be cut, so a surplus is expected and necessary.", marks: 1, markCode: "M" },
              { reasoning: "Generating widely increases the chance of discovering strong or surprising moments.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: quantity feeds selection — you cannot edit what was never made.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A surplus of material gives editing the strongest possible selection.",
            commonErrors: [
              "Assuming generated material should all be used.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-creation-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how an ensemble might identify what a devised piece is 'about'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Finding the theme", statement: "Recurring images and emotional patterns in the material reveal the theme." },
            ],
            steps: [
              { reasoning: "The ensemble reviews all generated material together, looking for patterns.", marks: 1, markCode: "M" },
              { reasoning: "Recurring images, emotions or situations indicate what the piece is really about.", marks: 1, markCode: "M" },
              { reasoning: "Trying different structures helps clarify which moments matter most.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: theme is discovered from the material, not declared in advance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Review material for recurring patterns; theme emerges from what keeps appearing.",
            commonErrors: [
              "Declaring a theme before reviewing the material.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-creation-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a director can shape devised work without imposing their own vision.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collaborative direction", statement: "The director shapes and selects but does not dictate." },
            ],
            steps: [
              { reasoning: "The director selects and arranges material — shaping rather than creating alone.", marks: 1, markCode: "M" },
              { reasoning: "They ask questions and offer options rather than dictating decisions.", marks: 1, markCode: "M" },
              { reasoning: "The ensemble retains ownership, keeping the work collaborative and authentic.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: leadership in devising means guiding discovery, not replacing it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Directors shape through selection and questions while preserving ensemble ownership.",
            commonErrors: [
              "Assuming directing means imposing a pre-conceived vision.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-creation-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the development of a devised piece.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating process", statement: "Assess generation, research integration and editing discipline." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. abundant generation, research-grounded material, collaborative process.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. no editing, disconnected material, unclear theme — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with its effect on the piece.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests structured editing, theme identification, connecting material to research.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate development by generation, research integration and editing.",
            commonErrors: [
              "Judging devised work only by the final product.",
            ],
          },
        },
        {
          id: "theatre-u3-devising-creation-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why devised work can feel more 'authentic' than scripted performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Authenticity", statement: "Research-grounded, collaboratively owned work carries personal investment." },
            ],
            steps: [
              { reasoning: "Material is rooted in real research — interviews, observations — giving it lived texture.", marks: 1, markCode: "M" },
              { reasoning: "Collaborative ownership means performers shaped the work themselves.", marks: 1, markCode: "M" },
              { reasoning: "Performers' personal investment is visible in delivery and commitment.", marks: 1, markCode: "R" },
              { reasoning: "The audience perceives this honesty and responds to it.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: authenticity comes from process, not just content.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Devised work feels authentic because performers own research-grounded material.",
            commonErrors: [
              "Claiming devised work is automatically authentic without process.",
            ],
          },
        },
      ],
    },
  ],
};
