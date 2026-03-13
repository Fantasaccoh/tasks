import React, { useState } from "react";
import { Button } from "react-bootstrap";

// 1. MoveableBox now needs to receive its position as a Prop
function MoveableBox({ position }: { position: number }): React.JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: `${position}px`, // Use the prop here
            }}
        ></div>
    );
}

function ShoveBoxButton({
    position,
    setPosition,
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button
            onClick={() => {
                setPosition(4 + position);
            }}
        >
            Shove the Box
        </Button>
    );
}

export function ShoveBox(): React.JSX.Element {
    // 2. The state "lives" here in the parent now
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <div style={{ fontWeight: 'bold' }}>Shove Box</div>
            {/* 3. We use the state variable directly here */}
            <span>The box is at: {position}</span>
            <div>
                {/* 4. Pass the state and setter to the button */}
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                
                {/* 5. Pass the position to the box */}
                <MoveableBox position={position} />
            </div>
        </div>
    );
}