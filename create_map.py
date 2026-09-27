import re

with open("public/images/nigeria-map.svg", "r") as f:
    svg_content = f.read()

# Extract paths
paths = re.findall(r'<path d="([^"]+)" id="([^"]+)" name="([^"]+)">', svg_content)

se_states = ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"]

component = """import React from 'react';

export function NigeriaMap({ className }: { className?: string }) {
  return (
    <div className={`relative ${className || ''}`}>
      <svg viewBox="0 0 1000 812" fill="none" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
"""

for d, id_, name in paths:
    fill = '"#a40000"' if name in se_states else '"transparent"'
    stroke = '"#fbe6e6"' if name in se_states else '"#e5e5e5"'
    component += f'        <path d="{d}" id="{id_}" name="{name}" fill={fill} stroke={stroke} />\n'

component += """      </svg>
      
      {/* Some red dots as seen in the design */}
      <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-rsa-red rounded-full shadow-[0_0_8px_rgba(164,0,0,0.8)]" />
      <div className="absolute top-[35%] left-[60%] w-1.5 h-1.5 bg-rsa-red rounded-full shadow-[0_0_8px_rgba(164,0,0,0.8)]" />
      <div className="absolute top-[45%] left-[45%] w-2 h-2 bg-rsa-red rounded-full shadow-[0_0_8px_rgba(164,0,0,0.8)]" />
      <div className="absolute top-[60%] left-[20%] w-1.5 h-1.5 bg-rsa-red rounded-full shadow-[0_0_8px_rgba(164,0,0,0.8)]" />
      <div className="absolute top-[80%] left-[65%] w-1.5 h-1.5 bg-rsa-red rounded-full shadow-[0_0_8px_rgba(164,0,0,0.8)]" />
      <div className="absolute top-[35%] left-[80%] w-2 h-2 bg-rsa-red rounded-full shadow-[0_0_8px_rgba(164,0,0,0.8)]" />
      
      {/* Map Pin Label */}
      <div className="absolute top-[65%] left-[75%] flex flex-col items-start gap-1">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-rsa-red flex-shrink-0">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
          </svg>
          <div className="text-[14px] font-bold text-rsa-black uppercase leading-tight tracking-[0.05em]">
            South-East<br/>Nigeria
          </div>
        </div>
      </div>
    </div>
  );
}
"""

with open("components/ui/NigeriaMap.tsx", "w") as f:
    f.write(component)

print("Created components/ui/NigeriaMap.tsx")
