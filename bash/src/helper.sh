#!/usr/bin/env bash

_is_first_run() {
    local FIRST_RUN_FIILE=${1-/tmp/bats-tutorial-project-ran}
    if [[ ! -e "$FIRST_RUN_FIILE" ]]; then
        touch "$FIRST_RUN_FIILE"
        return 0
    fi
    return 1
}
