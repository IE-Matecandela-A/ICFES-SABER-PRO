filepath = r"c:\Users\Usuario\Downloads\new\Saber11_Pro\js\app.js"
with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

import re
# Let's search for keys or functions related to displaying the list of simulacros
matches = [i for i, line in enumerate(content.splitlines()) if "SABER_DB" in line or "NATIVE_EXAMS_DB" in line or "render" in line and "exam" in line.lower()]
for m in matches[:30]:
    safe_line = content.splitlines()[m].rstrip().encode('ascii', errors='replace').decode('ascii')
    print(f"Line {m+1}: {safe_line}")
