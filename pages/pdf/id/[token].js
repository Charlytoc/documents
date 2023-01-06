
export default function StudentId () {
    const showDestructuring = () => {
        const person = {
            name: 'Carlos',
            age: 27
        }
        const {name, age} = person;
        console.log(name, age)
    }

    return <p onClick={showDestructuring}>HOLIA</p>
}