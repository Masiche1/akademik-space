import type { Lesson, TextExtract } from "../../../types.ts";
import { levels6 } from "./levels.ts";

const LUNCH: TextExtract = {
  title: "Give Us Time to Eat",
  author: "Written for Akademik Space",
  text: "Our school should lengthen lunch from 25 minutes to 40 minutes. Right now, students spend about 12 minutes in the cafeteria line, which leaves only 13 minutes to eat. A 2023 report from the district nutrition office found that students with fewer than 20 minutes to eat threw away nearly one third of their food and reported feeling hungry in afternoon classes.\n\nSome people say that a longer lunch would cut into class time and hurt test scores. This concern deserves attention, but the schedule can absorb the change. If each of the six class periods gives up two and a half minutes, the school day still ends at the same time. In addition, a district study of a nearby middle school found no drop in math or reading scores after a similar change.\n\nMy cousin says that kids at his school never eat much anyway, so it does not matter. Lunch is also the only free time many students have to talk with friends, and everyone knows that friendships make school better.\n\nFor these reasons, our school board should adopt the 40-minute lunch.",
};

const OCTOPUS: TextExtract = {
  title: "Octopuses (draft)",
  author: "Written for Akademik Space",
  text: "Octopuses are really smart animals. They do a lot of things. Also, an octopus can change color. Also, it has no bones, only a hard beak. Also, it can squeeze through small spaces. Scientists once watched an octopus unscrew a jar lid from the inside. The octopus is a cephalopod. Cephalopods are a group of animals. Octopuses live in the ocean and eat stuff like crabs. In conclusion, octopuses are neat.",
};

