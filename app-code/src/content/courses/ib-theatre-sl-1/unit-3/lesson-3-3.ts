import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "theatre-u3-lesson-3-3",
  code: "3-3",
  title: "Staging and Directorial Choices",
  goal: "I CAN make and justify directorial choices about interpretation, space and design for performance.",
  standards: [
    "Directing",
    "Staging",
  ],
  vocabulary: [
    { term: "Directorial concept", definition: "The unifying vision or interpretation that guides all staging choices." },
    { term: "Stage picture", definition: "The visual composition of the stage at any moment — what the audience sees." },
    { term: "Given circumstances", definition: "The fixed facts of the play that staging must respect." },
    { term: "Stylisation", definition: "The degree of realism or abstraction in performance and design." },
    { term: "Metatheatre", definition: "Performance that acknowledges its own theatricality — breaking the fourth wall." },
    { term: "Interpretation", definition: "The director's choices about what the play means and how to communicate it." },
  ],
  concepts: [
    {
      id: "theatre-u3-directorial-vision",
      title: "Directorial vision",
      skill: "Develop and communicate a directorial concept that unifies all staging choices.",
      lesson: {
        sections: [
          {
            heading: "Finding the concept",
            body: "A **directorial concept** is the unifying vision: what is this play about? What's the production's point of view? A concept might be 'this is a play about memory' or 'this is a play about power' or 'this is a play about the impossibility of communication'. The concept guides every choice — casting, design, movement, delivery.",
          },
          {
            heading: "Stylisation and interpretation",
            body: "**Stylisation** is the degree of realism: fully realistic, partially stylised, or highly abstract. A realistic production aims to convince; a stylised one aims to comment. **Metatheatre** acknowledges theatricality — actors address the audience, sets are obviously constructed. These choices shape how the audience relates to the play.",
          },
          {
            heading: "Justifying choices",
            body: "Every directorial choice should be justifiable: why this interpretation? Why this stylisation? Why this design? The best directors can articulate their reasoning — not 'I liked it' but 'this choice serves the play's theme because...' Directorial vision is argument made physical.",
          },
        ],
        keyFormulas: [
          { name: "Directorial concept", statement: "The unifying interpretation guiding all staging choices" },
          { name: "Stylisation spectrum", statement: "Realistic → partially stylised → abstract/metatheatrical" },
        ],
        workedExample: {
          problem: "A director wants to stage 'Hamlet' as a play about surveillance and paranoia. How might this concept shape choices?",
          solution: "Design: cameras or one-way mirrors suggesting surveillance. Movement: characters constantly observed; soliloquies become private moments of relief. Delivery: heightened awareness of being watched. The concept unifies all choices — every element serves the surveillance theme.",
        },
      },
      questions: [
        {
          id: "theatre-u3-directorial-vision-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A directorial concept is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The actor's biography" },
              { id: "b", text: "The play's plot summary" },
              { id: "c", text: "The costume design" },
              { id: "d", text: "The unifying interpretation guiding all staging choices" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Directorial concept", statement: "The unifying vision guiding all staging decisions." },
            ],
            steps: [
              { reasoning: "A directorial concept is the unifying interpretation guiding staging choices.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The unifying interpretation guiding all staging choices",
            commonErrors: [
              "Confusing concept (unifying vision) with plot or design.",
            ],
          },
        },
        {
          id: "theatre-u3-directorial-vision-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the range of stylisation choices available to a director.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Stylisation", statement: "Realistic, partially stylised and abstract/metatheatrical." },
            ],
            steps: [
              { reasoning: "Realistic — aims to convince; creates illusion of real life.", marks: 1, markCode: "M" },
              { reasoning: "Partially stylised — elements of realism with deliberate distortion.", marks: 1, markCode: "M" },
              { reasoning: "Abstract/metatheatrical — acknowledges theatricality; comments on the play itself.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Realistic, partially stylised and abstract are stylisation choices.",
            commonErrors: [
              "Thinking there's only one 'correct' level of realism.",
            ],
          },
        },
        {
          id: "theatre-u3-directorial-vision-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why directorial choices should be justifiable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Justification", statement: "Every choice should serve the play's theme or meaning." },
            ],
            steps: [
              { reasoning: "Justification forces clarity — 'I liked it' isn't an argument.", marks: 1, markCode: "M" },
              { reasoning: "Every choice should serve the concept — casting, design, movement, delivery.", marks: 1, markCode: "M" },
              { reasoning: "Unjustified choices feel arbitrary; justified ones feel inevitable.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: directorial vision is argument made physical.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Justifiable choices serve the concept and create coherent production.",
            commonErrors: [
              "Making arbitrary choices without conceptual reasoning.",
            ],
          },
        },
        {
          id: "theatre-u3-directorial-vision-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a director's concept for a described play.",
          parts: [
            { label: "a", prompt: "State the directorial concept.", marks: 2 },
            { label: "b", prompt: "Explain how it shapes two staging choices.", marks: 2 },
            { label: "c", prompt: "Evaluate whether the concept is effective.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating concept", statement: "Assess whether concept is clear, consistent and serves the play." },
            ],
            steps: [
              { part: "a", reasoning: "Concept clearly stated, e.g. 'play about isolation in modern life'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Concept accurately identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two staging choices explained through concept lens.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Concept-choice connections convincingly explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Effective if concept is clear, consistent and illuminates rather than distorts the play.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Effectiveness convincingly evaluated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate concept by clarity, consistency and service to the play.",
            commonErrors: [
              "Judging concept by novelty rather than effectiveness.",
            ],
          },
        },
        {
          id: "theatre-u3-directorial-vision-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A directorial concept primarily guides:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only costume choices" },
              { id: "b", text: "Only the lighting plot" },
              { id: "c", text: "All staging choices through a unifying interpretation" },
              { id: "d", text: "The ticket price" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Directorial concept", statement: "The unifying interpretation guiding all staging choices." },
            ],
            steps: [
              { reasoning: "The concept is the unifying vision that guides casting, design, movement and delivery.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** All staging choices through a unifying interpretation",
            commonErrors: [
              "Thinking a concept applies to only one design element.",
            ],
          },
        },
        {
          id: "theatre-u3-directorial-vision-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Metatheatre' refers to performance that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Uses no set at all" },
              { id: "b", text: "Is always performed outdoors" },
              { id: "c", text: "Acknowledges its own theatricality — breaking the fourth wall" },
              { id: "d", text: "Ignores the audience completely" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metatheatre", statement: "Performance that acknowledges its own theatricality." },
            ],
            steps: [
              { reasoning: "Metatheatre draws attention to its own theatrical nature — actors address the audience, sets are visibly constructed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Acknowledges its own theatricality",
            commonErrors: [
              "Confusing metatheatre with realism or minimalism.",
            ],
          },
        },
        {
          id: "theatre-u3-directorial-vision-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Stylisation' in theatre refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A rehearsal method" },
              { id: "b", text: "A lighting technique" },
              { id: "c", text: "A type of costume" },
              { id: "d", text: "The degree of realism or abstraction in performance and design" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stylisation", statement: "The degree of realism or abstraction in performance and design." },
            ],
            steps: [
              { reasoning: "Stylisation ranges from fully realistic through partially stylised to abstract or metatheatrical.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The degree of realism or abstraction in performance and design",
            commonErrors: [
              "Confusing stylisation with a single technique.",
            ],
          },
        },
        {
          id: "theatre-u3-directorial-vision-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A realistic production primarily aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Convince the audience that what they see is real life" },
              { id: "b", text: "Comment on society" },
              { id: "c", text: "Abstract the characters" },
              { id: "d", text: "Break the fourth wall" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stylisation spectrum", statement: "Realistic aims to convince; stylised aims to comment." },
            ],
            steps: [
              { reasoning: "Realism seeks to create the illusion of real life so the audience is convinced.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Convince the audience it is real life",
            commonErrors: [
              "Confusing realism (convincing) with stylisation (commenting).",
            ],
          },
        },
        {
          id: "theatre-u3-directorial-vision-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might a director choose a stylised rather than a realistic approach?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it can comment on the play's themes rather than merely reproduce them" },
              { id: "b", text: "Because it is always better" },
              { id: "c", text: "Because it requires less rehearsal" },
              { id: "d", text: "Because it is always easier" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stylisation purpose", statement: "Stylisation comments on the play; realism reproduces it." },
            ],
            steps: [
              { reasoning: "Stylisation distances the audience so the production can comment on themes rather than simply imitate life.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It can comment on themes rather than reproduce them",
            commonErrors: [
              "Assuming one stylisation level is universally superior.",
            ],
          },
        },
        {
          id: "theatre-u3-directorial-vision-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Justifying a directorial choice means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Saying 'I liked it'" },
              { id: "b", text: "Copying another production" },
              { id: "c", text: "Explaining how the choice serves the play's concept" },
              { id: "d", text: "Following theatrical tradition" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Justification", statement: "Every choice should be explained in terms of the production's concept." },
            ],
            steps: [
              { reasoning: "Justification connects each choice to the concept — 'this serves the play's theme because...'.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Explaining how the choice serves the play's concept",
            commonErrors: [
              "Offering personal preference instead of conceptual reasoning.",
            ],
          },
        },
        {
          id: "theatre-u3-directorial-vision-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define 'directorial concept'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Directorial concept", statement: "The unifying interpretation guiding all staging choices." },
            ],
            steps: [
              { reasoning: "A directorial concept is the unifying interpretation or vision of the play.", marks: 1, markCode: "M" },
              { reasoning: "It guides every staging choice — casting, design, movement, delivery.", marks: 1, markCode: "M" },
              { reasoning: "Definition accurately captures its unifying function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The directorial concept is the unifying interpretation guiding all staging choices.",
            commonErrors: [
              "Confusing concept with plot summary or a single design element.",
            ],
          },
        },
        {
          id: "theatre-u3-directorial-vision-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways a concept of 'this play is about memory' might shape staging choices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Concept-driven staging", statement: "Each staging choice should serve the unifying concept." },
            ],
            steps: [
              { reasoning: "First choice, e.g. fragmented or non-linear structure reflecting how memory works.", marks: 1, markCode: "M" },
              { reasoning: "Second choice, e.g. design that blurs past and present or lighting suggesting recollection.", marks: 1, markCode: "M" },
              { reasoning: "Both choices plausibly serve the memory concept.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fragmented structure and blurred timelines/design serve the memory concept.",
            commonErrors: [
              "Suggesting choices unconnected to the stated concept.",
            ],
          },
        },
        {
          id: "theatre-u3-directorial-vision-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between realistic and stylised production and the effect each has on the audience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stylisation spectrum", statement: "Realistic convinces; stylised comments." },
            ],
            steps: [
              { reasoning: "Realistic production aims to convince the audience that events are real.", marks: 1, markCode: "M" },
              { reasoning: "Stylised production distorts reality to comment on the play's themes.", marks: 1, markCode: "M" },
              { reasoning: "The audience relationship differs — absorbed into illusion vs invited to reflect.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the choice of stylisation shapes how the audience relates to the play.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Realism convinces the audience; stylisation invites reflection and comment.",
            commonErrors: [
              "Treating stylisation as merely 'bad realism'.",
            ],
          },
        },
        {
          id: "theatre-u3-directorial-vision-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why every directorial choice should serve the production's concept.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Justification", statement: "Choices that serve the concept create coherent, inevitable productions." },
            ],
            steps: [
              { reasoning: "The concept unifies the production — it is the argument the staging makes.", marks: 1, markCode: "M" },
              { reasoning: "Choices that contradict the concept create dissonance and confuse the audience.", marks: 1, markCode: "M" },
              { reasoning: "Consistent choices make the production feel coherent and inevitable.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: directorial vision is argument made physical.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Concept-serving choices create coherent productions; arbitrary ones create dissonance.",
            commonErrors: [
              "Making choices for novelty rather than conceptual fit.",
            ],
          },
        },
        {
          id: "theatre-u3-directorial-vision-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate this approach to a family drama: actors wear period costume but deliver lines directly to the audience, and the set is a bare platform with no furniture.",
          parts: [
            { label: "a", prompt: "State the directorial concept implied.", marks: 2 },
            { label: "b", prompt: "Explain how two staging choices serve it.", marks: 2 },
            { label: "c", prompt: "Evaluate whether the concept is effective.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating concept", statement: "Assess whether concept is clear, consistent and serves the play." },
            ],
            steps: [
              { part: "a", reasoning: "Implied concept: the play exposes private family truths publicly — e.g. 'the audience as confessor/judge'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Concept clearly and plausibly stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Direct address makes private conflict public; bare platform strips away domestic illusion, exposing the family's emptiness.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two choices convincingly linked to the concept.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Effective if it illuminates the play's themes of exposure and performance; risky if it prevents emotional engagement.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Effectiveness convincingly evaluated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Metatheatrical 'public exposure of private life' concept; effective if it illuminates rather than distorts.",
            commonErrors: [
              "Judging the concept by novelty rather than effectiveness.",
            ],
          },
        },
        {
          id: "theatre-u3-directorial-vision-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A director must stage a play about political corruption. Propose two possible concepts and explain which might be more effective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conceptual thinking", statement: "Different concepts produce different stagings of the same play." },
            ],
            steps: [
              { reasoning: "Concept 1 stated, e.g. 'corruption as a machine that consumes everyone'.", marks: 1, markCode: "M" },
              { reasoning: "Concept 2 stated, e.g. 'corruption as a web of complicity where everyone is implicated'.", marks: 1, markCode: "M" },
              { reasoning: "Comparison of how each would shape staging differently.", marks: 1, markCode: "R" },
              { reasoning: "Justification of which serves the play's themes better.", marks: 1, markCode: "R" },
              { reasoning: "Reasoned choice concluding which concept is more effective and why.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two viable concepts compared; the more effective one is justified by thematic fit.",
            commonErrors: [
              "Proposing concepts without explaining their staging consequences.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u3-stage-picture",
      title: "Stage picture and design",
      skill: "Create and evaluate stage pictures and design elements that serve the production's concept.",
      lesson: {
        sections: [
          {
            heading: "The stage picture",
            body: "The **stage picture** is what the audience sees at any moment: composition, focus, balance, visual storytelling. A strong stage picture guides the eye: one clear focus, supporting elements, visual hierarchy. Every moment should have a clear 'picture' — who or what is the audience meant to watch?",
          },
          {
            heading: "Design elements",
            body: "**Set** creates the world — realistic, abstract or symbolic. **Costume** defines character and period. **Lighting** creates mood, focus and atmosphere. **Sound** reinforces emotion and space. Each element should serve the concept — design isn't decoration, it's meaning made visible.",
          },
          {
            heading: "Design integration",
            body: "The best productions integrate all elements: set, costume, lighting, sound work together to create a unified world. A realistic set with abstract lighting creates dissonance; a symbolic set with realistic acting may confuse. Cohesion — all elements serving one vision — is the mark of strong design.",
          },
        ],
        keyFormulas: [
          { name: "Stage picture", statement: "Composition + focus + balance = visual storytelling" },
          { name: "Design elements", statement: "Set + costume + lighting + sound = unified world" },
        ],
        workedExample: {
          problem: "A production of a domestic drama uses a realistic set but expressionistic lighting. What effect does this create?",
          solution: "The contrast creates tension — realistic setting suggests 'this is real life' while expressionistic lighting suggests 'this is psychological'. The dissonance may be intentional — showing how characters' inner lives distort their perception of reality. Or it may be incoherent if not deliberate.",
        },
      },
      questions: [
        {
          id: "theatre-u3-stage-picture-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'stage picture' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The visual composition of the stage at any moment" },
              { id: "b", text: "The audience's view" },
              { id: "c", text: "The actor's costume" },
              { id: "d", text: "The script's plot" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stage picture", statement: "The visual composition of the stage — what the audience sees." },
            ],
            steps: [
              { reasoning: "Stage picture is the visual composition — composition, focus, balance at any moment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The visual composition of the stage at any moment",
            commonErrors: [
              "Confusing stage picture (visual composition) with plot or costume.",
            ],
          },
        },
        {
          id: "theatre-u3-stage-picture-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the four main design elements in theatre.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Design elements", statement: "Set, costume, lighting and sound create the world." },
            ],
            steps: [
              { reasoning: "Set — creates the physical environment.", marks: 1, markCode: "M" },
              { reasoning: "Costume — defines character and period.", marks: 1, markCode: "M" },
              { reasoning: "Lighting and sound — create mood, focus and atmosphere.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Set, costume, lighting and sound are the main design elements.",
            commonErrors: [
              "Ignoring design elements or treating them as separate rather than integrated.",
            ],
          },
        },
        {
          id: "theatre-u3-stage-picture-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why design elements should serve the production's concept.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Design integration", statement: "All elements should work together to serve the unifying vision." },
            ],
            steps: [
              { reasoning: "Design elements create the world — they should reflect the concept.", marks: 1, markCode: "M" },
              { reasoning: "Inconsistent design creates confusion — elements fighting each other.", marks: 1, markCode: "M" },
              { reasoning: "Integrated design creates a unified, believable world.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: design is meaning made visible, not decoration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Design elements should serve the concept for unified production.",
            commonErrors: [
              "Choosing design elements for looks rather than conceptual fit.",
            ],
          },
        },
        {
          id: "theatre-u3-stage-picture-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a production's design integration.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating design", statement: "Assess cohesion, conceptual fit and stage picture clarity." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. cohesive design, clear stage pictures, concept served.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. inconsistent elements, unclear focus, design contradicts concept — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with design effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests aligning elements to concept, clarifying stage pictures.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate design by cohesion, conceptual fit and stage picture clarity.",
            commonErrors: [
              "Judging design only by visual appeal, not conceptual coherence.",
            ],
          },
        },
        {
          id: "theatre-u3-stage-picture-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The four main design elements in theatre are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Set, costume, lighting, sound" },
              { id: "b", text: "Script, actors, audience, critic" },
              { id: "c", text: "Plot, theme, character, dialogue" },
              { id: "d", text: "Rehearsal, performance, review, award" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Design elements", statement: "Set, costume, lighting and sound create the world of the play." },
            ],
            steps: [
              { reasoning: "The four design elements are set, costume, lighting and sound.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Set, costume, lighting, sound",
            commonErrors: [
              "Confusing design elements with dramatic elements like plot and theme.",
            ],
          },
        },
        {
          id: "theatre-u3-stage-picture-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a strong stage picture, 'focus' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One clear point the audience is meant to watch" },
              { id: "b", text: "The detail of the set" },
              { id: "c", text: "The actor's emotional performance" },
              { id: "d", text: "The colour of the lighting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stage picture", statement: "A strong picture has one clear focus guiding the audience's eye." },
            ],
            steps: [
              { reasoning: "Focus means the audience always knows where to look — one clear point of attention.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** One clear point the audience is meant to watch",
            commonErrors: [
              "Confusing focus with overall visual interest.",
            ],
          },
        },
        {
          id: "theatre-u3-stage-picture-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Cohesion' in theatrical design refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fast scene changes" },
              { id: "b", text: "Matching costumes only" },
              { id: "c", text: "Loud sound design" },
              { id: "d", text: "All design elements working together to serve one vision" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Design integration", statement: "Cohesion means all elements serve one unifying vision." },
            ],
            steps: [
              { reasoning: "Cohesive design integrates set, costume, lighting and sound into a unified world.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** All elements working together to serve one vision",
            commonErrors: [
              "Thinking cohesion means matching costumes only.",
            ],
          },
        },
        {
          id: "theatre-u3-stage-picture-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sound in theatre can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replace the actors" },
              { id: "b", text: "Only play music" },
              { id: "c", text: "Replace the lighting" },
              { id: "d", text: "Reinforce emotion and create a sense of space" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sound design", statement: "Sound reinforces emotion and creates spatial atmosphere." },
            ],
            steps: [
              { reasoning: "Sound reinforces emotion and establishes a sense of the space the audience imagines.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Reinforce emotion and create a sense of space",
            commonErrors: [
              "Reducing sound design to background music only.",
            ],
          },
        },
        {
          id: "theatre-u3-stage-picture-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might deliberate dissonance between design elements be effective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is always a mistake" },
              { id: "b", text: "It saves money" },
              { id: "c", text: "It confuses the audience productively" },
              { id: "d", text: "It can express psychological tension when used intentionally" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dissonance", statement: "Intentional dissonance can express inner conflict or distorted perception." },
            ],
            steps: [
              { reasoning: "When deliberate, mismatched elements — realistic set with expressionistic light — can express psychological tension.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** It can express psychological tension when intentional",
            commonErrors: [
              "Assuming all design dissonance is accidental or bad.",
            ],
          },
        },
        {
          id: "theatre-u3-stage-picture-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 'visual hierarchy' in the stage picture means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The order costumes are listed" },
              { id: "b", text: "Actors ranked by fame" },
              { id: "c", text: "The audience's eye is guided to the most important element first" },
              { id: "d", text: "Lighting chosen by price" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Visual hierarchy", statement: "Composition guides the eye from most to least important." },
            ],
            steps: [
              { reasoning: "Visual hierarchy arranges elements so the audience's attention lands on what matters first.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The eye is guided to the most important element first",
            commonErrors: [
              "Confusing visual hierarchy with ranking performers.",
            ],
          },
        },
        {
          id: "theatre-u3-stage-picture-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define 'stage picture'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stage picture", statement: "The visual composition of the stage at any moment — what the audience sees." },
            ],
            steps: [
              { reasoning: "The stage picture is the visual composition — what the audience sees at any moment.", marks: 1, markCode: "M" },
              { reasoning: "It involves composition, focus and balance guiding the eye.", marks: 1, markCode: "M" },
              { reasoning: "Definition accurately captures the visual storytelling function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The stage picture is the visual composition of the stage at any moment.",
            commonErrors: [
              "Confusing stage picture with plot or a single costume.",
            ],
          },
        },
        {
          id: "theatre-u3-stage-picture-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how costume can serve a production's concept.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Costume and concept", statement: "Costume defines character and can symbolise or stylise." },
            ],
            steps: [
              { reasoning: "Costume defines character — period, status, personality — within the world.", marks: 1, markCode: "M" },
              { reasoning: "It can also symbolise or stylise, reinforcing the concept rather than merely dressing actors.", marks: 1, markCode: "M" },
              { reasoning: "Example: uniform-like costumes in a play about conformity serve the concept.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Costume defines character and can symbolise or stylise to serve the concept.",
            commonErrors: [
              "Treating costume as decoration rather than meaning.",
            ],
          },
        },
        {
          id: "theatre-u3-stage-picture-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how lighting creates mood and focus in the stage picture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Lighting function", statement: "Colour, intensity and direction create atmosphere and guide attention." },
            ],
            steps: [
              { reasoning: "Colour and intensity create atmosphere — warm for intimacy, cold for alienation.", marks: 1, markCode: "M" },
              { reasoning: "Direction and isolation guide the eye to the focal point of the picture.", marks: 1, markCode: "M" },
              { reasoning: "E.g. a single spotlight on one actor amid darkness creates instant focus.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: lighting is meaning made visible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lighting creates mood through colour/intensity and focus through direction/isolation.",
            commonErrors: [
              "Thinking lighting only makes the stage visible.",
            ],
          },
        },
        {
          id: "theatre-u3-stage-picture-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why theatrical design should not be treated as 'decoration'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Design as meaning", statement: "Design elements create the world and should serve the concept." },
            ],
            steps: [
              { reasoning: "Design elements create the world of the play — set, costume, light, sound.", marks: 1, markCode: "M" },
              { reasoning: "Each should serve the production's concept rather than merely look attractive.", marks: 1, markCode: "M" },
              { reasoning: "Incoherent or purely decorative design confuses the audience's reading of the world.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: design is meaning made visible, not ornament.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Design creates meaning; decoration merely fills space.",
            commonErrors: [
              "Judging design by visual appeal alone.",
            ],
          },
        },
        {
          id: "theatre-u3-stage-picture-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate this design for a memory play: a realistic box set with period costumes, lighting that shifts to stark white for memory scenes, and live foley sound throughout.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating design", statement: "Assess cohesion, conceptual fit and stage picture clarity." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths: realistic base grounds the world; stark white light marks memory scenes; live foley adds texture.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses: possible dissonance if memory lighting contradicts realism unintentionally; foley may distract; each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with its effect on the audience.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests clarifying whether dissonance is intentional and integrating sound with the memory/reality shift.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Realistic base with memory-marking light works if dissonance is deliberate; integrate sound with the shift.",
            commonErrors: [
              "Judging design only by visual appeal, not conceptual coherence.",
            ],
          },
        },
        {
          id: "theatre-u3-stage-picture-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how a designer might use the stage picture to tell a story without words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Visual storytelling", statement: "Composition and focus communicate narrative visually." },
            ],
            steps: [
              { reasoning: "Composition and comparison of images can communicate change — e.g. cluttered vs empty stage.", marks: 1, markCode: "M" },
              { reasoning: "Focus directs narrative — what the audience watches tells them what matters.", marks: 1, markCode: "M" },
              { reasoning: "E.g. a character shrinking in frame as others dominate conveys loss of power.", marks: 1, markCode: "R" },
              { reasoning: "The audience reads the visual story even when no one speaks.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the stage picture is visual storytelling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Composition and focus tell visual stories without dialogue.",
            commonErrors: [
              "Assuming narrative requires words rather than visual composition.",
            ],
          },
        },
      ],
    },
  ],
};
