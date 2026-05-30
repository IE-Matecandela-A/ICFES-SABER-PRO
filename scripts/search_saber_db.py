filepath = r"c:\Users\Usuario\Downloads\new\Saber11_Pro\js\app.js"
with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "SABER_DB" in line:
        safe_line = line.rstrip().encode('ascii', errors='replace').decode('ascii')
        print(f"Line {i+1}: {safe_line}")
