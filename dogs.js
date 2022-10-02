const arrayOfDogs = [
    {
      name: "Hershey",
        breed: ["Retriever", "Labrador"],
        size: "small",
        image: "https://g.petango.com/photos/910/a3ef0298-6a1b-4c59-9661-bf4bd52398dc.jpg"
    },
    {
        name: "Dynamite",
        breed: ["Hound"],
        size: "small",
        image: "https://g.petango.com/photos/910/a3ef0298-6a1b-4c59-9661-bf4bd52398dc.jpg"
    },
    {
        name: "Chance",
        breed: ["Terrier", "American Pit Bull"],
        size: "large",
        image: "https://g.petango.com/photos/910/bbb52fd4-59cb-41f7-abb8-ff7c91180306.jpg"
    },
    {
        name: "Steph",
        breed: ["Terrier", "American Pit Bull"],
        size: "medium",
        image: "https://g.petango.com/photos/910/d6205313-870f-45a4-84ef-d94ae0cf264c.jpg"
    },
    {
        name: "Deegan",
        breed: ["Retriever", "Labrador"],
        size: "medium",
        image: "https://g.petango.com/photos/910/5c38a56c-135d-44fe-86ff-a6f61fd00330.jpg"
    },
    {
        name: "Scott",
        breed: ["Retriever", "Labrador"],
        size: "large",
        image: "https://g.petango.com/photos/910/6447bc44-8440-4bdf-bd66-ee0d7fb6fa5a.jpg"
    },
]



function largeDogs() {
    let arrayOfDogs = []; //initiatting scan of all dogs
        for (let i=0; i < arrayOfDogs.length; i++) { //this is a full loop to scan all dogs
           if (arrayOfDogs[i].size === "large") { //for every dog object we are comparing size of dog with value/keys and we are seeing if size is equal to large
            largeDogs.push(arrayOfDogs[i]) //is =large then push array to largedogs
           }
        }
}

// console.log(largeDogs());


function multiplebreeds() {
    let arrayOfDogs = [];
    for (let i=0; i < arrayOfDogs.length; i++) {
        if (arrayOfDogs[i].breed > 1) {
            multiplebreeds.push(arrayOfDogs[i])
        }
        return multiplebreeds
    }
       
}

console.log(multiplebreeds())