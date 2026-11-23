const fs = require('fs');
const path = 'scripts/data-us-g5-math.cjs';
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

// Unit 3: fraction mult/div practice
const u3 = mk('fraction-mult-div-practice', 'Fraction Mult/Div Practice', 'I CAN practice multiplying and dividing fractions.', ['5.NF.B.4', '5.NF.B.7'],
  [['Multiply', 'Numerators x numerators.'], ['Divide', 'Multiply by reciprocal.'], ['Fraction', 'Part of whole.'], ['Mixed number', 'Whole + fraction.'], ['Product', 'Answer.'], ['Quotient', 'Division answer.'], ['Simplify', 'Reduce.'], ['Convert', 'Change form.']],
  'Multiply and divide fractions with practice problems.',
  [['Multiply', 'Num x num, denom x denom.'], ['Divide', 'Multiply by reciprocal.'], ['Mixed', 'Convert to improper first.']],
  [['Multiply', 'a/b x c/d = ac/bd'], ['Divide', 'a/b ÷ c/d = a/b x d/c']],
  { problem: 'Calculate 3/4 x 2/5 and 5/6 ÷ 1/3.', solution: '3/4 x 2/5 = 6/20 = 3/10; 5/6 ÷ 1/3 = 5/6 x 3 = 15/6 = 5/2 = 2 1/2.' },
  qs([
    'one.mcqF("What is 3/4 x 2/5?", [["a","3/10"],["b","6/20"],["c","5/9"],["d","6/9"]], "a", "3/4 x 2/5 = 6/20 = 3/10.", "3/10", "Not simplified."),',
    'one.mcqC("What is 5/6 ÷ 1/3?", [["a","5/2"],["b","5/18"],["c","1/3"],["d","15/6"]], "a", "5/6 x 3 = 15/6 = 5/2.", "5/2", "Wrong quotient."),',
    'op("core", "Multiply 2/3 x 3/4 and divide 7/8 ÷ 1/4. Simplify.", [P("skill","Frac ops","1/2 and 7/2.")], [S("Multiplies and divides.",1,"M")], "**2/3 x 3/4 = 6/12 = 1/2; 7/8 ÷ 1/4 = 7/8 x 4 = 28/8 = 7/2 = 3 1/2**", ["Wrong answers.","Not simplified."]),',
    'one.mcqF("To divide fractions, multiply by...", [["a","the same fraction"],["b","the reciprocal"],["c","1"],["d","the numerator"]], "b", "Multiply by reciprocal.", "the reciprocal", "Wrong method."),',
    'two.opH("Calculate 2 1/2 x 3/4 and 4 1/3 ÷ 2/3. Convert to improper fractions first.", [P("skill","Frac ops","15/8 and 13/2.")], [S("Converts correctly.",1,"M"), S("Calculates correctly.",1,"B")], "**2 1/2 = 5/2; 5/2 x 3/4 = 15/8 = 1 7/8; 4 1/3 = 13/3; 13/3 ÷ 2/3 = 13/3 x 3/2 = 39/6 = 13/2 = 6 1/2**", ["Wrong answers.","No conversion."]),',
    'vocabQs([["Multiply","Numerators x numerators."],["Divide","Multiply by reciprocal."],["Fraction","Part of whole."],["Mixed number","Whole + fraction."],["Product","Answer."],["Quotient","Division answer."],["Simplify","Reduce."],["Convert","Change form."]], 3),'
  ]));
s = s.replace('        lesson("fraction-mult-div-review"', u3 + '        lesson("fraction-mult-div-review"');

