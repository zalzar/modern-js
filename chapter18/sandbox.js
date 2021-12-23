// 148. Spread & Rest
{
    // rest parameter
    const double = (...nums) => {
        console.log(nums);
        return nums.map(num => num * 2);
    }

    const result = double(1, 5, 3, 7, 8, 2, 9);
    console.log(result);

    // spread syntax (arrays)
    const people = ['Ali', 'ryu', 'Crystal'];
    const members = ['mario', 'chun li', ...people];
    console.log(members);

    // spread syntax (object)
    const person = { name: 'Shaun', Age: 30, job: 'Net Ninja' };
    const personClone = {...person, location: 'London' };

    console.log(personClone);
}