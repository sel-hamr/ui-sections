import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import { Block } from "./block";

const socialMedia = [
  {
    icon: SiGithub,
    color: "bg-green-600",
  },
  {
    icon: SiTiktok,
    color: "bg-pink-500",
  },
  {
    icon: SiTwitter,
    color: "bg-blue-400",
  },
  {
    icon: SiYoutube,
    color: "bg-red-500",
  },
];

export const BlockSocialMedia = () => {
  return (
    <>
      {socialMedia.map((media, idx) => {
        const Icon = media.icon;
        return (
          <Block
            key={idx}
            whileHover={{
              rotate: "2.5deg",
              scale: 1.1,
            }}
            className={`col-span-6 text-white grid place-content-center md:col-span-3 ${media.color} `}
          >
            <Icon className="size-9" />
          </Block>
        );
      })}
    </>
  );
};
