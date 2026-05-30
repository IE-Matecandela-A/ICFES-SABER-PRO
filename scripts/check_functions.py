filepath = r"c:\Users\Usuario\Downloads\new\Saber11_Pro\js\app.js"
with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

import re
f1 = len(re.findall(r'_fetchWeeklyComplianceHtml', content))
f2 = len(re.findall(r'_fetchBattleRoyalRankingHtml', content))
print(f"_fetchWeeklyComplianceHtml count: {f1}")
print(f"_fetchBattleRoyalRankingHtml count: {f2}")

# Let's print matches with line numbers
for i, line in enumerate(content.splitlines()):
    if "_fetchWeeklyComplianceHtml" in line or "_fetchBattleRoyalRankingHtml" in line:
        print(f"Line {i+1}: {line.strip()}")
