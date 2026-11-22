import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "psych-u4-lesson-4-1",
  code: "4-1",
  title: "Conformity, Obedience and Group Behaviour",
  goal: "I CAN describe conformity, obedience and key group phenomena, including social facilitation, social loafing and deindividuation.",
  standards: ["Paper 1", "Paper 2", "Topic 4"],
  vocabulary: [
    { term: "Conformity", definition: "Changing one's behaviour or beliefs to match group norms or majority opinion." },
    { term: "Compliance", definition: "Publicly going along with others while privately disagreeing." },
    { term: "Obedience", definition: "Following direct orders from an authority figure." },
    { term: "Social facilitation", definition: "Improved performance on well-learned tasks in the presence of others." },
    { term: "Social loafing", definition: "Reduced individual effort when working in a group compared to alone." },
    { term: "Deindividuation", definition: "Loss of self-awareness and personal responsibility in crowds or anonymous situations." },
  ],
  concepts: [
    {
      id: "psych-u4-conformity-obedience",
      title: "Conformity and obedience",
      skill: "Describe Asch's conformity studies, Milgram's obedience research and evaluate the influence of group pressure.",
      lesson: {
        sections: [
          {
            heading: "Conformity",
            body: "**Solomon Asch (1951)** showed that individuals often give wrong answers to match a unanimous group — about 37% of responses conformed in critical trials. Conformity arises from **informational influence** (the group may know better) and **normative influence** (fear of rejection). Factors increasing conformity: group unanimity, group size (up to ~4-5), perceived expertise, anonymity, and public responding. A single dissenter dramatically reduces conformity.",
          },
          {
            heading: "Obedience to authority",
            body: "**Stanley Milgram (1963)** asked participants to administer electric shocks to a 'learner' on orders from an experimenter. Despite apparent distress, 65% delivered the maximum 450V. Explanations include **agentic state** (seeing oneself as an agent of authority, not responsible), **legitimate authority**, and **foot-in-the-door** gradual escalation. Variations showed proximity of victim and authority strongly affect obedience; proximity of peers who disobeyed sharply reduced it.",
          },
          {
            heading: "Evaluating conformity and obedience research",
            body: "Both studies used deception and artificial settings — ecological validity is questioned. Participants were mostly male Americans, limiting generalisability. However, the effects are replicated in real-world contexts: conformity to wrong answers, obedience in military and organisational settings, and the bystander effect all show group influence on individuals. Ethical concerns about deception and distress led to stricter research guidelines.",
          },
        ],
        keyFormulas: [
          { name: "Asch's finding", statement: "~37% conformity on critical trials with unanimous group" },
          { name: "Milgram's finding", statement: "65% obeyed to maximum voltage" },
          { name: "Influence types", statement: "Informational (believe group) + Normative (fear rejection)" },
        ],
        workedExample: {
          problem: "Why did a single confederate disagreeing reduce conformity in Asch's studies?",
          solution: "The dissenter broke group unanimity — participants no longer faced total social pressure. This shows conformity depends on perceived consensus; even one ally gives permission to resist.",
        },
      },
      questions: [
        {
          id: "psych-u4-cfq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Milgram's obedience study, participants believed they were administering:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simulated shocks in a role-play" },
              { id: "b", text: "Real electric shocks to a learner" },
              { id: "c", text: "Mild static electricity" },
              { id: "d", text: "Verbal instructions only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Milgram procedure", statement: "Participants believed shocks were real and the learner was in another room." },
            ],
            steps: [
              { reasoning: "Participants believed they were giving real shocks on the experimenter's orders.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Real electric shocks (believed)",
            commonErrors: ["Thinking participants knew it was simulated — deception was essential."],
          },
        },
        {
          id: "psych-u4-cfq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two factors that increase conformity in Asch-type situations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conformity factors", statement: "Group unanimity, size, perceived expertise, anonymity, public responding increase conformity." },
            ],
            steps: [
              { reasoning: "Group unanimity: when all others agree, pressure to conform is maximal; one dissenter sharply reduces it.", marks: 1, markCode: "M" },
              { reasoning: "Group size: conformity increases up to about 4-5 members then plateaus.", marks: 1, markCode: "M" },
              { reasoning: "Public responding and anonymity: writing privately or wearing hoods reduces normative pressure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unanimity, group size, expertise, anonymity, public responding all affect conformity.",
            commonErrors: ["Claiming larger groups always increase conformity — effect plateaus."],
          },
        },
        {
          id: "psych-u4-cfq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain Milgram's concept of the 'agentic state' as an explanation of obedience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Agentic state", statement: "People obey when they see themselves as agents of authority, shifting responsibility to the authority figure." },
            ],
            steps: [
              { reasoning: "In the agentic state, individuals see themselves as instruments carrying out orders, not autonomous actors.", marks: 1, markCode: "M" },
              { reasoning: "Responsibility for consequences is transferred to the authority — 'I was just following orders'.", marks: 1, markCode: "M" },
              { reasoning: "This is triggered by legitimate authority and situational cues (uniform, title, institutional setting).", marks: 1, markCode: "R" },
              { reasoning: "The autonomous state — where personal conscience operates — is suspended during obedience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Agentic state = seeing self as authority's agent, abdicating personal responsibility.",
            commonErrors: ["Saying participants were evil — Milgram showed ordinary people obey under authority."],
          },
        },
        {
          id: "psych-u4-cfq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A workplace manager demands employees work unpaid overtime. Most comply despite private objections.",
          parts: [
            { label: "a", prompt: "Explain this compliance using conformity and obedience principles.", marks: 3 },
            { label: "b", prompt: "Describe two situational factors that would reduce employee compliance.", marks: 2 },
            { label: "c", prompt: "Evaluate the real-world applicability of Asch and Milgram's laboratory findings.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group influence in organisations", statement: "Authority legitimacy, unanimity and diffusion of responsibility drive compliance and obedience." },
            ],
            steps: [
              { part: "a", reasoning: "Obedience: manager is a legitimate authority figure — employees enter agentic state, following orders.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Normative conformity: fear of sanctions or rejection for refusing creates public compliance.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Diffusion of responsibility — no individual feels personally accountable for objecting.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Supportive peers: a colleague who also refuses reduces normative pressure (like Asch's dissenter).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reduced authority legitimacy: questioning the manager's right to demand overtime weakens obedience.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: effects replicate in real settings — workplace bullying, military obedience, bystander effect.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limitation: artificial lab tasks differ from complex real decisions; stakes and consequences differ.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sample limitations (mostly male students) restrict generalisability to diverse populations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Obedience + normative conformity + diffusion. (b) Peer support + reduced legitimacy. (c) Replicates but lab context limits generalisation.",
            commonErrors: ["Assuming people in real settings resist better — obedience is common in organisations."],
          },
        },
        {
          id: "psych-u4-cfq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Asch's conformity experiments, participants were asked to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deliver electric shocks to a learner on an experimenter's orders" },
              { id: "b", text: "Judge which of two lines matched a standard line while confederates gave wrong answers" },
              { id: "c", text: "Rate emotional expressions in photographs" },
              { id: "d", text: "Sort objects into categories on command" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Asch's line-judgment task", statement: "Participants publicly judged line lengths while confederates unanimously gave incorrect answers." },
            ],
            steps: [
              { reasoning: "Asch used a line-judgment task — participants compared line lengths while confederates erred.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Line-length judgments with erring confederates",
            commonErrors: ["Confusing Asch's task with Milgram's shock procedure."],
          },
        },
        {
          id: "psych-u4-cfq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Agreeing with a group's opinion mainly to avoid rejection and gain acceptance is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Normative social influence" },
              { id: "b", text: "Deindividuation" },
              { id: "c", text: "Informational social influence" },
              { id: "d", text: "Social loafing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Normative influence", statement: "Conforming to gain social approval or avoid rejection, regardless of private belief." },
            ],
            steps: [
              { reasoning: "Normative influence = conforming to be liked and accepted, driven by fear of rejection.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Normative social influence",
            commonErrors: ["Confusing normative (social approval) with informational (believing the group is right)."],
          },
        },
        {
          id: "psych-u4-cfq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "In Asch's critical trials, approximately what percentage of a participant's responses conformed to the unanimous group's incorrect answer?",
          response: { type: "numeric", parts: [{ label: "Conformity rate", answer: 37, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Asch's finding", statement: "About 37% of responses conformed on critical trials with a unanimous group." },
            ],
            steps: [
              { reasoning: "Asch found roughly 37% conformity on critical trials.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "37%",
            commonErrors: ["Confusing conformity rate with obedience rate (Milgram's 65%)."],
          },
        },
        {
          id: "psych-u4-cfq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which factor most strongly reduces conformity in Asch-type studies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single confederate who disagrees with the majority" },
              { id: "b", text: "Larger group size" },
              { id: "c", text: "Public rather than private responding" },
              { id: "d", text: "Greater group unanimity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unanimity and conformity", statement: "Conformity depends on perceived consensus; one dissenter sharply reduces pressure." },
            ],
            steps: [
              { reasoning: "A single dissenter breaks group unanimity — social pressure collapses.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A single dissenting confederate",
            commonErrors: ["Thinking public responding reduces conformity — it increases normative pressure."],
          },
        },
        {
          id: "psych-u4-cfq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between informational and normative social influence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Two influence types", statement: "Informational = believe the group may be right; normative = conform to gain acceptance." },
            ],
            steps: [
              { reasoning: "Informational influence: the group may know better, so we accept its judgement — often producing private acceptance.", marks: 1, markCode: "M" },
              { reasoning: "Normative influence: we conform to be liked and avoid rejection — may involve public compliance while privately disagreeing.", marks: 1, markCode: "M" },
              { reasoning: "Both produce outward conformity but through different motives; they can operate independently.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Informational = believe the group is right; normative = conform for social approval.",
            commonErrors: ["Saying both always occur together — they can operate separately."],
          },
        },
        {
          id: "psych-u4-cfq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In Milgram's baseline study, what was the maximum shock voltage participants believed they could deliver, and what percentage delivered it fully?",
          response: { type: "numeric", parts: [{ label: "Maximum voltage", answer: 450, unit: "V" }, { label: "Percentage who obeyed fully", answer: 65, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Milgram's finding", statement: "The machine was labelled to 450 V and 65% of participants obeyed to the maximum." },
            ],
            steps: [
              { reasoning: "Milgram's machine went up to 450 V (labelled 'XXX — dangerous').", marks: 1, markCode: "M" },
              { reasoning: "65% of participants administered the maximum shock.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "450 V; 65%",
            commonErrors: ["Confusing 450 V with the 15 V starting level or 300 V mid-point."],
          },
        },
        {
          id: "psych-u4-cfq11",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "In Milgram's variations, obedience to the experimenter's orders was lowest when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The learner was in another room" },
              { id: "b", text: "The authority figure was in a remote room" },
              { id: "c", text: "The learner was an attractive confederate" },
              { id: "d", text: "The learner was in the same room and could be seen" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Proximity effects", statement: "Victim proximity increases empathy and reduces obedience; authority proximity increases it." },
            ],
            steps: [
              { reasoning: "Close proximity to the victim made distress vivid, increasing resistance to orders.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Learner in the same room",
            commonErrors: ["Confusing victim proximity with authority proximity effects."],
          },
        },
        {
          id: "psych-u4-cfq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two ethical criticisms of Milgram's obedience research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Research ethics", statement: "Deception and psychological distress must be justified; participants must give informed consent and be debriefed." },
            ],
            steps: [
              { reasoning: "Deception: participants believed shocks were real and the learner was in danger — consent was not fully informed.", marks: 1, markCode: "M" },
              { reasoning: "Distress: many participants showed extreme tension and believed they might have harmed someone.", marks: 1, markCode: "M" },
              { reasoning: "Consequences: the study contributed to stricter ethics guidelines requiring debriefing and minimising harm.", marks: 1, markCode: "A" },
              { reasoning: "Modern ethics would likely reject the design; similar questions are now studied with simulations.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Deception + severe distress; modern guidelines would demand informed consent and debriefing.",
            commonErrors: ["Claiming participants were permanently harmed — distress was real but participants were debriefed."],
          },
        },
        {
          id: "psych-u4-cfq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how the 'foot-in-the-door' effect operated within Milgram's procedure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gradual escalation", statement: "Each shock level was only slightly higher than the last, making refusal progressively harder." },
            ],
            steps: [
              { reasoning: "Shocks began at a trivial 15 V — an easy first request to accept.", marks: 1, markCode: "M" },
              { reasoning: "Each subsequent level was only 15 V higher — too small a step to justify stopping.", marks: 1, markCode: "M" },
              { reasoning: "Commitment and consistency grew with each compliance — by 450 V, stopping felt like breaking a pattern.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gradual escalation made each step a small request — commitment grew until refusal felt impossible.",
            commonErrors: ["Confusing this with the foot-in-the-door persuasion technique — here it is situational escalation."],
          },
        },
        {
          id: "psych-u4-cfq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Obedience in Milgram's study dropped sharply when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two peers (confederates) refused to continue shocking" },
              { id: "b", text: "The experimenter wore a lab coat" },
              { id: "c", text: "The voltage increased more slowly" },
              { id: "d", text: "The learner moved to another room" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Peer models of disobedience", statement: "Watching others refuse legitimises resistance and breaks the unanimity of authority." },
            ],
            steps: [
              { reasoning: "Peer confederates who disobeyed modelled resistance — participants felt permitted to stop.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Peers refusing to continue",
            commonErrors: ["Confusing peer disobedience with authority proximity effects."],
          },
        },
        {
          id: "psych-u4-cfq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate the ecological validity and generalisability of Asch's and Milgram's laboratory studies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Validity and generalisability", statement: "Artificial tasks limit real-world application; narrow samples limit who findings apply to." },
            ],
            steps: [
              { reasoning: "Ecological validity: judging lines and delivering fake shocks differ from real decisions with genuine stakes and consequences.", marks: 2, markCode: "M" },
              { reasoning: "Generalisability: participants were mostly male American students — findings may not transfer across cultures or ages.", marks: 2, markCode: "M" },
              { reasoning: "However, real-world parallels exist — jury conformity, military and workplace obedience, bystander effects.", marks: 1, markCode: "A" },
              { reasoning: "Overall: strong situational mechanisms but exact percentages may not generalise.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Powerful situational findings but artificial tasks and narrow samples limit external validity.",
            commonErrors: ["Dismissing the studies entirely — the underlying mechanisms replicate in real settings."],
          },
        },
        {
          id: "psych-u4-cfq16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The key difference between compliance and obedience is that obedience involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Agreeing only privately while disagreeing publicly" },
              { id: "b", text: "Matching the majority's opinion" },
              { id: "c", text: "Working harder when others are present" },
              { id: "d", text: "Following direct orders from an authority figure" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Obedience vs compliance", statement: "Obedience = following authority's orders; compliance = yielding to group pressure." },
            ],
            steps: [
              { reasoning: "Obedience is a response to legitimate authority figures giving direct commands.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Following direct orders from an authority figure",
            commonErrors: ["Confusing obedience (authority) with conformity (peers)."],
          },
        },
        {
          id: "psych-u4-cfq17",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Describe how group size affects conformity and explain why the effect plateaus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group size and conformity", statement: "Conformity rises with group size up to about 4-5 members then levels off." },
            ],
            steps: [
              { reasoning: "Conformity increases as the group grows from one to about four or five members.", marks: 1, markCode: "M" },
              { reasoning: "Beyond that, added members bring little extra pressure — the person is already thoroughly outnumbered.", marks: 1, markCode: "M" },
              { reasoning: "Perceived unanimity and consensus matter more than raw numbers.", marks: 1, markCode: "A" },
              { reasoning: "Larger groups also dilute personal responsibility, which can reduce felt pressure differently.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Conformity rises to ~4-5 members then plateaus — consensus matters more than size.",
            commonErrors: ["Claiming conformity keeps rising indefinitely with group size."],
          },
        },
        {
          id: "psych-u4-cfq18",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two situational cues that make an authority figure seem legitimate in Milgram-type situations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Legitimate authority", statement: "Uniforms, titles, institutional settings and scientific framing signal the right to command." },
            ],
            steps: [
              { reasoning: "External cues: the experimenter's lab coat, title and the formal Yale setting signalled expertise and authority.", marks: 1, markCode: "M" },
              { reasoning: "Institutional context: the scientific purpose ('a study of memory and learning') gave the orders legitimacy.", marks: 1, markCode: "M" },
              { reasoning: "Perceived legitimacy — not personal power — is what triggers obedience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Uniforms, titles, institutional setting and scientific framing create perceived legitimacy.",
            commonErrors: ["Saying participants obeyed because the experimenter was personally intimidating — legitimacy is situational."],
          },
        },
        {
          id: "psych-u4-cfq19",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "During a hospital crisis, management orders nurses to work 16-hour shifts. Most comply despite exhaustion.",
          parts: [
            { label: "a", prompt: "Explain this compliance using obedience and conformity principles.", marks: 3 },
            { label: "b", prompt: "Describe two factors that would decrease staff compliance.", marks: 2 },
            { label: "c", prompt: "Evaluate the applicability of Milgram's findings to this workplace scenario.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Organisational obedience", statement: "Legitimate authority, normative pressure and diffusion of responsibility drive compliance at work." },
            ],
            steps: [
              { part: "a", reasoning: "Obedience: management is a legitimate authority — nurses enter the agentic state and follow orders.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Normative conformity: fear of sanctions or letting colleagues down pressures public compliance.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Diffusion of responsibility — no individual nurse feels personally accountable for refusing.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Peer solidarity: colleagues who also refuse reduce normative pressure (like Asch's dissenter).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Questioned legitimacy: challenging management's right to demand excessive hours weakens obedience.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Replication: real hierarchies routinely produce obedience — the mechanism is supported.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limitation: life-threatening stakes and professional ethics differ from Milgram's artificial shocks.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: Milgram's principles apply but the magnitude of compliance depends on context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Obedience + normative conformity + diffusion. (b) Peer refusal + questioned legitimacy. (c) Mechanisms apply; context changes magnitude.",
            commonErrors: ["Assuming professionals resist authority better — obedience operates in hospitals and militaries."],
          },
        },
        {
          id: "psych-u4-cfq20",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Informational social influence leads to conformity because people:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fear punishment from the group" },
              { id: "b", text: "Believe the group may know better than they do" },
              { id: "c", text: "Lose awareness of their own identity" },
              { id: "d", text: "Want to be liked by the group" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Informational influence", statement: "Conforming because the group's judgement is taken as evidence about reality." },
            ],
            steps: [
              { reasoning: "Informational influence treats the majority as a source of information about the correct answer.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Believing the group may know better",
            commonErrors: ["Confusing informational influence with normative (approval-seeking) influence."],
          },
        },
      ],
    },
    {
      id: "psych-u4-group-phenomena",
      title: "Group behaviour phenomena",
      skill: "Describe social facilitation, social loafing, deindividuation and group decision-making biases.",
      lesson: {
        sections: [
          {
            heading: "Social facilitation and social loafing",
            body: "**Social facilitation**: the presence of others improves performance on **well-learned/simple tasks** but impairs performance on **complex/new tasks** (Zajonc's drive theory — arousal enhances dominant responses). **Social loafing**: individuals exert less effort in groups than alone — more people means less individual accountability, so each person contributes less. Loafing is reduced when individual contributions are identifiable and valued.",
          },
          {
            heading: "Deindividuation",
            body: "**Deindividuation** occurs when anonymity and group membership reduce self-awareness and personal responsibility — people feel less individually accountable and more like part of the group. This explains mob violence, rioting, and online disinhibition. Conditions promoting it: anonymity (masks, crowds, online), reduced accountability, arousal, and group size. Not all crowd behaviour is antisocial — deindividuation can also enable positive collective action.",
          },
          {
            heading: "Group decision-making",
            body: "Groups can make better decisions through pooled knowledge (**groupthink** is the opposite — cohesion suppresses dissent leading to poor decisions). **Group polarisation**: discussion pushes attitudes more extreme — cautious groups become more cautious, risky groups more risky. **Social identity theory** explains in-group favouritism and out-group discrimination: people derive self-esteem from group membership.",
          },
        ],
        keyFormulas: [
          { name: "Facilitation rule", statement: "Others present: easy tasks improve, hard tasks worsen" },
          { name: "Deindividuation", statement: "Anonymity + arousal + group → reduced self-awareness → disinhibited behaviour" },
        ],
        workedExample: {
          problem: "Why do people shout insults online that they would never say face-to-face?",
          solution: "Deindividuation: online anonymity removes identifiability, reducing self-awareness and accountability — disinhibited behaviour results, similar to crowd behaviour.",
        },
      },
      questions: [
        {
          id: "psych-u4-gpq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Social loafing refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Improved performance in groups" },
              { id: "b", text: "Reduced individual effort in groups" },
              { id: "c", text: "Group pressure to conform" },
              { id: "d", text: "Loss of identity in crowds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Social loafing", statement: "People work less hard in groups because individual contributions are less identifiable." },
            ],
            steps: [
              { reasoning: "Social loafing = reduced effort when working collectively.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reduced individual effort in groups",
            commonErrors: ["Confusing social loafing with social facilitation — opposite effects."],
          },
        },
        {
          id: "psych-u4-gpq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how deindividuation can lead to aggressive crowd behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deindividuation", statement: "Anonymity and group membership reduce self-awareness and accountability, disinhibiting behaviour." },
            ],
            steps: [
              { reasoning: "In crowds, anonymity (faces hidden, uniforms, darkness) reduces sense of individual identity.", marks: 1, markCode: "M" },
              { reasoning: "Reduced self-awareness means personal values and consequences feel less relevant.", marks: 1, markCode: "M" },
              { reasoning: "Group arousal and emotional contagion amplify impulsive, aggressive acts normally suppressed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Anonymity + arousal + reduced accountability → disinhibited aggression.",
            commonErrors: ["Assuming crowds make everyone aggressive — deindividuation can enable prosocial acts too."],
          },
        },
        {
          id: "psych-u4-gpq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why social facilitation improves performance on simple tasks but impairs it on complex ones.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Drive theory of facilitation", statement: "Presence of others increases arousal, enhancing dominant responses — which helps simple tasks, harms complex ones." },
            ],
            steps: [
              { reasoning: "The presence of others raises physiological arousal (evaluation apprehension, distraction).", marks: 1, markCode: "M" },
              { reasoning: "Arousal strengthens the dominant (most practised) response.", marks: 1, markCode: "M" },
              { reasoning: "For well-learned tasks, the dominant response is correct — performance improves.", marks: 1, markCode: "R" },
              { reasoning: "For complex/new tasks, the dominant response may be wrong — arousal makes errors more likely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arousal enhances dominant responses — good for easy tasks, bad for hard ones.",
            commonErrors: ["Claiming audience always helps — it depends on task difficulty."],
          },
        },
        {
          id: "psych-u4-gpq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A company finds team projects produce lower-quality output than individual work.",
          parts: [
            { label: "a", prompt: "Explain this using social loafing and group decision-making concepts.", marks: 3 },
            { label: "b", prompt: "Describe two strategies to improve group performance.", marks: 2 },
            { label: "c", prompt: "Evaluate whether group work is ever superior to individual work.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group productivity", statement: "Loafing reduces effort; groupthink and polarisation can degrade decisions; but groups pool knowledge." },
            ],
            steps: [
              { part: "a", reasoning: "Social loafing: members reduce effort because individual contributions are not identifiable.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Groupthink or polarisation: cohesion suppresses dissent, producing poorer collective decisions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Process loss: coordinating members takes time and energy away from the task.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Make individual contributions identifiable — assign specific roles and evaluate individually.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Assign a devil's advocate to prevent groupthink and encourage diverse perspectives.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Groups excel at tasks requiring diverse knowledge — brainstorming, complex problem-solving.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "They fail on tasks where individual effort is key and coordination costs exceed pooling benefits.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Optimal: match group vs individual work to task demands — judgement, not blanket preference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Loafing + groupthink + process loss. (b) Identifiable roles + devil's advocate. (c) Groups help on complex tasks, hurt on simple ones.",
            commonErrors: ["Assuming groups always outperform individuals — process losses often dominate."],
          },
        },
        {
          id: "psych-u4-gpq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Social facilitation is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Improved performance on well-learned tasks when others are present" },
              { id: "b", text: "Pressure to match group opinions" },
              { id: "c", text: "Loss of personal identity in crowds" },
              { id: "d", text: "Reduced individual effort when working in a group" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Social facilitation", statement: "The presence of others improves performance on simple, well-learned tasks." },
            ],
            steps: [
              { reasoning: "Social facilitation concerns how an audience or co-actors affect performance on practised tasks.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Improved performance on well-learned tasks",
            commonErrors: ["Confusing social facilitation with social loafing — opposite effects."],
          },
        },
        {
          id: "psych-u4-gpq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "According to drive theory, the presence of others improves performance on simple tasks because raised arousal:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "strengthens the dominant response, which is usually correct for simple tasks" },
              { id: "b", text: "reduces the effort people are willing to expend" },
              { id: "c", text: "eliminates evaluation apprehension" },
              { id: "d", text: "promotes social loafing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Drive theory of facilitation", statement: "Arousal strengthens the dominant response — correct for easy tasks, wrong for hard ones." },
            ],
            steps: [
              { reasoning: "For well-learned tasks the dominant response is the correct one, so arousal helps.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Strengthens the dominant (usually correct) response",
            commonErrors: ["Saying arousal always helps — it impairs complex tasks."],
          },
        },
        {
          id: "psych-u4-gpq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a study of social loafing, individual effort averages 70% of solo effort in a group. If solo effort is 100 units of work, what is the effort per member in a group of 4?",
          response: { type: "numeric", parts: [{ label: "Group effort per member", answer: 70 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Social loafing", statement: "Group members exert less effort than they would alone." },
            ],
            steps: [
              { reasoning: "70% of 100 units = 70 units.", working: "0.70 x 100", marks: 1, markCode: "M" },
              { reasoning: "Each member exerts 70 units.", working: "70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70 units",
            commonErrors: ["Reporting 30 units (the reduction) instead of the effort itself."],
          },
        },
        {
          id: "psych-u4-gpq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Deindividuation is most likely to occur when crowd members are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "in small groups with clear leadership" },
              { id: "b", text: "performing well-learned tasks" },
              { id: "c", text: "anonymous and feel less individually responsible" },
              { id: "d", text: "easily identifiable and personally accountable" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deindividuation", statement: "Anonymity plus group membership reduces self-awareness and personal responsibility." },
            ],
            steps: [
              { reasoning: "Anonymity is the key condition — it reduces identifiability and accountability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Anonymous and less individually responsible",
            commonErrors: ["Thinking deindividuation requires small groups — anonymity and crowd size promote it."],
          },
        },
        {
          id: "psych-u4-gpq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between social facilitation and social loafing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Facilitation vs loafing", statement: "Facilitation = audience effect on performance; loafing = reduced effort in shared tasks." },
            ],
            steps: [
              { reasoning: "Social facilitation: the mere presence of others changes performance quality — better on easy tasks, worse on hard ones.", marks: 1, markCode: "M" },
              { reasoning: "Social loafing: individuals exert less effort when working collectively because contributions are less identifiable.", marks: 1, markCode: "M" },
              { reasoning: "Facilitation concerns how others affect performance; loafing concerns motivation and effort in shared output.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Facilitation = others affect performance; loafing = reduced effort in groups.",
            commonErrors: ["Treating them as the same phenomenon — they operate through different mechanisms."],
          },
        },
        {
          id: "psych-u4-gpq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A six-member team produces 420 units of work in total, with each member contributing equally. What is the average output per member?",
          response: { type: "numeric", parts: [{ label: "Average per member", answer: 70 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group output", statement: "Total output divided by members gives per-capita contribution." },
            ],
            steps: [
              { reasoning: "420 / 6 = 70.", working: "420 / 6", marks: 1, markCode: "M" },
              { reasoning: "Average contribution is 70 units.", working: "70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70 units",
            commonErrors: ["Dividing by the wrong number of members."],
          },
        },
        {
          id: "psych-u4-gpq11",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Groupthink is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cohesion suppressing dissent, leading to poor decisions" },
              { id: "b", text: "pooling diverse knowledge to improve decisions" },
              { id: "c", text: "discussion making attitudes more extreme" },
              { id: "d", text: "reduced effort when tasks are shared" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Groupthink", statement: "Strong group cohesion suppresses dissent and critical evaluation, degrading decisions." },
            ],
            steps: [
              { reasoning: "Groupthink is the downside of cohesion — members prioritise harmony over accuracy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cohesion suppressing dissent",
            commonErrors: ["Confusing groupthink with group polarisation (extremity, not suppressed dissent)."],
          },
        },
        {
          id: "psych-u4-gpq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how group polarisation affects group decision-making and attitude expression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group polarisation", statement: "Discussion pushes group attitudes toward greater extremity in the direction of the initial lean." },
            ],
            steps: [
              { reasoning: "Cautious groups become more cautious; risky groups become more risky after discussion.", marks: 1, markCode: "M" },
              { reasoning: "Persuasive arguments favour the dominant view and social comparison pushes members further.", marks: 1, markCode: "M" },
              { reasoning: "Groups therefore adopt more extreme positions than the average individual member would alone.", marks: 1, markCode: "A" },
              { reasoning: "Implication: juries and committees need devil's advocates to counter polarisation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Discussion amplifies initial leanings — groups end up more extreme than individuals.",
            commonErrors: ["Saying groups always become more moderate — polarisation moves away from the middle."],
          },
        },
        {
          id: "psych-u4-gpq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two ways organisations can reduce social loafing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reducing loafing", statement: "Identifiable contributions and valued individual input restore effort." },
            ],
            steps: [
              { reasoning: "Make individual contributions identifiable — named roles, individual evaluation, separate outputs.", marks: 1, markCode: "M" },
              { reasoning: "Increase perceived value of the task and personal responsibility for the group's success.", marks: 1, markCode: "M" },
              { reasoning: "Smaller groups and clear accountability reduce diffusion of responsibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Identifiable contributions + valued input + smaller accountable groups reduce loafing.",
            commonErrors: ["Saying bigger teams help — larger groups increase diffusion and loafing."],
          },
        },
        {
          id: "psych-u4-gpq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Deindividuation in crowds:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "always produces aggressive behaviour" },
              { id: "b", text: "requires a strong central leader" },
              { id: "c", text: "can disinhibit both anti-social and pro-social behaviour" },
              { id: "d", text: "eliminates all personal norms" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deindividuation effects", statement: "Reduced self-awareness disinhibits behaviour generally — not only aggression." },
            ],
            steps: [
              { reasoning: "Deindividuation removes restraints, so it can enable positive collective action as well as violence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Can disinhibit both anti- and pro-social behaviour",
            commonErrors: ["Assuming deindividuation only causes aggression — it enables collective action too."],
          },
        },
        {
          id: "psych-u4-gpq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate the claim that anonymity in crowds inevitably leads to antisocial behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deindividuation evaluation", statement: "Anonymity reduces self-awareness, but emergent norms still guide behaviour." },
            ],
            steps: [
              { reasoning: "Anonymity reduces self-awareness and personal accountability, disinhibiting normally suppressed acts.", marks: 2, markCode: "M" },
              { reasoning: "Evidence: rioting, online disinhibition and mob violence are linked to anonymity.", marks: 2, markCode: "M" },
              { reasoning: "However, crowd members retain shared norms — emergent norms can be prosocial, e.g. peaceful protests.", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: antisocial outcomes are likely but not inevitable — context and norms matter.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Anonymity raises disinhibition but does not determine the behaviour — emergent norms guide it.",
            commonErrors: ["Treating 'inevitable' literally — deindividuation is a risk factor, not a guarantee."],
          },
        },
        {
          id: "psych-u4-gpq16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Group polarisation refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "loss of personal identity in crowds" },
              { id: "b", text: "discussion shifting group attitudes toward greater extremity" },
              { id: "c", text: "individuals conforming to a unanimous majority" },
              { id: "d", text: "groups becoming more moderate after discussion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Group polarisation", statement: "Group discussion amplifies the initial tendency, producing more extreme attitudes." },
            ],
            steps: [
              { reasoning: "Polarisation moves attitudes away from the centre in the direction of the group's lean.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Discussion shifts attitudes toward extremity",
            commonErrors: ["Confusing polarisation with conformity — polarisation is about extremity, not agreement."],
          },
        },
        {
          id: "psych-u4-gpq17",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how social identity theory accounts for in-group favouritism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Social identity theory", statement: "People derive self-esteem from group membership, producing in-group bias." },
            ],
            steps: [
              { reasoning: "People define themselves partly through group memberships — social identity.", marks: 1, markCode: "M" },
              { reasoning: "Categorisation into in-group and out-group triggers a need for positive distinctiveness.", marks: 1, markCode: "M" },
              { reasoning: "Members favour the in-group and may denigrate the out-group to enhance self-esteem.", marks: 1, markCode: "A" },
              { reasoning: "Tajfel's minimal groups show this bias arises from mere categorisation — no real conflict needed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Self-esteem from group membership → in-group favouritism and out-group bias.",
            commonErrors: ["Assuming prejudice requires real competition — minimal groups produce bias arbitrarily."],
          },
        },
        {
          id: "psych-u4-gpq18",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A participant pulls alone with 90 N of force. In a group of five, the same participant exerts 54 N. What is the percentage reduction in force?",
          response: { type: "numeric", parts: [{ label: "Percentage reduction", answer: 40, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Effort reduction", statement: "Percentage reduction = (solo - group) / solo x 100." },
            ],
            steps: [
              { reasoning: "(90 - 54) / 90 x 100 = 40%.", working: "36 / 90 x 100", marks: 1, markCode: "M" },
              { reasoning: "The reduction is 40%.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40%",
            commonErrors: ["Computing 54/90 = 60% (the remaining effort) instead of the reduction."],
          },
        },
        {
          id: "psych-u4-gpq19",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A university notices students contribute less in group projects than in individual assignments.",
          parts: [
            { label: "a", prompt: "Explain this pattern using social loafing and group decision-making concepts.", marks: 3 },
            { label: "b", prompt: "Describe two strategies to improve group output quality.", marks: 2 },
            { label: "c", prompt: "Evaluate when group work is preferable to individual work.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group productivity", statement: "Loafing, groupthink and process losses can make groups underperform individuals." },
            ],
            steps: [
              { part: "a", reasoning: "Social loafing: individual contributions are less identifiable, so effort drops.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Process losses and groupthink: coordination costs and suppressed dissent degrade output.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Diffusion of responsibility means no single member feels accountable for quality.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Assign identifiable roles and evaluate individual contributions separately.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use a devil's advocate or rotating leadership to counter groupthink.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Groups excel on complex tasks needing diverse knowledge — brainstorming, problem-solving.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "They underperform on simple tasks where coordination costs exceed pooling benefits.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: match the method to the task rather than assuming groups always win.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Loafing + process loss + diffusion. (b) Identifiable roles + devil's advocate. (c) Groups suit complex tasks, not simple ones.",
            commonErrors: ["Assuming group work is always superior — process losses often dominate."],
          },
        },
        {
          id: "psych-u4-gpq20",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The presence of others most improves performance on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "creative tasks performed for the first time" },
              { id: "b", text: "well-learned, simple tasks" },
              { id: "c", text: "tasks with ambiguous goals under pressure" },
              { id: "d", text: "complex new tasks requiring novel solutions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Facilitation rule", statement: "Others present: easy tasks improve, hard tasks worsen." },
            ],
            steps: [
              { reasoning: "Arousal strengthens the dominant response — correct for practised tasks.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Well-learned, simple tasks",
            commonErrors: ["Choosing complex tasks — arousal impairs them via dominant wrong responses."],
          },
        },
      ],
    },
  ],
};
