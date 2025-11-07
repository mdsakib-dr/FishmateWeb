# Fishmate - Capacitor Mobile App Setup Guide

## 📱 Overview
This guide will help you convert your Fishmate web app into native iOS and Android applications using Capacitor.

## 🚀 Prerequisites

### Required Software
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git**

### For iOS Development
- **macOS** (required for iOS builds)
- **Xcode** (latest version from Mac App Store)
- **CocoaPods**: Install with `sudo gem install cocoapods`
- **Apple Developer Account** (for App Store deployment)

### For Android Development
- **Android Studio** - [Download](https://developer.android.com/studio)
- **Java Development Kit (JDK)** 11 or higher
- **Android SDK** (installed via Android Studio)

---

## 📦 Step 1: Install Dependencies

First, ensure your project has the necessary dependencies. Add these to your `package.json`:

```json
{
  "dependencies": {
    "@capacitor/core": "^5.5.1",
    "@capacitor/cli": "^5.5.1",
    "@capacitor/ios": "^5.5.1",
    "@capacitor/android": "^5.5.1",
    "@capacitor/status-bar": "^5.0.6",
    "@capacitor/splash-screen": "^5.0.6"
  }
}
```

Then run:
```bash
npm install
```

---

## 🔧 Step 2: Initialize Capacitor

The `capacitor.config.ts` file is already created. Now initialize the platforms:

```bash
# Initialize Capacitor (if not already done)
npx cap init

# Add iOS platform
npx cap add ios

# Add Android platform
npx cap add android
```

---

## 🏗️ Step 3: Build Your Web App

Build your React app for production:

```bash
npm run build
```

This creates optimized files in the `dist` folder (or `build` folder depending on your setup).

**Note**: Make sure your `capacitor.config.ts` `webDir` matches your build output directory:
- Vite projects: `webDir: 'dist'`
- Create React App: `webDir: 'build'`

---

## 📲 Step 4: Sync to Native Platforms

After building, sync your web code to native platforms:

```bash
# Sync all platforms
npx cap sync

# Or sync specific platform
npx cap sync ios
npx cap sync android
```

This command:
- Copies your web assets to native projects
- Updates native dependencies
- Applies configuration changes

---

## 🍎 Step 5: iOS Development

### Open in Xcode
```bash
npx cap open ios
```

### Configure iOS App
1. In Xcode, select the project in the navigator
2. Under "Signing & Capabilities":
   - Select your development team
   - Update bundle identifier if needed (e.g., `com.yourcompany.fishmate`)
3. Update app icons:
   - Assets → AppIcon → Add your icons
4. Update launch screen if desired

### Test on iOS Simulator
1. Select a simulator device from the dropdown (e.g., iPhone 14)
2. Click the Play button (▶️) or press `Cmd + R`

### Test on Physical iOS Device
1. Connect your iPhone via USB
2. Select it from the device dropdown
3. Click Play button
4. Trust the developer certificate on your device (Settings → General → VPN & Device Management)

---

## 🤖 Step 6: Android Development

### Open in Android Studio
```bash
npx cap open android
```

### Configure Android App
1. Wait for Gradle sync to complete
2. Update package name if needed:
   - Open `android/app/src/main/AndroidManifest.xml`
   - Update `package` attribute
3. Update app icons:
   - `android/app/src/main/res/mipmap-*` folders
4. Update app name:
   - `android/app/src/main/res/values/strings.xml`

### Test on Android Emulator
1. Create an emulator in Android Studio (AVD Manager)
2. Click the Play button (▶️)
3. Select your emulator device

### Test on Physical Android Device
1. Enable Developer Mode on your Android device:
   - Settings → About Phone → Tap "Build Number" 7 times
2. Enable USB Debugging:
   - Settings → Developer Options → USB Debugging
3. Connect device via USB
4. Click Play button and select your device

---

## 🔄 Development Workflow

### During Development
1. Make changes to your React code
2. The web preview updates automatically (if using dev server)
3. To test on mobile:
   ```bash
   npm run build
   npx cap sync
   ```
4. Reload app in Xcode/Android Studio

### Live Reload (Optional)
For faster development, use live reload:

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Find your local IP address:
   - Mac/Linux: `ifconfig | grep inet`
   - Windows: `ipconfig`

3. Update `capacitor.config.ts`:
   ```typescript
   server: {
     url: 'http://YOUR_IP:5173', // Your dev server address
     cleartext: true
   }
   ```

4. Sync and run:
   ```bash
   npx cap sync
   ```

---

## 📱 App Icons & Splash Screens

### Generate Assets
Use tools like:
- [Capacitor Assets](https://github.com/ionic-team/capacitor-assets)
- [Icon and Splash Screen Generator](https://capacitorjs.com/docs/guides/splash-screens-and-icons)

### Required Sizes

**iOS App Icons:**
- Create a 1024x1024px PNG icon
- Place in `ios/App/App/Assets.xcassets/AppIcon.appiconset/`

**Android App Icons:**
- Create icons for various densities (mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi)
- Place in `android/app/src/main/res/mipmap-*/`

**Splash Screens:**
- Already configured in `capacitor.config.ts`
- Customize colors and images as needed

---

## 🚢 Deploying to App Stores

### iOS App Store

1. **Archive your app:**
   - In Xcode: Product → Archive
   - Wait for archive to complete

2. **Distribute:**
   - Window → Organizer → Archives
   - Select your archive → Distribute App
   - Follow the wizard to upload to App Store Connect

3. **App Store Connect:**
   - Create app listing at [appstoreconnect.apple.com](https://appstoreconnect.apple.com)
   - Fill in metadata (description, screenshots, etc.)
   - Submit for review

### Google Play Store

1. **Generate Signed APK/Bundle:**
   - Build → Generate Signed Bundle/APK
   - Create a new keystore (save it securely!)
   - Generate release bundle (AAB format)

2. **Google Play Console:**
   - Create app at [play.google.com/console](https://play.google.com/console)
   - Upload your AAB file
   - Fill in store listing details
   - Submit for review

---

## 🔧 Common Issues & Solutions

### iOS Build Fails
```bash
# Clean and rebuild
cd ios/App
pod deintegrate
pod install
cd ../..
npx cap sync ios
```

### Android Gradle Issues
```bash
# Clean Android build
cd android
./gradlew clean
cd ..
npx cap sync android
```

### White Screen on Launch
- Check browser console in Safari (iOS) or Chrome (Android)
- Ensure `webDir` in `capacitor.config.ts` matches your build folder
- Run `npx cap sync` after every build

### App Crashes on Startup
- Check native logs in Xcode or Android Studio
- Verify all Capacitor plugins are compatible
- Check for CORS issues if using external APIs

---

## 📚 Useful Commands

```bash
# Update Capacitor
npm install @capacitor/cli@latest @capacitor/core@latest
npx cap sync

# List installed platforms
npx cap ls

# Update native platforms
npx cap update ios
npx cap update android

# Remove platform
npx cap remove ios
npx cap remove android

# Copy web assets to native
npx cap copy

# Update native dependencies
npx cap update
```

---

## 🎨 Customization Tips

### Status Bar
Already configured in `capacitor.config.ts`. Customize colors:
```typescript
StatusBar: {
  style: 'dark', // 'light' | 'dark'
  backgroundColor: '#1e5f74', // Android only
}
```

### Splash Screen
Adjust timing and colors in `capacitor.config.ts`:
```typescript
SplashScreen: {
  launchShowDuration: 2000,
  backgroundColor: "#1e5f74",
}
```

---

## 🔐 Environment Variables & API Keys

For production builds with API keys:

1. Create `.env.production`:
   ```
   VITE_SUPABASE_URL=your_url_here
   VITE_SUPABASE_ANON_KEY=your_key_here
   ```

2. Add to `.gitignore`:
   ```
   .env.production
   .env.local
   ```

3. Use in code:
   ```typescript
   const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
   ```

---

## 📖 Additional Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Capacitor iOS Guide](https://capacitorjs.com/docs/ios)
- [Capacitor Android Guide](https://capacitorjs.com/docs/android)
- [Apple Developer](https://developer.apple.com/)
- [Google Play Console](https://play.google.com/console)

---

## ✅ Checklist Before Publishing

- [ ] Test on multiple iOS devices/simulators
- [ ] Test on multiple Android devices/emulators
- [ ] All features working (sensors, navigation, etc.)
- [ ] App icons set for all sizes
- [ ] Splash screen configured
- [ ] Privacy policy URL (required by app stores)
- [ ] App store screenshots prepared
- [ ] App description and metadata ready
- [ ] Compliance with app store guidelines
- [ ] Production API keys configured
- [ ] Analytics/crash reporting set up (optional)

---

## 🆘 Need Help?

- Fishmate support: [Your contact info]
- Capacitor Community: [Capacitor Discord](https://discord.com/invite/UPYqBWC)
- Stack Overflow: Tag questions with `capacitor`

---

**Good luck with your Fishmate mobile app deployment! 🐟📱**
