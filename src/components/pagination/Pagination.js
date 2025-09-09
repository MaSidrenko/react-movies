import React, { useEffect, useState } from "react";

const Pagination = (props) => {
    const pages = [1, 2, 3 ,4 ,5];

    return (
    <div>
    {pages.map((page, index) => <span key={index}>{page}</span>)}        
    </div>
)
};

export default Pagination;