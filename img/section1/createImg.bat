@echo off
set fileDir=../img/section1/

rem For each file in your folder
echo.>name.txt
for %%a in (".\*") do (
    if "%%~xa" NEQ "" (
        if "%%~dpxa" NEQ "%~dpx0" (
            if "%%~xa" EQU ".jpg" (
                echo %fileDir%%%~na%%~xa
                echo %fileDir%%%~na%%~xa>>name.txt
            )
            if "%%~xa" EQU ".png" (
                echo %fileDir%%%~na%%~xa
                echo %fileDir%%%~na%%~xa>>name.txt
            )
        )
    )
)
@REM pause
@REM "%%a" = file's name or that file. Ex".\95025.jpg"
@REM "%%~xa" = file's extension. Ex ".jpg"
@REM "%%~dpxa" = directory and end with file's extension (no file's name included). Ex "E:\data\.jpg"
@REM "%~dpx0" = directory and end with the running script's extension (no file's name included). Ex "E:\data\.bat"