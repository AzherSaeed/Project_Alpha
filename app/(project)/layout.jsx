import Footer from '@/components/Footer'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div>
            {
                children
            }
            <div className="container px-4 ">
                <div className="mt-56">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default layout