import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Child component that handles the doubling logic.
 * It receives the current value and the setter function as props.
 */
function Doubler({
    value,
    setter
}: {
    value: number;
    setter: (v: number) => void;
}): React.JSX.Element {
    return (
        <Button onClick={() => setter(2 * value)}>
            Double
        </Button>
    );
}

/**
 * Child component that handles the halving logic.
 */
function Halver({
    value,
    setter
}: {
    value: number;
    setter: (v: number) => void;
}): React.JSX.Element {
    return (
        <Button onClick={() => setter(0.5 * value)}>
            Halve
        </Button>
    );
}

/**
 * The main Parent component.
 * It "Lifts State" so that both children can access and modify the same number.
 */
export function DoubleHalf(): React.JSX.Element {
    // 1. Initialize state at 10 as required by the test
    const [value, setValue] = useState<number>(10);

    return (
        <div>
           <div style={{ fontWeight: 'bold' }}>Double Half</div>
            <div>
                The current value is: <span>{value}</span>
            </div>
            {/* 2. Pass the value and the setter down to the children */}
            <Doubler value={value} setter={setValue}></Doubler>
            <Halver value={value} setter={setValue}></Halver>
        </div>
    );
}