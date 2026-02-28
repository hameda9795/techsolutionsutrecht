# Image Upload Feature

## ✅ What's Added

### New Files:
| File | Description |
|------|-------------|
| `src/app/api/upload/route.ts` | API endpoint for uploading images to Vercel Blob |
| `src/components/admin/ImageUpload.tsx` | React component for image upload with preview |
| `DATABASE_SETUP.md` | Updated setup guide for Neon + Blob |

### Updated Files:
| File | Changes |
|------|---------|
| `src/app/admin/dashboard/page.tsx` | Added ImageUpload component, removed text input for image path |

---

## 🎯 How It Works

### Admin Create/Edit Project:
1. Click "Nieuw Project" or "Bewerken"
2. Fill form fields
3. **Click upload area** to select image
4. Image uploads automatically to Vercel Blob
5. Preview shows immediately
6. Can replace or remove image
7. Save project

### Upload Features:
- ✅ Click to upload
- ✅ Preview before save
- ✅ Loading spinner during upload
- ✅ Error messages
- ✅ Replace image button
- ✅ Remove image button
- ✅ Shows uploaded URL
- ✅ Max 5MB limit
- ✅ Only images allowed

---

## 🔧 Setup Required

### 1. Create Vercel Blob Store:
```
Vercel Dashboard → Storage → Create Store → Blob
Name: portfolio-images
Connect to your project
```

### 2. Environment Variable:
Auto-added when you connect:
```
BLOB_READ_WRITE_TOKEN=vercel_blob_...
```

### 3. Redeploy:
```
Vercel Dashboard → Redeploy
```

---

## 🚀 Test It

1. Go to `/admin/login`
2. Login with credentials
3. Click "Nieuw Project"
4. Click upload area
5. Select an image
6. Watch it upload!

---

## 💾 Storage Structure

Images are stored in Vercel Blob with path:
```
portfolio/{timestamp}-{random}.{extension}
```

Example:
```
https://{token}.public.blob.vercel-storage.com/portfolio/1709151234567-abc123.webp
```

All images are **public** and served via Vercel's CDN.
