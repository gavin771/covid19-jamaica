import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

export const ShareButtons = ({ twitterHandle, url, title, tags }) => (
  <div style={{ textAlign: "center" }}>
    <span
      style={{
        margin: "20px 10px 20px 20px",
      }}
    >
      <FacebookShareButton url={url}>
        <FacebookIcon size={35} />
      </FacebookShareButton>
    </span>
    <span
      style={{
        margin: "20px 10px 20px 10px",
      }}
    >
      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle}
        hashtags={tags}
        style={{
          margin: "20px;",
        }}
      >
        <TwitterIcon size={35} />
      </TwitterShareButton>
    </span>
    <span
      style={{
        margin: "20px 10px 20px 10px",
      }}
    >
      <LinkedinShareButton
        url={url}
        style={{
          margin: "20px;",
        }}
      >
        <LinkedinIcon size={35} />
      </LinkedinShareButton>
    </span>
    <span
      style={{
        margin: "20px 10px 20px 10px",
      }}
    >
      <RedditShareButton
        url={url}
        title={title}
        style={{
          margin: "20px;",
        }}
      >
        <RedditIcon size={35} />
      </RedditShareButton>
    </span>
    <span
      style={{
        margin: "20px 20px 20px 10px",
      }}
    >
      <WhatsappShareButton
        url={url}
        title={title}
        style={{
          margin: "20px;",
        }}
      >
        <WhatsappIcon size={35} />
      </WhatsappShareButton>
    </span>
  </div>
);

export default ShareButtons;
