#!/bin/sh
HOMEBREW_NO_INSTALL_CLEANUP=TRUE # disable homebrew's cleanup.
HOMEBREW_NO_AUTO_UPDATE=1 # disable homebrew's automatic updates.
brew install node
brew install cocoapods
npm install
cd ios
pod install