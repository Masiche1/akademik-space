module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson51",
    lesson: {
      id: "ciecs-u1-lesson-1-1", code: "1-1",
      title: "Number Systems and Binary",
      goal: "I CAN convert between binary, denary and hexadecimal and explain place values and overflow.",
      standards: ["Cambridge IGCSE Computer Science 0478: data representation", "0478 section 1: number systems"],
      vocabulary: [
        { term: "Binary", definition: "Base-2 number system using digits 0 and 1." },
        { term: "Bit", definition: "Single binary digit — smallest unit of data." },
        { term: "Byte", definition: "Group of 8 bits." },
        { term: "Place value", definition: "Each digit's value determined by position." },
        { term: "Overflow", definition: "When a value exceeds storage capacity and wraps/errors." },
        { term: "Hexadecimal", definition: "Base-16 system: digits 0-9 and A-F; each hex digit = 4 bits." },
      ],
      concept: {
        id: "ciecs-u1-s1-binary", title: "Number systems and binary",
        skill: "Convert between binary, denary and hexadecimal at IGCSE level.",
        sections: [
          { heading: "Place values", body: "Binary place values double left-to-right: 128 64 32 16 8 4 2 1. An 8-bit byte holds values 0–255. Add place values of '1' bits for denary conversion; halve repeatedly for denary→binary." },
          { heading: "Hexadecimal and overflow", body: "Hex is compact: each hex digit = 4 bits (a nibble). Group binary into nibbles for hex. Overflow occurs when a value exceeds the maximum storable — e.g. 8-bit max is 255; 256 wraps to 0 or errors." },
        ],
        keyFormulas: [
          { name: "Place values", statement: "128 64 32 16 8 4 2 1" },
          { name: "Hex", statement: "1 hex digit = 4 bits = 1 nibble" },
          { name: "8-bit range", statement: "0 to 255" },
        ],
        workedExample: {
          problem: "Convert 1011 0101 to denary and hex.",
          solution: "Denary: 128+32+16+4+1 = 181. Hex: 1011=B, 0101=5 → 0xB5.",
        },
        questions: [
          {
            id: "ciecs-u1-bn-q1", difficulty: "foundation", totalMarks: 1,
            stem: "How many bits in a byte?",
            response: { type: "mcq", choices: [
              { id: "a", text: "8" }, { id: "b", text: "4" }, { id: "c", text: "16" }, { id: "d", text: "32" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Byte", statement: "8 bits." }],
              steps: [{ reasoning: "Byte = 8 bits.", marks: 1, markCode: "M" }],
              finalAnswer: "8",
            },
          },
          {
            id: "ciecs-u1-bn-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Convert 0110 1010 to denary.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Binary→denary", statement: "Sum place values." }],
              steps: [
                { reasoning: "Bits: 64+32+8+2 = 106.", marks: 1, markCode: "M" },
                { reasoning: "Answer 106.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "106",
            },
          },
          {
            id: "ciecs-u1-bn-q3", difficulty: "core", totalMarks: 3,
            stem: "Convert 0x2F to binary and denary. Show working.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Hex conversion", statement: "Hex→binary→denary." }],
              steps: [
                { reasoning: "2=0010, F=1111 → 0010 1111.", marks: 1, markCode: "M" },
                { reasoning: "Denary: 32+8+4+2+1=47.", marks: 1, markCode: "M" },
                { reasoning: "Answer: 47.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "47",
            },
          },
          {
            id: "ciecs-u1-bn-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define binary, bit, byte, place value, overflow, hexadecimal. (b) What are the place values in a byte? (c) Convert 1100 0011 to denary. (d) Convert 200 to 8-bit binary. (e) Convert 0xFF to binary and denary. (f) What is overflow and when does it happen? (g) Convert 0xA3 to binary. (h) How many different values can 4 bits represent?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Number systems", statement: "Conversions, overflow, hex." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) 128 64 32 16 8 4 2 1.", marks: 1, markCode: "M" },
                { reasoning: "(c) 128+64+2+1=195.", marks: 1, markCode: "M" },
                { reasoning: "(d) 1100 1000.", marks: 1, markCode: "M" },
                { reasoning: "(e) 1111 1111 = 255.", marks: 1, markCode: "M" },
                { reasoning: "(f) Value exceeds capacity → wraps/errors.", marks: 1, markCode: "M" },
                { reasoning: "(g) 1010 0011.", marks: 1, markCode: "M" },
                { reasoning: "(h) 16 (2^4).", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Number system conversions and overflow.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciecs-u1-bn-notes", title: "Number systems — notes",
      summary: "Binary=base2, hex=base16 (4 bits/digit), denary=base10. 8-bit byte = 0–255; overflow wraps.",
      sections: [
        { heading: "Key idea", body: "Group binary into nibbles for hex conversion." },
        { heading: "Overflow", body: "Values exceeding storage capacity wrap or error." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson52",
    lesson: {
      id: "ciecs-u1-lesson-1-2", code: "1-2",
      title: "Text, Graphics and Sound Representation",
      goal: "I CAN explain how text, images and sound are represented as binary data.",
      standards: ["Cambridge IGCSE Computer Science 0478: data representation", "0478 section 1: text/graphics/sound"],
      vocabulary: [
        { term: "Character encoding", definition: "Rules mapping characters to binary codes." },
        { term: "ASCII", definition: "7-bit encoding for basic English characters." },
        { term: "Unicode", definition: "Universal encoding for all languages and symbols." },
        { term: "Pixel", definition: "Smallest picture element — a coloured dot." },
        { term: "Resolution", definition: "Number of pixels in an image." },
        { term: "Sound sampling", definition: "Measuring sound amplitude at intervals." },
      ],
      concept: {
        id: "ciecs-u1-s2-media", title: "Media data representation",
        skill: "Explain binary encoding of text, graphics and sound at IGCSE level.",
        sections: [
          { heading: "Text encoding", body: "Characters stored as binary codes. ASCII: 7 bits, 128 characters, English only. Unicode: more bits, covers all languages, emoji, symbols. File size grows with text length × bits per character." },
          { heading: "Graphics and sound", body: "Images = pixel grids; each pixel has colour values. Resolution (pixel count) and colour depth (bits per pixel) determine quality/size. Sound = sampled amplitude values stored as binary numbers; higher sample rate = better quality." },
        ],
        keyFormulas: [
          { name: "ASCII", statement: "7-bit English encoding" },
          { name: "Unicode", statement: "universal multi-language encoding" },
          { name: "Colour depth", statement: "bits per pixel — more = more colours" },
        ],
        workedExample: {
          problem: "Why does a 24-bit colour photo take more space than an 8-bit one?",
          solution: "24 bits/pixel × pixels = 3× more binary data per pixel than 8 bits. More colours = bigger file.",
        },
        questions: [
          {
            id: "ciecs-u1-md-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is character encoding?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Rules mapping characters to binary codes" }, { id: "b", text: "A file format" }, { id: "c", text: "A type of font" }, { id: "d", text: "A network protocol" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Character encoding", statement: "Char→binary mapping." }],
              steps: [{ reasoning: "Encoding = char↔binary rules.", marks: 1, markCode: "M" }],
              finalAnswer: "Char→binary rules",
            },
          },
          {
            id: "ciecs-u1-md-q2", difficulty: "foundation", totalMarks: 2,
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
            id: "ciecs-u1-md-q3", difficulty: "core", totalMarks: 3,
            stem: "Explain how sound is represented as binary data. What affects file size?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Sound encoding", statement: "Sampling and amplitude." }],
              steps: [
                { reasoning: "Amplitude measured at intervals, stored as binary.", marks: 1, markCode: "M" },
                { reasoning: "Sample rate + bit depth affect quality/size.", marks: 1, markCode: "M" },
                { reasoning: "Higher rate = better quality, bigger file.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Sampled amplitude; rate+depth affect size",
            },
          },
          {
            id: "ciecs-u1-md-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define character encoding, ASCII, Unicode, pixel, resolution, colour depth, sound sampling. (b) Why is Unicode needed? (c) How many characters can ASCII represent? (d) What is a pixel? (e) How does resolution affect image size? (f) What is 24-bit colour? (g) Why do emojis need Unicode? (h) Compare storing 'Hi' as text vs as an image.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Media representation", statement: "Text, graphics, sound encoding." }],
              steps: [
                { reasoning: "(a) All seven definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Covers all languages/symbols.", marks: 1, markCode: "M" },
                { reasoning: "(c) 128 (2^7).", marks: 1, markCode: "M" },
                { reasoning: "(d) Smallest image element.", marks: 1, markCode: "M" },
                { reasoning: "(e) More pixels = bigger file.", marks: 1, markCode: "M" },
                { reasoning: "(f) 24 bits/pixel = 16.7M colours.", marks: 1, markCode: "M" },
                { reasoning: "(g) Emojis are symbols beyond ASCII.", marks: 1, markCode: "M" },
                { reasoning: "(h) Text=tiny char codes; image=thousands of pixels.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Text, graphics and sound binary encoding.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciecs-u1-md-notes", title: "Media representation — notes",
      summary: "Text=char codes (ASCII/Unicode); images=pixels; sound=samples. Size depends on depth/rate.",
      sections: [
        { heading: "Key idea", body: "All media becomes binary numbers with encoding rules." },
        { heading: "Size", body: "Higher quality = more bits = bigger files." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson53",
    lesson: {
      id: "ciecs-u1-lesson-1-3", code: "1-3",
      title: "Network Types and Protocols",
      goal: "I CAN describe network types, components and the protocols enabling communication.",
      standards: ["Cambridge IGCSE Computer Science 0478: communication and internet technologies", "0478 section 2: networks"],
      vocabulary: [
        { term: "LAN", definition: "Local Area Network — small geographic area." },
        { term: "WAN", definition: "Wide Area Network — large geographic area." },
        { term: "Packet", definition: "Small chunk of data sent across a network." },
        { term: "Protocol", definition: "Rules devices follow to communicate." },
        { term: "IP address", definition: "Unique identifier for a device on a network." },
        { term: "Router", definition: "Device forwarding packets between networks." },
      ],
      concept: {
        id: "ciecs-u1-s3-net", title: "Network types and protocols",
        skill: "Describe network architectures and protocols at IGCSE level.",
        sections: [
          { heading: "Network types", body: "LAN covers small areas (school, office) — fast, private. WAN covers large areas (internet, national networks). Topologies: bus, star, ring, mesh — star is most common. Wired (Ethernet) vs wireless (Wi-Fi)." },
          { heading: "Protocols and packet switching", body: "Protocols are rules: TCP ensures reliable delivery, IP handles addressing/routing, HTTP fetches web pages. Data split into packets routed independently — efficient and fault-tolerant." },
        ],
        keyFormulas: [
          { name: "LAN/WAN", statement: "small vs large area" },
          { name: "TCP/IP", statement: "reliable delivery + addressing" },
          { name: "Packet", statement: "data chunk with address labels" },
        ],
        workedExample: {
          problem: "Trace sending an email from your computer to a friend.",
          solution: "Email → SMTP protocol → packets → routers → recipient's mail server → SMTP → friend's inbox.",
        },
        questions: [
          {
            id: "ciecs-u1-nt-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the difference between LAN and WAN?",
            response: { type: "mcq", choices: [
              { id: "a", text: "LAN=small area, WAN=large area" }, { id: "b", text: "LAN=fast, WAN=slow" }, { id: "c", text: "LAN=wireless, WAN=wired" }, { id: "d", text: "No difference" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "LAN vs WAN", statement: "Geographic scope." }],
              steps: [{ reasoning: "LAN=local, WAN=wide area.", marks: 1, markCode: "M" }],
              finalAnswer: "Small vs large area",
            },
          },
          {
            id: "ciecs-u1-nt-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a packet and why are they used?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Packet switching", statement: "Data chunks." }],
              steps: [
                { reasoning: "Packet = data chunk with addresses.", marks: 1, markCode: "M" },
                { reasoning: "Efficient routing, fault tolerance.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Data chunks for efficient routing",
            },
          },
          {
            id: "ciecs-u1-nt-q3", difficulty: "core", totalMarks: 3,
            stem: "Name three network protocols and what each does.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Protocols", statement: "Communication rules." }],
              steps: [
                { reasoning: "TCP=reliable delivery; IP=addressing; HTTP=web pages.", marks: 1, markCode: "M" },
                { reasoning: "Each correctly described.", marks: 1, markCode: "M" },
                { reasoning: "Three protocols named.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "TCP, IP, HTTP described",
            },
          },
          {
            id: "ciecs-u1-nt-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define LAN, WAN, packet, protocol, IP address, router. (b) Compare LAN vs WAN. (c) What is a network topology? (d) Name 3 topologies. (e) Why is star topology common? (f) What does TCP guarantee? (g) What does IP do? (h) Explain packet switching benefits.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Networking", statement: "Types, topologies, protocols." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Size/speed/privacy differences.", marks: 1, markCode: "M" },
                { reasoning: "(c) Physical/logical layout.", marks: 1, markCode: "M" },
                { reasoning: "(d) Bus, star, ring, mesh.", marks: 1, markCode: "M" },
                { reasoning: "(e) Central hub; easy to manage.", marks: 1, markCode: "M" },
                { reasoning: "(f) Reliable ordered delivery.", marks: 1, markCode: "M" },
                { reasoning: "(g) Addressing and routing.", marks: 1, markCode: "M" },
                { reasoning: "(h) Efficiency + fault tolerance.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Network types, topologies, protocols.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciecs-u1-nt-notes", title: "Networks — notes",
      summary: "LAN=local, WAN=wide. Packets route via protocols; TCP=reliable, IP=addressing, HTTP=web.",
      sections: [
        { heading: "Key idea", body: "Protocols are the rules enabling devices to communicate." },
        { heading: "Topologies", body: "Star most common — central hub connects all devices." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson54",
    lesson: {
      id: "ciecs-u1-lesson-1-4", code: "1-4",
      title: "Internet Services and Security",
      goal: "I CAN describe internet services and apply security measures to protect data.",
      standards: ["Cambridge IGCSE Computer Science 0478: communication and internet technologies", "0478 section 2: internet services/security"],
      vocabulary: [
        { term: "WWW", definition: "World Wide Web — system of linked web pages." },
        { term: "HTTPS", definition: "Encrypted web protocol — 'S' = secure." },
        { term: "Encryption", definition: "Scrambling data so only authorised parties read it." },
        { term: "Phishing", definition: "Fake messages tricking users into revealing credentials." },
        { term: "Firewall", definition: "Security barrier blocking unauthorised access." },
        { term: "DNS", definition: "Domain Name System — translates names to IP addresses." },
      ],
      concept: {
        id: "ciecs-u1-s4-internet", title: "Internet services and security",
        skill: "Describe internet services and security at IGCSE level.",
        sections: [
          { heading: "Internet services", body: "WWW = web pages linked via hyperlinks. Email (SMTP/POP3/IMAP), file transfer (FTP), VoIP calls, cloud services. DNS translates domain names to IP addresses so humans don't memorise numbers." },
          { heading: "Security threats and defences", body: "Threats: phishing (fake messages), malware (viruses, ransomware), man-in-the-middle attacks. Defences: HTTPS encryption, firewalls, strong passwords, 2FA, antivirus, updates, user awareness." },
        ],
        keyFormulas: [
          { name: "HTTPS", statement: "encrypted web traffic" },
          { name: "DNS", statement: "name → IP lookup" },
          { name: "2FA", statement: "password + second factor" },
        ],
        workedExample: {
          problem: "Why is HTTPS important when entering credit card details?",
          solution: "HTTPS encrypts data in transit — prevents interception. Look for padlock + 'https://' in URL.",
        },
        questions: [
          {
            id: "ciecs-u1-is-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does HTTPS provide that HTTP doesn't?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Encryption" }, { id: "b", text: "Faster speed" }, { id: "c", text: "More pages" }, { id: "d", text: "Better design" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "HTTPS", statement: "Encrypted web." }],
              steps: [{ reasoning: "S = secure/encrypted.", marks: 1, markCode: "M" }],
              finalAnswer: "Encryption",
            },
          },
          {
            id: "ciecs-u1-is-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is phishing? Give one defence against it.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Phishing", statement: "Deceptive credential theft." }],
              steps: [
                { reasoning: "Phishing = fake messages for credentials.", marks: 1, markCode: "M" },
                { reasoning: "Defence: verify sender, don't click links, 2FA.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Fake messages; verify + 2FA",
            },
          },
          {
            id: "ciecs-u1-is-q3", difficulty: "core", totalMarks: 3,
            stem: "Explain how DNS works when you type 'www.example.com'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "DNS", statement: "Name→IP resolution." }],
              steps: [
                { reasoning: "Browser asks DNS server for IP.", marks: 1, markCode: "M" },
                { reasoning: "DNS returns IP address.", marks: 1, markCode: "M" },
                { reasoning: "Browser connects to that IP.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Name→IP→connect",
            },
          },
          {
            id: "ciecs-u1-is-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define WWW, HTTPS, encryption, phishing, firewall, DNS, 2FA, malware. (b) Why is the WWW called 'World Wide'? (c) What does encryption protect? (d) List 3 internet services. (e) What is a firewall? (f) Why update software? (g) What is a man-in-the-middle attack? (h) Design security advice for online banking users.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Internet security", statement: "Services, threats, defences." }],
              steps: [
                { reasoning: "(a) All eight definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Global network of linked pages.", marks: 1, markCode: "M" },
                { reasoning: "(c) Data in transit from interception.", marks: 1, markCode: "M" },
                { reasoning: "(d) Three valid services.", marks: 1, markCode: "M" },
                { reasoning: "(e) Blocks unauthorised access.", marks: 1, markCode: "M" },
                { reasoning: "(f) Patches vulnerabilities.", marks: 1, markCode: "M" },
                { reasoning: "(g) Attacker intercepts/alters communication.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid security advice.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Internet services and security measures.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciecs-u1-is-notes", title: "Internet security — notes",
      summary: "HTTPS encrypts web traffic; DNS resolves names to IPs; defend with firewalls, 2FA, updates.",
      sections: [
        { heading: "Key idea", body: "Security is layered — encryption + firewalls + user awareness." },
        { heading: "HTTPS", body: "Look for padlock — especially for sensitive data." },
      ],
    },
  },
  {
    file: "lesson-1-5.ts", exportName: "lesson55",
    lesson: {
      id: "ciecs-u1-lesson-1-5", code: "1-5",
      title: "Data Compression",
      goal: "I CAN explain lossless and lossy compression and when each is appropriate.",
      standards: ["Cambridge IGCSE Computer Science 0478: data representation", "0478 section 1: compression"],
      vocabulary: [
        { term: "Compression", definition: "Reducing file size by encoding data more efficiently." },
        { term: "Lossless", definition: "Compression allowing exact reconstruction of original." },
        { term: "Lossy", definition: "Compression discarding some data permanently." },
        { term: "Run-length encoding", definition: "Lossless method replacing repeats with counts." },
        { term: "Dictionary encoding", definition: "Replacing repeated patterns with codes." },
        { term: "File size", definition: "Amount of storage data occupies." },
      ],
      concept: {
        id: "ciecs-u1-s5-compress", title: "Data compression",
        skill: "Compare lossless and lossy compression at IGCSE level.",
        sections: [
          { heading: "Lossless compression", body: "Preserves all data — original can be exactly restored. Methods: run-length encoding (RRRR → 4R), dictionary encoding (common patterns → short codes). Used for text, code, medical data." },
          { heading: "Lossy compression", body: "Discards some data permanently for greater size reduction. Used for images (JPEG), audio (MP3), video (MP4) where minor quality loss is acceptable. Trade-off: smaller files vs quality." },
        ],
        keyFormulas: [
          { name: "Lossless", statement: "exact restoration — text/code" },
          { name: "Lossy", statement: "data discarded — media files" },
          { name: "RLE", statement: "run-length: repeats → counts" },
        ],
        workedExample: {
          problem: "Encode 'AAAAABBBCC' using run-length encoding.",
          solution: "5A3B2C — much shorter than 10 characters.",
        },
        questions: [
          {
            id: "ciecs-u1-cp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is compression?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Reducing file size by encoding more efficiently" }, { id: "b", text: "Deleting files" }, { id: "c", text: "A type of virus" }, { id: "d", text: "A network cable" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Compression", statement: "Size reduction." }],
              steps: [{ reasoning: "Compression encodes data to use fewer bits.", marks: 1, markCode: "M" }],
              finalAnswer: "Efficient encoding for smaller files",
            },
          },
          {
            id: "ciecs-u1-cp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between lossless and lossy compression?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Lossless vs lossy", statement: "Exact vs approximate." }],
              steps: [
                { reasoning: "Lossless=exact restoration; lossy=permanent data loss.", marks: 1, markCode: "M" },
                { reasoning: "Examples for each.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Exact vs approximate",
            },
          },
          {
            id: "ciecs-u1-cp-q3", difficulty: "core", totalMarks: 3,
            stem: "When should you use lossy vs lossless compression? Give an example of each.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Compression choice", statement: "Data type decides." }],
              steps: [
                { reasoning: "Lossless for text/code/medical — exact needed.", marks: 1, markCode: "M" },
                { reasoning: "Lossy for images/audio/video — minor loss OK.", marks: 1, markCode: "M" },
                { reasoning: "Reasoning given.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Lossless for critical data; lossy for media",
            },
          },
          {
            id: "ciecs-u1-cp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define compression, lossless, lossy, run-length encoding, dictionary encoding, file size. (b) Encode 'BBBBBBAAAB' with RLE. (c) Why is RLE lossless? (d) What is dictionary encoding? (e) Why use lossy for JPEG? (f) Why NOT use lossy for text documents? (g) Compare JPEG vs PNG use cases. (h) Design a compression strategy for a photo album app.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Compression", statement: "Lossless vs lossy." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) 6B3A1B.", marks: 1, markCode: "M" },
                { reasoning: "(c) Exact reconstruction possible.", marks: 1, markCode: "M" },
                { reasoning: "(d) Replace patterns with codes.", marks: 1, markCode: "M" },
                { reasoning: "(e) Photos tolerate minor quality loss.", marks: 1, markCode: "M" },
                { reasoning: "(f) Text needs exact characters.", marks: 1, markCode: "M" },
                { reasoning: "(g) JPEG=photos; PNG=text/graphics needing sharpness.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid compression strategy.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Compression methods and applications.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciecs-u1-cp-notes", title: "Compression — notes",
      summary: "Lossless=exact restoration (text/code); lossy=permanent loss (media). RLE and dictionary methods.",
      sections: [
        { heading: "Key idea", body: "Choose compression based on whether exact data matters." },
        { heading: "RLE", body: "Runs of repeats → count + symbol." },
      ],
    },
  },
];
