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
        this.tr = document.createElement("TR");
        this.p_container = document.createElement("P");
        this.p_container.innerHTML = this.value;
        this.btn_delete = document.createElement("div");
        this.btn_delete.innerHTML = "&#215;";
        this.btn_delete.class = "delete";
        this.btn_delete.addEventListener('click', function () {
            this.deleted = true;
            all_inputs = all_inputs.filter(function (element) { return !(element.deleted); });
            clearTable();
            drawTable(all_inputs);
        }.bind(this));
        this.click_count = 0;
        this.btn_complete = document.createElement("input");
        this.btn_complete.type = "checkbox";
        this.btn_complete.class = "completed";
        this.btn_complete.addEventListener('click', function () {  /*this event handler should be toggle, if you uncheck the button, the completed status changes to false*/
            if (this.click_count===0) {
                this.completed = true;
                this.p_container.style.textDecoration = "line-through";
                this.p_container.style.color = "grey";
                this.click_count = 1;
            }
            else {
                this.completed = false;
                this.p_container.style.textDecoration = "none";
                this.p_container.style.color = "black";
                this.click_count = 0;
            }

            
        }.bind(this))
    };



    var table = document.getElementById("saved_todos");
    var tbody = document.getElementsByTagName('tbody')[0];
    var all_inputs = [];
    var completed = [];
    var active = [];


    function addTableRow(item) {
        var tr = table.insertRow(0);
        var cell = tr.insertCell(0);
        cell.appendChild(item.btn_complete);
        cell.appendChild(item.p_container);
        cell.appendChild(item.btn_delete);
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
        }
    };
    function showCompleted() {
        completed = Array.prototype.slice.call(all_inputs).filter(function (element) {
            return element.completed;
        });
        clearTable();
        if (completed.length !== 0) {
            table = drawTable(completed);
        }
    };

    function showActive() {
        active = Array.prototype.slice.call(all_inputs).filter(function (element) {
            return (!element.completed) && (!element.deleted);
        });
        if (active.length !== 0) {
            clearTable();
            table = drawTable(active);
        }
    };
    function showAll() {
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

};





