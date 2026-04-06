import json
import os

def find_user(filename, search_name):
    print(f"\n--- Buscando en {filename} ---")
    if not os.path.exists(filename):
        print("Archivo no encontrado.")
        return
    
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            db = json.load(f)
        
        found = False
        for uid, data in db.items():
            if isinstance(data, dict) and 'profile' in data:
                name = data['profile'].get('name', '')
                if search_name.lower() in name.lower():
                    print(f"ID: {uid}")
                    print(f"Nombre: {name}")
                    print(f"XP Actual: {data.get('gamification', {}).get('xp', 0)}")
                    print(f"Puntos Semanales: {data.get('gamification', {}).get('weeklyXP', 0)}")
                    print(f"Registros de resultados: {len(data.get('results', {}))}")
                    print(f"Historial: {len(data.get('history', {}))}")
                    # Verificar si está marcado como sospechoso
                    if data.get('suspicious') or data.get('gamification', {}).get('suspicious'):
                        print("ALERTA: Usuario marcado como SOSPECHOSO")
                    found = True
            elif search_name.lower() in str(uid).lower() or search_name.lower() in str(data).lower():
                print(f"Coincidencia en ID o Datos brutos: {uid}")
                found = True
        
        if not found:
            print("No se encontró al estudiante.")
    except Exception as e:
        print(f"Error al leer {filename}: {e}")

find_user('users_db_local.json', 'jhoneider')
find_user('db_full.json', 'jhoneider')
find_user('sus_users.json', 'jhoneider')
