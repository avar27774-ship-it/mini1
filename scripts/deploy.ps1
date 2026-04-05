Write-Host "Deploying MajesticCrypt..." -ForegroundColor Cyan

# Stop existing service
Stop-Service -Name "MajesticGod" -ErrorAction SilentlyContinue

# Copy files
Copy-Item "..\build\majestic_driver.sys" -Destination "$env:Windir\System32\drivers\" -Force

# Start service
Start-Service -Name "MajesticGod"

Write-Host "Deployment complete!" -ForegroundColor Green
