import React from 'react';

function YearTable(props) {
    console.log('YearTable', props);

    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Year</th>
                        <th>Amount</th>
                    </tr>
                    {props.list.map((item, i) => (
                        <tr key={item.id + i*11}>
                            <td>{item.year}</td>
                            <td>{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default YearTable