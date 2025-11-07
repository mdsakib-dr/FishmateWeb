# Fishmate App Assets Guide

## 📱 Required Assets for Mobile Apps

This guide covers all the image assets you'll need for deploying Fishmate to iOS and Android app stores.

---

## 🍎 iOS Assets

### App Icon (Required)

Create a **1024x1024px** PNG image for your app icon. This will be automatically resized for all needed sizes.

**Design Guidelines:**
- No transparency (must have solid background)
- No rounded corners (iOS adds these automatically)
- Use the Fishmate logo with aquaculture blue (#1e5f74) background
- High quality PNG format

**Location:** `ios/App/App/Assets.xcassets/AppIcon.appiconset/`

**Required Sizes (generated automatically):**
- 20x20 (2x, 3x) - Notification
- 29x29 (2x, 3x) - Settings
- 40x40 (2x, 3x) - Spotlight
- 60x60 (2x, 3x) - App
- 76x76 (1x, 2x) - iPad
- 83.5x83.5 (2x) - iPad Pro
- 1024x1024 - App Store

### Launch Screen (Splash Screen)

**Method 1: Storyboard (Recommended)**
- iOS uses a storyboard for launch screens
- Located at: `ios/App/App/Base.lproj/LaunchScreen.storyboard`
- Configure background color in `capacitor.config.ts`

**Method 2: Static Images**
Create the following sizes:
- 640x960 (iPhone 4)
- 640x1136 (iPhone 5/SE)
- 750x1334 (iPhone 8)
- 1125x2436 (iPhone X/11 Pro)
- 1242x2688 (iPhone XS Max/11 Pro Max)
- 828x1792 (iPhone 11)

**Design:**
- Simple Fishmate logo centered on #1e5f74 background
- Minimal text
- No loading indicators (iOS handles this)

---

## 🤖 Android Assets

### App Icon (Launcher Icons)

Create icons for multiple densities:

**Foreground Image:** 1024x1024px PNG (with transparency)
**Background:** Solid color (#1e5f74) or 1024x1024px image

**Required Densities:**
- **mdpi:** 48x48px (`mipmap-mdpi/ic_launcher.png`)
- **hdpi:** 72x72px (`mipmap-hdpi/ic_launcher.png`)
- **xhdpi:** 96x96px (`mipmap-xhdpi/ic_launcher.png`)
- **xxhdpi:** 144x144px (`mipmap-xxhdpi/ic_launcher.png`)
- **xxxhdpi:** 192x192px (`mipmap-xxxhdpi/ic_launcher.png`)

**Location:** `android/app/src/main/res/mipmap-*/`

**Adaptive Icons (Android 8.0+):**
Create both:
- `ic_launcher_foreground.xml` or PNG
- `ic_launcher_background.xml` or PNG
- `ic_launcher.xml` (combines both)

### Splash Screen

Android uses a drawable for splash screen.

**Location:** `android/app/src/main/res/drawable/splash.png`

**Recommended Sizes:**
- **mdpi:** 320x480px
- **hdpi:** 480x800px
- **xhdpi:** 720x1280px
- **xxhdpi:** 1080x1920px
- **xxxhdpi:** 1440x2560px

**Design:**
- Fishmate logo centered
- Background color: #1e5f74
- Safe area: Keep logo within 70% of center

**Alternative:** Use a vector drawable (XML) for crisp rendering at any size

---

## 📸 App Store Screenshots

### iOS App Store

**Required Sizes:**
1. **6.5" Display (iPhone 14 Pro Max, 13 Pro Max, 12 Pro Max, 11 Pro Max):**
   - 1284x2778px (portrait)
   - 2778x1284px (landscape) - optional

2. **5.5" Display (iPhone 8 Plus, 7 Plus, 6s Plus):**
   - 1242x2208px (portrait)
   - 2208x1242px (landscape) - optional

**Quantity:** 3-10 screenshots per size

**Best Practices:**
- Show key features: Dashboard, Live Readings, AI Recommendations
- Use device frames (optional)
- Add captions explaining features
- Show real data/use cases
- Highlight unique selling points

### Google Play Store

**Required Sizes:**
1. **Phone:**
   - 1080x1920px to 1080x2340px (16:9 or taller)
   - Minimum: 320px on shortest side
   - Maximum: 3840px on longest side

2. **7" Tablet (optional):**
   - 1200x1920px

3. **10" Tablet (optional):**
   - 1600x2560px

**Quantity:** 2-8 screenshots per device type

**Best Practices:**
- Similar to iOS guidelines
- Show app in use
- Clear, concise captions
- Localized for different markets

---

## 🎨 Feature Graphic (Google Play Only)

**Required Size:** 1024x500px

**Design:**
- Banner-style image
- App logo + tagline
- No text smaller than 12pt
- High contrast
- PNG or JPEG

**Content Ideas:**
- "AI-Powered Aquaculture Monitoring"
- Dashboard preview
- Key water quality parameters visualization

---

## 🎬 App Preview Videos (Optional)

### iOS App Store
- **Length:** 15-30 seconds
- **Format:** .mov, .m4v, or .mp4
- **Resolution:** Same as screenshot requirements
- **Maximum file size:** 500 MB

### Google Play Store
- **Length:** 30 seconds to 2 minutes
- **Format:** .mp4 or .avi
- **Aspect ratio:** 16:9 or 9:16
- **Maximum file size:** 100 MB

**Content Ideas:**
- Quick app tour
- Showing data updates in real-time
- Demonstrating AI recommendations
- Success story/testimonial

---

## 🛠️ Tools for Asset Generation

### Automated Tools

1. **Capacitor Assets Generator**
   ```bash
   npm install -g @capacitor/assets
   
   # Place your source images in /resources:
   # - icon.png (1024x1024)
   # - splash.png (2732x2732)
   
   npx capacitor-assets generate
   ```

2. **Icon Generator Services:**
   - [MakeAppIcon](https://makeappicon.com/)
   - [AppIcon.co](https://appicon.co/)
   - [Icon Kitchen](https://icon.kitchen/)

3. **Screenshot Tools:**
   - [Figma](https://www.figma.com/) - Design screenshots
   - [Previewed](https://previewed.app/) - Device mockups
   - [Shotsnapp](https://shotsnapp.com/) - Device frames
   - [Screenshot Creator](https://www.applaunchpad.com/)

### Manual Design Tools

- **Adobe Photoshop** - Professional editing
- **Sketch** (Mac) - UI design
- **Figma** (Web) - Collaborative design
- **Affinity Designer** - Cost-effective alternative
- **Canva** - Quick graphics

---

## 📋 Asset Checklist

### iOS

- [ ] App Icon (1024x1024)
- [ ] Launch Screen/Splash Screen
- [ ] App Store Screenshots (6.5" display)
- [ ] App Store Screenshots (5.5" display)
- [ ] App Preview Video (optional)
- [ ] App Store Icon (1024x1024)

### Android

- [ ] Launcher Icons (all densities)
- [ ] Adaptive Icon (foreground + background)
- [ ] Splash Screen (all densities or vector)
- [ ] Feature Graphic (1024x500)
- [ ] Play Store Screenshots (phone)
- [ ] Play Store Screenshots (tablet - optional)
- [ ] Promo Video (optional)

### Both Platforms

- [ ] App logo variations
- [ ] Marketing materials
- [ ] Privacy Policy page
- [ ] Support website/page

---

## 🎨 Fishmate Brand Colors

Use these colors consistently across all assets:

```css
Primary Blue: #1e5f74
Secondary Blue: #5b9aa9
Accent Teal: #3a8fa3
Dark Gray: #2c3e50
Light Gray: #6b7c8c
Border Gray: #d1dce3
Background: #f5f8fa
White: #ffffff
```

### Status Colors
```css
Critical/Red: #ef4444
Warning/Yellow: #f59e0b
Healthy/Green: #10b981
```

---

## 📐 Fishmate Logo Guidelines

**Primary Logo:** Droplet icon with "Fishmate" text

**Icon Only:** Water droplet with gradient (for small sizes)

**Minimum Size:**
- With text: 120px width
- Icon only: 24px

**Clear Space:** Minimum 16px around logo

**Colors:**
- Primary: Gradient from #1e5f74 to #3a8fa3
- On white background: Full color
- On dark background: White version
- Monochrome: #1e5f74

---

## 🔧 Implementation in Code

The splash screen is configured in `capacitor.config.ts`:

```typescript
SplashScreen: {
  launchShowDuration: 2000,
  backgroundColor: "#1e5f74",
  showSpinner: false,
  splashFullScreen: true,
  splashImmersive: true,
}
```

Status bar styling:
```typescript
StatusBar: {
  style: 'dark',
  backgroundColor: '#1e5f74',
}
```

---

## 📝 Notes

- **Asset Quality:** Always use high-resolution source files and scale down
- **Testing:** Test icons on both light and dark device themes
- **Localization:** Consider creating localized screenshots for key markets
- **Updates:** Update screenshots when major features are added
- **Consistency:** Maintain brand consistency across all assets
- **File Naming:** Use clear, descriptive names for organization

---

## ✅ Pre-Submission Checklist

Before submitting to app stores:

- [ ] All required assets created and properly sized
- [ ] Icons tested on actual devices (light/dark mode)
- [ ] Screenshots show latest app version
- [ ] No placeholder or copyrighted content
- [ ] Text is readable at intended sizes
- [ ] Colors match brand guidelines
- [ ] All images optimized for file size
- [ ] Splash screen tested on multiple devices
- [ ] Assets reviewed for quality and professionalism

---

**Need custom assets created?** Consider hiring a designer on:
- Fiverr
- Upwork
- 99designs
- Dribbble

Good luck with your Fishmate app launch! 🐟📱
