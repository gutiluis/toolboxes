#!/usr/bin/env bash

# file: logging.sh
# descr: Small, dependency-free logging helpers for Bash scripts.
#
# Usage:
#   source "/path/to/lib/logging.sh"
#
#   log_debug "debug message"
#   log_info "starting application"
#   log_warn "configuration file is missing"
#   log_error "failed to connect"

log_timestamp() {
    date '+%Y-%m-%d %H:%M:%S'
}

log_debug() {
    printf '[%s] [DEBUG] %s\n' "$(log_timestamp)" "$*" >&2
}

log_info() {
    printf '[%s] [INFO]  %s\n' "$(log_timestamp)" "$*" >&2
}

log_warn() {
    printf '[%s] [WARN]  %s\n' "$(log_timestamp)" "$*" >&2
}

log_error() {
    printf '[%s] [ERROR] %s\n' "$(log_timestamp)" "$*" >&2
}
