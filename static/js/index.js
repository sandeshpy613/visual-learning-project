$(document).ready(function () {
    // We are now using a native horizontal scrollbar for the results section
    // but we can still handle video behavior if needed.
    
    // Pause all other videos when one starts playing
    $('video').on('play', function() {
        var currentVideo = this;
        $('video').each(function() {
            if (this !== currentVideo) {
                this.pause();
            }
        });
    });
})
