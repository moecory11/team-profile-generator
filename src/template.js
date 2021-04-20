const employeeTemplate = function(data) {
    console.log("employeeTemplate", data)
    let cardArr = [];
  

    const managerTemplate = (job)=>{
        let managerCard = `
            <div class="col-4 mx-auto">
                <div class="card border-secondary brdr-shdw" style="width: 18rem; margin-top: 20px;">
                    <div class="card-body blue text-light">
                        <h5 class="card-title">Name: ${job.name}</h5>
                        <p class="card-text">Manager</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${job.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${job.email}">${job.email}</a></li>
                        <li class="list-group-item">Office Number: ${job.officeNumber}</li>
                    </ul>
                </div>
            </div>
        `;
        cardArr.push(managerCard)
    };

    const engineerTemplate = (job)=> {
        let engineerCard = `
            <div class="col-4 mx-auto">
                <div class="card border-secondary brdr-shdw" style="width: 18rem; margin-top: 20px;">
                    <div class="card-body blue text-light">
                        <h5 class="card-title">Name: ${job.name}</h5>
                        <p class="card-text">Engineer</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${job.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${job.email}">${job.email}</a></li>
                        <li class="list-group-item">Git Hub: <a href="https://github.com/${job.github}" target="_blank">${job.github}</li>
                    </ul>
                </div>
            </div>
        `;
        cardArr.push(engineerCard)
    };
    const internTemplate = (job)=> {
        let internCard = `
            <div class="col-4 mx-auto">
                <div class="card border-secondary brdr-shdw" style="width: 18rem; margin-top: 20px;">
                    <div class="card-body blue text-light">
                        <h5 class="card-title">Name: ${job.name}</h5>
                        <p class="card-text">Intern</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${job.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${job.email}">${job.email}</a></li>
                        <li class="list-group-item">School: ${job.school}</li>
                    </ul>
                </div>
            </div>
        `;
        cardArr.push(internCard)
    }
    data.forEach(function(employee){
        if (employee.getRole()==="Manager") {
            managerTemplate(employee)
        }else if (employee.getRole()==="Engineer") {
            engineerTemplate(employee)
    }else {
        internTemplate(employee)
    }})
    return cardArr.join("");
}
function templates(array) {
    return `
    <!DOCTYPE html >
        <html lang="en">

            <head>
                <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                                integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
                                <link rel="stylesheet" href="./style.css">
                                    <title>My Team</title>
</head>

                                <body>
                                    <header class="row justify-content-center">
                                        <h1 class="col-2 align-self-center text-light">My Team</h1>
                                    </header>
                                    <div class="row card-deck mx-auto">
                                        ${employeeTemplate(array)}
                                    </div>
                                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                                        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                                        crossorigin="anonymous"></script>
                                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
                                        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
                                        crossorigin="anonymous"></script>
                                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
                                        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
                                        crossorigin="anonymous"></script>
                                </body>

</html>
`;
}

module.exports = templates