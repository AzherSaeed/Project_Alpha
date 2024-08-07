
'use client';
import React from "react";
import Home from '@/components/home'
import Slider from '@/components/slider'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Page = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home/>} />
               
            </Routes>
        </BrowserRouter>
    );
};

export default Page;
