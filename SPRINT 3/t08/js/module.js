class LinkedList {
    constructor(array){
        console.log("List Creating from: " + array);
        this.list = null;
        this.size = 0;
        let list_ptr = this.list;
        for (var el of array) {
            if(list_ptr != null){
                list_ptr.next = new Node(el);
                list_ptr = list_ptr.next;
            }
            else{
                this.list = new Node(el);
                list_ptr = this.list;
            }
            this.size++;
            console.log(`New data: ${this.list.data}\tsize: ${this.size}`);
        }
        console.log("List Created");
        console.log(`list: ${this.list.data}`);
    }
    add(value){
        if(this.list != null){
            let list_ptr = this.list;
            while(list_ptr.next != null)
                list_ptr = list_ptr.next;
            list_ptr.next = new Node(value);
        }
        else
            this.list = new Node(value);
        this.size++;
    }
    remove(value){
        console.log("start removing");
        let list_ptr = this.list;
        let prev = null;
        while(list_ptr != null){
            if(list_ptr.data == value){
                console.log();
                if(prev != null)
                    prev.next = list_ptr.next;
                else
                    this.list = list_ptr.next;
                this.size--;
                return true;
            }
            prev = list_ptr;
            list_ptr = list_ptr.next;
        }
        return false;
    }
    contains(value){
        let list_ptr = this.list;
        while(list_ptr != null){
            if(list_ptr.data == value){
                return true;
            }
            list_ptr = list_ptr.next;
        }
        return false;
    }
    *[Symbol.iterator](){
        let list_ptr = this.list;
        let prev = null;
        while(list_ptr != null){
            prev = list_ptr;
            list_ptr = list_ptr.next;
            yield prev.data;
        }
    }
    clear(){
        this.list = null;
        this.size = 0;
    }
    count(){
        return this.size;
        /*let list_ptr = this.list;
        let elNumb = 0;
        while(list_ptr != null){
            list_ptr = list_ptr.next;
            elNumb++;
        }
        return elNumb;*/
    }
    log(){
        let list_ptr = this.list;
        let string_list = "";
        while(list_ptr != null){
            string_list += list_ptr.data;
            if(list_ptr.next != null)
                string_list += ", ";
            list_ptr = list_ptr.next;
        }
        console.log(string_list);
    }
}
function Node(data){
    this.data = data;
    this.next = null;
}
function createLinkedList(arr){
    return new LinkedList(arr);
}
export {LinkedList, Node, createLinkedList};
