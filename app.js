window.onload = function () {
    /* menu */
    var openMe = Array.prototype.slice.call(document.getElementsByClassName("open"));
    var count = 0;
    openMe.forEach(function (item) {
        item.addEventListener('click', function () {
            if (count === 0) {
                item.lastElementChild.style.display = "block";
                count = 1;
            }
            else {
                item.lastElementChild.style.display = "none";
                count = 0;
            }
        });
    });



    /*todo list*/
    function Item(value) {
        this.value = value;
        this.completed = false;
        this.deleted = false;
    };

    var table = document.getElementById("saved_todos");
    var tbody = document.getElementsByTagName('tbody')[0];
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.class = "completed";
    var btn_delete = document.createElement("div");
    btn_delete.innerHTML = "&#215;";
    btn_delete.class = "delete";
    var all_inputs = [];
    var completed = [];
    var active = [];
    var delete_buttons = [];
    var complete_buttons = [];

    function addTableRow(item) {
        var item_value = document.createElement("P");
        item_value.innerHTML = item.value;
        var tr = table.insertRow(0);
        var cell = tr.insertCell(0);
        cell.appendChild(checkbox.cloneNode());
        cell.appendChild(item_value);
        cell.data = item;
        cell.appendChild(btn_delete.cloneNode(true));
        return tr;


    };
    var i;
    function drawTable(collection) {
        for (i = 0; i < collection.length; i++) {
            addTableRow(collection[i]);
        }
        return table;
    };

    function clearTable() {
        var length = tbody.childElementCount;


        for (i = 0; i < length ; i++) {
            table.deleteRow(0);
        }
    }

    function addNewtodo() {

        var input_value = document.getElementById("data").value;
        if (input_value) {
            var item = new Item(input_value);
            all_inputs.unshift(item);

            var new_row = addTableRow(item);
            var delete_button = new_row.lastChild.lastChild;
            delete_button.addEventListener('click', function () {
                delete_button.parentNode.data.deleted = true;
                all_inputs = all_inputs.filter(function (element) { return !(element.deleted); });
                clearTable();
                drawTable(all_inputs);
            });
            delete_buttons.unshift(delete_button);
            var complete_button = new_row.firstChild.firstChild;
            complete_button.addEventListener('click', function () {

                complete_button.parentNode.data.completed = true;
                complete_button.nextSibling.style.textDecoration = "line-through";
                complete_button.nextSibling.style.color = "grey";
            })
        }
    };
    function showCompleted() {


        completed = Array.prototype.slice.call(all_inputs).filter(function (element) {
            return element.completed;
        });
        if (completed.length !== 0) {
            clearTable();
            table = drawTable(completed);
        }


    };

    function showActive() {


        active = Array.prototype.slice.call(all_inputs).filter(function (element) {
            return (!element.completed) &&(!element.deleted);
        });
        if (active.length !== 0) {
            clearTable();
            table = drawTable(active);
        }


    };
    function showAll(){
        clearTable();
        table = drawTable(all_inputs);
    };


    document.getElementById("add").addEventListener('click', addNewtodo);

    document.getElementById("completed").addEventListener('click', showCompleted);

    document.getElementById("active").addEventListener('click', showActive);

    document.getElementById("all").addEventListener('click', showAll);

    /*show todo*/
    var todo_section = document.getElementById("todo");
    var todo_toggle = document.getElementById("toggle");
    var count_todo = 0;
    todo_toggle.addEventListener('click', function () {
        if (count_todo === 0) {
            todo_section.style.right = "-1%";
            count_todo = 1;
        }
        else {
            todo_section.style.right = "-27%";
            count_todo = 0;
        }
    });

    /*contact us*/

    var btn_contact = document.getElementById("btn_contact");
    var form_count = 0;
    btn_contact.addEventListener('click', function () {
        var form = document.querySelector('#contact form');
        form.style.display = "flex";


    });
    /*button animation*/
    var buttons = document.getElementsByTagName("button");
    for (var k = 0; k < buttons.length; k++) {
        buttons[k].addEventListener("mouseenter", function () {
            this.classList.add("animate", "flipInX");
        });
        buttons[k].addEventListener("mouseout", function () {
            this.classList.remove("animate", "flipInX");
        });


    }

    //var link = document.createElement("link");
    //link.href = "otherStyle.css";
    //link.rel = "stylesheet";
    //link.type = "text/css";
    //document.head.appendChild(link);
};



