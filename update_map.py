import re

with open("components/ui/WorldMap.tsx", "r") as f:
    content = f.read()

# We want to replace the viewBox of the main SVG and then replace everything from </svg> to the end.
# viewBox="0 0 2000 857" -> viewBox="500 50 1200 800"
content = content.replace('viewBox="0 0 2000 857"', 'viewBox="400 50 1350 800"')

# Now replace the overlay container with native SVG elements inside the main SVG
overlay_start = content.find('      </svg>')

if overlay_start != -1:
    new_end = """
        {/* Ant lines (bezier curves) connecting Africa to other nodes */}
        <g stroke="#a40000" strokeWidth="2" strokeDasharray="4 4" fill="none" className="opacity-40">
          <path d="M 1030 450 Q 1050 300 1020 220" /> {/* Africa to Europe */}
          <path d="M 1030 450 Q 700 250 500 280" /> {/* Africa to N. America */}
          <path d="M 1030 450 Q 800 450 650 600" /> {/* Africa to S. America */}
          <path d="M 1030 450 Q 1150 400 1200 350" /> {/* Africa to Mid East */}
          <path d="M 1030 450 Q 1300 400 1700 650" /> {/* Africa to Australia */}
          <path d="M 1030 450 Q 1050 550 1080 650" /> {/* Africa to S. Africa */}
        </g>

        {/* Nodes (Red Dots) */}
        <g fill="#a40000">
          <circle cx="1030" cy="450" r="8" className="drop-shadow-[0_0_8px_rgba(164,0,0,0.8)]" /> {/* Africa */}
          <circle cx="1020" cy="220" r="5" className="drop-shadow-[0_0_8px_rgba(164,0,0,0.8)]" /> {/* Europe */}
          <circle cx="500" cy="280" r="5" className="drop-shadow-[0_0_8px_rgba(164,0,0,0.8)]" /> {/* US */}
          <circle cx="650" cy="600" r="5" className="drop-shadow-[0_0_8px_rgba(164,0,0,0.8)]" /> {/* S. America */}
          <circle cx="1200" cy="350" r="5" className="drop-shadow-[0_0_8px_rgba(164,0,0,0.8)]" /> {/* Mid East */}
          <circle cx="1700" cy="650" r="5" className="drop-shadow-[0_0_8px_rgba(164,0,0,0.8)]" /> {/* Australia */}
          <circle cx="1080" cy="650" r="5" className="drop-shadow-[0_0_8px_rgba(164,0,0,0.8)]" /> {/* S. Africa */}
        </g>
      </svg>
    </div>
  );
}
"""
    content = content[:overlay_start] + new_end

with open("components/ui/WorldMap.tsx", "w") as f:
    f.write(content)

print("Updated components/ui/WorldMap.tsx")
