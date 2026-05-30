filepath = r"c:\Users\Usuario\Downloads\new\Saber11_Pro\js\app.js"
with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "auth" in line.lower() or "token" in line.lower() or "firebase" in line.lower():
        if "author" in line.lower():
            continue
        safe_line = line.strip().encode('ascii', errors='replace').decode('ascii')
        print(f"Line {i+1}: {safe_line[:120]}")
