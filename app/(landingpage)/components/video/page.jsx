export default function Video() {
  return (
   <video width="300" height="200" controls preload="none">
    <source src="/video/Chabot.mp4" type="video/mp4" />
    <track
      src="/path/to/captions.vtt"
      kind="subtitles"
      srcLang="en"
      label="English"
    />
    Your browser does not support the video tag.
  </video>
  )
}