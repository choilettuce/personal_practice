import React from "react";

const students = [
    {
        id: 1,
        name: "주형",
    },
    {
        id: 2,
        name: "금강",
    },
    {
        id: 3,
        name: "종민",
    },
    {
        id: 4,
        name: "형봉",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;