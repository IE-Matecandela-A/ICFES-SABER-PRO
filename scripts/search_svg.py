filepath = r"c:\Users\Usuario\Downloads\new\Saber11_Pro\js\app.js"
with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

for i, line in enumerate(content.splitlines()):
    if ".svg" in line or "q.svg" in line or "svg" in line.lower() and ("render" in line or "innerHTML" in line or "append" in line):
        safe_line = line.rstrip().encode('ascii', errors='replace').decode('ascii')
        print(f"Line {i+1}: {safe_line}")
