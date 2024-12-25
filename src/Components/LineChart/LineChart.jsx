import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';


const LineChart = () => {

    const mathMarksData = [
        { "name": "Alice", "math": 85, "physics": 78, "chemistry": 88 },
        { "name": "Bob", "math": 78, "physics": 82, "chemistry": 76 },
        { "name": "Charlie", "math": 92, "physics": 89, "chemistry": 94 },
        { "name": "Diana", "math": 88, "physics": 84, "chemistry": 90 },
        { "name": "Edward", "math": 74, "physics": 76, "chemistry": 72 },
        { "name": "Fiona", "math": 90, "physics": 88, "chemistry": 86 },
        { "name": "George", "math": 82, "physics": 79, "chemistry": 80 },
        { "name": "Hannah", "math": 95, "physics": 91, "chemistry": 96 },
        { "name": "Isaac", "math": 80, "physics": 77, "chemistry": 82 },
        { "name": "Jenny", "math": 87, "physics": 85, "chemistry": 89 }
    ]


    return (
        <div>
            <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
                <Line dataKey="chemistry" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;