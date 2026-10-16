<#
.SYNOPSIS
    Lists files in a directory.
.DESCRIPTION
    Lists files in the specified directory without including subdirectories.
.PARAMETER Path
    The directory to search. Defaults to the current directory.
.EXAMPLE
    .\list-files.ps1
.EXAMPLE
    .\list-files.ps1 -Path "/Users/lg/toolboxes/powershell"
#>
param(
    [string]$Path = "."
)

function List-Files ([string]$Name = '*') {
    $files = @(
        Get-ChildItem -Path $Path -File
    ) | ForEach-Object { [PSCustomObject] $_ }
    $files | Where-Object { $_.Name -like $Name }
}

List-Files
