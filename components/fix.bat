@echo off
echo 'Fixing ViewPropTypes issues'
REM Fix ViewPropTypes issues
ECHO export const ViewPropTypes = { style: null };>>"../node_modules/react-native-web/dist/index.js"

