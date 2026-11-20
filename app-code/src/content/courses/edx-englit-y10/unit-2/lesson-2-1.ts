import type { Lesson } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

export const lesson21: Lesson = {
  id: "et10-u2-lesson-2-1",
  code: "2-1",
  title: "The Birlings, Gerald and the Inspector",
  goal: "I CAN analyse how Priestley presents the Birling family and Gerald Croft, and how the Inspector functions as a dramatic device.",
  standards: ["4ET1 Paper 2 Section A", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Capitalist", definition: "Someone who believes in private ownership of business and profit, as Mr Birling does." },
    { term: "Dramatic device", definition: "A character or technique used by a playwright to shape the audience's response." },
    { term: "Mouthpiece", definition: "A character who voices the playwright's own views." },
    { term: "Complacent", definition: "Smugly satisfied with oneself and unaware of any danger." },
    { term: "Catalyst", definition: "A person or event that causes change in others." },
    { term: "Hubris", definition: "Excessive pride or self-confidence that leads to downfall." },
    { term: "Socialist", definition: "Someone who believes in collective responsibility and shared wealth, as Priestley did." },
  ],
  concepts: [
    {
      id: "et10-u2-birlings-and-gerald",
      title: "The Birlings and Gerald",
      skill: "Analyse how Priestley presents character through speech, action and dramatic irony, linked to his message.",
      lesson: {
        sections: [
          {
            heading: "Mr and Mrs Birling: the older generation",
            body: "Arthur Birling is a self-made businessman who is proud of his rise and confident that he knows how the world works. In the 1912 setting he speaks as if war is impossible and the Titanic is “unsinkable”. The audience of 1945 knows he is wrong, so his confidence becomes dramatic irony and discredits his creed of “every man for himself”. Sybil Birling is cold, snobbish and moralising: she dismisses Eva Smith's request for help and refuses to accept blame. Priestley shows the older generation as resistant to change.",
          },
          {
            heading: "Sheila, Eric and Gerald: the younger generation",
            body: "Sheila starts as a spoilt, excitable young woman but is the first to accept responsibility and to change. Eric is troubled and weak at first, but also becomes remorseful. Gerald Croft, who is upper-class and socially polished, accepts some guilt but is quick to relax when he thinks the Inspector may be a fraud. Compare how each character responds to the Inspector's questions: guilt, defensiveness or denial.",
          },
          {
            heading: "Write about presentation, not plot",
            body: "A good answer says how Priestley makes the audience feel about each character: by dialogue, stage directions, the order in which characters are questioned and the way they speak about class. Use very short quotations and explain what each reveals.",
          },
        ],
        keyFormulas: [
          { name: "Dramatic irony", statement: "The audience knows something the character does not, so a character's confident claims seem foolish." },
          { name: "Contrast of generations", statement: "Older characters resist change; younger characters (Sheila, Eric) are open to it." },
          { name: "Representative character", statement: "Characters stand for social attitudes: Mr Birling for capitalism and Mrs Birling for class prejudice." },
        ],
        workedExample: {
          problem: "How does Priestley present Mr Birling in Act One?",
          solution: "Priestley presents Mr Birling as arrogant and short-sighted. He speaks in confident pronouncements, lecturing the younger men about business and insisting that there will be no war. Because the 1945 audience knows that war did come and that the Titanic sank, his certainty is ironic and makes him look foolish. His belief that “a man has to mind his own business” expresses an extreme individualism that Priestley wants the audience to reject. By showing Birling to be wrong about so many things, the playwright undermines the whole capitalist outlook that Birling represents.",
        },
      },
      questions: [
        {
          id: "et10-u2-birlings-and-gerald-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is Mr Birling's confident prediction in Act One that there will be no war ironic for an audience in 1945?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because the audience knows that two world wars have happened since 1912" },
              { id: "b", text: "Because the audience agrees with Birling's view of business" },
              { id: "c", text: "Because Birling later changes his mind in the play" },
              { id: "d", text: "Because the Inspector says Birling is correct" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Dramatic irony", statement: "The audience knows the truth that a character does not, so the character's confidence seems foolish." }],
            steps: [{ reasoning: "The audience in 1945 has lived through two world wars, so Birling's predictions are shown to be wrong.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** Historical hindsight makes his predictions ironic and discredits him.",
            commonErrors: ["Missing that the irony depends on the later audience's knowledge.", "Assuming that Birling is proved right (b)."],
          },
        },
        {
          id: "et10-u2-birlings-and-gerald-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how Priestley presents Sheila's change during the play. You may refer to how she responds to the Inspector and to her parents.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Character development", statement: "Trace how a character changes from the start to the end and explain why Priestley shows this." },
            ],
            steps: [
              { reasoning: "At the start Sheila is excited and somewhat spoilt, enjoying her engagement and the family celebration.", marks: 1, markCode: "AO1" },
              { reasoning: "She is the first to feel responsible for Eva Smith's treatment and shows genuine remorse after learning of her own part.", marks: 1, markCode: "AO1" },
              { reasoning: "She challenges her parents for refusing to learn and says the family has not changed, marking a break with the older generation.", marks: 1, markCode: "AO2" },
              { reasoning: "Priestley uses Sheila as a hopeful symbol of the younger generation, who may build a more responsible society.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Sheila begins as a carefree young woman but is the first to take responsibility. By the end she criticises her parents for ignoring the lesson, so she represents hope for social change.",
            commonErrors: ["Only retelling the plot.", "Not linking to Priestley's purpose."],
          },
        },
        {
          id: "et10-u2-birlings-and-gerald-q3",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "How does Priestley present Mrs Birling as a representative of the upper class? Refer to the play as a whole, using at most brief quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Class attitudes in 1912", statement: "The upper class often viewed the poor as undeserving and responsible for their own poverty." },
              { kind: "technique", name: "Characterisation through speech", statement: "Priestley uses tone and vocabulary to reveal prejudice." },
            ],
            steps: [
              { reasoning: "Mrs Birling is cold and formal, and she speaks with authority as the head of a charity committee, which reveals a sense of social superiority.", marks: 2, markCode: "AO1" },
              { reasoning: "She refuses help to Eva Smith because of her “class”, judging her as undeserving; this exposes her prejudice and lack of empathy.", evidence: "girls of that class", marks: 2, markCode: "AO2" },
              { reasoning: "She is unaware of her son's drinking and ironically condemns the unknown father of the child, so dramatic irony shows her to be blinkered and self-condemning.", marks: 2, markCode: "AO2" },
              { reasoning: "Her refusal to change at the end contrasts with Sheila and Eric, suggesting that Priestley sees the older generation as resistant to responsibility.", marks: 2, markCode: "AO1" },
              { reasoning: "Context: Priestley, a socialist, criticises the Edwardian upper class's rigid attitudes to poverty, written for the welfare-minded audience of 1945.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "Mrs Birling embodies upper-class prejudice: cold, authoritative and certain that poor women are to blame for their own misfortunes. Dramatic irony reveals that she condemns her own son, and her refusal to learn contrasts with Sheila and Eric, expressing Priestley's socialist criticism.",
            commonErrors: ["Describing her without discussing Priestley's methods.", "Long quotations from the play.", "No context or purpose."],
            levels: levels(10),
          },
        },
        {
          id: "et10-u2-birlings-and-gerald-q4",
          difficulty: "challenge",
          totalMarks: 27,
          stem: "Answer all parts about An Inspector Calls.",
          parts: [
            { label: "a", prompt: "Give two ways in which Mr Birling shows he is confident and complacent in Act One.", marks: 2 },
            { label: "b", prompt: "Explain how Priestley uses dramatic irony to present Mr Birling.", marks: 4 },
            { label: "c", prompt: "How does Priestley present Gerald Croft's response to the Inspector? Refer to Gerald's attitude and actions.", marks: 6 },
            { label: "d", prompt: "'The younger generation are the real heroes of An Inspector Calls.' How far do you agree? Write about Sheila, Eric and the older characters, and refer to the play's context.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argue a view", statement: "State a clear judgement and test it with evidence about both sides." },
              { kind: "context", name: "Generational change", statement: "Written in 1945 but set in 1912, the play looks to the young to build a better society." },
              { kind: "technique", name: "Dramatic irony", statement: "Characters' confident statements are undercut by the audience's later knowledge." },
            ],
            steps: [
              { part: "a", reasoning: "He lectures others and speaks as an authority on business.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "He claims that war will not happen and that the Titanic is unsinkable.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The 1945 audience knows his predictions are false, so Birling is mocked.", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "His selfish creed is undermined by the later action of the play, so the audience rejects capitalism.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Gerald is initially respectable and admits some guilt over his affair with Daisy Renton, showing a degree of conscience.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "He is quick to doubt the Inspector's identity and relieved when the situation seems a hoax, suggesting his remorse is superficial.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "His position as an upper-class outsider who sides with the elders shows a tendency to protect status.", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "Sheila and Eric accept responsibility, change, and challenge their parents, so they offer hope.", marks: 4, markCode: "AO1" },
              { part: "d", reasoning: "Analysis of dramatic methods: the Inspector's questioning and the final phone call; the contrast between generations in their reactions.", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "Counter-view: Eric's past behaviour is not heroic, and the young are not the only ones who suffer or learn; Gerald's hesitancy complicates the view.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Context: Priestley's socialist message and the post-war desire for change in 1945 shape his optimism about the young.", marks: 4, markCode: "AO4" },
            ],
            finalAnswer: "(a) He lectures and predicts no war. (b) His wrong predictions are ironic and undermine his selfish views. (c) Gerald feels some guilt but takes relief when the Inspector may be a hoax. (d) A top answer agrees that Sheila and Eric offer hope while qualifying that they are flawed and tying the view to Priestley's 1945 socialist context.",
            commonErrors: ["Retelling the plot.", "Quoting at length.", "Ignoring the older generation.", "Leaving out context."],
            examinerNote: "In (d) reward a balanced, supported judgement. Context must support the analysis.",
            levels: [...levels(6, "c"), ...levels(15, "d")],
          },
        },
      ],
    },
    {
      id: "et10-u2-inspector-dramatic-device",
      title: "The Inspector as a dramatic device",
      skill: "Explain the Inspector's purpose in shaping the play's structure, tension and message.",
      lesson: {
        sections: [
          {
            heading: "A catalyst and a mouthpiece",
            body: "Inspector Goole arrives at the moment of the Birlings' celebration and disturbs it. He controls the pace of the play, questioning each character in turn, and so acts as a **catalyst** for revelation and change. In his final speech he gives voice to Priestley's message about community and responsibility, becoming a **mouthpiece**.",
          },
          {
            heading: "Mystery and ambiguity",
            body: "His name sounds like 'ghoul', and he seems to know more than he should. The ending, with the news of a real inspector, leaves his identity open. Is he a supernatural figure, a moral conscience or a hoaxer? The ambiguity keeps the audience thinking about the message rather than the identity of the man.",
          },
          {
            heading: "Stage presence and language",
            body: "Priestley describes the Inspector as creating an impression of “massiveness”, and the lighting changes from “pink and intimate” to “brighter and harder” when he arrives. His blunt, measured speech contrasts with the hosts' polite evasions, and he often refuses to be interrupted.",
          },
        ],
        keyFormulas: [
          { name: "Catalyst", statement: "A character who triggers change in others and drives the plot." },
          { name: "Mouthpiece", statement: "A character who expresses the playwright's views." },
          { name: "Ambiguity", statement: "Deliberate openness of meaning that invites the audience to interpret." },
        ],
        workedExample: {
          problem: "How does Priestley use the Inspector to deliver his message?",
          solution: "The Inspector controls the action by interrogating each member of the family and exposing the part each played in Eva Smith's fate. This structure shows that responsibility is shared. In his final speech he warns that people are “members of one body”, which gives clear voice to Priestley's socialist view that society must act together. Because the Inspector leaves before the family can fully resist, the audience is left with his warning, reinforcing the sense that his message is a moral truth rather than the opinion of a single character.",
        },
      },
      questions: [
        {
          id: "et10-u2-inspector-dramatic-device-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which description best fits the Inspector's role as a 'mouthpiece'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He voices Priestley's own views on social responsibility" },
              { id: "b", text: "He speaks loudly so that everyone can hear" },
              { id: "c", text: "He repeats what other characters say" },
              { id: "d", text: "He speaks for the Birling family" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Mouthpiece", statement: "A character through whom the playwright expresses their views." }],
            steps: [{ reasoning: "The Inspector's final speech states Priestley's message.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** He is the playwright's voice.",
            commonErrors: ["Taking 'mouthpiece' literally as loudness (b)."],
          },
        },
        {
          id: "et10-u2-inspector-dramatic-device-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways in which the Inspector controls the structure of the play.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dramatic structure", statement: "The order of events and revelations shapes tension and message." }],
            steps: [
              { reasoning: "He questions one character at a time, revealing each person's link to Eva Smith, which builds tension and a chain of responsibility.", marks: 2, markCode: "AO2" },
              { reasoning: "He arrives to interrupt the celebration and leaves after his final speech, so the end of his visit marks the climax and the beginning of the family's reaction.", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "He questions characters in turn, linking each to Eva Smith's death, and his arrival and exit frame the action and shape the climax.",
            commonErrors: ["Just saying he asks questions.", "No reference to effect on the audience."],
          },
        },
        {
          id: "et10-u2-inspector-dramatic-device-q3",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "How does Priestley use the Inspector's final speech to present his message to the audience? Use only very short quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Direct address and collective language", statement: "Plural pronouns and warnings position the audience as responsible." },
              { kind: "context", name: "1945 audience", statement: "After two world wars the audience would be receptive to ideas of community and change." },
            ],
            steps: [
              { reasoning: "The Inspector's speech uses collective language (“we”) to widen responsibility from one family to all of society.", marks: 2, markCode: "AO2" },
              { reasoning: "The image of people as “members of one body” stresses unity and interdependence.", evidence: "members of one body", marks: 2, markCode: "AO2" },
              { reasoning: "The warning of “fire and blood and anguish” predicts the consequences of ignoring this lesson, which the 1945 audience recognises as the world wars.", evidence: "fire and blood and anguish", marks: 2, markCode: "AO4" },
              { reasoning: "The speech comes at the end of the Inspector's role, giving the message weight and leaving the family and audience to respond.", marks: 2, markCode: "AO1" },
              { reasoning: "Linking to purpose: Priestley, a socialist, urges collective care as the basis for a better society.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "The final speech uses collective language and the image of “members of one body” to present society as interdependent. The warning of “fire and blood and anguish” resonates with a 1945 audience, giving Priestley's socialist message urgency.",
            commonErrors: ["Paraphrasing the speech without analysis.", "Using long quotations.", "No context."],
            levels: levels(10),
          },
        },
        {
          id: "et10-u2-inspector-dramatic-device-q4",
          difficulty: "challenge",
          totalMarks: 27,
          stem: "Answer all parts about An Inspector Calls.",
          parts: [
            { label: "a", prompt: "Give two ways in which the Inspector's arrival changes the atmosphere on stage.", marks: 2 },
            { label: "b", prompt: "Explain why Priestley makes the Inspector's identity uncertain.", marks: 4 },
            { label: "c", prompt: "How does Priestley use the Inspector's manner and language to create tension?", marks: 6 },
            { label: "d", prompt: "'The Inspector is more important as an idea than as a person.' How far do you agree? Refer to the whole play and its context.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ambiguity", statement: "An uncertain identity makes the message universal." },
              { kind: "skill", name: "Evaluative argument", statement: "Present and test an interpretation across the whole text." },
              { kind: "context", name: "Socialism and responsibility", statement: "The Inspector voices Priestley's belief in collective responsibility." },
            ],
            steps: [
              { part: "a", reasoning: "The lighting changes from soft to harder, signalling a shift from comfort to scrutiny.", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "The cheerful celebration is interrupted, creating tension and unease.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The ambiguity makes the audience focus on the message rather than the man.", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "It allows the Inspector to seem both real and symbolic, a conscience for the Birlings and the audience.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "His blunt, measured language contrasts with the family's evasions, creating pressure.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "He controls information and withholds details, building suspense.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "His imposing presence and refusal to be interrupted asserts moral authority.", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "Agreement: he disappears at the end and the news of a hoax shifts attention to the moral lesson, showing he is a vehicle for ideas.", marks: 4, markCode: "AO1" },
              { part: "d", reasoning: "Analysis of dramatic methods: structure, stage directions, final speech and ambiguity make him function as a symbol.", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "Counter-view: he is also an active, forceful character who drives events and exposes each person; the play depends on his presence.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Context: written in 1945, the play uses the Inspector to promote post-war responsibility and the idea of a welfare society.", marks: 4, markCode: "AO4" },
            ],
            finalAnswer: "(a) Harder lighting; celebration interrupted. (b) Uncertainty keeps attention on the message and makes him a symbol. (c) Blunt language, controlled information and authority create tension. (d) A top answer argues that he is primarily a symbolic voice for Priestley's message while recognising his dramatic force, supported by structure and context.",
            commonErrors: ["Treating him only as a real policeman.", "Ignoring the ambiguity.", "Bolt-on context."],
            examinerNote: "Accept either position if argued with reference to methods.",
            levels: [...levels(6, "c"), ...levels(15, "d")],
          },
        },
      ],
    },
  ],
};
