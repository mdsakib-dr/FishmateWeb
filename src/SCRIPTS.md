# 🔧 Fishmate Development Scripts

Quick reference for common development tasks and scripts.

---

## 📦 Package.json Scripts

Add these scripts to your `package.json` for faster development:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    
    "cap:init": "npx cap init",
    "cap:add:ios": "npx cap add ios",
    "cap:add:android": "npx cap add android",
    
    "cap:sync": "npm run build && npx cap sync",
    "cap:sync:ios": "npm run build && npx cap sync ios",
    "cap:sync:android": "npm run build && npx cap sync android",
    
    "cap:open:ios": "npx cap open ios",
    "cap:open:android": "npx cap open android",
    
    "cap:run:ios": "npm run cap:sync:ios && npx cap open ios",
    "cap:run:android": "npm run cap:sync:android && npx cap open android",
    
    "cap:copy": "npx cap copy",
    "cap:update": "npx cap update",
    
    "assets:generate": "npx capacitor-assets generate",
    
    "ios": "npm run cap:run:ios",
    "android": "npm run cap:run:android"
  }
}
```

---

## 🚀 Common Commands

### Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Capacitor Setup

```bash
# First time setup
npm run cap:init
npm run cap:add:ios
npm run cap:add:android

# Or use individual commands
npx cap init
npx cap add ios
npx cap add android
```

### Build & Sync

```bash
# Sync to all platforms
npm run cap:sync

# Sync to specific platform
npm run cap:sync:ios
npm run cap:sync:android

# Just copy files (no build)
npm run cap:copy
```

### Open Native IDEs

```bash
# Open Xcode
npm run cap:open:ios
# Or shorthand
npm run ios

# Open Android Studio  
npm run cap:open:android
# Or shorthand
npm run android
```

### Full Development Cycle

```bash
# iOS development
npm run cap:run:ios

# Android development
npm run cap:run:android
```

This builds, syncs, and opens the IDE in one command!

---

## 🎨 Asset Generation

```bash
# Install asset generator
npm install -g @capacitor/assets

# Generate all icons and splash screens
npm run assets:generate

# Or manually
npx capacitor-assets generate --iconBackgroundColor '#1e5f74'
```

---

## 🔄 Update & Maintenance

```bash
# Update Capacitor
npm install @capacitor/cli@latest @capacitor/core@latest
npm install @capacitor/ios@latest @capacitor/android@latest
npm install @capacitor/status-bar@latest @capacitor/splash-screen@latest

# Then sync
npm run cap:update
npm run cap:sync

# Update all npm packages
npm update

# Check for outdated packages
npm outdated
```

---

## 🧹 Cleaning & Troubleshooting

### Clean Node Modules

```bash
rm -rf node_modules package-lock.json
npm install
```

### Clean Capacitor Builds

```bash
# iOS
cd ios/App
pod deintegrate
pod install
cd ../..
npx cap sync ios

# Android
cd android
./gradlew clean
cd ..
npx cap sync android
```

### Full Clean & Rebuild

```bash
# Clean everything
rm -rf node_modules package-lock.json dist
rm -rf ios/App/Pods ios/App/Podfile.lock
rm -rf android/.gradle android/build android/app/build

# Reinstall
npm install
npm run build

# Rebuild Capacitor
npx cap sync
```

---

## 📱 Platform-Specific Commands

### iOS

```bash
# Update pods
cd ios/App && pod install && cd ../..

# Clean derived data
rm -rf ~/Library/Developer/Xcode/DerivedData

# List available simulators
xcrun simctl list devices

# Boot a simulator
xcrun simctl boot "iPhone 14"

# Install on simulator
xcrun simctl install booted path/to/App.app
```

### Android

```bash
# List available emulators
emulator -list-avds

# Start an emulator
emulator -avd Pixel_5_API_31

# List connected devices
adb devices

# Install APK
adb install path/to/app-debug.apk

# Clear app data
adb shell pm clear com.fishmate.app

# View logs
adb logcat | grep Fishmate
```

---

## 🔍 Debugging Commands

### View Console Logs

```bash
# iOS (Safari)
# Safari → Develop → Simulator → localhost

# Android (Chrome)
# Chrome → chrome://inspect
# Or use adb
adb logcat | grep chromium
```

### Network Inspection

```bash
# iOS - Use Safari Web Inspector
# Android - Use Chrome DevTools

# Or use React DevTools
npm install -g react-devtools
react-devtools
```

---

## 📊 Build Information

```bash
# Check Capacitor info
npx cap ls

# Doctor command (checks environment)
npx cap doctor

# Get app version
npx cap --version

# Platform info
npx cap platform
```

---

## 🚢 Production Build Scripts

### iOS Production

```bash
# Build for production
npm run build

# Sync to iOS
npx cap sync ios

# Open Xcode
npx cap open ios

