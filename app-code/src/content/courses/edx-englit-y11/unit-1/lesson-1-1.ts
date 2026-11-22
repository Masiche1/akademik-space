import type { Lesson } from "../../../types.ts";
import { bands } from "./levels.ts";

export const lesson11: Lesson = {
  id: "et11-u1-lesson-1-1",
  code: "1-1",
  title: "Characters in Of Mice and Men",
  goal: "I CAN analyse how Steinbeck presents George, Lennie, Curley's wife, Crooks and Candy, using short, well-chosen quotations.",
  standards: ["4ET1 Paper 1 Section B", "4ET1 AO1", "4ET1 AO2"],
  vocabulary: [
    { term: "Characterisation", definition: "The methods a writer uses to create a character: description, speech, action, and how others react to them." },
    { term: "Foil", definition: "A character whose qualities contrast with another's so that both are thrown into sharper relief." },
    { term: "Animal imagery", definition: "Describing a person using comparisons with animals, often to suggest instinct, vulnerability or lack of power." },
    { term: "Marginalised", definition: "Pushed to the edge of society and denied power or a voice." },
    { term: "Itinerant", definition: "Travelling from place to place to find work, with no permanent home." },
    { term: "Symbol", definition: "A person, object or place that represents a larger idea." },
  ],
  concepts: [
    {
      id: "et11-u1-george-and-lennie",
      title: "George and Lennie",
      skill: "Analyse how Steinbeck presents the contrasting characters and the unusual friendship of George and Lennie.",
      lesson: {
        sections: [
          {
            heading: "Two men who are opposites",
            body: "Steinbeck introduces George and Lennie as physical and mental opposites. George is small, quick and sharp-featured; Lennie is huge, shapeless of face and described through animal imagery (he drags his paws 'like a bear'). George plans, worries and speaks; Lennie forgets, trusts and obeys. Each one needs what the other offers: George gains companionship and a purpose, Lennie gains protection and a home. This contrast makes them a **foil** for one another.",
          },
          {
            heading: "A rare friendship",
            body: "Slim remarks that few men travel together, and George calls ranch workers 'the loneliest guys in the world'. Their friendship is therefore unusual and valuable, and it is the emotional centre of the novel. George is both caring (he repeats the story of the dream farm to comfort Lennie) and frustrated (he complains that he could live more easily alone). Strong answers show that George's irritation is always outweighed by his loyalty, which makes the ending so painful.",
          },
          {
            heading: "Writing about character",
            body: "Always link a point about character to a method. Ask: what does Steinbeck show, how (word choice, imagery, dialogue, contrast), and why (what idea or theme does it serve)? Use short quotations of a few words, embedded in your own sentences.",
          },
        ],
        keyFormulas: [
          { name: "Foil", statement: "A contrasting character that highlights another character's qualities." },
          { name: "Animal imagery", statement: "Comparison with animals that suggests innocence, strength without control, or vulnerability." },
          { name: "Point, evidence, explain, link", statement: "A paragraph structure: make a point, support it with a short quotation, explain the effect, link to the writer's purpose." },
        ],
        workedExample: {
          problem: "How does Steinbeck present the friendship between George and Lennie in the novel?",
          solution: "Steinbeck presents the friendship as rare and precious in a world of isolated men. George's claim that ranch workers are 'the loneliest guys in the world' places the pair against a backdrop of loneliness, so their companionship stands out as exceptional. The friendship is also unequal: George makes the decisions while Lennie, who 'drags his paws' like a bear, depends on him as a child depends on a parent. Yet George is not simply a burden-bearer. His repeated telling of the dream of the farm shows that he needs Lennie's faith in the future as much as Lennie needs his protection. By showing the friendship as mutual, Steinbeck makes the ending a tragedy of loss rather than a simple act of convenience.",
        },
      },
      questions: [
        {
          id: "et11-u1-george-and-lennie-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Steinbeck often compares Lennie with animals such as a bear. What is the main effect of this animal imagery?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It suggests that Lennie is a wild creature who does not need other people" },
              { id: "b", text: "It suggests that Lennie has great physical strength but little awareness or control" },
              { id: "c", text: "It suggests that Lennie is deliberately cruel and dangerous to others" },
              { id: "d", text: "It suggests that Lennie is cleverer and more cunning than George" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Animal imagery", statement: "Comparing a character with an animal conveys instinct, innocence or strength without human reasoning." }],
            steps: [{ reasoning: "A bear is powerful but acts on instinct, mirroring Lennie's strength without understanding of its consequences.", evidence: "drags his paws", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** Lennie has great strength but little awareness or control, like a large animal.",
            commonErrors: ["Choosing (b) because bears are dangerous; Lennie's harm is never intended.", "Choosing (d) and forgetting how much Lennie depends on George."],
          },
        },
        {
          id: "et11-u1-george-and-lennie-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what the phrase 'the loneliest guys in the world' suggests about the lives of itinerant ranch workers, and how it makes the friendship of George and Lennie more significant.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Explaining a quotation", statement: "Say what a phrase suggests, focusing on a key word, and link it to the question." },
              { kind: "context", name: "Itinerant labour", statement: "Migrant workers in the 1930s moved from job to job and rarely formed lasting bonds." },
            ],
            steps: [
              { reasoning: "The superlative 'loneliest' suggests that isolation is extreme and universal for these men.", evidence: "loneliest guys in the world", marks: 1, markCode: "AO2" },
              { reasoning: "Workers have no families or permanent homes; they drift from ranch to ranch, so loneliness is part of the way of life.", marks: 1, markCode: "AO4" },
              { reasoning: "Against this background George and Lennie travelling together is unusual; they have somebody who cares for them.", marks: 1, markCode: "AO1" },
              { reasoning: "It makes the friendship valuable and so the threat to it more poignant.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The superlative 'loneliest' shows that isolation is the normal condition of itinerant workers, who have no family or home. George and Lennie have companionship, so their bond is rare and precious, and its loss is more painful.",
            commonErrors: ["Repeating the quotation without explaining any word in it.", "Describing the plot of the first chapter instead of answering the question."],
          },
        },
        {
          id: "et11-u1-george-and-lennie-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "How does Steinbeck present George as a character who is both caring towards Lennie and frustrated by him? Refer to specific moments in the novel in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced argument", statement: "Show both sides of a character and then explain which side the writer ultimately emphasises." },
              { kind: "technique", name: "Contrast", statement: "Opposing qualities within one character reveal complexity." },
            ],
            steps: [
              { reasoning: "George protects Lennie: he does the talking, keeps his job, and repeats the dream story as a comfort, showing loyalty and tenderness.", evidence: "tend the rabbits", marks: 2, markCode: "AO1" },
              { reasoning: "He is frustrated: he complains that life would be easier without Lennie and scolds him over the dead mouse, showing the burden of responsibility.", marks: 2, markCode: "AO1" },
              { reasoning: "Steinbeck uses George's blunt, irritable dialogue to make the care feel real rather than sentimental; his love shows despite the complaints.", marks: 1, markCode: "AO2" },
              { reasoning: "The mixture presents George as a complex, human figure and prepares for the painful choice at the end.", marks: 1, markCode: "AO2" },
            ],
            levels: bands(6, "analysis of Steinbeck's presentation of George"),
            finalAnswer: "Steinbeck presents George's care through his protection, his patience in retelling the dream, and his loyalty; his frustration is shown in his complaints and his sharp dialogue. The two qualities coexist, making George a complex and sympathetic character whose final decision is an act of love as much as duty.",
            commonErrors: ["Retelling the story of the novel without focusing on George.", "Writing only about frustration or only about care, with no balance.", "Using no quotations or references."],
          },
        },
        {
          id: "et11-u1-george-and-lennie-q4",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "This question is about the characters of George and Lennie in Of Mice and Men by John Steinbeck.",
          parts: [
            { label: "a", prompt: "Give two ways in which Lennie is physically different from George in the opening chapter.", marks: 2 },
            { label: "b", prompt: "Explain what the reader learns about George's attitude to Lennie from the way he speaks to him.", marks: 4 },
            { label: "c", prompt: "How does Steinbeck use the contrast between George and Lennie to explore ideas about friendship and dependence in the novel?", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Foil", statement: "Contrasting characters sharpen the reader's understanding of both." },
              { kind: "skill", name: "Developing a response", statement: "Move from retrieval to explanation to analysis, linking method to theme." },
            ],
            steps: [
              { part: "a", reasoning: "Lennie is huge and shapeless while George is small and quick.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Lennie moves heavily like a bear, whereas George is sharp-featured and restless.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "George is often blunt and impatient, giving orders and complaints, which shows the strain of responsibility.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "He speaks to Lennie as a parent to a child, with repeated instructions and simple language.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Beneath the irritation is concern: he reassures Lennie and promises the dream.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The reader therefore sees loyalty and affection that George rarely states openly.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "The pair are a foil: George's intelligence and Lennie's strength are each incomplete alone.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Their dependence is mutual: George gets company and purpose, Lennie protection and belonging.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Set against the isolation of other workers, it presents friendship as the novel's most valuable but fragile thing.", marks: 2, markCode: "AO2" },
            ],
            levels: bands(6, "analysis of contrast and its links to theme", "c"),
            finalAnswer: "(a) Lennie is huge and shapeless; George small and quick. (b) George's blunt, parental speech shows frustration but also protectiveness and love. (c) The foil relationship shows that each man completes the other; friendship is presented as rare, mutual and vulnerable in a lonely world.",
            commonErrors: ["Writing about only one character in (c).", "Giving feature spotting ('Steinbeck uses contrast') without explaining its effect."],
          },
        },
      ],
    },
    {
      id: "et11-u1-minor-characters",
      title: "Curley's wife, Crooks and Candy",
      skill: "Explain how Steinbeck uses marginalised characters to explore power, prejudice and loneliness.",
      lesson: {
        sections: [
          {
            heading: "The marginalised",
            body: "Curley's wife (never given a name), Crooks (the black stable-buck) and Candy (the old, disabled swamper) are all excluded from the power structure of the ranch. They are defined by their weakness in the eyes of others: gender, race and age. Steinbeck uses them to show how prejudice produces isolation.",
          },
          {
            heading: "Curley's wife, Crooks and Candy in detail",
            body: "Curley's wife is first seen as a threat ('tart') but is revealed as lonely and trapped, her dream of Hollywood destroyed. She is a victim of her husband's possessiveness. Crooks lives apart in a room next to the stable, bitterly aware that he is not wanted in the bunkhouse. Candy's old dog is shot for being useless, and Candy realises he too will be cast aside; his money gives him the courage to join the dream. Each one briefly hopes and then is crushed.",
          },
          {
            heading: "Purpose",
            body: "These characters show that the weak are denied voice and dignity, a central concern of Steinbeck's social criticism. Link each to context: women had few options, racial segregation was entrenched, and unemployment made older workers expendable.",
          },
        ],
        keyFormulas: [
          { name: "Marginalised character", statement: "A character denied power or voice by society, used by the writer to critique prejudice." },
          { name: "Symbolism", statement: "Candy's dog symbolises how society treats those who are no longer useful." },
          { name: "Context link", statement: "Connect a character's treatment to the attitudes of 1930s America." },
        ],
        workedExample: {
          problem: "How does Steinbeck present Crooks as an isolated character?",
          solution: "Steinbeck isolates Crooks physically and socially. His room is set apart from the bunkhouse, and his own bitter statement that he is not wanted there shows that segregation has become part of how he sees himself. His pride is a form of defence, but when Lennie innocently enters, he cannot hide how desperately he craves company; he admits that 'a guy goes nuts if he ain't got nobody'. This shows the human cost of racism: Crooks is intelligent and well read, yet society allows him no place. When he withdraws his hope in the dream after Curley's wife threatens him, the reader sees how powerless he is, making his isolation a criticism of the society that created it.",
        },
      },
      questions: [
        {
          id: "et11-u1-minor-characters-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does Steinbeck not give Curley's wife a name?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To show that she is defined by her relationship to a man and has no identity of her own" },
              { id: "b", text: "To make her seem mysterious and dangerous throughout the novel" },
              { id: "c", text: "To show that the workers on the ranch do not like her" },
              { id: "d", text: "To show that she is unimportant to the plot" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Naming", statement: "Withholding a name can show that a character is denied identity and status." }],
            steps: [{ reasoning: "She is only 'Curley's wife', which suggests she is seen as his property.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** She has no identity beyond being Curley's wife.",
            commonErrors: ["Choosing (c); she is central to the plot and ending.", "Choosing (d), a vague guess unconnected to theme."],
          },
        },
        {
          id: "et11-u1-minor-characters-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how Steinbeck uses the death of Candy's dog to explore the way society treats the old and weak.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Symbolism", statement: "The dog represents any being judged useless and discarded." },
              { kind: "context", name: "Economic insecurity", statement: "In the Depression, workers who could not labour were left with no safety net." },
            ],
            steps: [
              { reasoning: "The dog is old and smelly, and Carlson argues that it is kinder to shoot it; this shows a society that values only usefulness.", marks: 1, markCode: "AO1" },
              { reasoning: "Candy's weak protest and later regret ('shot that dog myself') shows that he accepted the decision against his conscience.", evidence: "shot that dog myself", marks: 1, markCode: "AO1" },
              { reasoning: "The dog is a symbol of Candy himself, who fears that he will be sacked once he can no longer work.", marks: 1, markCode: "AO2" },
              { reasoning: "It foreshadows Lennie's death, killed by a friend who judges it to be merciful.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The dog's death shows that the weak are treated as disposable. It symbolises Candy's own fear of being discarded and foreshadows Lennie's death.",
            commonErrors: ["Describing the event without explaining what it means.", "Failing to link the dog to Candy's position."],
          },
        },
        {
          id: "et11-u1-minor-characters-q3",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "How does Steinbeck present Curley's wife as a character who deserves sympathy as well as suspicion? Refer to the novel as a whole.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tracking a character", statement: "Show how a presentation changes across the text and why." },
              { kind: "context", name: "Women in the 1930s", statement: "Women's choices were limited; many were dependent on husbands." },
            ],
            steps: [
              { reasoning: "She is first presented as a threat: flirtatious, provocative and called a 'tart' by the men, who see her as trouble.", evidence: "tart", marks: 2, markCode: "AO1" },
              { reasoning: "She is lonely in a marriage to a possessive, aggressive husband and is denied conversation; she admits she gets 'awful lonely'.", evidence: "awful lonely", marks: 2, markCode: "AO1" },
              { reasoning: "Her dream of becoming a film actress is a reminder of the false promises of America, and her failed hopes mirror those of the men.", marks: 2, markCode: "AO4" },
              { reasoning: "Steinbeck gives her a voice only in her last scene and presents her in death as peaceful and innocent; this invites sympathy.", marks: 2, markCode: "AO2" },
            ],
            levels: bands(8, "understanding of how Steinbeck shapes the reader's response to Curley's wife"),
            finalAnswer: "Steinbeck first presents her through the men's suspicion, then reveals her loneliness, thwarted dream and powerlessness. In death she is made to look innocent, so the reader sympathises with a woman trapped by her gender, marriage and circumstances.",
            commonErrors: ["Repeating the men's views without noticing Steinbeck's shift.", "Ignoring context entirely."],
          },
        },
        {
          id: "et11-u1-minor-characters-q4",
          difficulty: "challenge",
          totalMarks: 15,
          stem: "This question is about the marginalised characters of Curley's wife, Crooks and Candy.",
          parts: [
            { label: "a", prompt: "Give two ways in which Crooks is separated from the other workers.", marks: 2 },
            { label: "b", prompt: "Explain what the scene in Crooks's room reveals about his attitude to the dream of the farm.", marks: 4 },
            { label: "c", prompt: "Write about how Steinbeck presents prejudice and isolation through ONE of these three characters.", marks: 9 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Segregation", statement: "Racial prejudice excluded black workers from social spaces such as the bunkhouse." },
              { kind: "skill", name: "Developing an argument", statement: "Select quotations carefully and link each to Steinbeck's purpose." },
            ],
            steps: [
              { part: "a", reasoning: "He sleeps in a separate room by the stable rather than in the bunkhouse.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "He is not allowed to play cards or socialise with the white workers.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Crooks is at first dismissive and cynical about the dream, having seen men talk of land before and never reach it.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "As Candy and Lennie speak, he begins to hope and offers to work for nothing.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The change shows that his bitterness is a protection and that he desperately wants to belong.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "His hope is quickly crushed by Curley's wife's threat, showing his powerlessness.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Identifies a clear form of prejudice (race, gender or age) and shows how the character is treated by others.", marks: 3, markCode: "AO1" },
              { part: "c", reasoning: "Analyses Steinbeck's methods, such as setting, dialogue, naming or symbolism, that express isolation.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Links the character's treatment to 1930s attitudes and to Steinbeck's social criticism.", marks: 3, markCode: "AO4" },
            ],
            levels: bands(9, "analysis of prejudice and isolation with relevant context", "c"),
            finalAnswer: "(a) He has a separate room; he is excluded from cards and the bunkhouse. (b) He scorns the dream, then briefly hopes, revealing a longing to belong, before being crushed. (c) A strong answer analyses methods (setting, dialogue, naming, symbolism) and links the character's isolation to 1930s prejudice and Steinbeck's compassion for the marginalised.",
            commonErrors: ["Choosing a character but describing only what happens to them.", "Not linking to context in part (c)."],
          },
        },
      ],
    },
  ],
};
