import { useRef, useEffect } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function TwitterExsample({ tweetList }) {
  return (
    <>
      <TwitterTimelineEmbed sourceType='profile' screenName='with_am24' />
    </>
  );
}
