import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "edxbtecit-u8-lesson-8-3",
  code: "8-3",
  title: "Wireless Networks and Network Security",
  goal: "I CAN describe wireless networking technologies and the network-layer security measures that protect data in transit.",
  standards: ["Pearson BTEC Level 3 National Information Technology — Specialist unit: Computer Networks and Data Communication", "Wireless networking and network security"],
  
  vocabulary: [
    { term: "Wi-Fi", definition: "Wireless LAN technology based on IEEE 802.11 standards." },
    { term: "SSID", definition: "Service Set Identifier — the broadcast name of a wireless network." },
    { term: "Access point", definition: "Device providing wireless connectivity to a wired network." },
    { term: "WPA2/WPA3", definition: "Current Wi-Fi security protocols using strong encryption." },
    { term: "Firewall", definition: "Hardware or software barrier filtering network traffic by rules." },
    { term: "Encryption", definition: "Scrambling data so only authorised parties can read it." },
    { term: "MAC filtering", definition: "Allowing only listed device MAC addresses onto a wireless network." },
  ],
  concepts: [
    {
      id: "edxbtecit-u8-l3-wireless",
      title: "Wireless networking",
      skill: "Describe Wi-Fi standards, frequency bands, coverage and the roles of access points and SSIDs.",
      lesson: {
        sections: [
          {
            heading: "Wi-Fi standards",
            body: "Wi-Fi is based on IEEE 802.11. **802.11b/g** use 2.4 GHz (better range, more congestion); **802.11a/n/ac/ax** use 5 GHz (faster, shorter range, less congestion). **Wi-Fi 6 (802.11ax)** improves speed and efficiency in crowded areas.\n\nAn **access point** connects wireless devices to the wired LAN. The **SSID** is the network's broadcast name; it can be hidden. Wireless uses CSMA/CA — devices check the channel is clear before transmitting.",
          },
          {
            heading: "Coverage, interference and alternatives",
            body: "2.4 GHz travels farther and penetrates walls better but shares only 3 non-overlapping channels. 5 GHz offers more bandwidth but weaker wall penetration. Interference from microwaves, Bluetooth and neighbouring networks degrades performance.\n\nOther wireless technologies: **Bluetooth** (PAN, ~10 m), **infrared** (line-of-sight), **microwave** and **satellite** links for WANs, **4G/5G** cellular mobile networks.",
          },
        ],
        keyFormulas: [
          { name: "Bands", statement: "2.4 GHz = range; 5 GHz = speed" },
          { name: "802.11ax", statement: "Wi-Fi 6 — high efficiency" },
        ],
        workedExample: {
          problem: "A warehouse needs Wi-Fi across 200 m with heavy device density. Which band and standard would you recommend?",
          solution: "5 GHz with 802.11ax (Wi-Fi 6): better for dense device areas; add multiple access points for the 200 m coverage since 5 GHz range is limited.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u8-l3-wireless-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does SSID stand for?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Secure Signal Identifier"
                    },
                    {
                              "id": "b",
                              "text": "Service Set Identifier"
                    },
                    {
                              "id": "c",
                              "text": "System Security ID"
                    },
                    {
                              "id": "d",
                              "text": "Standard Signal ID"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "SSID",
                              "statement": "Service Set Identifier — the broadcast name of a wireless network."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SSID = Service Set Identifier.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Service Set Identifier"
},
        },
        {
          id: "edxbtecit-u8-l3-wireless-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the main advantage of 5 GHz Wi-Fi over 2.4 GHz.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "5 GHz band",
                              "statement": "Less congestion, higher speeds; weaker wall penetration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Less interference/congestion on 5 GHz.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Supports higher data rates.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Less congestion and higher speeds (shorter range)"
},
        },
        {
          id: "edxbtecit-u8-l3-wireless-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 2.4 GHz Wi-Fi often has a longer range than 5 GHz.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Frequency vs range",
                              "statement": "Lower frequency signals travel farther and penetrate obstacles better."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lower frequency = longer wavelength.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Longer waves travel farther and penetrate walls better.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Trade-off: 2.4 GHz is more congested.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2.4 GHz lower frequency → longer range, better penetration, but more congestion"
},
        },
        {
          id: "edxbtecit-u8-l3-wireless-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A café suffers slow Wi-Fi at busy times. Diagnose the likely cause and recommend two improvements.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Wireless congestion",
                              "statement": "Shared medium + interference limit throughput."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Many devices share limited bandwidth — congestion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "2.4 GHz interference from neighbouring networks/microwaves.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Improvement: add access points / use 5 GHz band.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Improvement: upgrade to Wi-Fi 6 or manage bandwidth per user.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Diagnosis linked to scenario.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Congestion/interference; add APs, use 5 GHz or Wi-Fi 6"
},
        },
        {
          id: "edxbtecit-u8-l3-wireless-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State the role of an access point.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Compare 2.4 GHz and 5 GHz bands.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Name two non-Wi-Fi wireless technologies and their typical uses.",
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
                              "name": "Wireless networking",
                              "statement": "Bands, access points, alternatives."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Connects wireless devices to the wired network.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "2.4 GHz = better range/penetration, more congestion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "5 GHz = faster, shorter range.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both bands contrasted.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Bluetooth (PAN devices), 4G/5G (mobile data), infrared/satellite.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Uses correctly matched.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "AP bridges wireless/wired; band trade-offs; Bluetooth/cellular alternatives"
},
        },
        {
          id: "edxbtecit-u8-l3-wireless-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define Wi-Fi and SSID. (b) Explain the role of an access point. (c) Compare the 2.4 GHz and 5 GHz bands. (d) State what IEEE 802.11ax is. (e) Name two causes of wireless interference. (f) Give one alternative wireless technology and its use.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define Wi-Fi and SSID.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Role of access point.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Compare 2.4 and 5 GHz.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "What is 802.11ax.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Two interference causes.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Alternative wireless technology.",
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
                              "name": "Wireless networking",
                              "statement": "Wi-Fi standards, bands, interference."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Wi-Fi = wireless LAN (802.11).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "SSID = network broadcast name.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bridges wireless devices to the wired LAN.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "2.4 GHz range/penetration vs 5 GHz speed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Trade-off stated.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Wi-Fi 6 — high efficiency standard.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Microwaves/Bluetooth/other networks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Second cause stated.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Bluetooth/cellular/infrared named with use.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Use correctly matched.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Wireless networking fundamentals: bands, APs, interference, alternatives."
},
        },
      ],
    },
    {
      id: "edxbtecit-u8-l3-netsec",
      title: "Network security measures",
      skill: "Describe wireless encryption standards, firewalls, access control and other network-layer defences.",
      lesson: {
        sections: [
          {
            heading: "Wireless encryption",
            body: "Wi-Fi security evolved: **WEP** (weak, cracked easily — avoid), **WPA** (TKIP, interim), **WPA2** (AES-CCMP — long-standing standard), **WPA3** (stronger handshake, forward secrecy, protects against offline attacks). Always use WPA2 minimum, WPA3 preferred.\n\nOther wireless defences: hide SSID, MAC filtering (weak alone), disable WPS, guest networks for visitors, strong passwords.",
          },
          {
            heading: "Network-layer defences",
            body: "**Firewall** filters traffic by rules (block/allow ports, IPs, protocols) — hardware or software. **Encryption** (TLS/HTTPS, VPN) protects data in transit — a **VPN** creates an encrypted tunnel over untrusted networks. **Network segmentation/VLANs** isolate parts of a network to limit breach spread.\n\nAccess control: strong passwords, MFA, least-privilege accounts, regular firmware updates on routers/APs. Monitoring: logs, intrusion detection.",
          },
        ],
        keyFormulas: [
          { name: "Wi-Fi security", statement: "WEP < WPA < WPA2 < WPA3" },
          { name: "VPN", statement: "Encrypted tunnel over public networks" },
          { name: "Firewall", statement: "Rule-based traffic filtering" },
        ],
        workedExample: {
          problem: "A small business router still uses WEP. List three security improvements in priority order.",
          solution: "1) Upgrade encryption to WPA2/WPA3 immediately. 2) Enable a strong admin password and firmware updates. 3) Add a firewall/guest network and disable WPS.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u8-l3-netsec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the weakest and should never be used for Wi-Fi security?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "WPA3"
                    },
                    {
                              "id": "b",
                              "text": "WPA2"
                    },
                    {
                              "id": "c",
                              "text": "WPA"
                    },
                    {
                              "id": "d",
                              "text": "WEP"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "WEP",
                              "statement": "Wired Equivalent Privacy — outdated and insecure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "WEP is the weakest Wi-Fi security protocol.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(d)** WEP",
          "commonErrors": [
                    "Confusing WEP with WPA2."
          ]
},
        },
        {
          id: "edxbtecit-u8-l3-netsec-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the function of a firewall?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Firewall",
                              "statement": "Filters network traffic using rules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inspects network traffic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Allows or blocks it by configured rules.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Filters incoming/outgoing traffic by security rules"
},
        },
        {
          id: "edxbtecit-u8-l3-netsec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why WPA2 or WPA3 should be used instead of WEP or WPA.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Encryption strength",
                              "statement": "AES-based WPA2/WPA3 resist modern attacks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "WEP uses weak RC4 and is trivially cracked.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "WPA/TKIP is deprecated and weaker than AES.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "WPA2/WPA3 use AES and stronger handshakes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "WPA2/WPA3 use AES — far stronger than WEP/WPA"
},
        },
        {
          id: "edxbtecit-u8-l3-netsec-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how a VPN protects data sent over a public Wi-Fi network.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "VPN tunnel",
                              "statement": "Encrypts all traffic between client and VPN server."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "VPN creates an encrypted tunnel to a remote server.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All traffic is encrypted inside the tunnel — eavesdroppers see only ciphertext.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Protects against interception on untrusted public Wi-Fi.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Also masks the user's real IP address.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Clear link to the public-Wi-Fi scenario.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "VPN encrypts traffic in a tunnel, shielding it from interception"
},
        },
        {
          id: "edxbtecit-u8-l3-netsec-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Rank WEP, WPA, WPA2, WPA3 from weakest to strongest.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State two functions of a firewall.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain what network segmentation does.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Network defences",
                              "statement": "Encryption, filtering, segmentation."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Correct order: WEP < WPA < WPA2 < WPA3.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Filters traffic by rules (ports/IPs/protocols).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Blocks unauthorised access / logs traffic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Divides network into isolated sections (VLANs/zones).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Limits spread of breaches between segments.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "WEP<WPA<WPA2<WPA3; firewall filters/blocks; segmentation isolates"
},
        },
        {
          id: "edxbtecit-u8-l3-netsec-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Rank the Wi-Fi security protocols by strength. (b) Define encryption and give one network use. (c) State the function of a firewall. (d) Explain what a VPN is. (e) Name two other wireless security measures besides encryption. (f) Explain why MAC filtering alone is weak security.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Rank Wi-Fi protocols by strength.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Define encryption + one network use.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Firewall function.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "What a VPN is.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Two other wireless security measures.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Why MAC filtering is weak.",
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
                              "name": "Network security",
                              "statement": "Encryption, firewalls, VPNs, access control."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "WEP < WPA < WPA2 < WPA3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Encryption = scrambling data for authorised readers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use: HTTPS/TLS, VPN tunnels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Filters traffic by security rules.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Encrypted tunnel over untrusted networks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Protects confidentiality/integrity of traffic.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Hidden SSID, strong password, disable WPS, guest network.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Second measure stated.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "MAC addresses can be spoofed; list is static and unencrypted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Must be combined with encryption.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Network security: encryption hierarchy, firewalls, VPNs, access control."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u8-n103-notes",
      title: "Networks 8-3 — notes",
      summary: "2.4 GHz range vs 5 GHz speed; WEP→WPA3 encryption hierarchy; firewalls, VPNs and segmentation defend the network.",
      sections: [
        { heading: "Key idea", body: "Wireless trades range for speed; security layers complement each other." },
        { heading: "Encryption order", body: "Never use WEP; WPA2 minimum, WPA3 preferred." },
        { heading: "Defence in depth", body: "Encryption + firewall + segmentation + access control together." },
      ],
    },
  ],
};
