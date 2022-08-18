import React from 'react';

const QuestionPart = () => {
    return (
        <div>
            <div className="question-area">
                <h2 className="text-3xl font-bold text-center my-4">
                    Most Expected Question!
                </h2>
            </div>
            <div className="question-table">
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div class="collapse-title text-xl font-medium">
                Focus me to see content
            </div>
            <div class="collapse-content"> 
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
            </div>
            </div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div class="collapse-title text-xl font-medium">
                Focus me to see content
            </div>
            <div class="collapse-content"> 
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
            </div>
            </div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div class="collapse-title text-xl font-medium">
                Focus me to see content
            </div>
            <div class="collapse-content"> 
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default QuestionPart;