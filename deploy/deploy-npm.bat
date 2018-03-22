@ECHO OFF

REM -- Uncomment to Init NPM first run --
REM CALL ..\..\set-npm.bat

ECHO Compiling JS...
CD ..\
CALL gulp

ECHO Publishing to NPM...
CALL npm publish deploy\build\
pause