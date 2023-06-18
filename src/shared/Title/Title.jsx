// import React from 'react';

const Title = ({ title, subTitle, subTitleColor }) => {
  return (
    <div className="text-center mb-12">
      <h3 className="text-[#D99904] mb-4 italic text-xl">{title}</h3>
      <h1
        className={`${
          subTitleColor ? subTitleColor : "text-[#151515]"
        } border-y-4 border-[#E8E8E8] text-4xl w-fit px-10 mx-auto py-4`}
      >
        {subTitle}
      </h1>
    </div>
  );
};

export default Title;
