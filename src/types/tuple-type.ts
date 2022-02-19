let skill: [string, number];
skill = ['Programming', 5];
console.log(skill); // [ 'Programming', 5 ]
console.log(typeof(skill)); // object

let infoSkill = (skill: string, year: number): [string, string] => {
    return [skill, `${year} Years`];
}
console.log(infoSkill('NodeJs', 3)); // [ 'NodeJs', '3 Years' ]
