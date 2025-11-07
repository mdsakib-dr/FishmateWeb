/**
 * Capacitor Native Utilities
 * Helper functions for working with Capacitor native features
 */

// Check if app is running in Capacitor
export const isCapacitor = (): boolean => {
  return !!(window as any).Capacitor;
};

// Get platform (ios, android, web)
export const getPlatform = (): 'ios' | 'android' | 'web' => {
  if (isCapacitor()) {
    const platform = (window as any).Capacitor?.getPlatform?.();
    return platform || 'web';
  }
  return 'web';
};

// Check if running on iOS
export const isIOS = (): boolean => {
  return getPlatform() === 'ios';
};

// Check if running on Android
export const isAndroid = (): boolean => {
  return getPlatform() === 'android';
};

// Check if running on web
export const isWeb = (): boolean => {
  return getPlatform() === 'web';
};

// Safe area insets for iOS (notch and home indicator)
export const getSafeAreaInsets = () => {
  if (isIOS()) {
    const style = getComputedStyle(document.documentElement);
    return {
      top: parseInt(style.getPropertyValue('--safe-area-inset-top') || '0'),
      bottom: parseInt(style.getPropertyValue('--safe-area-inset-bottom') || '0'),
      left: parseInt(style.getPropertyValue('--safe-area-inset-left') || '0'),
      right: parseInt(style.getPropertyValue('--safe-area-inset-right') || '0'),
    };
  }
  return { top: 0, bottom: 0, left: 0, right: 0 };
};

// Haptic feedback (requires @capacitor/haptics plugin)
export const hapticImpact = async (style: 'light' | 'medium' | 'heavy' = 'medium') => {
  if (!isCapacitor()) return;
  
  try {
    const { Haptics } = await import('@capacitor/haptics');
    await Haptics.impact({ style });
  } catch (error) {
    console.log('Haptics not available');
  }
};

// Haptic notification
export const hapticNotification = async (type: 'success' | 'warning' | 'error' = 'success') => {
  if (!isCapacitor()) return;
  
  try {
    const { Haptics } = await import('@capacitor/haptics');
    await Haptics.notification({ type });
  } catch (error) {
    console.log('Haptics not available');
  }
};

// Set status bar style (requires @capacitor/status-bar plugin)
export const setStatusBarStyle = async (style: 'light' | 'dark') => {
  if (!isCapacitor()) return;
  
  try {
    const { StatusBar, Style } = await import('@capacitor/status-bar');
    await StatusBar.setStyle({ 
      style: style === 'light' ? Style.Light : Style.Dark 
    });
  } catch (error) {
    console.log('StatusBar not available');
  }
};

// Set status bar background color (Android only)
export const setStatusBarColor = async (color: string) => {
  if (!isAndroid()) return;
  
  try {
    const { StatusBar } = await import('@capacitor/status-bar');
    await StatusBar.setBackgroundColor({ color });
  } catch (error) {
    console.log('StatusBar not available');
  }
};

// Hide splash screen
export const hideSplashScreen = async () => {
  if (!isCapacitor()) return;
  
  try {
    const { SplashScreen } = await import('@capacitor/splash-screen');
    await SplashScreen.hide();
  } catch (error) {
    console.log('SplashScreen not available');
  }
};

// Show splash screen
export const showSplashScreen = async () => {
  if (!isCapacitor()) return;
  
  try {
    const { SplashScreen } = await import('@capacitor/splash-screen');
    await SplashScreen.show();
  } catch (error) {
    console.log('SplashScreen not available');
  }
};

// Hide keyboard (requires @capacitor/keyboard plugin)
export const hideKeyboard = async () => {
  if (!isCapacitor()) return;
  
  try {
    const { Keyboard } = await import('@capacitor/keyboard');
    await Keyboard.hide();
  } catch (error) {
    console.log('Keyboard not available');
  }
};

// Check network status
export const getNetworkStatus = async () => {
  if (!isCapacitor()) {
    return { connected: navigator.onLine, connectionType: 'wifi' };
  }
  
  try {
    const { Network } = await import('@capacitor/network');
    const status = await Network.getStatus();
    return status;
  } catch (error) {
    console.log('Network plugin not available');
    return { connected: navigator.onLine, connectionType: 'unknown' };
  }
};

// Listen for network changes
export const addNetworkListener = async (callback: (status: any) => void) => {
  if (!isCapacitor()) {
    window.addEventListener('online', () => callback({ connected: true }));
    window.addEventListener('offline', () => callback({ connected: false }));
    return;
  }
  
  try {
    const { Network } = await import('@capacitor/network');
    Network.addListener('networkStatusChange', callback);
  } catch (error) {
    console.log('Network plugin not available');
  }
};

// Open native share dialog
export const share = async (title: string, text: string, url?: string) => {
  if (!isCapacitor()) {
    // Fallback to Web Share API
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (error) {
        console.log('Web Share not available or cancelled');
      }
    }
    return;
  }
  
  try {
    const { Share } = await import('@capacitor/share');
    await Share.share({ title, text, url });
  } catch (error) {
    console.log('Share not available');
  }
};

// App state listeners (pause, resume)
export const addAppStateListeners = async (
  onPause: () => void,
  onResume: () => void
) => {
  if (!isCapacitor()) return;
  
  try {
    const { App } = await import('@capacitor/app');
    App.addListener('pause', onPause);
    App.addListener('resume', onResume);
  } catch (error) {
    console.log('App plugin not available');
  }
};

// Get app info
export const getAppInfo = async () => {
  if (!isCapacitor()) {
    return { version: '1.0.0', build: '1' };
  }
  
  try {
    const { App } = await import('@capacitor/app');
    const info = await App.getInfo();
    return info;
  } catch (error) {
    console.log('App plugin not available');
    return { version: '1.0.0', build: '1' };
  }
};

export default {
  isCapacitor,
  getPlatform,
  isIOS,
  isAndroid,
  isWeb,
  getSafeAreaInsets,
  hapticImpact,
  hapticNotification,
  setStatusBarStyle,
  setStatusBarColor,
  hideSplashScreen,
  showSplashScreen,
  hideKeyboard,
  getNetworkStatus,
  addNetworkListener,
  share,
  addAppStateListeners,
  getAppInfo,
};
