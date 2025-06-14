import { useTranslation } from 'react-i18next';

interface LightBallProps {
   className?: string;
   blurValue?: number;
}

export const LightBall = (props: LightBallProps) => {
   const { className, blurValue } = props;
   const { t } = useTranslation();
   return <div className={`absolute rounded-full blur-[80px] ${className} ${blurValue}`}></div>;
};
