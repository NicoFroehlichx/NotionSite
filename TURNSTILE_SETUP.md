# Cloudflare Turnstile CAPTCHA Setup

## 🔑 Ihre Turnstile-Schlüssel

**Site Key (Public)**: `0x4AAAAABiVvmyGjdHpD_SA`  
**Secret Key (Private)**: `0x4AAAAABiVvpI1dlsF_EEmfhUd4iE6v0g`

## ⚙️ Setup-Anleitung

### 1. Umgebungsvariable einrichten

Erstellen Sie eine `.env.local` Datei im Projektroot:

```bash
# .env.local
VITE_TURNSTILE_SITE_KEY=0x4AAAAABiVvmyGjdHpD_SA
```

### 2. Lokal testen

```bash
# Starten Sie den Entwicklungsserver
npm run dev
```

### 3. Wo das CAPTCHA angezeigt wird

- **Partnership-Seite**: Kontaktformular für Partneranfragen
- **Hackathon-Anmeldung**: Registrierungsformular (falls verwendet)

## 🛡️ Sicherheitshinweise

- ✅ **Site Key**: Kann öffentlich verwendet werden (bereits im Code integriert)
- ⚠️ **Secret Key**: NUR server-seitig verwenden - NIEMALS im Frontend-Code!

## 🎯 Funktionsweise

1. User füllt das Formular aus
2. Turnstile CAPTCHA wird angezeigt (meist unsichtbar)
3. Nach erfolgreicher Verifikation wird das Formular freigeschaltet
4. Beim Absenden wird das CAPTCHA-Token mitgesendet

## 🔧 Anpassungen

Das CAPTCHA ist so konfiguriert:
- **Theme**: Dark (passend zur Website)
- **Größe**: Normal
- **Sprache**: Automatische Erkennung

Bei Problemen können Sie in `src/components/ui/turnstile.tsx` die Einstellungen anpassen.

## 📝 Server-seitige Verifikation (für später)

Wenn Sie ein Backend hinzufügen, verwenden Sie den Secret Key zur Verifikation:

```javascript
// Beispiel für Node.js/Express
const verifyTurnstile = async (token) => {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: '0x4AAAAABiVvpI1dlsF_EEmfhUd4iE6v0g',
      response: token
    })
  });
  
  const result = await response.json();
  return result.success;
};
```

---

Das CAPTCHA-System ist jetzt vollständig eingerichtet! 🎉 