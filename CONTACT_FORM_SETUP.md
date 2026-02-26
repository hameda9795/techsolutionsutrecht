# Contact Form Setup Guide

## 🚀 وضعیت فعلی

فرم تماس الان به API endpoint `/api/contact` ارسال میشه. 

## 📧 روش 1: ارسال به ایمیل (توصیه شده - سریع و مطمئن)

### گزینه A: Resend.com (رایگان - 3000 email/ماه)

1. برو به https://resend.com
2. Sign up کن
3. Domain رو verify کن (techsolutionsutrecht.nl)
4. API key بگیر
5. توی Vercel: 
   - Variable: `RESEND_API_KEY`
   - Value: API key از Resend
6. فایل `src/app/api/contact/route.ts` رو از حالت comment در بیار

### گزینه B: EmailJS (فوری - بدون backend)

1. برو به https://www.emailjs.com
2. Sign up کن
3. Email service وصل کن (Gmail, Outlook, etc)
4. Template بساز
5. Public key بگیر
6. کد فرم رو به EmailJS تغییر بده

### گزینه C: Formspree (ساده‌ترین)

1. برو به https://formspree.io
2. Sign up کن
3. New form بساز
4. Endpoint URL بگیر (مثل: `https://formspree.io/f/YOUR_FORM_ID`)
5. توی ContactForm.tsx، به جای `/api/contact` از URL Formspree استفاده کن

## 💬 روش 2: ارسال به WhatsApp (نیاز به setup پیچیده)

### ⚠️ مهم: WhatsApp Business API

برای ارسال **اتوماتیک پیام از سرور به WhatsApp**، نیاز به **WhatsApp Business API** داری. این یعنی:

#### الزامات:
1. **Meta Business Account** (Facebook)
2. **Business Verification** (احراز هویت شرکت)
3. **WhatsApp Business API** access
4. **Phone Number** که به WhatsApp Business وصل باشه
5. **Twilio یا 360dialog** (هزینه داره)

#### هزینه‌ها:
- Twilio: ~$0.005-0.05 per message
- 360dialog: ~€15-50/month
- Setup time: 1-2 هفته (تا Business Verification کامل بشه)

#### راه‌حل جایگزین (سریع‌تر):

**CallMeBot** (غیررسمی، رایگان اما غیرمطمئن):
```typescript
// توی API route
const message = `New Contact: ${name} - ${email} - ${message}`;
await fetch(`https://api.callmebot.com/whatsapp.php?phone=31625518708&text=${encodeURIComponent(message)}&apikey=YOUR_API_KEY`);
```

⚠️ **مشکل:** این روش unofficial هست و ممکنه کار نکنه یا بلاک بشه.

### ✅ توصیه من:

**برای شروع:** از **ایمیل** استفاده کن (Resend یا Formspree)
**برای آینده:** وقتی کسب‌وکار رشد کرد، WhatsApp Business API رو راه بنداز

## 🔧 تنظیم فوری (Formspree - 5 دقیقه)

1. برو https://formspree.io/register
2. Sign up کن
3. "New Project" → "New Form"
4. Copy the endpoint URL
5. توی `ContactForm.tsx` این خط رو عوض کن:

```typescript
// از این:
const response = await fetch("/api/contact", {...})

// به این:
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: {
    "Accept": "application/json",
  },
  body: JSON.stringify(formData),
});
```

6. Done! ✅

## 📱 روش 3: WhatsApp Click-to-Chat (ساده‌ترین)

به جای فرم پیچیده، یه دکمه "Stuur WhatsApp" بذار که کاربر رو به WhatsApp ببره:

```typescript
<a 
  href={`https://wa.me/31625518708?text=Hoi!%20Ik%20heb%20een%20vraag%20over%20een%20website.`}
  target="_blank"
  className="btn-primary"
>
  Stuur WhatsApp Bericht
</a>
```

**م ventaja:** فوری کار می‌کنه، رایگان
**موventaja:** کاربر باید خودش پیام رو بفرسته

---

## 🎯 پیشنهاد نهایی

| روش | سختی | هزینه | سرعت | قابلیت اطمینان |
|-----|------|-------|------|----------------|
| **Formspree** | ⭐ آسان | رایگان/کم | فوری | ⭐⭐⭐⭐⭐ |
| **Resend** | ⭐⭐ متوسط | رایگان | فوری | ⭐⭐⭐⭐⭐ |
| **WhatsApp API** | ⭐⭐⭐⭐⭐ سخت | €€ | 1-2 هفته | ⭐⭐⭐⭐⭐ |
| **CallMeBot** | ⭐⭐ آسان | رایگان | فوری | ⭐⭐ غیرمطمئن |

### برای الان:
**Formspree** رو تنظیم کن (5 دقیقه کار داره) و ایمیل دریافت کن.

### برای آینده:
وقتی کسب‌وکار رشد کرد، **WhatsApp Business API** رو از طریق **Twilio** راه بنداز.

---

**سوالی داری؟** 🚀
