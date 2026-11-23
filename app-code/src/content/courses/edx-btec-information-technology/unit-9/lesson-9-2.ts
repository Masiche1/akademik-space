import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "edxbtecit-u9-lesson-9-2",
  code: "9-2",
  title: "Colour, Design Principles and Page Layout",
  goal: "I CAN apply colour theory, design principles and typography to create clear, accessible layouts.",
  standards: ["Pearson BTEC Level 3 National Information Technology — Specialist unit: Digital Graphics and Multimedia", "Colour theory, composition principles, typography and accessibility"],
  
  vocabulary: [
    { term: "Colour wheel", definition: "Circle showing relationships between colours: primary, secondary, tertiary." },
    { term: "Complementary colours", definition: "Colours opposite on the wheel — maximum contrast." },
    { term: "Analogous colours", definition: "Colours adjacent on the wheel — harmonious schemes." },
    { term: "Hierarchy", definition: "Visual ordering guiding the viewer's eye to important content first." },
    { term: "Leading", definition: "Vertical spacing between lines of text." },
    { term: "Kerning", definition: "Adjusting space between individual letter pairs." },
    { term: "Contrast ratio", definition: "Luminance difference between text and background; accessibility measure." },
  ],
  concepts: [
    {
      id: "edxbtecit-u9-l2-colour",
      title: "Colour theory and composition",
      skill: "Apply colour schemes, contrast and balance principles to create effective designs.",
      lesson: {
        sections: [
          {
            heading: "Colour theory",
            body: "**Primary colours**: red, yellow, blue. **Secondary**: green, orange, purple (mixing primaries). **Tertiary**: mixes of primary + secondary. The **colour wheel** arranges them.\n\n**Schemes**: complementary (opposite — high contrast, e.g. blue/orange), analogous (adjacent — harmonious), triadic (three equidistant), monochromatic (shades of one hue). Colour carries meaning: red = danger/energy, blue = trust/calm, green = growth/success.\n\nColour models: **RGB** for screens (additive light), **CMYK** for print (subtractive ink).",
          },
          {
            heading: "Composition principles",
            body: "**Balance**: symmetrical (formal) or asymmetrical (dynamic). **Contrast**: differences in size/colour/shape create emphasis. **Alignment**: elements share edges or axes for order. **Proximity**: related items grouped together. **Hierarchy**: size, colour and position guide attention — most important largest/boldest.\n\n**Rule of thirds**: place focal points at grid intersections. **Whitespace** (negative space) improves readability and focus.",
          },
        ],
        keyFormulas: [
          { name: "Colour schemes", statement: "Complementary = opposite; analogous = adjacent; triadic = equidistant" },
          { name: "Models", statement: "RGB = screens (additive); CMYK = print (subtractive)" },
          { name: "Principles", statement: "Balance, contrast, alignment, proximity, hierarchy" },
        ],
        workedExample: {
          problem: "Design a poster for a charity fun run using a blue and orange scheme. Justify the colour choice and layout principles used.",
          solution: "Blue/orange are complementary — high contrast makes the event name pop. Large bold title at top (hierarchy), event details grouped below (proximity), generous whitespace, balanced layout.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u9-l2-colour-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which colours are opposite each other on the colour wheel?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Red and blue"
                    },
                    {
                              "id": "b",
                              "text": "Red and green"
                    },
                    {
                              "id": "c",
                              "text": "Blue and yellow"
                    },
                    {
                              "id": "d",
                              "text": "Green and purple"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Complementary colours",
                              "statement": "Opposite on the wheel: red/green, blue/orange, yellow/purple."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Red and green are complementary (opposite on the wheel).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Red and green",
          "commonErrors": [
                    "Confusing primary pairs with complementary pairs."
          ]
},
        },
        {
          id: "edxbtecit-u9-l2-colour-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the difference between RGB and CMYK colour models.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "RGB vs CMYK",
                              "statement": "Additive light for screens vs subtractive ink for print."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "RGB = red/green/blue light, additive, for screens.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "CMYK = cyan/magenta/yellow/black ink, subtractive, for print.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "RGB for screens; CMYK for print"
},
        },
        {
          id: "edxbtecit-u9-l2-colour-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the principle of visual hierarchy helps a reader navigate a webpage.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Visual hierarchy",
                              "statement": "Size, colour and position guide attention to important content."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Larger/bolder elements attract the eye first.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Colour and contrast highlight key actions (e.g. buttons).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Readers scan headings before details — reduces cognitive load.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Hierarchy orders attention: headings/buttons first via size, colour, position"
},
        },
        {
          id: "edxbtecit-u9-l2-colour-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A poster uses pale yellow text on a white background. Identify two problems and suggest improvements using colour and contrast principles.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Contrast",
                              "statement": "Low contrast harms readability and accessibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Problem: insufficient contrast — text nearly invisible.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fails accessibility standards for visually impaired users.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fix: dark text on light background or vice versa.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Or add a dark panel behind text.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Justified using contrast principle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Low contrast = unreadable; use dark-on-light or panel behind text"
},
        },
        {
          id: "edxbtecit-u9-l2-colour-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the three primary colours.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Define complementary colours and give one pair.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two benefits of whitespace in a layout.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State the difference between symmetrical and asymmetrical balance.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Colour and layout",
                              "statement": "Schemes, whitespace, balance."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Red, yellow, blue.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Opposite on wheel = max contrast.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pair: e.g. blue/orange.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Improves readability and separates elements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Creates visual focus and reduces clutter.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Symmetrical = mirror balance; asymmetrical = different but equal visual weight.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Primaries; complementary pairs; whitespace benefits; balance types"
},
        },
        {
          id: "edxbtecit-u9-l2-colour-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Name the primary colours. (b) Define complementary and analogous colour schemes. (c) State the difference between RGB and CMYK. (d) Name three composition principles. (e) Explain what visual hierarchy is. (f) Give one reason whitespace improves design.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Primary colours.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Complementary vs analogous.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "RGB vs CMYK.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Three composition principles.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "What is visual hierarchy.",
                    "marks": 3
          },
          {
                    "label": "f",
                    "prompt": "One whitespace benefit.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Colour and composition",
                              "statement": "Schemes, models, layout principles."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Red, yellow, blue.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Complementary = opposite; analogous = adjacent.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both schemes defined.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "RGB additive screens; CMYK subtractive print.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Both models distinguished.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Balance, contrast, alignment, proximity, hierarchy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Ordering of elements by importance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Achieved via size, colour, position.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Guides the viewer's eye.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Improves readability/reduces clutter.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Colour schemes, models, composition principles and hierarchy."
},
        },
      ],
    },
    {
      id: "edxbtecit-u9-l2-typo",
      title: "Typography and page layout",
      skill: "Select typefaces and spacing and apply alignment and grid principles for readable layouts.",
      lesson: {
        sections: [
          {
            heading: "Typography",
            body: "**Typeface** categories: serif (Times — formal, print body text), sans-serif (Arial — clean, screens), script/display (decorative — headings only).\n\n**Anatomy**: x-height, ascenders, descenders, baseline. **Kerning** adjusts space between letter pairs; **tracking** adjusts space across a word/line; **leading** adjusts line spacing (≈ 120-150% of font size for readability).\n\n**Rules**: limit to 2-3 typefaces; body text ≥ 12pt/16px; avoid ALL CAPS for long text; align left for body text (easier scanning).",
          },
          {
            heading: "Layout and grids",
            body: "**Alignment**: left (default for text), centre (titles), right (numbers). **Grids**: column grids organise content consistently — e.g. 12-column web grids. **Margins and gutters** provide breathing space.\n\n**Golden ratio / rule of thirds** guide focal placement. **Focal point**: one dominant element per view. **Accessibility**: minimum contrast ratios (WCAG), readable font sizes, alt text for images, keyboard navigability.",
          },
        ],
        keyFormulas: [
          { name: "Leading", statement: "Line spacing ≈ 120-150% of font size" },
          { name: "Typefaces", statement: "2-3 max; serif=print, sans-serif=screens" },
          { name: "Grid", statement: "Columns + gutters organise layout" },
        ],
        workedExample: {
          problem: "Choose suitable typography for a school newsletter and a gaming poster.",
          solution: "Newsletter: sans-serif body (Arial) 12pt, 1.4 leading, left-aligned, two columns. Poster: bold display typeface for the title, high contrast, centred hierarchy.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u9-l2-typo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is kerning?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Line spacing"
                    },
                    {
                              "id": "b",
                              "text": "Space between letter pairs"
                    },
                    {
                              "id": "c",
                              "text": "Font size"
                    },
                    {
                              "id": "d",
                              "text": "Text alignment"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Kerning",
                              "statement": "Adjusting space between individual letter pairs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Kerning = letter-pair spacing.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Space between letter pairs"
},
        },
        {
          id: "edxbtecit-u9-l2-typo-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish between serif and sans-serif typefaces with an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Serif vs sans-serif",
                              "statement": "Decorative strokes vs clean strokes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Serif has small strokes at letter ends (e.g. Times).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sans-serif has no strokes (e.g. Arial).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Serif = strokes (Times); sans-serif = clean (Arial)"
},
        },
        {
          id: "edxbtecit-u9-l2-typo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why body text should be left-aligned rather than justified or centred.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Text alignment",
                              "statement": "Consistent left edge aids scanning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Left alignment gives a consistent starting edge for each line.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Justified text creates uneven word spacing ('rivers').",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Centred text makes finding line starts harder — poor for long text.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Left alignment = consistent edge, easier scanning"
},
        },
        {
          id: "edxbtecit-u9-l2-typo-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A webpage uses 10px grey text on a light grey background. Identify the accessibility problems and recommend fixes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Accessibility",
                              "statement": "Sufficient size, contrast and readability required."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10px is too small to read comfortably.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Grey on light grey = very low contrast.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fails WCAG contrast requirements for many users.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fix: ≥16px and dark text on light background.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Also benefits low-vision users.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Too small + low contrast; use ≥16px dark-on-light"
},
        },
        {
          id: "edxbtecit-u9-l2-typo-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Define leading and kerning.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Why limit a design to 2-3 typefaces?",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State two benefits of using a grid layout.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Typography and grids",
                              "statement": "Spacing terms and layout structure."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Leading = line spacing; kerning = letter-pair spacing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both defined correctly.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Too many fonts look cluttered/unprofessional.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Consistency improves readability and brand identity.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Aligns elements consistently across pages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Speeds up design and keeps layout predictable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Leading/kerning defs; font limits for consistency; grids align content"
},
        },
        {
          id: "edxbtecit-u9-l2-typo-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define serif and sans-serif typefaces. (b) State what kerning and leading control. (c) Name two rules for readable body text. (d) Explain why a grid improves page layout. (e) State two accessibility requirements for text. (f) When is a display typeface appropriate?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Serif vs sans-serif.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Kerning and leading.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Two body-text rules.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Grid benefit.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Two accessibility requirements.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "When display typeface fits.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Typography and layout",
                              "statement": "Typeface choice, spacing, grids, accessibility."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Serif = strokes at letter ends; sans-serif = clean.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both defined.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Kerning = letter pairs; leading = line spacing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both defined.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Rules: ≥12pt, left-align, limited typefaces, adequate contrast.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Grids align elements and create consistent structure.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Sufficient contrast and readable font size.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "For headings/titles only — not body text.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Typography rules, grid layout and accessibility requirements."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u9-n102-notes",
      title: "Graphics 9-2 — notes",
      summary: "Complementary colours contrast; RGB screens/CMYK print; hierarchy via size+colour; left-align body text; grids organise layout.",
      sections: [
        { heading: "Key idea", body: "Design principles serve communication: guide the eye, ensure readability, meet accessibility." },
        { heading: "Colour", body: "Opposite wheel colours = contrast; adjacent = harmony." },
        { heading: "Typography", body: "2-3 typefaces max; kerning = letters, leading = lines." },
      ],
    },
  ],
};
