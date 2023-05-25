
function WithSorted(Component, sortName) {
  
    return (props) => {    
        const sortedData = props.list.map((item) => {
            const monthNum = item.date.split('-')[1];
            const month = new Date(Date.parse(item.date)).toDateString().split(' ')[1];
            const year = item.date.split('-')[0];
            const date = item.date;
            const amount = item.amount;
            const id = Date.now();
        
            return { month, monthNum, year, date, amount, id };
        });
        
        sortedData.sort((a, b) => a[sortName] > b[sortName] ? 1 : -1);  
 
        return <Component list={sortedData} />
    };
}

export default WithSorted