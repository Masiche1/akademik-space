module.exports = [
  {
    file: "lesson-9-1.ts", exportName: "lesson351",
    lesson: {
      id: "ecs11-u9-lesson-9-1", code: "9-1",
      title: "Number Systems and Data Units",
      goal: "I CAN convert between binary, denary and hexadecimal, perform binary addition and use data units and character encoding.",
      standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Data Representation", "4CP1: number systems, binary/hexadecimal conversion, data units, character encoding"],
      vocabulary: [
        { term: "Denary", definition: "The base-10 number system using digits 0-9; also called decimal." },
        { term: "Binary", definition: "The base-2 number system using only digits 0 and 1." },
        { term: "Hexadecimal", definition: "The base-16 number system using digits 0-9 and A-F; each digit represents 4 bits." },
        { term: "Bit", definition: "The smallest unit of data — a single binary digit, 0 or 1." },
        { term: "Byte", definition: "A group of 8 bits, the standard unit used to measure data." },
        { term: "ASCII", definition: "American Standard Code for Information Interchange — a character encoding mapping characters to binary codes." },
      ],
      concepts: [
        {
          id: "ecs11-u9-num-convert", title: "Converting between number systems",
          skill: "Convert between binary, denary and hexadecimal and perform binary addition at IGCSE level.",
          sections: [
            { heading: "Number bases", body: "Computers store all data in binary (base 2), using only the digits 0 and 1. Each position is worth a power of 2: 1, 2, 4, 8, 16, 32 and so on from right to left.\n\nDenary (base 10) is the everyday number system using digits 0-9. Hexadecimal (base 16) uses digits 0-9 and A-F, where A=10, B=11, C=12, D=13, E=14, F=15. Each hexadecimal digit represents exactly 4 bits, so hex is a compact shorthand for binary: 0x2A means binary 0010 1010." },
            { heading: "Converting and adding in binary", body: "Binary to denary: multiply each bit by its place value and add the results, e.g. 101101 = 32+8+4+1 = 45.\n\nDenary to binary: repeatedly divide by 2 and record the remainders, then read them in reverse order. Hexadecimal to binary: replace each hex digit with its 4-bit binary equivalent.\n\nBinary addition works column by column from the right. Each column sums to 0, 1, 2 or 3: 1+1 = 10 (write 0, carry 1) and 1+1+1 = 11 (write 1, carry 1)." },
          ],
          keyFormulas: [
            { name: "Place value", statement: "Binary value = sum of each bit x its power-of-2 place value" },
            { name: "Hex grouping", statement: "1 hex digit = 4 bits; group binary digits in 4s to convert" },
            { name: "Binary addition", statement: "Column-wise addition; 1+1 = 10, carry the 1" },
          ],
          workedExample: {
            problem: "Convert denary 156 to hexadecimal.",
            solution: "156 / 16 = 9 remainder 12. The remainder 12 is the hex digit C. 9 / 16 = 0 remainder 9. Reading remainders bottom-up: 9C. Check: 9 x 16 + 12 = 156.",
          },
          questions: [
            {
              id: "ecs11-u9-ncv-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Convert the binary number 101101 to denary.",
              response: { type: "numeric", parts: [{ label: "Denary", answer: 45 }] },
              markscheme: {
                principles: [{ kind: "method", name: "Binary to denary", statement: "Sum bits x powers of 2." }],
                steps: [
                  { reasoning: "Place values of 101101 are 32, 16, 8, 4, 2, 1; the 1-bits are 32, 8, 4 and 1.", marks: 1, markCode: "AO1" },
                  { reasoning: "32 + 8 + 4 + 1 = 45.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "45",
                commonErrors: ["Misreading the place values or forgetting that the rightmost bit is worth 1."],
              },
            },
            {
              id: "ecs11-u9-ncv-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Which binary number is equal to denary 29?",
              response: { type: "mcq", choices: [
                { id: "a", text: "11101" },
                { id: "b", text: "11011" },
                { id: "c", text: "10111" },
                { id: "d", text: "11100" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "method", name: "Denary to binary", statement: "Repeated division by 2 or place-value check." }],
                steps: [
                  { reasoning: "11101 = 16+8+4+1 = 29; the others give 27, 23 and 28.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "11101",
              },
            },
            {
              id: "ecs11-u9-ncv-q3", difficulty: "core", totalMarks: 3,
              stem: "Convert the hexadecimal number 0x2F into binary and into denary.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Hex to binary", statement: "Each hex digit = 4 bits." }],
                steps: [
                  { reasoning: "Split into nibbles: 2 = 0010 and F = 1111.", marks: 1, markCode: "AO1" },
                  { reasoning: "Binary is 0010 1111, i.e. 101111.", marks: 1, markCode: "AO1" },
                  { reasoning: "Denary: 32 + 8 + 4 + 2 + 1 = 47.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Binary 101111, denary 47",
              },
            },
            {
              id: "ecs11-u9-ncv-q4", difficulty: "core", totalMarks: 4,
              stem: "Add the binary numbers 101101 and 011011, showing your working with carries.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Binary addition", statement: "Column-wise with carry." }],
                steps: [
                  { reasoning: "Align the numbers in columns from the right: 101101 + 011011.", marks: 1, markCode: "AO1" },
                  { reasoning: "Rightmost columns: 1+1=10 write 0 carry 1; 0+1+1=10 write 0 carry 1; 1+0+1=10 write 0 carry 1.", marks: 1, markCode: "AO1" },
                  { reasoning: "Next columns: 1+1+1=11 write 1 carry 1; 0+1+1=10 write 0 carry 1; 1+0+1=10 write 0 carry 1.", marks: 1, markCode: "AO1" },
                  { reasoning: "Final carry 1 gives 1001000; check 45 + 27 = 72 = 1001000.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "1001000",
                commonErrors: ["Forgetting the carried 1 when a column already sums to 2."],
              },
            },
            {
              id: "ecs11-u9-ncv-q5", difficulty: "challenge", totalMarks: 5,
              stem: "A programmer must convert values between number systems.",
              parts: [
                { label: "a", prompt: "Convert denary 156 to hexadecimal.", marks: 2 },
                { label: "b", prompt: "Convert hexadecimal 0x3A7 to binary.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Base conversion", statement: "Divide by base / expand place values." }],
                steps: [
                  { reasoning: "(a) 156 / 16 = 9 remainder 12; 12 is hex digit C.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) 9 / 16 = 0 remainder 9, so 156 = 0x9C.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Convert each hex digit to 4 bits: 3 = 0011, A = 1010, 7 = 0111.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Concatenate: 0011 1010 0111.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Leading zeros may be dropped: 1110100111.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) 0x9C (b) 001110100111",
              },
            },
            {
              id: "ecs11-u9-ncv-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A computer science student is learning number systems.",
              parts: [
                { label: "a", prompt: "Convert denary 200 to hexadecimal, showing each division step.", marks: 2 },
                { label: "b", prompt: "Add the binary numbers 11011 and 10101, showing carries.", marks: 3 },
                { label: "c", prompt: "Explain why hexadecimal is a convenient shorthand for binary and give one example of where it is used.", marks: 5 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Number bases", statement: "Why hex sits between binary and denary." }],
                steps: [
                  { reasoning: "(a) 200 / 16 = 12 remainder 8; 12 / 16 = 0 remainder 12.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Reading remainders bottom-up with 12 = C gives 0xC8.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Column addition of 11011 + 10101 with carries gives 110000.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Carries are handled correctly: 1+1=10 three times, final carry extends the result.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Check: 27 + 21 = 48 = 110000.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Each hexadecimal digit is exactly 4 bits, so hex maps directly onto binary.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) It is far more compact: a byte needs 2 hex digits instead of 8 binary digits.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) Shorter strings are easier to read, write and check for errors.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) Conversion between hex and binary is trivial — no arithmetic needed.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Example: memory addresses, colour codes such as #FF8800, or MAC addresses.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) 0xC8 (b) 110000 (c) 1 hex digit = 4 bits; compact and error-resistant",
                commonErrors: ["Writing the remainders in the wrong order when converting to hex."],
              },
            },
          ],
        },
        {
          id: "ecs11-u9-units-encoding", title: "Data units and character encoding",
          skill: "Use data units to calculate file sizes and describe how characters are encoded at IGCSE level.",
          sections: [
            { heading: "Bits, bytes and data units", body: "A bit is a single binary digit (0 or 1) and is the smallest unit of data. A byte is 8 bits and is the unit used to measure storage.\n\nData units are based on powers of 2: 1 kilobyte (KB) = 1024 bytes, 1 megabyte (MB) = 1024 KB, 1 gigabyte (GB) = 1024 MB and 1 terabyte (TB) = 1024 GB. To convert to a smaller unit, multiply; to convert to a larger unit, divide by 1024." },
            { heading: "Character encoding", body: "Encoding assigns a binary code to each character so computers can store and process text. ASCII uses 7 bits, giving 128 possible characters — enough for basic English letters, digits and punctuation. Extended ASCII uses 8 bits (1 byte) giving 256 characters.\n\nUnicode (such as UTF-8 or UTF-16) was designed to encode all the world's writing systems. UTF-8 uses a variable number of bytes per character, while UTF-16 commonly uses 2 bytes per character — larger files but support for far more characters and languages." },
          ],
          keyFormulas: [
            { name: "File size", statement: "bytes = number of characters x bytes per character" },
            { name: "Unit conversion", statement: "1 KB = 1024 bytes; 1 MB = 1024 KB; 1 GB = 1024 MB" },
            { name: "Encoding capacity", statement: "n bits can represent 2^n different characters" },
          ],
          workedExample: {
            problem: "A text file contains 4096 characters stored using extended ASCII (1 byte per character). What is its size in KB?",
            solution: "4096 characters x 1 byte = 4096 bytes. 4096 / 1024 = 4 KB.",
          },
          questions: [
            {
              id: "ecs11-u9-uec-q1", difficulty: "foundation", totalMarks: 2,
              stem: "How many bytes are there in 1 kilobyte?",
              response: { type: "mcq", choices: [
                { id: "a", text: "1000" },
                { id: "b", text: "1024" },
                { id: "c", text: "8" },
                { id: "d", text: "2048" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Kilobyte", statement: "1024 bytes in computing." }],
                steps: [{ reasoning: "Data units are based on powers of 2: 1 KB = 1024 bytes.", marks: 2, markCode: "AO1" }],
                finalAnswer: "1024",
                commonErrors: ["Answering 1000 — that is the metric interpretation, not the computing standard."],
              },
            },
            {
              id: "ecs11-u9-uec-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A plain text file contains 6000 characters, each stored using one byte (extended ASCII). How many bytes does the text occupy?",
              response: { type: "numeric", parts: [{ label: "Bytes", answer: 6000, unit: "bytes" }] },
              markscheme: {
                principles: [{ kind: "technique", name: "File size", statement: "characters x bytes per character." }],
                steps: [
                  { reasoning: "Each character takes 1 byte.", marks: 1, markCode: "AO1" },
                  { reasoning: "6000 x 1 = 6000 bytes.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "6000 bytes",
              },
            },
            {
              id: "ecs11-u9-uec-q3", difficulty: "core", totalMarks: 3,
              stem: "A file is 5 MB. How many KB is this? Show your calculation.",
              response: { type: "numeric", parts: [{ label: "Kilobytes", answer: 5120, unit: "KB" }] },
              markscheme: {
                principles: [{ kind: "technique", name: "Unit conversion", statement: "1 MB = 1024 KB." }],
                steps: [
                  { reasoning: "1 MB = 1024 KB.", marks: 1, markCode: "AO1" },
                  { reasoning: "5 x 1024 = 5120.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "5120 KB",
              },
            },
            {
              id: "ecs11-u9-uec-q4", difficulty: "core", totalMarks: 4,
              stem: "Explain why computing uses powers of 2 (1024) for data units rather than powers of 10.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Binary storage", statement: "Units mirror binary structure." }],
                steps: [
                  { reasoning: "Computers organise storage and memory in binary — powers of 2.", marks: 1, markCode: "AO1" },
                  { reasoning: "1024 = 2^10, so unit boundaries align exactly with addressable storage blocks.", marks: 1, markCode: "AO1" },
                  { reasoning: "It is a long-standing convention that makes conversions simple multiplications.", marks: 1, markCode: "AO1" },
                  { reasoning: "Marketing sometimes uses 1000, which is why device capacities appear smaller in an operating system.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Storage is binary, so units use 2^10 = 1024.",
              },
            },
            {
              id: "ecs11-u9-uec-q5", difficulty: "challenge", totalMarks: 5,
              stem: "A text file contains 8192 characters stored as extended ASCII (8 bits per character, i.e. 1 byte per character).",
              parts: [
                { label: "a", prompt: "State the size of the file in bytes.", marks: 2 },
                { label: "b", prompt: "Convert the size to kilobytes.", marks: 2 },
                { label: "c", prompt: "Give one reason the file's actual size on disk is likely to be larger than your answer to part (b).", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "File size calculation", statement: "chars x bytes then convert units." }],
                steps: [
                  { reasoning: "(a) 8192 characters x 1 byte = 8192 bytes.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) 8192 / 1024 = 8.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) File systems add metadata — file name, timestamps, permissions and block allocation padding.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) 8192 bytes (b) 8 KB (c) metadata and padding overhead",
              },
            },
            {
              id: "ecs11-u9-uec-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A document has 4096 characters stored using a 16-bit Unicode encoding (2 bytes per character).",
              parts: [
                { label: "a", prompt: "Calculate the size of the encoded text in bytes.", marks: 2 },
                { label: "b", prompt: "Convert the size to kilobytes.", marks: 2 },
                { label: "c", prompt: "State the size in bytes using extended ASCII (1 byte per character) and explain the trade-off of choosing Unicode.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Encoding trade-offs", statement: "Coverage vs file size." }],
                steps: [
                  { reasoning: "(a) 4096 characters x 2 bytes = 8192 bytes.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) 8192 / 1024 = 8 KB.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Extended ASCII would need 4096 x 1 = 4096 bytes (4 KB).", marks: 2, markCode: "AO1", part: "c" },
                  { reasoning: "(c) Unicode can encode all the world's writing systems, whereas ASCII covers only 256 characters.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) UTF-16 uses a fixed 2 bytes per character, so files are larger.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) This costs more storage and bandwidth but is essential for non-Latin text.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) UTF-8 offers a middle ground — compact for Latin text, still full Unicode coverage.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) 8192 bytes (b) 8 KB (c) 4096 bytes; Unicode gives full language coverage at double the size",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u9-number-systems-notes", title: "Number systems and data units — notes",
      summary: "Convert between binary, denary and hex; data units use powers of 2; encoding assigns binary codes to characters.",
      sections: [
        { heading: "Key idea", body: "Binary is base 2, denary is base 10, hexadecimal is base 16. Each hex digit equals 4 bits." },
        { heading: "Converting", body: "Binary to denary: sum bit x place value. Denary to binary: divide by 2, read remainders backwards. Hex to binary: expand each digit to 4 bits." },
        { heading: "Data units", body: "1 byte = 8 bits; 1 KB = 1024 bytes, then MB, GB, TB each x1024." },
        { heading: "Encoding", body: "ASCII = 128 characters (7-bit); extended ASCII = 256 (8-bit); Unicode covers all languages but uses more bytes." },
      ],
    },
  },
  {
    file: "lesson-9-2.ts", exportName: "lesson352",
    lesson: {
      id: "ecs11-u9-lesson-9-2", code: "9-2",
      title: "Representing Text, Sound and Images",
      goal: "I CAN explain how bitmap and vector images and digital sound are represented and calculate their file sizes.",
      standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Data Representation", "4CP1: bitmap/vector images, sound sampling, resolution, colour depth, file size"],
      vocabulary: [
        { term: "Bitmap image", definition: "An image stored as a grid of pixels, each with a colour value." },
        { term: "Vector graphic", definition: "An image stored as mathematical descriptions of shapes, lines and curves." },
        { term: "Pixel", definition: "The smallest element of a bitmap image — one coloured square." },
        { term: "Colour depth", definition: "The number of bits used to store the colour of each pixel." },
        { term: "Resolution", definition: "The number of pixels in an image, e.g. width x height." },
        { term: "Sample rate", definition: "The number of sound samples captured per second, measured in Hz or kHz." },
        { term: "Bit depth (sound)", definition: "The number of bits used to store each sound sample." },
      ],
      concepts: [
        {
          id: "ecs11-u9-bitmap-sound", title: "Bitmap images, vector graphics and sound",
          skill: "Compare bitmap and vector graphics and explain how sound is sampled at IGCSE level.",
          sections: [
            { heading: "Bitmap vs vector images", body: "A bitmap image stores a grid of pixels; each pixel holds a colour value. File size depends on resolution and colour depth. Bitmaps are ideal for photographs because they capture continuous tone, but they lose quality when enlarged because pixels become visible.\n\nA vector graphic stores shapes as mathematical objects — lines, curves and fills with coordinates. It scales to any size without distortion and typically has small files, making it ideal for logos, icons and diagrams. It cannot easily represent photographic detail." },
            { heading: "Representing sound digitally", body: "Sound is an analogue wave; digitising it means sampling its amplitude at regular intervals. The sample rate is how many samples are taken per second — the CD standard is 44,100 Hz. The bit depth (or sample depth) is how many bits store each sample's amplitude, affecting dynamic range and quality.\n\nFile size = sample rate x duration x bit depth x number of channels. Higher sample rates and bit depths give better quality but much larger files. Stereo (2 channels) doubles the size of mono." },
          ],
          keyFormulas: [
            { name: "Sound file size", statement: "bits = sample rate x seconds x bit depth x channels" },
            { name: "Bitmap file size", statement: "bytes = width x height x colour depth / 8" },
          ],
          workedExample: {
            problem: "A mono sound clip lasts 10 seconds, sampled at 8000 Hz with 8-bit samples. What is its size in bits and bytes?",
            solution: "Samples = 8000 x 10 = 80,000. Bits = 80,000 x 8 = 640,000 bits. Bytes = 640,000 / 8 = 80,000 bytes.",
          },
          questions: [
            {
              id: "ecs11-u9-bms-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which type of image stores a picture as a grid of pixels, each with its own colour value?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Bitmap" },
                { id: "b", text: "Vector" },
                { id: "c", text: "Both bitmap and vector" },
                { id: "d", text: "Neither — images are not stored digitally" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Bitmap image", statement: "Grid of coloured pixels." }],
                steps: [{ reasoning: "Bitmaps store a grid of pixels; vectors store mathematical shapes.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Bitmap",
              },
            },
            {
              id: "ecs11-u9-bms-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A sound clip is sampled 8000 times per second. How many samples are recorded in a 5-second clip?",
              response: { type: "numeric", parts: [{ label: "Samples", answer: 40000 }] },
              markscheme: {
                principles: [{ kind: "technique", name: "Sampling", statement: "samples = rate x duration." }],
                steps: [
                  { reasoning: "8000 samples per second x 5 seconds.", marks: 1, markCode: "AO1" },
                  { reasoning: "8000 x 5 = 40,000 samples.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "40000",
              },
            },
            {
              id: "ecs11-u9-bms-q3", difficulty: "core", totalMarks: 3,
              stem: "State what is meant by sample rate and bit depth in sound recording, and how each affects quality.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Sampling parameters", statement: "Rate and precision of digitisation." }],
                steps: [
                  { reasoning: "Sample rate = number of samples taken per second; it determines how much of the sound's detail (especially high frequencies) is captured.", marks: 1, markCode: "AO1" },
                  { reasoning: "Bit depth = number of bits storing each sample's amplitude; it determines dynamic range and precision.", marks: 1, markCode: "AO1" },
                  { reasoning: "Higher values of either give better quality but produce larger files.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Rate captures frequency detail; depth captures amplitude precision; both trade quality for size.",
              },
            },
            {
              id: "ecs11-u9-bms-q4", difficulty: "core", totalMarks: 4,
              stem: "Compare bitmap and vector graphics, giving one advantage of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Bitmap vs vector", statement: "Pixels vs shapes." }],
                steps: [
                  { reasoning: "A bitmap stores a grid of pixels with colour values for each.", marks: 1, markCode: "AO1" },
                  { reasoning: "Bitmap advantage: it can represent photographic images with continuous tone and subtle colour variation.", marks: 1, markCode: "AO1" },
                  { reasoning: "A vector graphic stores shapes defined by mathematical equations and coordinates.", marks: 1, markCode: "AO1" },
                  { reasoning: "Vector advantage: it scales to any size without losing quality and typically has a much smaller file size.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Bitmap = pixels, good for photos; vector = equations, scales cleanly, small files.",
              },
            },
            {
              id: "ecs11-u9-bms-q5", difficulty: "challenge", totalMarks: 5,
              stem: "A mono sound clip lasts 10 seconds, is sampled at 8000 Hz and uses 8-bit samples.",
              parts: [
                { label: "a", prompt: "Calculate the total number of samples.", marks: 2 },
                { label: "b", prompt: "Calculate the total size of the clip in bits.", marks: 2 },
                { label: "c", prompt: "State the size in bytes.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Sound file size", statement: "rate x time x depth." }],
                steps: [
                  { reasoning: "(a) samples = 8000 x 10 = 80,000.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) bits = 80,000 x 8 = 640,000.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) bytes = 640,000 / 8 = 80,000 bytes.", marks: 1, markCode: "AO1", part: "c" },
                ],
                finalAnswer: "(a) 80,000 samples (b) 640,000 bits (c) 80,000 bytes",
              },
            },
            {
              id: "ecs11-u9-bms-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A company logo is stored as a 200x150 pixel bitmap image with 8-bit colour depth, but will be printed at many sizes.",
              parts: [
                { label: "a", prompt: "Calculate the total number of pixels.", marks: 2 },
                { label: "b", prompt: "Calculate the total number of bits needed to store the image.", marks: 2 },
                { label: "c", prompt: "Calculate the file size in bytes.", marks: 2 },
                { label: "d", prompt: "Explain how storing the logo as a vector graphic would differ and why it might be preferred.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Bitmap file size", statement: "pixels x colour depth / 8." }],
                steps: [
                  { reasoning: "(a) pixels = 200 x 150 = 30,000.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) bits = 30,000 x 8 = 240,000.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) bytes = 240,000 / 8 = 30,000 bytes.", marks: 2, markCode: "AO1", part: "c" },
                  { reasoning: "(d) A vector stores the logo as shapes and curves with mathematical definitions, not pixels.", marks: 1, markCode: "AO1", part: "d" },
                  { reasoning: "(d) It can be scaled to any print size without pixelation or loss of sharpness.", marks: 1, markCode: "AO1", part: "d" },
                  { reasoning: "(d) The file is typically far smaller because only shape data is stored.", marks: 1, markCode: "AO2", part: "d" },
                  { reasoning: "(d) It is preferred for logos and diagrams; a bitmap would be better for a photograph.", marks: 1, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "(a) 30,000 pixels (b) 240,000 bits (c) 30,000 bytes (d) vector scales cleanly, smaller file",
              },
            },
          ],
        },
        {
          id: "ecs11-u9-file-size", title: "Image resolution, colour depth and file size",
          skill: "Calculate image file sizes and explain the effect of resolution and colour depth at IGCSE level.",
          sections: [
            { heading: "Resolution and colour depth", body: "An image's resolution is its width x height in pixels — more pixels means more detail but a larger file. Colour depth is the number of bits used to store each pixel's colour: 1-bit gives 2 colours, 8-bit gives 256 colours, 16-bit gives 65,536 and 24-bit gives over 16 million ('true colour').\n\nUncompressed bitmap file size in bytes = (width x height x colour depth) / 8." },
            { heading: "Why file sizes matter", body: "High-resolution photos with 24-bit colour produce very large files — a 1024x768 photo needs about 2.3 MB uncompressed — so cameras and websites rely on compression (covered in lesson 9-3).\n\nTrade-offs: increasing resolution or colour depth improves quality but increases storage needs, upload/download time and processing cost. Choosing the right balance matters for web images, where small files load faster." },
          ],
          keyFormulas: [
            { name: "Image file size", statement: "bytes = width x height x colour depth / 8" },
            { name: "Colours available", statement: "colours = 2^(colour depth)" },
          ],
          workedExample: {
            problem: "A 512x512 pixel image uses 8-bit colour depth. What is its size in bytes and KB?",
            solution: "512 x 512 x 8 = 2,097,152 bits. / 8 = 262,144 bytes. / 1024 = 256 KB.",
          },
          questions: [
            {
              id: "ecs11-u9-fsd-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does colour depth measure in a bitmap image?",
              response: { type: "mcq", choices: [
                { id: "a", text: "The number of bits used to store each pixel's colour" },
                { id: "b", text: "The number of pixels per inch of the image" },
                { id: "c", text: "The total number of bytes in the file" },
                { id: "d", text: "The number of samples taken per second" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Colour depth", statement: "Bits per pixel." }],
                steps: [{ reasoning: "Colour depth = bits per pixel; it determines how many colours can be represented.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Bits used per pixel",
              },
            },
            {
              id: "ecs11-u9-fsd-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A 100x100 pixel image has a colour depth of 4 bits. Calculate the total number of bits needed to store it.",
              response: { type: "numeric", parts: [{ label: "Bits", answer: 40000 }] },
              markscheme: {
                principles: [{ kind: "technique", name: "Image size", statement: "pixels x colour depth." }],
                steps: [
                  { reasoning: "Pixels = 100 x 100 = 10,000.", marks: 1, markCode: "AO1" },
                  { reasoning: "Bits = 10,000 x 4 = 40,000.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "40000 bits",
              },
            },
            {
              id: "ecs11-u9-fsd-q3", difficulty: "core", totalMarks: 3,
              stem: "How many different colours can be represented with an 8-bit colour depth? Show your calculation.",
              response: { type: "numeric", parts: [{ label: "Colours", answer: 256 }] },
              markscheme: {
                principles: [{ kind: "technique", name: "Colours from depth", statement: "colours = 2^depth." }],
                steps: [
                  { reasoning: "Each pixel has 8 bits, each 0 or 1.", marks: 1, markCode: "AO1" },
                  { reasoning: "Number of combinations = 2^8.", marks: 1, markCode: "AO1" },
                  { reasoning: "2^8 = 256 colours.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "256",
              },
            },
            {
              id: "ecs11-u9-fsd-q4", difficulty: "core", totalMarks: 4,
              stem: "Explain how increasing an image's resolution affects both its quality and its file size.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Resolution trade-off", statement: "More pixels = more detail and more data." }],
                steps: [
                  { reasoning: "Higher resolution means more pixels, so finer detail can be captured and displayed.", marks: 1, markCode: "AO1" },
                  { reasoning: "More pixels also means more colour values must be stored.", marks: 1, markCode: "AO1" },
                  { reasoning: "File size grows in proportion to the pixel count (and colour depth).", marks: 1, markCode: "AO1" },
                  { reasoning: "So quality improves but storage, upload time and processing demands increase.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "More pixels = sharper image but larger files.",
              },
            },
            {
              id: "ecs11-u9-fsd-q5", difficulty: "challenge", totalMarks: 5,
              stem: "Two images have the same resolution of 640x480 pixels. Image A uses 8-bit colour depth; image B uses 24-bit colour depth.",
              parts: [
                { label: "a", prompt: "Calculate the file size of image A in bytes.", marks: 2 },
                { label: "b", prompt: "Calculate the file size of image B in bytes.", marks: 2 },
                { label: "c", prompt: "State why image B is larger.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Image file size", statement: "w x h x depth / 8." }],
                steps: [
                  { reasoning: "(a) pixels = 640 x 480 = 307,200; bytes = 307,200 x 8 / 8 = 307,200 bytes.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) bytes = 307,200 x 24 / 8 = 921,600 bytes.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Image B stores 3 bytes of colour per pixel instead of 1, giving far more colours per pixel.", marks: 1, markCode: "AO1", part: "c" },
                ],
                finalAnswer: "(a) 307,200 bytes (b) 921,600 bytes (c) 3x the colour depth",
              },
            },
            {
              id: "ecs11-u9-fsd-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A digital photograph has a resolution of 1024x768 pixels and 24-bit colour depth (3 bytes per pixel).",
              parts: [
                { label: "a", prompt: "Calculate the total number of pixels.", marks: 2 },
                { label: "b", prompt: "Calculate the file size in bits.", marks: 2 },
                { label: "c", prompt: "Convert the file size to megabytes (1 MB = 1,048,576 bytes).", marks: 2 },
                { label: "d", prompt: "Explain why photographs produce such large files and how compression helps.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Image file size", statement: "pixels x bits per pixel." }],
                steps: [
                  { reasoning: "(a) pixels = 1024 x 768 = 786,432.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) bits = 786,432 x 24 = 18,874,368.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) bytes = 18,874,368 / 8 = 2,359,296; MB = 2,359,296 / 1,048,576 = 2.25 MB.", marks: 2, markCode: "AO1", part: "c" },
                  { reasoning: "(d) Every pixel stores a 24-bit colour value, and photos have high resolution to capture detail.", marks: 1, markCode: "AO1", part: "d" },
                  { reasoning: "(d) 24-bit colour gives over 16 million colours per pixel — essential for realistic photos.", marks: 1, markCode: "AO1", part: "d" },
                  { reasoning: "(d) The result is millions of bytes per image, which is slow to store and transmit.", marks: 1, markCode: "AO2", part: "d" },
                  { reasoning: "(d) Compression reduces the file size, making photos practical to share and store.", marks: 1, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "(a) 786,432 pixels (b) 18,874,368 bits (c) 2.25 MB (d) high resolution x deep colour = large files; compression reduces size",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u9-media-representation-notes", title: "Representing text, sound and images — notes",
      summary: "Bitmaps store pixels; vectors store shapes; sound is sampled; file size = resolution x colour depth (images) or rate x time x depth (sound).",
      sections: [
        { heading: "Key idea", body: "Every media type is reduced to binary numbers: pixels for images, samples for sound, codes for text." },
        { heading: "Images", body: "Bitmap file size = width x height x colour depth / 8 bytes. Vector files store shapes, not pixels." },
        { heading: "Sound", body: "File size in bits = sample rate x duration x bit depth x channels. Stereo doubles mono." },
        { heading: "Trade-offs", body: "Higher resolution, colour depth, sample rate and bit depth all improve quality but increase file size." },
      ],
    },
  },
  {
    file: "lesson-9-3.ts", exportName: "lesson353",
    lesson: {
      id: "ecs11-u9-lesson-9-3", code: "9-3",
      title: "Compression and Error Checking",
      goal: "I CAN distinguish lossy from lossless compression and explain how parity bits and checksums detect errors.",
      standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Data Representation", "4CP1: compression (lossy/lossless, RLE, Huffman), parity and checksum error detection"],
      vocabulary: [
        { term: "Compression", definition: "Reducing the size of a file so it uses less storage and bandwidth." },
        { term: "Lossy compression", definition: "Compression that permanently discards some data; the original cannot be fully recovered." },
        { term: "Lossless compression", definition: "Compression that allows the original file to be reconstructed exactly." },
        { term: "Run-length encoding", definition: "A lossless method replacing runs of repeated values with a count and the value." },
        { term: "Huffman coding", definition: "A lossless method assigning shorter codes to frequent symbols and longer codes to rare ones." },
        { term: "Parity bit", definition: "An extra bit added to data so the total number of 1s is even or odd, enabling error detection." },
        { term: "Checksum", definition: "A calculated value from the data that is sent with it and verified on receipt." },
      ],
      concepts: [
        {
          id: "ecs11-u9-compression", title: "Lossy and lossless compression",
          skill: "Explain compression methods and choose between lossy and lossless at IGCSE level.",
          sections: [
            { heading: "Lossy vs lossless", body: "Lossy compression discards data that is judged less important, producing much smaller files but losing quality permanently — the original cannot be restored. JPEG images and MP3 audio are lossy.\n\nLossless compression rearranges or encodes data so the original can be reconstructed exactly — the file is identical after decompression. PNG images, ZIP archives and most text/document formats are lossless." },
            { heading: "RLE and Huffman coding", body: "Run-length encoding (RLE) replaces runs of repeated values with a count followed by the value: WWWBBWWW becomes 3W2B3W. It works extremely well on simple images with flat colour areas but poorly on complex, varied data.\n\nHuffman coding assigns shorter binary codes to the most frequent symbols and longer codes to rare symbols. Because frequent symbols dominate real files, the average code length shrinks, giving lossless compression. Huffman is used inside formats such as ZIP, PNG and JPEG." },
          ],
          keyFormulas: [
            { name: "Compression choice", statement: "Lossy = smaller files, permanent quality loss; lossless = exact recovery" },
            { name: "RLE", statement: "Run of n identical values -> count + value" },
            { name: "Huffman", statement: "Frequent symbols get shorter codes" },
          ],
          workedExample: {
            problem: "Encode the string AAAABBBBA using run-length encoding.",
            solution: "4A4B1A — each run of identical characters is replaced by a count and the character.",
          },
          questions: [
            {
              id: "ecs11-u9-cmp-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is the key difference between lossy and lossless compression?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Lossy discards data permanently; lossless allows the original to be recovered exactly" },
                { id: "b", text: "Lossy files are always smaller than lossless files" },
                { id: "c", text: "Lossless compression only works on text files" },
                { id: "d", text: "There is no difference — both restore the original" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Lossy vs lossless", statement: "Permanent loss vs exact recovery." }],
                steps: [{ reasoning: "Lossy discards data permanently; lossless can be reversed to give the exact original.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Lossy loses data; lossless preserves everything.",
              },
            },
            {
              id: "ecs11-u9-cmp-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Which file type typically uses lossy compression?",
              response: { type: "mcq", choices: [
                { id: "a", text: "JPEG photograph" },
                { id: "b", text: "PNG logo graphic" },
                { id: "c", text: "ZIP archive of documents" },
                { id: "d", text: "Plain text (.txt) file" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "context", name: "Compression in practice", statement: "JPEG/MP3 lossy; PNG/ZIP/TXT lossless." }],
                steps: [{ reasoning: "JPEG and MP3 are lossy; PNG, ZIP and text files must remain exact.", marks: 2, markCode: "AO1" }],
                finalAnswer: "JPEG photograph",
              },
            },
            {
              id: "ecs11-u9-cmp-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain how run-length encoding (RLE) compresses data, using an example.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "RLE", statement: "Count + value for runs." }],
                steps: [
                  { reasoning: "RLE scans for consecutive repeated values and stores a count followed by the value once.", marks: 1, markCode: "AO1" },
                  { reasoning: "Example: WWWBB becomes 3W2B — far fewer symbols than the original.", marks: 1, markCode: "AO1" },
                  { reasoning: "It works best on data with long runs; it can be ineffective or even expand data with no repeats.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Runs replaced by count+value, e.g. WWWBB -> 3W2B.",
              },
            },
            {
              id: "ecs11-u9-cmp-q4", difficulty: "core", totalMarks: 4,
              stem: "Explain the principle behind Huffman coding.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Huffman coding", statement: "Short codes for frequent symbols." }],
                steps: [
                  { reasoning: "The frequency of each symbol in the data is measured first.", marks: 1, markCode: "AO1" },
                  { reasoning: "The most frequent symbols are assigned the shortest binary codes; rare symbols get longer codes.", marks: 1, markCode: "AO1" },
                  { reasoning: "Because frequent symbols dominate real files, the average code length is reduced.", marks: 1, markCode: "AO1" },
                  { reasoning: "The result is lossless — every original symbol can still be decoded exactly.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Short codes for frequent symbols shrink the average code length losslessly.",
              },
            },
            {
              id: "ecs11-u9-cmp-q5", difficulty: "challenge", totalMarks: 5,
              stem: "The string WWWBBWWW is to be compressed using run-length encoding.",
              parts: [
                { label: "a", prompt: "Write the RLE representation of the string.", marks: 2 },
                { label: "b", prompt: "State the length of the original string and of the compressed string.", marks: 1 },
                { label: "c", prompt: "Explain one situation in which RLE would fail to compress data, or even make it larger.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "RLE application", statement: "Encode runs as count + value." }],
                steps: [
                  { reasoning: "(a) WWW = 3W, BB = 2B, WWW = 3W, giving 3W2B3W.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Original = 8 characters; compressed = 6 characters.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(c) If data has no repeated runs, e.g. ABCDEFGH, each symbol needs count+value and the output is larger.", marks: 2, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) 3W2B3W (b) 8 -> 6 (c) no repeated runs means expansion",
                commonErrors: ["Writing the count after the value instead of before it."],
              },
            },
            {
              id: "ecs11-u9-cmp-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A photo-sharing app sends millions of images to users' phones over mobile data.",
              parts: [
                { label: "a", prompt: "Explain why lossy compression is suitable for photographs.", marks: 3 },
                { label: "b", prompt: "Explain why lossless compression is required for files such as executables or text documents.", marks: 3 },
                { label: "c", prompt: "Describe how Huffman coding reduces file size while remaining lossless.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Choosing compression", statement: "Lossy for media, lossless for data." }],
                steps: [
                  { reasoning: "(a) Photos contain detail the human eye barely notices; discarding it has little visible effect.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Lossy compression removes that detail, producing dramatically smaller files.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Smaller files mean faster downloads and less mobile data usage for users.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Executables and text must be reproduced exactly — a single changed bit can corrupt a program or change meaning.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Lossless compression shrinks the file while allowing perfect reconstruction.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Using lossy on such files would destroy information irreversibly.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Huffman coding first measures how often each symbol appears.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) Frequent symbols receive the shortest binary codes; rare symbols receive longer ones.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) The weighted average code length is therefore smaller than a fixed-length code.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) Every symbol is still uniquely decodable, so the original data is recovered exactly — lossless.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) imperceptible detail removed for huge size saving (b) data must be exact (c) frequency-based variable-length codes",
              },
            },
          ],
        },
        {
          id: "ecs11-u9-errors", title: "Error detection: parity and checksums",
          skill: "Explain how parity bits and checksums detect transmission errors at IGCSE level.",
          sections: [
            { heading: "Parity checking", body: "When data is transmitted it can be corrupted by noise. A parity bit is an extra bit added to a byte so that the total number of 1 bits is always even (even parity) or always odd (odd parity). The receiver recounts the 1s: if the parity is wrong, an error has occurred.\n\nParity can only detect an odd number of bit errors — two bit flips cancel out and go undetected. It also cannot say which bit is wrong or fix it, only flag that something is wrong." },
            { heading: "Checksums", body: "A checksum extends the idea to whole messages. The sender calculates a value from the data — often a sum of the bytes, possibly modulo a number — and sends it with the data. The receiver repeats the calculation on the received data; if the checksums differ, the data was corrupted.\n\nStronger methods such as cyclic redundancy checks (CRC) and cryptographic hashes detect far more error patterns. In practice, detected errors are usually handled by asking the sender to retransmit (automatic repeat request, ARQ)." },
          ],
          keyFormulas: [
            { name: "Parity", statement: "Extra bit keeps count of 1s even (or odd)" },
            { name: "Checksum", statement: "checksum = function of data; compare on receipt" },
          ],
          workedExample: {
            problem: "A byte 10110101 is sent with even parity. How many 1 bits does it contain, and what parity bit is needed?",
            solution: "Count of 1s = 5 (odd). For even parity the bit must be 1, making the total 6.",
          },
          questions: [
            {
              id: "ecs11-u9-err-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is the purpose of a parity bit?",
              response: { type: "mcq", choices: [
                { id: "a", text: "To detect whether a single bit error has occurred during transmission" },
                { id: "b", text: "To compress the data before transmission" },
                { id: "c", text: "To encrypt the data so it cannot be read" },
                { id: "d", text: "To correct any errors automatically" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Parity bit", statement: "Error detection bit." }],
                steps: [{ reasoning: "A parity bit lets the receiver detect bit errors; it does not correct or encrypt.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Detect transmission errors",
              },
            },
            {
              id: "ecs11-u9-err-q2", difficulty: "foundation", totalMarks: 2,
              stem: "The byte 10110101 is transmitted using even parity. It contains five 1 bits (an odd count). What parity bit must be added?",
              response: { type: "numeric", parts: [{ label: "Parity bit", answer: 1 }] },
              markscheme: {
                principles: [{ kind: "technique", name: "Even parity", statement: "Make total 1s even." }],
                steps: [
                  { reasoning: "Even parity requires an even total number of 1 bits.", marks: 1, markCode: "AO1" },
                  { reasoning: "5 is odd, so a 1 is needed to make 6.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "1",
              },
            },
            {
              id: "ecs11-u9-err-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain how a parity check detects errors and state one limitation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Parity check", statement: "Detects odd bit errors only." }],
                steps: [
                  { reasoning: "The sender adds a bit so the total count of 1s is even (or odd).", marks: 1, markCode: "AO1" },
                  { reasoning: "The receiver recounts the 1s; a wrong parity reveals that an error occurred.", marks: 1, markCode: "AO1" },
                  { reasoning: "Limitation: an even number of bit errors cancels out and passes undetected; it cannot locate or fix the error.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Parity flags odd bit errors; even numbers of errors evade it.",
              },
            },
            {
              id: "ecs11-u9-err-q4", difficulty: "core", totalMarks: 4,
              stem: "Describe how a checksum is used to verify that data arrived correctly.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Checksum", statement: "Verify by recomputation." }],
                steps: [
                  { reasoning: "The sender calculates a value from the data, e.g. a sum of the byte values.", marks: 1, markCode: "AO1" },
                  { reasoning: "The checksum is sent alongside the data.", marks: 1, markCode: "AO1" },
                  { reasoning: "The receiver repeats the same calculation on the received data.", marks: 1, markCode: "AO1" },
                  { reasoning: "If the two checksums match the data is almost certainly intact; a mismatch signals corruption.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Sender computes, receiver recomputes and compares.",
              },
            },
            {
              id: "ecs11-u9-err-q5", difficulty: "challenge", totalMarks: 5,
              stem: "Three data bytes have values 200, 100 and 56. The checksum is the sum of the values modulo 256.",
              parts: [
                { label: "a", prompt: "Calculate the sum of the three byte values.", marks: 2 },
                { label: "b", prompt: "Calculate the checksum value.", marks: 2 },
                { label: "c", prompt: "The receiver calculates the same checksum from the data it received. What does this indicate?", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Checksum calculation", statement: "Sum modulo 256." }],
                steps: [
                  { reasoning: "(a) 200 + 100 + 56 = 356.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) 356 - 256 = 100, so the checksum is 100.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) The data arrived intact — the receiver's calculation matches the sender's checksum.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) 356 (b) 100 (c) data verified as intact",
                commonErrors: ["Forgetting to reduce the sum modulo 256."],
              },
            },
            {
              id: "ecs11-u9-err-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A school sends exam results files to an exam board over a network.",
              parts: [
                { label: "a", prompt: "Explain how a parity bit could be used to check each transmitted byte.", marks: 3 },
                { label: "b", prompt: "Give two limitations of parity checking.", marks: 3 },
                { label: "c", prompt: "Suggest and justify a stronger error-checking method for this file transfer.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Error detection methods", statement: "Simple parity vs stronger checks." }],
                steps: [
                  { reasoning: "(a) The sender counts the 1 bits in each byte and adds a parity bit so the total is even.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) The parity bit travels with the byte.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) The receiver recounts; wrong parity flags a corrupted byte.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Parity only detects an odd number of bit errors — two flips cancel out undetected.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) It cannot locate or correct the error, only signal that one exists.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) A checksum or CRC over the whole file detects far more error patterns, including bursts.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Use a checksum or CRC computed over the entire file rather than per byte.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) It detects multi-bit and burst errors that parity misses.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) Combine with retransmission (ARQ): any mismatch triggers resending the file.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) This gives strong assurance that exam results — where accuracy is critical — arrive intact.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) parity bit per byte (b) odd errors only, no correction (c) file-level checksum/CRC + retransmission",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u9-compression-errors-notes", title: "Compression and error checking — notes",
      summary: "Lossy discards data for size; lossless preserves it exactly; parity and checksums detect transmission errors.",
      sections: [
        { heading: "Key idea", body: "Compression trades size against fidelity; error checking adds redundancy to detect corruption." },
        { heading: "Compression", body: "Lossy (JPEG, MP3) discards imperceptible detail. Lossless (PNG, ZIP) reconstructs exactly. RLE encodes runs; Huffman gives short codes to frequent symbols." },
        { heading: "Error checking", body: "Parity bit: extra bit making 1s even/odd — detects odd bit errors. Checksum: computed value compared on receipt — detects more patterns." },
        { heading: "Limitations", body: "Parity misses even numbers of errors; checksums are probabilistic. Retransmission fixes detected errors." },
      ],
    },
  },
];
