BeforeAll {
    . "$PSScriptRoot/../scripts/list-files.ps1"

}

Describe 'List-Files' {
    It 'Given no parameters, returns only files' {
        $allFiles = List-Files

        $allFiles | Should -All -BeOfType ([System.IO.FileInfo])
    }
}
