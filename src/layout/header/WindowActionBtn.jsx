import React from 'react';
/**
 * @param {object} props 
 * @param {()=>void} props.onClick
 * @param {"X"|"__"} props.content
 * @returns 
 */
const WindowActionBtn = ({onClick, content}) => {
    return (
        <button className="m-1 size-6 rounded flex justify-center items-center bg-gray-500 cursor-pointer text-white hover:bg-gray-400 transition-all" onClick={onClick}>
            {content}
        </button>
    );
};

export default WindowActionBtn;