// Unit 4: decimal word problems
const u4 = mk('decimal-word-problems', 'Decimal Word Problems', 'I CAN solve word problems with decimals.', ['5.NBT.B.7'],
  [['Decimal', 'Base-ten fraction.'], ['Word problem', 'Story with numbers.'], ['Money', 'Dollars and cents.'], ['Add', 'Combine.'], ['Subtract', 'Take away.'], ['Multiply', 'Repeated addition.'], ['Divide', 'Split.'], ['Estimate', 'Check reasonableness.']],
  'Solve word problems involving decimal operations.',
  [['Problems', 'Identify operation -> solve -> check.'], ['Decimals', 'Align points for add/sub; multiply/divide normally.']],
  [['Problems', 'Add + subtract + multiply + divide decimals']],
  { problem: 'A shirt costs $24.99. You buy 3 shirts and pay with $100. How much change?', solution: '24.99 x 3 = 74.97; 100 - 74.97 = $25.03 change.' },
  qs([
    'one.mcqF("A book costs $15.75. What is the cost with 7% tax?", [["a","$16.87"],["b","$15.82"],["c","$17.12"],["d","$16.25"]], "a", "15.75 x 1.07 ≈ 16.85, so about $16.87.", "$16.87", "Wrong calculation."),',
    'one.mcqC("You buy 4 items at $12.50 each. Total cost?", [["a","$48.00"],["b","$50.00"],["c","$45.00"],["d","$52.00"]], "b", "12.50 x 4 = 50.00.", "$50.00", "Wrong product."),',
    'op("core", "A car uses 8.5 gallons per 100 miles. How much gas for 350 miles? If gas is $3.45/gallon, total cost?", [P("skill","Problems","29.75 gallons, $102.64.")], [S("Calculates gas.",1,"M"), S("Calculates cost.",1,"B")], "**8.5 x 3.5 = 29.75 gallons; 29.75 x 3.45 = $102.64**", ["Wrong answers.","Missing steps."]),',
    'one.mcqF("When solving decimal word problems, you should...", [["a","ignore decimals"],["b","align decimal points for addition/subtraction"],["c","round everything"],["d","guess"]], "b", "Align decimal points.", "align decimal points for addition/subtraction", "Wrong method."),',
    'two.opH("A restaurant bill is $87.50. You add 20% tip and split it 4 ways. How much does each person pay?", [P("skill","Problems","$26.25 each.")], [S("Calculates tip + total.",1,"M"), S("Divides correctly.",1,"B")], "**87.50 x 1.20 = 105.00; 105.00 / 4 = $26.25 each**", ["Wrong amount.","Missing steps."]),',
    'vocabQs([["Decimal","Base-ten fraction."],["Word problem","Story with numbers."],["Money","Dollars and cents."],["Add","Combine."],["Subtract","Take away."],["Multiply","Repeated addition."],["Divide","Split."],["Estimate","Check reasonableness."]], 3),'
  ]));
s = s.replace('        lesson("decimal-review"', u4 + '        lesson("decimal-review"');

