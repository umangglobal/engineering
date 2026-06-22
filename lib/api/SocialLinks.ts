// api/SocialLinks.ts

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { name: "Facebook",  icon: "facebook.svg",  url: "https://www.facebook.com/umangglobalgrouppvtltd/"                    },
  { name: "Pintrest",  icon: "pinterest.svg", url: "https://in.pinterest.com/umangglobalgroup/"                          },
  { name: "Whatsapp",  icon: "whatsapp.svg",  url: "https://api.whatsapp.com/send?text=Hello&phone=919518349134"         },
  { name: "Youtube",   icon: "youtube.svg",   url: "https://www.youtube.com/@UmangGlobalGroup"                           },
  { name: "Instagram", icon: "instagram.svg", url: "https://www.instagram.com/umangglobalgroup/"                         },
  { name: "Twitter",   icon: "twitter.svg",   url: "https://x.com/UmangGlobalGrp"                                        },
  { name: "LinkedIn",  icon: "linkedin.svg",  url: "https://www.linkedin.com/company/umang-global/"                      },
];