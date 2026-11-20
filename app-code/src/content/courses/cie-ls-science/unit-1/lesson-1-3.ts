import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cils-u1-lesson-1-3",
  code: "1-3",
  title: "Safety and scientific communication",
  goal: "I CAN follow safety rules in the lab and communicate findings clearly.",
  standards: ["0893 Working scientifically: safety and communication"],
  vocabulary: [
    { term: "Hazard", definition: "Something that could cause harm — e.g. hot surfaces, chemicals." },
    { term: "Risk", definition: "Likelihood of harm from a hazard — managed by safety measures." },
    { term: "Safety rule", definition: "Procedure reducing risk, e.g. goggles, no running, point away from people." },
    { term: "Conclusion", definition: "Answer to the original question based on evidence." },
    { term: "Evaluation", definition: "Judgement of method quality — limitations, improvements." },
    { term: "Scientific report", definition: "Structured write-up: aim, method, results, conclusion, evaluation." },
  ],
  concepts: [
    {
      id: "cils-u1-safety",
      title: "Laboratory safety",
      skill: "Identify hazards, apply safety rules, and respond to accidents.",
      lesson: {
        sections: [
          {
            heading: "Common hazards",
            body: "- **Heat**: burns from flames, hot apparatus\n- **Chemicals**: irritants, corrosives, flammables\n- **Glass**: cuts, breakage\n- **Electrical**: shocks from damaged leads\n- **Biological**: microbes in cultures",
          },
          {
            heading: "Safety rules",
            body: "Goggles on when chemicals involved; tie hair back; no eating/drinking; point test tubes away; know fire extinguisher and first aid locations; report spills immediately.",
          },
          {
            heading: "Responding to accidents",
            body: "Minor cut: tell teacher, apply plaster. Chemical splash: flood with water 10 min. Fire: use extinguisher only if trained; otherwise evacuate.",
          },
        ],
        keyFormulas: [
          { name: "Safety", statement: "Hazard × exposure = risk; reduce exposure to reduce risk." },
        ],
        workedExample: {
          problem: "Why must you never point a heated test tube at yourself or others?",
          solution: "Heating can cause liquid to boil and spit — pointed away, spitting goes to the bench, not faces.",
        },
      },
      questions: [
        {
          id: "cils-u1-safety-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a hazard in a chemistry lab?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Corrosive chemicals" },
              { id: "b", text: "Wearing goggles" },
              { id: "c", text: "Using a clipboard" },
              { id: "d", text: "Lab coats" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hazard", statement: "Anything that could cause harm." },
            ],
            steps: [
              { reasoning: "Corrosive chemicals can burn skin — a hazard. Others are safety measures.", working: "hazard", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Corrosive chemicals",
            commonErrors: ["Choosing safety equipment — those reduce risk, aren't hazards."],
          },
        },
        {
          id: "cils-u1-safety-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between a hazard and a risk.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hazard vs risk", statement: "Hazard = source of harm; risk = chance of harm occurring." },
            ],
            steps: [
              { reasoning: "Hazard: the dangerous thing itself (e.g. acid).", working: "source", marks: 1, markCode: "M" },
              { reasoning: "Risk: likelihood/severity of harm from exposure to it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hazard is the source of potential harm; risk is the chance that harm will actually occur.",
            commonErrors: ["Using them interchangeably."],
          },
        },
        {
          id: "cils-u1-safety-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student wants to heat a liquid in a test tube. List three safety precautions and explain why each matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Safety application", statement: "Point away, don't seal, wear goggles, use clamp." },
            ],
            steps: [
              { reasoning: "Point away from people — boiling liquid can spit.", working: "point away", marks: 1, markCode: "M" },
              { reasoning: "Don't seal tube — pressure builds, could explode.", working: "don't seal", marks: 1, markCode: "M" },
              { reasoning: "Wear goggles + hold with clamp — protection from splashes/heat.", working: "goggles+clamp", marks: 1, markCode: "M" },
              { reasoning: "Three valid precautions with reasons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Point away, keep open, wear goggles, use clamp — prevents spitting, explosion, burns.",
            commonErrors: ["Listing rules without reasons — explanation required."],
          },
        },
        {
          id: "cils-u1-safety-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write a safety section for a practical on testing which materials conduct electricity.",
          parts: [
            { label: "a", prompt: "Identify two hazards in this practical.", marks: 2 },
            { label: "b", prompt: "Give a safety precaution for each hazard.", marks: 2 },
            { label: "c", prompt: "Explain what to do if a wire becomes hot during testing.", marks: 2 },
            { label: "d", prompt: "Why is it important to unplug equipment after the test?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Safety planning", statement: "Identify hazards → precautions → emergency response → good practice." },
            ],
            steps: [
              { part: "a", reasoning: "Hazards: electric shock, overheating wires, broken glass/metal edges.", working: "hazards", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two valid.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Shock: don't touch bare wires; heat: switch off immediately; sharp edges: handle carefully.", working: "precautions", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Matched pairs.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Switch off immediately, tell teacher, let cool before touching.", working: "switch off", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct response.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Prevents overheating, saves battery, avoids electric shock risk, good practice.", working: "reasons", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiple reasons.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) shock + overheating (b) precautions matched (c) switch off, report (d) prevents accidents, saves power",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Hazards identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Precautions matched.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Mismatched.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Response correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Reasons clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Generic safety statements not specific to the practical."],
          },
        },
      ],
    },
    {
      id: "cils-u1-communicate",
      title: "Scientific communication",
      skill: "Write clear conclusions and evaluations from experimental data.",
      lesson: {
        sections: [
          {
            heading: "Conclusion vs evaluation",
            body: "- **Conclusion**: answers the question using evidence ('salt does speed up dissolving')\n- **Evaluation**: judges the method ('results reliable but only tested at one temperature')",
          },
          {
            heading: "Good conclusions",
            body: "Reference specific data: 'dissolving time decreased from 60 s at 20°C to 25 s at 60°C, showing temperature increases dissolving rate.'",
          },
          {
            heading: "Good evaluations",
            body: "Identify limitations (one temperature range, human reaction time) and improvements (more repeats, better equipment).",
          },
        ],
        keyFormulas: [
          { name: "Conclusion", statement: "Must answer the aim using evidence — not just describe results." },
        ],
        workedExample: {
          problem: "Aim: test if fertiliser affects growth. Results: fertilised plants 15 cm, unfertilised 9 cm. Write a conclusion.",
          solution: "'Fertilised plants grew 6 cm taller (67% more), suggesting fertiliser increases growth — supports the hypothesis.'",
        },
      },
      questions: [
        {
          id: "cils-u1-comm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a conclusion do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Answer the original question using evidence" },
              { id: "b", text: "List all raw data again" },
              { id: "c", text: "Describe the apparatus" },
              { id: "d", text: "Suggest new experiments" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conclusion", statement: "Answers aim using evidence." },
            ],
            steps: [
              { reasoning: "Conclusion links results back to the original question.", working: "answer aim", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Answer the original question using evidence",
            commonErrors: ["Just restating results — must interpret them."],
          },
        },
        {
          id: "cils-u1-comm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between a conclusion and an evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conclusion vs evaluation", statement: "Conclusion = what results show; evaluation = quality of method." },
            ],
            steps: [
              { reasoning: "Conclusion interprets results relative to the aim.", working: "interpret", marks: 1, markCode: "M" },
              { reasoning: "Evaluation judges reliability, limitations, improvements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conclusion answers the question from evidence; evaluation judges how good the method was.",
            commonErrors: ["Mixing them — evaluation isn't part of conclusion."],
          },
        },
        {
          id: "cils-u1-comm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Results: with fertiliser heights 15, 14, 16 cm; without: 9, 10, 9 cm. Write a conclusion and one evaluation point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reporting", statement: "Conclusion cites means/data; evaluation notes limitations." },
            ],
            steps: [
              { reasoning: "Conclusion: fertilised mean ~15 cm vs unfertilised ~9.3 cm — fertiliser increases growth.", working: "15 vs 9.3", marks: 1, markCode: "M" },
              { reasoning: "Uses data evidence.", marks: 1, markCode: "M" },
              { reasoning: "Evaluation: only 3 plants, one fertiliser type, short duration.", working: "limitations", marks: 1, markCode: "M" },
              { reasoning: "Valid evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conclusion: fertiliser increased growth by ~6 cm. Evaluation: small sample, single conditions.",
            commonErrors: ["Conclusion without data reference — vague statements score less."],
          },
        },
        {
          id: "cils-u1-comm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Aim: Does surface area affect evaporation rate?",
          parts: [
            { label: "a", prompt: "State what a good conclusion must include.", marks: 2 },
            { label: "b", prompt: "Write a model conclusion using hypothetical data.", marks: 3 },
            { label: "c", prompt: "Give two limitations of a typical evaporation experiment.", marks: 2 },
            { label: "d", prompt: "Suggest one improvement for each limitation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scientific writing", statement: "Conclusion = evidence-based answer; evaluation = limitations + improvements." },
            ],
            steps: [
              { part: "a", reasoning: "Must reference data and answer the aim directly.", working: "evidence+answer", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "E.g. 'Water lost increased from 5 ml (small dish) to 18 ml (large dish), showing larger surface area increases evaporation.'", working: "model conclusion", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Data cited.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Answers aim.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Limitations: temperature variation, air currents, measurement precision.", working: "limitations", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two valid.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Improvements: control temperature, use wind shield, repeat trials.", working: "improvements", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Matched improvements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) evidence + direct answer (b) data-cited conclusion (c) temp/air currents (d) control temp, shield, repeats",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Requirements stated.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Conclusion strong.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Limitations valid.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Improvements matched.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Mismatched.", part: "d" },
            ],
            commonErrors: ["Evaluation repeating conclusion instead of judging method."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u1-safety-comm-notes",
      title: "Safety and communication — revision notes",
      summary: "Lab hazards and rules, conclusions vs evaluations.",
      sections: [
        {
          heading: "Safety",
          body: "Hazard = source of harm; risk = chance of harm. Know rules: goggles, point away, don't seal heated tubes, report spills. Respond calmly, tell teacher.",
        },
        {
          heading: "Communication",
          body: "Conclusion answers aim with data. Evaluation judges method — limitations and improvements. Never just describe results.",
        },
      ],
    },
  ],
};
