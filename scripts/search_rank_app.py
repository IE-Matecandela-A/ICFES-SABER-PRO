filepath = r"c:\Users\Usuario\Downloads\new\Saber11_Pro\js\app.js"
with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

import re
matches = [i for i, line in enumerate(content.splitlines()) if "ranking" in line.lower() or "rank" in line.lower()]
print(f"Encontrados {len(matches)} coincidencias en js/app.js:")
for m in matches[:100]: # limit to first 100
    safe_line = content.splitlines()[m].rstrip().encode('ascii', errors='replace').decode('ascii')
    print(f"Line {m+1}: {safe_line}")
