filepath = r"c:\Users\Usuario\Downloads\new\Saber11_Pro\js\app.js"
with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

# Let's search for "const ExamEngine =" or "var ExamEngine =" or similar
import re
match = re.search(r'(const|let|var|window\.)ExamEngine\s*=', content)
if match:
    idx = match.start()
    # print line around this match
    lines_before = content[:idx].count('\n')
    print(f"ExamEngine found around line {lines_before+1}")
    
    # Print 100 lines from there
    lines = content.splitlines()
    for i in range(lines_before, min(len(lines), lines_before + 100)):
        safe_line = lines[i].rstrip().encode('ascii', errors='replace').decode('ascii')
        print(f"{i+1}: {safe_line}")
else:
    print("ExamEngine not found")
