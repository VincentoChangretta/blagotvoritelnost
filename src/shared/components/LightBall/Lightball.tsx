import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface LightBallProps {
   className?: string;
   blurValue?: number;
}

export const LightBall = (props: LightBallProps) => {
   const { className, blurValue } = props;
   const { t } = useTranslation();
   return <div className={classNames(`absolute rounded-full blur-[80px]`, {}, [className])}></div>;
};
