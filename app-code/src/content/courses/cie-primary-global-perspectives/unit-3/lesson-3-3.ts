import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cipgp-u3-lesson-3-3",
  code: "3-3",
  title: "Being a Good Global Citizen",
  goal: "I CAN explain what makes someone a good global citizen and how to take action.",
  standards: [
    "Cambridge Primary Global Perspectives 0838",
    "Unit 3: citizenship and action",
  ],
  vocabulary: [
    {
      term: "Global citizen",
      definition: "Person aware of and caring about world issues.",
    },
    {
      term: "Sustainability",
      definition: "Using resources without harming future.",
    },
    { term: "Fairness", definition: "Treating people equally and justly." },
    { term: "Tolerance", definition: "Accepting differences in others." },
    { term: "Action", definition: "Doing something to help." },
    { term: "Responsibility", definition: "Being accountable for actions." },
  ],
  concepts: [
    {
      id: "cipgp-u3l3-c1-citizen",
      title: "What makes a good global citizen?",
      skill: "Identify qualities and behaviours of global citizenship.",
      lesson: {
        sections: [
          {
            heading: "Global citizenship qualities",
            body: "Good global citizens: **aware** of world issues, **caring** about people everywhere, **fair** in treating others, **responsible** for their actions, **willing to act** to help. Not just knowing about issues — doing something about them. Global citizenship is about our connection to people and planet everywhere.",
          },
          {
            heading: "Everyday actions",
            body: "Small actions matter: reduce waste (reuse, recycle), save energy/water, buy fair trade products, be kind and respectful to all people, learn about other cultures, speak up against unfairness. Big change starts with everyday choices — each action contributes to better world.",
          },
        ],
        keyFormulas: [
          { name: "Global citizen", statement: "Aware + caring + acting" },
          { name: "Sustainability", statement: "Future-proof" },
          { name: "Fairness", statement: "Equal treatment" },
        ],
        workedExample: {
          problem: "What can a student do to be a good global citizen?",
          solution:
            "Reduce waste (bring reusable bottle), learn about other cultures, support fair trade, speak up against bullying/unfairness, join school environmental projects — awareness + action.",
        },
      },
      questions: [
        {
          id: "cipgp-q-u3l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'global citizen' is someone who:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is very rich" },
              { id: "b", text: "Lives in many countries" },
              { id: "c", text: "Cares about and acts on world issues" },
              { id: "d", text: "Travels a lot" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Global citizen",
                statement: "Caring+acting.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Cares+acts",
            commonErrors: ["Just travels."],
          },
        },
        {
          id: "cipgp-q-u3l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two qualities of a good global citizen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Citizen qualities", statement: "Values." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. fairness (treats everyone equally) and responsibility (takes action for issues) — also caring, aware of world issues, tolerant of differences.",
            commonErrors: ["Only rich."],
          },
        },
        {
          id: "cipgp-q-u3l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two everyday actions that make you a better global citizen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Citizen actions",
                statement: "Daily choices.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. reduce waste (reuse bags, recycle) and be respectful to all people — also save energy/water, learn about other cultures, support fair trade.",
            commonErrors: ["No actions."],
          },
        },
        {
          id: "cipgp-q-u3l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why 'tolerance' is important for global citizenship.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tolerance",
                statement: "Accept differences.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Why important.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "World has diverse cultures, beliefs, lifestyles — tolerance means accepting differences without prejudice; reduces conflict, enables cooperation on shared problems; essential for peaceful global community.",
            commonErrors: ["Everyone same."],
          },
        },
        {
          id: "cipgp-q-u3l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether individuals can really make a difference to global issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Individual impact",
                statement: "Scale vs influence.",
              },
            ],
            steps: [
              { reasoning: "Direct impact.", marks: 1, markCode: "M" },
              { reasoning: "Indirect influence.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Individual actions seem small but matter — reduce emissions, influence others, vote, create demand for change; 'butterfly effect': many small actions = big collective change; also build habits for future leadership.",
            commonErrors: ["Too small."],
          },
        },
        {
          id: "cipgp-q-u3l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'sustainability'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainability",
                statement: "Future-safe.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Using resources in ways that meet present needs without harming future generations — e.g. renewable energy, sustainable farming; ensures resources last.",
            commonErrors: ["Use everything now."],
          },
        },
        {
          id: "cipgp-q-u3l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of being a good global citizen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wasting water" },
              { id: "b", text: "Recycling and reducing waste" },
              { id: "c", text: "Being unkind to others" },
              { id: "d", text: "Littering" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Citizen action", statement: "Positive." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Recycling",
            commonErrors: ["Negative."],
          },
        },
        {
          id: "cipgp-q-u3l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways to show fairness as a global citizen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Fairness actions",
                statement: "Equal treatment.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. treat all people with respect regardless of background, and support fair trade (ensures producers get fair prices) — also speak up against bullying/unfairness.",
            commonErrors: ["Unfair treatment."],
          },
        },
        {
          id: "cipgp-q-u3l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the connection between local actions and global citizenship.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Local-global",
                statement: "Connected.",
              },
            ],
            steps: [
              { reasoning: "Local action.", marks: 1, markCode: "M" },
              { reasoning: "Global impact.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Local choices affect global outcomes — reduce waste locally reduces pollution globally, buy fair trade helps workers worldwide; every action contributes to bigger picture; local citizenship = global citizenship.",
            commonErrors: ["Separate."],
          },
        },
        {
          id: "cipgp-q-u3l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether being a 'good global citizen' requires personal sacrifice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sacrifice",
                statement: "Cost vs benefit.",
              },
            ],
            steps: [
              { reasoning: "Sacrifices.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Perspective.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Some sacrifice (less convenience, more effort) but also benefits — healthier planet, better communities, personal satisfaction; many actions save money too (less waste = less spending); sacrifice framing may discourage — frame as opportunity not loss.",
            commonErrors: ["No sacrifice needed."],
          },
        },
        {
          id: "cipgp-q-u3l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Sustainability' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using resources without harming future generations" },
              { id: "b", text: "Wasting water and energy" },
              { id: "c", text: "Ignoring the environment" },
              { id: "d", text: "Using everything as fast as possible" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainability",
                statement: "Future-safe.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Future-safe use",
            commonErrors: ["Use everything now."],
          },
        },
        {
          id: "cipgp-q-u3l3c1-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which action shows 'tolerance'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mocking someone's culture" },
              { id: "b", text: "Refusing to listen to others" },
              { id: "c", text: "Only talking to people like you" },
              { id: "d", text: "Respecting people who are different from you" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tolerance", statement: "Accept differences." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Respecting differences",
            commonErrors: ["Prejudice."],
          },
        },
        {
          id: "cipgp-q-u3l3c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Buying 'fair trade' products helps producers because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Products cost more to make" },
              { id: "b", text: "They receive fair prices for their work" },
              { id: "c", text: "They get no pay" },
              { id: "d", text: "It only helps shops" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Fair trade",
                statement: "Fair prices.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Fair prices",
            commonErrors: ["No benefit."],
          },
        },
        {
          id: "cipgp-q-u3l3c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'responsibility' is a quality of a good global citizen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Responsibility",
                statement: "Accountable actions.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Why important.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Responsible citizens take ownership of their actions and their impact — e.g. admit mistakes, choose sustainable options, help clean up their own mess; without responsibility, awareness and caring don't lead to real change.",
            commonErrors: ["Blame others."],
          },
        },
        {
          id: "cipgp-q-u3l3c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways a student can learn about other cultures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Cultural learning",
                statement: "Understanding others.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. read books or watch programmes about other countries and try food or festivals from different cultures — builds empathy and understanding, reduces prejudice; learning about others is the first step to global citizenship.",
            commonErrors: ["Stay ignorant."],
          },
        },
        {
          id: "cipgp-q-u3l3c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether global citizenship is mainly about helping people far away or about your own community.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Local vs global citizen",
                statement: "Both matter.",
              },
            ],
            steps: [
              { reasoning: "Local case.", marks: 1, markCode: "M" },
              { reasoning: "Global case.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Local: visible impact, builds skills, immediate benefit — but limited reach. Global: addresses bigger problems — but distant and hard to influence; true global citizenship connects both — helping your community while understanding and caring about worldwide issues; local action scales up to global change.",
            commonErrors: ["One only."],
          },
        },
      ],
    },
    {
      id: "cipgp-u3l3-c2-action",
      title: "Taking action for global issues",
      skill: "Plan and evaluate actions to address global issues.",
      lesson: {
        sections: [
          {
            heading: "Planning effective action",
            body: "Steps: **identify issue** → **research** → **choose achievable action** → **plan** (who, what, when, resources) → **act** → **evaluate**. Actions can be: awareness campaigns, fundraising, community projects, advocacy (petitions, letters), sustainable choices. Effective action is planned, feasible, and genuinely helpful.",
          },
          {
            heading: "Types of action",
            body: "**Individual**: daily choices (reduce waste, fair trade). **Community**: school projects, local campaigns, volunteering. **Global**: fundraising for international charities, awareness raising, advocacy for policy change. Bigger actions need more planning but create bigger impact — combine individual + collective for best results.",
          },
        ],
        keyFormulas: [
          { name: "Action steps", statement: "Identify→plan→act→evaluate" },
          { name: "Individual action", statement: "Daily choices" },
          { name: "Collective action", statement: "Group effort" },
        ],
        workedExample: {
          problem: "How could a school take action on plastic pollution?",
          solution:
            "Set up recycling programme, organise clean-up, campaign to reduce single-use plastics in canteen, educate students — combined individual and collective action with measurable goals.",
        },
      },
      questions: [
        {
          id: "cipgp-q-u3l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The first step in taking action is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Identify the issue" },
              { id: "b", text: "Wait" },
              { id: "c", text: "Ignore it" },
              { id: "d", text: "Spend money" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "First step", statement: "Identify." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Identify issue",
            commonErrors: ["Random action."],
          },
        },
        {
          id: "cipgp-q-u3l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'advocacy' in taking action?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Advocacy", statement: "Speak up." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Speaking up for change — petitions, letters to leaders, campaigns, public awareness; advocating for policies/practices that address issues; uses voice to influence decisions.",
            commonErrors: ["Just donating."],
          },
        },
        {
          id: "cipgp-q-u3l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of action for global issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Action types",
                statement: "Individual + collective.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. individual actions (reduce waste, fair trade purchases) and collective actions (community clean-ups, fundraising, advocacy campaigns) — combining both maximises impact.",
            commonErrors: ["Only donations."],
          },
        },
        {
          id: "cipgp-q-u3l3c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why 'evaluation' is important after taking action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluation",
                statement: "Learn + improve.",
              },
            ],
            steps: [
              { reasoning: "Why.", marks: 1, markCode: "M" },
              { reasoning: "What to assess.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Assesses whether action achieved goals, what worked/didn't, lessons learned — improves future actions, builds accountability, shows impact honestly including failures.",
            commonErrors: ["Not needed."],
          },
        },
        {
          id: "cipgp-q-u3l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse whether fundraising is the most effective way for students to help global issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fundraising eval",
                statement: "One option.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Alternatives.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Fundraising provides resources but limited scale/one-off; awareness campaigns, advocacy, sustainable actions may have longer-lasting impact; best approach combines fundraising with education and systemic change advocacy.",
            commonErrors: ["Best method."],
          },
        },
        {
          id: "cipgp-q-u3l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What makes action 'effective'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Effective action",
                statement: "Planned+helpful.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Criteria.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Action that achieves intended goals — planned, feasible, genuinely helpful, evaluated; not just busy activity but purposeful change-making.",
            commonErrors: ["Any activity."],
          },
        },
        {
          id: "cipgp-q-u3l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "After taking action, you should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stop caring" },
              { id: "b", text: "Evaluate what worked and what didn't" },
              { id: "c", text: "Never do it again" },
              { id: "d", text: "Ignore results" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Evaluation", statement: "Reflect." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Evaluate",
            commonErrors: ["Ignore."],
          },
        },
        {
          id: "cipgp-q-u3l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of collective action for global issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Collective action",
                statement: "Group effort.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. school recycling programme (whole school participates) and community clean-up day (many people together) — collective actions create bigger impact than individual alone.",
            commonErrors: ["Only individual."],
          },
        },
        {
          id: "cipgp-q-u3l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'planning' matters before taking action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Planning", statement: "Purposeful." },
            ],
            steps: [
              { reasoning: "Why.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Planning ensures action is feasible, targeted, resource-efficient — avoids wasted effort; e.g. planning a clean-up (date, area, tools, volunteers) vs turning up unprepared; better outcomes.",
            commonErrors: ["Just do it."],
          },
        },
        {
          id: "cipgp-q-u3l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether students should focus on local or global issues in their action projects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Local vs global",
                statement: "Both.",
              },
            ],
            steps: [
              { reasoning: "Local benefits.", marks: 1, markCode: "M" },
              { reasoning: "Global benefits.", marks: 1, markCode: "M" },
              { reasoning: "Best approach.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Local: visible impact, achievable, builds skills, immediate community benefit — but limited scale. Global: addresses bigger problems but harder to influence; best: start local (where you can make difference) then connect to global understanding; local action teaches skills for global change.",
            commonErrors: ["One only."],
          },
        },
        {
          id: "cipgp-q-u3l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the action planning cycle, 'evaluate' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignore the results" },
              { id: "b", text: "Start over immediately" },
              { id: "c", text: "Review what worked and what didn't" },
              { id: "d", text: "Spend more money" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Evaluate", statement: "Review results." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Review results",
            commonErrors: ["Ignore results."],
          },
        },
        {
          id: "cipgp-q-u3l3c2-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Collecting signatures on a petition is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Littering" },
              { id: "b", text: "Fundraising" },
              { id: "c", text: "Ignoring issues" },
              { id: "d", text: "Advocacy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Petition", statement: "Advocacy." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Advocacy",
            commonErrors: ["Fundraising."],
          },
        },
        {
          id: "cipgp-q-u3l3c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is an example of collective action?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A whole school joining a recycling programme" },
              { id: "b", text: "Reading about an issue" },
              { id: "c", text: "One person forgetting to turn off a light" },
              { id: "d", text: "Watching a documentary alone" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Collective action", statement: "Group effort." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** School programme",
            commonErrors: ["Individual only."],
          },
        },
        {
          id: "cipgp-q-u3l3c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a school could plan an action project to reduce water waste.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Action planning",
                statement: "Steps.",
              },
            ],
            steps: [
              { reasoning: "Identify + research.", marks: 1, markCode: "M" },
              { reasoning: "Plan action.", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Identify water waste issue, research where water is wasted (taps, toilets, leaks), plan action (repair leaks, awareness posters, water monitors), act, then evaluate whether usage dropped — planned, feasible, measurable action.",
            commonErrors: ["No plan."],
          },
        },
        {
          id: "cipgp-q-u3l3c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of evaluating an action project.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Evaluation benefits",
                statement: "Learn + improve.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. shows whether goals were achieved (honest measure of impact) and reveals what worked so future projects can improve — also builds accountability and shows stakeholders the results.",
            commonErrors: ["No benefit."],
          },
        },
        {
          id: "cipgp-q-u3l3c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether online campaigns are as effective as face-to-face community action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Online vs offline",
                statement: "Different strengths.",
              },
            ],
            steps: [
              { reasoning: "Online strengths.", marks: 1, markCode: "M" },
              { reasoning: "Offline strengths.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Online: wide reach, fast, cheap — but easy to ignore, less personal. Face-to-face: builds relationships, visible local impact — but limited reach; strongest campaigns combine both — online awareness drives people to offline community action.",
            commonErrors: ["One is enough."],
          },
        },
      ],
    },
  ],
};
