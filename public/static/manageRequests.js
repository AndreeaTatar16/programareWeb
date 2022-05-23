$(document).ready(function () {
    $.get(
        "http://localhost:8026/tasks/",
        {},
        function (data, succes) {
            showTable(data);
            update(data);
            }
    );
});

//functie care creeaza tabelul folosind arborele DOM
function showTable(data) {
    console.log(data);
    let thEnd = "</th>";
    let td = "<td class='col'>";
    let tdEnd = "</td>";
    let thRow = '<th scope="row">';
    let tr = "<tr id ='rowTab'>";
    let trEnd = "</tr>";
    let but = '<button type="button"  method="put" data-id="';
    let butEnd = '" class="btn btn-primary editBut" data-bs-toggle="modal" data-bs-target="#exampleModal">Editeaza task</button>';
    var id = 0;
    var link = '<a className="btn btn-primary" href="/';
    var linkBut = '" role="button">Vizualizeaza task</a>';

    //generez tabelul cu datele din baza de date
    $("#tBody ").empty();
    data.forEach((item) => {
        $("#tBody ").append(
            tr +
            thRow +
            id++ +
            thEnd +
            td +
            item.titlu +
            tdEnd +
            td +
            item.week +
            tdEnd +
            td +
            item.continut +
            tdEnd +
            td +
            item.status +
            tdEnd +
            td+
            but+ item._id+butEnd+
            tdEnd+
            td+
            link+ item._id+linkBut+
            tdEnd+
            trEnd
        );
    });
}
// function showImage(data) {
//     $(document).ready(function () {
//         $(".viewTask").click(function () {
//             let itemId = $(this).attr("data-id");
//             $.post("http://192.168.37.37/~stud26/03/tema.png")
//         });
//     });
// }

//functia update imi updateaza inserarea cu in momentul apasarii butonului editBut
function update(data){
    $(".editBut").on("click",function (){
        let itemId = $(this).attr("data-id");
        $("#exampleModal").modal('show');   //se afiseaza apoi modalul
        //let increment = 0;
        $("#submitBut").on("click",function (){   //in momentul apasarii butonului, se apeleaza functia
            const change = $("#exampleFormControlTextarea1").val(); //preiau datele de la textarea
            const selectChange = $("#selectId option:selected").text();   //si de la status
            const urlChange = $("#floatingTextarea").val();
            $.ajax({   //fac un PUT pentru a face update la continut
                type: 'PUT',
                url: '/tasks/' + itemId,
                data: {continut: change, status: selectChange, url: urlChange}
            }).done(function (response) {
                console.log(response);
                window.location.replace('http://localhost:8026');
            }).fail(function (response) {
                console.log("Oops not working");
            });
        });
    });
};

