import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({ expectedAnswer }: { expectedAnswer: string }): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    return (
        <div>
            <div className="h3">Check Answer</div>
            <Form.Group controlId="checkAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                />
            </Form.Group>
            <div>{userAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}