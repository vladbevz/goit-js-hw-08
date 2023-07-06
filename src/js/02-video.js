import Player from '@vimeo/player';
import throttle from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_CURRENT = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
  const currentTime = event.seconds;
  localStorage.setItem(TIME_CURRENT, currentTime);
}

const storedTime = localStorage.getItem(TIME_CURRENT);
if (storedTime) {
  player.setCurrentTime(storedTime);
}
