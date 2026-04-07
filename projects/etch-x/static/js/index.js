document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('video').forEach(function(video) {
    if (video.closest('.video-hover-card')) {
      return;
    }

    var wrapper = document.createElement('div');
    wrapper.className = 'video-hover-card';

    video.parentNode.insertBefore(wrapper, video);
    wrapper.appendChild(video);
  });
});
