// Input:
// <div>Hello World<div>
// Output should be:
// <div>Hello World</div>

const fixText = (str) =>
{
    let lastFiveLetters = ``;
    let newText = ``;
    divCount = 0;

    for(let i = 0; i < str.length; i++)
    {
        lastFiveLetters += str[i];
        newText += str[i];

        if(lastFiveLetters.length === 5)
        {
            if(lastFiveLetters === `<div>`)
            {
                if(divCount === 1)
                {
                    newText = newText.substring(0, newText.length - 5);
                    newText += `</div>`;

                    divCount = 0;
                }
                else
                {
                    divCount++;
                }
            }

            lastFiveLetters = lastFiveLetters.substring(1, 5);
        }
    }

    return newText;
}

console.log(fixText(`<div>Hello World<div>`));
console.log(fixText(`<div>Hello World<div><div>`));
console.log(fixText(`<div>Hello World<div><div><div>`));
console.log(fixText(`<div>Hello World<div><div>Hello World<div>`));
console.log(fixText(`<div><p>Here is a <div> tag</p>`));
console.log(fixText(`<div><div><div>`));
console.log(fixText(`<div>

lol

<div>`));