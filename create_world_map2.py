import re

with open("/Users/macbook/.gemini/antigravity-ide/brain/507812a9-e3e2-4b82-a544-6ac60fa5fabe/.system_generated/steps/167/content.md", "r") as f:
    svg_content = f.read()

# Extract paths
paths = re.findall(r'<path[^>]*d="([^"]+)"', svg_content)
if not paths:
    paths = re.findall(r'<path[\s\S]*?d="([^"]+)"', svg_content)

viewBox_match = re.search(r'viewBox="([^"]+)"', svg_content, re.IGNORECASE)
viewBox = viewBox_match.group(1) if viewBox_match else "0 0 1000 500"

component = f"""import React from 'react';

export function WorldMap({{ className }}: {{ className?: string }}) {{
  return (
    <div className={{`relative ${{className || ''}}`}}>
      <svg viewBox="{viewBox}" fill="#e5e5e5" stroke="white" strokeWidth="1" className="w-full h-full">
"""

for d in paths:
    component += f'        <path d="{d}" />\n'

component += """      </svg>
      
      {/* Map Content Container absolute positioned over the map */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 1000 500" fill="none" className="w-full h-full">
          {/* Ant lines (bezier curves) connecting Africa to other nodes */}
          <path d="M 500 250 Q 550 150 650 150" stroke="#a40000" strokeWidth="1.5" strokeDasharray="4 4" fill="none" className="opacity-60" />
          <path d="M 500 250 Q 500 150 400 120" stroke="#a40000" strokeWidth="1.5" strokeDasharray="4 4" fill="none" className="opacity-60" />
          <path d="M 500 250 Q 300 300 250 200" stroke="#a40000" strokeWidth="1.5" strokeDasharray="4 4" fill="none" className="opacity-60" />
          <path d="M 500 250 Q 350 400 250 350" stroke="#a40000" strokeWidth="1.5" strokeDasharray="4 4" fill="none" className="opacity-60" />
          <path d="M 500 250 Q 700 400 800 380" stroke="#a40000" strokeWidth="1.5" strokeDasharray="4 4" fill="none" className="opacity-60" />
          <path d="M 500 250 Q 600 350 650 400" stroke="#a40000" strokeWidth="1.5" strokeDasharray="4 4" fill="none" className="opacity-60" />
          <path d="M 500 250 Q 550 200 700 250" stroke="#a40000" strokeWidth="1.5" strokeDasharray="4 4" fill="none" className="opacity-60" />
        </svg>

        {/* Nodes (Red Dots) */}
        {/* Africa (Central Hub) */}
        <div className="absolute top-[50%] left-[50%] w-2 h-2 bg-rsa-red rounded-full shadow-[0_0_8px_rgba(164,0,0,0.8)] -translate-x-1/2 -translate-y-1/2 z-10" />
        {/* Europe */}
        <div className="absolute top-[30%] left-[65%] w-1.5 h-1.5 bg-rsa-red rounded-full shadow-[0_0_8px_rgba(164,0,0,0.8)] -translate-x-1/2 -translate-y-1/2" />
        {/* North America */}
        <div className="absolute top-[24%] left-[40%] w-1.5 h-1.5 bg-rsa-red rounded-full shadow-[0_0_8px_rgba(164,0,0,0.8)] -translate-x-1/2 -translate-y-1/2" />
        {/* US */}
        <div className="absolute top-[40%] left-[25%] w-1.5 h-1.5 bg-rsa-red rounded-full shadow-[0_0_8px_rgba(164,0,0,0.8)] -translate-x-1/2 -translate-y-1/2" />
        {/* South America */}
        <div className="absolute top-[70%] left-[25%] w-1.5 h-1.5 bg-rsa-red rounded-full shadow-[0_0_8px_rgba(164,0,0,0.8)] -translate-x-1/2 -translate-y-1/2" />
        {/* Middle East */}
        <div className="absolute top-[50%] left-[70%] w-1.5 h-1.5 bg-rsa-red rounded-full shadow-[0_0_8px_rgba(164,0,0,0.8)] -translate-x-1/2 -translate-y-1/2" />
        {/* Australia */}
        <div className="absolute top-[76%] left-[80%] w-1.5 h-1.5 bg-rsa-red rounded-full shadow-[0_0_8px_rgba(164,0,0,0.8)] -translate-x-1/2 -translate-y-1/2" />
        {/* South Africa */}
        <div className="absolute top-[80%] left-[65%] w-1.5 h-1.5 bg-rsa-red rounded-full shadow-[0_0_8px_rgba(164,0,0,0.8)] -translate-x-1/2 -translate-y-1/2" />

      </div>
    </div>
  );
}
"""

with open("components/ui/WorldMap.tsx", "w") as f:
    f.write(component)

print("Created components/ui/WorldMap.tsx")
