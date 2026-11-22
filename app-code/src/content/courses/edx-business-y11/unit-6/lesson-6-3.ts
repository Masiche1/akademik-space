import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ebz11-u6-lesson-6-3",
  code: "6-3",
  title: "Business Decisions and Ethics",
  goal: "I CAN apply ethical frameworks to business decisions.",
  standards: ["Edexcel IGCSE Business 4BS0 — External Influences"],
  vocabulary: [
    {
      term: "Stakeholder analysis",
      definition: "Evaluating impact on all stakeholders.",
    },
    {
      term: "Ethical dilemma",
      definition: "Situation where right/wrong is unclear.",
    },
    {
      term: "Cost-benefit analysis",
      definition: "Weighing costs vs benefits of decision.",
    },
    {
      term: "Triple bottom line",
      definition: "People, planet, profit — sustainability framework.",
    },
    {
      term: "Whistleblowing",
      definition: "Exposing wrongdoing inside organisation.",
    },
  ],
  concepts: [
    {
      id: "ebz11-u6-decisions",
      title: "Business Decision Making",
      skill: "Apply frameworks to evaluate business decisions.",
      lesson: {
        sections: [
          {
            heading: "Decision frameworks",
            body: "**Cost-benefit analysis**: list costs and benefits of each option — choose highest net benefit. **Stakeholder analysis**: who is affected and how — balance competing interests. **SWOT**: strengths, weaknesses, opportunities, threats — internal/external analysis.\n\n**Ethical frameworks**: utilitarian (greatest good for most), deontological (follow rules/duties), virtue ethics (character). **Decision process**: identify problem → gather info → evaluate options → decide → implement → review.",
          },
          {
            heading: "Ethical dilemmas",
            body: "**Dilemma**: right choice unclear — e.g., cheap labour vs fair wages, profit vs environment. **Resolution**: consider stakeholders, legal requirements, long-term reputation, company values.\n\n**Triple bottom line**: measure success by people (social), planet (environmental), profit (economic) — not just profit. **Whistleblowing**: exposing illegal/unethical conduct — protected by law in many countries.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Factory can cut costs by using cheaper, polluting materials. Ethical dilemma?",
          solution:
            "Cost-benefit: profit vs environmental damage — consider stakeholders, regulations, reputation.",
        },
      },
      questions: [
        {
          id: "ebz11-u6-decisions-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an ethical dilemma?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Profit maximisation" },
              { id: "b", text: "Situation where right/wrong is unclear" },
              { id: "c", text: "Legal requirement" },
              { id: "d", text: "Easy decision" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethical dilemma",
                statement: "Unclear right/wrong — competing values.",
              },
            ],
            steps: [
              {
                reasoning: "Dilemma = unclear right/wrong.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Unclear right/wrong",
            commonErrors: ["Legal issue confused."],
          },
        },
        {
          id: "ebz11-u6-decisions-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What does the triple bottom line measure?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triple bottom line",
                statement: "People, planet, profit.",
              },
            ],
            steps: [
              {
                reasoning: "People — social impact.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Planet — environmental impact.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Profit — economic performance.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "People, planet, profit.",
            commonErrors: ["Only profit.", "Missing one."],
          },
        },
        {
          id: "ebz11-u6-decisions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how cost-benefit analysis helps business decisions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cost-benefit",
                statement: "Systematic comparison of options.",
              },
            ],
            steps: [
              {
                reasoning: "Lists all costs and benefits of each option.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Compares net benefit — highest wins.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Makes decision objective and defensible.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Limitation: hard to quantify some costs/benefits.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Systematic comparison → objective choice; limitation = unquantifiable factors.",
            commonErrors: ["No method.", "No limitation."],
          },
        },
        {
          id: "ebz11-u6-decisions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company finds cheaper child labour overseas for its products.",
          parts: [
            { label: "a", prompt: "Identify the ethical dilemma.", marks: 3 },
            {
              label: "b",
              prompt: "Analyse using cost-benefit analysis.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Recommend a decision with justification.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethical decision",
                statement: "Balance profit vs ethics.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Cheap labour vs exploitation of children.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Profit vs ethical sourcing.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Cost: lower production cost vs reputation/legal risk.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Benefit: higher profit vs ethical/legal issues.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Don't use child labour — ethics + reputation > short-term profit.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) profit vs exploitation (b) cost vs reputation (c) reject child labour",
            commonErrors: ["No dilemma.", "Profit only."],
          },
        },
      ],
    },
    {
      id: "ebz11-u6-sustainability",
      title: "Sustainability and the Environment",
      skill: "Understand environmental sustainability in business.",
      lesson: {
        sections: [
          {
            heading: "Environmental issues",
            body: "**Climate change**: carbon emissions — businesses must reduce footprint. **Resource depletion**: finite resources — oil, minerals, water. **Pollution**: waste, emissions, plastic — harms environment. **Biodiversity**: deforestation, habitat loss.\n\n**Business impact**: resource costs rising, regulation increasing, consumer demand for sustainable products, reputation risk.",
          },
          {
            heading: "Sustainable business",
            body: "**Circular economy**: reduce, reuse, recycle — design for longevity, minimal waste. **Renewable energy**: solar, wind — reduce carbon footprint. **Sustainable sourcing**: ethical materials, fair trade, local suppliers. **Greenwashing**: falsely claiming environmental credentials — risky and unethical.\n\n**Benefits**: cost savings (energy efficiency), customer appeal, regulatory compliance, future-proofing. **Challenges**: higher upfront costs, complexity, greenwashing accusations.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A company claims 'eco-friendly' but uses lots of plastic. What's the risk?",
          solution:
            "Greenwashing — false claims damage reputation, may face legal action.",
        },
      },
      questions: [
        {
          id: "ebz11-u6-sustainability-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is greenwashing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using renewable energy" },
              { id: "b", text: "Falsely claiming environmental credentials" },
              { id: "c", text: "Actually being sustainable" },
              { id: "d", text: "Recycling properly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Greenwashing",
                statement: "False environmental claims.",
              },
            ],
            steps: [
              {
                reasoning: "Greenwashing = false claims.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** False claims",
            commonErrors: ["Real sustainability confused."],
          },
        },
        {
          id: "ebz11-u6-sustainability-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of sustainable business practices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainability benefits",
                statement: "Cost savings, reputation, compliance.",
              },
            ],
            steps: [
              {
                reasoning: "Cost savings — energy efficiency, waste reduction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Customer appeal — sustainable products in demand.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Regulatory compliance — avoid fines.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Cost savings, customer appeal, compliance.",
            commonErrors: ["Only costs.", "Only one."],
          },
        },
        {
          id: "ebz11-u6-sustainability-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the circular economy concept.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Circular economy",
                statement: "Reduce, reuse, recycle — minimise waste.",
              },
            ],
            steps: [
              {
                reasoning: "Design products for durability and repair.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reuse materials/components.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Recycle at end of life — waste becomes resource.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Contrast: linear economy = take-make-dispose.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Reduce/reuse/recycle — waste becomes resource, vs linear take-make-dispose.",
            commonErrors: ["Only recycling.", "No contrast."],
          },
        },
        {
          id: "ebz11-u6-sustainability-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A clothing company wants to become more sustainable.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two sustainable sourcing changes.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest two operational changes.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainability implementation",
                statement: "Sourcing + operations both matter.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Use organic/recycled materials.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Fair trade/sustainable supplier certification.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Reduce water/energy in production.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Recyclable packaging, take-back scheme.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) organic materials/fair trade (b) reduce energy/recyclable packaging",
            commonErrors: ["Only sourcing.", "No specifics."],
          },
        },
      ],
    },
  ],
};
