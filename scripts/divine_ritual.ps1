Write-Host "⚡ INITIATING DIVINE RITUAL ⚡" -ForegroundColor Magenta

# Enable test mode
Start-Process -Verb RunAs -FilePath "bcdedit" -ArgumentList "/set testsigning on"
Start-Process -Verb RunAs -FilePath "bcdedit" -ArgumentList "/set nointegritychecks on"

Write-Host "✨ DIVINE POWERS ACTIVATED ✨" -ForegroundColor Cyan
Write-Host "Restart your computer to complete the ritual" -ForegroundColor Yellow
