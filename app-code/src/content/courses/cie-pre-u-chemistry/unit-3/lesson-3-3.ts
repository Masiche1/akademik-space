import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cipuc-u3-lesson-3-3",
  code: "3-3",
  title: "Energetics, kinetics and equilibria",
  goal: "I CAN explain energy changes, reaction rates, and equilibrium.",
  standards: [
    "Cambridge Pre-U Chemistry 9791",
    "Paper 1: Energetics, kinetics, equilibria",
  ],
  vocabulary: [
    {
      term: "Exothermic",
      definition: "Releases energy — ΔH negative.",
    },
    {
      term: "Endothermic",
      definition: "Absorbs energy — ΔH positive.",
    },
    {
      term: "Enthalpy change (ΔH)",
      definition: "Heat change at constant pressure.",
    },
    {
      term: "Activation energy",
      definition: "Minimum energy to start reaction.",
    },
    {
      term: "Catalyst",
      definition: "Speeds up reaction without being consumed.",
    },
    {
      term: "Rate of reaction",
      definition: "How fast reactants convert to products.",
    },
    {
      term: "Collision theory",
      definition: "Reactions occur when particles collide with energy.",
    },
    {
      term: "Equilibrium",
      definition: "Forward and reverse rates equal.",
    },
    {
      term: "Le Chatelier's principle",
      definition: "System shifts to oppose change.",
    },
    {
      term: "Equilibrium constant (Kc)",
      definition: "Ratio of products to reactants at equilibrium.",
    },
    {
      term: "Dynamic equilibrium",
      definition: "Reactions continue but rates equal.",
    },
    {
      term: "Hess's law",
      definition: "Enthalpy change independent of route.",
    },
  ],
  concepts: [
    {
      id: "cipuc-u3-energy",
      title: "Energetics and thermochemistry",
      skill:
        "Explain exothermic/endothermic reactions, enthalpy, Hess's law, and bond energies.",
      lesson: {
        sections: [
          {
            heading: "Energy changes",
            body: "**Exothermic**: releases energy — ΔH < 0 — products lower energy than reactants. **Endothermic**: absorbs energy — ΔH > 0 — products higher energy. **Enthalpy change (ΔH)**: heat at constant pressure. **Examples**: combustion (exothermic), photosynthesis (endothermic), neutralisation (exothermic).",
          },
          {
            heading: "Activation energy and catalysis",
            body: "**Activation energy (Ea)**: minimum energy for reaction — barrier to overcome. **Catalyst**: provides alternative pathway with lower Ea — speeds up reaction without being consumed. **Enzyme**: biological catalyst. **Heterogeneous**: different phase; **homogeneous**: same phase.",
          },
          {
            heading: "Hess's law and bond energies",
            body: "**Hess's law**: ΔH depends only on initial/final states — not path. Allows calculation of ΔH from multiple steps. **Bond energies**: energy to break/form bonds. ΔH = bonds broken - bonds formed. Exothermic: more energy released forming bonds than breaking.",
          },
        ],
        keyFormulas: [
          {
            name: "Exothermic",
            statement: "ΔH < 0 — releases energy",
          },
          {
            name: "Endothermic",
            statement: "ΔH > 0 — absorbs energy",
          },
          {
            name: "Hess's law",
            statement: "ΔH independent of route",
          },
          {
            name: "Bond energies",
            statement: "ΔH = broken - formed",
          },
        ],
        workedExample: {
          problem: "Is combustion exothermic or endothermic?",
          solution: "Exothermic — releases heat, ΔH < 0.",
        },
      },
      questions: [
        {
          id: "cipuc-u3-en-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An exothermic reaction:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Releases energy — ΔH < 0" },
              { id: "b", text: "Absorbs energy" },
              { id: "c", text: "No energy change" },
              { id: "d", text: "ΔH = 0" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exothermic",
                statement: "Releases energy.",
              },
            ],
            steps: [
              { reasoning: "Exothermic = releases.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Releases energy.",
          },
        },
        {
          id: "cipuc-u3-en-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An endothermic reaction:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absorbs energy — ΔH > 0" },
              { id: "b", text: "Releases energy" },
              { id: "c", text: "No energy change" },
              { id: "d", text: "ΔH = 0" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Endothermic",
                statement: "Absorbs energy.",
              },
            ],
            steps: [
              { reasoning: "Endothermic = absorbs.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Absorbs energy.",
          },
        },
        {
          id: "cipuc-u3-en-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Enthalpy change (ΔH) is measured at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Constant pressure" },
              { id: "b", text: "Constant volume" },
              { id: "c", text: "Constant temperature" },
              { id: "d", text: "Any condition" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enthalpy",
                statement: "Constant pressure.",
              },
            ],
            steps: [
              { reasoning: "ΔH = constant pressure.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Constant pressure.",
          },
        },
        {
          id: "cipuc-u3-en-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Activation energy is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Minimum energy to start reaction" },
              { id: "b", text: "Energy released" },
              { id: "c", text: "Total energy" },
              { id: "d", text: "No energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Activation energy",
                statement: "Minimum to start.",
              },
            ],
            steps: [
              { reasoning: "Ea = minimum energy.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Minimum energy to start.",
          },
        },
        {
          id: "cipuc-u3-en-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A catalyst:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speeds up reaction without being consumed" },
              { id: "b", text: "Is consumed" },
              { id: "c", text: "Slows reaction" },
              { id: "d", text: "No effect" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Catalyst",
                statement: "Speeds up, not consumed.",
              },
            ],
            steps: [
              { reasoning: "Catalyst = speeds up.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Speeds up, not consumed.",
          },
        },
        {
          id: "cipuc-u3-en-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Combustion is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exothermic" },
              { id: "b", text: "Endothermic" },
              { id: "c", text: "Neither" },
              { id: "d", text: "Both" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Combustion",
                statement: "Exothermic.",
              },
            ],
            steps: [
              {
                reasoning: "Combustion = exothermic.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Exothermic.",
          },
        },
        {
          id: "cipuc-u3-en-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Photosynthesis is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Endothermic" },
              { id: "b", text: "Exothermic" },
              { id: "c", text: "Neither" },
              { id: "d", text: "Both" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photosynthesis",
                statement: "Endothermic.",
              },
            ],
            steps: [
              {
                reasoning: "Photosynthesis = endothermic.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Endothermic.",
          },
        },
        {
          id: "cipuc-u3-en-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Neutralisation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exothermic" },
              { id: "b", text: "Endothermic" },
              { id: "c", text: "Neither" },
              { id: "d", text: "Both" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Neutralisation",
                statement: "Exothermic.",
              },
            ],
            steps: [
              {
                reasoning: "Neutralisation = exothermic.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Exothermic.",
          },
        },
        {
          id: "cipuc-u3-en-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hess's law states:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ΔH independent of reaction route" },
              { id: "b", text: "ΔH depends on route" },
              { id: "c", text: "No ΔH" },
              { id: "d", text: "ΔH = 0 always" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hess's law",
                statement: "Route independent.",
              },
            ],
            steps: [
              {
                reasoning: "Hess = route independent.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Route independent.",
          },
        },
        {
          id: "cipuc-u3-en-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bond energy is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy to break a bond" },
              { id: "b", text: "Energy released forming bond" },
              { id: "c", text: "No energy" },
              { id: "d", text: "Total energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bond energy",
                statement: "Energy to break.",
              },
            ],
            steps: [
              {
                reasoning: "Bond energy = break energy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Energy to break bond.",
          },
        },
        {
          id: "cipuc-u3-en-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "For exothermic reaction, products have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower energy than reactants" },
              { id: "b", text: "Higher energy" },
              { id: "c", text: "Same energy" },
              { id: "d", text: "No energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exothermic energy",
                statement: "Products lower.",
              },
            ],
            steps: [
              {
                reasoning: "Exothermic = products lower.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Lower energy.",
          },
        },
        {
          id: "cipuc-u3-en-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "For endothermic reaction, products have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher energy than reactants" },
              { id: "b", text: "Lower energy" },
              { id: "c", text: "Same energy" },
              { id: "d", text: "No energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Endothermic energy",
                statement: "Products higher.",
              },
            ],
            steps: [
              {
                reasoning: "Endothermic = products higher.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Higher energy.",
          },
        },
        {
          id: "cipuc-u3-en-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A catalyst works by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Providing alternative pathway with lower Ea" },
              { id: "b", text: "Increasing temperature" },
              { id: "c", text: "Changing ΔH" },
              { id: "d", text: "Adding energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalyst mechanism",
                statement: "Lower Ea pathway.",
              },
            ],
            steps: [
              { reasoning: "Catalyst = lower Ea.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Lower Ea pathway.",
          },
        },
        {
          id: "cipuc-u3-en-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "An enzyme is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Biological catalyst" },
              { id: "b", text: "Chemical catalyst" },
              { id: "c", text: "Reactant" },
              { id: "d", text: "Product" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enzyme",
                statement: "Biological catalyst.",
              },
            ],
            steps: [
              { reasoning: "Enzyme = bio catalyst.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Biological catalyst.",
          },
        },
        {
          id: "cipuc-u3-en-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A heterogeneous catalyst is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different phase from reactants" },
              { id: "b", text: "Same phase" },
              { id: "c", text: "No catalyst" },
              { id: "d", text: "Reactant" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Heterogeneous",
                statement: "Different phase.",
              },
            ],
            steps: [
              {
                reasoning: "Heterogeneous = different phase.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Different phase.",
          },
        },
        {
          id: "cipuc-u3-en-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "A homogeneous catalyst is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same phase as reactants" },
              { id: "b", text: "Different phase" },
              { id: "c", text: "No catalyst" },
              { id: "d", text: "Reactant" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homogeneous",
                statement: "Same phase.",
              },
            ],
            steps: [
              {
                reasoning: "Homogeneous = same phase.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Same phase.",
          },
        },
        {
          id: "cipuc-u3-en-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "ΔH = bonds broken -:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bonds formed" },
              { id: "b", text: "Bonds broken" },
              { id: "c", text: "Total bonds" },
              { id: "d", text: "No bonds" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bond energy calc",
                statement: "ΔH = broken - formed.",
              },
            ],
            steps: [
              { reasoning: "ΔH = broken - formed.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Bonds formed.",
          },
        },
        {
          id: "cipuc-u3-en-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "If bonds formed > bonds broken, reaction is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exothermic" },
              { id: "b", text: "Endothermic" },
              { id: "c", text: "Neither" },
              { id: "d", text: "Both" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bond energy sign",
                statement: "Formed > broken = exothermic.",
              },
            ],
            steps: [
              {
                reasoning: "Formed > broken = exothermic.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Exothermic.",
          },
        },
        {
          id: "cipuc-u3-en-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "If bonds broken > bonds formed, reaction is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Endothermic" },
              { id: "b", text: "Exothermic" },
              { id: "c", text: "Neither" },
              { id: "d", text: "Both" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bond energy sign",
                statement: "Broken > formed = endothermic.",
              },
            ],
            steps: [
              {
                reasoning: "Broken > formed = endothermic.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Endothermic.",
          },
        },
        {
          id: "cipuc-u3-en-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between exothermic and endothermic reactions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exo vs endo",
                statement: "Releases vs absorbs.",
              },
            ],
            steps: [
              {
                reasoning: "Exothermic: releases energy, ΔH < 0.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Endothermic: absorbs energy, ΔH > 0.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Exo = releases; endo = absorbs.",
          },
        },
        {
          id: "cipuc-u3-en-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two factors that increase reaction rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate factors",
                statement: "Temperature, concentration, catalyst.",
              },
            ],
            steps: [
              {
                reasoning: "Temperature and concentration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Surface area and catalyst.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Temperature, concentration, surface area, catalyst.",
          },
        },
        {
          id: "cipuc-u3-en-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a catalyst increases reaction rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalyst mechanism",
                statement: "Lower Ea pathway.",
              },
            ],
            steps: [
              {
                reasoning: "Provides alternative reaction pathway.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lower activation energy required.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "More particles have sufficient energy — faster rate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Lower Ea → more collisions → faster.",
          },
        },
        {
          id: "cipuc-u3-en-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use Hess's law to explain why ΔH is route-independent.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Hess's law",
                statement: "State function.",
              },
            ],
            steps: [
              {
                reasoning: "ΔH depends only on initial and final states.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enthalpy is a state function.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different routes give same overall ΔH.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Allows calculation from multiple steps.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "State function → route independent.",
          },
        },
        {
          id: "cipuc-u3-en-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "An exothermic reaction feels:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Warm/hot" },
              { id: "b", text: "Cold" },
              { id: "c", text: "No change" },
              { id: "d", text: "Variable" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exothermic sensation",
                statement: "Warm.",
              },
            ],
            steps: [
              { reasoning: "Exothermic = warm.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Warm/hot.",
          },
        },
        {
          id: "cipuc-u3-en-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is enthalpy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enthalpy",
                statement: "Total energy content.",
              },
            ],
            steps: [
              {
                reasoning: "Total energy of system at constant pressure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ΔH = change in enthalpy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Total energy content.",
          },
        },
        {
          id: "cipuc-u3-en-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why exothermic reactions feel warm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exothermic warmth",
                statement: "Energy released to surroundings.",
              },
            ],
            steps: [
              {
                reasoning: "Energy released during reaction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Energy transferred to surroundings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Surroundings temperature increases — feels warm.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Energy released → surroundings warm.",
          },
        },
        {
          id: "cipuc-u3-en-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A catalyst does not affect:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ΔH of reaction" },
              { id: "b", text: "Activation energy" },
              { id: "c", text: "Reaction rate" },
              { id: "d", text: "Products" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalyst doesn't affect",
                statement: "ΔH unchanged.",
              },
            ],
            steps: [
              {
                reasoning: "Catalyst doesn't change ΔH.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) ΔH.",
          },
        },
        {
          id: "cipuc-u3-en-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a reaction profile diagram?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reaction profile",
                statement: "Energy vs progress.",
              },
            ],
            steps: [
              {
                reasoning: "Graph showing energy changes during reaction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shows Ea, ΔH, reactants, products.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Energy vs reaction progress.",
          },
        },
        {
          id: "cipuc-u3-en-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate ΔH if 2 mol bonds broken (400 kJ each) and 2 mol bonds formed (500 kJ each).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Bond energy calculation",
                statement: "ΔH = broken - formed.",
              },
            ],
            steps: [
              {
                reasoning: "Energy broken = 2 × 400 = 800 kJ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Energy formed = 2 × 500 = 1000 kJ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ΔH = 800 - 1000 = -200 kJ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Negative = exothermic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "ΔH = -200 kJ (exothermic).",
          },
        },
        {
          id: "cipuc-u3-en-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a transition state?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transition state",
                statement: "Peak energy state.",
              },
            ],
            steps: [
              {
                reasoning: "Highest energy point in reaction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Requires activation energy to reach.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Highest energy state — needs Ea.",
          },
        },
      ],
    },
    {
      id: "cipuc-u3-kinetics",
      title: "Kinetics and reaction rates",
      skill:
        "Explain collision theory, factors affecting rate, and rate calculations.",
      lesson: {
        sections: [
          {
            heading: "Collision theory",
            body: "**Collision theory**: reactions occur when particles collide with sufficient energy (≥Ea) and correct orientation. **Factors**: temperature (more kinetic energy), concentration (more particles), surface area (more contact), catalyst (lower Ea). **Rate**: frequency of successful collisions per unit time.",
          },
          {
            heading: "Measuring reaction rate",
            body: "**Methods**: change in mass (gas evolved), volume of gas, colour change, precipitation, pH change. **Rate = change in amount ÷ time**. **Graph**: steep gradient = fast rate. **Initial rate**: gradient at start — most accurate.",
          },
          {
            heading: "Factors in detail",
            body: "**Temperature**: increases rate — more particles have Ea. **Concentration**: increases rate — more collisions. **Surface area**: increases rate — more contact (powder vs lump). **Pressure** (gases): increases rate — more collisions. **Catalyst**: increases rate — lower Ea.",
          },
        ],
        keyFormulas: [
          {
            name: "Collision theory",
            statement: "Collisions with Ea + orientation",
          },
          {
            name: "Rate",
            statement: "Change in amount ÷ time",
          },
          {
            name: "Temperature effect",
            statement: "Higher temp = faster rate",
          },
          {
            name: "Surface area",
            statement: "Larger area = faster rate",
          },
        ],
        workedExample: {
          problem: "Why does powdered CaCO₃ react faster than lumps?",
          solution:
            "Powder has larger surface area — more collisions per second.",
        },
      },
      questions: [
        {
          id: "cipuc-u3-kin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Collision theory states reactions occur when particles:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Collide with sufficient energy and orientation",
              },
              { id: "b", text: "Just touch" },
              { id: "c", text: "Are close" },
              { id: "d", text: "Are still" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Collision theory",
                statement: "Energy + orientation.",
              },
            ],
            steps: [
              {
                reasoning: "Collision = energy + orientation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Energy + orientation.",
          },
        },
        {
          id: "cipuc-u3-kin-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Rate of reaction is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Change in amount ÷ time" },
              { id: "b", text: "Total amount" },
              { id: "c", text: "Time only" },
              { id: "d", text: "Mass only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rate", statement: "Change ÷ time." },
            ],
            steps: [
              { reasoning: "Rate = change/time.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Change ÷ time.",
          },
        },
        {
          id: "cipuc-u3-kin-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Increasing temperature increases rate because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More particles have activation energy" },
              { id: "b", text: "More particles" },
              { id: "c", text: "Larger particles" },
              { id: "d", text: "No reason" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temperature effect",
                statement: "More energy.",
              },
            ],
            steps: [
              { reasoning: "Temp = more energy.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) More particles have Ea.",
          },
        },
        {
          id: "cipuc-u3-kin-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Increasing concentration increases rate because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More particles → more collisions" },
              { id: "b", text: "Larger particles" },
              { id: "c", text: "More energy" },
              { id: "d", text: "No reason" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Concentration effect",
                statement: "More collisions.",
              },
            ],
            steps: [
              { reasoning: "Conc = more collisions.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) More collisions.",
          },
        },
        {
          id: "cipuc-u3-kin-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Increasing surface area increases rate because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More contact between reactants" },
              { id: "b", text: "More energy" },
              { id: "c", text: "More particles" },
              { id: "d", text: "No reason" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Surface area",
                statement: "More contact.",
              },
            ],
            steps: [
              { reasoning: "Area = more contact.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) More contact.",
          },
        },
        {
          id: "cipuc-u3-kin-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A catalyst increases rate by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lowering activation energy" },
              { id: "b", text: "Increasing temperature" },
              { id: "c", text: "Adding energy" },
              { id: "d", text: "No mechanism" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalyst rate",
                statement: "Lower Ea.",
              },
            ],
            steps: [
              { reasoning: "Catalyst = lower Ea.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Lowering Ea.",
          },
        },
        {
          id: "cipuc-u3-kin-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Reaction rate can be measured by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Change in mass, volume, colour, pH" },
              { id: "b", text: "Only mass" },
              { id: "c", text: "Only volume" },
              { id: "d", text: "Only temperature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate measurement",
                statement: "Multiple methods.",
              },
            ],
            steps: [
              {
                reasoning: "Rate = measurable changes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Mass, volume, colour, pH.",
          },
        },
        {
          id: "cipuc-u3-kin-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a rate graph, steeper gradient means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Faster rate" },
              { id: "b", text: "Slower rate" },
              { id: "c", text: "No change" },
              { id: "d", text: "Zero rate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Graph gradient",
                statement: "Steep = fast.",
              },
            ],
            steps: [{ reasoning: "Steep = fast.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Faster rate.",
          },
        },
        {
          id: "cipuc-u3-kin-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Initial rate is measured at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start of reaction" },
              { id: "b", text: "End of reaction" },
              { id: "c", text: "Middle" },
              { id: "d", text: "Any time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Initial rate",
                statement: "At start.",
              },
            ],
            steps: [
              { reasoning: "Initial = at start.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Start of reaction.",
          },
        },
        {
          id: "cipuc-u3-kin-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Powdered solid reacts faster than lumps because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Larger surface area" },
              { id: "b", text: "More energy" },
              { id: "c", text: "More particles" },
              { id: "d", text: "No reason" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Powder effect",
                statement: "Larger surface.",
              },
            ],
            steps: [
              { reasoning: "Powder = more area.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Larger surface area.",
          },
        },
        {
          id: "cipuc-u3-kin-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Increasing pressure increases gas reaction rate because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More particles per volume → more collisions" },
              { id: "b", text: "More energy" },
              { id: "c", text: "Larger particles" },
              { id: "d", text: "No reason" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pressure effect",
                statement: "More collisions.",
              },
            ],
            steps: [
              {
                reasoning: "Pressure = more collisions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) More collisions.",
          },
        },
        {
          id: "cipuc-u3-kin-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A successful collision requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy ≥ Ea + correct orientation" },
              { id: "b", text: "Any collision" },
              { id: "c", text: "High temperature only" },
              { id: "d", text: "No requirements" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successful collision",
                statement: "Ea + orientation.",
              },
            ],
            steps: [
              {
                reasoning: "Success = Ea + orientation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Ea + orientation.",
          },
        },
        {
          id: "cipuc-u3-kin-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Rate = gradient of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amount vs time graph" },
              { id: "b", text: "Mass vs volume" },
              { id: "c", text: "Temperature vs time" },
              { id: "d", text: "Pressure vs volume" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate graph",
                statement: "Amount vs time.",
              },
            ],
            steps: [
              {
                reasoning: "Rate = amount/time gradient.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Amount vs time.",
          },
        },
        {
          id: "cipuc-u3-kin-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "As reaction proceeds, rate typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decreases as reactants consumed" },
              { id: "b", text: "Increases" },
              { id: "c", text: "Stays constant" },
              { id: "d", text: "Becomes zero instantly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate over time",
                statement: "Decreases as reactants consumed.",
              },
            ],
            steps: [{ reasoning: "Rate decreases.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Decreases.",
          },
        },
        {
          id: "cipuc-u3-kin-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A catalyst is not consumed because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is regenerated at end of reaction" },
              { id: "b", text: "It is destroyed" },
              { id: "c", text: "It is used up" },
              { id: "d", text: "It doesn't react" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalyst regeneration",
                statement: "Regenerated.",
              },
            ],
            steps: [
              { reasoning: "Catalyst regenerated.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Regenerated.",
          },
        },
        {
          id: "cipuc-u3-kin-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Doubling concentration typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increases rate" },
              { id: "b", text: "Decreases rate" },
              { id: "c", text: "No effect" },
              { id: "d", text: "Halves rate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Concentration effect",
                statement: "Increases rate.",
              },
            ],
            steps: [
              { reasoning: "More conc = faster.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Increases rate.",
          },
        },
        {
          id: "cipuc-u3-kin-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Doubling temperature typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increases rate significantly" },
              { id: "b", text: "Decreases rate" },
              { id: "c", text: "No effect" },
              { id: "d", text: "Halves rate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temperature effect",
                statement: "Big increase.",
              },
            ],
            steps: [
              {
                reasoning: "Higher temp = much faster.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Significant increase.",
          },
        },
        {
          id: "cipuc-u3-kin-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "A reaction stops when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reactant is used up or equilibrium reached" },
              { id: "b", text: "Temperature drops" },
              { id: "c", text: "Catalyst removed" },
              { id: "d", text: "Never stops" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reaction end",
                statement: "Reactant consumed or equilibrium.",
              },
            ],
            steps: [
              {
                reasoning: "Stops when reactant gone or equilibrium.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Reactant used up or equilibrium.",
          },
        },
        {
          id: "cipuc-u3-kin-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "A homogeneous catalyst is in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same phase as reactants" },
              { id: "b", text: "Different phase" },
              { id: "c", text: "Solid only" },
              { id: "d", text: "Gas only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homogeneous",
                statement: "Same phase.",
              },
            ],
            steps: [
              {
                reasoning: "Homogeneous = same phase.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Same phase.",
          },
        },
        {
          id: "cipuc-u3-kin-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between rate and amount of product.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate vs amount",
                statement: "Speed vs total.",
              },
            ],
            steps: [
              {
                reasoning: "Rate: how fast product forms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Amount: total product formed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rate = speed; amount = total.",
          },
        },
        {
          id: "cipuc-u3-kin-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two methods to measure reaction rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate measurement",
                statement: "Mass loss, gas volume.",
              },
            ],
            steps: [
              {
                reasoning: "Change in mass (gas evolved).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Volume of gas or colour change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mass loss, gas volume, colour.",
          },
        },
        {
          id: "cipuc-u3-kin-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why increasing temperature increases reaction rate more than increasing concentration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temperature vs concentration",
                statement: "Both energy and frequency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Temperature increases kinetic energy of all particles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More particles exceed activation energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Concentration only increases collision frequency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Temperature affects both energy and frequency.",
          },
        },
        {
          id: "cipuc-u3-kin-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how collision theory explains the effect of catalysts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Catalyst and collision theory",
                statement: "Lower Ea → more successful collisions.",
              },
            ],
            steps: [
              {
                reasoning: "Catalyst provides alternative pathway.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lower Ea means more particles have sufficient energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More successful collisions per second.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rate increases without changing ΔH.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Lower Ea → more successful collisions → faster.",
          },
        },
        {
          id: "cipuc-u3-kin-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "A heterogeneous catalyst is typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solid with gas/liquid reactants" },
              { id: "b", text: "Same phase" },
              { id: "c", text: "Enzyme" },
              { id: "d", text: "No catalyst" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Heterogeneous example",
                statement: "Solid catalyst.",
              },
            ],
            steps: [
              {
                reasoning: "Heterogeneous = different phase.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Solid with gas/liquid.",
          },
        },
        {
          id: "cipuc-u3-kin-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between rate of reaction and rate of formation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate types",
                statement: "Overall vs specific.",
              },
            ],
            steps: [
              {
                reasoning: "Rate of reaction: overall rate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rate of formation: for specific product.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Overall vs specific product.",
          },
        },
        {
          id: "cipuc-u3-kin-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why surface area has greater effect on rate than volume.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Surface area vs volume",
                statement: "Contact vs amount.",
              },
            ],
            steps: [
              {
                reasoning: "Surface area determines contact between reactants.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More contact = more collisions = faster rate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Volume affects amount but not contact directly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Area = contact; volume = amount.",
          },
        },
        {
          id: "cipuc-u3-kin-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A reaction with low Ea is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fast" },
              { id: "b", text: "Slow" },
              { id: "c", text: "No reaction" },
              { id: "d", text: "Impossible" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Low Ea",
                statement: "Fast reaction.",
              },
            ],
            steps: [{ reasoning: "Low Ea = fast.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Fast.",
          },
        },
        {
          id: "cipuc-u3-kin-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the relationship between temperature and kinetic energy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temp and KE",
                statement: "Higher temp = more KE.",
              },
            ],
            steps: [
              {
                reasoning: "Temperature ∝ average kinetic energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Higher temp = faster particles = more collisions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Temp ∝ KE — more collisions.",
          },
        },
        {
          id: "cipuc-u3-kin-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why increasing concentration increases rate linearly but temperature increases it exponentially.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rate effects",
                statement: "Linear vs exponential.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Concentration: more particles = proportionally more collisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Linear relationship — double conc = double rate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Temperature: exponential — small increase = big rate change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More particles exceed Ea — exponential effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Conc = linear; temp = exponential.",
          },
        },
        {
          id: "cipuc-u3-kin-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the activation energy of a catalysed reaction compared to uncatalysed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Catalysed Ea", statement: "Lower." },
            ],
            steps: [
              {
                reasoning: "Catalysed reaction has lower Ea.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alternative pathway requires less energy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Lower Ea with catalyst.",
          },
        },
      ],
    },
    {
      id: "cipuc-u3-eq",
      title: "Equilibria and Le Chatelier's principle",
      skill:
        "Explain dynamic equilibrium, Le Chatelier's principle, and equilibrium constants.",
      lesson: {
        sections: [
          {
            heading: "Dynamic equilibrium",
            body: "**Equilibrium**: forward and reverse reaction rates equal — concentrations constant but reactions continue. **Dynamic**: not static — molecules still react. **Reversible reactions**: ⇌ — can go both ways. **Equilibrium only in closed system**: no matter enters/leaves.",
          },
          {
            heading: "Le Chatelier's principle",
            body: "**Principle**: system shifts to oppose imposed change. **Concentration**: increase reactant → shift forward; increase product → shift backward. **Pressure** (gases): increase → shift toward fewer gas molecules. **Temperature**: increase exothermic → shift backward; increase endothermic → shift forward. **Catalyst**: no effect on position — speeds up both directions equally.",
          },
          {
            heading: "Equilibrium constant",
            body: "**Kc**: ratio of product concentrations to reactant concentrations at equilibrium. **Expression**: Kc = [products] / [reactants] — each raised to power of coefficient. **Large Kc**: products favoured; **small Kc**: reactants favoured. **Kc constant at constant temperature** — changes only with temperature.",
          },
        ],
        keyFormulas: [
          {
            name: "Dynamic equilibrium",
            statement: "Rates equal — concentrations constant",
          },
          {
            name: "Le Chatelier",
            statement: "System opposes change",
          },
          {
            name: "Kc",
            statement: "[products] / [reactants]",
          },
          {
            name: "Temperature effect",
            statement: "Kc changes with temperature only",
          },
        ],
        workedExample: {
          problem: "For N₂ + 3H₂ ⇌ 2NH₃, what is Kc expression?",
          solution: "Kc = [NH₃]² / ([N₂][H₂]³).",
        },
      },
      questions: [
        {
          id: "cipuc-u3-eq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Dynamic equilibrium is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forward and reverse rates equal" },
              { id: "b", text: "No reaction" },
              { id: "c", text: "Only forward" },
              { id: "d", text: "Static" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dynamic equilibrium",
                statement: "Rates equal.",
              },
            ],
            steps: [
              {
                reasoning: "Equilibrium = rates equal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Rates equal.",
          },
        },
        {
          id: "cipuc-u3-eq-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At equilibrium, concentrations are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Constant" },
              { id: "b", text: "Changing" },
              { id: "c", text: "Zero" },
              { id: "d", text: "Maximum" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equilibrium conc",
                statement: "Constant.",
              },
            ],
            steps: [
              { reasoning: "Equilibrium = constant.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Constant.",
          },
        },
        {
          id: "cipuc-u3-eq-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A reversible reaction is shown by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "⇌ symbol" },
              { id: "b", text: "→ symbol" },
              { id: "c", text: "No symbol" },
              { id: "d", text: "= symbol" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reversible",
                statement: "⇌ symbol.",
              },
            ],
            steps: [{ reasoning: "Reversible = ⇌.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) ⇌.",
          },
        },
        {
          id: "cipuc-u3-eq-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Le Chatelier's principle states:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "System shifts to oppose change" },
              { id: "b", text: "System ignores change" },
              { id: "c", text: "No shift" },
              { id: "d", text: "Always forward" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Le Chatelier",
                statement: "Opposes change.",
              },
            ],
            steps: [
              { reasoning: "Le Chatelier = opposes.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Opposes change.",
          },
        },
        {
          id: "cipuc-u3-eq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Equilibrium only occurs in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Closed system" },
              { id: "b", text: "Open system" },
              { id: "c", text: "Any system" },
              { id: "d", text: "No system" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equilibrium system",
                statement: "Closed.",
              },
            ],
            steps: [
              { reasoning: "Equilibrium = closed.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Closed system.",
          },
        },
        {
          id: "cipuc-u3-eq-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Kc is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equilibrium constant" },
              { id: "b", text: "Rate constant" },
              { id: "c", text: "Concentration" },
              { id: "d", text: "Pressure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kc",
                statement: "Equilibrium constant.",
              },
            ],
            steps: [
              {
                reasoning: "Kc = equilibrium constant.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Equilibrium constant.",
          },
        },
        {
          id: "cipuc-u3-eq-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Kc expression =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "[products] / [reactants]" },
              { id: "b", text: "[reactants] / [products]" },
              { id: "c", text: "[products] only" },
              { id: "d", text: "[reactants] only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kc expression",
                statement: "Products/reactants.",
              },
            ],
            steps: [
              {
                reasoning: "Kc = products/reactants.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) [products]/[reactants].",
          },
        },
        {
          id: "cipuc-u3-eq-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Large Kc means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Products favoured" },
              { id: "b", text: "Reactants favoured" },
              { id: "c", text: "No reaction" },
              { id: "d", text: "Equal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Large Kc",
                statement: "Products favoured.",
              },
            ],
            steps: [
              { reasoning: "Large Kc = products.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Products favoured.",
          },
        },
        {
          id: "cipuc-u3-eq-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Small Kc means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reactants favoured" },
              { id: "b", text: "Products favoured" },
              { id: "c", text: "No reaction" },
              { id: "d", text: "Equal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Small Kc",
                statement: "Reactants favoured.",
              },
            ],
            steps: [
              { reasoning: "Small Kc = reactants.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Reactants favoured.",
          },
        },
        {
          id: "cipuc-u3-eq-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A catalyst affects equilibrium by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No effect on position" },
              { id: "b", text: "Shifts forward" },
              { id: "c", text: "Shifts backward" },
              { id: "d", text: "Changes Kc" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalyst and equilibrium",
                statement: "No position effect.",
              },
            ],
            steps: [
              {
                reasoning: "Catalyst = no position change.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) No effect on position.",
          },
        },
        {
          id: "cipuc-u3-eq-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Increasing reactant concentration shifts equilibrium:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forward (toward products)" },
              { id: "b", text: "Backward" },
              { id: "c", text: "No shift" },
              { id: "d", text: "Both" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Concentration effect",
                statement: "Forward.",
              },
            ],
            steps: [
              {
                reasoning: "More reactant = forward.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Forward.",
          },
        },
        {
          id: "cipuc-u3-eq-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Increasing product concentration shifts equilibrium:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Backward (toward reactants)" },
              { id: "b", text: "Forward" },
              { id: "c", text: "No shift" },
              { id: "d", text: "Both" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Product concentration",
                statement: "Backward.",
              },
            ],
            steps: [
              {
                reasoning: "More product = backward.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Backward.",
          },
        },
        {
          id: "cipuc-u3-eq-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Increasing pressure shifts equilibrium toward:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fewer gas molecules" },
              { id: "b", text: "More gas molecules" },
              { id: "c", text: "No shift" },
              { id: "d", text: "Both" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pressure effect",
                statement: "Fewer gas molecules.",
              },
            ],
            steps: [
              {
                reasoning: "Pressure = fewer molecules.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Fewer gas molecules.",
          },
        },
        {
          id: "cipuc-u3-eq-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Decreasing pressure shifts equilibrium toward:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More gas molecules" },
              { id: "b", text: "Fewer gas molecules" },
              { id: "c", text: "No shift" },
              { id: "d", text: "Both" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pressure decrease",
                statement: "More molecules.",
              },
            ],
            steps: [
              {
                reasoning: "Low pressure = more molecules.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) More gas molecules.",
          },
        },
        {
          id: "cipuc-u3-eq-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Increasing temperature for exothermic reaction shifts equilibrium:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Backward (absorbs heat)" },
              { id: "b", text: "Forward" },
              { id: "c", text: "No shift" },
              { id: "d", text: "Both" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temp exothermic",
                statement: "Backward.",
              },
            ],
            steps: [
              {
                reasoning: "Heat added = backward for exothermic.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Backward.",
          },
        },
        {
          id: "cipuc-u3-eq-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Increasing temperature for endothermic reaction shifts equilibrium:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forward (absorbs heat)" },
              { id: "b", text: "Backward" },
              { id: "c", text: "No shift" },
              { id: "d", text: "Both" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temp endothermic",
                statement: "Forward.",
              },
            ],
            steps: [
              {
                reasoning: "Heat added = forward for endothermic.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Forward.",
          },
        },
        {
          id: "cipuc-u3-eq-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Kc changes with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature only" },
              { id: "b", text: "Concentration" },
              { id: "c", text: "Pressure" },
              { id: "d", text: "Catalyst" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kc factors",
                statement: "Temperature only.",
              },
            ],
            steps: [{ reasoning: "Kc = temp only.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Temperature only.",
          },
        },
        {
          id: "cipuc-u3-eq-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "For A + B ⇌ C, Kc =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "[C] / ([A][B])" },
              { id: "b", text: "[A][B] / [C]" },
              { id: "c", text: "[C] only" },
              { id: "d", text: "[A][B] only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kc expression",
                statement: "Products/reactants.",
              },
            ],
            steps: [
              {
                reasoning: "Kc = products/reactants.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) [C]/([A][B]).",
          },
        },
        {
          id: "cipuc-u3-eq-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "For 2A ⇌ B, Kc =:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "[B] / [A]²" },
              { id: "b", text: "[A]² / [B]" },
              { id: "c", text: "[B] only" },
              { id: "d", text: "[A]² only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kc powers",
                statement: "Coefficients as powers.",
              },
            ],
            steps: [{ reasoning: "Kc = [B]/[A]².", marks: 1, markCode: "M" }],
            finalAnswer: "(a) [B]/[A]².",
          },
        },
        {
          id: "cipuc-u3-eq-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between dynamic and static equilibrium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dynamic vs static",
                statement: "Reactions continue vs stop.",
              },
            ],
            steps: [
              {
                reasoning: "Dynamic: reactions continue at equal rates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Static: no reactions occur.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dynamic = reactions continue; static = no reactions.",
          },
        },
        {
          id: "cipuc-u3-eq-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two conditions needed for equilibrium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equilibrium conditions",
                statement: "Closed system + constant T.",
              },
            ],
            steps: [
              {
                reasoning: "Closed system — no matter enters/leaves.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Constant temperature.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Closed system + constant T.",
          },
        },
        {
          id: "cipuc-u3-eq-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why catalysts don't affect equilibrium position.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalyst and equilibrium",
                statement: "Speeds both directions equally.",
              },
            ],
            steps: [
              {
                reasoning: "Catalyst speeds up forward and reverse equally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equilibrium reached faster but same position.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Kc unchanged — catalyst doesn't affect ΔG.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Speeds both equally → same position.",
          },
        },
        {
          id: "cipuc-u3-eq-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For N₂ + 3H₂ ⇌ 2NH₃, predict effect of increasing pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Le Chatelier application",
                statement: "Fewer gas molecules.",
              },
            ],
            steps: [
              {
                reasoning: "Reactants: 4 gas molecules; products: 2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increasing pressure shifts toward fewer molecules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shifts forward — more NH₃ produced.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This is why Haber process uses high pressure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Forward — more NH₃.",
          },
        },
        {
          id: "cipuc-u3-eq-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Equilibrium is reached when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forward rate = reverse rate" },
              { id: "b", text: "All reactants used" },
              { id: "c", text: "All products formed" },
              { id: "d", text: "No reaction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equilibrium",
                statement: "Rates equal.",
              },
            ],
            steps: [
              {
                reasoning: "Equilibrium = rates equal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Rates equal.",
          },
        },
        {
          id: "cipuc-u3-eq-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the equilibrium constant Kc?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kc",
                statement: "Ratio at equilibrium.",
              },
            ],
            steps: [
              {
                reasoning: "Ratio of product to reactant concentrations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Constant at constant temperature.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Products/reactants ratio at equilibrium.",
          },
        },
        {
          id: "cipuc-u3-eq-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why increasing temperature changes Kc.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kc and temperature",
                statement: "Temperature affects equilibrium position.",
              },
            ],
            steps: [
              {
                reasoning: "Temperature change shifts equilibrium position.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New equilibrium has different concentrations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Kc = products/reactants — different ratio.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Temp shifts position → new Kc.",
          },
        },
        {
          id: "cipuc-u3-eq-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Equilibrium is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dynamic state" },
              { id: "b", text: "Static state" },
              { id: "c", text: "No reaction" },
              { id: "d", text: "Complete reaction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equilibrium",
                statement: "Dynamic state.",
              },
            ],
            steps: [
              { reasoning: "Equilibrium = dynamic.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Dynamic state.",
          },
        },
        {
          id: "cipuc-u3-eq-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is equilibrium only reached in closed systems?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Closed system",
                statement: "No matter exchange.",
              },
            ],
            steps: [
              {
                reasoning: "Open systems lose/gain matter.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Concentrations can't stabilise — no equilibrium.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Matter exchange prevents constant concentrations.",
          },
        },
        {
          id: "cipuc-u3-eq-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For 2SO₂ + O₂ ⇌ 2SO₃ (exothermic), predict effects of: (a) increasing pressure, (b) increasing temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Le Chatelier application",
                statement: "Multiple factors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pressure: reactants 3 gas, products 2 — increase P shifts forward.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Temperature: exothermic — increase T shifts backward.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pressure increases SO₃; temperature decreases SO₃.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Contact process uses moderate T for compromise.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "P↑ forward; T↑ backward.",
          },
        },
        {
          id: "cipuc-u3-eq-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between equilibrium constant Kc and rate constant k?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kc vs k",
                statement: "Equilibrium vs rate.",
              },
            ],
            steps: [
              {
                reasoning: "Kc: equilibrium position — products/reactants.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "k: rate of reaction — how fast.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Kc = position; k = rate.",
          },
        },
      ],
    },
  ],
};
