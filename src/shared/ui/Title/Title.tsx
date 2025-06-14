interface TitleProps {
   children: string;
   className?: string;
   smallTitle?: boolean;
}

export const Title = (props: TitleProps) => {
   const { className, children, smallTitle } = props;

   if (smallTitle) {
      return <h4 className={`text-3xl leading-normal font-bold text-center mb-[50px] ${className}`}>{children}</h4>;
   }

   return (
      <h2
         className={`text-5xl font-bold text-center mb-[50px] text-mainPink ${className} max-1300:text-4xl max-1100:text-3xl max-1100:mb-4 max-500:text-2xl`}
      >
         {children}
      </h2>
   );
};
