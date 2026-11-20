module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson21",
    lesson: {
      id: "cils-c-u2-lesson-2-1", code: "2-1",
      title: "Stage 7 — Managing Data: Sorting and Searching",
      goal: "I CAN apply and evaluate sorting and searching algorithms on data collections.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 7: managing data", "Cambridge Lower Secondary Computing 0860 strand: Managing data"],
      stage: 7,
      vocabulary: [
        { term: "Sort", definition: "Arrange data in order — ascending or descending." },
        { term: "Search", definition: "Find whether/where an item exists in data." },
        { term: "Linear search", definition: "Check items one by one — O(n)." },
        { term: "Binary search", definition: "Halve sorted list each step — O(log n)." },
        { term: "Efficiency", definition: "How few steps/resources an algorithm needs." },
        { term: "Worst case", definition: "Maximum steps an algorithm might take." },
      ],
      concept: {
        id: "cils-c-u2-s1-sort", title: "Sorting and searching algorithms",
        skill: "Compare linear vs binary search and basic sorts at Stage 7 level.",
        sections: [
          { heading: "Search efficiency", body: "Linear search checks each item — worst case n checks. Binary search on sorted data halves the list each step — ~log₂n checks. For 1 million items: linear ~1M, binary ~20. Sorting enables fast searching." },
          { heading: "Sorting methods", body: "Bubble sort compares neighbours and swaps (simple, O(n²)). Selection sort finds minimum and swaps to front. Merge sort divides and merges (efficient O(n log n)). Choice depends on data size and existing order." },
        ],
        keyFormulas: [
          { name: "Linear", statement: "O(n) — check each item" },
          { name: "Binary", statement: "O(log n) — halve sorted list" },
          { name: "Merge sort", statement: "O(n log n) — divide and conquer" },
        ],
        workedExample: {
          problem: "Find 42 in sorted list of 1024 items. Max checks for linear vs binary?",
          solution: "Linear: 1024 checks. Binary: log₂(1024)=10 checks. Binary is ~100× faster.",
        },
        questions: [
          {
            id: "cils-c-u2-ss-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What must be true for binary search?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Data must be sorted" }, { id: "b", text: "List must be small" }, { id: "c", text: "Data must be numbers" }, { id: "d", text: "No requirement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Binary search", statement: "Needs sorted data." }],
              steps: [{ reasoning: "Halving requires order to discard halves.", marks: 1, markCode: "M" }],
              finalAnswer: "Data must be sorted",
            },
          },
          {
            id: "cils-c-u2-ss-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Compare linear and binary search in terms of steps needed.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Search efficiency", statement: "n vs log n." }],
              steps: [
                { reasoning: "Linear ~n checks worst case.", marks: 1, markCode: "M" },
                { reasoning: "Binary ~log₂n — much fewer on big lists.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "n vs log₂n",
            },
          },
          {
            id: "cils-c-u2-ss-q3", difficulty: "core", totalMarks: 3,
            stem: "Find 30 in [10,20,30,40,50] by binary search. Show each step.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Binary search", statement: "Middle-out halving." }],
              steps: [
                { reasoning: "Middle=30 → found in 1 step.", marks: 1, markCode: "M" },
                { reasoning: "If not: compare, discard half, repeat.", marks: 1, markCode: "M" },
                { reasoning: "Max ~log₂(5)≈3 checks.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Found in 1 step",
            },
          },
          {
            id: "cils-c-u2-ss-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define sort, search, linear/binary search, efficiency, worst case. (b) When is linear better? (c) Find 7 in [3,5,7,9,11] both ways — count checks. (d) Why sort before binary? (e) What is bubble sort? (f) What is merge sort's advantage? (g) Compare O(n) vs O(n²) for 1000 items. (h) Design a search strategy for a phone book app.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Algorithms", statement: "Search/sort efficiency." }],
              steps: [
                { reasoning: "(a) All five definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Small/unsorted lists — simpler.", marks: 1, markCode: "M" },
                { reasoning: "(c) Linear 3 checks; binary ~2-3.", marks: 1, markCode: "M" },
                { reasoning: "(d) Halving needs order.", marks: 1, markCode: "M" },
                { reasoning: "(e) Compare neighbours, swap if out of order.", marks: 1, markCode: "M" },
                { reasoning: "(f) O(n log n) — fast on large data.", marks: 1, markCode: "M" },
                { reasoning: "(g) n=1000 vs n²=1M — huge difference.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid strategy design.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Algorithm efficiency: linear vs binary, sort methods.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u2-ss-notes", title: "Sorting and searching — notes",
      summary: "Linear=O(n), binary=O(log n) needs sorted. Merge sort O(n log n) for large data.",
      sections: [
        { heading: "Key idea", body: "Algorithm choice depends on data size and order." },
        { heading: "Efficiency", body: "log₂n grows slowly — binary search scales well." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson22",
    lesson: {
      id: "cils-c-u2-lesson-2-2", code: "2-2",
      title: "Stage 7 — Data Representation",
      goal: "I CAN explain how text, numbers and images are represented as binary data.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 7: managing data", "Cambridge Lower Secondary Computing 0860 strand: Managing data"],
      stage: 7,
      vocabulary: [
        { term: "Character encoding", definition: "Rules mapping characters to binary codes (ASCII, Unicode)." },
        { term: "ASCII", definition: "7-bit encoding for English characters." },
        { term: "Unicode", definition: "Universal encoding covering all languages/symbols." },
        { term: "Pixel", definition: "Smallest picture element — has colour values." },
        { term: "Resolution", definition: "Number of pixels in an image." },
        { term: "Colour depth", definition: "Bits per pixel — more bits = more colours." },
      ],
      concept: {
        id: "cils-c-u2-s2-rep", title: "Data representation",
        skill: "Explain text/image binary encoding at Stage 7 level.",
        sections: [
          { heading: "Text encoding", body: "Characters are stored as binary codes. ASCII uses 7 bits (128 chars) for English; Unicode uses more bits to cover all world languages and symbols. 'A' might be 1000001 in ASCII." },
          { heading: "Image encoding", body: "Images are grids of pixels. Each pixel stores colour values as binary numbers. Resolution = pixel count (more = sharper, bigger files). Colour depth = bits per pixel (24-bit = 16.7 million colours)." },
        ],
        keyFormulas: [
          { name: "ASCII", statement: "7-bit English encoding" },
          { name: "Unicode", statement: "universal multi-language encoding" },
          { name: "Pixel", statement: "image dot with colour values" },
        ],
        workedExample: {
          problem: "Why does a 4K photo file bigger than a thumbnail?",
          solution: "More pixels (resolution) × more colour bits per pixel = more binary data = bigger file.",
        },
        questions: [
          {
            id: "cils-c-u2-dr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is character encoding?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Rules mapping characters to binary codes" }, { id: "b", text: "A type of file" }, { id: "c", text: "A screen setting" }, { id: "d", text: "A network protocol" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Character encoding", statement: "Char→binary mapping." }],
              steps: [{ reasoning: "Encoding = rules for char↔binary.", marks: 1, markCode: "M" }],
              finalAnswer: "Char→binary rules",
            },
          },
          {
            id: "cils-c-u2-dr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between ASCII and Unicode?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "ASCII vs Unicode", statement: "English vs universal." }],
              steps: [
                { reasoning: "ASCII=7-bit English only.", marks: 1, markCode: "M" },
                { reasoning: "Unicode=all languages/symbols.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "English-only vs universal",
            },
          },
          {
            id: "cils-c-u2-dr-q3", difficulty: "core", totalMarks: 3,
            stem: "Explain how a digital image is stored as data. What affects file size?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Image encoding", statement: "Pixels and colour depth." }],
              steps: [
                { reasoning: "Grid of pixels, each with colour binary values.", marks: 1, markCode: "M" },
                { reasoning: "Resolution + colour depth determine size.", marks: 1, markCode: "M" },
                { reasoning: "More pixels/bits = bigger file.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Pixels+colour; size=resolution×depth",
            },
          },
          {
            id: "cils-c-u2-dr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define character encoding, ASCII, Unicode, pixel, resolution, colour depth. (b) Why is Unicode needed? (c) How many characters can ASCII represent? (d) What is a pixel? (e) How does resolution affect image quality/size? (f) What is 24-bit colour? (g) Why do emojis need Unicode? (h) Compare storing 'Hi' as text vs image.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Data representation", statement: "Text/image encoding." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Covers all languages/symbols.", marks: 1, markCode: "M" },
                { reasoning: "(c) 128 (2^7).", marks: 1, markCode: "M" },
                { reasoning: "(d) Smallest image element with colour.", marks: 1, markCode: "M" },
                { reasoning: "(e) More pixels=sharper but bigger.", marks: 1, markCode: "M" },
                { reasoning: "(f) 24 bits/pixel=16.7M colours.", marks: 1, markCode: "M" },
                { reasoning: "(g) Emojis are symbols beyond ASCII.", marks: 1, markCode: "M" },
                { reasoning: "(h) Text=tiny char codes; image=thousands of pixels.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Character and image encoding.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u2-dr-notes", title: "Data representation — notes",
      summary: "Text=char codes (ASCII/Unicode); images=pixel grids. Size depends on resolution and colour depth.",
      sections: [
        { heading: "Key idea", body: "All data is binary — encoding rules map it to meaning." },
        { heading: "Images", body: "More pixels + more colour bits = better quality, bigger files." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson23",
    lesson: {
      id: "cils-c-u2-lesson-2-3", code: "2-3",
      title: "Stage 8 — Networks: Internet, Packets and Protocols",
      goal: "I CAN explain how data travels across networks using packets, IP addresses and protocols.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 8: networks", "Cambridge Lower Secondary Computing 0860 strand: Networks and digital communication"],
      stage: 8,
      vocabulary: [
        { term: "Packet", definition: "Small chunk of data sent across a network." },
        { term: "IP address", definition: "Unique number identifying a device on a network." },
        { term: "Protocol", definition: "Rules devices follow to communicate." },
        { term: "TCP/IP", definition: "Core internet protocol suite." },
        { term: "HTTP/HTTPS", definition: "Web protocols — HTTPS adds encryption." },
        { term: "Router", definition: "Device directing packets between networks." },
      ],
      concept: {
        id: "cils-c-u2-s3-net", title: "Internet and protocols",
        skill: "Explain packet switching, IP addressing and protocols at Stage 8 level.",
        sections: [
          { heading: "Packet switching", body: "Data is split into packets, each labelled with source/destination addresses. Routers forward packets hop-by-hop; they may take different routes and arrive out of order, then reassemble. This is packet switching — efficient and resilient." },
          { heading: "Protocols and addressing", body: "Protocols are rules: TCP ensures reliable delivery, IP handles addressing, HTTP fetches web pages. IP addresses (e.g. 192.168.1.1) identify devices; DNS translates names to IPs. HTTPS encrypts for security." },
        ],
        keyFormulas: [
          { name: "Packet", statement: "data chunk with addresses" },
          { name: "TCP/IP", statement: "reliable delivery + addressing" },
          { name: "DNS", statement: "name → IP lookup" },
        ],
        workedExample: {
          problem: "You load a webpage. Trace the journey from request to display.",
          solution: "Browser → DNS lookup → IP address → HTTP request packets → server → response packets → reassemble → render page.",
        },
        questions: [
          {
            id: "cils-c-u2-nt-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a packet?",
            response: { type: "mcq", choices: [
              { id: "a", text: "A small chunk of data sent across a network" }, { id: "b", text: "A type of router" }, { id: "c", text: "A web browser" }, { id: "d", text: "A cable" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Packet", statement: "Data chunk." }],
              steps: [{ reasoning: "Packets carry data with address labels.", marks: 1, markCode: "M" }],
              finalAnswer: "Network data chunk",
            },
          },
          {
            id: "cils-c-u2-nt-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What does DNS do and what is an IP address?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "DNS and IP", statement: "Name lookup + device ID." }],
              steps: [
                { reasoning: "DNS translates domain names to IP addresses.", marks: 1, markCode: "M" },
                { reasoning: "IP = unique device identifier on network.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Name→IP; device identifier",
            },
          },
          {
            id: "cils-c-u2-nt-q3", difficulty: "core", totalMarks: 3,
            stem: "Why send data as packets instead of one stream? Give two reasons.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Packet switching", statement: "Efficiency and resilience." }],
              steps: [
                { reasoning: "Shares bandwidth fairly; different routes possible.", marks: 1, markCode: "M" },
                { reasoning: "Lost packets can be resent individually.", marks: 1, markCode: "M" },
                { reasoning: "Fault tolerance — network survives breaks.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Efficiency + fault tolerance",
            },
          },
          {
            id: "cils-c-u2-nt-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define packet, IP address, protocol, TCP/IP, HTTP/HTTPS, router, DNS. (b) Trace loading a webpage. (c) Why packets may arrive out of order? (d) What does TCP guarantee? (e) Why is HTTPS safer? (f) What is bandwidth? (g) Draw packet journey device→server→device. (h) What happens if a packet is lost?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Networking", statement: "Packets, protocols, addresses." }],
              steps: [
                { reasoning: "(a) All seven definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) DNS→IP→packets→reassemble→render.", marks: 1, markCode: "M" },
                { reasoning: "(c) Different routes/times.", marks: 1, markCode: "M" },
                { reasoning: "(d) Reliable ordered delivery.", marks: 1, markCode: "M" },
                { reasoning: "(e) Encryption protects data.", marks: 1, markCode: "M" },
                { reasoning: "(f) Data capacity per time.", marks: 1, markCode: "M" },
                { reasoning: "(g) Device→router→ISP→server→back.", marks: 1, markCode: "M" },
                { reasoning: "(h) Receiver detects gap; sender retransmits.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Internet protocols, packets, addressing.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u2-nt-notes", title: "Networks — notes",
      summary: "Data=packets via routers; IP addresses identify devices; protocols are communication rules.",
      sections: [
        { heading: "Key idea", body: "Internet = packets + IP + protocols working together." },
        { heading: "HTTPS", body: "Encrypted web traffic — look for the padlock." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson24",
    lesson: {
      id: "cils-c-u2-lesson-2-4", code: "2-4",
      title: "Stage 8 — Computer Systems: Components and Performance",
      goal: "I CAN describe system components and analyse factors affecting performance.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 8: computer systems", "Cambridge Lower Secondary Computing 0860 strand: Computer systems"],
      stage: 8,
      vocabulary: [
        { term: "CPU", definition: "Central processing unit — executes instructions." },
        { term: "Clock speed", definition: "CPU cycles per second — GHz." },
        { term: "RAM", definition: "Temporary memory for active programs." },
        { term: "Storage", definition: "Permanent memory — SSD/HDD/cloud." },
        { term: "GPU", definition: "Graphics processing unit for images/video." },
        { term: "Bottleneck", definition: "The slowest component limiting performance." },
      ],
      concept: {
        id: "cils-c-u2-s4-sys", title: "Components and performance",
        skill: "Analyse hardware factors affecting speed at Stage 8 level.",
        sections: [
          { heading: "System components", body: "CPU executes instructions (clock speed in GHz). RAM holds active programs — more RAM = more apps. Storage keeps files permanently (SSD faster than HDD). GPU handles graphics. Motherboard connects all." },
          { heading: "Bottlenecks", body: "Performance limited by the slowest part: fast CPU + little RAM still lags with many apps. Match components to workload — gaming needs GPU+RAM; office work needs CPU+SSD." },
        ],
        keyFormulas: [
          { name: "CPU", statement: "executes instructions; GHz = speed" },
          { name: "RAM", statement: "active programs memory" },
          { name: "Bottleneck", statement: "slowest component limits all" },
        ],
        workedExample: {
          problem: "Gaming PC: fast CPU but 8GB RAM, integrated GPU. Why does it stutter in games?",
          solution: "GPU too weak for graphics + RAM too small for game assets. CPU isn't the bottleneck — GPU and RAM are.",
        },
        questions: [
          {
            id: "cils-c-u2-sp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does the CPU do?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Executes instructions" }, { id: "b", text: "Stores files permanently" }, { id: "c", text: "Displays images" }, { id: "d", text: "Connects networks" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "CPU", statement: "Instruction executor." }],
              steps: [{ reasoning: "CPU processes/executes program instructions.", marks: 1, markCode: "M" }],
              finalAnswer: "Executes instructions",
            },
          },
          {
            id: "cils-c-u2-sp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between RAM and storage?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "RAM vs storage", statement: "Temp vs permanent." }],
              steps: [
                { reasoning: "RAM = temporary active memory.", marks: 1, markCode: "M" },
                { reasoning: "Storage = permanent file storage.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Temp vs permanent",
            },
          },
          {
            id: "cils-c-u2-sp-q3", difficulty: "core", totalMarks: 3,
            stem: "A computer has fast CPU but only 4GB RAM. It freezes with many browser tabs. Explain the bottleneck.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Bottlenecks", statement: "Slowest part limits." }],
              steps: [
                { reasoning: "Each tab needs RAM; 4GB exhausted.", marks: 1, markCode: "M" },
                { reasoning: "System swaps to slow storage → lag.", marks: 1, markCode: "M" },
                { reasoning: "RAM is bottleneck; CPU fine.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "RAM bottleneck",
            },
          },
          {
            id: "cils-c-u2-sp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define CPU, clock speed, RAM, storage, GPU, bottleneck. (b) Why is clock speed not the only speed factor? (c) What is GHz? (d) Why SSD faster than HDD? (e) What workload needs most GPU? (f) What workload needs most RAM? (g) Diagnose: video editing is slow — likely causes? (h) Design specs for a school computer lab.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Systems", statement: "Components, bottlenecks." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) RAM/storage/GPU also matter.", marks: 1, markCode: "M" },
                { reasoning: "(c) CPU cycles per second.", marks: 1, markCode: "M" },
                { reasoning: "(d) No moving parts; faster access.", marks: 1, markCode: "M" },
                { reasoning: "(f) Gaming/video — many simultaneous processes.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid bottleneck diagnosis.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid lab spec design.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "System components and performance analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u2-sp-notes", title: "Systems — notes",
      summary: "CPU=brain, RAM=active memory, storage=files, GPU=graphics. Bottleneck=slowest part.",
      sections: [
        { heading: "Key idea", body: "Performance = weakest component, not strongest." },
        { heading: "Match", body: "Gaming→GPU+RAM; office→CPU+SSD." },
      ],
    },
  },
  {
    file: "lesson-2-5.ts", exportName: "lesson25",
    lesson: {
      id: "cils-c-u2-lesson-2-5", code: "2-5",
      title: "Stage 8 — Binary and Number Systems",
      goal: "I CAN convert between binary, denary and hexadecimal and explain place values.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 8: computer systems", "Cambridge Lower Secondary Computing 0860 strand: Computer systems"],
      stage: 8,
      vocabulary: [
        { term: "Binary", definition: "Base-2: digits 0-1." },
        { term: "Hexadecimal", definition: "Base-16: digits 0-9, A-F." },
        { term: "Denary", definition: "Base-10: digits 0-9." },
        { term: "Place value", definition: "Each digit's value by position." },
        { term: "Bit", definition: "One binary digit." },
        { term: "Nibble", definition: "4 bits — one hex digit." },
      ],
      concept: {
        id: "cils-c-u2-s5-binary", title: "Number systems",
        skill: "Convert binary↔denary↔hex at Stage 8 level.",
        sections: [
          { heading: "Place values", body: "Binary place values double: 128 64 32 16 8 4 2 1. Hex uses 16 symbols (0-9,A-F) where each hex digit = 4 bits (a nibble). Hex is compact — programmers use it for colours (#FF0000=red) and memory addresses." },
          { heading: "Converting", body: "Binary→denary: add place values of 1-bits. Denary→binary: halve repeatedly, record remainders. Binary→hex: group into nibbles (4 bits each), convert each. Hex→binary: expand each hex digit to 4 bits." },
        ],
        keyFormulas: [
          { name: "Place values", statement: "128 64 32 16 8 4 2 1" },
          { name: "Hex", statement: "1 hex digit = 4 bits" },
          { name: "#RRGGBB", statement: "hex colour code" },
        ],
        workedExample: {
          problem: "Convert 1011 0110 to hex, then to denary.",
          solution: "Nibbles: 1011=11=B, 0110=6 → 0xB6. Denary: 128+32+16+4+2=182? Check: bits 7,5,4,2,1 = 128+32+16+4+2=182.",
        },
        questions: [
          {
            id: "cils-c-u2-bn-q1", difficulty: "foundation", totalMarks: 1,
            stem: "How many bits does one hexadecimal digit represent?",
            response: { type: "mcq", choices: [
              { id: "a", text: "4" }, { id: "b", text: "8" }, { id: "c", text: "2" }, { id: "d", text: "16" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Hex digit", statement: "4 bits = nibble." }],
              steps: [{ reasoning: "16 hex values = 2^4 = 4 bits.", marks: 1, markCode: "M" }],
              finalAnswer: "4 bits",
            },
          },
          {
            id: "cils-c-u2-bn-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Convert 0101 to denary. Convert 12 to binary (4-bit).",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Conversions", statement: "Binary↔denary." }],
              steps: [
                { reasoning: "0101 = 4+1 = 5.", marks: 1, markCode: "M" },
                { reasoning: "12 = 1100.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "5 and 1100",
            },
          },
          {
            id: "cils-c-u2-bn-q3", difficulty: "core", totalMarks: 3,
            stem: "Convert 0x3F to binary then denary. Show working.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Hex conversion", statement: "Hex→binary→denary." }],
              steps: [
                { reasoning: "3=0011, F=1111 → 0011 1111.", marks: 1, markCode: "M" },
                { reasoning: "Denary: 32+16+8+4+2+1=63.", marks: 1, markCode: "M" },
                { reasoning: "Answer: 63.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "63",
            },
          },
          {
            id: "cils-c-u2-bn-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define binary, hexadecimal, denary, place value, bit, nibble. (b) What are binary place values? (c) Convert 0110 1010 to denary. (d) Convert 200 to binary (8-bit). (e) Convert 0xFF to binary and denary. (f) Why use hex for colours? (g) Convert 0xA5 to binary. (h) How many colours can 24-bit depth show?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Number systems", statement: "Conversions, hex, colours." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) 128 64 32 16 8 4 2 1.", marks: 1, markCode: "M" },
                { reasoning: "(c) 64+32+8+2=106.", marks: 1, markCode: "M" },
                { reasoning: "(d) 1100 1000.", marks: 1, markCode: "M" },
                { reasoning: "(e) 1111 1111 = 255.", marks: 1, markCode: "M" },
                { reasoning: "(f) Compact: #FF0000 vs long binary.", marks: 1, markCode: "M" },
                { reasoning: "(g) 1010 0101.", marks: 1, markCode: "M" },
                { reasoning: "(h) 16.7 million (2^24).", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Binary, hex, denary conversions.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u2-bn-notes", title: "Number systems — notes",
      summary: "Binary=base2, hex=base16 (1 digit=4 bits), denary=base10. Hex compact for colours/addresses.",
      sections: [
        { heading: "Key idea", body: "Group binary into nibbles (4 bits) for hex conversion." },
        { heading: "Hex colours", body: "#RRGGBB — two hex digits per colour channel." },
      ],
    },
  },
  {
    file: "lesson-2-6.ts", exportName: "lesson26",
    lesson: {
      id: "cils-c-u2-lesson-2-6", code: "2-6",
      title: "Stage 9 — Databases and Queries",
      goal: "I CAN design database tables and write queries to retrieve specific data.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 9: managing data", "Cambridge Lower Secondary Computing 0860 strand: Managing data"],
      stage: 9,
      vocabulary: [
        { term: "Database", definition: "Organised collection of related data in tables." },
        { term: "Table", definition: "Grid of records (rows) and fields (columns)." },
        { term: "Record", definition: "One complete row of data." },
        { term: "Field", definition: "One column — a specific data attribute." },
        { term: "Query", definition: "Request retrieving specific records." },
        { term: "Primary key", definition: "Unique ID identifying each record." },
      ],
      concept: {
        id: "cils-c-u2-s6-db", title: "Databases and queries",
        skill: "Design tables and query data at Stage 9 level.",
        sections: [
          { heading: "Database structure", body: "Tables hold records (rows) and fields (columns). Each record has a primary key — unique ID. Fields have data types (text, number, date). Relationships link tables — one student has many book loans." },
          { heading: "Queries", body: "Queries ask questions: SELECT * FROM books WHERE genre='fiction'. Filtering (WHERE), sorting (ORDER BY), counting (COUNT). Queries let you extract exactly the data needed from millions of records." },
        ],
        keyFormulas: [
          { name: "Table", statement: "records × fields" },
          { name: "Query", statement: "SELECT...FROM...WHERE" },
          { name: "Primary key", statement: "unique record ID" },
        ],
        workedExample: {
          problem: "Library DB: books(id, title, genre, available). Write query for available fiction books.",
          solution: "SELECT title FROM books WHERE genre='fiction' AND available=true ORDER BY title.",
        },
        questions: [
          {
            id: "cils-c-u2-db-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a primary key?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Unique ID identifying each record" }, { id: "b", text: "A password" }, { id: "c", text: "A type of query" }, { id: "d", text: "A table column" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Primary key", statement: "Unique record ID." }],
              steps: [{ reasoning: "PK uniquely identifies each row.", marks: 1, markCode: "M" }],
              finalAnswer: "Unique record identifier",
            },
          },
          {
            id: "cils-c-u2-db-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between a record and a field?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Record vs field", statement: "Row vs column." }],
              steps: [
                { reasoning: "Record = one complete row.", marks: 1, markCode: "M" },
                { reasoning: "Field = one column/attribute.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Row vs column",
            },
          },
          {
            id: "cils-c-u2-db-q3", difficulty: "core", totalMarks: 3,
            stem: "Write a query: students(id, name, year, grade). Find all Year 10 students with grade A.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Queries", statement: "SELECT...WHERE." }],
              steps: [
                { reasoning: "SELECT name FROM students WHERE year=10 AND grade='A'.", marks: 1, markCode: "M" },
                { reasoning: "Correct table and conditions.", marks: 1, markCode: "M" },
                { reasoning: "Valid SQL-like syntax.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "SELECT...WHERE year=10 AND grade='A'",
            },
          },
          {
            id: "cils-c-u2-db-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define database, table, record, field, query, primary key. (b) Design a 'club members' table with 5 fields. (c) What type for each field? (d) Write query for members who joined after 2020. (e) What is a relationship between tables? (f) Why use primary keys? (g) What does ORDER BY do? (h) Design a 2-table library system (books + loans).",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Databases", statement: "Tables, queries, relationships." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Valid table with 5 fields.", marks: 1, markCode: "M" },
                { reasoning: "(c) Appropriate data types.", marks: 1, markCode: "M" },
                { reasoning: "(d) Valid date query.", marks: 1, markCode: "M" },
                { reasoning: "(e) Links between tables via keys.", marks: 1, markCode: "M" },
                { reasoning: "(f) Unique identification, relationships.", marks: 1, markCode: "M" },
                { reasoning: "(g) Sorts results.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid 2-table design.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Database design and querying.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u2-db-notes", title: "Databases — notes",
      summary: "Tables=records×fields. Primary key=unique ID. Queries=SELECT...WHERE to extract data.",
      sections: [
        { heading: "Key idea", body: "Databases organise huge data for fast retrieval." },
        { heading: "Queries", body: "WHERE filters, ORDER BY sorts, COUNT totals." },
      ],
    },
  },
  {
    file: "lesson-2-7.ts", exportName: "lesson27",
    lesson: {
      id: "cils-c-u2-lesson-2-7", code: "2-7",
      title: "Stage 9 — Cyber Security and Online Safety",
      goal: "I CAN identify online threats and apply security practices to protect data and privacy.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 9: networks and digital communication", "Cambridge Lower Secondary Computing 0860 strand: Networks and digital communication"],
      stage: 9,
      vocabulary: [
        { term: "Phishing", definition: "Fake messages tricking users into revealing credentials." },
        { term: "Malware", definition: "Malicious software — viruses, spyware, ransomware." },
        { term: "Encryption", definition: "Scrambling data so only authorised parties read it." },
        { term: "Authentication", definition: "Proving identity — passwords, biometrics, 2FA." },
        { term: "Firewall", definition: "Security barrier blocking unauthorised access." },
        { term: "Social engineering", definition: "Manipulating people into security breaches." },
      ],
      concept: {
        id: "cils-c-u2-s7-sec", title: "Cyber security",
        skill: "Recognise threats and apply defences at Stage 9 level.",
        sections: [
          { heading: "Threats", body: "Phishing emails fake trusted sources to steal passwords. Malware harms systems — ransomware locks data for payment, spyware monitors activity. Social engineering manipulates people — 'IT support' calls asking for passwords." },
          { heading: "Defences", body: "Strong unique passwords, two-factor authentication, encryption (HTTPS), firewalls, antivirus, regular updates, backups, verifying sender identities, never sharing credentials." },
        ],
        keyFormulas: [
          { name: "Phishing", statement: "fake message → steal credentials" },
          { name: "2FA", statement: "password + second factor" },
          { name: "Encryption", statement: "scramble data for privacy" },
        ],
        workedExample: {
          problem: "Email: 'Your account is compromised — click here to verify immediately!' Red flags?",
          solution: "Urgency, generic greeting, suspicious link, asks for credentials. Don't click — go to site directly or contact company.",
        },
        questions: [
          {
            id: "cils-c-u2-sc-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is phishing?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Fake messages tricking users into revealing credentials" }, { id: "b", text: "A type of fish" }, { id: "c", text: "A fast connection" }, { id: "d", text: "A programming language" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Phishing", statement: "Credential theft via deception." }],
              steps: [{ reasoning: "Phishing = deceptive messages for info.", marks: 1, markCode: "M" }],
              finalAnswer: "Fake messages for credentials",
            },
          },
          {
            id: "cils-c-u2-sc-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name two security practices to protect online accounts.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Security", statement: "Passwords, 2FA, updates." }],
              steps: [
                { reasoning: "Strong unique passwords + 2FA.", marks: 1, markCode: "M" },
                { reasoning: "Updates/antivirus/backups.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. 2FA + strong passwords",
            },
          },
          {
            id: "cils-c-u2-sc-q3", difficulty: "core", totalMarks: 3,
            stem: "What is social engineering? Give an example and how to defend.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Social engineering", statement: "Manipulating people." }],
              steps: [
                { reasoning: "Manipulating people into security breaches.", marks: 1, markCode: "M" },
                { reasoning: "e.g. fake IT support asking for password.", marks: 1, markCode: "M" },
                { reasoning: "Verify identity; never share credentials.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Human manipulation; verify identity",
            },
          },
          {
            id: "cils-c-u2-sc-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define phishing, malware, encryption, authentication, firewall, social engineering. (b) How does ransomware work? (c) Why update software? (d) What is 2FA? (e) How does HTTPS protect you? (f) List 5 phishing red flags. (g) Why unique passwords per site? (h) Design a security policy for a school.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Security", statement: "Threats and defences." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Encrypts files, demands payment.", marks: 1, markCode: "M" },
                { reasoning: "(c) Patches security vulnerabilities.", marks: 1, markCode: "M" },
                { reasoning: "(d) Password + second verification.", marks: 1, markCode: "M" },
                { reasoning: "(e) Encrypts traffic.", marks: 1, markCode: "M" },
                { reasoning: "(f) Five valid red flags.", marks: 1, markCode: "M" },
                { reasoning: "(g) One breach doesn't expose all.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid school security policy.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Cyber threats and protection strategies.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u2-sc-notes", title: "Cyber security — notes",
      summary: "Phishing, malware, social engineering are threats. Defend with 2FA, encryption, updates, verification.",
      sections: [
        { heading: "Key idea", body: "Most breaches exploit people, not just technology." },
        { heading: "Rule", body: "Verify before trusting — especially urgent requests." },
      ],
    },
  },
  {
    file: "lesson-2-8.ts", exportName: "lesson28",
    lesson: {
      id: "cils-c-u2-lesson-2-8", code: "2-8",
      title: "Stage 9 — Digital Communication and Footprint",
      goal: "I CAN evaluate digital communication tools and manage my digital footprint responsibly.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 9: networks and digital communication", "Cambridge Lower Secondary Computing 0860 strand: Networks and digital communication"],
      stage: 9,
      vocabulary: [
        { term: "Digital footprint", definition: "The trail of data you leave online." },
        { term: "Metadata", definition: "Data about data — who, when, where." },
        { term: "Privacy settings", definition: "Controls deciding who sees your content." },
        { term: "Encryption", definition: "Protecting message content from others." },
        { term: "Netiquette", definition: "Rules of polite online behaviour." },
        { term: "Data broker", definition: "Company collecting and selling personal data." },
      ],
      concept: {
        id: "cils-c-u2-s8-foot", title: "Digital footprint and communication",
        skill: "Manage online presence and choose tools responsibly at Stage 9 level.",
        sections: [
          { heading: "Your footprint", body: "Every post, like, search and location creates data. This footprint persists — colleges and employers may check it. Metadata (who/when/where) is often collected even when content is private." },
          { heading: "Responsible use", body: "Choose tools wisely: encrypted messaging for sensitive chats, privacy settings to limit visibility, think before posting permanently. Understand data brokers collect and sell your information." },
        ],
        keyFormulas: [
          { name: "Footprint", statement: "everything you post/like/search" },
          { name: "Metadata", statement: "who/when/where data" },
          { name: "Privacy settings", statement: "control visibility" },
        ],
        workedExample: {
          problem: "Should you post a photo with location tag? What are the risks?",
          solution: "Location reveals where you live/go — privacy risk. Remove tag or blur location before posting. Footprint is permanent.",
        },
        questions: [
          {
            id: "cils-c-u2-df-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a digital footprint?",
            response: { type: "mcq", choices: [
              { id: "a", text: "The trail of data you leave online" }, { id: "b", text: "A type of shoe" }, { id: "c", text: "A network cable" }, { id: "d", text: "A computer virus" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Digital footprint", statement: "Online data trail." }],
              steps: [{ reasoning: "Footprint = accumulated online activity.", marks: 1, markCode: "M" }],
              finalAnswer: "Online data trail",
            },
          },
          {
            id: "cils-c-u2-df-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is metadata and why does it matter?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Metadata", statement: "Data about data." }],
              steps: [
                { reasoning: "Data about data — who, when, where.", marks: 1, markCode: "M" },
                { reasoning: "Reveals patterns even when content private.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Context data; privacy implications",
            },
          },
          {
            id: "cils-c-u2-df-q3", difficulty: "core", totalMarks: 3,
            stem: "Why might 'delete' not fully remove online content? What persists?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Footprint permanence", statement: "Copies and caches persist." }],
              steps: [
                { reasoning: "Copies/screenshots/caches may exist.", marks: 1, markCode: "M" },
                { reasoning: "Other people's shares keep it alive.", marks: 1, markCode: "M" },
                { reasoning: "Treat posts as permanent.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Content can persist despite deletion",
            },
          },
          {
            id: "cils-c-u2-df-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define digital footprint, metadata, privacy settings, encryption, netiquette, data broker. (b) How does footprint affect future opportunities? (c) What is metadata on a photo? (d) Why use encrypted messaging? (e) What are data brokers? (f) List 5 footprint-reducing habits. (g) How do privacy settings work? (h) Design a 'digital hygiene' checklist.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Digital footprint", statement: "Privacy, metadata, habits." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Colleges/employers may check online.", marks: 1, markCode: "M" },
                { reasoning: "(c) Who/when/where/GPS data.", marks: 1, markCode: "M" },
                { reasoning: "(d) Only sender/receiver can read.", marks: 1, markCode: "M" },
                { reasoning: "(e) Companies collecting/selling personal data.", marks: 1, markCode: "M" },
                { reasoning: "(f) Five valid habits.", marks: 1, markCode: "M" },
                { reasoning: "(g) Control who sees posts/profile.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid hygiene checklist.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Digital footprint management and privacy.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u2-df-notes", title: "Digital footprint — notes",
      summary: "Footprint=online trail; metadata reveals context. Privacy settings + encrypted tools protect you.",
      sections: [
        { heading: "Key idea", body: "Everything online leaves traces — manage them deliberately." },
        { heading: "Habits", body: "Check privacy settings, think before posting, limit location tags." },
      ],
    },
  },
];
