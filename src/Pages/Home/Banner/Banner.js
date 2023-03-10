import React from 'react';
import toast from 'react-hot-toast';

const Banner = () => {
    const notify = () => toast.success('Here is your toast.', { position: "top-center" });
    return (<div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/resalecommerce-recommerce-re-sale-concept-buyback-tradein-upcycling-retail-circular-economy_72482-5511.jpg?w=740")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5 text-2xl font-bold">Welcome to Online Phone Resale Market</p>
                <p className="mb-5 text-2xl font-bold">If you have old phone you can sell it also buy from here</p>
                <button className="btn btn-ghost outline" onClick={notify}>Get Started</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;