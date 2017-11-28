import React from 'react';

export default function SaveButton({ onClick }) {
    return (
        <button className="pv2 ph3" onClick={onClick}>
            Save
        </button>
    )
}