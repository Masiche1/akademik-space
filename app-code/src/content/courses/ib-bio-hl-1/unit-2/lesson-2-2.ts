import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "biohl-u2-lesson-2-2",
  code: "2-2",
  title: "Photosynthesis: Light-Dependent Reactions",
  goal: "I CAN describe the roles of photosystem II, the electron transport chain, photosystem I and photolysis in the light reactions, and distinguish cyclic from non-cyclic photophosphorylation.",
  standards: ["Paper 1", "Paper 2", "AHL B.2"],
  vocabulary: [
    {
      term: "Photosystem II",
      definition:
        "A pigment-protein complex in the thylakoid membrane that absorbs light best at 680 nm (P680) and oxidises water to release electrons, protons and oxygen.",
    },
    {
      term: "Photosystem I",
      definition:
        "A pigment-protein complex (P700) that re-energises electrons using light and passes them to ferredoxin for NADPH formation.",
    },
    {
      term: "Photolysis",
      definition:
        "The light-driven splitting of water molecules in photosystem II, releasing $O_2$, protons and electrons.",
    },
    {
      term: "Z-scheme",
      definition:
        "The diagram of electron flow from water through photosystem II, the electron transport chain and photosystem I to $NADP^+$, shaped like a Z when plotted by redox potential.",
    },
    {
      term: "Non-cyclic photophosphorylation",
      definition:
        "Light-driven electron flow from water to $NADP^+$ that produces ATP, NADPH and oxygen.",
    },
    {
      term: "Cyclic photophosphorylation",
      definition:
        "Electron flow that returns electrons from ferredoxin to the transport chain, producing ATP but no NADPH or oxygen.",
    },
  ],
  concepts: [
    {
      id: "biohl-u2-photosystems",
      title: "Photosystems, photolysis and the Z-scheme",
      skill:
        "Explain how light energy captured by photosystem II and I drives electron transport, photolysis of water and reduction of $NADP^+$.",
      lesson: {
        sections: [
          {
            heading: "Photosystem II and photolysis",
            body: "Light absorbed by antenna pigments in photosystem II is funnelled to the reaction centre chlorophyll P680, which becomes excited and donates an electron to pheophytin, beginning electron transport down the thylakoid membrane. The electron hole left in P680 is filled by electrons released from water: photolysis splits $H_2O$ into oxygen, protons and electrons. Oxygen diffuses out of the chloroplast; protons contribute to the gradient across the thylakoid membrane.",
          },
          {
            heading: "Photosystem I and NADPH",
            body: "The electron transport chain between the photosystems pumps protons into the thylakoid lumen. Electrons reaching photosystem I re-energise at P700 and are passed to ferredoxin, then to $NADP^+$ reductase, which reduces $NADP^+$ to NADPH using protons from the stroma. The overall non-cyclic flow — water to $NADP^+$ via both photosystems — forms the Z-scheme and yields ATP (via chemiosmosis), NADPH and oxygen.",
          },
          {
            heading: "Accessory pigments and light harvesting",
            body: "Chlorophyll a in the reaction centres does the photochemistry, while chlorophyll b and carotenoids in the antenna complexes absorb additional wavelengths and funnel the energy to the reaction centre. This antenna system vastly increases the effective absorption cross-section and lets the plant use a broad spectrum of light. Accessory pigments also protect against photo-oxidative damage by dissipating excess energy as heat.",
          },
        ],
        keyFormulas: [
          {
            name: "Photolysis",
            statement:
              "$2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$ in photosystem II.",
          },
          {
            name: "NADPH yield",
            statement:
              "Two electrons reduce one $NADP^+$: $NADP^+ + 2e^- + H^+ \\rightarrow NADPH$.",
          },
          {
            name: "Oxygen stoichiometry",
            statement:
              "Four electrons from two water molecules produce one $O_2$ and enough electrons for two NADPH.",
          },
        ],
        workedExample: {
          problem:
            "Photolysis releases electrons that ultimately reduce $NADP^+$. How many molecules of NADPH are formed from the electrons released by the photolysis of 2 molecules of water?",
          solution:
            "Two water molecules release $4$ electrons ($2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$). Since each NADPH needs 2 electrons, $4 \\div 2 = 2$ NADPH are formed.",
        },
      },
      questions: [
        {
          id: "biohl-u2-photosystems-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which process directly supplies the electrons that replace those lost from photosystem II's reaction centre?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduction of $NADP^+$" },
              { id: "b", text: "Photolysis of water" },
              { id: "c", text: "Cyclic electron flow" },
              { id: "d", text: "Photolysis of $CO_2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photolysis",
                statement:
                  "Light-driven splitting of water that releases electrons, protons and oxygen in photosystem II.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Water is split at photosystem II to donate electrons to $P680^+$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is photolysis; $CO_2$ is fixed later in the Calvin cycle.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Photolysis of water",
            commonErrors: [
              "Confusing the source of electrons (water) with the final acceptor ($NADP^+$).",
            ],
          },
        },
        {
          id: "biohl-u2-photosystems-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Photolysis of water in photosystem II releases electrons, protons and oxygen. Calculate the number of electrons and the number of NADPH molecules that can be produced from the photolysis of 3 molecules of water.",
          response: {
            type: "numeric",
            parts: [
              { label: "Electrons released", answer: 6 },
              { label: "NADPH molecules", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photolysis equation",
                statement:
                  "$2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$, so each water releases 2 electrons.",
              },
              {
                kind: "formula",
                name: "NADPH requirement",
                statement: "Each NADPH requires 2 electrons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each water molecule gives 2 electrons; 3 waters give $3 \\times 2$.",
                working: "6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the electron count.",
                working: "6 \\text{ electrons}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Divide by 2 electrons per NADPH.",
                working: "6 \\div 2 = 3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6$ electrons; $3$ NADPH",
            commonErrors: [
              "Using 4 electrons per water instead of 2.",
              "Forgetting that each NADPH needs two electrons.",
            ],
          },
        },
        {
          id: "biohl-u2-photosystems-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the light reactions of photosynthesis are described as a Z-scheme, and identify the roles of photosystem II and photosystem I in electron flow.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Z-scheme",
                statement:
                  "Electron flow goes from water (low energy donor) up to photosystem II, down through the transport chain, up again at photosystem I, and finally to $NADP^+$ — two light-driven rises give a Z shape on a redox-potential diagram.",
              },
              {
                kind: "principle",
                name: "Photosystem roles",
                statement:
                  "PSII splits water and injects electrons; PSI re-energises electrons for $NADP^+$ reduction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each photosystem absorbs light to boost an electron to a higher energy state, giving two upward steps on the redox diagram.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Between the two rises the electron transport chain releases energy used to pump protons, giving the downward stroke.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Photosystem II extracts electrons from water by photolysis and passes them to the transport chain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Photosystem I re-energises the electrons and delivers them via ferredoxin to $NADP^+$ reductase for NADPH formation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Two light-driven oxidations connected by an energy-releasing transport chain produce the Z-shaped electron flow from water to $NADP^+$.",
            commonErrors: [
              "Describing only one photosystem — both are required for non-cyclic flow.",
            ],
          },
        },
        {
          id: "biohl-u2-photosystems-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "In the light reactions of photosynthesis, water is photolysed and electrons flow through photosystem II, the electron transport chain and photosystem I to reduce $NADP^+$.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down the balanced equation for the photolysis of water.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the volume of oxygen (at RTP) released when 6 molecules of water are photolysed.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why both photosystem II and photosystem I are needed to produce NADPH.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "State the fate of the protons released during photolysis and electron transport.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photolysis",
                statement: "$2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$.",
              },
              {
                kind: "principle",
                name: "Z-scheme",
                statement:
                  "PSII supplies electrons to the chain; PSI raises them again for $NADP^+$ reduction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Two water molecules give one oxygen, four protons and four electrons.",
                working: "2H_2O \\rightarrow O_2 + 4H^+ + 4e^-",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Atoms and charge balance on both sides.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "6 waters give $6 \\div 2 = 3$ oxygen molecules.",
                working: "3 \\times 24 = 72 \\text{ dm}^3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate the volume at RTP.",
                working: "72 \\text{ dm}^3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Photosystem II alone cannot reduce $NADP^+$ because its electrons lack enough energy.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Photosystem I re-energises the electrons using light so they can reduce $NADP^+$ via ferredoxin.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Protons accumulate in the thylakoid lumen, building a proton gradient.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "They return to the stroma through ATP synthase to drive photophosphorylation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$. (b) $72$ $\\mathrm{dm}^3$ $O_2$. (c) PSI is needed to re-energise electrons for $NADP^+$ reduction. (d) Protons build the gradient and drive ATP synthesis.",
            commonErrors: [
              "In (b), forgetting the factor of 2 in the photolysis equation (using 6 waters → 6 $O_2$).",
              "Claiming oxygen is produced in photosystem I.",
            ],
            examinerNote:
              "Molar volume at RTP is $24$ $\\mathrm{dm}^3$; award the method mark for $3 \\times 24$ even if conversion slips.",
          },
        },
        {
          id: "biohl-u2-photosystems-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement correctly identifies the reaction centre of photosystem II and its primary electron donor?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "P700 receives electrons ultimately from $NADP^+$",
              },
              { id: "b", text: "P700 splits water to release oxygen" },
              {
                id: "c",
                text: "P680 receives electrons ultimately from water",
              },
              { id: "d", text: "P680 donates electrons directly to $NADP^+$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photosystem II",
                statement:
                  "Photosystem II has reaction centre P680 and obtains replacement electrons by photolysis of water.",
              },
            ],
            steps: [
              {
                reasoning: "The photosystem II reaction centre is P680.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Photolysis of water supplies the electrons that replace those lost by P680.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** P680; water is the ultimate electron donor.",
            commonErrors: ["Swapping the roles of P680 and P700."],
          },
        },
        {
          id: "biohl-u2-photosystems-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "After electrons are re-energised at photosystem I, which molecule receives them before $NADP^+$ is reduced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plastoquinone only" },
              { id: "b", text: "RuBisCO" },
              { id: "c", text: "Ferredoxin" },
              { id: "d", text: "ATP synthase" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photosystem I electron acceptor",
                statement:
                  "Electrons from P700 are passed to ferredoxin, which then reduces $NADP^+$ via $NADP^+$ reductase.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Photosystem I transfers excited electrons to ferredoxin.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ferredoxin passes electrons to the $NADP^+$ reductase system.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Ferredoxin",
            commonErrors: [
              "Naming ATP synthase, which uses protons rather than receiving electrons directly.",
            ],
          },
        },
        {
          id: "biohl-u2-photosystems-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the main role of accessory pigments such as chlorophyll b and carotenoids in the light-harvesting antenna complexes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They pump protons into the thylakoid lumen" },
              { id: "b", text: "They split water molecules directly" },
              { id: "c", text: "They fix carbon dioxide in the stroma" },
              {
                id: "d",
                text: "They absorb additional wavelengths of light and transfer the energy to the reaction centre",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Light harvesting",
                statement:
                  "Accessory pigments broaden the spectrum of absorbed light and funnel energy to the reaction centre.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Chlorophyll b and carotenoids absorb wavelengths that chlorophyll a does not absorb efficiently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The absorbed energy is transferred to the reaction centre chlorophyll for photochemistry.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** They broaden light absorption and transfer energy to the reaction centre.",
            commonErrors: [
              "Claiming accessory pigments carry out carbon fixation or water splitting.",
            ],
          },
        },
        {
          id: "biohl-u2-photosystems-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which products are released when water is photolysed in photosystem II?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "NADPH, ATP and oxygen" },
              { id: "b", text: "Glucose, oxygen and protons" },
              { id: "c", text: "Carbon dioxide, protons and electrons" },
              { id: "d", text: "Oxygen, protons and electrons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photolysis",
                statement:
                  "Photolysis of water releases oxygen, protons and electrons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Water is split by light energy at the oxygen-evolving complex.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The products are $O_2$, $H^+$ and electrons.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Oxygen, protons and electrons",
            commonErrors: [
              "Including NADPH or ATP, which are products of later stages rather than photolysis itself.",
            ],
          },
        },
        {
          id: "biohl-u2-photosystems-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "In the Z-scheme, what is the correct sequence of electron carriers from water to $NADP^+$?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Water → RuBisCO → Calvin cycle → photosystem II",
              },
              {
                id: "b",
                text: "$NADP^+$ → photosystem I → photosystem II → water",
              },
              {
                id: "c",
                text: "Water → photosystem II → electron transport chain → photosystem I → ferredoxin → $NADP^+$",
              },
              {
                id: "d",
                text: "Water → photosystem I → photosystem II → $NADP^+$",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Z-scheme electron flow",
                statement:
                  "Non-cyclic electron flow goes from water through PSII, the transport chain and PSI to $NADP^+$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Photosystem II receives electrons from water and passes them to the transport chain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Photosystem I re-energises the electrons and delivers them via ferredoxin to $NADP^+$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Water → PSII → ETC → PSI → ferredoxin → $NADP^+$",
            commonErrors: ["Reversing the order of the two photosystems."],
          },
        },
        {
          id: "biohl-u2-photosystems-q10",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "Photolysis of 6 molecules of water occurs in photosystem II. Calculate the number of oxygen molecules and the number of electrons released.",
          response: {
            type: "numeric",
            parts: [
              { label: "Oxygen molecules", answer: 3 },
              { label: "Electrons released", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photolysis stoichiometry",
                statement:
                  "$2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$, so each water gives 2 electrons.",
              },
            ],
            steps: [
              {
                reasoning: "Six waters give $6 \\div 2$ oxygen molecules.",
                working: "3 \\text{ O}_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Electrons equal $6 \\times 2$.",
                working: "12 \\text{ electrons}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3$ $O_2$ and $12$ electrons",
            commonErrors: ["Using 4 electrons per water instead of 2."],
          },
        },
        {
          id: "biohl-u2-photosystems-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Photolysis of 10 molecules of water supplies electrons for NADPH formation. Calculate the electrons released, the NADPH molecules formed and the oxygen molecules produced.",
          response: {
            type: "numeric",
            parts: [
              { label: "Electrons released", answer: 20 },
              { label: "NADPH molecules", answer: 10 },
              { label: "Oxygen molecules", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "NADPH requirement",
                statement:
                  "Each NADPH requires 2 electrons; each $O_2$ requires 2 water molecules.",
              },
            ],
            steps: [
              {
                reasoning: "Electrons are $10 \\times 2$.",
                working: "20 \\text{ electrons}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NADPH is $20 \\div 2$.",
                working: "10 \\text{ NADPH}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Oxygen is $10 \\div 2$.",
                working: "5 \\text{ O}_2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20$ electrons, $10$ NADPH and $5$ $O_2$",
            commonErrors: ["Forgetting that each NADPH needs two electrons."],
          },
        },
        {
          id: "biohl-u2-photosystems-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Photolysis of 8 moles of water occurs. Calculate the moles of electrons released, the moles of NADPH formed and the volume of oxygen produced at RTP, where molar volume is $24$ $\\mathrm{dm}^3$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Electrons released (mol)", answer: 16 },
              { label: "NADPH (mol)", answer: 8 },
              {
                label: "Oxygen volume at RTP",
                answer: 96,
                unit: "$\\mathrm{dm}^3$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photolysis and gas volume",
                statement:
                  "$2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$; at RTP $1$ mole of gas occupies $24$ $\\mathrm{dm}^3$.",
              },
            ],
            steps: [
              {
                reasoning: "Each mole of water gives 2 mol electrons.",
                working: "8 \\times 2 = 16 \\text{ mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each mole of NADPH requires 2 mol electrons.",
                working: "16 \\div 2 = 8 \\text{ mol}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Eight moles of water give 4 moles of $O_2$; volume is $4 \\times 24$.",
                working: "96 \\text{ dm}^3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$16$ mol electrons, $8$ mol NADPH and $96$ $\\mathrm{dm}^3$ $O_2$",
            commonErrors: [
              "Using 8 moles of oxygen instead of 4 for 8 moles of water.",
            ],
          },
        },
        {
          id: "biohl-u2-photosystems-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Photolysis of 12 molecules of water occurs and all electrons are used to reduce $NADP^+$. Calculate the oxygen molecules produced, the electrons released, the NADPH molecules formed and the $CO_2$ molecules that could be fixed if each $CO_2$ requires 2 NADPH.",
          response: {
            type: "numeric",
            parts: [
              { label: "Oxygen molecules", answer: 6 },
              { label: "Electrons released", answer: 24 },
              { label: "NADPH molecules", answer: 12 },
              { label: "Carbon dioxide fixed", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photolysis stoichiometry",
                statement:
                  "Each water gives 2 electrons; each NADPH needs 2 electrons; each $CO_2$ fixed needs 2 NADPH.",
              },
            ],
            steps: [
              {
                reasoning: "Oxygen molecules are $12 \\div 2$.",
                working: "6 \\text{ O}_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Electrons are $12 \\times 2$.",
                working: "24 \\text{ electrons}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NADPH is $24 \\div 2$.",
                working: "12 \\text{ NADPH}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Carbon dioxide fixed is $12 \\div 2$.",
                working: "6 \\text{ CO}_2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6$ $O_2$, $24$ electrons, $12$ NADPH and $6$ $CO_2$",
            commonErrors: [
              "Stopping at NADPH and forgetting the Calvin-cycle demand of 2 NADPH per $CO_2$.",
            ],
          },
        },
        {
          id: "biohl-u2-photosystems-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Photolysis of 14 molecules of water supplies electrons for NADPH formation, and the NADPH is used by the Calvin cycle. Calculate the oxygen molecules produced, the electrons released, the NADPH molecules formed, the $CO_2$ molecules fixed and the ATP molecules required if each $CO_2$ needs 3 ATP and 2 NADPH.",
          response: {
            type: "numeric",
            parts: [
              { label: "Oxygen molecules", answer: 7 },
              { label: "Electrons released", answer: 28 },
              { label: "NADPH molecules", answer: 14 },
              { label: "Carbon dioxide fixed", answer: 7 },
              { label: "ATP required", answer: 21 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Light-to-carbon stoichiometry",
                statement:
                  "Each water gives 2 electrons; each NADPH needs 2 electrons; each $CO_2$ fixed needs 2 NADPH and 3 ATP.",
              },
            ],
            steps: [
              {
                reasoning: "Oxygen molecules are $14 \\div 2$.",
                working: "7 \\text{ O}_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Electrons are $14 \\times 2$.",
                working: "28 \\text{ electrons}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NADPH is $28 \\div 2$.",
                working: "14 \\text{ NADPH}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Carbon dioxide fixed is $14 \\div 2$.",
                working: "7 \\text{ CO}_2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "ATP required is $7 \\times 3$.",
                working: "21 \\text{ ATP}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$7$ $O_2$, $28$ electrons, $14$ NADPH, $7$ $CO_2$ and $21$ ATP",
            commonErrors: [
              "Using 14 NADPH as if each water gave one NADPH rather than deriving it from electrons.",
            ],
          },
        },
        {
          id: "biohl-u2-photosystems-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Photolysis of 2 moles of water occurs at RTP. Calculate the moles of oxygen produced and the volume of oxygen produced.",
          response: {
            type: "numeric",
            parts: [
              { label: "Oxygen (mol)", answer: 1 },
              {
                label: "Oxygen volume at RTP",
                answer: 24,
                unit: "$\\mathrm{dm}^3$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photolysis and RTP volume",
                statement:
                  "$2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$ and $1$ mole of gas occupies $24$ $\\mathrm{dm}^3$ at RTP.",
              },
            ],
            steps: [
              {
                reasoning: "Two moles of water produce one mole of oxygen.",
                working: "1 \\text{ mol O}_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "One mole of gas occupies $24$ $\\mathrm{dm}^3$ at RTP.",
                working: "24 \\text{ dm}^3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1$ mol $O_2$; $24$ $\\mathrm{dm}^3$ at RTP",
            commonErrors: [
              "Treating two moles of water as producing two moles of oxygen.",
            ],
          },
        },
        {
          id: "biohl-u2-photosystems-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Photolysis of 20 moles of water occurs during non-cyclic photophosphorylation. Calculate the moles of oxygen produced, the moles of electrons released, the moles of NADPH formed, the volume of oxygen at RTP and the moles of $CO_2$ that could be fixed if each mole of $CO_2$ requires 2 mol NADPH.",
          response: {
            type: "numeric",
            parts: [
              { label: "Oxygen (mol)", answer: 10 },
              { label: "Electrons (mol)", answer: 40 },
              { label: "NADPH (mol)", answer: 20 },
              {
                label: "Oxygen volume at RTP",
                answer: 240,
                unit: "$\\mathrm{dm}^3$",
              },
              { label: "Carbon dioxide fixed (mol)", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photolysis stoichiometry",
                statement:
                  "$2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$; each NADPH needs 2 electrons; each $CO_2$ needs 2 NADPH; RTP molar volume is $24$ $\\mathrm{dm}^3$.",
              },
            ],
            steps: [
              {
                reasoning: "Oxygen is $20 \\div 2$ mol.",
                working: "10 \\text{ mol O}_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Electrons are $20 \\times 2$ mol.",
                working: "40 \\text{ mol electrons}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NADPH is $40 \\div 2$ mol.",
                working: "20 \\text{ mol NADPH}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Oxygen volume is $10 \\times 24$.",
                working: "240 \\text{ dm}^3",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Carbon dioxide fixed is $20 \\div 2$ mol.",
                working: "10 \\text{ mol CO}_2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$10$ mol $O_2$, $40$ mol electrons, $20$ mol NADPH, $240$ $\\mathrm{dm}^3$ $O_2$ and $10$ mol $CO_2$",
            commonErrors: [
              "Using 20 moles of oxygen instead of 10 for 20 moles of water.",
            ],
          },
        },
      ],
    },
    {
      id: "biohl-u2-photophosphorylation",
      title: "Cyclic and non-cyclic photophosphorylation",
      skill:
        "Distinguish cyclic from non-cyclic electron flow and explain chemiosmosis in the chloroplast thylakoid membrane.",
      lesson: {
        sections: [
          {
            heading: "Non-cyclic electron flow",
            body: "In non-cyclic photophosphorylation, electrons travel from water through photosystem II, the transport chain, photosystem I and finally to $NADP^+$. Because water is the ultimate donor, this process produces ATP, NADPH and oxygen. The products of the light reactions — ATP and NADPH — are then used in the Calvin cycle.",
          },
          {
            heading: "Cyclic electron flow",
            body: "When the cell needs more ATP relative to NADPH, electrons from ferredoxin are returned to the transport chain instead of reducing $NADP^+$. This cyclic flow around photosystem I still pumps protons and produces ATP, but no NADPH or oxygen. The balance between cyclic and non-cyclic flow lets the chloroplast adjust the ATP:NADPH ratio to the needs of carbon fixation.",
          },
          {
            heading: "Chemiosmosis in the chloroplast",
            body: "The thylakoid membrane separates the lumen (inside) from the stroma (outside). Electron transport pumps protons into the lumen, making it acidic and positively charged relative to the stroma. Protons flow back to the stroma through ATP synthase (the $CF_0CF_1$ complex), whose rotation drives phosphorylation of ADP to ATP. This is the same chemiosmotic principle as in mitochondria but in the opposite topological orientation.",
          },
        ],
        keyFormulas: [
          {
            name: "Non-cyclic products",
            statement:
              "Non-cyclic flow: $ATP + NADPH + O_2$ per turn of the Z-scheme.",
          },
          {
            name: "Cyclic products",
            statement:
              "Cyclic flow: $ATP$ only — no NADPH, no $O_2$, electrons recycled to ferredoxin.",
          },
          {
            name: "Calvin-cycle demand",
            statement:
              "Fixing one $CO_2$ to carbohydrate requires $3$ ATP and $2$ NADPH, so extra ATP can be supplied by cyclic flow.",
          },
        ],
        workedExample: {
          problem:
            "Explain why a chloroplast might switch on cyclic photophosphorylation when the Calvin cycle is consuming NADPH faster than ATP.",
          solution:
            "Cyclic flow produces ATP without making more NADPH or oxygen, so it restores the ATP:NADPH balance needed by the Calvin cycle without over-reducing $NADP^+$.",
        },
      },
      questions: [
        {
          id: "biohl-u2-cyclic-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which products are formed during cyclic photophosphorylation but not during non-cyclic photophosphorylation alone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only oxygen" },
              {
                id: "b",
                text: "Neither — cyclic produces only ATP, which non-cyclic also produces",
              },
              { id: "c", text: "Only NADPH" },
              { id: "d", text: "NADPH and oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cyclic vs non-cyclic",
                statement:
                  "Cyclic flow makes ATP only; non-cyclic makes ATP, NADPH and oxygen.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cyclic photophosphorylation yields ATP but no NADPH and no oxygen.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "ATP is produced by both pathways, so no product is unique to cyclic flow.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Neither — cyclic produces only ATP",
            commonErrors: [
              "Thinking cyclic flow produces NADPH — it recycles electrons instead of reducing $NADP^+$.",
            ],
          },
        },
        {
          id: "biohl-u2-cyclic-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In cyclic photophosphorylation, electrons are returned from ferredoxin to the electron transport chain. Explain why this process produces ATP but no NADPH and no oxygen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cyclic flow",
                statement:
                  "Electrons cycle back to the transport chain, pumping protons for ATP synthesis without reaching $NADP^+$.",
              },
              {
                kind: "principle",
                name: "Water not involved",
                statement:
                  "No water is split, so no oxygen is released and no new electrons enter the system.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Returning electrons to the chain still releases energy that pumps protons into the lumen.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The proton gradient drives ATP synthase, producing ATP.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Because electrons never reach $NADP^+$ reductase, no NADPH forms; because water is not split, no oxygen forms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Proton pumping still yields ATP, but without water splitting or $NADP^+$ reduction there is no $O_2$ or NADPH.",
            commonErrors: ["Claiming cyclic flow still produces NADPH."],
          },
        },
        {
          id: "biohl-u2-cyclic-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the chloroplast balances cyclic and non-cyclic photophosphorylation to match the ATP and NADPH demands of the Calvin cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ATP:NADPH ratio",
                statement:
                  "The Calvin cycle consumes ATP and NADPH in a fixed ratio; cyclic flow adjusts ATP supply without adding NADPH.",
              },
              {
                kind: "principle",
                name: "Regulated electron routing",
                statement:
                  "Cells can direct electrons either to $NADP^+$ (non-cyclic) or back to the chain (cyclic) depending on demand.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Non-cyclic flow supplies both ATP and NADPH plus oxygen.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The Calvin cycle fixes $CO_2$ using ATP and NADPH in roughly a 3:2 ratio.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "When extra ATP is needed, electrons are diverted into cyclic flow, producing more ATP without extra NADPH.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "This keeps the ATP:NADPH ratio matched to carbon-fixation requirements.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Non-cyclic flow supplies NADPH and ATP; cyclic flow tops up ATP when the Calvin cycle needs a higher ATP:NADPH ratio.",
            commonErrors: [
              "Claiming cyclic flow produces NADPH or that the two pathways are mutually exclusive at all times.",
            ],
          },
        },
        {
          id: "biohl-u2-cyclic-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A mutant alga cannot perform cyclic photophosphorylation but can still carry out non-cyclic photophosphorylation and the Calvin cycle.",
          parts: [
            {
              label: "a",
              prompt:
                "State which products of the light reactions the mutant can still produce.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Predict the consequence for ATP supply relative to NADPH supply, and justify your prediction.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate how much ATP is produced by non-cyclic flow per molecule of NADPH formed, assuming a P/O ratio of 1.5 ATP per NADPH's worth of proton pumping — express your answer as a ratio.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Suggest why the mutant might grow more slowly than the wild type under high light.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-cyclic products",
                statement:
                  "Non-cyclic flow alone yields ATP, NADPH and oxygen.",
              },
              {
                kind: "principle",
                name: "Cyclic role",
                statement: "Cyclic flow supplements ATP without adding NADPH.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Non-cyclic photophosphorylation still produces ATP, NADPH and oxygen.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "All three products remain available.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Without cyclic flow the cell cannot boost ATP independently of NADPH.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The ATP:NADPH ratio is fixed by non-cyclic flow alone, which may not match Calvin-cycle demand.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Per NADPH the corresponding electron pair yields a fixed proton flux; with P/O 1.5, about $1.5$ ATP per NADPH-equivalent.",
                working: "1.5 : 1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "So the ratio is approximately $3:2$ ATP:NADPH (accept equivalent correct ratio reasoning).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "If the Calvin cycle needs relatively more ATP, the fixed non-cyclic ratio limits carbon fixation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Less carbohydrate is produced per unit time, slowing growth under high light.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) ATP, NADPH and $O_2$ still produced. (b) ATP cannot be boosted independently — ratio fixed. (c) About $3:2$ ATP:NADPH. (d) Carbon fixation limited by ATP shortage.",
            commonErrors: [
              "In (c), treating the numbers as exact textbook values rather than working from the given P/O assumption.",
              "In (d), claiming no photosynthesis occurs at all.",
            ],
            examinerNote:
              "Part (c) is a ratio question; accept any correctly reasoned ratio consistent with the assumption.",
          },
        },
        {
          id: "biohl-u2-cyclic-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which products are formed during cyclic photophosphorylation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "NADPH and oxygen only" },
              { id: "b", text: "ATP, NADPH and oxygen" },
              { id: "c", text: "ATP only" },
              { id: "d", text: "Oxygen only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cyclic photophosphorylation",
                statement:
                  "Electrons return to the transport chain, producing ATP without NADPH or oxygen.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Electron cycling still pumps protons and drives ATP synthase.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Electrons do not reach $NADP^+$ and water is not split, so no NADPH or $O_2$ forms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** ATP only",
            commonErrors: [
              "Thinking cyclic photophosphorylation produces NADPH.",
            ],
          },
        },
        {
          id: "biohl-u2-cyclic-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which products are formed during non-cyclic photophosphorylation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "NADPH only" },
              { id: "b", text: "ATP only" },
              { id: "c", text: "Oxygen only" },
              { id: "d", text: "ATP, NADPH and oxygen" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-cyclic photophosphorylation",
                statement:
                  "Electron flow from water to $NADP^+$ produces ATP, NADPH and oxygen.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Water is split at photosystem II, releasing oxygen and electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Electron transport produces a proton gradient for ATP and reduces $NADP^+$ to NADPH.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** ATP, NADPH and oxygen",
            commonErrors: [
              "Omitting oxygen because it is released rather than transferred as an electron carrier.",
            ],
          },
        },
        {
          id: "biohl-u2-cyclic-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In cyclic photophosphorylation, where do the electrons that re-enter the electron transport chain come from?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "RuBisCO" },
              { id: "b", text: "Water directly" },
              { id: "c", text: "Ferredoxin" },
              { id: "d", text: "NADPH" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cyclic electron source",
                statement:
                  "Electrons are returned from ferredoxin to the transport chain instead of reducing $NADP^+$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In cyclic flow electrons reach ferredoxin after photosystem I.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ferredoxin returns them to the chain rather than allowing NADPH formation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Ferredoxin",
            commonErrors: [
              "Saying water supplies the electrons — cyclic flow recycles electrons already in the system.",
            ],
          },
        },
        {
          id: "biohl-u2-cyclic-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the chloroplast thylakoid membrane, in which direction is the proton gradient established during photophosphorylation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No proton gradient is formed" },
              {
                id: "b",
                text: "Protons are pumped from the lumen into the stroma",
              },
              {
                id: "c",
                text: "Protons are pumped from the stroma into the thylakoid lumen",
              },
              {
                id: "d",
                text: "Protons are pumped from the cytoplasm into the nucleus",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Thylakoid proton gradient",
                statement:
                  "Electron transport pumps protons into the thylakoid lumen, making it acidic relative to the stroma.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The thylakoid lumen is the compartment inside the thylakoid membrane.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Protons accumulate in the lumen and flow back to the stroma through ATP synthase.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** From the stroma into the thylakoid lumen",
            commonErrors: [
              "Reversing the direction — protons flow back out to the stroma during chemiosmosis.",
            ],
          },
        },
        {
          id: "biohl-u2-cyclic-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement correctly describes ATP synthase in the chloroplast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It reduces $NADP^+$ to NADPH directly" },
              { id: "b", text: "It fixes $CO_2$ onto RuBP" },
              { id: "c", text: "It splits water to release oxygen" },
              {
                id: "d",
                text: "It uses the proton gradient across the thylakoid membrane to phosphorylate ADP",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chloroplast ATP synthase",
                statement:
                  "The $CF_0CF_1$ complex lets protons flow from the lumen to the stroma and uses the energy to make ATP.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Protons return through ATP synthase down their electrochemical gradient.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The energy released drives phosphorylation of ADP to ATP.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** It uses the proton gradient to phosphorylate ADP.",
            commonErrors: [
              "Confusing ATP synthase with RuBisCO or the oxygen-evolving complex.",
            ],
          },
        },
        {
          id: "biohl-u2-cyclic-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which comparison of cyclic and non-cyclic photophosphorylation is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Non-cyclic flow produces ATP, NADPH and oxygen; cyclic flow produces ATP only",
              },
              {
                id: "b",
                text: "Both require water splitting to produce oxygen",
              },
              {
                id: "c",
                text: "Non-cyclic flow recycles electrons; cyclic flow reduces $NADP^+$",
              },
              {
                id: "d",
                text: "Cyclic flow produces NADPH; non-cyclic flow does not",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Cyclic versus non-cyclic",
                statement:
                  "Non-cyclic electron flow from water yields ATP, NADPH and $O_2$; cyclic electron flow yields ATP only.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Non-cyclic flow ends by reducing $NADP^+$ and begins with water splitting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cyclic flow returns electrons to the chain, so it makes ATP without NADPH or oxygen.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Non-cyclic: ATP + NADPH + $O_2$; cyclic: ATP only.",
            commonErrors: ["Reversing the products of the two pathways."],
          },
        },
        {
          id: "biohl-u2-cyclic-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Assume the light reactions supply ATP and NADPH in a ratio of 3 ATP to 2 NADPH. Calculate the ATP produced when 8 NADPH are formed.",
          response: {
            type: "numeric",
            parts: [{ label: "ATP produced", answer: 12 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ATP:NADPH ratio",
                statement:
                  "A 3:2 ATP:NADPH ratio means $ATP = NADPH \\times 1.5$.",
              },
            ],
            steps: [
              {
                reasoning: "Set up the proportional calculation.",
                working: "8 \\times \\frac{3}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the ATP yield.",
                working: "12 \\text{ ATP}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$12$ ATP",
            commonErrors: ["Multiplying by 3 instead of $\\frac{3}{2}$."],
          },
        },
        {
          id: "biohl-u2-cyclic-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Non-cyclic photophosphorylation supplies 6 NADPH and 9 ATP, while cyclic photophosphorylation adds a further 5 ATP. Calculate the total ATP, the total NADPH and the ATP supplied per NADPH.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total ATP", answer: 14 },
              { label: "Total NADPH", answer: 6 },
              { label: "ATP per NADPH", answer: 2.333333, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Combined photophosphorylation",
                statement:
                  "Cyclic flow adds ATP without adding NADPH, changing the ATP:NADPH ratio.",
              },
            ],
            steps: [
              {
                reasoning: "Total ATP is $9 + 5$.",
                working: "14 \\text{ ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "NADPH remains at 6 because cyclic flow does not reduce $NADP^+$.",
                working: "6 \\text{ NADPH}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "ATP per NADPH is $14 \\div 6$.",
                working: "14 \\div 6 = 2.33",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$14$ ATP, $6$ NADPH, about $2.33$ ATP per NADPH",
            commonErrors: [
              "Adding cyclic ATP to NADPH as though cyclic flow produced NADPH.",
            ],
          },
        },
        {
          id: "biohl-u2-cyclic-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Non-cyclic photophosphorylation follows photolysis of 10 molecules of water. Calculate the oxygen molecules produced, the NADPH molecules formed and the ATP molecules that would be needed to fix the resulting NADPH into carbohydrate if each $CO_2$ fixed needs 2 NADPH and 3 ATP.",
          response: {
            type: "numeric",
            parts: [
              { label: "Oxygen molecules", answer: 5 },
              { label: "NADPH molecules", answer: 10 },
              { label: "ATP needed for fixation", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photolysis to Calvin demand",
                statement:
                  "$2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$; each NADPH needs 2 electrons; each $CO_2$ needs 2 NADPH and 3 ATP.",
              },
            ],
            steps: [
              {
                reasoning: "Oxygen molecules are $10 \\div 2$.",
                working: "5 \\text{ O}_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NADPH is $10 \\times 2 \\div 2$.",
                working: "10 \\text{ NADPH}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Ten NADPH fix 5 $CO_2$, needing $5 \\times 3$ ATP.",
                working: "15 \\text{ ATP}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5$ $O_2$, $10$ NADPH and $15$ ATP needed",
            commonErrors: [
              "Using all 10 NADPH for one $CO_2$ instead of recognising each $CO_2$ needs 2 NADPH.",
            ],
          },
        },
        {
          id: "biohl-u2-cyclic-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Photolysis of 12 molecules of water occurs during non-cyclic photophosphorylation. Calculate the oxygen molecules, the NADPH molecules, the $CO_2$ molecules that could be fixed and the ATP molecules required for that fixation.",
          response: {
            type: "numeric",
            parts: [
              { label: "Oxygen molecules", answer: 6 },
              { label: "NADPH molecules", answer: 12 },
              { label: "Carbon dioxide fixed", answer: 6 },
              { label: "ATP required", answer: 18 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calvin-cycle input",
                statement: "Each $CO_2$ fixed requires 2 NADPH and 3 ATP.",
              },
            ],
            steps: [
              {
                reasoning: "Oxygen molecules are $12 \\div 2$.",
                working: "6 \\text{ O}_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NADPH is $12 \\times 2 \\div 2$.",
                working: "12 \\text{ NADPH}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Carbon dioxide fixed is $12 \\div 2$.",
                working: "6 \\text{ CO}_2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "ATP required is $6 \\times 3$.",
                working: "18 \\text{ ATP}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6$ $O_2$, $12$ NADPH, $6$ $CO_2$ and $18$ ATP",
            commonErrors: [
              "Forgetting that each $CO_2$ requires 3 ATP in addition to 2 NADPH.",
            ],
          },
        },
        {
          id: "biohl-u2-cyclic-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain how chemiosmosis produces ATP in the chloroplast thylakoid membrane, including the role of the proton gradient and ATP synthase.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Thylakoid chemiosmosis",
                statement:
                  "Electron transport pumps protons into the lumen; protons returning through ATP synthase drive ATP formation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Electron transport through the thylakoid membrane releases energy as electrons pass between carriers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This energy pumps protons from the stroma into the thylakoid lumen.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The lumen becomes positively charged and acidic relative to the stroma.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The resulting electrochemical gradient is the proton motive force.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Protons flow back to the stroma only through ATP synthase.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The flow through ATP synthase phosphorylates ADP to ATP in the stroma.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Protons pumped into the lumen create a gradient; their return through ATP synthase drives ATP synthesis in the stroma.",
            commonErrors: [
              "Saying ATP is made inside the lumen rather than in the stroma.",
            ],
          },
        },
        {
          id: "biohl-u2-cyclic-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A mutant alga can perform non-cyclic photophosphorylation but cannot perform cyclic photophosphorylation. Predict the effects on ATP supply, NADPH supply and Calvin-cycle function when the Calvin cycle requires relatively more ATP than NADPH.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cyclic role",
                statement:
                  "Cyclic photophosphorylation supplies additional ATP without increasing NADPH.",
              },
              {
                kind: "principle",
                name: "Calvin-cycle demand",
                statement:
                  "Carbon fixation consumes ATP and NADPH in a fixed ratio; imbalance can limit the rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Non-cyclic photophosphorylation still produces ATP, NADPH and oxygen.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The mutant cannot divert electrons from ferredoxin back into cyclic flow.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Therefore the cell cannot increase ATP production independently of NADPH.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "If the Calvin cycle needs a higher ATP:NADPH ratio, ATP becomes relatively limiting.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "RuBP regeneration and 3-PGA reduction may slow because ATP-dependent steps are constrained.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "NADPH supply itself is not increased by cyclic flow, so its availability remains tied to non-cyclic electron flow.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Overall carbon fixation and carbohydrate production are likely reduced under high light.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The phenotype demonstrates why cyclic flow is important for balancing light-reaction outputs with Calvin-cycle demand.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The mutant can make NADPH and oxygen but cannot boost ATP independently; carbon fixation slows when ATP is relatively limiting.",
            commonErrors: [
              "Claiming the mutant cannot photosynthesise at all or cannot produce NADPH.",
            ],
          },
        },
      ],
    },
  ],
};
