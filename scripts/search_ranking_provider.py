import os

root_dir = r"c:\Users\Usuario\Downloads\new\Saber11_Pro"
found = False

for dirpath, _, filenames in os.walk(root_dir):
    if ".git" in dirpath or "node_modules" in dirpath:
        continue
    for filename in filenames:
        if filename.endswith(".js") or filename.endswith(".html"):
            filepath = os.path.join(dirpath, filename)
            try:
                with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                if "RankingProvider" in content:
                    found = True
                    for i, line in enumerate(content.splitlines()):
                        if "RankingProvider" in line and "=" in line or "class RankingProvider" in line:
                            rel_path = os.path.relpath(filepath, root_dir)
                            print(f"Defined in {rel_path} line {i+1}: {line.strip()}")
            except:
                pass

if not found:
    print("RankingProvider is never defined in any script file.")
