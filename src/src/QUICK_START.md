# Fishmate Mobile App - Quick Start Guide

## 🚀 Get Your App Running in 15 Minutes

This quick start guide will get Fishmate running as a native mobile app as fast as possible.

---

## ⚡ Prerequisites Check

Make sure you have:
- ✅ Node.js installed (v16+): Run `node --version`
- ✅ npm or yarn: Run `npm --version`
- ✅ For iOS: macOS with Xcode installed
- ✅ For Android: Android Studio installed

---

## 📦 Step 1: Install Dependencies (2 minutes)

```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli
npm install @capacitor/ios @capacitor/android
npm install @capacitor/status-bar @capacitor/splash-screen

# Install as dev dependency
npm install -D @capacitor/cli
```

---

## 🔧 Step 2: Initialize Capacitor (1 minute)

```bash
# Initialize Capacitor
npx cap init

# When prompted:
# App name: Fishmate
# App package ID: com.fishmate.app (or your own)
# Web asset directory: dist (for Vite) or build (for CRA)
```

**Note:** The `capacitor.config.ts` file is already created in your project!

---

## 📱 Step 3: Add Platforms (2 minutes)

```bash
# Add iOS (Mac only)
npx cap add ios

# Add Android
npx cap add android
```

This creates `ios/` and `android/` folders with native projects.

---

## 🏗️ Step 4: Build Your Web App (1 minute)

```bash
# Build the React app
npm run build
```

This creates the production build in `dist/` folder.

---

## 🔄 Step 5: Sync to Native (1 minute)

```bash
# Sync web assets to native projects
npx cap sync
```

This copies your built web app to the native projects.

---

## 🍎 Step 6A: Run on iOS (5 minutes)

```bash
# Open in Xcode
npx cap open ios
```

**In Xcode:**
1. Wait for indexing to complete
2. Select a simulator from the device dropdown (e.g., iPhone 14)
3. Click the Play button ▶️
4. Wait for the app to build and launch

**First Time Setup:**
- Go to Signing & Capabilities
- Select your development team
- Xcode will handle the rest

---

## 🤖 Step 6B: Run on Android (5 minutes)

```bash
# Open in Android Studio
npx cap open android
```

**In Android Studio:**
1. Wait for Gradle sync to complete (first time takes longer)
2. Create an emulator if needed:
   - Tools → Device Manager → Create Device
   - Choose a device (e.g., Pixel 5)
   - Download system image if prompted
3. Click the Play button ▶️
4. Wait for the app to build and launch

---

## 🎉 Success!

Your Fishmate app should now be running on the simulator/emulator!

---

## 🔁 Development Workflow

When you make changes:

```bash
# 1. Build your React app
npm run build

# 2. Sync to native projects
npx cap sync

# 3. Reload in Xcode/Android Studio (or rerun)
```

**Pro Tip:** Use this one-liner:
```bash
npm run build && npx cap sync && npx cap open ios
```

---

## 🐛 Common Issues & Quick Fixes

### iOS: "No Development Team Selected"
**Fix:** In Xcode → Signing & Capabilities → select your team

### Android: Gradle Build Failed
**Fix:** 
```bash
cd android
./gradlew clean
cd ..
npx cap sync android
```

### White Screen on Launch
**Fix:** 
1. Check `capacitor.config.ts` - ensure `webDir` is correct
2. Rebuild: `npm run build && npx cap sync`
3. Clear app data and reinstall

### Module Not Found Errors
**Fix:**
```bash
npm install
npm run build
npx cap sync
```

---

## 📱 Test on Real Device

### iOS Device
1. Connect iPhone via USB
2. In Xcode, select your device from dropdown
3. Click Play ▶️
4. On device: Settings → General → VPN & Device Management → Trust developer

### Android Device
1. Enable Developer Mode on device:
   - Settings → About Phone → Tap "Build Number" 7 times
2. Enable USB Debugging:
   - Settings → Developer Options → USB Debugging
3. Connect via USB
4. In Android Studio, select your device
5. Click Play ▶️

---

## 🎨 Next Steps

Once running, you can:

1. **Customize App Icon & Splash Screen**
   - See `/assets/ASSETS_GUIDE.md`
   - Use `npx @capacitor/assets generate`

2. **Add Native Features**
   - Camera: `npm install @capacitor/camera`
   - Geolocation: `npm install @capacitor/geolocation`
   - Storage: `npm install @capacitor/preferences`

3. **Configure for Production**
   - Update app icons
   - Configure signing certificates
   - Test on multiple devices
   - Optimize performance

4. **Deploy to App Stores**
   - See `/CAPACITOR_SETUP.md` for full deployment guide
   - Apple: [App Store Connect](https://appstoreconnect.apple.com)
   - Google: [Play Console](https://play.google.com/console)

---

## 📚 Helpful Commands Reference

```bash
# Sync after building
npm run build && npx cap sync

# Open native IDEs
npx cap open ios
npx cap open android

# Update Capacitor
npm install @capacitor/cli@latest @capacitor/core@latest
npx cap sync

# List installed platforms
npx cap ls

# Clean and resync
npx cap copy
```

---

## 💡 Pro Tips

1. **Use Scripts:** Add to `package.json`:
   ```json
   "scripts": {
     "cap:sync": "npm run build && npx cap sync",
     "cap:ios": "npm run cap:sync && npx cap open ios",
     "cap:android": "npm run cap:sync && npx cap open android"
   }
   ```

2. **Live Reload:** For faster development, use your local dev server:
   - In `capacitor.config.ts`, add:
     ```typescript
     server: {
       url: 'http://YOUR_IP:5173',
       cleartext: true
     }
     ```
   - Run `npx cap sync` and run app

3. **Debug Console:**
   - iOS: Safari → Develop → Simulator → Your App
   - Android: Chrome → `chrome://inspect`

---

## 🆘 Need More Help?

- **Full Setup Guide:** `/CAPACITOR_SETUP.md`
- **Assets Guide:** `/assets/ASSETS_GUIDE.md`
- **Capacitor Docs:** https://capacitorjs.com/docs
- **Capacitor Discord:** https://discord.com/invite/UPYqBWC

---

**You're now ready to build and deploy Fishmate! 🐟📱**

Happy coding! 🚀
