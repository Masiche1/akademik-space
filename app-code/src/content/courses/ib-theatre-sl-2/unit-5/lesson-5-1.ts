import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "theatre-u5-lesson-5-1",
  code: "5-1",
  title: "Directorial Interpretation",
  goal: "I CAN develop and communicate a directorial interpretation that unifies all production choices.",
  standards: [
    "Directing",
    "Interpretation",
  ],
  vocabulary: [
    { term: "Directorial interpretation", definition: "The director's vision of what the play means and how to communicate it." },
    { term: "Concept", definition: "The unifying idea or approach that guides all production choices." },
    { term: "Stylisation", definition: "The degree of realism or abstraction in performance and design." },
    { term: "Given circumstances", definition: "The fixed facts of the play that must be respected." },
    { term: "Subtext", definition: "The meaning beneath the spoken words." },
    { term: "Dramatic intention", definition: "What the playwright aims to achieve with a scene or moment." },
  ],
  concepts: [
    {
      id: "theatre-u5-directorial-vision",
      title: "Developing directorial vision",
      skill: "Develop a directorial concept and translate it into consistent production choices.",
      lesson: {
        sections: [
          {
            heading: "Finding the vision",
            body: "Directorial interpretation begins with the text: what is this play about? What's the playwright's intention? What's the production's point of view? A concept might be 'this is a play about the impossibility of communication' or 'this is a play about power and its corruption'. The concept guides every choice.",
          },
          {
            heading: "Translating vision to choices",
            body: "Once the concept is clear, every element serves it: casting reflects the concept's world; design creates the concept's space; movement and delivery express the concept's emotions; interpretation of scenes reveals the concept's themes. Inconsistency — a concept of 'isolation' with warm lighting and communal staging — undermines the vision.",
          },
          {
            heading: "Communication and collaboration",
            body: "The director must communicate the vision clearly: to designers (what world are we creating?), to actors (what are we saying?), to the team (what's the goal?). Collaboration doesn't mean democracy — the director has final authority — but input from designers and actors can enrich the vision.",
          },
        ],
        keyFormulas: [
          { name: "Directorial process", statement: "Text analysis → concept → choices → communication = production" },
          { name: "Concept consistency", statement: "Every element should serve the unifying vision" },
        ],
        workedExample: {
          problem: "A director wants to stage a play about 'memory and forgetting'. How might this concept shape production choices?",
          solution: "Design: fragmented, overlapping sets suggesting memory's instability. Lighting: shifting, dreamlike states. Movement: characters move between clarity and confusion. Delivery: lines sometimes repeat or contradict — memory's unreliability. Every choice serves the memory theme.",
        },
      },
      questions: [
        {
          id: "theatre-u5-directorial-vision-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A directorial concept is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The unifying interpretation guiding all production choices" },
              { id: "b", text: "The play's plot summary" },
              { id: "c", text: "The actor's biography" },
              { id: "d", text: "The costume design" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Directorial concept", statement: "The unifying interpretation guiding all production choices." },
            ],
            steps: [
              { reasoning: "A directorial concept is the unifying interpretation guiding all choices.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The unifying interpretation guiding all production choices",
            commonErrors: [
              "Confusing concept (unifying vision) with plot or design.",
            ],
          },
        },
        {
          id: "theatre-u5-directorial-vision-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the process of developing a directorial concept.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Concept development", statement: "Text analysis → interpretation → concept → production choices." },
            ],
            steps: [
              { reasoning: "Analyse the text — themes, structure, characters, context.", marks: 1, markCode: "M" },
              { reasoning: "Develop interpretation — what is this play about? What's the point of view?", marks: 1, markCode: "M" },
              { reasoning: "Translate to choices — every element serves the concept.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Text analysis → interpretation → concept → production choices.",
            commonErrors: [
              "Choosing a concept without deep text analysis.",
            ],
          },
        },
        {
          id: "theatre-u5-directorial-vision-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why consistency is crucial in directorial vision.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Concept consistency", statement: "Inconsistent choices undermine the vision and confuse the audience." },
            ],
            steps: [
              { reasoning: "Every element should serve the concept — casting, design, movement, delivery.", marks: 1, markCode: "M" },
              { reasoning: "Inconsistency creates confusion — elements fighting each other.", marks: 1, markCode: "M" },
              { reasoning: "Consistent vision creates a unified, believable world.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the concept is the spine; all choices are the body.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Consistency ensures all elements serve the unifying vision.",
            commonErrors: [
              "Making choices that contradict the concept.",
            ],
          },
        },
        {
          id: "theatre-u5-directorial-vision-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a director's concept for a described play.",
          parts: [
            { label: "a", prompt: "State the directorial concept.", marks: 2 },
            { label: "b", prompt: "Explain how it shapes two production choices.", marks: 2 },
            { label: "c", prompt: "Evaluate whether the concept is effective.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating concept", statement: "Assess whether concept is clear, consistent and serves the play." },
            ],
            steps: [
              { part: "a", reasoning: "Concept clearly stated.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Concept accurately identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two production choices explained through concept lens.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Concept-choice connections convincingly explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Effective if concept is clear, consistent and illuminates rather than distorts.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Effectiveness convincingly evaluated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate concept by clarity, consistency and service to the play.",
            commonErrors: [
              "Judging concept by novelty rather than effectiveness.",
            ],
          },
        },
        {
          id: "theatre-u5-directorial-vision-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Given circumstances' in directorial interpretation refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The fixed facts of the play that the director must respect" },
              { id: "b", text: "The director's personal opinions about the play" },
              { id: "c", text: "The audience's expectations" },
              { id: "d", text: "The costumes chosen by the designer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Given circumstances", statement: "The fixed facts of the play that must be respected." },
            ],
            steps: [
              { reasoning: "Given circumstances are the fixed facts of the text that cannot be changed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The fixed facts of the play that the director must respect",
            commonErrors: [
              "Confusing given circumstances with the director's interpretation.",
            ],
          },
        },
        {
          id: "theatre-u5-directorial-vision-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A directorial concept should primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replace the playwright's text" },
              { id: "b", text: "Summarise the plot for the audience" },
              { id: "c", text: "Guide every production choice toward a unifying interpretation" },
              { id: "d", text: "Decide only the costume design" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Concept function", statement: "The concept is the unifying idea guiding all production choices." },
            ],
            steps: [
              { reasoning: "The concept guides every element: casting, design, movement, delivery.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Guide every production choice toward a unifying interpretation",
            commonErrors: [
              "Thinking a concept is only a plot summary or a single design choice.",
            ],
          },
        },
        {
          id: "theatre-u5-directorial-vision-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Actors breaking the fourth wall to address the audience directly is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metatheatrical or abstract stylisation" },
              { id: "b", text: "Naturalistic acting" },
              { id: "c", text: "Realistic stylisation" },
              { id: "d", text: "Method acting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metatheatre", statement: "Performance that acknowledges its own theatricality." },
            ],
            steps: [
              { reasoning: "Addressing the audience acknowledges the theatrical frame, an abstract/metatheatrical choice.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Metatheatrical or abstract stylisation",
            commonErrors: [
              "Confusing stylisation levels with acting techniques.",
            ],
          },
        },
        {
          id: "theatre-u5-directorial-vision-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "For a play about 'power and its corruption', which design choice best serves the concept?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Minimal set suggesting nothing" },
              { id: "b", text: "Light, pastel costumes suggesting innocence" },
              { id: "c", text: "Bright, open lighting suggesting freedom" },
              { id: "d", text: "Dark, heavy, oppressive set and lighting suggesting control" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Concept consistency", statement: "Design choices should reflect and reinforce the unifying concept." },
            ],
            steps: [
              { reasoning: "Power and corruption are served by oppressive, heavy visual imagery.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Dark, heavy, oppressive set and lighting suggesting control",
            commonErrors: [
              "Choosing elements for visual appeal rather than conceptual fit.",
            ],
          },
        },
        {
          id: "theatre-u5-directorial-vision-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A director insists on a radical setting that contradicts the play's themes. This most likely indicates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A strong vision serving the play" },
              { id: "b", text: "A necessary modernisation" },
              { id: "c", text: "A choice serving the director's ego rather than the play" },
              { id: "d", text: "A technique for engaging young audiences" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Risk vs reward", statement: "Choices should serve the play's themes, not the director's agenda." },
            ],
            steps: [
              { reasoning: "Choices contradicting the themes fail the justification test — they serve ego, not the play.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A choice serving the director's ego rather than the play",
            commonErrors: [
              "Assuming boldness automatically equals strong direction.",
            ],
          },
        },
        {
          id: "theatre-u5-directorial-vision-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "'Subtext' in directorial interpretation refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The stage directions in the script" },
              { id: "b", text: "The title of the play" },
              { id: "c", text: "The meaning beneath the spoken words" },
              { id: "d", text: "The literal meaning of the words spoken" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subtext", statement: "The meaning beneath the spoken words." },
            ],
            steps: [
              { reasoning: "Subtext is the unspoken meaning underlying dialogue.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The meaning beneath the spoken words",
            commonErrors: [
              "Confusing subtext with literal text or stage directions.",
            ],
          },
        },
        {
          id: "theatre-u5-directorial-vision-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "When communicating the vision to the production team, a director should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Delegate all interpretation to the designers" },
              { id: "b", text: "Keep the vision secret until opening night" },
              { id: "c", text: "Clearly and specifically explain the unifying concept and goals" },
              { id: "d", text: "Let each member guess the vision independently" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Communicating vision", statement: "The director must explain what world and meaning the production aims for." },
            ],
            steps: [
              { reasoning: "Clear communication of the concept enables consistent choices across all departments.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Clearly and specifically explain the unifying concept and goals",
            commonErrors: [
              "Assuming the team can infer an uncommunicated vision.",
            ],
          },
        },
        {
          id: "theatre-u5-directorial-vision-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what a director should do once a directorial concept has been formed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Translating vision", statement: "Concept must become consistent production choices across all elements." },
            ],
            steps: [
              { reasoning: "Translate the concept into concrete choices — casting, design, movement, delivery.", marks: 1, markCode: "M" },
              { reasoning: "Communicate the vision clearly to designers, actors and technicians.", marks: 1, markCode: "M" },
              { reasoning: "Ensure every choice serves the concept consistently throughout the production.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Translate concept to choices, communicate the vision, maintain consistency.",
            commonErrors: [
              "Forming a concept but leaving production choices unexamined.",
            ],
          },
        },
        {
          id: "theatre-u5-directorial-vision-q13",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Identify two production elements that should reflect the directorial concept and explain how.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Concept consistency", statement: "Every production element should serve the unifying vision." },
            ],
            steps: [
              { reasoning: "Name one element, e.g. set design creating the concept's physical world.", marks: 1, markCode: "M" },
              { reasoning: "Name a second element, e.g. lighting or movement expressing the concept's emotion.", marks: 1, markCode: "M" },
              { reasoning: "Link each element explicitly to the concept's themes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two elements — set, costume, lighting, sound, movement, delivery — each linked to the concept.",
            commonErrors: [
              "Naming elements without explaining their connection to the concept.",
            ],
          },
        },
        {
          id: "theatre-u5-directorial-vision-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a directorial concept that contradicts the play's given circumstances is problematic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Given circumstances", statement: "The fixed facts of the play must be respected by interpretation." },
            ],
            steps: [
              { reasoning: "Given circumstances are the facts the text cannot change — time, place, events.", marks: 1, markCode: "M" },
              { reasoning: "Contradicting them produces incoherence — the production fights the text.", marks: 1, markCode: "M" },
              { reasoning: "The audience loses trust when the world contradicts the story's logic.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: interpretation should reveal, not distort, the given circumstances.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contradicting given circumstances creates incoherence and undermines the interpretation.",
            commonErrors: [
              "Believing any concept can override the text's fixed facts.",
            ],
          },
        },
        {
          id: "theatre-u5-directorial-vision-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a director can check that production choices remain consistent with the concept.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Maintaining consistency", statement: "Each element should be evaluated against the unifying vision." },
            ],
            steps: [
              { reasoning: "State the concept explicitly so it can be tested against every choice.", marks: 1, markCode: "M" },
              { reasoning: "Review each element — casting, set, costume, lighting, sound, movement — against it.", marks: 1, markCode: "M" },
              { reasoning: "Identify any choices that contradict or dilute the vision.", marks: 1, markCode: "R" },
              { reasoning: "Revise inconsistent elements so all serve the same idea.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Test each production element against the stated concept and revise contradictions.",
            commonErrors: [
              "Assuming consistency is automatic rather than actively checked.",
            ],
          },
        },
        {
          id: "theatre-u5-directorial-vision-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A director stages a classic tragedy in modern dress with contemporary technology. Discuss whether this choice can serve the play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating choices", statement: "Bold choices are justified when they illuminate the play's themes." },
            ],
            steps: [
              { reasoning: "The choice can serve the play if it highlights timeless themes — e.g. communication, conflict.", marks: 1, markCode: "M" },
              { reasoning: "It fails if it trivialises the tragedy or distracts from the language and emotion.", marks: 1, markCode: "M" },
              { reasoning: "Justification must come from thematic resonance, not novelty or audience appeal.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: modernisation is valid only when it deepens understanding of the play.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Justified only if the modern setting illuminates rather than distorts the play's themes.",
            commonErrors: [
              "Judging the choice by novelty rather than thematic effect.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u5-interpretation-choices",
      title: "Interpretation and stylisation",
      skill: "Make and justify interpretation and stylisation choices for performance and design.",
      lesson: {
        sections: [
          {
            heading: "Levels of stylisation",
            body: "**Realistic** production aims to convince — the audience believes they're watching real life. **Partially stylised** mixes realism with deliberate distortion — some elements realistic, others symbolic. **Abstract/metatheatrical** acknowledges theatricality — actors address audience, sets are obviously constructed. Each serves different purposes.",
          },
          {
            heading: "Justifying choices",
            body: "Every choice should be justifiable: why this interpretation? Why this stylisation? Why this design? The best directors can articulate reasoning: 'This choice serves the play's theme because...' Unjustified choices feel arbitrary; justified ones feel inevitable.",
          },
          {
            heading: "Risk and reward",
            body: "Bold interpretations can illuminate or distort. A radical concept might reveal new meanings or alienate the audience. The director must weigh risk against reward: does this choice serve the play or the director's ego? The best interpretations reveal the play's complexity, not impose the director's agenda.",
          },
        ],
        keyFormulas: [
          { name: "Stylisation spectrum", statement: "Realistic → partially stylised → abstract/metatheatrical" },
          { name: "Justification test", statement: "Does this choice serve the play's theme or the director's ego?" },
        ],
        workedExample: {
          problem: "A director wants to stage 'Romeo and Juliet' in modern dress with smartphones. What are the risks and rewards?",
          solution: "Reward: makes the play accessible, highlights timeless themes of young love and family conflict. Risk: may trivialise the tragedy, distract from language, or feel gimmicky. Justification needed: does modern setting illuminate or distort? The choice must serve the play's themes, not just update it.",
        },
      },
      questions: [
        {
          id: "theatre-u5-interpretation-choices-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'metatheatrical' production is one that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acknowledges its own theatricality — breaking the fourth wall" },
              { id: "b", text: "Is performed outdoors" },
              { id: "c", text: "Uses realistic sets" },
              { id: "d", text: "Has no actors" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metatheatre", statement: "Performance that acknowledges its own theatricality." },
            ],
            steps: [
              { reasoning: "Metatheatre acknowledges theatricality — actors address audience, sets are constructed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Acknowledges its own theatricality — breaking the fourth wall",
            commonErrors: [
              "Confusing metatheatre with realism or naturalism.",
            ],
          },
        },
        {
          id: "theatre-u5-interpretation-choices-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the three levels of stylisation available to a director.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Stylisation levels", statement: "Realistic, partially stylised and abstract/metatheatrical." },
            ],
            steps: [
              { reasoning: "Realistic — aims to convince; creates illusion of real life.", marks: 1, markCode: "M" },
              { reasoning: "Partially stylised — mixes realism with deliberate distortion.", marks: 1, markCode: "M" },
              { reasoning: "Abstract/metatheatrical — acknowledges theatricality; comments on the play itself.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Realistic, partially stylised and abstract are stylisation levels.",
            commonErrors: [
              "Thinking there's only one 'correct' level of realism.",
            ],
          },
        },
        {
          id: "theatre-u5-interpretation-choices-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a director should evaluate risky interpretation choices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating risk", statement: "Weigh whether bold choices illuminate the play or serve the director's ego." },
            ],
            steps: [
              { reasoning: "Bold interpretations can illuminate new meanings or alienate audiences.", marks: 1, markCode: "M" },
              { reasoning: "The test: does this choice serve the play's themes or the director's agenda?", marks: 1, markCode: "M" },
              { reasoning: "Risk is justified when it reveals the play's complexity rather than imposing a vision.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the best interpretations illuminate; the worst impose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Risky choices are justified when they illuminate rather than impose.",
            commonErrors: [
              "Making bold choices without considering whether they serve the play.",
            ],
          },
        },
        {
          id: "theatre-u5-interpretation-choices-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a described directorial choice.",
          parts: [
            { label: "a", prompt: "Describe the choice being made.", marks: 2 },
            { label: "b", prompt: "Explain its potential effects.", marks: 2 },
            { label: "c", prompt: "Evaluate whether the choice is justified.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating choices", statement: "Assess effects and whether choice serves the play." },
            ],
            steps: [
              { part: "a", reasoning: "Choice clearly described, e.g. setting play in contemporary context.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Choice accurately identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Effects explained — accessibility, anachronism risk, thematic resonance or distortion.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effects convincingly explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Justified if it illuminates themes; unjustified if it's gimmick or ego.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned evaluation of justification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate choices by effects and whether they serve the play.",
            commonErrors: [
              "Judging choices by novelty rather than effectiveness.",
            ],
          },
        },
        {
          id: "theatre-u5-interpretation-choices-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'realistic' production aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comment on the play's construction" },
              { id: "b", text: "Convince the audience they are watching real life" },
              { id: "c", text: "Use only abstract movement" },
              { id: "d", text: "Avoid any set design" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Realistic stylisation", statement: "Aims to convince the audience they are watching real life." },
            ],
            steps: [
              { reasoning: "Realistic production seeks to create the illusion of real life.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Convince the audience they are watching real life",
            commonErrors: [
              "Confusing realistic stylisation with naturalism of acting alone.",
            ],
          },
        },
        {
          id: "theatre-u5-interpretation-choices-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Partially stylised' production means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A production performed without a script" },
              { id: "b", text: "A production with no style at all" },
              { id: "c", text: "Only costumes are stylised" },
              { id: "d", text: "A mix of realistic elements and deliberate distortion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Partially stylised", statement: "Mixes realism with deliberate distortion in performance and design." },
            ],
            steps: [
              { reasoning: "Partially stylised combines realistic elements with symbolic or distorted ones.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A mix of realistic elements and deliberate distortion",
            commonErrors: [
              "Thinking stylisation must be total or absent.",
            ],
          },
        },
        {
          id: "theatre-u5-interpretation-choices-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "To justify a bold directorial choice, a director must:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Show that it is the most surprising option" },
              { id: "b", text: "Articulate reasoning linking the choice to the play's themes" },
              { id: "c", text: "Prove it is the most expensive option" },
              { id: "d", text: "Ensure everyone on the team agrees" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Justifying choices", statement: "Choices are justified by reasoning that connects them to the play's themes." },
            ],
            steps: [
              { reasoning: "Justification means explaining why a choice serves the play, not why it is novel.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Articulate reasoning linking the choice to the play's themes",
            commonErrors: [
              "Confusing justification with novelty or consensus.",
            ],
          },
        },
        {
          id: "theatre-u5-interpretation-choices-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which statement best describes a strong justification for a bold interpretation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the production stand out from others" },
              { id: "b", text: "It gives actors more to do" },
              { id: "c", text: "It reveals the play's complexity rather than imposing the director's agenda" },
              { id: "d", text: "It is easier to stage than a conventional production" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Illumination vs imposition", statement: "Strong interpretations reveal the play's complexity, not the director's ego." },
            ],
            steps: [
              { reasoning: "The justification test asks whether the choice illuminates the play or serves the director.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It reveals the play's complexity rather than imposing the director's agenda",
            commonErrors: [
              "Assuming boldness is self-justifying.",
            ],
          },
        },
        {
          id: "theatre-u5-interpretation-choices-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In theatre, 'stylisation' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The size of the theatre" },
              { id: "b", text: "The degree of realism or abstraction in performance and design" },
              { id: "c", text: "The number of rehearsals" },
              { id: "d", text: "The actor's training method" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stylisation", statement: "The degree of realism or abstraction in performance and design." },
            ],
            steps: [
              { reasoning: "Stylisation describes how realistic or abstract the production's style is.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The degree of realism or abstraction in performance and design",
            commonErrors: [
              "Confusing stylisation with rehearsal process or venue.",
            ],
          },
        },
        {
          id: "theatre-u5-interpretation-choices-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A character in 'Hamlet' pauses to comment directly on the play's events to the audience. This technique is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Realism" },
              { id: "b", text: "Metatheatrical or abstract stylisation" },
              { id: "c", text: "Illusionism" },
              { id: "d", text: "Naturalism" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metatheatre", statement: "Performance acknowledging its own theatricality." },
            ],
            steps: [
              { reasoning: "Direct audience address comments on the theatrical frame — metatheatrical/abstract stylisation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Metatheatrical or abstract stylisation",
            commonErrors: [
              "Confusing metatheatre with realism or naturalism.",
            ],
          },
        },
        {
          id: "theatre-u5-interpretation-choices-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A radical concept risks alienating the audience. Before proceeding, the director should weigh:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The budget against the ticket price" },
              { id: "b", text: "The number of seats in the theatre" },
              { id: "c", text: "The critics' likely opinions" },
              { id: "d", text: "The risk against the reward — whether the choice serves the play" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Risk and reward", statement: "Directors weigh whether bold choices illuminate the play or distort it." },
            ],
            steps: [
              { reasoning: "The key question is whether the choice serves the play's complexity, not external factors.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The risk against the reward — whether the choice serves the play",
            commonErrors: [
              "Weighing external factors rather than artistic justification.",
            ],
          },
        },
        {
          id: "theatre-u5-interpretation-choices-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the difference between realistic and abstract stylisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Stylisation spectrum", statement: "Realistic → partially stylised → abstract/metatheatrical." },
            ],
            steps: [
              { reasoning: "Realistic aims to convince the audience they are watching real life.", marks: 1, markCode: "M" },
              { reasoning: "Abstract acknowledges theatricality — sets are constructed, actors may address the audience.", marks: 1, markCode: "M" },
              { reasoning: "The difference lies in illusion versus acknowledged artifice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Realistic creates illusion of real life; abstract acknowledges theatrical artifice.",
            commonErrors: [
              "Describing both without contrast, or confusing with acting style.",
            ],
          },
        },
        {
          id: "theatre-u5-interpretation-choices-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why every directorial choice should be justifiable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Justification", statement: "Justified choices feel inevitable; unjustified ones feel arbitrary." },
            ],
            steps: [
              { reasoning: "Unjustified choices appear arbitrary and can undermine the production's coherence.", marks: 1, markCode: "M" },
              { reasoning: "Justification links each choice to the play's themes, creating a unified world.", marks: 1, markCode: "M" },
              { reasoning: "The audience senses whether choices serve the play or the director's agenda.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Justified choices serve the play's themes; unjustified ones feel arbitrary.",
            commonErrors: [
              "Thinking justification is only needed for controversial choices.",
            ],
          },
        },
        {
          id: "theatre-u5-interpretation-choices-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a director should evaluate whether a bold interpretation illuminates or distorts a play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating risk", statement: "Weigh whether bold choices reveal the play's complexity or impose an agenda." },
            ],
            steps: [
              { reasoning: "Consider whether the interpretation reveals new meanings within the text.", marks: 1, markCode: "M" },
              { reasoning: "Test it against the given circumstances and dramatic intention.", marks: 1, markCode: "M" },
              { reasoning: "Ask whether the choice serves the play's themes or the director's ego.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: illuminating choices deepen understanding; distorting choices alienate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate by thematic resonance, fidelity to text, and service to the play.",
            commonErrors: [
              "Judging bold interpretations only by audience reaction.",
            ],
          },
        },
        {
          id: "theatre-u5-interpretation-choices-q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Identify two factors a director should consider when choosing a stylisation level for a production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Choosing stylisation", statement: "Stylisation should serve the play's themes and intended audience." },
            ],
            steps: [
              { reasoning: "The play's themes and dramatic intention — what effect does it need?", marks: 1, markCode: "M" },
              { reasoning: "The production concept — stylisation must be consistent with the vision.", marks: 1, markCode: "M" },
              { reasoning: "The intended audience and context — accessibility versus alienation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Themes, production concept and audience should guide stylisation choice.",
            commonErrors: [
              "Choosing stylisation based on personal preference alone.",
            ],
          },
        },
        {
          id: "theatre-u5-interpretation-choices-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss the risks and rewards of radically reinterpreting a classic play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Risk and reward", statement: "Radical interpretations can illuminate new meanings or alienate audiences." },
            ],
            steps: [
              { reasoning: "Reward: can make classic themes accessible and reveal contemporary relevance.", marks: 1, markCode: "M" },
              { reasoning: "Risk: may trivialise the play, distort themes, or alienate the audience.", marks: 1, markCode: "M" },
              { reasoning: "The test is whether the reinterpretation serves the play's complexity.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: justified when it illuminates; unjustified when it imposes or gimmicks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rewards are accessibility and new insight; risks are distortion and alienation — justified only if serving the play.",
            commonErrors: [
              "Listing risks and rewards without evaluating justification.",
            ],
          },
        },
      ],
    },
  ],
};
