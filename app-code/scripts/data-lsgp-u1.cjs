module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson31",
    lesson: {
      id: "cilgp-u1-lesson-1-1", code: "1-1",
      title: "Researching Global Issues",
      goal: "I CAN formulate research questions on global issues and gather reliable information.",
      standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Research", "Cambridge Global Perspectives skills: research"],
      vocabulary: [
        { term: "Global issue", definition: "A problem affecting people across countries." },
        { term: "Research question", definition: "A focused question guiding investigation." },
        { term: "Primary source", definition: "Original data/document created first-hand." },
        { term: "Secondary source", definition: "Information about primary sources." },
        { term: "Bias", definition: "Slanted presentation favouring one view." },
        { term: "Corroboration", definition: "Checking claims against multiple sources." },
      ],
      concept: {
        id: "cilgp-u1-s1-res", title: "Research skills for global issues",
        skill: "Formulate questions and gather reliable evidence at lower secondary level.",
        sections: [
          { heading: "Choosing a question", body: "Good research questions are specific and arguable: 'How does climate change affect food production in South Asia?' not 'Is climate change bad?' Frame questions that can be investigated with evidence." },
          { heading: "Reliable sources", body: "Use reputable organisations (UN, NGOs, peer-reviewed studies), cross-check claims across sources, and note publication dates. Social media posts are leads, not evidence." },
        ],
        keyFormulas: [
          { name: "Research question", statement: "specific + arguable + investigable" },
          { name: "Corroborate", statement: "verify across 2+ sources" },
        ],
        workedExample: {
          problem: "Turn 'poverty is bad' into a researchable question.",
          solution: "'What are the main causes of urban poverty in one developing country, and which solutions have shown evidence of success?'",
        },
        questions: [
          {
            id: "cilgp-u1-rs-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What makes a good research question?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Specific, arguable, investigable" }, { id: "b", text: "Short and simple" }, { id: "c", text: "Has a yes/no answer" }, { id: "d", text: "Is famous" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Research question", statement: "Focused investigable query." }],
              steps: [{ reasoning: "Good questions are specific, arguable, answerable with evidence.", marks: 1, markCode: "M" }],
              finalAnswer: "Specific + arguable + investigable",
            },
          },
          {
            id: "cilgp-u1-rs-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between a primary and secondary source? Give an example of each.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Source types", statement: "Original vs about." }],
              steps: [
                { reasoning: "Primary = original (survey data, treaty); secondary = about it (news report).", marks: 1, markCode: "M" },
                { reasoning: "Examples given.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Original vs commentary",
            },
          },
          {
            id: "cilgp-u1-rs-q3", difficulty: "core", totalMarks: 3,
            stem: "Why should you corroborate a claim before using it? What does 'corroboration' mean?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Corroboration", statement: "Multi-source verification." }],
              steps: [
                { reasoning: "Single sources may be wrong or biased.", marks: 1, markCode: "M" },
                { reasoning: "Corroboration = confirm across independent sources.", marks: 1, markCode: "M" },
                { reasoning: "Strengthens reliability of evidence.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Verify across sources for reliability",
            },
          },
          {
            id: "cilgp-u1-rs-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define global issue, research question, primary source, secondary source, bias, corroboration. (b) Improve this question: 'Is plastic bad?' (c) Give 3 reliable source types for climate research. (d) What is bias in a source? (e) Why check publication dates? (f) Why are social media posts weak evidence? (g) Design a research plan for 'water scarcity in one region'. (h) Evaluate this source: anonymous blog post claiming 'vaccines cause autism'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Research", statement: "Questions, sources, reliability." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Improved specific question.", marks: 1, markCode: "M" },
                { reasoning: "(c) Three valid source types.", marks: 1, markCode: "M" },
                { reasoning: "(d) Slanted favouring one view.", marks: 1, markCode: "M" },
                { reasoning: "(e) Old data may be outdated.", marks: 1, markCode: "M" },
                { reasoning: "(f) Unverified, often opinion.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid research plan.", marks: 1, markCode: "M" },
                { reasoning: "(h) Unreliable — debunked claim, no sources.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Research methodology and source evaluation.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cilgp-u1-rs-notes", title: "Research — notes",
      summary: "Specific arguable questions; primary vs secondary sources; corroborate claims across sources.",
      sections: [
        { heading: "Key idea", body: "Good research starts with a focused, answerable question." },
        { heading: "Sources", body: "Trust reputable organisations; verify across multiple sources." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson32",
    lesson: {
      id: "cilgp-u1-lesson-1-2", code: "1-2",
      title: "Analysing Evidence and Perspectives",
      goal: "I CAN analyse evidence critically and understand different perspectives on an issue.",
      standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Analysis", "Cambridge Global Perspectives skills: analysis"],
      vocabulary: [
        { term: "Perspective", definition: "A particular viewpoint shaped by experience/culture." },
        { term: "Stakeholder", definition: "Person/group affected by or affecting an issue." },
        { term: "Evidence", definition: "Facts/data supporting a claim." },
        { term: "Inference", definition: "Conclusion drawn from evidence." },
        { term: "Assumption", definition: "Unstated belief underlying an argument." },
        { term: "Counter-argument", definition: "Reasoning against a position." },
      ],
      concept: {
        id: "cilgp-u1-s2-ana", title: "Critical analysis of evidence and perspectives",
        skill: "Analyse evidence quality and multiple viewpoints at lower secondary level.",
        sections: [
          { heading: "Multiple perspectives", body: "Every issue affects stakeholders differently: a factory closing hurts workers but may help environment. Understanding all perspectives — not just your own — is core to global perspectives work." },
          { heading: "Analysing evidence", body: "Check: Is the evidence relevant to the claim? Is it sufficient? Are there alternative explanations? Strong analysis distinguishes fact from interpretation and acknowledges uncertainty." },
        ],
        keyFormulas: [
          { name: "Perspective", statement: "viewpoint shaped by context" },
          { name: "Counter-argument", statement: "strongest opposing view" },
        ],
        workedExample: {
          problem: "Analyse: 'Building a dam provides clean energy.' What perspectives and evidence matter?",
          solution: "Supporters: clean energy, flood control. Opponents: displaced communities, ecosystem damage. Evidence: energy output, relocation costs, environmental impact studies.",
        },
        questions: [
          {
            id: "cilgp-u1-an-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a stakeholder?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Person/group affected by an issue" }, { id: "b", text: "A type of evidence" }, { id: "c", text: "A voting system" }, { id: "d", text: "A research tool" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Stakeholder", statement: "Affected party." }],
              steps: [{ reasoning: "Stakeholders are affected by/affect issues.", marks: 1, markCode: "M" }],
              finalAnswer: "Affected person/group",
            },
          },
          {
            id: "cilgp-u1-an-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between evidence and inference?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Evidence vs inference", statement: "Data vs conclusion." }],
              steps: [
                { reasoning: "Evidence = facts/data observed.", marks: 1, markCode: "M" },
                { reasoning: "Inference = conclusion drawn from it.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Data vs conclusion",
            },
          },
          {
            id: "cilgp-u1-an-q3", difficulty: "core", totalMarks: 3,
            stem: "Identify two perspectives on 'social media use by teenagers' and one evidence type for each.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Perspectives", statement: "Multiple viewpoints + evidence." }],
              steps: [
                { reasoning: "e.g. Parents: safety concerns — evidence: cyberbullying stats.", marks: 1, markCode: "M" },
                { reasoning: "Teens: social connection — evidence: usage surveys.", marks: 1, markCode: "M" },
                { reasoning: "Both perspectives + evidence each.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Two perspectives with evidence",
            },
          },
          {
            id: "cilgp-u1-an-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define perspective, stakeholder, evidence, inference, assumption, counter-argument. (b) List 4 stakeholders in 'should city build a new airport?'. (c) Give one perspective + evidence for each. (d) What is an assumption? (e) Why consider counter-arguments? (f) How do you evaluate evidence quality? (g) Find the inference in: 'Ice caps are melting, therefore sea levels will rise.' (h) Analyse both sides of 'universal basic income'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Analysis", statement: "Perspectives, evidence, inference." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Four valid stakeholders.", marks: 1, markCode: "M" },
                { reasoning: "(c) Perspective+evidence pairs.", marks: 1, markCode: "M" },
                { reasoning: "(d) Unstated underlying belief.", marks: 1, markCode: "M" },
                { reasoning: "(e) Tests strength of position.", marks: 1, markCode: "M" },
                { reasoning: "(f) Relevance, sufficiency, reliability.", marks: 1, markCode: "M" },
                { reasoning: "(g) 'Sea levels will rise' is the inference.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced analysis of UBI.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Critical analysis of evidence and perspectives.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cilgp-u1-an-notes", title: "Analysis — notes",
      summary: "Consider all stakeholder perspectives; distinguish evidence from inference; test assumptions.",
      sections: [
        { heading: "Key idea", body: "Strong analysis weighs multiple viewpoints fairly." },
        { heading: "Evidence", body: "Check relevance, sufficiency, reliability — not just quantity." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson33",
    lesson: {
      id: "cilgp-u1-lesson-1-3", code: "1-3",
      title: "Evaluating Arguments and Solutions",
      goal: "I CAN evaluate arguments and judge which solutions best address an issue.",
      standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Evaluation", "Cambridge Global Perspectives skills: evaluation"],
      vocabulary: [
        { term: "Evaluation", definition: "Judging quality, effectiveness or worth." },
        { term: "Criteria", definition: "Standards used to judge options." },
        { term: "Trade-off", definition: "Giving up one benefit for another." },
        { term: "Feasibility", definition: "Whether something can realistically be done." },
        { term: "Impact", definition: "Effect a solution has on the issue/stakeholders." },
        { term: "Cost-benefit", definition: "Weighing costs against benefits." },
      ],
      concept: {
        id: "cilgp-u1-s3-eval", title: "Evaluating arguments and solutions",
        skill: "Apply criteria to judge solutions at lower secondary level.",
        sections: [
          { heading: "Evaluation criteria", body: "Judge solutions by: effectiveness (does it solve the problem?), feasibility (can it be done?), cost, equity (who benefits/loses?), sustainability (long-term?), and unintended consequences." },
          { heading: "Trade-offs", body: "Most solutions involve trade-offs: cheap vs effective, fast vs thorough, local vs global benefit. Good evaluation acknowledges these rather than pretending one option is perfect." },
        ],
        keyFormulas: [
          { name: "Criteria", statement: "effectiveness, feasibility, cost, equity, sustainability" },
          { name: "Trade-off", statement: "benefit A vs benefit B" },
        ],
        workedExample: {
          problem: "Evaluate solutions to plastic pollution: bans vs recycling vs cleanup.",
          solution: "Bans: effective at source, costly enforcement. Recycling: feasible, limited by contamination. Cleanup: treats symptoms. Best: combination — ban single-use + improve recycling.",
        },
        questions: [
          {
            id: "cilgp-u1-ev-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a trade-off?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Giving up one benefit for another" }, { id: "b", text: "A type of argument" }, { id: "c", text: "A research method" }, { id: "d", text: "A voting system" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Trade-off", statement: "Benefit vs benefit." }],
              steps: [{ reasoning: "Trade-offs sacrifice one gain for another.", marks: 1, markCode: "M" }],
              finalAnswer: "Giving up one benefit for another",
            },
          },
          {
            id: "cilgp-u1-ev-q2", difficulty: "foundation", totalMarks: 2,
            stem: "List three criteria for evaluating a solution to a global issue.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Criteria", statement: "Evaluation standards." }],
              steps: [
                { reasoning: "e.g. effectiveness, cost, equity.", marks: 1, markCode: "M" },
                { reasoning: "Three valid criteria.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. effectiveness/cost/equity",
            },
          },
          {
            id: "cilgp-u1-ev-q3", difficulty: "core", totalMarks: 3,
            stem: "Evaluate 'solar panels for all homes' as a solution to climate change. One strength, one weakness, one trade-off.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Evaluation", statement: "Balanced judgement." }],
              steps: [
                { reasoning: "Strength: reduces emissions long-term.", marks: 1, markCode: "M" },
                { reasoning: "Weakness: high upfront cost.", marks: 1, markCode: "M" },
                { reasoning: "Trade-off: cost vs environmental benefit.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Balanced evaluation",
            },
          },
          {
            id: "cilgp-u1-ev-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define evaluation, criteria, trade-off, feasibility, impact, cost-benefit. (b) List 5 evaluation criteria. (c) Why is 'effectiveness' key? (d) What is feasibility? (e) Give an example of equity in a solution. (f) Why consider unintended consequences? (g) Evaluate 'compulsory voting' — strengths and weaknesses. (h) Design criteria to choose a school recycling programme.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Evaluation", statement: "Criteria-based judgement." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Five valid criteria.", marks: 1, markCode: "M" },
                { reasoning: "(c) Must actually solve the problem.", marks: 1, markCode: "M" },
                { reasoning: "(d) Realistically achievable.", marks: 1, markCode: "M" },
                { reasoning: "(e) Fair distribution of benefits/harms.", marks: 1, markCode: "M" },
                { reasoning: "(f) Solutions can backfire.", marks: 1, markCode: "M" },
                { reasoning: "(g) Balanced compulsory voting analysis.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid criteria design.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Solution evaluation methodology.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cilgp-u1-ev-notes", title: "Evaluation — notes",
      summary: "Judge solutions by effectiveness, feasibility, cost, equity, sustainability; acknowledge trade-offs.",
      sections: [
        { heading: "Key idea", body: "No perfect solution — evaluation means weighing trade-offs." },
        { heading: "Criteria", body: "Match criteria to the issue being addressed." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson34",
    lesson: {
      id: "cilgp-u1-lesson-1-4", code: "1-4",
      title: "Collaboration and Communication",
      goal: "I CAN work collaboratively on global issues and communicate findings clearly.",
      standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Collaboration", "Cambridge Global Perspectives skills: collaboration and communication"],
      vocabulary: [
        { term: "Collaboration", definition: "Working together toward shared goals." },
        { term: "Communication", definition: "Exchanging information clearly." },
        { term: "Audience", definition: "Who will receive your message." },
        { term: "Presentation", definition: "Structured delivery of findings." },
        { term: "Active listening", definition: "Fully attending to others' contributions." },
        { term: "Consensus", definition: "General agreement among group members." },
      ],
      concept: {
        id: "cilgp-u1-s4-collab", title: "Collaboration and communication",
        skill: "Contribute effectively to group work and present findings at lower secondary level.",
        sections: [
          { heading: "Effective collaboration", body: "Define roles, share tasks fairly, listen actively, resolve disagreements respectfully, and build on each other's ideas. Good teams communicate early and often." },
          { heading: "Clear communication", body: "Adapt to your audience: peers need context, teachers need rigour, public needs accessible language. Structure presentations: hook → evidence → analysis → conclusion." },
        ],
        keyFormulas: [
          { name: "Collaboration", statement: "roles + listening + shared goals" },
          { name: "Presentation", statement: "hook→evidence→analysis→conclusion" },
        ],
        workedExample: {
          problem: "Your team disagrees on which solution to present. How do you reach consensus?",
          solution: "Each member presents their case with evidence → group evaluates against agreed criteria → choose best-supported option → document reasoning.",
        },
        questions: [
          {
            id: "cilgp-u1-cc-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is active listening?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Fully attending to others' contributions" }, { id: "b", text: "Talking louder" }, { id: "c", text: "Taking notes only" }, { id: "d", text: "Agreeing with everything" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Active listening", statement: "Full attention." }],
              steps: [{ reasoning: "Active listening = engaged, not just hearing.", marks: 1, markCode: "M" }],
              finalAnswer: "Fully attentive listening",
            },
          },
          {
            id: "cilgp-u1-cc-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Give two ways to adapt communication to your audience.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Audience adaptation", statement: "Match message to receiver." }],
              steps: [
                { reasoning: "e.g. simpler language for public; technical detail for experts.", marks: 1, markCode: "M" },
                { reasoning: "Adjust depth/examples for audience needs.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Language level + detail adapted",
            },
          },
          {
            id: "cilgp-u1-cc-q3", difficulty: "core", totalMarks: 3,
            stem: "Your group is researching 'online privacy'. How would you divide the work and communicate progress?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Collaboration", statement: "Roles and communication." }],
              steps: [
                { reasoning: "Assign roles: sources, analysis, presentation.", marks: 1, markCode: "M" },
                { reasoning: "Regular check-ins/share findings.", marks: 1, markCode: "M" },
                { reasoning: "Coherent combined output.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Roles + regular updates",
            },
          },
          {
            id: "cilgp-u1-cc-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define collaboration, communication, audience, presentation, active listening, consensus. (b) What makes a good team? (c) How do you handle disagreement in a group? (d) What is a presentation structure? (e) Why adapt to audience? (f) What is netiquette in online collaboration? (g) How do you ensure everyone's voice is heard? (h) Plan a 10-minute presentation on 'should homework be banned?'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Collaboration", statement: "Teamwork and presentation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Roles, trust, communication.", marks: 1, markCode: "M" },
                { reasoning: "(c) Evidence-based respectful discussion.", marks: 1, markCode: "M" },
                { reasoning: "(d) Hook→evidence→analysis→conclusion.", marks: 1, markCode: "M" },
                { reasoning: "(e) Match language/depth to receivers.", marks: 1, markCode: "M" },
                { reasoning: "(f) Polite, clear online behaviour.", marks: 1, markCode: "M" },
                { reasoning: "(g) Rotate roles, invite quiet members.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid presentation plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Collaboration and communication skills.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cilgp-u1-cc-notes", title: "Collaboration — notes",
      summary: "Teams need roles, listening and shared goals; presentations need structure and audience adaptation.",
      sections: [
        { heading: "Key idea", body: "Global Perspectives is inherently collaborative — skills matter." },
        { heading: "Communication", body: "Adapt to audience; structure: hook→evidence→analysis→conclusion." },
      ],
    },
  },
  {
    file: "lesson-1-5.ts", exportName: "lesson35",
    lesson: {
      id: "cilgp-u1-lesson-1-5", code: "1-5",
      title: "Reflection and Personal Action",
      goal: "I CAN reflect on my learning and plan personal action on global issues.",
      standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Reflection", "Cambridge Global Perspectives skills: reflection"],
      vocabulary: [
        { term: "Reflection", definition: "Thinking about experiences to learn from them." },
        { term: "Action plan", definition: "Steps to take to address an issue." },
        { term: "Agency", definition: "Ability to influence change." },
        { term: "Sustainability", definition: "Meeting needs without harming future." },
        { term: "Empathy", definition: "Understanding others' feelings/perspectives." },
        { term: "Accountability", definition: "Taking responsibility for actions." },
      ],
      concept: {
        id: "cilgp-u1-s5-refl", title: "Reflection and action",
        skill: "Reflect critically and plan meaningful action at lower secondary level.",
        sections: [
          { heading: "Critical reflection", body: "Reflection asks: What did I learn? What assumptions did I challenge? How has my thinking changed? What could I do differently? It's not just 'what happened' but 'what does it mean'." },
          { heading: "Personal action", body: "Action plans should be realistic: what specifically will you do, by when, and how will you measure impact? Small consistent actions beat grand gestures." },
        ],
        keyFormulas: [
          { name: "Reflection", statement: "what happened → what it means → what changes" },
          { name: "Action plan", statement: "specific + realistic + measurable" },
        ],
        workedExample: {
          problem: "After researching plastic pollution, write a personal action plan.",
          solution: "This month: carry reusable bottle + bag. This term: start school recycling club. Measure: count single-use items avoided weekly.",
        },
        questions: [
          {
            id: "cilgp-u1-rf-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is reflection in Global Perspectives?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Thinking about experiences to learn from them" }, { id: "b", text: "Looking in a mirror" }, { id: "c", text: "Writing a summary" }, { id: "d", text: "Copying notes" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Reflection", statement: "Learning from experience." }],
              steps: [{ reasoning: "Reflection = deeper thinking about experience.", marks: 1, markCode: "M" }],
              finalAnswer: "Learning from experience",
            },
          },
          {
            id: "cilgp-u1-rf-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What makes a good action plan? Give two features.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Action plan", statement: "Specific, realistic, measurable." }],
              steps: [
                { reasoning: "Specific steps with timeline.", marks: 1, markCode: "M" },
                { reasoning: "Realistic + measurable impact.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Specific + realistic + measurable",
            },
          },
          {
            id: "cilgp-u1-rf-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the difference between 'what happened' and 'what it means' in reflection?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Reflection depth", statement: "Event vs meaning." }],
              steps: [
                { reasoning: "'What happened' = description of event.", marks: 1, markCode: "M" },
                { reasoning: "'What it means' = interpretation/learning.", marks: 1, markCode: "M" },
                { reasoning: "Deep reflection goes beyond description.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Description vs interpretation",
            },
          },
          {
            id: "cilgp-u1-rf-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define reflection, action plan, agency, sustainability, empathy, accountability. (b) Why is reflection important in GP? (c) What questions does critical reflection ask? (d) What makes an action plan realistic? (e) Give an example of small sustainable action. (f) What is empathy in global issues? (g) How do you measure action impact? (h) Write a reflection + action plan after researching 'food waste'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Reflection", statement: "Learning and action." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Deepens learning, changes thinking.", marks: 1, markCode: "M" },
                { reasoning: "(c) What learned/assumptions challenged/changes.", marks: 1, markCode: "M" },
                { reasoning: "(d) Achievable steps + resources.", marks: 1, markCode: "M" },
                { reasoning: "(e) Valid small action example.", marks: 1, markCode: "M" },
                { reasoning: "(f) Understanding others' perspectives.", marks: 1, markCode: "M" },
                { reasoning: "(g) Metrics/counts/observable change.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid reflection + action plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Reflection and personal action planning.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cilgp-u1-rf-notes", title: "Reflection — notes",
      summary: "Reflect on learning and challenge assumptions; plan specific, measurable personal actions.",
      sections: [
        { heading: "Key idea", body: "Reflection turns experience into learning." },
        { heading: "Action", body: "Small consistent actions > grand gestures." },
      ],
    },
  },
];
