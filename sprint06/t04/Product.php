<?php 
    class Product{
        private string $productName;
        private int $kilocalories;
        public function __construct(string $productName, int $kilocalories){
            $this->productName = $productName;
            $this->kilocalories = $kilocalories;
        }
        public function getName(){
            return $this->name;
        }
        public function getKcal(){
            return $this->kilocalories;
        }
    }