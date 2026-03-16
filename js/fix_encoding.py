
import os

path = r'c:\Users\Usuario\Downloads\new\estudiantes\Saber11_Pro\js\mathModule3.js'

replacements = {
    'Ã³': 'ó', 'Ã¡': 'á', 'Ã©': 'é', 'Ã­': 'í', 'Ãº': 'ú', 'Ã±': 'ñ',
    'Ã“': 'Ó', 'Ã ': 'Á', 'Ã‰': 'É', 'Ã ': 'Í', 'Ãš': 'Ú', 'Ã‘': 'Ñ',
    'Ã—': '×', 'â†’': '→', 'âœ—': '✗', 'âœ“': '✓', 'Â¡': '¡', 'Â¿': '¿'
}

with open(path, 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

for old, new in replacements.items():
    content = content.replace(old, new)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Encoding fix complete.")
