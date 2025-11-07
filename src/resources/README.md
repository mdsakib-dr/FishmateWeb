# Fishmate App Resources

## 📁 Folder Structure

This folder contains source assets for generating app icons and splash screens.

```
resources/
├── icon.png          (1024x1024 - App icon source)
├── splash.png        (2732x2732 - Splash screen source)
├── icon-foreground.png (Optional - Android adaptive icon)
└── icon-background.png (Optional - Android adaptive icon)
```

---

## 🎨 Asset Requirements

### icon.png
- **Size:** 1024x1024px
- **Format:** PNG with transparency OR solid background
- **Content:** Fishmate logo centered
- **Safe zone:** Keep important content within 80% center
- **Usage:** Generates all app icon sizes for iOS and Android

**Design Tips:**
- Use Fishmate droplet logo
- Gradient background: #1e5f74 to #3a8fa3
- Ensure logo is visible at small sizes (down to 20x20px)
- No text (icons should be recognizable without text)

### splash.png
- **Size:** 2732x2732px (iPad Pro 12.9" size)
- **Format:** PNG
- **Content:** Fishmate logo centered with background
- **Safe zone:** Keep logo within 50% center (1366x1366px)
- **Background:** Solid #1e5f74 or gradient
- **Usage:** Generates all splash screen sizes

**Design Tips:**
- Simple, clean design
- Fishmate logo + optional tagline
- High contrast for visibility
- Fast loading (optimize file size)

### icon-foreground.png (Android Adaptive Icons - Optional)
- **Size:** 1024x1024px
- **Format:** PNG with transparency
- **Content:** Logo only, no background
- **Safe zone:** Keep within 66% center (678x678px)
- **Usage:** Foreground layer of Android adaptive icon

### icon-background.png (Android Adaptive Icons - Optional)
- **Size:** 1024x1024px
- **Format:** PNG or solid color
- **Content:** Background pattern or solid color
- **Usage:** Background layer of Android adaptive icon

---

## 🚀 Generating Icons

### Method 1: Capacitor Assets CLI (Recommended)

```bash
# Install the generator
npm install -g @capacitor/assets

# Place icon.png and splash.png in /resources folder
# Then run:
npx capacitor-assets generate
```

This automatically generates all required sizes for iOS and Android.

### Method 2: Online Tools

1. **App Icon Generator:**
   - Upload `icon.png` to [MakeAppIcon.com](https://makeappicon.com/)
   - Download generated icons
   - Manually place in iOS and Android folders

2. **Splash Screen Generator:**
   - Upload `splash.png` to [AppLaunchpad](https://www.applaunchpad.com/)
   - Download generated splash screens
   - Manually place in native folders

### Method 3: Manual Creation

See `/assets/ASSETS_GUIDE.md` for all required sizes and locations.

---

## 📋 Icon Sizes Reference

### iOS App Icon Sizes
- 20pt: 40x40, 60x60
- 29pt: 58x58, 87x87
- 40pt: 80x80, 120x120
- 60pt: 120x120, 180x180
- 76pt: 76x76, 152x152
- 83.5pt: 167x167
- 1024pt: 1024x1024 (App Store)

### Android Icon Sizes
- mdpi: 48x48
- hdpi: 72x72
- xhdpi: 96x96
- xxhdpi: 144x144
- xxxhdpi: 192x192

---

## ✅ Checklist

Before generating:
- [ ] icon.png is 1024x1024px
- [ ] splash.png is 2732x2732px
- [ ] Logo is centered in both images
- [ ] Safe zones are respected
- [ ] Images are optimized (reasonable file size)
- [ ] Colors match Fishmate brand (#1e5f74)
- [ ] Tested visibility at small sizes

After generating:
- [ ] Icons appear correctly in iOS simulator
- [ ] Icons appear correctly in Android emulator
- [ ] Splash screen displays properly
- [ ] All sizes generated successfully
- [ ] No distortion or pixelation
- [ ] Tested on both light and dark device themes

---

## 🎨 Fishmate Brand Guidelines

**Primary Color:** #1e5f74 (Deep Blue)
**Secondary Color:** #5b9aa9 (Light Blue)
**Accent Color:** #3a8fa3 (Teal)

**Logo:**
- Droplet icon with water waves
- Gradient from primary to accent
- "Fishmate" text (for marketing only, not in app icon)

---

## 📐 Design Templates

You can use these tools to create your assets:

- **Figma:** [Template Link] (if you create one)
- **Sketch:** Export at @1x, @2x, @3x
- **Photoshop:** Use artboards for different sizes
- **Canva:** Use custom dimensions

---

## 🔄 Updating Icons

When you update your app icon or splash screen:

1. Replace `icon.png` and/or `splash.png` in this folder
2. Re-run the generator: `npx capacitor-assets generate`
3. Sync to native projects: `npx cap sync`
4. Clean build in Xcode/Android Studio
5. Test on devices to ensure changes appear

---

## 🆘 Troubleshooting

**Icons not updating on device:**
- Delete app from device
- Clean build in Xcode/Android Studio
- Rebuild and reinstall

**Icons look pixelated:**
- Ensure source images are high quality
- Check that icon.png is exactly 1024x1024px
- Use vector graphics in your source design

**Splash screen not displaying:**
- Check configuration in `capacitor.config.ts`
- Verify splash.png exists and is correct size
- Ensure `launchShowDuration` is set correctly

---

## 📚 Additional Resources

- [Capacitor Assets Documentation](https://github.com/ionic-team/capacitor-assets)
- [iOS Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons)
- [Android Adaptive Icons](https://developer.android.com/develop/ui/views/launch/icon_design_adaptive)
- [Material Design Icons](https://m3.material.io/styles/icons)

---

## 💡 Pro Tips

1. **Keep Original Files:** Always save your original design files (Figma, Sketch, AI, PSD)
2. **Version Control:** Consider version control for design assets
3. **Test Early:** Generate and test icons early in development
4. **Brand Consistency:** Use consistent colors and style across all platforms
5. **Accessibility:** Ensure icons are recognizable for users with color blindness

---

**Ready to create your assets?** Start with `icon.png` and `splash.png`! 🎨
