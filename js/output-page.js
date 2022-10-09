const uname = document.getElementById("user-name");


const {
    profile,
    username,
    useremail,
    ytLink,
    tweetLink,
    linkedInLink,
    gitLink,
    skill1,
    skill2,
    skill3,
    skill4,
    tech1,
    tech2,
    tech3,
    tech4,
    workTitle,
    userWork,
    project1,
    project2,
    project3,
    project4
} = JSON.parse(localStorage.getItem('resume-data'))

// function renderData() {
//     console.log(profile);
    
// const outputPic = document.getElementById("profile-pic")
// outputPic.onload = () => {
//     URL.revokeObjectURL(outputPic.src);  // no longer needed, free memory
// }

// // coverts a file into a image source
// // - URL.createObjectURL(file)
// outputPic.src = URL.createObjectURL(profile)
// }

// renderData()


