import React from 'react'
import '../styles/TodoLoading.css'

function TodoLoading() {
    return (
        <div className="spinner-container">
            <div className="spinner">
            <div className="spinner">
                <div className="spinner">
                <div className="spinner">
                    <div className="spinner">
                        <div className="spinner"></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export { TodoLoading }