// Unit 5: volume practice
const u5 = mk('volume-practice', 'Volume Practice', 'I CAN solve volume problems with rectangular prisms.', ['5.MD.C.4', '5.MD.C.5'],
  [['Volume', 'Space inside 3D shape.'], ['Rectangular prism', 'Box shape.'], ['Cubic unit', 'cm³, m³, etc.'], ['Layer', 'One level of cubes.'], ['Formula', 'V = l x w x h.'], ['Capacity', 'How much it holds.'], ['Cube', 'All sides equal.'], ['Edge', 'Side of cube.']],
  'Find volume of rectangular prisms and solve volume word problems.',
  [['Volume', 'l x w x h = space inside.'], ['Layers', 'l x w = one layer; x h = total.']],
  [['Volume', 'V = l x w x h']],
  { problem: 'A box is 8 cm x 6 cm x 4 cm. Volume? How many 2 cm cubes fit?', solution: '8 x 6 x 4 = 192 cm³. Each cube is 8 cm³, so 192/8 = 24 cubes.' },
  qs([
    'one.mcqF("A box is 10 cm x 5 cm x 2 cm. Volume?", [["a","100 cm³"],["b","17 cm³"],["c","50 cm³"],["d","200 cm³"]], "a", "10 x 5 x 2 = 100 cm³.", "100 cm³", "Wrong volume."),',
    'one.mcqC("A cube has edge 4 cm. Volume?", [["a","16 cm³"],["b","64 cm³"],["c","12 cm³"],["d","48 cm³"]], "b", "4 x 4 x 4 = 64 cm³.", "64 cm³", "Wrong volume."),',
    'op("core", "Find the volume of a prism 9 cm x 7 cm x 5 cm AND a cube with edge 6 cm.", [P("skill","Volume","315 cm³ and 216 cm³.")], [S("Finds both volumes.",1,"M")], "**Prism: 9x7x5 = 315 cm³; Cube: 6x6x6 = 216 cm³**", ["Wrong volumes.","Only one found."]),',
    'one.mcqF("Volume is measured in...", [["a","square units"],["b","cubic units"],["c","linear units"],["d","units"]], "b", "Volume = cubic units.", "cubic units", "Confuses with area."),',
    'two.opH("A fish tank is 40 cm long, 20 cm wide, 25 cm tall. How many liters of water can it hold?", [P("skill","Volume","20,000 cm³ = 20 L.")], [S("Calculates volume.",1,"M"), S("Converts to liters.",1,"B")], "**40 x 20 x 25 = 20,000 cm³ = 20,000 mL = 20 L**", ["Wrong volume.","No conversion."]),',
    'vocabQs([["Volume","Space inside 3D shape."],["Rectangular prism","Box shape."],["Cubic unit","cm³, m³, etc."],["Layer","One level of cubes."],["Formula","V = l x w x h."],["Capacity","How much it holds."],["Cube","All sides equal."],["Edge","Side of cube."]], 3),'
  ]));
s = s.replace('        lesson("measurement-review"', u5 + '        lesson("measurement-review"');

// Unit 6: shape properties
const u6 = mk('shape-properties', 'Shape Properties', 'I CAN identify properties of 2D shapes.', ['5.G.B.3', '5.G.B.4'],
  [['Quadrilateral', '4-sided shape.'], ['Parallelogram', 'Opposite sides parallel.'], ['Rectangle', '4 right angles.'], ['Rhombus', '4 equal sides.'], ['Square', 'Both rectangle + rhombus.'], ['Trapezoid', 'One pair parallel.'], ['Kite', 'Two pairs adjacent equal.'], ['Property', 'Characteristic.']],
  'Identify and classify 2D shapes by their properties.',
  [['Hierarchy', 'Square -> rectangle/rhombus -> parallelogram.'], ['Properties', 'Sides, angles, symmetry.']],
  [['Shapes', 'Classify by properties']],
  { problem: 'Is a rhombus always a square? Is a square always a rhombus?', solution: 'No, rhombus needs only equal sides (may not have right angles). Yes, square is always a rhombus (has equal sides) AND a rectangle (has right angles).' },
  qs([
    'one.mcqF("A rhombus has...", [["a","4 right angles"],["b","4 equal sides"],["c","one pair parallel"],["d","no equal sides"]], "b", "Rhombus = equal sides.", "4 equal sides", "Confuses with rectangle."),',
    'one.mcqC("A square is both a...", [["a","triangle and rectangle"],["b","rectangle and rhombus"],["c","trapezoid and kite"],["d","parallelogram only"]], "b", "Square = rectangle + rhombus.", "rectangle and rhombus", "Wrong classification."),',
    'op("core", "Classify these shapes: parallelogram, rectangle, rhombus, square, trapezoid, kite. Give one property for each.", [P("skill","Shapes","Six classifications.")], [S("Classifies all six.",1,"M")], "**Parallelogram: parallel sides; Rectangle: 4 right angles; Rhombus: 4 equal sides; Square: both; Trapezoid: one pair parallel; Kite: adjacent equal sides.**", ["Wrong classifications.","Missing properties."]),',
    'one.mcqF("Every rectangle is a...", [["a","square"],["b","parallelogram"],["c","rhombus"],["d","trapezoid"]], "b", "Rectangles have parallel sides.", "parallelogram", "Wrong hierarchy."),',
    'two.opH("Draw or describe a shape that is a rhombus but not a square. Explain the difference.", [P("skill","Shapes","Rhombus not square.")], [S("Describes shape.",1,"M"), S("Explains difference.",1,"B")], "**A rhombus has 4 equal sides but angles may not be 90°. A square is a rhombus with right angles.**", ["Cannot describe.","No difference."]),',
    'vocabQs([["Quadrilateral","4-sided shape."],["Parallelogram","Opposite sides parallel."],["Rectangle","4 right angles."],["Rhombus","4 equal sides."],["Square","Both rectangle + rhombus."],["Trapezoid","One pair parallel."],["Kite","Two pairs adjacent equal."],["Property","Characteristic."]], 3),'
  ]));
