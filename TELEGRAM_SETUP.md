# Telegram Contact Form Setup Guide

## 🚀 راه‌اندازی ارسال پیام به Telegram

### مرحله 1: ساخت ربات Telegram (5 دقیقه)

1. **Telegram** رو باز کن
2. به **@BotFather** پیام بده: https://t.me/botfather
3. دستور `/newbot` رو بفرست
4. یه اسم برای ربات انتخاب کن (مثلاً: `TechSolutions Contact`)
5. یه username انتخاب کن (باید bot ختم بشه، مثلاً: `techsolutions_contact_bot`)
6. **Bot Token** رو کپی کن (مثل: `123456789:ABCdefGHIjklMNOpqrSTUvwxyz`)

### مرحله 2: گرفتن Chat ID (2 دقیقه)

**گزینه A: پیام به خودت (Private Chat)**

1. به رباتت پیام بده (روی لینک ربات کلیک کن و Start رو بزن)
2. این URL رو توی مرورگر باز کن:
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
   ```
3. به دنبال `"chat":{"id":12345678` بگرد - این عدد Chat ID هست

**گزینه B: ارسال به کانال (Channel)**

1. یه کانال خصوصی بساز (مثلاً: `TechSolutions Leads`)
2. ربات رو به کانال اضافه کن (Admin بده)
3. یه پیام توی کانال بفرست و mention کن ربات رو
4. همون URL بالا رو باز کن
5. Chat ID رو پیدا کن (برای کانال‌ها معمولاً با `-100` شروع میشه)

### مرحله 3: تنظیم Vercel (2 دقیقه)

1. برو به https://vercel.com/dashboard
2. پروژه `techsolutionsutrecht` رو باز کن
3. برو به **Settings** → **Environment Variables**
4. دو تا Variable اضافه کن:

   | Name | Value |
   |------|-------|
   | `TELEGRAM_BOT_TOKEN` | توکن از BotFather |
   | `TELEGRAM_CHAT_ID` | Chat ID از مرحله 2 |

5. **Save** رو بزن
6. Redeploy کن (یا صبر کن اتوماتیک ریدپلوی بشه)

### ✅ تست

1. برو به Contact page سایت
2. فرم رو پر کن
3. Submit کن
4. برو Telegram - باید پیام اومده باشه!

---

## 📱 نمونه پیام Telegram

پیام‌ها این شکلی میان:

```
🆕 Nieuw Contactformulier

👤 Naam: Jan Jansen
📧 Email: jan@example.com
📱 Telefoon: 06-12345678
📝 Onderwerp: Website laten maken

💬 Bericht:
Hoi, ik wil een website voor mijn bedrijf.
Kunnen we bellen?

⏰ Tijd: 26-2-2025, 14:30:15
🌐 Bron: techsolutionsutrecht.nl
```

---

## ⚠️ نکات امنیتی

1. **Bot Token** رو هرگز public نکن (توی GitHub نذار)
2. **Chat ID** رو هم مخفی نگه دار
3. برای Production، اینا رو توی Vercel Environment Variables بذار (نه توی کد)
4. ربات رو Private نگه دار (allow groups رو غیرفعال کن از BotFather)

---

## 🔧 عیب‌یابی

### مشکل: پیام نمیاد
1. **Check:** آیا `TELEGRAM_BOT_TOKEN` درست تنظیم شده؟
2. **Check:** آیا `TELEGRAM_CHAT_ID` درسته؟ (برای کانال با `-100` شروع میشه)
3. **Check:** آیا ربات توی کانال/چت هست؟
4. **Check:** Vercel logs رو ببین (Deployment → Functions)

### مشکل: Forbidden یا Chat not found
- Chat ID رو چک کن
- برای کانال، ربات باید Admin باشه

---

## ✅ مزایا Telegram vs WhatsApp/Email

| ویژگی | Telegram | WhatsApp API | Email |
|-------|----------|--------------|-------|
| **سختی setup** | ⭐ آسان | ⭐⭐⭐⭐⭐ سخت | ⭐⭐ متوسط |
| **هزینه** | رایگان | €€ | رایگان |
| **سرعت** | فوری | فوری | تاخیر داره |
| **نیاز به verification** | ❌ نه | ✅ بله | ❌ نه |
| **Push notification** | ✅ عالی | ✅ عالی | ⚠️ متوسط |
| **ذخیره history** | ✅ نامحدود | ✅ نامحدود | ⚠️ محدود |

**Telegram بهترین گزینه برای شماست:**
- ✅ سریع
- ✅ رایگان
- ✅ ساده
- ✅ Notification فوری

---

## 🚀 Done!

وقتی setup کنی، هر فرم ارسالی فوری توی Telegram میاد! 🎉
