filepath = r"c:\Users\Usuario\Downloads\new\Saber11_Pro\index.html"
with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

import re
matches = [i for i, line in enumerate(content.splitlines()) if "SABER_DB" in line or "examenes" in line or "startExam" in line]
for m in matches:
    safe_line = content.splitlines()[m].rstrip().encode('ascii', errors='replace').decode('ascii')
    print(f"Line {m+1}: {safe_line}")
