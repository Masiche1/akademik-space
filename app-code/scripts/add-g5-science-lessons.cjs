const fs = require('fs');
const path = 'scripts/data-us-g5-science.cjs';
let s = fs.readFileSync(path, 'utf8');

function mk(slug, title, can, standards, vocab, skill, sections, formulas, worked, questions) {
  return '        lesson("' + slug + '", "' + title + '", "' + can + '", ' + JSON.stringify(standards) + ',\n' +
    '          ' + JSON.stringify(vocab) + ',\n' +
    '          {\n' +
    '            title: "' + title + '",\n' +
    '            skill: "' + skill + '",\n' +
    '            sections: ' + JSON.stringify(sections) + ',\n' +
    '            formulas: ' + JSON.stringify(formulas) + ',\n' +
    '            worked: ' + JSON.stringify(worked) + ',\n' +
    '            questions: Q8(\n' + questions + '\n            ),\n' +
    '          }),\n';
}

function qs(arr) {
  return arr.map(q => '              ' + q).join(',\n') + ',';
}

// Unit 3: plant-animal-cells
const u3 = mk('plant-animal-cells', 'Plant and Animal Cells', 'I CAN compare plant and animal cells.', ['LS1.A'],
  [['Cell', 'Basic unit of life.'], ['Nucleus', 'Control center.'], ['Membrane', 'Boundary.'], ['Cytoplasm', 'Inside material.'], ['Cell wall', 'Plant only.'], ['Chloroplast', 'Photosynthesis.'], ['Vacuole', 'Storage.'], ['Organelle', 'Cell part.']],
  'Compare plant and animal cell structures.',
  [['Plant', 'Has cell wall + chloroplasts.'], ['Animal', 'No wall/chloroplasts.']],
  [['Cells', 'Plant vs animal = comparison']],
  { problem: 'Compare a plant cell and an animal cell: what parts are different?', solution: 'Plant: cell wall, chloroplasts, large vacuole. Animal: no wall/chloroplasts, smaller vacuole.' },
  qs([
    'one.mcqF("Plant cells have...", [["a","no cell wall"],["b","cell wall and chloroplasts"],["c","no nucleus"],["d","no membrane"]], "b", "Cell wall + chloroplasts.", "cell wall and chloroplasts", "Confuses with animal."),',
    'one.mcqC("Animal cells lack...", [["a","nucleus"],["b","cell wall and chloroplasts"],["c","membrane"],["d","cytoplasm"]], "b", "No wall/chloroplasts.", "cell wall and chloroplasts", "Confuses with plant."),',
    'op("core", "Compare plant and animal cells. List 3 parts they share and 2 parts that differ.", [P("skill","Cells","Shared + different parts.")], [S("Lists shared.",1,"M"), S("Lists differences.",1,"B")], "**Shared: nucleus, membrane, cytoplasm; Different: plant has cell wall/chloroplasts, animal does not.**", ["Cannot compare.","Missing parts."]),',
    'one.mcqF("Chloroplasts are important because they...", [["a","store water"],["b","perform photosynthesis"],["c","control cell"],["d","make protein"]], "b", "Photosynthesis.", "perform photosynthesis", "Wrong function."),',
    'two.opH("Explain why plant cells need chloroplasts but animal cells do not.", [P("skill","Cells","Why chloroplasts.")], [S("Explains chloroplasts.",1,"M"), S("Explains animal difference.",1,"B")], "**Plants make own food via photosynthesis; animals eat food — no chloroplasts needed.**", ["Cannot explain.","No difference."]),',
    'vocabQs([["Cell","Basic unit of life."],["Nucleus","Control center."],["Membrane","Boundary."],["Cytoplasm","Inside material."],["Cell wall","Plant only."],["Chloroplast","Photosynthesis."],["Vacuole","Storage."],["Organelle","Cell part."]], 3),'
  ]));
s = s.replace('        lesson("cell-life-review"', u3 + '        lesson("cell-life-review"');

