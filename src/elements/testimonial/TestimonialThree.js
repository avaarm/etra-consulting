import React from 'react';

const TestimonialData = [
    {
        form: "Poland",
        description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
        name: "John Due",
        subtitle: "App Developer",
        image: "testimonial-dark-01"
    },
    {
        form: "Germany",
        description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
        name: "John Due",
        subtitle: "App Developer",
        image: "testimonial-dark-02"
    },
    {
        form: "USA",
        description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
        name: "Janen",
        subtitle: "App Developer",
        image: "testimonial-dark-03"
    },
]
const TestimonialThree = ({teamStyle}) => {
    return (
        <div className="row g-5">
            {TestimonialData.map((data, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12">
                    <div className={`testimonial-style-two ${teamStyle}`}>
                        <div className="row align-items-center row--20">
                            <div className="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                                <div className="content mt_sm--40">
                                    <span className="form">{data.form}</span>
                                    <p className="description">{data.description}</p>
                                    <div className="client-info">
                                        <h4 className="title">{data.name}</h4>
                                        <h6 className="subtitle">{data.subtitle}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 order-md-2 col-lg-4 col-md-4">
                                <div className="thumbnail">
                                    <img className="w-100" src={`./images/testimonial/${data.image}.jpg`} alt="Corporate React Template" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default TestimonialThree;




















