<?php

/*
    Create a linked list item class called LLItem, and a linked list class called LList.
    Properties of LLItem include:
        • data
        • next - reference to the next element or null
    Methods of LList(implementIteratorAggregate) include:
        • getFirst()
        • getLast()
        • add(value)- creates a new LLItem with given value and appends it to the list
        • addArr(array)- appends all values (as LLItems) of the given array to the list
        • remove(value)- deletes the first element that equals the given value
        • removeAll(value)- deletes all elements that are equal to the given value
        • contains(value)- checks whether a value is present in the LList
        • clear()- clears LList
        • count()- gets number of items in the LList
        • toString()- prints all element values, separated by a ","
        • getIterator()- returns an iterator for element values (implement Iterator)
*/  
    class LLIterator implements Iterator{
        private $head = null;
        private $item = null;
        private $key = 0;
        public function __construct($item){
            $this->head = $item;
            $this->item = $item;
        }

        public function next(){
            $this->key++;
            $this->item = $this->item->next;
            return $this->item;
        }

        public function rewind()
        {
            //echo "rewinding\n";
            //reset($this->item);
            $this->key = 0;
            $this->item = $this->head;
        }
  
        public function current()
        {
            return $this->item->data;
        }
    
        public function key() 
        {
            return $this->key;
        }
    
        public function valid()
        {
            return $this->item != null;;
        }
    }
    class LLItem {
        public function __construct($data, $next){
            $this->data = $data;
            $this->next = $next;
        }
        public function getData(){
            return $this->data;
        }
        public function getNext(){
            return $this->next;
        }
        public function setData($newData){
            $this->data = $newData;
        }
        public function setNext($next){
            $this->next = $next;
        }
        public function __toString()
        {
            return (string)$this->data;
        }
    }
    class LList implements IteratorAggregate {
        public function __construct(){
            $this->item = null;
        }

        public function add($value)
        {
            if($this->item == null){
                $this->item = new LLItem($value, null);
            }
            else {
                $ptr = $this->item->next;
                while($ptr->next != null){
                    $ptr = $ptr->next;
                }
                $ptr->next = new LLItem($value, null);
            }
        }

        public function addArr($value)
        {
            $ptr = $this->item;
            $prev = null;
            if($this->item != null) {
               // echo "-we have something-\n";
                $prev = $ptr;
                $ptr = $this->item->next;
                while($ptr != null){
                    $ptr = $ptr->next;
                   // echo "-go to the end-\n";
                }
            }
            //echo "-We are in the end of linked list-\n";
            //echo " - ptr: $ptr - ";
            //echo "- prev_data = $prev->data, prev_next = $prev->next";
            $start = 0;
            if($this->item == null){
                $this->item = new LLItem($value[0], null);
                $prev = $this->item;
                $start++;
            }
            for($i = 0 + $start; $i < count($value); $i++){
               // echo " -iteration #$i- ";
               // echo " - 0check : " . ($prev->next == $ptr) . " - ";

                $ptr = new LLItem($value[$i], null);
                $prev->next = $ptr;
                $prev = $ptr;
                $ptr = $ptr->next;
               // echo "\n -prev_data = $prev->data- \n";
            }
        }

        public function toString()
        {
            $line = "";
            $ptr = $this->item;
            while($ptr != null){
                //echo "-transform to str-\n";
                $line .= "$ptr->data";
                if($ptr->next != null){
                    $line .= ", ";
                }
                $ptr = $ptr->next;
                //echo " -  - cur ptr: $ptr->data - - ";
            }
            $line .= "\n";
            return $line;
        }

        public function removeAll($value){
            $ptr = $this->item;
            $prev = null;
            while($ptr){
                if($ptr->data == $value){
                    if($prev == null){
                        $this->item = $ptr->next;
                    }
                    else{
                        $prev->next = $ptr->next;
                    }
                }
                $prev = $ptr;
                $ptr = $ptr->next;
            }
        }

        public function contains($value){
            $ptr = $this->item;
            while($ptr){
                if($ptr->data == $value){
                    return true;
                }
                $ptr = $ptr->next;
            }
            return false;
        }

        public function getIterator(){
            return new LLIterator($this->item);
        }

        public function clear(){
            $this->item = null;
        }

        public function getFirst(){
            return $this->item;
        }

        public function getLast(){
            $ptr = $this->item;
            while($ptr != null && $ptr->next != null){
                $ptr = $ptr->next;
            }
            return $ptr;
        }
    }


    /*
        Task 00 (test.php)
        Task name: LinkedList
    */
    /*function autoload($pClassName){include(__DIR__. "/". $pClassName. ".php");}
    spl_autoload_register("autoload");*/
 /*   $list = new LList();
    
    echo $list->toString() . "\n";
    $list->addArr([100, 1, 2, 3, 100, 4, 5, 100]);
    $list->add(10);
    $list->removeAll(100);
    echo $list->contains(10) . "\n"; // 1
    echo $list->toString() . "\n"; // 1, 2, 3, 4, 5, 10
    $sum = 0;
    $iter= $list->getIterator();
    foreach($iter as $v)
        $sum+= $v;
    echo "$sum\n"; // 25

    echo "Last: " . $list->getLast() . "\n";
    echo "First: " . $list->getFirst(). "\n";
    
    $list->clear();
    echo $list->toString() . "\n";
*/    
