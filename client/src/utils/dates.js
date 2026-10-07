// helper functions for turning an event's timestamp into readable text.

export const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
}

export const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
    })
}

// returns e.g. "Starts in 3 days", "Starts in 5 hours", or null if the event already happened.
export const formatRemainingTime = (timestamp) => {
    const msLeft = new Date(timestamp) - new Date()

    if (msLeft <= 0) {
        return null
    }

    const hours = Math.floor(msLeft / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)

    if (days >= 1) {
        return `Starts in ${days} day${days === 1 ? '' : 's'}`
    }
    if (hours >= 1) {
        return `Starts in ${hours} hour${hours === 1 ? '' : 's'}`
    }
    return 'Starting soon!'
}
