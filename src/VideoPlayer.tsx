import ReactPlayer from 'react-player'

function VideoPlayer() {
  
  return (
    <>
      <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
      <ReactPlayer url='https://vidro-bucket-a1.s3.us-east-2.amazonaws.com/videos/EARTH.mp4' />
    </>
  )
}

export default VideoPlayer