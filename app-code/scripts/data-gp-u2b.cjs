module.exports = [
  {
    file: "lesson-2-5.ts", exportName: "lesson25",
    lesson: {
      id: "cipg-u2-lesson-2-5", code: "2-5",
      title: "Stage 4 — Collaborating on Global Projects",
      goal: "I CAN work effectively in a team on a global-issue project, assigning roles and combining contributions.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 4: collaboration", "Cambridge Primary Global Perspectives 0838 strand: Collaboration"],
      stage: 4,
      vocabulary: [
        { term: "Project", definition: "A planned piece of work with a goal." },
        { term: "Role", definition: "Your specific job in a team." },
        { term: "Contribution", definition: "What each member adds to the project." },
        { term: "Deadline", definition: "When work must be finished." },
        { term: "Accountable", definition: "Responsible for your part." },
        { term: "Synergy", definition: "Team result better than individuals alone." },
      ],
      concept: {
        id: "cipg-u2-s4-collab", title: "Team projects on global issues",
        skill: "Assign roles, contribute and coordinate at Stage 4 level.",
        sections: [
          { heading: "Team projects", body: "Global Perspective projects need teamwork: research, design, build, present. Assign roles based on strengths — researcher, designer, writer, presenter. Everyone contributes; the team result is better than individuals working alone." },
          { heading: "Working effectively", body: "Communicate regularly, meet deadlines, help each other, and combine everyone's contributions into one cohesive project. Review together and celebrate what the team achieved." },
        ],
        keyFormulas: [
          { name: "Role", statement: "specific job each member does" },
          { name: "Contribution", statement: "what each person adds" },
        ],
        workedExample: {
          problem: "Team project: 'Reduce food waste at school'. Assign 4 roles.",
          solution: "Researcher (gather data), Designer (poster), Coordinator (organise), Presenter (share findings).",
        },
        questions: [
          {
            id: "cipg-u2-cl-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a project role?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Your specific job in a team" }, { id: "b", text: "A type of computer" }, { id: "c", text: "A school grade" }, { id: "d", text: "A weather term" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Role", statement: "Team member's job." }],
              steps: [{ reasoning: "Role = defined responsibility in team.", marks: 1, markCode: "M" }],
              finalAnswer: "Your job in the team",
            },
          },
          {
            id: "cipg-u2-cl-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name two benefits of teamwork on a project.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Teamwork", statement: "Shared effort benefits." }],
              steps: [
                { reasoning: "e.g. more ideas / share workload.", marks: 1, markCode: "M" },
                { reasoning: "e.g. better result / learn from others.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. more ideas + shared work",
            },
          },
          {
            id: "cipg-u2-cl-q3", difficulty: "core", totalMarks: 3,
            stem: "Why assign roles in a group project? What happens if everyone does the same task?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Roles", statement: "Division of labour." }],
              steps: [
                { reasoning: "Roles prevent duplication and cover all needs.", marks: 1, markCode: "M" },
                { reasoning: "Everyone same task = gaps + wasted effort.", marks: 1, markCode: "M" },
                { reasoning: "Specialisation improves quality.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Avoid duplication; cover all tasks",
            },
          },
          {
            id: "cipg-u2-cl-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define project, role, contribution, deadline, accountable, synergy. (b) Design a team project on 'water conservation' with 4 roles. (c) Why is synergy valuable? (d) What makes a good team member? (e) How do you handle a teammate not doing their part? (f) What is a deadline and why meet it? (g) How do contributions combine? (h) Design team rules for your project.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Collaboration", statement: "Roles, contributions, teamwork." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Valid project + 4 sensible roles.", marks: 1, markCode: "M" },
                { reasoning: "(c) Combined result > individual efforts.", marks: 1, markCode: "M" },
                { reasoning: "(d) Reliable, communicative, helpful.", marks: 1, markCode: "M" },
                { reasoning: "(e) Talk privately, offer help, inform teacher if needed.", marks: 1, markCode: "M" },
                { reasoning: "(f) Agreed finish time; ensures progress.", marks: 1, markCode: "M" },
                { reasoning: "(g) Each part fits into whole project.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid team rules.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Team projects, roles, contributions, deadlines.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u2-cl-notes", title: "Team projects — notes",
      summary: "Assign roles, contribute your part, meet deadlines. Team result > individual work.",
      sections: [
        { heading: "Key idea", body: "Good teams combine different strengths." },
        { heading: "Roles", body: "Researcher, designer, coordinator, presenter — cover all needs." },
      ],
    },
  },
  {
    file: "lesson-2-6.ts", exportName: "lesson26",
    lesson: {
      id: "cipg-u2-lesson-2-6", code: "2-6",
      title: "Stage 4 — Communicating Findings to an Audience",
      goal: "I CAN communicate research findings clearly to different audiences using appropriate formats.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 4: communication", "Cambridge Primary Global Perspectives 0838 strand: Communication"],
      stage: 4,
      vocabulary: [
        { term: "Audience", definition: "The people you are communicating to." },
        { term: "Format", definition: "How you present — speech, poster, video, report." },
        { term: "Tailor", definition: "Adapt your message for a specific audience." },
        { term: "Call to action", definition: "A request for the audience to do something." },
        { term: "Persuasive", definition: "Trying to convince others of your view." },
        { term: "Message", definition: "The main thing you want people to know/do." },
      ],
      concept: {
        id: "cipg-u2-s4-comm", title: "Communicating to audiences",
        skill: "Adapt message and format for different audiences at Stage 4 level.",
        sections: [
          { heading: "Know your audience", body: "How you communicate depends on who's listening. A poster for younger children uses simple words and pictures; a report for teachers uses facts and structure. Tailor your message, language and format to your audience." },
          { heading: "Clear messaging", body: "Have one main message — what do you want people to know or do? Support it with evidence. End with a call to action if you want them to act: 'Please bring a reusable bottle to school.'" },
        ],
        keyFormulas: [
          { name: "Tailor", statement: "adapt message/format to audience" },
          { name: "Call to action", statement: "request audience to do something" },
        ],
        workedExample: {
          problem: "You researched plastic pollution. How would you communicate to Year 1 students vs Year 6?",
          solution: "Year 1: simple story + picture poster, 'don't litter'. Year 6: data chart + persuasive argument + action request.",
        },
        questions: [
          {
            id: "cipg-u2-cm-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does 'tailor your message' mean?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Adapt it for your specific audience" }, { id: "b", text: "Make clothes" }, { id: "c", text: "Write longer" }, { id: "d", text: "Speak louder" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Tailor", statement: "Adapt to audience." }],
              steps: [{ reasoning: "Tailoring = matching message to listeners.", marks: 1, markCode: "M" }],
              finalAnswer: "Adapt for audience",
            },
          },
          {
            id: "cipg-u2-cm-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name two formats for communicating findings and one audience each suits.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Formats", statement: "Poster, speech, video, report." }],
              steps: [
                { reasoning: "e.g. poster for young children.", marks: 1, markCode: "M" },
                { reasoning: "e.g. report for teachers/parents.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. poster+kids, report+adults",
            },
          },
          {
            id: "cipg-u2-cm-q3", difficulty: "core", totalMarks: 3,
            stem: "What is a call to action? Write one for a presentation about saving energy.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Call to action", statement: "Audience request." }],
              steps: [
                { reasoning: "CTA = asking audience to do something.", marks: 1, markCode: "M" },
                { reasoning: "Valid example: 'Turn off lights when leaving rooms.'", marks: 1, markCode: "M" },
                { reasoning: "Specific and achievable.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Audience request; e.g. turn off lights",
            },
          },
          {
            id: "cipg-u2-cm-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define audience, format, tailor, call to action, persuasive, message. (b) How does message change for children vs adults? (c) Choose a format for 'endangered animals' for your class. (d) Write a call to action. (e) Why one main message? (f) What evidence supports your message? (g) How is persuasive different from informative? (h) Design a poster outline for your issue.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Communication", statement: "Audience, format, message." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Simpler words vs detailed data.", marks: 1, markCode: "M" },
                { reasoning: "(c) Valid format choice + reason.", marks: 1, markCode: "M" },
                { reasoning: "(d) Specific achievable CTA.", marks: 1, markCode: "M" },
                { reasoning: "(e) Focus prevents confusion.", marks: 1, markCode: "M" },
                { reasoning: "(f) Facts/statistics supporting claim.", marks: 1, markCode: "M" },
                { reasoning: "(g) Persuasive=convince; informative=teach facts.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid poster structure.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Audience-tailored communication, formats, CTAs.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u2-cm-notes", title: "Communicating — notes",
      summary: "Tailor message to audience. One main message + evidence + call to action.",
      sections: [
        { heading: "Key idea", body: "Different audiences need different formats and language." },
        { heading: "CTA", body: "End with what you want people to do." },
      ],
    },
  },
  {
    file: "lesson-2-7.ts", exportName: "lesson27",
    lesson: {
      id: "cipg-u2-lesson-2-7", code: "2-7",
      title: "Stage 5 — Deep Analysis of Global Issues",
      goal: "I CAN analyse a global issue from multiple angles — causes, effects, stakeholders and solutions.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 5: analysis", "Cambridge Primary Global Perspectives 0838 strand: Analysis"],
      stage: 5,
      vocabulary: [
        { term: "Stakeholder", definition: "A person or group affected by or involved in an issue." },
        { term: "Cause", definition: "What makes something happen." },
        { term: "Effect", definition: "What happens as a result." },
        { term: "Consequence", definition: "A result or outcome of an action." },
        { term: "Root cause", definition: "The deepest underlying reason for a problem." },
        { term: "Multi-perspective", definition: "Looking at an issue from several angles." },
      ],
      concept: {
        id: "cipg-u2-s5-analyse", title: "Deep issue analysis",
        skill: "Analyse causes, effects, stakeholders and solutions at Stage 5 level.",
        sections: [
          { heading: "Multiple angles", body: "Deep analysis looks at an issue from many sides: What causes it? Who is affected (stakeholders)? What are the effects? What solutions exist? Climate change affects farmers, cities, animals — each sees it differently." },
          { heading: "Root causes", body: "Surface causes (plastic in ocean) vs root causes (overproduction, poor waste management). Solutions that only treat symptoms fail; addressing root causes creates lasting change." },
        ],
        keyFormulas: [
          { name: "Stakeholder", statement: "person/group affected by issue" },
          { name: "Root cause", statement: "deepest underlying reason" },
          { name: "Analysis", statement: "causes + effects + stakeholders + solutions" },
        ],
        workedExample: {
          problem: "Analyse 'food waste' — causes, effects, stakeholders, one solution.",
          solution: "Causes: overbuying, cosmetic standards. Effects: landfill, methane, hunger. Stakeholders: shoppers, farmers, charities. Solution: better portion planning + food donation.",
        },
        questions: [
          {
            id: "cipg-u2-dan-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a stakeholder?",
            response: { type: "mcq", choices: [
              { id: "a", text: "A person or group affected by an issue" }, { id: "b", text: "A company share" }, { id: "c", text: "A type of chart" }, { id: "d", text: "A school subject" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Stakeholder", statement: "Affected party." }],
              steps: [{ reasoning: "Stakeholder = anyone impacted by/involved in issue.", marks: 1, markCode: "M" }],
              finalAnswer: "Affected person/group",
            },
          },
          {
            id: "cipg-u2-dan-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name the four angles for analysing a global issue.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Analysis angles", statement: "Causes, effects, stakeholders, solutions." }],
              steps: [
                { reasoning: "Causes and effects.", marks: 1, markCode: "M" },
                { reasoning: "Stakeholders and solutions.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "causes+effects+stakeholders+solutions",
            },
          },
          {
            id: "cipg-u2-dan-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the difference between a cause and a root cause? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Causes", statement: "Surface vs underlying." }],
              steps: [
                { reasoning: "Cause = immediate reason; root = deepest underlying.", marks: 1, markCode: "M" },
                { reasoning: "e.g. plastic in ocean (cause) vs overproduction/waste systems (root).", marks: 1, markCode: "M" },
                { reasoning: "Root causes enable lasting solutions.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Immediate vs underlying reason",
            },
          },
          {
            id: "cipg-u2-dan-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define stakeholder, cause, effect, consequence, root cause, multi-perspective. (b) Analyse 'endangered animals': causes, effects, stakeholders. (c) Identify one root cause. (d) Who are the key stakeholders? (e) Why consider multiple perspectives? (f) Propose two solutions. (g) Why do surface solutions fail? (h) Design an analysis framework for any issue.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Issue analysis", statement: "Angles, causes, stakeholders." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Valid causes, effects, stakeholders.", marks: 1, markCode: "M" },
                { reasoning: "(c) Valid root cause identified.", marks: 1, markCode: "M" },
                { reasoning: "(d) Valid stakeholders: animals, humans, governments.", marks: 1, markCode: "M" },
                { reasoning: "(e) Different views reveal complexity/solutions.", marks: 1, markCode: "M" },
                { reasoning: "(f) Two plausible solutions.", marks: 1, markCode: "M" },
                { reasoning: "(g) Symptoms return without root fix.", marks: 1, markCode: "M" },
                { reasoning: "(h) Reusable analysis framework.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Deep issue analysis: causes, effects, stakeholders, solutions.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u2-dan-notes", title: "Deep analysis — notes",
      summary: "Analyse causes, effects, stakeholders, root causes and solutions from multiple angles.",
      sections: [
        { heading: "Key idea", body: "Surface fixes fail; root causes need addressing." },
        { heading: "Stakeholders", body: "Different groups experience issues differently." },
      ],
    },
  },
  {
    file: "lesson-2-8.ts", exportName: "lesson28",
    lesson: {
      id: "cipg-u2-lesson-2-8", code: "2-8",
      title: "Stage 5 — Evaluating Solutions to Global Problems",
      goal: "I CAN evaluate proposed solutions to global issues for feasibility, impact and fairness.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 5: evaluation", "Cambridge Primary Global Perspectives 0838 strand: Evaluation"],
      stage: 5,
      vocabulary: [
        { term: "Feasible", definition: "Possible to actually do." },
        { term: "Sustainable", definition: "Can continue long-term without harm." },
        { term: "Trade-off", definition: "Giving up one thing to get another." },
        { term: "Unintended consequence", definition: "An unexpected result of a solution." },
        { term: "Cost-benefit", definition: "Weighing what a solution costs vs gains." },
        { term: "Equity", definition: "Fairness — does everyone benefit equally?" },
      ],
      concept: {
        id: "cipg-u2-s5-eval", title: "Evaluating solutions",
        skill: "Assess solutions for feasibility, impact, fairness at Stage 5 level.",
        sections: [
          { heading: "Good solutions", body: "Evaluate solutions on: Is it feasible (can we actually do it)? Is it sustainable (long-term)? Is it fair (does everyone benefit)? What are the trade-offs and unintended consequences?" },
          { heading: "Trade-offs", body: "Every solution has costs: banning cars reduces pollution but limits travel; organic food is healthier but expensive. Good evaluation weighs costs vs benefits honestly." },
        ],
        keyFormulas: [
          { name: "Feasible", statement: "can actually be done" },
          { name: "Trade-off", statement: "cost given for benefit" },
          { name: "Equity", statement: "fairness across all affected" },
        ],
        workedExample: {
          problem: "Evaluate 'ban all plastic bags' as a solution to plastic pollution.",
          solution: "Pros: reduces waste. Cons: cost to alternatives, affects small businesses, may shift problem. Feasible if alternatives exist; needs phased rollout.",
        },
        questions: [
          {
            id: "cipg-u2-ev-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What makes a solution feasible?",
            response: { type: "mcq", choices: [
              { id: "a", text: "It can actually be done with available resources" }, { id: "b", text: "It sounds exciting" }, { id: "c", text: "It's free" }, { id: "d", text: "Everyone agrees" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Feasible", statement: "Practical to implement." }],
              steps: [{ reasoning: "Feasible = realistically achievable.", marks: 1, markCode: "M" }],
              finalAnswer: "Can actually be done",
            },
          },
          {
            id: "cipg-u2-ev-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a trade-off? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Trade-off", statement: "Cost for benefit." }],
              steps: [
                { reasoning: "Giving up one thing to gain another.", marks: 1, markCode: "M" },
                { reasoning: "e.g. cycling saves money but takes longer.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Cost for benefit; e.g. cycling",
            },
          },
          {
            id: "cipg-u2-ev-q3", difficulty: "core", totalMarks: 3,
            stem: "Evaluate 'plant more trees to fight climate change' — one benefit, one limitation, one unintended consequence.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Solution evaluation", statement: "Pros, cons, unintended." }],
              steps: [
                { reasoning: "Benefit: absorbs CO₂, cools areas.", marks: 1, markCode: "M" },
                { reasoning: "Limitation: takes time, needs land/water.", marks: 1, markCode: "M" },
                { reasoning: "Unintended: wrong species could harm ecosystems.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Benefit+limitation+unintended",
            },
          },
          {
            id: "cipg-u2-ev-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define feasible, sustainable, trade-off, unintended consequence, cost-benefit, equity. (b) Evaluate 'ban homework' for student wellbeing. (c) What is a trade-off here? (d) Who might be disadvantaged? (e) What unintended consequence could arise? (f) Is it feasible? (g) Compare two solutions to plastic pollution. (h) Design an evaluation framework for any solution.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Solution evaluation", statement: "Feasibility, trade-offs, equity." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Balanced evaluation of homework ban.", marks: 1, markCode: "M" },
                { reasoning: "(c) Wellbeing vs learning/revision.", marks: 1, markCode: "M" },
                { reasoning: "(d) Students needing practice, parents wanting structure.", marks: 1, markCode: "M" },
                { reasoning: "(e) Less practice, parent frustration.", marks: 1, markCode: "M" },
                { reasoning: "(f) Politically difficult but possible.", marks: 1, markCode: "M" },
                { reasoning: "(g) Two solutions compared fairly.", marks: 1, markCode: "M" },
                { reasoning: "(h) Reusable evaluation framework.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Evaluating solutions: feasibility, trade-offs, equity.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u2-ev-notes", title: "Evaluating solutions — notes",
      summary: "Check feasibility, sustainability, equity. Weigh trade-offs and unintended consequences.",
      sections: [
        { heading: "Key idea", body: "Good solutions balance benefits and costs across all stakeholders." },
        { heading: "Watch", body: "Unintended consequences can undo good intentions." },
      ],
    },
  },
  {
    file: "lesson-2-9.ts", exportName: "lesson29",
    lesson: {
      id: "cipg-u2-lesson-2-9", code: "2-9",
      title: "Stage 5 — Persuasive Communication on Issues",
      goal: "I CAN build a persuasive case for action on a global issue using evidence and reasoning.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 5: communication", "Cambridge Primary Global Perspectives 0838 strand: Communication"],
      stage: 5,
      vocabulary: [
        { term: "Persuasive", definition: "Trying to convince others of your view." },
        { term: "Thesis", definition: "Your main argument or position." },
        { term: "Supporting point", definition: "A reason that backs your thesis." },
        { term: "Counter-argument", definition: "The opposing view you must address." },
        { term: "Rebuttal", definition: "Your response to a counter-argument." },
        { term: "Call to action", definition: "What you want the audience to do." },
      ],
      concept: {
        id: "cipg-u2-s5-persuade", title: "Persuasive communication",
        skill: "Structure a persuasive argument with evidence and rebuttal at Stage 5 level.",
        sections: [
          { heading: "Structure of persuasion", body: "Strong persuasion: state your thesis clearly, support with evidence-backed reasons, address counter-arguments honestly, then end with a call to action. 'We should ban single-use plastics because...'" },
          { heading: "Handling opposition", body: "Address the other side: 'Some say it's too expensive, but reusable alternatives cost less long-term.' Acknowledging counter-arguments makes your case stronger, not weaker." },
        ],
        keyFormulas: [
          { name: "Persuasive structure", statement: "thesis → reasons → rebuttal → CTA" },
          { name: "Rebuttal", statement: "answer to opposing view" },
        ],
        workedExample: {
          problem: "Build a persuasive case: 'Schools should have meat-free Mondays'.",
          solution: "Thesis: healthier planet and bodies. Reasons: reduce emissions, teach nutrition. Rebuttal: 'But kids need protein' → plant proteins exist. CTA: try it for a month.",
        },
        questions: [
          {
            id: "cipg-u2-pe-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a thesis in persuasion?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Your main argument or position" }, { id: "b", text: "A type of essay" }, { id: "c", text: "A school subject" }, { id: "d", text: "A computer program" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Thesis", statement: "Main argument." }],
              steps: [{ reasoning: "Thesis = central claim you argue for.", marks: 1, markCode: "M" }],
              finalAnswer: "Main argument",
            },
          },
          {
            id: "cipg-u2-pe-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name the four parts of a persuasive structure.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Persuasive structure", statement: "Thesis, reasons, rebuttal, CTA." }],
              steps: [
                { reasoning: "Thesis + supporting reasons.", marks: 1, markCode: "M" },
                { reasoning: "Rebuttal + call to action.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "thesis→reasons→rebuttal→CTA",
            },
          },
          {
            id: "cipg-u2-pe-q3", difficulty: "core", totalMarks: 3,
            stem: "Why address counter-arguments in persuasion? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Rebuttal", statement: "Strengthening through opposition." }],
              steps: [
                { reasoning: "Shows you've considered other views — stronger case.", marks: 1, markCode: "M" },
                { reasoning: "Example: 'Some say X, but...' with response.", marks: 1, markCode: "M" },
                { reasoning: "Preempts objections.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Strengthens argument; example given",
            },
          },
          {
            id: "cipg-u2-pe-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define persuasive, thesis, supporting point, counter-argument, rebuttal, call to action. (b) Write a thesis for 'school uniforms'. (c) Give two supporting points with evidence. (d) Give one counter-argument. (e) Write a rebuttal. (f) Write a call to action. (g) Why is evidence important? (h) Deliver your persuasive outline.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Persuasion", statement: "Thesis, evidence, rebuttal, CTA." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Clear thesis statement.", marks: 1, markCode: "M" },
                { reasoning: "(c) Two evidence-backed points.", marks: 1, markCode: "M" },
                { reasoning: "(d) Valid opposing view.", marks: 1, markCode: "M" },
                { reasoning: "(e) Valid rebuttal.", marks: 1, markCode: "M" },
                { reasoning: "(f) Specific achievable CTA.", marks: 1, markCode: "M" },
                { reasoning: "(g) Evidence makes claims credible.", marks: 1, markCode: "M" },
                { reasoning: "(h) Complete persuasive outline.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Persuasive structure: thesis, evidence, rebuttal, CTA.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u2-pe-notes", title: "Persuasion — notes",
      summary: "Thesis → evidence-backed reasons → rebut counter-arguments → call to action.",
      sections: [
        { heading: "Key idea", body: "Address opposition to strengthen your case." },
        { heading: "Structure", body: "Clear position + proof + response to critics + ask." },
      ],
    },
  },
  {
    file: "lesson-2-10.ts", exportName: "lesson210",
    lesson: {
      id: "cipg-u2-lesson-2-10", code: "2-10",
      title: "Stage 6 — Synthesising Research into Action",
      goal: "I CAN combine research, analysis, evaluation and communication into a complete project with real-world action.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 6: all strands", "Cambridge Primary Global Perspectives 0838 strands: Research, Analysis, Evaluation, Reflection, Collaboration, Communication"],
      stage: 6,
      vocabulary: [
        { term: "Synthesis", definition: "Combining research, analysis and evaluation into one coherent whole." },
        { term: "Outcome", definition: "The result or impact of your project." },
        { term: "Deliverable", definition: "The final product — presentation, poster, report." },
        { term: "Impact assessment", definition: "Measuring what difference your project made." },
        { term: "Sustainability", definition: "Whether the change continues after the project ends." },
        { term: "Legacy", definition: "The lasting effect your project leaves behind." },
      ],
      concept: {
        id: "cipg-u2-s6-synth", title: "Synthesising into action",
        skill: "Integrate all six skills into a complete project with measurable outcomes at Stage 6 level.",
        sections: [
          { heading: "The full cycle", body: "Stage 6 projects use all six strands: research an issue → analyse perspectives and causes → evaluate solutions → reflect on your role → collaborate with others → communicate findings and take action." },
          { heading: "Measuring impact", body: "Ask: What changed because of your project? Did behaviour change? Was the solution sustainable? Document outcomes — before/after data, testimonials, photos. A project isn't complete until you've assessed its real-world impact." },
        ],
        keyFormulas: [
          { name: "Synthesis", statement: "research+analysis+evaluation+reflection+collaboration+communication" },
          { name: "Impact", statement: "measurable change from your project" },
        ],
        workedExample: {
          problem: "You ran 'Meat-Free Monday' at school for a month. How do you assess impact?",
          solution: "Compare waste data before/after, survey student attitudes, count participation, interview canteen staff. Document findings and suggest continuation.",
        },
        questions: [
          {
            id: "cipg-u2-sy-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does synthesis mean in Global Perspectives?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Combining all skills into a coherent whole" }, { id: "b", text: "A type of music" }, { id: "c", text: "A computer program" }, { id: "d", text: "A school subject" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Synthesis", statement: "Integrating all strands." }],
              steps: [{ reasoning: "Synthesis = combining research through action.", marks: 1, markCode: "M" }],
              finalAnswer: "Combining all skills",
            },
          },
          {
            id: "cipg-u2-sy-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name two ways to measure a project's impact.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Impact", statement: "Measurable change." }],
              steps: [
                { reasoning: "e.g. before/after data.", marks: 1, markCode: "M" },
                { reasoning: "e.g. surveys, participation counts.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. data comparison + surveys",
            },
          },
          {
            id: "cipg-u2-sy-q3", difficulty: "core", totalMarks: 3,
            stem: "Why is sustainability important for a project's impact? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Sustainability", statement: "Long-term change." }],
              steps: [
                { reasoning: "Temporary change fades; sustainable continues.", marks: 1, markCode: "M" },
                { reasoning: "e.g. habit vs one-off event.", marks: 1, markCode: "M" },
                { reasoning: "Design for continuation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Long-term vs temporary change",
            },
          },
          {
            id: "cipg-u2-sy-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define synthesis, outcome, deliverable, impact assessment, sustainability, legacy. (b) Describe the full Global Perspectives project cycle. (c) Design a project on 'reducing school waste'. (d) How will you measure success? (e) What makes it sustainable? (f) What legacy could it leave? (g) How do all six strands appear in your project? (h) Evaluate your project's likely impact.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Project synthesis", statement: "Full cycle, impact, sustainability." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Research→analyse→evaluate→reflect→collaborate→communicate→act.", marks: 1, markCode: "M" },
                { reasoning: "(c) Valid comprehensive project design.", marks: 1, markCode: "M" },
                { reasoning: "(d) Valid measurement method.", marks: 1, markCode: "M" },
                { reasoning: "(e) Continuation plan/habit formation.", marks: 1, markCode: "M" },
                { reasoning: "(f) Valid legacy description.", marks: 1, markCode: "M" },
                { reasoning: "(g) All six strands identified in project.", marks: 1, markCode: "M" },
                { reasoning: "(h) Realistic impact evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Complete project cycle with impact assessment.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u2-sy-notes", title: "Synthesising — notes",
      summary: "Combine all six strands into a complete project. Measure impact; ensure sustainability.",
      sections: [
        { heading: "Key idea", body: "A project isn't done until impact is measured and change is sustainable." },
        { heading: "Cycle", body: "Research → analyse → evaluate → reflect → collaborate → communicate → act." },
      ],
    },
  },
];
