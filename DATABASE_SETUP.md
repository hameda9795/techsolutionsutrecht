# Neon Database + Vercel Blob Setup Guide

## Part 1: Neon Database (For Projects Data)

### Step 1: Create Neon Database
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click **"Storage"** tab
4. Click **"Marketplace"** → Search **"Neon"** → Click **"Add"**
5. Create database:
   - Name: `portfolio-db`
   - Region: Amsterdam (or closest to you)
6. Click **"Create"**

### Step 2: Connect to Vercel
- Click **"Connect Project"** in Neon dashboard
- Select your project
- Or copy `DATABASE_URL` and add to Vercel Environment Variables

---

## Part 2: Vercel Blob (For Image Uploads)

### Step 1: Create Blob Store
1. In Vercel Dashboard → **"Storage"** tab
2. Click **"Create Store"** (or "Marketplace" → "Blob")
3. Select **"Blob"**
4. Name: `portfolio-images`
5. Click **"Create"**

### Step 2: Connect to Project
- Click **"Connect Project"**
- Select your project from dropdown
- Click **"Connect"**

This automatically adds `BLOB_READ_WRITE_TOKEN` to your environment variables.

---

## Part 3: Environment Variables

Make sure these are set in Vercel:

| Variable | Source |
|----------|--------|
| `DATABASE_URL` | Neon dashboard (auto-added when connected) |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob (auto-added when connected) |

To verify:
1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Check both variables exist

---

## Part 4: Redeploy

After setting up both:

1. Go to Vercel Dashboard → Your Project
2. **"Deployments"** tab
3. Click **"..."** on latest deployment
4. Click **"Redeploy"**

Or push any commit to trigger redeployment.

---

## Database Structure

Auto-created on first run:

```sql
CREATE TABLE portfolio_projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  short_desc TEXT NOT NULL,
  features TEXT[] DEFAULT '{}',
  image VARCHAR(500) DEFAULT '',
  demo_url VARCHAR(500) NOT NULL,
  category_id VARCHAR(50) NOT NULL,
  subcategory_name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_category_subcategory 
ON portfolio_projects(category_id, subcategory_name);
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| POST | `/api/projects` | Create new project |
| GET | `/api/projects/[id]` | Get single project |
| PUT | `/api/projects/[id]` | Update project |
| DELETE | `/api/projects/[id]` | Delete project |
| DELETE | `/api/projects?action=reset` | Reset to defaults |
| POST | `/api/upload` | Upload image to Blob |

---

## Image Upload Features

- ✅ Drag & drop support
- ✅ Preview before upload
- ✅ Max 5MB file size
- ✅ Only images allowed (JPG, PNG, WEBP)
- ✅ Auto-generate unique filename
- ✅ Progress indicator
- ✅ Replace/Remove image

---

## Troubleshooting

### "BLOB_READ_WRITE_TOKEN not configured"
- Check Vercel Environment Variables
- Make sure Blob store is connected to project
- Redeploy after connecting

### "Upload failed"
- Check file size (max 5MB)
- Check file type (only images)
- Check browser console for errors

### "DATABASE_URL not set"
- Check Neon is connected
- Verify in Vercel Environment Variables

---

## Admin Login
- Username: `hameda9795`
- Password: `10206743`
