import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";
import useAxios from "axios-hooks";
import Loader from "components/Loader";

const Container = styled.div`
  position: relative;
`;

const App = () => {
  const [{ data, loading }] = useAxios(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_KEY}&part=snippet&eventType=live&type=video&channelId=UCt91xMmbhyLSbvslF7e_Mrg`
  );

  if (loading) return <Loader />;

  return (
    <Container>
      {data.items?.map((item) => (
        <div key={item?.id.videoId}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${item?.id.videoId}`}
            width="50%"
            controls
            playing
            muted
          />
          <span>{item.snippet.title}</span>
        </div>
      ))}
    </Container>
  );
};

export default App;
