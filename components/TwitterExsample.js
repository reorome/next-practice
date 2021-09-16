import { useRef, useEffect } from 'react'
import Script from 'next/script';
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'


export default function TwitterExsample({ tweetList }) {
    const containerElem = useRef(null);

    return (
        <>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="with_am24"
            />
        </>
    )
}
