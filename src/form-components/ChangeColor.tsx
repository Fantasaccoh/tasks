import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = ["red", "blue", "green", "orange", "purple", "cyan", "magenta", "yellow"];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <div className="h3">Change Color</div>
            {COLORS.map((color) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    onChange={() => { setSelectedColor(color); }}
                    label={color}
                    value={color}
                    checked={selectedColor === color}
                />
            ))}
            <div>
                You have chosen: 
                <span 
                    data-testid="colored-box" 
                    style={{ backgroundColor: selectedColor, marginLeft: "5px", padding: "2px 10px" }}
                >
                    {selectedColor}
                </span>
            </div>
        </div>
    );
}