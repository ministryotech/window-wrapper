@ECHO OFF

REM -- Uncomment to Init NPM first run --
REM CALL ..\..\set-npm.bat

REM ECHO Compiling JS...
REM CD ..\
REM CALL gulp
REM CD ..\deploy

ECHO Publishing to NPM...
CALL npm publish ..\
pause