// Unit 7: real-world-engineering
const u7 = mk('real-world-engineering', 'Real-World Engineering', 'I CAN identify engineering solutions in the real world.', ['ETS1.A'],
  [['Engineering', 'Applying science to problems.'], ['Solution', 'What solves problem.'], ['Design', 'How it works.'], ['Technology', 'Tools/devices.'], ['Innovation', 'New solution.'], ['Efficiency', 'Works well.'], ['Safety', 'No harm.'], ['Sustainability', 'Long-term.']],
  'Identify engineering solutions and their design in real-world applications.',
  [['Engineering', 'Science -> technology -> solutions.'], ['Design', 'Criteria + constraints -> solution.']],
  [['Engineering', 'Science + design = solutions']],
  { problem: 'Identify an engineering solution: how does a smartphone combine multiple engineering disciplines?', solution: 'Materials science (screen), electrical (battery), software (apps), mechanical (buttons) — multiple disciplines.' },
  qs([
    'one.mcqF("Engineering applies...", [["a","only math"],["b","science to solve real-world problems"],["c","only art"],["d","only biology"]], "b", "Science to solve problems.", "science to solve real-world problems", "Too narrow."),',
    'one.mcqC("A solution in engineering is...", [["a","the problem"],["b","what solves the problem"],["c","the design"],["d","the test"]], "b", "What solves problem.", "what solves the problem", "Confuses with problem."),',
    'op("core", "Choose a real-world technology (e.g., smartphone, bridge, vaccine). Identify which engineering disciplines it uses.", [P("skill","Engineering","Technology + disciplines.")], [S("Identifies technology.",1,"M"), S("Lists disciplines.",1,"B")], "**e.g., Smartphone: electrical (battery), materials (screen), software (apps), mechanical (buttons).**", ["Cannot identify.","Missing disciplines."]),',
    'one.mcqF("Innovation in engineering means...", [["a","old ideas"],["b","new or improved solutions"],["c","copying"],["d","stopping"]], "b", "New/improved solutions.", "new or improved solutions", "Wrong meaning."),',
    'two.opH("Explain how engineering solutions balance criteria, constraints and sustainability.", [P("skill","Engineering","Balance explained.")], [S("Explains balance.",1,"M"), S("Gives example.",1,"B")], "**Good solutions meet criteria within constraints while considering long-term sustainability.**", ["Cannot explain.","No example."]),',
    'vocabQs([["Engineering","Applying science to problems."],["Solution","What solves problem."],["Design","How it works."],["Technology","Tools/devices."],["Innovation","New solution."],["Efficiency","Works well."],["Safety","No harm."],["Sustainability","Long-term."]], 3),'
  ]));
s = s.replace('        lesson("engineering-review"', u7 + '        lesson("engineering-review"');

// Unit 8: science-method
const u8 = mk('science-method', 'Scientific Method', 'I CAN use the scientific method to investigate questions.', ['ETS1.A'],
  [['Scientific method', 'Steps to investigate.'], ['Question', 'What you want to know.'], ['Hypothesis', 'Prediction.'], ['Experiment', 'Test it.'], ['Data', 'Results.'], ['Conclusion', 'What you learned.'], ['Variable', 'What changes.'], ['Control', 'Baseline.']],
  'Use the scientific method: question, hypothesis, experiment, data, conclusion.',
  [['Method', 'Question -> hypothesis -> experiment -> data -> conclusion.'], ['Variables', 'Independent + dependent + control.']],
  [['Science', 'Question + hypothesis + experiment + conclusion = method']],
  { problem: 'Investigate: does water temperature affect how fast ice melts?', solution: 'Question: Does temp affect melt rate? Hypothesis: warmer melts faster. Experiment: ice in warm vs cold water. Data: warm melted faster. Conclusion: yes.' },
  qs([
    'one.mcqF("The scientific method is...", [["a","guessing"],["b","systematic steps to investigate"],["c","reading"],["d","memorizing"]], "b", "Systematic investigation.", "systematic steps to investigate", "Not systematic."),',
    'one.mcqC("A hypothesis is...", [["a","the question"],["b","a testable prediction"],["c","the conclusion"],["d","the data"]], "b", "Testable prediction.", "a testable prediction", "Confuses with other steps."),',
    'op("core", "Follow the scientific method: write a question, hypothesis, experiment design, and what data you would collect.", [P("skill","Method","All steps.")], [S("Does all steps.",1,"M")], "**Question: ...; Hypothesis: ...; Experiment: ...; Data: ...**", ["Missing steps.","Wrong order."]),',
    'one.mcqF("Variables in an experiment are...", [["a","only one"],["b","things that can change"],["c","constants"],["d","results"]], "b", "Things that change.", "things that can change", "Confuses with constants."),',
    'two.opH("Explain the difference between independent and dependent variables with an example.", [P("skill","Method","Difference + example.")], [S("Explains variables.",1,"M"), S("Gives example.",1,"B")], "**Independent: what you change (temp); Dependent: what you measure (melt rate).**", ["Cannot explain.","No example."]),',
    'vocabQs([["Scientific method","Steps to investigate."],["Question","What you want to know."],["Hypothesis","Prediction."],["Experiment","Test it."],["Data","Results."],["Conclusion","What you learned."],["Variable","What changes."],["Control","Baseline."]], 3),'
  ]));
s = s.replace('        lesson("grade5-final"', u8 + '        lesson("grade5-final"');

fs.writeFileSync(path, s);
console.log('done');
