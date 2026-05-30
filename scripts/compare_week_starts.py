filepath = r"c:\Users\Usuario\Downloads\new\Saber11_Pro\js\app.js"
with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

def print_around(line_idx, context=10):
    start = max(0, line_idx - context)
    end = min(len(lines), line_idx + context)
    print(f"--- Around line {line_idx+1} ---")
    for idx in range(start, end):
        safe_line = lines[idx].rstrip().encode('ascii', errors='replace').decode('ascii')
        print(f"{idx+1}: {safe_line}")

print_around(7219, 10)
print_around(7342, 10)
