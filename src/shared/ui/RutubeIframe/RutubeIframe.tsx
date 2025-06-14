export interface RutubeIframeProps {
   link: string;
   className?: string;
}

export const RutubeIframe = (props: RutubeIframeProps) => {
   const { link, className } = props;
   return (
      <iframe
         width='720'
         height='405'
         className={className}
         src={link}
         frameBorder='0'
         allow='clipboard-write; autoplay'
         allowFullScreen
      ></iframe>
   );
};
