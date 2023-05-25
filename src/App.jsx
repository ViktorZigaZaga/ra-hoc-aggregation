import React, {useState, useEffect} from 'react';
import SortTable from './components/SortTable';
import MonthTable from './components/MonthTable';
import YearTable from './components/YearTable';
import WithSorted from './components/withSorted';

function App() {
    const [list, setList] = useState([]);

    const update = async () => {
        const response = await fetch(import.meta.env.VITE_DATA_URL);
        const data = await response.json();
        setList(data.list);
    }

    useEffect(() => {
        update();
    }, []);

    const YearTableSorted = WithSorted(YearTable, 'year');
    const MonthTableSorted = WithSorted(MonthTable, 'monthNum');
    const SortTableSorted = WithSorted(SortTable, 'date');

    return (
        <>
            <MonthTableSorted list={list} />
            <YearTableSorted list={list} />
            <SortTableSorted list={list} />
        </>
    );
}

export default App