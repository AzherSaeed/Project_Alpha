import Footer from '@/app/components/Footer'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div>
            {
                children
            }
            <div className="container ">
                <div className="mt-56">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default layout