filepath = r"c:\Users\Usuario\Downloads\new\Saber11_Pro\js\arcadeGames.js"
with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

import re
matches = [i for i, line in enumerate(content.splitlines()) if "arcade_v1" in line.lower()]
print(f"Encontrados {len(matches)} coincidencias de arcade_v1 en arcadeGames.js:")
for m in matches:
    safe_line = content.splitlines()[m].rstrip().encode('ascii', errors='replace').decode('ascii')
    print(f"Line {m+1}: {safe_line[:120]}")
