import type { Lesson } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

export const lesson23: Lesson = {
  id: "et10-u2-lesson-2-3",
  code: "2-3",
  title: "Dramatic Methods and the Essay",
  goal: "I CAN analyse stage directions, dramatic irony and structure, and plan and write a focused essay on An Inspector Calls.",
  standards: ["4ET1 Paper 2 Section A", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Stage direction", definition: "Instructions in a script for how a scene looks, sounds or is acted." },
    { term: "Dramatic irony", definition: "When the audience knows more than the characters." },
    { term: "Cliffhanger", definition: "A tense ending to an act that leaves the audience wanting to know what happens next." },
    { term: "Unity of time and place", definition: "A convention in which a play takes place in one location over continuous time." },
    { term: "Climax", definition: "The most intense or important moment in a play." },
    { term: "Thesis", definition: "A clear central argument that runs through an essay." },
  ],
  concepts: [
    {
      id: "et10-u2-dramatic-methods",
      title: "Stage directions, dramatic irony and structure",
      skill: "Analyse how Priestley uses theatrical methods to shape meaning and audience response.",
      lesson: {
        sections: [
          {
            heading: "Stage directions and staging",
            body: "Priestley uses stage directions to establish atmosphere and character. The lighting changes from “pink and intimate” to “brighter and harder” with the Inspector's arrival, symbolising the shift from comfortable ignorance to moral scrutiny. Directions about how characters speak or react reveal feelings that the dialogue hides.",
          },
          {
            heading: "Dramatic irony",
            body: "The audience of 1945 knows what happened after 1912, so Mr Birling's confident statements are undercut. Dramatic irony also arises when Mrs Birling condemns the unknown father of the child, not realising it is her son. It creates tension and invites the audience to judge the characters.",
          },
          {
            heading: "Structure",
            body: "The play takes place in one room in continuous time, which intensifies pressure. Each act ends on a cliffhanger, and the Inspector's questions follow a chain in which each revelation leads to the next. The final phone call reverses the family's relief and leaves the audience uneasy.",
          },
        ],
        keyFormulas: [
          { name: "Lighting symbolism", statement: "Changes in lighting signal a change in mood, power or truth." },
          { name: "Cliffhanger", statement: "An act ends at a moment of suspense, driving the audience into the next act." },
          { name: "Single setting", statement: "Confinement to one room builds claustrophobia and intensity." },
        ],
        workedExample: {
          problem: "How does Priestley use the ending of the play to affect the audience?",
          solution: "Priestley ends the play with a telephone call announcing that a young woman has died and an inspector is on his way. After the family has been told that the Inspector was a hoax, this twist undermines their relief and leaves the audience with a final cliffhanger. The sudden reversal suggests that the family cannot escape responsibility, and the unresolved ending invites the audience to carry the Inspector's warning into their own lives.",
        },
      },
      questions: [
        {
          id: "et10-u2-dramatic-methods-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the effect of the lighting changing from “pink and intimate” to “brighter and harder” when the Inspector arrives?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It tells the audience the scene has moved outdoors" },
              { id: "b", text: "It shows the room has been decorated" },
              { id: "c", text: "It shows that the family is relaxed" },
              { id: "d", text: "It signals a shift from comfortable ignorance to harsh scrutiny" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Stage direction as symbol", statement: "Lighting can symbolise changes in mood or truth." }],
            steps: [{ reasoning: "Harder light suggests exposure and examination.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** The harsher light suggests the family is now exposed and scrutinised.",
            commonErrors: ["Reading the lighting literally (a)."],
          },
        },
        {
          id: "et10-u2-dramatic-methods-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how Priestley uses cliffhangers at the ends of acts.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cliffhanger", statement: "A moment of suspense at an act's end that drives audience interest." }],
            steps: [
              { reasoning: "Each act ends on a revelation or tense moment, such as Sheila's recognition of her part or the Inspector's question to Eric.", marks: 1, markCode: "AO1" },
              { reasoning: "This keeps the audience engaged and eager for the next stage of the investigation.", marks: 1, markCode: "AO2" },
              { reasoning: "The pattern reinforces the structure of one character being exposed after another.", marks: 1, markCode: "AO2" },
              { reasoning: "It builds towards the final twist and the Inspector's message.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Cliffhangers keep tension high, reinforce the chain of revelations and drive the audience towards the final twist.",
            commonErrors: ["Describing plot without effect."],
          },
        },
        {
          id: "et10-u2-dramatic-methods-q3",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "How does Priestley use dramatic irony to shape the audience's response to the Birlings? Use very short quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dramatic irony", statement: "The audience's greater knowledge creates judgement and tension." },
              { kind: "context", name: "Hindsight", statement: "The 1945 audience knows the Titanic sank and wars followed." },
            ],
            steps: [
              { reasoning: "Mr Birling's early claims about the Titanic and war are ironic because the audience knows he is wrong.", marks: 2, markCode: "AO2" },
              { reasoning: "This undermines his authority so that the audience is less likely to trust his opinions on business and responsibility.", marks: 2, markCode: "AO1" },
              { reasoning: "Mrs Birling condemns the father of Eva's child without knowing it is Eric, which makes her harsh judgement self-damning.", marks: 2, markCode: "AO2" },
              { reasoning: "The final phone call causes the family to relax before the news of a real inspector, which is ironic for a family that has learned nothing.", marks: 2, markCode: "AO2" },
              { reasoning: "The cumulative effect invites the audience to reject the older generation's values and consider their own responsibility.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "Dramatic irony exposes Birling's folly, makes Mrs Birling condemn her own son and undercuts the family's relief at the end, leading the audience to judge the Birlings and reflect on their own attitudes.",
            commonErrors: ["Defining irony but giving no examples.", "Ignoring audience response."],
            levels: levels(10),
          },
        },
        {
          id: "et10-u2-dramatic-methods-q4",
          difficulty: "challenge",
          totalMarks: 27,
          stem: "Answer all parts about An Inspector Calls.",
          parts: [
            { label: "a", prompt: "Give two features of the play's setting.", marks: 2 },
            { label: "b", prompt: "Explain the effect of Priestley's use of a single setting.", marks: 4 },
            { label: "c", prompt: "How does Priestley use stage directions to present the Inspector?", marks: 6 },
            { label: "d", prompt: "'The ending of An Inspector Calls is its most powerful moment.' How far do you agree? Refer to dramatic methods and context.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Unity of place and time", statement: "One room and continuous action intensify pressure." },
              { kind: "technique", name: "Stage directions", statement: "Directions shape atmosphere and character." },
              { kind: "skill", name: "Evaluative judgement", statement: "Weigh the ending against other powerful moments." },
            ],
            steps: [
              { part: "a", reasoning: "The play is set in the dining room of the Birlings' house.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The action takes place in one evening, in continuous time.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "A single setting intensifies tension because the characters cannot escape.", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "It keeps focus on the family and their reactions, reinforcing their responsibility.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The description of his “massiveness” and solid presence gives him authority.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Directions on how he speaks and looks at people show his control of the room.", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Agreement: the final phone call is a shocking twist that leaves the audience uneasy and carries the moral weight of the play.", marks: 4, markCode: "AO1" },
              { part: "d", reasoning: "Analysis of other moments: the Inspector's final speech and Sheila's recognition of her guilt may be equally powerful.", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "Analysis of structural methods: cliffhanger, reversal, open ending that invites reflection.", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Context: written in 1945, the ending warns the audience that complacency risks repeating past disasters.", marks: 4, markCode: "AO4" },
            ],
            finalAnswer: "(a) One room; one evening. (b) Confinement intensifies tension and keeps focus on the family. (c) Directions give him weight and control. (d) A top answer judges the ending to be powerful because of its reversal and open question, while weighing the Inspector's speech and linking to 1945.",
            commonErrors: ["Just narrating the ending.", "Ignoring alternative moments.", "No reference to audience effect."],
            levels: [...levels(6, "c"), ...levels(15, "d")],
          },
        },
      ],
    },
    {
      id: "et10-u2-planning-essay",
      title: "Planning and writing the essay",
      skill: "Plan a focused argument with a clear thesis, use short embedded quotations and integrate context.",
      lesson: {
        sections: [
          {
            heading: "Unpack the question",
            body: "Underline the key words in the question. If it asks 'how does Priestley present...', focus on methods and effects, not just ideas. If it asks 'how far do you agree', give a judgement and consider other views.",
          },
          {
            heading: "Plan a thesis and three points",
            body: "Write a one-sentence argument, then three points that develop it across the play: beginning, middle and end. Note one short quotation or specific moment for each. Because An Inspector Calls is not printed in the exam, you must know short quotations by heart.",
          },
          {
            heading: "Write analytically",
            body: "Begin each paragraph with a point that answers the question, add a precise reference, explain the writer's method, then link to context or audience. End with a conclusion that gives a final judgement rather than repeating your points.",
          },
        ],
        keyFormulas: [
          { name: "Paragraph structure", statement: "Point, reference, method, effect, context link." },
          { name: "Thesis", statement: "One clear sentence that answers the question and guides your essay." },
          { name: "Short quotation", statement: "Use two to five words and explain them closely." },
        ],
        workedExample: {
          problem: "Plan an answer to: 'How does Priestley present the theme of responsibility?'",
          solution: "Thesis: Priestley argues that responsibility is collective, using the Inspector's chain of questions to expose the Birlings' selfishness. Point 1 (Act One): Birling's individualism, “mind his own business”, set against the Inspector's arrival. Point 2 (Act Two): Sheila and Eric accept guilt while Mrs Birling refuses. Point 3 (Act Three): the final speech and the phone call test whether anyone has learned. Context: socialist message to a 1945 audience. Conclusion: responsibility is presented as a duty everyone shares.",
        },
      },
      questions: [
        {
          id: "et10-u2-planning-essay-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is the best thesis statement for an essay on the Inspector's role?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Priestley uses the Inspector as a moral voice who forces the Birlings, and the audience, to confront shared responsibility." },
              { id: "b", text: "The Inspector is a police officer." },
              { id: "c", text: "The Inspector appears in the play." },
              { id: "d", text: "I will write about the Inspector." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Thesis", statement: "An arguable claim that answers the question." }],
            steps: [{ reasoning: "Option (b) makes a clear argument about purpose.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** It is a clear, arguable thesis.",
            commonErrors: ["Choosing a statement of fact rather than an argument."],
          },
        },
        {
          id: "et10-u2-planning-essay-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite this weak sentence so it makes a clear analytical point: 'Mr Birling is in the play and he is rich.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Analytical point", statement: "Link character to method, effect and message." }],
            steps: [
              { reasoning: "Makes a clear point about presentation (for example, arrogant and complacent).", marks: 1, markCode: "AO1" },
              { reasoning: "Refers to a specific moment such as his predictions about the Titanic or war.", marks: 1, markCode: "AO1" },
              { reasoning: "Explains the method (dramatic irony) and its effect.", marks: 1, markCode: "AO2" },
              { reasoning: "Links to Priestley's purpose or context.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Priestley presents Mr Birling as arrogant through his confident predictions about the Titanic and war; dramatic irony exposes his folly and discredits the capitalist values he represents.",
            commonErrors: ["Staying descriptive.", "No method named."],
          },
        },
        {
          id: "et10-u2-planning-essay-q3",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write one analytical paragraph answering: 'How does Priestley present Eric?' Use at most a few words of quotation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analytical paragraph", statement: "Point, reference, method, effect, link to purpose." },
              { kind: "context", name: "Generational contrast", statement: "Eric belongs to the younger generation who respond to the Inspector." },
            ],
            steps: [
              { reasoning: "A clear point about Eric's character as troubled and ultimately remorseful.", marks: 2, markCode: "AO1" },
              { reasoning: "Precise reference to his behaviour, such as his drinking and his treatment of Eva.", marks: 2, markCode: "AO1" },
              { reasoning: "Analysis of method: his nervous behaviour, his confession and his challenge to his parents.", marks: 2, markCode: "AO2" },
              { reasoning: "Explanation of effect on the audience, who feel both disapproval and sympathy.", marks: 2, markCode: "AO2" },
              { reasoning: "Link to Priestley's message and the hope placed in the younger generation.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "Model: Priestley presents Eric as a flawed but remorseful figure. His drinking and treatment of Eva reveal weakness, yet his anguished confession and his blame of his parents show a conscience. The audience both condemns and pities him, and his change supports Priestley's hope that the young will learn.",
            commonErrors: ["Retelling Eric's story.", "No reference to audience response."],
            levels: levels(10),
          },
        },
        {
          id: "et10-u2-planning-essay-q4",
          difficulty: "challenge",
          totalMarks: 27,
          stem: "Answer all parts about An Inspector Calls.",
          parts: [
            { label: "a", prompt: "State the key words you would underline in this question: 'How does Priestley present the theme of social class in An Inspector Calls?'", marks: 2 },
            { label: "b", prompt: "Write a thesis statement and three planning points for that question.", marks: 4 },
            { label: "c", prompt: "Write the first analytical paragraph of your answer.", marks: 6 },
            { label: "d", prompt: "'Mr and Mrs Birling are the villains of the play.' How far do you agree? Write an extended response referring to the play and its context.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "Underline key words, form a thesis, choose three developing points." },
              { kind: "skill", name: "Evaluating a view", statement: "Reach a judgement by testing the view against the evidence." },
              { kind: "context", name: "Class in 1912", statement: "Rigid divisions affected how people viewed the poor." },
            ],
            steps: [
              { part: "a", reasoning: "Identifies 'how', 'present' as method words.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Identifies 'social class' as the focus.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "A clear thesis that answers the question.", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "Three distinct points with specific references.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "A clear point and precise reference.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Analysis of a method (language, structure or dramatic device) and its effect.", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "Agreement: their refusal to accept blame and prejudice make them antagonists.", marks: 4, markCode: "AO1" },
              { part: "d", reasoning: "Analysis of methods: dramatic irony, their reaction to the hoax and contrast with Sheila and Eric.", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "Counter-view: they represent attitudes rather than being simple villains, and the Inspector's challenge is to society.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Context: Priestley criticises Edwardian upper-class attitudes for a 1945 audience.", marks: 4, markCode: "AO4" },
            ],
            finalAnswer: "(a) 'How', 'present', 'social class'. (b) A clear thesis plus three developing points. (c) A focused analytical paragraph. (d) A top answer agrees that the Birlings are antagonists but argues they symbolise social attitudes, supported by methods and context.",
            commonErrors: ["No plan.", "A one-sided answer.", "Context stuck on at the end."],
            examinerNote: "In (a) and (b) credit any sensible, relevant plan.",
            levels: [...levels(6, "c"), ...levels(15, "d")],
          },
        },
      ],
    },
  ],
};
