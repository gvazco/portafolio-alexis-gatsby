import React from "react"
import IcTwitter from "../../../images/icons/twitter.svg"
import IcFacebook from "../../../images/icons/facebook.svg"
import IcWeb from "../../../images/icons/web.svg"
import IcInstagram from "../../../images/icons/instagram.svg"
import IcLinkedin from "../../../images/icons/linkedin.svg"
import "./Social.scss"

const socialMedia = [
  {
    icon: <IcTwitter />,
    link: "https://twitter.com/xagustin93",
  },
  {
    icon: <IcFacebook />,
    link: "https://www.facebook.com/AgustinNavarroGaldon",
  },
  {
    icon: <IcWeb />,
    link: "https://www.tincode.es/",
  },
  {
    icon: <IcInstagram />,
    link: "https://www.instagram.com/xagustin93",
  },
  {
    icon: <IcLinkedin />,
    link: "https://www.linkedin.com/in/agustin93/",
  },
]

export default function Social() {
  return (
    <div className="social">
      {socialMedia.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
