const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#ffc600';
ctx.lineWidth = 2;
const faceCanvas = document.querySelector('.face');
const faceCtx = canvas.getContext('2d');

const faceDetector = new window.FaceDetector();

// write a function tahta will populate the users video

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();

  // size the canvases to be the same size as the video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);

  // ask the browser when the next animation frame is
  // and tell it to run detect for us
  requestAnimationFrame(detect);
  // recursion is when a function calls itself,
  // it will run forever and ever and ever until something stops, until there's an exit condition

  faces.forEach(drawFace);
  faces.forEach(censor);
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  // draw the small face
  faceCtx.drawImage(
      // 5 source args
      video, // where does the source come from?
      face.x, // where do we star the source pull from?
      face.y, // x = left, y = top
      face.width,
      face.height,
      // 4 draw args
      face.x, // where should we start drawing the x and y
      face.y,
      face.width,
      face.height
  // take that face back out and draw it back at normal size
}

populateVideo().then(detect);