s = s.replace('        lesson("geometry-review"', u6 + '        lesson("geometry-review"');

// Unit 7: graph reading
const u7 = mk('graph-reading', 'Graph Reading', 'I CAN read and interpret various types of graphs.', ['5.MD.B.2'],
  [['Graph', 'Visual display of data.'], ['Bar graph', 'Compare categories.'], ['Line graph', 'Show change over time.'], ['Picture graph', 'Use pictures for data.'], ['Axis', 'Number line on graph.'], ['Scale', 'What numbers mean.'], ['Trend', 'Pattern over time.'], ['Interpret', 'Read meaning.']],
  'Read and interpret bar graphs, line graphs and picture graphs.',
  [['Graphs', 'Bar = compare; Line = change; Picture = visual.'], ['Interpreting', 'Read values -> find patterns -> draw conclusions.']],
  [['Graphs', 'Bar + line + picture = all types']],
  { problem: 'A bar graph shows 5 categories with heights 3, 7, 4, 9, 6. Which is highest? Total?', solution: 'Category 4 is highest (9). Total = 3+7+4+9+6 = 29.' },
  qs([
    'one.mcqF("A bar graph is best for...", [["a","showing change over time"],["b","comparing categories"],["c","showing fractions"],["d","plotting points"]], "b", "Bar graph compares categories.", "comparing categories", "Wrong graph type."),',
    'one.mcqC("A line graph is best for...", [["a","comparing categories"],["b","showing change over time"],["c","showing pictures"],["d","counting objects"]], "b", "Line graph shows change.", "showing change over time", "Wrong graph type."),',
    'op("core", "Describe what a bar graph and a line graph would each show for monthly rainfall data.", [P("skill","Graphs","Bar: compare months; Line: show trend.")], [S("Describes bar graph.",1,"M"), S("Describes line graph.",1,"B")], "**Bar graph: compare rainfall each month. Line graph: show rainfall trend over the year.**", ["Cannot describe.","Confuses graph types."]),',
    'one.mcqF("The axis on a graph is...", [["a","the title"],["b","the number line"],["c","the legend"],["d","the color"]], "b", "Axis = number line.", "the number line", "Wrong part."),',
    'two.opH("Create a simple bar graph for data: apples=8, oranges=5, bananas=12. Which fruit is most popular?", [P("skill","Graphs","Bananas most popular.")], [S("Creates graph.",1,"M"), S("Identifies most popular.",1,"B")], "**Bananas (12) are most popular; apples (8) second; oranges (5) least.**", ["Cannot create.","Wrong answer."]),',
    'vocabQs([["Graph","Visual display of data."],["Bar graph","Compare categories."],["Line graph","Show change over time."],["Picture graph","Use pictures for data."],["Axis","Number line on graph."],["Scale","What numbers mean."],["Trend","Pattern over time."],["Interpret","Read meaning."]], 3),'
  ]));
s = s.replace('        lesson("data-review"', u7 + '        lesson("data-review"');

fs.writeFileSync(path, s);
console.log('done');
