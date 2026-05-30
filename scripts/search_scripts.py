filepath = r"c:\Users\Usuario\Downloads\new\Saber11_Pro\index.html"
with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

for i, line in enumerate(content.splitlines()):
    if "index_simulacros.js" in line or "simulacro" in line.lower() and "script" in line:
        safe_line = line.rstrip().encode('ascii', errors='replace').decode('ascii')
        print(f"Line {i+1}: {safe_line}")
