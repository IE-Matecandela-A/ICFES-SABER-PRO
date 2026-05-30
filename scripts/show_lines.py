filepath = r"c:\Users\Usuario\Downloads\new\Saber11_Pro\js\app.js"
with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

def print_range(start_idx, end_idx):
    print(f"--- Lines {start_idx+1} to {end_idx+1} ---")
    for idx in range(start_idx, min(len(lines), end_idx)):
        safe_line = lines[idx].rstrip().encode('ascii', errors='replace').decode('ascii')
        print(f"{idx+1}: {safe_line}")

print_range(9910, 9940)