export const lesson31: Lesson = {
  id: "ela8-u3-lesson-3-1",
  code: "3-1",
  title: "Argument and Informative Writing",
  goal: "I CAN write an argument that distinguishes my claim from opposing claims and relies on credible sources, and an informative text with clear organization, precise language and varied transitions.",
  standards: ["W.8.1", "W.8.2", "W.8.4", "L.8.3"],
  vocabulary: [
    { term: "Claim", definition: "The position a writer argues for; the central point of an argument." },
    { term: "Opposing claim", definition: "A different or conflicting position that a writer acknowledges and responds to." },
    { term: "Credible source", definition: "A source that is trustworthy because it is named, informed, current and not biased by a hidden interest." },
    { term: "Controlling idea", definition: "The main point of an informative text, which every detail must support." },
    { term: "Precise language", definition: "Specific, accurate words and domain vocabulary instead of vague words like stuff or things." },
    { term: "Transition", definition: "A word or phrase that shows how ideas connect, such as however, as a result or for instance." },
  ],
  concepts: [
    {
      id: "ela8-u3-argument-claims",
      title: "Argument: claims, opposing claims and credible sources",
      skill: "Write an argument that separates my claim from opposing claims, answers them with logic, and supports reasons with credible, relevant evidence.",
      lesson: {
        sections: [
          {
            heading: "Claims and opposing claims",
            body: "An argument begins with a **claim**: a position someone could reasonably disagree with. A fact such as 'The cafeteria opens at 11:00' is not a claim. Eighth-grade writers must also **distinguish** their claim from **opposing claims**. Name the opposing view fairly, then answer it with logic or evidence. This is a **rebuttal**. Ignoring the other side makes an argument weaker; misrepresenting it makes the writer seem unfair.",
          },
          {
            heading: "Credible, relevant evidence",
            body: "Each reason needs evidence that is **relevant** (it really proves the reason) and **credible** (it comes from a trustworthy source). Credible sources are named, have expertise, give specific data and are recent enough to matter. 'My cousin says' or 'everyone knows' is an anecdote or a bandwagon appeal, not evidence. Replace it with a study, an official report or an expert, and cite who said it with a signal phrase such as 'according to the district nutrition office'.",
          },
        ],
        keyFormulas: [
          { name: "Claim", statement: "A debatable position that the writer supports with reasons and evidence." },
          { name: "Opposing claim", statement: "A conflicting position that a strong argument acknowledges and answers." },
          { name: "Credible evidence", statement: "Specific information from a named, knowledgeable and current source that directly supports a reason." },
          { name: "Rebuttal", statement: "The part of an argument that shows why an opposing claim is weak, mistaken or can be solved." },
        ],
        workedExample: {
          problem: "A student argues that homework should be limited to 30 minutes a night. Which is better evidence: 'Most kids hate homework' or 'A 2022 university study of 900 eighth graders found test scores stopped improving after 40 minutes of nightly homework'?",
          solution: "The second is better. It is specific (900 students, 40 minutes), comes from an identifiable source (a university study) and is relevant because it connects the amount of homework to learning. 'Most kids hate homework' is a vague generalization about feelings; it does not show that long homework fails to help learning.",
        },
      },
      questions: [
        {
          id: "ela8-u3-argument-claims-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LUNCH,
          stem: "Which sentence from the essay states an opposing claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Students spend about 12 minutes in the cafeteria line." },
              { id: "b", text: "A longer lunch would cut into class time and hurt test scores." },
              { id: "c", text: "Our school board should adopt the 40-minute lunch." },
              { id: "d", text: "Lunch is the only free time many students have to talk with friends." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Opposing claim", statement: "A position that conflicts with the writer's own claim." }],
            steps: [{ reasoning: "Some people argue against a longer lunch, saying it would hurt learning. That is the view the writer must answer.", evidence: "cut into class time and hurt test scores", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)**. Choice (c) is the writer's own claim, (a) is a supporting fact and (d) is another reason for the writer's claim.",
            commonErrors: ["Choosing the writer's final recommendation, which is the claim, not the opposing claim."],
          },
        },
        {
          id: "ela8-u3-argument-claims-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: LUNCH,
          stem: "Which support in the essay is the most credible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The statement that kids at the writer's cousin's school never eat much" },
              { id: "b", text: "The 2023 report from the district nutrition office" },
              { id: "c", text: "The claim that everyone knows friendships make school better" },
              { id: "d", text: "The writer's opinion that the board should act" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluating sources", statement: "Credible evidence is specific, comes from a named, informed source and is relevant." }],
            steps: [
              { reasoning: "The report comes from a named organization with expertise in student nutrition.", evidence: "report from the district nutrition office", marks: 1, markCode: "AO1" },
              { reasoning: "It gives specific, relevant findings about students with fewer than 20 minutes to eat.", evidence: "threw away nearly one third of their food", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)**. The cousin is a single anecdote about a different school, 'everyone knows' is an unsupported bandwagon appeal, and the writer's opinion is the claim itself, not evidence.",
            commonErrors: ["Treating any statement in the essay as equally credible.", "Choosing the cousin because he is a real person, ignoring that one anecdote about another school is weak and irrelevant."],
          },
        },
        {
          id: "ela8-u3-argument-claims-q3",
          difficulty: "core",
          totalMarks: 6,
          extract: LUNCH,
          stem: "Read the third paragraph (beginning 'My cousin says'). Explain two weaknesses in how it supports the claim. Then rewrite the paragraph in two or three sentences, using a reason that is relevant and a kind of evidence that is credible. You may describe the type of source instead of inventing exact numbers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating evidence", statement: "Reject anecdotes and bandwagon appeals; prefer specific data from credible sources." },
              { kind: "convention", name: "Formal argument style", statement: "Use an objective tone, a signal phrase for the source and a link back to the claim." },
            ],
            steps: [
              { reasoning: "Weakness one: a cousin's comment is a single anecdote about a different school, so it cannot show what happens at this school.", evidence: "My cousin says", marks: 1, markCode: "AO1" },
              { reasoning: "Weakness two: 'everyone knows' is an unsupported appeal to popular belief, not evidence that friendships make school better.", evidence: "everyone knows that friendships make school better", marks: 1, markCode: "AO1" },
              { reasoning: "The revision states a clear reason that is relevant to the claim, for example that lunch gives students needed social time.", marks: 1, markCode: "AO4" },
              { reasoning: "It supports the reason with credible evidence, such as a named survey or counselor's report, introduced with a signal phrase.", marks: 1, markCode: "AO4" },
              { reasoning: "It keeps a formal, objective tone, with no slang or personal anecdote.", marks: 1, markCode: "AO4" },
              { reasoning: "It links the reason back to the claim that lunch should be 40 minutes.", marks: 1, markCode: "AO4" },
            ],
            levels: levels6("writing"),
            finalAnswer: "The paragraph relies on one cousin at another school, which is an anecdote, and on 'everyone knows', which is a bandwagon appeal. Revision: 'Lunch is also the main time students can build friendships. According to a school counselor survey, most students named lunch as the part of the day when they feel most connected to classmates. A longer lunch would give that connection more time, which supports a 40-minute period.'",
            commonErrors: ["Saying the paragraph is 'bad' without naming the type of weakness.", "Rewriting with another anecdote or an unnamed 'study'.", "Forgetting to connect the new reason back to the claim."],
          },
        },
        {
          id: "ela8-u3-argument-claims-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: LUNCH,
          stem: "Answer all parts about 'Give Us Time to Eat'.\n\nSource note for part (c): Dr. Lena Ortiz, a pediatric nutritionist at Riverside Children's Hospital, wrote in a 2022 journal article that children need at least 20 minutes of seated eating time for the body to signal that it is full.",
          parts: [
            { label: "a", prompt: "State the writer's claim and the opposing claim in your own words.", marks: 2 },
            { label: "b", prompt: "Explain how the writer answers the opposing claim and why this makes the argument stronger.", marks: 4 },
            { label: "c", prompt: "Write a new body paragraph for the essay (four to six sentences) that uses the source note as credible evidence for a reason supporting the claim.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Claim and counterclaim", statement: "A strong argument states its claim, acknowledges an opposing claim and responds to it." },
              { kind: "skill", name: "Integrating a source", statement: "Name the source, present its finding accurately and explain how it supports the reason." },
            ],
            steps: [
              { part: "a", reasoning: "Claim: the school should lengthen lunch to 40 minutes.", evidence: "should lengthen lunch from 25 minutes to 40 minutes", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Opposing claim: a longer lunch would cost class time and lower test scores.", evidence: "cut into class time and hurt test scores", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The writer acknowledges the concern as reasonable instead of dismissing it, which makes the writer seem fair.", evidence: "This concern deserves attention", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The writer offers a logical solution: shaving a few minutes from each of six periods keeps the day the same length.", evidence: "gives up two and a half minutes", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The writer adds evidence from a credible comparison, a nearby middle school that saw no drop in scores.", evidence: "no drop in math or reading scores", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Answering the other side with logic and evidence shows the claim holds up under challenge, so readers trust it more.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "States a clear reason that supports the claim, such as that students need enough time to feel full.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "Introduces the source with a signal phrase naming Dr. Lena Ortiz and her expertise.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "Presents the finding accurately: at least 20 minutes of seated eating time for the body to signal fullness.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Explains the link: students with about 13 minutes to eat fall short of that threshold.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "Uses a formal style and transitions, and links back to the 40-minute claim.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "Correct conventions and a focused paragraph with no unrelated details.", marks: 1, markCode: "AO5" },
            ],
            levels: levels6("writing", "c"),
            finalAnswer: "(a) Claim: lunch should be 40 minutes. Opposing claim: a longer lunch would hurt learning. (b) The writer admits the concern, then shows the schedule can absorb the change and cites a nearby school with no score drop, so the argument seems fair and well-supported. (c) Model: 'Students also need enough time for their bodies to register that they are full. Dr. Lena Ortiz, a pediatric nutritionist at Riverside Children's Hospital, reports that children need at least 20 minutes of seated eating time for this to happen. Because students currently have only about 13 minutes to eat, many leave the cafeteria still hungry. A 40-minute lunch would meet the expert standard.'",
            commonErrors: ["In (a), restating a supporting fact as the claim.", "In (b), describing the opposing claim again without saying how it is answered.", "In (c), quoting the source without a signal phrase, or not connecting the 20-minute finding to the 13 minutes students currently have."],
          },
        },
      ],
    },
    {
      id: "ela8-u3-informative-writing",
      title: "Informative writing: organization, formatting, language and transitions",
      skill: "Organize an informative text around a controlling idea, use headings and precise domain language, and connect ideas with varied transitions.",
      lesson: {
        sections: [
          {
            heading: "Organizing around a controlling idea",
            body: "Informative writing explains a topic so that readers understand it. Start by choosing a **controlling idea**: the one point every paragraph supports. Then order your ideas logically: by importance, by comparison, by cause and effect or by category. When it helps, add **formatting** such as headings, a bulleted list or a graphic, but only when it makes the information easier to follow, not to fill space.",
          },
          {
            heading: "Precise language and varied transitions",
            body: "Replace vague words with exact ones: 'stuff like crabs' becomes 'prey such as crabs and clams'. Use domain-specific vocabulary (cephalopod, camouflage) and define it the first time. Vary your **transitions** so that they signal the relationship between ideas: *for example* adds an illustration, *however* shows contrast, *as a result* shows an effect, *in addition* adds a point. Repeating 'Also' at the start of every sentence tells readers nothing about how ideas connect.",
          },
        ],
        keyFormulas: [
          { name: "Controlling idea", statement: "The central point of an informative text; every detail should support it." },
          { name: "Domain-specific vocabulary", statement: "Technical words that belong to a subject, defined at first use for readers who may not know them." },
          { name: "Transition by relationship", statement: "Addition: in addition. Contrast: however. Cause and effect: as a result. Example: for instance. Sequence: next." },
        ],
        workedExample: {
          problem: "Revise this sentence for precision: 'Octopuses eat stuff like crabs.'",
          solution: "Replace 'stuff' with a specific category and name examples: 'Octopuses are carnivores that hunt prey such as crabs and clams.' The revision adds a domain word (carnivores), swaps a vague noun for an exact one and gives the reader more information without extra length.",
        },
      },
      questions: [
        {
          id: "ela8-u3-informative-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: OCTOPUS,
          stem: "Which revision of the sentence 'They do a lot of things' uses the most precise language?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They do many different things." },
              { id: "b", text: "They solve problems, such as unscrewing a jar lid to reach food." },
              { id: "c", text: "They are really good at stuff." },
              { id: "d", text: "They do cool things in the ocean." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Precise language", statement: "Replace vague words with specific details and examples." }],
            steps: [{ reasoning: "Choice (b) names a specific ability (solving problems) and gives a concrete example, while the others keep vague words like things, stuff and cool.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(b)**. Choices (a), (c) and (d) swap one vague phrase for another.",
            commonErrors: ["Choosing (a) because 'many different' sounds more formal even though it adds no information."],
          },
        },
        {
          id: "ela8-u3-informative-writing-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: OCTOPUS,
          stem: "Complete the sentence with the best transition: 'An octopus has no bones; ______, it can squeeze through openings as small as its beak.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "however" },
              { id: "b", text: "for example" },
              { id: "c", text: "as a result" },
              { id: "d", text: "meanwhile" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Transitions", statement: "Choose the transition that names the true relationship between two ideas." }],
            steps: [
              { reasoning: "The first clause is a cause: with no bones, its body is flexible.", evidence: "has no bones", marks: 1, markCode: "AO4" },
              { reasoning: "The second clause is the effect, so the transition must signal cause and effect: as a result.", evidence: "squeeze through openings", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "**(c)** as a result. 'However' signals contrast, 'for example' introduces an illustration and 'meanwhile' suggests two things happening at the same time.",
            commonErrors: ["Choosing 'for example' because the second clause gives a detail, without noticing it is an effect of having no bones."],
          },
        },
        {
          id: "ela8-u3-informative-writing-q3",
          difficulty: "core",
          totalMarks: 6,
          extract: OCTOPUS,
          stem: "Rewrite sentences 3 to 5 of the draft (the three sentences that begin with 'Also') as one or two sentences that use precise language and varied transitions to show how the ideas connect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Varied transitions", statement: "Each transition should show a specific relationship, not just add another item." },
              { kind: "technique", name: "Precise language", statement: "Use accurate verbs and domain vocabulary." },
            ],
            steps: [
              { reasoning: "Includes all three facts: color change, no bones with a hard beak, and squeezing through small spaces.", evidence: "change color", marks: 1, markCode: "AO1" },
              { reasoning: "Uses a transition that shows the cause and effect link between having no bones and squeezing through gaps (for example as a result, because).", marks: 1, markCode: "AO4" },
              { reasoning: "Uses a different transition for the color-change fact (for instance, in addition) rather than repeating 'Also'.", marks: 1, markCode: "AO4" },
              { reasoning: "Replaces vague wording with precise language, such as 'camouflage', 'flexible' or 'hard beak'.", marks: 1, markCode: "AO4" },
              { reasoning: "Combines the ideas into complete, varied sentences with no fragments.", marks: 1, markCode: "AO5" },
              { reasoning: "Keeps a formal, objective tone with no opinions such as 'neat'.", marks: 1, markCode: "AO4" },
            ],
            levels: levels6("writing"),
            finalAnswer: "Model: 'An octopus has no bones, only a hard beak; as a result, it can squeeze through openings barely wider than that beak. In addition, it can change color to camouflage itself against rocks and sand.'",
            commonErrors: ["Starting every sentence with a different transition that does not fit the relationship, such as 'however' for an added fact.", "Dropping one of the three facts.", "Keeping informal wording such as 'neat' or 'stuff'."],
          },
        },
        {
          id: "ela8-u3-informative-writing-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: OCTOPUS,
          stem: "Answer all parts about the draft 'Octopuses'.",
          parts: [
            { label: "a", prompt: "Identify two vague words or phrases in the draft and replace each with a more precise one.", marks: 2 },
            { label: "b", prompt: "Suggest a controlling idea for the whole text and explain how you would organize it, including two headings.", marks: 4 },
            { label: "c", prompt: "Write a revised introductory paragraph (four to six sentences) that states the controlling idea, defines the term cephalopod and uses at least two different transitions.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Controlling idea", statement: "One central point that every paragraph and heading supports." },
              { kind: "convention", name: "Formatting", statement: "Headings group related information and guide the reader." },
            ],
            steps: [
              { part: "a", reasoning: "Identifies a vague word or phrase, such as 'a lot of things' or 'stuff', and replaces it accurately (for example 'solve problems', 'prey').", evidence: "They do a lot of things", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "Identifies and replaces a second vague item, such as 'really smart' or 'neat', with exact wording.", evidence: "In conclusion, octopuses are neat", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Controlling idea is clear and covers the content, for example that octopuses are intelligent animals with body features that suit them to hunting and hiding.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Explains a logical order, such as body features first and intelligence second, or by category.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Gives two relevant headings that match the grouped details, such as 'A Flexible Body' and 'Problem Solvers'.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Explains how details from the draft would be sorted under each heading, so unrelated details are removed or moved.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "States a clear controlling idea in the opening sentence.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "Defines cephalopod accurately, for example a group of ocean animals that includes octopuses and squid.", evidence: "The octopus is a cephalopod", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Uses at least two different transitions that each fit the relationship between ideas.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "Uses precise language and domain vocabulary in place of vague words.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "Organizes sentences in a logical order with a formal, objective tone.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "Uses correct grammar, punctuation and spelling.", marks: 1, markCode: "AO5" },
            ],
            levels: levels6("writing", "c"),
            finalAnswer: "(a) 'a lot of things' becomes 'solve problems'; 'stuff like crabs' becomes 'prey such as crabs and clams'. (b) Controlling idea: octopuses are intelligent animals whose bodies suit them for hunting and hiding. Headings: 'A Flexible Body' and 'A Problem-Solving Mind'. (c) Model: 'Octopuses are among the most intelligent animals in the ocean, and their bodies are just as remarkable as their minds. An octopus is a cephalopod, a group of soft-bodied sea animals that also includes squid and cuttlefish. Because an octopus has no bones, only a hard beak, it can squeeze through very small gaps. In addition, it can change color to blend into rocks and sand. Scientists have even watched one unscrew a jar lid from the inside.'",
            commonErrors: ["Choosing a controlling idea that is only a topic ('octopuses') instead of a point.", "Adding headings that do not match the details beneath them.", "Using the same transition repeatedly or in the wrong relationship."],
          },
        },
      ],
    },
  ],
};
