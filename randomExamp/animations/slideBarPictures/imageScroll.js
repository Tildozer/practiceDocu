const track = document.querySelector('#image-track');

window.onmousedown = ev => {
    track.dataset.mouseDownAt = ev.clientX;
};

window.onmousemove = ev => {
  if(track.dataset.mouseDownAt === '0') return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - ev.clientX,
        maxDelta = window.innerWidth / 2;
  console.log('mouse',mouseDelta, 'max', maxDelta)

  const percentage = (mouseDelta / maxDelta ) * -100,
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  
  track.dataset.percentage = nextPercentage;

  track.animate({
    transform: `translate(${nextPercentage}% , -50%)`
  }, { duration: 1200, fill: "forwards"});

  for (const image of track.getElementsByClassName('image')) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards"});
}
};

window.onmouseup = _ => {
    track.dataset.mouseDownAt = '0';
    track.dataset.prevPercentage = track.dataset.percentage;
}