# Then in Xcode:
# Product → Archive
# Window → Organizer → Distribute App
```

### Android Production

```bash
# Build for production
npm run build

# Sync to Android
npx cap sync android

# Open Android Studio
npx cap open android

# Then in Android Studio:
# Build → Generate Signed Bundle/APK
# Select "Android App Bundle"
# Sign with your keystore
```

---

## 🎯 One-Liner Quick Commands

```bash
# Quick iOS run
npm run build && npx cap sync ios && npx cap open ios

# Quick Android run
npm run build && npx cap sync android && npx cap open android

# Quick asset generation
npx capacitor-assets generate --iconBackgroundColor '#1e5f74' --splashBackgroundColor '#1e5f74'

# Update everything
npm update && npx cap update && npm run cap:sync

# Full clean rebuild
rm -rf node_modules dist && npm install && npm run build && npx cap sync
```

---

## 🔐 Environment Management

### Development

```bash
# Copy example env
cp .env.example .env.development

# Run with development env
npm run dev
```

### Production

```bash
# Create production env
cp .env.example .env.production

# Edit with production values
nano .env.production

# Build with production env
npm run build
```

---

## 📈 Performance Testing

```bash
# Analyze bundle size
npm run build
npx vite-bundle-visualizer

# Check bundle
npm run build -- --mode analyze

# Lighthouse CI (for web version)
npm install -g @lhci/cli
lhci autorun
```

---

## 🧪 Testing Scripts

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run E2E tests (if configured)
npm run test:e2e
```

---

## 🔄 Git Workflow Scripts

```bash
# Quick commit and sync
git add .
git commit -m "Update: description"
git push
npm run build && npm run cap:sync

# Create new feature branch
git checkout -b feature/new-feature
# ... make changes ...
git push -u origin feature/new-feature
```

---

## 📋 Quick Setup Script

Create a `setup.sh` file:

```bash
#!/bin/bash

echo "🐟 Setting up Fishmate..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Install Capacitor
echo "⚡ Installing Capacitor..."
npm install @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android
npm install @capacitor/status-bar @capacitor/splash-screen

# Build
echo "🏗️ Building app..."
npm run build

# Add platforms
echo "📱 Adding platforms..."
npx cap add ios
npx cap add android

# Sync
echo "🔄 Syncing to platforms..."
npx cap sync

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  iOS: npm run ios"
echo "  Android: npm run android"
```

Make it executable:
```bash
chmod +x setup.sh
./setup.sh
```

---

## 🎨 Asset Helper Script

Create `generate-assets.sh`:

```bash
#!/bin/bash

echo "🎨 Generating Fishmate assets..."

# Check if icon and splash exist
if [ ! -f "resources/icon.png" ]; then
    echo "❌ resources/icon.png not found!"
    exit 1
fi

if [ ! -f "resources/splash.png" ]; then
    echo "❌ resources/splash.png not found!"
    exit 1
fi

# Generate assets
echo "📱 Generating app icons and splash screens..."
npx capacitor-assets generate \
  --iconBackgroundColor '#1e5f74' \
  --splashBackgroundColor '#1e5f74'

echo "✅ Assets generated successfully!"
echo ""
echo "Next step: npm run cap:sync"
```

---

## 🚀 Deploy Script

Create `deploy.sh`:

```bash
#!/bin/bash

echo "🚀 Deploying Fishmate..."

# Run tests (if available)
# npm test

# Build
echo "🏗️ Building production app..."
npm run build

# Sync to platforms
echo "🔄 Syncing to platforms..."
npx cap sync

echo "✅ Ready for deployment!"
echo ""
echo "iOS: Open Xcode and archive"
echo "Android: Open Android Studio and generate signed bundle"
```

---

## 💡 Pro Tips

### Create Aliases

Add to your `~/.zshrc` or `~/.bashrc`:

```bash
alias fish-dev="cd ~/fishmate && npm run dev"
alias fish-ios="cd ~/fishmate && npm run ios"
alias fish-android="cd ~/fishmate && npm run android"
alias fish-sync="cd ~/fishmate && npm run cap:sync"
alias fish-build="cd ~/fishmate && npm run build"
```

### Watch Mode for Development

```bash
# Terminal 1: Watch and rebuild
npm run dev

# Terminal 2: Sync on file changes (requires nodemon)
npm install -g nodemon
nodemon --watch dist --exec "npx cap copy"
```

---

## 🆘 Emergency Commands

```bash
# Nothing works? Nuclear option:
rm -rf node_modules package-lock.json ios android dist
npm install
npm run build
npx cap add ios
npx cap add android
npx cap sync

# iOS simulator acting weird?
xcrun simctl erase all
xcrun simctl shutdown all

# Android emulator issues?
adb kill-server
adb start-server
```

---

**Happy coding! 🐟💻**

For more help, see:
- [QUICK_START.md](QUICK_START.md)
- [CAPACITOR_SETUP.md](CAPACITOR_SETUP.md)
- [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
