import { Question, QuestionType } from "./interfaces/question";

export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    return {
        id: id,
        name: name,
        body: "",
        type: type,
        options: [],
        expected: "",
        points: 1,
        published: false
    };
}

export function isCorrect(question: Question, answer: string): boolean {
    return (
        question.expected.trim().toLowerCase() ===
        answer.trim().toLowerCase()
    );
}

export function isValid(question: Question, answer: string): boolean {
    if (question.type === "short_answer_question") {
        return true;
    } else {
        return question.options.includes(answer);
    }
}

export function toShortForm(question: Question): string {
    return question.id + ": " + question.name.substring(0, 10);
}

export function toMarkdown(question: Question): string {
    let result = "# " + question.name + "\n";
    result += question.body;

    if (question.type === "multiple_choice_question") {
        for (const option of question.options) {
            result += "\n- " + option;
        }
    }

    return result;
}

export function renameQuestion(question: Question, newName: string): Question {
    return {
        ...question,
        name: newName
    };
}

export function publishQuestion(question: Question): Question {
    return {
        ...question,
        published: !question.published
    };
}

export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    return {
        id: id,
        name: "Copy of " + oldQuestion.name,
        body: oldQuestion.body,
        type: oldQuestion.type,
        options: [...oldQuestion.options],
        expected: oldQuestion.expected,
        points: oldQuestion.points,
        published: false
    };
}

export function addOption(question: Question, newOption: string): Question {
    return {
        ...question,
        options: [...question.options, newOption]
    };
}

export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number }
): Question {
    return {
        id: id,
        name: name,
        body: contentQuestion.body,
        type: contentQuestion.type,
        options: [...contentQuestion.options],
        expected: contentQuestion.expected,
        points: points,
        published: false
    };
}