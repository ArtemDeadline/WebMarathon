<?php
    class Ant implements Serializable{
        private string $name;
        private string $role_in_army;
        private string $date_of_entry;//(into the army)
        private int $number_of_fights;
        private int $number_of_legs;

        public function __construct(string $name, string $role_in_army, string $date_of_entry, int $number_of_fights, int $number_of_legs){
            $this->name = $name;
            $this->role_in_army = $role_in_army;
            $this->date_of_entry = $date_of_entry;
            $this->number_of_fights = $number_of_fights;
            $this->number_of_legs = $number_of_legs;
        }

        public function serialize()
        {
            return serialize(["name" => $this->name,
                "role_in_army" => $this->role_in_army,
                "date_of_entry" => (string)$this->date_of_entry,
                "number_of_fights" => (string)$this->number_of_fights,
                "number_of_legs" => (string)$this->number_of_legs,
            ]);
        }

        public function unserialize($serialized)
        {
            list(
                "name" => $this->name,
                "role_in_army" => $this->role_in_army,
                "date_of_entry" => $this->date_of_entry,
                "number_of_fights" => $this->number_of_fights,
                "number_of_legs" => $this->number_of_legs
            ) = unserialize($serialized);
        }

        // при echo хоч не хоч воно все одно буде викликати цю функцію
        // за допомогою serialize ми й таквивели всі поля класу без toString
        public function __toString()
        {
            return "name: ".$this->name.
            "\nrole_in_army: ".$this->role_in_army.
            "\ndate_of_entry: ".$this->date_of_entry.
            "\nnumber_of_fights: ".$this->number_of_fights.
            "\nnumber_of_legs: ".$this->number_of_legs."\n";
        }

    }

    $ant= new Ant("Anthony", "sergeant", "2015-07-16", 1, 4);
    $serialized= serialize($ant);
    echo $serialized. "\n\n";
    $unserialized = unserialize($serialized);
    echo $unserialized;
