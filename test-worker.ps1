# Test Worker API
$url = 'https://mibj-proxy.mibj.workers.dev'
$body = @{
    contents = @(
        @{
            role = 'user'
            parts = @(
                @{ text = 'Hello, who are you?' }
            )
        }
    )
    systemInstruction = @{
        role = 'user'
        parts = @(
            @{ text = 'You are a helpful assistant.' }
        )
    }
    model = 'gemini-2.5-flash'
} | ConvertTo-Json -Depth 10

$headers = @{
    'Content-Type' = 'application/json'
    'Origin' = 'https://mohamed-islam-ben-jaballah.github.io'
}

Write-Host "Testing Worker at: $url"
Write-Host "Sending request..."

try {
    $response = Invoke-WebRequest -Uri $url -Method POST -Headers $headers -Body $body -ErrorAction Stop
    Write-Host "✓ Success!"
    Write-Host "Status: $($response.StatusCode)"
    Write-Host "Response:"
    $response.Content | ConvertFrom-Json | ConvertTo-Json
} catch {
    Write-Host "✗ Error!"
    Write-Host "Status: $($_.Exception.Response.StatusCode.Value)"
    Write-Host "Message: $($_.Exception.Message)"
    if ($_.Exception.Response) {
        try {
            $errorBody = [System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream()).ReadToEnd()
            Write-Host "Response Body:"
            Write-Host $errorBody
        } catch {}
    }
}
