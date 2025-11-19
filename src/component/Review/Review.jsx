import React from 'react';

const Review = ({singleData}) => {
    console.log(singleData);
    
    
    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-6 rounded-3xl max-w-md border">
      {/* Quote Icon */}
      <div className="text-primary text-4xl mb-4">❝</div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
        A posture corrector works by providing support and gentle alignment to 
        your shoulders, back, and spine, encouraging you to maintain proper 
        posture throughout the day.
      </p>

      {/* Divider */}
      <div className="border-t border-dashed my-4"></div>

      {/* Profile */}
      <div className="flex items-center gap-4 mt-4">
      <img src={singleData.user_photoURL}className='rounded-full h-[60px] w-[60px]' alt="" />

        <div>
          <h3 className="font-semibold text-lg text-teal-900">{singleData.userName}</h3>
          <p className="text-gray-500 text-sm">{singleData.user_email}</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Review;