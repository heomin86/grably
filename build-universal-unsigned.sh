#!/bin/bash

echo "🚀 Creating Universal DMG for Grably (unsigned)..."

# Build for Intel (x86_64)
echo "📦 Building for Intel (x86_64)..."
npm run tauri build -- --target x86_64-apple-darwin --bundles app

# Build for Apple Silicon (aarch64)
echo "📦 Building for Apple Silicon (aarch64)..."
npm run tauri build -- --target aarch64-apple-darwin --bundles app

# Create universal binary
echo "🔧 Creating universal binary..."
rm -rf universal-app
mkdir -p universal-app
cp -R src-tauri/target/aarch64-apple-darwin/release/bundle/macos/Grably.app universal-app/

# Combine the binaries using lipo
echo "🔗 Combining binaries with lipo..."
lipo -create \
  src-tauri/target/x86_64-apple-darwin/release/bundle/macos/Grably.app/Contents/MacOS/tauri-app \
  src-tauri/target/aarch64-apple-darwin/release/bundle/macos/Grably.app/Contents/MacOS/tauri-app \
  -output universal-app/Grably.app/Contents/MacOS/tauri-app

# Verify universal binary
echo "✅ Verifying universal binary..."
lipo -info universal-app/Grably.app/Contents/MacOS/tauri-app

# Create DMG (simple method without create-dmg tool)
echo "📀 Creating DMG..."
rm -f Grably-Universal.dmg
hdiutil create -volname "Grably" -srcfolder universal-app -ov -format UDZO Grably-Universal.dmg

echo "✅ Universal DMG created: Grably-Universal.dmg"
echo "⚠️  Note: This DMG is unsigned. Users will need to right-click → Open to bypass Gatekeeper."
ls -lh Grably-Universal.dmg
