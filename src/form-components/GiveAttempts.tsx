import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [inputAmount, setInputAmount] = useState<string>("");

    const gainAttempts = () => {
        const amount = parseInt(inputAmount) || 0;
        setAttempts(attempts + amount);
    };

    return (
        <div>
            <div className="h3">Give Attempts</div>
            <p>Attempts: {attempts}</p>
            <Form.Control
                type="number"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
            />
            <Button onClick={() => setAttempts(attempts - 1)} disabled={attempts <= 0}>
                use
            </Button>
            <Button onClick={gainAttempts}>
                gain
            </Button>
        </div>
    );
}