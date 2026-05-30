import os

root_dir = r"c:\Users\Usuario\Downloads\new\Saber11_Pro"
search_terms = ["SABER_DB", "NATIVE_EXAMS_DB", "archivo_js"]

for dirpath, _, filenames in os.walk(root_dir):
    if ".git" in dirpath or "node_modules" in dirpath:
        continue
    for filename in filenames:
        if filename.endswith(".js") or filename.endswith(".html"):
            filepath = os.path.join(dirpath, filename)
            try:
                with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                for term in search_terms:
                    if term in content:
                        for i, line in enumerate(content.splitlines()):
                            if term in line:
                                rel_path = os.path.relpath(filepath, root_dir)
                                print(f"{rel_path}:{i+1}: {line.strip()[:100]}")
            except Exception as e:
                pass
