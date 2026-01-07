document.addEventListener('DOMContentLoaded', function() {
  const audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.muted = true; // 设置为静音
  audioPlayer.play().then(() => {
    audioPlayer.muted = false; // 播放后取消静音
  }).catch(error => {
    console.error('自动播放失败:', error);
  });
});