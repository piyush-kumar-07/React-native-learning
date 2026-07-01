import { View, Text, Button } from 'react-native';
function ListPractice() {


    const Student1 = [
        "Piyush",
        "rajesh",
    ];
    const Student2 = [
        {
            name: "Aloo",
            age: 23,
        },
        {
            name: "Bhalu",
            age: 43,
        }
    ]
    return (
        <View >
            {Student1.map((Student, index) => (
                <Text key={index}>
                    {Student} </Text>
            ))}

            <View>
                {Student2.map((Student, index) => (
                    <Text key={index}>{Student.name} - {Student.age}
                    </Text>
                ))}
            </View>

        </View>
    );
}
export default ListPractice;