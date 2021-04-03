<?php 
    require_once("Product.php");

    class Ingestion {
        private int $id;
        private array $meal_type; // array (breakfast, lunch, dinner)
        private int $day_of_diet;
        private array $products;

        public function __construct($meal_type, $id)
        {
            $this->meal_type = $meal_type;
            $this->id = $id;
        }

        public function setProduct($product){
            $this->products[] = $product;
        }

        public function getProducts(){
            return $this->products;
        }

        public function get_from_fridge($product): void //- if it's junk food - throw the exception
        {

        }
    }