import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ess9-u1-lesson-1-1",
  code: "1-1",
  title: "Stars and the Sun",
  goal: "I CAN explain how nuclear fusion powers the Sun, compare the life cycles of stars of different mass, and use the Hertzsprung-Russell diagram and stellar spectra to classify stars.",
  standards: ["HS-ESS1-1", "HS-ESS1-3", "SEP: Developing and Using Models", "SEP: Analyzing and Interpreting Data", "CCC: Energy and Matter"],
  vocabulary: [
    { term: "Nuclear fusion", definition: "A reaction in which light nuclei combine to form a heavier nucleus, releasing a large amount of energy." },
    { term: "Main sequence", definition: "The long stage of a star's life in which it fuses hydrogen into helium in its core." },
    { term: "Supernova", definition: "The explosion that occurs when the core of a massive star collapses at the end of its life." },
    { term: "White dwarf", definition: "The hot, dense, Earth-sized remnant core left when a low-mass star sheds its outer layers." },
    { term: "Luminosity", definition: "The total energy a star radiates per second, often compared with the Sun's luminosity." },
    { term: "Hertzsprung-Russell diagram", definition: "A graph of stars' luminosity against surface temperature (temperature increases to the left)." },
    { term: "Absorption spectrum", definition: "A continuous spectrum crossed by dark lines at wavelengths absorbed by elements in a star's atmosphere." },
  ],
  concepts: [
    {
      id: "ess9-u1-fusion-star-lifecycles",
      title: "Nuclear fusion and the life cycles of stars",
      skill: "Explain how fusion releases energy in stars and compare the life cycles of low-mass and high-mass stars.",
      lesson: {
        sections: [
          {
            heading: "Fusion powers the Sun",
            body: "The Sun's core is about $1.5\\times10^{7}\\text{ K}$. At this temperature and pressure, hydrogen nuclei (protons) move fast enough to overcome their electric repulsion and **fuse** to form helium. A tiny fraction of the mass disappears and becomes energy, as described by Einstein's equation $E=mc^2$.\n\nThe Sun fuses about $6.0\\times10^{11}\\text{ kg}$ of hydrogen every second and converts about $4.2\\times10^{9}\\text{ kg}$ of that mass into energy, roughly $0.70\\%$. The energy reaches the surface and is radiated as light. This balance between inward gravity and outward pressure from fusion keeps a main-sequence star stable.",
          },
          {
            heading: "Life cycles depend on mass",
            body: "A star's mass sets its whole life story.\n\n- **Low and medium mass (up to about 8 solar masses):** hydrogen runs out in the core, the star swells into a **red giant**, sheds its outer layers as a planetary nebula, and the core remains as a **white dwarf**.\n- **High mass (more than about 8 solar masses):** the star becomes a supergiant and fuses heavier elements in shells, up to **iron**. Fusing iron does not release energy, so the core collapses and the star explodes as a **supernova**. The remnant is a neutron star or, for the most massive cores, a black hole.\n\nMore massive stars have hotter cores, burn fuel much faster and live for a shorter time. The Sun will spend about 10 billion years on the main sequence, but a star of 20 solar masses lasts only a few million years.",
          },
          {
            heading: "Where the elements come from",
            body: "The Big Bang made almost only hydrogen and helium. Fusion in stars builds elements up to iron. Supernova explosions create elements heavier than iron and scatter all of these elements into space, where they form new stars and planets. The carbon, oxygen and iron in your body were made in earlier generations of stars.",
          },
        ],
        keyFormulas: [
          { name: "Mass-energy equivalence", statement: "$E=mc^2$, with $c=3.00\\times10^{8}\\text{ m/s}$" },
          { name: "Sun's main fusion", statement: "Hydrogen nuclei fuse to form helium, releasing energy" },
          { name: "Fate by mass", statement: "Low mass: red giant, then white dwarf. High mass: supergiant, supernova, then neutron star or black hole" },
        ],
        workedExample: {
          problem: "A star radiates $7.6\\times10^{26}\\text{ J}$ of energy each second. Calculate the mass converted to energy each second. Use $c=3.00\\times10^{8}\\text{ m/s}$.",
          solution: "Rearrange $E=mc^2$ to $m=\\dfrac{E}{c^2}$. Then $m=\\dfrac{7.6\\times10^{26}}{(3.00\\times10^{8})^2}=\\dfrac{7.6\\times10^{26}}{9.00\\times10^{16}}=8.4\\times10^{9}\\text{ kg}$. This is about twice the Sun's mass loss rate, so the star is more luminous than the Sun.",
        },
      },
      questions: [
        {
          id: "ess9-u1-fusion-star-lifecycles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process releases the energy that the Sun radiates?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chemical burning of hydrogen with oxygen" },
              { id: "b", text: "Nuclear fusion of helium nuclei into hydrogen" },
              { id: "c", text: "Nuclear fusion of hydrogen nuclei into helium" },
              { id: "d", text: "Nuclear fission of uranium in the core" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stellar fusion", statement: "In main-sequence stars, hydrogen nuclei fuse into helium and a small amount of mass is released as energy." },
            ],
            steps: [
              { reasoning: "The Sun's core is hot and dense enough for hydrogen nuclei to fuse into helium. This is nuclear fusion.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Nuclear fusion of hydrogen nuclei into helium",
            commonErrors: ["Choosing fission, which splits heavy nuclei and is used in nuclear power plants, not stars.", "Choosing chemical burning; there is no oxygen to burn in the Sun and chemical reactions release far too little energy."],
            examinerNote: "B1 for fusion of hydrogen into helium.",
          },
        },
        {
          id: "ess9-u1-fusion-star-lifecycles-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The Sun radiates $3.8\\times10^{26}\\text{ J}$ of energy every second. Use $E=mc^2$ with $c=3.00\\times10^{8}\\text{ m/s}$ to calculate the mass converted to energy each second.\n\nGive your answer in units of $10^{9}\\text{ kg}$ to 2 significant figures.",
          response: { type: "numeric", parts: [{ label: "Mass converted per second", answer: 4.2, tolerance: 0.05, unit: "×10^9 kg" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mass-energy equivalence", statement: "$E=mc^2$, so $m=\\dfrac{E}{c^2}$" },
            ],
            steps: [
              { reasoning: "Rearrange the equation to make mass the subject.", working: "m=\\frac{E}{c^2}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the energy and the speed of light, squaring $c$.", working: "m=\\frac{3.8\\times10^{26}}{(3.00\\times10^{8})^2}=\\frac{3.8\\times10^{26}}{9.00\\times10^{16}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and express in the requested units.", working: "m=4.2\\times10^{9}\\text{ kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.2\\times10^{9}\\text{ kg}$, so the answer is **4.2** in units of $10^{9}\\text{ kg}$.",
            commonErrors: ["Forgetting to square the speed of light, giving $1.3\\times10^{18}\\text{ kg}$.", "Multiplying the energy by $c^2$ instead of dividing."],
            examinerNote: "M1 for $m=E/c^2$ (oe). M1 for correct substitution with $c^2=9.00\\times10^{16}$. A1 for $4.2\\times10^{9}\\text{ kg}$. Allow 4.22 and 4.2 (ecf for an incorrect power of ten only if units are consistent).",
          },
        },
        {
          id: "ess9-u1-fusion-star-lifecycles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare what happens at the end of the lives of a star with the mass of the Sun and a star with 20 times the mass of the Sun.\n\nUse evidence from the stars' cores and explain the difference.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mass determines fate", statement: "The mass of a star determines which elements it can fuse and how its life ends." },
              { kind: "property", name: "Iron", statement: "Fusing iron does not release energy, so fusion stops when a massive star's core becomes iron." },
            ],
            steps: [
              { reasoning: "A star like the Sun swells into a red giant, sheds its outer layers as a planetary nebula, and the core is left as a white dwarf.", marks: 1, markCode: "B" },
              { reasoning: "The 20 solar mass star has enough gravity and a hot enough core to fuse heavier elements in stages, up to iron.", marks: 1, markCode: "B" },
              { reasoning: "Fusing iron does not release energy, so the core can no longer resist gravity; it collapses and the star explodes as a supernova.", marks: 1, markCode: "B" },
              { reasoning: "The massive star leaves a neutron star or a black hole, whereas the Sun-like star leaves a white dwarf, because the greater mass produces stronger gravitational collapse.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Sun-like star: red giant, planetary nebula, white dwarf. 20 solar mass star: fuses up to iron, core collapses in a supernova, leaving a neutron star or black hole. The difference is caused by mass.",
            commonErrors: ["Saying the Sun will explode as a supernova.", "Saying iron fusion releases energy.", "Describing the end states without linking them to mass."],
            examinerNote: "B1 for each of: red giant / planetary nebula / white dwarf for the Sun; fusion up to iron for the massive star; core collapse (as iron fusion does not release energy) and supernova; neutron star or black hole remnant linked to greater mass (R1). Allow 'black hole or neutron star'.",
          },
        },
        {
          id: "ess9-u1-fusion-star-lifecycles-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The Sun fuses about $6.0\\times10^{11}\\text{ kg}$ of hydrogen each second and converts about $4.2\\times10^{9}\\text{ kg}$ of mass into energy each second.",
          parts: [
            { label: "a", prompt: "Explain why fusion needs the extremely high temperatures found in the core of a star.", marks: 2 },
            { label: "b", prompt: "Calculate the percentage of the fused mass that is converted to energy. Give your answer to 2 significant figures.", marks: 2 },
            { label: "c", prompt: "A star with 20 times the mass of the Sun has far more hydrogen than the Sun but a much shorter life. Explain why.", marks: 3 },
            { label: "d", prompt: "Explain how a supernova makes it possible for rocky planets and living things to exist.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Overcoming repulsion", statement: "Positively charged nuclei repel each other; fusion needs very high speeds, so very high temperature." },
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage}=\\dfrac{\\text{part}}{\\text{whole}}\\times100$" },
              { kind: "principle", name: "Mass and lifetime", statement: "Massive stars have hotter cores and fuse hydrogen much faster, so they have shorter lives." },
            ],
            steps: [
              { part: "a", reasoning: "Nuclei are positively charged, so they repel each other with a strong electric force.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "At very high temperature the nuclei move fast enough (have enough kinetic energy) to get close and fuse.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide the mass converted by the mass fused and multiply by 100.", working: "\\frac{4.2\\times10^{9}}{6.0\\times10^{11}}\\times100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to 2 significant figures.", working: "=0.70\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The more massive star has stronger gravity, so its core is hotter and denser.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Fusion therefore happens much faster (it radiates far more energy per second).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "It uses up its hydrogen fuel faster, so its main sequence life is much shorter despite having more fuel.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "A supernova creates elements heavier than iron and scatters elements made in the star (carbon, oxygen, iron) into space.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "This material later forms new stars, planets and living things.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Nuclei repel; high temperature gives fast nuclei that can fuse. (b) $0.70\\%$ (c) Greater mass gives a hotter core, so fusion is faster and fuel runs out sooner. (d) Supernovae make and spread heavy elements that form new planets and life.",
            commonErrors: ["In (b) writing 0.007 and not converting to a percentage.", "In (c) saying the star has less fuel.", "In (d) saying that the Sun will become a supernova."],
            examinerNote: "(b) Allow 0.7. Accept 0.007 only if clearly written as a fraction before converting (M1 only). (c) Reject 'less fuel'. Allow 'hotter core' oe. (d) Allow 'elements heavier than iron'.",
          },
        },
      ],
    },
    {
      id: "ess9-u1-hr-diagram-spectra",
      title: "The Hertzsprung-Russell diagram and stellar spectra",
      skill: "Use the HR diagram, Wien's law and absorption spectra to classify stars and interpret their properties.",
      lesson: {
        sections: [
          {
            heading: "Reading the HR diagram",
            body: "The **Hertzsprung-Russell (HR) diagram** plots each star's **luminosity** (vertical axis) against its **surface temperature** (horizontal axis). By tradition, temperature **decreases** from left to right, so hot blue stars are on the left and cool red stars are on the right.\n\n- The **main sequence** is a diagonal band from hot, luminous stars (upper left) to cool, dim stars (lower right). About 90% of stars, including the Sun, lie here.\n- **Red giants and supergiants** are cool but very luminous (upper right), so they must be very large.\n- **White dwarfs** are hot but dim (lower left), so they must be very small.\n\nLuminosity depends on surface area and temperature: $L\\propto R^2T^4$. At the same temperature, a star with a larger luminosity must have a larger radius.",
          },
          {
            heading: "Spectra reveal temperature and composition",
            body: "Hot, dense matter emits a continuous spectrum. The wavelength of peak emission depends on temperature, as given by **Wien's law**:\n\n$$\\lambda_{\\max}=\\frac{b}{T},\\qquad b=2.90\\times10^{-3}\\text{ m·K}$$\n\nHotter stars peak at shorter wavelengths (blue), cooler stars peak at longer wavelengths (red). As light passes through a star's cooler outer atmosphere, elements absorb particular wavelengths and leave dark **absorption lines**. Each element has a unique pattern of lines, so astronomers can identify what a star is made of. Most stars are about 70% hydrogen and 28% helium by mass.",
          },
        ],
        keyFormulas: [
          { name: "Wien's law", statement: "$\\lambda_{\\max}=\\dfrac{b}{T}$, with $b=2.90\\times10^{-3}\\text{ m·K}$ and $T$ in kelvin" },
          { name: "Luminosity", statement: "$L\\propto R^2T^4$" },
          { name: "HR diagram regions", statement: "Main sequence (diagonal), giants (upper right), white dwarfs (lower left)" },
        ],
        workedExample: {
          problem: "A star has a peak wavelength of 290 nm. Calculate its surface temperature.",
          solution: "Rearrange to $T=\\dfrac{b}{\\lambda_{\\max}}$. Convert $290\\text{ nm}=2.90\\times10^{-7}\\text{ m}$. Then $T=\\dfrac{2.90\\times10^{-3}}{2.90\\times10^{-7}}=1.0\\times10^{4}\\text{ K}$. This is a hot blue-white star.",
        },
      },
      questions: [
        {
          id: "ess9-u1-hr-diagram-spectra-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a Hertzsprung-Russell diagram, where would you find a red giant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower right: cool and dim" },
              { id: "b", text: "Upper right: cool and very luminous" },
              { id: "c", text: "Upper left: hot and very luminous" },
              { id: "d", text: "Lower left: hot and dim" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "HR diagram regions", statement: "Red giants are cool (right) and very luminous (top)." },
            ],
            steps: [
              { reasoning: "A red giant has a low surface temperature (red) but a high luminosity because it is very large, so it is at the upper right.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Upper right: cool and very luminous",
            commonErrors: ["Choosing lower left, which is where white dwarfs lie.", "Forgetting that temperature increases to the left on an HR diagram."],
            examinerNote: "B1 for cool and luminous / upper right.",
          },
        },
        {
          id: "ess9-u1-hr-diagram-spectra-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The surface temperature of the Sun is $5800\\text{ K}$. Use Wien's law, $\\lambda_{\\max}=\\dfrac{b}{T}$ with $b=2.90\\times10^{-3}\\text{ m·K}$, to calculate the peak wavelength of sunlight.\n\nGive your answer in nanometers ($1\\text{ nm}=10^{-9}\\text{ m}$).",
          response: { type: "numeric", parts: [{ label: "Peak wavelength", answer: 500, tolerance: 2, unit: "nm" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Wien's law", statement: "$\\lambda_{\\max}=\\dfrac{b}{T}$: the hotter the object, the shorter the peak wavelength." },
            ],
            steps: [
              { reasoning: "Substitute the constant and the temperature in kelvin.", working: "\\lambda_{\\max}=\\frac{2.90\\times10^{-3}}{5800}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate in meters.", working: "\\lambda_{\\max}=5.0\\times10^{-7}\\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "Convert to nanometers by multiplying by $10^{9}$.", working: "5.0\\times10^{-7}\\times10^{9}=500\\text{ nm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$500\\text{ nm}$ (green-yellow visible light)",
            commonErrors: ["Not converting meters to nanometers.", "Multiplying $b$ by $T$ instead of dividing."],
            examinerNote: "M1 for $b/T$. A1 for $5.0\\times10^{-7}\\text{ m}$. A1 for 500 nm. Allow 499 to 501.",
          },
        },
        {
          id: "ess9-u1-hr-diagram-spectra-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Star A and Star B both have a surface temperature of $3500\\text{ K}$. Star A has a luminosity $10\\,000$ times that of the Sun. Star B has a luminosity $0.01$ times that of the Sun.\n\nUse $L\\propto R^2T^4$ to compare the radii of the two stars, and identify the type of each star.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Luminosity", statement: "$L\\propto R^2T^4$, so at equal temperature $L\\propto R^2$." },
            ],
            steps: [
              { reasoning: "The temperatures are equal, so the difference in luminosity is due only to surface area, which depends on $R^2$.", marks: 1, markCode: "B" },
              { reasoning: "Find the ratio of luminosities and take the square root to get the ratio of radii.", working: "\\frac{R_A}{R_B}=\\sqrt{\\frac{L_A}{L_B}}=\\sqrt{\\frac{10000}{0.01}}=\\sqrt{10^{6}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: Star A is 1000 times larger in radius than Star B.", working: "\\frac{R_A}{R_B}=1000", marks: 1, markCode: "A" },
              { reasoning: "Star A is cool and very luminous, so it is a red giant or supergiant. Star B is cool and dim, so it is a red dwarf on the main sequence.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Star A's radius is **1000 times** Star B's. Star A is a red giant/supergiant; Star B is a red dwarf (main sequence).",
            commonErrors: ["Taking the ratio of luminosities (1 000 000) as the ratio of radii without taking the square root.", "Saying that the stars have different colors; equal temperatures mean equal colors."],
            examinerNote: "B1 same temperature so luminosity depends on size. M1 square root of ratio of luminosities. A1 1000. B1 correct types for both stars. Allow 'red supergiant' or 'giant' for A.",
          },
        },
        {
          id: "ess9-u1-hr-diagram-spectra-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "An astronomer studies the light from a distant star. Its spectrum has a peak at a wavelength of $450\\text{ nm}$ and contains dark absorption lines of hydrogen and helium. The star has a luminosity of 2 times the Sun's. Use $b=2.90\\times10^{-3}\\text{ m·K}$.",
          parts: [
            { label: "a", prompt: "Explain how the dark absorption lines are produced and what they tell astronomers about the star.", marks: 2 },
            { label: "b", prompt: "Calculate the surface temperature of the star in kelvin. Give your answer to 2 significant figures.", marks: 3 },
            { label: "c", prompt: "The star is on the main sequence. Compare it with the Sun, using its temperature and luminosity.", marks: 2 },
            { label: "d", prompt: "Predict whether the star will spend more or less time on the main sequence than the Sun. Explain your reasoning.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Absorption spectra", statement: "Elements in a star's cooler atmosphere absorb specific wavelengths, producing a unique pattern of dark lines." },
              { kind: "law", name: "Wien's law", statement: "$T=\\dfrac{b}{\\lambda_{\\max}}$" },
              { kind: "principle", name: "Mass and lifetime", statement: "Higher mass main-sequence stars are hotter and more luminous, and live for a shorter time." },
            ],
            steps: [
              { part: "a", reasoning: "Light from the hot interior passes through the cooler outer atmosphere, where atoms absorb particular wavelengths and leave dark lines.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Each element has a unique pattern of lines, so the lines show which elements (hydrogen, helium) are in the star.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Convert 450 nm to meters and rearrange Wien's law.", working: "T=\\frac{b}{\\lambda_{\\max}},\\quad \\lambda_{\\max}=4.50\\times10^{-7}\\text{ m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute.", working: "T=\\frac{2.90\\times10^{-3}}{4.50\\times10^{-7}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to 2 significant figures.", working: "T=6444\\text{ K}\\approx6400\\text{ K}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The star is hotter than the Sun ($6400\\text{ K}$ compared with $5800\\text{ K}$), so it appears bluer-white or yellow-white.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "It is more luminous (2 times the Sun), so it lies higher and to the left of the Sun on the main sequence and is slightly more massive.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It will spend less time on the main sequence than the Sun.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Being more massive, its core is hotter and it fuses hydrogen faster, so it uses its fuel up sooner.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Atoms in the cooler atmosphere absorb specific wavelengths; the pattern identifies elements. (b) $6400\\text{ K}$ (c) Hotter and more luminous than the Sun, so slightly more massive and higher on the main sequence. (d) Shorter main sequence life because fusion is faster.",
            commonErrors: ["In (b) forgetting to convert nanometers to meters.", "In (c) placing the star at the lower left, where white dwarfs lie.", "In (d) saying more massive stars live longer because they have more fuel."],
            examinerNote: "(b) Accept 6400 or 6444. Allow ecf if the unit conversion is wrong in the first M mark only. (c) Allow 'more massive' oe. (d) Reject 'longer'.",
          },
        },
      ],
    },
  ],
};
