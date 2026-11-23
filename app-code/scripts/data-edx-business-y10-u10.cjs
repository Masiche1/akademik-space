module.exports = [
  {
    file: "lesson-10-1.ts", exportName: "lesson101",
    lesson: {
      id: "ebz10-u10-lesson-10-1", code: "10-1",
      title: "Business Ethics and Corporate Responsibility",
      goal: "I CAN explain business ethics, ethical issues and corporate social responsibility.",
      standards: ["Edexcel IGCSE Business 4BS0 — External Influences: business ethics and CSR"],
      vocabulary: [
        { term: "Business ethics", definition: "Moral principles guiding how a business should behave." },
        { term: "Ethical issue", definition: "A situation where a business must choose between profit and doing what is right." },
        { term: "Corporate social responsibility (CSR)", definition: "A business's voluntary responsibility to society and the environment." },
        { term: "Stakeholder", definition: "Anyone affected by or affecting a business." },
        { term: "Pressure group", definition: "An organised group that campaigns to influence business or government decisions." },
      ],
      concepts: [
        {
          id: "ebz10-u10-ethics",
          title: "Business Ethics",
          skill: "Identify ethical issues and apply ethical reasoning to business decisions.",
          sections: [
            {
              heading: "What are business ethics?",
              body: "**Business ethics** are the moral principles that guide how a business treats people, the environment and society — beyond simply obeying the law. Ethical businesses consider whether actions are fair, honest and responsible, even when the law does not force them to.",
            },
            {
              heading: "Common ethical issues",
              body: "**Labour**: child labour, sweatshop conditions, low wages, discrimination. **Marketing**: misleading advertising, planned obsolescence, targeting vulnerable groups. **Environment**: pollution, waste, resource depletion. **Finance**: tax avoidance, bribery, insider dealing. **Products**: unsafe goods, animal testing.",
            },
            {
              heading: "Making ethical decisions",
              body: "Businesses weigh **short-term profit** against **long-term reputation**. An ethical approach considers all **stakeholders** — workers, customers, communities, the environment — not just shareholders. Many firms adopt a **code of ethics** and ethics training; breaches can trigger boycotts, lawsuits and lost customers.",
            },
          ],
          keyFormulas: [
            { name: "Ethics vs law", statement: "Ethics = what is right; law = what is required" },
            { name: "Stakeholder", statement: "Anyone affected by or affecting the business" },
          ],
          workedExample: {
            problem: "A factory can cut costs by dumping waste illegally at night. Is this ethical even if it saves money?",
            solution: "No — illegal dumping harms the environment and community; the short-term saving damages long-term reputation and risks prosecution.",
          },
          questions: [
            {
              id: "ebz10-u10-ethics-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What are business ethics?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Laws that businesses must follow" },
                { id: "b", text: "Moral principles guiding how a business should behave" },
                { id: "c", text: "A type of tax on profits" },
                { id: "d", text: "Rules set by trade unions" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Business ethics", statement: "Moral principles guiding business behaviour." }],
                steps: [{ reasoning: "Ethics = moral principles, distinct from legal requirements.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Moral principles guiding behaviour",
                commonErrors: ["Confused with law or regulations."],
              },
            },
            {
              id: "ebz10-u10-ethics-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three examples of ethical issues a business might face.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Ethical issues", statement: "Labour, marketing, environment, finance, product safety." }],
                steps: [
                  { reasoning: "Labour issues — child labour, poor conditions, discrimination.", marks: 1, markCode: "AO1" },
                  { reasoning: "Marketing issues — misleading ads, targeting vulnerable groups.", marks: 1, markCode: "AO1" },
                  { reasoning: "Environmental issues — pollution, waste, resource use.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Labour, marketing, environmental or financial/product ethical issues.",
                commonErrors: ["Legal issues only — ethics goes beyond law."],
              },
            },
            {
              id: "ebz10-u10-ethics-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why a business might choose to act ethically even when the law does not require it.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Reasons for ethical conduct", statement: "Reputation, customer loyalty, staff motivation, long-term profit." }],
                steps: [
                  { reasoning: "Builds reputation and customer trust.", marks: 1, markCode: "AO2" },
                  { reasoning: "Attracts and retains motivated staff.", marks: 1, markCode: "AO2" },
                  { reasoning: "Avoids future legal risk and boycotts.", marks: 1, markCode: "AO2" },
                  { reasoning: "Ethical branding can command premium prices.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Reputation, staff, risk avoidance and premium branding all reward ethical behaviour.",
                commonErrors: ["Only moral reasons given, no business reasons."],
              },
            },
            {
              id: "ebz10-u10-ethics-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A clothing brand discovers its supplier uses child labour.",
              parts: [
                { label: "a", prompt: "State two ethical issues this raises.", marks: 2 },
                { label: "b", prompt: "Explain two ways the brand could respond ethically.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Ethical response to supplier abuse", statement: "Stop sourcing, investigate, support remediation." }],
                steps: [
                  { reasoning: "(a) Exploitation of children and unsafe/poor working conditions.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Brand shares responsibility through its supply chain.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Immediately stop orders until conditions are verified.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Fund audits and require the supplier to remediate conditions.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Publicly report findings and support affected workers.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) child exploitation, supply-chain responsibility (b) stop orders, audit, remediate",
                commonErrors: ["Response limited to ignoring the issue or just ending the contract."],
              },
            },
            {
              id: "ebz10-u10-ethics-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A fast-food chain profits from advertising sugary products to children.",
              parts: [
                { label: "a", prompt: "Explain two ethical concerns with this marketing.", marks: 3 },
                { label: "b", prompt: "Evaluate whether profit should take priority over these concerns.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Marketing ethics", statement: "Exploiting vulnerability damages health and reputation." }],
                steps: [
                  { reasoning: "(a) Targets a vulnerable group unable to make informed choices.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Contributes to childhood obesity and health problems.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Undermines parents' authority and children's wellbeing.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Profit motive conflicts with responsibility to vulnerable consumers.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Long-term reputation and regulation risk may outweigh short-term gains.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(b) A balanced response: responsible marketing can still be profitable.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) vulnerability exploited, health harm (b) ethics should limit profit-seeking; reputation supports restraint",
                commonErrors: ["Profit priority assumed without evaluation."],
              },
            },
            {
              id: "ebz10-u10-ethics-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A profitable electronics firm is accused of dumping toxic e-waste in developing countries.",
              parts: [
                { label: "a", prompt: "Define business ethics.", marks: 2 },
                { label: "b", prompt: "Define a stakeholder and name two stakeholders harmed here.", marks: 2 },
                { label: "c", prompt: "Explain two ethical issues raised by the dumping.", marks: 2 },
                { label: "d", prompt: "Explain two consequences the firm could face if exposed.", marks: 2 },
                { label: "e", prompt: "Recommend and justify how the firm should respond.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Environmental ethics", statement: "Cost-shifting harms communities; exposure risks reputation and law." }],
                steps: [
                  { reasoning: "(a) Moral principles guiding how a business should behave.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Anyone affected by/affecting the business — local communities and workers.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Environmental damage to host communities; cost-shifting of disposal responsibility.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Consumer boycotts/lost sales and legal action or fines.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) Stop dumping, fund safe recycling, compensate communities — justified by ethics and long-term reputation.", marks: 2, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "Definitions; issues and consequences explained; ethical remediation recommended.",
                commonErrors: ["No justified response.", "Stakeholders not identified."],
              },
            },
          ],
        },
        {
          id: "ebz10-u10-csr",
          title: "Corporate Social Responsibility",
          skill: "Describe CSR activities and evaluate their benefits and limitations.",
          sections: [
            {
              heading: "What is CSR?",
              body: "**Corporate social responsibility (CSR)** is a business's voluntary commitment to operate in ways that benefit society and the environment — going beyond legal requirements to consider the impact of its activities on all stakeholders. It ranges from ethical sourcing and fair wages to community investment and environmental programmes.",
            },
            {
              heading: "Types of CSR activity",
              body: "**Environmental**: reducing waste and emissions, sustainable sourcing, renewable energy. **Community**: supporting local charities, schools and infrastructure. **Employee**: fair pay, training, health programmes, diversity. **Ethical trading**: auditing suppliers, refusing child labour. **Philanthropy**: donations and volunteering.",
            },
            {
              heading: "Benefits and criticisms of CSR",
              body: "**Benefits**: stronger reputation and brand loyalty; attracts customers and investors; motivates staff; pre-empts regulation; reduces long-term risk. **Criticisms**: costs money that could raise prices or profits; may be 'greenwashing' — publicity without real change; hard to measure; some argue firms' only duty is to shareholders (profit maximisation).",
            },
          ],
          keyFormulas: [
            { name: "CSR", statement: "Voluntary responsibility to society and environment beyond legal minimums" },
            { name: "Greenwashing", statement: "Exaggerating environmental claims without real action" },
          ],
          workedExample: {
            problem: "A supermarket donates to local food banks and audits suppliers for ethical labour. Is this CSR?",
            solution: "Yes — voluntary actions benefiting community (food banks) and ensuring ethical supply chains go beyond legal requirements.",
          },
          questions: [
            {
              id: "ebz10-u10-csr-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does CSR stand for, and what does it require of a business?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Company Share Returns — mandatory profit sharing" },
                { id: "b", text: "Corporate Social Responsibility — voluntary benefit to society and environment" },
                { id: "c", text: "Customer Service Rules — legally required service standards" },
                { id: "d", text: "Corporate Safety Regulations — government health rules" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "CSR", statement: "Voluntary responsibility to society/environment beyond legal minimums." }],
                steps: [{ reasoning: "CSR = voluntary social/environmental responsibility, not mandatory rules.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Corporate Social Responsibility",
                commonErrors: ["Treated as a legal requirement."],
              },
            },
            {
              id: "ebz10-u10-csr-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three examples of CSR activities a business might undertake.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "CSR activities", statement: "Environmental, community, employee, ethical-trading and philanthropic actions." }],
                steps: [
                  { reasoning: "Environmental — reduce waste/emissions, sustainable sourcing.", marks: 1, markCode: "AO1" },
                  { reasoning: "Community — support charities, schools, local projects.", marks: 1, markCode: "AO1" },
                  { reasoning: "Employees/ethics — fair pay, training, supplier audits.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Environmental programmes, community investment, fair staff practices, ethical sourcing.",
                commonErrors: ["Legal compliance listed as CSR — CSR is voluntary."],
              },
            },
            {
              id: "ebz10-u10-csr-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two benefits a business gains from genuine CSR.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "CSR benefits", statement: "Reputation, loyalty, staff motivation, risk reduction." }],
                steps: [
                  { reasoning: "Improved reputation attracts customers and investors.", marks: 1, markCode: "AO2" },
                  { reasoning: "Brand loyalty — customers prefer ethical firms.", marks: 1, markCode: "AO2" },
                  { reasoning: "Motivated staff and easier recruitment.", marks: 1, markCode: "AO2" },
                  { reasoning: "Reduces long-term regulatory and reputational risk.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Reputation/loyalty, staff motivation and reduced risk.",
                commonErrors: ["Benefits not explained — just listed."],
              },
            },
            {
              id: "ebz10-u10-csr-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A drinks company launches a 'green' brand while continuing to pollute rivers near its factories.",
              parts: [
                { label: "a", prompt: "Explain why this could be accused of greenwashing.", marks: 2 },
                { label: "b", prompt: "Explain two risks the company faces if the contradiction is exposed.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Greenwashing", statement: "Marketing environmental claims without matching real action." }],
                steps: [
                  { reasoning: "(a) 'Green' branding claims environmental care while real pollution continues.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Reputational damage and loss of customer trust.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Boycotts, falling sales of the green brand.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Legal action for misleading advertising / fines.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) claims contradict real pollution (b) lost trust, boycotts, legal/fine risk",
                commonErrors: ["Greenwashing not defined or linked."],
              },
            },
            {
              id: "ebz10-u10-csr-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A shareholder argues the firm's only duty is to maximise profit, so CSR spending is wasteful.",
              parts: [
                { label: "a", prompt: "Explain the shareholder's argument.", marks: 2 },
                { label: "b", prompt: "Evaluate this argument against the case for CSR.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Profit vs CSR debate", statement: "Short-term profit focus vs long-term stakeholder value." }],
                steps: [
                  { reasoning: "(a) CSR costs reduce short-term profit available to shareholders.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Shareholders' money should not fund social projects.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) CSR can raise long-term profit via reputation and loyalty.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Stakeholders beyond shareholders are affected and deserve consideration.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Risk of regulation and reputational damage if ignored.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) CSR costs cut shareholder returns (b) long-term gains and stakeholder duty outweigh short-term cost",
                commonErrors: ["Only one side argued."],
              },
            },
            {
              id: "ebz10-u10-csr-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A mid-size bakery is considering adopting a formal CSR programme.",
              parts: [
                { label: "a", prompt: "Define CSR.", marks: 2 },
                { label: "b", prompt: "Give two examples of CSR activities suitable for a bakery.", marks: 2 },
                { label: "c", prompt: "Explain two benefits the bakery could gain.", marks: 2 },
                { label: "d", prompt: "Explain two costs or criticisms of the programme.", marks: 2 },
                { label: "e", prompt: "Reach a justified recommendation on whether to adopt CSR.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "CSR decision", statement: "Weigh reputational and social gains against costs and greenwashing risk." }],
                steps: [
                  { reasoning: "(a) Voluntary responsibility to benefit society and the environment beyond legal minimums.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Local sourcing, food-waste donation, community sponsorship.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Reputation/loyalty and staff motivation.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Programme costs reduce profit; risk of being seen as greenwashing.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) Balanced recommendation — e.g. adopt modest, genuine CSR.", marks: 2, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "Definition; examples; benefits vs costs weighed; justified recommendation.",
                commonErrors: ["No costs considered.", "Recommendation unsupported."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz10-u10-101-notes", title: "Ethics and CSR — notes",
      summary: "Business ethics = moral principles beyond the law. CSR = voluntary benefit to society/environment — benefits reputation but costs money and risks greenwashing.",
      sections: [
        { heading: "Ethics", body: "Issues span labour, marketing, environment, finance and product safety. Ethical firms gain reputation, staff and loyalty." },
        { heading: "CSR types", body: "Environmental programmes, community investment, fair staff practices, ethical supplier audits, philanthropy." },
        { heading: "Debate", body: "Genuine CSR builds trust and reduces risk; critics cite cost and 'greenwashing'. Shareholder-profit view vs stakeholder view." },
      ],
    },
  },
  {
    file: "lesson-10-2.ts", exportName: "lesson102",
    lesson: {
      id: "ebz10-u10-lesson-10-2", code: "10-2",
      title: "Environmental Sustainability",
      goal: "I CAN explain environmental pressures on business and evaluate sustainable practices.",
      standards: ["Edexcel IGCSE Business 4BS0 — External Influences: environmental sustainability"],
      vocabulary: [
        { term: "Sustainability", definition: "Meeting present needs without compromising the ability of future generations to meet theirs." },
        { term: "Carbon footprint", definition: "Total greenhouse-gas emissions caused by an activity or product." },
        { term: "Circular economy", definition: "Economic system where waste is minimised by reusing, repairing and recycling materials." },
        { term: "Sustainable sourcing", definition: "Obtaining materials in ways that protect the environment and workers." },
        { term: "Renewable energy", definition: "Energy from sources that replenish naturally, e.g. solar and wind." },
        { term: "Eco-label", definition: "Certification mark showing a product meets environmental standards." },
      ],
      concepts: [
        {
          id: "ebz10-u10-env-issues",
          title: "Environmental Issues Facing Business",
          skill: "Identify environmental pressures and explain why they matter to businesses.",
          sections: [
            {
              heading: "Key environmental issues",
              body: "**Pollution**: air (emissions), water (effluent, plastic), noise and light pollution. **Resource depletion**: using finite raw materials faster than they can be replaced. **Climate change**: rising temperatures, extreme weather, sea-level rise driven by greenhouse gases. **Waste**: landfill growth, single-use plastics, electronic waste.",
            },
            {
              heading: "Why businesses should care",
              body: "**Legal**: governments impose environmental laws — fines and sanctions for breaches. **Reputational**: consumers and pressure groups punish polluters. **Cost**: waste and energy are expensive inputs; efficient resource use cuts costs. **Supply risk**: depleted resources and climate disruption threaten inputs. **Investor pressure**: funds increasingly avoid unsustainable firms.",
            },
            {
              heading: "External pressures on firms",
              body: "Businesses face a web of pressures: **government regulation** (emissions limits, waste rules, carbon pricing), **consumer demand** for greener products, **pressure groups** campaigning on pollution, **investor expectations** (ESG criteria), and **physical risks** such as floods damaging premises or droughts disrupting supply.",
            },
          ],
          keyFormulas: [
            { name: "Carbon footprint", statement: "Total greenhouse-gas emissions of an activity/product" },
            { name: "Sustainability", statement: "Meet present needs without harming future generations" },
          ],
          workedExample: {
            problem: "A factory's energy bill keeps rising and a campaign group protests its river pollution. Give two reasons the firm should act.",
            solution: "Rising energy costs hurt profits, and pollution risks fines, boycotts and reputational damage — both push the firm toward cleaner, more efficient operations.",
          },
          questions: [
            {
              id: "ebz10-u10-env-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is meant by sustainability?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Producing goods as cheaply as possible" },
                { id: "b", text: "Meeting present needs without compromising future generations' ability to meet theirs" },
                { id: "c", text: "Keeping a business profitable forever" },
                { id: "d", text: "Using only renewable materials" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Sustainability", statement: "Present needs met without harming future capacity." }],
                steps: [{ reasoning: "Sustainability = intergenerational balance of resource use.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Meet present needs without harming future generations",
                commonErrors: ["Confused with profitability or pure cost-cutting."],
              },
            },
            {
              id: "ebz10-u10-env-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three environmental issues that businesses contribute to.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Environmental issues", statement: "Pollution, resource depletion, climate change, waste." }],
                steps: [
                  { reasoning: "Pollution — air, water, noise from production.", marks: 1, markCode: "AO1" },
                  { reasoning: "Resource depletion — using finite materials unsustainably.", marks: 1, markCode: "AO1" },
                  { reasoning: "Waste/climate change — landfill, emissions, greenhouse gases.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Pollution, resource depletion, waste and climate-change contributions.",
                commonErrors: ["Only one type of pollution named."],
              },
            },
            {
              id: "ebz10-u10-env-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why a business might face rising costs from environmental pressures.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Environmental cost pressures", statement: "Regulation, energy prices, waste disposal and reputational risk raise costs." }],
                steps: [
                  { reasoning: "Environmental taxes and compliance costs increase.", marks: 1, markCode: "AO2" },
                  { reasoning: "Energy and raw-material prices rise as resources deplete.", marks: 1, markCode: "AO2" },
                  { reasoning: "Waste disposal and pollution-control costs grow.", marks: 1, markCode: "AO2" },
                  { reasoning: "Pollution incidents trigger fines and lost sales.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Taxes, resource prices, waste costs and fines all raise environmental costs.",
                commonErrors: ["Costs attributed only to fines."],
              },
            },
            {
              id: "ebz10-u10-env-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A government introduces a carbon tax on businesses based on emissions.",
              parts: [
                { label: "a", prompt: "Explain two ways the tax pressures businesses to change behaviour.", marks: 3 },
                { label: "b", prompt: "Explain one way the tax could harm a small business.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Carbon tax effects", statement: "Prices emissions → firms cut pollution or pay; small firms feel costs most." }],
                steps: [
                  { reasoning: "(a) High-emission firms pay more → incentive to cut emissions.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Encourages investment in cleaner technology and energy.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Rewards low-carbon firms with lower costs vs rivals.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Small firms lack funds to switch technology → higher costs squeeze margins.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) price signal, tech investment, rewards low-carbon (b) small firms can't afford transition",
                commonErrors: ["Only costs mentioned, no behavioural incentive."],
              },
            },
            {
              id: "ebz10-u10-env-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A clothing company faces protests over water pollution from its dyeing factories.",
              parts: [
                { label: "a", prompt: "Explain two external pressures the company faces.", marks: 3 },
                { label: "b", prompt: "Evaluate one benefit to the company of cleaning up its operations.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Environmental pressure response", statement: "Protests, regulation and reputation push firms toward sustainable operations." }],
                steps: [
                  { reasoning: "(a) Pressure groups campaign and consumers may boycott.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Government may impose fines or stricter pollution laws.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Investors may withdraw funds over ESG concerns.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Restores reputation and customer trust → protects sales.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Avoids future fines and secures licence to operate.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) protests/boycotts, regulation, investors (b) reputation recovery, legal security",
                commonErrors: ["Benefit not evaluated against costs."],
              },
            },
            {
              id: "ebz10-u10-env-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A food-processing firm wants to reduce its environmental impact.",
              parts: [
                { label: "a", prompt: "Define sustainability.", marks: 2 },
                { label: "b", prompt: "Define carbon footprint.", marks: 2 },
                { label: "c", prompt: "Explain two environmental issues relevant to the firm.", marks: 2 },
                { label: "d", prompt: "Explain two reasons the firm should reduce its impact.", marks: 2 },
                { label: "e", prompt: "Recommend and justify one action the firm could take.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Environmental action", statement: "Measure footprint, cut waste/emissions, gain reputation and cost savings." }],
                steps: [
                  { reasoning: "(a) Meet present needs without compromising future generations.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Total greenhouse-gas emissions caused by an activity or product.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Water/air pollution from processing; packaging waste.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Legal compliance and reputation; lower energy/waste costs.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) E.g. switch to renewable energy — cuts emissions and long-term costs.", marks: 2, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "Definitions; issues and reasons explained; justified environmental action.",
                commonErrors: ["Action not justified.", "Issues not linked to the firm."],
              },
            },
          ],
        },
        {
          id: "ebz10-u10-green",
          title: "Sustainable Business Practices",
          skill: "Describe and evaluate green business strategies such as recycling and circular economy.",
          sections: [
            {
              heading: "Resource and waste strategies",
              body: "**Sustainable sourcing**: choosing suppliers and materials that protect forests, fisheries and workers. **Energy efficiency**: LED lighting, efficient machinery, smart heating — cuts costs and emissions. **Waste reduction**: minimising packaging, reusing materials, recycling. The **circular economy** keeps products and materials in use — repair, remanufacture, recycle — instead of the 'take-make-dispose' model.",
            },
            {
              heading: "Green products and marketing",
              body: "Firms develop **eco-friendly products** (recyclable packaging, organic ingredients, energy-efficient goods) and win **eco-labels/certifications** that signal standards to consumers. **Green marketing** promotes environmental credentials — but claims must be genuine or the firm risks 'greenwashing' accusations and legal penalties for misleading advertising.",
            },
            {
              heading: "Costs and benefits of going green",
              body: "**Costs**: investment in new equipment, certification and sustainable materials; possible higher prices. **Benefits**: lower energy and waste-disposal costs over time; access to green markets and ethically-minded consumers; compliance with tightening regulation; improved reputation; reduced risk of fines and boycotts.",
            },
          ],
          keyFormulas: [
            { name: "Circular economy", statement: "Reuse, repair, recycle — minimise waste" },
            { name: "Eco-label", statement: "Certification of environmental standards" },
          ],
          workedExample: {
            problem: "A coffee shop switches to compostable cups and donates leftover food. Which sustainable strategies is it using?",
            solution: "Waste reduction (compostable packaging) and resource efficiency (donating surplus food instead of binning it) — part of a circular-economy approach.",
          },
          questions: [
            {
              id: "ebz10-u10-green-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is the circular economy?",
              response: { type: "mcq", choices: [
                { id: "a", text: "An economy based only on services" },
                { id: "b", text: "A system where materials are reused, repaired and recycled to minimise waste" },
                { id: "c", text: "A business owned by its workers" },
                { id: "d", text: "A market for second-hand goods only" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Circular economy", statement: "Reuse/repair/recycle to minimise waste." }],
                steps: [{ reasoning: "Circular economy keeps materials in use rather than discarding them.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Reuse, repair and recycle to minimise waste",
                commonErrors: ["Confused with recycling alone or sharing economy."],
              },
            },
            {
              id: "ebz10-u10-green-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three sustainable business practices.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Sustainable practices", statement: "Sourcing, efficiency, waste reduction, renewable energy, eco-labelling." }],
                steps: [
                  { reasoning: "Sustainable sourcing of materials.", marks: 1, markCode: "AO1" },
                  { reasoning: "Energy efficiency measures.", marks: 1, markCode: "AO1" },
                  { reasoning: "Waste reduction/recycling or renewable energy use.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Sustainable sourcing, energy efficiency, recycling/waste reduction, renewables.",
                commonErrors: ["CSR donations listed — practices must be operational."],
              },
            },
            {
              id: "ebz10-u10-green-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how energy efficiency benefits both a business and the environment.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Energy efficiency", statement: "Lower costs for the firm; lower emissions for the environment." }],
                steps: [
                  { reasoning: "Efficient equipment uses less energy per unit of output.", marks: 1, markCode: "AO2" },
                  { reasoning: "Business benefit: lower fuel/electricity bills → higher profit.", marks: 1, markCode: "AO2" },
                  { reasoning: "Environmental benefit: reduced fossil-fuel use → lower emissions.", marks: 1, markCode: "AO2" },
                  { reasoning: "Helps meet regulation and green credentials.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Cuts costs for the firm and emissions for the environment — a win-win.",
                commonErrors: ["Only one side of the benefit explained."],
              },
            },
            {
              id: "ebz10-u10-green-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A supermarket switches to 100% recyclable packaging but raises prices by 3%.",
              parts: [
                { label: "a", prompt: "Explain two environmental benefits of the change.", marks: 3 },
                { label: "b", prompt: "Explain one risk for the supermarket.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Green packaging trade-off", statement: "Less landfill vs higher shelf prices and possible demand loss." }],
                steps: [
                  { reasoning: "(a) Less packaging waste sent to landfill.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Materials re-enter use via recycling — circular economy gain.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Lower resource depletion and pollution from production.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Higher prices may reduce demand and sales.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) less waste, material reuse, less pollution (b) price rise may cut demand",
                commonErrors: ["Only environmental side covered."],
              },
            },
            {
              id: "ebz10-u10-green-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A smartphone maker claims its new model is 'the greenest phone ever' but provides no evidence.",
              parts: [
                { label: "a", prompt: "Explain two ways the claim could be genuine CSR/green marketing.", marks: 3 },
                { label: "b", prompt: "Evaluate the risk if the claim is challenged.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Green marketing risk", statement: "Unsubstantiated claims invite greenwashing accusations." }],
                steps: [
                  { reasoning: "(a) Uses recycled materials / renewable-energy manufacturing.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Designed for repairability and recycling.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Backed by eco-certification.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) If unproven, accused of greenwashing → reputational damage.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Possible fines for misleading advertising and lost sales.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) recycled materials, repairable design, certification (b) greenwashing risk — fines and lost trust",
                commonErrors: ["Claim accepted at face value."],
              },
            },
            {
              id: "ebz10-u10-green-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A furniture company wants to become more sustainable.",
              parts: [
                { label: "a", prompt: "Define sustainable sourcing.", marks: 2 },
                { label: "b", prompt: "Define the circular economy.", marks: 2 },
                { label: "c", prompt: "Explain two ways the company could reduce its environmental impact.", marks: 2 },
                { label: "d", prompt: "Explain two benefits of going green for the business.", marks: 2 },
                { label: "e", prompt: "Recommend and justify one sustainable practice for the company.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Sustainable strategy", statement: "Source responsibly, cut waste, gain efficiency and market appeal." }],
                steps: [
                  { reasoning: "(a) Obtaining materials in ways protecting environment and workers.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Reuse/repair/recycle materials to minimise waste.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Certified sustainable timber; energy-efficient production; take-back/recycling scheme.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Lower energy/waste costs and appeal to green consumers.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) E.g. FSC-certified wood — protects forests and attracts eco-buyers.", marks: 2, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "Definitions; impact reductions and benefits explained; justified practice.",
                commonErrors: ["Practice not justified.", "Definitions missing."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz10-u10-102-notes", title: "Environmental sustainability — notes",
      summary: "Pollution, resource depletion and climate change pressure firms via law, cost and reputation. Green practices cut costs and win eco-markets — but greenwashing risks backlash.",
      sections: [
        { heading: "Pressures", body: "Carbon taxes, emissions rules, consumer demand, pressure groups, investor ESG criteria, physical climate risks." },
        { heading: "Green practices", body: "Sustainable sourcing, energy efficiency, waste reduction, circular economy, eco-labels, green marketing." },
        { heading: "Trade-off", body: "Upfront investment vs long-term savings, compliance and market appeal; claims must be genuine." },
      ],
    },
  },
  {
    file: "lesson-10-3.ts", exportName: "lesson103",
    lesson: {
      id: "ebz10-u10-lesson-10-3", code: "10-3",
      title: "Pressure Groups, Law and Government Influence",
      goal: "I CAN explain how pressure groups, laws and government policy influence business decisions.",
      standards: ["Edexcel IGCSE Business 4BS0 — External Influences: legal and political factors"],
      vocabulary: [
        { term: "Pressure group", definition: "An organised group campaigning to influence business or government decisions." },
        { term: "Lobbying", definition: "Trying to influence government or decision-makers directly." },
        { term: "Legislation", definition: "Laws made by government that businesses must follow." },
        { term: "Regulation", definition: "Rules controlling how businesses operate in an industry." },
        { term: "Government policy", definition: "Official plans and actions, e.g. taxes, grants, spending." },
      ],
      concepts: [
        {
          id: "ebz10-u10-pressure",
          title: "Pressure Groups and Stakeholder Power",
          skill: "Describe pressure groups and explain how they influence business behaviour.",
          sections: [
            {
              heading: "What are pressure groups?",
              body: "A **pressure group** is an organised group that campaigns to influence decisions — e.g. environmental groups, consumer watchdogs, trade unions, industry bodies. They are not elected governments but use their collective voice to push for change. **Lobbying** is the direct attempt to influence politicians or officials.",
            },
            {
              heading: "Types and methods",
              body: "**Consumer groups** (e.g. Which?) campaign on prices and safety. **Environmental groups** protest pollution and push green laws. **Trade unions** negotiate wages and conditions. **Industry bodies** lobby for favourable rules. Methods include protests and boycotts, media campaigns, petitions, lobbying MPs, legal challenges and research reports.",
            },
            {
              heading: "How pressure groups influence business",
              body: "They can force **legislation** (campaigning for new laws), trigger **boycotts** and lost sales, damage **reputation**, influence **investor decisions**, and push firms to adopt voluntary codes. Businesses may respond by consulting groups, changing practices, or lobbying government themselves to shape favourable rules.",
            },
          ],
          keyFormulas: [
            { name: "Pressure group", statement: "Organised campaign group influencing decisions" },
            { name: "Lobbying", statement: "Direct influence on decision-makers" },
          ],
          workedExample: {
            problem: "An environmental group organises a boycott of a polluting manufacturer. How might this force change?",
            solution: "The boycott cuts sales and revenue, damages reputation and may push the firm to clean up — or lobby government for stricter rules.",
          },
          questions: [
            {
              id: "ebz10-u10-pg-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a pressure group?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A government department" },
                { id: "b", text: "An organised group campaigning to influence decisions" },
                { id: "c", text: "A type of business organisation" },
                { id: "d", text: "A stock market index" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Pressure group", statement: "Organised campaign group influencing decisions." }],
                steps: [{ reasoning: "Pressure groups campaign; they are not governments or businesses.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Organised campaigning group",
                commonErrors: ["Confused with government or a firm."],
              },
            },
            {
              id: "ebz10-u10-pg-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three methods pressure groups use to influence business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Pressure-group methods", statement: "Protests, boycotts, media, lobbying, legal challenges." }],
                steps: [
                  { reasoning: "Protests, demonstrations and boycotts.", marks: 1, markCode: "AO1" },
                  { reasoning: "Media campaigns and public petitions.", marks: 1, markCode: "AO1" },
                  { reasoning: "Lobbying politicians or legal challenges.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Protests/boycotts, media campaigns, lobbying, legal action.",
                commonErrors: ["Only one method.", "Methods of businesses listed instead."],
              },
            },
            {
              id: "ebz10-u10-pg-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how a consumer pressure group could influence a supermarket's behaviour.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Pressure group influence", statement: "Boycotts, campaigns and lobbying change business behaviour." }],
                steps: [
                  { reasoning: "Group campaigns on an issue, e.g. misleading prices.", marks: 1, markCode: "AO2" },
                  { reasoning: "Media coverage damages the supermarket's reputation.", marks: 1, markCode: "AO2" },
                  { reasoning: "Customers may boycott → lost sales and revenue.", marks: 1, markCode: "AO2" },
                  { reasoning: "Group may lobby for new laws the supermarket must follow.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Campaigns damage reputation, boycotts cut sales, lobbying creates binding rules.",
                commonErrors: ["No mechanism linking group to business change."],
              },
            },
            {
              id: "ebz10-u10-pg-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A fast-fashion brand is targeted by a campaign group over factory conditions.",
              parts: [
                { label: "a", prompt: "Explain two ways the campaign could harm the brand.", marks: 3 },
                { label: "b", prompt: "Explain one way the brand could respond constructively.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Campaign impact and response", statement: "Boycotts and reputation damage vs engagement and reform." }],
                steps: [
                  { reasoning: "(a) Consumers boycott → falling sales.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Media exposure damages brand image and investor confidence.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Group may lobby for stricter labour laws.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Engage the group, audit factories and publish improvements.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) boycotts, reputation/investor damage, new laws (b) engage, audit, reform",
                commonErrors: ["Response ignores the campaign's concerns."],
              },
            },
            {
              id: "ebz10-u10-pg-q5", difficulty: "challenge", totalMarks: 6,
              stem: "An industry association wants to lobby the government for a subsidy for its members.",
              parts: [
                { label: "a", prompt: "Define lobbying.", marks: 2 },
                { label: "b", prompt: "Explain two arguments the association might use.", marks: 2 },
                { label: "c", prompt: "Evaluate one risk of relying on lobbying.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Lobbying", statement: "Direct influence on decision-makers; may be seen as unfair advantage." }],
                steps: [
                  { reasoning: "(a) Trying to influence government/decision-makers directly.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Subsidy protects jobs and competes with foreign rivals.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Industry is strategically important / facing unfair competition.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Lobbying may be seen as buying influence — public backlash or accusations of unfairness.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) direct influence attempt (b) jobs/competition arguments (c) perceived unfairness/backlash",
                commonErrors: ["Lobbying confused with bribery or campaigning."],
              },
            },
            {
              id: "ebz10-u10-pg-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A major retailer faces criticism from several pressure groups over plastic packaging.",
              parts: [
                { label: "a", prompt: "Define a pressure group.", marks: 2 },
                { label: "b", prompt: "Name two types of pressure group that might campaign on this issue.", marks: 2 },
                { label: "c", prompt: "Explain two ways the groups could influence the retailer.", marks: 2 },
                { label: "d", prompt: "Explain two ways the retailer could respond.", marks: 2 },
                { label: "e", prompt: "Evaluate whether the retailer should change its packaging.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Stakeholder pressure", statement: "Groups use boycotts, media and lobbying; firms respond by reforming or resisting." }],
                steps: [
                  { reasoning: "(a) Organised group campaigning to influence decisions.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Environmental groups and consumer watchdogs.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Boycotts/media damage reputation; lobby for packaging laws.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Switch to recyclable packaging; engage groups in dialogue.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) Balanced judgement — costs vs reputation/regulatory risk.", marks: 2, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "Definition; group types; influence and responses explained; justified evaluation.",
                commonErrors: ["No evaluation.", "Types of group not named."],
              },
            },
          ],
        },
        {
          id: "ebz10-u10-govt",
          title: "Legal and Political Influences on Business",
          skill: "Explain how laws and government policies affect business decisions and costs.",
          sections: [
            {
              heading: "Laws affecting business",
              body: "Governments pass **legislation** that businesses must obey: **consumer protection** (accurate labelling, refunds), **employment law** (minimum wage, contracts, discrimination rules), **health and safety** (safe workplaces), **competition law** (banning cartels and monopolies), and **environmental law** (emissions and waste limits). **Regulation** covers industry-specific rules — e.g. food-safety standards, financial conduct.",
            },
            {
              heading: "Government policies",
              body: "**Fiscal policy**: taxation and government spending — business taxes, VAT, corporation tax. **Monetary policy**: interest rates set by central banks affect borrowing costs. **Industrial policy**: grants, subsidies and support for chosen sectors. **Trade policy**: tariffs, quotas and trade agreements. Political stability and government priorities shape the whole business environment.",
            },
            {
              heading: "How businesses respond",
              body: "Firms must **comply** with law — appoint compliance staff, follow procedures, face fines for breaches. They may **lobby** government for favourable rules, relocate to lower-regulation countries, or pass costs to consumers via prices. Political change (new government, policy shift) can create opportunities or threats almost overnight.",
            },
          ],
          keyFormulas: [
            { name: "Legislation", statement: "Laws businesses must obey" },
            { name: "Fiscal policy", statement: "Government taxation and spending decisions" },
            { name: "Monetary policy", statement: "Interest rates and money supply controlled by central bank" },
          ],
          workedExample: {
            problem: "A government raises corporation tax from 19% to 25%. What must a profitable firm do?",
            solution: "Its tax bill rises; it may cut costs, raise prices, invest less, or lobby against the policy — compliance is compulsory.",
          },
          questions: [
            {
              id: "ebz10-u10-govt-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is legislation?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A voluntary business code" },
                { id: "b", text: "Laws made by government that businesses must follow" },
                { id: "c", text: "A type of pressure-group campaign" },
                { id: "d", text: "An internal company policy" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Legislation", statement: "Government-made laws binding on business." }],
                steps: [{ reasoning: "Legislation = binding law; codes of conduct are voluntary.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Laws made by government",
                commonErrors: ["Confused with voluntary codes or regulation alone."],
              },
            },
            {
              id: "ebz10-u10-govt-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three areas of law that affect how businesses operate.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Business law areas", statement: "Consumer, employment, health & safety, competition, environmental." }],
                steps: [
                  { reasoning: "Consumer protection law (labelling, refunds).", marks: 1, markCode: "AO1" },
                  { reasoning: "Employment law (wages, contracts, discrimination).", marks: 1, markCode: "AO1" },
                  { reasoning: "Health & safety or competition/environmental law.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Consumer, employment, health & safety, competition or environmental law.",
                commonErrors: ["Only one area named."],
              },
            },
            {
              id: "ebz10-u10-govt-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how a rise in interest rates might affect a business that borrows to expand.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Interest-rate effects", statement: "Higher rates raise borrowing costs and slow investment." }],
                steps: [
                  { reasoning: "Interest rates are set by monetary policy.", marks: 1, markCode: "AO2" },
                  { reasoning: "Borrowing costs rise — loans and overdrafts dearer.", marks: 1, markCode: "AO2" },
                  { reasoning: "Expansion plans may be postponed or scaled back.", marks: 1, markCode: "AO2" },
                  { reasoning: "Consumers also borrow less → demand may fall.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Higher borrowing costs slow expansion; weaker consumer demand compounds the effect.",
                commonErrors: ["Effect on savers given instead of borrowers."],
              },
            },
            {
              id: "ebz10-u10-govt-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A government introduces a new law requiring all food businesses to display allergen information.",
              parts: [
                { label: "a", prompt: "Explain two ways the law affects food businesses.", marks: 3 },
                { label: "b", prompt: "Explain one cost the businesses face.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Legislative impact", statement: "Compliance is compulsory; costs and behaviour change." }],
                steps: [
                  { reasoning: "(a) Must redesign menus/packaging to show allergens.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Must train staff on allergen handling.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Non-compliance risks fines/prosecution.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Printing, training and admin costs reduce profit.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) redesign, training, legal risk (b) compliance costs",
                commonErrors: ["Only costs mentioned, no behavioural requirement."],
              },
            },
            {
              id: "ebz10-u10-govt-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A government offers grants to companies building solar farms but keeps corporation tax unchanged.",
              parts: [
                { label: "a", prompt: "Explain how the grant policy might change business behaviour.", marks: 3 },
                { label: "b", prompt: "Evaluate whether the grant is an effective policy tool.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Industrial policy", statement: "Grants steer investment toward chosen sectors." }],
                steps: [
                  { reasoning: "(a) Firms redirect investment toward solar to capture grants.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) More solar capacity → lower energy costs and emissions.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Other sectors may lose investment to subsidised solar.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Effective if it crowds in green investment; wasteful if firms would have invested anyway.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Costs taxpayers money that could fund other priorities.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) steers investment to solar, cuts emissions (b) effective if additional investment, costly otherwise",
                commonErrors: ["Only benefits assumed — no evaluation."],
              },
            },
            {
              id: "ebz10-u10-govt-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A new government raises minimum wage and tightens environmental rules.",
              parts: [
                { label: "a", prompt: "Define legislation.", marks: 2 },
                { label: "b", prompt: "Name two other laws that commonly affect businesses.", marks: 2 },
                { label: "c", prompt: "Explain two effects of the higher minimum wage on a low-margin retailer.", marks: 2 },
                { label: "d", prompt: "Explain two effects of tighter environmental rules on a manufacturer.", marks: 2 },
                { label: "e", prompt: "Evaluate whether the policies are likely to harm or help the economy overall.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Policy impact evaluation", statement: "Costs rise for firms; workers and environment gain; net effect depends on structure." }],
                steps: [
                  { reasoning: "(a) Laws made by government that businesses must follow.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Consumer protection and employment/health & safety law.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Wage costs rise → prices up or jobs cut; low-margin firms squeezed.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Compliance investment needed; fines risk falls; may pass costs to consumers.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) Balanced judgement — protects workers/environment but raises costs and may reduce competitiveness.", marks: 2, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "Definitions; policy effects on retailer and manufacturer explained; justified overall judgement.",
                commonErrors: ["One-sided evaluation.", "Effects not linked to the scenario."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz10-u10-103-notes", title: "Pressure groups, law and government — notes",
      summary: "Pressure groups campaign via boycotts, media and lobbying. Government law and policy (tax, grants, interest rates) are binding — firms must comply or lobby/relocate.",
      sections: [
        { heading: "Pressure groups", body: "Consumer, environmental, union and industry groups use protests, boycotts, media, lobbying and legal action to change business behaviour." },
        { heading: "Law", body: "Consumer protection, employment, health & safety, competition and environmental laws are binding; breaches bring fines." },
        { heading: "Policy", body: "Fiscal (tax/spending), monetary (interest rates) and industrial (grants/subsidies) policies shape costs and investment." },
      ],
    },
  },
];
