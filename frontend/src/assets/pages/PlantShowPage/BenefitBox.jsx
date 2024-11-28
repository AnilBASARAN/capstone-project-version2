const BenefitBox =(props)=>{

   const {icon,title,description} = props;

    return(
        <div className="flex flex-col   items-center justify-center shadow-md m-1 p-1">
            <div><i className={icon}></i></div>
            <div className="text-xl">{title}</div>
            <div className=" text-sm text-slate-600 leading-relaxed">{description}</div>
        </div>

    );
};

export default BenefitBox;