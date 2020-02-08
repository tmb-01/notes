/*var tasks = [];

function showAddTask() {
    document.getElementById("add-task").classList.toggle("d-none")
}

function addTask() {
    var taskName = document.getElementById("task-name").value;
    document.getElementById("task-name").value = "";
    if (taskName!== ""){
        var newTask = {
            taskName: taskName,
            subTasks: []
        };

    tasks.push(newTask);
    drawTasks();

    }
}


function addSubTask(taskIndex) {
    var subTaskName = document.getElementById("subtask-name" +taskIndex).value;
    document.getElementById("subtask-name" +taskIndex).value = "";

    if (subTaskName!==""){
        tasks[taskIndex].subTasks.push(subTaskName);
        console.log(tasks);
        drawTasks()
    }
}


function drawTasks() {
    var content = '';
    tasks.forEach((value, index ) => {
        var subTaskContent = "";

        volue.subTasks.forEach(value1 => {
            subTaskContent+=
                "<div class='alert alert-primary'>"+ value1 +"</div>";
        });
        content +=
            "<div class='col-md-4'>" +
            "<div class='card'>" +
            "<div class='card-header'>" +
            "<h4>" + value.taskName + "</h4>" +
            "</div>" +
            "<div class='card-body' >"+ subTaskContent +"</div>" +
            "<div class='card-footer'>" +
            "<textarea  id='subtask-name"+ index +"' class='form-control'></textarea>" +
            "<button type='button' class='btn btn-success' onclick=addSubTask("+index+")>Add subtask</button>" +
            "</div>" +
            "<div class='delete' onclick='deleteTask("+index+")'>&times;</div>"
            "</div>" +
            "</div>"
    });
    document.getElementById('content').innerHTML=content;
}
*/

// tasks.forEach((value) => {
//     content +=
//         "<div class='col-md-4'>" +
//         "<div class='card'>" +
//         "<div class='card-header'>" +
//         "<h4>" + value + "</h4>" +
//         "</div>" +
//         "<div class='card-body'></div>" +
//         "<div class='card-footer'>" +
//         "<textarea id='subtaskName' class='form-control'></textarea>" +
//         "<button type='button' class='btn btn-success'>Add subtask</button>" +
//         "</div>" +
//         "</div>"+
//         "</div>"
// })


var tasks = [];

var count = 0;

function showAddTask() {
    count++;

    if (count % 2 == 0) {
        document.getElementById("on-off").innerText = "Show"
    } else {
        document.getElementById("on-off").innerText = "Hide"
    }
    document.getElementById('add-task').classList.toggle('d-none');
}

function addTask() {
    var taskName = document.getElementById('task-name').value;
    document.getElementById('task-name').value = "";
    if (taskName !== "") {
        var newTask = {
            taskName: taskName,
            subTasks: []
        };

        tasks.push(newTask);
        drawTasks();
    }
}

function addSubTask(taskIndex) {
    var subTaskName = document.getElementById('subtask-name' + taskIndex).value;
    document.getElementById('subtask-name' + taskIndex).value = "";

    if (subTaskName !== "") {
        tasks[taskIndex].subTasks.push(subTaskName);
        console.log(tasks);
        drawTasks();
    }
}

var tasksValue = -1;

function drawTasks() {
    var content = "";

    tasks.forEach((value, index) => {
        var subTaskContent = "";

        value.subTasks.forEach((value1, index1) => {
            subTaskContent +=
                "<div><div class='alert alert-primary' id='sub-task-content" + index1 + index + "' onclick='editSubTaskContent(" + index1 + "," + index + ")'>" + value1 + "</div><div class='deleted' onclick='deleteSubTask("+ index1 + "," + index+")'>&times;</div>" +
                "" +
                "</div>";
        });
        content +=
            "<div class='col-md-4 mb-3'>" +
            "<div class='card'>" +
            "<div class='card-header' onclick='editTaskName(" + index + ")'>" +
            "<h4 id='task-name-edit'>" + tasks[index].taskName + "</h4>" +
            "</div>" +
            "<div class='card-body'>" + subTaskContent + "</div>" +
            "<div class='card-footer'>" +
            "<textarea  id='subtask-name" + index + "' class='form-control'></textarea>" +
            "<button type='button' class='btn btn-success mt-3 float-right' onclick='addSubTask(" + index + ")'>Add subtask</button>" +
            "</div>" +
            "<div class='deleted' onclick='deleteTask(" + index + ")'>&times;</div>" +
            "</div>" +
            "</div>";
        tasksValue = index;
    });
    document.getElementById('content').innerHTML = content;
}

function deleteTask(taskIndex) {
    tasks.splice(taskIndex, 1);
    drawTasks()
};
function deleteSubTask(index1, index){
    // tasks[index].subTasks.splice(value1, 1);
    tasks[index].subTasks.splice(index1,1);
    drawTasks()
}
var globalValueSubTaskContent = -1;
function editSubTaskContent( index1, index) {
    var valueSubTaskContent = document.getElementById("sub-task-content" + index1 + index).innerText;
    var editTaskContent =
        '<div class="card border border-danger">'+
            '<div class="card-header bg-danger"><b class="text-white">Edit selected task</b></div>'+
            '<div class="card-body">'+
                '<textarea class="form-control" placeholder="Enter task description" id="edit-task-name"></textarea>'+
                '<button type="button" class="btn btn-success mt-3 float-right" onclick="editTask(' + index1 +',' + index + ')">Edit</button>'+
            '</div>'+
        '</div>';
    document.getElementById("edit-task").innerHTML = editTaskContent;
    document.getElementById("edit-task-name").value = valueSubTaskContent;
console.log(valueSubTaskContent)
}

function editTask(index1, index) {
    var valueEditedTask = document.getElementById("edit-task-name").value;
    tasks[index].subTasks.splice(index1,1,valueEditedTask);
    document.getElementById("edit-task-name").value = "";
    document.getElementById("edit-task").innerHTML = "";
    drawTasks()

}

function editTaskName(index){
    var taskNameEdit = tasks[index].taskName;
    var editTaskNameContent =
        '<div class="card border border-danger" id="edit-card">'+
        '<div class="card-header bg-danger"><b class="text-white">Edit selected task name</b></div>'+
        '<div class="card-body">'+
        '<textarea class="form-control" placeholder="Enter task description" id="edit-task-name-header">'+ taskNameEdit +'</textarea>'+
        '<button type="button" class="btn btn-success mt-3 float-right" onclick="editedTaskName(' + index + ')">Edit Name</button>'+
        '</div>'+
        '</div>';
    document.getElementById("edit-task").innerHTML = editTaskNameContent;
}
function editedTaskName(index){
    var valueEditedTaskName = document.getElementById("edit-task-name-header").value;
    tasks[index].taskName = valueEditedTaskName;
    document.getElementById("edit-task-name-header").value = "";
    document.getElementById("edit-task").innerHTML = "";
    drawTasks();
    console.log(valueEditedTaskName,index)

}


console.log(tasks);