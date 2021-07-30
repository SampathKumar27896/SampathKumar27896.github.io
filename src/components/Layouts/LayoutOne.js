import React from 'react';
const LayoutOne = (props) => {
    return(
        <div className="flex-item">
            <div className="layout-one">
                <div className="layout-one-image-layout">
                    <h1 className="layout-one-cover-heading">
                            {props.data.coverHeading}
                    </h1>
                </div>
                {
                    props.data.data.map((item, index) => (
                        <div className="layout-one-content" key={index}>
                            <h1 className="layout-one-content-heading">
                                    {item.category}
                            </h1>
                            <div>
                                {
                                    item.details.map((detail, index2) => (
                                        <p class="name-value" key={index2}><span class="name-label">{detail.title}  :  </span>{detail.value}</p>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        
    )
}
export default LayoutOne;