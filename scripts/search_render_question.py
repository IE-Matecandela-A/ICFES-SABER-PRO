filepath = r"c:\Users\Usuario\Downloads\new\Saber11_Pro\js\app.js"
with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

import re
matches = [i for i, line in enumerate(content.splitlines()) if "renderquestion" in line.lower()]
print(f"Encontrados {len(matches)} coincidencias:")
for m in matches:
    safe_line = content.splitlines()[m].rstrip().encode('ascii', errors='replace').decode('ascii')
    print(f"Line {m+1}: {safe_line[:120]}")
