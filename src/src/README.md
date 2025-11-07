# 🐟 Fishmate - AI-Powered Aquaculture Monitoring System

![Fishmate Logo](https://via.placeholder.com/200x200/1e5f74/ffffff?text=Fishmate)

An intelligent IoT mobile application for aquaculture farmers to monitor and manage pond water quality in real-time.

---

## 📱 Overview

Fishmate is a comprehensive mobile application that helps aquaculture farmers monitor critical water quality parameters across multiple ponds. With real-time IoT sensor integration and AI-powered recommendations, farmers can proactively manage their fish farming operations and prevent costly losses.

### Key Features

✅ **Real-Time Monitoring** - Track 5 critical water parameters:
- Dissolved Oxygen (DO)
- pH Levels
- Total Dissolved Solids (TDS)
- Water Temperature
- Turbidity

✅ **Multi-Pond Dashboard** - Manage multiple ponds from a single interface

✅ **Health Status Indicators**
- 🟢 Healthy (optimal conditions)
- 🟡 At Risk (attention needed)
- 🔴 Critical (immediate action required)

✅ **AI-Powered Insights** - Get intelligent recommendations for water quality issues

✅ **IoT Device Management** - Connect and configure water quality sensors

✅ **Live Data Streaming** - View real-time sensor readings with auto-refresh

✅ **Historical Trends** - Track parameter changes over time

✅ **User Profiles** - Personalized farmer profiles and settings

---

## 🎨 Design

Fishmate features a professional aquaculture-themed design:

- **Primary Blue:** #1e5f74 - Trust and water
- **Secondary Blue:** #5b9aa9 - Calm and clarity  
- **Accent Teal:** #3a8fa3 - Growth and vitality
- **Status Colors:** Red (critical), Yellow (warning), Green (healthy)

Built with modern UI components and optimized for mobile devices (iPhone 14 dimensions: 390x844px).

---

## 🚀 Quick Start

### Prerequisites

- Node.js v16 or higher
- npm or yarn
- For iOS: macOS with Xcode
- For Android: Android Studio

### Installation

```bash
# Clone or download the project
cd fishmate

# Install dependencies
npm install

# Install Capacitor for mobile deployment
npm install @capacitor/core @capacitor/cli
npm install @capacitor/ios @capacitor/android
npm install @capacitor/status-bar @capacitor/splash-screen

# Build the app
npm run build

# Add mobile platforms
npx cap add ios      # macOS only
npx cap add android

# Sync to native projects
npx cap sync

# Open in native IDE
npx cap open ios      # Opens Xcode
npx cap open android  # Opens Android Studio
```

For detailed setup instructions, see:
- **Quick Setup:** [QUICK_START.md](QUICK_START.md)
- **Full Guide:** [CAPACITOR_SETUP.md](CAPACITOR_SETUP.md)

---

## 📂 Project Structure

```
fishmate/
├── components/              # React components
│   ├── LoginScreen.tsx
│   ├── SignUpScreen.tsx
│   ├── PondsScreen.tsx      # Main dashboard
│   ├── DevicesScreen.tsx    # IoT device management
│   ├── ReadingsScreen.tsx   # Detailed pond readings
│   ├── LiveReadingsScreen.tsx # Real-time data
│   ├── SettingsScreen.tsx
│   ├── ProfileScreen.tsx
│   ├── BottomNav.tsx        # Navigation component
│   └── ui/                  # Shadcn UI components
├── styles/
│   └── globals.css          # Global styles and tokens
├── utils/
│   └── capacitor.ts         # Native mobile utilities
├── resources/               # App icons and splash screens
├── assets/                  # Asset guidelines
├── App.tsx                  # Main app component
├── capacitor.config.ts      # Capacitor configuration
└── README.md
```

---

## 🖥️ Development

### Running in Browser (Development)

```bash
npm run dev
```

The app will run with an iPhone frame for mobile preview.

### Building for Production

```bash
npm run build
npx cap sync
```

### Native Development Workflow

1. Make changes to React components
2. Build: `npm run build`
3. Sync: `npx cap sync`
4. Test in Xcode/Android Studio

---

## 📱 Deployment to App Stores

### iOS App Store

1. Configure signing in Xcode
2. Archive the app (Product → Archive)
3. Upload to App Store Connect
4. Submit for review

See [CAPACITOR_SETUP.md](CAPACITOR_SETUP.md#ios-app-store) for detailed steps.

### Google Play Store

1. Generate signed APK/Bundle
2. Upload to Play Console
3. Fill in store listing
4. Submit for review

See [CAPACITOR_SETUP.md](CAPACITOR_SETUP.md#google-play-store) for detailed steps.

---

## 🎨 Assets & Branding

### App Icons & Splash Screens

Place your source assets in `/resources`:
- `icon.png` (1024x1024px)
- `splash.png` (2732x2732px)

Generate all sizes:
```bash
npm install -g @capacitor/assets
npx capacitor-assets generate
```

For detailed guidelines:
- [Assets Guide](assets/ASSETS_GUIDE.md)
- [Resources README](resources/README.md)

---

## 🔌 IoT Integration

Fishmate is designed to work with water quality sensors that provide:

- **DO (Dissolved Oxygen):** 0-20 mg/L
- **pH:** 0-14 scale
- **TDS:** 0-1000 ppm
- **Temperature:** 0-50°C
- **Turbidity:** 0-1000 NTU

### Supported Communication Protocols
- WiFi
- Bluetooth (planned)
- LoRaWAN (planned)

### API Integration
Connect your IoT devices through:
- REST APIs
- MQTT
- WebSockets (for real-time data)

---

## 🤖 AI Features

### Smart Recommendations

Fishmate's AI analyzes water quality data and provides:

- **Parameter Analysis:** Identify out-of-range values
- **Trend Detection:** Spot concerning patterns
- **Action Items:** Specific recommendations for each issue
- **Predictive Alerts:** Early warning before critical conditions

### Feedback System

Users can provide thumbs up/down feedback on AI recommendations to improve accuracy over time.

---

## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React
- **Mobile:** Capacitor 5
- **Charts:** Recharts (planned)
- **Backend:** Supabase (optional)

---

## 🔐 Backend & Database (Optional)

For production deployment with user authentication and data persistence:

### Supabase Integration

1. Create Supabase project at [supabase.com](https://supabase.com)
2. Add environment variables:
   ```
   VITE_SUPABASE_URL=your_url
   VITE_SUPABASE_ANON_KEY=your_key
   ```
3. Configure authentication
4. Set up database tables for:
   - Users and profiles
   - Ponds
   - Devices
   - Sensor readings
   - AI feedback

See Supabase documentation for detailed setup.

---

## 📊 Data Models

### Pond
```typescript
{
  id: string
  name: string
  location: string
  size: number
  status: 'healthy' | 'at-risk' | 'critical'
  lastUpdated: Date
  parameters: WaterParameters
}
```

### Water Parameters
```typescript
{
  do: number        // mg/L
  ph: number        // 0-14
  tds: number       // ppm
  temperature: number // °C
  turbidity: number  // NTU
}
```

### Device
```typescript
{
  id: string
  name: string
  type: string
  pondId: string
  status: 'online' | 'offline'
  batteryLevel: number
  lastSeen: Date
}
```

---

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### E2E Tests (Planned)
```bash
npm run test:e2e
```

### Device Testing

Test on real devices for best results:
- iOS: iPhone 8 and newer
- Android: Android 8.0 and newer

---

## 🐛 Troubleshooting

### App won't build
```bash
# Clean and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
npx cap sync
```

### White screen on launch
- Check `capacitor.config.ts` webDir setting
- Ensure build completed successfully
- Check browser console for errors

### Sensors not connecting
- Verify device WiFi/Bluetooth is enabled
- Check sensor power and battery
- Ensure correct API credentials

For more solutions, see [CAPACITOR_SETUP.md](CAPACITOR_SETUP.md#common-issues--solutions)

---

## 📈 Roadmap

### Version 1.1 (Next Release)
- [ ] Historical data charts
- [ ] Push notifications for alerts
- [ ] Offline mode support
- [ ] Multi-language support

### Version 2.0 (Future)
- [ ] Bluetooth sensor support
- [ ] Feed management tracking
- [ ] Fish growth monitoring
- [ ] Weather integration
- [ ] Community marketplace
- [ ] Expert consultation booking

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style
- Use TypeScript for type safety
- Test on both iOS and Android
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 👥 Team & Support

**Developer:** [Your Name]  
**Email:** [Your Email]  
**Website:** [Your Website]

### Get Help
- 📖 Documentation: See guides in project
- 🐛 Issues: [GitHub Issues](your-repo/issues)
- 💬 Discord: [Community Server](your-discord)
- 📧 Email: support@fishmate.app

---

## 🙏 Acknowledgments

- **Capacitor** - Ionic Team
- **Shadcn/ui** - Shadcn
- **Lucide Icons** - Lucide team
- **React** - Meta/Facebook
- **Tailwind CSS** - Tailwind Labs

---

## 📸 Screenshots

<table>
  <tr>
    <td><img src="screenshots/login.png" width="200"/></td>
    <td><img src="screenshots/dashboard.png" width="200"/></td>
    <td><img src="screenshots/readings.png" width="200"/></td>
  </tr>
  <tr>
    <td align="center">Login</td>
    <td align="center">Dashboard</td>
    <td align="center">Readings</td>
  </tr>
</table>

*(Add actual screenshots after building the app)*

---

## ⭐ Star This Project

If Fishmate helps your aquaculture business, please give it a star! ⭐

---

**Built with ❤️ for aquaculture farmers worldwide 🐟🌊**

---

## 📝 Version History

- **v1.0.0** (2024) - Initial release
  - Multi-pond dashboard
  - IoT device management
  - Real-time monitoring
  - AI recommendations
  - iOS and Android support

---

For detailed setup instructions:
- 📱 **Quick Start:** [QUICK_START.md](QUICK_START.md)
- 📚 **Full Setup Guide:** [CAPACITOR_SETUP.md](CAPACITOR_SETUP.md)  
- 🎨 **Assets Guide:** [assets/ASSETS_GUIDE.md](assets/ASSETS_GUIDE.md)
