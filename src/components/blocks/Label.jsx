import React from "react";

const Label = ({ label, classAttr = "" }) => (
    <div className={`reusable-label ${classAttr}`}>
        <div>
            <span>{label}</span>
        </div>
    </div>
);

export default Label;
