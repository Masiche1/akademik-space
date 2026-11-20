import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "cile-u6-lesson-6-1",
  code: "6-1",
  title: "Persuasive writing: building an argument",
  goal: "I CAN construct a persuasive argument with a clear position, supporting reasons and evidence.",
  standards: ["0861 Writing: persuasive skills"],
  vocabulary: [
    { term: "Thesis", definition: "The main claim or position the writer is arguing for." },
    { term: "Reason", definition: "A point that supports the thesis — the 'why' behind the claim." },
    { term: "Evidence", definition: "Facts, examples, statistics or quotations that support a reason." },
    { term: "Counter-argument", definition: "The opposing view, which the writer acknowledges and refutes." },
    { term: "Refutation", definition: "The act of proving a counter-argument wrong or weak." },
    { term: "Call to action", definition: "A direct instruction telling the reader what to do or believe." },
  ],
  concepts: [
    {
      id: "cile-u6-argument-structure",
      title: "Argument structure",
      skill: "Build a persuasive argument with thesis, reasons, evidence and counter-argument handling.",
      lesson: {
        sections: [
          {
            heading: "The persuasive skeleton",
            body: "- **Thesis**: your position — 'Schools should start later.'\n- **Reasons**: why — 'Teenagers' sleep cycles shift later.'\n- **Evidence**: proof — 'Studies show improved attendance.'\n- **Counter-argument**: acknowledge the other side — 'Opponents cite logistics.'\n- **Refutation**: show why your position still wins — 'Logistics are solvable; sleep is not.'",
          },
          {
            heading: "Choosing reasons and evidence",
            body: "- **Reasons** should be logical and relevant — each must support the thesis.\n- **Evidence** should be credible — statistics, expert quotes, real examples.\n- **One strong reason** beats three weak ones. Depth over breadth.",
          },
          {
            heading: "Handling counter-arguments",
            body: "Ignoring opposition looks weak. Strong arguments:\n\n- Acknowledge the counter-argument fairly.\n- Refute it with evidence or logic.\n- Show why your position is stronger despite the objection.",
          },
        ],
        keyFormulas: [
          { name: "Persuasive structure", statement: "Thesis → reasons → evidence → counter-argument → refutation → call to action." },
        ],
        workedExample: {
          problem: "Thesis: 'Students should have homework-free weekends.' Build the skeleton.",
          solution: "Reasons: mental health, family time, sleep. Evidence: studies linking homework to stress; parental surveys. Counter-argument: 'Homework builds discipline.' Refutation: 'Weekend rest improves Monday performance — discipline is built through rest, not exhaustion.'",
        },
      },
      questions: [
        {
          id: "cile-u6-arg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the thesis in a persuasive argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The evidence" },
              { id: "b", text: "The main claim or position" },
              { id: "c", text: "The counter-argument" },
              { id: "d", text: "The conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis", statement: "The main position being argued." },
            ],
            steps: [
              { reasoning: "Thesis = the claim the whole argument supports.", working: "\\text{main claim}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The main claim or position",
            commonErrors: ["Choosing (a) — evidence supports the thesis, it is not the thesis."],
          },
        },
        {
          id: "cile-u6-arg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to include a counter-argument in a persuasive text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Counter-argument", statement: "Acknowledging opposition shows fairness and strengthens credibility." },
            ],
            steps: [
              { reasoning: "Ignoring opposition looks weak — readers know the other side exists.", working: "\\text{credibility}", marks: 1, markCode: "AO2" },
              { reasoning: "Refuting it shows your argument can survive scrutiny.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Including a counter-argument shows fairness and strengthens credibility — it proves your position can withstand the strongest objection, not just ignore it.",
            commonErrors: ["Saying 'to confuse the reader' — the purpose is strengthening, not confusion."],
          },
        },
        {
          id: "cile-u6-arg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student argues: 'Homework should be banned because it is bad.' Improve this by adding a reason, evidence, and counter-argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Argument depth", statement: "Claims need reasons, evidence and counter-argument handling." },
            ],
            steps: [
              { reasoning: "Problem: 'because it is bad' is not a reason — it is a restatement.", working: "\\text{no reason}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: add reason — 'homework reduces sleep and family time'.", working: "\\text{reason}", marks: 1, markCode: "AO2" },
              { reasoning: "Add evidence: 'studies link heavy homework to stress and sleep loss'.", working: "\\text{evidence}", marks: 1, markCode: "AO2" },
              { reasoning: "Add counter-argument: 'Some say homework builds discipline' + refutation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'Homework should be reduced because it cuts into sleep and family time — studies link heavy homework to stress. Opponents argue it builds discipline, but discipline is better taught through quality work, not quantity.'",
            commonErrors: ["Adding more opinions ('it is really bad') instead of reasons and evidence."],
          },
        },
        {
          id: "cile-u6-arg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing a persuasive argument on a topic of your choice.",
          parts: [
            { label: "a", prompt: "State your thesis clearly.", marks: 2 },
            { label: "b", prompt: "Give two reasons supporting your thesis.", marks: 2 },
            { label: "c", prompt: "Provide evidence for one reason.", marks: 2 },
            { label: "d", prompt: "Acknowledge and refute a counter-argument.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Persuasive argument", statement: "Thesis → reasons → evidence → counter-argument → refutation." },
            ],
            steps: [
              { part: "a", reasoning: "Thesis is clear and specific.", working: "\\text{thesis}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Position is arguable, not obvious.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Two relevant reasons given.", working: "\\text{reasons}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Reasons logically support thesis.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Evidence is credible and specific.", working: "\\text{evidence}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Evidence clearly supports the reason.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Counter-argument acknowledged fairly.", working: "\\text{acknowledged}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Refutation is logical and evidence-based.", working: "\\text{refuted}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion reinforces thesis.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) clear thesis (b) two supporting reasons (c) credible evidence (d) fair counter-argument + refutation",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear arguable thesis.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two logical reasons.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Weak.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Credible evidence.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Weak.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Fair counter + strong refutation.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) attacking the counter-argument rather than refuting it."],
          },
        },
      ],
    },
    {
      id: "cile-u6-persuasive-techniques",
      title: "Persuasive techniques",
      skill: "Use rhetorical techniques — emotive language, rhetorical questions, rule of three, inclusive pronouns — to persuade effectively.",
      lesson: {
        sections: [
          {
            heading: "Key persuasive techniques",
            body: "- **Emotive language**: words that trigger feeling — 'innocent', 'cruel', 'hope'.\n- **Rhetorical questions**: 'Do we really want to ignore this?' — involves the reader.\n- **Rule of three**: 'We came, we saw, we conquered' — rhythm and completeness.\n- **Inclusive pronouns**: 'we', 'us', 'our' — creates shared identity.\n- **Repetition**: repeating key phrases for emphasis.",
          },
          {
            heading: "Ethos, pathos, logos",
            body: "- **Ethos**: credibility — 'As a doctor, I can tell you...'\n- **Pathos**: emotion — 'Think of the children...'\n- **Logos**: logic — 'The evidence shows...'\n\nStrong persuasion combines all three.",
          },
          {
            heading: "Using techniques ethically",
            body: "Techniques should serve the argument, not manipulate. Emotive language is fine when backed by evidence; it becomes manipulation when it replaces reasoning.",
          },
        ],
        keyFormulas: [
          { name: "Persuasive toolkit", statement: "Ethos (credibility) + pathos (emotion) + logos (logic) + rhetorical devices = effective persuasion." },
        ],
        workedExample: {
          problem: "Make this persuasive: 'We should recycle more.'",
          solution: "'Every week, our streets fill with plastic that will outlive us all. We have the power to change this — together. Recycle today, for our children, for our planet, for our future.' — emotive language, rule of three, inclusive pronouns.",
        },
      },
      questions: [
        {
          id: "cile-u6-tech-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which technique uses 'we', 'us', 'our' to create shared identity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emotive language" },
              { id: "b", text: "Inclusive pronouns" },
              { id: "c", text: "Rhetorical question" },
              { id: "d", text: "Rule of three" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inclusive pronouns", statement: "'We/us/our' makes the reader feel part of the group." },
            ],
            steps: [
              { reasoning: "First-person plural pronouns create shared identity.", working: "\\text{'we'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Inclusive pronouns",
            commonErrors: ["Choosing (a) — emotive language is about feeling, not pronouns."],
          },
        },
        {
          id: "cile-u6-tech-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between ethos, pathos and logos.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ethos/pathos/logos", statement: "Credibility, emotion, logic — three persuasive appeals." },
            ],
            steps: [
              { reasoning: "Ethos: credibility/authority; Pathos: emotion; Logos: logic/evidence.", working: "\\text{credibility/emotion/logic}", marks: 1, markCode: "AO2" },
              { reasoning: "Strong persuasion combines all three.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Ethos appeals to credibility ('As an expert...'), pathos to emotion ('Think of the children'), logos to logic ('The evidence shows'). Effective persuasion combines all three.",
            commonErrors: ["Mixing up ethos and logos — ethos is about the speaker's credibility, logos about the argument's logic."],
          },
        },
        {
          id: "cile-u6-tech-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes: 'This is really important and everyone should care.' Improve it using two persuasive techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Persuasive devices", statement: "Replace vague claims with specific emotional and logical appeals." },
            ],
            steps: [
              { reasoning: "Problem: 'really important' is vague — no reason or emotion.", working: "\\text{vague}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix 1: add reason — 'because it affects every student in this school'.", working: "\\text{reason}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix 2: add emotion — 'our children's futures depend on it'.", working: "\\text{emotion}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: specific, motivating, persuasive.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'This affects every student in this school — our children's futures depend on it. We cannot afford to wait.' — specificity, emotion, urgency replace vague importance.",
            commonErrors: ["Adding more vague words ('very important') instead of specific appeals."],
          },
        },
        {
          id: "cile-u6-tech-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing a persuasive speech or letter on a topic of your choice.",
          parts: [
            { label: "a", prompt: "Write an opening that hooks the audience.", marks: 2 },
            { label: "b", prompt: "Use two persuasive techniques in your argument.", marks: 3 },
            { label: "c", prompt: "Identify which technique you used and explain its effect.", marks: 2 },
            { label: "d", prompt: "Write a call to action ending.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Persuasive writing", statement: "Hook + techniques + call to action = effective persuasion." },
            ],
            steps: [
              { part: "a", reasoning: "Opening is attention-grabbing and relevant.", working: "\\text{hook}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Establishes stakes or curiosity.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Two distinct techniques used correctly.", working: "\\text{techniques}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Techniques serve the argument.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Effective and appropriate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Techniques identified accurately.", working: "\\text{identify}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Effects explained.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Call to action is clear and urgent.", working: "\\text{CTA}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Ending is memorable.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) effective hook (b) two appropriate techniques (c) effects explained (d) clear call to action",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Strong hook.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Weak.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Two effective techniques.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One or weak.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Effects explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear CTA.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (b) using techniques that do not serve the argument — manipulation, not persuasion."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u6-persuasive-notes",
      title: "Persuasive and argumentative writing — revision notes",
      summary: "Argument structure, persuasive techniques, and formal discussion.",
      sections: [
        {
          heading: "Argument structure",
          body: "Thesis → reasons → evidence → counter-argument → refutation → call to action. Acknowledge opposition fairly.",
        },
        {
          heading: "Techniques",
          body: "Ethos (credibility), pathos (emotion), logos (logic). Emotive language, rhetorical questions, rule of three, inclusive pronouns — used ethically.",
        },
        {
          heading: "Discussion",
          body: "Issue → fair viewpoints → evidence weighing → balanced conclusion. Formal register, objective tone, logical connectives.",
        },
      ],
    },
  ],
};
